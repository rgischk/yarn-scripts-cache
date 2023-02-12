/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-scripts-cache-file",
factory: function (require) {
"use strict";var plugin=(()=>{var B=Object.create;var f=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var D=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),H=(t,e)=>{for(var r in e)f(t,r,{get:e[r],enumerable:!0})},g=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of w(e))!x.call(t,a)&&a!==r&&f(t,a,{get:()=>e[a],enumerable:!(i=T(e,a))||i.enumerable});return t};var I=(t,e,r)=>(r=t!=null?B(U(t)):{},g(e||!t||!t.__esModule?f(r,"default",{value:t,enumerable:!0}):r,t)),j=t=>g(f({},"__esModule",{value:!0}),t);var b=h(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0})});var m=h(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0})});var F=h(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0})});var O=h(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.readBooleanConfigValue=u.readStringConfigValue=u.readIntConfigValue=void 0;function W(t,e,r,i,a){let o=process.env[r];return o&&!isNaN(parseInt(o))?parseInt(o):t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="number"?t.cacheConfigs[e][i]:a}u.readIntConfigValue=W;function Y(t,e,r,i,a){let o=process.env[r];return o||(t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="string"?t.cacheConfigs[e][i]:a)}u.readStringConfigValue=Y;function G(t,e,r,i,a){let o=process.env[r];return o?o==="true":t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="boolean"?t.cacheConfigs[e][i]:a}u.readBooleanConfigValue=G});var S=h(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0})});var N=h(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0})});var V=h(s=>{"use strict";var X=s&&s.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,a)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),E=s&&s.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&X(e,t,r)};Object.defineProperty(s,"__esModule",{value:!0});E(b(),s);E(m(),s);E(F(),s);E(O(),s);E(S(),s);E(N(),s)});var de={};H(de,{default:()=>Ae});var c=I(V()),n=D("@yarnpkg/fslib"),R=I(D("crypto")),_="file",q=10,J="YSC_FILE_DISABLED",K="cacheDisabled",k=!1,$="YSC_FILE_READ_DISABLED",z="cacheReadDisabled",Q=!1,Z="YSC_FILE_WRITE_DISABLED",ee="cacheWriteDisabled",te=!1,re="YSC_FILE_MAX_AGE",ie="maxAge",ae=2592e6,ne="YSC_FILE_MAX_AMOUNT",oe="maxAmount",se=1e3,ce="YSC_FILE_CACHE_FOLDER_NAME",ue="cacheFolderName",Ce=".yarn-scripts-cache",l=class{constructor(e,r){this.name=_,this.order=q,this.cwd=e,this.config=r}async saveCacheEntry(e){if(this.getCacheDisabled()||this.getCacheWriteDisabled())return;let r=this.buildCacheDir();await n.xfs.mkdirPromise(r,{recursive:!0});let i=this.buildCacheFile(r,e.key),a=JSON.stringify(e);await n.xfs.writeFilePromise(i,a),await this.cleanup()}async loadCacheEntry(e){if(this.getCacheDisabled()||this.getCacheReadDisabled())return;let r=this.buildCacheDir();if(!await n.xfs.existsPromise(r))return;let i=this.buildCacheFile(r,e);if(await n.xfs.existsPromise(i)){let a=await n.xfs.readFilePromise(i,"utf8"),o=JSON.parse(a);if(he(e,o.key))return o}}async cleanup(){let e=this.getMaxAge(),r=this.getMaxAmount(),i=Date.now()-e,a=this.buildCacheDir(),A=(await n.xfs.readdirPromise(a)).map(C=>n.ppath.join(a,C)).map(_e);A.sort((C,v)=>v.creationDate-C.creationDate);let d=0;for(let C of A)C.creationDate<i?await n.xfs.unlinkPromise(C.file):d+=1,d>r&&await n.xfs.unlinkPromise(C.file)}buildCacheFile(e,r){let i=R.default.createHash("sha512");return i.update(JSON.stringify(r)),n.ppath.join(e,(0,n.toFilename)(`${i.digest("base64url")}.json`))}buildCacheDir(){return n.ppath.join(this.cwd,(0,n.toFilename)(this.getCacheFolderName()))}getCacheDisabled(){return(0,c.readBooleanConfigValue)(this.config,_,J,K,k)}getCacheReadDisabled(){return(0,c.readBooleanConfigValue)(this.config,_,$,z,Q)}getCacheWriteDisabled(){return(0,c.readBooleanConfigValue)(this.config,_,Z,ee,te)}getMaxAge(){return(0,c.readIntConfigValue)(this.config,_,re,ie,ae)}getMaxAmount(){return(0,c.readIntConfigValue)(this.config,_,ne,oe,se)}getCacheFolderName(){return(0,c.readStringConfigValue)(this.config,_,ce,ue,Ce)}};function he(t,e){return JSON.stringify(t)===JSON.stringify(e)}function _e(t){let e=n.xfs.statSync(t);return{file:t,creationDate:e.mtime.getTime()}}var Ee=async(t,e,r)=>{t.push(new l(r.extra.cwd,e))},fe={beforeYarnScriptsCacheUsage:Ee},le={hooks:fe},Ae=le;return j(de);})();
return plugin;
}
};
