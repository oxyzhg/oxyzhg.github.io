(self.webpackChunkfex=self.webpackChunkfex||[]).push([[9134],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=a,s=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1161:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"lifecycle",title:"\u751f\u547d\u5468\u671f"},p=void 0,c={unversionedId:"forward/react/lifecycle",id:"forward/react/lifecycle",isDocsHomePage:!1,title:"\u751f\u547d\u5468\u671f",description:"React v16.3 \u5f00\u59cb\uff0c\u5bf9\u751f\u547d\u5468\u671f\u8fdb\u884c\u8c03\u6574\uff0c\u5e9f\u5f03\u4e86\u4e00\u4e9b\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002\u5177\u4f53\u53c2\u8003 React lifecycle methods diagram\u3002",source:"@site/docs/forward/react/lifecycle.md",sourceDirName:"forward/react",slug:"/forward/react/lifecycle",permalink:"/fex/docs/forward/react/lifecycle",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/react/lifecycle.md",version:"current",frontMatter:{id:"lifecycle",title:"\u751f\u547d\u5468\u671f"},sidebar:"forward",previous:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/fex/docs/forward/javascript/eventloop"},next:{title:"\u6982\u89c8",permalink:"/fex/docs/forward/vue"}},u=[{value:"\u65b0\u751f\u547d\u5468\u671f",id:"\u65b0\u751f\u547d\u5468\u671f",children:[{value:"Mounting",id:"mounting",children:[]},{value:"Updating",id:"updating",children:[]},{value:"Unmounting",id:"unmounting",children:[]}]},{value:"\u751f\u547d\u5468\u671f\u89e3\u8bfb",id:"\u751f\u547d\u5468\u671f\u89e3\u8bfb",children:[]},{value:"\u751f\u547d\u5468\u671f\u53d8\u5316",id:"\u751f\u547d\u5468\u671f\u53d8\u5316",children:[]}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"React v16.3 \u5f00\u59cb\uff0c\u5bf9\u751f\u547d\u5468\u671f\u8fdb\u884c\u8c03\u6574\uff0c\u5e9f\u5f03\u4e86\u4e00\u4e9b\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u65b0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002\u5177\u4f53\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"React lifecycle methods diagram"),"\u3002"),(0,l.kt)("h2",{id:"\u65b0\u751f\u547d\u5468\u671f"},"\u65b0\u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,"\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7279\u5b9a\u7684\u9636\u6bb5\u6267\u884c\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u8fbe\u5230\u9875\u9762\u7075\u6d3b\u53d8\u5316\u7684\u76ee\u7684\u3002\u8ba8\u8bba React \u751f\u547d\u5468\u671f\u901a\u5e38\u5206\u4e09\u79cd\u8fc7\u7a0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6302\u8f7d (Mounting)"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0 (Updating)"),(0,l.kt)("li",{parentName:"ul"},"\u5378\u8f7d (Unmounting)")),(0,l.kt)("h3",{id:"mounting"},"Mounting"),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u5e76\u63d2\u5165 DOM \u4e2d\u65f6\uff0c\u5176\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"constructor")),(0,l.kt)("li",{parentName:"ol"},"getDerivedStateFromProps"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"render")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"componentDidMount"))),(0,l.kt)("h3",{id:"updating"},"Updating"),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u7684 props \u6216 state \u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u89e6\u53d1\u66f4\u65b0\u3002\u7ec4\u4ef6\u7684\u66f4\u65b0\u5206\u4e3a\u4e24\u79cd\uff1a\u4e00\u79cd\u662f\u7531\u7236\u7ec4\u4ef6\u66f4\u65b0\u89e6\u53d1\u7684\u66f4\u65b0\uff1b\u53e6\u4e00\u79cd\u662f\u7ec4\u4ef6\u81ea\u8eab\u8c03\u7528\u81ea\u5df1\u7684 setState \u89e6\u53d1\u7684\u66f4\u65b0\u3002\u7ec4\u4ef6\u66f4\u65b0\u7684\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"getDerivedStateFromProps"),(0,l.kt)("li",{parentName:"ol"},"shouldComponentUpdate"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"render")),(0,l.kt)("li",{parentName:"ol"},"getSnapshotBeforeUpdate"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"componentDidUpdate"))),(0,l.kt)("h3",{id:"unmounting"},"Unmounting"),(0,l.kt)("p",null,"\u5f53\u7ec4\u4ef6\u4ece DOM \u4e2d\u79fb\u9664\u65f6\u4f1a\u8c03\u7528\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"componentWillUnmount"))),(0,l.kt)("h2",{id:"\u751f\u547d\u5468\u671f\u89e3\u8bfb"},"\u751f\u547d\u5468\u671f\u89e3\u8bfb"),(0,l.kt)("p",null,"\u5404\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u76f8\u5173\u4e8b\u4ef6\u6807\u8bc6\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"constructor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u4ec5\u5728\u6302\u8f7d\u524d\u88ab\u8c03\u7528\u4e00\u6b21\u3002\u901a\u5e38\u6784\u9020\u51fd\u6570\u4ec5\u7528\u4e8e\u4e24\u79cd\u60c5\u51b5\uff1a\u4e00\u662f\u521d\u59cb\u5316\u5185\u90e8 state\uff0c\u4e8c\u662f\u65f6\u95f4\u5904\u7406\u51fd\u6570\u7ed1\u5b9a\u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentDidMount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u6302\u5728\u540e\u7acb\u5373\u8c03\u7528\u3002\u6b64\u65f6\u56e0\u4e3a\u771f\u5b9e DOM \u5df2\u7ecf\u6302\u8f7d\u5230\u4e86\u9875\u9762\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u91cc\u6267\u884c\u771f\u5b9e DOM \u76f8\u5173\u7684\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u7c7b\u4f3c\u4e8e\u5f02\u6b65\u8bf7\u6c42\u3001\u6570\u636e\u521d\u59cb\u5316\u8fd9\u6837\u7684\u64cd\u4f5c\u4e5f\u53ef\u4ee5\u653e\u5728\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u6765\u505a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentDidUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u66f4\u65b0\u540e\u7acb\u5373\u8c03\u7528\u3002\u53ef\u4ee5\u5728\u6b64\u5904\u64cd\u4f5c DOM\uff0c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u7f51\u7edc\u8bf7\u6c42\u3002\u6b64\u5904\u8c28\u614e\u8c03\u7528 setState\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"componentWillUnmount"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u8c03\u7528\u3002\u901a\u5e38\u7528\u4e8e\u6267\u884c\u5fc5\u8981\u7684\u6e05\u7406\u64cd\u4f5c\u3002\u7ec4\u4ef6\u9500\u6bc1\u5e38\u89c1\u7684\u539f\u56e0\u6709\u4e24\u4e2a\uff1a\u4e00\u4e2a\u662f\u7ec4\u4ef6\u5728\u7236\u7ec4\u4ef6\u4e2d\u88ab\u79fb\u9664\uff1b\u53e6\u4e00\u4e2a\u662f\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u53d1\u73b0\u7ec4\u4ef6 key \u4e0e\u4e0a\u6b21\u4e0d\u4e00\u6837\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"render"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u65b9\u6cd5\u628a\u9700\u8981\u6e32\u67d3\u7684\u5185\u5bb9\u8fd4\u56de\u51fa\u6765\u3002\u771f\u5b9e DOM \u7684\u6e32\u67d3\u5de5\u4f5c\uff0c\u5728\u6302\u8f7d\u9636\u6bb5\u662f\u7531 ReactDOM.render \u6765\u627f\u63a5\u7684\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shouldComponentUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u4f1a\u6839\u636e\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u6765\u51b3\u5b9a\u662f\u5426\u6267\u884c\u4e4b\u540e\u7684\u751f\u547d\u5468\u671f\uff0c\u8fdb\u800c\u51b3\u5b9a\u662f\u5426\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u91cd\u6e32\u67d3\u3002\u6b64\u65b9\u6cd5\u4ec5\u4f5c\u4e3a\u6027\u80fd\u4f18\u5316\u7684\u65b9\u5f0f\u800c\u5b58\u5728\uff0c\u5fc5\u8981\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u5185\u7f6e\u7684 PureComponent \u7ec4\u4ef6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getDerivedStateFromProps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u9759\u6001\u65b9\u6cd5\uff0c\u5728\u8c03\u7528 render \u65b9\u6cd5\u524d\u8c03\u7528\uff0c\u5185\u90e8\u65e0\u6cd5\u8bbf\u95ee this\u3002\u4ec5\u6709\u4e00\u4e2a\u7528\u9014\uff1a\u4f7f\u7528 props \u6765\u6d3e\u751f state\u3002\u8fd9\u53ef\u4ee5\u51cf\u5c11\u4ea7\u751f\u526f\u4f5c\u7528\u7684\u64cd\u4f5c\uff0c\u907f\u514d\u751f\u547d\u5468\u671f\u7684\u6ee5\u7528\uff0c\u540c\u65f6\u4e5f\u662f\u5728\u4e3a\u65b0\u7684 Fiber \u67b6\u6784\u94fa\u8def\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getSnapshotBeforeUpdate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b83\u7684\u6267\u884c\u65f6\u673a\u662f\u5728 render \u65b9\u6cd5\u4e4b\u540e\uff0c\u771f\u5b9e DOM \u66f4\u65b0\u4e4b\u524d\u3002\u5728\u8fd9\u4e2a\u9636\u6bb5\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u83b7\u53d6\u5230\u66f4\u65b0\u524d\u7684\u771f\u5b9e DOM \u548c\u66f4\u65b0\u524d\u540e\u7684 state&props \u4fe1\u606f\u3002")))),(0,l.kt)("p",null,"Fiber \u67b6\u6784\u7684\u91cd\u8981\u7279\u5f81\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u88ab\u6253\u65ad"),"\u7684\u5f02\u6b65\u6e32\u67d3\u6a21\u5f0f\u3002\u6839\u636e\u80fd\u5426\u88ab\u6253\u65ad\uff0c\u58f0\u660e\u5468\u671f\u53c8\u53ef\u4ee5\u5212\u5206\u4e3a render \u548c commit \u4e24\u4e2a\u9636\u6bb5\uff0c\u800c commit \u9636\u6bb5\u53c8\u88ab\u7ec6\u5206\u4e3a\u4e86 pre-commit \u548c commit \u4e24\u4e2a\u9636\u6bb5\u3002\u5177\u4f53\u53ef\u53c2\u8003\u751f\u547d\u5468\u671f\u56fe\u8c31\uff0c\u7279\u5f81\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"render"),": \u7eaf\u51c0\u4e14\u6ca1\u6709\u526f\u4f5c\u7528\uff0c\u53ef\u80fd\u4f1a\u88ab React \u6682\u505c\u3001\u7ec8\u6b62\u6216\u91cd\u65b0\u542f\u52a8\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pre-commit"),": \u53ef\u4ee5\u8bfb\u53d6 DOM\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"commit"),": \u53ef\u4ee5\u4f7f\u7528 DOM\uff0c\u8fd0\u884c\u526f\u4f5c\u7528\uff0c\u5b89\u6392\u66f4\u65b0\u3002")),(0,l.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",(0,l.kt)("strong",{parentName:"p"},"render \u9636\u6bb5\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u5141\u8bb8\u88ab\u6253\u65ad\uff0c\u800c commit \u9636\u6bb5\u5219\u603b\u662f\u540c\u6b65\u6267\u884c\u7684\u3002")),(0,l.kt)("h2",{id:"\u751f\u547d\u5468\u671f\u53d8\u5316"},"\u751f\u547d\u5468\u671f\u53d8\u5316"),(0,l.kt)("p",null,"React \u5728 v16.3 \u7248\u672c\u4e4b\u540e\uff0c\u66f4\u65b0\u4e86\u4e00\u6279\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5f53\u7136\u4e00\u4e9b\u65e7\u7684\u751f\u547d\u5468\u671f\u5728\u8fc7\u6e21\u9636\u6bb5\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u5176\u5b83\u65b9\u5f0f\u8c03\u7528\uff0c\u53ea\u4e0d\u8fc7\u63a5\u4e0b\u6765\u7684\u7248\u672c\u4f1a\u9010\u6e10\u5e9f\u5f03\u8fd9\u4e9b\u65e7\u7684\u751f\u547d\u5468\u671f\u3002"),(0,l.kt)("p",null,"\u65b0\u6dfb\u52a0\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"static getDerivedStateFromProps"),(0,l.kt)("li",{parentName:"ul"},"getSnapshotBeforeUpdate")),(0,l.kt)("p",null,"\u9010\u6e10\u5e9f\u5f03\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"componentWillMount"),(0,l.kt)("li",{parentName:"ul"},"componentWillReceiveProps"),(0,l.kt)("li",{parentName:"ul"},"componentWillUpdate")),(0,l.kt)("p",null,"\u5728 Fiber \u673a\u5236\u4e0b\uff0c",(0,l.kt)("strong",{parentName:"p"},"render \u9636\u6bb5\u662f\u5141\u8bb8\u6682\u505c\u3001\u7ec8\u6b62\u548c\u91cd\u542f\u7684"),"\u3002\u5f53\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5230\u4e00\u534a\u88ab\u6253\u65ad\u540e\uff0c\u4e0b\u4e00\u6b21\u6e32\u67d3\u7ebf\u7a0b\u62a2\u56de\u4e3b\u52a8\u6743\u65f6\uff0c\u8fd9\u4e2a\u4efb\u52a1\u88ab\u91cd\u542f\u7684\u5f62\u5f0f\u662f\u91cd\u590d\u6267\u884c\u4e00\u904d\u6574\u4e2a\u4efb\u52a1\u800c\u975e\u63a5\u7740\u4e0a\u6b21\u6267\u884c\u5230\u7684\u90a3\u884c\u4ee3\u7801\u5f80\u4e0b\u8d70\u3002\u8fd9\u5c31\u5bfc\u81f4 render \u9636\u6bb5\u7684\u751f\u547d\u5468\u671f\u90fd\u662f\u6709\u53ef\u80fd\u88ab\u91cd\u590d\u6267\u884c\u7684\u3002"),(0,l.kt)("p",null,"\u4e0a\u8ff0 3 \u4e2a\u88ab\u5e9f\u5f03\u7684\u751f\u547d\u5468\u671f\u6709\u4e2a\u5171\u6027\uff0c\u5c31\u662f\u5b83\u4eec\u90fd\u5904\u4e8e render \u9636\u6bb5\uff0c\u90fd\u53ef\u80fd\u91cd\u590d\u88ab\u6267\u884c\uff0c\u800c\u4e14\u7531\u4e8e\u8fd9\u4e9b API \u5e38\u5e74\u88ab\u6ee5\u7528\uff0c\u5b83\u4eec\u5728\u91cd\u590d\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u90fd\u5b58\u5728\u7740\u4e0d\u53ef\u5c0f\u89d1\u7684\u98ce\u9669\u3002"),(0,l.kt)("p",null,"React 16 \u6539\u9020\u751f\u547d\u5468\u671f\u7684\u4e3b\u8981\u52a8\u673a\u662f\u4e3a\u4e86\u914d\u5408 Fiber \u67b6\u6784\u5e26\u6765\u7684\u5f02\u6b65\u6e32\u67d3\u673a\u5236\u3002\u8fd9\u4e9b\u8c03\u6574\uff0c\u9996\u5148\u662f\u786e\u4fdd\u4e86 Fiber \u673a\u5236\u4e0b\u6570\u636e\u548c\u89c6\u56fe\u7684\u5b89\u5168\u6027\uff0c\u540c\u65f6\u4e5f\u786e\u4fdd\u4e86\u751f\u547d\u5468\u671f\u65b9\u6cd5\u7684\u884c\u4e3a\u66f4\u52a0\u7eaf\u7cb9\u3001\u53ef\u63a7\u3001\u53ef\u9884\u6d4b\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React \u2013 A JavaScript library for building user interfaces")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"React lifecycle methods diagram")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html"},"You Probably Don't Need Derived State"))))}d.isMDXComponent=!0}}]);