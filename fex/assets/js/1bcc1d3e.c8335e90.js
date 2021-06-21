(self.webpackChunkfex=self.webpackChunkfex||[]).push([[2203],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?t.createElement(d,i(i({ref:n},s),{},{components:r})):t.createElement(d,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4343:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],u={id:"curry",title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316"},c=void 0,l={unversionedId:"interview/handwrittens/curry",id:"interview/handwrittens/curry",isDocsHomePage:!1,title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316",description:"`js",source:"@site/docs/interview/handwrittens/\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316.md",sourceDirName:"interview/handwrittens",slug:"/interview/handwrittens/curry",permalink:"/fex/docs/interview/handwrittens/curry",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/handwrittens/\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316.md",version:"current",frontMatter:{id:"curry",title:"\u624b\u5199\u51fd\u6570\u67ef\u91cc\u5316"},sidebar:"interview",previous:{title:"\u6a21\u62df\u5b9e\u73b0\u6570\u7ec4\u6241\u5e73\u5316",permalink:"/fex/docs/interview/handwrittens/array-flat"},next:{title:"\u624b\u5199JSONP",permalink:"/fex/docs/interview/handwrittens/jsonp"}},s=[{value:"\u5e94\u7528\u5b9e\u4f8b",id:"\u5e94\u7528\u5b9e\u4f8b",children:[]}],p={toc:s};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u51fd\u6570\u67ef\u91cc\u5316\n * @param {Function} func \u5f85\u67ef\u91cc\u5316\u7684\u539f\u51fd\u6570\n * @param {Number} arity \u6240\u9700\u53c2\u6570\u7684\u4e2a\u6570\n * @param {Array} args \u5df2\u63a5\u6536\u7684\u53c2\u6570\u5217\u8868\n */\nfunction curry(func, arity, ...args) {\n  arity = arity || func.length;\n\n  return function (...bindArgs) {\n    const payload = [...args, ...bindArgs];\n\n    if (payload.length < arity) {\n      return curry.call(this, func, arity, ...payload);\n    } else {\n      return func.apply(this, payload);\n    }\n  };\n}\n")),(0,o.kt)("h3",{id:"\u5e94\u7528\u5b9e\u4f8b"},"\u5e94\u7528\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2a function sum \u8fbe\u5230\u4ee5\u4e0b\u76ee\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"sum(1, 2, 3, 4, 5).valueOf(); // 15\nsum(1, 2, 3, 4)(5).valueOf(); // 15\nsum(1, 2, 3)(4)(5).valueOf(); // 15\nsum(1, 2)(3)(4)(5).valueOf(); // 15\nsum(1, 2)(3, 4)(5).valueOf(); // 15\n")),(0,o.kt)("p",null,"\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function sum() {\n  // \u7f13\u5b58\u53c2\u6570\n  const args = Array.from(arguments);\n\n  function fn(...bindArgs) {\n    Array.prototype.push.apply(args, bindArgs);\n    return fn;\n  }\n\n  // \u9759\u6001\u65b9\u6cd5\uff0c\u7528\u4e8e\u8ba1\u7b97\n  fn.valueOf = () => args.reduce((prev, curr) => prev + curr);\n\n  // \u7528\u4e8e\u8fde\u7eed\u8c03\u7528\n  return fn;\n}\n\nconsole.log(sum(1, 2, 3, 4, 5).valueOf());\nconsole.log(sum(1, 2, 3, 4)(5).valueOf());\nconsole.log(sum(1, 2, 3, 4)(5).valueOf());\nconsole.log(sum(1, 2)(3)(4)(5).valueOf());\nconsole.log(sum(1, 2)(3, 4)(5).valueOf());\n")))}f.isMDXComponent=!0}}]);