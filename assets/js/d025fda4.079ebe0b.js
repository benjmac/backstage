/*! For license information please see d025fda4.079ebe0b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[624374],{766638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers"},s=void 0,a={unversionedId:"auth/identity-resolver",id:"auth/identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers",source:"@site/../docs/auth/identity-resolver.md",sourceDirName:"auth",slug:"/auth/identity-resolver",permalink:"/docs/auth/identity-resolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/identity-resolver.md",tags:[],version:"current",frontMatter:{id:"identity-resolver",title:"Sign-in Identities and Resolvers",description:"An introduction to Backstage user identities and sign-in resolvers"},sidebar:"docs",previous:{title:"OneLogin",permalink:"/docs/auth/onelogin/provider"},next:{title:"OAuth and OpenID Connect",permalink:"/docs/auth/oauth"}},l={},u=[{value:"Quick Start",id:"quick-start",level:2},{value:"Backstage User Identity",id:"backstage-user-identity",level:2},{value:"Sign-in Resolvers",id:"sign-in-resolvers",level:2},{value:"Custom Resolver Example",id:"custom-resolver-example",level:3},{value:"Built-in Resolvers",id:"built-in-resolvers",level:3},{value:"Custom Ownership Resolution",id:"custom-ownership-resolution",level:2},{value:"Sign-In without Users in the Catalog",id:"sign-in-without-users-in-the-catalog",level:2},{value:"AuthHandler",id:"authhandler",level:2}];function c(e){const n=Object.assign({p:"p",h2:"h2",blockquote:"blockquote",a:"a",code:"code",pre:"pre",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"By default, every Backstage auth provider is configured only for the use-case of\naccess delegation. This enables Backstage to request resources and actions from\nexternal systems on behalf of the user, for example re-triggering a build in CI."}),"\n",(0,r.jsx)(n.p,{children:"If you want to use an auth provider to sign in users, you need to explicitly configure\nit have sign-in enabled and also tell it how the external identities should\nbe mapped to user identities within Backstage."}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.providers",children:"providers"}),"\nfor a full list of auth providers and their built-in sign-in resolvers."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Backstage projects created with ",(0,r.jsx)(n.code,{children:"npx @backstage/create-app"}),' come configured with a\nsign-in resolver for GitHub guest access. This resolver makes all users share\na single "guest" identity and is only intended as a minimum requirement to quickly\nget up and running. You can replace ',(0,r.jsx)(n.code,{children:"github"})," for any of the other providers if you need."]}),"\n",(0,r.jsx)(n.p,{children:"This resolver should not be used in production, as it uses a single shared identity,\nand has no restrictions on who is able to sign-in. Be sure to read through the rest\nof this page to understand the Backstage identity system once you need to install\na resolver for your production environment."}),"\n",(0,r.jsx)(n.p,{children:"The guest resolver can be useful for testing purposes too, and it looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"signIn: {\n  resolver(_, ctx) {\n    const userRef = 'user:default/guest'\n    return ctx.issueToken({\n      claims: {\n        sub: userRef,\n        ent: [userRef],\n      },\n    }),\n  },\n},\n"})}),"\n",(0,r.jsx)(n.h2,{id:"backstage-user-identity",children:"Backstage User Identity"}),"\n",(0,r.jsxs)(n.p,{children:["A user identity within Backstage is built up from two pieces of information, a\nuser ",(0,r.jsx)(n.a,{href:"/docs/features/software-catalog/references",children:"entity reference"}),", and a\nset of ownership entity references.\nWhen a user signs in, a Backstage token is generated with these two pieces of information,\nwhich is then used to identify the user within the Backstage ecosystem."]}),"\n",(0,r.jsx)(n.p,{children:"The user entity reference should uniquely identify the logged in user in Backstage.\nIt is encouraged that a matching user entity also exists within the Software Catalog,\nbut it is not required. If the user entity exists in the catalog it can be used to\nstore additional data about the user. There may even be some plugins that require\nthis for them to be able to function."}),"\n",(0,r.jsxs)(n.p,{children:["The ownership references are also entity references, and it is likewise\nencouraged that these entities exist within the catalog, but it is not a requirement.\nThe ownership references are used to determine what the user owns, as a set\nof references that the user claims ownership though. For example, a user\nJane (",(0,r.jsx)(n.code,{children:"user:default/jane"}),") might have the ownership references ",(0,r.jsx)(n.code,{children:"user:default/jane"}),",\n",(0,r.jsx)(n.code,{children:"group:default/team-a"}),", and ",(0,r.jsx)(n.code,{children:"group:default/admins"}),". Given these ownership claims,\nany entity that is marked as owned by either of ",(0,r.jsx)(n.code,{children:"user:jane"}),", ",(0,r.jsx)(n.code,{children:"team-a"}),", or ",(0,r.jsx)(n.code,{children:"admins"})," would\nbe considered owned by Jane."]}),"\n",(0,r.jsxs)(n.p,{children:["The ownership claims often contain the user entity reference itself, but it is not\nrequired. It is also worth noting that the ownership claims can also be used to\nresolve other relations similar to ownership, such as a claim for a ",(0,r.jsx)(n.code,{children:"maintainer"})," or\n",(0,r.jsx)(n.code,{children:"operator"})," status."]}),"\n",(0,r.jsxs)(n.p,{children:["The Backstage token that encapsulates the user identity is a JWT. The user entity\nreference is stored in the ",(0,r.jsx)(n.code,{children:"sub"})," claim of the payload, while the ownership references\nare stored in a custom ",(0,r.jsx)(n.code,{children:"ent"})," claim. Both the user and ownership references should\nalways be full entity references, as opposed to shorthands like just ",(0,r.jsx)(n.code,{children:"jane"})," or ",(0,r.jsx)(n.code,{children:"user:jane"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"sign-in-resolvers",children:"Sign-in Resolvers"}),"\n",(0,r.jsx)(n.p,{children:"Signing in a user into Backstage requires a mapping of the user identity from the\nthird-party auth provider to a Backstage user identity. This mapping can vary quite\na lot between different organizations and auth providers, and because of that there's\nno default way to resolve user identities. The auth provider that one wants to use\nfor sign-in must instead be configured with a sign-in resolver, which is a function\nthat is responsible for creating this user identity mapping."}),"\n",(0,r.jsx)(n.p,{children:"The input to the sign-in resolver function is the result of a successful log in with\nthe given auth provider, as well as a context object that contains various helpers\nfor looking up users and issuing tokens. There are also a number of built-in sign-in\nresolvers that can be used, which are covered a bit further down."}),"\n",(0,r.jsx)(n.p,{children:"Note that while it possible to configure multiple auth providers to be used for sign-in,\nyou should take care when doing so. It is best to make sure that the different auth\nproviders either do not have any user overlap, or that any users that are able to log\nin with multiple providers always end up with the same Backstage identity."}),"\n",(0,r.jsx)(n.h3,{id:"custom-resolver-example",children:"Custom Resolver Example"}),"\n",(0,r.jsxs)(n.p,{children:["Let's look at an example of a custom sign-in resolver for the Google auth provider.\nThis all typically happens within your ",(0,r.jsx)(n.code,{children:"packages/backend/src/plugins/auth.ts"})," file,\nwhich is responsible for setting up and configuring the auth backend plugin."]}),"\n",(0,r.jsxs)(n.p,{children:["You provide the resolver as part of the options you pass when creating a new auth\nprovider factory. This means you need to replace the default Google provider with\none that you create. Be sure to also include the existing ",(0,r.jsx)(n.code,{children:"defaultAuthProviderFactories"}),"\nif you want to keep all of the built-in auth providers installed."]}),"\n",(0,r.jsx)(n.p,{children:"Now let's look at the example, with the rest of the commentary being made with in\nthe code comments:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nimport {\n  createRouter,\n  providers,\n  defaultAuthProviderFactories,\n} from '@backstage/plugin-auth-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    ...env,\n    providerFactories: {\n      ...defaultAuthProviderFactories,\n      google: providers.google.create({\n        signIn: {\n          resolver: async (info, ctx) => {\n            const {\n              profile: { email },\n            } = info;\n            // Profiles are not always guaranteed to to have an email address.\n            // You can also find more provider-specific information in `info.result`.\n            // It typically contains a `fullProfile` object as well as ID and/or access\n            // tokens that you can use for additional lookups.\n            if (!email) {\n              throw new Error('User profile contained no email');\n            }\n\n            // You can add your own custom validation logic here.\n            // Logins can be prevented by throwing an error like the one above.\n            myEmailValidator(email);\n\n            // This example resolver simply uses the local part of the email as the name.\n            const [name] = email.split('@');\n\n            // This helper function handles sign-in by looking up a user in the catalog.\n            // The lookup can be done either by reference, annotations, or custom filters.\n            //\n            // The helper also issues a token for the user, using the standard group\n            // membership logic to determine the ownership references of the user.\n            return ctx.signInWithCatalogUser({\n              entityRef: { name },\n            });\n          },\n        },\n      }),\n    },\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"built-in-resolvers",children:"Built-in Resolvers"}),"\n",(0,r.jsxs)(n.p,{children:["You don't always have to write your own custom resolver. The auth backend plugin provides\nbuilt-in resolvers for many of the common sign-in patterns. You access these via the ",(0,r.jsx)(n.code,{children:"resolvers"}),"\nproperty of each of the auth provider integrations. For example, the Google provider has\na built in resolver that works just like the one we defined above:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nexport default async function createPlugin(\n  // ...\n  return await createRouter({\n    // ...\n    providerFactories: {\n      // ...\n      google: providers.google.create({\n        signIn: {\n          resolver: providers.google.resolvers.emailLocalPartMatchingUserEntityName(),\n        },\n      });\n    }\n  })\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There are also other options, like the this one that looks up a user\nby matching the ",(0,r.jsx)(n.code,{children:"google.com/email"})," annotation of user entities in the catalog:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"providers.google.create({\n  signIn: {\n    resolver: providers.google.resolvers.emailMatchingUserEntityAnnotation(),\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-ownership-resolution",children:"Custom Ownership Resolution"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to have more control over the membership resolution and token generation\nthat happens during sign-in you can replace ",(0,r.jsx)(n.code,{children:"ctx.signInWithCatalogUser"})," with a set\nof lower-level calls:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nimport { getDefaultOwnershipEntityRefs } from '@backstage/plugin-auth-backend';\n\nexport default async function createPlugin(\n  // ...\n  return await createRouter({\n    // ...\n    providerFactories: {\n      // ...\n      google: async ({ profile: { email } }, ctx) => {\n        if (!email) {\n          throw new Error('User profile contained no email');\n        }\n\n        // This step calls the catalog to look up a user entity. You could for example\n        // replace it with a call to a different external system.\n        const { entity } = await ctx.findCatalogUser({\n          annotations: {\n            'acme.org/email': email,\n          },\n        });\n\n        // In this step we extract the ownership references from the user entity using\n        // the standard logic. It uses a reference to the entity itself, as well as the\n        // target of each `memberOf` relation where the target is of the kind `Group`.\n        //\n        // If you replace the catalog lookup with something that does not return\n        // an entity you will need to replace this step as well.\n        //\n        // You might also replace it if you for example want to filter out certain groups.\n        const ownershipRefs = getDefaultOwnershipEntityRefs(entity);\n\n        // The last step is to issue the token, where we might provide more options in the future.\n        return ctx.issueToken({\n          claims: {\n            sub: stringifyEntityRef(entity),\n            ent: ownershipRefs,\n          },\n        });\n      };\n    }\n  })\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sign-in-without-users-in-the-catalog",children:"Sign-In without Users in the Catalog"}),"\n",(0,r.jsx)(n.p,{children:"While populating the catalog with organizational data unlocks more powerful ways\nto browse your software ecosystem, it might not always be a viable or prioritized\noption. However, even if you do not have user entities populated in your catalog, you\ncan still sign in users. As there are currently no built-in sign-in resolvers for\nthis scenario you will need to implement your own."}),"\n",(0,r.jsx)(n.p,{children:"Signing in a user that doesn't exist in the catalog is as simple as skipping the\ncatalog lookup step from the above example. Rather than looking up the user, we\ninstead immediately issue a token using whatever information is available. One caveat\nis that it can be tricky to determine the ownership references, although it can\nbe achieved for example through a lookup to an external service. You typically\nwant to at least use the user itself as a lone ownership reference."}),"\n",(0,r.jsx)(n.p,{children:"Because we no longer use the catalog as an allow-list of users, it is often important\nthat you limit what users are allowed to sign in. This could be a simple email domain\ncheck like in the example below, or you might for example look up the GitHub organizations\nthat the user belongs to using the user access token in the provided result object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nimport { createRouter, providers } from '@backstage/plugin-auth-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport {\n  stringifyEntityRef,\n  DEFAULT_NAMESPACE,\n} from '@backstage/catalog-model';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    ...env,\n    providerFactories: {\n      google: providers.google.create({\n        signIn: {\n          resolver: async ({ profile }, ctx) => {\n            if (!profile.email) {\n              throw new Error(\n                'Login failed, user profile does not contain an email',\n              );\n            }\n            // Split the email into the local part and the domain.\n            const [localPart, domain] = profile.email.split('@');\n\n            // Next we verify the email domain. It is recommended to include this\n            // kind of check if you don't look up the user in an external service.\n            if (domain !== 'acme.org') {\n              throw new Error(\n                `Login failed, this email ${profile.email} does not belong to the expected domain`,\n              );\n            }\n\n            // By using `stringifyEntityRef` we ensure that the reference is formatted correctly\n            const userEntity = stringifyEntityRef({\n              kind: 'User',\n              name: localPart,\n              namespace: DEFAULT_NAMESPACE,\n            });\n            return ctx.issueToken({\n              claims: {\n                sub: userEntity,\n                ent: [userEntity],\n              },\n            });\n          },\n        },\n      }),\n    },\n  });\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"authhandler",children:"AuthHandler"}),"\n",(0,r.jsx)(n.p,{children:"Similar to a custom sign-in resolver, you can also write a custom auth handler\nfunction which is used to verify and convert the auth response into the profile\nthat will be presented to the user. This is where you can customize things like\ndisplay name and profile picture."}),"\n",(0,r.jsx)(n.p,{children:"This is also the place where you can do authorization and validation of the user\nand throw errors if the user should not be allowed access in Backstage."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// File: packages/backend/src/plugins/auth.ts\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    ...\n    providerFactories: {\n      google: providers.google.create({\n        authHandler: async ({\n          fullProfile  // Type: passport.Profile,\n          idToken      // Type: (Optional) string,\n        }) => {\n          // Custom validation code goes here\n          return {\n            profile: {\n              email,\n              picture,\n              displayName,\n            }\n          };\n        }\n      })\n    }\n  })\n}\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))t.call(i,u)&&(a[u]=i[u]);if(n){s=n(i);for(var c=0;c<s.length;c++)r.call(i,s[c])&&(a[s[c]]=i[s[c]])}}return a}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,c=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:s.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var s=60109,a=60110,l=60112;n.Suspense=60113;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),i=h("react.portal"),n.Fragment=h("react.fragment"),n.StrictMode=h("react.strict_mode"),n.Profiler=h("react.profiler"),s=h("react.provider"),a=h("react.context"),l=h("react.forward_ref"),n.Suspense=h("react.suspense"),u=h("react.memo"),c=h("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function y(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var w=v.prototype=new y;w.constructor=v,r(w,m.prototype),w.isPureReactComponent=!0;var b={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,t){var r,i={},s=null,a=null;if(null!=n)for(r in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)k.call(n,r)&&!x.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return s=s(l=e),e=""===r?"."+E(l,0):r,Array.isArray(s)?(t="",null!=e&&(t=e.replace(R,"$&/")+"/"),S(s,n,t,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),n.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+E(a=e[u],u);l+=S(a,n,t,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(a=e.next()).done;)l+=S(a=a.value,n,t,c=r+E(a,u++),s);else if("object"===a)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function O(e,n,t){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function C(){var e=T.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},n.Component=m,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var i=r({},e.props),s=e.key,a=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,l=b.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in n)k.call(n,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===n[c]&&void 0!==u?u[c]:n[c])}var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:a,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=j,n.createFactory=function(e){var n=j.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return C().useCallback(e,n)},n.useContext=function(e,n){return C().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return C().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return C().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return C().useLayoutEffect(e,n)},n.useMemo=function(e,n){return C().useMemo(e,n)},n.useReducer=function(e,n,t){return C().useReducer(e,n,t)},n.useRef=function(e){return C().useRef(e)},n.useState=function(e){return C().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},n)}}}]);