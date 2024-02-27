/*! For license information please see 40463831.a769c9e4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[934171],{213335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(824246),o=n(511151);const i={id:"index",title:"Backstage Accessibility",description:"Documentation on Backstage Accessibility"},s=void 0,a={id:"accessibility/index",title:"Backstage Accessibility",description:"Documentation on Backstage Accessibility",source:"@site/../docs/accessibility/index.md",sourceDirName:"accessibility",slug:"/accessibility/",permalink:"/docs/accessibility/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/accessibility/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Backstage Accessibility",description:"Documentation on Backstage Accessibility"},sidebar:"docs",previous:{title:"Technical FAQ",permalink:"/docs/faq/technical"},next:{title:"Glossary",permalink:"/docs/references/glossary"}},u={},c=[{value:"How to contribute",id:"how-to-contribute",level:2},{value:"Run Lighthouse in CI on your plugin",id:"run-lighthouse-in-ci-on-your-plugin",level:3},{value:"Run the Lighthouse CLI locally when developing new features",id:"run-the-lighthouse-cli-locally-when-developing-new-features",level:3},{value:"Use Lighthouse Github Action on your own repo",id:"use-lighthouse-github-action-on-your-own-repo",level:3},{value:"Report identified issues",id:"report-identified-issues",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In an effort to bake accessibility practices further into our process of building features for Backstage, we support automated CI tests for some of our core features in the OSS project: Software Catalog, Software Templates, Search, and TechDocs. As these are just a few of the many plugins out there, we encourage you to consider the accessibility implications of your work on Backstage in order to build a great experience for everyone."}),"\n",(0,r.jsx)(t.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,r.jsx)(t.p,{children:"There are multiple ways to contribute to making Backstage more accessible, you'll find below a list of examples to help you get started."}),"\n",(0,r.jsx)(t.h3,{id:"run-lighthouse-in-ci-on-your-plugin",children:"Run Lighthouse in CI on your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["If your plugin lives in the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/",children:"Backstage main repository"})," you can modify the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/39ba2284d73885b7ca8290cb38e2b1e4d983c8d6/lighthouserc.js#L19-L34",children:"urls in the Lighthouse config"})," to run the Lighthouse checks on urls where your plugin exists as well. E.g."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"  ci: {\n     collect: {\n       url: [\n         /** Software Catalog */\n         'http://localhost:3000/catalog',\n         'http://localhost:3000/catalog-import',\n         'http://localhost:3000/catalog/default/component/backstage',\n         ...\n+        /** Your plugin paths */\n+        'http://localhost:3000/your-plugin-path,\n       ],\n       settings: {\n        ...\n       },\n      ...\n     },\n     assert: {\n       ...\n     },\n   },\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To make sure the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/.github/workflows/verify_accessibility.yml",children:"Accessibility GitHub workflow"})," is running when changes are made to your plugin folders, modify the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/10759b6ad2561bd86183ad940256f9a309c7a6b0/.github/workflows/verify_accessibility.yml#L7-L16",children:"list of paths"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"run-the-lighthouse-cli-locally-when-developing-new-features",children:"Run the Lighthouse CLI locally when developing new features"}),"\n",(0,r.jsx)(t.p,{children:"If you want to use the Lighthouse CLI and run the checks based on the config you can use the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn dlx @lhci/cli@0.11.x autorun\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: running this command will use the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/39ba2284d73885b7ca8290cb38e2b1e4d983c8d6/lighthouserc.js#L19-L34",children:"Lighthouse config"})," so make sure to adjust it to your needs if needed."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"use-lighthouse-github-action-on-your-own-repo",children:"Use Lighthouse Github Action on your own repo"}),"\n",(0,r.jsxs)(t.p,{children:["If your Backstage plugin lives outside of the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/",children:"Backstage main repository"}),", and you use GitHub Actions for continuous integration, we encourage you to add and modify the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/.github/workflows/verify_accessibility.yml",children:"Accessibility GitHub workflow"})," to your needs."]}),"\n",(0,r.jsx)(t.h3,{id:"report-identified-issues",children:"Report identified issues"}),"\n",(0,r.jsx)(t.p,{children:"It\u2019s important to remember that automated checks can only catch a small number of accessibility issues, therefore we also encourage you to conduct manual testing of your plugins using Assistive technology (screen readers, alternative navigation, and screen magnifiers are a few examples)."}),"\n",(0,r.jsxs)(t.p,{children:["If you have identified accessibility issues and don\u2019t have time to contribute a fix, please open an issue over at ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues",children:"Backstage Issues"})," to let us know."]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||d}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=k.prototype=new m;v.constructor=k,y(v,g.prototype),v.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===i?"."+E(u,0):i,w(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),L(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var l=i+E(a=e[c],c);u+=L(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=L(a=a.value,t,o,l=i+E(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function I(e,t,n){if(null==e)return e;var r=[],o=0;return L(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},A={transition:null},P={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:A,ReactCurrentOwner:x};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=s,t.PureComponent=k,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);