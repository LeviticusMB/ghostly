(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(121)),p={id:"ghostly_runtime.view",title:"Interface: View<Params>",sidebar_label:"View",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/ghostly_runtime.view",id:"api/interfaces/ghostly_runtime.view",isDocsHomePage:!1,title:"Interface: View<Params>",description:"Interface: View",source:"@site/docs/api/interfaces/ghostly_runtime.view.md",slug:"/api/interfaces/ghostly_runtime.view",permalink:"/ghostly/docs/api/interfaces/ghostly_runtime.view",editUrl:null,version:"current",sidebar_label:"View",sidebar:"someSidebar",previous:{title:"Interface: Template",permalink:"/ghostly/docs/api/interfaces/ghostly_runtime.template"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"contentType",id:"contenttype",children:[]},{value:"dpi",id:"dpi",children:[]},{value:"htmlTransforms",id:"htmltransforms",children:[]},{value:"paperSize",id:"papersize",children:[]},{value:"params",id:"params",children:[]},{value:"viewportSize",id:"viewportsize",children:[]}]}],c={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-viewparams"},"Interface: View<Params",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime"},"ghostly-runtime"),".View"),Object(i.b)("p",null,"A view of the model that the template should render."),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Params")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"unknown"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"View")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.attachmentinfo"},Object(i.b)("em",{parentName:"a"},"AttachmentInfo"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"contenttype"},"contentType"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"contentType"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"The view's type (for instance, ",Object(i.b)("inlineCode",{parentName:"p"},"text/html")," or ",Object(i.b)("inlineCode",{parentName:"p"},"application/pdf"),")."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L73"},"ghostly-runtime/src/types.ts:73")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dpi"},"dpi"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dpi"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"The resolution be used when rendering the view. Used for viewport size calculations."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L79"},"ghostly-runtime/src/types.ts:79")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"htmltransforms"},"htmlTransforms"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"htmlTransforms"),": ",Object(i.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#htmltransform"},Object(i.b)("em",{parentName:"a"},"HTMLTransform")),"[]"),Object(i.b)("p",null,"An array of transformations to apply when producing HTML results. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"[ sanitize, minimize ]"),"."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L88"},"ghostly-runtime/src/types.ts:88")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"papersize"},"paperSize"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"paperSize"),": ",Object(i.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#papersize"},Object(i.b)("em",{parentName:"a"},"PaperSize"))),Object(i.b)("p",null,"The paper size to be used when rendering documents."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L82"},"ghostly-runtime/src/types.ts:82")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"params"},"params"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"params"),": Params"),Object(i.b)("p",null,"Optional view params."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L76"},"ghostly-runtime/src/types.ts:76")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewportsize"},"viewportSize"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"viewportSize"),": ",Object(i.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime#viewportsize"},Object(i.b)("em",{parentName:"a"},"ViewportSize"))),Object(i.b)("p",null,"The size of the viewport to use, in pixels. Will be calculated from ",Object(i.b)("inlineCode",{parentName:"p"},"dpi")," and ",Object(i.b)("inlineCode",{parentName:"p"},"paperSize"),", if not provided."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/bce2829/ghostly-runtime/src/types.ts#L85"},"ghostly-runtime/src/types.ts:85")))}b.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,h=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?a.a.createElement(h,o(o({ref:t},c),{},{components:r})):a.a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);