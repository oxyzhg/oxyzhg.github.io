"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[1098],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,k=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4366:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"backtrack",title:"\u56de\u6eaf\u7b97\u6cd5\u4e13\u9898"},l=void 0,p={unversionedId:"interview/algorithms/backtrack",id:"interview/algorithms/backtrack",isDocsHomePage:!1,title:"\u56de\u6eaf\u7b97\u6cd5\u4e13\u9898",description:"\u89e3\u51b3\u4e00\u4e2a\u56de\u6eaf\u95ee\u9898\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a\u51b3\u7b56\u6811\u7684\u904d\u5386\u8fc7\u7a0b\u3002\u4f60\u53ea\u9700\u8981\u601d\u8003 3 \u4e2a\u95ee\u9898\uff1a",source:"@site/docs/interview/algorithms/backtrack.md",sourceDirName:"interview/algorithms",slug:"/interview/algorithms/backtrack",permalink:"/fex/docs/interview/algorithms/backtrack",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/algorithms/backtrack.md",tags:[],version:"current",frontMatter:{id:"backtrack",title:"\u56de\u6eaf\u7b97\u6cd5\u4e13\u9898"},sidebar:"interview",previous:{title:"\u52a8\u6001\u89c4\u5212\u4e13\u9898",permalink:"/fex/docs/interview/algorithms/dynamic-programing"},next:{title:"\u529b\u6263\u9ad8\u9891\u7b97\u6cd5\u9898",permalink:"/fex/docs/interview/algorithms/leetcode"}},u=[],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u89e3\u51b3\u4e00\u4e2a\u56de\u6eaf\u95ee\u9898\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a\u51b3\u7b56\u6811\u7684\u904d\u5386\u8fc7\u7a0b\u3002\u4f60\u53ea\u9700\u8981\u601d\u8003 3 \u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u8def\u5f84"),"\uff1a\u4e5f\u5c31\u662f\u5df2\u7ecf\u505a\u51fa\u7684\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u9009\u62e9\u5217\u8868"),"\uff1a\u4e5f\u5c31\u662f\u4f60\u5f53\u524d\u53ef\u4ee5\u505a\u7684\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7ed3\u675f\u6761\u4ef6"),"\uff1a\u4e5f\u5c31\u662f\u5230\u8fbe\u51b3\u7b56\u6811\u5e95\u5c42\uff0c\u65e0\u6cd5\u518d\u505a\u9009\u62e9\u7684\u6761\u4ef6\u3002")),(0,a.kt)("p",null,"\u56de\u6eaf\u7b97\u6cd5\u6a21\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {any[]} selected \u8def\u5f84\n * @param {any[]} options \u9009\u62e9\u5217\u8868\n */\nfunction backtrack(selected, options) {\n  if (/* \u6ee1\u8db3\u6761\u4ef6 */) {\n    result.push(selected);\n    return;\n  }\n  for (let item in options) {\n    // \u505a\u9009\u62e9\n    backtrack(selected, options);\n    // \u64a4\u9500\u9009\u62e9\n  }\n}\n")),(0,a.kt)("p",null,"\u5178\u578b\u4f8b\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/permutations/"},"46.\u5168\u6392\u5217")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/n-queens/"},"51.N \u7687\u540e"))))}m.isMDXComponent=!0}}]);