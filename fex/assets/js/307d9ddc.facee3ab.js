"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[7631],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),a=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=a(t),f=i,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||u;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,l=new Array(u);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var a=2;a<u;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3776:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return c},default:function(){return p}});var r=t(7462),i=t(3366),u=(t(7294),t(3905)),l=["components"],o={id:"doubly-linked-list",title:"\u53cc\u5411\u94fe\u8868"},s=void 0,a={unversionedId:"interview/data-structures/doubly-linked-list",id:"interview/data-structures/doubly-linked-list",isDocsHomePage:!1,title:"\u53cc\u5411\u94fe\u8868",description:"\u7279\u70b9\uff1a\u5b58\u5728\u9996\u9879\u548c\u5c3e\u9879\uff0c\u901a\u8fc7\u4e24\u4e2a\u6307\u9488\u5173\u8054\u524d\u540e\u7684\u5143\u7d20\u3002",source:"@site/docs/interview/data-structures/doubly-linked-list.md",sourceDirName:"interview/data-structures",slug:"/interview/data-structures/doubly-linked-list",permalink:"/fex/docs/interview/data-structures/doubly-linked-list",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/interview/data-structures/doubly-linked-list.md",tags:[],version:"current",frontMatter:{id:"doubly-linked-list",title:"\u53cc\u5411\u94fe\u8868"},sidebar:"interview",previous:{title:"\u94fe\u8868",permalink:"/fex/docs/interview/data-structures/linked-list"},next:{title:"\u4e8c\u53c9\u641c\u7d22\u6811",permalink:"/fex/docs/interview/data-structures/binary-search-tree"}},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[]},{value:"\u6a21\u62df\u5b9e\u73b0",id:"\u6a21\u62df\u5b9e\u73b0",children:[]}],d={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u7279\u70b9\uff1a\u5b58\u5728\u9996\u9879\u548c\u5c3e\u9879\uff0c\u901a\u8fc7\u4e24\u4e2a\u6307\u9488\u5173\u8054\u524d\u540e\u7684\u5143\u7d20\u3002"),(0,u.kt)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,u.kt)("p",null,"\u5bf9\u6bd4\u5355\u9879\u94fe\u8868\uff0c\u9700\u8981\u7279\u522b\u5173\u6ce8\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"insert")," --- \u5411\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u5143\u7d20\uff0c\u8fd4\u56de\u662f\u5426\u6267\u884c\u6210\u529f"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"remove")," --- \u79fb\u9664\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20")),(0,u.kt)("h3",{id:"\u6a21\u62df\u5b9e\u73b0"},"\u6a21\u62df\u5b9e\u73b0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u5143\u7d20\n */\nclass DoublyNodes<T> {\n  protected element: T;\n  protected prev: DoublyNodes<T> | null;\n  protected next: DoublyNodes<T> | null;\n\n  constructor(element: T) {\n    this.element = element;\n    this.prev = null;\n    this.next = null;\n  }\n}\n\n/**\n * \u94fe\u8868\u7ed3\u6784\n */\nclass DoublyLinkedList<T> {\n  protected count: number;\n  protected head: DoublyNodes<T> | null; // \u94fe\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u503c\n  protected tail: DoublyNodes<T> | null; // \u94fe\u8868\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u503c\n  protected equalsFn: Function;\n\n  constructor() {\n    this.count = 0;\n    this.head = null;\n    this.tail = null;\n    this.equalsFn = defaultEquals;\n  }\n\n  /** \u5411\u6307\u5b9a\u4f4d\u7f6e\u6dfb\u52a0\u5143\u7d20 */\n  insert(element: T, index: number) {\n    if (index >= 0 && index < this.count) {\n      const node = new DoublyNodes(element);\n      let current = this.head;\n\n      /**\n       * 1. \u5934\u90e8\u63d2\u5165\u65b0\u5143\u7d20\uff0c\u82e5\u662f\u7a7a\u94fe\u8868\uff0c\u5219\u4fee\u6539 head,tail \u6307\u5411\uff0c\u5426\u5219\u4fee\u6539\u524d\u540e\u5173\u8054\u5173\u7cfb\n       * 2. \u5c3e\u90e8\u63d2\u5165\u65b0\u5143\u7d20\uff0c\u4fee\u6539\u524d\u540e\u5173\u8054\u5173\u7cfb\uff0c\u4fee\u6539 tail \u6307\u5411\n       * 3. \u4e2d\u95f4\u63d2\u5165\u65b0\u5143\u7d20\uff0c\u67e5\u627e\u7d22\u5f15\u5bf9\u5e94\u5143\u7d20\uff0c\u4fee\u6539\u524d\u540e\u5173\u8054\u5173\u7cfb\n       */\n      if (index === 0) {\n        if (this.head === null) {\n          // NEW\n          this.head = node;\n          this.tail = node;\n        } else {\n          node.next = this.head;\n          this.head.prev = node; // NEW\n          this.head = node;\n        }\n      } else if (index === this.count) {\n        current = this.tail;\n        current.next = node;\n        node.prev = current;\n        this.tail = node;\n      } else {\n        const previous = this.getElementAt(index - 1);\n        current = previous.next;\n        previous.next = node;\n        node.prev = previous;\n        node.next = current;\n        current.prev = node;\n      }\n\n      this.count++;\n      return true;\n    }\n\n    return false;\n  }\n\n  /** \u79fb\u9664\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20 */\n  removeAt(index: number) {\n    if (index >= 0 && index < this.count) {\n      let current = this.head;\n\n      /**\n       * 1. \u5934\u90e8\u5220\u9664\u5143\u7d20\uff0c\u5c06 head \u6307\u5411\u7b2c\u4e8c\u9879\u5143\u7d20\uff0c\u82e5\u672c\u8eab\u4ec5\u6709\u4e00\u9879\uff0c\u79fb\u9664\u540e\u94fe\u8868\u4e3a\u7a7a\uff0c\u5c06 tail \u4e5f\u7f6e\u7a7a\uff0c\u5426\u5219\u5c06 head \u524d\u4e00\u9879\u7f6e\u7a7a\uff0c\u8868\u793a\u5934\u90e8\n       * 2. \u5c3e\u90e8\u5220\u9664\u5143\u7d20\uff0c\u5c06 tail \u6307\u5411\u5012\u6570\u7b2c\u4e8c\u9879\u5143\u7d20\uff0c\u5e76\u5c06\u4e0b\u4e00\u9879\u7f6e\u7a7a\uff0c\u8868\u793a\u5c3e\u90e8\n       * 3. \u4e2d\u95f4\u5220\u9664\u5143\u7d20\uff0c\u4fee\u6539\u524d\u540e\u5173\u8054\u5173\u7cfb\n       */\n      if (index == 0) {\n        this.head = current.next;\n        if (this.count === 1) {\n          this.tail = null;\n        } else {\n          this.head.prev = null;\n        }\n      } else if (index === this.count) {\n        current = this.tail;\n        this.tail = current.prev;\n        this.tail.next = null;\n      } else {\n        let previous = this.getElementAt(index - 1);\n        current = previous.next;\n        previous.next = current.next;\n        current.next.prev = previous;\n      }\n\n      this.count--;\n      return current;\n    }\n\n    return undefined;\n  }\n\n  /** \u67e5\u770b\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20 */\n  getElementAt(index: number) {\n    if (index >= 0 && index < this.count) {\n      let current = this.head;\n\n      for (let i = 0; i < index; i++) {\n        current = current.next;\n      }\n\n      return current;\n    }\n\n    return undefined;\n  }\n}\n")),(0,u.kt)("p",null,"\u603b\u7ed3\uff1a\u4e0e\u5355\u9879\u94fe\u8868\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5904\u7406\u5173\u8054\u5173\u7cfb\u7684\u65f6\u5019\u9700\u8981\u5904\u7406\u524d\u540e\u4e24\u4e2a\u6307\u9488\u3002"))}p.isMDXComponent=!0}}]);