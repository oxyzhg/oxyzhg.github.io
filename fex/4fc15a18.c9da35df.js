(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{133:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=i.a.createContext({}),s=function(e){var n=i.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,u=e.originalType,o=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||u;return t?i.a.createElement(m,c(c({ref:n},a),{},{components:t})):i.a.createElement(m,c({ref:n},a))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var u=t.length,o=new Array(u);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var a=2;a<u;a++)o[a]=t[a];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),u=(t(0),t(133)),o={id:"linked-list",title:"\u94fe\u8868"},c={unversionedId:"data-structures/linked-list",id:"data-structures/linked-list",isDocsHomePage:!1,title:"\u94fe\u8868",description:"\u7279\u70b9\uff1a\u5b58\u5728\u9996\u9879\uff0c\u901a\u8fc7\u4e00\u4e2a\u5173\u8054\u7684\u6307\u9488\u8fde\u63a5\u3002",source:"@site/docs/data-structures/\u94fe\u8868.md",slug:"/data-structures/linked-list",permalink:"/fex/docs/data-structures/linked-list",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/data-structures/\u94fe\u8868.md",version:"current",sidebar:"algorithms",previous:{title:"\u53cc\u7aef\u961f\u5217",permalink:"/fex/docs/data-structures/deque"},next:{title:"\u53cc\u5411\u94fe\u8868",permalink:"/fex/docs/data-structures/doubly-linked-list"}},l=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[]},{value:"\u6a21\u62df\u5b9e\u73b0",id:"\u6a21\u62df\u5b9e\u73b0",children:[]}],a={toc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},a,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,"\u7279\u70b9\uff1a\u5b58\u5728\u9996\u9879\uff0c\u901a\u8fc7\u4e00\u4e2a\u5173\u8054\u7684\u6307\u9488\u8fde\u63a5\u3002"),Object(u.b)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"push")," --- \u5411\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"insert")," --- \u5411\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u5143\u7d20\uff0c\u8fd4\u56de\u662f\u5426\u6267\u884c\u6210\u529f"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"remove")," --- \u79fb\u9664\u94fe\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"removeAt")," --- \u79fb\u9664\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"getElementAt")," --- \u67e5\u770b\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"indexOf")," --- \u67e5\u770b\u5143\u7d20\u5728\u94fe\u8868\u4e2d\u7684\u4f4d\u7f6e"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"getHead")," --- \u67e5\u770b\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"isEmpty")," --- \u67e5\u770b\u94fe\u8868\u662f\u5426\u4e3a\u7a7a"),Object(u.b)("li",{parentName:"ul"},Object(u.b)("inlineCode",{parentName:"li"},"size")," --- \u67e5\u770b\u94fe\u8868\u5143\u7d20\u4e2a\u6570")),Object(u.b)("h3",{id:"\u6a21\u62df\u5b9e\u73b0"},"\u6a21\u62df\u5b9e\u73b0"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u5143\u7d20\n */\nclass CNode<T> {\n  protected element: T;\n  protected next: CNode<T> | null;\n\n  constructor(element: T) {\n    this.element = element;\n    this.next = null;\n  }\n}\n\n/**\n * \u94fe\u8868\u7ed3\u6784\n */\nclass LinkedList<T> {\n  protected count: number;\n  protected head: CNode<T> | null; // \u94fe\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u503c\n  protected equalsFn: Function;\n\n  constructor() {\n    this.count = 0;\n    this.head = null;\n    this.equalsFn = defaultEquals;\n  }\n\n  /** \u5411\u94fe\u8868\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20 */\n  push(element: T) {\n    const node = new CNode(element);\n    /**\n     * 1. \u94fe\u8868\u4e3a\u7a7a\uff0c\u76f4\u63a5\u4fee\u6539 head \u6307\u5411\n     * 2. \u94fe\u8868\u4e0d\u4e3a\u7a7a\uff0c\u901a\u8fc7\u9012\u5f52\u627e\u5230\u5c3e\u9879\uff0c\u5e76\u628a\u5c3e\u9879\u7684\u4e0b\u4e00\u9879\u6307\u5411\u65b0\u5143\u7d20\n     */\n    if (this.head === null) {\n      this.head = node;\n    } else {\n      let current = this.head;\n      while (current.next !== null) {\n        current = current.next; // \u627e\u5230\u94fe\u8868\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n      }\n      current.next = node;\n    }\n    this.count++;\n  }\n\n  /** \u5411\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u5143\u7d20 */\n  insert(element: T, position: number) {\n    if (position >= 0 && position < this.count) {\n      const node = new CNode(element);\n\n      /**\n       * 1. \u5411\u5934\u90e8\u63d2\u5165\u5143\u7d20\uff0c\u8981\u4fee\u6539 head \u5c5e\u6027\n       * 2. \u5411\u975e\u5934\u90e8\u63d2\u5165\u5143\u7d20\uff0c\u627e\u5230\u7d22\u5f15\u524d\u4e00\u4e2a\u5143\u7d20\u548c\u7d22\u5f15\u5143\u7d20\uff0c\u5e76\u4fee\u6539\u4ed6\u4eec\u7684\u5173\u8054\u5173\u7cfb\n       */\n      if (position === 0) {\n        node.next = this.head;\n        this.head = node;\n      } else {\n        let previous = this.getElementAt(position - 1);\n        let current = previous.next;\n        node.next = current;\n        previous.next = current;\n      }\n\n      this.count++;\n      return true;\n    }\n\n    return false;\n  }\n\n  /** \u79fb\u9664\u94fe\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20 */\n  remove(element: T) {\n    const index = this.indexOf(element);\n\n    if (index > -1) {\n      return this.removeAt(index);\n    }\n\n    return undefined;\n  }\n\n  /** \u79fb\u9664\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20 */\n  removeAt(index: number) {\n    if (index >= 0 && index < this.count) {\n      let current = this.head;\n      if (index === 0) {\n        this.head = current.next;\n      } else {\n        let previous;\n        for (let i = 0; i < index; i++) {\n          previous = current;\n          current = current.next;\n        }\n        previous.next = current.next;\n        this.count--;\n      }\n      return current;\n    }\n\n    return undefined;\n  }\n\n  /** \u67e5\u770b\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20 */\n  getElementAt(index: number) {\n    if (index >= 0 && index < this.count) {\n      let current = this.head;\n\n      // \u9012\u5f52\uff0c\u76f4\u5230\u7d22\u5f15\u5bf9\u5e94\u5143\u7d20\u51fa\u73b0\n      for (let i = 0; i < index; i++) {\n        current = current.next;\n      }\n\n      return current;\n    }\n\n    return undefined;\n  }\n\n  /** \u67e5\u770b\u5143\u7d20\u5728\u94fe\u8868\u4e2d\u7684\u4f4d\u7f6e */\n  indexOf(element: T) {\n    let current = this.head;\n\n    for (let i = 0; i < this.count; i++) {\n      if (this.equalsFn(current.element, element)) {\n        return i;\n      }\n      current = current.next;\n    }\n\n    return -1;\n  }\n\n  /** \u67e5\u770b\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20 */\n  getHead() {\n    return this.head;\n  }\n\n  /** \u67e5\u770b\u94fe\u8868\u662f\u5426\u4e3a\u7a7a */\n  isEmpty() {\n    return this.head === null;\n  }\n\n  /** \u67e5\u770b\u94fe\u8868\u5143\u7d20\u7684\u4e2a\u6570 */\n  size() {\n    return this.count;\n  }\n}\n")),Object(u.b)("p",null,"\u603b\u7ed3\uff1a\u64cd\u4f5c\u94fe\u8868\u4e3b\u8981\u7279\u522b\u6ce8\u610f\u7684\u70b9\u662f head \u548c\u64cd\u4f5c\u5143\u7d20\u524d\u540e\u7684\u76f8\u5173\u5143\u7d20\uff0c\u53e6\u5916\u53ef\u901a\u8fc7 count \u5224\u65ad\u64cd\u4f5c\u7d22\u5f15\u662f\u5426\u8d8a\u754c\u3002"))}s.isMDXComponent=!0}}]);