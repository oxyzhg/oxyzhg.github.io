(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(142)),c={id:"debunce-throttle",title:"\u624b\u5199\u51fd\u6570\u9632\u6296\u4e0e\u8282\u6d41"},o={unversionedId:"handwrittens/debunce-throttle",id:"handwrittens/debunce-throttle",isDocsHomePage:!1,title:"\u624b\u5199\u51fd\u6570\u9632\u6296\u4e0e\u8282\u6d41",description:"\u9632\u6296",source:"@site/docs/handwrittens/\u624b\u5199\u51fd\u6570\u9632\u6296\u4e0e\u8282\u6d41.md",slug:"/handwrittens/debunce-throttle",permalink:"/fex/docs/handwrittens/debunce-throttle",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/handwrittens/\u624b\u5199\u51fd\u6570\u9632\u6296\u4e0e\u8282\u6d41.md",version:"current",sidebar:"algorithms",previous:{title:"\u63d2\u5165\u6392\u5e8f",permalink:"/fex/docs/sorts/insertion"},next:{title:"\u624b\u5199\u6df1\u62f7\u8d1d",permalink:"/fex/docs/handwrittens/clone-deep"}},l=[{value:"\u9632\u6296",id:"\u9632\u6296",children:[{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[]},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[]}]},{value:"\u8282\u6d41",id:"\u8282\u6d41",children:[{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406-1",children:[]},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0-1",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u9632\u6296"},"\u9632\u6296"),Object(i.b)("p",null,"\u5b9a\u4e49\uff1a\u5728\u4e8b\u4ef6\u88ab\u89e6\u53d1 n \u79d2\u540e\u518d\u6267\u884c\u56de\u8c03\uff0c\u5982\u679c\u5728\u8fd9 n \u79d2\u5185\u53c8\u88ab\u89e6\u53d1\uff0c\u5219\u91cd\u65b0\u8ba1\u65f6\u3002"),Object(i.b)("h3",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9632\u6296\u91cd\u5728\u6e05\u96f6\uff0c\u6253\u65ad\u5373\u91cd\u7f6e\u5b9a\u65f6\u5668\uff1b"),Object(i.b)("li",{parentName:"ul"},"\u5229\u7528\u95ed\u5305\u7684\u7279\u6027\uff0c\u5728\u5916\u5c42\u51fd\u6570\u4f5c\u7528\u57df\u5b58\u50a8\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u6bcf\u6b21\u6267\u884c\u51fd\u6570\u65f6\u91cd\u7f6e\u5b9a\u65f6\u5668\uff0c\u76f4\u5230\u67d0\u4e2a\u5b9a\u65f6\u5668\u6267\u884c")),Object(i.b)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),Object(i.b)("p",null,"\u975e\u7acb\u5373\u6267\u884c\u7248\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u9632\u6296-\u975e\u7acb\u5373\u6267\u884c\u7248\n * @param {function} fn\n * @param {number} [wait=300]\n */\nfunction debounce(fn, wait = 300) {\n  // 1.\u521d\u59cb\u5316\u5b9a\u65f6\u5668\n  let timer;\n\n  // 2.\u8fd4\u56de\u95ed\u5305\u51fd\u6570\uff0c\u8bbf\u95ee\u5916\u5c42\u4f5c\u7528\u57df\u53d8\u91cf\n  return function (...args) {\n    // 3.\u95ed\u5305\u51fd\u6570\u6267\u884c\u65f6\u5224\u65ad\u5b9a\u65f6\u5668\u662f\u5426\u5904\u5728\uff0c\u5982\u679c\u5728\u4fdd\u62a4\u671f\u5185\u5219\u91cd\u65b0\u8bbe\u7f6e\u5b9a\u65f6\u5668\n    if (timer) clearTimeout(timer);\n\n    timer = setTimeout(() => {\n      fn(args); // \u7bad\u5934\u51fd\u6570\u4e0d\u9700\u989d\u5916\u7ed1\u5b9a this\n    }, wait);\n  };\n}\n")),Object(i.b)("p",null,"\u7acb\u5373\u6267\u884c\u7248\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u9632\u6296-\u7acb\u5373\u6267\u884c\u7248\n * @param {function} fn\n * @param {number} [wait=300]\n * @param {boolean} [immediate=true]\n */\nfunction debounce(fn, wait = 300, immediate = false) {\n  let timer = null;\n\n  return function (...args) {\n    if (timer) clearTimeout(timer);\n\n    if (immediate) {\n      // \u662f\u5426\u7acb\u5373\u6267\u884c\u7684\u5224\u65ad\u6761\u4ef6\u662f\u5f53\u524d tiemr \u662f\u5426\u4e3a null\n      const callnow = !timer;\n\n      // \u5b9a\u65f6\u5668\u4f5c\u7528\uff1a\u6307\u5b9a\u65f6\u95f4\u540e\u91cd\u7f6e timer\n      timer = setTimeout(() => {\n        timer = null;\n      }, wait);\n\n      if (callnow) fn(args);\n    } else {\n      // \u5b9a\u65f6\u5668\u4f5c\u7528\uff1a\u6307\u5b9a\u65f6\u95f4\u540e\u6267\u884c\u51fd\u6570\n      timer = setTimeout(() => {\n        fn(args);\n      }, wait);\n    }\n  };\n}\n")),Object(i.b)("h2",{id:"\u8282\u6d41"},"\u8282\u6d41"),Object(i.b)("p",null,"\u5b9a\u4e49\uff1a\u89c4\u5b9a\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\uff0c\u5728\u8fd9\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\uff0c\u53ea\u80fd\u6709\u4e00\u6b21\u89e6\u53d1\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u6267\u884c\uff0c\u5982\u679c\u5728\u540c\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\u67d0\u4e8b\u4ef6\u88ab\u89e6\u53d1\u591a\u6b21\uff0c\u53ea\u6709\u4e00\u6b21\u80fd\u751f\u6548\u3002"),Object(i.b)("h3",{id:"\u5b9e\u73b0\u539f\u7406-1"},"\u5b9e\u73b0\u539f\u7406"),Object(i.b)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0-1"},"\u4ee3\u7801\u5b9e\u73b0"),Object(i.b)("p",null,"\u65f6\u95f4\u6233\u7248\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u8282\u6d41-\u65f6\u95f4\u6233\u7248\n * @param {function} fn\n * @param {number} [wait=300]\n */\nfunction throttle(fn, wait) {\n  let previous = 0;\n\n  return function (...args) {\n    const now = +new Date();\n\n    // \u5224\u65ad\u4e24\u6b21\u6267\u884c\u65f6\u95f4\u5dee\u662f\u5426\u5728\u4fdd\u62a4\u65f6\u95f4\u5185\n    if (now - previous > wait) {\n      fn(args);\n      previous = now;\n    }\n  };\n}\n")),Object(i.b)("p",null,"\u5b9a\u65f6\u5668\u7248\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u8282\u6d41-\u5b9a\u65f6\u5668\u7248\n * @param {function} fn\n * @param {number} [wait=300]\n */\nfunction throttle(fn, wait) {\n  let timer = null;\n\n  return function (...args) {\n    if (!timer) {\n      // \u56de\u8c03\u6267\u884c\u51fd\u6570\u5e76\u91cd\u7f6e\u5b9a\u65f6\u5668\n      timer = setTimeout(() => {\n        timer = null;\n        fn(args);\n      }, wait);\n    }\n  };\n}\n")),Object(i.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(i.b)("p",null,"\u51fd\u6570\u7684\u9632\u6296\u4e0e\u8282\u6d41\u90fd\u662f\u5229\u7528\u95ed\u5305\u7684\u7279\u6027\uff0c\u6838\u5fc3\u601d\u60f3\u90fd\u662f\u5728\u8fd4\u56de\u7684\u95ed\u5305\u51fd\u6570\u4e2d\u6267\u884c\u5f85\u6267\u884c\u51fd\u6570\uff0c\u4e0d\u540c\u7684\u662f\u600e\u4e48\u5224\u65ad\u76ee\u6807\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a\u3002"),Object(i.b)("hr",null),Object(i.b)("p",null,"\u53c2\u8003\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://juejin.im/post/6844903911686406158"},"22 \u9053\u9ad8\u9891 JavaScript \u624b\u5199\u9762\u8bd5\u9898\u53ca\u7b54\u6848")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://juejin.im/post/6844903662519599111"},"\u9632\u6296\u548c\u8282\u6d41\u539f\u7406\u5206\u6790"))))}b.isMDXComponent=!0},142:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(t),s=r,f=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return t?a.a.createElement(f,o(o({ref:n},u),{},{components:t})):a.a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);