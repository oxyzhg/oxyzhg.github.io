"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[962],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),s=l,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7637:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),i=["components"],a={id:"mvvm",title:"MVVM"},u=void 0,p={unversionedId:"forward/vue/mvvm",id:"forward/vue/mvvm",isDocsHomePage:!1,title:"MVVM",description:"GUI(\u56fe\u5f62\u7528\u6237\u754c\u9762)\u7684\u8bbe\u8ba1\u7ed3\u6784\u4e00\u642c\u5305\u62ec\u89c6\u56fe(View)\u3001\u6a21\u578b(Model)\u3001\u903b\u8f91(Application Logic, Bussiness Logic, Sync Logic)\u3002\u5728 GUI \u4e2d\u89c6\u56fe\u548c\u6a21\u578b\u662f\u5929\u7136\u53ef\u4ee5\u8fdb\u884c\u5206\u5c42\u7684\uff0c\u6742\u4e71\u65e0\u7ae0\u7684\u90e8\u5206\u4e3b\u8981\u662f\u903b\u8f91\uff0c\u4e8e\u662f\u51fa\u73b0\u4e86 MVC\u3001MVP\u3001MVVM \u7b49\u8bbe\u8ba1\u6a21\u5f0f\u3002",source:"@site/docs/forward/vue/mvvm.md",sourceDirName:"forward/vue",slug:"/forward/vue/mvvm",permalink:"/fex/docs/forward/vue/mvvm",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/vue/mvvm.md",tags:[],version:"current",frontMatter:{id:"mvvm",title:"MVVM"},sidebar:"forward",previous:{title:"v-model",permalink:"/fex/docs/forward/vue/v-model"},next:{title:"\u6982\u8ff0",permalink:"/fex/docs/forward/nodejs"}},c=[{value:"MVC",id:"mvc",children:[]},{value:"MVP",id:"mvp",children:[]},{value:"MVVM",id:"mvvm",children:[]}],m={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GUI(\u56fe\u5f62\u7528\u6237\u754c\u9762)\u7684\u8bbe\u8ba1\u7ed3\u6784\u4e00\u642c\u5305\u62ec",(0,o.kt)("strong",{parentName:"p"},"\u89c6\u56fe"),"(View)\u3001",(0,o.kt)("strong",{parentName:"p"},"\u6a21\u578b"),"(Model)\u3001",(0,o.kt)("strong",{parentName:"p"},"\u903b\u8f91"),"(Application Logic, Bussiness Logic, Sync Logic)\u3002\u5728 GUI \u4e2d\u89c6\u56fe\u548c\u6a21\u578b\u662f\u5929\u7136\u53ef\u4ee5\u8fdb\u884c\u5206\u5c42\u7684\uff0c\u6742\u4e71\u65e0\u7ae0\u7684\u90e8\u5206\u4e3b\u8981\u662f\u903b\u8f91\uff0c\u4e8e\u662f\u51fa\u73b0\u4e86 MVC\u3001MVP\u3001MVVM \u7b49\u8bbe\u8ba1\u6a21\u5f0f\u3002"),(0,o.kt)("h2",{id:"mvc"},"MVC"),(0,o.kt)("p",null,"MVC\uff08Model-View-Controller\uff09\u628a GUI \u5206\u6210 View\u3001Model\u3001Controller \u4e09\u4e2a\u6a21\u5757\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MVC",src:r(5314).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View"),"\uff1a\u68c0\u6d4b\u7528\u6237\u7684\u952e\u76d8\u3001\u9f20\u6807\u7b49\u884c\u4e3a\uff0c\u4f20\u9012\u8c03\u7528 Controller \u6267\u884c\u5e94\u7528\u903b\u8f91\u3002View \u66f4\u65b0\u9700\u8981\u4ece Model \u91cd\u65b0\u83b7\u53d6\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Controller"),"\uff1a\u5904\u7406 View \u548c Model \u4e4b\u95f4\u534f\u4f5c\u7684\u5e94\u7528\u903b\u8f91\u6216\u4e1a\u52a1\u903b\u8f91\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Model"),"\uff1aModel \u53d8\u66f4\u540e\uff0c\u901a\u8fc7\u89c2\u5bdf\u8005\u6a21\u5f0f\u901a\u77e5 View \u66f4\u65b0\u89c6\u56fe\u3002")),(0,o.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u804c\u8d23\u5206\u79bb\uff1a\u6a21\u5757\u5316\u7a0b\u5ea6\u9ad8\u3001Controller \u53ef\u66ff\u6362\u3001\u53ef\u590d\u7528\u6027\u3001\u53ef\u6269\u5c55\u6027\u5f3a\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u89c6\u56fe\u66f4\u65b0\uff1a\u4f7f\u7528\u89c2\u5bdf\u8005\u6a21\u5f0f\u53ef\u4ee5\u505a\u5230\u5355 Model \u901a\u77e5\u591a\u89c6\u56fe\u5b9e\u73b0\u6570\u636e\u66f4\u65b0\u3002")),(0,o.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u5f3a\u70c8\uff1aView \u5f3a\u4f9d\u8d56 Model\uff0c\u56e0\u6b64 View \u65e0\u6cd5\u7ec4\u4ef6\u5316\u8bbe\u8ba1\u3002")),(0,o.kt)("h2",{id:"mvp"},"MVP"),(0,o.kt)("p",null,"MVP\uff08Model-View-Presenter\uff09\u662f MVC \u6a21\u5f0f\u7684\u4e00\u79cd\u6539\u826f\uff0c\u6253\u7834\u4e86 View \u5bf9\u4e8e Model \u7684\u4f9d\u8d56\uff0c\u5176\u4f59\u7684\u4f9d\u8d56\u5173\u7cfb\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MVP",src:r(5651).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View"),"\uff1aView \u4e0d\u518d\u5904\u7406\u540c\u6b65\u903b\u8f91\uff0c\u5bf9 Presenter \u63d0\u4f9b\u63a5\u53e3\u8c03\u7528\u3002\u7531\u4e8e\u4e0d\u518d\u4f9d\u8d56 Model\uff0c\u53ef\u4ee5\u8ba9 View \u4ece\u7279\u5b9a\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u62bd\u79bb\uff0c\u4ece\u800c\u505a\u5230\u7ec4\u4ef6\u5316\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Presenter"),"\uff1a\u4e0e\u7ecf\u5178 Controller \u76f8\u6bd4\uff0c\u4efb\u52a1\u66f4\u52a0\u7e41\u91cd\uff0c\u4e0d\u4ec5\u8981\u5904\u7406\u5e94\u7528\u4e1a\u52a1\u903b\u8f91\uff0c\u8fd8\u8981\u5904\u7406\u540c\u6b65\u903b\u8f91\uff08\u9ad8\u5c42\u6b21\u590d\u6742\u7684 UI \u64cd\u4f5c\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Model"),"\uff1aModel \u53d8\u66f4\u540e\uff0c\u901a\u8fc7\u89c2\u5bdf\u8005\u6a21\u5f0f\u901a\u77e5 Presenter\uff0c\u5982\u679c\u6709\u89c6\u56fe\u66f4\u65b0\uff0c\u5c31\u8c03\u7528 View \u7684\u63a5\u53e3\u66f4\u65b0\u89c6\u56fe\u3002")),(0,o.kt)("p",null,"\u53ef\u80fd\u4ea7\u751f\u7684\u4f18\u7f3a\u70b9\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"View \u53ef\u7ec4\u4ef6\u5316\u8bbe\u8ba1\u3002"),(0,o.kt)("li",{parentName:"ul"},"Presenter \u627f\u62c5\u592a\u5bf9\u4e8b\u52a1\uff0c\u96be\u4ee5\u7ef4\u62a4\u3002")),(0,o.kt)("h2",{id:"mvvm"},"MVVM"),(0,o.kt)("p",null,"MVVM\uff08Model-View-ViewModel\uff09\u6a21\u5f0f\u662f\u5728 MVP \u6a21\u5f0f\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u6539\u826f\uff0c\u5c06 Presenter \u6539\u826f\u6210 ViewModel\uff08\u62bd\u8c61\u89c6\u56fe\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MVVM",src:r(7580).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ViewModel"),"\uff1a\u4e0e Presenter \u76f8\u6bd4\uff0c\u5185\u90e8\u96c6\u6210\u4e86 Binder(Data-binding Engine\uff0c\u6570\u636e\u7ed1\u5b9a\u5f15\u64ce)\uff0c\u5b9e\u73b0 View \u548c Model \u7684\u53cc\u5411\u7ed1\u5b9a\uff0c\u4e00\u65b9\u53d1\u751f\u53d8\u5316\u53e6\u4e00\u65b9\u53ef\u81ea\u52a8\u66f4\u65b0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View"),"\uff1a\u53ef\u7ec4\u4ef6\u5316\uff0c\u4f8b\u5982\u76ee\u524d\u5404\u79cd\u6d41\u884c\u7684 UI \u7ec4\u4ef6\u6846\u67b6\uff0cView \u7684\u53d8\u5316\u4f1a\u901a\u8fc7 Binder \u81ea\u52a8\u66f4\u65b0\u76f8\u5e94\u7684 Model\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Model"),"\uff1aModel \u7684\u53d8\u5316\u4f1a\u88ab Binder \u76d1\u542c\uff08\u89c2\u5bdf\u8005\u6a21\u5f0f\uff09\uff0c\u4e00\u65e6\u76d1\u542c\u5230\u53d8\u5316\uff0cBinder \u5c31\u4f1a\u81ea\u52a8\u5b9e\u73b0\u89c6\u56fe\u7684\u66f4\u65b0\u3002")),(0,o.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ViewModel \u5185\u7f6e\u7684 Binder \u63d0\u4f9b\u4e86\u53cc\u5411\u7ed1\u5b9a\u673a\u5236\uff0c\u89e3\u51b3\u4e86 MVP \u5927\u91cf\u7684\u624b\u52a8\u540c\u6b65\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b80\u5316\u4e86\u6d4b\u8bd5\u6d41\u7a0b\uff0c\u53ea\u9700\u4fdd\u8bc1 Model \u6b63\u786e\u5373\u53ef\u3002")),(0,o.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7b80\u5355\u7684\u5e94\u7528\u4f1a\u9020\u6210\u989d\u5916\u7684\u6027\u80fd\u6d88\u8017\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u590d\u6742\u7684\u5e94\u7528\uff0c\u89c6\u56fe\u72b6\u6001\u8f83\u591a\uff0c\u89c6\u56fe\u72b6\u6001\u7684\u7ef4\u62a4\u6210\u672c\u589e\u52a0\uff0cViewModel \u6784\u5efa\u548c\u7ef4\u62a4\u6210\u672c\u9ad8\u3002")))}d.isMDXComponent=!0},5314:function(e,t,r){t.Z=r.p+"assets/images/mvc-55afcd4f5d3879695303843825e1490d.png"},5651:function(e,t,r){t.Z=r.p+"assets/images/mvp-e93c8cfe0f7be9cf98e54afbd10d7c82.png"},7580:function(e,t,r){t.Z=r.p+"assets/images/mvvm-b7b3ada98dddef7d31ec8756242889c9.png"}}]);