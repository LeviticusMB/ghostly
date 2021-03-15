(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=o(n),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||b;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,s=new Array(b);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<b;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(121)),s={id:"ghostly_engine.engine",title:"Class: Engine",sidebar_label:"Engine",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/ghostly_engine.engine",id:"api/classes/ghostly_engine.engine",isDocsHomePage:!1,title:"Class: Engine",description:"Class: Engine",source:"@site/docs/api/classes/ghostly_engine.engine.md",slug:"/api/classes/ghostly_engine.engine",permalink:"/ghostly/docs/api/classes/ghostly_engine.engine",editUrl:null,version:"current",sidebar_label:"Engine",sidebar:"someSidebar",previous:{title:"Namespace: ghostly",permalink:"/ghostly/docs/api/modules/ghostly_runtime.ghostly"},next:{title:"Class: GhostlyError",permalink:"/ghostly/docs/api/classes/ghostly_engine.ghostlyerror"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"httpRequestHandler",id:"httprequesthandler",children:[]},{value:"start",id:"start",children:[]},{value:"stop",id:"stop",children:[]},{value:"template",id:"template",children:[]}]}],p={toc:l};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-engine"},"Class: Engine"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_engine"},"ghostly-engine"),".Engine"),Object(b.b)("p",null,"The Ghostly Engine API."),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Engine"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.engineconfig"},Object(b.b)("em",{parentName:"a"},"EngineConfig")),">","): ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine"))),Object(b.b)("p",null,"Constructs a Ghostly Engine instance."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/interfaces/ghostly_engine.engineconfig"},Object(b.b)("em",{parentName:"a"},"EngineConfig")),">"),Object(b.b)("td",{parentName:"tr",align:"left"},"Optional Ghostly Engine configuration.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-engine/src/engine.ts#L147"},"ghostly-engine/src/engine.ts:147")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"httprequesthandler"},"httpRequestHandler"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"httpRequestHandler"),"(",Object(b.b)("inlineCode",{parentName:"p"},"request"),": ",Object(b.b)("em",{parentName:"p"},"IncomingMessage"),", ",Object(b.b)("inlineCode",{parentName:"p"},"response?"),": ",Object(b.b)("em",{parentName:"p"},"ServerResponse"),", ",Object(b.b)("inlineCode",{parentName:"p"},"pathName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.wsresponse"},Object(b.b)("em",{parentName:"a"},"WSResponse")),">"),Object(b.b)("p",null,"Handle an incoming HTTP request and serialize the result accordingly."),Object(b.b)("p",null,"This method can either be used directly as a Node.js HTTP ",Object(b.b)("inlineCode",{parentName:"p"},"RequestListener"),", or as a utility method. If\n",Object(b.b)("inlineCode",{parentName:"p"},"response")," is specified, the result will be serialized as ",Object(b.b)("inlineCode",{parentName:"p"},"Buffer"),"/",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_engine#wsrenderresponse"},"WSRenderResponse"),"/",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wserrorresponse"},"WSErrorResponse"),",\ndepending on the request and its outcome. In either case, the raw ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.wsresponse"},"WSResponse")," will be returned as well."),Object(b.b)("p",null,"The Web Service/HTTP interface supports three different processing modes:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"GET")," requests. The following query parameters should be specified:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"template"),":    URL of template to render."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"view"),":        Media type of view to render."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"params"),":      Optional view params as (URL-encoded) JSON."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"document"),":    The model to render, as a string."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"contentType"),": The model's media type.")),Object(b.b)("p",{parentName:"li"},"The response will be the rendered view.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"POST")," requests that includes a ",Object(b.b)("inlineCode",{parentName:"p"},"template")," query parameter:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"template"),":    URL of template to render."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"view"),":        Media type of view to render."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"params"),":      Optional view params as (URL-encoded) JSON.")),Object(b.b)("p",{parentName:"li"},"The request body should be the model. The response will be the rendered view.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"POST")," request with no query parameters."),Object(b.b)("p",{parentName:"li"},"The request body should be a JSON-encoded ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wsrenderrequest"},"WSRenderRequest")," message, and the response(s) will be returned\nas ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_engine#wsrenderresponse"},"WSRenderResponse"),", i.e. a ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wsrenderresult"},"WSRenderResult")," array, which can also include attachments and events\nemitted from the template."))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wsrenderrequest"},"WSRenderRequest")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_engine#wsrenderresponse"},"WSRenderResponse")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wsrenderresult"},"WSRenderResult")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.wserrorresponse"},"WSErrorResponse")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"request")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"IncomingMessage")),Object(b.b)("td",{parentName:"tr",align:"left"},"The Node.js HTTP request to handle.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"response?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"ServerResponse")),Object(b.b)("td",{parentName:"tr",align:"left"},"If specified, the response will be serialized and written to this ",Object(b.b)("inlineCode",{parentName:"td"},"ServerResponse")," object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"pathName?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},"The URL path to match. Defaults to '/'.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.wsresponse"},Object(b.b)("em",{parentName:"a"},"WSResponse")),">"),Object(b.b)("p",null,"A ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.wsresponse"},"WSResponse")," representation of the result."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-engine/src/engine.ts#L263"},"ghostly-engine/src/engine.ts:263")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"start"},"start"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"start"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine")),">"),Object(b.b)("p",null,"Launch the configured number of browser instances and get ready for work."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-engine/src/engine.ts#L178"},"ghostly-engine/src/engine.ts:178")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stop"},"stop"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"stop"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine")),">"),Object(b.b)("p",null,"Close all running browser instances and clean up internal resources."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_engine.engine"},Object(b.b)("em",{parentName:"a"},"Engine")),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-engine/src/engine.ts#L191"},"ghostly-engine/src/engine.ts:191")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"template"},"template"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"template"),"(",Object(b.b)("inlineCode",{parentName:"p"},"uri"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.templateengine"},Object(b.b)("em",{parentName:"a"},"TemplateEngine"))),Object(b.b)("p",null,"Create a ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.templateengine"},"TemplateEngine")," instance using the specified Ghostly template URL."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"uri")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},"The URL of the Ghostly template to use.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_engine.templateengine"},Object(b.b)("em",{parentName:"a"},"TemplateEngine"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-engine/src/engine.ts#L212"},"ghostly-engine/src/engine.ts:212")))}o.isMDXComponent=!0}}]);