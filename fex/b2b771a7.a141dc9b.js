(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),l=(t(0),t(119)),c={id:"cross-origin",title:"\u8de8\u57df"},i={unversionedId:"advanced/browser/cross-origin",id:"advanced/browser/cross-origin",isDocsHomePage:!1,title:"\u8de8\u57df",description:"\u4ec0\u4e48\u662f\u8de8\u57df",source:"@site/docs/advanced/browser/cross-origin.md",slug:"/advanced/browser/cross-origin",permalink:"/fex/docs/advanced/browser/cross-origin",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/browser/cross-origin.md",version:"current",sidebar:"advanced",previous:{title:"\u5783\u573e\u56de\u6536",permalink:"/fex/docs/advanced/browser/browser-gc"},next:{title:"\u6982\u89c8",permalink:"/fex/docs/advanced/security"}},o=[{value:"\u4ec0\u4e48\u662f\u8de8\u57df",id:"\u4ec0\u4e48\u662f\u8de8\u57df",children:[]},{value:"\u540c\u6e90\u7b56\u7565",id:"\u540c\u6e90\u7b56\u7565",children:[]},{value:"\u8de8\u57df\u89e3\u51b3\u65b9\u6848",id:"\u8de8\u57df\u89e3\u51b3\u65b9\u6848",children:[{value:"JSONP",id:"jsonp",children:[]},{value:"CORS",id:"cors",children:[]}]}],b={toc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4ec0\u4e48\u662f\u8de8\u57df"},"\u4ec0\u4e48\u662f\u8de8\u57df"),Object(l.b)("p",null,"\u8de8\u57df\u662f\u6307\u4e00\u4e2a\u57df\u4e0b\u7684\u6587\u6863\u6216\u811a\u672c\u8bd5\u56fe\u53bb\u8bf7\u6c42\u53e6\u4e00\u4e2a\u57df\u4e0b\u7684\u8d44\u6e90\uff0c\u8fd9\u91cc\u8de8\u57df\u662f\u5e7f\u4e49\u7684\u3002"),Object(l.b)("p",null,"\u5e7f\u4e49\u7684\u8de8\u57df\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8d44\u6e90\u8df3\u8f6c\uff1a\u5916\u94fe\u3001\u91cd\u5b9a\u5411\u3001\u8868\u5355\u63d0\u4ea4"),Object(l.b)("li",{parentName:"ul"},"\u8d44\u6e90\u5d4c\u5165\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"<link>"),", ",Object(l.b)("inlineCode",{parentName:"li"},"<script>"),", ",Object(l.b)("inlineCode",{parentName:"li"},"<img>"),", ",Object(l.b)("inlineCode",{parentName:"li"},"<frame>")," \u7b49 DOM \u6807\u7b7e\uff0c\u8fd8\u6709\u6837\u5f0f\u4e2d ",Object(l.b)("inlineCode",{parentName:"li"},"background:url()"),", ",Object(l.b)("inlineCode",{parentName:"li"},"@font-face()")," \u7b49\u6587\u4ef6\u5916\u94fe"),Object(l.b)("li",{parentName:"ul"},"\u811a\u672c\u8bf7\u6c42\uff1aJavaScript \u53d1\u8d77\u7684 Ajax \u8bf7\u6c42\u3001DOM \u548c JavaScript \u5bf9\u8c61\u7684\u8de8\u57df\u64cd\u4f5c\u7b49")),Object(l.b)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u8de8\u57df\uff0c\u662f\u7531\u6d4f\u89c8\u5668",Object(l.b)("strong",{parentName:"p"},"\u540c\u6e90\u7b56\u7565"),"\u9650\u5236\u7684\u4e00\u7c7b\u8bf7\u6c42\u573a\u666f\u3002"),Object(l.b)("h2",{id:"\u540c\u6e90\u7b56\u7565"},"\u540c\u6e90\u7b56\u7565"),Object(l.b)("p",null,"\u540c\u6e90\u7b56\u7565\uff08SOP, Same origin policy\uff09\u662f\u4e00\u79cd\u7ea6\u5b9a\uff0c\u5b83\u662f\u6d4f\u89c8\u5668\u6700\u6838\u5fc3\u4e5f\u6700\u57fa\u672c\u7684\u5b89\u5168\u529f\u80fd\uff0c\u5982\u679c\u7f3a\u5c11\u4e86\u540c\u6e90\u7b56\u7565\uff0c\u6d4f\u89c8\u5668\u5f88\u5bb9\u6613\u53d7\u5230 XSS\u3001CSFR \u7b49\u653b\u51fb\u3002\u6240\u8c13\u540c\u6e90\u662f\u6307",Object(l.b)("strong",{parentName:"p"},"\u534f\u8bae+\u57df\u540d+\u7aef\u53e3"),"\u4e09\u8005\u76f8\u540c\uff0c\u5373\u4fbf\u4e24\u4e2a\u4e0d\u540c\u7684\u57df\u540d\u6307\u5411\u540c\u4e00\u4e2a IP \u5730\u5740\uff0c\u4e5f\u975e\u540c\u6e90\u3002"),Object(l.b)("p",null,"\u540c\u6e90\u7b56\u7565\u9650\u5236\u7684\u5185\u5bb9\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cookie\u3001localStorage \u548c IndexDB \u7b49\u5b58\u50a8\u6027\u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},"DOM \u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"AJAX \u8bf7\u6c42\u53d1\u9001\u540e\uff0c\u88ab\u6d4f\u89c8\u5668\u62e6\u622a")),Object(l.b)("h2",{id:"\u8de8\u57df\u89e3\u51b3\u65b9\u6848"},"\u8de8\u57df\u89e3\u51b3\u65b9\u6848"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"JSONP"),Object(l.b)("li",{parentName:"ol"},"CORS"),Object(l.b)("li",{parentName:"ol"},"postMessage"),Object(l.b)("li",{parentName:"ol"},"WebSocket"),Object(l.b)("li",{parentName:"ol"},"Nodejs \u4e2d\u95f4\u4ef6\u4ee3\u7406"),Object(l.b)("li",{parentName:"ol"},"Nginx \u53cd\u5411\u4ee3\u7406"),Object(l.b)("li",{parentName:"ol"},"window.name+iframe"),Object(l.b)("li",{parentName:"ol"},"location.hash+iframe"),Object(l.b)("li",{parentName:"ol"},"document.domain+iframe")),Object(l.b)("h3",{id:"jsonp"},"JSONP"),Object(l.b)("p",null,"\u539f\u7406\uff1a\u5229\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"<script>")," \u6807\u7b7e\u6ca1\u6709\u8de8\u57df\u9650\u5236\u7684\u6f0f\u6d1e\uff0c\u7f51\u9875\u53ef\u4ee5\u5f97\u5230\u4ece\u5176\u4ed6\u6765\u6e90\u52a8\u6001\u4ea7\u751f\u7684 JSON \u6570\u636e\u3002JSONP \u8bf7\u6c42\u4e00\u5b9a\u9700\u8981\u5bf9\u65b9\u7684\u670d\u52a1\u5668\u505a\u652f\u6301\u624d\u53ef\u4ee5\u3002"),Object(l.b)("p",null,"\u867d\u7136 JSONP \u548c AJAX \u4e00\u6837\uff0c\u90fd\u662f\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u7aef\u53d1\u9001\u8bf7\u6c42\uff0c\u4ece\u670d\u52a1\u5668\u7aef\u83b7\u53d6\u6570\u636e\u7684\u65b9\u5f0f\u3002\u4f46 AJAX \u5c5e\u4e8e\u540c\u6e90\u7b56\u7565\uff0cJSONP \u5c5e\u4e8e\u975e\u540c\u6e90\u7b56\u7565\u3002"),Object(l.b)("p",null,"JSONP \u4f18\u70b9\u662f\u7b80\u5355\u517c\u5bb9\u6027\u597d\uff0c\u53ef\u7528\u4e8e\u89e3\u51b3\u4e3b\u6d41\u6d4f\u89c8\u5668\u7684\u8de8\u57df\u6570\u636e\u8bbf\u95ee\u7684\u95ee\u9898\u3002\u7f3a\u70b9\u662f\u4ec5\u652f\u6301 GET \u65b9\u6cd5\u5177\u6709\u5c40\u9650\u6027\uff0c\u4e0d\u5b89\u5168\u53ef\u80fd\u4f1a\u906d\u53d7 XSS \u653b\u51fb\u3002"),Object(l.b)("p",null,"\u5b9e\u73b0\u6d41\u7a0b\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u58f0\u660e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5176\u51fd\u6570\u540d\u4f5c\u53c2\u6570\u503c\u4f20\u9012\u7ed9\u8de8\u57df\u8bf7\u6c42\u6570\u636e\u7684\u670d\u52a1\u5668\uff0c\u51fd\u6570\u5f62\u53c2\u4e3a\u8981\u83b7\u53d6\u76ee\u6807\u6570\u636e\u3002"),Object(l.b)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"<script>")," \u6807\u7b7e\uff0c\u628a\u8de8\u57df\u7684 API \u63a5\u53e3\u5730\u5740\u8d4b\u503c\u7ed9 src \u5c5e\u6027\uff0c\u5e76\u5411\u670d\u52a1\u5668\u4f20\u9012\u8be5\u51fd\u6570\u540d\u3002"),Object(l.b)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u9700\u8981\u8fdb\u884c\u7279\u6b8a\u7684\u5904\u7406\uff1a\u628a\u4f20\u9012\u8fdb\u6765\u7684\u51fd\u6570\u540d\u548c\u5b83\u9700\u8981\u7ed9\u4f60\u7684\u6570\u636e\u62fc\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fd4\u56de\u3002\u5982\uff1a\u4f20\u9012 ",Object(l.b)("inlineCode",{parentName:"li"},"?callback=show"),"\uff0c\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"li"},"show(data)")),Object(l.b)("li",{parentName:"ol"},"\u6700\u540e\u670d\u52a1\u5668\u54cd\u5e94\u7684\u5185\u5bb9\uff0c\u5728\u6d4f\u89c8\u5668\u5f97\u5230\u6267\u884c\uff0c\u5373\u6267\u884c\u4e86\u8bf7\u6c42\u53c2\u6570\u4e2d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u8fd4\u56de\u6570\u636e\u3002")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function jsonp({ url, params, callback }) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement('script');\n    window[callback] = function (data) {\n      resolve(data);\n      document.body.removeChild(script);\n    };\n    params = { ...params, callback }; // wd=b&callback=show\n    const arrs = [];\n    for (let key in params) {\n      arrs.push(`${key}=${params[key]}`);\n    }\n    script.src = `${url}?${arrs.join('&')}`;\n    document.body.appendChild(script);\n  });\n}\n")),Object(l.b)("h3",{id:"cors"},"CORS"),Object(l.b)("p",null,"CORS\uff08Cross-origin resource sharing\uff09\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff0c\u5b83\u5141\u8bb8\u6d4f\u89c8\u5668\u5411\u8de8\u6e90\u670d\u52a1\u5668\u53d1\u51fa XMLHttpRequest \u8bf7\u6c42\u3002"),Object(l.b)("p",null,"CORS \u9700\u8981\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u540c\u65f6\u652f\u6301\u3002\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u8fdb\u884c CORS \u901a\u4fe1\uff0c\u5b9e\u73b0 CORS \u901a\u4fe1\u7684\u5173\u952e\u662f\u540e\u7aef\u670d\u52a1\u3002\u53ea\u8981\u670d\u52a1\u5668\u5b9e\u73b0\u4e86 CORS \u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u8de8\u6e90\u901a\u4fe1\u3002"),Object(l.b)("p",null,"\u6d4f\u89c8\u5668\u5c06 CORS \u8bf7\u6c42\u5206\u6210\u4e24\u7c7b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355\u8bf7\u6c42\uff08simple request\uff09"),Object(l.b)("li",{parentName:"ul"},"\u975e\u7b80\u5355\u8bf7\u6c42\uff08not-so-simple request\uff09")),Object(l.b)("p",null,"\u53ea\u8981\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u5927\u6761\u4ef6\uff0c\u5c31\u5c5e\u4e8e\u7b80\u5355\u8bf7\u6c42\u3002"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u8bf7\u6c42\u65b9\u6cd5\u662f\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5\u4e4b\u4e00\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"HEAD"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"GET"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"POST")),Object(l.b)("li",{parentName:"ol"},"HTTP \u7684\u5934\u4fe1\u606f\u4e0d\u8d85\u51fa\u4ee5\u4e0b\u51e0\u79cd\u5b57\u6bb5\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"Accept"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Accept-Language"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Content-Language"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Last-Event-ID"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Content-Type"),"\uff08\u53ea\u9650\u4e8e\u4e09\u4e2a\u503c ",Object(l.b)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"multipart/form-data"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"text/plain"),"\uff09")),Object(l.b)("p",null,"\u6d4f\u89c8\u5668\u5bf9\u8fd9\u4e24\u79cd\u8bf7\u6c42\u7684\u5904\u7406\uff0c\u662f\u4e0d\u4e00\u6837\u7684\u3002"),Object(l.b)("h4",{id:"\u7b80\u5355\u8bf7\u6c42"},"\u7b80\u5355\u8bf7\u6c42"),Object(l.b)("p",null,"\u5bf9\u4e8e\u7b80\u5355\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u76f4\u63a5\u53d1\u51fa CORS \u8bf7\u6c42\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5c31\u662f\u5728\u5934\u4fe1\u606f\u4e4b\u4e2d\uff0c\u589e\u52a0\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"Origin")," \u5b57\u6bb5\u3002\u670d\u52a1\u5668\u6839\u636e\u8fd9\u4e2a\u503c\uff0c\u51b3\u5b9a\u662f\u5426\u540c\u610f\u8fd9\u6b21\u8bf7\u6c42\u3002"),Object(l.b)("p",null,"\u5982\u679c Origin \u6307\u5b9a\u7684\u6e90\uff0c\u4e0d\u5728\u8bb8\u53ef\u8303\u56f4\u5185\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6b63\u5e38\u7684 HTTP \u56de\u5e94\u3002\u6d4f\u89c8\u5668\u53d1\u73b0\uff0c\u8fd9\u4e2a\u56de\u5e94\u7684\u5934\u4fe1\u606f\u6ca1\u6709\u5305\u542b ",Object(l.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u5b57\u6bb5\uff0c\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u88ab XMLHttpRequest \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"onerror")," \u56de\u8c03\u51fd\u6570\u6355\u83b7\u3002\u6ce8\u610f\uff0c\u8fd9\u79cd\u9519\u8bef\u65e0\u6cd5\u901a\u8fc7\u72b6\u6001\u7801\u8bc6\u522b\uff0c\u56e0\u4e3a HTTP \u56de\u5e94\u7684\u72b6\u6001\u7801\u6709\u53ef\u80fd\u662f 200\u3002"),Object(l.b)("p",null,"\u5982\u679c Origin \u6307\u5b9a\u7684\u57df\u540d\u5728\u8bb8\u53ef\u8303\u56f4\u5185\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u7684\u54cd\u5e94\uff0c\u4f1a\u591a\u51fa\u51e0\u4e2a\u5934\u4fe1\u606f\u5b57\u6bb5\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plain"},"Access-Control-Allow-Origin: http://api.domain.com\nAccess-Control-Allow-Credentials: true\nAccess-Control-Expose-Headers: foobar\nContent-Type: text/html;charset=utf-8\n")),Object(l.b)("h4",{id:"\u975e\u7b80\u5355\u8bf7\u6c42"},"\u975e\u7b80\u5355\u8bf7\u6c42"),Object(l.b)("p",null,"\u975e\u7b80\u5355\u8bf7\u6c42\u662f\u5bf9\u670d\u52a1\u5668\u6709\u7279\u6b8a\u8981\u6c42\u7684\u8bf7\u6c42\uff0c\u6bd4\u5982\u8bf7\u6c42\u65b9\u6cd5\u662f PUT \u6216 DELETE\uff0c\u6216\u8005 Content-Type \u5b57\u6bb5\u7684\u7c7b\u578b\u662f application/json\u3002"),Object(l.b)("p",null,"\u975e\u7b80\u5355\u8bf7\u6c42\u7684 CORS \u8bf7\u6c42\uff0c\u4f1a\u5728\u6b63\u5f0f\u901a\u4fe1\u4e4b\u524d\uff0c\u589e\u52a0\u4e00\u6b21 HTTP \u67e5\u8be2\u8bf7\u6c42\uff0c\u79f0\u4e3a",Object(l.b)("strong",{parentName:"p"},"\u9884\u68c0\u8bf7\u6c42"),"\uff08preflight\uff09\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u6536\u5230\u9884\u68c0\u8bf7\u6c42\u4ee5\u540e\uff0c\u68c0\u67e5\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"Origin"),"\u3001",Object(l.b)("inlineCode",{parentName:"p"},"Access-Control-Request-Method")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"Access-Control-Request-Headers")," \u5b57\u6bb5\u4ee5\u540e\uff0c\u786e\u8ba4\u5141\u8bb8\u8de8\u6e90\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u505a\u51fa\u56de\u5e94\u3002"),Object(l.b)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u5426\u5b9a\u4e86\u9884\u68c0\u8bf7\u6c42\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6b63\u5e38\u7684 HTTP \u56de\u5e94\u3002\u6d4f\u89c8\u5668\u53d1\u73b0\u6ca1\u6709\u4efb\u4f55 CORS \u76f8\u5173\u7684\u5934\u4fe1\u606f\u5b57\u6bb5\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u88ab XMLHttpRequest \u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"onerror")," \u56de\u8c03\u51fd\u6570\u6355\u83b7\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u56de\u5e94\u7684 CORS \u76f8\u5173\u5b57\u6bb5\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plain"},"Access-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: X-Custom-Header\nAccess-Control-Allow-Credentials: true\nAccess-Control-Max-Age: 1728000\n")),Object(l.b)("p",null,"\u4e00\u65e6\u670d\u52a1\u5668\u901a\u8fc7\u4e86\u9884\u68c0\u8bf7\u6c42\uff0c\u4ee5\u540e\u6bcf\u6b21\u6d4f\u89c8\u5668\u6b63\u5e38\u7684 CORS \u8bf7\u6c42\uff0c\u5c31\u90fd\u8ddf\u7b80\u5355\u8bf7\u6c42\u4e00\u6837\uff0c\u4f1a\u6709\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"Origin")," \u5934\u4fe1\u606f\u5b57\u6bb5\u3002\u670d\u52a1\u5668\u7684\u56de\u5e94\uff0c\u4e5f\u90fd\u4f1a\u6709\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u5934\u4fe1\u606f\u5b57\u6bb5\u3002"),Object(l.b)("hr",null),Object(l.b)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2016/04/cors.html"},"\u8de8\u57df\u8d44\u6e90\u5171\u4eab CORS \u8be6\u89e3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://juejin.cn/post/6844903767226351623"},"\u4e5d\u79cd\u8de8\u57df\u65b9\u5f0f\u5b9e\u73b0\u539f\u7406\uff08\u5b8c\u6574\u7248\uff09"))))}p.isMDXComponent=!0},119:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},O=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),O=p(t),u=r,d=O["".concat(c,".").concat(u)]||O[u]||s[u]||l;return t?a.a.createElement(d,i(i({ref:n},b),{},{components:t})):a.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);