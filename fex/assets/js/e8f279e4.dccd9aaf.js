"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[8879],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5942:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"merge-promise",title:"\u5b9e\u73b0 mergePromise"},c=void 0,u={unversionedId:"interview/handwrittens/merge-promise",id:"interview/handwrittens/merge-promise",isDocsHomePage:!1,title:"\u5b9e\u73b0 mergePromise",description:"\u5b9e\u73b0 mergePromise \u51fd\u6570\uff0c\u628a\u4f20\u8fdb\u53bb\u7684\u51fd\u6570\u6570\u7ec4\u6309\u987a\u5e8f\u5148\u540e\u6267\u884c\uff0c\u5e76\u4e14\u628a\u8fd4\u56de\u7684\u6570\u636e\u5148\u540e\u653e\u5230\u6570\u7ec4 data \u4e2d\u3002",source:"@site/docs/interview/handwrittens/\u5b9e\u73b0mergePromise.md",sourceDirName:"interview/handwrittens",slug:"/interview/handwrittens/merge-promise",permalink:"/fex/docs/interview/handwrittens/merge-promise",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/handwrittens/\u5b9e\u73b0mergePromise.md",tags:[],version:"current",frontMatter:{id:"merge-promise",title:"\u5b9e\u73b0 mergePromise"},sidebar:"interview",previous:{title:"\u624b\u5199JSONP",permalink:"/fex/docs/interview/handwrittens/jsonp"},next:{title:"\u63a7\u5236\u5e76\u53d1\u8bf7\u6c42",permalink:"/fex/docs/interview/handwrittens/concurrent-poll"}},l=[],m={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b9e\u73b0 mergePromise \u51fd\u6570\uff0c\u628a\u4f20\u8fdb\u53bb\u7684\u51fd\u6570\u6570\u7ec4\u6309\u987a\u5e8f\u5148\u540e\u6267\u884c\uff0c\u5e76\u4e14\u628a\u8fd4\u56de\u7684\u6570\u636e\u5148\u540e\u653e\u5230\u6570\u7ec4 data \u4e2d\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const timeout = (ms) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n    }, ms);\n  });\n\nconst ajax1 = () =>\n  timeout(2000).then(() => {\n    console.log('1');\n    return 1;\n  });\n\nconst ajax2 = () =>\n  timeout(1000).then(() => {\n    console.log('2');\n    return 2;\n  });\n\nconst ajax3 = () =>\n  timeout(2000).then(() => {\n    console.log('3');\n    return 3;\n  });\n\nconst mergePromise = (ajaxArray) => {\n  // \u5728\u8fd9\u91cc\u5b9e\u73b0\u4f60\u7684\u4ee3\u7801\n};\n\nmergePromise([ajax1, ajax2, ajax3]).then((data) => {\n  console.log('done');\n  console.log(data); // data \u4e3a [1, 2, 3]\n});\n\n// \u8981\u6c42\u5206\u522b\u8f93\u51fa\n// 1\n// 2\n// 3\n// done\n// [1, 2, 3]\n")),(0,i.kt)("p",null,"\u5b9e\u73b0\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u73b0\u65b9\u5f0f 1\nfunction mergePromise(promiseList) {\n  let data = [];\n  let sequence = Promise.resolve();\n\n  for (let p of promiseList) {\n    sequence = sequence.then(p).then((res) => {\n      data.push(res);\n    });\n  }\n\n  return sequence.then(() => data);\n}\n\n// \u5b9e\u73b0\u65b9\u5f0f 2\nfunction mergePromise(promiseList) {\n  let data = [];\n\n  for (let p of promiseList) {\n    data.push(await p());\n    sequence = sequence.then(p).then((res) => {\n      data.push(res);\n    });\n  }\n\n  return sequence.then(() => data);\n}\n")))}p.isMDXComponent=!0}}]);