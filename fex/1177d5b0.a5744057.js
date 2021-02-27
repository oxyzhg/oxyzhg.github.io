(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(133)),c={id:"next-tick",title:"nextTick"},o={unversionedId:"advanced/vue/next-tick",id:"advanced/vue/next-tick",isDocsHomePage:!1,title:"nextTick",description:"JS \u8fd0\u884c\u673a\u5236",source:"@site/docs/advanced/vue/next-tick.md",slug:"/advanced/vue/next-tick",permalink:"/fex/docs/advanced/vue/next-tick",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/vue/next-tick.md",version:"current",sidebar:"advanced",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/fex/docs/advanced/vue/lifecycle"},next:{title:"\u8ba1\u7b97\u5c5e\u6027 vs \u4fa6\u542c\u5c5e\u6027",permalink:"/fex/docs/advanced/vue/computed-vs-watch"}},l=[{value:"JS \u8fd0\u884c\u673a\u5236",id:"js-\u8fd0\u884c\u673a\u5236",children:[]},{value:"nextTick \u5b9e\u73b0\u539f\u7406",id:"nexttick-\u5b9e\u73b0\u539f\u7406",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"js-\u8fd0\u884c\u673a\u5236"},"JS \u8fd0\u884c\u673a\u5236"),Object(a.b)("p",null,"JavaScript \u6267\u884c\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u5b83\u662f\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u7684\u3002\u4e8b\u4ef6\u5faa\u73af\u5927\u81f4\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u6240\u6709\u540c\u6b65\u4efb\u52a1\u90fd\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u5f62\u6210\u4e00\u4e2a",Object(a.b)("strong",{parentName:"li"},"\u6267\u884c\u6808"),"\uff08execution context stack\uff09\u3002"),Object(a.b)("li",{parentName:"ol"},"\u4e3b\u7ebf\u7a0b\u4e4b\u5916\uff0c\u8fd8\u5b58\u5728\u4e00\u4e2a",Object(a.b)("strong",{parentName:"li"},"\u4efb\u52a1\u961f\u5217"),"\uff08task queue\uff09\u3002\u53ea\u8981\u5f02\u6b65\u4efb\u52a1\u6709\u4e86\u8fd0\u884c\u7ed3\u679c\uff0c\u5c31\u5728\u4efb\u52a1\u961f\u5217\u4e4b\u4e2d\u653e\u7f6e\u4e00\u4e2a\u4e8b\u4ef6\u3002"),Object(a.b)("li",{parentName:"ol"},"\u4e00\u65e6\u6267\u884c\u6808\u4e2d\u7684\u6240\u6709\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u7cfb\u7edf\u5c31\u4f1a\u8bfb\u53d6\u4efb\u52a1\u961f\u5217\uff0c\u770b\u770b\u91cc\u9762\u6709\u54ea\u4e9b\u4e8b\u4ef6\u3002\u90a3\u4e9b\u5bf9\u5e94\u7684\u5f02\u6b65\u4efb\u52a1\uff0c\u4e8e\u662f\u7ed3\u675f\u7b49\u5f85\u72b6\u6001\uff0c\u8fdb\u5165\u6267\u884c\u6808\uff0c\u5f00\u59cb\u6267\u884c\u3002"),Object(a.b)("li",{parentName:"ol"},"\u4e3b\u7ebf\u7a0b\u4e0d\u65ad\u91cd\u590d\u4e0a\u9762\u7684\u7b2c\u4e09\u6b65\u3002")),Object(a.b)("p",null,"\u4e3b\u7ebf\u7a0b\u7684\u6267\u884c\u8fc7\u7a0b\u5c31\u662f\u4e00\u4e2a tick\uff0c\u800c\u6240\u6709\u7684\u5f02\u6b65\u7ed3\u679c\u90fd\u662f\u901a\u8fc7\u4efb\u52a1\u961f\u5217\u6765\u8c03\u5ea6\u3002\u6d88\u606f\u961f\u5217\u4e2d\u5b58\u653e\u7684\u662f\u4e00\u4e2a\u4e2a\u7684\u4efb\u52a1\uff08task\uff09\u3002\u89c4\u8303\u4e2d\u89c4\u5b9a task \u5206\u4e3a\u4e24\u5927\u7c7b\uff0c\u5206\u522b\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"macro task")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"micro task"),"\uff0c\u5e76\u4e14\u6bcf\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"macro task")," \u7ed3\u675f\u540e\uff0c\u90fd\u8981\u6e05\u7a7a\u6240\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"micro task"),"\u3002"),Object(a.b)("p",null,"\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\uff0c\u5e38\u89c1\u7684 macro task \u6709\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"setTimeout"),Object(a.b)("li",{parentName:"ul"},"MessageChannel"),Object(a.b)("li",{parentName:"ul"},"postMessage"),Object(a.b)("li",{parentName:"ul"},"setImmediate")),Object(a.b)("p",null,"\u5e38\u89c1\u7684 micro task \u6709\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"MutationObsever"),Object(a.b)("li",{parentName:"ul"},"Promise.then")),Object(a.b)("h2",{id:"nexttick-\u5b9e\u73b0\u539f\u7406"},"nextTick \u5b9e\u73b0\u539f\u7406"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/util/next-tick.js"',title:'"src/core/util/next-tick.js"'},"const callbacks = [];\nlet pending = false;\n\nfunction flushCallbacks() {\n  pending = false;\n  const copies = callbacks.slice(0);\n  callbacks.length = 0;\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]();\n  }\n}\n\n// highlight-next-line\nlet timerFunc;\n\nif (typeof Promise !== 'undefined' && isNative(Promise)) {\n  const p = Promise.resolve();\n  timerFunc = () => {\n    p.then(flushCallbacks);\n    // In problematic UIWebViews, Promise.then doesn't completely break, but\n    // it can get stuck in a weird state where callbacks are pushed into the\n    // microtask queue but the queue isn't being flushed, until the browser\n    // needs to do some other work, e.g. handle a timer. Therefore we can\n    // \"force\" the microtask queue to be flushed by adding an empty timer.\n    if (isIOS) setTimeout(noop);\n  };\n  isUsingMicroTask = true;\n} else if (\n  !isIE &&\n  typeof MutationObserver !== 'undefined' &&\n  (isNative(MutationObserver) ||\n    // PhantomJS and iOS 7.x\n    MutationObserver.toString() === '[object MutationObserverConstructor]')\n) {\n  // Use MutationObserver where native Promise is not available,\n  // e.g. PhantomJS, iOS7, Android 4.4\n  // (#6466 MutationObserver is unreliable in IE11)\n  let counter = 1;\n  const observer = new MutationObserver(flushCallbacks);\n  const textNode = document.createTextNode(String(counter));\n  observer.observe(textNode, {\n    characterData: true,\n  });\n  timerFunc = () => {\n    counter = (counter + 1) % 2;\n    textNode.data = String(counter);\n  };\n  isUsingMicroTask = true;\n} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {\n  // Fallback to setImmediate.\n  // Technically it leverages the (macro) task queue,\n  // but it is still a better choice than setTimeout.\n  timerFunc = () => {\n    setImmediate(flushCallbacks);\n  };\n} else {\n  // Fallback to setTimeout.\n  timerFunc = () => {\n    setTimeout(flushCallbacks, 0);\n  };\n}\n\nexport function nextTick(cb?: Function, ctx?: Object) {\n  let _resolve;\n  callbacks.push(() => {\n    if (cb) {\n      try {\n        cb.call(ctx);\n      } catch (e) {\n        handleError(e, ctx, 'nextTick');\n      }\n    } else if (_resolve) {\n      _resolve(ctx);\n    }\n  });\n  // highlight-start\n  if (!pending) {\n    pending = true;\n    timerFunc();\n  }\n  // highlight-end\n  // $flow-disable-line\n  if (!cb && typeof Promise !== 'undefined') {\n    return new Promise((resolve) => {\n      _resolve = resolve;\n    });\n  }\n}\n")),Object(a.b)("p",null,"\u9996\u5148 ",Object(a.b)("inlineCode",{parentName:"p"},"nextTick")," \u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u628a\u5b83\u7f13\u5b58\u8d77\u6765\uff0c\u5e76\u6ce8\u518c\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1\uff0c\u7b49\u672c\u8f6e\u4e8b\u4ef6\u5faa\u73af\u7ed3\u675f\u540e\uff0c\u53d6\u51fa\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684\u56de\u8c03\uff0c\u5373 ",Object(a.b)("inlineCode",{parentName:"p"},"flushCallbacks")," \u65b9\u6cd5\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"nextTick")," \u4e0d\u4f1a\u5f00\u542f\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\uff0c\u800c\u662f\u628a\u8fd9\u4e9b\u5f02\u6b65\u4efb\u52a1\u90fd\u538b\u6210\u4e00\u4e2a\u540c\u6b65\u4efb\u52a1\uff0c\u5728\u4e0b\u4e00\u4e2a tick \u6267\u884c\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"timerFunc")," \u58f0\u660e\u4e86\u6ce8\u518c\u5f02\u6b65\u4efb\u52a1\u7684\u65b9\u5f0f\uff0c\u4e3a\u66f4\u597d\u7684\u517c\u5bb9\u8fd0\u884c\u73af\u5883\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u5411\u4e0b\u517c\u5bb9\u65b9\u6848\uff0c\u5b83\u4eec\u7684\u4f18\u5148\u7ea7\u5206\u522b\u662f\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"Promise.then"),", ",Object(a.b)("inlineCode",{parentName:"p"},"MutationObserver"),", ",Object(a.b)("inlineCode",{parentName:"p"},"setImmediate"),", ",Object(a.b)("inlineCode",{parentName:"p"},"setTimeout"),"\u3002"))}u.isMDXComponent=!0}}]);