(self.webpackChunkfex=self.webpackChunkfex||[]).push([[1293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3869:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),u=["components"],a={id:"deque",title:"\u53cc\u7aef\u961f\u5217"},s=void 0,l={unversionedId:"interview/data-structures/deque",id:"interview/data-structures/deque",isDocsHomePage:!1,title:"\u53cc\u7aef\u961f\u5217",description:"\u7279\u70b9\uff1a\u524d\u540e\u4e24\u7aef\u90fd\u53ef\u4ee5\u589e\u5220\u7684\u7279\u6b8a\u961f\u5217",source:"@site/docs/interview/data-structures/deque.md",sourceDirName:"interview/data-structures",slug:"/interview/data-structures/deque",permalink:"/fex/docs/interview/data-structures/deque",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/data-structures/deque.md",version:"current",frontMatter:{id:"deque",title:"\u53cc\u7aef\u961f\u5217"},sidebar:"interview",previous:{title:"\u961f\u5217",permalink:"/fex/docs/interview/data-structures/queue"},next:{title:"\u94fe\u8868",permalink:"/fex/docs/interview/data-structures/linked-list"}},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[]},{value:"\u6a21\u62df\u5b9e\u73b0",id:"\u6a21\u62df\u5b9e\u73b0",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7279\u70b9\uff1a\u524d\u540e\u4e24\u7aef\u90fd\u53ef\u4ee5\u589e\u5220\u7684\u7279\u6b8a\u961f\u5217"),(0,o.kt)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addFront")," --- \u5411\u961f\u9996\u6dfb\u52a0\u65b0\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addBack")," --- \u5411\u961f\u5c3e\u6dfb\u52a0\u65b0\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removeFront")," --- \u79fb\u9664\u961f\u9996\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removeBack")," --- \u79fb\u9664\u961f\u5c3e\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"peekFront")," --- \u67e5\u770b\u961f\u9996\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"peekBack")," --- \u67e5\u770b\u961f\u5c3e\u5143\u7d20"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clear")," --- \u6e05\u7a7a\u961f\u5217"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isEmpty")," --- \u67e5\u770b\u961f\u5217\u662f\u5426\u4e3a\u7a7a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," --- \u67e5\u770b\u961f\u5217\u5143\u7d20\u4e2a\u6570")),(0,o.kt)("h3",{id:"\u6a21\u62df\u5b9e\u73b0"},"\u6a21\u62df\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Deque<T> {\n  private count: number;\n  private lowestCount: number;\n  private items: any;\n\n  constructor() {\n    this.count = 0;\n    this.lowestCount = 0;\n    this.items = {};\n  }\n\n  /** \u5411\u961f\u9996\u6dfb\u52a0\u65b0\u5143\u7d20 */\n  addFront(element: T) {\n    if (this.isEmpty()) {\n      this.addBack(element);\n    } else if (this.lowestCount > 0) {\n      this.lowestCount--;\n      this.items[this.lowestCount] = element;\n    } else {\n      // lowestCount=0 \u7684\u60c5\u51b5\n      for (let i = this.count; i > 0; i--) {\n        this.items[i] = this.items[i - 1];\n      }\n      this.count++;\n      this.lowestCount = 0;\n    }\n  }\n\n  /** \u5411\u961f\u5c3e\u6dfb\u52a0\u65b0\u5143\u7d20 */\n  addBack(element: T) {\n    this.items[this.count] = element;\n    this.count++;\n  }\n\n  /** \u79fb\u9664\u961f\u9996\u5143\u7d20 */\n  removeFront() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    const element: T = this.items[this.lowestCount];\n    delete this.items[this.lowestCount];\n    this.lowestCount++;\n    return element;\n  }\n\n  /** \u79fb\u9664\u961f\u5c3e\u5143\u7d20 */\n  removeback() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    const element: T = this.items[this.count - 1];\n    delete this.items[this.count];\n    this.count++;\n    return element;\n  }\n\n  /** \u67e5\u770b\u961f\u9996\u5143\u7d20 */\n  peekFront() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.lowestCount];\n  }\n\n  /** \u67e5\u770b\u961f\u5c3e\u5143\u7d20 */\n  peekBack() {\n    if (this.isEmpty()) {\n      return undefined;\n    }\n    return this.items[this.count - 1];\n  }\n\n  /** \u67e5\u770b\u961f\u5217\u662f\u5426\u4e3a\u7a7a */\n  isEmpty() {\n    return this.count === this.lowestCount;\n  }\n\n  /** \u6e05\u7a7a\u961f\u5217 */\n  clear() {\n    while (this.lowestCount !== this.count) {\n      this.removeback();\n    }\n  }\n}\n")))}m.isMDXComponent=!0}}]);