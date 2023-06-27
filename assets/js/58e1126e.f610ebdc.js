/*! For license information please see 58e1126e.f610ebdc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[559375],{302830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(824246),i=r(511151);const s={id:"plugin-cicd-statistics.fetchbuildsoptions",title:"FetchBuildsOptions",description:"API reference for FetchBuildsOptions"},o=void 0,c={unversionedId:"reference/plugin-cicd-statistics.fetchbuildsoptions",id:"reference/plugin-cicd-statistics.fetchbuildsoptions",title:"FetchBuildsOptions",description:"API reference for FetchBuildsOptions",source:"@site/../docs/reference/plugin-cicd-statistics.fetchbuildsoptions.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics.fetchbuildsoptions",permalink:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.fetchbuildsoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics.fetchbuildsoptions",title:"FetchBuildsOptions",description:"API reference for FetchBuildsOptions"}},l={},u=[{value:"Properties",id:"properties",level:2}];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-cicd-statistics"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions",children:(0,n.jsx)(t.code,{children:"FetchBuildsOptions"})})]}),"\n",(0,n.jsxs)(t.p,{children:["When fetching, the Api should fetch build information about the ",(0,n.jsx)(t.code,{children:"entity"})," and respect the ",(0,n.jsx)(t.code,{children:"timeFrom"}),", ",(0,n.jsx)(t.code,{children:"timeTo"}),", ",(0,n.jsx)(t.code,{children:"filterStatus"})," and ",(0,n.jsx)(t.code,{children:"filterType"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Optionally implement support for ",(0,n.jsx)(t.code,{children:"updateProgress"})," and ",(0,n.jsx)(t.code,{children:"abortSignal"})," if preferred."]}),"\n",(0,n.jsxs)(t.p,{children:["When the UI re-fetches, it will abort any previous fetching, so polling ",(0,n.jsx)(t.code,{children:"abortSignal.aborted"}),", and possibly throwing an ",(0,n.jsx)(t.code,{children:"AbortError"}),", can be useful."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface FetchBuildsOptions \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.abortsignal",children:"abortSignal"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"AbortSignal"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.entity",children:"entity"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.filterstatus",children:"filterStatus"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Array<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.filterstatustype",children:"FilterStatusType"})," | 'all'>"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.filtertype",children:"filterType"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.filterbranchtype",children:"FilterBranchType"})," | 'all'"]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.timefrom",children:"timeFrom"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Date"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.timeto",children:"timeTo"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Date"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.fetchbuildsoptions.updateprogress",children:"updateProgress"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-cicd-statistics.updateprogress",children:"UpdateProgress"})}),(0,n.jsx)(t.td,{})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var s,o,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in s=Object(arguments[l]))r.call(s,u)&&(c[u]=s[u]);if(t){o=t(s);for(var a=0;a<o.length;a++)n.call(s,o[a])&&(c[o[a]]=s[o[a]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),t.Fragment=s("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,a=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:a,props:s,_owner:o.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),i=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,c=60110,l=60112;t.Suspense=60113;var u=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),c=d("react.context"),l=d("react.forward_ref"),t.Suspense=d("react.suspense"),u=d("react.memo"),a=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function j(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function x(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var g=b.prototype=new x;g.constructor=b,n(g,j.prototype),g.isPureReactComponent=!0;var m={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,s={},o=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!_.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){for(var u=Array(l),a=0;a<l;a++)u[a]=arguments[a+2];s.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===s[n]&&(s[n]=l[n]);return{$$typeof:i,type:e,key:o,ref:c,props:s,_owner:m.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var w=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case s:l=!0}}if(l)return o=o(l=e),e=""===n?"."+k(l,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),P(o,t,r,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var a=n+k(c=e[u],u);l+=P(c,t,r,a,o)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),u=0;!(c=e.next()).done;)l+=P(c=c.value,t,r,a=n+k(c,u++),o);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,r){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(p(321));return e}var F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=j,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var s=n({},e.props),o=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=m.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)v.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){u=Array(a);for(var d=0;d<a;d++)u[d]=arguments[d+2];s.children=u}return{$$typeof:i,type:e.type,key:o,ref:c,props:s,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>s});var n=r(667294);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||o:s(e),n.createElement(i.Provider,{value:c},t)}}}]);