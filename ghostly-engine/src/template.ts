import { parseGhostlyPacket, sendGhostlyMessage, TemplateDriver } from '@divine/ghostly-runtime';
import { AttachmentInfo, GhostlyError, GhostlyRequest, GhostlyTypes, OnGhostlyEvent, PaperSize, View, ViewportSize } from '@divine/ghostly-runtime/build/src/types'; // Avoid DOM types leaks
import { ContentType } from '@divine/headers';
import { Parser } from '@divine/uri';
import { promises as fs } from 'fs';
import { minify } from 'html-minifier';
import { Browser, Page } from 'playwright-chromium';
import packageJSON from '../package.json';
import { EngineConfig, RenderResult, TemplateEngine } from './engine';

const domPurifyJS = fs.readFile(require.resolve('dompurify/dist/purify.min.js'), { encoding: 'utf8' });

const ERROR = Symbol('Error');

interface CachedPage extends Page {
    [ERROR]?: GhostlyError;
}

export interface Worker {
    id:        number;
    load:      number;
    browser:   Browser;
    pageCache: (CachedPage | undefined)[];
}

interface GhostlyProxyWindow extends Window {
    sendGhostlyMessage: typeof sendGhostlyMessage;
    DOMPurify: { sanitize(dirty: string, options: { WHOLE_DOCUMENT: boolean }): string; }
}

interface GhostlyWindow extends Window {
    __ghostly_message_proxy__: GhostlyProxyWindow
}

export class TemplateEngineImpl implements TemplateEngine {
    private _url:  string;
    private _hash: string;

