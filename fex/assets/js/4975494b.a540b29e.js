(self.webpackChunkfex=self.webpackChunkfex||[]).push([[2756],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9111:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={id:"readme",title:"\u6982\u89c8",slug:"/forward/security"},c=void 0,u={unversionedId:"interview/security/readme",id:"interview/security/readme",isDocsHomePage:!1,title:"\u6982\u89c8",description:"\u5e38\u89c1\u7684 Web \u5b89\u5168\u653b\u51fb\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1aXSS \u653b\u51fb\u3001CSRF \u653b\u51fb\u3001SQL \u6ce8\u5165\u3001DDoS \u653b\u51fb\u3001\u6d41\u91cf\u52ab\u6301\u7b49\u3002",source:"@site/docs/interview/security/index.md",sourceDirName:"interview/security",slug:"/forward/security",permalink:"/fex/docs/forward/security",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/security/index.md",version:"current",frontMatter:{id:"readme",title:"\u6982\u89c8",slug:"/forward/security"}},p=[{value:"\u5176\u4ed6\u653b\u51fb\u7c7b\u578b",id:"\u5176\u4ed6\u653b\u51fb\u7c7b\u578b",children:[{value:"SQL \u6ce8\u5165",id:"sql-\u6ce8\u5165",children:[]},{value:"DDoS \u653b\u51fb",id:"ddos-\u653b\u51fb",children:[]},{value:"\u6d41\u91cf\u52ab\u6301",id:"\u6d41\u91cf\u52ab\u6301",children:[]}]}],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5e38\u89c1\u7684 Web \u5b89\u5168\u653b\u51fb\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1aXSS \u653b\u51fb\u3001CSRF \u653b\u51fb\u3001SQL \u6ce8\u5165\u3001DDoS \u653b\u51fb\u3001\u6d41\u91cf\u52ab\u6301\u7b49\u3002"),(0,i.kt)("p",null,"\u5176\u4e2d\uff0cXSS \u653b\u51fb\u548c CSRF \u653b\u51fb\u4f1a\u4e13\u95e8\u6587\u7ae0\uff0c\u8fd9\u91cc\u518d\u8bb0\u5f55\u4e0b\u5176\u4ed6\u7684\u51e0\u79cd\u653b\u51fb\u7c7b\u578b\u3002"),(0,i.kt)("h2",{id:"\u5176\u4ed6\u653b\u51fb\u7c7b\u578b"},"\u5176\u4ed6\u653b\u51fb\u7c7b\u578b"),(0,i.kt)("h3",{id:"sql-\u6ce8\u5165"},"SQL \u6ce8\u5165"),(0,i.kt)("p",null,"SQL \u6ce8\u5165\u653b\u51fb\u4e3b\u8981\u662f\u4f7f\u7528\u4e86\u7528\u6237\u4e0a\u4f20\u7684\u6570\u636e\u62fc\u51d1\u51fa SQL \u8bed\u53e5\uff0c\u4ece\u800c\u64cd\u4f5c\u6570\u636e\u5e93\u3002"),(0,i.kt)("p",null,"\u9632\u6b62 SQL \u6ce8\u5165\u4e3b\u8981\u662f\u4e0d\u80fd\u5141\u8bb8\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u5f71\u54cd\u6b63\u5e38\u7684 SQL \u8bed\u53e5\u7684\u903b\u8f91\uff0c\u5f53\u7528\u6237\u7684\u8f93\u5165\u7684\u4fe1\u606f\u5c06\u8981\u7528\u6765\u62fc\u63a5 SQL \u8bed\u53e5\u7684\u8bdd\uff0c\u6211\u4eec\u5e94\u8be5\u6c38\u8fdc\u9009\u62e9\u4e0d\u76f8\u4fe1\uff0c\u4efb\u4f55\u5185\u5bb9\u90fd\u5fc5\u987b\u8fdb\u884c\u8f6c\u4e49\u8fc7\u6ee4\uff0c\u5f53\u7136\u505a\u5230\u8fd9\u4e2a\u8fd8\u662f\u4e0d\u591f\u7684\uff0c\u4e0b\u9762\u5217\u51fa\u9632\u5fa1 SQL \u6ce8\u5165\u7684\u51e0\u70b9\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e25\u683c\u9650\u5236 Web \u5e94\u7528\u7684\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u6743\u9650"),"\uff0c\u7ed9\u6b64\u7528\u6237\u63d0\u4f9b\u4ec5\u4ec5\u80fd\u591f\u6ee1\u8db3\u5176\u5de5\u4f5c\u7684\u6700\u4f4e\u6743\u9650\uff0c\u4ece\u800c\u6700\u5927\u9650\u5ea6\u7684\u51cf\u5c11\u6ce8\u5165\u653b\u51fb\u5bf9\u6570\u636e\u5e93\u7684\u5371\u5bb3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u540e\u7aef\u4ee3\u7801\u68c0\u67e5\u8f93\u5165\u7684\u6570\u636e\u662f\u5426\u7b26\u5408\u9884\u671f"),"\uff0c\u4e25\u683c\u9650\u5236\u53d8\u91cf\u7684\u7c7b\u578b\uff0c\u4f8b\u5982\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u4e00\u4e9b\u5339\u914d\u5904\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5bf9\u8fdb\u5165\u6570\u636e\u5e93\u7684\u7279\u6b8a\u5b57\u7b26\u8fdb\u884c\u8f6c\u4e49\u5904\u7406"),"\uff0c\u6216\u7f16\u7801\u8f6c\u6362\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6240\u6709\u7684\u67e5\u8be2\u8bed\u53e5\u5efa\u8bae\u4f7f\u7528\u6570\u636e\u5e93\u63d0\u4f9b\u7684\u53c2\u6570\u5316\u67e5\u8be2\u63a5\u53e3"),"\uff0c\u53c2\u6570\u5316\u7684\u8bed\u53e5\u4f7f\u7528\u53c2\u6570\u800c\u4e0d\u662f\u5c06\u7528\u6237\u8f93\u5165\u53d8\u91cf\u5d4c\u5165\u5230 SQL \u8bed\u53e5\u4e2d\uff0c\u5373\u4e0d\u8981\u76f4\u63a5\u62fc\u63a5 SQL \u8bed\u53e5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5728\u5e94\u7528\u53d1\u5e03\u4e4b\u524d\u5efa\u8bae\u4f7f\u7528\u4e13\u4e1a\u7684 SQL \u6ce8\u5165\u68c0\u6d4b\u5de5\u5177\u8fdb\u884c\u68c0\u6d4b"),"\uff0c\u4ee5\u53ca\u65f6\u4fee\u8865\u88ab\u53d1\u73b0\u7684 SQL \u6ce8\u5165\u6f0f\u6d1e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u907f\u514d\u7f51\u7ad9\u6253\u5370\u51fa SQL \u9519\u8bef\u4fe1\u606f"),"\uff0c\u6bd4\u5982\u7c7b\u578b\u9519\u8bef\u3001\u5b57\u6bb5\u4e0d\u5339\u914d\u7b49\uff0c\u628a\u4ee3\u7801\u91cc\u7684 SQL \u8bed\u53e5\u66b4\u9732\u51fa\u6765\uff0c\u4ee5\u9632\u6b62\u653b\u51fb\u8005\u5229\u7528\u8fd9\u4e9b\u9519\u8bef\u4fe1\u606f\u8fdb\u884c SQL \u6ce8\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u8fc7\u4e8e\u7ec6\u5316\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f"),"\uff0c\u5982\u679c\u76ee\u7684\u662f\u65b9\u4fbf\u8c03\u8bd5\uff0c\u5c31\u53bb\u4f7f\u7528\u540e\u7aef\u65e5\u5fd7\uff0c\u4e0d\u8981\u5728\u63a5\u53e3\u4e0a\u8fc7\u591a\u7684\u66b4\u9732\u51fa\u9519\u4fe1\u606f\uff0c\u6bd5\u7adf\u771f\u6b63\u7684\u7528\u6237\u4e0d\u5173\u5fc3\u592a\u591a\u7684\u6280\u672f\u7ec6\u8282\uff0c\u53ea\u8981\u8bdd\u672f\u5408\u7406\u5c31\u884c\u3002")),(0,i.kt)("h3",{id:"ddos-\u653b\u51fb"},"DDoS \u653b\u51fb"),(0,i.kt)("p",null,"DDoS\uff08Distributed Denial of Service\uff09\u5206\u5e03\u5f0f\u62d2\u7edd\u670d\u52a1\uff0c\u5176\u539f\u7406\u5c31\u662f\u5229\u7528\u5927\u91cf\u7684\u8bf7\u6c42",(0,i.kt)("strong",{parentName:"p"},"\u9020\u6210\u8d44\u6e90\u8fc7\u8f7d\uff0c\u5bfc\u81f4\u670d\u52a1\u4e0d\u53ef\u7528"),"\u3002\u8fd9\u4e2a\u653b\u51fb\u5e94\u8be5\u4e0d\u80fd\u7b97\u662f\u5b89\u5168\u95ee\u9898\uff0c\u8fd9\u5e94\u8be5\u7b97\u662f\u4e00\u4e2a\u53e6\u7c7b\u7684\u5b58\u5728\uff0c\u56e0\u4e3a\u8fd9\u79cd\u653b\u51fb\u5176\u5b9e\u5c31\u662f\u800d\u6d41\u6c13\u3002"),(0,i.kt)("p",null,"DDos \u653b\u51fb\u4ece\u5c42\u6b21\u4e0a\u53ef\u5206\u4e3a\u7f51\u7edc\u5c42\u653b\u51fb\u4e0e\u5e94\u7528\u5c42\u653b\u51fb\uff0c\u4ece\u653b\u51fb\u624b\u6cd5\u4e0a\u53ef\u5206\u4e3a\u5feb\u578b\u6d41\u91cf\u653b\u51fb\u4e0e\u6162\u578b\u6d41\u91cf\u653b\u51fb\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u770b\u5b8c\u8d44\u6599\uff0cDDoS \u653b\u51fb\u76f8\u5bf9\u590d\u6742\uff0c\u5185\u5bb9\u76f8\u5bf9\u6df1\u5165\uff0c\u540e\u7eed\u518d\u6162\u6162\u4e86\u89e3\u3002"))),(0,i.kt)("h3",{id:"\u6d41\u91cf\u52ab\u6301"},"\u6d41\u91cf\u52ab\u6301"),(0,i.kt)("p",null,"\u6d41\u91cf\u52ab\u6301\u57fa\u672c\u5206\u4e24\u79cd\uff1aDNS \u52ab\u6301 \u548c HTTP \u52ab\u6301\u3002\u76ee\u7684\u90fd\u662f\u4e00\u6837\u7684\uff0c\u5c31\u662f\u5f53\u7528\u6237\u8bbf\u95ee\u67d0\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u7ed9\u4f60\u5c55\u793a\u7684\u5e76\u4e0d\u662f\u6216\u8005\u4e0d\u5b8c\u5168\u662f\u8be5\u7f51\u7ad9\u63d0\u4f9b\u7684\u5185\u5bb9\u3002"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tech.meituan.com/2018/09/27/fe-security.html"},"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e00\uff09\uff1a\u5982\u4f55\u9632\u6b62 XSS \u653b\u51fb\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html"},"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u9632\u6b62 CSRF \u653b\u51fb\uff1f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zoumiaojiang.com/article/common-web-security/"},"\u5e38\u89c1 Web \u5b89\u5168\u653b\u9632\u603b\u7ed3"))))}m.isMDXComponent=!0}}]);