/*! For license information please see 08786f86.ddc0d64f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[541049],{615054:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=t(824246),a=t(511151);const o={id:"plugin-bazaar.isbazaaravailable",title:"isBazaarAvailable",description:"API reference for isBazaarAvailable"},i=void 0,u={unversionedId:"reference/plugin-bazaar.isbazaaravailable",id:"reference/plugin-bazaar.isbazaaravailable",title:"isBazaarAvailable",description:"API reference for isBazaarAvailable",source:"@site/../docs/reference/plugin-bazaar.isbazaaravailable.md",sourceDirName:"reference",slug:"/reference/plugin-bazaar.isbazaaravailable",permalink:"/docs/reference/plugin-bazaar.isbazaaravailable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-bazaar.isbazaaravailable.md",tags:[],version:"current",frontMatter:{id:"plugin-bazaar.isbazaaravailable",title:"isBazaarAvailable",description:"API reference for isBazaarAvailable"}},c={},s=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bazaar",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-bazaar"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-bazaar.isbazaaravailable",children:(0,n.jsx)(r.code,{children:"isBazaarAvailable"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"isBazaarAvailable: (entity: Entity, context: {\n    apis: ApiHolder;\n}) => Promise<boolean>\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var o,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in o=Object(arguments[c]))t.call(o,s)&&(u[s]=o[s]);if(r){i=r(o);for(var l=0;l<i.length;l++)n.call(o,i[l])&&(u[i[l]]=o[i[l]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),a=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),r.Fragment=o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,o={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:s,ref:l,props:o,_owner:i.current}}r.jsx=s,r.jsxs=s},541535:(e,r,t)=>{var n=t(862525),a=60103,o=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,c=60112;r.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),i=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||y}function h(){}function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var _=m.prototype=new h;_.constructor=m,n(_,v.prototype),_.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,o={},i=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!O.hasOwnProperty(n)&&(o[n]=r[n]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function z(e,r,t,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+x(c,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),z(i,r,t,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),r.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+x(u=e[s],s);c+=z(u,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)c+=z(u=u.value,r,t,l=n+x(u,s++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function E(e,r,t){if(null==e)return e;var n=[],a=0;return z(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=v,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var o=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=g.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)j.call(r,l)&&!O.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>o});var n=t(667294);const a=n.createContext({});function o(e){const r=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||i:o(e),n.createElement(a.Provider,{value:u},r)}}}]);