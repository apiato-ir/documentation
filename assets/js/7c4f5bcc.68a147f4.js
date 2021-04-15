(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(222)),i={title:"Views"},l={unversionedId:"main-components/views",id:"main-components/views",isDocsHomePage:!1,title:"Views",description:"* Definition & Principles",source:"@site/docs/main-components/views.md",slug:"/main-components/views",permalink:"/docs/next/main-components/views",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/views.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618494215,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Models",permalink:"/docs/next/main-components/models"},next:{title:"Transformers",permalink:"/docs/next/main-components/transformers"}},c=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-samples",children:[]},{value:"Namespaces",id:"namespaces",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#namespaces"},"Namespaces"))),Object(o.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(o.b)("p",null,"Read from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Views"},Object(o.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Views)")),"."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All Views are namespaced as the lower case of the Container name."))),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - WEB\n                    - Views\n                        - welcome.php\n                        - profile.php\n                        - ...\n")),Object(o.b)("h3",{id:"code-samples"},"Code Sample"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Welcome page View")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n<div class="container">\n    <div class="content">\n        <div class="title">Welcome</div>\n    </div>\n</div>\n</body>\n</html>\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example: Usage From Controller")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\Welcome\\UI\\WEB\\Controllers;\n\nuse App\\Ship\\Parents\\Controllers\\WebController;\n\nclass Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n\n")),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("p",null,"By default, all the Container Views are namespaced to the Container name."),Object(o.b)("p",null,"Example:"),Object(o.b)("p",null,"If a Container named ",Object(o.b)("em",{parentName:"p"},"Store")," has View ",Object(o.b)("inlineCode",{parentName:"p"},"say-hello"),", you can access the view like this ",Object(o.b)("inlineCode",{parentName:"p"},"view('store::just-welcome')"),". If you try to access it without the namespace ",Object(o.b)("inlineCode",{parentName:"p"},"view('just-welcome')"),", it will not find your View."))}s.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);