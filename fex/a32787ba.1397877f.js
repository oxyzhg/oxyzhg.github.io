(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),a=(r(0),r(152)),l={id:"binary-search-tree",title:"\u4e8c\u53c9\u641c\u7d22\u6811"},i={unversionedId:"data-structures/binary-search-tree",id:"data-structures/binary-search-tree",isDocsHomePage:!1,title:"\u4e8c\u53c9\u641c\u7d22\u6811",description:"\u7279\u70b9\uff1a\u4e8c\u53c9\u6811\u4e2d\u7684\u8282\u70b9\u53ea\u80fd\u6709\u4e24\u4e2a\u5b50\u8282\u70b9\uff1a\u5de6\u4fa7\u8282\u70b9\u548c\u53f3\u4fa7\u8282\u70b9\u3002\u4e8c\u53c9\u641c\u7d22\u6811\u662f\u4e8c\u53c9\u6811\u7684\u4e00\u79cd\uff0c\u4f46\u662f\u53ea\u5141\u8bb8\u5de6\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5c0f\u7684\u503c\uff0c\u53f3\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5927\u7684\u503c\u3002",source:"@site/docs/data-structures/binary-search-tree.md",slug:"/data-structures/binary-search-tree",permalink:"/fex/docs/data-structures/binary-search-tree",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/data-structures/binary-search-tree.md",version:"current",sidebar:"algorithms",previous:{title:"\u53cc\u5411\u94fe\u8868",permalink:"/fex/docs/data-structures/doubly-linked-list"},next:{title:"\u6982\u89c8",permalink:"/fex/docs/algorithms"}},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",children:[]},{value:"\u6a21\u62df\u5b9e\u73b0",id:"\u6a21\u62df\u5b9e\u73b0",children:[]}],s={toc:c};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u7279\u70b9\uff1a\u4e8c\u53c9\u6811\u4e2d\u7684\u8282\u70b9\u53ea\u80fd\u6709\u4e24\u4e2a\u5b50\u8282\u70b9\uff1a\u5de6\u4fa7\u8282\u70b9\u548c\u53f3\u4fa7\u8282\u70b9\u3002\u4e8c\u53c9\u641c\u7d22\u6811\u662f\u4e8c\u53c9\u6811\u7684\u4e00\u79cd\uff0c\u4f46\u662f\u53ea\u5141\u8bb8\u5de6\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5c0f\u7684\u503c\uff0c\u53f3\u4fa7\u8282\u70b9\u5b58\u50a8\uff08\u6bd4\u7236\u8282\u70b9\uff09\u5927\u7684\u503c\u3002"),Object(a.b)("h3",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"insert")," --- \u5411\u6811\u4e2d\u63d2\u5165\u65b0\u503c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"search")," --- \u5728\u6811\u4e2d\u67e5\u627e\u4e00\u4e2a\u952e\u3002\u5982\u679c\u8282\u70b9\u5b58\u5728\uff0c\u5219\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"inOrderTraverse")," --- \u901a\u8fc7\u4e2d\u5e8f\u904d\u5386\u7684\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"preOrderTraverse")," --- \u901a\u8fc7\u5148\u5e8f\u904d\u5386\u7684\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"postOrderTraverse")," --- \u901a\u8fc7\u540e\u5e8f\u904d\u5386\u7684\u65b9\u5f0f\u904d\u5386\u6240\u6709\u8282\u70b9"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"min")," --- \u8fd4\u56de\u6811\u4e2d\u7684\u6700\u5c0f\u503c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"max")," --- \u8fd4\u56de\u6811\u4e2d\u7684\u6700\u5927\u503c"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"remove")," --- \u4ece\u6811\u4e2d\u79fb\u9664\u67d0\u4e2a\u952e")),Object(a.b)("h3",{id:"\u6a21\u62df\u5b9e\u73b0"},"\u6a21\u62df\u5b9e\u73b0"),Object(a.b)("p",null,"\u5148\u521b\u5efa ",Object(a.b)("inlineCode",{parentName:"p"},"Node")," \u7c7b\u8868\u793a\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"class Node<T> {\n  public key: T;\n  public left: Node<T> | null;\n  public right: Node<T> | null;\n\n  constructor(key: T) {\n    this.key = key;\n    this.left = null;\n    this.right = null;\n  }\n}\n")),Object(a.b)("p",null,"\u6a21\u62df\u5b9e\u73b0\u4e8c\u53c9\u641c\u7d22\u6811\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"class BinarySearchTree<T> {\n  protected root: Node<T> | null;\n  protected compareFn: Function;\n\n  constructor() {\n    this.root = null;\n    this.compareFn = defaultCompare;\n  }\n\n  /** \u5411\u6811\u79cd\u63d2\u5165\u65b0\u5143\u7d20 */\n  insert(key: T) {\n    /**\n     * 1. \u6811\u4e3a\u7a7a\uff0c\u65b0\u8282\u70b9\u5c31\u662f\u6839\u8282\u70b9\n     * 2. \u6811\u4e0d\u4e3a\u7a7a\uff0c\u904d\u5386\u63d2\u5165\n     */\n    if (this.root === null) {\n      this.root = new Node(key);\n    } else {\n      this.insertNode(this.root, key); // \u9012\u5f52\u5411\u4e0b\u67e5\u627e\n    }\n  }\n\n  private insertNode(root: Node<T>, key: T) {\n    /**\n     * 1. \u5bf9\u6bd4\u5f53\u524d\u8282\u70b9\u5143\u7d20\u4e0e\u65b0\u503c\u5927\u5c0f\uff0c\u82e5\u5c0f\u4e8e\u5f53\u524d\u8282\u70b9\u5143\u7d20\uff0c\u5219\u518d\u5224\u65ad\u5de6\u8282\u70b9\u7684\u60c5\u51b5\uff0c\u5426\u5219\u5224\u65ad\u53f3\u8282\u70b9\n     * 2. \u5982\u679c\u5de6\u8282\u70b9\u4e3a\u7a7a\u503c\uff0c\u90a3\u4e48\u65b0\u5143\u7d20\u7f6e\u4e8e\u6b64\uff0c\u5426\u5219\u4ece\u5de6\u8282\u70b9\u7ee7\u7eed\u5f80\u4e0b\u9012\u5f52\uff0c\u76f4\u5230\u65b0\u5143\u7d20\u76ee\u6807\u4f4d\u7f6e\u4e3a\u7a7a\n     */\n    if (this.compareFn(key, root.key) === Compare.LESS_THAN) {\n      if (root.left === null) {\n        root.left = new Node(key);\n      } else {\n        this.insertNode(root.left, key);\n      }\n    } else {\n      if (root.right === null) {\n        root.right = new Node(key);\n      } else {\n        this.insertNode(root.right, key);\n      }\n    }\n  }\n\n  /** \u4e2d\u5e8f\u904d\u5386 */\n  inOrderTraverse(callback: Function) {\n    // \u7279\u70b9\uff1a\u6309\u4ece\u5c0f\u5230\u5927\u7684\u987a\u5e8f\u8bbf\u95ee\u8282\u70b9\n    // \u5e94\u7528\uff1a\u5bf9\u6811\u8fdb\u884c\u6392\u5e8f\u64cd\u4f5c\n    this.inOrderTraverseNode(this.root, callback);\n  }\n\n  private inOrderTraverseNode(node: Node<T> | null, callback: Function) {\n    if (node != null) {\n      this.inOrderTraverseNode(node.left, callback);\n      callback(node.key);\n      this.inOrderTraverseNode(node.right, callback);\n    }\n  }\n\n  /** \u5148\u5e8f\u904d\u5386 */\n  preOrderTraverse(callback: Function) {\n    // \u7279\u70b9\uff1a\u4f18\u5148\u4e8e\u540e\u4ee3\u8282\u70b9\u7684\u987a\u5e8f\u8bbf\u95ee\u6bcf\u4e2a\u8282\u70b9\n    // \u5e94\u7528\uff1a\u8f93\u51fa\u7ed3\u6784\u5316\u6587\u6863\n    this.preOrderTraverseNode(this.root, callback);\n  }\n\n  private preOrderTraverseNode(node: Node<T> | null, callback: Function) {\n    if (node != null) {\n      callback(node.key);\n      this.preOrderTraverseNode(node.left, callback);\n      this.preOrderTraverseNode(node.right, callback);\n    }\n  }\n\n  /** \u540e\u5e8f\u904d\u5386 */\n  postOrderTraverse(callback: Function) {\n    // \u7279\u70b9\uff1a\u4f18\u5148\u8bbf\u95ee\u540e\u4ee3\u8282\u70b9\uff0c\u518d\u8bbf\u95ee\u8282\u70b9\u672c\u8eab\n    // \u5e94\u7528\uff1a\u8ba1\u7b97\u4e00\u4e2a\u76ee\u5f55\u53ca\u5176\u5b50\u76ee\u5f55\u4e2d\u6240\u6709\u6587\u4ef6\u6240\u5360\u7a7a\u95f4\u5927\u5c0f\n    this.postOrderTraverseNode(this.root, callback);\n  }\n\n  private postOrderTraverseNode(node: Node<T> | null, callback: Function) {\n    if (node != null) {\n      this.postOrderTraverseNode(node.left, callback);\n      this.postOrderTraverseNode(node.right, callback);\n      callback(node.key);\n    }\n  }\n\n  /** \u67e5\u627e\u6811\u4e2d\u7279\u5b9a\u7684\u503c */\n  search(key: T) {\n    return this.searchNode(this.root, key);\n  }\n\n  private searchNode(node: Node<T> | null, key: T): boolean {\n    if (node == null) {\n      return false;\n    }\n    /**\n     * 1. \u6307\u5b9a\u503c\u5c0f\u4e8e\u5f53\u524d\u503c\n     * 2. \u6307\u5b9a\u503c\u5927\u4e8e\u5f53\u524d\u503c\n     * 3. \u6307\u5b9a\u503c\u7b49\u4e8e\u5f53\u524d\u503c\n     */\n    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {\n      return this.searchNode(node.left, key);\n    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {\n      return this.searchNode(node.right, key);\n    } else {\n      return true;\n    }\n  }\n\n  /** \u67e5\u627e\u6811\u4e2d\u7684\u6700\u5c0f\u503c */\n  min() {\n    return this.minNode(this.root);\n  }\n\n  private minNode(node: Node<T> | null) {\n    let current = node;\n\n    while (current != null && current.left != null) {\n      current = current.left;\n    }\n\n    return current;\n  }\n\n  /** \u67e5\u627e\u6811\u4e2d\u7684\u6700\u5927\u503c */\n  max() {\n    return this.maxNode(this.root);\n  }\n\n  private maxNode(node: Node<T> | null) {\n    let current = node;\n\n    while (current != null && current.right != null) {\n      current = current.right;\n    }\n\n    return current;\n  }\n\n  /** \u79fb\u9664\u4e00\u4e2a\u5143\u7d20 */\n  remove(key: T) {}\n}\n")))}u.isMDXComponent=!0},152:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(m,i(i({ref:n},s),{},{components:r})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);