(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),o=(a(0),a(153)),i={title:"Admin Dashboard"},d={unversionedId:"features/admin-dashboard",id:"features/admin-dashboard",isDocsHomePage:!1,title:"Admin Dashboard",description:"- The provided Admin route",source:"@site/docs/features/admin-dashboard.md",slug:"/features/admin-dashboard",permalink:"/docs/features/admin-dashboard",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/admin-dashboard.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Useful Commands",permalink:"/docs/features/useful-commands"},next:{title:"Profiler",permalink:"/docs/features/profiler"}},c=[{value:"The provided Admin route",id:"the-provided-admin-route",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Change default Admin credentials",id:"change-default-admin-credentials",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#the-provided-admin-route"},"The provided Admin route")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#how-it-works"},"How it works")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#change-default-admin-credentials"},"Change default Admin credentials"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Apiato does not recommend serving HTML pages. Instead, you should build your own Frontend App completely isolated from the Backend code.")),Object(o.b)("h2",{id:"the-provided-admin-route"},"The provided Admin route"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/login"},"http://admin.apiato.test/login"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/logout"},"http://admin.apiato.test/logout")))),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"Visiting ",Object(o.b)("a",{parentName:"p",href:"http://admin.apiato.test/dashboard"},"http://admin.apiato.test/dashboard")," will redirect you to a login page for admins."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"the default credentials are:"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"email: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"mailto:admin@admin.com"},"admin@admin.com")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"password: ",Object(o.b)("strong",{parentName:"p"},"admin"))))),Object(o.b)("p",null,"It is up to you to build and customize your admin dashboard however you prefer."),Object(o.b)("h2",{id:"change-default-admin-credentials"},"Change default Admin credentials"),Object(o.b)("p",null,"you can change these default values from the seeder class in the Authorization container: ",Object(o.b)("inlineCode",{parentName:"p"},"app/Containers/Authorization/Data/Seeders/RolesAndPermissionsSeeder.php"),"."))}p.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return a?n.a.createElement(m,d(d({ref:t},l),{},{components:a})):n.a.createElement(m,d({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);