(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var c=n(3),r=n(7),o=(n(0),n(143)),b={id:"websocket",title:"WebSocket"},a={unversionedId:"advanced/network/websocket",id:"advanced/network/websocket",isDocsHomePage:!1,title:"WebSocket",description:"\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket",source:"@site/docs/advanced/network/websocket.md",slug:"/advanced/network/websocket",permalink:"/fex/docs/advanced/network/websocket",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/network/websocket.md",version:"current",sidebar:"advanced",previous:{title:"HTTP",permalink:"/fex/docs/advanced/network/http"}},l=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-websocket",children:[]},{value:"\u4ec0\u4e48\u662f WebSocket",id:"\u4ec0\u4e48\u662f-websocket",children:[]},{value:"WebSocket \u63e1\u624b",id:"websocket-\u63e1\u624b",children:[{value:"\u8fde\u63a5\u72b6\u6001",id:"\u8fde\u63a5\u72b6\u6001",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-websocket"},"\u4e3a\u4ec0\u4e48\u9700\u8981 WebSocket"),Object(o.b)("p",null,"HTTP \u534f\u8bae\u6709\u4e00\u4e2a\u7f3a\u9677\uff1a\u901a\u4fe1\u53ea\u80fd\u7531\u5ba2\u6237\u7aef\u53d1\u8d77\u3002"),Object(o.b)("p",null,"\u8fd9\u79cd\u5355\u5411\u8bf7\u6c42\u7684\u7279\u70b9\uff0c\u6ce8\u5b9a\u4e86\u5982\u679c\u670d\u52a1\u5668\u6709\u8fde\u7eed\u7684\u72b6\u6001\u53d8\u5316\uff0c\u5ba2\u6237\u7aef\u8981\u83b7\u77e5\u5c31\u975e\u5e38\u9ebb\u70e6\u3002\u56e0\u6b64\u6211\u4eec\u53ea\u80fd\u4f7f\u7528\u8f6e\u8be2\uff0c\u6bcf\u9694\u4e00\u6bb5\u65f6\u5019\uff0c\u5c31\u53d1\u51fa\u4e00\u4e2a\u8be2\u95ee\uff0c\u4e86\u89e3\u670d\u52a1\u5668\u6709\u6ca1\u6709\u65b0\u7684\u4fe1\u606f\u3002"),Object(o.b)("p",null,"\u8f6e\u8be2\u7684\u6548\u7387\u4f4e\uff0c\u975e\u5e38\u6d6a\u8d39\u8d44\u6e90\uff08\u56e0\u4e3a\u5fc5\u987b\u4e0d\u505c\u8fde\u63a5\uff0c\u6216\u8005 HTTP \u8fde\u63a5\u59cb\u7ec8\u6253\u5f00\uff09\u3002"),Object(o.b)("p",null,"WebSocket \u7684\u51fa\u73b0\uff0c\u4f7f\u5f97\u6d4f\u89c8\u5668\u5177\u5907\u4e86\u5b9e\u65f6\u53cc\u5411\u901a\u4fe1\u7684\u80fd\u529b\u3002"),Object(o.b)("h2",{id:"\u4ec0\u4e48\u662f-websocket"},"\u4ec0\u4e48\u662f WebSocket"),Object(o.b)("p",null,"HTML5 \u5f00\u59cb\u63d0\u4f9b\u7684\u4e00\u79cd\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u8fdb\u884c",Object(o.b)("strong",{parentName:"p"},"\u5168\u53cc\u5de5"),"\u901a\u8baf\u7684\u7f51\u7edc\u6280\u672f\uff0c\u5c5e\u4e8e\u5e94\u7528\u5c42\u534f\u8bae\u3002\u5b83\u57fa\u4e8e TCP \u4f20\u8f93\u534f\u8bae\uff0c\u5e76\u590d\u7528 HTTP \u7684\u63e1\u624b\u901a\u9053\u3002"),Object(o.b)("p",null,"\u5bf9\u6bd4 HTTP \u534f\u8bae\u7684\u4f18\u70b9\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u53cc\u5411\u901a\u4fe1\uff0c\u5b9e\u65f6\u6027\u66f4\u5f3a\u3002"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u4e8c\u7ea7\u5236\u652f\u6301\u3002"),Object(o.b)("li",{parentName:"ul"},"\u8f83\u5c0f\u7684\u63a7\u5236\u5f00\u9500\u3002\u8fde\u63a5\u521b\u5efa\u540e\uff0cws \u5ba2\u6237\u7aef\u3001\u670d\u52a1\u7aef\u8fdb\u884c\u6570\u636e\u4ea4\u6362\u65f6\uff0c\u534f\u8bae\u63a7\u5236\u7684\u6570\u636e\u5305\u5934\u90e8\u8f83\u5c0f\u3002\u5728\u4e0d\u5305\u542b\u5934\u90e8\u7684\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u7aef\u5230\u5ba2\u6237\u7aef\u7684\u5305\u5934\u53ea\u6709 2~10 \u5b57\u8282\uff08\u53d6\u51b3\u4e8e\u6570\u636e\u5305\u957f\u5ea6\uff09\uff0c\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u7aef\u7684\u7684\u8bdd\uff0c\u9700\u8981\u52a0\u4e0a\u989d\u5916\u7684 4 \u5b57\u8282\u7684\u63a9\u7801\u3002\u800c HTTP \u534f\u8bae\u6bcf\u6b21\u901a\u4fe1\u90fd\u9700\u8981\u643a\u5e26\u5b8c\u6574\u7684\u5934\u90e8\u3002"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u62d3\u5c55\u3002ws \u534f\u8bae\u5b9a\u4e49\u4e86\u6269\u5c55\uff0c\u7528\u6237\u53ef\u4ee5\u6269\u5c55\u534f\u8bae\uff0c\u6216\u8005\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u5b50\u534f\u8bae\u3002\uff08\u6bd4\u5982\u652f\u6301\u81ea\u5b9a\u4e49\u538b\u7f29\u7b97\u6cd5\u7b49\uff09"),Object(o.b)("li",{parentName:"ul"},"\u6ca1\u6709\u540c\u6e90\u7b56\u7565\u9650\u5236\u3002")),Object(o.b)("h2",{id:"websocket-\u63e1\u624b"},"WebSocket \u63e1\u624b"),Object(o.b)("p",null,"WebSocket \u7684 RFC6455 \u6807\u51c6\u4e2d\u5236\u5b9a\u4e86 2 \u4e2a\u9ad8\u7ea7\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u662f\u5f00\u653e\u6027 HTTP \u63e1\u624b\u7528\u4e8e\u534f\u5546\u8fde\u63a5\u53c2\u6570\uff0c\u53e6\u4e00\u4e2a\u662f\u4e8c\u8fdb\u5236\u6d88\u606f\u5206\u5e27\u673a\u5236\u7528\u4e8e\u652f\u6301\u4f4e\u5f00\u9500\u7684\u57fa\u4e8e\u6d88\u606f\u7684\u6587\u672c\u548c\u4e8c\u8fdb\u5236\u6570\u636e\u4f20\u8f93\u3002"),Object(o.b)("p",null,"\u5ba2\u6237\u7aef\u53d1\u8d77 WebSocket \u8bf7\u6c42\uff0c\u6267\u884c\u53cc\u65b9\u63e1\u624b\u8fc7\u7a0b\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\u683c\u5f0f\u7c7b\u4f3c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-basic"},"GET /chat HTTP/1.1\n// highlight-next-line\nConnection: Upgrade\nHost: server.example.com\nOrigin: http://example.com\nSec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==\nSec-WebSocket-Protocol: chat, superchat\nSec-WebSocket-Version: 13\n// highlight-next-line\nUpgrade: websocket\n")),Object(o.b)("p",null,"\u53ef\u4ee5\u770b\u5230 WebSocket \u4e0e HTTP \u8bf7\u6c42\u4e0d\u540c\u7684\u662f\u4e24\u4e2a\u9ad8\u4eae\u7684\u8bf7\u6c42\u5934\uff0c\u544a\u8bc9\u670d\u52a1\u5668\u534f\u8bae\u5347\u7ea7\u3002"),Object(o.b)("p",null,"\u5176\u4e2d\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Sec-WebSocket-Key")," \u662f WebSocket \u5ba2\u6237\u7aef\u53d1\u9001\u7684\u4e00\u4e2a base64 \u7f16\u7801\u7684\u5bc6\u6587\uff0c\u8981\u6c42\u670d\u52a1\u7aef\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5bf9\u5e94\u52a0\u5bc6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Sec-WebSocket-Accept")," \u5e94\u7b54\u3002"),Object(o.b)("p",null,"\u670d\u52a1\u7aef\u6536\u5230\u62a5\u6587\u540e\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f\u7c7b\u4f3c\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-basic"},"HTTP/1.1 101 Switching Protocols\n// highlight-next-line\nUpgrade: websocket\nSec-WebSocket-Accept: K7DJLdLooIwIG/MOpvWFB3y3FE8=\n// highlight-next-line\nConnection: Upgrade\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Sec-WebSocket-Accept")," \u662f\u670d\u52a1\u7aef\u91c7\u7528\u4e0e\u5ba2\u6237\u7aef\u4e00\u81f4\u7684\u5bc6\u94a5\u8ba1\u7b97\u51fa\u6765\u503c\uff0c\u8fd4\u56de\u5ba2\u6237\u7aef\u3002"),Object(o.b)("h3",{id:"\u8fde\u63a5\u72b6\u6001"},"\u8fde\u63a5\u72b6\u6001"),Object(o.b)("p",null,"\u9020\u6210 WebSocket \u65ad\u7ebf\u539f\u56e0\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7f51\u7edc\u72b6\u6001\u4e0d\u597d\uff08\u7f51\u7edc\u65ad\u5f00\u3001\u7f51\u7edc\u4fe1\u53f7\u5dee\uff09"),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u53d7\u5404\u79cd\u963b\u585e\uff08\u8def\u7531\u5668\u3001\u9632\u706b\u5899\u3001\u4ee3\u7406\u670d\u52a1\u5668\uff09"),Object(o.b)("li",{parentName:"ul"},"Web \u670d\u52a1\u7aef\u6545\u969c")),Object(o.b)("p",null,"\u89e3\u51b3 websocket \u65ad\u7ebf\u65b9\u6cd5\uff1a",Object(o.b)("strong",{parentName:"p"},"\u5fc3\u8df3\u91cd\u8fde"),"\u3002"),Object(o.b)("hr",null),Object(o.b)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://halfrost.com/websocket/"},"\u5168\u53cc\u5de5\u901a\u4fe1\u7684 WebSocket"))))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var c=n(0),r=n.n(c);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},o=Object.keys(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=c,O=u["".concat(b,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(O,a(a({ref:t},i),{},{components:n})):r.a.createElement(O,a({ref:t},i))}));function O(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,b=new Array(o);b[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,b[1]=a;for(var i=2;i<o;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);