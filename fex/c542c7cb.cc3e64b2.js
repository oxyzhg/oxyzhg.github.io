(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(7),o=(r(0),r(142)),c={id:"curry",title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316"},u={unversionedId:"handwrittens/curry",id:"handwrittens/curry",isDocsHomePage:!1,title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",description:"`js",source:"@site/docs/handwrittens/\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316.md",slug:"/handwrittens/curry",permalink:"/fex/docs/handwrittens/curry",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/handwrittens/\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316.md",version:"current",sidebar:"algorithms",previous:{title:"\u6a21\u62df\u5b9e\u73b0\u6570\u7ec4\u6241\u5e73\u5316",permalink:"/fex/docs/handwrittens/array-flat"}},i=[{value:"\u5e94\u7528\u5b9e\u4f8b",id:"\u5e94\u7528\u5b9e\u4f8b",children:[]}],l={toc:i};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u67ef\u91cc\u5316\n * @param {Function} func \u5f85\u67ef\u91cc\u5316\u7684\u539f\u51fd\u6570\n * @param {Number} arity \u6240\u9700\u53c2\u6570\u7684\u4e2a\u6570\n * @param {Array} args \u5df2\u63a5\u6536\u7684\u53c2\u6570\u5217\u8868\n */\nfunction curry(func, arity, ...args) {\n  arity = arity || func.length;\n\n  return function (...bindArgs) {\n    const payload = [...args, ...bindArgs];\n\n    if (payload.length < arity) {\n      return curry.call(this, func, arity, ...payload);\n    } else {\n      return func.apply(this, payload);\n    }\n  };\n}\n")),Object(o.b)("h3",{id:"\u5e94\u7528\u5b9e\u4f8b"},"\u5e94\u7528\u5b9e\u4f8b"),Object(o.b)("p",null,"\u5b9e\u73b0\u4e00\u4e2a function sum \u8fbe\u5230\u4ee5\u4e0b\u76ee\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"sum(1, 2, 3, 4, 5).valueOf(); // 15\nsum(1, 2, 3, 4)(5).valueOf(); // 15\nsum(1, 2, 3)(4)(5).valueOf(); // 15\nsum(1, 2)(3)(4)(5).valueOf(); // 15\nsum(1, 2)(3, 4)(5).valueOf(); // 15\n")),Object(o.b)("p",null,"\u5b9e\u73b0\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function sum() {\n  // \u7f13\u5b58\u53c2\u6570\n  const args = Array.from(arguments);\n\n  function fn(...bindArgs) {\n    Array.prototype.push.apply(args, bindArgs);\n    return fn;\n  }\n\n  // \u9759\u6001\u65b9\u6cd5\uff0c\u7528\u4e8e\u8ba1\u7b97\n  fn.valueOf = () => args.reduce((prev, curr) => prev + curr);\n\n  // \u7528\u4e8e\u8fde\u7eed\u8c03\u7528\n  return fn;\n}\n\nconsole.log(sum(1, 2, 3, 4, 5).valueOf());\nconsole.log(sum(1, 2, 3, 4)(5).valueOf());\nconsole.log(sum(1, 2, 3, 4)(5).valueOf());\nconsole.log(sum(1, 2)(3)(4)(5).valueOf());\nconsole.log(sum(1, 2)(3, 4)(5).valueOf());\n")))}s.isMDXComponent=!0},142:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=t,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?a.a.createElement(d,u(u({ref:n},l),{},{components:r})):a.a.createElement(d,u({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);