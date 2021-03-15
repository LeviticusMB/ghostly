(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=(n(0),n(121));const a={id:"ghostly_runtime.modelinfo",title:"Interface: ModelInfo",sidebar_label:"ModelInfo",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/ghostly_runtime.modelinfo",id:"api/interfaces/ghostly_runtime.modelinfo",isDocsHomePage:!1,title:"Interface: ModelInfo",description:"Interface: ModelInfo",source:"@site/docs/api/interfaces/ghostly_runtime.modelinfo.md",slug:"/api/interfaces/ghostly_runtime.modelinfo",permalink:"/ghostly/docs/api/interfaces/ghostly_runtime.modelinfo",editUrl:null,version:"current",sidebar_label:"ModelInfo",sidebar:"someSidebar",previous:{title:"Interface: Model",permalink:"/ghostly/docs/api/interfaces/ghostly_runtime.model"},next:{title:"Interface: PreviewAttachment",permalink:"/ghostly/docs/api/interfaces/ghostly_runtime.previewattachment"}},c=[{value:"Properties",id:"properties",children:[{value:"attachments",id:"attachments",children:[]},{value:"description",id:"description",children:[]},{value:"name",id:"name",children:[]}]}],l={toc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-modelinfo"},"Interface: ModelInfo"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/ghostly/docs/api/modules/ghostly_runtime"},"ghostly-runtime"),".ModelInfo"),Object(o.b)("p",null,"Metadata about a ",Object(o.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.model"},"Model"),", optionally returned by ",Object(o.b)("a",{parentName:"p",href:"/ghostly/docs/api/classes/ghostly_runtime.templatedriver#ghostlyinit"},"ghostlyInit"),"."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"attachments"},"attachments"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"attachments"),": ",Object(o.b)("a",{parentName:"p",href:"/ghostly/docs/api/interfaces/ghostly_runtime.attachmentinfo"},Object(o.b)("em",{parentName:"a"},"AttachmentInfo")),"<unknown",">","[]"),Object(o.b)("p",null,"Information about attachments that the template can produce."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/1daccf0/ghostly-runtime/src/types.ts#L67"},"ghostly-runtime/src/types.ts:67")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"description"},"description"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"description"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"An optional description of the model."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/1daccf0/ghostly-runtime/src/types.ts#L64"},"ghostly-runtime/src/types.ts:64")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,"The name of the model (",Object(o.b)("em",{parentName:"p"},"excluding")," file extension). Will be used to construct file names."),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Divine-Software/ghostly/blob/1daccf0/ghostly-runtime/src/types.ts#L61"},"ghostly-runtime/src/types.ts:61")))}s.isMDXComponent=!0}}]);