    constructor(private _config: EngineConfig, private _workers: (Worker | undefined)[], url: string) {
        this._url  = url.replace(/#.*/, '');
        this._hash = url.replace(/[^#]*#?/, '');
    }

    private get log(): Console {
        return this._config.logger;
    }

    async render(document: string | object, contentType: string, format: string, params: unknown, onGhostlyEvent?: OnGhostlyEvent): Promise<Buffer> {
        return (await this.renderViews(document, contentType, [{ contentType: format, params: params }], false, onGhostlyEvent))[0].data;
    }

    async renderViews(document: string | object, contentType: string, views: View[], renderAttachments: boolean, onGhostlyEvent?: OnGhostlyEvent): Promise<RenderResult[]> {
        const worker = this._selectWorker();
        const result = [] as RenderResult[];
        const events = [] as object[];

        // Return events if custom handler not provider
        onGhostlyEvent ??= (event) => events.push(event);

        try {
            ++worker.load;

            // Find a cached template ...
            let page = worker.pageCache.find((page) => page?.url().replace(/#.*/, '') === this._url);

            try {
                const driver = new class extends TemplateDriver {
                    constructor(template: string, private timeout: number) {
                        super(template);
                    }

                    protected async sendMessage(request: GhostlyRequest): Promise<GhostlyTypes> {
                        const response = await ((window: GhostlyWindow) => page!.evaluate(([request, timeout]) => {
                            try {
                                const events: object[] = []; // Batch all events since I don't know how to propagate them in real-time

                                return window.__ghostly_message_proxy__.sendGhostlyMessage(window, request, (data) => events.push(data), timeout)
                                    .then((packet) => ({ packet, events}));
                            }
                            catch (err) {
                                throw new Error(`Ghostly message proxy not found or it's failing: ${err}`);
                            }
                        }, [request, this.timeout] as const))(null!);

                        response.events.forEach((event) => onGhostlyEvent?.(event));
                        return parseGhostlyPacket(request, response.packet);
                    }
                }(this._url, this._config.timeout);

                if (page) {
                    this.log.info(`${this._url}: Using cached template.`);
                    worker.pageCache = worker.pageCache.filter((p) => p !== page);
                }
                else {
                    // ... or create a new one
                    this.log.info(`${this._url}: Creating new template.`);
                    page = await this._createPage(worker);
                    await driver.ghostlyLoad(this._url);
                }

                try {
                    await page.evaluate((hash) => window.location.hash = hash, this._hash);

                    // Send document/model to template
                    this.log.info(`${this._url}: Initializing ${contentType} model.`);
                    const info = await driver.ghostlyInit({ document, contentType });

                    const attachments: RenderResult[] = [];

                    // Render all attachments first (matching PreviewDriver behaviour)
                    if (renderAttachments) {
                        for (const ai of info?.attachments ?? []) {
                            attachments.push({
                                type:        'attachment',
                                contentType: ai.contentType,
                                name:        ai.name,
                                description: ai.description,
                                data:        await this._renderViewOrAttachment(ai, ai, page, driver),
                            });
                        }
                    }

                    // Render all views
                    for (const view of deleteUndefined(views) /* Ensure undefined values do not overwrite defaults */) {
                        result.push({
                            type:        'view',
                            name:        info?.name,
                            description: info?.description,
                            contentType: view.contentType,
                            data:        await this._renderViewOrAttachment(view, null, page, driver),
                        });
                    }

                    // Add attchments to result array (after the views)
                    result.push(...attachments);

                    // Add events to result, if no onGhostlyEvent handler was provided
                    result.push(...events.map((event) => ({ type: 'event' as const, 'contentType': 'application/json', data: Buffer.from(JSON.stringify(event))})));
                }
                finally {
                    // Silently ignore ghostlyEnd errors, since only v2 templates implement this method
                    await driver.ghostlyEnd().catch(() => null);
                }

                delete page[ERROR];

                // Return template to page cache if there were no errors
                if (this._config.pageCache) {
                    this.log.info(`${this._url}: Returning template to page cache.`);
                    worker.pageCache.unshift(page);
                    page = worker.pageCache.length > this._config.pageCache ? worker.pageCache.pop() : undefined;
                }
            }
            catch (err) {
                this.log.error(`${this._url}: renderViews failed: ${page?.[ERROR] ?? err}`);
                throw page?.[ERROR] ?? err;
            }
            finally {
                if (page && this._config.pageCache) {
                    this.log.info(`${this._url}: Evicting template ${page.url().replace(/#.*/, '')} from page cache.`);
                }

                await page?.close().catch((err) => this.log.error(err));
            }
        }
        finally {
            --worker.load;
        }

        return result;
    }

    private async _renderViewOrAttachment(view: View, info: AttachmentInfo | null, page: Page, driver: TemplateDriver): Promise<Buffer> {
        const ct = ContentType.create(view.contentType);
        const dpi = view.dpi || 96;
        const ps: Required<PaperSize> = { format: 'A4', orientation: 'portrait', ...view.paperSize };
        const dim = this._paperDimensions(ct.type === 'application/pdf' ? ps : view.paperSize, dpi)
        const vps: Required<ViewportSize> = { ...dim, ...view.viewportSize };
        const clip = view.viewportSize?.width || view.viewportSize?.height ? { x: 0, y: 0, ...vps } : undefined;

        this.log.info(`${this._url}: Rendering ${info ? `attachment '${info.name}'` : 'view'} as ${ct.type} (${vps.width}x${vps.height} @ ${dpi} DPI).`);
        await page.setViewportSize(vps);

        let data = info
            ? await driver.ghostlyFetch(info)
            : await driver.ghostlyRender(view);

        if (data instanceof Buffer) {
            return data;
        }
        else if (data instanceof Uint8Array) {
            return Buffer.from(data.buffer);
        }
        else if (data === null || data === undefined) {
            switch (ct.type) {
                case 'text/html': {
                    let content = await page.content();

                    for (const transform of view.htmlTransforms ?? ['sanitize', 'minimize']) {
                        this.log.info(`${this._url}: Applying HTML transform '${transform}'.`);

                        if (transform === 'sanitize') {
                            const doctype = /^<!DOCTYPE[^[>]*(\[[^\]]*\])?[^>]*>/i.exec(content)?.[0] ?? ''; // Preserve DOCTYPE
                            content = doctype + await ((window: GhostlyWindow) => page.evaluate((dirty) => {
                                return window.__ghostly_message_proxy__.DOMPurify.sanitize(dirty, { WHOLE_DOCUMENT: true });
                            }, content))(null!);
                        }
                        else if (transform === 'minimize') {
                            content = minify(content, {
                                collapseBooleanAttributes: true,
                                collapseWhitespace: true,
                                conservativeCollapse: true,
                                decodeEntities: true,
                                minifyCSS: true,
                                preserveLineBreaks: true,
                                removeAttributeQuotes: true,
                                removeComments: true,
                                removeScriptTypeAttributes: true,
                                removeStyleLinkTypeAttributes: true,
                                sortAttributes: true,
                                sortClassName:  true,
                            });
                        } else {
                            throw new GhostlyError(`${this._url}: Unknown HTML transform '${transform}'`);
                        }
                    }

                    data = content;
                    break;
                }

                case 'text/plain':
                    data = await page.innerText('css=body');
                    break;

                case 'application/pdf':
                    return await page.pdf({
                        format:    ps.format,
                        landscape: ps.orientation === 'landscape',
                    });

                case 'image/jpeg':
                    return await page.screenshot({ fullPage: true, type: 'jpeg', clip });

                case 'image/png':
                    return await page.screenshot({ fullPage: true, type: 'png', clip });

                default:
                    throw info
                        ? new Error(`${this._url}: ghostlyFetch did not return a result for attachment ${JSON.stringify(info)}`)
                        : new Error(`${this._url}: ghostlyRender did not return a result for view ${JSON.stringify(view)}`)
            }
        }

        try {
            return (await Parser.serializeToBuffer(data, ct))[0];
        }
        catch (err) {
            throw info
                    ? new Error(`${this._url}: ghostlyFetch returned an unexpected object for attachment ${JSON.stringify(info)}: ${data} [${err.message}]`)
                    : new Error(`${this._url}: ghostlyRender returned an unexpected object for view ${JSON.stringify(view)}: ${data} [${err.message}]`)
        }
    }

    private _selectWorker(): Worker {
        let best: Worker | null = null;

        for (const worker of this._workers) {
            if (worker && (!best || worker.load < best.load)) {
                best = worker;
            }
        }

        if (!best) {
            throw new Error(`${this._url}: No workers alive`);
        }

        return best;
    }

    private _paperDimensions(paperSize: PaperSize | undefined, dpi: number): Required<ViewportSize> {
        if (!paperSize?.format) {
            return { width: 800, height: 600 };
        }

        let width, height;

        switch (paperSize.format) {
            case "A0":       width = 841; height = 1189; break;
            case "A1":       width = 594; height = 841;  break;
            case "A2":       width = 420; height = 594;  break;
            case "A3":       width = 297; height = 420;  break;
            case "A4":       width = 210; height = 297;  break;
            case "A5":       width = 148; height = 210;  break;
            case "A6":       width = 105; height = 148;  break;
            case "Letter":   width = 216; height = 279;  break;
            case "Legal":    width = 216; height = 356;  break;
            case "Tabloid":  width = 432; height = 279;  break;
            case "Ledger":   width = 279; height = 432;  break;

            default:
                throw new GhostlyError(`Invalid paper format: ${paperSize.format}`);
        }

        if (paperSize.orientation === 'landscape') {
            [ width, height ] = [ height, width ];
        }

        // Convert from mm to pixels
        width  = Math.round(width  / 25.4 * dpi)
        height = Math.round(height / 25.4 * dpi)

        return { width, height };
    }

    private async _createPage(worker: Worker): Promise<Page> {
        let main: CachedPage = null!;

        const context = await worker.browser.newContext({
            userAgent: `Ghostly/${packageJSON.version} ${browserVersion(worker.browser)}`,
        });

        context.on('page', (page) => {
            /* async */ page.route('**/*', (route, req) => {
                this.log.debug(`${this._url}: Loading ${req.url()}`);

                if (this._config.templatePattern.test(req.url())) {
                    route.continue();
                }
                else {
                    this.log.error(`${this._url}: Template accessed a forbidden URL: ${req.url()} did not match ${this._config.templatePattern}`);
                    route.abort('addressunreachable');
                }
            });

            page.on('pageerror', (error) => {
                this.log.error(`${this._url}: [pageerror]: ${error}`);

                // Close page so request terminates directly
                main[ERROR] = new GhostlyError(`Unhandled error in template ${this._url}`, error);
                /* async */ page.close()
            });

            page.on('dialog', (dialog) => {
                this.log.warn(`${this._url}: [${dialog.type()}] ${dialog.message()}`)
                dialog.dismiss();
            });

            page.on('console', async (msg) => {
                const method = (this.log as any)[msg.type()] as Console['log'];
                const params = await Promise.all(msg.args().map((arg) => arg.jsonValue().catch(() => arg.toString())));

                (typeof method === 'function' ? method : this.log.warn).call(this.log, `${this._url}: [console]`, ...params);
            });
        });

        main = await context.newPage();

        try {
            // Always specify fragment, because otherwise `window.location.hash = ''` will trigger an event
            await main.goto(`${this._url}#${this._hash}`, { waitUntil: 'load' });

            // Create the Ghostly message proxy
            await (async (window: GhostlyWindow) => main.evaluate(([sendGhostlyMessage, domPurifyJS]) => {
                try {
                    window.__ghostly_message_proxy__ = window.open('', '', 'width=0,height=0') as GhostlyProxyWindow;
                    window.__ghostly_message_proxy__.document.open().write(`<script type='text/javascript'>
                        ${domPurifyJS}
                        ${sendGhostlyMessage}
                    </script>`);
                    window.__ghostly_message_proxy__.document.close();
                }
                catch (_ignored) {
                    throw new Error(`Failed to create Ghostly message proxy!`);
                }
            }, [sendGhostlyMessage.toString(), await domPurifyJS]))(null!);
        }
        catch (err) {
            throw main[ERROR] ?? err;
        }

        return main;
    }
}

export function browserVersion(browser: Browser): string {
    return `${browser.constructor.name}/${browser.version()}`;
}

export function deleteUndefined<T extends object>(obj: T): T {
    for (const prop in obj) {
        if (obj[prop] === undefined) {
            delete obj[prop];
        }
        else if (typeof obj[prop] === 'object') {
            deleteUndefined(obj[prop] as unknown as object);
        }
    }

    return obj;
}
