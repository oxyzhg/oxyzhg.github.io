"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[2239],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,s=u["".concat(p,".").concat(m)]||u[m]||k[m]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"cache",title:"\u6d4f\u89c8\u5668\u7f13\u5b58"},p=void 0,c={unversionedId:"forward/browser/cache",id:"forward/browser/cache",isDocsHomePage:!1,title:"\u6d4f\u89c8\u5668\u7f13\u5b58",description:"\u7f13\u5b58\u53ef\u4ee5\u8bf4\u662f\u6027\u80fd\u4f18\u5316\u4e2d\u7b80\u5355\u9ad8\u6548\u7684\u4e00\u79cd\u4f18\u5316\u65b9\u5f0f\u4e86\u3002\u4e00\u4e2a\u4f18\u79c0\u7684\u7f13\u5b58\u7b56\u7565\u53ef\u4ee5\u7f29\u77ed\u7f51\u9875\u8bf7\u6c42\u8d44\u6e90\u7684\u8ddd\u79bb\uff0c\u51cf\u5c11\u5ef6\u8fdf\uff0c\u5e76\u4e14\u7531\u4e8e\u7f13\u5b58\u6587\u4ef6\u53ef\u4ee5\u91cd\u590d\u5229\u7528\uff0c\u8fd8\u53ef\u4ee5\u51cf\u5c11\u5e26\u5bbd\uff0c\u964d\u4f4e\u7f51\u7edc\u8d1f\u8377\u3002",source:"@site/series/forward/browser/browser-cache.md",sourceDirName:"forward/browser",slug:"/forward/browser/cache",permalink:"/fex/series/forward/browser/cache",editUrl:"https://github.com/oxyzhg/fex/edit/main/series/forward/browser/browser-cache.md",tags:[],version:"current",frontMatter:{id:"cache",title:"\u6d4f\u89c8\u5668\u7f13\u5b58"},sidebar:"forward",previous:{title:"\u6d4f\u89c8\u5668\u5b58\u50a8",permalink:"/fex/series/forward/browser/storage"},next:{title:"\u5783\u573e\u56de\u6536",permalink:"/fex/series/forward/browser/gc"}},d=[{value:"\u7f13\u5b58\u4f4d\u7f6e",id:"\u7f13\u5b58\u4f4d\u7f6e",children:[{value:"Service Worker",id:"service-worker",children:[]},{value:"Memory Cache",id:"memory-cache",children:[]},{value:"Disk Cache",id:"disk-cache",children:[]},{value:"Push Cache",id:"push-cache",children:[]}]},{value:"\u7f13\u5b58\u8fc7\u7a0b",id:"\u7f13\u5b58\u8fc7\u7a0b",children:[]},{value:"\u7f13\u5b58\u673a\u5236",id:"\u7f13\u5b58\u673a\u5236",children:[{value:"\u5f3a\u7f13\u5b58",id:"\u5f3a\u7f13\u5b58",children:[]},{value:"\u534f\u5546\u7f13\u5b58",id:"\u534f\u5546\u7f13\u5b58",children:[]}]},{value:"\u5b9e\u9645\u573a\u666f\u5e94\u7528\u7f13\u5b58\u7b56\u7565",id:"\u5b9e\u9645\u573a\u666f\u5e94\u7528\u7f13\u5b58\u7b56\u7565",children:[]},{value:"\u7f13\u5b58\u5f71\u54cd",id:"\u7f13\u5b58\u5f71\u54cd",children:[]}],k={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7f13\u5b58\u53ef\u4ee5\u8bf4\u662f\u6027\u80fd\u4f18\u5316\u4e2d\u7b80\u5355\u9ad8\u6548\u7684\u4e00\u79cd\u4f18\u5316\u65b9\u5f0f\u4e86\u3002\u4e00\u4e2a\u4f18\u79c0\u7684\u7f13\u5b58\u7b56\u7565\u53ef\u4ee5\u7f29\u77ed\u7f51\u9875\u8bf7\u6c42\u8d44\u6e90\u7684\u8ddd\u79bb\uff0c\u51cf\u5c11\u5ef6\u8fdf\uff0c\u5e76\u4e14\u7531\u4e8e\u7f13\u5b58\u6587\u4ef6\u53ef\u4ee5\u91cd\u590d\u5229\u7528\uff0c\u8fd8\u53ef\u4ee5\u51cf\u5c11\u5e26\u5bbd\uff0c\u964d\u4f4e\u7f51\u7edc\u8d1f\u8377\u3002"),(0,l.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u6d4f\u89c8\u5668\u7f13\u5b58\uff1f\u5bf9\u4e8e\u4e00\u4e2a\u6570\u636e\u8bf7\u6c42\u6765\u8bf4\uff0c\u53ef\u4ee5\u5206\u4e3a\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\u3001\u540e\u7aef\u5904\u7406\u3001\u6d4f\u89c8\u5668\u54cd\u5e94\u4e09\u4e2a\u6b65\u9aa4\u3002\u6d4f\u89c8\u5668\u7f13\u5b58\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5728\u7b2c\u4e00\u548c\u7b2c\u4e09\u6b65\u9aa4\u4e2d\u4f18\u5316\u6027\u80fd\u3002\u6bd4\u5982\u8bf4\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u800c\u4e0d\u53d1\u8d77\u8bf7\u6c42\uff0c\u6216\u8005\u53d1\u8d77\u4e86\u8bf7\u6c42\u4f46\u540e\u7aef\u5b58\u50a8\u7684\u6570\u636e\u548c\u524d\u7aef\u4e00\u81f4\uff0c\u90a3\u4e48\u5c31\u6ca1\u6709\u5fc5\u8981\u518d\u5c06\u6570\u636e\u56de\u4f20\u56de\u6765\uff0c\u8fd9\u6837\u5c31\u51cf\u5c11\u4e86\u54cd\u5e94\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u7f13\u5b58\u4f4d\u7f6e"},"\u7f13\u5b58\u4f4d\u7f6e"),(0,l.kt)("p",null,"\u4ece\u7f13\u5b58\u4f4d\u7f6e\u4e0a\u6765\u8bf4\u5206\u4e3a\u56db\u79cd\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Service Worker"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Memory Cache"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Disk Cache"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Push Cache"),"\uff0c\u5e76\u4e14\u5404\u81ea\u6709\u4f18\u5148\u7ea7\uff0c\u5f53\u4f9d\u6b21\u67e5\u627e\u7f13\u5b58\u4e14\u90fd\u6ca1\u6709\u547d\u4e2d\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u53bb\u8bf7\u6c42\u7f51\u7edc\u3002"),(0,l.kt)("h3",{id:"service-worker"},"Service Worker"),(0,l.kt)("p",null,"Service Worker \u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u80cc\u540e\u7684\u72ec\u7acb\u7ebf\u7a0b\uff0c\u4e00\u822c\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u7f13\u5b58\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u534f\u8bae\u5fc5\u987b\u4e3a HTTPS\uff0c\u56e0\u4e3a Service Worker \u4e2d\u6d89\u53ca\u5230\u8bf7\u6c42\u62e6\u622a\uff0c\u6240\u4ee5\u5fc5\u987b\u4f7f\u7528 HTTPS \u534f\u8bae\u6765\u4fdd\u969c\u5b89\u5168\u3002"),(0,l.kt)("li",{parentName:"ul"},"Service Worker \u7684\u7f13\u5b58\u4e0e\u6d4f\u89c8\u5668\u5176\u4ed6\u5185\u5efa\u7684\u7f13\u5b58\u673a\u5236\u4e0d\u540c\uff0c\u5b83\u53ef\u4ee5\u8ba9\u6211\u4eec\u81ea\u7531\u63a7\u5236\u7f13\u5b58\u54ea\u4e9b\u6587\u4ef6\u3001\u5982\u4f55\u5339\u914d\u7f13\u5b58\u3001\u5982\u4f55\u8bfb\u53d6\u7f13\u5b58\uff0c\u5e76\u4e14\u7f13\u5b58\u662f\u6301\u7eed\u6027\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 Service Worker \u6ca1\u6709\u547d\u4e2d\u7f13\u5b58\u7684\u65f6\u5019\uff0c\u4f1a\u6839\u636e\u7f13\u5b58\u67e5\u627e\u4f18\u5148\u7ea7\u53bb\u67e5\u627e\u6570\u636e\u3002\u4f46\u662f\u4e0d\u7ba1\u6211\u4eec\u662f\u4ece\u5185\u5b58\u4e2d\u8fd8\u662f\u4ece\u7f51\u7edc\u8bf7\u6c42\u4e2d\u83b7\u53d6\u7684\u6570\u636e\uff0c\u6d4f\u89c8\u5668\u90fd\u4f1a\u663e\u793a\u6211\u4eec\u662f\u4ece Service Worker \u4e2d\u83b7\u53d6\u7684\u5185\u5bb9\u3002")),(0,l.kt)("h3",{id:"memory-cache"},"Memory Cache"),(0,l.kt)("p",null,"Memory Cache \u4e5f\u5c31\u662f\u5185\u5b58\u4e2d\u7684\u7f13\u5b58\uff0c\u4e3b\u8981\u5305\u542b\u7684\u662f\u5f53\u524d\u4e2d\u9875\u9762\u4e2d\u5df2\u7ecf\u6293\u53d6\u5230\u7684\u8d44\u6e90,\u4f8b\u5982\u9875\u9762\u4e0a\u5df2\u7ecf\u4e0b\u8f7d\u7684\u6837\u5f0f\u3001\u811a\u672c\u3001\u56fe\u7247\u7b49\u3002"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u5185\u5b58\u4e2d\u7684\u6570\u636e\u6bd4\u8bfb\u53d6\u78c1\u76d8\u4e2d\u7684\u6570\u636e\u8981\u5feb\u5f97\u591a\uff0c\u8bfb\u53d6\u9ad8\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u6301\u7eed\u6027\u5f88\u77ed\uff0c\u4f1a\u968f\u7740\u8fdb\u7a0b\u7684\u91ca\u653e\u800c\u91ca\u653e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7f13\u5b58\u5728\u7f13\u5b58\u8d44\u6e90\u65f6\u5e76\u4e0d\u5173\u5fc3\u8fd4\u56de\u8d44\u6e90\u7684 HTTP \u7f13\u5b58\u5934 Cache-Control \u662f\u4ec0\u4e48\u503c\uff0c\u540c\u65f6\u8d44\u6e90\u7684\u5339\u914d\u4e5f\u5e76\u975e\u4ec5\u4ec5\u662f\u5bf9 URL \u505a\u5339\u914d\uff0c\u8fd8\u53ef\u80fd\u4f1a\u5bf9 Content-Type\uff0cCORS \u7b49\u5176\u4ed6\u7279\u5f81\u505a\u6821\u9a8c\u3002")),(0,l.kt)("h3",{id:"disk-cache"},"Disk Cache"),(0,l.kt)("p",null,"Disk Cache \u4e5f\u5c31\u662f\u5b58\u50a8\u5728\u786c\u76d8\u4e2d\u7684\u7f13\u5b58\uff0c\u8bfb\u53d6\u901f\u5ea6\u6162\u70b9\u3002"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u901f\u5ea6\u76f8\u8f83 Memory Cache \u6162\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7684\u65f6\u6548\u6027\u548c\u5bb9\u91cf\u5360\u4f18\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u4f1a\u6839\u636e HTTP \u54cd\u5e94\u5934\u4e2d\u7684\u5b57\u6bb5\u5224\u65ad\u54ea\u4e9b\u8d44\u6e90\u9700\u8981\u7f13\u5b58\uff0c\u54ea\u4e9b\u8d44\u6e90\u53ef\u4ee5\u4e0d\u8bf7\u6c42\u76f4\u63a5\u4f7f\u7528\uff0c\u54ea\u4e9b\u8d44\u6e90\u5df2\u7ecf\u8fc7\u671f\u9700\u8981\u91cd\u65b0\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5373\u4f7f\u5728\u8de8\u7ad9\u70b9\u7684\u60c5\u51b5\u4e0b\uff0c\u76f8\u540c\u5730\u5740\u7684\u8d44\u6e90\u4e00\u65e6\u88ab\u786c\u76d8\u7f13\u5b58\u4e0b\u6765\uff0c\u5c31\u4e0d\u4f1a\u518d\u6b21\u53bb\u8bf7\u6c42\u6570\u636e\u3002")),(0,l.kt)("h3",{id:"push-cache"},"Push Cache"),(0,l.kt)("p",null,"Push Cache\uff08\u63a8\u9001\u7f13\u5b58\uff09\u662f HTTP/2 \u4e2d\u7684\u5185\u5bb9\uff0c\u5f53\u4ee5\u4e0a\u4e09\u79cd\u7f13\u5b58\u90fd\u6ca1\u6709\u547d\u4e2d\u65f6\uff0c\u5b83\u624d\u4f1a\u88ab\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ea\u5728\u4f1a\u8bdd\uff08Session\uff09\u4e2d\u5b58\u5728\uff0c\u4e00\u65e6\u4f1a\u8bdd\u7ed3\u675f\u5c31\u88ab\u91ca\u653e\uff0c\u5e76\u4e14\u7f13\u5b58\u65f6\u95f4\u4e5f\u5f88\u77ed\u6682\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u975e\u4e25\u683c\u6267\u884c HTTP \u5934\u4e2d\u7684\u7f13\u5b58\u6307\u4ee4\u3002")),(0,l.kt)("h2",{id:"\u7f13\u5b58\u8fc7\u7a0b"},"\u7f13\u5b58\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u901a\u4fe1\u7684\u65b9\u5f0f\u4e3a\u5e94\u7b54\u6a21\u5f0f\uff0c\u5373\uff1a\u6d4f\u89c8\u5668\u53d1\u8d77 HTTP \u8bf7\u6c42 \u2013 \u670d\u52a1\u5668\u54cd\u5e94\u8be5\u8bf7\u6c42\u3002\u6d4f\u89c8\u5668\u7b2c\u4e00\u6b21\u5411\u670d\u52a1\u5668\u53d1\u8d77\u8be5\u8bf7\u6c42\u540e\u62ff\u5230\u8bf7\u6c42\u7ed3\u679c\u540e\uff0c\u5c06\u8bf7\u6c42\u7ed3\u679c\u548c\u7f13\u5b58\u6807\u8bc6\u5b58\u5165\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u6d4f\u89c8\u5668\u5bf9\u4e8e\u7f13\u5b58\u7684\u5904\u7406\u662f\u6839\u636e\u7b2c\u4e00\u6b21\u8bf7\u6c42\u8d44\u6e90\u65f6\u8fd4\u56de\u7684\u54cd\u5e94\u5934\u6765\u786e\u5b9a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Browser Cache",src:n(5483).Z})),(0,l.kt)("p",null,"\u7531\u4e0a\u56fe\u6211\u4eec\u53ef\u4ee5\u786e\u5b9a\u4e24\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\uff0c\u90fd\u4f1a\u5148\u5728\u6d4f\u89c8\u5668\u7f13\u5b58\u4e2d\u67e5\u627e\u8be5\u8bf7\u6c42\u7684\u7ed3\u679c\u4ee5\u53ca\u7f13\u5b58\u6807\u8bc6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u6bcf\u6b21\u62ff\u5230\u8fd4\u56de\u7684\u8bf7\u6c42\u7ed3\u679c\uff0c\u90fd\u4f1a\u5c06\u8be5\u7ed3\u679c\u548c\u7f13\u5b58\u6807\u8bc6\u5b58\u5165\u6d4f\u89c8\u5668\u7f13\u5b58\u4e2d\u3002")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4e24\u70b9\u7ed3\u8bba\u5c31\u662f\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u7684\u5173\u952e\uff0c\u5b83\u786e\u4fdd\u4e86\u6bcf\u4e2a\u8bf7\u6c42\u7684\u7f13\u5b58\u5b58\u5165\u4e0e\u8bfb\u53d6\u3002"),(0,l.kt)("h2",{id:"\u7f13\u5b58\u673a\u5236"},"\u7f13\u5b58\u673a\u5236"),(0,l.kt)("p",null,"\u901a\u5e38\u6d4f\u89c8\u5668\u7f13\u5b58\u7b56\u7565\u5206\u4e3a\u4e24\u79cd\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5f3a\u7f13\u5b58\u548c\u534f\u5546\u7f13\u5b58"),"\uff0c\u901a\u5e38\u7f13\u5b58\u7b56\u7565\u662f\u901a\u8fc7\u8bbe\u7f6e HTTP \u62a5\u5934\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6765\u603b\u4f53\u611f\u77e5\u4e00\u4e0b\u5b83\u7684\u5339\u914d\u6d41\u7a0b\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u53d1\u9001\u8bf7\u6c42\u524d\uff0c\u6839\u636e\u8bf7\u6c42\u5934\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Expires")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u5224\u65ad\u662f\u5426\u547d\u4e2d\uff08\u5305\u62ec\u662f\u5426\u8fc7\u671f\uff09\u5f3a\u7f13\u5b58\u7b56\u7565\uff0c\u5982\u679c\u547d\u4e2d\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u83b7\u53d6\u8d44\u6e90\uff0c\u5e76\u4e0d\u4f1a\u53d1\u9001\u8bf7\u6c42\u3002\u5982\u679c\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u547d\u4e2d\u5f3a\u7f13\u5b58\u89c4\u5219\uff0c\u6d4f\u89c8\u5668\u4f1a\u53d1\u9001\u8bf7\u6c42\uff0c\u6839\u636e\u8bf7\u6c42\u5934\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Last-Modified")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"Etag")," \u5224\u65ad\u662f\u5426\u547d\u4e2d\u534f\u5546\u7f13\u5b58\uff0c\u5982\u679c\u547d\u4e2d\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u83b7\u53d6\u8d44\u6e90\u3002\u5982\u679c\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u524d\u4e24\u6b65\u90fd\u6ca1\u6709\u547d\u4e2d\uff0c\u5219\u76f4\u63a5\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u8d44\u6e90\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Browser Cache",src:n(5162).Z})),(0,l.kt)("h3",{id:"\u5f3a\u7f13\u5b58"},"\u5f3a\u7f13\u5b58"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a\u4e0d\u4f1a\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u8d44\u6e90\u3002"),(0,l.kt)("p",null,"\u5224\u65ad\u4f9d\u636e\uff1a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"Expires")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control")," \u5224\u65ad\u662f\u5426\u8d85\u51fa\u67d0\u4e2a\u65f6\u95f4\u6216\u67d0\u4e2a\u65f6\u95f4\u6bb5\uff0c\u800c\u4e0d\u5173\u5fc3\u670d\u52a1\u5668\u7aef\u6587\u4ef6\u662f\u5426\u5df2\u7ecf\u66f4\u65b0\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u52a0\u8f7d\u6587\u4ef6\u4e0d\u662f\u670d\u52a1\u5668\u7aef\u6700\u65b0\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u8868\u793a\u65b9\u5f0f\uff1a\u8be5\u8bf7\u6c42\u8fd4\u56de 200 \u72b6\u6001\u7801\uff0c\u5e76\u4e14 Network Size \u663e\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"from memory cache")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"from disk cache"),"\u3002"),(0,l.kt)("h4",{id:"expires"},"Expires"),(0,l.kt)("p",null,"\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4\uff0c\u7528\u6765\u6307\u5b9a\u8d44\u6e90\u5230\u671f\u7684\u65f6\u95f4\uff0c\u662f\u670d\u52a1\u5668\u7aef\u7684\u5177\u4f53\u7684\u65f6\u95f4\u70b9\u3002\u7b2c\u4e00\u6b21\u8bf7\u6c42\u670d\u52a1\u5668\u8d44\u6e90\u65f6\uff0cHTTP \u54cd\u5e94\u5934\u4f1a\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Expries")," \u5b57\u6bb5\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u4e00\u4e2a\u5177\u4f53\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5728\u6b64\u65f6\u95f4\u524d\u6d4f\u89c8\u5668\u53ef\u76f4\u63a5\u5728\u7f13\u5b58\u4e2d\u8bfb\u53d6\u8d44\u6e90\uff0c\u800c\u65e0\u9700\u53d1\u9001\u65b0\u7684\u8bf7\u6c42\u3002\u8be5\u5b57\u6bb5\u548c\u534f\u5546\u7f13\u5b58\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Last-Modified")," \u5b57\u6bb5\u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Expires")," \u662f HTTP/1.0 \u4ea7\u7269\uff0c\u53d7\u9650\u4e8e\u672c\u5730\u65f6\u95f4\uff0c\u5982\u679c\u4fee\u6539\u4e86\u672c\u5730\u65f6\u95f4\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u7f13\u5b58\u5931\u6548\u3002"),(0,l.kt)("h4",{id:"cache-control"},"Cache-Control"),(0,l.kt)("p",null,"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Expires")," \u5b58\u5728\u7684\u7f3a\u9677\uff0cHTTP/1.1 \u63a8\u51fa\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control")," \u89c4\u5219\u63a7\u5236\u8d44\u6e90\u7f13\u5b58\u3002\u6bd4\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control: max-age=30")," \u8868\u793a\u8be5\u8d44\u6e90\u8bf7\u6c42\u540e\u7684 30s \u5185\u518d\u6b21\u52a0\u8f7d\u8d44\u6e90\uff0c\u5c31\u4f1a\u547d\u4e2d\u5f3a\u7f13\u5b58\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control")," \u53ef\u4ee5\u5728\u8bf7\u6c42\u5934\u6216\u8005\u54cd\u5e94\u5934\u4e2d\u8bbe\u7f6e\uff0c\u5e76\u4e14\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u591a\u79cd\u6307\u4ee4\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6307\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"public"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u54cd\u5e94\u53ef\u4ee5\u88ab\u5ba2\u6237\u7aef\u548c\u4ee3\u7406\u670d\u52a1\u5668\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"private"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u54cd\u5e94\u53ea\u53ef\u4ee5\u88ab\u5ba2\u6237\u7aef\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-age=30"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 30s \u540e\u8fc7\u671f\uff0c\u9700\u8981\u91cd\u65b0\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s-message=30"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6 max-age\uff0c\u4f5c\u7528\u4e00\u6837\uff0c\u53ea\u5728\u4ee3\u7406\u670d\u52a1\u5668\u4e2d\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-store"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7f13\u5b58\u4efb\u4f55\u54cd\u5e94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u88ab\u7f13\u5b58\uff0c\u4f46\u662f\u7acb\u5373\u5931\u6548\uff0c\u4e0b\u6b21\u53d1\u8d77\u8bf7\u6c42\u9a8c\u8bc1\u8d44\u6e90\u662f\u5426\u8fc7\u671f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-state=30"),(0,l.kt)("td",{parentName:"tr",align:null},"30s \u5185\uff0c\u5373\u4f7f\u7f13\u5b58\u8fc7\u671f\uff0c\u4e5f\u4f7f\u7528\u6539\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-fresh=20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e0c\u671b\u5728 30s \u5185\u83b7\u53d6\u6700\u65b0\u7684\u54cd\u5e94")))),(0,l.kt)("p",null,"\u53ef\u4ee5\u5c06\u591a\u4e2a\u6307\u4ee4\u914d\u5408\u8d77\u6765\u4e00\u8d77\u4f7f\u7528\uff0c\u8fbe\u5230\u591a\u4e2a\u76ee\u7684\u3002\u6bd4\u5982\u8bf4\u6211\u4eec\u5e0c\u671b\u8d44\u6e90\u80fd\u88ab\u7f13\u5b58\u4e0b\u6765\uff0c\u5e76\u4e14\u662f\u5ba2\u6237\u7aef\u548c\u4ee3\u7406\u670d\u52a1\u5668\u90fd\u80fd\u7f13\u5b58\uff0c\u8fd8\u80fd\u8bbe\u7f6e\u7f13\u5b58\u5931\u6548\u65f6\u95f4\u7b49\u7b49\u3002"),(0,l.kt)("h4",{id:"\u4e24\u8005\u5bf9\u6bd4"},"\u4e24\u8005\u5bf9\u6bd4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Expires")," \u662f HTTP/1.0 \u4ea7\u7269\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u662f HTTP/1.1 \u4ea7\u7269\uff0c\u4e24\u8005\u5171\u5b58\u65f6\u540e\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e24\u8005\u90fd\u662f\u901a\u8fc7\u5224\u65ad\u8d44\u6e90\u662f\u5426\u8fc7\u671f\u6765\u547d\u4e2d\u5f3a\u7f13\u5b58\u3002\u4e0d\u540c\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Expires")," \u662f\u4e00\u4e2a\u5177\u4f53\u7684\u65f6\u95f4\u70b9\uff0c\u53d7\u9650\u4e8e\u672c\u5730\u65f6\u95f4\uff1b",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u662f\u4e00\u4e2a\u671f\u9650\uff0c\u4ece\u52a0\u8f7d\u8d44\u6e90\u540e\u8d77\u8ba1\u7b97\u3002")),(0,l.kt)("h3",{id:"\u534f\u5546\u7f13\u5b58"},"\u534f\u5546\u7f13\u5b58"),(0,l.kt)("p",null,"\u7279\u70b9\uff1a\u5f3a\u5236\u7f13\u5b58\u5931\u6548\uff0c\u6d4f\u89c8\u5668\u643a\u5e26\u7f13\u5b58\u6807\u8bc6\u5411\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\uff0c\u7531\u670d\u52a1\u5668\u6839\u636e\u7f13\u5b58\u6807\u8bc6\u51b3\u5b9a\u662f\u5426\u4f7f\u7528\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u5224\u65ad\u4f9d\u636e\uff1a\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"Last-Modified/If-Modified-Since")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Etag/If-None-Match")," \u5224\u65ad\u8d44\u6e90\u662f\u5426\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u8868\u793a\u65b9\u5f0f\uff1a\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"If-Modified-Since")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"If-None-Match")," \u5bf9\u6bd4\u540e\uff0c\u8d44\u6e90\u6ca1\u6709\u53d8\u5316\uff0c\u8fd4\u56de 304 \u72b6\u6001\u7801\u548c\u7a7a\u54cd\u5e94\u4f53\uff0c\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u8d44\u6e90\uff1b\u53cd\u4e4b\uff0c\u8d44\u6e90\u53d1\u751f\u53d8\u5316\uff0c\u8fd4\u56de 200 \u72b6\u6001\u7801\u548c\u65b0\u8d44\u6e90\u6587\u4ef6\u3002"),(0,l.kt)("h4",{id:"last-modifiedif-modified-since"},"Last-Modified/If-Modified-Since"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5728\u7b2c\u4e00\u6b21\u8bbf\u95ee\u8d44\u6e90\u65f6\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u8d44\u6e90\u7684\u540c\u65f6\uff0c\u5728\u54cd\u5e94\u5934\u6dfb\u52a0 Last-Modified \u5b57\u6bb5\uff0c\u503c\u662f\u8fd9\u4e2a\u8d44\u6e90\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e0b\u6b21\u8bf7\u6c42\u8d44\u6e90\u65f6\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u6709 Last-Modified \u5b57\u6bb5\uff0c\u5c31\u6dfb\u52a0 If-Modified-Since \u8bf7\u6c42\u5934\u5b57\u6bb5\uff0c\u503c\u662f\u7f13\u5b58\u7684 Last-Modified \u5b57\u6bb5\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u518d\u6b21\u6536\u5230\u8fd9\u4e2a\u8d44\u6e90\u7684\u8bf7\u6c42\uff0c\u4f1a\u62ff If-Modified-Since \u503c\u4e0e\u8d44\u6e90\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u5bf9\u6bd4\uff0c\u5982\u679c\u6ca1\u6709\u53d8\u5316\uff0c\u8fd4\u56de 304 \u72b6\u6001\u7801\u548c\u7a7a\u54cd\u5e94\u4f53\uff0c\u5ba2\u6237\u7aef\u76f4\u63a5\u8bfb\u53d6\u7f13\u5b58\u7684\u8d44\u6e90\uff1b\u5982\u679c\u6709\u53d8\u5316\uff0c\u8fd4\u56de 200 \u72b6\u6001\u7801\u548c\u65b0\u7684\u8d44\u6e90\u3002")),(0,l.kt)("p",null,"\u7f3a\u9677\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u5730\u6253\u5f00\u7f13\u5b58\u6587\u4ef6\uff0c\u5373\u4f7f\u6ca1\u6709\u5bf9\u6587\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u8fd8\u662f\u4f1a\u9020\u6210 Last-Modified \u88ab\u4fee\u6539\uff0c\u670d\u52a1\u7aef\u4e0d\u80fd\u547d\u4e2d\u7f13\u5b58\u5bfc\u81f4\u53d1\u9001\u76f8\u540c\u7684\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a Last-Modified \u53ea\u80fd\u4ee5\u79d2\u8ba1\u65f6\uff0c\u5982\u679c\u5728\u4e0d\u53ef\u611f\u77e5\u7684\u65f6\u95f4\u5185\u4fee\u6539\u5b8c\u6210\u6587\u4ef6\uff0c\u90a3\u4e48\u670d\u52a1\u7aef\u4f1a\u8ba4\u4e3a\u8d44\u6e90\u8fd8\u662f\u547d\u4e2d\u4e86\uff0c\u4e0d\u4f1a\u8fd4\u56de\u6b63\u786e\u7684\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5404\u673a\u5668\u8bfb\u53d6\u5230\u7684\u65f6\u95f4\u4e0d\u4e00\u81f4\uff0c\u4e5f\u4f1a\u51fa\u73b0\u8bef\u5dee\u7684\u53ef\u80fd\u6027\u3002\n\u7531\u4e8e Last-Modified \u5b58\u5728\u7684\u7f3a\u9677\uff0cHTTP/1.1 \u63a8\u51fa\u4e86 Etag/If-None-Match \u66f4\u597d\u7684\u670d\u52a1\u534f\u5546\u7f13\u5b58\u3002")),(0,l.kt)("h4",{id:"etagif-none-match"},"Etag/If-None-Match"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5728\u7b2c\u4e00\u6b21\u8bbf\u95ee\u8d44\u6e90\u65f6\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u8d44\u6e90\u7684\u540c\u65f6\uff0c\u5728\u54cd\u5e94\u5934\u6dfb\u52a0 Etag \u5b57\u6bb5\uff0c\u503c\u662f\u8fd9\u4e2a\u8d44\u6e90\u5728\u670d\u52a1\u5668\u4e0a\u7684\u6700\u540e\u4e00\u6b21\u4fee\u6539\uff0c\u901a\u8fc7\u7b97\u6cd5\u751f\u6210\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u53ea\u8981\u8d44\u6e90\u6709\u53d8\u5316\uff0cEtag \u5c31\u4f1a\u91cd\u65b0\u751f\u6210\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e0b\u6b21\u52a0\u8f7d\u8d44\u6e90\u65f6\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u6709 Etag \u5b57\u6bb5\uff0c\u5c31\u6dfb\u52a0 If-None-Match \u8bf7\u6c42\u5934\u5b57\u6bb5\uff0c\u503c\u662f\u7f13\u5b58\u7684 Etag \u5b57\u6bb5\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u518d\u6b21\u6536\u5230\u8fd9\u4e2a\u8d44\u6e90\u7684\u8bf7\u6c42\uff0c\u4f1a\u62ff If-None-Match \u503c\u4e0e\u670d\u52a1\u5668\u4e0a\u8be5\u8d44\u6e90\u7684 Etag \u505a\u5bf9\u6bd4\uff0c\u5982\u679c\u5339\u914d\uff0c\u8fd4\u56de 304 \u72b6\u6001\u7801\u548c\u7a7a\u54cd\u5e94\u4f53\uff0c\u5ba2\u6237\u7aef\u76f4\u63a5\u5728\u7f13\u5b58\u4e2d\u8bfb\u53d6\u8d44\u6e90\uff1b\u5982\u679c\u4e0d\u5339\u914d\uff0c\u8fd4\u56de 200 \u72b6\u6001\u7801\u548c\u65b0\u7684\u8d44\u6e90\u3002")),(0,l.kt)("h4",{id:"\u4e24\u8005\u5bf9\u6bd4-1"},"\u4e24\u8005\u5bf9\u6bd4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Last-Modified/If-Modified-Since \u662f HTTP/1.0 \u4ea7\u7269\uff0cEtag/If-None-Match \u662f HTTP/1.1 \u4ea7\u7269\uff0c\u4e24\u8005\u5171\u5b58\u65f6\u540e\u8005\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7cbe\u5ea6\u4e0a Etag \u8981\u4f18\u4e8e Last-Modified\uff0cEtag \u662f\u901a\u8fc7\u7b97\u6cd5\u8ba1\u7b97\u51fa\u6765\u7684\u4e00\u4e2a Hash \u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6027\u80fd\u4e0a Etag \u8981\u900a\u4e8e Last-Modified\uff0c\u6bd5\u7adf Last-Modified \u53ea\u9700\u8981\u8bb0\u5f55\u6587\u4ef6\u4fee\u6539\u7684\u65f6\u95f4\u3002")),(0,l.kt)("h2",{id:"\u5b9e\u9645\u573a\u666f\u5e94\u7528\u7f13\u5b58\u7b56\u7565"},"\u5b9e\u9645\u573a\u666f\u5e94\u7528\u7f13\u5b58\u7b56\u7565"),(0,l.kt)("p",null,"\u9891\u7e41\u53d8\u52a8\u7684\u8d44\u6e90\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control: no-cache"),"\uff0c\u8bbe\u7f6e\u4e0d\u4f7f\u7528\u5f3a\u7f13\u5b58\uff0c\u4f7f\u6d4f\u89c8\u5668\u6bcf\u6b21\u90fd\u8bf7\u6c42\u670d\u52a1\u5668\uff0c\u7136\u540e\u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"ETag")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"Last-Modified")," \u6765\u9a8c\u8bc1\u8d44\u6e90\u662f\u5426\u6709\u6548\u3002\u8fd9\u6837\u7684\u505a\u6cd5\u867d\u7136\u4e0d\u80fd\u8282\u7701\u8bf7\u6c42\u6570\u91cf\uff0c\u4f46\u662f\u80fd\u663e\u8457\u51cf\u5c11\u54cd\u5e94\u6570\u636e\u5927\u5c0f\u3002"),(0,l.kt)("p",null,"\u4e0d\u5e38\u53d8\u52a8\u7684\u8d44\u6e90\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cache-Control: max=3153600"),"\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u4e4b\u540e\u8bf7\u6c42\u76f8\u540c\u7684 URL \u4f1a\u547d\u4e2d\u5f3a\u5236\u7f13\u5b58\u3002\u5982\u679c\u6709\u66f4\u65b0\u7684\u8bdd\uff0c\u53ef\u4ee5\u66f4\u65b0\u8d44\u6e90\u7684\u540d\uff0c\u6bd4\u5982\uff1a\u6dfb\u52a0 hash \u503c\u3001\u7248\u672c\u53f7\u7b49\uff0c\u8fbe\u5230\u66f4\u6539 URL \u7684\u76ee\u7684\uff0c\u4ece\u800c\u8ba9\u5ba2\u6237\u7aef\u8bf7\u6c42\u65b0\u8d44\u6e90\u3002"),(0,l.kt)("h2",{id:"\u7f13\u5b58\u5f71\u54cd"},"\u7f13\u5b58\u5f71\u54cd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6253\u5f00\u7f51\u9875\uff1a\u67e5\u627e ",(0,l.kt)("inlineCode",{parentName:"li"},"disk cache")," \u4e2d\u662f\u5426\u6709\u5339\u914d\u3002\u5982\u6709\u5219\u4f7f\u7528\uff1b\u5982\u6ca1\u6709\u5219\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u666e\u901a\u5237\u65b0(F5)\uff1a\u56e0\u4e3a TAB \u5e76\u6ca1\u6709\u5173\u95ed\uff0c\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"li"},"memory cache")," \u662f\u53ef\u7528\u7684\uff0c\u4f1a\u88ab\u4f18\u5148\u4f7f\u7528\uff08\u5982\u679c\u5339\u914d\u7684\u8bdd\uff09\uff0c\u5176\u6b21\u624d\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"disk cache"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u5237\u65b0(Ctrl+F5)\uff1a\u6d4f\u89c8\u5668\u4e0d\u4f7f\u7528\u7f13\u5b58\uff0c\u56e0\u6b64\u53d1\u9001\u7684\u8bf7\u6c42\u5934\u90e8\u5747\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control: no-cache")," (\u4e3a\u4e86\u517c\u5bb9\uff0c\u8fd8\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"Pragma:no-cache"),")\uff0c\u670d\u52a1\u5668\u76f4\u63a5\u8fd4\u56de 200 \u548c\u6700\u65b0\u5185\u5bb9\u3002")))}u.isMDXComponent=!0},5483:function(e,t,n){t.Z=n.p+"assets/images/browser-cache-process-660afc1a66871d8e62b38f26c9e52e59.png"},5162:function(e,t,n){t.Z=n.p+"assets/images/browser-cache-theoty-6e07c191048c1dae100fbd101353d893.png"}}]);