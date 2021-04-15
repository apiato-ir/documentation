(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(222)),o={title:"Authentication"},s={unversionedId:"features/authentication",id:"features/authentication",isDocsHomePage:!1,title:"Authentication",description:"- API Authentication (OAuth 2.0)",source:"@site/docs/features/authentication.md",slug:"/features/authentication",permalink:"/docs/next/features/authentication",editUrl:"https://github.com/apiato/documentation/tree/master/docs/features/authentication.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618494215,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"API Docs Generator",permalink:"/docs/next/features/api-docs-generator"},next:{title:"Authorization",permalink:"/docs/next/features/authorization"}},l=[{value:"API Authentication (OAuth 2.0)",id:"api-authentication-oauth-20",children:[]},{value:"How to get Access Token using OAuth 2.0",id:"how-to-get-access-token-using-oauth-20",children:[]},{value:"Quick Overview",id:"quick-overview",children:[]},{value:"A: For first-party clients",id:"first-party-clients",children:[{value:"Login with Proxy for first-party clients",id:"login-with-proxy-for-first-party-clients",children:[]},{value:"Login without Proxy for first-party clients",id:"login-without-proxy-for-first-party-clients",children:[]}]},{value:"B: For third-party clients",id:"third-party-clients",children:[{value:"Login without Proxy for third-party clients",id:"login-without-proxy-for-third-party-clients",children:[]}]},{value:"Login With Custom Attributes",id:"login-with-custom-attributes",children:[]},{value:"Logout",id:"logout",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Change Tokens Expiration dates",id:"change-tokens-expiration-dates",children:[]},{value:"Web Authentication",id:"web-authentication",children:[]},{value:"Refresh Token",id:"refresh-token",children:[{value:"Refresh Token with proxy for first-party clients",id:"refresh-token-with-proxy-for-first-party-clients",children:[]},{value:"Refresh Token without proxy for first-party or third-party clients",id:"refresh-token-without-proxy-for-first-party-or-third-party-clients",children:[]}]},{value:"Force Email Confirmation",id:"force-email-confirmation",children:[]},{value:"Reset Password",id:"reset-password",children:[]},{value:"Social Authentication",id:"social-authentication",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#api-authentication-oauth-20"},"API Authentication (OAuth 2.0)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#quick-overview"},"Quick Overview"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#first-party-clients"},"A: For first-party clients"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#third-party-clients"},"B: For third-party clients"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients")))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#login-with-custom-attributes"},"Login With Custom Attributes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#logout"},"Logout")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#responses"},"Responses")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#change-tokens-expiration-dates"},"Change Tokens Expiration dates")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#web-authentication"},"Web Authentication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#refresh-token"},"Refresh Token"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#force-email-confirmation"},"Force Email Confirmation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#reset-password"},"Reset Password")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#social-authentication"},"Social Authentication"))),Object(r.b)("p",null,"Middlewares are the best solution to apply Authentication in your App."),Object(r.b)("p",null,"In Apiato you can use these two ",Object(r.b)("inlineCode",{parentName:"p"},"Authentication Middlewares"),", to protect your endpoints:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"API Authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"auth:api")),Object(r.b)("li",{parentName:"ul"},"Web Authentication: ",Object(r.b)("inlineCode",{parentName:"li"},"auth:web"))),Object(r.b)("h2",{id:"api-authentication-oauth-20"},"API Authentication (OAuth 2.0)"),Object(r.b)("p",null,"To protect an ",Object(r.b)("strong",{parentName:"p"},"API")," Endpoint from being accessible by unauthenticated users you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"auth:api")," Middleware."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$router->get('secret/info', [\n    'uses'       => 'Controller@getSecretInfo',\n    'middleware' => [\n        'auth:api',\n    ],\n]);\n\n")),Object(r.b)("p",null,"All Endpoints protected with ",Object(r.b)("inlineCode",{parentName:"p"},"auth:api")," are accessible only when sending them a valid access token."),Object(r.b)("p",null,"This Middleware is provided by the ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/passport"},"Laravel Passport")," package. So you can read its\ndocumentation for more details."),Object(r.b)("h2",{id:"how-to-get-access-token-using-oauth-20"},"How to get Access Token using OAuth 2.0"),Object(r.b)("p",null,"1) Generate ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," & ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),'. Continue reading below for details "For first-party clients".'),Object(r.b)("p",null,"2) Use the generated client to call this oauth/token endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")),Object(r.b)("p",null,"All the Auth Endpoints are documented. Go to ",Object(r.b)("a",{parentName:"p",href:"../features/api-docs-generator"},"Documentation Generator Page"),"\nto see how you can generate the API documentation, and read them."),Object(r.b)("h2",{id:"quick-overview"},"Quick Overview"),Object(r.b)("p",null,"OAuth lets you authenticate using different methods, these methods are called ",Object(r.b)("inlineCode",{parentName:"p"},"grants"),".\nHow to decide which grant type you should use! Check ",Object(r.b)("a",{parentName:"p",href:"https://oauth2.thephpleague.com/authorization-server/which-grant/"},"this"),",\nand keep reading this documentation."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Definitions:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Client credentials: are the ",Object(r.b)("inlineCode",{parentName:"li"},"client_id")," & ",Object(r.b)("inlineCode",{parentName:"li"},"client_secret"),"."),Object(r.b)("li",{parentName:"ul"},"The Proxy: is just an endpoint, that you should call instead of calling the Auth server endpoints directly, the proxy\nendpoint will append the client credentials to your request and calls the Auth server for you, then return its response back. Each first-client app should have its own proxy endpoints (at least one of Login and one of Token Refresh). By default, Apiato provide an ",Object(r.b)("inlineCode",{parentName:"li"},"Admin Web Client")," endpoints.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can Log in to the first party app with proxy or without proxy, while for the third party you only need to log in\nwithout proxy. (same apply to refreshing token)."),Object(r.b)("p",{parentName:"blockquote"},"For first party apps:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"With Proxy << best and easiest way, (requires manually generating clients creating proxy endpoints for each client)"),Object(r.b)("li",{parentName:"ul"},"Without Proxy << if your frontend is not exposing the client credentials, you can call the Auth server endpoints directly without proxy.")),Object(r.b)("p",{parentName:"blockquote"},"For third party apps:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Without Proxy << you don't need a proxy for the third party clients as they usually integrate with your API from the backend side which protects the client credentials."))),Object(r.b)("h2",{id:"first-party-clients"},"A: For first-party clients"),Object(r.b)("p",null,"First-party clients (Your Frontend Mobile, Web,... Apps) usually consumes your private API (Internal API)."),Object(r.b)("p",null,"For first-party clients you need to use the ",Object(r.b)("strong",{parentName:"p"},"Resource owner credentials grant")," (A.K.A. Password Grant Tokens)."),Object(r.b)("p",null,"When this grant type is used, your server needs to authenticate the Client App first (ensuring the request is coming\nfrom your trusted frontend App) and then needs to check if the user credentials are correct (ensuring the user is\nregistered and has the right access), before issuing an access token."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On register: the API returns user data. You will need to log that user in (using the same credentials he passed) to\nget his Access Token and make other API calls."),Object(r.b)("li",{parentName:"ul"},"On login: the API returns the user Access Token with Refresh Token. You will need to request the User data by making\nanother call to the user endpoint, using his Access Token.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"How it works:")),Object(r.b)("p",null,"1) Create a password type Client in your database to represent one of your Apps (ex: Mobile App). Use\n",Object(r.b)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate the client."),Object(r.b)("p",null,"2) After registration, the user can enter his (username + password) in your App login screen."),Object(r.b)("p",null,"3) Your App should send a ",Object(r.b)("strong",{parentName:"p"},"Post")," request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the user credentials\n(",Object(r.b)("inlineCode",{parentName:"p"},"username")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password"),") and the client credentials (",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),") in addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"scope"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"grant_type=password"),":"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Request:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'username=admin%40admin.com&password=admin&client_id=2&client_secret=SGUVv02b1ppQCgI7ZVeoTZDN6z8SSFLYiMOzzfiE&grant_type=password&scope='\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Response:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31536000,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",\n  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."\n}\n')),Object(r.b)("p",null,"4) Your Client App should save the Tokens and start requesting secure data, by sending the Access Token in the HTTP\nHeader ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),Object(r.b)("p",null,"More info at ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/passport#password-grant-tokens"},"Laravel Passport Here")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"WARNING: the Client ID and Secret should not be stored in JavaScript or browser cache, or made accessible in any way.")),Object(r.b)("p",null,"So in case of Web Apps (JavaScript) you need to hide your client credentials behind a proxy. Apiato by default\nprovides you with a Login Proxy to use for all your trusted first party clients. We'll see below how you can use them."),Object(r.b)("h3",{id:"login-with-proxy-for-first-party-clients"},"Login with Proxy for first-party clients"),Object(r.b)("p",null,"Concept: create an endpoint for each trusted client, to be used for a login."),Object(r.b)("p",null,"Apiato by default has one url ready for your Web Admin Dashboard ",Object(r.b)("inlineCode",{parentName:"p"},"clients/web/admin/login"),". You can add more as you\nneed for each of your trusted first party clients Apps (example: ",Object(r.b)("inlineCode",{parentName:"p"},"clients/web/users/login"),", ",Object(r.b)("inlineCode",{parentName:"p"},"clients/mobile/users/login"),")."),Object(r.b)("p",null,"Behind the scene, that endpoint is appending the corresponding client ID and Secret to your request and making another\ncall to your Auth server with all the required data. ",Object(r.b)("em",{parentName:"p"},"(this way the client does not need to send the ID and Secret with\nthe request, and he is using his own URL which gives even more control to which client is accessing your Server)"),". Then\nit returns the Auth response back to the client with the Tokens in it."),Object(r.b)("p",null,"Note: You have to manually extract the Client credentials from the DB and put them in the ",Object(r.b)("inlineCode",{parentName:"p"},".env"),", for each client."),Object(r.b)("p",null,"When running ",Object(r.b)("inlineCode",{parentName:"p"},"passport:install")," it automatically creates one client for you with ID 2, so you can use that for your\nfirst app. Or you can use ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan passport:client --password")," to generate them."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".env")," Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"CLIENT_WEB_ADMIN_ID=2\nCLIENT_WEB_ADMIN_SECRET=VkjYCUk5DUexJTE9yFAakytWCOqbShLgu9Ql67TI\n")),Object(r.b)("h3",{id:"login-without-proxy-for-first-party-clients"},"Login without Proxy for first-party clients"),Object(r.b)("p",null,"Login from your App by sending a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",Object(r.b)("inlineCode",{parentName:"p"},"grant_type=password"),",\nthe User credentials (",Object(r.b)("inlineCode",{parentName:"p"},"username")," & ",Object(r.b)("inlineCode",{parentName:"p"},"password"),"), Client Credentials (",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," & ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),") and finally the\n",Object(r.b)("inlineCode",{parentName:"p"},"scope")," which could be empty."),Object(r.b)("h2",{id:"third-party-clients"},"B: For third-party clients"),Object(r.b)("p",null,"Third party clients (User's custom external Apps, who wants to integrate with your Software) always consumes your\npublic API (External API) only."),Object(r.b)("p",null,"For third-party clients you need to use the ",Object(r.b)("strong",{parentName:"p"},"Client credentials grant")," (A.K.A. Personal Access Tokens). ",Object(r.b)("em",{parentName:"p"},"This grant\ntype is the simplest and is suitable for machine-to-machine authentication.")),Object(r.b)("p",null,"With this grant type your server needs to authenticate the Client App only, before issuing an access token."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"How it works")),Object(r.b)("p",null,"1) User logs in to your Clients App Interface (an external App made for your users only), go to settings, create Client\n(of type ",Object(r.b)("inlineCode",{parentName:"p"},"personal"),") and copy the ID and Secret. ",Object(r.b)("em",{parentName:"p"},"(Note this can be done via an API if you prefer)")),Object(r.b)("p",null,"You may generate a personal client for testing purposes using ",Object(r.b)("inlineCode",{parentName:"p"},"php artisan passport:client --personal"),"."),Object(r.b)("p",null,'2) User add the Client credentials to his "Server Side software" and send a ',Object(r.b)("strong",{parentName:"p"},"Post")," request to\n",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," containing the Client credentials (",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),") in\naddition to the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),":"),Object(r.b)("p",null,"Request:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url http://api.apiato.test/v1/oauth/token \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'client_id=1&client_secret=y1RbtnOvh9rpA91zPI2tiVKmFlepNy9dhHkzUKle&grant_type=client_credentials&scope='\n")),Object(r.b)("p",null,"Response:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31536000,\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1Ni...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),Object(r.b)("p",null,"3) The Client will be granted an Access Token to be saved. Then the Client can start requesting secure data, by sending\nthe Access Token in the HTTP Header ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization = Bearer {Access-Token}"),"."),Object(r.b)("p",null,'Note: When a new user is registered, will be issued a personal Access Token automatically. Check the User\n"Registration page".'),Object(r.b)("p",null,"More info at ",Object(r.b)("a",{parentName:"p",href:"https://laravel.com/docs/master/passport#personal-access-tokens"},"Laravel Passport Here")),Object(r.b)("h3",{id:"login-without-proxy-for-third-party-clients"},"Login without Proxy for third-party clients"),Object(r.b)("p",null,"We usually do not need a proxy for third-party clients as they are most likely making calls form their servers, thus\nthe Client ID and Secret should be secure and not exposed to the users."),Object(r.b)("p",null,"Login by sending a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," with ",Object(r.b)("inlineCode",{parentName:"p"},"grant_type=client_credentials"),",\nClient Credentials (",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," & ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),") and finally the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," which could be empty."),Object(r.b)("p",null,"Once issued, you can use that Access Token to make requests to protected resources (Endpoints).\nThe Access Token should be sent in the ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization")," header of type ",Object(r.b)("inlineCode",{parentName:"p"},"Bearer"),"\n(Example: ",Object(r.b)("inlineCode",{parentName:"p"},"Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz..."),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Keep in mind there's no session state when using Tokens for Authentication")),Object(r.b)("h2",{id:"login-with-custom-attributes"},"Login With Custom Attributes"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This feature is supported with Apiato 7.4.")),Object(r.b)("p",null,"By default, Apiato allows ",Object(r.b)("inlineCode",{parentName:"p"},"User"),"s to log in with their ",Object(r.b)("inlineCode",{parentName:"p"},"email")," address. However, you may want to also allow ",Object(r.b)("inlineCode",{parentName:"p"},"username"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"phone")," to login your users."),Object(r.b)("p",null,"Here is, how to configure and use this feature."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You may need to adapt your database accordingly (e.g., add the respective field to the ",Object(r.b)("inlineCode",{parentName:"li"},"users")," table)."),Object(r.b)("li",{parentName:"ul"},"You may need to adapt the ",Object(r.b)("inlineCode",{parentName:"li"},"Task")," that ",Object(r.b)("inlineCode",{parentName:"li"},"create")," a ",Object(r.b)("inlineCode",{parentName:"li"},"User")," object (e.g., the ",Object(r.b)("inlineCode",{parentName:"li"},"CreateUserByCredentialsTask"),") accordingly\nto support the new fields. This may also affect your ",Object(r.b)("inlineCode",{parentName:"li"},"Register")," logic."),Object(r.b)("li",{parentName:"ul"},"Check the ",Object(r.b)("inlineCode",{parentName:"li"},"App\\Containers\\Authentication\\Configs\\authentication-container")," Configuration file and check the ",Object(r.b)("inlineCode",{parentName:"li"},"login"),"\nparams in order to configure this feature."),Object(r.b)("li",{parentName:"ul"},"Adapt the ",Object(r.b)("inlineCode",{parentName:"li"},"ProxyApiLoginTransporter")," accordingly to support your new Login Fields. These fields need to be added\nto ",Object(r.b)("inlineCode",{parentName:"li"},"properties"))),Object(r.b)("h2",{id:"logout"},"Logout"),Object(r.b)("p",null,"Logout by sending a ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/logout/")," containing the Token in the Header."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Token revoked successfully."\n}\n')),Object(r.b)("h2",{id:"responses"},"Responses"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Authentication failed JSON response:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": "Missing or invalid Access Token!",\n  "status_code": 403,\n  "message": "Unauthenticated."\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Wrong Client ID or Secret:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "invalid_client",\n  "message": "Client authentication failed"\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Access Correct:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31500,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),Object(r.b)("h2",{id:"change-tokens-expiration-dates"},"Change Tokens Expiration dates"),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file and edit this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"/*\n|--------------------------------------------------------------------------\n| Access Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'expires-in' => env('API_TOKEN_EXPIRES', 3650),\n\n/*\n|--------------------------------------------------------------------------\n| Refresh Token Expiration\n|--------------------------------------------------------------------------\n|\n| In Days. Default to 3650 days = 10 years\n|\n*/\n'refresh-expires-in' => env('API_REFRESH_TOKEN_EXPIRES', 3650),\n")),Object(r.b)("p",null,"To change from days to minutes you need to edit the ",Object(r.b)("inlineCode",{parentName:"p"},"boot")," function in ",Object(r.b)("inlineCode",{parentName:"p"},"App\\Containers\\Authentication\\Providers\\AuthProvider"),"."),Object(r.b)("h2",{id:"web-authentication"},"Web Authentication"),Object(r.b)("p",null,"To protect an ",Object(r.b)("strong",{parentName:"p"},"Web")," Endpoint from being accessible by unauthenticated users you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"auth:web")," Middleware."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$router->get('private/page', [\n    'uses'       => 'Controller@showPrivatePage',\n    'middleware' => [\n        'auth:web',\n    ],\n]);\n")),Object(r.b)("p",null,"This Middleware is provided by apiato and is different from the default Laravel Auth Middleware."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"If authentication failed, users will be redirected to a login page")),Object(r.b)("p",null,"To change the login page view go to the config file ",Object(r.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php"),", and set the name of your login page there as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"/*\n|--------------------------------------------------------------------------\n| The Login Page URL\n|--------------------------------------------------------------------------\n*/\n\n'login-page-url' => 'login',\n")),Object(r.b)("p",null,"This will be looking for (login.html or login.php or login.blade.php)."),Object(r.b)("h2",{id:"refresh-token"},"Refresh Token"),Object(r.b)("p",null,"In case your server is issuing a short-lived access tokens, the users will need to refresh their access tokens via the\nrefresh token that was provided to them when the access token was issued."),Object(r.b)("h3",{id:"refresh-token-with-proxy-for-first-party-clients"},"Refresh Token with proxy for first-party clients"),Object(r.b)("p",null,"By default, Apiato provide this ready endpoint ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/clients/web/admin/refresh")," for the Web\nAdmin Dashboard Client  to be used when you need to refresh token for that client. You can of course create as many\nother endpoints as you want for each client. See the code of (",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/Authentication/UI/API/Routes/ProxyRefreshForAdminWebClient.v1.public.php"),")\nand create similar one for each client. The most important change will be the ",Object(r.b)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_ADMIN_ID')")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"env('CLIENT_WEB_ADMIN_SECRET'),")," passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"ProxyApiRefreshAction"),"."),Object(r.b)("p",null,"Those proxy refresh endpoints work in 2 ways. Either by passing the ",Object(r.b)("inlineCode",{parentName:"p"},"refresh_token")," manually to the endpoint. Or by\npassing it with the HttpCookie. In both cases the code will work, and the server will reply with a response similar to this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "token_type": "Bearer",\n  "expires_in": 31500,\n  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",\n  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."\n}\n')),Object(r.b)("p",null,"Containing new Access Token and new Refresh Token."),Object(r.b)("h3",{id:"refresh-token-without-proxy-for-first-party-or-third-party-clients"},"Refresh Token without proxy for first-party or third-party clients"),Object(r.b)("p",null,"The request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/oauth/token")," should contain ",Object(r.b)("inlineCode",{parentName:"p"},"grant_type=refresh_token"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," &\n",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),", in addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"refresh_token")," and finally the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," which could be empty."),Object(r.b)("h2",{id:"force-email-confirmation"},"Force Email Confirmation"),Object(r.b)("p",null,"By default, a user does not have to confirm his email address to be able to login.\nHowever, to force users to confirm their email (prevent unconfirmed users from accessing the site), you can set\n",Object(r.b)("inlineCode",{parentName:"p"},"'require_email_confirmation' => true,")," in ",Object(r.b)("inlineCode",{parentName:"p"},"App\\Containers\\Authentication\\Configs\\authentication.php"),"."),Object(r.b)("p",null,"When email confirmation is enabled (value set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"), the API throws an exception, if the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," is not yet ",Object(r.b)("inlineCode",{parentName:"p"},"confirmed"),"."),Object(r.b)("h2",{id:"reset-password"},"Reset Password"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"/password-forgot")," (",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/User/UI/API/Routes/ForgotPassword.v1.public.php"),")\nand ",Object(r.b)("inlineCode",{parentName:"p"},"/password-reset"),"  (",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/User/UI/API/Routes/ResetPassword.v1.public.php"),")  endpoints."),Object(r.b)("p",null,"First you need to send a request to the ",Object(r.b)("inlineCode",{parentName:"p"},"/password-forgot")," endpoint.\nIt will send you an email with a link when you make a request to that link, it will call the ",Object(r.b)("inlineCode",{parentName:"p"},"/password-reset")," endpoint."),Object(r.b)("p",null,"Note: For security reason, make sure the reset password URL is set in ",Object(r.b)("inlineCode",{parentName:"p"},"app/Containers/User/Configs/user-container.php"),",\nand given to the client App, to be sent as parameter when calling the ",Object(r.b)("inlineCode",{parentName:"p"},"/password-forgot"),"."),Object(r.b)("p",null,"Note: You must set up the email to get this function to work, however for testing purposes set the ",Object(r.b)("inlineCode",{parentName:"p"},"MAIL_DRIVER=log")," in\nyour ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file in order to the see the email content in the log file ",Object(r.b)("inlineCode",{parentName:"p"},"laravel.log"),"."),Object(r.b)("h2",{id:"social-authentication"},"Social Authentication"),Object(r.b)("p",null,"For Social Authentication visit the ",Object(r.b)("a",{parentName:"p",href:"../features/social-authentication"},"Social Authentication")," page."))}p.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||r;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);