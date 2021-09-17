"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[8673],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(d,u(u({ref:t},p),{},{components:r})):n.createElement(d,u({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4465:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=["components"],i={id:"readme",title:"\u6982\u89c8",slug:"/forward/vue"},l=void 0,c={unversionedId:"forward/vue/readme",id:"forward/vue/readme",isDocsHomePage:!1,title:"\u6982\u89c8",description:"\u5b66\u4e60 Vue.js \u6e90\u7801\u7b14\u8bb0\uff0c\u5efa\u8bae\u9605\u8bfb\u987a\u5e8f\uff1a",source:"@site/docs/forward/vue/index.md",sourceDirName:"forward/vue",slug:"/forward/vue",permalink:"/fex/docs/forward/vue",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/vue/index.md",tags:[],version:"current",frontMatter:{id:"readme",title:"\u6982\u89c8",slug:"/forward/vue"},sidebar:"forward",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/fex/docs/forward/react/lifecycle"},next:{title:"\u6570\u636e\u9a71\u52a8",permalink:"/fex/docs/forward/vue/data-driven"}},p=[],f={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5b66\u4e60 Vue.js \u6e90\u7801\u7b14\u8bb0\uff0c\u5efa\u8bae\u9605\u8bfb\u987a\u5e8f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6570\u636e\u9a71\u52a8"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5316",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5468\u671f"))),(0,o.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5f0f\u539f\u7406",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"nextTick"),(0,o.kt)("li",{parentName:"ul"},"watcher vs. computed"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u66f4\u65b0"))),(0,o.kt)("li",{parentName:"ul"},"\u7f16\u8bd1")),(0,o.kt)("p",null,"\u7b14\u8bb0\u4e2d\u5e26\u6709\u90e8\u5206\u4e2a\u4eba\u7684\u7406\u89e3\uff0c\u5e76\u4e14\u91cd\u70b9\u7684\u4ee3\u7801\u5df2\u9ad8\u4eae\u663e\u793a\u3002"),(0,o.kt)("p",null,"Vue.js 2.0 \u6e90\u7801\u7684\u5b66\u4e60\u662f\u53c2\u8003\u9ec4\u8f76\u8001\u5e08\u7684\u6e90\u7801\u89e3\u6790\uff0c\u4ed6\u5bf9 Vue.js \u6e90\u7801\u7684\u89e3\u6790\u5f88\u5230\u4f4d\uff0c\u662f\u6211\u770b\u5230\u7684\u89e3\u6790\u6587\u7ae0\u4e2d\u6c34\u5e73\u8f83\u9ad8\u7684\u4e00\u6863\uff0c\u5bf9\u4e8e\u4e2a\u4eba\u7684\u5b66\u4e60\u5f88\u6709\u53c2\u8003\u4ef7\u503c\u3002\u5e76\u4e14\u4ed6\u89e3\u6790\u6e90\u7801\u7684\u65b9\u5f0f\u8ddf\u6211\u4e2a\u4eba\u9605\u8bfb\u6e90\u7801\u7684\u4e60\u60ef\u5f88\u76f8\u50cf\uff0c\u77e5\u8bc6\u8bb2\u89e3\u6709\u8fdb\u6709\u9000\uff0c\u5b66\u8d77\u6765\u5f88\u8212\u670d\uff0c\u8fd9\u4e5f\u662f\u6211\u63a8\u8350\u91cd\u70b9\u5b66\u4e60\u7684\u8d44\u6599\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ustbhuangyi.github.io/vue-analysis/"},"Vue.js \u6280\u672f\u63ed\u79d8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue"},"vuejs/vue"))))}s.isMDXComponent=!0}}]);