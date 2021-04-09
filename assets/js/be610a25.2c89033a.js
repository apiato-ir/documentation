(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),i=(n(0),n(153)),r={title:"Postman Environment"},l={unversionedId:"miscellaneous/postman",id:"miscellaneous/postman",isDocsHomePage:!1,title:"Postman Environment",description:"- Apiato Postman API & Environment",source:"@site/docs/miscellaneous/postman.md",slug:"/miscellaneous/postman",permalink:"/docs/miscellaneous/postman",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/miscellaneous/postman.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Containers Installer",permalink:"/docs/miscellaneous/container-installer"},next:{title:"Frequently Asked Questions",permalink:"/docs/general/faq"}},s=[{value:"Apiato Postman API &amp; Environment",id:"apiato-postman-api--environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Add Apiato Environment &amp; Collection to Postman",id:"add-apiato-environment--collection-to-postman",children:[]},{value:"Using the Postman Apiato API Collection",id:"using-the-postman-apiato-api-collection",children:[]},{value:"Download Environment &amp; Collection",id:"download-environment--collection",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apiato-postman-api--environment"},"Apiato Postman API & Environment"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#add-apiato-environment--collection-to-postman"},"Add Apiato Environment & Collection to Postman ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#using-the-postman-apiato-api-collection"},"Using the Postman Apiato API Collection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#download-environment--collection"},"Download Environment & Collection"))))),Object(i.b)("h2",{id:"apiato-postman-api--environment"},"Apiato Postman API & Environment"),Object(i.b)("p",null,"If you use Postman to build and explore your API's you will find this predefined Apiato Postman collection a great\nstart to your new Apiato project. Simply download both the Environment and Collection to Postman to get started."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h4",{id:"configure-apiato"},"Configure Apiato"),Object(i.b)("p",null,"It's important that you run the following shell commands to migrate and seed your database. The next command configures\na Laravel Passport client. Finally, you need to run the last command to grant the Admin user with full permission to\naccess all routes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"php artisan migrate:refresh --seed\nphp artisan passport:client --password\nphp artisan apiato:permissions:toRole admin\n")),Object(i.b)("p",null,"Be sure to copy and paste your new ",Object(i.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"client_secret")," into the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file. Like so..."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"CLIENT_WEB_ADMIN_ID={CLIENT_ID}\nCLIENT_WEB_ADMIN_SECRET={CLIENT_SECRET}\n\nCLIENT_MOBILE_ADMIN_ID={CLIENT_ID}\nCLIENT_MOBILE_ADMIN_SECRET={CLIENT_SECRET}\n")),Object(i.b)("p",null,"The above steps will ensure you have a functioning Apiato API environment to explore with Postman."),Object(i.b)("h4",{id:"download--install-postman"},"Download & Install Postman"),Object(i.b)("p",null,"Visit the Postman website and download the application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.getpostman.com/"},"Postman"))),Object(i.b)("h3",{id:"add-apiato-environment--collection-to-postman"},"Add Apiato Environment & Collection to Postman"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[Download Apiato Environment]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)"),Object(i.b)("li",{parentName:"ul"},"[Download Apiato Collection]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)")),Object(i.b)("p",null,"Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open Postman"),Object(i.b)("li",{parentName:"ul"},'Click on "',Object(i.b)("strong",{parentName:"li"},"import"),'" button ',Object(i.b)("strong",{parentName:"li"},"top left")," of Postman application."),Object(i.b)("li",{parentName:"ul"},'Click on "',Object(i.b)("strong",{parentName:"li"},"Choose files"),'". Select both the Environment and Collection JSON files and click add.'),Object(i.b)("li",{parentName:"ul"},'Select "',Object(i.b)("strong",{parentName:"li"},"Apiato Environment"),'" from the Environment dropdown list on the ',Object(i.b)("strong",{parentName:"li"},"top right")," of the Postman Application.")),Object(i.b)("h3",{id:"using-the-postman-apiato-api-collection"},"Using the Postman Apiato API Collection"),Object(i.b)("p",null,"The first thing you need to do to use the Apiato endpoints is to log in to your Apiato API."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Apiato API Collection")," in the left menu."),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("strong",{parentName:"li"},"Authentication")," folder."),Object(i.b)("li",{parentName:"ul"},"Select ",Object(i.b)("strong",{parentName:"li"},"Login")," endpoint."),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Send")," button.")),Object(i.b)("p",null,"The response will return a body with the API access token. Normally you would have to manually add this in a header\nwith each request using ",Object(i.b)("inlineCode",{parentName:"p"},"Authorization: Bearer TOKEN"),". This however is automatically done for you."),Object(i.b)("p",null,"From this point you can now access all endpoints using the ",Object(i.b)("strong",{parentName:"p"},"Super Admin")," role."),Object(i.b)("p",null,"If you would like to test logging into your application with different users then switch to the ",Object(i.b)("inlineCode",{parentName:"p"},"body")," tab on the\n",Object(i.b)("inlineCode",{parentName:"p"},"login")," endpoint and update the credentials."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "email": "admin@admin.com",\n    "password": "admin"\n}\n')),Object(i.b)("h3",{id:"download-environment--collection"},"Download Environment & Collection"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[Download Apiato Environment]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_environment.json)"),Object(i.b)("li",{parentName:"ul"},"[Download Apiato Collection]","({{ site.baseurl }}/assets/postman/Apiato_API.postman_collection.json)")))}p.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,d=m["".concat(r,".").concat(u)]||m[u]||b[u]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);