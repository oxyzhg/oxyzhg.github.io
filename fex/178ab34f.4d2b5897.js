(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),l=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),p=function(e){var n=l.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return l.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,m=d["".concat(r,".").concat(u)]||d[u]||s[u]||a;return t?l.a.createElement(m,c(c({ref:n},o),{},{components:t})):l.a.createElement(m,c({ref:n},o))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var o=2;o<a;o++)r[o]=t[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},156:function(e,n,t){"use strict";function i(e){var n,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(l&&(l+=" "),l+=t);else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}n.a=function(){for(var e,n,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(l&&(l+=" "),l+=n);return l}},158:function(e,n,t){"use strict";var i=t(0),l=t.n(i),a=t(156),r=t(55),c=t.n(r),b=c.a["table-of-contents__link--inline"];function o(e){var n=e.toc,t=e.isChild;return n.length?l.a.createElement("ul",{className:t?"":"table-of-contents"},n.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:b,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(o,{isChild:!0,toc:e.children}))}))):null}n.a=function(e){var n=e.toc;return l.a.createElement("div",{className:Object(a.a)(c.a.tableOfContentsInline)},l.a.createElement(o,{toc:n}))}},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return d}));var i=t(3),l=t(7),a=(t(0),t(155)),r=t(158),c={id:"css",title:"CSS \u76f8\u5173\u9898\u76ee\u603b\u7ed3"},b={unversionedId:"interview/css",id:"interview/css",isDocsHomePage:!1,title:"CSS \u76f8\u5173\u9898\u76ee\u603b\u7ed3",description:"\u4ecb\u7ecd\u4e00\u4e0b CSS \u76d2\u5b50\u6a21\u578b\uff1f",source:"@site/docs/interview/css.md",slug:"/interview/css",permalink:"/fex/docs/interview/css",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/css.md",version:"current",sidebar:"interview",previous:{title:"HTML \u76f8\u5173\u95ee\u9898",permalink:"/fex/docs/interview/html"},next:{title:"Vue \u76f8\u5173\u9898\u76ee\u603b\u7ed3",permalink:"/fex/docs/interview/vue"}},o=[{value:"\u4ecb\u7ecd\u4e00\u4e0b CSS \u76d2\u5b50\u6a21\u578b\uff1f",id:"\u4ecb\u7ecd\u4e00\u4e0b-css-\u76d2\u5b50\u6a21\u578b\uff1f",children:[]},{value:"CSS \u9009\u62e9\u7b26\u6709\u54ea\u4e9b\uff1f",id:"css-\u9009\u62e9\u7b26\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"CSS \u4f18\u5148\u7ea7\u5982\u4f55\u8ba1\u7b97\uff1f",id:"css-\u4f18\u5148\u7ea7\u5982\u4f55\u8ba1\u7b97\uff1f",children:[]},{value:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b\uff1f",id:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b\uff1f",children:[]},{value:"CSS \u4e2d\u54ea\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7ee7\u627f\uff1f",id:"css-\u4e2d\u54ea\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7ee7\u627f\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f BFC\uff1f",id:"\u4ec0\u4e48\u662f-bfc\uff1f",children:[]},{value:"\u8bf7\u89e3\u91ca\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u9700\u8981\u6e05\u9664\u6d6e\u52a8\uff1f\u6e05\u9664\u6d6e\u52a8\u7684\u65b9\u5f0f",id:"\u8bf7\u89e3\u91ca\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u9700\u8981\u6e05\u9664\u6d6e\u52a8\uff1f\u6e05\u9664\u6d6e\u52a8\u7684\u65b9\u5f0f",children:[]},{value:"\u6c34\u5e73\u3001\u5782\u76f4\u5c45\u4e2d\u65b9\u6848\u6709\u54ea\u4e9b\uff1f",id:"\u6c34\u5e73\u3001\u5782\u76f4\u5c45\u4e2d\u65b9\u6848\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5bbd\u5ea6\u81ea\u9002\u5e94\uff0c\u9ad8\u5ea6\u4e3a\u5bbd\u5ea6\u7684\u4e00\u534a\u7684\u77e9\u5f62\uff1f",id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5bbd\u5ea6\u81ea\u9002\u5e94\uff0c\u9ad8\u5ea6\u4e3a\u5bbd\u5ea6\u7684\u4e00\u534a\u7684\u77e9\u5f62\uff1f",children:[]},{value:"\u7528 CSS \u753b\u4e09\u89d2\u5f62\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",id:"\u7528-css-\u753b\u4e09\u89d2\u5f62\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",children:[]},{value:"\u5a92\u4f53\u67e5\u8be2\uff1f",id:"\u5a92\u4f53\u67e5\u8be2\uff1f",children:[]},{value:"\u7ecf\u5e38\u9047\u5230\u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u6709\u54ea\u4e9b\uff1f",id:"\u7ecf\u5e38\u9047\u5230\u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"\u4ec0\u4e48\u662f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff1f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",id:"\u4ec0\u4e48\u662f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff1f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",children:[]},{value:"\u600e\u4e48\u8ba9 Chrome \u652f\u6301\u5c0f\u4e8e 12px \u7684\u6587\u5b57\uff1f",id:"\u600e\u4e48\u8ba9-chrome-\u652f\u6301\u5c0f\u4e8e-12px-\u7684\u6587\u5b57\uff1f",children:[]},{value:"\u753b\u4e00\u6761 0.5px \u7684\u7ebf\uff1f",id:"\u753b\u4e00\u6761-05px-\u7684\u7ebf\uff1f",children:[]},{value:"\u5982\u4f55\u5b9e\u73b0\u5355\u884c/\u591a\u884c\u6587\u672c\u6ea2\u51fa\u7701\u7565\uff1f",id:"\u5982\u4f55\u5b9e\u73b0\u5355\u884c\u591a\u884c\u6587\u672c\u6ea2\u51fa\u7701\u7565\uff1f",children:[]},{value:"\u5982\u4f55\u5b9e\u73b0\u4e24\u5217\u5e03\u5c40\uff1f\u4e09\u680f\u5e03\u5c40\uff1f",id:"\u5982\u4f55\u5b9e\u73b0\u4e24\u5217\u5e03\u5c40\uff1f\u4e09\u680f\u5e03\u5c40\uff1f",children:[]},{value:"visibility \u548c display \u7684\u5dee\u522b\uff08\u8fd8\u6709 opacity\uff09",id:"visibility-\u548c-display-\u7684\u5dee\u522b\uff08\u8fd8\u6709-opacity\uff09",children:[]}],p={toc:o};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(r.a,{toc:o,mdxType:"TOCInline"}),Object(a.b)("h3",{id:"\u4ecb\u7ecd\u4e00\u4e0b-css-\u76d2\u5b50\u6a21\u578b\uff1f"},"\u4ecb\u7ecd\u4e00\u4e0b CSS \u76d2\u5b50\u6a21\u578b\uff1f"),Object(a.b)("p",null,"\u76d2\u6a21\u578b\u7531 content, padding, border, margin \u56db\u90e8\u5206\u7ec4\u6210\u3002"),Object(a.b)("p",null,"\u4e24\u79cd\u76d2\u6a21\u578b\u5206\u522b\u662f W3C \u6807\u51c6\u76d2\u6a21\u578b\uff08content-box\uff09\u3001IE \u76d2\u6a21\u578b\uff08border-box\uff09\uff0c\u5b83\u4eec\u7684\u533a\u522b\u5728\u4e8e width/height \u5bf9\u5e94\u7684\u8303\u56f4\u4e0d\u540c\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"W3C \u6807\u51c6\u76d2\u6a21\u578b\uff1a\u5c5e\u6027 width/height \u53ea\u5305\u542b content\uff0c\u4e0d\u5305\u542b padding+border\uff0c\u5373\u8bbe\u7f6e\u7684\u5bbd\u9ad8\u5c31\u662f\u5b9e\u9645\u53ef\u7528\u5c3a\u5bf8\u3002"),Object(a.b)("li",{parentName:"ul"},"IE \u76d2\u6a21\u578b\uff1a\u5c5e\u6027 width/height \u5305\u542b content+padding+border \u4e09\u90e8\u5206\uff0c\u9664\u53bb padding+border \u624d\u662f\u5143\u7d20\u5b9e\u9645\u53ef\u7528\u5c3a\u5bf8\u3002")),Object(a.b)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5143\u7d20\u7684 box-sizing \u5c5e\u6027\u6765\u6539\u53d8\u5143\u7d20\u7684\u76d2\u6a21\u578b\u3002"),Object(a.b)("h3",{id:"css-\u9009\u62e9\u7b26\u6709\u54ea\u4e9b\uff1f"},"CSS \u9009\u62e9\u7b26\u6709\u54ea\u4e9b\uff1f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ID \u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"#myid")),Object(a.b)("li",{parentName:"ul"},"\u7c7b\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},".myclassname")),Object(a.b)("li",{parentName:"ul"},"\u6807\u7b7e\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"div,h1,p")),Object(a.b)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"h1 p")),Object(a.b)("li",{parentName:"ul"},"\u76f8\u90bb\u540e\u4ee3\u9009\u62e9\u5668\uff08\u5b50\uff09\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"ul>li")),Object(a.b)("li",{parentName:"ul"},"\u5144\u5f1f\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"li~a")),Object(a.b)("li",{parentName:"ul"},"\u76f8\u90bb\u5144\u5f1f\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"li+a")),Object(a.b)("li",{parentName:"ul"},"\u5c5e\u6027\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},'a[rel="external"]')),Object(a.b)("li",{parentName:"ul"},"\u4f2a\u7c7b\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"a:hover,li:nth-child")),Object(a.b)("li",{parentName:"ul"},"\u4f2a\u5143\u7d20\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"::before,::after")),Object(a.b)("li",{parentName:"ul"},"\u901a\u914d\u7b26\u9009\u62e9\u5668 ",Object(a.b)("inlineCode",{parentName:"li"},"*"))),Object(a.b)("h3",{id:"css-\u4f18\u5148\u7ea7\u5982\u4f55\u8ba1\u7b97\uff1f"},"CSS \u4f18\u5148\u7ea7\u5982\u4f55\u8ba1\u7b97\uff1f"),Object(a.b)("p",null,"CSS \u7684\u4f18\u5148\u7ea7\u662f\u6839\u636e\u6837\u5f0f\u58f0\u660e\u7684\u7279\u6b8a\u6027\u503c\u6765\u5224\u65ad\u7684\u3002"),Object(a.b)("p",null,"\u9009\u62e9\u5668\u7684\u7279\u6b8a\u6027\u503c\u5206\u4e3a\u56db\u4e2a\u7b49\u7ea7\uff0c\u5982\u4e0b\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u884c\u5185\u6837\u5f0f (x,0,0,0)"),Object(a.b)("li",{parentName:"ol"},"ID \u9009\u62e9\u7b26 (0,x,0,0)"),Object(a.b)("li",{parentName:"ol"},"\u7c7b\u9009\u62e9\u7b26/\u5c5e\u6027\u9009\u62e9\u7b26/\u4f2a\u7c7b\u9009\u62e9\u7b26 (0,0,x,0)"),Object(a.b)("li",{parentName:"ol"},"\u5143\u7d20\u548c\u4f2a\u5143\u7d20\u9009\u62e9\u7b26 (0,0,0,x)")),Object(a.b)("p",null,"\u4f18\u5148\u7ea7\u8ba1\u7b97\u89c4\u5219\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u9996\u5148\u5224\u65ad\u6743\u91cd\uff0c\u58f0\u660e\u6743\u91cd\u7684\u4f18\u5148\u7ea7\u6700\u9ad8\u3002\u5982\u679c\u6743\u91cd\u76f8\u540c\uff0c\u5219\u6bd4\u8f83\u5339\u914d\u89c4\u5219\u7684\u7279\u6b8a\u6027\u3002"),Object(a.b)("li",{parentName:"ol"},"\u9009\u62e9\u5668\u7684\u7279\u6b8a\u6027\u503c\u5206\u4e3a 4 \u4e2a\u7b49\u7ea7\uff0c\u6bcf\u4e2a\u7b49\u7ea7\u7684\u521d\u59cb\u503c\u4e3a 0\uff0c\u6309\u9009\u62e9\u5668\u51fa\u73b0\u7684\u6b21\u6570\u76f8\u52a0\uff0c\u4f46\u4e0d\u53ef\u8fdb\u4f4d\u3002\u4ece\u5de6\u5411\u53f3\u9010\u7ea7\u5bf9\u6bd4\uff0c\u540c\u7ea7\u7279\u6b8a\u6027\u503c\u8d8a\u5927\u7684\u58f0\u660e\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002"),Object(a.b)("li",{parentName:"ol"},"\u5982\u679c\u4e24\u4e2a\u4f18\u5148\u7ea7\u76f8\u540c\uff0c\u5219\u540e\u51fa\u73b0\u7684\u4f18\u5148\u7ea7\u9ad8\u3002"),Object(a.b)("li",{parentName:"ol"},"\u7ee7\u627f\u6837\u5f0f\u4f18\u5148\u7ea7\u6700\u4f4e\uff0c\u901a\u914d\u7b26\u6837\u5f0f\u4f18\u5148\u7ea7\u9ad8\u4e8e\u7ee7\u627f\u6837\u5f0f\u3002")),Object(a.b)("h3",{id:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b\uff1f"},"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b\uff1f"),Object(a.b)("p",null,"CSS \u5f15\u5165\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u6982\u5ff5\u662f\u4e3a\u4e86",Object(a.b)("strong",{parentName:"p"},"\u683c\u5f0f\u5316\u6587\u6863\u6811\u4ee5\u5916\u7684\u4fe1\u606f"),"\u3002\u6bd4\u5982\uff0c\u4e00\u53e5\u8bdd\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\uff0c\u6216\u8005\u662f\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u3002"),Object(a.b)("p",null,"\u4f2a\u7c7b\u7528\u4e8e\u5f53\u5df2\u6709\u7684\u5143\u7d20\u5904\u4e8e\u67d0\u4e2a\u72b6\u6001\u65f6\uff0c\u4e3a\u5176\u6dfb\u52a0\u5bf9\u5e94\u7684\u6837\u5f0f\uff0c\u8fd9\u4e2a\u72b6\u6001\u662f\u6839\u636e\u7528\u6237\u884c\u4e3a\u800c\u52a8\u6001\u53d8\u5316\u7684\u3002\u6bd4\u5982\u8bf4\uff0c\u5f53\u7528\u6237\u60ac\u505c\u5728\u6307\u5b9a\u7684\u5143\u7d20\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},":hover")," \u6765\u63cf\u8ff0\u8fd9\u4e2a\u5143\u7d20\u7684\u72b6\u6001\u3002"),Object(a.b)("p",null,"\u4f2a\u5143\u7d20\u7528\u4e8e\u521b\u5efa\u4e00\u4e9b\u4e0d\u5728\u6587\u6863\u6811\u4e2d\u7684\u5143\u7d20\uff0c\u5e76\u4e3a\u5176\u6dfb\u52a0\u6837\u5f0f\u3002\u5b83\u4eec\u5141\u8bb8\u6211\u4eec\u4e3a\u5143\u7d20\u7684\u67d0\u4e9b\u90e8\u5206\u8bbe\u7f6e\u6837\u5f0f\u3002\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"::before")," \u6765\u5728\u4e00\u4e2a\u5143\u7d20\u524d\u589e\u52a0\u4e00\u4e9b\u6587\u672c\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u6587\u672c\u6dfb\u52a0\u6837\u5f0f\u3002\u867d\u7136\u7528\u6237\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u6587\u672c\uff0c\u4f46\u662f\u8fd9\u4e9b\u6587\u672c\u5b9e\u9645\u4e0a\u4e0d\u5728\u6587\u6863\u6811\u4e2d\u3002"),Object(a.b)("h3",{id:"css-\u4e2d\u54ea\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7ee7\u627f\uff1f"},"CSS \u4e2d\u54ea\u4e9b\u5c5e\u6027\u53ef\u4ee5\u7ee7\u627f\uff1f"),Object(a.b)("p",null,"\u5c5e\u6027\u7684\u53ef\u7ee7\u627f\u6027\u51b3\u5b9a\u4e86\u5f53\u672a\u8bbe\u7f6e\u503c\u65f6\u8be5\u5982\u4f55\u53d6\u503c\u3002"),Object(a.b)("p",null,"\u5f53\u5143\u7d20\u7684\u4e00\u4e2a\u7ee7\u627f\u5c5e\u6027\u6ca1\u6709\u6307\u5b9a\u503c\u65f6\uff0c\u5219\u53d6\u7236\u5143\u7d20\u7684\u540c\u5c5e\u6027\u7684\u8ba1\u7b97\u503c\u3002\u53ea\u6709\u6587\u6863\u6839\u5143\u7d20\u53d6\u8be5\u5c5e\u6027\u7684\u6982\u8ff0\u4e2d\u7ed9\u5b9a\u7684\u521d\u59cb\u503c\u3002\u5f53\u5143\u7d20\u7684\u4e00\u4e2a\u975e\u7ee7\u627f\u5c5e\u6027\u6ca1\u6709\u6307\u5b9a\u503c\u65f6\uff0c\u5219\u53d6\u5c5e\u6027\u7684\u521d\u59cb\u503c initialvalue\uff08\u9ed8\u8ba4\u503c\uff09\u3002"),Object(a.b)("p",null,"\u5e38\u89c1\u7684\u53ef\u7ee7\u627f\u5c5e\u6027\u6709\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u5b57\u4f53\u7cfb\u5217\u5c5e\u6027\uff1afont-family, font-weight, font-size, font-style, font-variant, font-stretch, font-size-adjust"),Object(a.b)("li",{parentName:"ol"},"\u6587\u672c\u7cfb\u5217\u5c5e\u6027\uff1atext-indent, text-align, text-shadow, line-height, word-spacing, letter-spacing, text-transform, text-direction, color"),Object(a.b)("li",{parentName:"ol"},"\u8868\u683c\u5e03\u5c40\u5c5e\u6027\uff1acaption-side, border-collapse, empty-cells"),Object(a.b)("li",{parentName:"ol"},"\u5217\u8868\u5c5e\u6027\uff1alist-style-type, list-style-image, list-style-position, list-style"),Object(a.b)("li",{parentName:"ol"},"\u5149\u6807\u5c5e\u6027\uff1acursor"),Object(a.b)("li",{parentName:"ol"},"\u53ef\u89c1\u6027\u5c5e\u6027\uff1avisibility")),Object(a.b)("p",null,"\u5f53\u4e00\u4e2a\u5c5e\u6027\u4e0d\u662f\u7ee7\u627f\u5c5e\u6027\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 inherit \u5173\u952e\u5b57\u663e\u5f0f\u5730\u6307\u5b9a\u7ee7\u627f\u6027\uff0c\u53ef\u7528\u4e8e\u4efb\u4f55\u7ee7\u627f\u6027/\u975e\u7ee7\u627f\u6027\u5c5e\u6027\u3002"),Object(a.b)("h3",{id:"\u4ec0\u4e48\u662f-bfc\uff1f"},"\u4ec0\u4e48\u662f BFC\uff1f"),Object(a.b)("p",null,"\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff08Block Formatting Context\uff0cBFC\uff09\u662f\u5e03\u5c40\u8fc7\u7a0b\u4e2d\u751f\u6210\u5757\u7ea7\u76d2\u5b50\u7684\u533a\u57df\uff0c\u4e5f\u662f\u6d6e\u52a8\u5143\u7d20\u4e0e\u5176\u4ed6\u5143\u7d20\u7684\u4ea4\u4e92\u9650\u5b9a\u533a\u57df\u3002\u5982\u679c\u4e00\u4e2a\u5143\u7d20\u7b26\u5408\u89e6\u53d1 BFC \u7684\u6761\u4ef6\uff0c\u5219 BFC \u5185\u7684\u5143\u7d20\u5e03\u5c40\u4e0d\u53d7\u5916\u90e8\u5f71\u54cd\u3002"),Object(a.b)("p",null,"\u89e6\u53d1 BFC \u7684\u6761\u4ef6\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6839\u5143\u7d20"),Object(a.b)("li",{parentName:"ul"},"\u6d6e\u52a8\u5143\u7d20"),Object(a.b)("li",{parentName:"ul"},"\u7edd\u5bf9\u5b9a\u4f4d\u5143\u7d20 position: absolute|fixed"),Object(a.b)("li",{parentName:"ul"},"\u975e\u5757\u7ea7\u76d2\u5b50\u7684\u5757\u7ea7\u5bb9\u5668 display: inline-block|flex|inline-flex|table-cell|table-caption"),Object(a.b)("li",{parentName:"ul"},"overflow\u2260visible")),Object(a.b)("p",null,"BFC \u7279\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"BFC \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5e03\u5c40\u73af\u5883\uff0c\u548c\u5176\u4ed6\u533a\u57df\u4e92\u4e0d\u5f71\u54cd\u3002"),Object(a.b)("li",{parentName:"ul"},"BFC \u533a\u57df\u4e0d\u4f1a\u548c\u6d6e\u52a8\u5143\u7d20\u91cd\u53e0\uff0c\u53ef\u6e05\u9664\u6d6e\u52a8\u3002"),Object(a.b)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u4e2a BFC \u5185\uff0c\u4f1a\u51fa\u73b0\u5782\u76f4\u65b9\u5411\u5916\u8fb9\u8ddd\u6298\u53e0\u73b0\u8c61\u3002"),Object(a.b)("li",{parentName:"ul"},"\u8ba1\u7b97 BFC \u9ad8\u5ea6\u65f6\u6d6e\u52a8\u5143\u7d20\u4e5f\u4f1a\u53c2\u4e0e\u8ba1\u7b97\uff0c\u53ef\u9632\u6b62\u9ad8\u5ea6\u584c\u9677\u3002")),Object(a.b)("h3",{id:"\u8bf7\u89e3\u91ca\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u9700\u8981\u6e05\u9664\u6d6e\u52a8\uff1f\u6e05\u9664\u6d6e\u52a8\u7684\u65b9\u5f0f"},"\u8bf7\u89e3\u91ca\u4e00\u4e0b\u4e3a\u4ec0\u4e48\u9700\u8981\u6e05\u9664\u6d6e\u52a8\uff1f\u6e05\u9664\u6d6e\u52a8\u7684\u65b9\u5f0f"),Object(a.b)("p",null,"\u6e05\u9664\u6d6e\u52a8\u662f\u4e3a\u4e86\u6e05\u9664\u4f7f\u7528\u6d6e\u52a8\u5143\u7d20\u4ea7\u751f\u7684\u5f71\u54cd\u3002\u6d6e\u52a8\u7684\u5143\u7d20\uff0c\u9ad8\u5ea6\u4f1a\u584c\u9677\uff0c\u800c\u9ad8\u5ea6\u7684\u584c\u9677\u4f7f\u540e\u9762\u7684\u5e03\u5c40\u4e0d\u80fd\u6b63\u5e38\u663e\u793a\u3002"),Object(a.b)("p",null,"\u6e05\u9664\u6d6e\u52a8\u7684\u65b9\u5f0f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528 clear \u5c5e\u6027\u6e05\u9664\u6d6e\u52a8"),Object(a.b)("li",{parentName:"ul"},"\u521b\u5efa BFC \u6e05\u9664\u6d6e\u52a8")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},".clear::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n")),Object(a.b)("h3",{id:"\u6c34\u5e73\u3001\u5782\u76f4\u5c45\u4e2d\u65b9\u6848\u6709\u54ea\u4e9b\uff1f"},"\u6c34\u5e73\u3001\u5782\u76f4\u5c45\u4e2d\u65b9\u6848\u6709\u54ea\u4e9b\uff1f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* \u5b9a\u5bbd */\n.outer {\n  width: 100px;\n  margin: 0 auto;\n}\n\n/* \u884c\u5185\u5143\u7d20 */\n.outer {\n  text-align: center;\n}\n.inner {\n  display: inline-block;\n}\n\n/* \u5b9a\u4f4d+\u5b9a\u5bbd */\n.outer {\n  position: relative;\n}\n.inner {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}\n\n/* \u5b9a\u4f4d+\u5b9a\u5bbd */\n.outer {\n  posotion: relative;\n}\n.inner {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 50%;\n  left: 50%;\n  margin: -50px -50%;\n}\n\n/* \u5b9a\u4f4d */\n.outer {\n  posotion: relative;\n}\n.inner {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Flex */\n.outer {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Grid */\n.outer {\n  display: grid;\n  grid-auto-flow: row dense;\n  justify-content: center;\n  align-items: center;\n}\n")),Object(a.b)("p",null,"\u66f4\u591a\u8d44\u6599\u53ef\u4ee5\u53c2\u8003\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"},"CSS Grid \u7f51\u683c\u5e03\u5c40\u6559\u7a0b"))),Object(a.b)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5bbd\u5ea6\u81ea\u9002\u5e94\uff0c\u9ad8\u5ea6\u4e3a\u5bbd\u5ea6\u7684\u4e00\u534a\u7684\u77e9\u5f62\uff1f"},"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u5bbd\u5ea6\u81ea\u9002\u5e94\uff0c\u9ad8\u5ea6\u4e3a\u5bbd\u5ea6\u7684\u4e00\u534a\u7684\u77e9\u5f62\uff1f"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"padding-top/bottom"),", ",Object(a.b)("inlineCode",{parentName:"p"},"margin-top/bottom")," \u90fd\u662f\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u7684\u5bbd\u5ea6\u6765\u8ba1\u7b97\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u53ea\u9700\u8981\u8bbe\u7f6e\u5b50\u5143\u7d20 ",Object(a.b)("inlineCode",{parentName:"p"},"padding-bottom")," \u662f\u7236\u5143\u7d20\u5bbd\u5ea6\u7684\u4e00\u534a\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5bbd\u9ad8\u7b49\u6bd4\u7f29\u653e\u3002\u6700\u540e ",Object(a.b)("inlineCode",{parentName:"p"},".box")," \u5143\u7d20\u7528\u6765\u63a7\u5236\u6240\u6709\u5185\u5bb9\u5143\u7d20\u7684\u5bbd\u9ad8\uff0c\u5426\u5219\u8bbe\u7f6e\u9ad8\u5ea6\u53ef\u80fd\u4e0d\u751f\u6548\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<style>\n  .outer {\n    width: 400px; /* \u63a7\u5236\u5bbd\u5ea6 */\n  }\n  .inner {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 50%; /* \u63a7\u5236\u5bbd\u9ad8\u6bd4\u4f8b */\n  }\n  .box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: aquamarine;\n  }\n</style>\n<div class="outer">\n  <div class="inner">\n    <div class="box">Hello</div>\n  </div>\n</div>\n')),Object(a.b)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u8bbe\u7f6e\u5176\u4ed6\u7b49\u6bd4\u4f8b\u7f29\u653e\u7684\u77e9\u5f62\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u539f\u7406\u5b9e\u73b0\u3002"),Object(a.b)("h3",{id:"\u7528-css-\u753b\u4e09\u89d2\u5f62\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"},"\u7528 CSS \u753b\u4e09\u89d2\u5f62\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"),Object(a.b)("p",null,"\u91c7\u7528\u7684\u662f\u76f8\u90bb\u8fb9\u6846\u8fde\u63a5\u5904\u7684\u5747\u5206\u539f\u7406\u3002\u5c06\u5bbd\u9ad8\u7f6e\u4e3a 0\uff0c\u901a\u8fc7 border-color \u628a\u5176\u4f59\u4e09\u8fb9\u9690\u85cf\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u4e09\u89d2\u5f62\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5404\u8fb9\u6846\u7684\u5c3a\u5bf8\uff0c\u5f97\u5230\u4e0d\u540c\u5f62\u72b6\u7684\u4e09\u89d2\u5f62\uff0c\u53ef\u80fd\u4f1a\u6d89\u53ca\u4e09\u89d2\u51fd\u6570\u8ba1\u7b97\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},".box {\n  width: 0;\n  height: 0;\n  border-width: 10px 10px 0;\n  border-style: solid;\n  border-color: blue transparent transparent;\n}\n")),Object(a.b)("h3",{id:"\u5a92\u4f53\u67e5\u8be2\uff1f"},"\u5a92\u4f53\u67e5\u8be2\uff1f"),Object(a.b)("h3",{id:"\u7ecf\u5e38\u9047\u5230\u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u6709\u54ea\u4e9b\uff1f"},"\u7ecf\u5e38\u9047\u5230\u7684\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u6709\u54ea\u4e9b\uff1f"),Object(a.b)("h3",{id:"\u4ec0\u4e48\u662f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff1f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"},"\u4ec0\u4e48\u662f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\uff1f\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"),Object(a.b)("h3",{id:"\u600e\u4e48\u8ba9-chrome-\u652f\u6301\u5c0f\u4e8e-12px-\u7684\u6587\u5b57\uff1f"},"\u600e\u4e48\u8ba9 Chrome \u652f\u6301\u5c0f\u4e8e 12px \u7684\u6587\u5b57\uff1f"),Object(a.b)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"transform:scale(0.5)")," \u5c5e\u6027\u6536\u7f29\u5143\u7d20\u5927\u5c0f\uff0c\u6ce8\u610f\u8be5\u5c5e\u6027\u6536\u7f29\u7684\u662f\u6574\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\uff0c\u5982\u679c\u662f\u5185\u8054\u5143\u7d20\uff0c\u5fc5\u987b\u8981\u5c06\u5185\u8054\u5143\u7d20\u8f6c\u6362\u6210\u5757\u7ea7\u5143\u7d20\u3002"),Object(a.b)("p",null,"\u4e0d\u5f71\u54cd\u5f00\u53d1\u548c\u6d4f\u89c8\u4f53\u9a8c\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u56fe\u7247\u6587\u5b57\u3002"),Object(a.b)("h3",{id:"\u753b\u4e00\u6761-05px-\u7684\u7ebf\uff1f"},"\u753b\u4e00\u6761 0.5px \u7684\u7ebf\uff1f"),Object(a.b)("p",null,"0.5px \u76f8\u5f53\u4e8e\u9ad8\u6e05\u5c4f\u7269\u7406\u50cf\u7d20\u7684 1px\u3002\u8fd9\u6837\u7684\u76ee\u7684\u662f\u5728\u9ad8\u6e05\u5c4f\u4e0a\u770b\u8d77\u6765\u4f1a\u66f4\u7ec6\u4e00\u70b9\uff0c\u6548\u679c\u4f1a\u66f4\u597d\u4e00\u70b9\uff0c\u4f8b\u5982\u66f4\u7ec6\u7684\u5206\u9694\u7ebf\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* scale */\n.line {\n  height: 1px;\n  background: #000;\n  transform: scaleY(0.5);\n  transform-origin: 50% 100%;\n}\n\n/* gradient */\n.line {\n  height: 1px;\n  background: linear-gradient(0deg, #fff, #000);\n}\n\n/* shadow */\n.line {\n  height: 1px;\n  box-shadow: 0 0.5px 0 #000;\n}\n\n/* svg+base64 */\n.line {\n  height: 1px;\n  background: url(\"data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1px'><line x1='0' y1='0' x2='100%' y2='0' stroke='#000'></line></svg>\");\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzFweCc+PGxpbmUgeDE9JzAnIHkxPScwJyB4Mj0nMTAwJScgeTI9JzAnIHN0cm9rZT0nIzAwMCc+PC9saW5lPjwvc3ZnPg==');\n}\n\n/* viewport */\n<meta name=\"viewport\" content=\"width=device-width,initial-sacle=0.5\">\n")),Object(a.b)("p",null,"\u66f4\u591a\u8d44\u6599\u53ef\u4ee5\u53c2\u8003\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://juejin.cn/post/6844903582370643975"},"\u600e\u4e48\u753b\u4e00\u6761 0.5px \u7684\u8fb9")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.rrfed.com/html/half-px.html"},"half-px"))),Object(a.b)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u5355\u884c\u591a\u884c\u6587\u672c\u6ea2\u51fa\u7701\u7565\uff1f"},"\u5982\u4f55\u5b9e\u73b0\u5355\u884c/\u591a\u884c\u6587\u672c\u6ea2\u51fa\u7701\u7565\uff1f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* \u5355\u884c\u6587\u672c\u622a\u65ad */\n.text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* \u591a\u884c\u6587\u672c\u622a\u65ad */\n.text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  word-break: break-all;\n}\n")),Object(a.b)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u4e24\u5217\u5e03\u5c40\uff1f\u4e09\u680f\u5e03\u5c40\uff1f"},"\u5982\u4f55\u5b9e\u73b0\u4e24\u5217\u5e03\u5c40\uff1f\u4e09\u680f\u5e03\u5c40\uff1f"),Object(a.b)("p",null,"\u5723\u676f\u5e03\u5c40\uff1a\u5229\u7528\u6d6e\u52a8\u548c\u8d1f\u8fb9\u8ddd\u6765\u5b9e\u73b0\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<style>\n  .container {\n    padding-left: 200px;\n    padding-right: 100px;\n    overflow: auto;\n  }\n\n  .middle,\n  .left,\n  .right {\n    position: relative;\n    float: left;\n  }\n\n  .middle {\n    width: 100%;\n    height: 100px;\n    background: lightpink;\n  }\n\n  .left {\n    left: -200px;\n    width: 200px;\n    margin-left: -100%;\n    background: lightskyblue;\n  }\n\n  .right {\n    width: 100px;\n    left: 100px;\n    margin-left: -100px;\n    background: lightgreen;\n  }\n</style>\n<div class="container">\n  <div class="middle">middle</div>\n  <div class="left">left</div>\n  <div class="right">right</div>\n</div>\n')),Object(a.b)("p",null,"\u53cc\u98de\u7ffc\u5e03\u5c40\uff1a\u672c\u8d28\u4e0a\u4e5f\u662f\u901a\u8fc7\u6d6e\u52a8\u548c\u8d1f\u8fb9\u8ddd\u6765\u5b9e\u73b0\u3002\u4e0e\u5723\u676f\u5e03\u5c40\u4e0d\u540c\u7684\u662f\uff0c\u4e24\u8fb9\u533a\u57df\u662f\u7531\u4e2d\u95f4\u5217 padding \u5b9e\u73b0\uff0c\u800c\u5723\u676f\u5e03\u5c40\u662f\u7531\u7236\u5143\u7d20 padding \u5b9e\u73b0\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<style>\n  .middle,\n  .left,\n  .right {\n    float: left;\n    height: 100px;\n  }\n\n  .middle {\n    width: 100%;\n    background: lightpink;\n  }\n\n  .left {\n    width: 200px;\n    margin-left: -100%;\n    background: lightskyblue;\n  }\n\n  .right {\n    width: 100px;\n    margin-left: -100px;\n    background: lightgreen;\n  }\n\n  .content {\n    padding-left: 200px;\n    padding-right: 100px;\n  }\n</style>\n<div class="container">\n  <div class="middle">\n    <div class="content">middle</div>\n  </div>\n  <div class="left">left</div>\n  <div class="right">right</div>\n</div>\n')),Object(a.b)("h3",{id:"visibility-\u548c-display-\u7684\u5dee\u522b\uff08\u8fd8\u6709-opacity\uff09"},"visibility \u548c display \u7684\u5dee\u522b\uff08\u8fd8\u6709 opacity\uff09"))}d.isMDXComponent=!0}}]);