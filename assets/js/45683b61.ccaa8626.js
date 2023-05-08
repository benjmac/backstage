/*! For license information please see 45683b61.ccaa8626.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[240418],{343729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(824246),a=n(511151);const s={id:"url-reader",title:"URL Reader",sidebar_label:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations."},o=void 0,i={unversionedId:"plugins/url-reader",id:"plugins/url-reader",title:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations.",source:"@site/../docs/plugins/url-reader.md",sourceDirName:"plugins",slug:"/plugins/url-reader",permalink:"/docs/plugins/url-reader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/url-reader.md",tags:[],version:"current",frontMatter:{id:"url-reader",title:"URL Reader",sidebar_label:"URL Reader",description:"URL Reader is a backend core API responsible for reading files from external locations."},sidebar:"docs",previous:{title:"Call Existing API",permalink:"/docs/plugins/call-existing-api"},next:{title:"Testing with Jest",permalink:"/docs/plugins/testing"}},c={},d=[{value:"Concept",id:"concept",level:2},{value:"Interface",id:"interface",level:2},{value:"Using a URL Reader inside a plugin",id:"using-a-url-reader-inside-a-plugin",level:2},{value:"Writing a new URL Reader",id:"writing-a-new-url-reader",level:2},{value:"1. Add an integration",id:"1-add-an-integration",level:3},{value:"2. Create the URL Reader",id:"2-create-the-url-reader",level:3},{value:"3. Implement the methods",id:"3-implement-the-methods",level:3},{value:"<code>readUrl</code>",id:"readurl",level:4},{value:"<code>readTree</code>",id:"readtree",level:4},{value:"search",id:"search",level:4},{value:"4. Add to available URL Readers",id:"4-add-to-available-url-readers",level:3},{value:"5. Caching",id:"5-caching",level:3},{value:"6. Debugging",id:"6-debugging",level:3}];function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3",h4:"h4"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,r.jsxs)(t.p,{children:["Some of the core plugins of Backstage have to read files from an external\nlocation. ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/",children:"Software Catalog"})," has to read\nthe ",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:(0,r.jsx)(t.code,{children:"catalog-info.yaml"})}),"\nentity descriptor files to register and track an entity.\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Software Templates"})," have to download\nthe template skeleton files before creating a new component.\n",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/",children:"TechDocs"})," has to download the markdown source\nfiles before generating a documentation site."]}),"\n",(0,r.jsxs)(t.p,{children:["Since, the requirement for reading files is so essential for Backstage plugins,\nthe\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend-common",children:(0,r.jsx)(t.code,{children:"@backstage/backend-common"})}),'\npackage provides a dedicated API for reading from such URL based remote\nlocations like GitHub, GitLab, Bitbucket, Google Cloud Storage, etc. This is\ncommonly referred to as "URL Reader". It takes care of making authenticated\nrequests to the remote host so that private files can be read securely. If users\nhave ',(0,r.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"GitHub App based authentication"})," set up, URL Reader even\nrefreshes the token, to avoid reaching the GitHub API rate limit."]}),"\n",(0,r.jsx)(t.p,{children:"As a result, plugin authors do not have to worry about any of these problems\nwhen trying to read files."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(t.p,{children:["When the Backstage backend starts, a new instance of URL Reader is created. You\ncan see this in the index file of your Backstage backend\ni.e.",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"}),".\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/ebbe91dbe79038a61d35cf6ed2d96e0e0d5a15f3/packages/backend/src/index.ts#L57",children:"Example"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// File: packages/backend/src/index.ts\n\nimport { UrlReaders } from '@backstage/backend-common';\n\nfunction makeCreateEnv(config: Config) {\n  // ....\n  const reader = UrlReaders.default({ logger: root, config });\n  //\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This instance contains all\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/packages/backend-common/src/reading/UrlReaders.ts",children:"the default URL Reader providers"}),"\nin the backend-common package including GitHub, GitLab, Bitbucket, Azure, Google\nGCS. As the need arises, more URL Readers are being written to support different\nproviders."]}),"\n",(0,r.jsx)(t.p,{children:"The generic interface of a URL Reader instance looks like this."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export type UrlReader = {\n  /* Used to read a single file and return its content. */\n  readUrl(url: string, options?: ReadUrlOptions): Promise<ReadUrlResponse>;\n  /* Used to read a file tree and download as a directory. */\n  readTree(url: string, options?: ReadTreeOptions): Promise<ReadTreeResponse>;\n  /* Used to search a file in a tree. */\n  search(url: string, options?: SearchOptions): Promise<SearchResponse>;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"using-a-url-reader-inside-a-plugin",children:"Using a URL Reader inside a plugin"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"reader"})," instance is available in the backend plugin environment and passed\non to all the backend plugins. You can see an\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/b0be185369ebaad22255b7cdf18535d1d4ffd0e7/packages/backend/src/plugins/techdocs.ts#L31",children:"example"}),".\nWhen any of the methods on this instance is called with a URL, URL Reader\nextracts the host for that URL (e.g. ",(0,r.jsx)(t.code,{children:"github.com"}),", ",(0,r.jsx)(t.code,{children:"ghe.mycompany.com"}),", etc.).\nUsing the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/integration",children:(0,r.jsx)(t.code,{children:"@backstage/integration"})}),"\npackage, it looks inside the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/app-config.yaml#L134-L158",children:(0,r.jsx)(t.code,{children:"integrations:"})}),"\nconfig of the ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," to find out how to work with the host based on\nthe configs provided like authentication token, API base URL, etc."]}),"\n",(0,r.jsxs)(t.p,{children:["Make sure your plugin-specific backend file at\n",(0,r.jsx)(t.code,{children:"packages/backend/src/plugins/<PLUGIN>.ts"})," is forwarding the ",(0,r.jsx)(t.code,{children:"reader"})," instance\npassed on as the ",(0,r.jsx)(t.code,{children:"PluginEnvironment"})," to the actual plugin's ",(0,r.jsx)(t.code,{children:"createRouter"}),"\nfunction. See how this is done in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend/src/plugins/catalog.ts#L25-L27",children:"Catalog"}),"\nand\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend/src/plugins/techdocs.ts#L31-L36",children:"TechDocs"}),"\nbackend plugins."]}),"\n",(0,r.jsx)(t.p,{children:"Once the reader instance is available inside the plugin, one of its methods can\ndirectly be used with a URL. Some example usages -"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/a7607b5/plugins/catalog-backend/src/modules/codeowners/lib/read.ts#L24-L33",children:(0,r.jsx)(t.code,{children:"readUrl"})})," -\nCatalog using the ",(0,r.jsx)(t.code,{children:"readUrl"})," method to read the CODEOWNERS file in a repository."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/84a8788/plugins/techdocs-node/src/helpers.ts#L146-L167",children:(0,r.jsx)(t.code,{children:"readTree"})})," -\nTechDocs using the ",(0,r.jsx)(t.code,{children:"readTree"})," method to download markdown files in order to\ngenerate the documentation site."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/cb4f0e4/plugins/techdocs-node/src/stages/prepare/url.ts#L51-L73",children:(0,r.jsx)(t.code,{children:"readTree"})})," -\nTechDocs using ",(0,r.jsx)(t.code,{children:"NotModifiedError"})," to maintain cache and speed up and limit the\nnumber of requests."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/plugins/catalog-backend/src/ingestion/processors/UrlReaderProcessor.ts#L88-L108",children:(0,r.jsx)(t.code,{children:"search"})})," -\nCatalog using the ",(0,r.jsx)(t.code,{children:"search"})," method to find files for a location URL containing\na glob pattern."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"writing-a-new-url-reader",children:"Writing a new URL Reader"}),"\n",(0,r.jsx)(t.p,{children:"If the available URL Readers are not sufficient for your use case and you want\nto add a new URL Reader for any other provider, you are most welcome to\ncontribute one!"}),"\n",(0,r.jsxs)(t.p,{children:["Feel free to use the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/GithubUrlReader.ts",children:"GitHub URL Reader"}),"\nas a source of inspiration."]}),"\n",(0,r.jsx)(t.h3,{id:"1-add-an-integration",children:"1. Add an integration"}),"\n",(0,r.jsxs)(t.p,{children:['The provider for your new URL Reader can also be called an "integration" in\nBackstage. The ',(0,r.jsx)(t.code,{children:"integrations:"})," section of your Backstage ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),"\nconfig file is supposed to be the place where a Backstage integrator defines the\nhost URL for the integration, authentication details and other integration\nrelated configurations."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/integration"}),' package is where most of the integration specific\ncode lives, so that it is shareable across Backstage. Functions like "read the\nintegrations config and process it", "construct headers for authenticated\nrequests to the host" or "convert a plain file URL into its API URL for\ndownloading the file" would live in this package.']}),"\n",(0,r.jsx)(t.h3,{id:"2-create-the-url-reader",children:"2. Create the URL Reader"}),"\n",(0,r.jsxs)(t.p,{children:["Create a new class which implements the\n",(0,r.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/types.ts#L21-L28",children:[(0,r.jsx)(t.code,{children:"UrlReader"})," type"]}),"\ninside ",(0,r.jsx)(t.code,{children:"@backstage/backend-common"}),". Create and export a static ",(0,r.jsx)(t.code,{children:"factory"})," method\nwhich reads the integration config and returns a map of host URLs the new reader\nshould be used for. See the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/GithubUrlReader.ts#L50-L63",children:"GitHub URL Reader"}),"\nfor example."]}),"\n",(0,r.jsx)(t.h3,{id:"3-implement-the-methods",children:"3. Implement the methods"}),"\n",(0,r.jsxs)(t.p,{children:["We want to make sure all URL Readers behave in the same way. Hence if possible,\nall the methods of the ",(0,r.jsx)(t.code,{children:"UrlReader"})," interface should be implemented. However it\nis okay to start by implementing just one of them and create issues for the\nremaining."]}),"\n",(0,r.jsx)(t.h4,{id:"readurl",children:(0,r.jsx)(t.code,{children:"readUrl"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"readUrl"})," method expects a user-friendly URL, something which can be copied from\nthe browser naturally when a person is browsing the provider in their browser."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL :\n",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u274c Not a valid URL :\n",(0,r.jsx)(t.code,{children:"https://raw.githubusercontent.com/backstage/backstage/master/ADOPTERS.md"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u274c Not a valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/ADOPTERS.md"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Upon receiving the URL, ",(0,r.jsx)(t.code,{children:"readUrl"})," converts the user-friendly URL into an API URL\nwhich can be used to request the provider's API."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"readUrl"})," then makes an authenticated request to the provider API and returns the response containing the file's contents and ETag(if the provider supports it)."]}),"\n",(0,r.jsx)(t.h4,{id:"readtree",children:(0,r.jsx)(t.code,{children:"readTree"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"readTree"})," method also expects user-friendly URLs similar to ",(0,r.jsx)(t.code,{children:"read"})," but the URL\nshould point to a tree (could be the root of a repository or even a\nsub-directory)."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/docs"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Using the provider's API documentation, find out an API endpoint which can be\nused to download either a zip or a tarball. You can download the entire tree\n(e.g. a repository) and filter out in case the user is expecting only a\nsub-tree. But some APIs are smart enough to accept a path and return only a\nsub-tree in the downloaded archive."}),"\n",(0,r.jsx)(t.h4,{id:"search",children:"search"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"search"})," method expects a glob pattern of a URL and returns a list of files\nmatching the query."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL :\n",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/**/catalog-info.yaml"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/**/*.md"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL :\n",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/*/package.json"})]}),"\n",(0,r.jsxs)(t.li,{children:["\u2705 Valid URL : ",(0,r.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/READM"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The core logic of ",(0,r.jsx)(t.code,{children:"readTree"})," can be used here to extract all the files inside\nthe tree and return the files matching the pattern in the ",(0,r.jsx)(t.code,{children:"url"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"4-add-to-available-url-readers",children:"4. Add to available URL Readers"}),"\n",(0,r.jsx)(t.p,{children:"There are two ways to make your new URL Reader available for use."}),"\n",(0,r.jsxs)(t.p,{children:["You can choose to make it open source, by updating the\n",(0,r.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/d5c83bb889b8142e343ebc4e4c0b90a02d1c1a3d/packages/backend-common/src/reading/UrlReaders.ts#L62-L81",children:[(0,r.jsx)(t.code,{children:"default"})," factory"]}),"\nmethod of URL Readers."]}),"\n",(0,r.jsxs)(t.p,{children:["But for something internal which you don't want to make open source, you can\nupdate your ",(0,r.jsx)(t.code,{children:"packages/backend/src/index.ts"})," file and update how the ",(0,r.jsx)(t.code,{children:"reader"}),"\ninstance is created."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// File: packages/backend/src/index.ts\nconst reader = UrlReaders.default({\n  logger: root,\n  config,\n  // This is where your internal URL Readers would go.\n  factories: [myCustomReader.factory],\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"5-caching",children:"5. Caching"}),"\n",(0,r.jsxs)(t.p,{children:["All of the methods above support an ETag based caching. If the method is called\nwithout an ",(0,r.jsx)(t.code,{children:"etag"}),", the response contains an ETag of the resource (should ideally\nforward the ETag returned by the provider). If the method is called with an\n",(0,r.jsx)(t.code,{children:"etag"}),", it first compares the ETag and returns a ",(0,r.jsx)(t.code,{children:"NotModifiedError"})," in case the\nresource has not been modified. This approach is very similar to the actual\n",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag",children:(0,r.jsx)(t.code,{children:"ETag"})})," and\n",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match",children:(0,r.jsx)(t.code,{children:"If-None-Match"})}),"\nHTTP headers."]}),"\n",(0,r.jsx)(t.h3,{id:"6-debugging",children:"6. Debugging"}),"\n",(0,r.jsxs)(t.p,{children:["When debugging one of the URL Readers, you can straightforward use the\n",(0,r.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/ebbe91dbe79038a61d35cf6ed2d96e0e0d5a15f3/packages/backend/src/index.ts#L57",children:[(0,r.jsx)(t.code,{children:"reader"})," instance created"]}),"\nwhen the backend starts and call one of the methods with your debugging URL."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// File: packages/backend/src/index.ts\n\nasync function main() {\n  // ...\n  const createEnv = makeCreateEnv(config);\n\n  const testReader = createEnv('test-url-reader').reader;\n  const response = await testReader.readUrl(\n    'https://github.com/backstage/backstage/blob/master/catalog-info.yaml',\n  );\n  console.log((await response.buffer()).toString());\n  // ...\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will be run every time you restart the backend. Note that after any change\nin the URL Reader code, you need to stop the backend and restart, since the\n",(0,r.jsx)(t.code,{children:"reader"})," instance is memoized and does not update on hot module reloading. Also,\nthere are a lot of unit tests written for the URL Readers, which you can make\nuse of."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))n.call(s,d)&&(i[d]=s[d]);if(t){o=t(s);for(var l=0;l<o.length;l++)r.call(s,o[l])&&(i[o[l]]=s[o[l]])}}return i}},371426:(e,t,n)=>{n(862525);var r=n(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),t.Fragment=s("react.fragment")}var o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:o.current}}t.jsx=d,t.jsxs=d},541535:(e,t,n)=>{var r=n(862525),a=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,c=60112;t.Suspense=60113;var d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;a=h("react.element"),s=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),o=h("react.provider"),i=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),d=h("react.memo"),l=h("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function m(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var k=x.prototype=new m;k.constructor=x,r(k,b.prototype),k.isPureReactComponent=!0;var j={current:null},y=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function v(e,t,n){var r,s={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)y.call(t,r)&&!R.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var d=Array(c),l=0;l<c;l++)d[l]=arguments[l+2];s.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:a,type:e,key:o,ref:i,props:s,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var U=/\/+/g;function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return o=o(c=e),e=""===r?"."+L(c,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(U,"$&/")+"/"),_(o,t,n,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(U,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var d=0;d<e.length;d++){var l=r+L(i=e[d],d);c+=_(i,t,n,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(i=e.next()).done;)c+=_(i=i.value,t,n,l=r+L(i,d++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function T(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function C(){var e=S.current;if(null===e)throw Error(f(321));return e}var P={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=b,t.PureComponent=x,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var s=r({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in t)y.call(t,l)&&!R.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==d?d[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){d=Array(l);for(var h=0;h<l;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:a,type:e.type,key:o,ref:i,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=v,t.createFactory=function(e){var t=v.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return C().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,n){return C().useReducer(e,t,n)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var r=n(667294);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:i},t)}}}]);