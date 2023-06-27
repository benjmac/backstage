/*! For license information please see 79cec63f.7519d21b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[543111],{979084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"},s=void 0,c={unversionedId:"reference/plugin-scaffolder-backend.creategithubrepopushaction",id:"reference/plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()",source:"@site/../docs/reference/plugin-scaffolder-backend.creategithubrepopushaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.creategithubrepopushaction",permalink:"/docs/reference/plugin-scaffolder-backend.creategithubrepopushaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.creategithubrepopushaction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend.creategithubrepopushaction",title:"createGithubRepoPushAction()",description:"API reference for createGithubRepoPushAction()"}},a={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-backend.creategithubrepopushaction",children:(0,r.jsx)(n.code,{children:"createGithubRepoPushAction"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createGithubRepoPushAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    description?: string | undefined;\n    defaultBranch?: string | undefined;\n    protectDefaultBranch?: boolean | undefined;\n    protectEnforceAdmins?: boolean | undefined;\n    gitCommitMessage?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    requireCodeOwnerReviews?: boolean | undefined;\n    dismissStaleReviews?: boolean | undefined;\n    bypassPullRequestAllowances?: {\n        users?: string[];\n        teams?: string[];\n        apps?: string[];\n    } | undefined;\n    requiredApprovingReviewCount?: number | undefined;\n    restrictions?: {\n        users: string[];\n        teams: string[];\n        apps?: string[];\n    } | undefined;\n    requiredStatusCheckContexts?: string[] | undefined;\n    requireBranchesToBeUpToDate?: boolean | undefined;\n    requiredConversationResolution?: boolean | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    requiredCommitSigning?: boolean | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["{ integrations: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,r.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),"; githubCredentialsProvider?: ",(0,r.jsx)(n.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.b,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(n.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; description?: string | undefined; defaultBranch?: string | undefined; protectDefaultBranch?: boolean | undefined; protectEnforceAdmins?: boolean | undefined; gitCommitMessage?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; requireCodeOwnerReviews?: boolean | undefined; dismissStaleReviews?: boolean | undefined; bypassPullRequestAllowances?: { users?: string[]; teams?: string[]; apps?: string[]; } | undefined; requiredApprovingReviewCount?: number | undefined; restrictions?: { users: string[]; teams: string[]; apps?: string[]; } | undefined; requiredStatusCheckContexts?: string[] | undefined; requireBranchesToBeUpToDate?: boolean | undefined; requiredConversationResolution?: boolean | undefined; sourcePath?: string | undefined; token?: string | undefined; requiredCommitSigning?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(n.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in i=Object(arguments[a]))t.call(i,u)&&(c[u]=i[u]);if(n){s=n(i);for(var f=0;f<s.length;f++)r.call(i,s[f])&&(c[s[f]]=i[s[f]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,f=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:s.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,c=60110,a=60112;n.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),s=l("react.provider"),c=l("react.context"),a=l("react.forward_ref"),n.Suspense=l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}function y(){}function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=m.prototype=new y;v.constructor=m,r(v,b.prototype),v.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var r,i={},s=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(s=""+n.key),n)_.call(n,r)&&!k.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,t,r,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===r?"."+P(a,0):r,Array.isArray(s)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),R(s,n,t,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),n.push(s)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+P(c=e[u],u);a+=R(c,n,t,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)a+=R(c=c.value,n,t,f=r+P(c,u++),s);else if("object"===c)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return a}function O(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function S(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function E(){var e=A.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},n.Component=b,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var i=r({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=j.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in n)_.call(n,f)&&!k.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==u?u[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){u=Array(f);for(var l=0;l<f;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:a}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:S}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return E().useCallback(e,n)},n.useContext=function(e,n){return E().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return E().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return E().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return E().useLayoutEffect(e,n)},n.useMemo=function(e,n){return E().useMemo(e,n)},n.useReducer=function(e,n,t){return E().useReducer(e,n,t)},n.useRef=function(e){return E().useRef(e)},n.useState=function(e){return E().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:c},n)}}}]);