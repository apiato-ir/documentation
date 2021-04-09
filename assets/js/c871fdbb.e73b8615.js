(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),l=(n(0),n(153)),o={title:"Localization"},r={unversionedId:"features/localization",id:"features/localization",isDocsHomePage:!1,title:"Localization",description:"- Select Request Language",source:"@site/docs/features/localization.md",slug:"/features/localization",permalink:"/docs/features/localization",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/features/localization.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Hash ID",permalink:"/docs/features/hash-id"},next:{title:"Rate Limiting",permalink:"/docs/features/rate-limiting"}},c=[{value:"Select Request Language",id:"select-request-language",children:[]},{value:"Support new languages",id:"support-new-languages",children:[]},{value:"Translating Strings",id:"translating-strings",children:[]},{value:"Disable Localization",id:"disable-localization",children:[]},{value:"Get Available Localizations",id:"get-available-localizations",children:[]},{value:"Tests",id:"tests",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#select-request-language"},"Select Request Language")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#support-new-languages"},"Support new languages")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#translating-strings"},"Translating Strings")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#disable-localization"},"Disable Localization")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#get-available-localizations"},"Get Available Localizations")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#tests"},"Tests"))),Object(l.b)("p",null,"The Localization is provided by the Localization Container."),Object(l.b)("h2",{id:"select-request-language"},"Select Request Language"),Object(l.b)("p",null,"You can select the language of the response by adding the header ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," to the request. By default, the\n",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," is set to the language defined in ",Object(l.b)("inlineCode",{parentName:"p"},"config/app.php")," ",Object(l.b)("inlineCode",{parentName:"p"},"locale"),". "),Object(l.b)("p",null,"Please note that ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," only determines, that the client ",Object(l.b)("em",{parentName:"p"},"would like")," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"),Object(l.b)("p",null,"When the ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," header is missing, the default locale will be applied."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Heads up!"),"\nPlease be sure that your client does not send an ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," header automatically. Some REST clients\n(e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"POSTMAN"),") automatically add header-fields based on the operating-systems settings. So your ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," header\nmay be set automatically without knowing!")),Object(l.b)("p",null,"The API will answer with the applied language in the ",Object(l.b)("inlineCode",{parentName:"p"},"Content-Language")," header of the response."),Object(l.b)("p",null,"If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",Object(l.b)("inlineCode",{parentName:"p"},"UnsupportedLanguageException")," to tell\nthe client about this."),Object(l.b)("p",null,"The overall workflow of the Middleware is as follows:\n1) Extract the ",Object(l.b)("inlineCode",{parentName:"p"},"Accept-Language")," field from the request header. If none is set, use the default locale from the config file\n2) Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",Object(l.b)("inlineCode",{parentName:"p"},"['en-GB', 'en-US', 'en']")," (the regions before languages,\nas regions are more specific)\n3) Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",Object(l.b)("inlineCode",{parentName:"p"},"Exception"),"."),Object(l.b)("h2",{id:"support-new-languages"},"Support new languages"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"All supported languages must be added to the ",Object(l.b)("inlineCode",{parentName:"li"},"supported_languages")," in ",Object(l.b)("inlineCode",{parentName:"li"},"app/Containers/Localization/Configs/localization.php"),"\nto prevent users from requesting unsupported languages, as follows:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n    ],\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Create new languages files:")),Object(l.b)("p",null,"Languages file can be placed in any container, not only the Localization Container. Refer to the ",Object(l.b)("a",{parentName:"p",href:".././features/localization"},"Localization"),"\npage for more info."),Object(l.b)("p",null,"Example languages files are included in the Localization Container at ",Object(l.b)("inlineCode",{parentName:"p"},"app/Containers/Localization/Resources/Languages"),"."),Object(l.b)("h2",{id:"translating-strings"},"Translating Strings"),Object(l.b)("p",null,"By default all the Container translation files are namespaced to the Container name."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example:")),Object(l.b)("p",null,"If a Container named ",Object(l.b)("inlineCode",{parentName:"p"},"Store")," has ",Object(l.b)("inlineCode",{parentName:"p"},"en")," translation file called ",Object(l.b)("inlineCode",{parentName:"p"},"notifications")," that contains translation for ",Object(l.b)("inlineCode",{parentName:"p"},"welcome"),'\nlike "Welcome to our store :)". You can access this translation as follows ',Object(l.b)("inlineCode",{parentName:"p"},"trans('store::notifications.welcome')"),". If\nyou remove the namespace (which is the lowercase of the container name) and try to access it like this\n",Object(l.b)("inlineCode",{parentName:"p"},"trans('notifications.welcome')")," it will not find your translation and will print ",Object(l.b)("inlineCode",{parentName:"p"},"notifications.welcome")," only."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Heads up!"),"\nIf you try to load a string for a language that is ",Object(l.b)("strong",{parentName:"p"},"not available")," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",Object(l.b)("inlineCode",{parentName:"p"},"app.locale")," config file. This is also true, if the requested locale\nis present in the ",Object(l.b)("inlineCode",{parentName:"p"},"supported_languages")," array from the configuration file.")),Object(l.b)("h2",{id:"disable-localization"},"Disable Localization"),Object(l.b)("p",null,"You will need to remove the Localization Middleware, by simply going to ",Object(l.b)("inlineCode",{parentName:"p"},"app/Containers/Localization/Providers/MainServiceProvider.php"),"\nand removing the ",Object(l.b)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," from the ",Object(l.b)("inlineCode",{parentName:"p"},"$serviceProviders")," property."),Object(l.b)("h2",{id:"get-available-localizations"},"Get Available Localizations"),Object(l.b)("p",null,"Apiato provides a convenient way to get all defined localizations. These localizations can be retrieved via ",Object(l.b)("inlineCode",{parentName:"p"},"GET /localizations"),'\nby default. Note that this route only outputs the "top level" locales, like ',Object(l.b)("inlineCode",{parentName:"p"},"en")," from the example above. However, if\nspecific regions (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"en-US"),") are defined, these will show up in the result as well."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Transformer")," for the localizations not only provide the ",Object(l.b)("inlineCode",{parentName:"p"},"language")," (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"de"),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"locale_name => Deutsch"),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",Object(l.b)("inlineCode",{parentName:"p"},"app.locale"),"). This would result in ",Object(l.b)("inlineCode",{parentName:"p"},"default_name => German"),"."),Object(l.b)("p",null,"The same applies to the regions that are defined (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"de-DE"),"). Consequently, this results in ",Object(l.b)("inlineCode",{parentName:"p"},"locale_name => Deutschland"),"\nand ",Object(l.b)("inlineCode",{parentName:"p"},"default_name = Germany"),"."),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"To change the default language in your tests requests. You can set the ",Object(l.b)("inlineCode",{parentName:"p"},"env")," language in the ",Object(l.b)("inlineCode",{parentName:"p"},"phpunit.xml")," file."))}p.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,g=b["".concat(o,".").concat(d)]||b[d]||u[d]||l;return n?i.a.createElement(g,r(r({ref:t},s),{},{components:n})):i.a.createElement(g,r({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);