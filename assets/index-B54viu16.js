var Bm=Object.defineProperty;var zm=(s,e,t)=>e in s?Bm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var pt=(s,e,t)=>(zm(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Qe(){}const kl=s=>s;function yn(s,e){for(const t in e)s[t]=e[t];return s}function km(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function qf(s){return s()}function Hh(){return Object.create(null)}function os(s){s.forEach(qf)}function Js(s){return typeof s=="function"}function Ft(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let ia;function Vm(s,e){return s===e?!0:(ia||(ia=document.createElement("a")),ia.href=e,s===ia.href)}function Hm(s){return Object.keys(s).length===0}function Yf(s,...e){if(s==null){for(const n of e)n(void 0);return Qe}const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function un(s,e,t){s.$$.on_destroy.push(Yf(e,t))}function Bn(s,e,t,n){if(s){const i=Zf(s,e,t,n);return s[0](i)}}function Zf(s,e,t,n){return s[1]&&n?yn(t.ctx.slice(),s[1](n(e))):t.ctx}function zn(s,e,t,n){if(s[2]&&n){const i=s[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|i[o];return r}return e.dirty|i}return e.dirty}function kn(s,e,t,n,i,r){if(i){const a=Zf(e,t,n,r);s.p(a,i)}}function Vn(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Mr(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function so(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function Gh(s,e,t){return s.set(t),e}function Vl(s){return s&&Js(s.destroy)?s.destroy:Qe}const Jf=typeof window<"u";let Hl=Jf?()=>window.performance.now():()=>Date.now(),Gl=Jf?s=>requestAnimationFrame(s):Qe;const Vs=new Set;function Kf(s){Vs.forEach(e=>{e.c(s)||(Vs.delete(e),e.f())}),Vs.size!==0&&Gl(Kf)}function Wl(s){let e;return Vs.size===0&&Gl(Kf),{promise:new Promise(t=>{Vs.add(e={c:s,f:t})}),abort(){Vs.delete(e)}}}function We(s,e){s.appendChild(e)}function $f(s){if(!s)return document;const e=s.getRootNode?s.getRootNode():s.ownerDocument;return e&&e.host?e:s.ownerDocument}function Gm(s){const e=je("style");return e.textContent="/* empty */",Wm($f(s),e),e.sheet}function Wm(s,e){return We(s.head||s,e),e.sheet}function tt(s,e,t){s.insertBefore(e,t||null)}function Je(s){s.parentNode&&s.parentNode.removeChild(s)}function je(s){return document.createElement(s)}function Kn(s){return document.createTextNode(s)}function ut(){return Kn(" ")}function cs(){return Kn("")}function Xm(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function gt(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}const qm=["width","height"];function Wh(s,e){const t=Object.getOwnPropertyDescriptors(s.__proto__);for(const n in e)e[n]==null?s.removeAttribute(n):n==="style"?s.style.cssText=e[n]:n==="__value"?s.value=s[n]=e[n]:t[n]&&t[n].set&&qm.indexOf(n)===-1?s[n]=e[n]:gt(s,n,e[n])}function Ym(s){return Array.from(s.childNodes)}function jf(s,e){e=""+e,s.data!==e&&(s.data=e)}function Qo(s,e,t,n){t==null?s.style.removeProperty(e):s.style.setProperty(e,t,n?"important":"")}function Qf(s,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(s,{detail:e,bubbles:t,cancelable:n})}function Xh(s,e){return new s(e)}const ro=new Map;let ao=0;function Zm(s){let e=5381,t=s.length;for(;t--;)e=(e<<5)-e^s.charCodeAt(t);return e>>>0}function Jm(s,e){const t={stylesheet:Gm(e),rules:{}};return ro.set(s,t),t}function ed(s,e,t,n,i,r,a,o=0){const c=16.666/n;let l=`{
`;for(let m=0;m<=1;m+=c){const p=e+(t-e)*r(m);l+=m*100+`%{${a(p,1-p)}}
`}const h=l+`100% {${a(t,1-t)}}
}`,u=`__svelte_${Zm(h)}_${o}`,f=$f(s),{stylesheet:d,rules:g}=ro.get(f)||Jm(f,s);g[u]||(g[u]=!0,d.insertRule(`@keyframes ${u} ${h}`,d.cssRules.length));const _=s.style.animation||"";return s.style.animation=`${_?`${_}, `:""}${u} ${n}ms linear ${i}ms 1 both`,ao+=1,u}function Wc(s,e){const t=(s.style.animation||"").split(", "),n=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=t.length-n.length;i&&(s.style.animation=n.join(", "),ao-=i,ao||Km())}function Km(){Gl(()=>{ao||(ro.forEach(s=>{const{ownerNode:e}=s.stylesheet;e&&Je(e)}),ro.clear())})}let Sr;function Qn(s){Sr=s}function Ci(){if(!Sr)throw new Error("Function called outside component initialization");return Sr}function go(s){Ci().$$.on_mount.push(s)}function Cn(s){Ci().$$.on_destroy.push(s)}function $m(){const s=Ci();return(e,t,{cancelable:n=!1}={})=>{const i=s.$$.callbacks[e];if(i){const r=Qf(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(s,r)}),!r.defaultPrevented}return!0}}function fn(s,e){return Ci().$$.context.set(s,e),e}function dn(s){return Ci().$$.context.get(s)}const Ns=[],Xc=[];let Hs=[];const qh=[],td=Promise.resolve();let qc=!1;function nd(){qc||(qc=!0,td.then(Xl))}function jm(){return nd(),td}function Ws(s){Hs.push(s)}const ec=new Set;let fs=0;function Xl(){if(fs!==0)return;const s=Sr;do{try{for(;fs<Ns.length;){const e=Ns[fs];fs++,Qn(e),Qm(e.$$)}}catch(e){throw Ns.length=0,fs=0,e}for(Qn(null),Ns.length=0,fs=0;Xc.length;)Xc.pop()();for(let e=0;e<Hs.length;e+=1){const t=Hs[e];ec.has(t)||(ec.add(t),t())}Hs.length=0}while(Ns.length);for(;qh.length;)qh.pop()();qc=!1,ec.clear(),Qn(s)}function Qm(s){if(s.fragment!==null){s.update(),os(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(Ws)}}function eg(s){const e=[],t=[];Hs.forEach(n=>s.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Hs=e}let ir;function id(){return ir||(ir=Promise.resolve(),ir.then(()=>{ir=null})),ir}function oo(s,e,t){s.dispatchEvent(Qf(`${e?"intro":"outro"}${t}`))}const Ka=new Set;let Si;function ri(){Si={r:0,c:[],p:Si}}function ai(){Si.r||os(Si.c),Si=Si.p}function De(s,e){s&&s.i&&(Ka.delete(s),s.i(e))}function Oe(s,e,t,n){if(s&&s.o){if(Ka.has(s))return;Ka.add(s),Si.c.push(()=>{Ka.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}const sd={duration:0};function tg(s,e,t){const n={direction:"in"};let i=e(s,t,n),r=!1,a,o,c=0;function l(){a&&Wc(s,a)}function h(){const{delay:f=0,duration:d=300,easing:g=kl,tick:_=Qe,css:m}=i||sd;m&&(a=ed(s,0,1,d,f,g,m,c++)),_(0,1);const p=Hl()+f,v=p+d;o&&o.abort(),r=!0,Ws(()=>oo(s,!0,"start")),o=Wl(x=>{if(r){if(x>=v)return _(1,0),oo(s,!0,"end"),l(),r=!1;if(x>=p){const y=g((x-p)/d);_(y,1-y)}}return r})}let u=!1;return{start(){u||(u=!0,Wc(s),Js(i)?(i=i(n),id().then(h)):h())},invalidate(){u=!1},end(){r&&(l(),r=!1)}}}function ng(s,e,t){const n={direction:"out"};let i=e(s,t,n),r=!0,a;const o=Si;o.r+=1;let c;function l(){const{delay:h=0,duration:u=300,easing:f=kl,tick:d=Qe,css:g}=i||sd;g&&(a=ed(s,1,0,u,h,f,g));const _=Hl()+h,m=_+u;Ws(()=>oo(s,!1,"start")),"inert"in s&&(c=s.inert,s.inert=!0),Wl(p=>{if(r){if(p>=m)return d(0,1),oo(s,!1,"end"),--o.r||os(o.c),!1;if(p>=_){const v=f((p-_)/u);d(1-v,v)}}return r})}return Js(i)?id().then(()=>{i=i(n),l()}):l(),{end(h){h&&"inert"in s&&(s.inert=c),h&&i.tick&&i.tick(1,0),r&&(a&&Wc(s,a),r=!1)}}}function Yh(s,e){const t=e.token={};function n(i,r,a,o){if(e.token!==t)return;e.resolved=o;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=o);const l=i&&(e.current=i)(c);let h=!1;e.block&&(e.blocks?e.blocks.forEach((u,f)=>{f!==r&&u&&(ri(),Oe(u,1,1,()=>{e.blocks[f]===u&&(e.blocks[f]=null)}),ai())}):e.block.d(1),l.c(),De(l,1),l.m(e.mount(),e.anchor),h=!0),e.block=l,e.blocks&&(e.blocks[r]=l),h&&Xl()}if(km(s)){const i=Ci();if(s.then(r=>{Qn(i),n(e.then,1,e.value,r),Qn(null)},r=>{if(Qn(i),n(e.catch,2,e.error,r),Qn(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function ig(s,e,t){const n=e.slice(),{resolved:i}=s;s.current===s.then&&(n[s.value]=i),s.current===s.catch&&(n[s.error]=i),s.block.p(n,t)}function Yc(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const a=s[r],o=e[r];if(o){for(const c in a)c in o||(n[c]=1);for(const c in o)i[c]||(t[c]=o[c],i[c]=1);s[r]=o}else for(const c in a)i[c]=1}for(const a in n)a in t||(t[a]=void 0);return t}function sa(s){return typeof s=="object"&&s!==null?s:{}}function Ut(s){s&&s.c()}function Ct(s,e,t){const{fragment:n,after_update:i}=s.$$;n&&n.m(e,t),Ws(()=>{const r=s.$$.on_mount.map(qf).filter(Js);s.$$.on_destroy?s.$$.on_destroy.push(...r):os(r),s.$$.on_mount=[]}),i.forEach(Ws)}function Rt(s,e){const t=s.$$;t.fragment!==null&&(eg(t.after_update),os(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function sg(s,e){s.$$.dirty[0]===-1&&(Ns.push(s),nd(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function jt(s,e,t,n,i,r,a=null,o=[-1]){const c=Sr;Qn(s);const l=s.$$={fragment:null,ctx:[],props:r,update:Qe,not_equal:i,bound:Hh(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Hh(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let h=!1;if(l.ctx=t?t(s,e.props||{},(u,f,...d)=>{const g=d.length?d[0]:f;return l.ctx&&i(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),h&&sg(s,u)),f}):[],l.update(),h=!0,os(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const u=Ym(e.target);l.fragment&&l.fragment.l(u),u.forEach(Je)}else l.fragment&&l.fragment.c();e.intro&&De(s.$$.fragment),Ct(s,e.target,e.anchor),Xl()}Qn(c)}class Qt{constructor(){pt(this,"$$");pt(this,"$$set")}$destroy(){Rt(this,1),this.$destroy=Qe}$on(e,t){if(!Js(t))return Qe;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Hm(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const rg="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(rg);const Zc={},co={},rd={},ad=/^:(.+)/,Zh=4,ag=3,og=2,cg=1,lg=1,br=s=>s.replace(/(^\/+|\/+$)/g,"").split("/"),tc=s=>s.replace(/(^\/+|\/+$)/g,""),hg=(s,e)=>{const t=s.default?0:br(s.path).reduce((n,i)=>(n+=Zh,i===""?n+=lg:ad.test(i)?n+=og:i[0]==="*"?n-=Zh+cg:n+=ag,n),0);return{route:s,score:t,index:e}},ug=s=>s.map(hg).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index),Jh=(s,e)=>{let t,n;const[i]=e.split("?"),r=br(i),a=r[0]==="",o=ug(s);for(let c=0,l=o.length;c<l;c++){const h=o[c].route;let u=!1;if(h.default){n={route:h,params:{},uri:e};continue}const f=br(h.path),d={},g=Math.max(r.length,f.length);let _=0;for(;_<g;_++){const m=f[_],p=r[_];if(m&&m[0]==="*"){const x=m==="*"?"*":m.slice(1);d[x]=r.slice(_).map(decodeURIComponent).join("/");break}if(typeof p>"u"){u=!0;break}const v=ad.exec(m);if(v&&!a){const x=decodeURIComponent(p);d[v[1]]=x}else if(m!==p){u=!0;break}}if(!u){t={route:h,params:d,uri:"/"+r.slice(0,_).join("/")};break}}return t||n||null},nc=(s,e)=>s+(e?`?${e}`:""),fg=(s,e)=>{if(s.startsWith("/"))return s;const[t,n]=s.split("?"),[i]=e.split("?"),r=br(t),a=br(i);if(r[0]==="")return nc(i,n);if(!r[0].startsWith(".")){const l=a.concat(r).join("/");return nc((i==="/"?"":"/")+l,n)}const o=a.concat(r),c=[];return o.forEach(l=>{l===".."?c.pop():l!=="."&&c.push(l)}),nc("/"+c.join("/"),n)},Kh=(s,e)=>`${tc(e==="/"?s:`${tc(s)}/${tc(e)}`)}/`,od=s=>!s.defaultPrevented&&s.button===0&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey),dg=s=>{const e=location.host;return s.host===e||s.href.indexOf(`https://${e}`)===0||s.href.indexOf(`http://${e}`)===0},cd=()=>typeof window<"u"&&"document"in window&&"location"in window,pg=s=>({active:s&4}),$h=s=>({active:!!s[2]});function mg(s){let e,t,n,i;const r=s[17].default,a=Bn(r,s,s[16],$h);let o=[{href:s[0]},{"aria-current":s[2]},s[1],s[6]],c={};for(let l=0;l<o.length;l+=1)c=yn(c,o[l]);return{c(){e=je("a"),a&&a.c(),Wh(e,c)},m(l,h){tt(l,e,h),a&&a.m(e,null),t=!0,n||(i=Xm(e,"click",s[5]),n=!0)},p(l,[h]){a&&a.p&&(!t||h&65540)&&kn(a,r,l,l[16],t?zn(r,l[16],h,pg):Vn(l[16]),$h),Wh(e,c=Yc(o,[(!t||h&1)&&{href:l[0]},(!t||h&4)&&{"aria-current":l[2]},h&2&&l[1],h&64&&l[6]]))},i(l){t||(De(a,l),t=!0)},o(l){Oe(a,l),t=!1},d(l){l&&Je(e),a&&a.d(l),n=!1,i()}}}function gg(s,e,t){let n;const i=["to","replace","state","getProps","preserveScroll"];let r=so(e,i),a,o,{$$slots:c={},$$scope:l}=e,{to:h="#"}=e,{replace:u=!1}=e,{state:f={}}=e,{getProps:d=()=>({})}=e,{preserveScroll:g=!1}=e;const _=dn(Zc);un(s,_,P=>t(14,a=P));const{base:m}=dn(co);un(s,m,P=>t(15,o=P));const{navigate:p}=dn(rd),v=$m();let x,y,T,E;const A=P=>{if(v("click",P),od(P)){P.preventDefault();const D=a.pathname===x||u;p(x,{state:f,replace:D,preserveScroll:g})}};return s.$$set=P=>{e=yn(yn({},e),Mr(P)),t(6,r=so(e,i)),"to"in P&&t(7,h=P.to),"replace"in P&&t(8,u=P.replace),"state"in P&&t(9,f=P.state),"getProps"in P&&t(10,d=P.getProps),"preserveScroll"in P&&t(11,g=P.preserveScroll),"$$scope"in P&&t(16,l=P.$$scope)},s.$$.update=()=>{s.$$.dirty&32896&&t(0,x=fg(h,o.uri)),s.$$.dirty&16385&&t(12,y=a.pathname.startsWith(x)),s.$$.dirty&16385&&t(13,T=x===a.pathname),s.$$.dirty&8192&&t(2,n=T?"page":void 0),t(1,E=d({location:a,href:x,isPartiallyCurrent:y,isCurrent:T,existingProps:r}))},[x,E,n,_,m,A,r,h,u,f,d,g,y,T,a,o,l,c]}class _g extends Qt{constructor(e){super(),jt(this,e,gg,mg,Ft,{to:7,replace:8,state:9,getProps:10,preserveScroll:11})}}const xg=s=>({params:s&4}),jh=s=>({params:s[2]});function Qh(s){let e,t,n,i;const r=[yg,vg],a=[];function o(c,l){return c[0]?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=cs()},m(c,l){a[e].m(c,l),tt(c,n,l),i=!0},p(c,l){let h=e;e=o(c),e===h?a[e].p(c,l):(ri(),Oe(a[h],1,1,()=>{a[h]=null}),ai(),t=a[e],t?t.p(c,l):(t=a[e]=r[e](c),t.c()),De(t,1),t.m(n.parentNode,n))},i(c){i||(De(t),i=!0)},o(c){Oe(t),i=!1},d(c){c&&Je(n),a[e].d(c)}}}function vg(s){let e;const t=s[8].default,n=Bn(t,s,s[7],jh);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&132)&&kn(n,t,i,i[7],e?zn(t,i[7],r,xg):Vn(i[7]),jh)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function yg(s){let e,t,n,i={ctx:s,current:null,token:null,hasCatch:!1,pending:bg,then:Sg,catch:Mg,value:12,blocks:[,,,]};return Yh(t=s[0],i),{c(){e=cs(),i.block.c()},m(r,a){tt(r,e,a),i.block.m(r,i.anchor=a),i.mount=()=>e.parentNode,i.anchor=e,n=!0},p(r,a){s=r,i.ctx=s,a&1&&t!==(t=s[0])&&Yh(t,i)||ig(i,s,a)},i(r){n||(De(i.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const o=i.blocks[a];Oe(o)}n=!1},d(r){r&&Je(e),i.block.d(r),i.token=null,i=null}}}function Mg(s){return{c:Qe,m:Qe,p:Qe,i:Qe,o:Qe,d:Qe}}function Sg(s){var o;let e,t,n;const i=[s[2],s[3]];var r=((o=s[12])==null?void 0:o.default)||s[12];function a(c,l){let h={};for(let u=0;u<i.length;u+=1)h=yn(h,i[u]);return l!==void 0&&l&12&&(h=yn(h,Yc(i,[l&4&&sa(c[2]),l&8&&sa(c[3])]))),{props:h}}return r&&(e=Xh(r,a(s))),{c(){e&&Ut(e.$$.fragment),t=cs()},m(c,l){e&&Ct(e,c,l),tt(c,t,l),n=!0},p(c,l){var h;if(l&1&&r!==(r=((h=c[12])==null?void 0:h.default)||c[12])){if(e){ri();const u=e;Oe(u.$$.fragment,1,0,()=>{Rt(u,1)}),ai()}r?(e=Xh(r,a(c,l)),Ut(e.$$.fragment),De(e.$$.fragment,1),Ct(e,t.parentNode,t)):e=null}else if(r){const u=l&12?Yc(i,[l&4&&sa(c[2]),l&8&&sa(c[3])]):{};e.$set(u)}},i(c){n||(e&&De(e.$$.fragment,c),n=!0)},o(c){e&&Oe(e.$$.fragment,c),n=!1},d(c){c&&Je(t),e&&Rt(e,c)}}}function bg(s){return{c:Qe,m:Qe,p:Qe,i:Qe,o:Qe,d:Qe}}function Eg(s){let e,t,n=s[1]&&s[1].route===s[5]&&Qh(s);return{c(){n&&n.c(),e=cs()},m(i,r){n&&n.m(i,r),tt(i,e,r),t=!0},p(i,[r]){i[1]&&i[1].route===i[5]?n?(n.p(i,r),r&2&&De(n,1)):(n=Qh(i),n.c(),De(n,1),n.m(e.parentNode,e)):n&&(ri(),Oe(n,1,1,()=>{n=null}),ai())},i(i){t||(De(n),t=!0)},o(i){Oe(n),t=!1},d(i){i&&Je(e),n&&n.d(i)}}}function wg(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{path:a=""}=e,{component:o=null}=e,c={},l={};const{registerRoute:h,unregisterRoute:u,activeRoute:f}=dn(co);un(s,f,g=>t(1,n=g));const d={path:a,default:a===""};return h(d),Cn(()=>{u(d)}),s.$$set=g=>{t(11,e=yn(yn({},e),Mr(g))),"path"in g&&t(6,a=g.path),"component"in g&&t(0,o=g.component),"$$scope"in g&&t(7,r=g.$$scope)},s.$$.update=()=>{if(n&&n.route===d){t(2,c=n.params);const{component:g,path:_,...m}=e;t(3,l=m),g&&(g.toString().startsWith("class ")?t(0,o=g):t(0,o=g())),cd()&&!n.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=Mr(e),[o,n,c,l,f,d,a,r,i]}class sr extends Qt{constructor(e){super(),jt(this,e,wg,Eg,Ft,{path:6,component:0})}}const ds=[];function Ag(s,e){return{subscribe:Jt(s,e).subscribe}}function Jt(s,e=Qe){let t;const n=new Set;function i(o){if(Ft(s,o)&&(s=o,t)){const c=!ds.length;for(const l of n)l[1](),ds.push(l,s);if(c){for(let l=0;l<ds.length;l+=2)ds[l][0](ds[l+1]);ds.length=0}}}function r(o){i(o(s))}function a(o,c=Qe){const l=[o,c];return n.add(l),n.size===1&&(t=e(i,r)||Qe),o(s),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}function ql(s,e,t){const n=!Array.isArray(s),i=n?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return Ag(t,(a,o)=>{let c=!1;const l=[];let h=0,u=Qe;const f=()=>{if(h)return;u();const g=e(n?l[0]:l,a,o);r?a(g):u=Js(g)?g:Qe},d=i.map((g,_)=>Yf(g,m=>{l[_]=m,h&=~(1<<_),c&&f()},()=>{h|=1<<_}));return c=!0,f(),function(){os(d),u(),c=!1}})}const ic=s=>({...s.location,state:s.history.state,key:s.history.state&&s.history.state.key||"initial"}),Tg=s=>{const e=[];let t=ic(s);return{get location(){return t},listen(n){e.push(n);const i=()=>{t=ic(s),n({location:t,action:"POP"})};return s.addEventListener("popstate",i),()=>{s.removeEventListener("popstate",i);const r=e.indexOf(n);e.splice(r,1)}},navigate(n,{state:i,replace:r=!1,preserveScroll:a=!1,blurActiveElement:o=!0}={}){i={...i,key:Date.now()+""};try{r?s.history.replaceState(i,"",n):s.history.pushState(i,"",n)}catch{s.location[r?"replace":"assign"](n)}t=ic(s),e.forEach(c=>c({location:t,action:"PUSH",preserveScroll:a})),o&&document.activeElement.blur()}}},Cg=(s="/")=>{let e=0;const t=[{pathname:s,search:""}],n=[];return{get location(){return t[e]},addEventListener(i,r){},removeEventListener(i,r){},history:{get entries(){return t},get index(){return e},get state(){return n[e]},pushState(i,r,a){const[o,c=""]=a.split("?");e++,t.push({pathname:o,search:c}),n.push(i)},replaceState(i,r,a){const[o,c=""]=a.split("?");t[e]={pathname:o,search:c},n[e]=i}}}},ld=Tg(cd()?window:Cg()),{navigate:Rg}=ld,Pg=s=>({route:s&4,location:s&2}),eu=s=>({route:s[2]&&s[2].uri,location:s[1]}),Lg=s=>({route:s&4,location:s&2}),tu=s=>({route:s[2]&&s[2].uri,location:s[1]});function Ig(s){let e;const t=s[15].default,n=Bn(t,s,s[14],eu);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16390)&&kn(n,t,i,i[14],e?zn(t,i[14],r,Pg):Vn(i[14]),eu)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function Dg(s){let e=s[1].pathname,t,n,i=nu(s);return{c(){i.c(),t=cs()},m(r,a){i.m(r,a),tt(r,t,a),n=!0},p(r,a){a&2&&Ft(e,e=r[1].pathname)?(ri(),Oe(i,1,1,Qe),ai(),i=nu(r),i.c(),De(i,1),i.m(t.parentNode,t)):i.p(r,a)},i(r){n||(De(i),n=!0)},o(r){Oe(i),n=!1},d(r){r&&Je(t),i.d(r)}}}function nu(s){let e,t,n,i;const r=s[15].default,a=Bn(r,s,s[14],tu);return{c(){e=je("div"),a&&a.c()},m(o,c){tt(o,e,c),a&&a.m(e,null),i=!0},p(o,c){a&&a.p&&(!i||c&16390)&&kn(a,r,o,o[14],i?zn(r,o[14],c,Lg):Vn(o[14]),tu)},i(o){i||(De(a,o),o&&Ws(()=>{i&&(n&&n.end(1),t=tg(e,s[3],{}),t.start())}),i=!0)},o(o){Oe(a,o),t&&t.invalidate(),o&&(n=ng(e,s[3],{})),i=!1},d(o){o&&Je(e),a&&a.d(o),o&&n&&n.end()}}}function Ug(s){let e,t,n,i;const r=[Dg,Ig],a=[];function o(c,l){return c[0]?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=cs()},m(c,l){a[e].m(c,l),tt(c,n,l),i=!0},p(c,[l]){let h=e;e=o(c),e===h?a[e].p(c,l):(ri(),Oe(a[h],1,1,()=>{a[h]=null}),ai(),t=a[e],t?t.p(c,l):(t=a[e]=r[e](c),t.c()),De(t,1),t.m(n.parentNode,n))},i(c){i||(De(t),i=!0)},o(c){Oe(t),i=!1},d(c){c&&Je(n),a[e].d(c)}}}function Ng(s,e,t){let n,i,r,a,{$$slots:o={},$$scope:c}=e,{basepath:l="/"}=e,{url:h=null}=e,{viewtransition:u=null}=e,{history:f=ld}=e;const d=(D,M,b)=>{const H=u(b);return typeof(H==null?void 0:H.fn)=="function"?H.fn(D,H):H};fn(rd,f);const g=dn(Zc),_=dn(co),m=Jt([]);un(s,m,D=>t(12,i=D));const p=Jt(null);un(s,p,D=>t(2,a=D));let v=!1;const x=g||Jt(h?{pathname:h}:f.location);un(s,x,D=>t(1,n=D));const y=_?_.routerBase:Jt({path:l,uri:l});un(s,y,D=>t(13,r=D));const T=ql([y,p],([D,M])=>{if(!M)return D;const{path:b}=D,{route:H,uri:K}=M;return{path:H.default?b:H.path.replace(/\*.*$/,""),uri:K}}),E=D=>{const{path:M}=r;let{path:b}=D;if(D._path=b,D.path=Kh(M,b),typeof window>"u"){if(v)return;const H=Jh([D],n.pathname);H&&(p.set(H),v=!0)}else m.update(H=>[...H,D])},A=D=>{m.update(M=>M.filter(b=>b!==D))};let P=!1;return g||(go(()=>f.listen(M=>{t(11,P=M.preserveScroll||!1),x.set(M.location)})),fn(Zc,x)),fn(co,{activeRoute:p,base:y,routerBase:T,registerRoute:E,unregisterRoute:A}),s.$$set=D=>{"basepath"in D&&t(8,l=D.basepath),"url"in D&&t(9,h=D.url),"viewtransition"in D&&t(0,u=D.viewtransition),"history"in D&&t(10,f=D.history),"$$scope"in D&&t(14,c=D.$$scope)},s.$$.update=()=>{if(s.$$.dirty&8192){const{path:D}=r;m.update(M=>M.map(b=>Object.assign(b,{path:Kh(D,b._path)})))}if(s.$$.dirty&6146){const D=Jh(i,n.pathname);p.set(D&&{...D,preserveScroll:P})}},[u,n,a,d,m,p,x,y,l,h,f,P,i,r,c,o]}class Og extends Qt{constructor(e){super(),jt(this,e,Ng,Ug,Ft,{basepath:8,url:9,viewtransition:0,history:10})}}const hd=s=>{const e=t=>{const n=t.currentTarget;(n.target===""||n.target==="_self")&&dg(n)&&od(t)&&(t.preventDefault(),Rg(n.pathname+n.search,{replace:n.hasAttribute("replace"),preserveScroll:n.hasAttribute("preserveScroll")}))};return s.addEventListener("click",e),{destroy(){s.removeEventListener("click",e)}}};function Fg(s){let e,t,n,i,r,a;return{c(){e=je("div"),t=je("h1"),t.textContent="Page Not Found",n=ut(),i=je("a"),i.textContent="Return To Homepage",gt(i,"href","/"),gt(i,"class","button-outlined"),gt(e,"class","page")},m(o,c){tt(o,e,c),We(e,t),We(e,n),We(e,i),r||(a=Vl(hd.call(null,i)),r=!0)},p:Qe,i:Qe,o:Qe,d(o){o&&Je(e),r=!1,a()}}}class Bg extends Qt{constructor(e){super(),jt(this,e,null,Fg,Ft,{})}}function iu(s){return Object.prototype.toString.call(s)==="[object Date]"}function Jc(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const n=e.map((i,r)=>Jc(s[r],i));return i=>n.map(r=>r(i))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(iu(s)&&iu(e)){s=s.getTime(),e=e.getTime();const r=e-s;return a=>new Date(s+a*r)}const n=Object.keys(e),i={};return n.forEach(r=>{i[r]=Jc(s[r],e[r])}),r=>{const a={};return n.forEach(o=>{a[o]=i[o](r)}),a}}if(t==="number"){const n=e-s;return i=>s+i*n}throw new Error(`Cannot interpolate ${t} values`)}function zg(s,e={}){const t=Jt(s);let n,i=s;function r(a,o){if(s==null)return t.set(s=a),Promise.resolve();i=a;let c=n,l=!1,{delay:h=0,duration:u=400,easing:f=kl,interpolate:d=Jc}=yn(yn({},e),o);if(u===0)return c&&(c.abort(),c=null),t.set(s=i),Promise.resolve();const g=Hl()+h;let _;return n=Wl(m=>{if(m<g)return!0;l||(_=d(s,a),typeof u=="function"&&(u=u(s,a)),l=!0),c&&(c.abort(),c=null);const p=m-g;return p>u?(t.set(s=a),!1):(t.set(s=_(f(p/u))),!0)}),n.promise}return{set:r,update:(a,o)=>r(a(i,s),o),subscribe:t.subscribe}}function kg(s){let e,t;return{c(){e=je("s"),t=Kn(s[0])},m(n,i){tt(n,e,i),We(e,t)},p(n,i){i&1&&jf(t,n[0])},d(n){n&&Je(e)}}}function Vg(s){let e;return{c(){e=Kn(s[0])},m(t,n){tt(t,e,n)},p(t,n){n&1&&jf(e,t[0])},d(t){t&&Je(e)}}}function Hg(s){let e,t,n,i,r,a,o,c,l,h,u,f,d,g,_,m,p,v,x,y,T,E,A,P,D,M,b,H,K,I,W,z,Z,X,J,Q,ie,me,Ue,V,te,pe;function Ee(Ce,Me){return Ce[1]?kg:Vg}let ye=Ee(s),ue=ye(s);return{c(){e=je("div"),e.innerHTML="",t=ut(),n=je("div"),n.innerHTML='<img src="/img/DressedUp.jpg" class="profile-image svelte-1ur7vcj" alt="me"/>',i=ut(),r=je("div"),a=je("h1"),a.textContent="Cory Beutler",o=ut(),c=je("p"),c.textContent="I am currently looking for work as a programmer.",l=ut(),h=je("p"),u=Kn("See my "),f=je("a"),f.textContent="Resume",d=Kn("."),g=ut(),_=je("div"),_.innerHTML='<p style="margin: 0pt 10pt">See my work at:</p> <a class="ext-link svelte-1ur7vcj" href="https://github.com/cgbeutler"><img src="/img/github_logo.png" alt="github" class="svelte-1ur7vcj"/></a> <a class="ext-link svelte-1ur7vcj" href="https://stackoverflow.com/users/1884803"><span style="white-space: nowrap;"><img src="/img/stack-white.svg" alt="stack" class="svelte-1ur7vcj"/> stack<b>overflow</b></span></a> <a class="ext-link svelte-1ur7vcj" href="https://aristonaut.itch.io/"><img src="/img/itchio_logo.svg" alt="itch.io" class="svelte-1ur7vcj"/></a>',m=ut(),p=je("hr"),v=ut(),x=je("p"),x.textContent="See my web experiments:",y=ut(),T=je("p"),T.innerHTML=`A dice-rolling site
    <a class="ext-link-big svelte-1ur7vcj" href="http://proper.monster"><img src="/img/ProperMonster.png" alt="proper monster" class="svelte-1ur7vcj"/></a>`,E=ut(),A=je("hr"),P=ut(),D=je("div"),D.innerHTML='<p style="margin: 0pt 10pt">I am also an amateur artist.</p> <p style="margin: 0pt 10pt">See my art at:</p> <a href="https://m.soundcloud.com/aristonaut"><img src="/img/soundcloud_logo.png" alt="m.soundcloud.com/aristonaut"/></a> <a class="ext-link svelte-1ur7vcj" href="https://aristonaut.itch.io/"><img src="/img/itchio_logo.svg" alt="aristonaut.itch.io" class="svelte-1ur7vcj"/></a>',M=ut(),b=je("p"),b.innerHTML="Here is a haiku for you:<br/>",H=ut(),K=je("div"),K.innerHTML=`I wish I could bake<br/>
    I would bake you a nice cake<br/>
    here, have a raw egg`,I=ut(),W=je("p"),W.textContent="I hope you enjoyed that poem. Here, have another:",z=ut(),Z=je("div"),X=Kn("Your eyes are as "),ue.c(),J=je("br"),Q=Kn(`
    Something something something...`),ie=je("br"),me=Kn(`
    I love you`),Ue=ut(),V=je("p"),V.textContent="Thank you for visiting.",gt(e,"id","banner-image"),gt(e,"class","svelte-1ur7vcj"),gt(n,"id","profile-image-box"),gt(n,"class","svelte-1ur7vcj"),gt(f,"href","/resume"),Qo(_,"margin","20px"),Qo(x,"margin","0pt 10pt"),Qo(D,"margin","20px"),gt(K,"class","poem svelte-1ur7vcj"),gt(Z,"class","poem svelte-1ur7vcj"),gt(r,"class","page")},m(Ce,Me){tt(Ce,e,Me),tt(Ce,t,Me),tt(Ce,n,Me),tt(Ce,i,Me),tt(Ce,r,Me),We(r,a),We(r,o),We(r,c),We(r,l),We(r,h),We(h,u),We(h,f),We(h,d),We(r,g),We(r,_),We(r,m),We(r,p),We(r,v),We(r,x),We(r,y),We(r,T),We(r,E),We(r,A),We(r,P),We(r,D),We(r,M),We(r,b),We(r,H),We(r,K),We(r,I),We(r,W),We(r,z),We(r,Z),We(Z,X),ue.m(Z,null),We(Z,J),We(Z,Q),We(Z,ie),We(Z,me),We(r,Ue),We(r,V),te||(pe=Vl(hd.call(null,f)),te=!0)},p(Ce,[Me]){ye===(ye=Ee(Ce))&&ue?ue.p(Ce,Me):(ue.d(1),ue=ye(Ce),ue&&(ue.c(),ue.m(Z,J)))},i:Qe,o:Qe,d(Ce){Ce&&(Je(e),Je(t),Je(n),Je(i),Je(r)),ue.d(),te=!1,pe()}}}let Gg=3;function Wg(s,e,t){let n,{location:i}=e,r=["pretty as a flower","deep as the ocean","grand as a piano","lovely as a summer's day","deep as the Mariana Trench","deep as this poem"],a=zg(Gg);un(s,a,h=>t(5,n=h));let o=0,c=r[0],l=!1;return setInterval(()=>{n>0?Gh(a,n--,n):(Gh(a,n+=3,n),o++,o>r.length&&(o=0),t(0,c=r[o])),t(1,l=n<1)},1e3),s.$$set=h=>{"location"in h&&t(3,i=h.location)},s.$$.update=()=>{s.$$.dirty&8&&console.log(i)},[c,l,a,i]}class Xg extends Qt{constructor(e){super(),jt(this,e,Wg,Hg,Ft,{location:3})}}function qg(s){let e,t;return{c(){e=je("div"),t=je("div"),gt(t,"class","groc-list svelte-19xtg3h"),gt(e,"class","page")},m(n,i){tt(n,e,i),We(e,t),t.innerHTML=s[0]},p(n,[i]){i&1&&(t.innerHTML=n[0])},i:Qe,o:Qe,d(n){n&&Je(e)}}}function Yg(s,e,t){let n="";return fetch("/groceries.html").then(i=>{if(i.ok)return i.text();throw new Error(i.status+" Failed Fetch ")}).then(i=>{t(0,n=i)}).catch(i=>{console.log(i),console.log("Trying dev path"),fetch("/raw/groceries.html").then(r=>{if(r.ok)return r.text();throw new Error(r.status+" Failed Fetch ")}).then(r=>{t(0,n=r)}).catch(r=>{console.log(r),console.log("Trying dev path")})}),[n]}class Zg extends Qt{constructor(e){super(),jt(this,e,Yg,qg,Ft,{})}}function Jg(s){let e,t,n,i,r;return{c(){e=je("div"),e.innerHTML="",t=ut(),n=je("div"),n.innerHTML='<img src="/img/DressedUp.jpg" class="profile-image svelte-bbfi8c" alt="me"/>',i=ut(),r=je("div"),r.innerHTML=`<h1 class="svelte-bbfi8c">Resume for Cory G. Beutler</h1> <p style="text-align:center;">Denver, CO 80222   <a href="mailto:jobopportunities@corybeutler.com">jobopportunities@corybeutler.com</a></p> <h2 class="svelte-bbfi8c">Skills</h2> <p style="text-align:center;">Languages: C#, Python, Java, HTML, CSS, JavaScript<br/>
        Backend: ASP.NET MVC, REST APIs, Team City<br/>
        Database: Elastic Search, MongoDB, SQL, NoSQL<br/>
        Frontend: Svelte, Razor, Angular<br/>
        Operating Systems: Linux, Windows<br/></p> <h2 class="svelte-bbfi8c">Work Experience</h2> <p><span class="infoline svelte-bbfi8c">Jul 2019 - Dec 2023</span><br/> <span class="infoline svelte-bbfi8c">Monster Vial</span> <span class="infoline svelte-bbfi8c">Software Entrepreneur</span></p> <ul><li>Developed a video game using Godot and Unity in the C# language.</li> <li>Provided a suite of open source file management tools to the community.</li> <li>Developed a dynamic input and event processing system.</li> <li>Created visuals with optimized color palettes for colorblind users.</li> <li>Created a fully localized user interface.</li></ul> <p><span class="infoline svelte-bbfi8c">Jun 2016 - Jul 2019</span><br/> <span class="infoline svelte-bbfi8c">Xactware (Verisk)</span> <span class="infoline svelte-bbfi8c">Software Developer</span></p> <ul><li>Developed backend services using ASP.NET MVC and C# and Team City.</li> <li>Implemented a search API using Elasticsearch optimized with product popularity, phonetic matching, and synonym associations for multiple languages and regions.</li> <li>Designed a migration service for MongoDB to facilitate data versioning.</li> <li>Added localization to backend services ahead of a push to new markets in Canada.</li> <li>Worked with developers and testers to provide a continuous delivery of features.</li> <li>Developed multiple frontend clients using Razor, Angular, and Telerik technologies.</li></ul> <p><span class="infoline svelte-bbfi8c">Apr 2014 - May 2016</span><br/> <span class="infoline svelte-bbfi8c">ImSAR LLC</span> <span class="infoline svelte-bbfi8c">Software Dev. Intern</span></p> <ul><li>Developed software in the C++ and Python programming languages.</li> <li>Added dynamic GPU memory management to the processing chain.</li></ul> <p><span class="infoline svelte-bbfi8c">Jul 2013 - Dec 2013</span><br/> <span class="infoline svelte-bbfi8c">Northrop Grumman</span> <span class="infoline svelte-bbfi8c">Software Dev. Intern</span></p> <ul><li>Developed software in the languages Java, C++, and Python.</li> <li>Developed software in a Linux environment.</li> <li>Worked with classified data under a Secret Clearance (expired July 2015.)</li></ul> <h2 class="svelte-bbfi8c">Education</h2> <p>2016 Bachelor of Science in Computer Science from BYU with 3.5 GPA</p>`,gt(e,"id","banner-image"),gt(e,"class","svelte-bbfi8c"),gt(n,"id","profile-image-box"),gt(n,"class","svelte-bbfi8c"),gt(r,"class","page work-experience svelte-bbfi8c")},m(a,o){tt(a,e,o),tt(a,t,o),tt(a,n,o),tt(a,i,o),tt(a,r,o)},p:Qe,i:Qe,o:Qe,d(a){a&&(Je(e),Je(t),Je(n),Je(i),Je(r))}}}class Kg extends Qt{constructor(e){super(),jt(this,e,null,Jg,Ft,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="162",$g={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,Kc=1,fd=2,Qg=3,e_=0,Yl=1,_o=2,In=3,oi=0,Kt=1,Un=2,ni=0,ts=1,$c=2,jc=3,Qc=4,dd=5,Mi=100,pd=101,md=102,el=103,tl=104,gd=200,_d=201,xd=202,vd=203,lo=204,ho=205,yd=206,Md=207,Sd=208,bd=209,Ed=210,wd=211,Ad=212,Td=213,Cd=214,Rd=0,Pd=1,Ld=2,Er=3,Id=4,Dd=5,Ud=6,Nd=7,Yr=0,Od=1,Fd=2,ii=0,Bd=1,zd=2,kd=3,Zl=4,Vd=5,Hd=6,Gd=7,nl="attached",Wd="detached",xo=300,ci=301,Ai=302,wr=303,Ar=304,Ks=306,Tr=1e3,Ht=1001,Cr=1002,Et=1003,uo=1004,t_=1004,Ji=1005,n_=1005,_t=1006,_r=1007,i_=1007,Nn=1008,s_=1008,si=1009,Xd=1010,qd=1011,vo=1012,Jl=1013,ei=1014,ln=1015,Xs=1016,Kl=1017,$l=1018,bi=1020,Yd=1021,nn=1023,Zd=1024,Jd=1025,Ei=1026,ss=1027,jl=1028,Ql=1029,Kd=1030,eh=1031,th=1033,$a=33776,ja=33777,Qa=33778,eo=33779,il=35840,sl=35841,rl=35842,al=35843,nh=36196,ol=37492,cl=37496,ll=37808,hl=37809,ul=37810,fl=37811,dl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,to=36492,bl=36494,El=36495,$d=36283,wl=36284,Al=36285,Tl=36286,jd=2200,Qd=2201,ep=2202,Rr=2300,Pr=2301,no=2302,$i=2400,ji=2401,Lr=2402,yo=2500,ih=2501,r_=0,a_=1,o_=2,tp=3200,np=3201,Ri=0,ip=1,$n="",vn="srgb",hi="srgb-linear",Mo="display-p3",Zr="display-p3-linear",Ir="linear",ht="srgb",Dr="rec709",Ur="p3",c_=0,Yi=7680,l_=7681,h_=7682,u_=7683,f_=34055,d_=34056,p_=5386,m_=512,g_=513,__=514,x_=515,v_=516,y_=517,M_=518,Cl=519,sp=512,rp=513,ap=514,sh=515,op=516,cp=517,lp=518,hp=519,Nr=35044,S_=35048,b_=35040,E_=35045,w_=35049,A_=35041,T_=35046,C_=35050,R_=35042,P_="100",Rl="300 es",fo=1035,On=2e3,Or=2001;class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const ns=Math.PI/180,qs=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function rh(s,e){return(s%e+e)%e}function L_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function I_(s,e,t){return s!==e?(t-s)/(e-s):0}function xr(s,e,t){return(1-t)*s+t*e}function D_(s,e,t,n){return xr(s,e,1-Math.exp(-t*n))}function U_(s,e=1){return e-Math.abs(rh(s,e*2)-e)}function N_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function O_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function F_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function B_(s,e){return s+Math.random()*(e-s)}function z_(s){return s*(.5-Math.random())}function k_(s){s!==void 0&&(su=s);let e=su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(s){return s*ns}function H_(s){return s*qs}function Pl(s){return(s&s-1)===0&&s!==0}function G_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function W_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ve(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const X_={DEG2RAD:ns,RAD2DEG:qs,generateUUID:pn,clamp:yt,euclideanModulo:rh,mapLinear:L_,inverseLerp:I_,lerp:xr,damp:D_,pingpong:U_,smoothstep:N_,smootherstep:O_,randInt:F_,randFloat:B_,randFloatSpread:z_,seededRandom:k_,degToRad:V_,radToDeg:H_,isPowerOfTwo:Pl,ceilPowerOfTwo:G_,floorPowerOfTwo:po,setQuaternionFromProperEuler:W_,normalize:Ve,denormalize:Zt};class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],T=i[2],E=i[5],A=i[8];return r[0]=a*_+o*v+c*T,r[3]=a*m+o*x+c*E,r[6]=a*p+o*y+c*A,r[1]=l*_+h*v+u*T,r[4]=l*m+h*x+u*E,r[7]=l*p+h*y+u*A,r[2]=f*_+d*v+g*T,r[5]=f*m+d*x+g*E,r[8]=f*p+d*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sc.makeScale(e,t)),this}rotate(e){return this.premultiply(sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sc=new ke;function up(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const q_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Os(s,e){return new q_[s](e)}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fp(){const s=Fr("canvas");return s.style.display="block",s}const ru={};function dp(s){s in ru||(ru[s]=!0,console.warn(s))}const au=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[hi]:{transfer:Ir,primaries:Dr,toReference:s=>s,fromReference:s=>s},[vn]:{transfer:ht,primaries:Dr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zr]:{transfer:Ir,primaries:Ur,toReference:s=>s.applyMatrix3(ou),fromReference:s=>s.applyMatrix3(au)},[Mo]:{transfer:ht,primaries:Ur,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ou),fromReference:s=>s.applyMatrix3(au).convertLinearToSRGB()}},Y_=new Set([hi,Zr]),rt={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Y_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ra[e].toReference,i=ra[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ra[s].primaries},getTransfer:function(s){return s===$n?Ir:ra[s].transfer}};function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=Fr("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z_=0;class Qi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ac(i[a].image)):r.push(ac(i[a]))}else r=ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ah.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J_=0;class Mt extends ui{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ht,i=Ht,r=_t,a=Nn,o=nn,c=si,l=Mt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=pn(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=xo;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(d+1)/2,T=(p+1)/2,E=(h+f)/4,A=(u+_)/4,P=(g+m)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class So extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends An{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new So(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class oh extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends An{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new oh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),E=Math.atan2(T,p*v);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const y=o*v;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new C,cu=new sn;class $t{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),oa.subVectors(this.max,rr),ms.subVectors(e.a,rr),gs.subVectors(e.b,rr),_s.subVectors(e.c,rr),fi.subVectors(gs,ms),di.subVectors(_s,gs),Ni.subVectors(ms,_s);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,fi.z,0,-fi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!cc(t,ms,gs,_s,oa)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,ms,gs,_s,oa))?!1:(ca.crossVectors(fi,di),t=[ca.x,ca.y,ca.z],cc(t,ms,gs,_s,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,aa=new $t,ms=new C,gs=new C,_s=new C,fi=new C,di=new C,Ni=new C,rr=new C,oa=new C,ca=new C,Oi=new C;function cc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const j_=new $t,ar=new C,lc=new C;class Gt{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(lc)),this.expandByPoint(ar.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new C,hc=new C,la=new C,pi=new C,uc=new C,ha=new C,fc=new C;class $s{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(hc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(la),o=pi.dot(this.direction),c=-pi.dot(la),l=pi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(hc).addScaledVector(la,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){uc.subVectors(t,e),ha.subVectors(n,e),fc.crossVectors(uc,ha);let a=this.direction.dot(fc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const c=o*this.direction.dot(ha.crossVectors(pi,ha));if(c<0)return null;const l=o*this.direction.dot(uc.cross(pi));if(l<0||c+l>a)return null;const h=-o*pi.dot(fc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,c,l,h,u,f,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,d,g,_,m)}set(e,t,n,i,r,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,e0)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),mi.crossVectors(n,on),mi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),mi.crossVectors(n,on)),mi.normalize(),ua.crossVectors(on,mi),i[0]=mi.x,i[4]=ua.x,i[8]=on.x,i[1]=mi.y,i[5]=ua.y,i[9]=on.y,i[2]=mi.z,i[6]=ua.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],T=n[15],E=i[0],A=i[4],P=i[8],D=i[12],M=i[1],b=i[5],H=i[9],K=i[13],I=i[2],W=i[6],z=i[10],Z=i[14],X=i[3],J=i[7],Q=i[11],ie=i[15];return r[0]=a*E+o*M+c*I+l*X,r[4]=a*A+o*b+c*W+l*J,r[8]=a*P+o*H+c*z+l*Q,r[12]=a*D+o*K+c*Z+l*ie,r[1]=h*E+u*M+f*I+d*X,r[5]=h*A+u*b+f*W+d*J,r[9]=h*P+u*H+f*z+d*Q,r[13]=h*D+u*K+f*Z+d*ie,r[2]=g*E+_*M+m*I+p*X,r[6]=g*A+_*b+m*W+p*J,r[10]=g*P+_*H+m*z+p*Q,r[14]=g*D+_*K+m*Z+p*ie,r[3]=v*E+x*M+y*I+T*X,r[7]=v*A+x*b+y*W+T*J,r[11]=v*P+x*H+y*z+T*Q,r[15]=v*D+x*K+y*Z+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+_*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+m*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,x=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,T=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,E=t*v+n*x+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*A,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*A,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*A,e[4]=x*A,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*A,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*A,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*d+t*c*d)*A,e[8]=y*A,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*A,e[12]=T*A,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,v=c*l,x=c*h,y=c*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(d+y)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*A,i[9]=(m-v)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=xs.set(i[0],i[1],i[2]).length();const a=xs.set(i[4],i[5],i[6]).length(),o=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=On){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===On)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Or)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=On){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*h;let g,_;if(o===On)g=(a+r)*u,_=-2*u;else if(o===Or)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new C,Sn=new Pe,Q_=new C(0,0,0),e0=new C(1,1,1),mi=new C,ua=new C,on=new C,lu=new Pe,hu=new sn;class mn{constructor(e=0,t=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const uu=new C,vs=new sn,qn=new Pe,fa=new C,or=new C,n0=new C,i0=new sn,fu=new C(1,0,0),du=new C(0,1,0),pu=new C(0,0,1),s0={type:"added"},r0={type:"removed"},dc={type:"childadded",child:null},pc={type:"childremoved",child:null};class st extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new mn,n=new sn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ke}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(or,fa,this.up):qn.lookAt(fa,or,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(qn),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(s0),dc.child=e,this.dispatchEvent(dc),dc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new C,Yn=new C,mc=new C,Zn=new C,ys=new C,Ms=new C,mu=new C,gc=new C,_c=new C,xc=new C;class hn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Yn.subVectors(n,t),mc.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Yn),c=bn.dot(mc),l=Yn.dot(Yn),h=Yn.dot(mc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Yn.subVectors(e,t),bn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ys.subVectors(i,n),Ms.subVectors(r,n),gc.subVectors(e,n);const c=ys.dot(gc),l=Ms.dot(gc);if(c<=0&&l<=0)return t.copy(n);_c.subVectors(e,i);const h=ys.dot(_c),u=Ms.dot(_c);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ys,a);xc.subVectors(e,r);const d=ys.dot(xc),g=Ms.dot(xc);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ms,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return mu.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(mu,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},da={h:0,s:0,l:0};function vc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=rh(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vc(a,r,e+1/3),this.g=vc(a,r,e),this.b=vc(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=rc(e.r),this.g=rc(e.g),this.b=rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return rt.fromWorkingColorSpace(kt.copy(this),e),Math.round(yt(kt.r*255,0,255))*65536+Math.round(yt(kt.g*255,0,255))*256+Math.round(yt(kt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=vn){rt.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(da);const n=xr(gi.h,da.h,t),i=xr(gi.s,da.s,t),r=xr(gi.l,da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new _e;_e.NAMES=mp;let a0=0;class Wt extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=ts,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=ho,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pi extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=o0();function o0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function tn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=yt(s,-65504,65504),jn.floatView[0]=s;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function gr(s){const e=s>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(s&1023)]+jn.exponentTable[e],jn.floatView[0]}const c0={toHalfFloat:tn,fromHalfFloat:gr},At=new C,pa=new $;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nr&&(e.usage=this.usage),e}}class l0 extends ot{constructor(e,t,n){super(new Int8Array(e),t,n)}}class h0 extends ot{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class u0 extends ot{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class f0 extends ot{constructor(e,t,n){super(new Int16Array(e),t,n)}}class ch extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class d0 extends ot{constructor(e,t,n){super(new Int32Array(e),t,n)}}class lh extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class p0 extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=gr(this.array[e*this.itemSize]);return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=tn(t),this}getY(e){let t=gr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=tn(t),this}getZ(e){let t=gr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=tn(t),this}getW(e){let t=gr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=tn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=tn(t),this.array[e+1]=tn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=tn(t),this.array[e+1]=tn(n),this.array[e+2]=tn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=tn(t),this.array[e+1]=tn(n),this.array[e+2]=tn(i),this.array[e+3]=tn(r),this}}class Se extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m0=0;const xn=new Pe,yc=new st,Ss=new C,cn=new $t,cr=new $t,Dt=new C;class Ye extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?lh:ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,cr.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,cr.max),cn.expandByPoint(Dt)):(cn.expandByPoint(cr.min),cn.expandByPoint(cr.max))}cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Dt.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(e,l),Dt.add(Ss)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new C,c[P]=new C;const l=new C,h=new C,u=new C,f=new $,d=new $,g=new $,_=new C,m=new C;function p(P,D,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,D),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(b),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),o[P].add(_),o[D].add(_),o[M].add(_),c[P].add(m),c[D].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,D=v.length;P<D;++P){const M=v[P],b=M.start,H=M.count;for(let K=b,I=b+H;K<I;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const x=new C,y=new C,T=new C,E=new C;function A(P){T.fromBufferAttribute(i,P),E.copy(T);const D=o[P];x.copy(D),x.sub(T.multiplyScalar(T.dot(D))).normalize(),y.crossVectors(E,D);const b=y.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,D=v.length;P<D;++P){const M=v[P],b=M.start,H=M.count;for(let K=b,I=b+H;K<I;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ye,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new Pe,Fi=new $s,ma=new Gt,_u=new C,bs=new C,Es=new C,ws=new C,Mc=new C,ga=new C,_a=new $,xa=new $,va=new $,xu=new C,vu=new C,yu=new C,ya=new C,Ma=new C;class Tt extends st{constructor(e=new Ye,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Mc.fromBufferAttribute(u,e),a?ga.addScaledVector(Mc,h):ga.addScaledVector(Mc.sub(t),h))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(ma.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ma,_u)===null||Fi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=x;y<T;y+=3){const E=o.getX(y),A=o.getX(y+1),P=o.getX(y+2);i=Sa(this,p,e,n,l,h,u,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Sa(this,a,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=x;y<T;y+=3){const E=y,A=y+1,P=y+2;i=Sa(this,p,e,n,l,h,u,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Sa(this,a,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function g0(s,e,t,n,i,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===oi,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:s}}function Sa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,bs),s.getVertexPosition(c,Es),s.getVertexPosition(l,ws);const h=g0(s,e,t,n,bs,Es,ws,ya);if(h){i&&(_a.fromBufferAttribute(i,o),xa.fromBufferAttribute(i,c),va.fromBufferAttribute(i,l),h.uv=hn.getInterpolation(ya,bs,Es,ws,_a,xa,va,new $)),r&&(_a.fromBufferAttribute(r,o),xa.fromBufferAttribute(r,c),va.fromBufferAttribute(r,l),h.uv1=hn.getInterpolation(ya,bs,Es,ws,_a,xa,va,new $)),a&&(xu.fromBufferAttribute(a,o),vu.fromBufferAttribute(a,c),yu.fromBufferAttribute(a,l),h.normal=hn.getInterpolation(ya,bs,Es,ws,xu,vu,yu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new C,materialIndex:0};hn.getNormal(bs,Es,ws,u.normal),h.face=u}return h}class ls extends Ye{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function g(_,m,p,v,x,y,T,E,A,P,D){const M=y/A,b=T/P,H=y/2,K=T/2,I=E/2,W=A+1,z=P+1;let Z=0,X=0;const J=new C;for(let Q=0;Q<z;Q++){const ie=Q*b-K;for(let me=0;me<W;me++){const Ue=me*M-H;J[_]=Ue*v,J[m]=ie*x,J[p]=I,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(me/A),u.push(1-Q/P),Z+=1}}for(let Q=0;Q<P;Q++)for(let ie=0;ie<A;ie++){const me=f+ie+W*Q,Ue=f+ie+W*(Q+1),V=f+(ie+1)+W*(Q+1),te=f+(ie+1)+W*Q;c.push(me,Ue,te),c.push(Ue,V,te),X+=6}o.addGroup(d,X,D),d+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=Ys(s[t]);for(const i in n)e[i]=n[i]}return e}function _0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gp(s){return s.getRenderTarget()===null?s.outputColorSpace:rt.workingColorSpace}const _p={clone:Ys,merge:Yt};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eo extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new C,Mu=new $,Su=new $;class Nt extends Eo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Ts=1;class xp extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(As,Ts,e,t);i.layers=this.layers,this.add(i);const r=new Nt(As,Ts,e,t);r.layers=this.layers,this.add(r);const a=new Nt(As,Ts,e,t);a.layers=this.layers,this.add(a);const o=new Nt(As,Ts,e,t);o.layers=this.layers,this.add(o);const c=new Nt(As,Ts,e,t);c.layers=this.layers,this.add(c);const l=new Nt(As,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jr extends Mt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ls(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ni});r.uniforms.tEquirect.value=t;const a=new Tt(i,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=_t),new xp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Sc=new C,y0=new C,M0=new ke;class yi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sc.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M0.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Gt,ba=new C;class Kr{constructor(e=new yi,t=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+a,f+h,m+g,y+v).normalize(),n[3].setComponents(c-a,f-h,m-g,y-v).normalize(),n[4].setComponents(c-o,f-u,m-_,y-x).normalize(),t===On)n[5].setComponents(c+o,f+u,m+_,y+x).normalize();else if(t===Or)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function S0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){const f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class js extends Ye{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,y=v+l*(p+1),T=v+1+l*(p+1),E=v+1+l*p;d.push(x,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:b0,alphahash_pars_fragment:E0,alphamap_fragment:w0,alphamap_pars_fragment:A0,alphatest_fragment:T0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:I0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:N0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:V0,color_fragment:H0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:K0,emissivemap_fragment:$0,emissivemap_pars_fragment:j0,colorspace_fragment:Q0,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:sx,envmap_physical_pars_fragment:gx,envmap_vertex:rx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:cx,fog_pars_fragment:lx,gradientmap_pars_fragment:hx,lightmap_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:xx,lights_phong_fragment:vx,lights_phong_pars_fragment:yx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:bx,lights_fragment_maps:Ex,lights_fragment_end:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Rx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Ix,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:kx,normal_fragment_begin:Vx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Kx,opaque_fragment:$x,packing:jx,premultiplied_alpha_fragment:Qx,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:av,shadowmap_vertex:ov,shadowmask_pars_fragment:cv,skinbase_vertex:lv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:fv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:_v,transmission_pars_fragment:xv,uv_pars_fragment:vv,uv_pars_vertex:yv,uv_vertex:Mv,worldpos_vertex:Sv,background_vert:bv,background_frag:Ev,backgroundCube_vert:wv,backgroundCube_frag:Av,cube_vert:Tv,cube_frag:Cv,depth_vert:Rv,depth_frag:Pv,distanceRGBA_vert:Lv,distanceRGBA_frag:Iv,equirect_vert:Dv,equirect_frag:Uv,linedashed_vert:Nv,linedashed_frag:Ov,meshbasic_vert:Fv,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Vv,meshmatcap_frag:Hv,meshnormal_vert:Gv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Kv,points_vert:$v,points_frag:jv,shadow_vert:Qv,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},le={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},wn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new _e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:Yt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ea={r:0,b:0,g:0},zi=new mn,iy=new Pe;function sy(s,e,t,n,i,r,a){const o=new _e(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,c):x&&x.isColor&&(_(x,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ks)?(h===void 0&&(h=new Tt(new ls(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ys(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(p.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(zi)),h.material.toneMapped=rt.getTransfer(x.colorSpace)!==ht,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Tt(new js(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ys(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Ea,gp(s)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function ry(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function u(I,W,z,Z,X){let J=!1;if(a){const Q=_(Z,z,W);l!==Q&&(l=Q,d(l.object)),J=p(I,Z,z,X),J&&v(I,Z,z,X)}else{const Q=W.wireframe===!0;(l.geometry!==Z.id||l.program!==z.id||l.wireframe!==Q)&&(l.geometry=Z.id,l.program=z.id,l.wireframe=Q,J=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,P(I,W,z,Z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,W,z){const Z=z.wireframe===!0;let X=o[I.id];X===void 0&&(X={},o[I.id]=X);let J=X[W.id];J===void 0&&(J={},X[W.id]=J);let Q=J[Z];return Q===void 0&&(Q=m(f()),J[Z]=Q),Q}function m(I){const W=[],z=[],Z=[];for(let X=0;X<i;X++)W[X]=0,z[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:z,attributeDivisors:Z,object:I,attributes:{},index:null}}function p(I,W,z,Z){const X=l.attributes,J=W.attributes;let Q=0;const ie=z.getAttributes();for(const me in ie)if(ie[me].location>=0){const V=X[me];let te=J[me];if(te===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),V===void 0||V.attribute!==te||te&&V.data!==te.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Z}function v(I,W,z,Z){const X={},J=W.attributes;let Q=0;const ie=z.getAttributes();for(const me in ie)if(ie[me].location>=0){let V=J[me];V===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));const te={};te.attribute=V,V&&V.data&&(te.data=V.data),X[me]=te,Q++}l.attributes=X,l.attributesNum=Q,l.index=Z}function x(){const I=l.newAttributes;for(let W=0,z=I.length;W<z;W++)I[W]=0}function y(I){T(I,0)}function T(I,W){const z=l.newAttributes,Z=l.enabledAttributes,X=l.attributeDivisors;z[I]=1,Z[I]===0&&(s.enableVertexAttribArray(I),Z[I]=1),X[I]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),X[I]=W)}function E(){const I=l.newAttributes,W=l.enabledAttributes;for(let z=0,Z=W.length;z<Z;z++)W[z]!==I[z]&&(s.disableVertexAttribArray(z),W[z]=0)}function A(I,W,z,Z,X,J,Q){Q===!0?s.vertexAttribIPointer(I,W,z,X,J):s.vertexAttribPointer(I,W,z,Z,X,J)}function P(I,W,z,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Z.attributes,J=z.getAttributes(),Q=W.defaultAttributeValues;for(const ie in J){const me=J[ie];if(me.location>=0){let Ue=X[ie];if(Ue===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(Ue=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(Ue=I.instanceColor)),Ue!==void 0){const V=Ue.normalized,te=Ue.itemSize,pe=t.get(Ue);if(pe===void 0)continue;const Ee=pe.buffer,ye=pe.type,ue=pe.bytesPerElement,Ce=n.isWebGL2===!0&&(ye===s.INT||ye===s.UNSIGNED_INT||Ue.gpuType===Jl);if(Ue.isInterleavedBufferAttribute){const Me=Ue.data,L=Me.stride,ae=Ue.offset;if(Me.isInstancedInterleavedBuffer){for(let Y=0;Y<me.locationSize;Y++)T(me.location+Y,Me.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Y=0;Y<me.locationSize;Y++)y(me.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Y=0;Y<me.locationSize;Y++)A(me.location+Y,te/me.locationSize,ye,V,L*ue,(ae+te/me.locationSize*Y)*ue,Ce)}else{if(Ue.isInstancedBufferAttribute){for(let Me=0;Me<me.locationSize;Me++)T(me.location+Me,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Me=0;Me<me.locationSize;Me++)y(me.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Me=0;Me<me.locationSize;Me++)A(me.location+Me,te/me.locationSize,ye,V,te*ue,te/me.locationSize*Me*ue,Ce)}}else if(Q!==void 0){const V=Q[ie];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(me.location,V);break;case 3:s.vertexAttrib3fv(me.location,V);break;case 4:s.vertexAttrib4fv(me.location,V);break;default:s.vertexAttrib1fv(me.location,V)}}}}E()}function D(){H();for(const I in o){const W=o[I];for(const z in W){const Z=W[z];for(const X in Z)g(Z[X].object),delete Z[X];delete W[z]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;const W=o[I.id];for(const z in W){const Z=W[z];for(const X in Z)g(Z[X].object),delete Z[X];delete W[z]}delete o[I.id]}function b(I){for(const W in o){const z=o[W];if(z[I.id]===void 0)continue;const Z=z[I.id];for(const X in Z)g(Z[X].object),delete Z[X];delete z[I.id]}}function H(){K(),h=!0,l!==c&&(l=c,d(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:K,dispose:D,releaseStatesOfGeometry:M,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function ay(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function oy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),T=x&&y,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:E}}function cy(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new yi,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;c.value=y,y=h(g,f,x,d);for(let T=0;T!==x;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ly(s){let e=new WeakMap;function t(a,o){return o===wr?a.mapping=ci:o===Ar&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wr||o===Ar)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new vp(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wo extends Eo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,bu=[.125,.215,.35,.446,.526,.582],Ki=20,bc=new wo,Eu=new _e;let Ec=null,wc=0,Ac=0;const Zi=(1+Math.sqrt(5))/2,Cs=1/Zi,wu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Zi,Cs),new C(0,Zi,-Cs),new C(Cs,0,Zi),new C(-Cs,0,Zi),new C(Zi,Cs,0),new C(-Zi,Cs,0)];class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,wc,Ac),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:Xs,format:nn,colorSpace:hi,depthBuffer:!1},i=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hy(r)),this._blurMaterial=uy(r,e,t)}return i}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Eu),h.toneMapping=ii,h.autoClear=!1;const d=new Pi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Tt(new ls,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Eu),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const x=this._cubeSize;wa(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;wa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=wu[(i-1)%wu.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let v=0;for(let A=0;A<Ki;++A){const P=A/_,D=Math.exp(-P*P/2);p.push(D),A===0?v+=D:A<m&&(v+=2*D)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-Fs?i-x+Fs:0),E=4*(this._cubeSize-y);wa(t,T,E,3*y,2*y),c.setRenderTarget(t),c.render(u,bc)}}function hy(s){const e=[],t=[],n=[];let i=s;const r=s-Fs+1+bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Fs?c=bu[a-s+Fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,P=E>2?0:-1,D=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(D,_*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];y.set(M,p*g*E)}const T=new Ye;T.setAttribute("position",new ot(v,_)),T.setAttribute("uv",new ot(x,m)),T.setAttribute("faceIndex",new ot(y,p)),e.push(T),i>Fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Au(s,e,t){const n=new An(s,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function uy(s,e,t){const n=new Float32Array(Ki),i=new C(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Tu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Cu(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===wr||c===Ar,h=c===ci||c===Ai;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ll(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ll(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function py(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],E=v[x+1],A=v[x+2];f.push(T,E,E,A,A,T)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,E=x+1,A=x+2;f.push(T,E,E,A,A,T)}}else return;const m=new(up(f)?lh:ch)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function my(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,o,d*c),t.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function gy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _y(s,e){return s[0]-e[0]}function xy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function vy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let K=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",K)};var d=K;m!==void 0&&m.texture.dispose();const p=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let A=0;p===!0&&(A=1),v===!0&&(A=2),x===!0&&(A=3);let P=h.attributes.position.count*A,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const M=new Float32Array(P*D*4*_),b=new So(M,P,D,_);b.type=ln,b.needsUpdate=!0;const H=A*4;for(let I=0;I<_;I++){const W=y[I],z=T[I],Z=E[I],X=P*D*4*I;for(let J=0;J<W.count;J++){const Q=J*H;p===!0&&(a.fromBufferAttribute(W,J),M[X+Q+0]=a.x,M[X+Q+1]=a.y,M[X+Q+2]=a.z,M[X+Q+3]=0),v===!0&&(a.fromBufferAttribute(z,J),M[X+Q+4]=a.x,M[X+Q+5]=a.y,M[X+Q+6]=a.z,M[X+Q+7]=0),x===!0&&(a.fromBufferAttribute(Z,J),M[X+Q+8]=a.x,M[X+Q+9]=a.y,M[X+Q+10]=a.z,M[X+Q+11]=Z.itemSize===4?a.w:1)}}m={count:_,texture:b,size:new $(P,D)},r.set(h,m),h.addEventListener("dispose",K)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let p=0;for(let x=0;x<f.length;x++)p+=f[x];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=f[y]}_.sort(xy);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(_y);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=o[y],E=T[0],A=T[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),p&&h.getAttribute("morphNormal"+y)!==p[E]&&h.setAttribute("morphNormal"+y,p[E]),i[y]=A,v+=A):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function yy(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class uh extends Mt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Ei,h!==Ei&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=ei),n===void 0&&h===ss&&(n=bi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mp=new Mt,Sp=new uh(1,1);Sp.compareFunction=sh;const bp=new So,Ep=new oh,wp=new Jr,Ru=[],Pu=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function Qs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ru[i];if(r===void 0&&(r=new Float32Array(i),Ru[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ao(s,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function My(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function by(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function wy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Du.set(n),s.uniformMatrix2fv(this.addr,!1,Du),Lt(t,n)}}function Ay(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Iu.set(n),s.uniformMatrix3fv(this.addr,!1,Iu),Lt(t,n)}}function Ty(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),Lt(t,n)}}function Cy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function Py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function Ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function Iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function Ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function Oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Sp:Mp;t.setTexture2D(e||r,i)}function Fy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function By(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wp,i)}function zy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bp,i)}function ky(s){switch(s){case 5126:return My;case 35664:return Sy;case 35665:return by;case 35666:return Ey;case 35674:return wy;case 35675:return Ay;case 35676:return Ty;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Iy;case 36294:return Dy;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}function Vy(s,e){s.uniform1fv(this.addr,e)}function Hy(s,e){const t=Qs(e,this.size,2);s.uniform2fv(this.addr,t)}function Gy(s,e){const t=Qs(e,this.size,3);s.uniform3fv(this.addr,t)}function Wy(s,e){const t=Qs(e,this.size,4);s.uniform4fv(this.addr,t)}function Xy(s,e){const t=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qy(s,e){const t=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yy(s,e){const t=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Zy(s,e){s.uniform1iv(this.addr,e)}function Jy(s,e){s.uniform2iv(this.addr,e)}function Ky(s,e){s.uniform3iv(this.addr,e)}function $y(s,e){s.uniform4iv(this.addr,e)}function jy(s,e){s.uniform1uiv(this.addr,e)}function Qy(s,e){s.uniform2uiv(this.addr,e)}function eM(s,e){s.uniform3uiv(this.addr,e)}function tM(s,e){s.uniform4uiv(this.addr,e)}function nM(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mp,r[a])}function iM(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ep,r[a])}function sM(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wp,r[a])}function rM(s,e,t){const n=this.cache,i=e.length,r=Ao(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bp,r[a])}function aM(s){switch(s){case 5126:return Vy;case 35664:return Hy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Qy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ky(t.type)}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Uu(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,t){const n=s.name,i=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),a=Tc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Uu(t,l===void 0?new oM(o,s,e):new cM(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new lM(o),Uu(t,u)),t=u}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);hM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Nu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const uM=37297;let fM=0;function dM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function pM(s){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s);let n;switch(e===t?n="":e===Ur&&t===Dr?n="LinearDisplayP3ToLinearSRGB":e===Dr&&t===Ur&&(n="LinearSRGBToLinearDisplayP3"),s){case hi:case Zr:return[n,"LinearTransferOETF"];case vn:case Mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ou(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+dM(s.getShaderSource(e),a)}else return i}function mM(s,e){const t=pM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gM(s,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case kd:t="OptimizedCineon";break;case Zl:t="ACESFilmic";break;case Hd:t="AgX";break;case Gd:t="Neutral";break;case Vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _M(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function xM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function vM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Bs(s){return s!==""}function Fu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(MM,bM)}const SM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bM(s,e){let t=Xe[e];if(t===void 0){const n=SM.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Il(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(s){return s.replace(EM,wM)}function wM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ku(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_o?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ci:case Ai:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yr:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function PM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=AM(t),l=TM(t),h=CM(t),u=RM(t),f=PM(t),d=t.isWebGL2?"":_M(t),g=xM(t),_=vM(r),m=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),v.length>0&&(v+=`
`)):(p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),v=[d,ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ii?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),a=Il(a),a=Fu(a,t),a=Bu(a,t),o=Il(o),o=Fu(o,t),o=Bu(o,t),a=zu(a),o=zu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+p+a,T=x+v+o,E=Nu(i,i.VERTEX_SHADER,y),A=Nu(i,i.FRAGMENT_SHADER,T);i.attachShader(m,E),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(H){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(A).trim();let z=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,A);else{const X=Ou(i,E,"vertex"),J=Ou(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+X+`
`+J)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||W==="")&&(Z=!1);Z&&(H.diagnostics={runnable:z,programLog:K,vertexShader:{log:I,prefix:p},fragmentShader:{log:W,prefix:v}})}i.deleteShader(E),i.deleteShader(A),D=new io(i,m),M=yM(i,m)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(m,uM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}let IM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function NM(s,e,t,n,i,r,a){const o=new bo,c=new DM,l=new Set,h=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,b,H,K,I){const W=K.fog,z=I.geometry,Z=M.isMeshStandardMaterial?K.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),J=X&&X.mapping===Ks?X.image.height:null,Q=_[M.type];M.precision!==null&&(g=i.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=ie!==void 0?ie.length:0;let Ue=0;z.morphAttributes.position!==void 0&&(Ue=1),z.morphAttributes.normal!==void 0&&(Ue=2),z.morphAttributes.color!==void 0&&(Ue=3);let V,te,pe,Ee;if(Q){const ct=wn[Q];V=ct.vertexShader,te=ct.fragmentShader}else V=M.vertexShader,te=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),Ee=c.getFragmentShaderID(M);const ye=s.getRenderTarget(),ue=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,Me=!!M.map,L=!!M.matcap,ae=!!X,Y=!!M.aoMap,se=!!M.lightMap,j=!!M.bumpMap,ve=!!M.normalMap,ge=!!M.displacementMap,be=!!M.emissiveMap,Ke=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,G=M.clearcoat>0,q=M.iridescence>0,ne=M.sheen>0,ee=M.transmission>0,Fe=S&&!!M.anisotropyMap,Le=G&&!!M.clearcoatMap,ce=G&&!!M.clearcoatNormalMap,he=G&&!!M.clearcoatRoughnessMap,Be=q&&!!M.iridescenceMap,re=q&&!!M.iridescenceThicknessMap,wt=ne&&!!M.sheenColorMap,$e=ne&&!!M.sheenRoughnessMap,Re=!!M.specularMap,we=!!M.specularColorMap,Ae=!!M.specularIntensityMap,nt=ee&&!!M.transmissionMap,He=ee&&!!M.thicknessMap,ft=!!M.gradientMap,U=!!M.alphaMap,fe=M.alphaTest>0,F=!!M.alphaHash,oe=!!M.extensions;let de=ii;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(de=s.toneMapping);const et={isWebGL2:u,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:te,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ce,instancing:ue,instancingColor:ue&&I.instanceColor!==null,instancingMorph:ue&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:hi,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:L,envMap:ae,envMapMode:ae&&X.mapping,envMapCubeUVHeight:J,aoMap:Y,lightMap:se,bumpMap:j,normalMap:ve,displacementMap:d&&ge,emissiveMap:be,normalMapObjectSpace:ve&&M.normalMapType===ip,normalMapTangentSpace:ve&&M.normalMapType===Ri,metalnessMap:Ke,roughnessMap:R,anisotropy:S,anisotropyMap:Fe,clearcoat:G,clearcoatMap:Le,clearcoatNormalMap:ce,clearcoatRoughnessMap:he,iridescence:q,iridescenceMap:Be,iridescenceThicknessMap:re,sheen:ne,sheenColorMap:wt,sheenRoughnessMap:$e,specularMap:Re,specularColorMap:we,specularIntensityMap:Ae,transmission:ee,transmissionMap:nt,thicknessMap:He,gradientMap:ft,opaque:M.transparent===!1&&M.blending===ts&&M.alphaToCoverage===!1,alphaMap:U,alphaTest:fe,alphaHash:F,combine:M.combine,mapUv:Me&&m(M.map.channel),aoMapUv:Y&&m(M.aoMap.channel),lightMapUv:se&&m(M.lightMap.channel),bumpMapUv:j&&m(M.bumpMap.channel),normalMapUv:ve&&m(M.normalMap.channel),displacementMapUv:ge&&m(M.displacementMap.channel),emissiveMapUv:be&&m(M.emissiveMap.channel),metalnessMapUv:Ke&&m(M.metalnessMap.channel),roughnessMapUv:R&&m(M.roughnessMap.channel),anisotropyMapUv:Fe&&m(M.anisotropyMap.channel),clearcoatMapUv:Le&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(M.sheenRoughnessMap.channel),specularMapUv:Re&&m(M.specularMap.channel),specularColorMapUv:we&&m(M.specularColorMap.channel),specularIntensityMapUv:Ae&&m(M.specularIntensityMap.channel),transmissionMapUv:nt&&m(M.transmissionMap.channel),thicknessMapUv:He&&m(M.thicknessMap.channel),alphaMapUv:U&&m(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Me||U),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Un,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function v(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)b.push(H),b.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(x(b,M),y(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.instancingMorph&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.normalMapObjectSpace&&o.enable(7),b.normalMapTangentSpace&&o.enable(8),b.clearcoat&&o.enable(9),b.iridescence&&o.enable(10),b.alphaTest&&o.enable(11),b.vertexColors&&o.enable(12),b.vertexAlphas&&o.enable(13),b.vertexUv1s&&o.enable(14),b.vertexUv2s&&o.enable(15),b.vertexUv3s&&o.enable(16),b.vertexTangents&&o.enable(17),b.anisotropy&&o.enable(18),b.alphaHash&&o.enable(19),b.batching&&o.enable(20),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),M.push(o.mask)}function T(M){const b=_[M.type];let H;if(b){const K=wn[b];H=_p.clone(K.uniforms)}else H=M.uniforms;return H}function E(M,b){let H;for(let K=0,I=h.length;K<I;K++){const W=h[K];if(W.cacheKey===b){H=W,++H.usedTimes;break}}return H===void 0&&(H=new LM(s,b,M,r),h.push(H)),H}function A(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function P(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:T,acquireProgram:E,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:D}}function OM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function FM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||FM),n.length>1&&n.sort(f||Vu),i.length>1&&i.sort(f||Vu)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function BM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Hu,s.set(n,[a])):i>=r.length?(a=new Hu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new _e};break;case"SpotLight":t={position:new C,direction:new C,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let VM=0;function HM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GM(s,e){const t=new zM,n=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,a=new Pe,o=new Pe;function c(h,u){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,y=0,T=0,E=0,A=0,P=0,D=0;h.sort(HM);const M=u===!0?Math.PI:1;for(let H=0,K=h.length;H<K;H++){const I=h[H],W=I.color,z=I.intensity,Z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=W.r*z*M,d+=W.g*z*M,g+=W.b*z*M;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],z);D++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const Q=I.shadow,ie=n.get(I);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=I.shadow.matrix,y++}i.directional[_]=J,_++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(W).multiplyScalar(z*M),J.distance=Z,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[p]=J;const Q=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,Q.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[p]=Q.matrix,I.castShadow){const ie=n.get(I);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.spotShadow[p]=ie,i.spotShadowMap[p]=X,E++}p++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(W).multiplyScalar(z),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=J,v++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*M),J.distance=I.distance,J.decay=I.decay,I.castShadow){const Q=I.shadow,ie=n.get(I);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,T++}i.point[m]=J,m++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(z*M),J.groundColor.copy(I.groundColor).multiplyScalar(z*M),i.hemi[x]=J,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==v||b.hemiLength!==x||b.numDirectionalShadows!==y||b.numPointShadows!==T||b.numSpotShadows!==E||b.numSpotMaps!==A||b.numLightProbes!==D)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=v,b.hemiLength=x,b.numDirectionalShadows=y,b.numPointShadows=T,b.numSpotShadows=E,b.numSpotMaps=A,b.numLightProbes=D,i.version=VM++)}function l(h,u){let f=0,d=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Gu(s,e){const t=new GM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function WM(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Gu(s,e),t.set(r,[c])):a>=o.length?(c=new Gu(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class fh extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dh extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YM(s,e,t){let n=new Kr;const i=new $,r=new $,a=new at,o=new fh({depthPacking:np}),c=new dh,l={},h=t.maxTextureSize,u={[oi]:Kt,[Kt]:oi,[Un]:Un},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:XM,fragmentShader:qM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=s.getRenderTarget(),M=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ni),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const K=p!==In&&this.type===In,I=p===In&&this.type!==In;for(let W=0,z=E.length;W<z;W++){const Z=E[W],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const J=X.getFrameExtents();if(i.multiply(J),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,X.mapSize.y=r.y)),X.map===null||K===!0||I===!0){const ie=this.type!==In?{minFilter:Et,magFilter:Et}:{};X.map!==null&&X.map.dispose(),X.map=new An(i.x,i.y,ie),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Q=X.getViewportCount();for(let ie=0;ie<Q;ie++){const me=X.getViewport(ie);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),H.viewport(a),X.updateMatrices(Z,ie),n=X.getFrustum(),y(A,P,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===In&&v(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(D,M,b)};function v(E,A){const P=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,d,_,null)}function x(E,A,P,D){let M=null;const b=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)M=b;else if(M=P.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,K=A.uuid;let I=l[H];I===void 0&&(I={},l[H]=I);let W=I[K];W===void 0&&(W=M.clone(),I[K]=W,A.addEventListener("dispose",T)),M=W}if(M.visible=A.visible,M.wireframe=A.wireframe,D===In?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=s.properties.get(M);H.light=P}return M}function y(E,A,P,D,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===In)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const K=e.update(E),I=E.material;if(Array.isArray(I)){const W=K.groups;for(let z=0,Z=W.length;z<Z;z++){const X=W[z],J=I[X.materialIndex];if(J&&J.visible){const Q=x(E,J,D,M);E.onBeforeShadow(s,E,A,P,K,Q,X),s.renderBufferDirect(P,null,K,Q,E,X),E.onAfterShadow(s,E,A,P,K,Q,X)}}}else if(I.visible){const W=x(E,I,D,M);E.onBeforeShadow(s,E,A,P,K,W,null),s.renderBufferDirect(P,null,K,W,E,null),E.onAfterShadow(s,E,A,P,K,W,null)}}const H=E.children;for(let K=0,I=H.length;K<I;K++)y(H[K],A,P,D,M)}function T(E){E.target.removeEventListener("dispose",T);for(const P in l){const D=l[P],M=E.target.uuid;M in D&&(D[M].dispose(),delete D[M])}}}function ZM(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const fe=new at;let F=null;const oe=new at(0,0,0,0);return{setMask:function(de){F!==de&&!U&&(s.colorMask(de,de,de,de),F=de)},setLocked:function(de){U=de},setClear:function(de,et,ct,Ot,gn){gn===!0&&(de*=Ot,et*=Ot,ct*=Ot),fe.set(de,et,ct,Ot),oe.equals(fe)===!1&&(s.clearColor(de,et,ct,Ot),oe.copy(fe))},reset:function(){U=!1,F=null,oe.set(-1,0,0,0)}}}function r(){let U=!1,fe=null,F=null,oe=null;return{setTest:function(de){de?ue(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(de){fe!==de&&!U&&(s.depthMask(de),fe=de)},setFunc:function(de){if(F!==de){switch(de){case Rd:s.depthFunc(s.NEVER);break;case Pd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}F=de}},setLocked:function(de){U=de},setClear:function(de){oe!==de&&(s.clearDepth(de),oe=de)},reset:function(){U=!1,fe=null,F=null,oe=null}}}function a(){let U=!1,fe=null,F=null,oe=null,de=null,et=null,ct=null,Ot=null,gn=null;return{setTest:function(lt){U||(lt?ue(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!U&&(s.stencilMask(lt),fe=lt)},setFunc:function(lt,Xt,Ln){(F!==lt||oe!==Xt||de!==Ln)&&(s.stencilFunc(lt,Xt,Ln),F=lt,oe=Xt,de=Ln)},setOp:function(lt,Xt,Ln){(et!==lt||ct!==Xt||Ot!==Ln)&&(s.stencilOp(lt,Xt,Ln),et=lt,ct=Xt,Ot=Ln)},setLocked:function(lt){U=lt},setClear:function(lt){gn!==lt&&(s.clearStencil(lt),gn=lt)},reset:function(){U=!1,fe=null,F=null,oe=null,de=null,et=null,ct=null,Ot=null,gn=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,T=null,E=null,A=null,P=null,D=new _e(0,0,0),M=0,b=!1,H=null,K=null,I=null,W=null,z=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=J>=2);let ie=null,me={};const Ue=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),te=new at().fromArray(Ue),pe=new at().fromArray(V);function Ee(U,fe,F,oe){const de=new Uint8Array(4),et=s.createTexture();s.bindTexture(U,et),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<F;ct++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(fe+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return et}const ye={};ye[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ue(s.DEPTH_TEST),c.setFunc(Er),ge(!1),be(Kc),ue(s.CULL_FACE),j(ni);function ue(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function Ce(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function Me(U,fe){return d[U]!==fe?(s.bindFramebuffer(U,fe),d[U]=fe,n&&(U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function L(U,fe){let F=_,oe=!1;if(U){F=g.get(fe),F===void 0&&(F=[],g.set(fe,F));const de=U.textures;if(F.length!==de.length||F[0]!==s.COLOR_ATTACHMENT0){for(let et=0,ct=de.length;et<ct;et++)F[et]=s.COLOR_ATTACHMENT0+et;F.length=de.length,oe=!0}}else F[0]!==s.BACK&&(F[0]=s.BACK,oe=!0);if(oe)if(t.isWebGL2)s.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ae(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const Y={[Mi]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[el]=s.MIN,Y[tl]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Y[el]=U.MIN_EXT,Y[tl]=U.MAX_EXT)}const se={[gd]:s.ZERO,[_d]:s.ONE,[xd]:s.SRC_COLOR,[lo]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[yd]:s.DST_ALPHA,[vd]:s.ONE_MINUS_SRC_COLOR,[ho]:s.ONE_MINUS_SRC_ALPHA,[bd]:s.ONE_MINUS_DST_COLOR,[Md]:s.ONE_MINUS_DST_ALPHA,[wd]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Td]:s.CONSTANT_ALPHA,[Cd]:s.ONE_MINUS_CONSTANT_ALPHA};function j(U,fe,F,oe,de,et,ct,Ot,gn,lt){if(U===ni){p===!0&&(Ce(s.BLEND),p=!1);return}if(p===!1&&(ue(s.BLEND),p=!0),U!==dd){if(U!==v||lt!==b){if((x!==Mi||E!==Mi)&&(s.blendEquation(s.FUNC_ADD),x=Mi,E=Mi),lt)switch(U){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,A=null,P=null,D.set(0,0,0),M=0,v=U,b=lt}return}de=de||fe,et=et||F,ct=ct||oe,(fe!==x||de!==E)&&(s.blendEquationSeparate(Y[fe],Y[de]),x=fe,E=de),(F!==y||oe!==T||et!==A||ct!==P)&&(s.blendFuncSeparate(se[F],se[oe],se[et],se[ct]),y=F,T=oe,A=et,P=ct),(Ot.equals(D)===!1||gn!==M)&&(s.blendColor(Ot.r,Ot.g,Ot.b,gn),D.copy(Ot),M=gn),v=U,b=!1}function ve(U,fe){U.side===Un?Ce(s.CULL_FACE):ue(s.CULL_FACE);let F=U.side===Kt;fe&&(F=!F),ge(F),U.blending===ts&&U.transparent===!1?j(ni):j(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const oe=U.stencilWrite;l.setTest(oe),oe&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),R(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(U){H!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),H=U)}function be(U){U!==ud?(ue(s.CULL_FACE),U!==K&&(U===Kc?s.cullFace(s.BACK):U===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),K=U}function Ke(U){U!==I&&(X&&s.lineWidth(U),I=U)}function R(U,fe,F){U?(ue(s.POLYGON_OFFSET_FILL),(W!==fe||z!==F)&&(s.polygonOffset(fe,F),W=fe,z=F)):Ce(s.POLYGON_OFFSET_FILL)}function S(U){U?ue(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function G(U){U===void 0&&(U=s.TEXTURE0+Z-1),ie!==U&&(s.activeTexture(U),ie=U)}function q(U,fe,F){F===void 0&&(ie===null?F=s.TEXTURE0+Z-1:F=ie);let oe=me[F];oe===void 0&&(oe={type:void 0,texture:void 0},me[F]=oe),(oe.type!==U||oe.texture!==fe)&&(ie!==F&&(s.activeTexture(F),ie=F),s.bindTexture(U,fe||ye[U]),oe.type=U,oe.texture=fe)}function ne(){const U=me[ie];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(U){te.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function Ae(U){pe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function nt(U,fe){let F=u.get(fe);F===void 0&&(F=new WeakMap,u.set(fe,F));let oe=F.get(U);oe===void 0&&(oe=s.getUniformBlockIndex(fe,U.name),F.set(U,oe))}function He(U,fe){const oe=u.get(fe).get(U);h.get(fe)!==oe&&(s.uniformBlockBinding(fe,oe,U.__bindingPointIndex),h.set(fe,oe))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ie=null,me={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,T=null,E=null,A=null,P=null,D=new _e(0,0,0),M=0,b=!1,H=null,K=null,I=null,W=null,z=null,te.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ue,disable:Ce,bindFramebuffer:Me,drawBuffers:L,useProgram:ae,setBlending:j,setMaterial:ve,setFlipSided:ge,setCullFace:be,setLineWidth:Ke,setPolygonOffset:R,setScissorTest:S,activeTexture:G,bindTexture:q,unbindTexture:ne,compressedTexImage2D:ee,compressedTexImage3D:Fe,texImage2D:$e,texImage3D:Re,updateUBOMapping:nt,uniformBlockBinding:He,texStorage2D:re,texStorage3D:wt,texSubImage2D:Le,texSubImage3D:ce,compressedTexSubImage2D:he,compressedTexSubImage3D:Be,scissor:we,viewport:Ae,reset:ft}}function JM(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $,u=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return g?new OffscreenCanvas(R,S):Fr("canvas")}function m(R,S,G,q){let ne=1;const ee=Ke(R);if((ee.width>q||ee.height>q)&&(ne=q/Math.max(ee.width,ee.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Fe=S?po:Math.floor,Le=Fe(ne*ee.width),ce=Fe(ne*ee.height);f===void 0&&(f=_(Le,ce));const he=G?_(Le,ce):f;return he.width=Le,he.height=ce,he.getContext("2d").drawImage(R,0,0,Le,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Le+"x"+ce+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){const S=Ke(R);return Pl(S.width)&&Pl(S.height)}function v(R){return o?!1:R.wrapS!==Ht||R.wrapT!==Ht||R.minFilter!==Et&&R.minFilter!==_t}function x(R,S){return R.generateMipmaps&&S&&R.minFilter!==Et&&R.minFilter!==_t}function y(R){s.generateMipmap(R)}function T(R,S,G,q,ne=!1){if(o===!1)return S;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=S;if(S===s.RED&&(G===s.FLOAT&&(ee=s.R32F),G===s.HALF_FLOAT&&(ee=s.R16F),G===s.UNSIGNED_BYTE&&(ee=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.R8UI),G===s.UNSIGNED_SHORT&&(ee=s.R16UI),G===s.UNSIGNED_INT&&(ee=s.R32UI),G===s.BYTE&&(ee=s.R8I),G===s.SHORT&&(ee=s.R16I),G===s.INT&&(ee=s.R32I)),S===s.RG&&(G===s.FLOAT&&(ee=s.RG32F),G===s.HALF_FLOAT&&(ee=s.RG16F),G===s.UNSIGNED_BYTE&&(ee=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.RG8UI),G===s.UNSIGNED_SHORT&&(ee=s.RG16UI),G===s.UNSIGNED_INT&&(ee=s.RG32UI),G===s.BYTE&&(ee=s.RG8I),G===s.SHORT&&(ee=s.RG16I),G===s.INT&&(ee=s.RG32I)),S===s.RGBA){const Fe=ne?Ir:rt.getTransfer(q);G===s.FLOAT&&(ee=s.RGBA32F),G===s.HALF_FLOAT&&(ee=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ee=Fe===ht?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,S,G){return x(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Et&&R.minFilter!==_t?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){return R===Et||R===uo||R===Ji?s.NEAREST:s.LINEAR}function P(R){const S=R.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&u.delete(S)}function D(R){const S=R.target;S.removeEventListener("dispose",D),H(S)}function M(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,q=d.get(G);if(q){const ne=q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(q).length===0&&d.delete(G)}n.remove(R)}function b(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const G=R.source,q=d.get(G);delete q[S.__cacheKey],a.memory.textures--}function H(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ne=0;ne<S.__webglFramebuffer[q].length;ne++)s.deleteFramebuffer(S.__webglFramebuffer[q][ne]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let q=0,ne=G.length;q<ne;q++){const ee=n.get(G[q]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(R)}let K=0;function I(){K=0}function W(){const R=K;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),K+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Z(R,S){const G=n.get(R);if(R.isVideoTexture&&ge(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(G,R,S);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function X(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){pe(G,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function J(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){pe(G,R,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function Q(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Ee(G,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const ie={[Tr]:s.REPEAT,[Ht]:s.CLAMP_TO_EDGE,[Cr]:s.MIRRORED_REPEAT},me={[Et]:s.NEAREST,[uo]:s.NEAREST_MIPMAP_NEAREST,[Ji]:s.NEAREST_MIPMAP_LINEAR,[_t]:s.LINEAR,[_r]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},Ue={[sp]:s.NEVER,[hp]:s.ALWAYS,[rp]:s.LESS,[sh]:s.LEQUAL,[ap]:s.EQUAL,[lp]:s.GEQUAL,[op]:s.GREATER,[cp]:s.NOTEQUAL};function V(R,S,G){if(S.type===ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_t||S.magFilter===_r||S.magFilter===Ji||S.magFilter===Nn||S.minFilter===_t||S.minFilter===_r||S.minFilter===Ji||S.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(s.texParameteri(R,s.TEXTURE_WRAP_S,ie[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ie[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ie[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,me[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,me[S.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Ht||S.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A(S.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Et&&S.minFilter!==_t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Et||S.minFilter!==Ji&&S.minFilter!==Nn||S.type===ln&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Xs&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function te(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let ne=d.get(q);ne===void 0&&(ne={},d.set(q,ne));const ee=z(S);if(ee!==R.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ee].usedTimes++;const Fe=ne[R.__cacheKey];Fe!==void 0&&(ne[R.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(S)),R.__cacheKey=ee,R.__webglTexture=ne[ee].texture}return G}function pe(R,S,G){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);const ne=te(R,S),ee=S.source;t.bindTexture(q,R.__webglTexture,s.TEXTURE0+G);const Fe=n.get(ee);if(ee.version!==Fe.__version||ne===!0){t.activeTexture(s.TEXTURE0+G);const Le=rt.getPrimaries(rt.workingColorSpace),ce=S.colorSpace===$n?null:rt.getPrimaries(S.colorSpace),he=S.colorSpace===$n||Le===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Be=v(S)&&p(S.image)===!1;let re=m(S.image,Be,!1,i.maxTextureSize);re=be(S,re);const wt=p(re)||o,$e=r.convert(S.format,S.colorSpace);let Re=r.convert(S.type),we=T(S.internalFormat,$e,Re,S.colorSpace,S.isVideoTexture);V(q,S,wt);let Ae;const nt=S.mipmaps,He=o&&S.isVideoTexture!==!0&&we!==nh,ft=Fe.__version===void 0||ne===!0,U=ee.dataReady,fe=E(S,re,wt);if(S.isDepthTexture)we=s.DEPTH_COMPONENT,o?S.type===ln?we=s.DEPTH_COMPONENT32F:S.type===ei?we=s.DEPTH_COMPONENT24:S.type===bi?we=s.DEPTH24_STENCIL8:we=s.DEPTH_COMPONENT16:S.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ei&&we===s.DEPTH_COMPONENT&&S.type!==vo&&S.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ei,Re=r.convert(S.type)),S.format===ss&&we===s.DEPTH_COMPONENT&&(we=s.DEPTH_STENCIL,S.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=bi,Re=r.convert(S.type))),ft&&(He?t.texStorage2D(s.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,we,re.width,re.height,0,$e,Re,null));else if(S.isDataTexture)if(nt.length>0&&wt){He&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,we,nt[0].width,nt[0].height);for(let F=0,oe=nt.length;F<oe;F++)Ae=nt[F],He?U&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Re,Ae.data):t.texImage2D(s.TEXTURE_2D,F,we,Ae.width,Ae.height,0,$e,Re,Ae.data);S.generateMipmaps=!1}else He?(ft&&t.texStorage2D(s.TEXTURE_2D,fe,we,re.width,re.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,$e,Re,re.data)):t.texImage2D(s.TEXTURE_2D,0,we,re.width,re.height,0,$e,Re,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,we,nt[0].width,nt[0].height,re.depth);for(let F=0,oe=nt.length;F<oe;F++)Ae=nt[F],S.format!==nn?$e!==null?He?U&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,re.depth,$e,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,we,Ae.width,Ae.height,re.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,re.depth,$e,Re,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,we,Ae.width,Ae.height,re.depth,0,$e,Re,Ae.data)}else{He&&ft&&t.texStorage2D(s.TEXTURE_2D,fe,we,nt[0].width,nt[0].height);for(let F=0,oe=nt.length;F<oe;F++)Ae=nt[F],S.format!==nn?$e!==null?He?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,F,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,$e,Re,Ae.data):t.texImage2D(s.TEXTURE_2D,F,we,Ae.width,Ae.height,0,$e,Re,Ae.data)}else if(S.isDataArrayTexture)He?(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,we,re.width,re.height,re.depth),U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,$e,Re,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,$e,Re,re.data);else if(S.isData3DTexture)He?(ft&&t.texStorage3D(s.TEXTURE_3D,fe,we,re.width,re.height,re.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,$e,Re,re.data)):t.texImage3D(s.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,$e,Re,re.data);else if(S.isFramebufferTexture){if(ft)if(He)t.texStorage2D(s.TEXTURE_2D,fe,we,re.width,re.height);else{let F=re.width,oe=re.height;for(let de=0;de<fe;de++)t.texImage2D(s.TEXTURE_2D,de,we,F,oe,0,$e,Re,null),F>>=1,oe>>=1}}else if(nt.length>0&&wt){if(He&&ft){const F=Ke(nt[0]);t.texStorage2D(s.TEXTURE_2D,fe,we,F.width,F.height)}for(let F=0,oe=nt.length;F<oe;F++)Ae=nt[F],He?U&&t.texSubImage2D(s.TEXTURE_2D,F,0,0,$e,Re,Ae):t.texImage2D(s.TEXTURE_2D,F,we,$e,Re,Ae);S.generateMipmaps=!1}else if(He){if(ft){const F=Ke(re);t.texStorage2D(s.TEXTURE_2D,fe,we,F.width,F.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,$e,Re,re)}else t.texImage2D(s.TEXTURE_2D,0,we,$e,Re,re);x(S,wt)&&y(q),Fe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ee(R,S,G){if(S.image.length!==6)return;const q=te(R,S),ne=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const ee=n.get(ne);if(ne.version!==ee.__version||q===!0){t.activeTexture(s.TEXTURE0+G);const Fe=rt.getPrimaries(rt.workingColorSpace),Le=S.colorSpace===$n?null:rt.getPrimaries(S.colorSpace),ce=S.colorSpace===$n||Fe===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,re=[];for(let F=0;F<6;F++)!he&&!Be?re[F]=m(S.image[F],!1,!0,i.maxCubemapSize):re[F]=Be?S.image[F].image:S.image[F],re[F]=be(S,re[F]);const wt=re[0],$e=p(wt)||o,Re=r.convert(S.format,S.colorSpace),we=r.convert(S.type),Ae=T(S.internalFormat,Re,we,S.colorSpace),nt=o&&S.isVideoTexture!==!0,He=ee.__version===void 0||q===!0,ft=ne.dataReady;let U=E(S,wt,$e);V(s.TEXTURE_CUBE_MAP,S,$e);let fe;if(he){nt&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,U,Ae,wt.width,wt.height);for(let F=0;F<6;F++){fe=re[F].mipmaps;for(let oe=0;oe<fe.length;oe++){const de=fe[oe];S.format!==nn?Re!==null?nt?ft&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe,0,0,de.width,de.height,Re,de.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe,0,0,de.width,de.height,Re,we,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe,Ae,de.width,de.height,0,Re,we,de.data)}}}else{if(fe=S.mipmaps,nt&&He){fe.length>0&&U++;const F=Ke(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,U,Ae,F.width,F.height)}for(let F=0;F<6;F++)if(Be){nt?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,re[F].width,re[F].height,Re,we,re[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,re[F].width,re[F].height,0,Re,we,re[F].data);for(let oe=0;oe<fe.length;oe++){const et=fe[oe].image[F].image;nt?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe+1,0,0,et.width,et.height,Re,we,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe+1,Ae,et.width,et.height,0,Re,we,et.data)}}else{nt?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Re,we,re[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,Re,we,re[F]);for(let oe=0;oe<fe.length;oe++){const de=fe[oe];nt?ft&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe+1,0,0,Re,we,de.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,oe+1,Ae,Re,we,de.image[F])}}}x(S,$e)&&y(s.TEXTURE_CUBE_MAP),ee.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ye(R,S,G,q,ne,ee){const Fe=r.convert(G.format,G.colorSpace),Le=r.convert(G.type),ce=T(G.internalFormat,Fe,Le,G.colorSpace);if(!n.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ee),re=Math.max(1,S.height>>ee);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,ce,Be,re,S.depth,0,Fe,Le,null):t.texImage2D(ne,ee,ce,Be,re,0,Fe,Le,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ve(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,ne,n.get(G).__webglTexture,0,j(S)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,ne,n.get(G).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(R,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||ve(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ln?q=s.DEPTH_COMPONENT32F:ne.type===ei&&(q=s.DEPTH_COMPONENT24));const ee=j(S);ve(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,q,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,q,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const q=j(S);G&&ve(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):ve(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const q=S.textures;for(let ne=0;ne<q.length;ne++){const ee=q[ne],Fe=r.convert(ee.format,ee.colorSpace),Le=r.convert(ee.type),ce=T(ee.internalFormat,Fe,Le,ee.colorSpace),he=j(S);G&&ve(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,ce,S.width,S.height):ve(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,ce,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ce,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,ne=j(S);if(S.depthTexture.format===Ei)ve(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(S.depthTexture.format===ss)ve(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Me(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=s.createRenderbuffer(),ue(S.__webglDepthbuffer[q],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),ue(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function L(R,S,G){const q=n.get(R);S!==void 0&&ye(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Me(R)}function ae(R){const S=R.texture,G=n.get(R),q=n.get(S);R.addEventListener("dispose",D);const ne=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Fe=ne.length>1,Le=p(R)||o;if(Fe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let he=0;he<S.mipmaps.length;he++)G.__webglFramebuffer[ce][he]=s.createFramebuffer()}else G.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Fe)if(i.drawBuffers)for(let ce=0,he=ne.length;ce<he;ce++){const Be=n.get(ne[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ve(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const he=ne[ce];G.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Be=r.convert(he.format,he.colorSpace),re=r.convert(he.type),wt=T(he.internalFormat,Be,re,he.colorSpace,R.isXRRenderTarget===!0),$e=j(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,wt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),V(s.TEXTURE_CUBE_MAP,S,Le);for(let ce=0;ce<6;ce++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)ye(G.__webglFramebuffer[ce][he],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else ye(G.__webglFramebuffer[ce],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(S,Le)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ce=0,he=ne.length;ce<he;ce++){const Be=ne[ce],re=n.get(Be);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),V(s.TEXTURE_2D,Be,Le),ye(G.__webglFramebuffer,R,Be,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),x(Be,Le)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ce=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,q.__webglTexture),V(ce,S,Le),o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)ye(G.__webglFramebuffer[he],R,S,s.COLOR_ATTACHMENT0,ce,he);else ye(G.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ce,0);x(S,Le)&&y(ce),t.unbindTexture()}R.depthBuffer&&Me(R)}function Y(R){const S=p(R)||o,G=R.textures;for(let q=0,ne=G.length;q<ne;q++){const ee=G[q];if(x(ee,S)){const Fe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=n.get(ee).__webglTexture;t.bindTexture(Fe,Le),y(Fe),t.unbindTexture()}}}function se(R){if(o&&R.samples>0&&ve(R)===!1){const S=R.textures,G=R.width,q=R.height;let ne=s.COLOR_BUFFER_BIT;const ee=[],Fe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(R),ce=S.length>1;if(ce)for(let he=0;he<S.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let he=0;he<S.length;he++){ee.push(s.COLOR_ATTACHMENT0+he),R.depthBuffer&&ee.push(Fe);const Be=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),ce&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[he]),Be===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Fe])),ce){const re=n.get(S[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,G,q,0,0,G,q,ne,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let he=0;he<S.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Le.__webglColorRenderbuffer[he]);const Be=n.get(S[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function j(R){return Math.min(i.maxSamples,R.samples)}function ve(R){const S=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ge(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function be(R,S){const G=R.colorSpace,q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===fo||G!==hi&&G!==$n&&(rt.getTransfer(G)===ht?o===!1?e.has("EXT_sRGB")===!0&&q===nn?(R.format=fo,R.minFilter=_t,R.generateMipmaps=!1):S=ah.sRGBToLinear(S):(q!==nn||ne!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=L,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ve}function Ap(s,e,t){const n=t.isWebGL2;function i(r,a=$n){let o;const c=rt.getTransfer(a);if(r===si)return s.UNSIGNED_BYTE;if(r===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$l)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Xd)return s.BYTE;if(r===qd)return s.SHORT;if(r===vo)return s.UNSIGNED_SHORT;if(r===Jl)return s.INT;if(r===ei)return s.UNSIGNED_INT;if(r===ln)return s.FLOAT;if(r===Xs)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Yd)return s.ALPHA;if(r===nn)return s.RGBA;if(r===Zd)return s.LUMINANCE;if(r===Jd)return s.LUMINANCE_ALPHA;if(r===Ei)return s.DEPTH_COMPONENT;if(r===ss)return s.DEPTH_STENCIL;if(r===fo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jl)return s.RED;if(r===Ql)return s.RED_INTEGER;if(r===Kd)return s.RG;if(r===eh)return s.RG_INTEGER;if(r===th)return s.RGBA_INTEGER;if(r===$a||r===ja||r===Qa||r===eo)if(c===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===$a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===$a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===il||r===sl||r===rl||r===al)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ol||r===cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ol)return c===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===cl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ll||r===hl||r===ul||r===fl||r===dl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ll)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ul)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ml)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_l)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ml)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sl)return c===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===to||r===bl||r===El)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===to)return c===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===El)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$d||r===wl||r===Al||r===Tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===to)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Al)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Tp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Tn({extensions:{fragDepth:!0},vertexShader:$M,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tt(new js(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class eS extends ui{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new QM,m=t.getContextAttributes();let p=null,v=null;const x=[],y=[],T=new $;let E=null;const A=new Nt;A.layers.enable(1),A.viewport=new at;const P=new Nt;P.layers.enable(2),P.viewport=new at;const D=[A,P],M=new Tp;M.layers.enable(1),M.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=x[V];return te===void 0&&(te=new Cc,x[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=x[V];return te===void 0&&(te=new Cc,x[V]=te),te.getGripSpace()},this.getHand=function(V){let te=x[V];return te===void 0&&(te=new Cc,x[V]=te),te.getHandSpace()};function K(V){const te=y.indexOf(V.inputSource);if(te===-1)return;const pe=x[te];pe!==void 0&&(pe.update(V.inputSource,V.frame,l||a),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function I(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",W);for(let V=0;V<x.length;V++){const te=y[V];te!==null&&(y[V]=null,x[V].disconnect(te))}b=null,H=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",I),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new An(d.framebufferWidth,d.framebufferHeight,{format:nn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ss:Ei,pe=m.stencil?bi:ei);const ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new An(f.textureWidth,f.textureHeight,{format:nn,type:si,depthTexture:new uh(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ue=e.properties.get(v);ue.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(V){for(let te=0;te<V.removed.length;te++){const pe=V.removed[te],Ee=y.indexOf(pe);Ee>=0&&(y[Ee]=null,x[Ee].disconnect(pe))}for(let te=0;te<V.added.length;te++){const pe=V.added[te];let Ee=y.indexOf(pe);if(Ee===-1){for(let ue=0;ue<x.length;ue++)if(ue>=y.length){y.push(pe),Ee=ue;break}else if(y[ue]===null){y[ue]=pe,Ee=ue;break}if(Ee===-1)break}const ye=x[Ee];ye&&ye.connect(pe)}}const z=new C,Z=new C;function X(V,te,pe){z.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const Ee=z.distanceTo(Z),ye=te.projectionMatrix.elements,ue=pe.projectionMatrix.elements,Ce=ye[14]/(ye[10]-1),Me=ye[14]/(ye[10]+1),L=(ye[9]+1)/ye[5],ae=(ye[9]-1)/ye[5],Y=(ye[8]-1)/ye[0],se=(ue[8]+1)/ue[0],j=Ce*Y,ve=Ce*se,ge=Ee/(-Y+se),be=ge*-Y;te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(be),V.translateZ(ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ke=Ce+ge,R=Me+ge,S=j-be,G=ve+(Ee-be),q=L*Me/R*Ke,ne=ae*Me/R*Ke;V.projectionMatrix.makePerspective(S,G,q,ne,Ke,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),M.near=P.near=A.near=V.near,M.far=P.far=A.far=V.far,(b!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,H=M.far,A.near=b,A.far=H,P.near=b,P.far=H,A.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const te=V.parent,pe=M.cameras;J(M,te);for(let Ee=0;Ee<pe.length;Ee++)J(pe[Ee],te);pe.length===2?X(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),Q(V,M,te)};function Q(V,te,pe){pe===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function me(V,te){if(h=te.getViewerPose(l||a),g=te,h!==null){const pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ee=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Ee=!0);for(let ue=0;ue<pe.length;ue++){const Ce=pe[ue];let Me=null;if(d!==null)Me=d.getViewport(Ce);else{const ae=u.getViewSubImage(f,Ce);Me=ae.viewport,ue===0&&(e.setRenderTargetTextures(v,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(v))}let L=D[ue];L===void 0&&(L=new Nt,L.layers.enable(ue),L.viewport=new at,D[ue]=L),L.matrix.fromArray(Ce.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ce.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Me.x,Me.y,Me.width,Me.height),ue===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ee===!0&&M.cameras.push(L)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const ue=u.getDepthInformation(pe[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,i.renderState)}}for(let pe=0;pe<x.length;pe++){const Ee=y[pe],ye=x[pe];Ee!==null&&ye!==void 0&&ye.update(Ee,te,l||a)}_.render(e,M),ie&&ie(V,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ue=new yp;Ue.setAnimationLoop(me),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}}const ki=new mn,tS=new Pe;function nS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gp(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;if(x&&(m.envMap.value=x,ki.copy(y),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(tS.makeRotationFromEuler(ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iS(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(v,T);const E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){const x=u();v.__bindingPointIndex=x;const y=s.createBuffer(),T=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,A=y.length;E<A;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let D=0,M=P.length;D<M;D++){const b=P[D];if(d(b,E,D,T)===!0){const H=b.__offset,K=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let W=0;W<K.length;W++){const z=K[W],Z=_(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,H+I,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,y,T){const E=v.value,A=x+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const P=T[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(v){const x=v.uniforms;let y=0;const T=16;for(let A=0,P=x.length;A<P;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,b=D.length;M<b;M++){const H=D[M],K=Array.isArray(H.value)?H.value:[H.value];for(let I=0,W=K.length;I<W;I++){const z=K[I],Z=_(z),X=y%T;X!==0&&T-X<Z.boundary&&(y+=T-X),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Z.storage}}}const E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class ph{constructor(e={}){const{canvas:t=fp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let y=!1,T=0,E=0,A=null,P=-1,D=null;const M=new at,b=new at;let H=null;const K=new _e(0);let I=0,W=t.width,z=t.height,Z=1,X=null,J=null;const Q=new at(0,0,W,z),ie=new at(0,0,W,z);let me=!1;const Ue=new Kr;let V=!1,te=!1,pe=null;const Ee=new Pe,ye=new $,ue=new C,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return A===null?Z:1}let L=n;function ae(w,N){for(let B=0;B<w.length;B++){const k=w[B],O=t.getContext(k,N);if(O!==null)return O}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=ae(N,w),L===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,se,j,ve,ge,be,Ke,R,S,G,q,ne,ee,Fe,Le,ce,he,Be,re,wt,$e,Re,we,Ae;function nt(){Y=new dy(L),se=new oy(L,Y,e),Y.init(se),Re=new Ap(L,Y,se),j=new ZM(L,Y,se),ve=new gy(L),ge=new OM,be=new JM(L,Y,j,ge,se,Re,ve),Ke=new ly(x),R=new fy(x),S=new S0(L,se),we=new ry(L,Y,S,se),G=new py(L,S,ve,we),q=new yy(L,G,S,ve),re=new vy(L,se,be),ce=new cy(ge),ne=new NM(x,Ke,R,Y,se,we,ce),ee=new nS(x,ge),Fe=new BM,Le=new WM(Y,se),Be=new sy(x,Ke,R,j,q,f,c),he=new YM(x,q,se),Ae=new iS(L,ve,se,j),wt=new ay(L,Y,ve,se),$e=new my(L,Y,ve,se),ve.programs=ne.programs,x.capabilities=se,x.extensions=Y,x.properties=ge,x.renderLists=Fe,x.shadowMap=he,x.state=j,x.info=ve}nt();const He=new eS(x,L);this.xr=He,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(W,z,!1))},this.getSize=function(w){return w.set(W,z)},this.setSize=function(w,N,B=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,z=N,t.width=Math.floor(w*Z),t.height=Math.floor(N*Z),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*Z,z*Z).floor()},this.setDrawingBufferSize=function(w,N,B){W=w,z=N,Z=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,N,B,k){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,N,B,k),j.viewport(M.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,N,B,k){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,N,B,k),j.scissor(b.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){j.setScissorTest(me=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,N=!0,B=!0){let k=0;if(w){let O=!1;if(A!==null){const xe=A.texture.format;O=xe===th||xe===eh||xe===Ql}if(O){const xe=A.texture.type,Te=xe===si||xe===ei||xe===vo||xe===bi||xe===Kl||xe===$l,Ie=Be.getClearColor(),Ne=Be.getClearAlpha(),Ze=Ie.r,ze=Ie.g,Ge=Ie.b;Te?(d[0]=Ze,d[1]=ze,d[2]=Ge,d[3]=Ne,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Ze,g[1]=ze,g[2]=Ge,g[3]=Ne,L.clearBufferiv(L.COLOR,0,g))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT),B&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Fe.dispose(),Le.dispose(),ge.dispose(),Ke.dispose(),R.dispose(),q.dispose(),we.dispose(),Ae.dispose(),ne.dispose(),He.dispose(),He.removeEventListener("sessionstart",gn),He.removeEventListener("sessionend",lt),pe&&(pe.dispose(),pe=null),Xt.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ve.autoReset,N=he.enabled,B=he.autoUpdate,k=he.needsUpdate,O=he.type;nt(),ve.autoReset=w,he.enabled=N,he.autoUpdate=B,he.needsUpdate=k,he.type=O}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function F(w){const N=w.target;N.removeEventListener("dispose",F),oe(N)}function oe(w){de(w),ge.remove(w)}function de(w){const N=ge.get(w).programs;N!==void 0&&(N.forEach(function(B){ne.releaseProgram(B)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,k,O,xe){N===null&&(N=Ce);const Te=O.isMesh&&O.matrixWorld.determinant()<0,Ie=Um(w,N,B,k,O);j.setMaterial(k,Te);let Ne=B.index,Ze=1;if(k.wireframe===!0){if(Ne=G.getWireframeAttribute(B),Ne===void 0)return;Ze=2}const ze=B.drawRange,Ge=B.attributes.position;let St=ze.start*Ze,an=(ze.start+ze.count)*Ze;xe!==null&&(St=Math.max(St,xe.start*Ze),an=Math.min(an,(xe.start+xe.count)*Ze)),Ne!==null?(St=Math.max(St,0),an=Math.min(an,Ne.count)):Ge!=null&&(St=Math.max(St,0),an=Math.min(an,Ge.count));const It=an-St;if(It<0||It===1/0)return;we.setup(O,k,Ie,B,Ne);let Gn,mt=wt;if(Ne!==null&&(Gn=S.get(Ne),mt=$e,mt.setIndex(Gn)),O.isMesh)k.wireframe===!0?(j.setLineWidth(k.wireframeLinewidth*Me()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(O.isLine){let qe=k.linewidth;qe===void 0&&(qe=1),j.setLineWidth(qe*Me()),O.isLineSegments?mt.setMode(L.LINES):O.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else O.isPoints?mt.setMode(L.POINTS):O.isSprite&&mt.setMode(L.TRIANGLES);if(O.isBatchedMesh)mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)mt.renderInstances(St,It,O.count);else if(B.isInstancedBufferGeometry){const qe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jo=Math.min(B.instanceCount,qe);mt.renderInstances(St,It,Jo)}else mt.render(St,It)};function et(w,N,B){w.transparent===!0&&w.side===Un&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,na(w,N,B),w.side=oi,w.needsUpdate=!0,na(w,N,B),w.side=Un):na(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),m=Le.get(B),m.init(),v.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==B&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(x._useLegacyLights);const k=new Set;return w.traverse(function(O){const xe=O.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ie=xe[Te];et(Ie,B,O),k.add(Ie)}else et(xe,B,O),k.add(xe)}),v.pop(),m=null,k},this.compileAsync=function(w,N,B=null){const k=this.compile(w,N,B);return new Promise(O=>{function xe(){if(k.forEach(function(Te){ge.get(Te).currentProgram.isReady()&&k.delete(Te)}),k.size===0){O(w);return}setTimeout(xe,10)}Y.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ct=null;function Ot(w){ct&&ct(w)}function gn(){Xt.stop()}function lt(){Xt.start()}const Xt=new yp;Xt.setAnimationLoop(Ot),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(w){ct=w,He.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},He.addEventListener("sessionstart",gn),He.addEventListener("sessionend",lt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(N),N=He.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,A),m=Le.get(w,v.length),m.init(),v.push(m),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(Ee),te=this.localClippingEnabled,V=ce.init(this.clippingPlanes,te),_=Fe.get(w,p.length),_.init(),p.push(_),Ln(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,J),this.info.render.frame++,V===!0&&ce.beginShadows();const B=m.state.shadowsArray;if(he.render(B,w,N),V===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1)&&Be.render(_,w),m.setupLights(x._useLegacyLights),N.isArrayCamera){const k=N.cameras;for(let O=0,xe=k.length;O<xe;O++){const Te=k[O];Oh(_,w,Te,Te.viewport)}}else Oh(_,w,N);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,N),we.resetDefaultState(),P=-1,D=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ln(w,N,B,k){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ue.intersectsSprite(w)){k&&ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const Te=q.update(w),Ie=w.material;Ie.visible&&_.push(w,Te,Ie,B,ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ue.intersectsObject(w))){const Te=q.update(w),Ie=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ue.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ue.copy(Te.boundingSphere.center)),ue.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Ne=Te.groups;for(let Ze=0,ze=Ne.length;Ze<ze;Ze++){const Ge=Ne[Ze],St=Ie[Ge.materialIndex];St&&St.visible&&_.push(w,Te,St,B,ue.z,Ge)}}else Ie.visible&&_.push(w,Te,Ie,B,ue.z,null)}}const xe=w.children;for(let Te=0,Ie=xe.length;Te<Ie;Te++)Ln(xe[Te],N,B,k)}function Oh(w,N,B,k){const O=w.opaque,xe=w.transmissive,Te=w.transparent;m.setupLightsView(B),V===!0&&ce.setGlobalState(x.clippingPlanes,B),xe.length>0&&Dm(O,xe,N,B),k&&j.viewport(M.copy(k)),O.length>0&&ta(O,N,B),xe.length>0&&ta(xe,N,B),Te.length>0&&ta(Te,N,B),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Dm(w,N,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const xe=se.isWebGL2;pe===null&&(pe=new An(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Xs:si,minFilter:Nn,samples:xe?4:0})),x.getDrawingBufferSize(ye),xe?pe.setSize(ye.x,ye.y):pe.setSize(po(ye.x),po(ye.y));const Te=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(K),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=ii,ta(w,B,k),be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe);let Ne=!1;for(let Ze=0,ze=N.length;Ze<ze;Ze++){const Ge=N[Ze],St=Ge.object,an=Ge.geometry,It=Ge.material,Gn=Ge.group;if(It.side===Un&&St.layers.test(k.layers)){const mt=It.side;It.side=Kt,It.needsUpdate=!0,Fh(St,B,k,an,It,Gn),It.side=mt,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe)),x.setRenderTarget(Te),x.setClearColor(K,I),x.toneMapping=Ie}function ta(w,N,B){const k=N.isScene===!0?N.overrideMaterial:null;for(let O=0,xe=w.length;O<xe;O++){const Te=w[O],Ie=Te.object,Ne=Te.geometry,Ze=k===null?Te.material:k,ze=Te.group;Ie.layers.test(B.layers)&&Fh(Ie,N,B,Ne,Ze,ze)}}function Fh(w,N,B,k,O,xe){w.onBeforeRender(x,N,B,k,O,xe),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,N,B,k,w,xe),O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=Kt,O.needsUpdate=!0,x.renderBufferDirect(B,N,k,O,w,xe),O.side=oi,O.needsUpdate=!0,x.renderBufferDirect(B,N,k,O,w,xe),O.side=Un):x.renderBufferDirect(B,N,k,O,w,xe),w.onAfterRender(x,N,B,k,O,xe)}function na(w,N,B){N.isScene!==!0&&(N=Ce);const k=ge.get(w),O=m.state.lights,xe=m.state.shadowsArray,Te=O.state.version,Ie=ne.getParameters(w,O.state,xe,N,B),Ne=ne.getProgramCacheKey(Ie);let Ze=k.programs;k.environment=w.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(w.isMeshStandardMaterial?R:Ke).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",F),Ze=new Map,k.programs=Ze);let ze=Ze.get(Ne);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===Te)return zh(w,Ie),ze}else Ie.uniforms=ne.getUniforms(w),w.onBuild(B,Ie,x),w.onBeforeCompile(Ie,x),ze=ne.acquireProgram(Ie,Ne),Ze.set(Ne,ze),k.uniforms=Ie.uniforms;const Ge=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),zh(w,Ie),k.needsLights=Om(w),k.lightsStateVersion=Te,k.needsLights&&(Ge.ambientLightColor.value=O.state.ambient,Ge.lightProbe.value=O.state.probe,Ge.directionalLights.value=O.state.directional,Ge.directionalLightShadows.value=O.state.directionalShadow,Ge.spotLights.value=O.state.spot,Ge.spotLightShadows.value=O.state.spotShadow,Ge.rectAreaLights.value=O.state.rectArea,Ge.ltc_1.value=O.state.rectAreaLTC1,Ge.ltc_2.value=O.state.rectAreaLTC2,Ge.pointLights.value=O.state.point,Ge.pointLightShadows.value=O.state.pointShadow,Ge.hemisphereLights.value=O.state.hemi,Ge.directionalShadowMap.value=O.state.directionalShadowMap,Ge.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ge.spotShadowMap.value=O.state.spotShadowMap,Ge.spotLightMatrix.value=O.state.spotLightMatrix,Ge.spotLightMap.value=O.state.spotLightMap,Ge.pointShadowMap.value=O.state.pointShadowMap,Ge.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=ze,k.uniformsList=null,ze}function Bh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=io.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function zh(w,N){const B=ge.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Um(w,N,B,k,O){N.isScene!==!0&&(N=Ce),be.resetTextureUnits();const xe=N.fog,Te=k.isMeshStandardMaterial?N.environment:null,Ie=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hi,Ne=(k.isMeshStandardMaterial?R:Ke).get(k.envMap||Te),Ze=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ge=!!B.morphAttributes.position,St=!!B.morphAttributes.normal,an=!!B.morphAttributes.color;let It=ii;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(It=x.toneMapping);const Gn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=Gn!==void 0?Gn.length:0,qe=ge.get(k),Jo=m.state.lights;if(V===!0&&(te===!0||w!==D)){const _n=w===D&&k.id===P;ce.setState(k,w,_n)}let dt=!1;k.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Jo.state.version||qe.outputColorSpace!==Ie||O.isBatchedMesh&&qe.batching===!1||!O.isBatchedMesh&&qe.batching===!0||O.isInstancedMesh&&qe.instancing===!1||!O.isInstancedMesh&&qe.instancing===!0||O.isSkinnedMesh&&qe.skinning===!1||!O.isSkinnedMesh&&qe.skinning===!0||O.isInstancedMesh&&qe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&qe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&qe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&qe.instancingMorph===!1&&O.morphTexture!==null||qe.envMap!==Ne||k.fog===!0&&qe.fog!==xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ce.numPlanes||qe.numIntersection!==ce.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==ze||qe.morphTargets!==Ge||qe.morphNormals!==St||qe.morphColors!==an||qe.toneMapping!==It||se.isWebGL2===!0&&qe.morphTargetsCount!==mt)&&(dt=!0):(dt=!0,qe.__version=k.version);let Di=qe.currentProgram;dt===!0&&(Di=na(k,N,O));let kh=!1,nr=!1,Ko=!1;const Bt=Di.getUniforms(),Ui=qe.uniforms;if(j.useProgram(Di.program)&&(kh=!0,nr=!0,Ko=!0),k.id!==P&&(P=k.id,nr=!0),kh||D!==w){Bt.setValue(L,"projectionMatrix",w.projectionMatrix),Bt.setValue(L,"viewMatrix",w.matrixWorldInverse);const _n=Bt.map.cameraPosition;_n!==void 0&&_n.setValue(L,ue.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&Bt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Bt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,nr=!0,Ko=!0)}if(O.isSkinnedMesh){Bt.setOptional(L,O,"bindMatrix"),Bt.setOptional(L,O,"bindMatrixInverse");const _n=O.skeleton;_n&&(se.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Bt.setValue(L,"boneTexture",_n.boneTexture,be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Bt.setOptional(L,O,"batchingTexture"),Bt.setValue(L,"batchingTexture",O._matricesTexture,be));const $o=B.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&se.isWebGL2===!0)&&re.update(O,B,Di),(nr||qe.receiveShadow!==O.receiveShadow)&&(qe.receiveShadow=O.receiveShadow,Bt.setValue(L,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ui.envMap.value=Ne,Ui.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),nr&&(Bt.setValue(L,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Nm(Ui,Ko),xe&&k.fog===!0&&ee.refreshFogUniforms(Ui,xe),ee.refreshMaterialUniforms(Ui,k,Z,z,pe),io.upload(L,Bh(qe),Ui,be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(io.upload(L,Bh(qe),Ui,be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Bt.setValue(L,"center",O.center),Bt.setValue(L,"modelViewMatrix",O.modelViewMatrix),Bt.setValue(L,"normalMatrix",O.normalMatrix),Bt.setValue(L,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const _n=k.uniformsGroups;for(let jo=0,Fm=_n.length;jo<Fm;jo++)if(se.isWebGL2){const Vh=_n[jo];Ae.update(Vh,Di),Ae.bind(Vh,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function Nm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Om(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,B){ge.get(w.texture).__webglTexture=N,ge.get(w.depthTexture).__webglTexture=B;const k=ge.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const B=ge.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){A=w,T=N,E=B;let k=!0,O=null,xe=!1,Te=!1;if(w){const Ne=ge.get(w);Ne.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(L.FRAMEBUFFER,null),k=!1):Ne.__webglFramebuffer===void 0?be.setupRenderTarget(w):Ne.__hasExternalTextures&&be.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);const Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Te=!0);const ze=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?O=ze[N][B]:O=ze[N],xe=!0):se.isWebGL2&&w.samples>0&&be.useMultisampledRTT(w)===!1?O=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[B]:O=ze,M.copy(w.viewport),b.copy(w.scissor),H=w.scissorTest}else M.copy(Q).multiplyScalar(Z).floor(),b.copy(ie).multiplyScalar(Z).floor(),H=me;if(j.bindFramebuffer(L.FRAMEBUFFER,O)&&se.drawBuffers&&k&&j.drawBuffers(w,O),j.viewport(M),j.scissor(b),j.setScissorTest(H),xe){const Ne=ge.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,B)}else if(Te){const Ne=ge.get(w.texture),Ze=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.__webglTexture,B||0,Ze)}P=-1},this.readRenderTargetPixels=function(w,N,B,k,O,xe,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){j.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ne=w.texture,Ze=Ne.format,ze=Ne.type;if(Ze!==nn&&Re.convert(Ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===Xs&&(Y.has("EXT_color_buffer_half_float")||se.isWebGL2&&Y.has("EXT_color_buffer_float"));if(ze!==si&&Re.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ln&&(se.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-k&&B>=0&&B<=w.height-O&&L.readPixels(N,B,k,O,Re.convert(Ze),Re.convert(ze),xe)}finally{const Ne=A!==null?ge.get(A).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,N,B=0){const k=Math.pow(2,-B),O=Math.floor(N.image.width*k),xe=Math.floor(N.image.height*k);be.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,w.x,w.y,O,xe),j.unbindTexture()},this.copyTextureToTexture=function(w,N,B,k=0){const O=N.image.width,xe=N.image.height,Te=Re.convert(B.format),Ie=Re.convert(B.type);be.setTexture2D(B,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,w.x,w.y,O,xe,Te,Ie,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,k,w.x,w.y,Te,Ie,N.image),k===0&&B.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B,k,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=Math.round(w.max.x-w.min.x),Te=Math.round(w.max.y-w.min.y),Ie=w.max.z-w.min.z+1,Ne=Re.convert(k.format),Ze=Re.convert(k.type);let ze;if(k.isData3DTexture)be.setTexture3D(k,0),ze=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)be.setTexture2DArray(k,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Ge=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),It=L.getParameter(L.UNPACK_SKIP_ROWS),Gn=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=B.isCompressedTexture?B.mipmaps[O]:B.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,w.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,w.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?L.texSubImage3D(ze,O,N.x,N.y,N.z,xe,Te,Ie,Ne,Ze,mt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,O,N.x,N.y,N.z,xe,Te,Ie,Ne,mt.data):L.texSubImage3D(ze,O,N.x,N.y,N.z,xe,Te,Ie,Ne,Ze,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),O===0&&k.generateMipmaps&&L.generateMipmap(ze),j.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?be.setTextureCube(w,0):w.isData3DTexture?be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?be.setTexture2DArray(w,0):be.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,j.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Mo?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===Zr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cp extends ph{}Cp.prototype.isWebGL1Renderer=!0;class To{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new To(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Co{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let mh=class extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Ro{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new C;class rs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gh extends Wt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const lr=new C,Ps=new C,Ls=new C,Is=new $,hr=new $,Rp=new Pe,Aa=new C,ur=new C,Ta=new C,Wu=new $,Rc=new $,Xu=new $;class Pp extends st{constructor(e=new gh){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Ye;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ro(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new rs(n,3,0,!1)),Rs.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ca(Aa.set(-.5,-.5,0),Ls,a,Ps,i,r),Ca(ur.set(.5,-.5,0),Ls,a,Ps,i,r),Ca(Ta.set(.5,.5,0),Ls,a,Ps,i,r),Wu.set(0,0),Rc.set(1,0),Xu.set(1,1);let o=e.ray.intersectTriangle(Aa,ur,Ta,!1,lr);if(o===null&&(Ca(ur.set(-.5,.5,0),Ls,a,Ps,i,r),Rc.set(0,1),o=e.ray.intersectTriangle(Aa,Ta,ur,!1,lr),o===null))return;const c=e.ray.origin.distanceTo(lr);c<e.near||c>e.far||t.push({distance:c,point:lr.clone(),uv:hn.getInterpolation(lr,Aa,ur,Ta,Wu,Rc,Xu,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ca(s,e,t,n,i,r){Is.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(hr.x=r*Is.x-i*Is.y,hr.y=i*Is.x+r*Is.y):hr.copy(Is),s.copy(e),s.x+=hr.x,s.y+=hr.y,s.applyMatrix4(Rp)}const Ra=new C,qu=new C;class Lp extends st{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ra.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ra);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ra.setFromMatrixPosition(e.matrixWorld),qu.setFromMatrixPosition(this.matrixWorld);const n=Ra.distanceTo(qu)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Yu=new C,Zu=new at,Ju=new at,sS=new C,Ku=new Pe,Pa=new C,Pc=new Gt,$u=new Pe,Lc=new $s;class Ip extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nl,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(i),e.ray.intersectsSphere(Pc)!==!1&&($u.copy(i).invert(),Lc.copy(e.ray).applyMatrix4($u),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),Ju.fromBufferAttribute(i.attributes.skinWeight,e),Yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ju.getComponent(r);if(a!==0){const o=Zu.getComponent(r);Ku.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sS.copy(Yu).applyMatrix4(Ku),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class _h extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wi extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Et,h=Et,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ju=new Pe,rS=new Pe;class Po{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:rS;ju.multiplyMatrices(o,t[r]),ju.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wi(t,e,e,nn,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _h),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Zs extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new Pe,Qu=new Pe,La=[],ef=new $t,aS=new Pe,fr=new Tt,dr=new Gt;class Dp extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,aS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),ef.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ef)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),dr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ds),Qu.multiplyMatrices(n,Ds),fr.matrixWorld=Qu,fr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){const c=La[a];c.instanceId=r,c.object=this,t.push(c)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(i*this.count),i,this.count,jl,ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function oS(s,e){return s.z-e.z}function cS(s,e){return e.z-s.z}class lS{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}}const Us="batchId",xi=new Pe,tf=new Pe,hS=new Pe,nf=new Pe,Ic=new Kr,Ia=new $t,Vi=new Gt,pr=new C,Dc=new lS,Vt=new Tt,Da=[];function uS(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class Up extends Tt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Ye,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new wi(t,e,e,nn,ln);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const c=e.getAttribute(o),{array:l,itemSize:h,normalized:u}=c,f=new l.constructor(n*h),d=new c.constructor(f,h,u);d.setUsage(c.usage),t.setAttribute(o,d)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new ot(o,1))}const a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Us,new ot(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Us))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Us}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Us)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,xi),this.getBoundingBoxAt(i,Ia).applyMatrix4(xi),t.union(Ia))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,xi),this.getBoundingSphereAt(i,Vi).applyMatrix4(xi),t.union(Vi))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=e.getIndex(),h=l!==null;if(h&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._visibility,f=this._active,d=this._matricesTexture,g=this._matricesTexture.image.data;u.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,hS.toArray(g,_*16),d.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new $t,sphereInitialized:!1,sphere:new Gt});const m=this.geometry.getAttribute(Us);for(let p=0;p<i.vertexCount;p++)m.setX(i.vertexStart+p,_);return m.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const d in n.attributes){if(d===Us)continue;const g=t.getAttribute(d),_=n.getAttribute(d);uS(g,_,c);const m=g.itemSize;for(let p=g.count,v=l;p<v;p++){const x=c+p;for(let y=0;y<m;y++)_.setComponent(x,y,0)}_.needsUpdate=!0}if(i){const d=o.indexStart;for(let g=0;g<a.count;g++)r.setX(d+g,c+a.getX(g));for(let g=a.count,_=o.indexCount;g<_;g++)r.setX(d+g,c);r.needsUpdate=!0}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?a.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();const o=a.index,c=a.attributes.position,l=this._drawRanges[e];for(let h=l.start,u=l.start+l.count;h<u;h++){let f=h;o&&(f=o.getX(f)),r.expandByPoint(pr.fromBufferAttribute(c,f))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Ia),Ia.getCenter(r.center);const o=a.index,c=a.attributes.position,l=this._drawRanges[e];let h=0;for(let u=l.start,f=l.start+l.count;u<f;u++){let d=u;o&&(d=o.getX(d)),pr.fromBufferAttribute(c,d),h=Math.max(h,r.center.distanceToSquared(pr))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,c=this.geometry;Vt.material=this.material,Vt.geometry.index=c.index,Vt.geometry.attributes=c.attributes,Vt.geometry.boundingBox===null&&(Vt.geometry.boundingBox=new $t),Vt.geometry.boundingSphere===null&&(Vt.geometry.boundingSphere=new Gt);for(let l=0;l<a;l++){if(!n[l]||!i[l])continue;const h=r[l];Vt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(l,Vt.matrixWorld).premultiply(o),this.getBoundingBoxAt(l,Vt.geometry.boundingBox),this.getBoundingSphereAt(l,Vt.geometry.boundingSphere),Vt.raycast(e,Da);for(let u=0,f=Da.length;u<f;u++){const d=Da[u];d.object=this,d.batchId=l,t.push(d)}Da.length=0}Vt.material=null,Vt.geometry.index=null,Vt.geometry.attributes={},Vt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._active,l=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,f=this._drawRanges,d=this.perObjectFrustumCulled;d&&(nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ic.setFromProjectionMatrix(nf,e.coordinateSystem));let g=0;if(this.sortObjects){tf.copy(this.matrixWorld).invert(),pr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(tf);for(let p=0,v=l.length;p<v;p++)if(l[p]&&c[p]){this.getMatrixAt(p,xi),this.getBoundingSphereAt(p,Vi).applyMatrix4(xi);let x=!1;if(d&&(x=!Ic.intersectsSphere(Vi)),!x){const y=pr.distanceTo(Vi.center);Dc.push(f[p],y)}}const _=Dc.list,m=this.customSort;m===null?_.sort(r.transparent?cS:oS):m.call(this,_,n);for(let p=0,v=_.length;p<v;p++){const x=_[p];h[g]=x.start*o,u[g]=x.count,g++}Dc.reset()}else for(let _=0,m=l.length;_<m;_++)if(l[_]&&c[_]){let p=!1;if(d&&(this.getMatrixAt(_,xi),this.getBoundingSphereAt(_,Vi).applyMatrix4(xi),p=!Ic.intersectsSphere(Vi)),!p){const v=f[_];h[g]=v.start*o,u[g]=v.count,g++}}this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class en extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sf=new C,rf=new C,af=new Pe,Uc=new $s,Ua=new Gt;class Ti extends st{constructor(e=new Ye,t=new en){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sf.fromBufferAttribute(t,i-1),rf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sf.distanceTo(rf);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;af.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(af);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,u=new C,f=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=d){const T=g.getX(x),E=g.getX(x+1);if(l.fromBufferAttribute(m,T),h.fromBufferAttribute(m,E),Uc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=p,y=v-1;x<y;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Uc.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const of=new C,cf=new C;class Hn extends Ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)of.fromBufferAttribute(t,i),cf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+of.distanceTo(cf);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Np extends Ti{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lf=new Pe,Dl=new $s,Na=new Gt,Oa=new C;class Op extends st{constructor(e=new Ye,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;lf.copy(i).invert(),Dl.copy(e.ray).applyMatrix4(lf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Oa.fromBufferAttribute(u,m),hf(Oa,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Oa.fromBufferAttribute(u,g),hf(Oa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hf(s,e,t,n,i,r,a){const o=Dl.distanceSqToPoint(s);if(o<t){const c=new C;Dl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class fS extends Mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:_t,this.magFilter=r!==void 0?r:_t,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class dS extends Mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Et,this.minFilter=Et,this.generateMipmaps=!1,this.needsUpdate=!0}}class Lo extends Mt{constructor(e,t,n,i,r,a,o,c,l,h,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class pS extends Lo{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ht}}class mS extends Lo{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ci),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class gS extends Mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new $:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],a=[],o=new C,c=new Pe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(yt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(yt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Io extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new $){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fp extends Io{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Fa=new C,Nc=new vh,Oc=new vh,Fc=new vh;class Bp extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Fa.subVectors(i[0],i[1]).add(i[0]),l=Fa);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Nc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Oc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Fc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Oc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Fc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Nc.calc(c),Oc.calc(c),Fc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function _S(s,e){const t=1-s;return t*t*e}function xS(s,e){return 2*(1-s)*s*e}function vS(s,e){return s*s*e}function vr(s,e,t,n){return _S(s,e)+xS(s,t)+vS(s,n)}function yS(s,e){const t=1-s;return t*t*t*e}function MS(s,e){const t=1-s;return 3*t*t*s*e}function SS(s,e){return 3*(1-s)*s*s*e}function bS(s,e){return s*s*s*e}function yr(s,e,t,n,i){return yS(s,e)+MS(s,t)+SS(s,n)+bS(s,i)}class yh extends Rn{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zp extends Rn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y),yr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends Rn{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kp extends Rn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends Rn{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,i.x,r.x,a.x),vr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends Rn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,i.x,r.x,a.x),vr(e,i.y,r.y,a.y),vr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eh extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(uf(o,c.x,l.x,h.x,u.x),uf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var mo=Object.freeze({__proto__:null,ArcCurve:Fp,CatmullRomCurve3:Bp,CubicBezierCurve:yh,CubicBezierCurve3:zp,EllipseCurve:Io,LineCurve:Mh,LineCurve3:kp,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,SplineCurve:Eh});class Vp extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mo[i.type]().fromJSON(i))}return this}}class Br extends Vp{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mh(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Sh(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new yh(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Eh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Io(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $r extends Ye{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=yt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new C,f=new $,d=new C,g=new C,_=new C;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){const x=n+v*h*i,y=Math.sin(x),T=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),f.x=v/t,f.y=E/(e.length-1),o.push(f.x,f.y);const A=c[3*E+0]*y,P=c[3*E+1],D=c[3*E+0]*T;l.push(A,P,D)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const y=x+v*e.length,T=y,E=y+e.length,A=y+e.length+1,P=y+1;r.push(T,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.points,e.segments,e.phiStart,e.phiLength)}}class Do extends $r{constructor(e=1,t=1,n=4,i=8){const r=new Br;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Do(e.radius,e.length,e.capSegments,e.radialSegments)}}class Uo extends Ye{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,h=new $;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class er extends Ye{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function v(){const y=new C,T=new C;let E=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const D=[],M=P/r,b=M*(t-e)+e;for(let H=0;H<=i;H++){const K=H/i,I=K*c+o,W=Math.sin(I),z=Math.cos(I);T.x=b*W,T.y=-M*n+m,T.z=b*z,u.push(T.x,T.y,T.z),y.set(W,A,z).normalize(),f.push(y.x,y.y,y.z),d.push(K,1-M),D.push(g++)}_.push(D)}for(let P=0;P<i;P++)for(let D=0;D<r;D++){const M=_[D][P],b=_[D+1][P],H=_[D+1][P+1],K=_[D][P+1];h.push(M,b,K),h.push(b,H,K),E+=6}l.addGroup(p,E,0),p+=E}function x(y){const T=g,E=new $,A=new C;let P=0;const D=y===!0?e:t,M=y===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const b=g;for(let H=0;H<=i;H++){const I=H/i*c+o,W=Math.cos(I),z=Math.sin(I);A.x=D*z,A.y=m*M,A.z=D*W,u.push(A.x,A.y,A.z),f.push(0,M,0),E.x=W*.5+.5,E.y=z*.5*M+.5,d.push(E.x,E.y),g++}for(let H=0;H<i;H++){const K=T+H,I=b+H;y===!0?h.push(I,I+1,K):h.push(I+1,I,K),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class No extends er{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new No(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Li extends Ye{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new C,y=new C,T=new C;for(let E=0;E<t.length;E+=3)d(t[E+0],x),d(t[E+1],y),d(t[E+2],T),c(x,y,T,v)}function c(v,x,y,T){const E=T+1,A=[];for(let P=0;P<=E;P++){A[P]=[];const D=v.clone().lerp(y,P/E),M=x.clone().lerp(y,P/E),b=E-P;for(let H=0;H<=b;H++)H===0&&P===E?A[P][H]=D:A[P][H]=D.clone().lerp(M,H/b)}for(let P=0;P<E;P++)for(let D=0;D<2*(E-P)-1;D++){const M=Math.floor(D/2);D%2===0?(f(A[P][M+1]),f(A[P+1][M]),f(A[P][M])):(f(A[P][M+1]),f(A[P+1][M+1]),f(A[P+1][M]))}}function l(v){const x=new C;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;a.push(y,1-T)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],T=a[v+4],E=Math.max(x,y,T),A=Math.min(x,y,T);E>.9&&A<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new C,x=new C,y=new C,T=new C,E=new $,A=new $,P=new $;for(let D=0,M=0;D<r.length;D+=9,M+=6){v.set(r[D+0],r[D+1],r[D+2]),x.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),E.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),T.copy(v).add(x).add(y).divideScalar(3);const b=m(T);_(E,M+0,v,b),_(A,M+2,x,b),_(P,M+4,y,b)}}function _(v,x,y,T){T<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.vertices,e.indices,e.radius,e.details)}}class Oo extends Li{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}const Ba=new C,za=new C,Bc=new C,ka=new hn;class Hp extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ns*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=ka;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ka.getNormal(Bc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=u[v],T=u[x],E=ka[h[v]],A=ka[h[x]],P=`${y}_${T}`,D=`${T}_${y}`;D in f&&f[D]?(Bc.dot(f[D].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[D]=null):P in f||(f[P]={index0:l[v],index1:l[x],normal:Bc.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];Ba.fromBufferAttribute(o,_),za.fromBufferAttribute(o,m),d.push(Ba.x,Ba.y,Ba.z),d.push(za.x,za.y,za.z)}this.setAttribute("position",new Se(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class is extends Br{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Br().fromJSON(i))}return this}}const ES={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Gp(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=RS(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return zr(r,a,t,o,c,d,0),a}};function Gp(s,e,t,n,i){let r,a;if(i===kS(s,e,t,n)>0)for(r=e;r<t;r+=n)a=ff(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=ff(r,s[r],s[r+1],a);return a&&Fo(a,a.next)&&(Vr(a),a=a.next),a}function as(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Fo(t,t.next)||xt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&US(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?AS(s,n,i,r):wS(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Vr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=TS(as(s),e,t),zr(s,e,t,n,i,r,2)):a===2&&CS(s,e,t,n,i,r):zr(as(s),e,t,n,i,r,1);break}}}function wS(s){const e=s.prev,t=s,n=s.next;if(xt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ks(i,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function AS(s,e,t,n){const i=s.prev,r=s,a=s.next;if(xt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Ul(d,g,e,t,n),v=Ul(_,m,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ks(o,h,c,u,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ks(o,h,c,u,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&ks(o,h,c,u,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ks(o,h,c,u,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function TS(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Fo(i,r)&&Wp(i,n,n.next,r)&&kr(i,r)&&kr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return as(n)}function CS(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&FS(a,o)){let c=Xp(a,o);a=as(a,a.next),c=as(c,c.next),zr(a,e,t,n,i,r,0),zr(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function RS(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Gp(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(OS(l));for(i.sort(PS),r=0;r<i.length;r++)t=LS(i[r],t);return t}function PS(s,e){return s.x-e.x}function LS(s,e){const t=IS(s,e);if(!t)return e;const n=Xp(t,s);return as(n,n.next),as(t,t.next)}function IS(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&ks(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),kr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&DS(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function DS(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}function US(s,e,t,n){let i=s;do i.z===0&&(i.z=Ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,NS(i)}function NS(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function Ul(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function OS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ks(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function FS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!BS(s,e)&&(kr(s,e)&&kr(e,s)&&zS(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||Fo(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Fo(s,e){return s.x===e.x&&s.y===e.y}function Wp(s,e,t,n){const i=Ha(xt(s,e,t)),r=Ha(xt(s,e,n)),a=Ha(xt(t,n,s)),o=Ha(xt(t,n,e));return!!(i!==r&&a!==o||i===0&&Va(s,t,e)||r===0&&Va(s,n,e)||a===0&&Va(t,s,n)||o===0&&Va(t,e,n))}function Va(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ha(s){return s>0?1:s<0?-1:0}function BS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Wp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function kr(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}function zS(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Xp(s,e){const t=new Nl(s.i,s.x,s.y),n=new Nl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(s,e,t,n){const i=new Nl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kS(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Fn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];df(e),pf(n,e);let a=e.length;t.forEach(df);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,pf(n,t[c]);const o=ES.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function df(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function pf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Bo extends Ye{constructor(e=new is([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Se(i,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:VS;let x,y=!1,T,E,A,P;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,T=p.computeFrenetFrames(h,!1),E=new C,A=new C,P=new C),f||(m=0,d=0,g=0,_=0);const D=o.extractPoints(l);let M=D.shape;const b=D.holes;if(!Fn.isClockWise(M)){M=M.reverse();for(let L=0,ae=b.length;L<ae;L++){const Y=b[L];Fn.isClockWise(Y)&&(b[L]=Y.reverse())}}const K=Fn.triangulateShape(M,b),I=M;for(let L=0,ae=b.length;L<ae;L++){const Y=b[L];M=M.concat(Y)}function W(L,ae,Y){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ae,Y)}const z=M.length,Z=K.length;function X(L,ae,Y){let se,j,ve;const ge=L.x-ae.x,be=L.y-ae.y,Ke=Y.x-L.x,R=Y.y-L.y,S=ge*ge+be*be,G=ge*R-be*Ke;if(Math.abs(G)>Number.EPSILON){const q=Math.sqrt(S),ne=Math.sqrt(Ke*Ke+R*R),ee=ae.x-be/q,Fe=ae.y+ge/q,Le=Y.x-R/ne,ce=Y.y+Ke/ne,he=((Le-ee)*R-(ce-Fe)*Ke)/(ge*R-be*Ke);se=ee+ge*he-L.x,j=Fe+be*he-L.y;const Be=se*se+j*j;if(Be<=2)return new $(se,j);ve=Math.sqrt(Be/2)}else{let q=!1;ge>Number.EPSILON?Ke>Number.EPSILON&&(q=!0):ge<-Number.EPSILON?Ke<-Number.EPSILON&&(q=!0):Math.sign(be)===Math.sign(R)&&(q=!0),q?(se=-be,j=ge,ve=Math.sqrt(S)):(se=ge,j=be,ve=Math.sqrt(S/2))}return new $(se/ve,j/ve)}const J=[];for(let L=0,ae=I.length,Y=ae-1,se=L+1;L<ae;L++,Y++,se++)Y===ae&&(Y=0),se===ae&&(se=0),J[L]=X(I[L],I[Y],I[se]);const Q=[];let ie,me=J.concat();for(let L=0,ae=b.length;L<ae;L++){const Y=b[L];ie=[];for(let se=0,j=Y.length,ve=j-1,ge=se+1;se<j;se++,ve++,ge++)ve===j&&(ve=0),ge===j&&(ge=0),ie[se]=X(Y[se],Y[ve],Y[ge]);Q.push(ie),me=me.concat(ie)}for(let L=0;L<m;L++){const ae=L/m,Y=d*Math.cos(ae*Math.PI/2),se=g*Math.sin(ae*Math.PI/2)+_;for(let j=0,ve=I.length;j<ve;j++){const ge=W(I[j],J[j],se);Ee(ge.x,ge.y,-Y)}for(let j=0,ve=b.length;j<ve;j++){const ge=b[j];ie=Q[j];for(let be=0,Ke=ge.length;be<Ke;be++){const R=W(ge[be],ie[be],se);Ee(R.x,R.y,-Y)}}}const Ue=g+_;for(let L=0;L<z;L++){const ae=f?W(M[L],me[L],Ue):M[L];y?(A.copy(T.normals[0]).multiplyScalar(ae.x),E.copy(T.binormals[0]).multiplyScalar(ae.y),P.copy(x[0]).add(A).add(E),Ee(P.x,P.y,P.z)):Ee(ae.x,ae.y,0)}for(let L=1;L<=h;L++)for(let ae=0;ae<z;ae++){const Y=f?W(M[ae],me[ae],Ue):M[ae];y?(A.copy(T.normals[L]).multiplyScalar(Y.x),E.copy(T.binormals[L]).multiplyScalar(Y.y),P.copy(x[L]).add(A).add(E),Ee(P.x,P.y,P.z)):Ee(Y.x,Y.y,u/h*L)}for(let L=m-1;L>=0;L--){const ae=L/m,Y=d*Math.cos(ae*Math.PI/2),se=g*Math.sin(ae*Math.PI/2)+_;for(let j=0,ve=I.length;j<ve;j++){const ge=W(I[j],J[j],se);Ee(ge.x,ge.y,u+Y)}for(let j=0,ve=b.length;j<ve;j++){const ge=b[j];ie=Q[j];for(let be=0,Ke=ge.length;be<Ke;be++){const R=W(ge[be],ie[be],se);y?Ee(R.x,R.y+x[h-1].y,x[h-1].x+Y):Ee(R.x,R.y,u+Y)}}}V(),te();function V(){const L=i.length/3;if(f){let ae=0,Y=z*ae;for(let se=0;se<Z;se++){const j=K[se];ye(j[2]+Y,j[1]+Y,j[0]+Y)}ae=h+m*2,Y=z*ae;for(let se=0;se<Z;se++){const j=K[se];ye(j[0]+Y,j[1]+Y,j[2]+Y)}}else{for(let ae=0;ae<Z;ae++){const Y=K[ae];ye(Y[2],Y[1],Y[0])}for(let ae=0;ae<Z;ae++){const Y=K[ae];ye(Y[0]+z*h,Y[1]+z*h,Y[2]+z*h)}}n.addGroup(L,i.length/3-L,0)}function te(){const L=i.length/3;let ae=0;pe(I,ae),ae+=I.length;for(let Y=0,se=b.length;Y<se;Y++){const j=b[Y];pe(j,ae),ae+=j.length}n.addGroup(L,i.length/3-L,1)}function pe(L,ae){let Y=L.length;for(;--Y>=0;){const se=Y;let j=Y-1;j<0&&(j=L.length-1);for(let ve=0,ge=h+m*2;ve<ge;ve++){const be=z*ve,Ke=z*(ve+1),R=ae+se+be,S=ae+j+be,G=ae+j+Ke,q=ae+se+Ke;ue(R,S,G,q)}}}function Ee(L,ae,Y){c.push(L),c.push(ae),c.push(Y)}function ye(L,ae,Y){Ce(L),Ce(ae),Ce(Y);const se=i.length/3,j=v.generateTopUV(n,i,se-3,se-2,se-1);Me(j[0]),Me(j[1]),Me(j[2])}function ue(L,ae,Y,se){Ce(L),Ce(ae),Ce(se),Ce(ae),Ce(Y),Ce(se);const j=i.length/3,ve=v.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Me(ve[0]),Me(ve[1]),Me(ve[3]),Me(ve[1]),Me(ve[2]),Me(ve[3])}function Ce(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Me(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return HS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mo[i.type]().fromJSON(i)),new Bo(n,e.options)}}const VS={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new $(r,a),new $(o,c),new $(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new $(a,1-c),new $(l,1-u),new $(f,1-g),new $(_,1-p)]:[new $(o,1-c),new $(h,1-u),new $(d,1-g),new $(m,1-p)]}};function HS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zo extends Li{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zo(e.radius,e.detail)}}class jr extends Li{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jr(e.radius,e.detail)}}class ko extends Ye{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const f=(t-e)/i,d=new C,g=new $;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,y=v+n+1,T=v+n+2,E=v+1;o.push(x,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vo extends Ye{constructor(e=new is([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(a,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Fn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Fn.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Fn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],x=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(x,y,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return GS(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Vo(n,e.curveSegments)}}function GS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Qr extends Ye{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;u.x=-e*Math.cos(i+E*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+E*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+y,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],y=h[p][v],T=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&d.push(x,y,E),(p!==n-1||c<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ho extends Li{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}class Go extends Ye{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wo extends Ye{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new C,f=new C,d=new C,g=new C,_=new C,m=new C,p=new C;for(let x=0;x<=n;++x){const y=x/n*r*Math.PI*2;v(y,r,a,e,d),v(y+.01,r,a,e,g),m.subVectors(g,d),p.addVectors(g,d),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let T=0;T<=i;++T){const E=T/i*Math.PI*2,A=-t*Math.cos(E),P=t*Math.sin(E);u.x=d.x+(A*p.x+P*_.x),u.y=d.y+(A*p.y+P*_.y),u.z=d.z+(A*p.z+P*_.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(x/n),h.push(T/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const T=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),A=(i+1)*x+y,P=(i+1)*(x-1)+y;o.push(T,E,P),o.push(E,A,P)}this.setIndex(o),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(h,2));function v(x,y,T,E,A){const P=Math.cos(x),D=Math.sin(x),M=T/y*x,b=Math.cos(M);A.x=E*(2+b)*.5*P,A.y=E*(2+b)*D*.5,A.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Xo extends Ye{constructor(e=new bh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new $;let h=new C;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){h=e.getPointAt(x/t,h);const y=a.normals[x],T=a.binormals[x];for(let E=0;E<=i;E++){const A=E/i*Math.PI*2,P=Math.sin(A),D=-Math.cos(A);c.x=D*y.x+P*T.x,c.y=D*y.y+P*T.y,c.z=D*y.z+P*T.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){const T=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),A=(i+1)*x+y,P=(i+1)*(x-1)+y;g.push(T,E,P),g.push(E,A,P)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)l.x=x/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xo(new mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class qp extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let g=f,_=f+d;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),v=o.getX(g+(m+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,v),mf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),mf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var gf=Object.freeze({__proto__:null,BoxGeometry:ls,CapsuleGeometry:Do,CircleGeometry:Uo,ConeGeometry:No,CylinderGeometry:er,DodecahedronGeometry:Oo,EdgesGeometry:Hp,ExtrudeGeometry:Bo,IcosahedronGeometry:zo,LatheGeometry:$r,OctahedronGeometry:jr,PlaneGeometry:js,PolyhedronGeometry:Li,RingGeometry:ko,ShapeGeometry:Vo,SphereGeometry:Qr,TetrahedronGeometry:Ho,TorusGeometry:Go,TorusKnotGeometry:Wo,TubeGeometry:Xo,WireframeGeometry:qp});class Yp extends Wt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Zp extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wh extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jp extends wh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kp extends Wt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $p extends Wt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jp extends Wt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qp extends Wt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Yr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class em extends Wt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tm extends en{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function es(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function im(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ol(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Ah(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function WS(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){const g=l.times[d]*i;if(!(g<t||g>=n)){u.push(l.times[d]);for(let _=0;_<h;++_)f.push(l.values[d*h+_])}}u.length!==0&&(l.times=es(u,l.times.constructor),l.values=es(f,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function XS(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=o.times.length-1;let _;if(r<=o.times[0]){const p=h,v=u-h;_=o.values.slice(p,v)}else if(r>=o.times[g]){const p=g*u+h,v=p+u-h;_=o.values.slice(p,v)}else{const p=o.createInterpolant(),v=h,x=u-h;p.evaluate(r),_=p.resultBuffer.slice(v,x)}c==="quaternion"&&new sn().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let p=0;p<m;++p){const v=p*d+f;if(c==="quaternion")sn.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const x=d-f*2;for(let y=0;y<x;++y)l.values[v+y]-=_[y]}}}return s.blendMode=ih,s}const qS={convertArray:es,isTypedArray:nm,getKeyframeOrder:im,sortedArray:Ol,flattenJSON:Ah,subclip:WS,makeClipAdditive:XS};class ea{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sm extends ea{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ji:r=e,o=2*t-n;break;case Lr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ji:a=e,c=2*n-t;break;case Lr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+v*a[l+T]+x*a[c+T]+y*a[u+T];return r}}class Th extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class rm extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case no:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&nm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Pr;class hs extends Pn{}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Rr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends Pn{}Ch.prototype.ValueTypeName="color";class Hr extends Pn{}Hr.prototype.ValueTypeName="number";class am extends ea{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class tr extends Pn{InterpolantFactoryMethodLinear(e){return new am(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=Pr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Pn{}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Rr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Pn{}Gr.prototype.ValueTypeName="vector";class Wr{constructor(e,t=-1,n,i=yo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ZS(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=im(c);c=Ol(c,1,h),l=Ol(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Hr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];Ah(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Hr(".morphTargetInfluence["+_+"]",m,p))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(Gr,d+".position",f,"pos",i),n(tr,d+".quaternion",f,"rot",i),n(Gr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function YS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return Ch;case"quaternion":return tr;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ZS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=YS(s.type);if(s.times===void 0){const t=[],n=[];Ah(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const om=new Rh;class rn{constructor(e){this.manager=e!==void 0?e:om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class JS extends Error{constructor(e,t){super(e),this.response=t}}class li extends rn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Jn[e],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,A=h.length;E<A;E++){const P=h[E];P.onProgress&&P.onProgress(T)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new JS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ti.add(e,l);const h=Jn[e];delete Jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class KS extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new li(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Wr.parse(e[n]);t.push(i)}return t}}class $S extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new Lo,c=new li(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=_t),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else c.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let g=0;g<d;g++){a[g]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[g].mipmaps.push(f.mipmaps[g*f.mipmapCount+_]),a[g].format=f.format,a[g].width=f.width,a[g].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=_t),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Xr extends rn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Fr("img");function c(){h(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class jS extends rn{constructor(e){super(e)}load(e,t,n,i){const r=new Jr;r.colorSpace=vn;const a=new Xr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class QS extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new wi,o=new li(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Ht,a.wrapT=l.wrapT!==void 0?l.wrapT:Ht,a.magFilter=l.magFilter!==void 0?l.magFilter:_t,a.minFilter=l.minFilter!==void 0?l.minFilter:_t,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Nn),l.mipmapCount===1&&(a.minFilter=_t),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class eb extends rn{constructor(e){super(e)}load(e,t,n,i){const r=new Mt,a=new Xr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ii extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class cm extends Ii{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zc=new Pe,_f=new C,xf=new C;class Ph{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tb extends Ph{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lm extends Ii{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new Pe,mr=new C,kc=new C;class nb extends Ph{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),kc.copy(n.position),kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kc),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class hm extends Ii{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ib extends Ph{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class um extends Ii{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new ib}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fm extends Ii{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dm extends Ii{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class pm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class mm extends Ii{constructor(e=new pm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class qo extends rn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new li(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=qo.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new _e().setHex(a.value);break;case"v2":i.uniforms[r].value=new $().fromArray(a.value);break;case"v3":i.uniforms[r].value=new C().fromArray(a.value);break;case"v4":i.uniforms[r].value=new at().fromArray(a.value);break;case"m3":i.uniforms[r].value=new ke().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Pe().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new $().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Yp,SpriteMaterial:gh,RawShaderMaterial:Zp,ShaderMaterial:Tn,PointsMaterial:xh,MeshPhysicalMaterial:Jp,MeshStandardMaterial:wh,MeshPhongMaterial:Kp,MeshToonMaterial:$p,MeshNormalMaterial:jp,MeshLambertMaterial:Qp,MeshDepthMaterial:fh,MeshDistanceMaterial:dh,MeshBasicMaterial:Pi,MeshMatcapMaterial:em,LineDashedMaterial:tm,LineBasicMaterial:en,Material:Wt};return new t[e]}}class Fl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gm extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _m extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new li(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,g){if(t[g]!==void 0)return t[g];const m=d.interleavedBuffers[g],p=r(d,m.buffer),v=Os(m.type,p),x=new Ro(v,m.stride);return x.uuid=m.uuid,t[g]=x,x}function r(d,g){if(n[g]!==void 0)return n[g];const m=d.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}const a=e.isInstancedBufferGeometry?new gm:new Ye,o=e.data.index;if(o!==void 0){const d=Os(o.type,o.array);a.setIndex(new ot(d,1))}const c=e.data.attributes;for(const d in c){const g=c[d];let _;if(g.isInterleavedBufferAttribute){const m=i(e.data,g.data);_=new rs(m,g.itemSize,g.offset,g.normalized)}else{const m=Os(g.type,g.array),p=g.isInstancedBufferAttribute?Zs:ot;_=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(_.name=g.name),g.usage!==void 0&&_.setUsage(g.usage),a.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const g=l[d],_=[];for(let m=0,p=g.length;m<p;m++){const v=g[m];let x;if(v.isInterleavedBufferAttribute){const y=i(e.data,v.data);x=new rs(y,v.itemSize,v.offset,v.normalized)}else{const y=Os(v.type,v.array);x=new ot(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,g=u.length;d!==g;++d){const _=u[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new C;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Gt(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class sb extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Fl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new li(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Fl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new li(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new is().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Po().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new _m;for(let r=0,a=e.length;r<a;r++){let o;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in gf?o=gf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new qo;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Wr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Os(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Rh(t);r=new Xr(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],f=u.url;if(Array.isArray(f)){const d=[];for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new wi(p.data,p.width,p.height)))}i[u.uuid]=new Qi(d)}else{const d=o(u.url);i[u.uuid]=new Qi(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Os(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Xr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u],g=await r(d);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new wi(g.data,g.width,g.height)))}n[c.uuid]=new Qi(h)}else{const h=await r(c.url);n[c.uuid]=new Qi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let h;Array.isArray(l)?(h=new Jr,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new wi:h=new Mt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,rb)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],yf),h.wrapT=n(o.wrap[1],yf)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Mf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Mf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let g=0,_=f.length;g<_;g++){const m=f[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":a=new mh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Co(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new To(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new wo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new fm(e.color,e.intensity);break;case"DirectionalLight":a=new um(e.color,e.intensity);break;case"PointLight":a=new hm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new dm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new lm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new cm(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new mm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new Ip(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new Tt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);const f=e.count,d=e.instanceMatrix,g=e.instanceColor;a=new Dp(h,u,f),a.instanceMatrix=new Zs(new Float32Array(d.array),16),g!==void 0&&(a.instanceColor=new Zs(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new Up(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const m=new $t;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const p=new Gt;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":a=new Lp;break;case"Line":a=new Ti(o(e.geometry),c(e.material));break;case"LineLoop":a=new Np(o(e.geometry),c(e.material));break;case"LineSegments":a=new Hn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Op(o(e.geometry),c(e.material));break;case"Sprite":a=new Pp(c(e.material));break;case"Group":a=new zs;break;case"Bone":a=new _h;break;default:a=new st}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const g=f[d];a.animations.push(r[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const g=f[d],_=a.getObjectByProperty("uuid",g.object);_!==void 0&&a.addLevel(_,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const rb={UVMapping:xo,CubeReflectionMapping:ci,CubeRefractionMapping:Ai,EquirectangularReflectionMapping:wr,EquirectangularRefractionMapping:Ar,CubeUVReflectionMapping:Ks},yf={RepeatWrapping:Tr,ClampToEdgeWrapping:Ht,MirroredRepeatWrapping:Cr},Mf={NearestFilter:Et,NearestMipmapNearestFilter:uo,NearestMipmapLinearFilter:Ji,LinearFilter:_t,LinearMipmapNearestFilter:_r,LinearMipmapLinearFilter:Nn};class ab extends rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,c),r.manager.itemStart(e)}}let Ga;class Lh{static getContext(){return Ga===void 0&&(Ga=new(window.AudioContext||window.webkitAudioContext)),Ga}static setContext(e){Ga=e}}class ob extends rn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new li(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);Lh.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(e)}}}const Sf=new Pe,bf=new Pe,Hi=new Pe;class cb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Hi.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(ns*t.fov*.5)/t.zoom;let o,c;bf.elements[12]=-i,Sf.elements[12]=i,o=-a*t.aspect+r,c=a*t.aspect+r,Hi.elements[0]=2*t.near/(c-o),Hi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Hi),o=-a*t.aspect-r,c=a*t.aspect-r,Hi.elements[0]=2*t.near/(c-o),Hi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Hi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(bf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Sf)}}class xm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ef(){return(typeof performance>"u"?Date:performance).now()}const Gi=new C,wf=new sn,lb=new C,Wi=new C;class hb extends st{constructor(){super(),this.type="AudioListener",this.context=Lh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new xm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Gi,wf,lb),Wi.set(0,0,-1).applyQuaternion(wf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Gi.x,i),t.positionY.linearRampToValueAtTime(Gi.y,i),t.positionZ.linearRampToValueAtTime(Gi.z,i),t.forwardX.linearRampToValueAtTime(Wi.x,i),t.forwardY.linearRampToValueAtTime(Wi.y,i),t.forwardZ.linearRampToValueAtTime(Wi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Gi.x,Gi.y,Gi.z),t.setOrientation(Wi.x,Wi.y,Wi.z,n.x,n.y,n.z)}}class vm extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Xi=new C,Af=new sn,ub=new C,qi=new C;class fb extends vm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xi,Af,ub),qi.set(0,0,1).applyQuaternion(Af);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Xi.x,n),t.positionY.linearRampToValueAtTime(Xi.y,n),t.positionZ.linearRampToValueAtTime(Xi.z,n),t.orientationX.linearRampToValueAtTime(qi.x,n),t.orientationY.linearRampToValueAtTime(qi.y,n),t.orientationZ.linearRampToValueAtTime(qi.z,n)}else t.setPosition(Xi.x,Xi.y,Xi.z),t.setOrientation(qi.x,qi.y,qi.z)}}class db{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class ym{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){sn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;sn.multiplyQuaternionsFlat(e,a,e,t,e,n),sn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ih="\\[\\]\\.:\\/",pb=new RegExp("["+Ih+"]","g"),Dh="[^"+Ih+"]",mb="[^"+Ih.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Dh),_b=/(WCOD+)?/.source.replace("WCOD",mb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),yb=new RegExp("^"+gb+_b+xb+vb+"$"),Mb=["material","materials","bones","map"];class Sb{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(e){const t=yb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Mb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Sb;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let g=t[d];if(g===void 0){g=c++,t[d]=g,e.push(f);for(let _=0,m=a;_!==m;++_)r[_].push(new it(f,n[_],i[_]))}else if(g<l){o=e[g];const _=--l,m=e[_];t[m.uuid]=g,e[g]=m,t[d]=_,e[_]=f;for(let p=0,v=a;p!==v;++p){const x=r[p],y=x[_];let T=x[g];x[g]=y,T===void 0&&(T=new it(f,n[p],i[p])),x[_]=T}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[l]=u,e[u]=c;for(let d=0,g=i;d!==g;++d){const _=n[d],m=_[u],p=_[h];_[h]=m,_[u]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],g=--a,_=e[g];t[d.uuid]=u,e[u]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,p=i;m!==p;++m){const v=n[m],x=v[f],y=v[g];v[u]=x,v[f]=y,v.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let g=0,_=i;g!==_;++g){const m=n[g];m[u]=m[f],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let f=h,d=c.length;f!==d;++f){const g=c[f];u[f]=new it(g,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Mm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:$i,endingEnd:$i};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case ih:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case yo:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===ep;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===jd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ji,i.endingEnd=ji):(e?i.endingStart=this.zeroSlopeAtStart?ji:$i:i.endingStart=Lr,t?i.endingEnd=this.zeroSlopeAtEnd?ji:$i:i.endingEnd=Lr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Eb=new Float32Array(1);class wb extends ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let g=h[d];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new ym(it.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Th(new Float32Array(2),new Float32Array(2),1,Eb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Wr.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yo),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Mm(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Wr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Uh{constructor(e){this.value=e}clone(){return new Uh(this.value.clone===void 0?this.value:this.value.clone())}}let Ab=0;class Tb extends ui{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.usage=Nr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Cb extends Ro{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Rb{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Tf=new Pe;class Pb{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,n=[]){return Bl(e,this,n,t),n.sort(Cf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Bl(e[i],this,n,t);return n.sort(Cf),n}}function Cf(s,e){return s.distance-e.distance}function Bl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Bl(i[r],e,t,!0)}}class Lb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ib{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Rf=new $;class Db{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pf=new C,Wa=new C;class Ub{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Pf.subVectors(e,this.start),Wa.subVectors(this.end,this.start);const n=Wa.dot(Wa);let r=Wa.dot(Pf)/n;return t&&(r=yt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Lf=new C;class Nb extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ye,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Se(i,3));const r=new en({fog:!1,toneMapped:!1});this.cone=new Hn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Lf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Lf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const vi=new C,Xa=new Pe,Vc=new Pe;class Ob extends Hn{constructor(e){const t=Sm(e),n=new Ye,i=[],r=[],a=new _e(0,0,1),o=new _e(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Se(i,3)),n.setAttribute("color",new Se(r,3));const c=new en({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Vc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Xa.multiplyMatrices(Vc,o.matrixWorld),vi.setFromMatrixPosition(Xa),i.setXYZ(a,vi.x,vi.y,vi.z),Xa.multiplyMatrices(Vc,o.parent.matrixWorld),vi.setFromMatrixPosition(Xa),i.setXYZ(a+1,vi.x,vi.y,vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Sm(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Sm(s.children[t]));return e}class Fb extends Tt{constructor(e,t,n){const i=new Qr(t,4,2),r=new Pi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Bb=new C,If=new _e,Df=new _e;class zb extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new jr(t);i.rotateY(Math.PI*.5),this.material=new Pi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new ot(a,3)),this.add(new Tt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");If.copy(this.light.color),Df.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?If:Df;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Bb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class kb extends Hn{constructor(e=10,t=10,n=4473924,i=8947848){n=new _e(n),i=new _e(i);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=f===r?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const h=new Ye;h.setAttribute("position",new Se(c,3)),h.setAttribute("color",new Se(l,3));const u=new en({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vb extends Hn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new _e(r),a=new _e(a);const o=[],c=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,g=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,g);const _=u&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const f=u&1?r:a,d=e-e/n*u;for(let g=0;g<i;g++){let _=g/i*(Math.PI*2),m=Math.sin(_)*d,p=Math.cos(_)*d;o.push(m,0,p),c.push(f.r,f.g,f.b),_=(g+1)/i*(Math.PI*2),m=Math.sin(_)*d,p=Math.cos(_)*d,o.push(m,0,p),c.push(f.r,f.g,f.b)}}const l=new Ye;l.setAttribute("position",new Se(o,3)),l.setAttribute("color",new Se(c,3));const h=new en({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Uf=new C,qa=new C,Nf=new C;class Hb extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ye;i.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new en({fog:!1,toneMapped:!1});this.lightPlane=new Ti(i,r),this.add(this.lightPlane),i=new Ye,i.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new Ti(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Uf.setFromMatrixPosition(this.light.matrixWorld),qa.setFromMatrixPosition(this.light.target.matrixWorld),Nf.subVectors(qa,Uf),this.lightPlane.lookAt(qa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(qa),this.targetLine.scale.z=Nf.length()}}const Ya=new C,vt=new Eo;class Gb extends Hn{constructor(e){const t=new Ye,n=new en({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,_){c(g),c(_)}function c(g){i.push(0,0,0),r.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(i.length/3-1)}t.setAttribute("position",new Se(i,3)),t.setAttribute("color",new Se(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new _e(16755200),h=new _e(16711680),u=new _e(43775),f=new _e(16777215),d=new _e(3355443);this.setColors(l,h,u,f,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;vt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),bt("c",t,e,vt,0,0,-1),bt("t",t,e,vt,0,0,1),bt("n1",t,e,vt,-n,-i,-1),bt("n2",t,e,vt,n,-i,-1),bt("n3",t,e,vt,-n,i,-1),bt("n4",t,e,vt,n,i,-1),bt("f1",t,e,vt,-n,-i,1),bt("f2",t,e,vt,n,-i,1),bt("f3",t,e,vt,-n,i,1),bt("f4",t,e,vt,n,i,1),bt("u1",t,e,vt,n*.7,i*1.1,-1),bt("u2",t,e,vt,-n*.7,i*1.1,-1),bt("u3",t,e,vt,0,i*2,-1),bt("cf1",t,e,vt,-n,0,1),bt("cf2",t,e,vt,n,0,1),bt("cf3",t,e,vt,0,-i,1),bt("cf4",t,e,vt,0,i,1),bt("cn1",t,e,vt,-n,0,-1),bt("cn2",t,e,vt,n,0,-1),bt("cn3",t,e,vt,0,-i,-1),bt("cn4",t,e,vt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function bt(s,e,t,n,i,r,a){Ya.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],Ya.x,Ya.y,Ya.z)}}const Za=new $t;class Wb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Ye;r.setIndex(new ot(n,1)),r.setAttribute("position",new ot(i,3)),super(r,new en({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Za.setFromObject(this.object),Za.isEmpty())return;const t=Za.min,n=Za.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xb extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ye;r.setIndex(new ot(n,1)),r.setAttribute("position",new Se(i,3)),super(r,new en({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class qb extends Ti{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ye;a.setAttribute("position",new Se(r,3)),a.computeBoundingSphere(),super(a,new en({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Ye;c.setAttribute("position",new Se(o,3)),c.computeBoundingSphere(),this.add(new Tt(c,new Pi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Of=new C;let Ja,Hc;class Yb extends st{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new Ye,Ja.setAttribute("position",new Se([0,0,0,0,1,0],3)),Hc=new er(0,.5,1,5,1),Hc.translate(0,-.5,0)),this.position.copy(t),this.line=new Ti(Ja,new en({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(Hc,new Pi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Of.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Of,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Zb extends Hn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ye;i.setAttribute("position",new Se(t,3)),i.setAttribute("color",new Se(n,3));const r=new en({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new _e,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jb{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Br,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let x=0,y=p.length;x<y;x++){const T=p[x],E=new is;E.curves=T.curves,v.push(E)}return v}function n(p,v){const x=v.length;let y=!1;for(let T=x-1,E=0;E<x;T=E++){let A=v[T],P=v[E],D=P.x-A.x,M=P.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=v[E],D=-D,P=v[T],M=-M),p.y<A.y||p.y>P.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const b=M*(p.x-A.x)-D*(p.y-A.y);if(b===0)return!0;if(b<0)continue;y=!y}}else{if(p.y!==A.y)continue;if(P.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=P.x)return!0}}return y}const i=Fn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new is,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let p=0,v=r.length;p<v;p++)o=r[p],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&f[g]&&g++,f[g]={s:new is,p:_},f[g].s.curves=o.curves,h&&g++,d[g]=[]):d[g].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,v=0;for(let x=0,y=f.length;x<y;x++)u[x]=[];for(let x=0,y=f.length;x<y;x++){const T=d[x];for(let E=0;E<T.length;E++){const A=T[E];let P=!0;for(let D=0;D<f.length;D++)n(A.p,f[D].p)&&(x!==D&&v++,P?(P=!1,u[D].push(A)):p=!0);P&&u[x].push(A)}}v>0&&p===!1&&(d=u)}let m;for(let p=0,v=f.length;p<v;p++){c=f[p].s,l.push(c),m=d[p];for(let x=0,y=m.length;x<y;x++)c.holes.push(m[x].h)}return l}}class Kb extends An{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const $b=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Zl,AddEquation:Mi,AddOperation:Fd,AdditiveAnimationBlendMode:ih,AdditiveBlending:$c,AgXToneMapping:Hd,AlphaFormat:Yd,AlwaysCompare:hp,AlwaysDepth:Pd,AlwaysStencilFunc:Cl,AmbientLight:fm,AnimationAction:Mm,AnimationClip:Wr,AnimationLoader:KS,AnimationMixer:wb,AnimationObjectGroup:bb,AnimationUtils:qS,ArcCurve:Fp,ArrayCamera:Tp,ArrowHelper:Yb,AttachedBindMode:nl,Audio:vm,AudioAnalyser:db,AudioContext:Lh,AudioListener:hb,AudioLoader:ob,AxesHelper:Zb,BackSide:Kt,BasicDepthPacking:tp,BasicShadowMap:e_,BatchedMesh:Up,Bone:_h,BooleanKeyframeTrack:hs,Box2:Db,Box3:$t,Box3Helper:Xb,BoxGeometry:ls,BoxHelper:Wb,BufferAttribute:ot,BufferGeometry:Ye,BufferGeometryLoader:_m,ByteType:Xd,Cache:ti,Camera:Eo,CameraHelper:Gb,CanvasTexture:gS,CapsuleGeometry:Do,CatmullRomCurve3:Bp,CineonToneMapping:kd,CircleGeometry:Uo,ClampToEdgeWrapping:Ht,Clock:xm,Color:_e,ColorKeyframeTrack:Ch,ColorManagement:rt,CompressedArrayTexture:pS,CompressedCubeTexture:mS,CompressedTexture:Lo,CompressedTextureLoader:$S,ConeGeometry:No,ConstantAlphaFactor:Td,ConstantColorFactor:wd,CubeCamera:xp,CubeReflectionMapping:ci,CubeRefractionMapping:Ai,CubeTexture:Jr,CubeTextureLoader:jS,CubeUVReflectionMapping:Ks,CubicBezierCurve:yh,CubicBezierCurve3:zp,CubicInterpolant:sm,CullFaceBack:Kc,CullFaceFront:fd,CullFaceFrontBack:Qg,CullFaceNone:ud,Curve:Rn,CurvePath:Vp,CustomBlending:dd,CustomToneMapping:Vd,CylinderGeometry:er,Cylindrical:Ib,Data3DTexture:oh,DataArrayTexture:So,DataTexture:wi,DataTextureLoader:QS,DataUtils:c0,DecrementStencilOp:u_,DecrementWrapStencilOp:d_,DefaultLoadingManager:om,DepthFormat:Ei,DepthStencilFormat:ss,DepthTexture:uh,DetachedBindMode:Wd,DirectionalLight:um,DirectionalLightHelper:Hb,DiscreteInterpolant:rm,DisplayP3ColorSpace:Mo,DodecahedronGeometry:Oo,DoubleSide:Un,DstAlphaFactor:yd,DstColorFactor:Sd,DynamicCopyUsage:C_,DynamicDrawUsage:S_,DynamicReadUsage:w_,EdgesGeometry:Hp,EllipseCurve:Io,EqualCompare:ap,EqualDepth:Id,EqualStencilFunc:__,EquirectangularReflectionMapping:wr,EquirectangularRefractionMapping:Ar,Euler:mn,EventDispatcher:ui,ExtrudeGeometry:Bo,FileLoader:li,Float16BufferAttribute:p0,Float32BufferAttribute:Se,FloatType:ln,Fog:Co,FogExp2:To,FramebufferTexture:dS,FrontSide:oi,Frustum:Kr,GLBufferAttribute:Rb,GLSL1:P_,GLSL3:Rl,GreaterCompare:op,GreaterDepth:Ud,GreaterEqualCompare:lp,GreaterEqualDepth:Dd,GreaterEqualStencilFunc:M_,GreaterStencilFunc:v_,GridHelper:kb,Group:zs,HalfFloatType:Xs,HemisphereLight:cm,HemisphereLightHelper:zb,IcosahedronGeometry:zo,ImageBitmapLoader:ab,ImageLoader:Xr,ImageUtils:ah,IncrementStencilOp:h_,IncrementWrapStencilOp:f_,InstancedBufferAttribute:Zs,InstancedBufferGeometry:gm,InstancedInterleavedBuffer:Cb,InstancedMesh:Dp,Int16BufferAttribute:f0,Int32BufferAttribute:d0,Int8BufferAttribute:l0,IntType:Jl,InterleavedBuffer:Ro,InterleavedBufferAttribute:rs,Interpolant:ea,InterpolateDiscrete:Rr,InterpolateLinear:Pr,InterpolateSmooth:no,InvertStencilOp:p_,KeepStencilOp:Yi,KeyframeTrack:Pn,LOD:Lp,LatheGeometry:$r,Layers:bo,LessCompare:rp,LessDepth:Ld,LessEqualCompare:sh,LessEqualDepth:Er,LessEqualStencilFunc:x_,LessStencilFunc:g_,Light:Ii,LightProbe:mm,Line:Ti,Line3:Ub,LineBasicMaterial:en,LineCurve:Mh,LineCurve3:kp,LineDashedMaterial:tm,LineLoop:Np,LineSegments:Hn,LinearDisplayP3ColorSpace:Zr,LinearFilter:_t,LinearInterpolant:Th,LinearMipMapLinearFilter:s_,LinearMipMapNearestFilter:i_,LinearMipmapLinearFilter:Nn,LinearMipmapNearestFilter:_r,LinearSRGBColorSpace:hi,LinearToneMapping:Bd,LinearTransfer:Ir,Loader:rn,LoaderUtils:Fl,LoadingManager:Rh,LoopOnce:jd,LoopPingPong:ep,LoopRepeat:Qd,LuminanceAlphaFormat:Jd,LuminanceFormat:Zd,MOUSE:$g,Material:Wt,MaterialLoader:qo,MathUtils:X_,Matrix3:ke,Matrix4:Pe,MaxEquation:tl,Mesh:Tt,MeshBasicMaterial:Pi,MeshDepthMaterial:fh,MeshDistanceMaterial:dh,MeshLambertMaterial:Qp,MeshMatcapMaterial:em,MeshNormalMaterial:jp,MeshPhongMaterial:Kp,MeshPhysicalMaterial:Jp,MeshStandardMaterial:wh,MeshToonMaterial:$p,MinEquation:el,MirroredRepeatWrapping:Cr,MixOperation:Od,MultiplyBlending:Qc,MultiplyOperation:Yr,NearestFilter:Et,NearestMipMapLinearFilter:n_,NearestMipMapNearestFilter:t_,NearestMipmapLinearFilter:Ji,NearestMipmapNearestFilter:uo,NeutralToneMapping:Gd,NeverCompare:sp,NeverDepth:Rd,NeverStencilFunc:m_,NoBlending:ni,NoColorSpace:$n,NoToneMapping:ii,NormalAnimationBlendMode:yo,NormalBlending:ts,NotEqualCompare:cp,NotEqualDepth:Nd,NotEqualStencilFunc:y_,NumberKeyframeTrack:Hr,Object3D:st,ObjectLoader:sb,ObjectSpaceNormalMap:ip,OctahedronGeometry:jr,OneFactor:_d,OneMinusConstantAlphaFactor:Cd,OneMinusConstantColorFactor:Ad,OneMinusDstAlphaFactor:Md,OneMinusDstColorFactor:bd,OneMinusSrcAlphaFactor:ho,OneMinusSrcColorFactor:vd,OrthographicCamera:wo,P3Primaries:Ur,PCFShadowMap:Yl,PCFSoftShadowMap:_o,PMREMGenerator:Ll,Path:Br,PerspectiveCamera:Nt,Plane:yi,PlaneGeometry:js,PlaneHelper:qb,PointLight:hm,PointLightHelper:Fb,Points:Op,PointsMaterial:xh,PolarGridHelper:Vb,PolyhedronGeometry:Li,PositionalAudio:fb,PropertyBinding:it,PropertyMixer:ym,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,Quaternion:sn,QuaternionKeyframeTrack:tr,QuaternionLinearInterpolant:am,RED_GREEN_RGTC2_Format:Al,RED_RGTC1_Format:$d,REVISION:qr,RGBADepthPacking:np,RGBAFormat:nn,RGBAIntegerFormat:th,RGBA_ASTC_10x10_Format:yl,RGBA_ASTC_10x5_Format:_l,RGBA_ASTC_10x6_Format:xl,RGBA_ASTC_10x8_Format:vl,RGBA_ASTC_12x10_Format:Ml,RGBA_ASTC_12x12_Format:Sl,RGBA_ASTC_4x4_Format:ll,RGBA_ASTC_5x4_Format:hl,RGBA_ASTC_5x5_Format:ul,RGBA_ASTC_6x5_Format:fl,RGBA_ASTC_6x6_Format:dl,RGBA_ASTC_8x5_Format:pl,RGBA_ASTC_8x6_Format:ml,RGBA_ASTC_8x8_Format:gl,RGBA_BPTC_Format:to,RGBA_ETC2_EAC_Format:cl,RGBA_PVRTC_2BPPV1_Format:al,RGBA_PVRTC_4BPPV1_Format:rl,RGBA_S3TC_DXT1_Format:ja,RGBA_S3TC_DXT3_Format:Qa,RGBA_S3TC_DXT5_Format:eo,RGB_BPTC_SIGNED_Format:bl,RGB_BPTC_UNSIGNED_Format:El,RGB_ETC1_Format:nh,RGB_ETC2_Format:ol,RGB_PVRTC_2BPPV1_Format:sl,RGB_PVRTC_4BPPV1_Format:il,RGB_S3TC_DXT1_Format:$a,RGFormat:Kd,RGIntegerFormat:eh,RawShaderMaterial:Zp,Ray:$s,Raycaster:Pb,Rec709Primaries:Dr,RectAreaLight:dm,RedFormat:jl,RedIntegerFormat:Ql,ReinhardToneMapping:zd,RenderTarget:pp,RepeatWrapping:Tr,ReplaceStencilOp:l_,ReverseSubtractEquation:md,RingGeometry:ko,SIGNED_RED_GREEN_RGTC2_Format:Tl,SIGNED_RED_RGTC1_Format:wl,SRGBColorSpace:vn,SRGBTransfer:ht,Scene:mh,ShaderChunk:Xe,ShaderLib:wn,ShaderMaterial:Tn,ShadowMaterial:Yp,Shape:is,ShapeGeometry:Vo,ShapePath:Jb,ShapeUtils:Fn,ShortType:qd,Skeleton:Po,SkeletonHelper:Ob,SkinnedMesh:Ip,Source:Qi,Sphere:Gt,SphereGeometry:Qr,Spherical:Lb,SphericalHarmonics3:pm,SplineCurve:Eh,SpotLight:lm,SpotLightHelper:Nb,Sprite:Pp,SpriteMaterial:gh,SrcAlphaFactor:lo,SrcAlphaSaturateFactor:Ed,SrcColorFactor:xd,StaticCopyUsage:T_,StaticDrawUsage:Nr,StaticReadUsage:E_,StereoCamera:cb,StreamCopyUsage:R_,StreamDrawUsage:b_,StreamReadUsage:A_,StringKeyframeTrack:us,SubtractEquation:pd,SubtractiveBlending:jc,TOUCH:jg,TangentSpaceNormalMap:Ri,TetrahedronGeometry:Ho,Texture:Mt,TextureLoader:eb,TorusGeometry:Go,TorusKnotGeometry:Wo,Triangle:hn,TriangleFanDrawMode:o_,TriangleStripDrawMode:a_,TrianglesDrawMode:r_,TubeGeometry:Xo,UVMapping:xo,Uint16BufferAttribute:ch,Uint32BufferAttribute:lh,Uint8BufferAttribute:h0,Uint8ClampedBufferAttribute:u0,Uniform:Uh,UniformsGroup:Tb,UniformsLib:le,UniformsUtils:_p,UnsignedByteType:si,UnsignedInt248Type:bi,UnsignedIntType:ei,UnsignedShort4444Type:Kl,UnsignedShort5551Type:$l,UnsignedShortType:vo,VSMShadowMap:In,Vector2:$,Vector3:C,Vector4:at,VectorKeyframeTrack:Gr,VideoTexture:fS,WebGL1Renderer:Cp,WebGL3DRenderTarget:$_,WebGLArrayRenderTarget:K_,WebGLCoordinateSystem:On,WebGLCubeRenderTarget:vp,WebGLMultipleRenderTargets:Kb,WebGLRenderTarget:An,WebGLRenderer:ph,WebGLUtils:Ap,WebGPUCoordinateSystem:Or,WireframeGeometry:qp,WrapAroundEnding:Lr,ZeroCurvatureEnding:$i,ZeroFactor:gd,ZeroSlopeEnding:ji,ZeroStencilOp:c_,_SRGBAFormat:fo,createCanvasElement:fp},Symbol.toStringTag,{value:"Module"}));function jb(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class bm{constructor(){pt(this,"allVertices",{});pt(this,"isolatedVertices",{});pt(this,"connectedVertices",{});pt(this,"sortedConnectedValues",[]);pt(this,"needsSort",!1);pt(this,"emitter",jb());pt(this,"emit",this.emitter.emit.bind(this.emitter));pt(this,"on",this.emitter.on.bind(this.emitter));pt(this,"off",this.emitter.off.bind(this.emitter));pt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((o,c)=>{o===0&&t.push(c)});t.length>0;){const o=t.shift();n.push(o);const c=i.find(l=>l===o);c&&((a=this.connectedVertices[c])==null||a.next.forEach(l=>{const h=(e.get(l)||0)-1;e.set(l,h),h===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Qb{constructor(e,t,n){pt(this,"key");pt(this,"stage");pt(this,"callback");pt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class eE extends bm{constructor(t,n,i){super();pt(this,"key");pt(this,"scheduler");pt(this,"callback",(t,n)=>n());pt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new Qb(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class tE extends bm{constructor(t){super();pt(this,"lastTime",performance.now());pt(this,"clampDeltaTo",.1);pt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new eE(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),c=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-o;i[a.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const nE=Symbol("use-legacy-frame-compatibility-context"),iE=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return fn(nE,s),s},Dn=(s,e)=>{const t=ql(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});Cn(()=>{i(),n&&n()})},En=s=>{const e=Jt(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Em=typeof window<"u",sE=()=>{const s=En({width:0,height:0});if(!Em)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{i.disconnect(),r.disconnect(),i.observe(o),r.observe(o,e)},i=new ResizeObserver(([o])=>{const{width:c,height:l}=o.contentRect;c===s.current.width&&l===s.current.height||s.set({width:c,height:l})}),r=new MutationObserver(o=>{for(const c of o)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const c=t.parentElement;c&&(s.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Cn(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:a}};function wm(s,e){const t=Jt(s);let n=s;const i=t.subscribe(o=>n=o);return Cn(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(o),e==null||e(o,c)},update:o=>{const c=o(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const Yo=()=>{const s=dn("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Nh=Symbol("threlte-hierarchical-parent-context"),Am=()=>dn(Nh),rE=s=>fn(Nh,s),aE=s=>{const e=wm(s);return fn(Nh,e),e};function oE(s){let e;const t=s[7].default,n=Bn(t,s,s[6],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&kn(n,t,i,i[6],e?zn(t,i[6],r,null):Vn(i[6]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const cE=()=>({onChildMount:dn("threlte-hierarchical-object-on-mount"),onChildDestroy:dn("threlte-hierarchical-object-on-destroy")});function lE(s,e,t){var m;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const c=p=>{o==null||o(p)};let{onChildDestroy:l=void 0}=e;const h=p=>{l==null||l(p)},{invalidate:u}=Yo(),f=Am();un(s,f,p=>t(5,n=p));let{parent:d=n}=e;const g=cE();a&&((m=g.onChildMount)==null||m.call(g,a),u());const _=wm(a,(p,v)=>{var x,y;v&&((x=g.onChildDestroy)==null||x.call(g,v),u()),p&&((y=g.onChildMount)==null||y.call(g,p),u())});return Cn(()=>{var p;a&&((p=g.onChildDestroy)==null||p.call(g,a),u())}),fn("threlte-hierarchical-object-on-mount",c),fn("threlte-hierarchical-object-on-destroy",h),rE(_),s.$$set=p=>{"object"in p&&t(2,a=p.object),"onChildMount"in p&&t(3,o=p.onChildMount),"onChildDestroy"in p&&t(4,l=p.onChildDestroy),"parent"in p&&t(1,d=p.parent),"$$scope"in p&&t(6,r=p.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(a)},[f,d,a,o,l,n,r,i]}class hE extends Qt{constructor(e){super(),jt(this,e,lE,oE,Ft,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function uE(s){let e;const t=s[1].default,n=Bn(t,s,s[4],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&kn(n,t,i,i[4],e?zn(t,i[4],r,null):Vn(i[4]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function fE(s){let e,t;return e=new hE({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[uE]},$$scope:{ctx:s}}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function dE(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=c=>r.add(c),o=c=>r.remove(c);return s.$$set=c=>{"object"in c&&t(0,r=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[r,n,a,o,i]}class Tm extends Qt{constructor(e){super(),jt(this,e,dE,fE,Ft,{object:0})}}const pE=()=>{fn("threlte-cache",[])},Zo=new Nt(75,0,.1,1e3);Zo.position.z=5;Zo.lookAt(0,0,0);const mE=()=>Zo,gE=s=>{Dn(s.size,e=>{if(s.camera.current===Zo){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},_E=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(a=!1)=>{await jm(),!(!e.shouldDispose&&!a)&&(e.disposableObjects.forEach((o,c)=>{var l;(o===0||a)&&((l=c==null?void 0:c.dispose)==null||l.call(c),e.disposableObjects.delete(c))}),e.shouldDispose=!1)},collectDisposableObjects:(a,o)=>{const c=o??[];return a&&(a!=null&&a.dispose&&typeof a.dispose=="function"&&a.type!=="Scene"&&c.push(a),Object.entries(a).forEach(([l,h])=>{if(l==="parent"||l==="children"||typeof h!="object")return;const u=h;u!=null&&u.dispose&&e.collectDisposableObjects(u,c)})),c},addDisposableObjects:a=>{a.forEach(o=>{const c=e.disposableObjects.get(o);c?e.disposableObjects.set(o,c+1):e.disposableObjects.set(o,1)})},removeDisposableObjects:a=>{a.length!==0&&(a.forEach(o=>{const c=e.disposableObjects.get(o);c&&c>0&&e.disposableObjects.set(o,c-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},t={size:ql([s.userSize,s.parentSize],([a,o])=>a||o),camera:En(mE()),scene:new mh,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:En(s.colorSpace),toneMapping:En(s.toneMapping),dpr:En(s.dpr),useLegacyLights:En(s.useLegacyLights),shadows:En(s.shadows),colorManagementEnabled:En(s.colorManagementEnabled),renderMode:En(s.renderMode),autoRender:En(s.autoRender),scheduler:void 0,mainStage:void 0,renderStage:void 0,autoRenderTask:void 0,shouldRender:()=>t.renderMode.current==="always"||t.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||t.renderMode.current==="manual"&&e.advance},n=En({});return fn("threlte",t),fn("threlte-internal-context",e),fn("threlte-user-context",n),{ctx:t,internalCtx:e,getCtx:()=>t,getInternalCtx:()=>e}},xE=qr.replace("dev",""),vE=Number.parseInt(xE),yE=s=>{const e=Jt(void 0),t=(n,i)=>{s.renderer=new ph({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return Dn([s.colorManagementEnabled],([n])=>{rt.enabled=n}),Dn([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Dn([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Dn([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),Dn([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=_o))}),Dn([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Dn([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}};function Ff(s){let e,t;return e=new Tm({props:{object:s[4].ctx.scene,$$slots:{default:[ME]},$$scope:{ctx:s}}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,i){const r={};i&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function ME(s){let e;const t=s[16].default,n=Bn(t,s,s[18],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&kn(n,t,i,i[18],e?zn(t,i[18],r,null):Vn(i[18]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function SE(s){let e,t,n,i,r=s[1]&&Ff(s);return{c(){e=je("canvas"),r&&r.c(),gt(e,"class","svelte-o3oskp")},m(a,o){tt(a,e,o),r&&r.m(e,null),s[17](e),t=!0,n||(i=Vl(s[3].call(null,e)),n=!0)},p(a,[o]){a[1]?r?(r.p(a,o),o&2&&De(r,1)):(r=Ff(a),r.c(),De(r,1),r.m(e,null)):r&&(ri(),Oe(r,1,1,()=>{r=null}),ai())},i(a){t||(De(r),t=!0)},o(a){Oe(r),t=!1},d(a){a&&Je(e),r&&r.d(),s[17](null),n=!1,i()}}}function bE(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:c=Em?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=_o}=e,{size:f=void 0}=e,{toneMapping:d=Zl}=e,{useLegacyLights:g=!(vE>=155)}=e,{autoRender:_=!0}=e,m,p=Jt(!1);un(s,p,b=>t(1,n=b));const v=Jt(f),{parentSize:x,parentSizeAction:y}=sE(),{useRenderOrders:T}=iE(),E=_E({colorManagementEnabled:a,colorSpace:o,dpr:c,renderMode:l,parentSize:x,autoRender:_,shadows:u,toneMapping:d,useLegacyLights:g,userSize:v}),A=new tE;E.getCtx().mainStage=A.createStage(Symbol("threlte-main-stage")),E.getCtx().renderStage=A.createStage(Symbol("threlte-render-stage"),{after:E.ctx.mainStage,callback(b,H){E.ctx.shouldRender()&&H()}}),E.getCtx().autoRenderTask=E.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"),b=>{T.length>0||E.ctx.renderer.render(P.scene,P.camera.current)}),Dn([p,E.ctx.autoRender],([b,H])=>(b&&H?E.getCtx().autoRenderTask.start():E.getCtx().autoRenderTask.stop(),()=>{E.getCtx().autoRenderTask.stop()})),E.getCtx().scheduler=A,pE();const P=E.ctx;gE(P);const{createRenderer:D}=yE(P);go(()=>{D(m,h),E.getCtx().renderer.setAnimationLoop(b=>{E.getInternalCtx().dispose(),A.run(b),E.getInternalCtx().resetFrameInvalidation()}),p.set(!0)}),Cn(()=>{var b;E.internalCtx.dispose(!0),E.ctx.scheduler.dispose(),(b=E.ctx.renderer)==null||b.dispose()});function M(b){Xc[b?"unshift":"push"](()=>{m=b,t(0,m)})}return s.$$set=b=>{"colorManagementEnabled"in b&&t(5,a=b.colorManagementEnabled),"colorSpace"in b&&t(6,o=b.colorSpace),"dpr"in b&&t(7,c=b.dpr),"renderMode"in b&&t(8,l=b.renderMode),"rendererParameters"in b&&t(9,h=b.rendererParameters),"shadows"in b&&t(10,u=b.shadows),"size"in b&&t(11,f=b.size),"toneMapping"in b&&t(12,d=b.toneMapping),"useLegacyLights"in b&&t(13,g=b.useLegacyLights),"autoRender"in b&&t(14,_=b.autoRender),"$$scope"in b&&t(18,r=b.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&v.set(f),s.$$.dirty&64&&E.ctx.colorSpace.set(o),s.$$.dirty&128&&E.ctx.dpr.set(c),s.$$.dirty&256&&E.ctx.renderMode.set(l),s.$$.dirty&16384&&E.ctx.autoRender.set(_),s.$$.dirty&1024&&E.ctx.shadows.set(u),s.$$.dirty&4096&&E.ctx.toneMapping.set(d)},[m,n,p,y,E,a,o,c,l,h,u,f,d,g,_,P,i,M,r]}class EE extends Qt{constructor(e){super(),jt(this,e,bE,SE,Ft,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:15})}get ctx(){return this.$$.ctx[15]}}const wE=()=>dn("threlte-internal-context");function AE(s){let e;const t=s[9].default,n=Bn(t,s,s[8],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&kn(n,t,i,i[8],e?zn(t,i[8],r,null):Vn(i[8]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const Bf="threlte-disposable-object-context";function TE(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:c,removeDisposableObjects:l}=wE();let{object:h=void 0}=e,u=h,{dispose:f=void 0}=e;const d=dn(Bf);un(s,d,m=>t(7,i=m));const g=Jt(f??i??!0);un(s,g,m=>t(6,n=m)),fn(Bf,g);let _=n?o(h):[];return c(_),Cn(()=>{l(_)}),s.$$set=m=>{"object"in m&&t(2,h=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,a=m.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&g.set(f??i??!0),s.$$.dirty&116&&h!==u&&(l(_),t(5,_=n?o(h):[]),c(_),t(4,u=h))},[d,g,h,f,u,_,n,i,a,r]}class CE extends Qt{constructor(e){super(),jt(this,e,TE,AE,Ft,{object:2,dispose:3})}}const RE=/^\s*class\s+/,PE=s=>typeof s!="function"?!1:RE.test(s.toString()),LE=s=>Array.isArray(s),zf=(s,e)=>PE(s)?LE(e)?new s(...e):new s:s,IE=s=>"isObject3D"in s,kf=s=>"dispose"in s,Cm=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},Gc=Symbol("initialValueBeforeAttach"),DE=()=>{const{invalidate:s}=Yo();let e=!1,t=Gc,n,i,r;const a=(c,l,h)=>{if(o(),!h){const u=c;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(l,c);else{const{target:u,key:f}=Cm(l,h);t=u[f],u[f]=c,i=u,r=f}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==Gc&&(i[r]=t,t=Gc,i=void 0,r=void 0),e=!1,s())};return Cn(()=>{o()}),{update:a}},UE=s=>s&&s.isCamera,Rm=s=>s&&s.isOrthographicCamera,Pm=s=>s&&s.isPerspectiveCamera,NE=s=>Pm(s)||Rm(s),OE=()=>{const{invalidate:s,size:e,camera:t}=Yo();let n,i;Cn(()=>{i==null||i()});const r=c=>{n&&(Rm(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):Pm(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(c,l)=>{if(i==null||i(),l||!NE(c)){n=void 0;return}n=c,i=e.subscribe(r)},makeDefaultCamera:(c,l)=>{!UE(c)||!l||(t.set(c),s())}}},Lm=()=>{const s=Ci(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},FE=()=>{const s=Lm(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return go(()=>{i(),n=!0}),Cn(()=>{e.forEach(a=>a())}),{updateRef:r}},Vf=s=>!!(s!=null&&s.addEventListener),BE=()=>{const s=Lm(),e=Ci(),t=c=>{c!=null&&c.type&&s(c.type,c)},n=(c,l)=>{Vf(c)&&l.forEach(h=>{c.removeEventListener(h,t)})},i=(c,l)=>{Vf(c)&&l.forEach(h=>{c.addEventListener(h,t)})},r=Jt(),a=Jt([]);return Dn([r,a],([c,l])=>(i(c,l),()=>n(c,l))),go(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{r.set(c)}}},zE=s=>{const t=dn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(s)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let r=[];return Cn(()=>{r.forEach(l=>l())}),{updateRef:l=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var f;const u=(f=h.onRefChange)==null?void 0:f.call(h,l);u&&r.push(u)})},updateProps:l=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,l)})},updateRestProps:l=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,l)})},pluginsProps:i}},kE=new Set(["$$scope","$$slots","type","args","attach","instance"]),VE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),HE=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Hf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,c)=>{a[o].setScalar(c)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,c)=>{a[o].set(...c)}:(a,o,c)=>{a[o].set(c)}:(a,o,c)=>{a[o]=c}},GE=()=>{const{invalidate:s}=Yo(),e=new Map,t=new Map,n=(r,a,o,c)=>{if(HE(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:l,target:h}=Cm(r,a);if(o!=null){const u=t.get(a);if(u)u(h,l,o);else{const f=Hf(h,l,o);t.set(a,f),f(h,l,o)}}else Hf(h,l,o)(h,l,o);c.manualCamera||VE.has(l)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var c;for(const l in a)!kE.has(l)&&!((c=o.pluginsProps)!=null&&c.includes(l))&&n(r,l,a[l],o),s()}}},WE=s=>({ref:s&2}),Gf=s=>({ref:s[1]}),XE=s=>({ref:s&2}),Wf=s=>({ref:s[1]});function Xf(s){let e,t;return e=new CE({props:{object:s[1],dispose:s[0]}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function qE(s){let e;const t=s[10].default,n=Bn(t,s,s[11],Gf);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&kn(n,t,i,i[11],e?zn(t,i[11],r,WE):Vn(i[11]),Gf)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function YE(s){let e,t;return e=new Tm({props:{object:s[1],$$slots:{default:[ZE]},$$scope:{ctx:s}}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function ZE(s){let e;const t=s[10].default,n=Bn(t,s,s[11],Wf);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&kn(n,t,i,i[11],e?zn(t,i[11],r,XE):Vn(i[11]),Wf)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function JE(s){let e=kf(s[1]),t,n,i,r,a,o,c=e&&Xf(s);const l=[YE,qE],h=[];function u(f,d){return d&2&&(n=null),n==null&&(n=!!IE(f[1])),n?0:1}return i=u(s,-1),r=h[i]=l[i](s),{c(){c&&c.c(),t=ut(),r.c(),a=cs()},m(f,d){c&&c.m(f,d),tt(f,t,d),h[i].m(f,d),tt(f,a,d),o=!0},p(f,[d]){d&2&&(e=kf(f[1])),e?c?(c.p(f,d),d&2&&De(c,1)):(c=Xf(f),c.c(),De(c,1),c.m(t.parentNode,t)):c&&(ri(),Oe(c,1,1,()=>{c=null}),ai());let g=i;i=u(f,d),i===g?h[i].p(f,d):(ri(),Oe(h[g],1,1,()=>{h[g]=null}),ai(),r=h[i],r?r.p(f,d):(r=h[i]=l[i](f),r.c()),De(r,1),r.m(a.parentNode,a))},i(f){o||(De(c),De(r),o=!0)},o(f){Oe(c),Oe(r),o=!1},d(f){f&&(Je(t),Je(a)),c&&c.d(f),h[i].d(f)}}}function KE(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=so(e,n),r,{$$slots:a={},$$scope:o}=e,{is:c}=e,{args:l=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const g=Am();un(s,g,b=>t(9,r=b));const _=FE();let m=zf(c,l);_.updateRef(m);let p=!1;const v=()=>{if(!p){p=!0;return}t(1,m=zf(c,l)),_.updateRef(m)};let{ref:x=m}=e;const y=aE(m),T=zE({ref:m,props:e}),E=(T==null?void 0:T.pluginsProps)??[],A=GE(),P=OE(),D=DE(),M=BE();return s.$$set=b=>{t(23,e=yn(yn({},e),Mr(b))),t(22,i=so(e,n)),"is"in b&&t(4,c=b.is),"args"in b&&t(5,l=b.args),"attach"in b&&t(6,h=b.attach),"manual"in b&&t(7,u=b.manual),"makeDefault"in b&&t(8,f=b.makeDefault),"dispose"in b&&t(0,d=b.dispose),"ref"in b&&t(3,x=b.ref),"$$scope"in b&&t(11,o=b.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&v(),s.$$.dirty&2&&t(3,x=m),s.$$.dirty&2&&y.set(m),A.updateProps(m,i,{manualCamera:u,pluginsProps:E}),s.$$.dirty&130&&P.update(m,u),s.$$.dirty&258&&P.makeDefaultCamera(m,f),s.$$.dirty&578&&D.update(m,r,h),s.$$.dirty&2&&M.updateRef(m),s.$$.dirty&2&&(T==null||T.updateRef(m)),T==null||T.updateProps(e),T==null||T.updateRestProps(i)},e=Mr(e),[d,m,g,x,c,l,h,u,f,r,a,o]}let Im=class extends Qt{constructor(e){super(),jt(this,e,KE,JE,Ft,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const $E={},jE=(s,e)=>{const t=$E[e]||$b[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},QE=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new Im(jE(n,s))}}),zl=new Proxy(class{},{construct(s,[e]){const t=e;return new Im(t)},get(s,e){return QE(e)}});function ew(s){let e,t,n,i;return e=new zl.BoxGeometry({}),n=new zl.MeshBasicMaterial({}),{c(){Ut(e.$$.fragment),t=ut(),Ut(n.$$.fragment)},m(r,a){Ct(e,r,a),tt(r,t,a),Ct(n,r,a),i=!0},i(r){i||(De(e.$$.fragment,r),De(n.$$.fragment,r),i=!0)},o(r){Oe(e.$$.fragment,r),Oe(n.$$.fragment,r),i=!1},d(r){r&&Je(t),Rt(e,r),Rt(n,r)}}}function tw(s){let e,t;return e=new zl.Mesh({props:{$$slots:{default:[ew]},$$scope:{ctx:s}}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}class nw extends Qt{constructor(e){super(),jt(this,e,null,tw,Ft,{})}}function iw(s){let e,t;return e=new nw({}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function sw(s){let e,t,n;return t=new EE({props:{size:{width:screen.width,height:screen.height},$$slots:{default:[iw]},$$scope:{ctx:s}}}),{c(){e=je("div"),Ut(t.$$.fragment),gt(e,"class","star-paint svelte-1c5gc4g")},m(i,r){tt(i,e,r),Ct(t,e,null),n=!0},p(i,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:i}),t.$set(a)},i(i){n||(De(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){i&&Je(e),Rt(t)}}}class rw extends Qt{constructor(e){super(),jt(this,e,null,sw,Ft,{})}}function aw(s){let e,t;return{c(){e=je("img"),Vm(e.src,t="/img/home.svg")||gt(e,"src",t),gt(e,"alt","H")},m(n,i){tt(n,e,i)},p:Qe,d(n){n&&Je(e)}}}function ow(s){let e,t,n,i,r,a,o,c,l,h,u,f,d,g,_;return t=new _g({props:{to:"/",id:"home-button",getProps:lw,$$slots:{default:[aw]},$$scope:{ctx:s}}}),a=new sr({props:{component:Bg}}),c=new sr({props:{path:"/",component:Xg}}),h=new sr({props:{path:"/resume",component:Kg}}),f=new sr({props:{path:"/grocery-bag",component:Zg}}),g=new sr({props:{path:"/star-paint",component:rw}}),{c(){e=je("nav"),Ut(t.$$.fragment),n=ut(),i=je("nav"),i.innerHTML="",r=ut(),Ut(a.$$.fragment),o=ut(),Ut(c.$$.fragment),l=ut(),Ut(h.$$.fragment),u=ut(),Ut(f.$$.fragment),d=ut(),Ut(g.$$.fragment)},m(m,p){tt(m,e,p),Ct(t,e,null),tt(m,n,p),tt(m,i,p),tt(m,r,p),Ct(a,m,p),tt(m,o,p),Ct(c,m,p),tt(m,l,p),Ct(h,m,p),tt(m,u,p),Ct(f,m,p),tt(m,d,p),Ct(g,m,p),_=!0},p(m,p){const v={};p&1&&(v.$$scope={dirty:p,ctx:m}),t.$set(v)},i(m){_||(De(t.$$.fragment,m),De(a.$$.fragment,m),De(c.$$.fragment,m),De(h.$$.fragment,m),De(f.$$.fragment,m),De(g.$$.fragment,m),_=!0)},o(m){Oe(t.$$.fragment,m),Oe(a.$$.fragment,m),Oe(c.$$.fragment,m),Oe(h.$$.fragment,m),Oe(f.$$.fragment,m),Oe(g.$$.fragment,m),_=!1},d(m){m&&(Je(e),Je(n),Je(i),Je(r),Je(o),Je(l),Je(u),Je(d)),Rt(t),Rt(a,m),Rt(c,m),Rt(h,m),Rt(f,m),Rt(g,m)}}}function cw(s){let e,t;return e=new Og({props:{$$slots:{default:[ow]},$$scope:{ctx:s}}}),{c(){Ut(e.$$.fragment)},m(n,i){Ct(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){Rt(e,n)}}}function lw({location:s,href:e,isPartiallyCurrent:t,isCurrent:n}){return e==="/"?n?{class:"hidden"}:{}:t||n?{class:"active"}:{class:"hidden"}}class hw extends Qt{constructor(e){super(),jt(this,e,null,cw,Ft,{})}}const uw=Jt(window.location.pathname);new hw({target:document.getElementById("app")});const fw=()=>{let s=window.location.pathname;const e=document.querySelector("body");new MutationObserver(n=>{n.forEach(()=>{s!==document.location.pathname&&(s=document.location.pathname,uw.set(s))})}).observe(e,{childList:!0,subtree:!0})};window.onload=fw;