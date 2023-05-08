/*! For license information please see c949aeb4.708670a2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[256545],{446922:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=t(824246),u=t(511151);const o={id:"plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn"},c=void 0,s={unversionedId:"reference/plugin-kubernetes-backend.kubernetesbuilderreturn",id:"reference/plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn"}},i={},a=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,u.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",children:(0,n.jsx)(r.code,{children:"KubernetesBuilderReturn"})})]}),"\n",(0,n.jsxs)(r.p,{children:["The return type of the ",(0,n.jsx)(r.code,{children:"KubernetesBuilder.build"})," method"]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type KubernetesBuilderReturn = Promise<{\n    router: express.Router;\n    clusterSupplier: KubernetesClustersSupplier;\n    customResources: CustomResource[];\n    fetcher: KubernetesFetcher;\n    proxy: KubernetesProxy;\n    objectsProvider: KubernetesObjectsProvider;\n    serviceLocator: KubernetesServiceLocator;\n    authTranslatorMap: {\n        [key: string]: KubernetesAuthTranslator;\n    };\n}>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:["References:"," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.customresource",children:"CustomResource"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesfetcher",children:"KubernetesFetcher"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",children:"KubernetesProxy"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesobjectsprovider",children:"KubernetesObjectsProvider"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesservicelocator",children:"KubernetesServiceLocator"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesauthtranslator",children:"KubernetesAuthTranslator"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,u.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(u){return!1}}()?Object.assign:function(e,u){for(var o,c,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in o=Object(arguments[i]))t.call(o,a)&&(s[a]=o[a]);if(r){c=r(o);for(var l=0;l<c.length;l++)n.call(o,c[l])&&(s[c[l]]=o[c[l]])}}return s}},371426:(e,r,t)=>{t(862525);var n=t(827378),u=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;u=o("react.element"),r.Fragment=o("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,o={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:u,type:e,key:a,ref:l,props:o,_owner:c.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),u=60103,o=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,s=60110,i=60112;r.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;u=f("react.element"),o=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),s=f("react.context"),i=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||b}function k(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var m=v.prototype=new k;m.constructor=v,n(m,h.prototype),m.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,o={},c=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:s,props:o,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var S=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case o:i=!0}}if(i)return c=c(i=e),e=""===n?"."+w(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),R(c,r,t,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=n+w(s=e[a],a);i+=R(s,r,t,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)i+=R(s=s.value,r,t,l=n+w(s,a++),c);else if("object"===s)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function C(e,r,t){if(null==e)return e;var n=[],u=0;return R(e,n,"","",(function(e){return r.call(t,e,u++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var K={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var o=n({},e.props),c=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=g.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)_.call(r,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:s,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>s,ah:()=>o});var n=t(667294);const u=n.createContext({});function o(e){const r=n.useContext(u);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function s({components:e,children:r,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:o(e),n.createElement(u.Provider,{value:s},r)}}}]);