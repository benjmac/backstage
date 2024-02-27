/*! For license information please see 2b256da2.3f568173.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[856934],{126329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>i});var r=t(824246),o=t(511151);const u={id:"plugin-sonarqube-backend.sonarqubeinstanceconfig.name",title:"SonarqubeInstanceConfig.name",description:"API reference for SonarqubeInstanceConfig.name"},a=void 0,c={id:"reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name",title:"SonarqubeInstanceConfig.name",description:"API reference for SonarqubeInstanceConfig.name",source:"@site/../docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name.md",sourceDirName:"reference",slug:"/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name",permalink:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name.md",tags:[],version:"current",frontMatter:{id:"plugin-sonarqube-backend.sonarqubeinstanceconfig.name",title:"SonarqubeInstanceConfig.name",description:"API reference for SonarqubeInstanceConfig.name"}},s={},i=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-sonarqube-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig",children:(0,r.jsx)(n.code,{children:"SonarqubeInstanceConfig"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig.name",children:(0,r.jsx)(n.code,{children:"name"})})]}),"\n",(0,r.jsx)(n.p,{children:"Name of the instance. An instance name in configuration and catalog should match."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"name: string;\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,u={},i=null,f=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(f=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:c.current}}n.Fragment=u,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function _(){}function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var v=g.prototype=new _;v.constructor=g,b(v,h.prototype),v.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,r){var o,u={},a=null,c=null;if(null!=n)for(o in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)S.call(n,o)&&!x.hasOwnProperty(o)&&(u[o]=n[o]);var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:c,props:u,_owner:j.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return a=a(s=e),e=""===u?"."+w(s,0):u,k(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(a,n,o,"",(function(e){return e}))):null!=a&&(q(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),n.push(a)),1;if(s=0,u=""===u?".":u+":",k(e))for(var i=0;i<e.length;i++){var f=u+w(c=e[i],i);s+=R(c,n,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(c=e.next()).done;)s+=R(c=c.value,n,o,f=u+w(c,i++),a);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:P,ReactCurrentOwner:j};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!q(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=a,n.PureComponent=g,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,c=j.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in n)S.call(n,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===n[i]&&void 0!==s?s[i]:n[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){s=Array(i);for(var f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:a,props:o,_owner:c}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=q,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=P.transition;P.transition={};try{e()}finally{P.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(667294);const o={},u=r.createContext(o);function a(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);