"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[6601],{3905:function(e,t,p){p.d(t,{Zo:function(){return d},kt:function(){return y}});var a=p(7294);function r(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function m(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function l(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?m(Object(p),!0).forEach((function(t){r(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):m(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function o(e,t){if(null==e)return{};var p,a,r=function(e,t){if(null==e)return{};var p,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)p=m[a],t.indexOf(p)>=0||(r[p]=e[p]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)p=m[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(r[p]=e[p])}return r}var n=a.createContext({}),i=function(e){var t=a.useContext(n),p=t;return e&&(p="function"==typeof e?e(t):l(l({},t),e)),p},d=function(e){var t=i(e.components);return a.createElement(n.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var p=e.components,r=e.mdxType,m=e.originalType,n=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=i(p),y=r,k=s["".concat(n,".").concat(y)]||s[y]||c[y]||m;return p?a.createElement(k,l(l({ref:t},d),{},{components:p})):a.createElement(k,l({ref:t},d))}));function y(e,t){var p=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=p.length,l=new Array(m);l[0]=s;var o={};for(var n in t)hasOwnProperty.call(t,n)&&(o[n]=t[n]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<m;i++)l[i]=p[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,p)}s.displayName="MDXCreateElement"},9136:function(e,t,p){p.r(t),p.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return y}});var a=p(7462),r=p(3366),m=p(7294),l=p(3905),o={Easy:"#5AB726",Medium:"#FFA119",Hard:"#EF4743"};function n(e){var t=e.type,p={UserSelect:"none",marginLeft:"6px",fontSize:"12px",fontFamily:"Consolas,monospace",color:o[t]};return m.createElement("span",{style:p},t)}var i=["components"],d={id:"leetcode",title:"\u529b\u6263\u9ad8\u9891\u7b97\u6cd5\u9898"},c=void 0,s={unversionedId:"interview/algorithms/leetcode",id:"interview/algorithms/leetcode",isDocsHomePage:!1,title:"\u529b\u6263\u9ad8\u9891\u7b97\u6cd5\u9898",description:"\u5728\u4e00\u4e9b\u5927\u5382\u7684\u524d\u7aef\u9762\u8bd5\u4e2d\uff0c\u4f1a\u88ab\u95ee\u5230\u4e00\u4e9b LeetCode \u7b97\u6cd5\u9898\u3002\u672c\u7bc7\u65e8\u5728\u6c47\u603b\u5e38\u89c1\u7684\u9898\u76ee\uff0c\u4ece\u800c\u5e2e\u52a9\u524d\u7aef\u9762\u8bd5\u8005\u5feb\u901f\u5b66\u4e60\u3001\u719f\u6089\u9898\u76ee\u5e94\u5bf9\u9762\u8bd5\u3002\u7b97\u6cd5\u9898\u6309\u6570\u636e\u7ed3\u6784\u53ef\u5206\u4e3a\uff1a\u5b57\u7b26\u4e32\u7cfb\u5217\u3001\u6570\u7ec4\u7cfb\u5217\u3001\u94fe\u8868\u7cfb\u5217\u3001\u4e8c\u53c9\u6811\u7cfb\u5217\u3001\u6808\u3001\u961f\u5217\u3001\u54c8\u5e0c\u8868\u7b49\uff1b\u6309\u89e3\u9898\u6280\u5de7\u53ef\u5206\u4e3a\uff1a\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf\u3001DFS\u3001BFS\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u53cc\u6307\u9488\u7b49\u3002\u9762\u8bd5\u4e2d\u4f1a\u95ee\u5230\u7684\u9898\u76ee\u4e0d\u9650\u4e8e\u6b64\uff0c\u9898\u76ee\u4f1a\u4e0d\u5b9a\u671f\u66f4\u65b0\u3002",source:"@site/docs/interview/algorithms/leetcode.md",sourceDirName:"interview/algorithms",slug:"/interview/algorithms/leetcode",permalink:"/fex/docs/interview/algorithms/leetcode",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/interview/algorithms/leetcode.md",tags:[],version:"current",frontMatter:{id:"leetcode",title:"\u529b\u6263\u9ad8\u9891\u7b97\u6cd5\u9898"},sidebar:"interview",previous:{title:"\u56de\u6eaf\u7b97\u6cd5\u4e13\u9898",permalink:"/fex/docs/interview/algorithms/backtrack"},next:{title:"\u6982\u89c8",permalink:"/fex/docs/sorts"}},y=[{value:"\u5b57\u7b26\u4e32\u7cfb\u5217",id:"\u5b57\u7b26\u4e32\u7cfb\u5217",children:[]},{value:"\u6570\u7ec4\u7cfb\u5217",id:"\u6570\u7ec4\u7cfb\u5217",children:[]},{value:"\u94fe\u8868\u7cfb\u5217",id:"\u94fe\u8868\u7cfb\u5217",children:[]},{value:"\u4e8c\u53c9\u6811\u7cfb\u5217",id:"\u4e8c\u53c9\u6811\u7cfb\u5217",children:[]},{value:"\u52a8\u6001\u89c4\u5212\u7cfb\u5217",id:"\u52a8\u6001\u89c4\u5212\u7cfb\u5217",children:[]},{value:"\u56de\u6eaf\u7cfb\u5217",id:"\u56de\u6eaf\u7cfb\u5217",children:[]},{value:"DFS/BFS",id:"dfsbfs",children:[]},{value:"\u6808/\u961f\u5217",id:"\u6808\u961f\u5217",children:[]},{value:"\u54c8\u5e0c\u8868\u7cfb\u5217",id:"\u54c8\u5e0c\u8868\u7cfb\u5217",children:[]},{value:"\u53cc\u6307\u9488\u7cfb\u5217",id:"\u53cc\u6307\u9488\u7cfb\u5217",children:[]},{value:"\u5176\u4ed6\u9898\u76ee",id:"\u5176\u4ed6\u9898\u76ee",children:[]}],k={toc:y};function u(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u4e00\u4e9b\u5927\u5382\u7684\u524d\u7aef\u9762\u8bd5\u4e2d\uff0c\u4f1a\u88ab\u95ee\u5230\u4e00\u4e9b LeetCode \u7b97\u6cd5\u9898\u3002\u672c\u7bc7\u65e8\u5728\u6c47\u603b\u5e38\u89c1\u7684\u9898\u76ee\uff0c\u4ece\u800c\u5e2e\u52a9\u524d\u7aef\u9762\u8bd5\u8005\u5feb\u901f\u5b66\u4e60\u3001\u719f\u6089\u9898\u76ee\u5e94\u5bf9\u9762\u8bd5\u3002\u7b97\u6cd5\u9898\u6309\u6570\u636e\u7ed3\u6784\u53ef\u5206\u4e3a\uff1a\u5b57\u7b26\u4e32\u7cfb\u5217\u3001\u6570\u7ec4\u7cfb\u5217\u3001\u94fe\u8868\u7cfb\u5217\u3001\u4e8c\u53c9\u6811\u7cfb\u5217\u3001\u6808\u3001\u961f\u5217\u3001\u54c8\u5e0c\u8868\u7b49\uff1b\u6309\u89e3\u9898\u6280\u5de7\u53ef\u5206\u4e3a\uff1a\u52a8\u6001\u89c4\u5212\u3001\u56de\u6eaf\u3001DFS\u3001BFS\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u53cc\u6307\u9488\u7b49\u3002\u9762\u8bd5\u4e2d\u4f1a\u95ee\u5230\u7684\u9898\u76ee\u4e0d\u9650\u4e8e\u6b64\uff0c\u9898\u76ee\u4f1a\u4e0d\u5b9a\u671f\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"\u5b57\u7b26\u4e32\u7cfb\u5217"},"\u5b57\u7b26\u4e32\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-palindromic-substring"},"5.\u6700\u957f\u56de\u6587\u5b50\u4e32"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-common-prefix"},"14.\u6700\u957f\u516c\u5171\u524d\u7f00"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/multiply-strings"},"43.\u5b57\u7b26\u4e32\u76f8\u4e58"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/add-binary"},"67.\u4e8c\u8fdb\u5236\u6c42\u548c"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/restore-ip-addresses"},"93.\u590d\u539f IP \u5730\u5740"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-words-in-a-string"},"151.\u7ffb\u8f6c\u5b57\u7b26\u4e32\u91cc\u7684\u5355\u8bcd"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/compare-version-numbers"},"165.\u6bd4\u8f83\u7248\u672c\u53f7"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/add-strings"},"415.\u5b57\u7b26\u4e32\u76f8\u52a0"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/string-compression"},"443.\u538b\u7f29\u5b57\u7b26\u4e32"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/repeated-substring-pattern"},"459.\u91cd\u590d\u7684\u5b50\u5b57\u7b26\u4e32"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/valid-palindrome-ii"},"680.\u9a8c\u8bc1\u56de\u6587\u5b57\u7b26\u4e32 \u2161"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u6570\u7ec4\u7cfb\u5217"},"\u6570\u7ec4\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/two-sum"},"1.\u4e24\u6570\u4e4b\u548c"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/3sum"},"15.\u4e09\u6570\u4e4b\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/3sum-closest"},"16.\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array"},"26.\u5220\u9664\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-element/"},"27.\u79fb\u9664\u5143\u7d20"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},"34.\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/combination-sum"},"39.\u7ec4\u5408\u603b\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/spiral-matrix"},"54.\u87ba\u65cb\u77e9\u9635"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/jump-game"},"55.\u8df3\u8dc3\u6e38\u620f"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/merge-intervals"},"56.\u5408\u5e76\u533a\u95f4"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/spiral-matrix-ii"},"59.\u87ba\u65cb\u77e9\u9635 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/plus-one/"},"66.\u52a0\u4e00"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/merge-sorted-array"},"88.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array"},"153.\u5bfb\u627e\u65cb\u8f6c\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u6700\u5c0f\u503c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/majority-element"},"169.\u591a\u6570\u5143\u7d20"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/rotate-array"},"189.\u65cb\u8f6c\u6570\u7ec4"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/minimum-size-subarray-sum"},"209.\u957f\u5ea6\u6700\u5c0f\u7684\u5b50\u6570\u7ec4"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/search-a-2d-matrix-ii/"},"240.\u641c\u7d22\u4e8c\u7ef4\u77e9\u9635 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/move-zeroes"},"283.\u79fb\u52a8\u96f6"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/find-the-duplicate-number"},"287.\u5bfb\u627e\u91cd\u590d\u6570"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/intersection-of-two-arrays/"},"349.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/"},"350.\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6 II"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/fibonacci-number"},"509.\u6590\u6ce2\u90a3\u5951\u6570"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-product-of-three-numbers"},"628.\u4e09\u4e2a\u6570\u7684\u6700\u5927\u4e58\u79ef"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-swap"},"670.\u6700\u5927\u4ea4\u6362"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence"},"674.\u6700\u957f\u8fde\u7eed\u9012\u589e\u5e8f\u5217"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/max-area-of-island"},"695.\u5c9b\u5c7f\u7684\u6700\u5927\u9762\u79ef"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/"},"1013.\u5c06\u6570\u7ec4\u5206\u6210\u548c\u76f8\u7b49\u7684\u4e09\u4e2a\u90e8\u5206"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/"},"\u5251\u6307 Offer 04.\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof"},"\u5251\u6307 Offer 29.\u987a\u65f6\u9488\u6253\u5370\u77e9\u9635"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u94fe\u8868\u7cfb\u5217"},"\u94fe\u8868\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/add-two-numbers"},"2.\u4e24\u6570\u76f8\u52a0"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list"},"19.\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c N \u4e2a\u8282\u70b9"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/merge-two-sorted-lists"},"21.\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-nodes-in-k-group"},"25.K \u4e2a\u4e00\u7ec4\u7ffb\u8f6c\u94fe\u8868"),(0,l.kt)(n,{type:"Hard",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree"},"109.\u6709\u5e8f\u94fe\u8868\u8f6c\u6362\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle/"},"141.\u73af\u5f62\u94fe\u8868"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle-ii"},"142.\u73af\u5f62\u94fe\u8868 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/sort-list/"},"148.\u6392\u5e8f\u94fe\u8868"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/intersection-of-two-linked-lists"},"160.\u76f8\u4ea4\u94fe\u8868"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/reverse-linked-list/"},"206.\u53cd\u8f6c\u94fe\u8868"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/"},"\u5251\u6307 Offer 22.\u94fe\u8868\u4e2d\u5012\u6570\u7b2c k \u4e2a\u8282\u70b9"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof"},"\u5251\u6307 Offer 24.\u53cd\u8f6c\u94fe\u8868"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u4e8c\u53c9\u6811\u7cfb\u5217"},"\u4e8c\u53c9\u6811\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-inorder-traversal"},"94.\u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal"},"144.\u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-postorder-traversal/"},"145.\u4e8c\u53c9\u6811\u7684\u540e\u5e8f\u904d\u5386"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal"},"102.\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii"},"107.\u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal"},"429.N \u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/unique-binary-search-trees"},"96.\u4e0d\u540c\u7684\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/validate-binary-search-tree"},"98.\u9a8c\u8bc1\u4e8c\u53c9\u641c\u7d22\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-depth-of-binary-tree"},"104.\u4e8c\u53c9\u6811\u7684\u6700\u5927\u6df1\u5ea6"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},"105.\u4ece\u524d\u5e8f\u4e0e\u4e2d\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"},"106.\u4ece\u4e2d\u5e8f\u4e0e\u540e\u5e8f\u904d\u5386\u5e8f\u5217\u6784\u9020\u4e8c\u53c9\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/balanced-binary-tree"},"110.\u5e73\u8861\u4e8c\u53c9\u6811"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/invert-binary-tree"},"226.\u7ffb\u8f6c\u4e8c\u53c9\u6811"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/path-sum"},"112.\u8def\u5f84\u603b\u548c"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/path-sum-ii"},"113.\u8def\u5f84\u603b\u548c II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/"},"129.\u6c42\u6839\u8282\u70b9\u5230\u53f6\u8282\u70b9\u6570\u5b57\u4e4b\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-right-side-view"},"199.\u4e8c\u53c9\u6811\u7684\u53f3\u89c6\u56fe"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/"},"230.\u4e8c\u53c9\u641c\u7d22\u6811\u4e2d\u7b2c K \u5c0f\u7684\u5143\u7d20"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-paths"},"257.\u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/diameter-of-binary-tree"},"543.\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-binary-tree"},"654.\u6700\u5927\u4e8c\u53c9\u6811"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"235.\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/"},"236.\u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u52a8\u6001\u89c4\u5212\u7cfb\u5217"},"\u52a8\u6001\u89c4\u5212\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-palindromic-substring"},"5.\u6700\u957f\u56de\u6587\u5b50\u4e32"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-valid-parentheses"},"32.\u6700\u957f\u6709\u6548\u62ec\u53f7"),(0,l.kt)(n,{type:"Hard",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/trapping-rain-water"},"42.\u63a5\u96e8\u6c34"),(0,l.kt)(n,{type:"Hard",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/wildcard-matching"},"44.\u901a\u914d\u7b26\u5339\u914d"),(0,l.kt)(n,{type:"Hard",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-subarray"},"53.\u6700\u5927\u5b50\u5e8f\u548c"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/unique-paths"},"62.\u4e0d\u540c\u8def\u5f84"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/unique-paths-ii"},"63.\u4e0d\u540c\u8def\u5f84 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/minimum-path-sum"},"64.\u6700\u5c0f\u8def\u5f84\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/climbing-stairs"},"70.\u722c\u697c\u68af"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/distinct-subsequences"},"115.\u4e0d\u540c\u7684\u5b50\u5e8f\u5217"),(0,l.kt)(n,{type:"Hard",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock"},"121.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii"},"122.\u4e70\u5356\u80a1\u7968\u7684\u6700\u4f73\u65f6\u673a II"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/house-robber"},"198.\u6253\u5bb6\u52ab\u820d"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/house-robber-ii"},"213.\u6253\u5bb6\u52ab\u820d II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximal-square"},"221.\u6700\u5927\u6b63\u65b9\u5f62"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-increasing-subsequence"},"300.\u6700\u957f\u4e0a\u5347\u5b50\u5e8f\u5217"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/coin-change"},"322.\u96f6\u94b1\u5151\u6362"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/bomb-enemy"},"361.\u8f70\u70b8\u654c\u4eba"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/is-subsequence"},"392.\u5224\u65ad\u5b50\u5e8f\u5217"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray"},"718.\u6700\u957f\u91cd\u590d\u5b50\u6570\u7ec4"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-common-subsequence"},"1143.\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof"},"\u5251\u6307 Offer 63.\u80a1\u7968\u7684\u6700\u5927\u5229\u6da6"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u56de\u6eaf\u7cfb\u5217"},"\u56de\u6eaf\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/generate-parentheses"},"22.\u62ec\u53f7\u751f\u6210"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/permutations/"},"46.\u5168\u6392\u5217"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/permutations-ii/"},"47.\u5168\u6392\u5217 II"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/combinations/"},"77.\u7ec4\u5408"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"dfsbfs"},"DFS/BFS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/number-of-islands/"},"200. \u5c9b\u5c7f\u6570\u91cf"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u6808\u961f\u5217"},"\u6808/\u961f\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/valid-parentheses/"},"20. \u6709\u6548\u7684\u62ec\u53f7"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u54c8\u5e0c\u8868\u7cfb\u5217"},"\u54c8\u5e0c\u8868\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/two-sum/"},"1. \u4e24\u6570\u4e4b\u548c"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/"},"3. \u65e0\u91cd\u590d\u5b57\u7b26\u7684\u6700\u957f\u5b50\u4e32"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/group-anagrams/"},"49. \u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/valid-anagram/"},"242. \u6709\u6548\u7684\u5b57\u6bcd\u5f02\u4f4d\u8bcd"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/top-k-frequent-elements/"},"347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/first-unique-character-in-a-string/"},"387. \u5b57\u7b26\u4e32\u4e2d\u7684\u7b2c\u4e00\u4e2a\u552f\u4e00\u5b57\u7b26"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u53cc\u6307\u9488\u7cfb\u5217"},"\u53cc\u6307\u9488\u7cfb\u5217"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/container-with-most-water/"},"11. \u76db\u6c34\u6700\u591a\u7684\u5bb9\u5668"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/3sum/"},"15. \u4e09\u6570\u4e4b\u548c"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/"},"26. \u5220\u9664\u6392\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/merge-sorted-array/"},"88. \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/valid-palindrome/"},"125. \u9a8c\u8bc1\u56de\u6587\u4e32"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/move-zeroes/"},"283. \u79fb\u52a8\u96f6"),(0,l.kt)(n,{type:"Easy",mdxType:"LeetCodeType"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/koko-eating-bananas/"},"875. \u7231\u5403\u9999\u8549\u7684\u73c2\u73c2"),(0,l.kt)(n,{type:"Medium",mdxType:"LeetCodeType"}))),(0,l.kt)("h3",{id:"\u5176\u4ed6\u9898\u76ee"},"\u5176\u4ed6\u9898\u76ee"))}u.isMDXComponent=!0}}]);