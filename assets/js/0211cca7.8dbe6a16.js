(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=o(a),h=r,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||b;return a?n.a.createElement(d,s(s({ref:t},i),{},{components:a})):n.a.createElement(d,s({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<b;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(121)),l={id:"ghostly_runtime.templatedriver",title:"Class: TemplateDriver",sidebar_label:"TemplateDriver",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/ghostly_runtime.templatedriver",id:"api/classes/ghostly_runtime.templatedriver",isDocsHomePage:!1,title:"Class: TemplateDriver",description:"Class: TemplateDriver",source:"@site/docs/api/classes/ghostly_runtime.templatedriver.md",slug:"/api/classes/ghostly_runtime.templatedriver",permalink:"/ghostly/docs/api/classes/ghostly_runtime.templatedriver",editUrl:null,version:"current",sidebar_label:"TemplateDriver",sidebar:"someSidebar",previous:{title:"Class: PreviewDriver",permalink:"/ghostly/docs/api/classes/ghostly_runtime.previewdriver"},next:{title:"Interface: EngineConfig",permalink:"/ghostly/docs/api/interfaces/ghostly_engine.engineconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"_template",id:"_template",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ghostlyEnd",id:"ghostlyend",children:[]},{value:"ghostlyFetch",id:"ghostlyfetch",children:[]},{value:"ghostlyInit",id:"ghostlyinit",children:[]},{value:"ghostlyLoad",id:"ghostlyload",children:[]},{value:"ghostlyPreview",id:"ghostlypreview",children:[]},{value:"ghostlyRender",id:"ghostlyrender",children:[]},{value:"sendMessage",id:"sendmessage",children:[]}]}],i={toc:p};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-templatedriver"},"Class: TemplateDriver"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime"},"ghostly-runtime"),".TemplateDriver"),Object(b.b)("p",null,"Helper class to invoke the defined protocol methods using a user-defined ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.templatedriver#sendmessage"},"sendMessage")," implementation."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"TemplateDriver")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.previewdriver"},Object(b.b)("em",{parentName:"a"},"PreviewDriver"))))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},Object(b.b)("em",{parentName:"a"},"Template")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new TemplateDriver"),"(): ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.templatedriver"},Object(b.b)("em",{parentName:"a"},"TemplateDriver"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.templatedriver"},Object(b.b)("em",{parentName:"a"},"TemplateDriver"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"_template"},"_","template"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"_","template"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L5"},"ghostly-runtime/src/driver.ts:5")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"ghostlyend"},"ghostlyEnd"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyEnd"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"This optional method is invoked when all processing of the model is done. May be used to purge caches and other\nresources."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L54"},"ghostly-runtime/src/driver.ts:54")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ghostlyfetch"},"ghostlyFetch"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyFetch"),"(",Object(b.b)("inlineCode",{parentName:"p"},"info"),": ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.attachmentinfo"},Object(b.b)("em",{parentName:"a"},"AttachmentInfo")),"<unknown",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"Asks the template to render an attachment. This call should not return or resolve until the attachment is stable\nand fully rendered."),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"info")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/interfaces/ghostly_runtime.attachmentinfo"},Object(b.b)("em",{parentName:"a"},"AttachmentInfo")),"<unknown",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L39"},"ghostly-runtime/src/driver.ts:39")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ghostlyinit"},"ghostlyInit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyInit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.model"},Object(b.b)("em",{parentName:"a"},"Model")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<undefined ","|"," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.modelinfo"},Object(b.b)("em",{parentName:"a"},"ModelInfo")),">"),Object(b.b)("p",null,"Used to supply the model (data) that the template should render from."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/interfaces/ghostly_runtime.model"},Object(b.b)("em",{parentName:"a"},"Model")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<undefined ","|"," ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.modelinfo"},Object(b.b)("em",{parentName:"a"},"ModelInfo")),">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L12"},"ghostly-runtime/src/driver.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ghostlyload"},"ghostlyLoad"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyLoad"),"(",Object(b.b)("inlineCode",{parentName:"p"},"template"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"This optional method will be invoked once the template has been loaded by the browser, or each time the fragment\npart (hash) changes in a cached template."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"template")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L7"},"ghostly-runtime/src/driver.ts:7")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ghostlypreview"},"ghostlyPreview"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyPreview"),"(",Object(b.b)("inlineCode",{parentName:"p"},"command?"),": ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.previewcommand"},Object(b.b)("em",{parentName:"a"},"PreviewCommand")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.previewresult"},Object(b.b)("em",{parentName:"a"},"PreviewResult")),">"),Object(b.b)("p",null,"This method is used by the ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.previewdriver"},"PreviewDriver")," to print and to find out the preferred size of the IFrame."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"command")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/interfaces/ghostly_runtime.previewcommand"},Object(b.b)("em",{parentName:"a"},"PreviewCommand")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.previewresult"},Object(b.b)("em",{parentName:"a"},"PreviewResult")),">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L43"},"ghostly-runtime/src/driver.ts:43")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ghostlyrender"},"ghostlyRender"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ghostlyRender"),"(",Object(b.b)("inlineCode",{parentName:"p"},"view"),": ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.view"},Object(b.b)("em",{parentName:"a"},"View")),"<unknown",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"Asks the template to render a specific view. This call should not return or resolve until the view is stable and\nfully rendered."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"view")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/interfaces/ghostly_runtime.view"},Object(b.b)("em",{parentName:"a"},"View")),"<unknown",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.template"},"Template")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L35"},"ghostly-runtime/src/driver.ts:35")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sendmessage"},"sendMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"sendMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"request"),": ",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlyrequest"},Object(b.b)("em",{parentName:"a"},"GhostlyRequest")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"Abstract method that must be provided by subclasses. Should send the request to the template, wait for response\nand then unpack and return the result."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"request")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlyrequest"},Object(b.b)("em",{parentName:"a"},"GhostlyRequest"))),Object(b.b)("td",{parentName:"tr",align:"left"},"The raw request to send.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#ghostlytypes"},Object(b.b)("em",{parentName:"a"},"GhostlyTypes")),">"),Object(b.b)("p",null,"The unpacked response."),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/driver.ts#L65"},"ghostly-runtime/src/driver.ts:65")))}o.isMDXComponent=!0}}]);