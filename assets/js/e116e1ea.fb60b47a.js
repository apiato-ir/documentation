(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{260:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(8),r=(a(0),a(284)),i={title:"Social Authentication"},c={unversionedId:"additional-features/apiato-containers/social-authentication",id:"additional-features/apiato-containers/social-authentication",isDocsHomePage:!1,title:"Social Authentication",description:"- Installation",source:"@site/docs/additional-features/apiato-containers/social-authentication.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/social-authentication",permalink:"/docs/next/additional-features/apiato-containers/social-authentication",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/apiato-containers/social-authentication.md",version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1632066659,formattedLastUpdatedAt:"9/19/2021",frontMatter:{title:"Social Authentication"},sidebar:"docs",previous:{title:"Debugger",permalink:"/docs/next/additional-features/apiato-containers/debugger"},next:{title:"Localization",permalink:"/docs/next/additional-features/apiato-containers/localization"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",children:[]},{value:"How Social Authentication Works",id:"how-social-authentication-works",children:[]},{value:"Setup Social Authentication",id:"Setup-Social-Authentication",children:[]},{value:"Support new Auth Provider",id:"support-new-auth-provide",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#installation"},"Installation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#default-supported-auth-provide"},"Default Supported Auth Provide")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#how-social-authentication-works"},"How Social Authentication Works")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#Setup-Social-Authentication"},"Setup Social Authentication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#support-new-auth-provide"},"Support new Auth Provide"))),Object(r.b)("p",null,"Under the hood this container uses ",Object(r.b)("a",{parentName:"p",href:"https://github.com/laravel/socialite"},"Laravel Socialite"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"In the following instructions we assume we have a fresh ",Object(r.b)("strong",{parentName:"p"},"Apiato")," installation."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/social-auth-container\n")),Object(r.b)("p",null,"Now run ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan migrate")),Object(r.b)("p",null,"Add this values to $fillable array in your ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    protected $fillable = [\n        ...\n        'social_provider',\n        'social_nickname',\n        'social_id',\n        'social_token',\n        'social_token_secret',\n        'social_refresh_token',\n        'social_expires_in',\n        'social_avatar',\n        'social_avatar_original',\n        ...\n    ];\n")),Object(r.b)("p",null,"Optionally add this to your user transformer to add social auth fields to your user repsonses:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"'social_auth_provider' => $user->social_provider,\n    'social_nickname' => $user->social_nickname,\n    'social_id' => $user->social_id,\n    'social_avatar' => [\n        'avatar' => $user->social_avatar,\n        'original' => $user->social_avatar_original,\n    ]\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is recommended to have 2 separate transformers (private & public) for the User e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"UserPrivateProfileTransformer"),"\n& ",Object(r.b)("inlineCode",{parentName:"p"},"UserTransformer")," and add above data to the private transformer not the public one. By doing it this way you can hide\nyour User's personal data.  "))),Object(r.b)("h2",{id:"default-supported-auth-provide"},"Default Supported Auth Provide"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Google"),Object(r.b)("li",{parentName:"ul"},"Facebook"),Object(r.b)("li",{parentName:"ul"},"Twitter")),Object(r.b)("h2",{id:"how-social-authentication-works"},"How Social Authentication Works"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...)."),Object(r.b)("li",{parentName:"ol"},"The Social Auth Provider returns a Token."),Object(r.b)("li",{parentName:"ol"},"The Client makes a call to the server (our server) and passes the Token."),Object(r.b)("li",{parentName:"ol"},"The Server fetches the user data from the Social Auth Provider using Token."),Object(r.b)("li",{parentName:"ol"},"The Server create new User from the collected social data and return the Authenticated User (If the user already\ncreated then it just returns it).")),Object(r.b)("h2",{id:"Setup-Social-Authentication"},"Setup Social Authentication"),Object(r.b)("p",null,"1) Create an App on the supported Social Auth provider."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For Facebook: ",Object(r.b)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps")),Object(r.b)("li",{parentName:"ul"},"For Twitter: ",Object(r.b)("a",{parentName:"li",href:"https://apps.twitter.com/app"},"https://apps.twitter.com/app")),Object(r.b)("li",{parentName:"ul"},"For\nGoogle: ",Object(r.b)("a",{parentName:"li",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials"))),Object(r.b)("p",null,"For the callback URL you can use this Apiato web endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}/callback")," ",Object(r.b)("em",{parentName:"p"},"(replace the\nprovider with any of the supported providers ",Object(r.b)("inlineCode",{parentName:"em"},"facebook"),", ",Object(r.b)("inlineCode",{parentName:"em"},"twitter"),",...)"),"."),Object(r.b)("p",null,"2) For any supported provider you want to use, set Tokens and Secrets in the ",Object(r.b)("inlineCode",{parentName:"p"},".env")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"AUTH_FACEBOOK_CLIENT_ID=\nAUTH_FACEBOOK_CLIENT_SECRET=\nAUTH_FACEBOOK_CLIENT_REDIRECT=\n\nAUTH_TWITTER_CLIENT_ID=\nAUTH_TWITTER_CLIENT_SECRET=\nAUTH_TWITTER_CLIENT_REDIRECT=\n\nAUTH_GOOGLE_CLIENT_ID=\nAUTH_GOOGLE_CLIENT_SECRET=\nAUTH_GOOGLE_CLIENT_REDIRECT=\n")),Object(r.b)("p",null,"3) Make a request from your client to get the ",Object(r.b)("inlineCode",{parentName:"p"},"oauth")," info. ",Object(r.b)("strong",{parentName:"p"},"Each Social provider returns different response and keys")),Object(r.b)("p",null,"For testing purposes Apiato provides a web endpoint (",Object(r.b)("inlineCode",{parentName:"p"},"http://apiato.test/auth/{provider}")," ) to act as a client."),Object(r.b)("p",null,"Use that endpoint from your browser ",Object(r.b)("em",{parentName:"p"},"(replace the provider with any of the supported providers ",Object(r.b)("inlineCode",{parentName:"em"},"facebook"),", ",Object(r.b)("inlineCode",{parentName:"em"},"twitter"),"\n,..)")," to get the ",Object(r.b)("inlineCode",{parentName:"p"},"oauth")," info."),Object(r.b)("p",null,"Example Twitter Response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'User {\n  tokentoken: "1212"\n  tokentokenSecret: "3434"\n  tokenid: "777"\n  tokennickname: "John_Doe"\n  tokenname: "John Doe"\n  tokenemail: null\n  tokenavatar: "http://pbs.twimg.com/images/888/PENrcePC.jpg"\n  tokenuser:\n  token"avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"\n}\n')),Object(r.b)("p",null,"NOTE: This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps."),Object(r.b)("p",null,"4) Use the ",Object(r.b)("inlineCode",{parentName:"p"},"oauth")," info to make a call from your server to the Social Provider in order to get the User info."),Object(r.b)("p",null,"Example Getting Twitter User: ",Object(r.b)("strong",{parentName:"p"},"Twitter requires the ",Object(r.b)("inlineCode",{parentName:"strong"},"oauth_token")," and ",Object(r.b)("inlineCode",{parentName:"strong"},"oauth_secret"),", other Providers might only\nrequire the ",Object(r.b)("inlineCode",{parentName:"strong"},"oauth_token"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"POST /v1/auth/twitter HTTP/1.1\nHost: api.apiato.test\nContent-Type: application/x-www-form-urlencoded\nAccept: application/json\n\noauth_token=1212&oauth_secret=3434\n")),Object(r.b)("p",null,"Note: For Facebook send only the ",Object(r.b)("inlineCode",{parentName:"p"},"oauth_token")," which is named as ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," in the facebook response. For more\ndetails about the parameters checkout the generated documentation or\nvisit ",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php")),Object(r.b)("p",null,"5) The endpoint above should return the User and his Personal Access Token."),Object(r.b)("p",null,"Example Twitter Response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "object": "User",\n        "id": "YJ5evQ20Jyzx68dK",\n        "name": "John Doe",\n        "email": "john.doe@test.com",\n        "confirmed": null,\n        "nickname": null,\n        "gender": null,\n        "birth": null,\n        "social_auth_provider": "google",\n        "social_id": "113834952367767922133",\n        "social_avatar": {\n            "avatar": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n            "original": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n        },\n        "created_at": "2021-03-31T06:37:28.000000Z",\n        "updated_at": "2021-03-31T06:37:28.000000Z",\n        "readable_created_at": "1 second ago",\n        "readable_updated_at": "1 second ago"\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"support-new-auth-provide"},"Support new Auth Provider"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Instructions")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),Object(r.b)("p",{parentName:"div"},"1- Copy the container from ",Object(r.b)("inlineCode",{parentName:"p"},"Vendor")," to ",Object(r.b)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",Object(r.b)("br",{parentName:"p"}),"\n","2- Fix the namespaces",Object(r.b)("br",{parentName:"p"}),"\n","3- Remove ",Object(r.b)("inlineCode",{parentName:"p"},"apiato/social-auth-container")," dependency from project root composer.json  "))),Object(r.b)("p",null,"1) Pick an Auth Provider from the supported providers by ",Object(r.b)("a",{parentName:"p",href:"https://socialiteproviders.github.io/"},"Socialite"),".",Object(r.b)("br",{parentName:"p"}),"\n","2) Go to ",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/YourSection/Socialauth/Tasks/FindUserSocialProfileTask.php")," and support your provider."))}s.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?o.a.createElement(h,c(c({ref:t},p),{},{components:a})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);