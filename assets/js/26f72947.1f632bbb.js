/*! For license information please see 26f72947.1f632bbb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[133710],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},840418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>l,toc:()=>p});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},c=void 0,l={unversionedId:"auth/bitbucket/provider",id:"auth/bitbucket/provider",title:"Bitbucket Authentication Provider",description:"Adding Bitbucket OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/bitbucket/provider.md",sourceDirName:"auth/bitbucket",slug:"/auth/bitbucket/provider",permalink:"/docs/auth/bitbucket/provider",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/bitbucket/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Azure Easy Auth",permalink:"/docs/auth/microsoft/easy-auth"},next:{title:"GitHub",permalink:"/docs/auth/github/provider"}},s={},p=[{value:"Create an OAuth Consumer in Bitbucket",id:"create-an-oauth-consumer-in-bitbucket",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Using Bitbucket for sign-in",id:"using-bitbucket-for-sign-in",level:2}],f={toc:p};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage ",(0,n.kt)("inlineCode",{parentName:"p"},"core-plugin-api")," package comes with a Bitbucket authentication\nprovider that can authenticate users using Bitbucket Cloud. This does ",(0,n.kt)("strong",{parentName:"p"},"NOT"),"\nwork with Bitbucket Server."),(0,n.kt)("h2",{id:"create-an-oauth-consumer-in-bitbucket"},"Create an OAuth Consumer in Bitbucket"),(0,n.kt)("p",null,"To add Bitbucket Cloud authentication, you must create an OAuth Consumer."),(0,n.kt)("p",null,"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://bitbucket.org/<your-project-name>/workspace/settings/api")," ."),(0,n.kt)("p",null,"Click Add Consumer."),(0,n.kt)("p",null,"Settings for local development:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application name: Backstage (or your custom app name)"),(0,n.kt)("li",{parentName:"ul"},"Callback URL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:7007/api/auth/bitbucket")),(0,n.kt)("li",{parentName:"ul"},"Other are optional"),(0,n.kt)("li",{parentName:"ul"},"(IMPORTANT) ",(0,n.kt)("strong",{parentName:"li"},"Permissions: Account - Read, Workspace membership - Read"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The provider configuration can then be added to your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," under the\nroot ",(0,n.kt)("inlineCode",{parentName:"p"},"auth")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  environment: development\n  providers:\n    bitbucket:\n      development:\n        clientId: ${AUTH_BITBUCKET_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_CLIENT_SECRET}\n")),(0,n.kt)("p",null,"The Bitbucket provider is a structure with two configuration keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientId"),": The Key that you generated in Bitbucket, e.g.\n",(0,n.kt)("inlineCode",{parentName:"li"},"b59241722e3c3b4816e2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientSecret"),": The Secret tied to the generated Key.")),(0,n.kt)("h2",{id:"adding-the-provider-to-the-backstage-frontend"},"Adding the provider to the Backstage frontend"),(0,n.kt)("p",null,"To add the provider to the frontend, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketAuthApi")," reference and\n",(0,n.kt)("inlineCode",{parentName:"p"},"SignInPage")," component as shown in\n",(0,n.kt)("a",{parentName:"p",href:"/docs/auth/#adding-the-provider-to-the-sign-in-page"},"Adding the provider to the sign-in page"),"."),(0,n.kt)("h2",{id:"using-bitbucket-for-sign-in"},"Using Bitbucket for sign-in"),(0,n.kt)("p",null,"In order to use the Bitbucket provider for sign-in, you must configure it with a\n",(0,n.kt)("inlineCode",{parentName:"p"},"signIn.resolver"),". See the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/auth/identity-resolver"},"Sign-In Resolver documentation")," for more details on\nhow this is done. Note that for the Bitbucket provider, you'll want to use\n",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucket")," as the provider ID, and ",(0,n.kt)("inlineCode",{parentName:"p"},"providers.bitbucket.create")," for the provider\nfactory."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-auth-backend")," plugin also comes with two built-in\nresolvers that can be used if desired. The first one is the\n",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketUsernameSignInResolver"),", which identifies users by matching their\nBitbucket username to ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucket.org/username")," annotations of ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," entities in\nthe catalog. Note that you must populate your catalog with matching entities or\nusers will not be able to sign in."),(0,n.kt)("p",null,"The second resolver is the ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketUserIdSignInResolver"),", which works the\nsame way, but uses the Bitbucket user ID instead, and matches on the\n",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucket.org/user-id")," annotation."),(0,n.kt)("p",null,"The following is an example of how to use one of the built-in resolvers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { providers } from '@backstage/plugin-auth-backend';\n\n// ...\n  providerFactories: {\n    bitbucket: providers.bitbucket.create({\n      signIn: {\n        resolver:\n          providers.bitbucket.resolvers.usernameMatchingUserEntityAnnotation(),\n      },\n    }),\n  },\n")))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))r.call(a,s)&&(c[s]=a[s]);if(t){u=t(a);for(var p=0;p<u.length;p++)n.call(a,u[p])&&(c[u[p]]=a[u[p]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var a=60109,u=60110,c=60112;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),u=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var g=y.prototype=new m;g.constructor=y,n(g,k.prototype),g.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,i={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+P(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+P(u=e[l],l);c+=S(u,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=S(u=u.value,t,r,s=n+P(u,l++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function T(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function A(){var e=_.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);