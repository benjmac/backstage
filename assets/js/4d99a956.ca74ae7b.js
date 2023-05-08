/*! For license information please see 4d99a956.ca74ae7b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[914268],{927081:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var t=n(824246),o=n(511151);const c={id:"core-components.dependencygraphprops.nodes",title:"DependencyGraphProps.nodes",description:"API reference for DependencyGraphProps.nodes"},s=void 0,u={unversionedId:"reference/core-components.dependencygraphprops.nodes",id:"reference/core-components.dependencygraphprops.nodes",title:"DependencyGraphProps.nodes",description:"API reference for DependencyGraphProps.nodes",source:"@site/../docs/reference/core-components.dependencygraphprops.nodes.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphprops.nodes",permalink:"/docs/reference/core-components.dependencygraphprops.nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphprops.nodes.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphprops.nodes",title:"DependencyGraphProps.nodes",description:"API reference for DependencyGraphProps.nodes"}},a={},i=[];function p(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,t.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphprops",children:(0,t.jsx)(r.code,{children:"DependencyGraphProps"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphprops.nodes",children:(0,t.jsx)(r.code,{children:"nodes"})})]}),"\n",(0,t.jsx)(r.p,{children:"Nodes of Graph"}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"nodes: Types.DependencyNode<NodeData>[];\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in c=Object(arguments[a]))n.call(c,i)&&(u[i]=c[i]);if(r){s=r(c);for(var p=0;p<s.length;p++)t.call(c,s[p])&&(u[s[p]]=c[s[p]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,c={},i=null,p=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)u.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:i,ref:p,props:c,_owner:s.current}}r.jsx=i,r.jsxs=i},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,u=60110,a=60112;r.Suspense=60113;var i=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),i=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function v(){}function _(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var g=_.prototype=new v;g.constructor=_,t(g,m.prototype),g.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,c={},s=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(c[t]=r[t]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var i=Array(a),p=0;p<a;p++)i[p]=arguments[p+2];c.children=i}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===c[t]&&(c[t]=a[t]);return{$$typeof:o,type:e,key:s,ref:u,props:c,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case c:a=!0}}if(a)return s=s(a=e),e=""===t?"."+S(a,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),x(s,r,n,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),r.push(s)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var p=t+S(u=e[i],i);a+=x(u,r,n,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),i=0;!(u=e.next()).done;)a+=x(u=u.value,r,n,p=t+S(u,i++),s);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function C(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var D={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:C,forEach:function(e,r,n){C(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=_,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var c=t({},e.props),s=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in r)j.call(r,p)&&!O.hasOwnProperty(p)&&(c[p]=void 0===r[p]&&void 0!==i?i[p]:r[p])}var p=arguments.length-2;if(1===p)c.children=n;else if(1<p){i=Array(p);for(var f=0;f<p;f++)i[f]=arguments[f+2];c.children=i}return{$$typeof:o,type:e.type,key:s,ref:u,props:c,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||s:c(e),t.createElement(o.Provider,{value:u},r)}}}]);