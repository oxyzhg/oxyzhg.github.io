(self.webpackChunkfex=self.webpackChunkfex||[]).push([[7133],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=l,s=c["".concat(u,".").concat(k)]||c[k]||d[k]||a;return n?r.createElement(s,o(o({ref:t},p),{},{components:n})):r.createElement(s,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},636:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),o=["components"],i={id:"module",title:"\u524d\u7aef\u6a21\u5757\u5316"},u=void 0,m={unversionedId:"engineering/module",id:"engineering/module",isDocsHomePage:!1,title:"\u524d\u7aef\u6a21\u5757\u5316",description:"\u4ec0\u4e48\u662f\u6a21\u5757\u5316",source:"@site/docs/engineering/module.md",sourceDirName:"engineering",slug:"/engineering/module",permalink:"/fex/docs/engineering/module",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/engineering/module.md",version:"current",frontMatter:{id:"module",title:"\u524d\u7aef\u6a21\u5757\u5316"},sidebar:"engineering",previous:{title:"\u6982\u89c8",permalink:"/fex/docs/engineering"},next:{title:"Webpack \u5b8c\u6574\u7684\u6784\u5efa\u6d41\u7a0b",permalink:"/fex/docs/engineering/webpack/build-process"}},p=[{value:"\u4ec0\u4e48\u662f\u6a21\u5757\u5316",id:"\u4ec0\u4e48\u662f\u6a21\u5757\u5316",children:[]},{value:"\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848",id:"\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848",children:[{value:"AMD",id:"amd",children:[]},{value:"CMD",id:"cmd",children:[]},{value:"CommonJS",id:"commonjs",children:[]},{value:"ES Module",id:"es-module",children:[]}]},{value:"\u51e0\u79cd\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848\u5bf9\u6bd4",id:"\u51e0\u79cd\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848\u5bf9\u6bd4",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6a21\u5757\u5316"},"\u4ec0\u4e48\u662f\u6a21\u5757\u5316"),(0,a.kt)("p",null,"\u662f\u6307\u5c06\u590d\u6742\u7684\u7cfb\u7edf\u5206\u89e3\u6210\u591a\u4e2a\u72ec\u7acb\u6a21\u5757\u7684\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848"},"\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AMD (Asynchronous Module Definition)\uff0c\u5373\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49\u3002\uff08require.js\uff09"),(0,a.kt)("li",{parentName:"ul"},"CMD (Common Module Definition)\uff0c\u5373\u901a\u7528\u6a21\u5757\u5b9a\u4e49\u3002\uff08sea.js\uff09"),(0,a.kt)("li",{parentName:"ul"},"CommonJS"),(0,a.kt)("li",{parentName:"ul"},"ES Module")),(0,a.kt)("p",null,"\u968f\u7740 webpack/rollup/babel \u7b49\u6253\u5305\u6216\u7f16\u8bd1\u5de5\u5177\u5728\u524d\u7aef\u5927\u653e\u5f02\u5f69\uff0cAMD/CMD \u7b49\u4f20\u7edf\u6a21\u5757\u5316\u65b9\u6848\u4e5f\u5728\u9010\u6e10\u9000\u51fa\u5386\u53f2\u821e\u53f0\uff0c\u73b0\u4ee3\u5f00\u53d1\u5e38\u7528\u7684\u6a21\u5757\u5316\u65b9\u6848\u662f ES Module \u548c CommonJS\u3002"),(0,a.kt)("h3",{id:"amd"},"AMD"),(0,a.kt)("p",null,"AMD(Asynchronous Module Definition)\uff0c\u5373\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49\uff0c\u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\u6a21\u5757\uff0c\u6a21\u5757\u7684\u52a0\u8f7d\u4e0d\u5f71\u54cd\u5b83\u540e\u9762\u8bed\u53e5\u7684\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f9d\u8d56\u524d\u7f6e"),"\uff0c\u5728\u5b9a\u4e49\u6a21\u5757\u7684\u65f6\u5019\u5c31\u8981\u58f0\u660e\u5176\u4f9d\u8d56\u6a21\u5757\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u52a0\u8f7d\u5176\u4ed6\u6a21\u5757"),"\uff0c\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u7684\u4ee3\u7801\uff0c\u9700\u8981\u4ece\u670d\u52a1\u7aef\u9884\u5148\u52a0\u8f7d\uff0c\u56e0\u6b64\u5f02\u6b65\u52a0\u8f7d\u662f\u66f4\u5408\u7406\u7684\u65b9\u6848\u3002")),(0,a.kt)("p",null,"\u4ee3\u8868\u5e93 require.js \u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u6307\u5b9a\u5404\u6a21\u5757\u8def\u5f84\u548c\u5f15\u7528\u540d\nrequire.config({\n  baseUrl: 'js/lib',\n  paths: {\n    jquery: 'jquery.min', //\u5b9e\u9645\u8def\u5f84\u4e3ajs/lib/jquery.min.js\n    underscore: 'underscore.min',\n  },\n});\n\n// \u52a0\u8f7d\u6a21\u5757\nrequire(['jquery', 'underscore'], function ($, _) {\n  // some code here\n});\n")),(0,a.kt)("h3",{id:"cmd"},"CMD"),(0,a.kt)("p",null,"CMD(Common Module Definition)\uff0c\u5373\u901a\u7528\u6a21\u5757\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c31\u8fd1\u4f9d\u8d56"),"\uff0c\u53ea\u6709\u5728\u7528\u5230\u67d0\u4e2a\u6a21\u5757\u7684\u65f6\u5019\u518d\u53bb\u52a0\u8f7d\u3002")),(0,a.kt)("p",null,"CMD \u4e0e AMD \u7684\u4e0d\u540c\u70b9\u5728\u4e8e\uff1aAMD \u63a8\u5d07\u4f9d\u8d56\u524d\u7f6e\u3001\u63d0\u524d\u6267\u884c\uff0cCMD \u63a8\u5d07\u4f9d\u8d56\u5c31\u8fd1\u3001\u5ef6\u8fdf\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u4ee3\u8868\u5e93 sea.js \u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u6a21\u5757 math.js\ndefine(function (require, exports, module) {\n  var $ = require('jquery.js');\n  var add = function (a, b) {\n    return a + b;\n  };\n  exports.add = add;\n});\n\n// \u52a0\u8f7d\u6a21\u5757\nseajs.use(['math.js'], function (math) {\n  var sum = math.add(1, 2);\n});\n")),(0,a.kt)("h3",{id:"commonjs"},"CommonJS"),(0,a.kt)("p",null,"CommonJS \u5c31\u662f\u6211\u4eec\u5728 nodejs \u4e2d\u89c1\u5230\u7684\u6a21\u5757\u7528\u6cd5\uff0c\u5373\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u5165\nconst _ = require('lodash');\n// \u5bfc\u51fa\nmodule.exports = {};\nexports.sayHi = () => {};\n")),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u540c\u6b65\u52a0\u8f7d\u5176\u4ed6\u6a21\u5757"),"\uff0c\u8fd9\u662f CommonJS \u4e0e AMD \u6a21\u5757\u5316\u65b9\u6848\u6700\u5927\u7684\u4e0d\u540c\u4e4b\u5904\u3002\u7531\u4e8e CommonJS \u89c4\u8303\u662f\u4e3a\u670d\u52a1\u7aef\u8bbe\u8ba1\uff0c\u6587\u4ef6\u5728\u672c\u5730\u90fd\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u52a0\u8f7d\u901f\u5ea6\u5f88\u5feb\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u5f02\u6b65\u52a0\u8f7d\uff0c\u800c\u6d4f\u89c8\u5668\u9700\u8981\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u8d44\u6e90\u8bf7\u6c42\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8fd0\u884c\u65f6\u52a0\u8f7d"),"\uff0c\u7531\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u4f7f\u7528 CommonJS \u7f16\u5199\u7684\u4ee3\u7801\u4e0d\u652f\u6301 tree-shaking \u4f18\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5757\u5bfc\u51fa\u503c\u62f7\u8d1d"),"\uff0c\u5373\u4e00\u65e6\u8f93\u51fa\u67d0\u4e2a\u503c\uff0c\u6a21\u5757\u5185\u90e8\u7684\u53d8\u5316\u5c31\u5f71\u54cd\u4e0d\u5230\u8fd9\u4e2a\u503c\u3002")),(0,a.kt)("h3",{id:"es-module"},"ES Module"),(0,a.kt)("p",null,"ES Module \u662f\u57fa\u4e8e\u8bed\u8a00\u5c42\u9762\u7684\u6a21\u5757\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u65e8\u5728\u6210\u4e3a\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u901a\u7528\u7684\u6a21\u5757\u89e3\u51b3\u65b9\u6848\uff0c\u4e5f\u662f javascript \u6a21\u5757\u5316\u672a\u6765\u7684\u53d1\u5c55\u65b9\u5411\uff0c\u73b0\u5728\u4e3b\u6d41\u7684\u6d4f\u89c8\u5668\u5df2\u7ecf\u652f\u6301\u4e86\u3002\u6700\u8fd1\u8f83\u706b\u7684 snowpack \u548c vite \u5c31\u662f\u5229\u7528\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301 ESM \u7684\u7279\u70b9\uff0c\u5feb\u901f\u7f16\u8bd1\u6784\u5efa\u5f00\u53d1\u73af\u5883\u53ef\u7528\u7684\u4ee3\u7801\u3002\u5982\u679c\u4e0d\u8003\u8651\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u7684\u8bdd\uff0c\u53ef\u7528\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u73af\u5883\u7528 ESM \u8bed\u6cd5\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u5165\nimport lodash from 'lodash';\n// \u5bfc\u51fa\nexport function hello() {}\nexport default {};\n")),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f16\u8bd1\u65f6\u52a0\u8f7d"),"\uff0c\u5b83\u5177\u6709\u58f0\u660e\u63d0\u5347\u6548\u679c\uff0c\u53ef\u5728\u7f16\u8bd1\u9636\u6bb5\u5bf9\u6a21\u5757\u8fdb\u884c\u9759\u6001\u5206\u6790\u3002\u56e0\u6b64\uff0crollup/webapck \u7b49\u6253\u5305\u5de5\u5177\u90fd\u63d0\u4f9b\u4e86 tree-shaking \u4f18\u5316\uff0c\u7528\u4e8e\u6e05\u9664\u5b9e\u9645\u4e0a\u5728\u9879\u76ee\u4e2d\u6ca1\u6709\u7528\u5230\u7684\u4ee3\u7801\uff0c\u51cf\u5c11\u6784\u5efa\u540e\u4ee3\u7801\u91cf\uff0c\u4f7f\u4ee3\u7801\u8fd0\u884c\u66f4\u52a0\u9ad8\u6548\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5757\u5bfc\u51fa\u503c\u5f15\u7528"),"\uff0c\u8fd9\u662f\u4e0e CommonJS \u7684\u4e0d\u540c\u4e4b\u5904\u3002")),(0,a.kt)("p",null,"ESM \u4e0e CommonJS \u6a21\u5757\u5316\u7684\u5dee\u5f02\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ES Module \u662f\u7f16\u8bd1\u65f6\u52a0\u8f7d\uff0cCommonJS \u662f\u8fd0\u884c\u65f6\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ol"},"ES Module \u5bfc\u51fa\u7684\u662f\u503c\u5f15\u7528\uff0c CommonJS \u5bfc\u51fa\u7684\u662f\u503c\u62f7\u8d1d\u3002")),(0,a.kt)("h2",{id:"\u51e0\u79cd\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848\u5bf9\u6bd4"},"\u51e0\u79cd\u5e38\u89c1\u7684\u6a21\u5757\u5316\u65b9\u6848\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u6a21\u5757\u5316\u65b9\u6848\u7684\u5bf9\u6bd4\uff0c\u901a\u5e38\u662f\u52a0\u8f7d\u65f6\u673a\u3001\u662f\u5426\u5f02\u6b65\u3001\u5bfc\u5165\u5bfc\u51fa\u3001\u8fd0\u884c\u73af\u5883\u51e0\u4e2a\u65b9\u9762\u3002\u7279\u522b\u5730\uff0cCommonJS \u548c ES Module \u8fd8\u9700\u8981\u5bf9\u6bd4\u5bfc\u51fa\u503c\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u5316\u65b9\u6848"),(0,a.kt)("th",{parentName:"tr",align:null},"\u52a0\u8f7d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u540c\u6b65/\u5f02\u6b65"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u5b9a\u4e49"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6a21\u5757\u5bfc\u5165"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IFEE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e\u4ee3\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e\u4ee3\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"IFEE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UMD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e\u4ee3\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e\u4ee3\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"IFEE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AMD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9884\u52a0\u8f7d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f02\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"define"),(0,a.kt)("td",{parentName:"tr",align:null},"require")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CMD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6309\u9700\u52a0\u8f7d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u52a0\u8f7d"),(0,a.kt)("td",{parentName:"tr",align:null},"define"),(0,a.kt)("td",{parentName:"tr",align:null},"define")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CommonJS"),(0,a.kt)("td",{parentName:"tr",align:null},"\u503c\u62f7\u8d1d\uff0c\u8fd0\u884c\u65f6\u52a0\u8f7d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"module.exports"),(0,a.kt)("td",{parentName:"tr",align:null},"require")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ES Module"),(0,a.kt)("td",{parentName:"tr",align:null},"\u503c\u5f15\u7528\uff0c\u7f16\u8bd1\u65f6\u8f93\u51fa"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65"),(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"import")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903576309858318"},"\u524d\u7aef\u6a21\u5757\u5316\uff1aCommonJS,AMD,CMD,ES6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903581661790216"},"\u6d45\u8c08\u6a21\u5757\u5316\u5f00\u53d1"))))}c.isMDXComponent=!0}}]);