"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[76],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=u(r),f=l,m=k["".concat(p,".").concat(f)]||k[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},290:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"gc",title:"\u5783\u573e\u56de\u6536"},p=void 0,u={unversionedId:"forward/browser/gc",id:"forward/browser/gc",isDocsHomePage:!1,title:"\u5783\u573e\u56de\u6536",description:"\u4ec0\u4e48\u662f\u5783\u573e\u6570\u636e",source:"@site/docs/forward/browser/browser-gc.md",sourceDirName:"forward/browser",slug:"/forward/browser/gc",permalink:"/fex/docs/forward/browser/gc",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/browser/browser-gc.md",tags:[],version:"current",frontMatter:{id:"gc",title:"\u5783\u573e\u56de\u6536"},sidebar:"forward",previous:{title:"\u6d4f\u89c8\u5668\u7f13\u5b58",permalink:"/fex/docs/forward/browser/cache"},next:{title:"\u8de8\u57df",permalink:"/fex/docs/forward/browser/cross-origin"}},c=[{value:"\u4ec0\u4e48\u662f\u5783\u573e\u6570\u636e",id:"\u4ec0\u4e48\u662f\u5783\u573e\u6570\u636e",children:[]},{value:"\u5783\u573e\u56de\u6536\u7b97\u6cd5",id:"\u5783\u573e\u56de\u6536\u7b97\u6cd5",children:[{value:"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u7684\u53ef\u8fbe\u6570\u636e",id:"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u7684\u53ef\u8fbe\u6570\u636e",children:[]},{value:"\u56de\u6536\u4e0d\u53ef\u8fbe\u503c\u5360\u636e\u7684\u5185\u5b58",id:"\u56de\u6536\u4e0d\u53ef\u8fbe\u503c\u5360\u636e\u7684\u5185\u5b58",children:[]},{value:"\u5185\u5b58\u6574\u7406",id:"\u5185\u5b58\u6574\u7406",children:[]}]},{value:"\u4ec0\u4e48\u65f6\u5019\u56de\u6536\u5783\u573e",id:"\u4ec0\u4e48\u65f6\u5019\u56de\u6536\u5783\u573e",children:[{value:"\u5206\u4ee3\u6536\u96c6",id:"\u5206\u4ee3\u6536\u96c6",children:[]},{value:"\u589e\u91cf\u6536\u96c6",id:"\u589e\u91cf\u6536\u96c6",children:[]},{value:"\u95f2\u65f6\u6536\u96c6",id:"\u95f2\u65f6\u6536\u96c6",children:[]}]}],s={toc:c};function k(e){var t=e.components,o=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5783\u573e\u6570\u636e"},"\u4ec0\u4e48\u662f\u5783\u573e\u6570\u636e"),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u6570\u636e\u4e0d\u88ab\u9700\u8981\u7684\u65f6\u5019\uff0c\u5b83\u5c31\u662f\u5783\u573e\u6570\u636e\uff0c\u5783\u573e\u6570\u636e\u5360\u7528\u7684\u5185\u5b58\u5c31\u5e94\u8be5\u88ab\u56de\u6536\u3002"),(0,a.kt)("h2",{id:"\u5783\u573e\u56de\u6536\u7b97\u6cd5"},"\u5783\u573e\u56de\u6536\u7b97\u6cd5"),(0,a.kt)("p",null,"\u5783\u573e\u56de\u6536\u53ef\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u7684\u53ef\u8fbe\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u56de\u6536\u4e0d\u53ef\u8fbe\u503c\u5360\u636e\u7684\u5185\u5b58"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u5b58\u6574\u7406")),(0,a.kt)("h3",{id:"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u7684\u53ef\u8fbe\u6570\u636e"},"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u7684\u53ef\u8fbe\u6570\u636e"),(0,a.kt)("p",null,"V8 \u91c7\u7528\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u8fbe\u6027"),"\uff08reachability\uff09\u7b97\u6cd5\u6765\u5224\u65ad\u5806\u4e2d\u7684\u5bf9\u8c61\u662f\u5426\u5e94\u8be5\u88ab\u56de\u6536\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7b97\u6cd5\u7684\u601d\u8def\u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece\u6839\u8282\u70b9\uff08Root\uff09\u51fa\u53d1\uff0c\u904d\u5386\u6240\u6709\u7684\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u904d\u5386\u5230\u7684\u5bf9\u8c61\uff0c\u662f\u53ef\u8fbe\u7684\uff08reachable\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u88ab\u904d\u5386\u5230\u7684\u5bf9\u8c61\uff0c\u4e0d\u53ef\u8fbe\u7684\uff08unreachable\uff09")),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u6839\u8282\u70b9\u6709\u5f88\u591a\uff0c\u4e3b\u8981\u5305\u62ec\u8fd9\u51e0\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u53d8\u91cf window\uff0c\u4f4d\u4e8e\u6bcf\u4e2a iframe \u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863 DOM \u6811"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u653e\u5728\u6808\u4e0a\u7684\u53d8\u91cf")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6839\u8282\u70b9\u4e0d\u662f\u5783\u573e\uff0c\u4e0d\u53ef\u80fd\u88ab\u56de\u6536\u3002"),(0,a.kt)("h3",{id:"\u56de\u6536\u4e0d\u53ef\u8fbe\u503c\u5360\u636e\u7684\u5185\u5b58"},"\u56de\u6536\u4e0d\u53ef\u8fbe\u503c\u5360\u636e\u7684\u5185\u5b58"),(0,a.kt)("p",null,"\u5728\u6240\u6709\u7684\u6807\u8bb0\u5b8c\u6210\u4e4b\u540e\uff0c\u7edf\u4e00\u6e05\u7406\u5185\u5b58\u4e2d\u6240\u6709\u4e0d\u53ef\u8fbe\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"\u5185\u5b58\u6574\u7406"},"\u5185\u5b58\u6574\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u9891\u7e41\u56de\u6536\u5bf9\u8c61\u540e\uff0c\u5185\u5b58\u4e2d\u5c31\u4f1a\u5b58\u5728\u5927\u91cf\u4e0d\u8fde\u7eed\u7a7a\u95f4\uff0c\u4e13\u4e1a\u540d\u8bcd\u53eb\u300c\u5185\u5b58\u788e\u7247\u300d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5185\u5b58\u4e2d\u51fa\u73b0\u4e86\u5927\u91cf\u7684\u5185\u5b58\u788e\u7247\uff0c\u5982\u679c\u9700\u8981\u5206\u914d\u8f83\u5927\u7684\u8fde\u7eed\u5185\u5b58\u65f6\uff0c\u5c31\u6709\u53ef\u80fd\u51fa\u73b0\u5185\u5b58\u4e0d\u8db3\u7684\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6700\u540e\u4e00\u6b65\u662f\u6574\u7406\u5185\u5b58\u788e\u7247\u3002 (\u4f46\u8fd9\u6b65\u5176\u5b9e\u662f\u53ef\u9009\u7684\uff0c\u56e0\u4e3a\u6709\u7684\u5783\u573e\u56de\u6536\u5668\u4e0d\u4f1a\u4ea7\u751f\u5185\u5b58\u788e\u7247\uff0c\u6bd4\u5982\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u4ecb\u7ecd\u7684\u526f\u5783\u573e\u56de\u6536\u5668)")),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u56de\u6536\u5783\u573e"},"\u4ec0\u4e48\u65f6\u5019\u56de\u6536\u5783\u573e"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8fdb\u884c\u5783\u573e\u56de\u6536\u7684\u65f6\u5019\uff0c\u4f1a\u6682\u505c JavaScript \u811a\u672c\uff0c\u7b49\u5783\u573e\u56de\u6536\u5b8c\u6bd5\u518d\u7ee7\u7eed\u6267\u884c\u3002\u5bf9\u4e8e\u666e\u901a\u5e94\u7528\u8fd9\u6837\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u5bf9\u4e8e JS \u6e38\u620f\u3001\u52a8\u753b\u5bf9\u8fde\u8d2f\u6027\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\u5e94\u7528\uff0c\u5982\u679c\u6682\u505c\u65f6\u95f4\u5f88\u957f\u5c31\u4f1a\u9020\u6210\u9875\u9762\u5361\u987f\u3002"),(0,a.kt)("h3",{id:"\u5206\u4ee3\u6536\u96c6"},"\u5206\u4ee3\u6536\u96c6"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u5c06\u6570\u636e\u5206\u4e3a\u4e24\u79cd\uff0c\u5206\u522b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u4e34\u65f6\u5bf9\u8c61"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u957f\u4e45\u5bf9\u8c61"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e34\u65f6\u5bf9\u8c61"),"\uff1a\u5927\u90e8\u5206\u5bf9\u8c61\u5728\u5185\u5b58\u4e2d\u5b58\u6d3b\u7684\u65f6\u95f4\u5f88\u77ed\u3002\u6bd4\u5982\u51fd\u6570\u5185\u90e8\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u6216\u8005\u5757\u7ea7\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\u3002\u5f53\u51fd\u6570\u6216\u8005\u4ee3\u7801\u5757\u6267\u884c\u7ed3\u675f\u65f6\uff0c\u4f5c\u7528\u57df\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u5c31\u4f1a\u88ab\u9500\u6bc1\u3002\u8fd9\u7c7b\u5bf9\u8c61\u5f88\u5feb\u5c31\u53d8\u5f97\u4e0d\u53ef\u8bbf\u95ee\uff0c\u5e94\u8be5\u5feb\u70b9\u56de\u6536\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u957f\u4e45\u5bf9\u8c61"),"\uff1a\u751f\u547d\u5468\u671f\u5f88\u957f\u7684\u5bf9\u8c61\uff0c\u6bd4\u5982\u5168\u5c40\u7684 window\u3001DOM\u3001Web API \u7b49\u3002\u8fd9\u7c7b\u5bf9\u8c61\u53ef\u4ee5\u6162\u70b9\u56de\u6536\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e24\u79cd\u5bf9\u8c61\u5bf9\u5e94\u4e0d\u540c\u7684\u56de\u6536\u7b56\u7565\uff0c\u6240\u4ee5\uff0cV8 \u628a\u5806\u5206\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u751f\u4ee3"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u8001\u751f\u4ee3"),"\u4e24\u4e2a\u533a\u57df\uff0c\u65b0\u751f\u4ee3\u4e2d\u5b58\u653e\u4e34\u65f6\u5bf9\u8c61\uff0c\u8001\u751f\u4ee3\u4e2d\u5b58\u653e\u6301\u4e45\u5bf9\u8c61\u3002\u5e76\u4e14\u8ba9\u526f\u5783\u573e\u56de\u6536\u5668\u3001\u4e3b\u5783\u573e\u56de\u6536\u5668\uff0c\u5206\u522b\u8d1f\u8d23\u65b0\u751f\u4ee3\u3001\u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u9ad8\u6548\u7684\u5783\u573e\u56de\u6536\u3002"),(0,a.kt)("h4",{id:"\u4e3b\u5783\u573e\u56de\u6536\u5668"},"\u4e3b\u5783\u573e\u56de\u6536\u5668"),(0,a.kt)("p",null,"\u8d1f\u8d23\u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\uff0c\u6709\u4e24\u4e2a\u7279\u70b9\uff1a\u5bf9\u8c61\u5360\u7528\u7a7a\u95f4\u5927\uff0c\u5bf9\u8c61\u5b58\u6d3b\u65f6\u95f4\u957f\u3002"),(0,a.kt)("p",null,"\u5b83\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u6807\u8bb0-\u6e05\u9664"),"\u7684\u7b97\u6cd5\u6267\u884c\u5783\u573e\u56de\u6536\u3002\u6982\u62ec\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bb0\u5783\u573e"),(0,a.kt)("li",{parentName:"ol"},"\u6e05\u7406\u5783\u573e"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u5b58\u6574\u7406")),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u7ed9\u6240\u6709\u5783\u573e\u6570\u636e\u4f5c\u6807\u8bb0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece\u4e00\u7ec4\u6839\u5143\u7d20\u5f00\u59cb\uff0c\u9012\u5f52\u904d\u5386\u8fd9\u7ec4\u6839\u5143\u7d20\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u4e2a\u904d\u5386\u8fc7\u7a0b\u4e2d\uff0c\u80fd\u5230\u8fbe\u7684\u5143\u7d20\u79f0\u4e3a\u6d3b\u52a8\u5bf9\u8c61\uff0c\u6ca1\u6709\u5230\u8fbe\u7684\u5143\u7d20\u5c31\u53ef\u4ee5\u5224\u65ad\u4e3a\u5783\u573e\u6570\u636e\u3002")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u5c06\u6807\u8bb0\u4e3a\u5783\u573e\u7684\u6570\u636e\u6e05\u7406\u6389"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GC Step",src:r(8757).Z})),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u591a\u6b21\u6267\u884c\u6807\u8bb0-\u6e05\u9664\u540e\uff0c\u4f1a\u4ea7\u751f\u5927\u91cf\u4e0d\u8fde\u7eed\u7684\u5185\u5b58\u788e\u7247\uff0c\u9700\u8981\u8fdb\u884c\u5185\u5b58\u6574\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3195).Z})),(0,a.kt)("h4",{id:"\u526f\u5783\u573e\u56de\u6536\u5668"},"\u526f\u5783\u573e\u56de\u6536\u5668"),(0,a.kt)("p",null,"\u8d1f\u8d23\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\uff0c\u901a\u5e38\u53ea\u652f\u6301 1~8M \u7684\u5bb9\u91cf\u3002"),(0,a.kt)("p",null,"\u65b0\u751f\u4ee3\u88ab\u5206\u4e3a\u4e24\u4e2a\u533a\u57df\uff1a\u4e00\u534a\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u533a\u57df"),"\uff0c\u4e00\u534a\u662f",(0,a.kt)("strong",{parentName:"p"},"\u7a7a\u95f2\u533a\u57df"),"\u3002\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GC V8",src:r(1643).Z})),(0,a.kt)("p",null,"\u65b0\u52a0\u5165\u7684\u5bf9\u8c61\u90fd\u88ab\u653e\u5165\u5bf9\u8c61\u533a\u57df\uff0c\u7b49\u5bf9\u8c61\u533a\u57df\u5feb\u6ee1\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884c\u4e00\u6b21\u5783\u573e\u6e05\u7406\u3002\u6982\u62ec\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6807\u8bb0\u5bf9\u8c61\u533a\u5783\u573e"),(0,a.kt)("li",{parentName:"ol"},"\u590d\u5236\u5bf9\u8c61\u533a\u7684\u5b58\u6d3b\u6570\u636e\u5230\u7a7a\u95f2\u533a\uff0c\u5e76\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u8c03\u7a7a\u95f2\u533a\u4e0e\u5bf9\u8c61\u533a")),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u7ed9\u5bf9\u8c61\u533a\u57df\u6240\u6709\u5783\u573e\u6570\u636e\u4f5c\u6807\u8bb0"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u6807\u8bb0\u5b8c\u6210\u540e\uff0c\u5b58\u6d3b\u7684\u5bf9\u8c61\u88ab\u590d\u5236\u5230\u7a7a\u95f2\u533a\u57df\uff0c\u5e76\u4e14\u5c06\u4ed6\u4eec\u6709\u5e8f\u7684\u6392\u5217\u4e00\u904d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GC Step",src:r(4991).Z})),(0,a.kt)("p",null,"\u526f\u5783\u573e\u56de\u6536\u5668\u6ca1\u6709\u788e\u7247\u6574\u7406\u3002\u662f\u56e0\u4e3a\u7a7a\u95f2\u533a\u57df\u91cc\u6b64\u65f6\u662f\u6709\u5e8f\u7684\uff0c\u6ca1\u6709\u788e\u7247\u4e5f\u5c31\u4e0d\u9700\u8981\u6574\u7406\u4e86\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u590d\u5236\u5b8c\u6210\u540e\uff0c\u5bf9\u8c61\u533a\u57df\u4f1a\u548c\u7a7a\u95f2\u533a\u57df\u8fdb\u884c\u5bf9\u8c03\uff0c\u5c06\u7a7a\u95f2\u533a\u57df\u4e2d\u5b58\u6d3b\u7684\u5bf9\u8c61\u653e\u5165\u5bf9\u8c61\u533a\u57df\u91cc"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GC Step",src:r(3174).Z})),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u5c31\u5b8c\u6210\u4e86\u5783\u573e\u56de\u6536\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u526f\u5783\u573e\u56de\u6536\u5668\u64cd\u4f5c\u6bd4\u8f83\u9891\u7e41\uff0c\u4e3a\u4e86\u6267\u884c\u6548\u7387\uff0c\u4e00\u822c\u65b0\u751f\u533a\u7684\u7a7a\u95f4\u4f1a\u88ab\u8bbe\u7f6e\u5f97\u6bd4\u8f83\u5c0f\u3002\u4e00\u65e6\u68c0\u6d4b\u5230\u7a7a\u95f4\u88c5\u6ee1\u4e86\uff0c\u5c31\u6267\u884c\u5783\u573e\u56de\u6536\u3002"),(0,a.kt)("p",null,"\u4e00\u53e5\u8bdd\u603b\u7ed3\u5206\u4ee3\u56de\u6536\u5c31\u662f\uff1a\u5c06\u5806\u5206\u4e3a\u65b0\u751f\u4ee3\u4e0e\u8001\u751f\u4ee3\uff0c\u591a\u56de\u6536\u65b0\u751f\u4ee3\uff0c\u5c11\u56de\u6536\u8001\u751f\u4ee3\u3002\u8fd9\u6837\u5c31\u51cf\u5c11\u4e86\u6bcf\u6b21\u9700\u904d\u5386\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u51cf\u5c11\u6bcf\u6b21\u5783\u573e\u56de\u6536\u7684\u8017\u65f6\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GC Step Summary",src:r(5159).Z})),(0,a.kt)("h3",{id:"\u589e\u91cf\u6536\u96c6"},"\u589e\u91cf\u6536\u96c6"),(0,a.kt)("p",null,"\u5982\u679c\u811a\u672c\u4e2d\u6709\u8bb8\u591a\u5bf9\u8c61\uff0c\u5f15\u64ce\u4e00\u6b21\u6027\u904d\u5386\u6574\u4e2a\u5bf9\u8c61\uff0c\u4f1a\u9020\u6210\u4e00\u4e2a\u957f\u65f6\u95f4\u6682\u505c\u3002\u6240\u4ee5\u5f15\u64ce\u5c06\u5783\u573e\u6536\u96c6\u5de5\u4f5c\u5206\u6210\u66f4\u5c0f\u7684\u5757\uff0c\u6bcf\u6b21\u5904\u7406\u4e00\u90e8\u5206\uff0c\u591a\u6b21\u5904\u7406\u3002\u8fd9\u6837\u5c31\u89e3\u51b3\u4e86\u957f\u65f6\u95f4\u505c\u987f\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u95f2\u65f6\u6536\u96c6"},"\u95f2\u65f6\u6536\u96c6"),(0,a.kt)("p",null,"\u5783\u573e\u6536\u96c6\u5668\u53ea\u4f1a\u5728 CPU \u7a7a\u95f2\u65f6\u5c1d\u8bd5\u8fd0\u884c\uff0c\u4ee5\u51cf\u5c11\u53ef\u80fd\u5bf9\u4ee3\u7801\u6267\u884c\u7684\u5f71\u54cd\u3002"))}k.isMDXComponent=!0},8757:function(e,t,r){t.Z=r.p+"assets/images/gc-sep-1-5f84d9bb76eaf1a7d2202344b8b40637.png"},3195:function(e,t,r){t.Z=r.p+"assets/images/gc-sep-2-80b2b3c05b15f020b718c594e9a8cde5.png"},4991:function(e,t,r){t.Z=r.p+"assets/images/gc-sep-3-4da6bec35006044ca0f2aebe1fc52a3e.png"},3174:function(e,t,r){t.Z=r.p+"assets/images/gc-sep-4-a826e2b1515d37078f2d34d6876e2d37.png"},5159:function(e,t,r){t.Z=r.p+"assets/images/gc-sep-summary-4b832ba96fa9277cc9c73fd855caa10f.png"},1643:function(e,t,r){t.Z=r.p+"assets/images/gc-v8-f7f51eb18639ea2be6238e4bf0df3ae6.png"}}]);