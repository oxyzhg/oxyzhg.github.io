"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[6633],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),d=l,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5860:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=["components"],p={id:"source-map",title:"Source Map \u914d\u7f6e\u5206\u6790"},i=void 0,u={unversionedId:"engineering/webpack/source-map",id:"engineering/webpack/source-map",isDocsHomePage:!1,title:"Source Map \u914d\u7f6e\u5206\u6790",description:"\u4f7f\u7528\u573a\u666f",source:"@site/series/engineering/webpack/source-map.md",sourceDirName:"engineering/webpack",slug:"/engineering/webpack/source-map",permalink:"/fex/series/engineering/webpack/source-map",editUrl:"https://github.com/oxyzhg/fex/edit/main/series/engineering/webpack/source-map.md",tags:[],version:"current",frontMatter:{id:"source-map",title:"Source Map \u914d\u7f6e\u5206\u6790"},sidebar:"engineering",previous:{title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790",permalink:"/fex/series/engineering/webpack/optimization-analysis"},next:{title:"Hot Module Replacement",permalink:"/fex/series/engineering/webpack/hot-module-replacement"}},s=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[]},{value:"\u5173\u952e\u5b57\u5206\u6790",id:"\u5173\u952e\u5b57\u5206\u6790",children:[]},{value:"\u4ee3\u7801\u8d28\u91cf\u8bf4\u660e",id:"\u4ee3\u7801\u8d28\u91cf\u8bf4\u660e",children:[]},{value:"\u5e38\u89c1\u914d\u7f6e\u5206\u6790",id:"\u5e38\u89c1\u914d\u7f6e\u5206\u6790",children:[]},{value:"\u5177\u4f53\u5e94\u7528\u573a\u666f\u5206\u6790",id:"\u5177\u4f53\u5e94\u7528\u573a\u666f\u5206\u6790",children:[{value:"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883",id:"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883",children:[]},{value:"\u7279\u5b9a\u573a\u666f",id:"\u7279\u5b9a\u573a\u666f",children:[]},{value:"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883",id:"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883",children:[]}]}],m={toc:s};function c(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883\uff0c\u901a\u5e38\u5e0c\u671b\u66f4\u5feb\u901f\u7684 source map\uff0c\u9700\u8981\u6dfb\u52a0\u5230 bundle \u6587\u4ef6\u4ee5\u589e\u52a0\u4f53\u79ef\u4e3a\u4ee3\u4ef7\uff1b\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u901a\u5e38\u5e0c\u671b\u66f4\u7cbe\u786e\u7684 source map\uff0c\u9700\u8981\u4ece bundle \u4e2d\u5206\u79bb\u5e76\u72ec\u7acb\u5b58\u5728\uff0c\u5e76\u4e14\u5c3d\u91cf\u4fdd\u8bc1 rebuild \u901f\u5ea6\u3002"),(0,r.kt)("h2",{id:"\u5173\u952e\u5b57\u5206\u6790"},"\u5173\u952e\u5b57\u5206\u6790"),(0,r.kt)("p",null,"\u4e66\u5199\u683c\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map")),(0,r.kt)("p",null,"\u5173\u952e\u5b57\u8bf4\u660e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"source-map"),": \u975e cheap, eval \u4fee\u9970\u7684\u7c7b\u578b\uff0c\u6700\u7ec8\u90fd\u4f1a\u751f\u6210 .map \u6587\u4ef6\uff0c\u5e76\u5728 bundle \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5f15\u7528\u6ce8\u91ca\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"eval"),": \u4f7f\u7528 eval \u51fd\u6570\u5305\u88f9\u6e90\u4ee3\u7801\u3002\u8be5\u5173\u952e\u5b57\u4e0d\u4f1a\u751f\u6210\u5355\u72ec\u7684 .map \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cheap"),": \u6ca1\u6709\u5217\u6620\u5c04(column mapping)\u7684 source map\uff0c\u5ffd\u7565 loader source map\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline"),": \u4e0d\u4f1a\u751f\u6210\u5355\u72ec\u7684 .map \u6587\u4ef6\uff0c\u4e0e\u5f62\u5982 eval-","*"," \u7c7b\u578b\u751f\u6210\u7684\u4ee3\u7801\u7c7b\u4f3c\u90fd\u4f1a\u6dfb\u52a0\u5230 bundle \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"module"),": \u5c06 loader source map \u7b80\u5316\u4e3a\u6bcf\u884c\u4e00\u4e2a\u6620\u5c04(mapping)\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hidden"),": \u751f\u6210 source map \u6587\u4ef6\uff0c\u4f46\u4e0d\u4f1a\u4e3a bundle \u589e\u52a0\u5f15\u7528\u6ce8\u91ca\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"eval, inline \u90fd\u53ef\u4ee5\u770b\u4f5c\u662f source map \u7684\u4fee\u9970\u7b26\uff0c\u5e76\u4e14\u8fd9\u4e24\u8005\u662f\u5e76\u5217\u5173\u7cfb\uff0c\u4e0d\u4f1a\u540c\u65f6\u51fa\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"eval, inline \u90fd\u4f1a\u5c06 source map \u5185\u5bb9\u4ee5\u6ce8\u91ca\u7684\u5f62\u5f0f\u6dfb\u52a0\u5230 bundle \u4e2d\uff0c\u8fd9\u4f1a\u589e\u52a0 bundle \u6587\u4ef6\u4f53\u79ef\uff0c\u4e0d\u9002\u7528\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("h2",{id:"\u4ee3\u7801\u8d28\u91cf\u8bf4\u660e"},"\u4ee3\u7801\u8d28\u91cf\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bundled"),": \u6240\u6709\u751f\u6210\u7684\u4ee3\u7801\u89c6\u4f5c\u4e00\u5927\u5757\u4ee3\u7801\u3002\u6ca1\u6709\u76f8\u4e92\u5206\u79bb\u7684\u6a21\u5757\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"generated"),": \u6bcf\u4e2a\u6a21\u5757\u76f8\u4e92\u5206\u79bb\uff0c\u5e76\u7528\u6a21\u5757\u540d\u79f0\u8fdb\u884c\u6ce8\u91ca\u3002\u53ef\u4ee5\u770b\u5230 webpack \u751f\u6210\u7684\u4ee3\u7801\u3002\u793a\u4f8b\uff1a\u4f60\u4f1a\u770b\u5230\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"li"},"var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42); module__WEBPACK_IMPORTED_MODULE_1__.a();"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},'import {test} from "module"; test();'),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transformed"),": \u6bcf\u4e2a\u6a21\u5757\u76f8\u4e92\u5206\u79bb\uff0c\u5e76\u7528\u6a21\u5757\u540d\u79f0\u8fdb\u884c\u6ce8\u91ca\u3002\u53ef\u4ee5\u770b\u5230 loader \u8f6c\u8bd1\u540e\u3001webpack \u8f6c\u6362\u524d\u7684\u4ee3\u7801\u3002\u793a\u4f8b\uff1a\u4f60\u4f1a\u770b\u5230\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"li"},'import {test} from "module"; var A = function(_test) { ... }(test);'),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},'import {test} from "module"; class A extends test {}'),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"original lines"),": \u6bcf\u4e2a\u6a21\u5757\u76f8\u4e92\u5206\u79bb\uff0c\u5e76\u7528\u6a21\u5757\u540d\u79f0\u8fdb\u884c\u6ce8\u91ca\u3002\u53ef\u4ee5\u770b\u5230\u8f6c\u8bd1\u524d\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"original"),": source map \u4e0d\u5305\u542b\u6e90\u7801\u5185\u5bb9\u3002\u6d4f\u89c8\u5668\u901a\u5e38\u4f1a\u53bb\u670d\u52a1\u4e2d\u52a0\u8f7d\u6e90\u4ee3\u7801\u3002")),(0,r.kt)("h2",{id:"\u5e38\u89c1\u914d\u7f6e\u5206\u6790"},"\u5e38\u89c1\u914d\u7f6e\u5206\u6790"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"devtool"),(0,r.kt)("th",{parentName:"tr",align:null},"quality"),(0,r.kt)("th",{parentName:"tr",align:null},"build"),(0,r.kt)("th",{parentName:"tr",align:null},"rebuild"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eval"),(0,r.kt)("td",{parentName:"tr",align:null},"generated"),(0,r.kt)("td",{parentName:"tr",align:null},"fast"),(0,r.kt)("td",{parentName:"tr",align:null},"fastest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eval-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest"),(0,r.kt)("td",{parentName:"tr",align:null},"ok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eval-cheap-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"transformed"),(0,r.kt)("td",{parentName:"tr",align:null},"ok"),(0,r.kt)("td",{parentName:"tr",align:null},"fast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eval-cheap-module-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original lines"),(0,r.kt)("td",{parentName:"tr",align:null},"slow"),(0,r.kt)("td",{parentName:"tr",align:null},"fast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inline-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cheap-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"transformed"),(0,r.kt)("td",{parentName:"tr",align:null},"ok"),(0,r.kt)("td",{parentName:"tr",align:null},"slow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inline-cheap-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"transformed"),(0,r.kt)("td",{parentName:"tr",align:null},"ok"),(0,r.kt)("td",{parentName:"tr",align:null},"slow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cheap-module-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original lines"),(0,r.kt)("td",{parentName:"tr",align:null},"slow"),(0,r.kt)("td",{parentName:"tr",align:null},"slow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inline-cheap-module-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original lines"),(0,r.kt)("td",{parentName:"tr",align:null},"slow"),(0,r.kt)("td",{parentName:"tr",align:null},"slow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nosources-source-map"),(0,r.kt)("td",{parentName:"tr",align:null},"original"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest"),(0,r.kt)("td",{parentName:"tr",align:null},"slowest")))),(0,r.kt)("p",null,"\u5206\u6790\u4e0e\u603b\u7ed3\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"eval,inline,hidden,nosources \u90fd\u662f\u4e0d\u5f71\u54cd source map \u8d28\u91cf\u7684\u4fee\u9970\u7b26\uff0c\u5b83\u4eec\u51b3\u5b9a\u4e86 source map \u4ee5\u4ec0\u4e48\u5f62\u5f0f\u51fa\u73b0\u5728\u4ec0\u4e48\u5730\u65b9\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f62\u5982 ","*","-module-source-map \u7c7b\u578b\uff0csource map \u8d28\u91cf\u90fd\u662f original lines."),(0,r.kt)("li",{parentName:"ol"},"\u5f62\u5982 ","*","-cheap-source-map \u7c7b\u578b\uff0c\u4f1a\u5f71\u54cd source map \u8d28\u91cf\uff0c\u6700\u7ec8\u770b\u5230\u7684\u90fd\u662f\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f71\u54cd source map \u8d28\u91cf\u7684\u4fee\u9970\u7b26\u4f18\u5148\u7ea7\u987a\u5e8f\u662f\uff1amodule>cheap>eval=inline=hidden=nosources"),(0,r.kt)("li",{parentName:"ol"},"source map \u4ee3\u7801\u8d28\u91cf\u987a\u5e8f\u662f\uff1aoriginal>original lines>transformed>generated"),(0,r.kt)("li",{parentName:"ol"},"inline,hidden,nosources \u90fd\u4e0d\u5f71\u54cd build/rebuild \u901f\u5ea6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u521d\u6b21\u6784\u5efa\u901f\u5ea6\u8ddf\u4ee3\u7801\u8d28\u91cf\u6709\u5173\u7cfb\uff0c\u4ee3\u7801\u8d8a\u7cbe\u7b80\u751f\u6210\u901f\u5ea6\u8d8a\u5feb\uff0c\u751f\u6210\u901f\u5ea6\u987a\u5e8f\u662f\uff1agenerated>transform>original lines>original"),(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u518d\u6b21\u6784\u5efa\u6765\u8bf4\uff0c\u5f62\u5982 eval-","*"," \u7c7b\u578b\uff0c\u4e0d\u4f1a\u751f\u6210 source map \u6587\u4ef6\uff0c\u518d\u6b21\u6784\u5efa\u901f\u5ea6\u8f83\u5feb\uff0ccheap \u4fee\u9970\u7b26\u4e5f\u4f1a\u5927\u5e45\u52a0\u5feb\u518d\u6b21\u6784\u5efa\u901f\u5ea6\u3002module \u4fee\u9970\u7b26\uff08webpack5\uff09\u5bf9\u518d\u6b21\u6784\u5efa\u901f\u5ea6\u7684\u5f71\u54cd\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002\u603b\u7684\u6765\u8bf4\uff0c\u662f\u5426\u751f\u6210 source map \u6587\u4ef6\u8d77\u51b3\u5b9a\u6027\u4f5c\u7528\uff0ccheap \u7b49\u5f71\u54cd\u4ee3\u7801\u8d28\u91cf\u7684\u4fee\u9970\u7b26\u56e0\u7d20\u6b21\u4e4b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u867d\u7136\u8868\u4e2d eval \u7c7b\u578b\u5728 build/rebuild \u4e24\u65b9\u9762\u8868\u73b0\u90fd\u975e\u5e38\u7a81\u51fa\uff0c\u4f46\u7531\u4e8e\u5f00\u53d1\u73af\u5883\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u7684\u6620\u5c04\u5230\u6e90\u4ee3\u7801\uff0c\u56e0\u6b64\u5c3d\u91cf\u5728 eval \u7684\u57fa\u7840\u4e0a\u9009\u62e9\u5176\u4ed6\u66f4\u9002\u5408\u7684\u7c7b\u578b\u3002")),(0,r.kt)("h2",{id:"\u5177\u4f53\u5e94\u7528\u573a\u666f\u5206\u6790"},"\u5177\u4f53\u5e94\u7528\u573a\u666f\u5206\u6790"),(0,r.kt)("h3",{id:"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883"},"\u5bf9\u4e8e\u5f00\u53d1\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"eval")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u6a21\u5757\u90fd\u4f7f\u7528 eval \u6267\u884c\uff0c\u5e76\u4e14\u90fd\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"//# sourceURL"),"\u3002\u8be5\u9879\u6784\u5efa\u5f88\u5feb\uff0c\u4f46\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff0c\u7531\u4e8e\u4f1a\u6620\u5c04\u5230\u8f6c\u6362\u540e\u7684\u4ee3\u7801\uff0c\u800c\u4e0d\u662f\u6620\u5c04\u5230\u539f\u59cb\u4ee3\u7801\uff08\u6ca1\u6709\u4ece loader \u4e2d\u83b7\u53d6 source map\uff09\uff0c\u6240\u4ee5\u4e0d\u80fd\u6b63\u786e\u7684\u663e\u793a\u884c\u6570\u3002",(0,r.kt)("em",{parentName:"p"},"\u8fd9\u79cd\u7c7b\u578b\u4e00\u822c\u4e0d\u4f7f\u7528\uff0c\u6620\u5c04\u4e0d\u51c6\u786e\u8fd8\u4e0d\u5982\u4e0d\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(()=>{eval(\"console.log(1122);document.body.innerHTML='<h1>Hello world!</h1>';\\n\\n//# sourceURL=webpack://@dotlim/scripts/./example/src/index.js?\")})();\n")),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"eval-source-map")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u6a21\u5757\u4f7f\u7528 eval \u6267\u884c\uff0c\u5e76\u4e14 source map \u8f6c\u6362\u4e3a DataURL \u6dfb\u52a0\u5230 eval \u4e2d\u3002\u521d\u59cb\u5316 source map \u65f6\u8f83\u6162\uff0c\u4f46\u662f\u4f1a\u5728\u91cd\u65b0\u6784\u5efa\u65f6\u63d0\u4f9b\u8f83\u5feb\u7684\u901f\u5ea6\uff0c\u5e76\u4e14\u751f\u6210\u5b9e\u9645\u7684\u6587\u4ef6\u3002\u884c\u6570\u80fd\u591f\u6b63\u786e\u6620\u5c04\uff0c\u56e0\u4e3a\u4f1a\u6620\u5c04\u5230\u539f\u59cb\u4ee3\u7801\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(()=>{eval(\"console.log(1122);document.body.innerHTML='<h1>Hello world!</h1>';//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZG90bGltL3NjcmlwdHMvLi9leGFtcGxlL3NyYy9pbmRleC5qcz8yNGE3Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBUEEsR0FBQUEsQ0FBQUEsSUFBQUEsRUFDQUMsUUFBUSxDQUFSQSxJQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSx1QkFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygxMTIyKTtcclxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGgxPkhlbGxvIHdvcmxkITwvaDE+JztcclxuIl0sImZpbGUiOiI0MTMuanMiLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///413\\n\")})();\n")),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js?24a7:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"eval-cheap-source-map")),(0,r.kt)("p",null,"\u7c7b\u4f3c eval-source-map\uff0c\u4f46\u6ca1\u6709\u751f\u6210\u5217\u6620\u5c04(column mapping)\uff0c\u53ea\u662f\u6620\u5c04\u884c\u6570\u3002\u5b83\u4f1a\u5ffd\u7565\u6e90\u81ea loader \u7684 source map\uff0c\u5e76\u4e14\u4ec5\u663e\u793a\u8f6c\u8bd1\u540e\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(()=>{eval(\"console.log(1122);document.body.innerHTML='<h1>Hello world!</h1>';//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZG90bGltL3NjcmlwdHMvLi9leGFtcGxlL3NyYy9pbmRleC5qcz8yNGE3Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBUEEsR0FBQUEsQ0FBQUEsSUFBQUEsRUFDQUMsUUFBUSxDQUFSQSxJQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSx1QkFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygxMTIyKTtcclxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGgxPkhlbGxvIHdvcmxkITwvaDE+JztcclxuIl0sImZpbGUiOiI0MTMuanMiLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///413\\n\")})();\n")),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js?24a7:1 ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"eval-cheap-module-source-map")),(0,r.kt)("p",null,"\u7c7b\u4f3c eval-cheap-source-map\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6e90\u81ea loader \u7684 source map \u4f1a\u5f97\u5230\u66f4\u597d\u7684\u5904\u7406\u7ed3\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(()=>{eval(\"console.log(1122);document.body.innerHTML='<h1>Hello world!</h1>';//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZG90bGltL3NjcmlwdHMvLi9leGFtcGxlL3NyYy9pbmRleC5qcz8yNGE3Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBUEEsR0FBQUEsQ0FBQUEsSUFBQUEsRUFDQUMsUUFBUSxDQUFSQSxJQUFBQSxDQUFBQSxTQUFBQSxDQUFBQSx1QkFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygxMTIyKTtcclxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGgxPkhlbGxvIHdvcmxkITwvaDE+JztcclxuIl0sImZpbGUiOiI0MTMuanMiLCJzb3VyY2VSb290IjoiIn0=\\n//# sourceURL=webpack-internal:///413\\n\")})();\n")),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js?24a7:1")),(0,r.kt)("h3",{id:"\u7279\u5b9a\u573a\u666f"},"\u7279\u5b9a\u573a\u666f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"inline-source-map")),(0,r.kt)("p",null,"source map \u8f6c\u6362\u4e3a DataUrl \u540e\u6dfb\u52a0\u5230 bundle \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZG90bGltL3NjcmlwdHMvLi9leGFtcGxlL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBQSxrQkFDQUMiLCJmaWxlIjoianMvbWFpbi45Njc4ZjIwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKDExMjIpO1xyXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICc8aDE+SGVsbG8gd29ybGQhPC9oMT4nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cheap-source-map")),(0,r.kt)("p",null,"\u6ca1\u6709\u5217\u6620\u5c04(column mapping)\u7684 source map\uff0c\u5ffd\u7565 loader source map\u3002\u751f\u6210\u5355\u72ec\u7684 .map \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=main.c20330fd.js.map\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{"version":3,"file":"js/main.c20330fd.js","sources":["webpack://@dotlim/scripts/js/main.c20330fd.js"],"sourcesContent":["console.log(1122),document.body.innerHTML=\\"<h1>Hello world!</h1>\\";"],"mappings":"AAAA","sourceRoot":""}\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c20330fd.js:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"inline-cheap-source-map")),(0,r.kt)("p",null,"\u7c7b\u4f3c cheap-source-map\uff0c\u4f46\u662f source map \u8f6c\u6362\u4e3a DataURL \u6dfb\u52a0\u5230 bundle \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi45Njc4ZjIwZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bkb3RsaW0vc2NyaXB0cy9qcy9tYWluLjk2NzhmMjBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKDExMjIpLGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MPVwiPGgxPkhlbGxvIHdvcmxkITwvaDE+XCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"main.9678f20e.js:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cheap-module-source-map")),(0,r.kt)("p",null,"\u6ca1\u6709\u5217\u6620\u5c04(column mapping)\u7684 source map\uff0c\u5c06 loader source map \u7b80\u5316\u4e3a\u6bcf\u884c\u4e00\u4e2a\u6620\u5c04(mapping)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=main.c20330fd.js.map\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{"version":3,"file":"js/main.c20330fd.js","sources":["webpack://@dotlim/scripts/js/main.c20330fd.js"],"mappings":"AACA","sourceRoot":""}\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"main.c20330fd.js:2")," \u3010\u9753\u4ed4\u7591\u60d1??\u4e0d\u51c6\u3011"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"inline-cheap-module-source-map")),(0,r.kt)("p",null,"\u7c7b\u4f3c cheap-module-source-map\uff0c\u4f46\u662f source map \u8f6c\u6362\u4e3a DataURL \u6dfb\u52a0\u5230 bundle \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi45Njc4ZjIwZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0Bkb3RsaW0vc2NyaXB0cy9qcy9tYWluLjk2NzhmMjBlLmpzIl0sIm1hcHBpbmdzIjoiQUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"main.9678f20e.js:2")),(0,r.kt)("h3",{id:"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883"},"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"source-map")),(0,r.kt)("p",null,"\u6574\u4e2a source map \u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u751f\u6210\u3002\u5b83\u4e3a bundle \u6dfb\u52a0\u4e86\u4e00\u4e2a\u5f15\u7528\u6ce8\u91ca\uff0c\u4ee5\u4fbf\u5f00\u53d1\u5de5\u5177\u77e5\u9053\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=main.c20330fd.js.map\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{"version":3,"sources":["webpack://@dotlim/scripts/./example/src/index.js"],"names":["console","document"],"mappings":"AAAAA,kBACAC","file":"js/main.c20330fd.js","sourcesContent":["console.log(1122);\\r\\ndocument.body.innerHTML = \'<h1>Hello world!</h1>\';\\r\\n"],"sourceRoot":""}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hidden-source-map")),(0,r.kt)("p",null,"\u4e0e source-map \u76f8\u540c\uff0c\u4f46\u4e0d\u4f1a\u4e3a bundle \u6dfb\u52a0\u5f15\u7528\u6ce8\u91ca\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{"version":3,"sources":["webpack://@dotlim/scripts/./example/src/index.js"],"names":["console","document"],"mappings":"AAAAA,kBACAC","file":"js/main.d211ed7f.js","sourcesContent":["console.log(1122);\\r\\ndocument.body.innerHTML = \'<h1>Hello world!</h1>\';\\r\\n"],"sourceRoot":""}\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"main.d211ed7f.js:1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nosources-source-map")),(0,r.kt)("p",null,"\u521b\u5efa\u7684 source map \u4e0d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"sourcesContent"),"\u3002\u5b83\u53ef\u4ee5\u7528\u6765\u6620\u5c04\u5ba2\u6237\u7aef\u4e0a\u7684\u5806\u6808\u8ddf\u8e2a\uff0c\u800c\u65e0\u987b\u66b4\u9732\u6240\u6709\u7684\u6e90\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(1122),document.body.innerHTML="<h1>Hello world!</h1>";\n//# sourceMappingURL=main.c20330fd.js.map\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{"version":3,"sources":["webpack://@dotlim/scripts/./example/src/index.js"],"names":["console","document"],"mappings":"AAAAA,kBACAC","file":"js/main.c20330fd.js","sourceRoot":""}\n')),(0,r.kt)("p",null,"\u6620\u5c04\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js:1")))}c.isMDXComponent=!0}}]);