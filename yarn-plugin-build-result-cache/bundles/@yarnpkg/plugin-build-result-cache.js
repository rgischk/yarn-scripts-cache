/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-build-result-cache",
factory: function (require) {
"use strict";var plugin=(()=>{var Ue=Object.create;var rt=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var Be=Object.getPrototypeOf,Ke=Object.prototype.hasOwnProperty;var w=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var P=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Qe=(t,e)=>{for(var r in e)rt(t,r,{get:e[r],enumerable:!0})},Wt=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of He(e))!Ke.call(t,n)&&n!==r&&rt(t,n,{get:()=>e[n],enumerable:!(i=We(e,n))||i.enumerable});return t};var Ht=(t,e,r)=>(r=t!=null?Ue(Be(t)):{},Wt(e||!t||!t.__esModule?rt(r,"default",{value:t,enumerable:!0}):r,t)),Ve=t=>Wt(rt({},"__esModule",{value:!0}),t);var Kt=P(dt=>{var W=w("path"),$=process.platform==="win32",x=w("fs"),Ye=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);function tr(){var t;if(Ye){var e=new Error;t=r}else t=i;return t;function r(n){n&&(e.message=n.message,n=e,i(n))}function i(n){if(n){if(process.throwDeprecation)throw n;if(!process.noDeprecation){var a="fs: missing callback "+(n.stack||n.message);process.traceDeprecation?console.trace(a):console.error(a)}}}}function er(t){return typeof t=="function"?t:tr()}var pi=W.normalize;$?D=/(.*?)(?:[\/\\]+|$)/g:D=/(.*?)(?:[\/]+|$)/g;var D;$?Z=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/:Z=/^[\/]*/;var Z;dt.realpathSync=function(e,r){if(e=W.resolve(e),r&&Object.prototype.hasOwnProperty.call(r,e))return r[e];var i=e,n={},a={},s,o,c,u;p();function p(){var v=Z.exec(e);s=v[0].length,o=v[0],c=v[0],u="",$&&!a[c]&&(x.lstatSync(c),a[c]=!0)}for(;s<e.length;){D.lastIndex=s;var d=D.exec(e);if(u=o,o+=d[0],c=u+d[1],s=D.lastIndex,!(a[c]||r&&r[c]===c)){var h;if(r&&Object.prototype.hasOwnProperty.call(r,c))h=r[c];else{var l=x.lstatSync(c);if(!l.isSymbolicLink()){a[c]=!0,r&&(r[c]=c);continue}var f=null;if(!$){var g=l.dev.toString(32)+":"+l.ino.toString(32);n.hasOwnProperty(g)&&(f=n[g])}f===null&&(x.statSync(c),f=x.readlinkSync(c)),h=W.resolve(u,f),r&&(r[c]=h),$||(n[g]=f)}e=W.resolve(h,e.slice(s)),p()}}return r&&(r[i]=e),e};dt.realpath=function(e,r,i){if(typeof i!="function"&&(i=er(r),r=null),e=W.resolve(e),r&&Object.prototype.hasOwnProperty.call(r,e))return process.nextTick(i.bind(null,null,r[e]));var n=e,a={},s={},o,c,u,p;d();function d(){var v=Z.exec(e);o=v[0].length,c=v[0],u=v[0],p="",$&&!s[u]?x.lstat(u,function(b){if(b)return i(b);s[u]=!0,h()}):process.nextTick(h)}function h(){if(o>=e.length)return r&&(r[n]=e),i(null,e);D.lastIndex=o;var v=D.exec(e);return p=c,c+=v[0],u=p+v[1],o=D.lastIndex,s[u]||r&&r[u]===u?process.nextTick(h):r&&Object.prototype.hasOwnProperty.call(r,u)?g(r[u]):x.lstat(u,l)}function l(v,b){if(v)return i(v);if(!b.isSymbolicLink())return s[u]=!0,r&&(r[u]=u),process.nextTick(h);if(!$){var F=b.dev.toString(32)+":"+b.ino.toString(32);if(a.hasOwnProperty(F))return f(null,a[F],u)}x.stat(u,function(L){if(L)return i(L);x.readlink(u,function(E,m){$||(a[F]=m),f(E,m)})})}function f(v,b,F){if(v)return i(v);var L=W.resolve(p,b);r&&(r[F]=L),g(L)}function g(v){e=W.resolve(v,e.slice(o)),d()}}});var yt=P((mi,zt)=>{zt.exports=R;R.realpath=R;R.sync=gt;R.realpathSync=gt;R.monkeypatch=ir;R.unmonkeypatch=nr;var V=w("fs"),mt=V.realpath,vt=V.realpathSync,rr=process.version,Qt=/^v[0-5]\./.test(rr),Vt=Kt();function Jt(t){return t&&t.syscall==="realpath"&&(t.code==="ELOOP"||t.code==="ENOMEM"||t.code==="ENAMETOOLONG")}function R(t,e,r){if(Qt)return mt(t,e,r);typeof e=="function"&&(r=e,e=null),mt(t,e,function(i,n){Jt(i)?Vt.realpath(t,e,r):r(i,n)})}function gt(t,e){if(Qt)return vt(t,e);try{return vt(t,e)}catch(r){if(Jt(r))return Vt.realpathSync(t,e);throw r}}function ir(){V.realpath=R,V.realpathSync=gt}function nr(){V.realpath=mt,V.realpathSync=vt}});var Xt=P((vi,Zt)=>{var sr=typeof process=="object"&&process&&process.platform==="win32";Zt.exports=sr?{sep:"\\"}:{sep:"/"}});var ie=P((gi,re)=>{"use strict";re.exports=te;function te(t,e,r){t instanceof RegExp&&(t=Yt(t,r)),e instanceof RegExp&&(e=Yt(e,r));var i=ee(t,e,r);return i&&{start:i[0],end:i[1],pre:r.slice(0,i[0]),body:r.slice(i[0]+t.length,i[1]),post:r.slice(i[1]+e.length)}}function Yt(t,e){var r=e.match(t);return r?r[0]:null}te.range=ee;function ee(t,e,r){var i,n,a,s,o,c=r.indexOf(t),u=r.indexOf(e,c+1),p=c;if(c>=0&&u>0){if(t===e)return[c,u];for(i=[],a=r.length;p>=0&&!o;)p==c?(i.push(p),c=r.indexOf(t,p+1)):i.length==1?o=[i.pop(),u]:(n=i.pop(),n<a&&(a=n,s=u),u=r.indexOf(e,p+1)),p=c<u&&c>=0?c:u;i.length&&(o=[a,s])}return o}});var le=P((yi,he)=>{var ne=ie();he.exports=cr;var se="\0SLASH"+Math.random()+"\0",ae="\0OPEN"+Math.random()+"\0",bt="\0CLOSE"+Math.random()+"\0",oe="\0COMMA"+Math.random()+"\0",ce="\0PERIOD"+Math.random()+"\0";function Et(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function ar(t){return t.split("\\\\").join(se).split("\\{").join(ae).split("\\}").join(bt).split("\\,").join(oe).split("\\.").join(ce)}function or(t){return t.split(se).join("\\").split(ae).join("{").split(bt).join("}").split(oe).join(",").split(ce).join(".")}function ue(t){if(!t)return[""];var e=[],r=ne("{","}",t);if(!r)return t.split(",");var i=r.pre,n=r.body,a=r.post,s=i.split(",");s[s.length-1]+="{"+n+"}";var o=ue(a);return a.length&&(s[s.length-1]+=o.shift(),s.push.apply(s,o)),e.push.apply(e,s),e}function cr(t){return t?(t.substr(0,2)==="{}"&&(t="\\{\\}"+t.substr(2)),X(ar(t),!0).map(or)):[]}function ur(t){return"{"+t+"}"}function hr(t){return/^-?0\d/.test(t)}function lr(t,e){return t<=e}function fr(t,e){return t>=e}function X(t,e){var r=[],i=ne("{","}",t);if(!i)return[t];var n=i.pre,a=i.post.length?X(i.post,!1):[""];if(/\$$/.test(i.pre))for(var s=0;s<a.length;s++){var o=n+"{"+i.body+"}"+a[s];r.push(o)}else{var c=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body),u=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body),p=c||u,d=i.body.indexOf(",")>=0;if(!p&&!d)return i.post.match(/,.*\}/)?(t=i.pre+"{"+i.body+bt+i.post,X(t)):[t];var h;if(p)h=i.body.split(/\.\./);else if(h=ue(i.body),h.length===1&&(h=X(h[0],!1).map(ur),h.length===1))return a.map(function(ft){return i.pre+h[0]+ft});var l;if(p){var f=Et(h[0]),g=Et(h[1]),v=Math.max(h[0].length,h[1].length),b=h.length==3?Math.abs(Et(h[2])):1,F=lr,L=g<f;L&&(b*=-1,F=fr);var E=h.some(hr);l=[];for(var m=f;F(m,g);m+=b){var C;if(u)C=String.fromCharCode(m),C==="\\"&&(C="");else if(C=String(m),E){var q=v-C.length;if(q>0){var j=new Array(q+1).join("0");m<0?C="-"+j+C.slice(1):C=j+C}}l.push(C)}}else{l=[];for(var M=0;M<h.length;M++)l.push.apply(l,X(h[M],!1))}for(var M=0;M<l.length;M++)for(var s=0;s<a.length;s++){var o=n+l[M]+a[s];(!e||p||o)&&r.push(o)}}return r}});var ct=P((bi,kt)=>{var N=kt.exports=(t,e,r={})=>(ot(e),!r.nocomment&&e.charAt(0)==="#"?!1:new J(e,r).match(t));kt.exports=N;var _t=Xt();N.sep=_t.sep;var I=Symbol("globstar **");N.GLOBSTAR=I;var pr=le(),fe={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},St="[^/]",wt=St+"*?",dr="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",mr="(?:(?!(?:\\/|^)\\.).)*?",me=t=>t.split("").reduce((e,r)=>(e[r]=!0,e),{}),pe=me("().*{}+?[]^$\\!"),vr=me("[.("),de=/\/+/;N.filter=(t,e={})=>(r,i,n)=>N(r,t,e);var G=(t,e={})=>{let r={};return Object.keys(t).forEach(i=>r[i]=t[i]),Object.keys(e).forEach(i=>r[i]=e[i]),r};N.defaults=t=>{if(!t||typeof t!="object"||!Object.keys(t).length)return N;let e=N,r=(i,n,a)=>e(i,n,G(t,a));return r.Minimatch=class extends e.Minimatch{constructor(n,a){super(n,G(t,a))}},r.Minimatch.defaults=i=>e.defaults(G(t,i)).Minimatch,r.filter=(i,n)=>e.filter(i,G(t,n)),r.defaults=i=>e.defaults(G(t,i)),r.makeRe=(i,n)=>e.makeRe(i,G(t,n)),r.braceExpand=(i,n)=>e.braceExpand(i,G(t,n)),r.match=(i,n,a)=>e.match(i,n,G(t,a)),r};N.braceExpand=(t,e)=>ve(t,e);var ve=(t,e={})=>(ot(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:pr(t)),gr=1024*64,ot=t=>{if(typeof t!="string")throw new TypeError("invalid pattern");if(t.length>gr)throw new TypeError("pattern is too long")},at=Symbol("subparse");N.makeRe=(t,e)=>new J(t,e||{}).makeRe();N.match=(t,e,r={})=>{let i=new J(e,r);return t=t.filter(n=>i.match(n)),i.options.nonull&&!t.length&&t.push(e),t};var yr=t=>t.replace(/\\(.)/g,"$1"),Er=t=>t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),J=class{constructor(e,r){ot(e),r||(r={}),this.options=r,this.set=[],this.pattern=e,this.windowsPathsNoEscape=!!r.windowsPathsNoEscape||r.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.partial=!!r.partial,this.make()}debug(){}make(){let e=this.pattern,r=this.options;if(!r.nocomment&&e.charAt(0)==="#"){this.comment=!0;return}if(!e){this.empty=!0;return}this.parseNegate();let i=this.globSet=this.braceExpand();r.debug&&(this.debug=(...n)=>console.error(...n)),this.debug(this.pattern,i),i=this.globParts=i.map(n=>n.split(de)),this.debug(this.pattern,i),i=i.map((n,a,s)=>n.map(this.parse,this)),this.debug(this.pattern,i),i=i.filter(n=>n.indexOf(!1)===-1),this.debug(this.pattern,i),this.set=i}parseNegate(){if(this.options.nonegate)return;let e=this.pattern,r=!1,i=0;for(let n=0;n<e.length&&e.charAt(n)==="!";n++)r=!r,i++;i&&(this.pattern=e.substr(i)),this.negate=r}matchOne(e,r,i){var n=this.options;this.debug("matchOne",{this:this,file:e,pattern:r}),this.debug("matchOne",e.length,r.length);for(var a=0,s=0,o=e.length,c=r.length;a<o&&s<c;a++,s++){this.debug("matchOne loop");var u=r[s],p=e[a];if(this.debug(r,u,p),u===!1)return!1;if(u===I){this.debug("GLOBSTAR",[r,u,p]);var d=a,h=s+1;if(h===c){for(this.debug("** at the end");a<o;a++)if(e[a]==="."||e[a]===".."||!n.dot&&e[a].charAt(0)===".")return!1;return!0}for(;d<o;){var l=e[d];if(this.debug(`
globstar while`,e,d,r,h,l),this.matchOne(e.slice(d),r.slice(h),i))return this.debug("globstar found match!",d,o,l),!0;if(l==="."||l===".."||!n.dot&&l.charAt(0)==="."){this.debug("dot detected!",e,d,r,h);break}this.debug("globstar swallow a segment, and continue"),d++}return!!(i&&(this.debug(`
>>> no match, partial?`,e,d,r,h),d===o))}var f;if(typeof u=="string"?(f=p===u,this.debug("string match",u,p,f)):(f=p.match(u),this.debug("pattern match",u,p,f)),!f)return!1}if(a===o&&s===c)return!0;if(a===o)return i;if(s===c)return a===o-1&&e[a]==="";throw new Error("wtf?")}braceExpand(){return ve(this.pattern,this.options)}parse(e,r){ot(e);let i=this.options;if(e==="**")if(i.noglobstar)e="*";else return I;if(e==="")return"";let n="",a=!!i.nocase,s=!1,o=[],c=[],u,p=!1,d=-1,h=-1,l,f,g,v=e.charAt(0)==="."?"":i.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",b=()=>{if(u){switch(u){case"*":n+=wt,a=!0;break;case"?":n+=St,a=!0;break;default:n+="\\"+u;break}this.debug("clearStateChar %j %j",u,n),u=!1}};for(let E=0,m;E<e.length&&(m=e.charAt(E));E++){if(this.debug("%s	%s %s %j",e,E,n,m),s){if(m==="/")return!1;pe[m]&&(n+="\\"),n+=m,s=!1;continue}switch(m){case"/":return!1;case"\\":b(),s=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s	%s %s %j <-- stateChar",e,E,n,m),p){this.debug("  in class"),m==="!"&&E===h+1&&(m="^"),n+=m;continue}this.debug("call clearStateChar %j",u),b(),u=m,i.noext&&b();continue;case"(":if(p){n+="(";continue}if(!u){n+="\\(";continue}o.push({type:u,start:E-1,reStart:n.length,open:fe[u].open,close:fe[u].close}),n+=u==="!"?"(?:(?!(?:":"(?:",this.debug("plType %j %j",u,n),u=!1;continue;case")":if(p||!o.length){n+="\\)";continue}b(),a=!0,f=o.pop(),n+=f.close,f.type==="!"&&c.push(f),f.reEnd=n.length;continue;case"|":if(p||!o.length){n+="\\|";continue}b(),n+="|";continue;case"[":if(b(),p){n+="\\"+m;continue}p=!0,h=E,d=n.length,n+=m;continue;case"]":if(E===h+1||!p){n+="\\"+m;continue}l=e.substring(h+1,E);try{RegExp("["+l+"]")}catch{g=this.parse(l,at),n=n.substr(0,d)+"\\["+g[0]+"\\]",a=a||g[1],p=!1;continue}a=!0,p=!1,n+=m;continue;default:b(),pe[m]&&!(m==="^"&&p)&&(n+="\\"),n+=m;break}}for(p&&(l=e.substr(h+1),g=this.parse(l,at),n=n.substr(0,d)+"\\["+g[0],a=a||g[1]),f=o.pop();f;f=o.pop()){let E;E=n.slice(f.reStart+f.open.length),this.debug("setting tail",n,f),E=E.replace(/((?:\\{2}){0,64})(\\?)\|/g,(C,q,j)=>(j||(j="\\"),q+q+j+"|")),this.debug(`tail=%j
   %s`,E,E,f,n);let m=f.type==="*"?wt:f.type==="?"?St:"\\"+f.type;a=!0,n=n.slice(0,f.reStart)+m+"\\("+E}b(),s&&(n+="\\\\");let F=vr[n.charAt(0)];for(let E=c.length-1;E>-1;E--){let m=c[E],C=n.slice(0,m.reStart),q=n.slice(m.reStart,m.reEnd-8),j=n.slice(m.reEnd),M=n.slice(m.reEnd-8,m.reEnd)+j,ft=C.split("(").length-1,pt=j;for(let Ut=0;Ut<ft;Ut++)pt=pt.replace(/\)[+*?]?/,"");j=pt;let qe=j===""&&r!==at?"$":"";n=C+q+j+qe+M}if(n!==""&&a&&(n="(?=.)"+n),F&&(n=v+n),r===at)return[n,a];if(!a)return yr(e);let L=i.nocase?"i":"";try{return Object.assign(new RegExp("^"+n+"$",L),{_glob:e,_src:n})}catch{return new RegExp("$.")}}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;let e=this.set;if(!e.length)return this.regexp=!1,this.regexp;let r=this.options,i=r.noglobstar?wt:r.dot?dr:mr,n=r.nocase?"i":"",a=e.map(s=>(s=s.map(o=>typeof o=="string"?Er(o):o===I?I:o._src).reduce((o,c)=>(o[o.length-1]===I&&c===I||o.push(c),o),[]),s.forEach((o,c)=>{o!==I||s[c-1]===I||(c===0?s.length>1?s[c+1]="(?:\\/|"+i+"\\/)?"+s[c+1]:s[c]=i:c===s.length-1?s[c-1]+="(?:\\/|"+i+")?":(s[c-1]+="(?:\\/|\\/"+i+"\\/)"+s[c+1],s[c+1]=I))}),s.filter(o=>o!==I).join("/"))).join("|");a="^(?:"+a+")$",this.negate&&(a="^(?!"+a+").*$");try{this.regexp=new RegExp(a,n)}catch{this.regexp=!1}return this.regexp}match(e,r=this.partial){if(this.debug("match",e,this.pattern),this.comment)return!1;if(this.empty)return e==="";if(e==="/"&&r)return!0;let i=this.options;_t.sep!=="/"&&(e=e.split(_t.sep).join("/")),e=e.split(de),this.debug(this.pattern,"split",e);let n=this.set;this.debug(this.pattern,"set",n);let a;for(let s=e.length-1;s>=0&&(a=e[s],!a);s--);for(let s=0;s<n.length;s++){let o=n[s],c=e;if(i.matchBase&&o.length===1&&(c=[a]),this.matchOne(c,o,r))return i.flipNegate?!0:!this.negate}return i.flipNegate?!1:this.negate}static defaults(e){return N.defaults(e).Minimatch}};N.Minimatch=J});var ge=P((wi,At)=>{typeof Object.create=="function"?At.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:At.exports=function(e,r){if(r){e.super_=r;var i=function(){};i.prototype=r.prototype,e.prototype=new i,e.prototype.constructor=e}}});var ye=P((_i,Ot)=>{try{if(Ct=w("util"),typeof Ct.inherits!="function")throw"";Ot.exports=Ct.inherits}catch{Ot.exports=ge()}var Ct});var Nt=P(T=>{T.setopts=Ar;T.ownProp=Ee;T.makeAbs=Y;T.finish=Cr;T.mark=Or;T.isIgnored=we;T.childrenIgnored=Pr;function Ee(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var br=w("fs"),H=w("path"),wr=ct(),be=w("path").isAbsolute,Pt=wr.Minimatch;function _r(t,e){return t.localeCompare(e,"en")}function Sr(t,e){t.ignore=e.ignore||[],Array.isArray(t.ignore)||(t.ignore=[t.ignore]),t.ignore.length&&(t.ignore=t.ignore.map(kr))}function kr(t){var e=null;if(t.slice(-3)==="/**"){var r=t.replace(/(\/\*\*)+$/,"");e=new Pt(r,{dot:!0})}return{matcher:new Pt(t,{dot:!0}),gmatcher:e}}function Ar(t,e,r){if(r||(r={}),r.matchBase&&e.indexOf("/")===-1){if(r.noglobstar)throw new Error("base matching requires globstar");e="**/"+e}t.silent=!!r.silent,t.pattern=e,t.strict=r.strict!==!1,t.realpath=!!r.realpath,t.realpathCache=r.realpathCache||Object.create(null),t.follow=!!r.follow,t.dot=!!r.dot,t.mark=!!r.mark,t.nodir=!!r.nodir,t.nodir&&(t.mark=!0),t.sync=!!r.sync,t.nounique=!!r.nounique,t.nonull=!!r.nonull,t.nosort=!!r.nosort,t.nocase=!!r.nocase,t.stat=!!r.stat,t.noprocess=!!r.noprocess,t.absolute=!!r.absolute,t.fs=r.fs||br,t.maxLength=r.maxLength||1/0,t.cache=r.cache||Object.create(null),t.statCache=r.statCache||Object.create(null),t.symlinks=r.symlinks||Object.create(null),Sr(t,r),t.changedCwd=!1;var i=process.cwd();Ee(r,"cwd")?(t.cwd=H.resolve(r.cwd),t.changedCwd=t.cwd!==i):t.cwd=H.resolve(i),t.root=r.root||H.resolve(t.cwd,"/"),t.root=H.resolve(t.root),t.cwdAbs=be(t.cwd)?t.cwd:Y(t,t.cwd),t.nomount=!!r.nomount,process.platform==="win32"&&(t.root=t.root.replace(/\\/g,"/"),t.cwd=t.cwd.replace(/\\/g,"/"),t.cwdAbs=t.cwdAbs.replace(/\\/g,"/")),r.nonegate=!0,r.nocomment=!0,r.allowWindowsEscape=!0,t.minimatch=new Pt(e,r),t.options=t.minimatch.options}function Cr(t){for(var e=t.nounique,r=e?[]:Object.create(null),i=0,n=t.matches.length;i<n;i++){var a=t.matches[i];if(!a||Object.keys(a).length===0){if(t.nonull){var s=t.minimatch.globSet[i];e?r.push(s):r[s]=!0}}else{var o=Object.keys(a);e?r.push.apply(r,o):o.forEach(function(c){r[c]=!0})}}if(e||(r=Object.keys(r)),t.nosort||(r=r.sort(_r)),t.mark){for(var i=0;i<r.length;i++)r[i]=t._mark(r[i]);t.nodir&&(r=r.filter(function(c){var u=!/\/$/.test(c),p=t.cache[c]||t.cache[Y(t,c)];return u&&p&&(u=p!=="DIR"&&!Array.isArray(p)),u}))}t.ignore.length&&(r=r.filter(function(c){return!we(t,c)})),t.found=r}function Or(t,e){var r=Y(t,e),i=t.cache[r],n=e;if(i){var a=i==="DIR"||Array.isArray(i),s=e.slice(-1)==="/";if(a&&!s?n+="/":!a&&s&&(n=n.slice(0,-1)),n!==e){var o=Y(t,n);t.statCache[o]=t.statCache[r],t.cache[o]=t.cache[r]}}return n}function Y(t,e){var r=e;return e.charAt(0)==="/"?r=H.join(t.root,e):be(e)||e===""?r=e:t.changedCwd?r=H.resolve(t.cwd,e):r=H.resolve(e),process.platform==="win32"&&(r=r.replace(/\\/g,"/")),r}function we(t,e){return t.ignore.length?t.ignore.some(function(r){return r.matcher.match(e)||!!(r.gmatcher&&r.gmatcher.match(e))}):!1}function Pr(t,e){return t.ignore.length?t.ignore.some(function(r){return!!(r.gmatcher&&r.gmatcher.match(e))}):!1}});var Ce=P((Oi,Ae)=>{Ae.exports=ke;ke.GlobSync=S;var Nr=yt(),_e=ct(),ki=_e.Minimatch,Ai=Ft().Glob,Ci=w("util"),jt=w("path"),Se=w("assert"),ut=w("path").isAbsolute,B=Nt(),jr=B.setopts,It=B.ownProp,Ir=B.childrenIgnored,Fr=B.isIgnored;function ke(t,e){if(typeof e=="function"||arguments.length===3)throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);return new S(t,e).found}function S(t,e){if(!t)throw new Error("must provide pattern");if(typeof e=="function"||arguments.length===3)throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);if(!(this instanceof S))return new S(t,e);if(jr(this,t,e),this.noprocess)return this;var r=this.minimatch.set.length;this.matches=new Array(r);for(var i=0;i<r;i++)this._process(this.minimatch.set[i],i,!1);this._finish()}S.prototype._finish=function(){if(Se.ok(this instanceof S),this.realpath){var t=this;this.matches.forEach(function(e,r){var i=t.matches[r]=Object.create(null);for(var n in e)try{n=t._makeAbs(n);var a=Nr.realpathSync(n,t.realpathCache);i[a]=!0}catch(s){if(s.syscall==="stat")i[t._makeAbs(n)]=!0;else throw s}})}B.finish(this)};S.prototype._process=function(t,e,r){Se.ok(this instanceof S);for(var i=0;typeof t[i]=="string";)i++;var n;switch(i){case t.length:this._processSimple(t.join("/"),e);return;case 0:n=null;break;default:n=t.slice(0,i).join("/");break}var a=t.slice(i),s;n===null?s=".":((ut(n)||ut(t.map(function(u){return typeof u=="string"?u:"[*]"}).join("/")))&&(!n||!ut(n))&&(n="/"+n),s=n);var o=this._makeAbs(s);if(!Ir(this,s)){var c=a[0]===_e.GLOBSTAR;c?this._processGlobStar(n,s,o,a,e,r):this._processReaddir(n,s,o,a,e,r)}};S.prototype._processReaddir=function(t,e,r,i,n,a){var s=this._readdir(r,a);if(!!s){for(var o=i[0],c=!!this.minimatch.negate,u=o._glob,p=this.dot||u.charAt(0)===".",d=[],h=0;h<s.length;h++){var l=s[h];if(l.charAt(0)!=="."||p){var f;c&&!t?f=!l.match(o):f=l.match(o),f&&d.push(l)}}var g=d.length;if(g!==0){if(i.length===1&&!this.mark&&!this.stat){this.matches[n]||(this.matches[n]=Object.create(null));for(var h=0;h<g;h++){var l=d[h];t&&(t.slice(-1)!=="/"?l=t+"/"+l:l=t+l),l.charAt(0)==="/"&&!this.nomount&&(l=jt.join(this.root,l)),this._emitMatch(n,l)}return}i.shift();for(var h=0;h<g;h++){var l=d[h],v;t?v=[t,l]:v=[l],this._process(v.concat(i),n,a)}}}};S.prototype._emitMatch=function(t,e){if(!Fr(this,e)){var r=this._makeAbs(e);if(this.mark&&(e=this._mark(e)),this.absolute&&(e=r),!this.matches[t][e]){if(this.nodir){var i=this.cache[r];if(i==="DIR"||Array.isArray(i))return}this.matches[t][e]=!0,this.stat&&this._stat(e)}}};S.prototype._readdirInGlobStar=function(t){if(this.follow)return this._readdir(t,!1);var e,r,i;try{r=this.fs.lstatSync(t)}catch(a){if(a.code==="ENOENT")return null}var n=r&&r.isSymbolicLink();return this.symlinks[t]=n,!n&&r&&!r.isDirectory()?this.cache[t]="FILE":e=this._readdir(t,!1),e};S.prototype._readdir=function(t,e){var r;if(e&&!It(this.symlinks,t))return this._readdirInGlobStar(t);if(It(this.cache,t)){var i=this.cache[t];if(!i||i==="FILE")return null;if(Array.isArray(i))return i}try{return this._readdirEntries(t,this.fs.readdirSync(t))}catch(n){return this._readdirError(t,n),null}};S.prototype._readdirEntries=function(t,e){if(!this.mark&&!this.stat)for(var r=0;r<e.length;r++){var i=e[r];t==="/"?i=t+i:i=t+"/"+i,this.cache[i]=!0}return this.cache[t]=e,e};S.prototype._readdirError=function(t,e){switch(e.code){case"ENOTSUP":case"ENOTDIR":var r=this._makeAbs(t);if(this.cache[r]="FILE",r===this.cwdAbs){var i=new Error(e.code+" invalid cwd "+this.cwd);throw i.path=this.cwd,i.code=e.code,i}break;case"ENOENT":case"ELOOP":case"ENAMETOOLONG":case"UNKNOWN":this.cache[this._makeAbs(t)]=!1;break;default:if(this.cache[this._makeAbs(t)]=!1,this.strict)throw e;this.silent||console.error("glob error",e);break}};S.prototype._processGlobStar=function(t,e,r,i,n,a){var s=this._readdir(r,a);if(!!s){var o=i.slice(1),c=t?[t]:[],u=c.concat(o);this._process(u,n,!1);var p=s.length,d=this.symlinks[r];if(!(d&&a))for(var h=0;h<p;h++){var l=s[h];if(!(l.charAt(0)==="."&&!this.dot)){var f=c.concat(s[h],o);this._process(f,n,!0);var g=c.concat(s[h],i);this._process(g,n,!0)}}}};S.prototype._processSimple=function(t,e){var r=this._stat(t);if(this.matches[e]||(this.matches[e]=Object.create(null)),!!r){if(t&&ut(t)&&!this.nomount){var i=/[\/\\]$/.test(t);t.charAt(0)==="/"?t=jt.join(this.root,t):(t=jt.resolve(this.root,t),i&&(t+="/"))}process.platform==="win32"&&(t=t.replace(/\\/g,"/")),this._emitMatch(e,t)}};S.prototype._stat=function(t){var e=this._makeAbs(t),r=t.slice(-1)==="/";if(t.length>this.maxLength)return!1;if(!this.stat&&It(this.cache,e)){var s=this.cache[e];if(Array.isArray(s)&&(s="DIR"),!r||s==="DIR")return s;if(r&&s==="FILE")return!1}var i,n=this.statCache[e];if(!n){var a;try{a=this.fs.lstatSync(e)}catch(o){if(o&&(o.code==="ENOENT"||o.code==="ENOTDIR"))return this.statCache[e]=!1,!1}if(a&&a.isSymbolicLink())try{n=this.fs.statSync(e)}catch{n=a}else n=a}this.statCache[e]=n;var s=!0;return n&&(s=n.isDirectory()?"DIR":"FILE"),this.cache[e]=this.cache[e]||s,r&&s==="FILE"?!1:s};S.prototype._mark=function(t){return B.mark(this,t)};S.prototype._makeAbs=function(t){return B.makeAbs(this,t)}});var Lt=P((Pi,Pe)=>{Pe.exports=Oe;function Oe(t,e){if(t&&e)return Oe(t)(e);if(typeof t!="function")throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(i){r[i]=t[i]}),r;function r(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];var a=t.apply(this,i),s=i[i.length-1];return typeof a=="function"&&a!==s&&Object.keys(s).forEach(function(o){a[o]=s[o]}),a}}});var Dt=P((Ni,Mt)=>{var Ne=Lt();Mt.exports=Ne(ht);Mt.exports.strict=Ne(je);ht.proto=ht(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return ht(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return je(this)},configurable:!0})});function ht(t){var e=function(){return e.called?e.value:(e.called=!0,e.value=t.apply(this,arguments))};return e.called=!1,e}function je(t){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=t.apply(this,arguments)},r=t.name||"Function wrapped with `once`";return e.onceError=r+" shouldn't be called more than once",e.called=!1,e}});var Fe=P((ji,Ie)=>{var Lr=Lt(),tt=Object.create(null),Mr=Dt();Ie.exports=Lr(Dr);function Dr(t,e){return tt[t]?(tt[t].push(e),null):(tt[t]=[e],xr(t))}function xr(t){return Mr(function e(){var r=tt[t],i=r.length,n=$r(arguments);try{for(var a=0;a<i;a++)r[a].apply(null,n)}finally{r.length>i?(r.splice(0,i),process.nextTick(function(){e.apply(null,n)})):delete tt[t]}})}function $r(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i]=t[i];return r}});var Ft=P((Li,Me)=>{Me.exports=K;var Rr=yt(),Le=ct(),Ii=Le.Minimatch,Gr=ye(),Tr=w("events").EventEmitter,xt=w("path"),$t=w("assert"),et=w("path").isAbsolute,Gt=Ce(),Q=Nt(),qr=Q.setopts,Rt=Q.ownProp,Tt=Fe(),Fi=w("util"),Ur=Q.childrenIgnored,Wr=Q.isIgnored,Hr=Dt();function K(t,e,r){if(typeof e=="function"&&(r=e,e={}),e||(e={}),e.sync){if(r)throw new TypeError("callback provided to sync glob");return Gt(t,e)}return new y(t,e,r)}K.sync=Gt;var Br=K.GlobSync=Gt.GlobSync;K.glob=K;function Kr(t,e){if(e===null||typeof e!="object")return t;for(var r=Object.keys(e),i=r.length;i--;)t[r[i]]=e[r[i]];return t}K.hasMagic=function(t,e){var r=Kr({},e);r.noprocess=!0;var i=new y(t,r),n=i.minimatch.set;if(!t)return!1;if(n.length>1)return!0;for(var a=0;a<n[0].length;a++)if(typeof n[0][a]!="string")return!0;return!1};K.Glob=y;Gr(y,Tr);function y(t,e,r){if(typeof e=="function"&&(r=e,e=null),e&&e.sync){if(r)throw new TypeError("callback provided to sync glob");return new Br(t,e)}if(!(this instanceof y))return new y(t,e,r);qr(this,t,e),this._didRealPath=!1;var i=this.minimatch.set.length;this.matches=new Array(i),typeof r=="function"&&(r=Hr(r),this.on("error",r),this.on("end",function(c){r(null,c)}));var n=this;if(this._processing=0,this._emitQueue=[],this._processQueue=[],this.paused=!1,this.noprocess)return this;if(i===0)return o();for(var a=!0,s=0;s<i;s++)this._process(this.minimatch.set[s],s,!1,o);a=!1;function o(){--n._processing,n._processing<=0&&(a?process.nextTick(function(){n._finish()}):n._finish())}}y.prototype._finish=function(){if($t(this instanceof y),!this.aborted){if(this.realpath&&!this._didRealpath)return this._realpath();Q.finish(this),this.emit("end",this.found)}};y.prototype._realpath=function(){if(this._didRealpath)return;this._didRealpath=!0;var t=this.matches.length;if(t===0)return this._finish();for(var e=this,r=0;r<this.matches.length;r++)this._realpathSet(r,i);function i(){--t===0&&e._finish()}};y.prototype._realpathSet=function(t,e){var r=this.matches[t];if(!r)return e();var i=Object.keys(r),n=this,a=i.length;if(a===0)return e();var s=this.matches[t]=Object.create(null);i.forEach(function(o,c){o=n._makeAbs(o),Rr.realpath(o,n.realpathCache,function(u,p){u?u.syscall==="stat"?s[o]=!0:n.emit("error",u):s[p]=!0,--a===0&&(n.matches[t]=s,e())})})};y.prototype._mark=function(t){return Q.mark(this,t)};y.prototype._makeAbs=function(t){return Q.makeAbs(this,t)};y.prototype.abort=function(){this.aborted=!0,this.emit("abort")};y.prototype.pause=function(){this.paused||(this.paused=!0,this.emit("pause"))};y.prototype.resume=function(){if(this.paused){if(this.emit("resume"),this.paused=!1,this._emitQueue.length){var t=this._emitQueue.slice(0);this._emitQueue.length=0;for(var e=0;e<t.length;e++){var r=t[e];this._emitMatch(r[0],r[1])}}if(this._processQueue.length){var i=this._processQueue.slice(0);this._processQueue.length=0;for(var e=0;e<i.length;e++){var n=i[e];this._processing--,this._process(n[0],n[1],n[2],n[3])}}}};y.prototype._process=function(t,e,r,i){if($t(this instanceof y),$t(typeof i=="function"),!this.aborted){if(this._processing++,this.paused){this._processQueue.push([t,e,r,i]);return}for(var n=0;typeof t[n]=="string";)n++;var a;switch(n){case t.length:this._processSimple(t.join("/"),e,i);return;case 0:a=null;break;default:a=t.slice(0,n).join("/");break}var s=t.slice(n),o;a===null?o=".":((et(a)||et(t.map(function(p){return typeof p=="string"?p:"[*]"}).join("/")))&&(!a||!et(a))&&(a="/"+a),o=a);var c=this._makeAbs(o);if(Ur(this,o))return i();var u=s[0]===Le.GLOBSTAR;u?this._processGlobStar(a,o,c,s,e,r,i):this._processReaddir(a,o,c,s,e,r,i)}};y.prototype._processReaddir=function(t,e,r,i,n,a,s){var o=this;this._readdir(r,a,function(c,u){return o._processReaddir2(t,e,r,i,n,a,u,s)})};y.prototype._processReaddir2=function(t,e,r,i,n,a,s,o){if(!s)return o();for(var c=i[0],u=!!this.minimatch.negate,p=c._glob,d=this.dot||p.charAt(0)===".",h=[],l=0;l<s.length;l++){var f=s[l];if(f.charAt(0)!=="."||d){var g;u&&!t?g=!f.match(c):g=f.match(c),g&&h.push(f)}}var v=h.length;if(v===0)return o();if(i.length===1&&!this.mark&&!this.stat){this.matches[n]||(this.matches[n]=Object.create(null));for(var l=0;l<v;l++){var f=h[l];t&&(t!=="/"?f=t+"/"+f:f=t+f),f.charAt(0)==="/"&&!this.nomount&&(f=xt.join(this.root,f)),this._emitMatch(n,f)}return o()}i.shift();for(var l=0;l<v;l++){var f=h[l],b;t&&(t!=="/"?f=t+"/"+f:f=t+f),this._process([f].concat(i),n,a,o)}o()};y.prototype._emitMatch=function(t,e){if(!this.aborted&&!Wr(this,e)){if(this.paused){this._emitQueue.push([t,e]);return}var r=et(e)?e:this._makeAbs(e);if(this.mark&&(e=this._mark(e)),this.absolute&&(e=r),!this.matches[t][e]){if(this.nodir){var i=this.cache[r];if(i==="DIR"||Array.isArray(i))return}this.matches[t][e]=!0;var n=this.statCache[r];n&&this.emit("stat",e,n),this.emit("match",e)}}};y.prototype._readdirInGlobStar=function(t,e){if(this.aborted)return;if(this.follow)return this._readdir(t,!1,e);var r="lstat\0"+t,i=this,n=Tt(r,a);n&&i.fs.lstat(t,n);function a(s,o){if(s&&s.code==="ENOENT")return e();var c=o&&o.isSymbolicLink();i.symlinks[t]=c,!c&&o&&!o.isDirectory()?(i.cache[t]="FILE",e()):i._readdir(t,!1,e)}};y.prototype._readdir=function(t,e,r){if(!this.aborted&&(r=Tt("readdir\0"+t+"\0"+e,r),!!r)){if(e&&!Rt(this.symlinks,t))return this._readdirInGlobStar(t,r);if(Rt(this.cache,t)){var i=this.cache[t];if(!i||i==="FILE")return r();if(Array.isArray(i))return r(null,i)}var n=this;n.fs.readdir(t,Qr(this,t,r))}};function Qr(t,e,r){return function(i,n){i?t._readdirError(e,i,r):t._readdirEntries(e,n,r)}}y.prototype._readdirEntries=function(t,e,r){if(!this.aborted){if(!this.mark&&!this.stat)for(var i=0;i<e.length;i++){var n=e[i];t==="/"?n=t+n:n=t+"/"+n,this.cache[n]=!0}return this.cache[t]=e,r(null,e)}};y.prototype._readdirError=function(t,e,r){if(!this.aborted){switch(e.code){case"ENOTSUP":case"ENOTDIR":var i=this._makeAbs(t);if(this.cache[i]="FILE",i===this.cwdAbs){var n=new Error(e.code+" invalid cwd "+this.cwd);n.path=this.cwd,n.code=e.code,this.emit("error",n),this.abort()}break;case"ENOENT":case"ELOOP":case"ENAMETOOLONG":case"UNKNOWN":this.cache[this._makeAbs(t)]=!1;break;default:this.cache[this._makeAbs(t)]=!1,this.strict&&(this.emit("error",e),this.abort()),this.silent||console.error("glob error",e);break}return r()}};y.prototype._processGlobStar=function(t,e,r,i,n,a,s){var o=this;this._readdir(r,a,function(c,u){o._processGlobStar2(t,e,r,i,n,a,u,s)})};y.prototype._processGlobStar2=function(t,e,r,i,n,a,s,o){if(!s)return o();var c=i.slice(1),u=t?[t]:[],p=u.concat(c);this._process(p,n,!1,o);var d=this.symlinks[r],h=s.length;if(d&&a)return o();for(var l=0;l<h;l++){var f=s[l];if(!(f.charAt(0)==="."&&!this.dot)){var g=u.concat(s[l],c);this._process(g,n,!0,o);var v=u.concat(s[l],i);this._process(v,n,!0,o)}}o()};y.prototype._processSimple=function(t,e,r){var i=this;this._stat(t,function(n,a){i._processSimple2(t,e,n,a,r)})};y.prototype._processSimple2=function(t,e,r,i,n){if(this.matches[e]||(this.matches[e]=Object.create(null)),!i)return n();if(t&&et(t)&&!this.nomount){var a=/[\/\\]$/.test(t);t.charAt(0)==="/"?t=xt.join(this.root,t):(t=xt.resolve(this.root,t),a&&(t+="/"))}process.platform==="win32"&&(t=t.replace(/\\/g,"/")),this._emitMatch(e,t),n()};y.prototype._stat=function(t,e){var r=this._makeAbs(t),i=t.slice(-1)==="/";if(t.length>this.maxLength)return e();if(!this.stat&&Rt(this.cache,r)){var n=this.cache[r];if(Array.isArray(n)&&(n="DIR"),!i||n==="DIR")return e(null,n);if(i&&n==="FILE")return e()}var a,s=this.statCache[r];if(s!==void 0){if(s===!1)return e(null,s);var o=s.isDirectory()?"DIR":"FILE";return i&&o==="FILE"?e():e(null,o,s)}var c=this,u=Tt("stat\0"+r,p);u&&c.fs.lstat(r,u);function p(d,h){if(h&&h.isSymbolicLink())return c.fs.stat(r,function(l,f){l?c._stat2(t,r,null,h,e):c._stat2(t,r,l,f,e)});c._stat2(t,r,d,h,e)}};y.prototype._stat2=function(t,e,r,i,n){if(r&&(r.code==="ENOENT"||r.code==="ENOTDIR"))return this.statCache[e]=!1,n();var a=t.slice(-1)==="/";if(this.statCache[e]=i,e.slice(-1)==="/"&&i&&!i.isDirectory())return n(null,!1,i);var s=!0;return i&&(s=i.isDirectory()?"DIR":"FILE"),this.cache[e]=this.cache[e]||s,a&&s==="FILE"?n():n(null,s,i)}});var ri={};Qe(ri,{default:()=>ei});var z=w("@yarnpkg/core");var k=w("@yarnpkg/core"),U=w("@yarnpkg/fslib"),_=".build-result-cache-rc.json";function Je(t,e){if(typeof t!="object")return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config is not an object!`),!1;if(!Array.isArray(t.scriptsToCache))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache is not an array!`),!1;if(t.scriptsToCache.find(r=>typeof r!="object")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache should only contain objects!`),!1;if(t.scriptsToCache.find(r=>!Ze(r,e))!==void 0)return!1;if(t.remoteCaches){if(!Array.isArray(t.remoteCaches))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.remoteCaches is not an array!`),!1;if(t.remoteCaches.find(r=>typeof r!="string")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.remoteCaches should only contain strings!`),!1;if(t.remoteCaches.find(r=>!ze(r))!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.remoteCaches should only contain valid URLs!`),!1}return!0}function ze(t){try{return new URL(t),!0}catch{return!1}}function Ze(t,e){if(typeof t.scriptName!="string")return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.scriptName is no string!`),!1;if(t.inputIncludes!==void 0&&typeof t.inputIncludes!="string"){if(!Array.isArray(t.inputIncludes))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.inputIncludes for ${t.scriptName} is not an array!`),!1;if(t.inputIncludes.find(r=>typeof r!="string")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.inputIncludes for ${t.scriptName} should only contain strings!`),!1}if(t.inputExcludes!==void 0&&typeof t.inputExcludes!="string"){if(!Array.isArray(t.inputExcludes))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.inputExcludes for ${t.scriptName} is not an array!`),!1;if(t.inputExcludes.find(r=>typeof r!="string")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.inputExcludes for ${t.scriptName} should only contain strings!`),!1}if(t.outputIncludes!==void 0&&typeof t.outputIncludes!="string"){if(!Array.isArray(t.outputIncludes))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.outputIncludes for ${t.scriptName} is not an array!`),!1;if(t.outputIncludes.find(r=>typeof r!="string")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.outputIncludes for ${t.scriptName} should only contain strings!`),!1}if(t.outputExcludes!==void 0&&typeof t.outputExcludes!="string"){if(!Array.isArray(t.outputExcludes))return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.outputExcludes for ${t.scriptName} is not an array!`),!1;if(t.outputExcludes.find(r=>typeof r!="string")!==void 0)return e.reportError(k.MessageName.UNNAMED,`${_} is not valid: config.scriptsToCache.outputExcludes for ${t.scriptName} should only contain strings!`),!1}return!0}async function it(t,e){let r=U.ppath.join(t,(0,U.toFilename)(_));if(await U.xfs.existsPromise(r)){let i=await U.xfs.readFilePromise(r,"utf-8");try{let n=JSON.parse(i);if(Je(n,e))return n}catch(n){e.reportErrorOnce(k.MessageName.EXCEPTION,`${_} is not valid:`),e.reportExceptionOnce(n)}}}var O=w("@yarnpkg/fslib"),nt=class{constructor(e){this.cwd=e}async saveCacheEntry(e){let r=Date.now().toString()+".json",i=JSON.stringify(e),n=O.ppath.join(this.cwd,(0,O.toFilename)(".build-result-cache"));await O.xfs.mkdirPromise(n,{recursive:!0});let a=O.ppath.join(n,(0,O.toFilename)(r));await O.xfs.writeFilePromise(a,i)}async loadCacheEntry(e){let r=O.ppath.join(this.cwd,(0,O.toFilename)(".build-result-cache"));if(!await O.xfs.existsPromise(r))return;let i=await O.xfs.readdirPromise(r);for(let n of i){let a=O.ppath.join(r,n),s=await O.xfs.readFilePromise(a,"utf8"),o=JSON.parse(s);if(Xe(e,o.key))return o}}};function Xe(t,e){return JSON.stringify(t)===JSON.stringify(e)}var st=class{constructor(e){this.url=e}async saveCacheEntry(e){}async loadCacheEntry(e){}};function Bt(t,e){let r=[new nt(t)];return e.remoteCaches&&e.remoteCaches.forEach(i=>r.push(new st(new URL(i)))),r}var xe=w("@yarnpkg/core"),A=w("@yarnpkg/fslib"),$e=Ht(w("crypto"));var qt=Ht(Ft());async function Re(t,e,r,i,n,a){let s=await Te(t,e,r,i,n);if(!s)return;let o=await zr(r.cwd,i),c={key:s,value:o};for(let u of a)await u.saveCacheEntry(c)}async function Ge(t,e,r,i,n,a){let s=await Te(t,e,r,i,n);if(!s)return!1;for(let o of a){let c=await o.loadCacheEntry(s);if(c)return await Zr(r.cwd,c.value),!0}return!1}async function Te(t,e,r,i,n){let a=r.script,s=r.args,o=t.lockFileChecksum,c=t.topLevelWorkspace.locator.locatorHash,u=e.locatorHash,p={},d=t.getWorkspaceByLocator(e);for(let l of d.getRecursiveWorkspaceDependencies()){let f=Vr(l.locator),g=await it(l.cwd,n);if(!g){n.reportError(xe.MessageName.UNNAMED,`Did not find a valid ${_} in workspace ${f}. All workspaces you depend on also need to be cachable!`);return}let v={};for(let b of g.scriptsToCache)v[b.scriptName]=await De(l.cwd,b.outputIncludes,b.outputExcludes);p[f]=v}let h=await De(r.cwd,i.inputIncludes,i.inputExcludes);return{script:a,args:s,lockFileChecksum:o,topLevelWorkspaceLocatorHash:c,workspaceLocatorHash:u,globFileHashes:h,workspaceGlobFileHashes:p}}function Vr(t){return t.scope?`${t.scope}/${t.name}@${t.reference}`:`${t.name}@${t.reference}`}async function De(t,e,r){let i={};for(let n of lt(e)){let a=A.npath.fromPortablePath(t),s=qt.glob.sync(n,{cwd:a,ignore:lt(r)}),o={};for(let c of s){let u=A.npath.toPortablePath(c),p=A.ppath.resolve(t,u);(await A.xfs.statPromise(p)).isFile()&&(o[u]=await Jr(p))}i[n]=o}return i}async function Jr(t){let e=$e.default.createHash("sha512"),r=await A.xfs.readFilePromise(t,"base64");return e.update(r),e.digest("base64")}async function zr(t,e){let r={};for(let i of lt(e.outputIncludes)){let n=A.npath.fromPortablePath(t),a=qt.glob.sync(i,{cwd:n,ignore:lt(e.outputExcludes)}),s={};for(let o of a){let c=A.npath.toPortablePath(o),u=A.ppath.resolve(t,c);(await A.xfs.statPromise(u)).isFile()&&(s[c]=await A.xfs.readFilePromise(u,"base64"))}r[i]=s}return{globFileContents:r}}async function Zr(t,e){for(let r of Object.values(e.globFileContents))for(let[i,n]of Object.entries(r)){let a=A.ppath.join(t,i),s=A.ppath.dirname(a);await A.xfs.mkdirPromise(s,{recursive:!0}),await A.xfs.writeFilePromise(a,n,{encoding:"base64"})}}function lt(t){return t===void 0?[]:typeof t=="string"?[t]:t}async function Xr(t){let e=z.Configuration.create(t.cwd);return z.StreamReport.start({configuration:e,includeFooter:!1,stdout:t.stdout},async()=>{})}var Yr=async(t,e,r,i,n)=>{let a=await Xr(n),s=await it(n.cwd,a),o=s?s.scriptsToCache.find(c=>c.scriptName===i):void 0;if(s&&o){let c=Bt(n.cwd,s);return async()=>{if(await Ge(e,r,n,o,a,c))return a.reportInfo(z.MessageName.UNNAMED,"Build result was restored from cache!"),Promise.resolve(0);{let u=await t();return u===0&&await a.startTimerPromise("Updating build result cache",async()=>{await Re(e,r,n,o,a,c)}),u}}}else return t},ti={hooks:{wrapScriptExecution:Yr}},ei=ti;return Ve(ri);})();
return plugin;
}
};
