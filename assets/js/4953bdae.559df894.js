(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(222)),s={title:"Transporters"},i={unversionedId:"main-components/transporters",id:"main-components/transporters",isDocsHomePage:!1,title:"Transporters",description:"- Definition & Principles",source:"@site/docs/main-components/transporters.md",slug:"/main-components/transporters",permalink:"/docs/next/main-components/transporters",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/transporters.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618494215,formattedLastUpdatedAt:"4/15/2021",sidebar:"docs",previous:{title:"Requests",permalink:"/docs/next/main-components/requests"},next:{title:"Actions",permalink:"/docs/next/main-components/actions"}},c=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]},{value:"Optionally switch between Requests and Transporters",id:"requests-and-transporters",children:[]},{value:"Set Data",id:"set-data",children:[]},{value:"Get Data",id:"get-data",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#requests-and-transporters"},"Requests and Transporters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#set-data"},"Set Data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#get-data"},"Get Data"))),Object(o.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(o.b)("p",null,"Transporters is a name chosen by Apiato for DTO's (Data Transfer Objects).\nTransporters are used to pass user data (coming from Requests, Commands, or other places) from place to another (Actions to Tasks / Controller to Action / Command to Action / ...)."),Object(o.b)("p",null,"They are very useful for reducing the number of parameters in functions, which prevents the duplication of the long parameters.   "),Object(o.b)("p",null,"Apiato uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fireproofsocks/dto"},"this package")," for the DTO. Refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fireproofsocks/dto/wiki"},"dto package wiki")," for more details."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Models MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Transporters\\Transporter"),".")),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n            - Data\n                - Transporters\n                    - CreateUserTransporter.php\n                    - ...\n")),Object(o.b)("h3",{id:"code-sample"},"Code Sample"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Transporter class")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\Authentication\\Transporters;\n\nuse App\\Ship\\Parents\\Transporters\\Transporter;\n\nclass ProxyApiLoginTransporter extends Transporter\n{\n\n    /**\n     * @var array\n     */\n    protected $schema = [\n        'properties' => [\n            'email',\n            'password',\n            'client_id',\n            'client_password',\n            'grant_type',\n            'scope',\n        ],\n        'required'   => [\n            'email',\n            'password',\n            'client_id',\n            'client_password',\n        ],\n        'default'    => [\n            'scope' => '',\n        ]\n    ];\n}\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage from Controller")),Object(o.b)("p",null,"Normally you would use it like this"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$dataTransporter = new DataTransporter($request);\n$dataTransporter->bearerToken = $request->bearerToken();\n\nApiato::call('Authentication@ApiLogoutAction', [$dataTransporter]);\n")),Object(o.b)("p",null,"Since this example above has some required data, that data must be sent to the constructor:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$dataTransporter = new ProxyApiLoginTransporter(\n    array_merge($request->all(), [\n        'client_id'       => Config::get('authentication-container.clients.web.admin.id'),\n        'client_password' => Config::get('authentication-container.clients.web.admin.secret')\n    ])\n);\n\n$result = Apiato::call('Authentication@ProxyApiLoginAction', [$dataTransporter]);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Creating a Transporter from Test")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$data = [\n    'foo' => 'bar'\n];\n\n$transporter = new DataTransporter($data);\n$action = App::make(RegisterUserAction::class);\n\n$user = $action->run($transporter);\n")),Object(o.b)("h3",{id:"requests-and-transporters"},"Optionally switch between Requests and Transporters"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// if you have the following function signature\npublic function run(DataTransporter $data)\n\n// you would pass a DataTransporter to it\n$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// if you have the following function signature\npublic function run(Request $data)\n\n// you would pass a Request to it\n$user = Apiato::call('MyContainer@myAction', [$request]);\n\n// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.\n")),Object(o.b)("p",null,"Here where the magic happens:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// if you have the following function signature\npublic function run(Request $data)\n\n// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work\n$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// if you have the following function signature\npublic function run(DataTransporter $data)\n\n// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work\n$user = Apiato::call('MyContainer@myAction', [$request]);\n\n// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.\n")),Object(o.b)("h4",{id:"transforming-a-request-to-a-transporter"},"Transforming a Request to a Transporter"),Object(o.b)("p",null,"If you want to directly transform a ",Object(o.b)("inlineCode",{parentName:"p"},"Request")," to a ",Object(o.b)("inlineCode",{parentName:"p"},"Transporter")," you can simply call"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$transporter = $request->toTransporter();\n")),Object(o.b)("p",null,"This method does take the ",Object(o.b)("inlineCode",{parentName:"p"},"protected $transporter")," of the ",Object(o.b)("inlineCode",{parentName:"p"},"Request")," class into account. If none is defined, a regular ",Object(o.b)("inlineCode",{parentName:"p"},"DataTransporter")," will be created."),Object(o.b)("p",null,"Note, that ",Object(o.b)("inlineCode",{parentName:"p"},"$transporter")," will now have all fields from ",Object(o.b)("inlineCode",{parentName:"p"},"$request")," - so you can directly access them. In order to do so,\nyou can call:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"// \"simple\" access via direct properties\n$name = $transporter->name;\n\n// complex access via method\n$username = $transporter->getInputByKey('your.nested.username.field');\n")),Object(o.b)("p",null,'Of course, you can also "sanitize" the data, like you would have done in the ',Object(o.b)("inlineCode",{parentName:"p"},"Request")," classes by using ",Object(o.b)("inlineCode",{parentName:"p"},"sanitizeInput(array)"),"."),Object(o.b)("p",null,"Finally, if you need to access the original ",Object(o.b)("inlineCode",{parentName:"p"},"Request")," object, you can access it via"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$originalRequest = $transporter->request;\n")),Object(o.b)("h3",{id:"set-data"},"Set Data"),Object(o.b)("p",null,"You can set data in many ways"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$dataTransporter = new DataTransporter($request);\n$dataTransporter->bearerToken = $request->bearerToken();\n")),Object(o.b)("p",null,"If the data is defined as required like this on the Transporter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"    protected $schema = [\n        'type' => 'object',\n        'properties' => [\n            'email',\n            'password',\n            'clientId',\n            'clientPassword',\n        ],\n        'required'   => [\n            'email',\n            'password',\n            'clientId',\n            'clientPassword',\n        ],\n    ];\n")),Object(o.b)("p",null,"Then can set data on the Transporter like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$dataTransporter = new ProxyApiLoginTransporter(\n    array_merge($request->all(), [\n        'clientId'       => Config::get('authentication-container.clients.web.admin.id'),\n        'clientPassword' => Config::get('authentication-container.clients.web.admin.secret')\n    ])\n);\n")),Object(o.b)("h4",{id:"set-instance"},"Set Instance"),Object(o.b)("p",null,"Passing Objects does not work!, because the third party package cannot hydrate it. So to pass instances from a place to\nanother on the Transporter object, you can do the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},'$transporter = new DataTransporter();\n$transporter->setInstance("command_instance", $this);\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," you can set instances, but they do not appear when calling ",Object(o.b)("inlineCode",{parentName:"p"},"toArray()")," or other similar functions, since\nthey cannot be hydrated. See below how you can get the instance form the Transporter object."),Object(o.b)("h4",{id:"get-instance"},"Get Instance:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$console = $data->command_instance;\n")),Object(o.b)("h3",{id:"get-data"},"Get Data"),Object(o.b)("p",null,"To get all data from the Transporter you can call ",Object(o.b)("inlineCode",{parentName:"p"},"$data->toArray()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"$data->toJson()"),"... there are many other functions on the class."),Object(o.b)("p",null,"To get specific data just call the data name, as you would when accessing data from a Request object ",Object(o.b)("inlineCode",{parentName:"p"},"$data->username"),"."))}l.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);