/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-scripts-cache-file",
factory: function (require) {
"use strict";var plugin=(()=>{var x=Object.create;var C=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var A=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var f=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),T=(t,e)=>{for(var r in e)C(t,r,{get:e[r],enumerable:!0})},m=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of R(e))!B.call(t,a)&&a!==r&&C(t,a,{get:()=>e[a],enumerable:!(i=j(e,a))||i.enumerable});return t};var p=(t,e,r)=>(r=t!=null?x(U(t)):{},m(e||!t||!t.__esModule?C(r,"default",{value:t,enumerable:!0}):r,t)),X=t=>m(C({},"__esModule",{value:!0}),t);var P=f(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0})});var O=f(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0})});var D=f(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0})});var F=f(c=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.readBooleanConfigValue=c.readStringConfigValue=c.readIntConfigValue=void 0;function Y(t,e,r,i,a){let o=process.env[r];return o&&!isNaN(parseInt(o))?parseInt(o):t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="number"?t.cacheConfigs[e][i]:a}c.readIntConfigValue=Y;function G(t,e,r,i,a){let o=process.env[r];return o||(t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="string"?t.cacheConfigs[e][i]:a)}c.readStringConfigValue=G;function H(t,e,r,i,a){let o=process.env[r];return o?o==="true":t.cacheConfigs&&t.cacheConfigs[e]&&typeof t.cacheConfigs[e][i]=="boolean"?t.cacheConfigs[e][i]:a}c.readBooleanConfigValue=H});var I=f(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0})});var V=f(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0})});var N=f(s=>{"use strict";var q=s&&s.__createBinding||(Object.create?function(t,e,r,i){i===void 0&&(i=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,i,a)}:function(t,e,r,i){i===void 0&&(i=r),t[i]=e[r]}),h=s&&s.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&q(e,t,r)};Object.defineProperty(s,"__esModule",{value:!0});h(P(),s);h(O(),s);h(D(),s);h(F(),s);h(I(),s);h(V(),s)});var ce={};T(ce,{default:()=>se});var l=p(N()),n=A("@yarnpkg/fslib"),w=p(A("crypto")),d="file",J=10,K="YSC_FILE_MAX_AGE",W="maxAge",k=2592e6,$="YSC_FILE_MAX_AMOUNT",z="maxAmount",Q=1e3,Z="YSC_FILE_CACHE_FOLDER_NAME",ee="cacheFolderName",te=".yarn-scripts-cache",_=class{constructor(e,r){this.name=d,this.order=J,this.cwd=e,this.config=r}async saveCacheEntry(e){let r=this.buildCacheDir();await n.xfs.mkdirPromise(r,{recursive:!0});let i=this.buildCacheFile(r,e.key),a=JSON.stringify(e);await n.xfs.writeFilePromise(i,a),await this.cleanup()}async loadCacheEntry(e){let r=this.buildCacheDir();if(!await n.xfs.existsPromise(r))return;let i=this.buildCacheFile(r,e);if(await n.xfs.existsPromise(i)){let a=await n.xfs.readFilePromise(i,"utf8"),o=JSON.parse(a);if(re(e,o.key))return o}}async cleanup(){let e=this.readMaxAge(),r=this.readMaxAmount(),i=Date.now()-e,a=this.buildCacheDir(),E=(await n.xfs.readdirPromise(a)).map(u=>n.ppath.join(a,u)).map(ie);E.sort((u,L)=>L.creationDate-u.creationDate);let g=0;for(let u of E)u.creationDate<i?await n.xfs.unlinkPromise(u.file):g+=1,g>r&&await n.xfs.unlinkPromise(u.file)}buildCacheFile(e,r){let i=w.default.createHash("sha512");return i.update(JSON.stringify(r)),n.ppath.join(e,(0,n.toFilename)(`${i.digest("base64url")}.json`))}buildCacheDir(){return n.ppath.join(this.cwd,(0,n.toFilename)(this.readCacheFolderName()))}readMaxAge(){return(0,l.readIntConfigValue)(this.config,d,K,W,k)}readMaxAmount(){return(0,l.readIntConfigValue)(this.config,d,$,z,Q)}readCacheFolderName(){return(0,l.readStringConfigValue)(this.config,d,Z,ee,te)}};function re(t,e){return JSON.stringify(t)===JSON.stringify(e)}function ie(t){let e=n.xfs.statSync(t);return{file:t,creationDate:e.mtime.getTime()}}var ae=async(t,e,r)=>{t.push(new _(r.extra.cwd,e))},ne={beforeYarnScriptsCacheUsage:ae},oe={hooks:ne},se=oe;return X(ce);})();
return plugin;
}
};
