declare module 'daemonize-process' {
    import { SpawnOptions } from 'child_process';

    function daemonizeProcess(opts?: SpawnOptions): void
    export = daemonizeProcess;
}
