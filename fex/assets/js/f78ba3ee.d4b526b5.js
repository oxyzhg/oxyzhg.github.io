"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[6799],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8430:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],u={id:"inheritance",title:"\u7ee7\u627f"},i=void 0,c={unversionedId:"forward/javascript/inheritance",id:"forward/javascript/inheritance",isDocsHomePage:!1,title:"\u7ee7\u627f",description:"\u5b9e\u73b0\u7ee7\u627f\u7684\u65b9\u6cd5\uff0c\u5927\u591a\u662f\u83b7\u5f97\u7236\u7c7b\u7684\u5b9e\u4f8b\u6216\u539f\u578b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4e0b\u9762\u51e0\u79cd\u65b9\u6cd5\uff0c\u4f1a\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u5f0f\u83b7\u5f97\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u7ee7\u627f\u5230\u5f53\u524d\u5b50\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7ee7\u627f\u3002",source:"@site/docs/forward/javascript/inheritance.md",sourceDirName:"forward/javascript",slug:"/forward/javascript/inheritance",permalink:"/fex/docs/forward/javascript/inheritance",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/javascript/inheritance.md",tags:[],version:"current",frontMatter:{id:"inheritance",title:"\u7ee7\u627f"},sidebar:"forward",previous:{title:"\u6982\u89c8",permalink:"/fex/docs/forward"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/fex/docs/forward/javascript/eventloop"}},s=[{value:"\u539f\u578b\u94fe\u7ee7\u627f",id:"\u539f\u578b\u94fe\u7ee7\u627f",children:[]},{value:"\u6784\u9020\u51fd\u6570\u7ee7\u627f",id:"\u6784\u9020\u51fd\u6570\u7ee7\u627f",children:[]},{value:"\u7ec4\u5408\u7ee7\u627f",id:"\u7ec4\u5408\u7ee7\u627f",children:[]},{value:"\u5bc4\u751f\u5f0f\u7ee7\u627f",id:"\u5bc4\u751f\u5f0f\u7ee7\u627f",children:[]},{value:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",id:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f",children:[]},{value:"ES6 extends",id:"es6-extends",children:[]}],p={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5b9e\u73b0\u7ee7\u627f\u7684\u65b9\u6cd5\uff0c\u5927\u591a\u662f\u83b7\u5f97\u7236\u7c7b\u7684\u5b9e\u4f8b\u6216\u539f\u578b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4e0b\u9762\u51e0\u79cd\u65b9\u6cd5\uff0c\u4f1a\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u5f0f\u83b7\u5f97\u7236\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u7ee7\u627f\u5230\u5f53\u524d\u5b50\u7c7b\uff0c\u4ece\u800c\u5b9e\u73b0\u7ee7\u627f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\u7236\u7c7b\uff0c\u7528\u4e8e\u540e\u7eed\u6d4b\u8bd5\nfunction Super(name) {\n  this.name = 'super name';\n  this.sayHi = function () {\n    console.log(`Hi, ${this.name}`);\n  };\n}\nSuper.prototype.sayBye = function () {\n  console.log(`Bye, ${this.name}`);\n};\n")),(0,o.kt)("h2",{id:"\u539f\u578b\u94fe\u7ee7\u627f"},"\u539f\u578b\u94fe\u7ee7\u627f"),(0,o.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u5c06\u7236\u7c7b\u7684\u5b9e\u4f8b\u4f5c\u4e3a\u5b50\u7c7b\u7684\u539f\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Sub() {}\nSub.prototype = new Super();\nSub.prototype.name = 'sub name';\n\n// test\nvar sub = new Sub();\nconsole.log(sub);\nconsole.log(sub instanceof Super); //true\nconsole.log(sub instanceof Sub); //true\n")),(0,o.kt)("p",null,"\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5b50\u7c7b\u65f6\u5b9e\u73b0\u7ee7\u627f\uff0c\u65e0\u6cd5\u52a8\u6001\u5411\u7236\u7c7b\u4f20\u53c2"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u662f\u5b50\u7c7b\u7684\u5b9e\u4f8b\uff0c\u7236\u7c7b\u7684\u5b9e\u4f8b\u4e0d\u5408\u7406\u5730\u6302\u5728\u5b50\u7c7b\u539f\u578b\u4e0a\uff0c\u7236\u7c7b\u5b9e\u4f8b\u5c5e\u6027\u548c\u65b9\u6cd5\u6240\u6709\u5b50\u7c7b\u5b9e\u4f8b\u5171\u4eab"),(0,o.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u5b9e\u73b0\u591a\u7ee7\u627f"),(0,o.kt)("li",{parentName:"ol"},"\u8981\u7ed9\u5b50\u7c7b\u65b0\u589e\u539f\u578b\u65b9\u6cd5/\u5c5e\u6027\uff0c\u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"new Super()")," \u4e4b\u540e\u6267\u884c\uff0c\u4e0d\u80fd\u653e\u5230\u6784\u9020\u5668\u4e2d")),(0,o.kt)("h2",{id:"\u6784\u9020\u51fd\u6570\u7ee7\u627f"},"\u6784\u9020\u51fd\u6570\u7ee7\u627f"),(0,o.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u6267\u884c\u7236\u7c7b\u6784\u9020\u51fd\u6570\u6765\u589e\u5f3a\u5b50\u7c7b\u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Sub(name) {\n  Super.call(this);\n  this.name = name || 'sub name';\n}\n\n// test\nvar sub = new Sub();\nconsole.log(sub);\nconsole.log(sub instanceof Super); // false\nconsole.log(sub instanceof Sub); // true\n")),(0,o.kt)("p",null,"\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5316\u5b50\u7c7b\u65f6\u5b9e\u73b0\u7ee7\u627f\uff0c\u53ef\u4ee5\u52a8\u6001\u5411\u7236\u7c7b\u4f20\u53c2"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u662f\u5b50\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4e5f\u662f\u7236\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4f46\u6ca1\u6709\u7ee7\u627f\u7236\u7c7b\u539f\u578b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u5b9e\u73b0\u591a\u7ee7\u627f")),(0,o.kt)("h2",{id:"\u7ec4\u5408\u7ee7\u627f"},"\u7ec4\u5408\u7ee7\u627f"),(0,o.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u662f\u539f\u578b\u94fe\u7ee7\u627f\u548c\u6784\u9020\u51fd\u6570\u7ee7\u627f\u7684\u7ec4\u5408"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Sub(name) {\n  Super.call(this);\n  this.name = name || 'sub name';\n}\nSub.prototype = new Super();\n\n// test\nvar sub = new Sub();\nconsole.log(sub);\nconsole.log(sub instanceof Super); // true\nconsole.log(sub instanceof Sub); // true\n")),(0,o.kt)("p",null,"\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5b50\u7c7b\u65f6\u7ee7\u627f\u4e86\u7236\u7c7b\u539f\u578b\uff0c\u5b9e\u4f8b\u5316\u5b50\u7c7b\u65f6\u7ee7\u627f\u4e86\u7236\u7c7b\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u52a8\u6001\u5411\u7236\u7c7b\u4f20\u53c2"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u662f\u5b50\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4e5f\u662f\u7236\u7c7b\u7684\u5b9e\u4f8b")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u539f\u578b\u94fe\u7ee7\u627f\u3001\u6784\u9020\u51fd\u6570\u7ee7\u627f\u3001\u7ec4\u5408\u7ee7\u627f\u603b\u7ed3"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\u7ee7\u627f\uff0c\u5b50\u7c7b\u539f\u578b\u662f\u7236\u7c7b\u5b9e\u4f8b\uff0c\u7236\u7c7b\u5b9e\u4f8b\u4e0d\u5408\u7406\u5730\u51fa\u73b0\u5728\u5b50\u7c7b\u539f\u578b\uff0c\u5b9e\u4f8b\u539f\u578b\u7684\u539f\u578b\u624d\u662f\u7236\u7c7b\u6784\u9020\u51fd\u6570\u539f\u578b\uff0c\u76f8\u5f53\u4e8e\u989d\u5916\u591a\u4e00\u5c42\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u662f\u6267\u884c\u7236\u7c7b\u589e\u5f3a\u5b50\u7c7b\uff0c\u53ef\u4ee5\u5411\u7236\u7c7b\u4f20\u53c2\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u7ee7\u627f\u4e86\u7236\u7c7b\u5b9e\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u7ee7\u627f\u6ca1\u6709\u5f7b\u5e95\u89e3\u51b3\u95ee\u9898\u3002")),(0,o.kt)("h2",{id:"\u5bc4\u751f\u5f0f\u7ee7\u627f"},"\u5bc4\u751f\u5f0f\u7ee7\u627f"),(0,o.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u5b9e\u4f8b\u5316\u7236\u7c7b\uff0c\u4fee\u6539\u5c5e\u6027\u540e\u8fd4\u56de"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Sub(name) {\n  var result = new Super();\n  result.name = name || 'Tom';\n  return result;\n}\n\n// test\nvar sub = new Sub();\nconsole.log(sub);\nconsole.log(sub instanceof Super); // true\nconsole.log(sub instanceof Sub); // false\n")),(0,o.kt)("p",null,"\u7279\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5316\u5b50\u7c7b\u65f6\u5b9e\u73b0\u7ee7\u627f\uff0c\u53ef\u4ee5\u52a8\u6001\u5411\u7236\u7c7b\u4f20\u53c2"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5b9e\u9645\u4e0a\u662f\u7236\u7c7b\u7684\u5b9e\u4f8b\uff0c\u5b50\u7c7b\u8ddf\u539f\u578b\u6ca1\u6709\u4ec0\u4e48\u5173\u7cfb")),(0,o.kt)("h2",{id:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),(0,o.kt)("p",null,"\u5b9e\u73b0\u539f\u7406\uff1a\u7236\u7c7b\u7684\u539f\u578b\u548c\u5b9e\u4f8b\u5206\u5f00\u7ee7\u627f\uff0c\u5c06\u7236\u7c7b\u7684\u539f\u578b\u4f5c\u4e3a\u5b50\u7c7b\u7684\u539f\u578b\uff0c\u6267\u884c\u7236\u7c7b\u6784\u9020\u51fd\u6570\u6765\u589e\u5f3a\u5b50\u7c7b\u5b9e\u4f8b\uff08\u5b8c\u7f8e\u7ee7\u627f\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Sub(name) {\n  Super.call(this); // \u53ea\u7ee7\u627f\u7236\u7c7b\u5b9e\u4f8b\n  this.name = name || 'Tom';\n}\nSub.prototype = Object.create(Super.prototype); // \u53ea\u7ee7\u627f\u7236\u7c7b\u539f\u578b\nSub.prototype.constructor = Sub;\n\n// test\nvar sub = new Sub();\nconsole.log(sub);\nconsole.log(sub instanceof Super); // true\nconsole.log(sub instanceof Sub); // true\n")),(0,o.kt)("p",null,"\u7279\u70b9:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5b50\u7c7b\u65f6\u7ee7\u627f\u4e86\u7236\u7c7b\u539f\u578b\uff0c\u5b9e\u4f8b\u5316\u5b50\u7c7b\u65f6\u7ee7\u627f\u4e86\u7236\u7c7b\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u52a8\u6001\u5411\u7236\u7c7b\u4f20\u53c2"),(0,o.kt)("li",{parentName:"ol"},"\u5206\u522b\u7ee7\u627f\u7236\u7c7b\u7684\u539f\u578b\u548c\u5b9e\u4f8b\uff0c\u7ee7\u627f\u65b9\u5f0f\u6ca1\u6709\u526f\u4f5c\u7528")),(0,o.kt)("h2",{id:"es6-extends"},"ES6 extends"),(0,o.kt)("p",null,"ES6 extends \u5173\u952e\u5b57\u5b9e\u9645\u4e0a\u5c31\u662f\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u7684\u8bed\u6cd5\u7cd6\u3002"))}m.isMDXComponent=!0}}]);