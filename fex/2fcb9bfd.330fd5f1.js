(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(149)),c={id:"lifecycle",title:"\u751f\u547d\u5468\u671f"},b={unversionedId:"advanced/react/lifecycle",id:"advanced/react/lifecycle",isDocsHomePage:!1,title:"\u751f\u547d\u5468\u671f",description:"React v16.3 \u5f00\u59cb\uff0c\u5bf9\u751f\u547d\u5468\u671f\u8fdb\u884c\u8c03\u6574\uff0c\u5e9f\u5f03\u4e86\u4e00\u4e9b\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002\u5177\u4f53\u53c2\u8003 React lifecycle methods diagram\u3002",source:"@site/docs/advanced/react/lifecycle.md",slug:"/advanced/react/lifecycle",permalink:"/fex/docs/advanced/react/lifecycle",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/react/lifecycle.md",version:"current",sidebar:"advanced",previous:{title:"MVVM",permalink:"/fex/docs/advanced/vue/mvvm"},next:{title:"\u4ece\u8f93\u5165URL\u5230\u9875\u9762\u52a0\u8f7d\u8fc7\u7a0b",permalink:"/fex/docs/advanced/browser/from-url-to-page-load"}},o=[{value:"\u65b0\u751f\u547d\u5468\u671f",id:"\u65b0\u751f\u547d\u5468\u671f",children:[{value:"Mounting",id:"mounting",children:[]},{value:"Updating",id:"updating",children:[]},{value:"Unmounting",id:"unmounting",children:[]}]},{value:"\u751f\u547d\u5468\u671f\u89e3\u8bfb",id:"\u751f\u547d\u5468\u671f\u89e3\u8bfb",children:[]},{value:"\u751f\u547d\u5468\u671f\u53d8\u5316",id:"\u751f\u547d\u5468\u671f\u53d8\u5316",children:[]}],i={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"React v16.3 \u5f00\u59cb\uff0c\u5bf9\u751f\u547d\u5468\u671f\u8fdb\u884c\u8c03\u6574\uff0c\u5e9f\u5f03\u4e86\u4e00\u4e9b\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002\u5177\u4f53\u53c2\u8003 ",Object(l.b)("a",{parentName:"p",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"React lifecycle methods diagram"),"\u3002"),Object(l.b)("h2",{id:"\u65b0\u751f\u547d\u5468\u671f"},"\u65b0\u751f\u547d\u5468\u671f"),Object(l.b)("p",null,"\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7279\u5b9a\u7684\u9636\u6bb5\u6267\u884c\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u8fbe\u5230\u9875\u9762\u7075\u6d3b\u53d8\u5316\u7684\u76ee\u7684\u3002\u8ba8\u8bba React \u751f\u547d\u5468\u671f\u901a\u5e38\u5206\u4e09\u79cd\u8fc7\u7a0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6302\u8f7d (Mounting)"),Object(l.b)("li",{parentName:"ul"},"\u66f4\u65b0 (Updating)"),Object(l.b)("li",{parentName:"ul"},"\u5378\u8f7d (Unmounting)")),Object(l.b)("h3",{id:"mounting"},"Mounting"),Object(l.b)("p",null,"\u5f53\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u5e76\u63d2\u5165 DOM \u4e2d\u65f6\uff0c\u5176\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"constructor")),Object(l.b)("li",{parentName:"ol"},"getDerivedStateFromProps"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"render")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"componentDidMount"))),Object(l.b)("h3",{id:"updating"},"Updating"),Object(l.b)("p",null,"\u5f53\u7ec4\u4ef6\u7684 props \u6216 state \u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u89e6\u53d1\u66f4\u65b0\u3002\u7ec4\u4ef6\u7684\u66f4\u65b0\u5206\u4e3a\u4e24\u79cd\uff1a\u4e00\u79cd\u662f\u7531\u7236\u7ec4\u4ef6\u66f4\u65b0\u89e6\u53d1\u7684\u66f4\u65b0\uff1b\u53e6\u4e00\u79cd\u662f\u7ec4\u4ef6\u81ea\u8eab\u8c03\u7528\u81ea\u5df1\u7684 setState \u89e6\u53d1\u7684\u66f4\u65b0\u3002\u7ec4\u4ef6\u66f4\u65b0\u7684\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"getDerivedStateFromProps"),Object(l.b)("li",{parentName:"ol"},"shouldComponentUpdate"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"render")),Object(l.b)("li",{parentName:"ol"},"getSnapshotBeforeUpdate"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"componentDidUpdate"))),Object(l.b)("h3",{id:"unmounting"},"Unmounting"),Object(l.b)("p",null,"\u5f53\u7ec4\u4ef6\u4ece DOM \u4e2d\u79fb\u9664\u65f6\u4f1a\u8c03\u7528\u5982\u4e0b\u65b9\u6cd5\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"componentWillUnmount"))),Object(l.b)("h2",{id:"\u751f\u547d\u5468\u671f\u89e3\u8bfb"},"\u751f\u547d\u5468\u671f\u89e3\u8bfb"),Object(l.b)("p",null,"\u5404\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u76f8\u5173\u4e8b\u4ef6\u6807\u8bc6\uff1a"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),Object(l.b)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"constructor"),Object(l.b)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u4ec5\u5728\u6302\u8f7d\u524d\u88ab\u8c03\u7528\u4e00\u6b21\u3002\u901a\u5e38\u6784\u9020\u51fd\u6570\u4ec5\u7528\u4e8e\u4e24\u79cd\u60c5\u51b5\uff1a\u4e00\u662f\u521d\u59cb\u5316\u5185\u90e8 state\uff0c\u4e8c\u662f\u65f6\u95f4\u5904\u7406\u51fd\u6570\u7ed1\u5b9a\u5b9e\u4f8b\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentDidMount"),Object(l.b)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u6302\u5728\u540e\u7acb\u5373\u8c03\u7528\u3002\u6b64\u65f6\u56e0\u4e3a\u771f\u5b9e DOM \u5df2\u7ecf\u6302\u8f7d\u5230\u4e86\u9875\u9762\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u91cc\u6267\u884c\u771f\u5b9e DOM \u76f8\u5173\u7684\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u7c7b\u4f3c\u4e8e\u5f02\u6b65\u8bf7\u6c42\u3001\u6570\u636e\u521d\u59cb\u5316\u8fd9\u6837\u7684\u64cd\u4f5c\u4e5f\u53ef\u4ee5\u653e\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u6765\u505a\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentDidUpdate"),Object(l.b)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u66f4\u65b0\u540e\u7acb\u5373\u8c03\u7528\u3002\u53ef\u4ee5\u5728\u6b64\u5904\u64cd\u4f5c DOM\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\u3002\u6b64\u5904\u8c28\u614e\u8c03\u7528 setState\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentWillUnmount"),Object(l.b)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u8c03\u7528\u3002\u901a\u5e38\u7528\u4e8e\u6267\u884c\u5fc5\u8981\u7684\u6e05\u7406\u64cd\u4f5c\u3002\u7ec4\u4ef6\u9500\u6bc1\u5e38\u89c1\u7684\u539f\u56e0\u6709\u4e24\u4e2a\uff1a\u4e00\u4e2a\u662f\u7ec4\u4ef6\u5728\u7236\u7ec4\u4ef6\u4e2d\u88ab\u79fb\u9664\uff1b\u53e6\u4e00\u4e2a\u662f\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u53d1\u73b0\u7ec4\u4ef6 key \u4e0e\u4e0a\u6b21\u4e0d\u4e00\u6837\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"render"),Object(l.b)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u628a\u9700\u8981\u6e32\u67d3\u7684\u5185\u5bb9\u8fd4\u56de\u51fa\u6765\u3002\u771f\u5b9e DOM \u7684\u6e32\u67d3\u5de5\u4f5c\uff0c\u5728\u6302\u8f7d\u9636\u6bb5\u662f\u7531 ReactDOM.render \u6765\u627f\u63a5\u7684\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"shouldComponentUpdate"),Object(l.b)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u4f1a\u6839\u636e\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u6765\u51b3\u5b9a\u662f\u5426\u6267\u884c\u4e4b\u540e\u7684\u751f\u547d\u5468\u671f\uff0c\u8fdb\u800c\u51b3\u5b9a\u662f\u5426\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u91cd\u6e32\u67d3\u3002\u6b64\u65b9\u6cd5\u4ec5\u4f5c\u4e3a\u6027\u80fd\u4f18\u5316\u7684\u65b9\u5f0f\u800c\u5b58\u5728\uff0c\u5fc5\u8981\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u5185\u7f6e\u7684 PureComponent \u7ec4\u4ef6\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"getDerivedStateFromProps"),Object(l.b)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5\uff0c\u5728\u8c03\u7528 render \u65b9\u6cd5\u524d\u8c03\u7528\uff0c\u5185\u90e8\u65e0\u6cd5\u8bbf\u95ee this\u3002\u4ec5\u6709\u4e00\u4e2a\u7528\u9014\uff1a\u4f7f\u7528 props \u6765\u6d3e\u751f state\u3002\u8fd9\u53ef\u4ee5\u51cf\u5c11\u4ea7\u751f\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\uff0c\u907f\u514d\u751f\u547d\u5468\u671f\u7684\u6ee5\u7528\uff0c\u540c\u65f6\u4e5f\u662f\u5728\u4e3a\u65b0\u7684 Fiber \u67b6\u6784\u94fa\u8def\u3002")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"getSnapshotBeforeUpdate"),Object(l.b)("td",{parentName:"tr",align:null},"\u5b83\u7684\u6267\u884c\u65f6\u673a\u662f\u5728 render \u65b9\u6cd5\u4e4b\u540e\uff0c\u771f\u5b9e DOM \u66f4\u65b0\u4e4b\u524d\u3002\u5728\u8fd9\u4e2a\u9636\u6bb5\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u83b7\u53d6\u5230\u66f4\u65b0\u524d\u7684\u771f\u5b9e DOM \u548c\u66f4\u65b0\u524d\u540e\u7684 state&props \u4fe1\u606f\u3002")))),Object(l.b)("p",null,"Fiber \u67b6\u6784\u7684\u91cd\u8981\u7279\u5f81\u5c31\u662f",Object(l.b)("strong",{parentName:"p"},"\u53ef\u4ee5\u88ab\u6253\u65ad"),"\u7684\u5f02\u6b65\u6e32\u67d3\u6a21\u5f0f\u3002\u6839\u636e\u80fd\u5426\u88ab\u6253\u65ad\uff0c\u58f0\u660e\u5468\u671f\u53c8\u53ef\u4ee5\u5212\u5206\u4e3a render \u548c commit \u4e24\u4e2a\u9636\u6bb5\uff0c\u800c commit \u9636\u6bb5\u53c8\u88ab\u7ec6\u5206\u4e3a\u4e86 pre-commit \u548c commit \u4e24\u4e2a\u9636\u6bb5\u3002\u5177\u4f53\u53ef\u53c2\u8003\u751f\u547d\u5468\u671f\u56fe\u8c31\uff0c\u7279\u5f81\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"render"),": \u7eaf\u51c0\u4e14\u6ca1\u6709\u526f\u4f5c\u7528\uff0c\u53ef\u80fd\u4f1a\u88ab React \u6682\u505c\u3001\u7ec8\u6b62\u6216\u91cd\u65b0\u542f\u52a8\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"pre-commit"),": \u53ef\u4ee5\u8bfb\u53d6 DOM\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"commit"),": \u53ef\u4ee5\u4f7f\u7528 DOM\uff0c\u8fd0\u884c\u526f\u4f5c\u7528\uff0c\u5b89\u6392\u66f4\u65b0\u3002")),Object(l.b)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",Object(l.b)("strong",{parentName:"p"},"render \u9636\u6bb5\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u5141\u8bb8\u88ab\u6253\u65ad\uff0c\u800c commit \u9636\u6bb5\u5219\u603b\u662f\u540c\u6b65\u6267\u884c\u7684\u3002")),Object(l.b)("h2",{id:"\u751f\u547d\u5468\u671f\u53d8\u5316"},"\u751f\u547d\u5468\u671f\u53d8\u5316"),Object(l.b)("p",null,"React \u5728 v16.3 \u7248\u672c\u4e4b\u540e\uff0c\u66f4\u65b0\u4e86\u4e00\u6279\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5f53\u7136\u4e00\u4e9b\u65e7\u7684\u751f\u547d\u5468\u671f\u5728\u8fc7\u6e21\u9636\u6bb5\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u5176\u5b83\u65b9\u5f0f\u8c03\u7528\uff0c\u53ea\u4e0d\u8fc7\u63a5\u4e0b\u6765\u7684\u7248\u672c\u4f1a\u9010\u6e10\u5e9f\u5f03\u8fd9\u4e9b\u65e7\u7684\u751f\u547d\u5468\u671f\u3002"),Object(l.b)("p",null,"\u65b0\u6dfb\u52a0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"static getDerivedStateFromProps"),Object(l.b)("li",{parentName:"ul"},"getSnapshotBeforeUpdate")),Object(l.b)("p",null,"\u9010\u6e10\u5e9f\u5f03\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"componentWillMount"),Object(l.b)("li",{parentName:"ul"},"componentWillReceiveProps"),Object(l.b)("li",{parentName:"ul"},"componentWillUpdate")),Object(l.b)("p",null,"\u5728 Fiber \u673a\u5236\u4e0b\uff0c",Object(l.b)("strong",{parentName:"p"},"render \u9636\u6bb5\u662f\u5141\u8bb8\u6682\u505c\u3001\u7ec8\u6b62\u548c\u91cd\u542f\u7684"),"\u3002\u5f53\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5230\u4e00\u534a\u88ab\u6253\u65ad\u540e\uff0c\u4e0b\u4e00\u6b21\u6e32\u67d3\u7ebf\u7a0b\u62a2\u56de\u4e3b\u52a8\u6743\u65f6\uff0c\u8fd9\u4e2a\u4efb\u52a1\u88ab\u91cd\u542f\u7684\u5f62\u5f0f\u662f\u91cd\u590d\u6267\u884c\u4e00\u904d\u6574\u4e2a\u4efb\u52a1\u800c\u975e\u63a5\u7740\u4e0a\u6b21\u6267\u884c\u5230\u7684\u90a3\u884c\u4ee3\u7801\u5f80\u4e0b\u8d70\u3002\u8fd9\u5c31\u5bfc\u81f4 render \u9636\u6bb5\u7684\u751f\u547d\u5468\u671f\u90fd\u662f\u6709\u53ef\u80fd\u88ab\u91cd\u590d\u6267\u884c\u7684\u3002"),Object(l.b)("p",null,"\u4e0a\u8ff0 3 \u4e2a\u88ab\u5e9f\u5f03\u7684\u751f\u547d\u5468\u671f\u6709\u4e2a\u5171\u6027\uff0c\u5c31\u662f\u5b83\u4eec\u90fd\u5904\u4e8e render \u9636\u6bb5\uff0c\u90fd\u53ef\u80fd\u91cd\u590d\u88ab\u6267\u884c\uff0c\u800c\u4e14\u7531\u4e8e\u8fd9\u4e9b API \u5e38\u5e74\u88ab\u6ee5\u7528\uff0c\u5b83\u4eec\u5728\u91cd\u590d\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u90fd\u5b58\u5728\u7740\u4e0d\u53ef\u5c0f\u89d1\u7684\u98ce\u9669\u3002"),Object(l.b)("p",null,"React 16 \u6539\u9020\u751f\u547d\u5468\u671f\u7684\u4e3b\u8981\u52a8\u673a\u662f\u4e3a\u4e86\u914d\u5408 Fiber \u67b6\u6784\u5e26\u6765\u7684\u5f02\u6b65\u6e32\u67d3\u673a\u5236\u3002\u8fd9\u4e9b\u8c03\u6574\uff0c\u9996\u5148\u662f\u786e\u4fdd\u4e86 Fiber \u673a\u5236\u4e0b\u6570\u636e\u548c\u89c6\u56fe\u7684\u5b89\u5168\u6027\uff0c\u540c\u65f6\u4e5f\u786e\u4fdd\u4e86\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u884c\u4e3a\u66f4\u52a0\u7eaf\u7cb9\u3001\u53ef\u63a7\u3001\u53ef\u9884\u6d4b\u3002"),Object(l.b)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://reactjs.org/"},"React \u2013 A JavaScript library for building user interfaces")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"React lifecycle methods diagram")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html"},"You Probably Don't Need Derived State"))))}p.isMDXComponent=!0}}]);