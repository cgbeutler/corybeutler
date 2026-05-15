var $v=Object.defineProperty;var id=i=>{throw TypeError(i)};var Zv=(i,e,t)=>e in i?$v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var it=(i,e,t)=>Zv(i,typeof e!="symbol"?e+"":e,t),Wc=(i,e,t)=>e.has(i)||id("Cannot "+t);var te=(i,e,t)=>(Wc(i,e,"read from private field"),t?t.call(i):e.get(i)),_t=(i,e,t)=>e.has(i)?id("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),un=(i,e,t,n)=>(Wc(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Ct=(i,e,t)=>(Wc(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Jv="5";var cm;typeof window<"u"&&((cm=window.__svelte??(window.__svelte={})).v??(cm.v=new Set)).add(Jv);let ha=!1,Kv=!1;function jv(){ha=!0}jv();const Qv=1,e0=2,fm=4,t0=8,n0=16,i0=1,r0=2,s0=4,a0=1,o0=2,Dt=Symbol(),dm="http://www.w3.org/1999/xhtml",l0="http://www.w3.org/2000/svg",c0="http://www.w3.org/1998/Math/MathML",u0="@attach",pm=!1;var Zh=Array.isArray,h0=Array.prototype.indexOf,ea=Array.prototype.includes,mm=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,gm=Object.getOwnPropertyDescriptors,f0=Object.prototype,d0=Array.prototype,Jh=Object.getPrototypeOf;function Us(i){return typeof i=="function"}const dn=()=>{};function p0(i){return typeof(i==null?void 0:i.then)=="function"}function m0(i){return i()}function kl(i){for(var e=0;e<i.length;e++)i[e]()}function _m(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}const qt=2,ta=4,xo=8,Kh=1<<24,Bn=16,vi=32,es=64,g0=128,zn=512,Ut=1024,Ht=2048,Qn=4096,kn=8192,Kn=16384,dr=32768,Wu=1<<25,ts=65536,Vl=1<<17,_0=1<<18,nc=1<<19,vm=1<<20,ns=65536,Gl=1<<21,Hs=1<<22,or=1<<23,gi=Symbol("$state"),xm=Symbol("legacy props"),v0=Symbol(""),Xc=Symbol("attributes"),rd=Symbol("class"),sd=Symbol("style"),ic=new class extends Error{constructor(){super(...arguments);it(this,"name","StaleReactionError");it(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var um;const ym=!!((um=globalThis.document)!=null&&um.contentType)&&globalThis.document.contentType.includes("xml");function rc(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function x0(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function y0(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function M0(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function S0(i){throw new Error("https://svelte.dev/e/effect_orphan")}function b0(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function E0(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function w0(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function A0(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function T0(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function C0(){console.warn("https://svelte.dev/e/derived_inert")}function R0(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Mm(i){return i===this.v}function Sm(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function bm(i){return!Sm(i,this.v)}let ct=null;function Hl(i){ct=i}function Tn(i){return Em().get(i)}function Cn(i,e){return Em().set(i,e),e}function Mi(i,e=!1,t){ct={p:ct,i:!1,c:null,e:null,s:i,x:null,r:$e,l:ha&&!e?{s:null,u:null,$:[]}:null}}function Si(i){var e=ct,t=e.e;if(t!==null){e.e=null;for(var n of t)Xm(n)}return i!==void 0&&(e.x=i),e.i=!0,ct=e.p,i??{}}function os(){return!ha||ct!==null&&ct.l===null}function Em(i){return ct===null&&rc(),ct.c??(ct.c=new Map(P0(ct)||void 0))}function P0(i){let e=i.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let Br=[];function wm(){var i=Br;Br=[],kl(i)}function na(i){if(Br.length===0&&!Ws){var e=Br;queueMicrotask(()=>{e===Br&&wm()})}Br.push(i)}function L0(){for(;Br.length>0;)wm()}function I0(i){var e=$e;if(e===null)return tt.f|=or,i;if((e.f&dr)===0&&(e.f&ta)===0)throw i;Wl(i,e)}function Wl(i,e){for(;e!==null;){if((e.f&g0)!==0){if((e.f&dr)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}const D0=-7169;function St(i,e){i.f=i.f&D0|e}function jh(i){(i.f&zn)!==0||i.deps===null?St(i,Ut):St(i,Qn)}function Am(i){if(i!==null)for(const e of i)(e.f&qt)===0||(e.f&ns)===0||(e.f^=ns,Am(e.deps))}function U0(i,e,t){(i.f&Ht)!==0?e.add(i):(i.f&Qn)!==0&&t.add(i),Am(i.deps),St(i,Ut)}function Qh(i,e,t){if(i==null)return e(void 0),t&&t(void 0),dn;const n=jt(()=>i.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const hs=[];function N0(i,e){return{subscribe:an(i,e).subscribe}}function an(i,e=dn){let t=null;const n=new Set;function r(o){if(Sm(i,o)&&(i=o,t)){const l=!hs.length;for(const c of n)c[1](),hs.push(c,i);if(l){for(let c=0;c<hs.length;c+=2)hs[c][0](hs[c+1]);hs.length=0}}}function s(o){r(o(i))}function a(o,l=dn){const c=[o,l];return n.add(c),n.size===1&&(t=e(r,s)||dn),o(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function ef(i,e,t){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return N0(t,(a,o)=>{let l=!1;const c=[];let u=0,h=dn;const f=()=>{if(u)return;h();const m=e(n?c[0]:c,a,o);s?a(m):h=typeof m=="function"?m:dn},d=r.map((m,_)=>Qh(m,g=>{c[_]=g,u&=~(1<<_),l&&f()},()=>{u|=1<<_}));return l=!0,f(),function(){kl(d),h(),l=!1}})}function O0(i){let e;return Qh(i,t=>e=t)(),e}let Xu=!1,No=!1,qu=Symbol();function An(i,e,t){const n=t[e]??(t[e]={store:null,source:Ot(void 0),unsubscribe:dn});if(n.store!==i&&!(qu in t))if(n.unsubscribe(),n.store=i??null,i==null)n.source.v=void 0,n.unsubscribe=dn;else{var r=!0;n.unsubscribe=Qh(i,s=>{r?n.source.v=s:ut(n.source,s)}),r=!1}return i&&qu in t?O0(i):se(n.source)}function F0(i,e){return Tm(i,e),e}function pr(){const i={};function e(){Mo(()=>{for(var t in i)i[t].unsubscribe();mm(i,qu,{enumerable:!1,value:!0})})}return[i,e]}function Tm(i,e){Xu=!0;try{i.set(e)}finally{Xu=!1}}function B0(i,e,t=1){return Tm(i,e+t),e}function z0(i){var e=No;try{return No=!1,[i(),No]}finally{No=e}}let qc=null,fs=null,Qe=null,Oa=null,Xt=null,Yu=null,Ws=!1,Yc=!1,Os=null,Rl=null;var ad=0;let k0=1;var $s,rr,Xr,Zs,Js,qr,Ks,Di,mo,Sn,go,sr,ci,ui,js,Qs,at,$u,Ua,Zu,Cm,Rm,Pl,V0,Ju,Ns;const ec=class ec{constructor(){_t(this,at);it(this,"id",k0++);_t(this,$s,!1);it(this,"linked",!0);_t(this,rr,null);_t(this,Xr,null);it(this,"async_deriveds",new Map);it(this,"current",new Map);it(this,"previous",new Map);it(this,"unblocked",new Set);_t(this,Zs,new Set);_t(this,Js,new Set);_t(this,qr,new Set);_t(this,Ks,0);_t(this,Di,new Map);_t(this,mo,null);_t(this,Sn,[]);_t(this,go,[]);_t(this,sr,new Set);_t(this,ci,new Set);_t(this,ui,new Map);_t(this,js,new Set);it(this,"is_fork",!1);_t(this,Qs,!1)}skip_effect(e){te(this,ui).has(e)||te(this,ui).set(e,{d:[],m:[]}),te(this,js).delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=te(this,ui).get(e);if(n){te(this,ui).delete(e);for(var r of n.d)St(r,Ht),t(r);for(r of n.m)St(r,Qn),t(r)}te(this,js).add(e)}capture(e,t,n=!1){e.v!==Dt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),Xt==null||Xt.set(e,t)),this.is_fork||(e.v=t)}activate(){Qe=this}deactivate(){Qe=null,Xt=null}flush(){try{Yc=!0,Qe=this,Ct(this,at,Ua).call(this)}finally{ad=0,Yu=null,Os=null,Rl=null,Yc=!1,Qe=null,Xt=null,Zr.clear()}}discard(){for(const e of te(this,Js))e(this);te(this,Js).clear(),te(this,qr).clear(),Ct(this,at,Ns).call(this)}register_created_effect(e){te(this,go).push(e)}increment(e,t){if(un(this,Ks,te(this,Ks)+1),e){let n=te(this,Di).get(t)??0;te(this,Di).set(t,n+1)}}decrement(e,t){if(un(this,Ks,te(this,Ks)-1),e){let n=te(this,Di).get(t)??0;n===1?te(this,Di).delete(t):te(this,Di).set(t,n-1)}te(this,Qs)||(un(this,Qs,!0),na(()=>{un(this,Qs,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const n of e)te(this,sr).add(n);for(const n of t)te(this,ci).add(n);e.clear(),t.clear()}oncommit(e){te(this,Zs).add(e)}ondiscard(e){te(this,Js).add(e)}on_fork_commit(e){te(this,qr).add(e)}run_fork_commit_callbacks(){for(const e of te(this,qr))e(this);te(this,qr).clear()}settled(){return(te(this,mo)??un(this,mo,_m())).promise}static ensure(){var e;if(Qe===null){const t=Qe=new ec;Ct(e=t,at,Ju).call(e),!Yc&&!Ws&&na(()=>{te(t,$s)||t.flush()})}return Qe}apply(){{Xt=null;return}}schedule(e){var r;if(Yu=e,(r=e.b)!=null&&r.is_pending&&(e.f&(ta|xo|Kh))!==0&&(e.f&dr)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(Os!==null&&t===$e&&(tt===null||(tt.f&qt)===0)&&!Xu)return;if((n&(es|vi))!==0){if((n&Ut)===0)return;t.f^=Ut}}te(this,Sn).push(t)}};$s=new WeakMap,rr=new WeakMap,Xr=new WeakMap,Zs=new WeakMap,Js=new WeakMap,qr=new WeakMap,Ks=new WeakMap,Di=new WeakMap,mo=new WeakMap,Sn=new WeakMap,go=new WeakMap,sr=new WeakMap,ci=new WeakMap,ui=new WeakMap,js=new WeakMap,Qs=new WeakMap,at=new WeakSet,$u=function(){if(this.is_fork)return!0;for(const n of te(this,Di).keys()){for(var e=n,t=!1;e.parent!==null;){if(te(this,ui).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Ua=function(){var l,c,u,h;if(un(this,$s,!0),ad++>1e3&&(Ct(this,at,Ns).call(this),G0()),!Ct(this,at,$u).call(this)){for(const f of te(this,sr))te(this,ci).delete(f),St(f,Ht),this.schedule(f);for(const f of te(this,ci))St(f,Qn),this.schedule(f)}const e=te(this,Sn);un(this,Sn,[]),this.apply();var t=Os=[],n=[],r=Rl=[];for(const f of e)try{Ct(this,at,Zu).call(this,f,t,n)}catch(d){throw Dm(f),d}if(Qe=null,r.length>0){var s=ec.ensure();for(const f of r)s.schedule(f)}if(Os=null,Rl=null,Ct(this,at,$u).call(this)){Ct(this,at,Pl).call(this,n),Ct(this,at,Pl).call(this,t);for(const[f,d]of te(this,ui))Im(f,d);r.length>0&&Ct(l=Qe,at,Ua).call(l);return}const a=Ct(this,at,Cm).call(this);if(a){Ct(c=a,at,Rm).call(c,this);return}te(this,sr).clear(),te(this,ci).clear();for(const f of te(this,Zs))f(this);te(this,Zs).clear(),Oa=this,od(n),od(t),Oa=null,(u=te(this,mo))==null||u.resolve();var o=Qe;if(this.linked&&te(this,Ks)===0&&Ct(this,at,Ns).call(this),te(this,Sn).length>0){o===null&&(o=this,Ct(this,at,Ju).call(this));const f=o;te(f,Sn).push(...te(this,Sn).filter(d=>!te(f,Sn).includes(d)))}o!==null&&Ct(h=o,at,Ua).call(h)},Zu=function(e,t,n){e.f^=Ut;for(var r=e.first;r!==null;){var s=r.f,a=(s&(vi|es))!==0,o=a&&(s&Ut)!==0,l=o||(s&kn)!==0||te(this,ui).has(r);if(!l&&r.fn!==null){a?r.f^=Ut:(s&ta)!==0?t.push(r):fa(r)&&((s&Bn)!==0&&te(this,ci).add(r),is(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}},Cm=function(){for(var e=te(this,rr);e!==null;){if(!e.is_fork){for(const[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=te(e,rr)}return null},Rm=function(e){var n;for(const[r,s]of e.current)!this.previous.has(r)&&e.previous.has(r)&&this.previous.set(r,e.previous.get(r)),this.current.set(r,s);for(const[r,s]of e.async_deriveds){const a=this.async_deriveds.get(r);a&&s.promise.then(a.resolve)}const t=r=>{var s=r.reactions;if(s!==null)for(const l of s){var a=l.f;if((a&qt)!==0)t(l);else{var o=l;a&(Hs|Bn)&&!this.async_deriveds.has(o)&&(te(this,ci).delete(o),St(o,Ht),this.schedule(o))}}};for(const r of this.current.keys())t(r);this.oncommit(()=>e.discard()),Ct(n=e,at,Ns).call(n),Qe=this,Ct(this,at,Ua).call(this)},Pl=function(e){for(var t=0;t<e.length;t+=1)U0(e[t],te(this,sr),te(this,ci))},V0=function(){var u;Ct(this,at,Ns).call(this);for(let h=qc;h!==null;h=te(h,Xr)){var e=h.id<this.id,t=[];for(const[f,[d,m]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&d!==n)h.current.set(f,[d,m]);else continue}t.push(f)}if(e)for(const[f,d]of this.async_deriveds){const m=h.async_deriveds.get(f);m&&d.promise.then(m.resolve)}if(te(h,$s)){var r=[...h.current.keys()].filter(f=>!this.current.has(f));if(r.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of te(this,js))h.unskip_effect(f,d=>{var m;(d.f&(Bn|Hs))!==0?h.schedule(d):Ct(m=h,at,Pl).call(m,[d])});h.activate();var s=new Set,a=new Map;for(var o of t)Lm(o,r,s,a);a=new Map;var l=[...h.current.keys()].filter(f=>this.current.has(f)?this.current.get(f)[0]!==f.v:!0);if(l.length>0)for(const f of te(this,go))(f.f&(Kn|kn|Vl))===0&&tf(f,l,a)&&((f.f&(Hs|Bn))!==0?(St(f,Ht),h.schedule(f)):te(h,sr).add(f));if(te(h,Sn).length>0){h.apply();for(var c of te(h,Sn))Ct(u=h,at,Zu).call(u,c,[],[]);un(h,Sn,[])}h.deactivate()}}}},Ju=function(){fs===null?qc=fs=this:(un(fs,Xr,this),un(this,rr,fs)),fs=this},Ns=function(){var e=te(this,rr),t=te(this,Xr);e===null?qc=t:un(e,Xr,t),t===null?fs=e:un(t,rr,e),this.linked=!1};let ia=ec;function Pm(i){var e=Ws;Ws=!0;try{for(var t;;){if(L0(),Qe===null)return t;Qe.flush()}}finally{Ws=e}}function G0(){try{b0()}catch(i){Wl(i,Yu)}}let Yn=null;function od(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(Kn|kn))===0&&fa(n)&&(Yn=new Set,is(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Jm(n),(Yn==null?void 0:Yn.size)>0)){Zr.clear();for(const r of Yn){if((r.f&(Kn|kn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Yn.has(a)&&(Yn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Kn|kn))===0&&is(l)}}Yn.clear()}}Yn=null}}function Lm(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const s=r.f;(s&qt)!==0?Lm(r,e,t,n):(s&(Hs|Bn))!==0&&(s&Ht)===0&&tf(r,e,n)&&(St(r,Ht),nf(r))}}function tf(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if(ea.call(e,r))return!0;if((r.f&qt)!==0&&tf(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function nf(i){Qe.schedule(i)}function Im(i,e){if(!((i.f&vi)!==0&&(i.f&Ut)!==0)){(i.f&Ht)!==0?e.d.push(i):(i.f&Qn)!==0&&e.m.push(i),St(i,Ut);for(var t=i.first;t!==null;)Im(t,e),t=t.next}}function Dm(i){St(i,Ut);for(var e=i.first;e!==null;)Dm(e),e=e.next}function Um(i,e,t,n){const r=os()?ra:Fm;var s=i.filter(f=>!f.settled);if(t.length===0&&s.length===0){n(e.map(r));return}var a=$e,o=Nm(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(f=>f.promise)):null;function c(f){if((a.f&Kn)===0){o();try{n(f)}catch(d){Wl(d,a)}Va()}}var u=Om();if(t.length===0){l.then(()=>c(e.map(r))).finally(u);return}function h(){Promise.all(t.map(f=>H0(f))).then(f=>c([...e.map(r),...f])).catch(f=>Wl(f,a)).finally(u)}l?l.then(()=>{o(),h(),Va()}):h()}function Nm(){var i=$e,e=tt,t=ct,n=Qe;return function(s=!0){Gn(i),xi(e),Hl(t),s&&(i.f&Kn)===0&&(n==null||n.activate(),n==null||n.apply())}}function Va(i=!0){Gn(null),xi(null),Hl(null),i&&(Qe==null||Qe.deactivate())}function Om(){var i=$e,e=i.b,t=Qe,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n,i),()=>{e.update_pending_count(-1,t),t.decrement(n,i)}}function ra(i){var e=qt|Ht;return $e!==null&&($e.f|=nc),{ctx:ct,deps:null,effects:null,equals:Mm,f:e,fn:i,reactions:null,rv:0,v:Dt,wv:0,parent:$e,ac:null}}const Oo=Symbol("obsolete");function H0(i,e,t){let n=$e;n===null&&x0();var r=void 0,s=sa(Dt),a=!tt,o=new Set;return tx(()=>{var d;var l=$e,c=_m();r=c.promise;try{Promise.resolve(i()).then(c.resolve,m=>{m!==ic&&c.reject(m)}).finally(Va)}catch(m){c.reject(m),Va()}var u=Qe;if(a){if((l.f&dr)!==0)var h=Om();if(n.b.is_rendered())(d=u.async_deriveds.get(l))==null||d.reject(Oo);else for(const m of o.values())m.reject(Oo);o.add(c),u.async_deriveds.set(l,c)}const f=(m,_=void 0)=>{h==null||h(),o.delete(c),_!==Oo&&(u.activate(),_?(s.f|=or,Xs(s,_)):((s.f&or)!==0&&(s.f^=or),Xs(s,m)),u.deactivate())};c.promise.then(f,m=>f(null,m||"unknown"))}),Mo(()=>{for(const l of o)l.reject(Oo)}),new Promise(l=>{function c(u){function h(){u===r?l(s):c(r)}u.then(h,h)}c(r)})}function ld(i){const e=ra(i);return Qm(e),e}function Fm(i){const e=ra(i);return e.equals=bm,e}function W0(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)jn(e[t])}}function rf(i){var e,t=$e,n=i.parent;if(!Vi&&n!==null&&(n.f&(Kn|kn))!==0)return C0(),i.v;Gn(n);try{i.f&=~ns,W0(i),e=ig(i)}finally{Gn(t)}return e}function Bm(i){var e=rf(i);if(!i.equals(e)&&(i.wv=tg(),(!(Qe!=null&&Qe.is_fork)||i.deps===null)&&(Qe!==null?(Qe.capture(i,e,!0),Oa==null||Oa.capture(i,e,!0)):i.v=e,i.deps===null))){St(i,Ut);return}Vi||(Xt!==null?(Wm()||Qe!=null&&Qe.is_fork)&&Xt.set(i,e):jh(i))}function X0(i){var e,t;if(i.effects!==null)for(const n of i.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),(t=n.ac)==null||t.abort(ic),n.teardown=dn,n.ac=null,Ga(n,0),af(n))}function zm(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&is(e)}let Xl=new Set;const Zr=new Map;let km=!1;function sa(i,e){var t={f:0,v:i,reactions:null,equals:Mm,rv:0,wv:0};return t}function Yi(i,e){const t=sa(i);return Qm(t),t}function Ot(i,e=!1,t=!0){var r;const n=sa(i);return e||(n.equals=bm),ha&&t&&ct!==null&&ct.l!==null&&((r=ct.l).s??(r.s=[])).push(n),n}function ut(i,e,t=!1){tt!==null&&(!Jn||(tt.f&Vl)!==0)&&os()&&(tt.f&(qt|Bn|Hs|Vl))!==0&&(Vn===null||!ea.call(Vn,i))&&T0();let n=t?Fs(e):e;return Xs(i,n,Rl)}function Xs(i,e,t=null){if(!i.equals(e)){Zr.set(i,Vi?e:i.v);var n=ia.ensure();if(n.capture(i,e),(i.f&qt)!==0){const r=i;(i.f&Ht)!==0&&rf(r),Xt===null&&jh(r)}i.wv=tg(),Vm(i,Ht,t),os()&&$e!==null&&($e.f&Ut)!==0&&($e.f&(vi|es))===0&&(Nn===null?ax([i]):Nn.push(i)),!n.is_fork&&Xl.size>0&&!km&&q0()}return e}function q0(){km=!1;for(const i of Xl){(i.f&Ut)!==0&&St(i,Qn);let e;try{e=fa(i)}catch{e=!0}e&&is(i)}Xl.clear()}function cd(i,e=1){var t=se(i),n=e===1?t++:t--;return ut(i,t),n}function $c(i){ut(i,i.v+1)}function Vm(i,e,t){var n=i.reactions;if(n!==null)for(var r=os(),s=n.length,a=0;a<s;a++){var o=n[a],l=o.f;if(!(!r&&o===$e)){var c=(l&Ht)===0;if(c&&St(o,e),(l&Vl)!==0)Xl.add(o);else if((l&qt)!==0){var u=o;Xt==null||Xt.delete(u),(l&ns)===0&&(l&zn&&($e===null||($e.f&Gl)===0)&&(o.f|=ns),Vm(u,Qn,t))}else if(c){var h=o;(l&Bn)!==0&&Yn!==null&&Yn.add(h),t!==null?t.push(h):nf(h)}}}}function Fs(i){if(typeof i!="object"||i===null||gi in i)return i;const e=Jh(i);if(e!==f0&&e!==d0)return i;var t=new Map,n=Zh(i),r=Yi(0),s=Jr,a=o=>{if(Jr===s)return o();var l=tt,c=Jr;xi(null),fd(s);var u=o();return xi(l),fd(c),u};return n&&t.set("length",Yi(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&w0();var u=t.get(l);return u===void 0?a(()=>{var h=Yi(c.value);return t.set(l,h),h}):ut(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>Yi(Dt));t.set(l,u),$c(r)}}else ut(c,Dt),$c(r);return!0},get(o,l,c){var d;if(l===gi)return i;var u=t.get(l),h=l in o;if(u===void 0&&(!h||(d=$r(o,l))!=null&&d.writable)&&(u=a(()=>{var m=Fs(h?o[l]:Dt),_=Yi(m);return _}),t.set(l,u)),u!==void 0){var f=se(u);return f===Dt?void 0:f}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=se(u))}else if(c===void 0){var h=t.get(l),f=h==null?void 0:h.v;if(h!==void 0&&f!==Dt)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(o,l){var f;if(l===gi)return!0;var c=t.get(l),u=c!==void 0&&c.v!==Dt||Reflect.has(o,l);if(c!==void 0||$e!==null&&(!u||(f=$r(o,l))!=null&&f.writable)){c===void 0&&(c=a(()=>{var d=u?Fs(o[l]):Dt,m=Yi(d);return m}),t.set(l,c));var h=se(c);if(h===Dt)return!1}return u},set(o,l,c,u){var v;var h=t.get(l),f=l in o;if(n&&l==="length")for(var d=c;d<h.v;d+=1){var m=t.get(d+"");m!==void 0?ut(m,Dt):d in o&&(m=a(()=>Yi(Dt)),t.set(d+"",m))}if(h===void 0)(!f||(v=$r(o,l))!=null&&v.writable)&&(h=a(()=>Yi(void 0)),ut(h,Fs(c)),t.set(l,h));else{f=h.v!==Dt;var _=a(()=>Fs(c));ut(h,_)}var g=Reflect.getOwnPropertyDescriptor(o,l);if(g!=null&&g.set&&g.set.call(u,c),!f){if(n&&typeof l=="string"){var p=t.get("length"),x=Number(l);Number.isInteger(x)&&x>=p.v&&ut(p,x+1)}$c(r)}return!0},ownKeys(o){se(r);var l=Reflect.ownKeys(o).filter(h=>{var f=t.get(h);return f===void 0||f.v!==Dt});for(var[c,u]of t)u.v!==Dt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){A0()}})}function ud(i){try{if(i!==null&&typeof i=="object"&&gi in i)return i[gi]}catch{}return i}function Y0(i,e){return Object.is(ud(i),ud(e))}var $0,Z0,J0;function Ku(i=""){return document.createTextNode(i)}function ar(i){return Z0.call(i)}function sc(i){return J0.call(i)}function ei(i,e){return ar(i)}function Gt(i,e=!1){{var t=ar(i);return t instanceof Comment&&t.data===""?sc(t):t}}function Fn(i,e=1,t=!1){let n=i;for(;e--;)n=sc(n);return n}function K0(){return!1}function Gm(i,e,t){return document.createElementNS(e??dm,i,void 0)}function j0(i,e){if(e){const t=document.body;i.autofocus=!0,na(()=>{document.activeElement===t&&i.focus()})}}function yo(i){var e=tt,t=$e;xi(null),Gn(null);try{return i()}finally{xi(e),Gn(t)}}function Hm(i){$e===null&&(tt===null&&S0(),M0()),Vi&&y0()}function Q0(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function bi(i,e){var t=$e;t!==null&&(t.f&kn)!==0&&(i|=kn);var n={ctx:ct,deps:null,nodes:null,f:i|Ht|zn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Qe==null||Qe.register_created_effect(n);var r=n;if((i&ta)!==0)Os!==null?Os.push(n):ia.ensure().schedule(n);else if(e!==null){try{is(n)}catch(a){throw jn(n),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&nc)===0&&(r=r.first,(i&Bn)!==0&&(i&ts)!==0&&r!==null&&(r.f|=ts))}if(r!==null&&(r.parent=t,t!==null&&Q0(r,t),tt!==null&&(tt.f&qt)!==0&&(i&es)===0)){var s=tt;(s.effects??(s.effects=[])).push(r)}return n}function Wm(){return tt!==null&&!Jn}function Mo(i){const e=bi(xo,null);return St(e,Ut),e.teardown=i,e}function ju(i){Hm();var e=$e.f,t=!tt&&(e&vi)!==0&&(e&dr)===0;if(t){var n=ct;(n.e??(n.e=[])).push(i)}else return Xm(i)}function Xm(i){return bi(ta|vm,i)}function ex(i){return Hm(),bi(xo|vm,i)}function So(i){return bi(ta,i)}function rt(i,e){var t=ct,n={effect:null,ran:!1,deps:i};t.l.$.push(n),n.effect=sf(()=>{if(i(),!n.ran){n.ran=!0;var r=$e;try{Gn(r.parent),jt(e)}finally{Gn(r)}}})}function mr(){var i=ct;sf(()=>{for(var e of i.l.$){e.deps();var t=e.effect;(t.f&Ut)!==0&&t.deps!==null&&St(t,Qn),fa(t)&&is(t),e.ran=!1}})}function tx(i){return bi(Hs|nc,i)}function sf(i,e=0){return bi(xo|e,i)}function qm(i,e=[],t=[],n=[]){Um(n,e,t,r=>{bi(xo,()=>i(...r.map(se)))})}function ac(i,e=0){var t=bi(Bn|e,i);return t}function Ym(i,e=0){var t=bi(Kh|e,i);return t}function ql(i){return bi(vi|nc,i)}function $m(i){var e=i.teardown;if(e!==null){const t=Vi,n=tt;hd(!0),xi(null);try{e.call(null)}finally{hd(t),xi(n)}}}function af(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&yo(()=>{r.abort(ic)});var n=t.next;(t.f&es)!==0?t.parent=null:jn(t,e),t=n}}function nx(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&vi)===0&&jn(e),e=t}}function jn(i,e=!0){var t=!1;(e||(i.f&_0)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Zm(i.nodes.start,i.nodes.end),t=!0),St(i,Wu),af(i,e&&!t),Ga(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)s.stop();$m(i),i.f^=Wu,i.f|=Kn;var r=i.parent;r!==null&&r.first!==null&&Jm(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Zm(i,e){for(;i!==null;){var t=i===e?null:sc(i);i.remove(),i=t}}function Jm(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function ix(i,e,t=!0){var n=[];Km(i,n,!0);var r=()=>{t&&jn(i),e&&e()},s=n.length;if(s>0){var a=()=>--s||r();for(var o of n)o.out(a)}else r()}function Km(i,e,t){if((i.f&kn)===0){i.f^=kn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var r=i.first;r!==null;){var s=r.next;if((r.f&es)===0){var a=(r.f&ts)!==0||(r.f&vi)!==0&&(i.f&Bn)!==0;Km(r,e,a?t:!1)}r=s}}}function rx(i){jm(i,!0)}function jm(i,e){if((i.f&kn)!==0){i.f^=kn,(i.f&Ut)===0&&(St(i,Ht),ia.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&ts)!==0||(t.f&vi)!==0;jm(t,r?e:!1),t=n}var s=i.nodes&&i.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function sx(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:sc(t);e.append(t),t=r}}let Ll=!1,Vi=!1;function hd(i){Vi=i}let tt=null,Jn=!1;function xi(i){tt=i}let $e=null;function Gn(i){$e=i}let Vn=null;function Qm(i){tt!==null&&(Vn===null?Vn=[i]:Vn.push(i))}let fn=null,Mn=0,Nn=null;function ax(i){Nn=i}let eg=1,zr=0,Jr=zr;function fd(i){Jr=i}function tg(){return++eg}function fa(i){var e=i.f;if((e&Ht)!==0)return!0;if(e&qt&&(i.f&=~ns),(e&Qn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var s=t[r];if(fa(s)&&Bm(s),s.wv>i.wv)return!0}(e&zn)!==0&&Xt===null&&St(i,Ut)}return!1}function ng(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Vn!==null&&ea.call(Vn,i)))for(var r=0;r<n.length;r++){var s=n[r];(s.f&qt)!==0?ng(s,e,!1):e===s&&(t?St(s,Ht):(s.f&Ut)!==0&&St(s,Qn),nf(s))}}function ig(i){var _;var e=fn,t=Mn,n=Nn,r=tt,s=Vn,a=ct,o=Jn,l=Jr,c=i.f;fn=null,Mn=0,Nn=null,tt=(c&(vi|es))===0?i:null,Vn=null,Hl(i.ctx),Jn=!1,Jr=++zr,i.ac!==null&&(yo(()=>{i.ac.abort(ic)}),i.ac=null);try{i.f|=Gl;var u=i.fn,h=u();i.f|=dr;var f=i.deps,d=Qe==null?void 0:Qe.is_fork;if(fn!==null){var m;if(d||Ga(i,Mn),f!==null&&Mn>0)for(f.length=Mn+fn.length,m=0;m<fn.length;m++)f[Mn+m]=fn[m];else i.deps=f=fn;if(Wm()&&(i.f&zn)!==0)for(m=Mn;m<f.length;m++)((_=f[m]).reactions??(_.reactions=[])).push(i)}else!d&&f!==null&&Mn<f.length&&(Ga(i,Mn),f.length=Mn);if(os()&&Nn!==null&&!Jn&&f!==null&&(i.f&(qt|Qn|Ht))===0)for(m=0;m<Nn.length;m++)ng(Nn[m],i);if(r!==null&&r!==i){if(zr++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=zr;if(e!==null)for(const g of e)g.rv=zr;Nn!==null&&(n===null?n=Nn:n.push(...Nn))}return(i.f&or)!==0&&(i.f^=or),h}catch(g){return I0(g)}finally{i.f^=Gl,fn=e,Mn=t,Nn=n,tt=r,Vn=s,Hl(a),Jn=o,Jr=l}}function ox(i,e){let t=e.reactions;if(t!==null){var n=h0.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&qt)!==0&&(fn===null||!ea.call(fn,e))){var s=e;(s.f&zn)!==0&&(s.f^=zn,s.f&=~ns),s.v!==Dt&&jh(s),X0(s),Ga(s,0)}}function Ga(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)ox(i,t[n])}function is(i){var e=i.f;if((e&Kn)===0){St(i,Ut);var t=$e,n=Ll;$e=i,Ll=!0;try{(e&(Bn|Kh))!==0?nx(i):af(i),$m(i);var r=ig(i);i.teardown=typeof r=="function"?r:null,i.wv=eg;var s;pm&&Kv&&(i.f&Ht)!==0&&i.deps}finally{Ll=n,$e=t}}}async function lx(){await Promise.resolve(),Pm()}function se(i){var e=i.f,t=(e&qt)!==0;if(tt!==null&&!Jn){var n=$e!==null&&($e.f&Kn)!==0;if(!n&&(Vn===null||!ea.call(Vn,i))){var r=tt.deps;if((tt.f&Gl)!==0)i.rv<zr&&(i.rv=zr,fn===null&&r!==null&&r[Mn]===i?Mn++:fn===null?fn=[i]:fn.push(i));else{(tt.deps??(tt.deps=[])).push(i);var s=i.reactions;s===null?i.reactions=[tt]:ea.call(s,tt)||s.push(tt)}}}if(Vi&&Zr.has(i))return Zr.get(i);if(t){var a=i;if(Vi){var o=a.v;return((a.f&Ut)===0&&a.reactions!==null||sg(a))&&(o=rf(a)),Zr.set(a,o),o}var l=(a.f&zn)===0&&!Jn&&tt!==null&&(Ll||(tt.f&zn)!==0),c=(a.f&dr)===0;fa(a)&&(l&&(a.f|=zn),Bm(a)),l&&!c&&(zm(a),rg(a))}if(Xt!=null&&Xt.has(i))return Xt.get(i);if((i.f&or)!==0)throw i.v;return i.v}function rg(i){if(i.f|=zn,i.deps!==null)for(const e of i.deps)(e.reactions??(e.reactions=[])).push(i),(e.f&qt)!==0&&(e.f&zn)===0&&(zm(e),rg(e))}function sg(i){if(i.v===Dt)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Zr.has(e)||(e.f&qt)!==0&&sg(e))return!0;return!1}function jt(i){var e=Jn;try{return Jn=!0,i()}finally{Jn=e}}function ft(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(gi in i)Qu(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&gi in t&&Qu(t)}}}function Qu(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let n in i)try{Qu(i[n],e)}catch{}const t=Jh(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=gm(t);for(let r in n){const s=n[r].get;if(s)try{s.call(i)}catch{}}}}}const kr=Symbol("events"),cx=new Set,ux=new Set;function ag(i,e,t,n={}){function r(s){if(n.capture||dx.call(e,s),!s.cancelBubble)return yo(()=>t==null?void 0:t.call(this,s))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?na(()=>{e.addEventListener(i,r,n)}):e.addEventListener(i,r,n),r}function og(i,e,t,n,r){var s={capture:n,passive:r},a=ag(i,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Mo(()=>{e.removeEventListener(i,a,s)})}function hx(i,e,t){(e[kr]??(e[kr]={}))[i]=t}function fx(i){for(var e=0;e<i.length;e++)cx.add(i[e]);for(var t of ux)t(i)}let dd=null;function dx(i){var g,p;var e=this,t=e.ownerDocument,n=i.type,r=((g=i.composedPath)==null?void 0:g.call(i))||[],s=r[0]||i.target;dd=i;var a=0,o=dd===i&&i[kr];if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){i[kr]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||i.target,s!==e){mm(i,"currentTarget",{configurable:!0,get(){return s||t}});var u=tt,h=$e;xi(null),Gn(null);try{for(var f,d=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var _=(p=s[kr])==null?void 0:p[n];_!=null&&(!s.disabled||i.target===s)&&_.call(s,i)}catch(x){f?d.push(x):f=x}if(i.cancelBubble||m===e||m===null)break;s=m}if(f){for(let x of d)queueMicrotask(()=>{throw x});throw f}}finally{i[kr]=e,delete i.currentTarget,xi(u),Gn(h)}}}var hm;const Zc=((hm=globalThis==null?void 0:globalThis.window)==null?void 0:hm.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function px(i){return(Zc==null?void 0:Zc.createHTML(i))??i}function mx(i){var e=Gm("template");return e.innerHTML=px(i.replaceAll("<!>","<!---->")),e.content}function Ha(i,e){var t=$e;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function Ln(i,e){var t=(e&a0)!==0,n=(e&o0)!==0,r,s=!i.startsWith("<!>");return()=>{r===void 0&&(r=mx(s?i:"<!>"+i),t||(r=ar(r)));var a=n||$0?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ar(a),l=a.lastChild;Ha(o,l)}else Ha(a,a);return a}}function pn(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Ku();return i.append(e,t),Ha(e,t),i}function dt(i,e){i!==null&&i.before(e)}function gx(i){return i.endsWith("capture")&&i!=="gotpointercapture"&&i!=="lostpointercapture"}const _x=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function vx(i){return _x.includes(i)}const xx={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function yx(i){return i=i.toLowerCase(),xx[i]??i}let Mx=!0;var $n,hi,bn,Yr,_o,vo,tc;class oc{constructor(e,t=!0){it(this,"anchor");_t(this,$n,new Map);_t(this,hi,new Map);_t(this,bn,new Map);_t(this,Yr,new Set);_t(this,_o,!0);_t(this,vo,e=>{if(te(this,$n).has(e)){var t=te(this,$n).get(e),n=te(this,hi).get(t);if(n)rx(n),te(this,Yr).delete(t);else{var r=te(this,bn).get(t);r&&(te(this,hi).set(t,r.effect),te(this,bn).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[s,a]of te(this,$n)){if(te(this,$n).delete(s),s===e)break;const o=te(this,bn).get(a);o&&(jn(o.effect),te(this,bn).delete(a))}for(const[s,a]of te(this,hi)){if(s===t||te(this,Yr).has(s))continue;const o=()=>{if(Array.from(te(this,$n).values()).includes(s)){var c=document.createDocumentFragment();sx(a,c),c.append(Ku()),te(this,bn).set(s,{effect:a,fragment:c})}else jn(a);te(this,Yr).delete(s),te(this,hi).delete(s)};te(this,_o)||!n?(te(this,Yr).add(s),ix(a,o,!1)):o()}}});_t(this,tc,e=>{te(this,$n).delete(e);const t=Array.from(te(this,$n).values());for(const[n,r]of te(this,bn))t.includes(n)||(jn(r.effect),te(this,bn).delete(n))});this.anchor=e,un(this,_o,t)}ensure(e,t){var n=Qe,r=K0();if(t&&!te(this,hi).has(e)&&!te(this,bn).has(e))if(r){var s=document.createDocumentFragment(),a=Ku();s.append(a),te(this,bn).set(e,{effect:ql(()=>t(a)),fragment:s})}else te(this,hi).set(e,ql(()=>t(this.anchor)));if(te(this,$n).set(n,e),r){for(const[o,l]of te(this,hi))o===e?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of te(this,bn))o===e?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(te(this,vo)),n.ondiscard(te(this,tc))}else te(this,vo).call(this,n)}}$n=new WeakMap,hi=new WeakMap,bn=new WeakMap,Yr=new WeakMap,_o=new WeakMap,vo=new WeakMap,tc=new WeakMap;function bo(i){ct===null&&rc(),ha&&ct.l!==null?Ex(ct).m.push(i):ju(()=>{const e=jt(i);if(typeof e=="function")return e})}function ii(i){ct===null&&rc(),bo(()=>()=>jt(i))}function Sx(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}function bx(){const i=ct;return i===null&&rc(),(e,t,n)=>{var s;const r=(s=i.s.$$events)==null?void 0:s[e];if(r){const a=Zh(r)?r.slice():[r],o=Sx(e,t,n);for(const l of a)l.call(i.x,o);return!o.defaultPrevented}return!0}}function Ex(i){var e=i.l;return e.u??(e.u={a:[],b:[],m:[]})}const wx=0,pd=1,Ax=2;function Tx(i,e,t,n,r){var s=os(),a=Dt,o=s?sa(a):Ot(a,!1,!1),l=s?sa(a):Ot(a,!1,!1),c=new oc(i);ac(()=>{var u=Qe;u.deactivate();var h=e();u.activate();var f=!1;if(p0(h)){var d=Nm(),m=!1;const _=g=>{if(!f){m=!0,d(!1),ia.ensure();try{g()}finally{Va(!1),Ws||Pm()}}};h.then(g=>{_(()=>{Xs(o,g),c.ensure(pd,n&&(p=>n(p,o)))})},g=>{_(()=>{if(Xs(l,g),c.ensure(Ax,r&&(p=>r(p,l))),!r)throw l.v})}),na(()=>{m||_(()=>{c.ensure(wx,t)})})}else Xs(o,h),c.ensure(pd,n&&(_=>n(_,o)));return()=>{f=!0}})}function aa(i,e,t=!1){var n=new oc(i),r=t?ts:0;function s(a,o){n.ensure(a,o)}ac(()=>{var a=!1;e((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}const Cx=Symbol("NaN");function Rx(i,e,t){var n=new oc(i),r=!os();ac(()=>{var s=e();s!==s&&(s=Cx),r&&s!==null&&typeof s=="object"&&(s={}),n.ensure(s,t)})}function Px(i,e,t=!1,n=!1,r=!1,s=!1){var a=i,o="";if(t)var l=i;qm(()=>{var c=$e;if(o!==(o=e()??"")){if(t){c.nodes=null,l.innerHTML=o,o!==""&&Ha(ar(l),l.lastChild);return}if(c.nodes!==null&&(Zm(c.nodes.start,c.nodes.end),c.nodes=null),o!==""){var u=n?l0:r?c0:void 0,h=Gm(n?"svg":r?"math":"template",u);h.innerHTML=o;var f=n||r?h:h.content;if(Ha(ar(f),f.lastChild),n||r)for(;ar(f);)a.before(ar(f));else a.before(f)}}})}function yi(i,e,t,n,r){var o;var s=(o=e.$$slots)==null?void 0:o[t],a=!1;s===!0&&(s=e.children,a=!0),s===void 0||s(i,a?()=>n:n)}function Lx(i,e,t){var n=new oc(i);ac(()=>{var r=e()??null;n.ensure(r,r&&(s=>t(s,r)))},ts)}const Ix=()=>performance.now(),fi={tick:i=>requestAnimationFrame(i),now:()=>Ix(),tasks:new Set};function lg(){const i=fi.now();fi.tasks.forEach(e=>{e.c(i)||(fi.tasks.delete(e),e.f())}),fi.tasks.size!==0&&fi.tick(lg)}function cg(i){let e;return fi.tasks.size===0&&fi.tick(lg),{promise:new Promise(t=>{fi.tasks.add(e={c:i,f:t})}),abort(){fi.tasks.delete(e)}}}function Fo(i,e){yo(()=>{i.dispatchEvent(new CustomEvent(e))})}function Dx(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function md(i){const e={},t=i.split(";");for(const n of t){const[r,s]=n.split(":");if(!r||s===void 0)break;const a=Dx(r.trim());e[a]=s.trim()}return e}const Ux=i=>i;function gd(i,e,t,n){var v;var r=(i&i0)!==0,s=(i&r0)!==0,a=r&&s,o=(i&s0)!==0,l=a?"both":r?"in":"out",c,u=e.inert,h=e.style.overflow,f,d;function m(){return yo(()=>c??(c=t()(e,(n==null?void 0:n())??{},{direction:l})))}var _={is_global:o,in(){var y;if(e.inert=u,!r){d==null||d.abort(),(y=d==null?void 0:d.reset)==null||y.call(d);return}s||f==null||f.abort(),f=eh(e,m(),d,1,()=>{Fo(e,"introstart")},()=>{Fo(e,"introend"),f==null||f.abort(),f=c=void 0,e.style.overflow=h})},out(y){if(!s){y==null||y(),c=void 0;return}e.inert=!0,d=eh(e,m(),f,0,()=>{Fo(e,"outrostart")},()=>{Fo(e,"outroend"),y==null||y()})},stop:()=>{f==null||f.abort(),d==null||d.abort()}},g=$e;if(((v=g.nodes).t??(v.t=[])).push(_),r&&Mx){var p=o;if(!p){for(var x=g.parent;x&&(x.f&ts)!==0;)for(;(x=x.parent)&&(x.f&Bn)===0;);p=!x||(x.f&dr)!==0}p&&So(()=>{jt(()=>_.in())})}}function eh(i,e,t,n,r,s){var a=n===1;if(Us(e)){var o,l=!1;return na(()=>{if(!l){var p=e({direction:a?"in":"out"});o=eh(i,p,t,n,r,s)}}),{abort:()=>{l=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return r(),s(),{abort:dn,deactivate:dn,reset:dn,t:()=>n};const{delay:c=0,css:u,tick:h,easing:f=Ux}=e;var d=[];if(a&&t===void 0&&(h&&h(0,1),u)){var m=md(u(0,1));d.push(m,m)}var _=()=>1-n,g=i.animate(d,{duration:c,fill:"forwards"});return g.onfinish=()=>{g.cancel(),r();var p=(t==null?void 0:t.t())??1-n;t==null||t.abort();var x=n-p,v=e.duration*Math.abs(x),y=[];if(v>0){var b=!1;if(u)for(var E=Math.ceil(v/16.666666666666668),w=0;w<=E;w+=1){var P=p+x*f(w/E),N=md(u(P,1-P));y.push(N),b||(b=N.overflow==="hidden")}b&&(i.style.overflow="hidden"),_=()=>{var M=g.currentTime;return p+x*f(M/v)},h&&cg(()=>{if(g.playState!=="running")return!1;var M=_();return h(M,1-M),!0})}g=i.animate(y,{duration:v,fill:"forwards"}),g.onfinish=()=>{_=()=>n,h==null||h(n,1-n),s()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=dn)},deactivate:()=>{s=dn},reset:()=>{n===0&&(h==null||h(1,0))},t:()=>_()}}function of(i,e,t){So(()=>{var n=jt(()=>e(i,t==null?void 0:t())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Nx(i,e){var t=void 0,n;Ym(()=>{t!==(t=e())&&(n&&(jn(n),n=null),t&&(n=ql(()=>{So(()=>t(i))})))})}function ug(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=ug(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function Ox(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=ug(i))&&(n&&(n+=" "),n+=e);return n}function Fx(i){return typeof i=="object"?Ox(i):i??""}const _d=[...` 	
\r\f \v\uFEFF`];function Bx(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var s=r.length,a=0;(a=n.indexOf(r,a))>=0;){var o=a+s;(a===0||_d.includes(n[a-1]))&&(o===n.length||_d.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function vd(i,e=!1){var t=e?" !important;":";",n="";for(var r of Object.keys(i)){var s=i[r];s!=null&&s!==""&&(n+=" "+r+": "+s+t)}return n}function Jc(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function zx(i,e){if(e){var t="",n,r;if(Array.isArray(e)?(n=e[0],r=e[1]):n=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Jc)),r&&l.push(...Object.keys(r).map(Jc));var c=0,u=-1;const _=i.length;for(var h=0;h<_;h++){var f=i[h];if(o?f==="/"&&i[h-1]==="*"&&(o=!1):s?s===f&&(s=!1):f==="/"&&i[h+1]==="*"?o=!0:f==='"'||f==="'"?s=f:f==="("?a++:f===")"&&a--,!o&&s===!1&&a===0){if(f===":"&&u===-1)u=h;else if(f===";"||h===_-1){if(u!==-1){var d=Jc(i.substring(c,u).trim());if(!l.includes(d)){f!==";"&&h++;var m=i.substring(c,h).trim();t+=" "+m+";"}}c=h+1,u=-1}}}}return n&&(t+=vd(n)),r&&(t+=vd(r,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function Il(i,e,t,n,r,s){var a=i[rd];if(a!==t||a===void 0){var o=Bx(t,n,s);o==null?i.removeAttribute("class"):e?i.className=o:i.setAttribute("class",o),i[rd]=t}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&i.classList.toggle(l,c)}return s}function Kc(i,e={},t,n){for(var r in t){var s=t[r];e[r]!==s&&(t[r]==null?i.style.removeProperty(r):i.style.setProperty(r,s,n))}}function kx(i,e,t,n){var r=i[sd];if(r!==e){var s=zx(e,n);s==null?i.removeAttribute("style"):i.style.cssText=s,i[sd]=e}else n&&(Array.isArray(n)?(Kc(i,t==null?void 0:t[0],n[0]),Kc(i,t==null?void 0:t[1],n[1],"important")):Kc(i,t,n));return n}function th(i,e,t=!1){if(i.multiple){if(e==null)return;if(!Zh(e))return R0();for(var n of i.options)n.selected=e.includes(xd(n));return}for(n of i.options){var r=xd(n);if(Y0(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Vx(i){var e=new MutationObserver(()=>{th(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Mo(()=>{e.disconnect()})}function xd(i){return"__value"in i?i.__value:i.value}const ya=Symbol("class"),Ma=Symbol("style"),hg=Symbol("is custom element"),fg=Symbol("is html"),Gx=ym?"option":"OPTION",Hx=ym?"select":"SELECT";function Wx(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function nh(i,e,t,n){var r=dg(i);r[e]!==(r[e]=t)&&(e==="loading"&&(i[v0]=t),t==null?i.removeAttribute(e):typeof t!="string"&&pg(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function Xx(i,e,t,n,r=!1,s=!1){var a=dg(i),o=a[hg],l=!a[fg],c=e||{},u=i.nodeName===Gx;for(var h in e)h in t||(t[h]=null);t.class?t.class=Fx(t.class):t[ya]&&(t.class=null),t[Ma]&&(t.style??(t.style=null));var f=pg(i);for(const y in t){let b=t[y];if(u&&y==="value"&&b==null){i.value=i.__value="",c[y]=b;continue}if(y==="class"){var d=i.namespaceURI==="http://www.w3.org/1999/xhtml";Il(i,d,b,n,e==null?void 0:e[ya],t[ya]),c[y]=b,c[ya]=t[ya];continue}if(y==="style"){kx(i,b,e==null?void 0:e[Ma],t[Ma]),c[y]=b,c[Ma]=t[Ma];continue}var m=c[y];if(!(b===m&&!(b===void 0&&i.hasAttribute(y)))){c[y]=b;var _=y[0]+y[1];if(_!=="$$")if(_==="on"){const E={},w="$$"+y;let P=y.slice(2);var g=vx(P);if(gx(P)&&(P=P.slice(0,-7),E.capture=!0),!g&&m){if(b!=null)continue;i.removeEventListener(P,c[w],E),c[w]=null}if(g)hx(P,i,b),fx([P]);else if(b!=null){let N=function(M){c[y].call(this,M)};var v=N;c[w]=ag(P,i,N,E)}}else if(y==="style")nh(i,y,b);else if(y==="autofocus")j0(i,!!b);else if(!o&&(y==="__value"||y==="value"&&b!=null))i.value=i.__value=b;else if(y==="selected"&&u)Wx(i,b);else{var p=y;l||(p=yx(p));var x=p==="defaultValue"||p==="defaultChecked";if(b==null&&!o&&!x)if(a[y]=null,p==="value"||p==="checked"){let E=i;const w=e===void 0;if(p==="value"){let P=E.defaultValue;E.removeAttribute(p),E.defaultValue=P,E.value=E.__value=w?P:null}else{let P=E.defaultChecked;E.removeAttribute(p),E.defaultChecked=P,E.checked=w?P:!1}}else i.removeAttribute(y);else x||f.includes(p)&&(o||typeof b!="string")?(i[p]=b,p in a&&(a[p]=Dt)):typeof b!="function"&&nh(i,p,b)}}}return c}function qx(i,e,t=[],n=[],r=[],s,a=!1,o=!1){Um(r,t,n,l=>{var c=void 0,u={},h=i.nodeName===Hx,f=!1;if(Ym(()=>{var m=e(...l.map(se)),_=Xx(i,c,m,s,a,o);f&&h&&"value"in m&&th(i,m.value);for(let p of Object.getOwnPropertySymbols(u))m[p]||jn(u[p]);for(let p of Object.getOwnPropertySymbols(m)){var g=m[p];p.description===u0&&(!c||g!==c[p])&&(u[p]&&jn(u[p]),u[p]=ql(()=>Nx(i,()=>g))),_[p]=g}c=_}),h){var d=i;So(()=>{th(d,c.value,!0),Vx(d)})}f=!0})}function dg(i){return i[Xc]??(i[Xc]={[hg]:i.nodeName.includes("-"),[fg]:i.namespaceURI===dm})}var yd=new Map;function pg(i){var e=i.getAttribute("is")||i.nodeName,t=yd.get(e);if(t)return t;yd.set(e,t=[]);for(var n,r=i,s=Element.prototype;s!==r;){n=gm(r);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.push(a);r=Jh(r)}return t}function Yx(i,e,t){var n=$r(i,e);n&&n.set&&(i[e]=t,Mo(()=>{i[e]=null}))}function jc(i,e){return i===e||(i==null?void 0:i[gi])===e}function mg(i={},e,t,n){var r=ct.r,s=$e;return So(()=>{var a,o;return sf(()=>{a=o,o=[],jt(()=>{jc(t(...o),i)||(e(i,...o),a&&jc(t(...a),i)&&e(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Wu;)l=l.parent;const c=()=>{o&&jc(t(...o),i)&&e(null,...o)},u=l.teardown;l.teardown=()=>{c(),u==null||u()}}}),i}function Ei(i=!1){const e=ct,t=e.l.u;if(!t)return;let n=()=>ft(e.s);if(i){let r=0,s={};const a=ra(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});n=()=>se(a)}t.b.length&&ex(()=>{Md(e,n),kl(t.b)}),ju(()=>{const r=jt(()=>t.m.map(m0));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&ju(()=>{Md(e,n),kl(t.a)})}function Md(i,e){if(i.l.s)for(const t of i.l.s)se(t);e()}const $x={get(i,e){if(!i.exclude.includes(e))return se(i.version),e in i.special?i.special[e]():i.props[e]},set(i,e,t){if(!(e in i.special)){var n=$e;try{Gn(i.parent_effect),i.special[e]=Ke({get[e](){return i.props[e]}},e,fm)}finally{Gn(n)}}return i.special[e](t),cd(i.version),!0},getOwnPropertyDescriptor(i,e){if(!i.exclude.includes(e)&&e in i.props)return{enumerable:!0,configurable:!0,value:i.props[e]}},deleteProperty(i,e){return i.exclude.includes(e)||(i.exclude.push(e),cd(i.version)),!0},has(i,e){return i.exclude.includes(e)?!1:e in i.props},ownKeys(i){return Reflect.ownKeys(i.props).filter(e=>!i.exclude.includes(e))}};function Wa(i,e){return new Proxy({props:i,exclude:e,special:{},version:sa(0),parent_effect:$e},$x)}const Zx={get(i,e){let t=i.props.length;for(;t--;){let n=i.props[t];if(Us(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(i,e,t){let n=i.props.length;for(;n--;){let r=i.props[n];Us(r)&&(r=r());const s=$r(r,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(i,e){let t=i.props.length;for(;t--;){let n=i.props[t];if(Us(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const r=$r(n,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(i,e){if(e===gi||e===xm)return!1;for(let t of i.props)if(Us(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(i){const e=[];for(let t of i.props)if(Us(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function Jx(...i){return new Proxy({props:i},Zx)}function Ke(i,e,t,n){var y;var r=!ha||(t&e0)!==0,s=(t&t0)!==0,a=(t&n0)!==0,o=n,l=!0,c=void 0,u=()=>a&&r?(c??(c=ra(n)),se(c)):(l&&(l=!1,o=a?jt(n):n),o);let h;if(s){var f=gi in i||xm in i;h=((y=$r(i,e))==null?void 0:y.set)??(f&&e in i?b=>i[e]=b:void 0)}var d,m=!1;s?[d,m]=z0(()=>i[e]):d=i[e],d===void 0&&n!==void 0&&(d=u(),h&&(r&&E0(),h(d)));var _;if(r?_=()=>{var b=i[e];return b===void 0?u():(l=!0,b)}:_=()=>{var b=i[e];return b!==void 0&&(o=void 0),b===void 0?o:b},r&&(t&fm)===0)return _;if(h){var g=i.$$legacy;return function(b,E){return arguments.length>0?((!r||!E||g||m)&&h(E?_():b),b):_()}}var p=!1,x=((t&Qv)!==0?ra:Fm)(()=>(p=!1,_()));s&&se(x);var v=$e;return function(b,E){if(arguments.length>0){const w=E?se(x):r&&s?Fs(b):b;return ut(x,w),p=!0,o!==void 0&&(o=w),b}return Vi&&p||(v.f&Kn)!==0?x.v:se(x)}}const ih={},Yl={},gg={},_g=/^:(.+)/,Sd=4,Kx=3,jx=2,Qx=1,ey=1,Xa=i=>i.replace(/(^\/+|\/+$)/g,"").split("/"),Qc=i=>i.replace(/(^\/+|\/+$)/g,""),ty=(i,e)=>{const t=i.default?0:Xa(i.path).reduce((n,r)=>(n+=Sd,r===""?n+=ey:_g.test(r)?n+=jx:r[0]==="*"?n-=Sd+Qx:n+=Kx,n),0);return{route:i,score:t,index:e}},ny=i=>i.map(ty).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index),bd=(i,e)=>{let t,n;const[r]=e.split("?"),s=Xa(r),a=s[0]==="",o=ny(i);for(let l=0,c=o.length;l<c;l++){const u=o[l].route;let h=!1;if(u.default){n={route:u,params:{},uri:e};continue}const f=Xa(u.path),d={},m=Math.max(s.length,f.length);let _=0;for(;_<m;_++){const g=f[_],p=s[_];if(g&&g[0]==="*"){const v=g==="*"?"*":g.slice(1);d[v]=s.slice(_).map(decodeURIComponent).join("/");break}if(typeof p>"u"){h=!0;break}const x=_g.exec(g);if(x&&!a){const v=decodeURIComponent(p);d[x[1]]=v}else if(g!==p){h=!0;break}}if(!h){t={route:u,params:d,uri:"/"+s.slice(0,_).join("/")};break}}return t||n||null},eu=(i,e)=>i+(e?`?${e}`:""),iy=(i,e)=>{if(i.startsWith("/"))return i;const[t,n]=i.split("?"),[r]=e.split("?"),s=Xa(t),a=Xa(r);if(s[0]==="")return eu(r,n);if(!s[0].startsWith(".")){const c=a.concat(s).join("/");return eu((r==="/"?"":"/")+c,n)}const o=a.concat(s),l=[];return o.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),eu("/"+l.join("/"),n)},tu=(i,e)=>`${Qc(e==="/"?i:`${Qc(i)}/${Qc(e)}`)}/`,vg=i=>!i.defaultPrevented&&i.button===0&&!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey),ry=i=>{const e=location.host;return i.host===e||i.href.indexOf(`https://${e}`)===0||i.href.indexOf(`http://${e}`)===0},rh=()=>typeof window<"u"&&"document"in window&&"location"in window;var sy=Ln("<a><!></a>");function ay(i,e){const t=Wa(e,["children","$$slots","$$events","$$legacy"]),n=Wa(t,["to","replace","state","getProps","preserveScroll"]);Mi(e,!1);const r=()=>An(_,"$base",a),s=()=>An(m,"$location",a),[a,o]=pr(),l=Ot();let c=Ke(e,"to",8,"#"),u=Ke(e,"replace",8,!1),h=Ke(e,"state",24,()=>({})),f=Ke(e,"getProps",8,()=>({})),d=Ke(e,"preserveScroll",8,!1);const m=Tn(ih),{base:_}=Tn(Yl),{navigate:g}=Tn(gg),p=bx();let x=Ot(),v=Ot(),y=Ot(),b=Ot();const E=N=>{if(p("click",N),vg(N)){N.preventDefault();const M=s().pathname===se(x)||u();g(se(x),{state:h(),replace:M,preserveScroll:d()})}};rt(()=>(ft(c()),r()),()=>{ut(x,iy(c(),r().uri))}),rt(()=>(s(),se(x)),()=>{ut(v,s().pathname.startsWith(se(x)))}),rt(()=>(se(x),s()),()=>{ut(y,se(x)===s().pathname)}),rt(()=>se(y),()=>{ut(l,se(y)?"page":void 0)}),rt(()=>(ft(f()),s(),se(x),se(v),se(y),ft(n)),()=>{ut(b,f()({location:s(),href:se(x),isPartiallyCurrent:se(v),isCurrent:se(y),existingProps:n}))}),mr(),Ei();var w=sy();qx(w,()=>({href:se(x),"aria-current":se(l),...se(b),...n}));var P=ei(w);yi(P,e,"default",{get active(){return!!se(l)}}),og("click",w,E),dt(i,w),Si(),o()}function Sa(i,e){const t=Wa(e,["children","$$slots","$$events","$$legacy"]);Mi(e,!1);const n=()=>An(f,"$activeRoute",r),[r,s]=pr();let a=Ke(e,"path",8,""),o=Ke(e,"component",12,null),l=Ot({}),c=Ot({});const{registerRoute:u,unregisterRoute:h,activeRoute:f}=Tn(Yl),d={path:a(),default:a()===""};u(d),ii(()=>{h(d)}),rt(()=>(n(),ft(t),rh),()=>{if(n()&&n().route===d){ut(l,n().params);const{component:p,path:x,...v}=t;ut(c,v),p&&(p.toString().startsWith("class ")?o(p):o(p())),rh()&&!n().preserveScroll&&(window==null||window.scrollTo(0,0))}}),mr(),Ei();var m=pn(),_=Gt(m);{var g=p=>{var x=pn(),v=Gt(x);{var y=E=>{var w=pn(),P=Gt(w);Tx(P,o,null,(N,M)=>{var T=pn(),z=Gt(T);Lx(z,()=>{var W;return((W=se(M))==null?void 0:W.default)||se(M)},(W,L)=>{L(W,Jx(()=>se(l),()=>se(c)))}),dt(N,T)}),dt(E,w)},b=E=>{var w=pn(),P=Gt(w);yi(P,e,"default",{get params(){return se(l)}}),dt(E,w)};aa(v,E=>{o()?E(y):E(b,-1)})}dt(p,x)};aa(_,p=>{n(),jt(()=>n()&&n().route===d)&&p(g)})}dt(i,m),Si(),s()}const nu=i=>({...i.location,state:i.history.state,key:i.history.state&&i.history.state.key||"initial"}),oy=i=>{const e=[];let t=nu(i);return{get location(){return t},listen(n){e.push(n);const r=()=>{t=nu(i),n({location:t,action:"POP"})};return i.addEventListener("popstate",r),()=>{i.removeEventListener("popstate",r);const s=e.indexOf(n);e.splice(s,1)}},navigate(n,{state:r,replace:s=!1,preserveScroll:a=!1,blurActiveElement:o=!0}={}){r={...r,key:Date.now()+""};try{s?i.history.replaceState(r,"",n):i.history.pushState(r,"",n)}catch{i.location[s?"replace":"assign"](n)}t=nu(i),e.forEach(l=>l({location:t,action:"PUSH",preserveScroll:a})),o&&document.activeElement.blur()}}},ly=(i="/")=>{let e=0;const t=[{pathname:i,search:""}],n=[];return{get location(){return t[e]},addEventListener(r,s){},removeEventListener(r,s){},history:{get entries(){return t},get index(){return e},get state(){return n[e]},pushState(r,s,a){const[o,l=""]=a.split("?");e++,t.push({pathname:o,search:l}),n.push(r)},replaceState(r,s,a){const[o,l=""]=a.split("?");t[e]={pathname:o,search:l},n[e]=r}}}},xg=oy(rh()?window:ly()),{navigate:cy}=xg;var uy=Ln("<div><!></div>");function hy(i,e){Mi(e,!1);const t=()=>An(v,"$base",a),n=()=>An(x,"$location",a),r=()=>An(_,"$routes",a),s=()=>An(g,"$activeRoute",a),[a,o]=pr();let l=Ke(e,"basepath",8,"/"),c=Ke(e,"url",8,null),u=Ke(e,"viewtransition",8,null),h=Ke(e,"history",8,xg);const f=(z,W,L)=>{const O=u()(L);return typeof(O==null?void 0:O.fn)=="function"?O.fn(z,O):O};Cn(gg,h());const d=Tn(ih),m=Tn(Yl),_=an([]),g=an(null);let p=!1;const x=d||an(c()?{pathname:c()}:h().location),v=m?m.routerBase:an({path:l(),uri:l()}),y=ef([v,g],([z,W])=>{if(!W)return z;const{path:L}=z,{route:O,uri:B}=W;return{path:O.default?L:O.path.replace(/\*.*$/,""),uri:B}}),b=z=>{const{path:W}=t();let{path:L}=z;if(z._path=L,z.path=tu(W,L),typeof window>"u"){if(p)return;const O=bd([z],n().pathname);O&&(g.set(O),p=!0)}else _.update(O=>[...O,z])},E=z=>{_.update(W=>W.filter(L=>L!==z))};let w=Ot(!1);d||(bo(()=>h().listen(W=>{ut(w,W.preserveScroll||!1),x.set(W.location)})),Cn(ih,x)),Cn(Yl,{activeRoute:g,base:v,routerBase:y,registerRoute:b,unregisterRoute:E}),rt(()=>(t(),tu),()=>{const{path:z}=t();_.update(W=>W.map(L=>Object.assign(L,{path:tu(z,L._path)})))}),rt(()=>(r(),n(),se(w)),()=>{const z=bd(r(),n().pathname);g.set(z&&{...z,preserveScroll:se(w)})}),mr(),Ei();var P=pn(),N=Gt(P);{var M=z=>{var W=pn(),L=Gt(W);Rx(L,()=>(n(),jt(()=>n().pathname)),O=>{var B=uy(),J=ei(B);yi(J,e,"default",{get route(){return s(),jt(()=>s()&&s().uri)},get location(){return n()}}),gd(1,B,()=>f),gd(2,B,()=>f),dt(O,B)}),dt(z,W)},T=z=>{var W=pn(),L=Gt(W);yi(L,e,"default",{get route(){return s(),jt(()=>s()&&s().uri)},get location(){return n()}}),dt(z,W)};aa(N,z=>{u()?z(M):z(T,-1)})}dt(i,P),Si(),o()}const qs=i=>{const e=t=>{const n=t.currentTarget;(n.target===""||n.target==="_self")&&ry(n)&&vg(t)&&(t.preventDefault(),cy(n.pathname+n.search,{replace:n.hasAttribute("replace"),preserveScroll:n.hasAttribute("preserveScroll")}))};return i.addEventListener("click",e),{destroy(){i.removeEventListener("click",e)}}};var fy=Ln('<div class="page"><h1>Page Not Found</h1> <a href="/" class="button-outlined">Return To Homepage</a></div>');function dy(i){var e=fy(),t=Fn(ei(e),2);of(t,n=>qs==null?void 0:qs(n)),dt(i,e)}function Ed(i){return Object.prototype.toString.call(i)==="[object Date]"}function py(i){return i}function sh(i,e){if(i===e||i!==i)return()=>i;const t=typeof i;if(t!==typeof e||Array.isArray(i)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const n=e.map((r,s)=>sh(i[s],r));return r=>n.map(s=>s(r))}if(t==="object"){if(!i||!e)throw new Error("Object cannot be null");if(Ed(i)&&Ed(e)){const s=i.getTime(),o=e.getTime()-s;return l=>new Date(s+l*o)}const n=Object.keys(e),r={};return n.forEach(s=>{r[s]=sh(i[s],e[s])}),s=>{const a={};return n.forEach(o=>{a[o]=r[o](s)}),a}}if(t==="number"){const n=e-i;return r=>i+r*n}return()=>e}function my(i,e={}){const t=an(i);let n,r=i;function s(a,o){if(r=a,i==null)return t.set(i=a),Promise.resolve();let l=n,c=!1,{delay:u=0,duration:h=400,easing:f=py,interpolate:d=sh}={...e,...o};if(h===0)return l&&(l.abort(),l=null),t.set(i=r),Promise.resolve();const m=fi.now()+u;let _;return n=cg(g=>{if(g<m)return!0;c||(_=d(i,a),typeof h=="function"&&(h=h(i,a)),c=!0),l&&(l.abort(),l=null);const p=g-m;return p>h?(t.set(i=a),!1):(t.set(i=_(f(p/h))),!0)}),n.promise}return{set:s,update:(a,o)=>s(a(r,i),o),subscribe:t.subscribe}}const gy="/img/Dog.png";var _y=Ln('<div id="doghouse" class="svelte-1p95qbx"><div id="dog"><img id="dog-sprite"/></div> <div id="heart">♥️</div></div>');function vy(i){let e=0,t=Ot(!1);function n(){++e>=3?ut(t,!0):a()}let r=Ot(),s=Ot(!1);function a(){ut(s,!1),setTimeout(function(){ut(s,!0)},80)}var o=_y(),l=ei(o);let c;var u=ei(l);let h;var f=Fn(l,2);let d;mg(f,m=>ut(r,m),()=>se(r)),qm(()=>{c=Il(l,1,"svelte-1p95qbx",null,c,{animation_dogwalk_exit:se(t)}),nh(u,"src",gy),h=Il(u,1,"svelte-1p95qbx",null,h,{animation_dogwalk:se(t)}),d=Il(f,1,"svelte-1p95qbx",null,d,{animation_heartfly:se(s)})}),og("click",l,n),dt(i,o)}var xy=Ln('<div id="banner-image" class="svelte-1nmp6pz"></div> <div id="profile-image-box" class="svelte-1nmp6pz"><img src="/img/DressedUp.jpg" class="profile-image svelte-1nmp6pz" alt="me"/></div> <div class="page"><h1>Cory Beutler</h1> <p>I am currently looking for work as a software developer.</p> <div style="margin: 20px"><a href="/resume" class="button-outlined">Online Resume</a> <a href="https://www.linkedin.com/in/cory-beutler/" class="button-outlined" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></div> <br/> <p style="margin: 0pt 10pt">Personal Projects:</p> <p><a class="ext-link-big svelte-1nmp6pz" href="http://proper.monster" target="_blank" rel="noopener noreferrer"><img src="/img/ProperMonster.png" alt="proper monster" class="svelte-1nmp6pz"/></a> <a class="ext-link-big svelte-1nmp6pz" href="https://monstervial.itch.io/minescroller" target="_blank" rel="noopener noreferrer"><img src="/img/Minescroller.png" alt="minescroller" class="svelte-1nmp6pz"/></a></p></div> <div class="ext-nav"><span style="margin: 0pt 10pt">Profiles:</span> <a class="ext-link svelte-1nmp6pz" href="https://github.com/cgbeutler"><img src="/img/github_logo.png" alt="github" class="svelte-1nmp6pz"/></a> <a class="ext-link svelte-1nmp6pz" href="https://stackoverflow.com/users/1884803"><span style="white-space: nowrap;"><img src="/img/stack-white.svg" alt="stack" class="svelte-1nmp6pz"/> stack<b>overflow</b></span></a> <a class="ext-link svelte-1nmp6pz" href="https://aristonaut.itch.io/"><img src="/img/itchio_logo.svg" alt="itch.io" class="svelte-1nmp6pz"/></a></div> <!>',1);function yy(i,e){Mi(e,!1);const t=()=>An(o,"$timer",n),[n,r]=pr();let s=Ke(e,"location",8),o=my(3);setInterval(()=>{t()>0?B0(o,t(),-1):F0(o,t()+3),t()<1},1e3),new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting})}),rt(()=>ft(s()),()=>{console.log(s())}),rt(()=>{},()=>{}),mr(),Ei();var l=xy(),c=Fn(Gt(l),4),u=Fn(ei(c),4),h=ei(u);of(h,d=>qs==null?void 0:qs(d));var f=Fn(c,4);vy(f),dt(i,l),Si(),r()}var My=Ln('<div class="page"><div class="groc-list svelte-1aordls"></div></div>');function Sy(i,e){Mi(e,!1);let t=Ot("");fetch("/groceries.html").then(s=>{if(s.ok)return s.text();throw new Error(s.status+" Failed Fetch ")}).then(s=>{ut(t,s)}).catch(s=>{console.log(s),console.log("Trying dev path"),fetch("/raw/groceries.html").then(a=>{if(a.ok)return a.text();throw new Error(a.status+" Failed Fetch ")}).then(a=>{ut(t,a)}).catch(a=>{console.log(a),console.log("Trying dev path")})}),Ei();var n=My(),r=ei(n);Px(r,()=>se(t),!0),dt(i,n),Si()}var by=Ln('<div id="banner-image" class="svelte-tc3jol"></div> <div id="profile-image-box" class="svelte-tc3jol"><img src="/img/DressedUp.jpg" class="profile-image svelte-tc3jol" alt="me"/></div> <div class="page work-experience svelte-tc3jol"><h1 class="svelte-tc3jol">Resume for Cory G. Beutler</h1> <p style="text-align:center;">Denver, CO 80222 &emsp; <a href="mailto:jobopportunities@corybeutler.com">jobopportunities@corybeutler.com</a></p> <h2 class="svelte-tc3jol">Education</h2> <p style="text-align:center;">2016 Bachelors in Computer Science from BYU with 3.5 GPA</p> <h2 class="svelte-tc3jol">Work Experience</h2> <p><span class="infoline svelte-tc3jol">Jul 2019 - Dec 2023</span><br/> <b><span class="infoline svelte-tc3jol">Monster Vial</span> <span class="infoline svelte-tc3jol">Software Developer</span></b></p> <ul><li>Developed real-time event streams using Reactive design patterns.</li> <li>Created fully localized user interfaces.</li> <li>Developed a file management library with robust error handling.</li> <p><b>Technologies:</b> C#, USS (CSS derivative), GDScript (Python derivative), Unity.</p></ul> <p><span class="infoline svelte-tc3jol">Jun 2016 - Jul 2019</span><br/> <b><span class="infoline svelte-tc3jol">Xactware (Verisk)</span> <span class="infoline svelte-tc3jol">Software Developer</span></b></p> <ul><li>Created a search engine with localization, phonetic matching, synonym matching, and spelling tolerance that also weighted products by popularity.</li> <li>Implemented a migration service and a testing framework for the backend API.</li> <li>Debugged and added features to multiple responsive, front-end clients.</li> <p><b>Technologies:</b> C#, ASP.NET MVC, REST APIs, MongoDB, ElasticSearch, TeamCity, AWS, Json.NET Serialization, Angular, TypeScript.</p></ul> <p><span class="infoline svelte-tc3jol">Apr 2014 - May 2016</span><br/> <b><span class="infoline svelte-tc3jol">ImSAR LLC</span> <span class="infoline svelte-tc3jol">Software Dev. Intern</span></b></p> <ul><li>Benchmarked and optimized code to improve performance in core math libraries.</li> <li>Added dynamic CUDA GPU memory management to the Blitz matrix math library.</li> <p><b>Technologies:</b> C++, Python, CUDA, Google Earth Engine, Linux, Bash, Make.</p></ul> <p><span class="infoline svelte-tc3jol">Jul 2013 - Dec 2013</span><br/> <b><span class="infoline svelte-tc3jol">Northrop Grumman</span> <span class="infoline svelte-tc3jol">Software Dev. Intern</span></b></p> <ul><li>Developed software under a Secret Clearance (expired July 2015.)</li> <p><b>Technologies:</b> C++, Java, Python, Linux, Bash Scripting, Make.</p></ul> <h2 class="svelte-tc3jol">Skills Summary</h2> <p style="text-align:center;"><b>Backend:</b> C#, ASP.NET MVC, NoSQL, SQL, MongoDB, Elasticsearch, AWS<br/> <b>Frontend:</b> HTML, CSS, TypeScript, JavaScript, Angular, Svelte<br/> <b>Native:</b> C#, C++, Python, Java, Linux, Windows<br/></p></div>',1);function Ey(i){var e=by();dt(i,e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="162",wy={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ay={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yg=0,ah=1,Mg=2,Ty=3,Cy=0,lf=1,lc=2,oi=3,Gi=0,on=1,di=2,Bi=0,Kr=1,oh=2,lh=3,ch=4,Sg=5,ir=100,bg=101,Eg=102,uh=103,hh=104,wg=200,Ag=201,Tg=202,Cg=203,$l=204,Zl=205,Rg=206,Pg=207,Lg=208,Ig=209,Dg=210,Ug=211,Ng=212,Og=213,Fg=214,Bg=0,zg=1,kg=2,qa=3,Vg=4,Gg=5,Hg=6,Wg=7,wo=0,Xg=1,qg=2,zi=0,Yg=1,$g=2,Zg=3,cf=4,Jg=5,Kg=6,jg=7,fh="attached",Qg="detached",cc=300,Hi=301,hr=302,Ya=303,$a=304,da=306,Za=1e3,Kt=1001,Ja=1002,Pt=1003,Jl=1004,Ry=1004,Or=1005,Py=1005,Mt=1006,Fa=1007,Ly=1007,pi=1008,Iy=1008,ki=1009,e_=1010,t_=1011,uc=1012,uf=1013,Oi=1014,En=1015,oa=1016,hf=1017,ff=1018,lr=1020,n_=1021,mn=1023,i_=1024,r_=1025,cr=1026,rs=1027,df=1028,pf=1029,s_=1030,mf=1031,gf=1033,Dl=33776,Ul=33777,Nl=33778,Ol=33779,dh=35840,ph=35841,mh=35842,gh=35843,_f=36196,_h=37492,vh=37496,xh=37808,yh=37809,Mh=37810,Sh=37811,bh=37812,Eh=37813,wh=37814,Ah=37815,Th=37816,Ch=37817,Rh=37818,Ph=37819,Lh=37820,Ih=37821,Fl=36492,Dh=36494,Uh=36495,a_=36283,Nh=36284,Oh=36285,Fh=36286,o_=2200,l_=2201,c_=2202,Ka=2300,ja=2301,Bl=2302,Vr=2400,Gr=2401,Qa=2402,hc=2500,vf=2501,Dy=0,Uy=1,Ny=2,u_=3200,h_=3201,gr=0,f_=1,Ui="",On="srgb",Xi="srgb-linear",fc="display-p3",Ao="display-p3-linear",eo="linear",gt="srgb",to="rec709",no="p3",Oy=0,Ur=7680,Fy=7681,By=7682,zy=7683,ky=34055,Vy=34056,Gy=5386,Hy=512,Wy=513,Xy=514,qy=515,Yy=516,$y=517,Zy=518,Bh=519,d_=512,p_=513,m_=514,xf=515,g_=516,__=517,v_=518,x_=519,io=35044,Jy=35048,Ky=35040,jy=35045,Qy=35049,eM=35041,tM=35046,nM=35050,iM=35042,rM="100",zh="300 es",Kl=1035,mi=2e3,ro=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const jr=Math.PI/180,la=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function yf(i,e){return(i%e+e)%e}function sM(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function aM(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function oM(i,e,t,n){return Ba(i,e,1-Math.exp(-t*n))}function lM(i,e=1){return e-Math.abs(yf(i,e*2)-e)}function cM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fM(i,e){return i+Math.random()*(e-i)}function dM(i){return i*(.5-Math.random())}function pM(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mM(i){return i*jr}function gM(i){return i*la}function kh(i){return(i&i-1)===0&&i!==0}function _M(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vM(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:jr,RAD2DEG:la,generateUUID:Rn,clamp:wt,euclideanModulo:yf,mapLinear:sM,inverseLerp:aM,lerp:Ba,damp:oM,pingpong:lM,smoothstep:cM,smootherstep:uM,randInt:hM,randFloat:fM,randFloatSpread:dM,seededRandom:pM,degToRad:mM,radToDeg:gM,isPowerOfTwo:kh,ceilPowerOfTwo:_M,floorPowerOfTwo:jl,setQuaternionFromProperEuler:vM,normalize:ke,denormalize:sn};class K{constructor(e=0,t=0){K.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=r[0],g=r[3],p=r[6],x=r[1],v=r[4],y=r[7],b=r[2],E=r[5],w=r[8];return s[0]=a*_+o*x+l*b,s[3]=a*g+o*v+l*E,s[6]=a*p+o*y+l*w,s[1]=c*_+u*x+h*b,s[4]=c*g+u*v+h*E,s[7]=c*p+u*y+h*w,s[2]=f*_+d*x+m*b,s[5]=f*g+d*v+m*E,s[8]=f*p+d*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(iu.makeScale(e,t)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new ze;function y_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const yM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Bs(i,e){return new yM[i](e)}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M_(){const i=so("canvas");return i.style.display="block",i}const Ad={};function S_(i){i in Ad||(Ad[i]=!0,console.warn(i))}const Td=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cd=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[Xi]:{transfer:eo,primaries:to,toReference:i=>i,fromReference:i=>i},[On]:{transfer:gt,primaries:to,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ao]:{transfer:eo,primaries:no,toReference:i=>i.applyMatrix3(Cd),fromReference:i=>i.applyMatrix3(Td)},[fc]:{transfer:gt,primaries:no,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cd),fromReference:i=>i.applyMatrix3(Td).convertLinearToSRGB()}},MM=new Set([Xi,Ao]),ot={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!MM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Bo[e].toReference,r=Bo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bo[i].primaries},getTransfer:function(i){return i===Ui?eo:Bo[i].transfer}};function Ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ru(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class Mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=so("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ys(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ys(t[n]/255)*255):t[n]=Ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SM=0;class Hr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(su(r[a].image)):s.push(su(r[a]))}else s=su(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class At extends qi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Kt,r=Kt,s=Mt,a=pi,o=mn,l=ki,c=At.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Rn(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=cc;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(u+f)/4,w=(h+_)/4,P=(m+g)/4;return v>y&&v>b?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=E/n,s=w/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=E/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=P/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b_ extends qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new At(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends b_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EM extends ti{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new dc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Sf extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wM extends ti{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Sf(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class gn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-o;const p=l*f+c*d+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,p*x);g=Math.sin(g*E)/b,o=Math.sin(o*E)/b}const y=o*x;if(l=l*g+f*y,c=c*g+d*y,u=u*g+m*y,h=h*g+_*y,g===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-o*d,e[t+2]=c*m+u*d+o*f-l*h,e[t+3]=u*m-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new C,Rd=new gn;class ln{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),ko.subVectors(this.max,ba),ps.subVectors(e.a,ba),ms.subVectors(e.b,ba),gs.subVectors(e.c,ba),$i.subVectors(ms,ps),Zi.subVectors(gs,ms),Sr.subVectors(ps,gs);let t=[0,-$i.z,$i.y,0,-Zi.z,Zi.y,0,-Sr.z,Sr.y,$i.z,0,-$i.x,Zi.z,0,-Zi.x,Sr.z,0,-Sr.x,-$i.y,$i.x,0,-Zi.y,Zi.x,0,-Sr.y,Sr.x,0];return!ou(t,ps,ms,gs,ko)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,ps,ms,gs,ko))?!1:(Vo.crossVectors($i,Zi),t=[Vo.x,Vo.y,Vo.z],ou(t,ps,ms,gs,ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new C,new C,new C,new C,new C,new C,new C,new C],Hn=new C,zo=new ln,ps=new C,ms=new C,gs=new C,$i=new C,Zi=new C,Sr=new C,ba=new C,ko=new C,Vo=new C,br=new C;function ou(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){br.fromArray(i,s);const o=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=n.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const AM=new ln,Ea=new C,lu=new C;class Qt{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ea,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(lu)),this.expandByPoint(Ea.copy(e.center).sub(lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new C,cu=new C,Go=new C,Ji=new C,uu=new C,Ho=new C,hu=new C;class pa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cu.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(cu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Ji.dot(this.direction),l=-Ji.dot(Go),c=Ji.lengthSq(),u=Math.abs(1-a*a);let h,f,d,m;if(u>0)if(h=a*l-o,f=a*o-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cu).addScaledVector(Go,f),d}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,r,s){uu.subVectors(t,e),Ho.subVectors(n,e),hu.crossVectors(uu,Ho);let a=this.direction.dot(hu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(Ho.crossVectors(Ji,Ho));if(l<0)return null;const c=o*this.direction.dot(uu.cross(Ji));if(c<0||l+c>a)return null;const u=-o*Ji.dot(hu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,r,s,a,o,l,c,u,h,f,d,m,_,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,d,m,_,g)}set(e,t,n,r,s,a,o,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,CM)}lookAt(e,t,n){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ki.crossVectors(n,xn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ki.crossVectors(n,xn)),Ki.normalize(),Wo.crossVectors(xn,Ki),r[0]=Ki.x,r[4]=Wo.x,r[8]=xn.x,r[1]=Ki.y,r[5]=Wo.y,r[9]=xn.y,r[2]=Ki.z,r[6]=Wo.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],b=n[15],E=r[0],w=r[4],P=r[8],N=r[12],M=r[1],T=r[5],z=r[9],W=r[13],L=r[2],O=r[6],B=r[10],J=r[14],H=r[3],Z=r[7],Q=r[11],re=r[15];return s[0]=a*E+o*M+l*L+c*H,s[4]=a*w+o*T+l*O+c*Z,s[8]=a*P+o*z+l*B+c*Q,s[12]=a*N+o*W+l*J+c*re,s[1]=u*E+h*M+f*L+d*H,s[5]=u*w+h*T+f*O+d*Z,s[9]=u*P+h*z+f*B+d*Q,s[13]=u*N+h*W+f*J+d*re,s[2]=m*E+_*M+g*L+p*H,s[6]=m*w+_*T+g*O+p*Z,s[10]=m*P+_*z+g*B+p*Q,s[14]=m*N+_*W+g*J+p*re,s[3]=x*E+v*M+y*L+b*H,s[7]=x*w+v*T+y*O+b*Z,s[11]=x*P+v*z+y*B+b*Q,s[15]=x*N+v*W+y*J+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+g*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*f*c+_*l*d-o*g*d-h*l*p+o*f*p,v=m*f*c-u*g*c-m*l*d+a*g*d+u*l*p-a*f*p,y=u*_*c-m*h*c+m*o*d-a*_*d-u*o*p+a*h*p,b=m*h*l-u*_*l-m*o*f+a*_*f+u*o*g-a*h*g,E=t*x+n*v+r*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(_*f*s-h*g*s-_*r*d+n*g*d+h*r*p-n*f*p)*w,e[2]=(o*g*s-_*l*s+_*r*c-n*g*c-o*r*p+n*l*p)*w,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*w,e[4]=v*w,e[5]=(u*g*s-m*f*s+m*r*d-t*g*d-u*r*p+t*f*p)*w,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*w,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*w,e[8]=y*w,e[9]=(m*h*s-u*_*s-m*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*w,e[12]=b*w,e[13]=(u*_*r-m*h*r+m*n*f-t*_*f-u*n*g+t*h*g)*w,e[14]=(m*o*r-a*_*r-m*n*l+t*_*l+a*n*g-t*o*g)*w,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,m=s*h,_=a*u,g=a*h,p=o*h,x=l*c,v=l*u,y=l*h,b=n.x,E=n.y,w=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+y)*b,r[2]=(m-v)*b,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(f+p))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(m+v)*w,r[9]=(g-x)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const a=_s.set(r[4],r[5],r[6]).length(),o=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/a,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,m;if(o===mi)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===ro)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mi){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*c,d=(n+r)*u;let m,_;if(o===mi)m=(a+s)*h,_=-2*h;else if(o===ro)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new C,Wn=new Le,TM=new C(0,0,0),CM=new C(1,1,1),Ki=new C,Wo=new C,xn=new C,Pd=new Le,Ld=new gn;class Pn{constructor(e=0,t=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const Id=new C,vs=new gn,Ri=new Le,Xo=new C,wa=new C,PM=new C,LM=new gn,Dd=new C(1,0,0),Ud=new C(0,1,0),Nd=new C(0,0,1),IM={type:"added"},DM={type:"removed"},fu={type:"childadded",child:null},du={type:"childremoved",child:null};class st extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new C,t=new Pn,n=new gn,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new ze}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Nd,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(wa,Xo,this.up):Ri.lookAt(Xo,wa,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ri),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IM),fu.child=e,this.dispatchEvent(fu),fu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DM),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,LM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DEFAULT_UP=new C(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new C,Pi=new C,pu=new C,Li=new C,xs=new C,ys=new C,Od=new C,mu=new C,gu=new C,_u=new C;class wn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),Pi.subVectors(n,t),pu.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(Pi),l=Xn.dot(pu),c=Pi.dot(Pi),u=Pi.dot(pu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,m=(a*u-o*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Pi.subVectors(e,t),Xn.cross(Pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Xn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,n),ys.subVectors(s,n),mu.subVectors(e,n);const l=xs.dot(mu),c=ys.dot(mu);if(l<=0&&c<=0)return t.copy(n);gu.subVectors(e,r);const u=xs.dot(gu),h=ys.dot(gu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);_u.subVectors(e,s);const d=xs.dot(_u),m=ys.dot(_u);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ys,o);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Od.subVectors(s,r),o=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Od,o);const p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},qo={h:0,s:0,l:0};function vu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=yf(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vu(a,s,e+1/3),this.g=vu(a,s,e),this.b=vu(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const n=E_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=ru(e.r),this.g=ru(e.g),this.b=ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return ot.fromWorkingColorSpace(Zt.copy(this),e),Math.round(wt(Zt.r*255,0,255))*65536+Math.round(wt(Zt.g*255,0,255))*256+Math.round(wt(Zt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=On){ot.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(qo);const n=Ba(ji.h,qo.h,t),r=Ba(ji.s,qo.s,t),s=Ba(ji.l,qo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new _e;_e.NAMES=E_;let UM=0;class en extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Kr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Zl&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ni=NM();function NM(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function hn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=wt(i,-65504,65504),Ni.floatView[0]=i;const e=Ni.uint32View[0],t=e>>23&511;return Ni.baseTable[t]+((e&8388607)>>Ni.shiftTable[t])}function Na(i){const e=i>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[e]+(i&1023)]+Ni.exponentTable[e],Ni.floatView[0]}const OM={toHalfFloat:hn,fromHalfFloat:Na},It=new C,Yo=new K;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return S_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class FM extends ht{constructor(e,t,n){super(new Int8Array(e),t,n)}}class BM extends ht{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class zM extends ht{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class kM extends ht{constructor(e,t,n){super(new Int16Array(e),t,n)}}class bf extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class VM extends ht{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ef extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class GM extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Na(this.array[e*this.itemSize]);return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize]=hn(t),this}getY(e){let t=Na(this.array[e*this.itemSize+1]);return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+1]=hn(t),this}getZ(e){let t=Na(this.array[e*this.itemSize+2]);return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+2]=hn(t),this}getW(e){let t=Na(this.array[e*this.itemSize+3]);return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+3]=hn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array)),this.array[e+0]=hn(t),this.array[e+1]=hn(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[e+0]=hn(t),this.array[e+1]=hn(n),this.array[e+2]=hn(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[e+0]=hn(t),this.array[e+1]=hn(n),this.array[e+2]=hn(r),this.array[e+3]=hn(s),this}}class Se extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let HM=0;const Un=new Le,xu=new st,Ms=new C,yn=new ln,Aa=new ln,kt=new C;class Xe extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?Ef:bf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,Aa.min),yn.expandByPoint(kt),kt.addVectors(yn.max,Aa.max),yn.expandByPoint(kt)):(yn.expandByPoint(Aa.min),yn.expandByPoint(Aa.max))}yn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),kt.add(Ms)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,u=new C,h=new C,f=new K,d=new K,m=new K,_=new C,g=new C;function p(P,N,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(T),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(T),o[P].add(_),o[N].add(_),o[M].add(_),l[P].add(g),l[N].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,N=x.length;P<N;++P){const M=x[P],T=M.start,z=M.count;for(let W=T,L=T+z;W<L;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new C,y=new C,b=new C,E=new C;function w(P){b.fromBufferAttribute(r,P),E.copy(b);const N=o[P];v.copy(N),v.sub(b.multiplyScalar(b.dot(N))).normalize(),y.crossVectors(E,N);const T=y.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,T)}for(let P=0,N=x.length;P<N;++P){const M=x[P],T=M.start,z=M.count;for(let W=T,L=T+z;W<L;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xe,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new Le,Er=new pa,$o=new Qt,Bd=new C,Ss=new C,bs=new C,Es=new C,yu=new C,Zo=new C,Jo=new K,Ko=new K,jo=new K,zd=new C,kd=new C,Vd=new C,Qo=new C,el=new C;class Nt extends st{constructor(e=new Xe,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(yu.fromBufferAttribute(h,e),a?Zo.addScaledVector(yu,u):Zo.addScaledVector(yu.sub(t),u))}t.add(Zo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!($o.containsPoint(Er.origin)===!1&&(Er.intersectSphere($o,Bd)===null||Er.origin.distanceToSquared(Bd)>(e.far-e.near)**2))&&(Fd.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,b=v;y<b;y+=3){const E=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);r=tl(this,p,e,n,c,u,h,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);r=tl(this,a,e,n,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,b=v;y<b;y+=3){const E=y,w=y+1,P=y+2;r=tl(this,p,e,n,c,u,h,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,y=g+2;r=tl(this,a,e,n,c,u,h,x,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function WM(i,e,t,n,r,s,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Gi,o),l===null)return null;el.copy(o),el.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:i}}function tl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ss),i.getVertexPosition(l,bs),i.getVertexPosition(c,Es);const u=WM(i,e,t,n,Ss,bs,Es,Qo);if(u){r&&(Jo.fromBufferAttribute(r,o),Ko.fromBufferAttribute(r,l),jo.fromBufferAttribute(r,c),u.uv=wn.getInterpolation(Qo,Ss,bs,Es,Jo,Ko,jo,new K)),s&&(Jo.fromBufferAttribute(s,o),Ko.fromBufferAttribute(s,l),jo.fromBufferAttribute(s,c),u.uv1=wn.getInterpolation(Qo,Ss,bs,Es,Jo,Ko,jo,new K)),a&&(zd.fromBufferAttribute(a,o),kd.fromBufferAttribute(a,l),Vd.fromBufferAttribute(a,c),u.normal=wn.getInterpolation(Qo,Ss,bs,Es,zd,kd,Vd,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};wn.getNormal(Ss,bs,Es,h.normal),u.face=h}return u}class ls extends Xe{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function m(_,g,p,x,v,y,b,E,w,P,N){const M=y/w,T=b/P,z=y/2,W=b/2,L=E/2,O=w+1,B=P+1;let J=0,H=0;const Z=new C;for(let Q=0;Q<B;Q++){const re=Q*T-W;for(let ge=0;ge<O;ge++){const Ne=ge*M-z;Z[_]=Ne*x,Z[g]=re*v,Z[p]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(ge/w),h.push(1-Q/P),J+=1}}for(let Q=0;Q<P;Q++)for(let re=0;re<w;re++){const ge=f+re+O*Q,Ne=f+re+O*(Q+1),X=f+(re+1)+O*(Q+1),ne=f+(re+1)+O*Q;l.push(ge,Ne,ne),l.push(Ne,X,ne),H+=6}o.addGroup(d,H,N),d+=H,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=ca(i[t]);for(const r in n)e[r]=n[r]}return e}function XM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function w_(i){return i.getRenderTarget()===null?i.outputColorSpace:ot.workingColorSpace}const A_={clone:ca,merge:rn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mc extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new C,Gd=new K,Hd=new K;class Vt extends mc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Hd),t.subVectors(Hd,Gd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,As=1;class T_ extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(ws,As,e,t);r.layers=this.layers,this.add(r);const s=new Vt(ws,As,e,t);s.layers=this.layers,this.add(s);const a=new Vt(ws,As,e,t);a.layers=this.layers,this.add(a);const o=new Vt(ws,As,e,t);o.layers=this.layers,this.add(o);const l=new Vt(ws,As,e,t);l.layers=this.layers,this.add(l);const c=new Vt(ws,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class To extends At{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new To(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ls(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Bi});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Mt),new T_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Mu=new C,$M=new C,ZM=new ze;class nr{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Mu.subVectors(n,t).cross($M.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ZM.getNormalMatrix(e),r=this.coplanarPoint(Mu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Qt,nl=new C;class Co{constructor(e=new nr,t=new nr,n=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],m=r[9],_=r[10],g=r[11],p=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,g-d,y-p).normalize(),n[1].setComponents(l+s,f+c,g+d,y+p).normalize(),n[2].setComponents(l+a,f+u,g+m,y+x).normalize(),n[3].setComponents(l-a,f-u,g-m,y-x).normalize(),n[4].setComponents(l-o,f-h,g-_,y-v).normalize(),t===mi)n[5].setComponents(l+o,f+h,g+_,y+v).normalize();else if(t===ro)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R_(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function JM(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=h.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,m=u.updateRanges;if(i.bindBuffer(h,c),d.count===-1&&m.length===0&&i.bufferSubData(h,0,f),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];t?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ma extends Xe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*f-a;for(let v=0;v<c;v++){const y=v*h-s;m.push(y,-x,0),_.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,y=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;d.push(v,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iS=`#ifdef USE_AOMAP
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
#endif`,rS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sS=`#ifdef USE_BATCHING
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
#endif`,aS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,oS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uS=`#ifdef USE_IRIDESCENCE
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
#endif`,hS=`#ifdef USE_BUMPMAP
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
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yS=`#define PI 3.141592653589793
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
} // validated`,MS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SS=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`
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
}`,RS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
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
}`,zS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
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
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
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
#endif`,JS=`struct PhysicalMaterial {
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
}`,KS=`
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
#endif`,jS=`#if defined( RE_IndirectDiffuse )
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ob=`#if defined( USE_POINTS_UV )
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
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
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
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ob=`float getShadowMask() {
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
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
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
}`,rE=`#if DEPTH_PACKING == 3200
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
}`,sE=`#define DISTANCE
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
}`,aE=`#define DISTANCE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
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
}`,uE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,fE=`uniform vec3 diffuse;
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
}`,dE=`#define LAMBERT
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define MATCAP
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
}`,gE=`#define MATCAP
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
}`,_E=`#define NORMAL
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
}`,vE=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,yE=`#define PHONG
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
}`,ME=`#define STANDARD
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
}`,SE=`#define STANDARD
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
}`,bE=`#define TOON
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
}`,EE=`#define TOON
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
}`,wE=`uniform float size;
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
}`,AE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,CE=`uniform vec3 color;
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
}`,RE=`uniform float rotation;
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
}`,PE=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:KM,alphahash_pars_fragment:jM,alphamap_fragment:QM,alphamap_pars_fragment:eS,alphatest_fragment:tS,alphatest_pars_fragment:nS,aomap_fragment:iS,aomap_pars_fragment:rS,batching_pars_vertex:sS,batching_vertex:aS,begin_vertex:oS,beginnormal_vertex:lS,bsdfs:cS,iridescence_fragment:uS,bumpmap_pars_fragment:hS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:pS,clipping_planes_vertex:mS,color_fragment:gS,color_pars_fragment:_S,color_pars_vertex:vS,color_vertex:xS,common:yS,cube_uv_reflection_fragment:MS,defaultnormal_vertex:SS,displacementmap_pars_vertex:bS,displacementmap_vertex:ES,emissivemap_fragment:wS,emissivemap_pars_fragment:AS,colorspace_fragment:TS,colorspace_pars_fragment:CS,envmap_fragment:RS,envmap_common_pars_fragment:PS,envmap_pars_fragment:LS,envmap_pars_vertex:IS,envmap_physical_pars_fragment:WS,envmap_vertex:DS,fog_vertex:US,fog_pars_vertex:NS,fog_fragment:OS,fog_pars_fragment:FS,gradientmap_pars_fragment:BS,lightmap_fragment:zS,lightmap_pars_fragment:kS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:GS,lights_pars_begin:HS,lights_toon_fragment:XS,lights_toon_pars_fragment:qS,lights_phong_fragment:YS,lights_phong_pars_fragment:$S,lights_physical_fragment:ZS,lights_physical_pars_fragment:JS,lights_fragment_begin:KS,lights_fragment_maps:jS,lights_fragment_end:QS,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:rb,map_pars_fragment:sb,map_particle_fragment:ab,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:hb,morphnormal_vertex:fb,morphtarget_pars_vertex:db,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:xb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Eb,opaque_fragment:wb,packing:Ab,premultiplied_alpha_fragment:Tb,project_vertex:Cb,dithering_fragment:Rb,dithering_pars_fragment:Pb,roughnessmap_fragment:Lb,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ob,skinbase_vertex:Fb,skinning_pars_vertex:Bb,skinning_vertex:zb,skinnormal_vertex:kb,specularmap_fragment:Vb,specularmap_pars_fragment:Gb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Wb,transmission_fragment:Xb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:$b,uv_vertex:Zb,worldpos_vertex:Jb,background_vert:Kb,background_frag:jb,backgroundCube_vert:Qb,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:aE,equirect_vert:oE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:hE,meshbasic_frag:fE,meshlambert_vert:dE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:_E,meshnormal_frag:vE,meshphong_vert:xE,meshphong_frag:yE,meshphysical_vert:ME,meshphysical_frag:SE,meshtoon_vert:bE,meshtoon_frag:EE,points_vert:wE,points_frag:AE,shadow_vert:TE,shadow_frag:CE,sprite_vert:RE,sprite_frag:PE},he={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:rn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:rn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:rn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new _e(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:rn([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:rn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:rn([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:rn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:rn([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:rn([he.common,he.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:rn([he.lights,he.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const il={r:0,b:0,g:0},Ar=new Pn,LE=new Le;function IE(i,e,t,n,r,s,a){const o=new _e(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===da)?(u===void 0&&(u=new Nt(new ls(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ca(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(p.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(Ar)),u.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nt(new ma(2,2),new ni({name:"BackgroundMaterial",uniforms:ca(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(il,w_(i)),n.buffers.color.setClear(il.r,il.g,il.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(o,l)},render:m}}function DE(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let c=l,u=!1;function h(L,O,B,J,H){let Z=!1;if(a){const Q=_(J,B,O);c!==Q&&(c=Q,d(c.object)),Z=p(L,J,B,H),Z&&x(L,J,B,H)}else{const Q=O.wireframe===!0;(c.geometry!==J.id||c.program!==B.id||c.wireframe!==Q)&&(c.geometry=J.id,c.program=B.id,c.wireframe=Q,Z=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,P(L,O,B,J),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,O,B){const J=B.wireframe===!0;let H=o[L.id];H===void 0&&(H={},o[L.id]=H);let Z=H[O.id];Z===void 0&&(Z={},H[O.id]=Z);let Q=Z[J];return Q===void 0&&(Q=g(f()),Z[J]=Q),Q}function g(L){const O=[],B=[],J=[];for(let H=0;H<r;H++)O[H]=0,B[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:J,object:L,attributes:{},index:null}}function p(L,O,B,J){const H=c.attributes,Z=O.attributes;let Q=0;const re=B.getAttributes();for(const ge in re)if(re[ge].location>=0){const X=H[ge];let ne=Z[ge];if(ne===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),X===void 0||X.attribute!==ne||ne&&X.data!==ne.data)return!0;Q++}return c.attributesNum!==Q||c.index!==J}function x(L,O,B,J){const H={},Z=O.attributes;let Q=0;const re=B.getAttributes();for(const ge in re)if(re[ge].location>=0){let X=Z[ge];X===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));const ne={};ne.attribute=X,X&&X.data&&(ne.data=X.data),H[ge]=ne,Q++}c.attributes=H,c.attributesNum=Q,c.index=J}function v(){const L=c.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function y(L){b(L,0)}function b(L,O){const B=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;B[L]=1,J[L]===0&&(i.enableVertexAttribArray(L),J[L]=1),H[L]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),H[L]=O)}function E(){const L=c.newAttributes,O=c.enabledAttributes;for(let B=0,J=O.length;B<J;B++)O[B]!==L[B]&&(i.disableVertexAttribArray(B),O[B]=0)}function w(L,O,B,J,H,Z,Q){Q===!0?i.vertexAttribIPointer(L,O,B,H,Z):i.vertexAttribPointer(L,O,B,J,H,Z)}function P(L,O,B,J){if(n.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=J.attributes,Z=B.getAttributes(),Q=O.defaultAttributeValues;for(const re in Z){const ge=Z[re];if(ge.location>=0){let Ne=H[re];if(Ne===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Ne=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Ne=L.instanceColor)),Ne!==void 0){const X=Ne.normalized,ne=Ne.itemSize,ve=t.get(Ne);if(ve===void 0)continue;const Ce=ve.buffer,Ee=ve.type,Me=ve.bytesPerElement,qe=n.isWebGL2===!0&&(Ee===i.INT||Ee===i.UNSIGNED_INT||Ne.gpuType===uf);if(Ne.isInterleavedBufferAttribute){const Re=Ne.data,I=Re.stride,le=Ne.offset;if(Re.isInstancedInterleavedBuffer){for(let $=0;$<ge.locationSize;$++)b(ge.location+$,Re.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let $=0;$<ge.locationSize;$++)y(ge.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let $=0;$<ge.locationSize;$++)w(ge.location+$,ne/ge.locationSize,Ee,X,I*Me,(le+ne/ge.locationSize*$)*Me,qe)}else{if(Ne.isInstancedBufferAttribute){for(let Re=0;Re<ge.locationSize;Re++)b(ge.location+Re,Ne.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Re=0;Re<ge.locationSize;Re++)y(ge.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Re=0;Re<ge.locationSize;Re++)w(ge.location+Re,ne/ge.locationSize,Ee,X,ne*Me,ne/ge.locationSize*Re*Me,qe)}}else if(Q!==void 0){const X=Q[re];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(ge.location,X);break;case 3:i.vertexAttrib3fv(ge.location,X);break;case 4:i.vertexAttrib4fv(ge.location,X);break;default:i.vertexAttrib1fv(ge.location,X)}}}}E()}function N(){z();for(const L in o){const O=o[L];for(const B in O){const J=O[B];for(const H in J)m(J[H].object),delete J[H];delete O[B]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const B in O){const J=O[B];for(const H in J)m(J[H].object),delete J[H];delete O[B]}delete o[L.id]}function T(L){for(const O in o){const B=o[O];if(B[L.id]===void 0)continue;const J=B[L.id];for(const H in J)m(J[H].object),delete J[H];delete B[L.id]}}function z(){W(),u=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:W,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function UE(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(u[m],h[m]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];t.update(m,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function NE(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=a||e.has("OES_texture_float"),b=v&&y,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:E}}function OE(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new nr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=u(m,f,v,d);for(let b=0;b!==v;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function FE(i){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=Hi:o===$a&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===$a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new C_(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class gc extends mc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,Wd=[.125,.215,.35,.446,.526,.582],Fr=20,Su=new gc,Xd=new _e;let bu=null,Eu=0,wu=0;const Nr=(1+Math.sqrt(5))/2,Ts=1/Nr,qd=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Nr,Ts),new C(0,Nr,-Ts),new C(Ts,0,Nr),new C(-Ts,0,Nr),new C(Nr,Ts,0),new C(-Nr,Ts,0)];class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Eu,wu),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:oa,format:mn,colorSpace:Xi,depthBuffer:!1},r=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BE(s)),this._blurMaterial=zE(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Su)}_sceneToCubeUV(e,t,n,r){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xd),u.toneMapping=zi,u.autoClear=!1;const d=new _r({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new Nt(new ls,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Xd),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;rl(r,x*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hi||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Su)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qd[(r-1)%qd.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fr-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Fr;g>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const p=[];let x=0;for(let w=0;w<Fr;++w){const P=w/_,N=Math.exp(-P*P/2);p.push(N),w===0?x+=N:w<g&&(x+=2*N)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const y=this._sizeLods[r],b=3*y*(r>v-zs?r-v+zs:0),E=4*(this._cubeSize-y);rl(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Su)}}function BE(i){const e=[],t=[],n=[];let r=i;const s=i-zs+1+Wd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-zs?l=Wd[a-i+zs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,P=E>2?0:-1,N=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(N,_*m*E),v.set(f,g*m*E);const M=[E,E,E,E,E,E];y.set(M,p*m*E)}const b=new Xe;b.setAttribute("position",new ht(x,_)),b.setAttribute("uv",new ht(v,g)),b.setAttribute("faceIndex",new ht(y,p)),e.push(b),r>zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yd(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zE(i,e,t){const n=new Float32Array(Fr),r=new C(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function $d(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Zd(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function kE(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===$a,u=l===Hi||l===hr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Vh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Vh(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function VE(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function GE(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],E=x[v+1],w=x[v+2];f.push(b,E,E,w,w,b)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,E=v+1,w=v+2;f.push(b,E,E,w,w,b)}}else return;const g=new(y_(f)?Ef:bf)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function HE(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function h(d,m,_){if(_===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,o,d*l,_),t.update(m,s,_)}function f(d,m,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,o,d,0,_);let p=0;for(let x=0;x<_;x++)p+=m[x];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function WE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function XE(i,e){return i[0]-e[0]}function qE(i,e){return Math.abs(e[1])-Math.abs(i[1])}function YE(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let W=function(){T.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var d=W;g!==void 0&&g.texture.dispose();const p=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let w=0;p===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let P=u.attributes.position.count*w,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const M=new Float32Array(P*N*4*_),T=new dc(M,P,N,_);T.type=En,T.needsUpdate=!0;const z=w*4;for(let L=0;L<_;L++){const O=y[L],B=b[L],J=E[L],H=P*N*4*L;for(let Z=0;Z<O.count;Z++){const Q=Z*z;p===!0&&(a.fromBufferAttribute(O,Z),M[H+Q+0]=a.x,M[H+Q+1]=a.y,M[H+Q+2]=a.z,M[H+Q+3]=0),x===!0&&(a.fromBufferAttribute(B,Z),M[H+Q+4]=a.x,M[H+Q+5]=a.y,M[H+Q+6]=a.z,M[H+Q+7]=0),v===!0&&(a.fromBufferAttribute(J,Z),M[H+Q+8]=a.x,M[H+Q+9]=a.y,M[H+Q+10]=a.z,M[H+Q+11]=J.itemSize===4?a.w:1)}}g={count:_,texture:T,size:new K(P,N)},s.set(u,g),u.addEventListener("dispose",W)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let p=0;for(let v=0;v<f.length;v++)p+=f[v];const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==m){_=[];for(let y=0;y<m;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<m;y++){const b=_[y];b[0]=y,b[1]=f[y]}_.sort(qE);for(let y=0;y<8;y++)y<m&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(XE);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=o[y],E=b[0],w=b[1];E!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+y)!==g[E]&&u.setAttribute("morphTarget"+y,g[E]),p&&u.getAttribute("morphNormal"+y)!==p[E]&&u.setAttribute("morphNormal"+y,p[E]),r[y]=w,x+=w):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function $E(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Af extends At{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:cr,u!==cr&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=Oi),n===void 0&&u===rs&&(n=lr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const P_=new At,L_=new Af(1,1);L_.compareFunction=xf;const I_=new dc,D_=new Sf,U_=new To,Jd=[],Kd=[],jd=new Float32Array(16),Qd=new Float32Array(9),ep=new Float32Array(4);function ga(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jd[r];if(s===void 0&&(s=new Float32Array(r),Jd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _c(i,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ZE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function JE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function KE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function jE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function QE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;ep.set(n),i.uniformMatrix2fv(this.addr,!1,ep),Bt(t,n)}}function ew(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Qd.set(n),i.uniformMatrix3fv(this.addr,!1,Qd),Bt(t,n)}}function tw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;jd.set(n),i.uniformMatrix4fv(this.addr,!1,jd),Bt(t,n)}}function nw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function uw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?L_:P_;t.setTexture2D(e||s,r)}function hw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||D_,r)}function fw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||U_,r)}function dw(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||I_,r)}function pw(i){switch(i){case 5126:return ZE;case 35664:return JE;case 35665:return KE;case 35666:return jE;case 35674:return QE;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return dw}}function mw(i,e){i.uniform1fv(this.addr,e)}function gw(i,e){const t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function _w(i,e){const t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function vw(i,e){const t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function xw(i,e){const t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yw(i,e){const t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mw(i,e){const t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sw(i,e){i.uniform1iv(this.addr,e)}function bw(i,e){i.uniform2iv(this.addr,e)}function Ew(i,e){i.uniform3iv(this.addr,e)}function ww(i,e){i.uniform4iv(this.addr,e)}function Aw(i,e){i.uniform1uiv(this.addr,e)}function Tw(i,e){i.uniform2uiv(this.addr,e)}function Cw(i,e){i.uniform3uiv(this.addr,e)}function Rw(i,e){i.uniform4uiv(this.addr,e)}function Pw(i,e,t){const n=this.cache,r=e.length,s=_c(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||P_,s[a])}function Lw(i,e,t){const n=this.cache,r=e.length,s=_c(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||D_,s[a])}function Iw(i,e,t){const n=this.cache,r=e.length,s=_c(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||U_,s[a])}function Dw(i,e,t){const n=this.cache,r=e.length,s=_c(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||I_,s[a])}function Uw(i){switch(i){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return xw;case 35675:return yw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return bw;case 35668:case 35672:return Ew;case 35669:case 35673:return ww;case 5125:return Aw;case 36294:return Tw;case 36295:return Cw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Dw}}class Nw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pw(t.type)}}class Ow{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uw(t.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function tp(i,e){i.seq.push(e),i.map[e.id]=e}function Bw(i,e,t){const n=i.name,r=n.length;for(Au.lastIndex=0;;){const s=Au.exec(n),a=Au.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tp(t,c===void 0?new Nw(o,i,e):new Ow(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Fw(o),tp(t,h)),t=h}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Bw(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function np(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zw=37297;let kw=0;function Vw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gw(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===no&&t===to?n="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(n="LinearSRGBToLinearDisplayP3"),i){case Xi:case Ao:return[n,"LinearTransferOETF"];case On:case fc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ip(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vw(i.getShaderSource(e),a)}else return r}function Hw(i,e){const t=Gw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ww(i,e){let t;switch(e){case Yg:t="Linear";break;case $g:t="Reinhard";break;case Zg:t="OptimizedCineon";break;case cf:t="ACESFilmic";break;case Kg:t="AgX";break;case jg:t="Neutral";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function qw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Yw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $w(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ks(i){return i!==""}function rp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(i){return i.replace(Zw,Kw)}const Jw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kw(i,e){let t=He[e];if(t===void 0){const n=Jw.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(i){return i.replace(jw,Qw)}function Qw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function op(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function tA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case hr:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function iA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Xg:e="ENVMAP_BLENDING_MIX";break;case qg:e="ENVMAP_BLENDING_ADD";break}return e}function rA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sA(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=eA(t),c=tA(t),u=nA(t),h=iA(t),f=rA(t),d=t.isWebGL2?"":Xw(t),m=qw(t),_=Yw(s),g=r.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),x.length>0&&(x+=`
`)):(p=[op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),x=[d,op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?He.tonemapping_pars_fragment:"",t.toneMapping!==zi?Ww("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Hw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Gh(a),a=rp(a,t),a=sp(a,t),o=Gh(o),o=rp(o,t),o=sp(o,t),a=ap(a),o=ap(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+a,b=v+x+o,E=np(r,r.VERTEX_SHADER,y),w=np(r,r.FRAGMENT_SHADER,b);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(z){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(E).trim(),O=r.getShaderInfoLog(w).trim();let B=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,w);else{const H=ip(r,E,"vertex"),Z=ip(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+H+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||O==="")&&(J=!1);J&&(z.diagnostics={runnable:B,programLog:W,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:x}})}r.deleteShader(E),r.deleteShader(w),N=new zl(r,g),M=$w(r,g)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,zw)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let aA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lA(e),t.set(e,n)),n}}class lA{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}}function cA(i,e,t,n,r,s,a){const o=new pc,l=new oA,c=new Set,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,T,z,W,L){const O=W.fog,B=L.geometry,J=M.isMeshStandardMaterial?W.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),Z=H&&H.mapping===da?H.image.height:null,Q=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=re!==void 0?re.length:0;let Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let X,ne,ve,Ce;if(Q){const pt=Zn[Q];X=pt.vertexShader,ne=pt.fragmentShader}else X=M.vertexShader,ne=M.fragmentShader,l.update(M),ve=l.getVertexShaderID(M),Ce=l.getFragmentShaderID(M);const Ee=i.getRenderTarget(),Me=L.isInstancedMesh===!0,qe=L.isBatchedMesh===!0,Re=!!M.map,I=!!M.matcap,le=!!H,$=!!M.aoMap,ae=!!M.lightMap,j=!!M.bumpMap,ye=!!M.normalMap,me=!!M.displacementMap,be=!!M.emissiveMap,Ze=!!M.metalnessMap,R=!!M.roughnessMap,S=M.anisotropy>0,q=M.clearcoat>0,Y=M.iridescence>0,ie=M.sheen>0,ee=M.transmission>0,Oe=S&&!!M.anisotropyMap,Ie=q&&!!M.clearcoatMap,ue=q&&!!M.clearcoatNormalMap,fe=q&&!!M.clearcoatRoughnessMap,Fe=Y&&!!M.iridescenceMap,oe=Y&&!!M.iridescenceThicknessMap,Lt=ie&&!!M.sheenColorMap,Je=ie&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,we=!!M.specularColorMap,Ae=!!M.specularIntensityMap,et=ee&&!!M.transmissionMap,Ve=ee&&!!M.thicknessMap,vt=!!M.gradientMap,D=!!M.alphaMap,de=M.alphaTest>0,k=!!M.alphaHash,ce=!!M.extensions;let pe=zi;M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(pe=i.toneMapping);const je={isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ne,defines:M.defines,customVertexShaderID:ve,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:qe,instancing:Me,instancingColor:Me&&L.instanceColor!==null,instancingMorph:Me&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Xi,alphaToCoverage:!!M.alphaToCoverage,map:Re,matcap:I,envMap:le,envMapMode:le&&H.mapping,envMapCubeUVHeight:Z,aoMap:$,lightMap:ae,bumpMap:j,normalMap:ye,displacementMap:d&&me,emissiveMap:be,normalMapObjectSpace:ye&&M.normalMapType===f_,normalMapTangentSpace:ye&&M.normalMapType===gr,metalnessMap:Ze,roughnessMap:R,anisotropy:S,anisotropyMap:Oe,clearcoat:q,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,iridescence:Y,iridescenceMap:Fe,iridescenceThicknessMap:oe,sheen:ie,sheenColorMap:Lt,sheenRoughnessMap:Je,specularMap:Pe,specularColorMap:we,specularIntensityMap:Ae,transmission:ee,transmissionMap:et,thicknessMap:Ve,gradientMap:vt,opaque:M.transparent===!1&&M.blending===Kr&&M.alphaToCoverage===!1,alphaMap:D,alphaTest:de,alphaHash:k,combine:M.combine,mapUv:Re&&g(M.map.channel),aoMapUv:$&&g(M.aoMap.channel),lightMapUv:ae&&g(M.lightMap.channel),bumpMapUv:j&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:me&&g(M.displacementMap.channel),emissiveMapUv:be&&g(M.emissiveMap.channel),metalnessMapUv:Ze&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:Oe&&g(M.anisotropyMap.channel),clearcoatMapUv:Ie&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Je&&g(M.sheenRoughnessMap.channel),specularMapUv:Pe&&g(M.specularMap.channel),specularColorMapUv:we&&g(M.specularColorMap.channel),specularIntensityMapUv:Ae&&g(M.specularIntensityMap.channel),transmissionMapUv:et&&g(M.transmissionMap.channel),thicknessMapUv:Ve&&g(M.thicknessMap.channel),alphaMapUv:D&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Re||D),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===di,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function x(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(v(T,M),y(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),M.push(o.mask)}function b(M){const T=_[M.type];let z;if(T){const W=Zn[T];z=A_.clone(W.uniforms)}else z=M.uniforms;return z}function E(M,T){let z;for(let W=0,L=u.length;W<L;W++){const O=u[W];if(O.cacheKey===T){z=O,++z.usedTimes;break}}return z===void 0&&(z=new sA(i,T,M,s),u.push(z)),z}function w(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:b,acquireProgram:E,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:N}}function uA(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function hA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,m,_,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,f,d,m,_,g){const p=a(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,m,_,g){const p=a(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||hA),n.length>1&&n.sort(f||lp),r.length>1&&r.sort(f||lp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function fA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new cp,i.set(n,[a])):r>=s.length?(a=new cp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new _e};break;case"SpotLight":t={position:new C,direction:new C,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function pA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mA=0;function gA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _A(i,e){const t=new dA,n=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,a=new Le,o=new Le;function l(u,h){let f=0,d=0,m=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,y=0,b=0,E=0,w=0,P=0,N=0;u.sort(gA);const M=h===!0?Math.PI:1;for(let z=0,W=u.length;z<W;z++){const L=u[z],O=L.color,B=L.intensity,J=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*B*M,d+=O.g*B*M,m+=O.b*B*M;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(L.sh.coefficients[Z],B);N++}else if(L.isDirectionalLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Q=L.shadow,re=n.get(L);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,r.directionalShadow[_]=re,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=Z,_++}else if(L.isSpotLight){const Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(B*M),Z.distance=J,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,r.spot[p]=Z;const Q=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[p]=Q.matrix,L.castShadow){const re=n.get(L);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,r.spotShadow[p]=re,r.spotShadowMap[p]=H,E++}p++}else if(L.isRectAreaLight){const Z=t.get(L);Z.color.copy(O).multiplyScalar(B),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=Z,x++}else if(L.isPointLight){const Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*M),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const Q=L.shadow,re=n.get(L);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,r.pointShadow[g]=re,r.pointShadowMap[g]=H,r.pointShadowMatrix[g]=L.shadow.matrix,b++}r.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(B*M),Z.groundColor.copy(L.groundColor).multiplyScalar(B*M),r.hemi[v]=Z,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=m;const T=r.hash;(T.directionalLength!==_||T.pointLength!==g||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==E||T.numSpotMaps!==w||T.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=E+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=N,T.directionalLength=_,T.pointLength=g,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=E,T.numSpotMaps=w,T.numLightProbes=N,r.version=mA++)}function c(u,h){let f=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(y.isSpotLight){const b=r.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const b=r.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function up(i,e){const t=new _A(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vA(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new up(i,e),t.set(s,[l])):a>=o.length?(l=new up(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tf extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cf extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
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
}`;function MA(i,e,t){let n=new Co;const r=new K,s=new K,a=new lt,o=new Tf({depthPacking:h_}),l=new Cf,c={},u=t.maxTextureSize,h={[Gi]:on,[on]:Gi,[di]:di},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Xe;m.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let p=this.type;this.render=function(E,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const N=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=p!==oi&&this.type===oi,L=p===oi&&this.type!==oi;for(let O=0,B=E.length;O<B;O++){const J=E[O],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,H.mapSize.y=s.y)),H.map===null||W===!0||L===!0){const re=this.type!==oi?{minFilter:Pt,magFilter:Pt}:{};H.map!==null&&H.map.dispose(),H.map=new ti(r.x,r.y,re),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Q=H.getViewportCount();for(let re=0;re<Q;re++){const ge=H.getViewport(re);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(a),H.updateMatrices(J,re),n=H.getFrustum(),y(w,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===oi&&x(H,P),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(N,M,T)};function x(E,w){const P=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,P,d,_,null)}function v(E,w,P,N){let M=null;const T=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)M=T;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=M.uuid,W=w.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let O=L[W];O===void 0&&(O=M.clone(),L[W]=O,w.addEventListener("dispose",b)),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,N===oi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function y(E,w,P,N,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const W=e.update(E),L=E.material;if(Array.isArray(L)){const O=W.groups;for(let B=0,J=O.length;B<J;B++){const H=O[B],Z=L[H.materialIndex];if(Z&&Z.visible){const Q=v(E,Z,N,M);E.onBeforeShadow(i,E,w,P,W,Q,H),i.renderBufferDirect(P,null,W,Q,E,H),E.onAfterShadow(i,E,w,P,W,Q,H)}}}else if(L.visible){const O=v(E,L,N,M);E.onBeforeShadow(i,E,w,P,W,O,null),i.renderBufferDirect(P,null,W,O,E,null),E.onAfterShadow(i,E,w,P,W,O,null)}}const z=E.children;for(let W=0,L=z.length;W<L;W++)y(z[W],w,P,N,M)}function b(E){E.target.removeEventListener("dispose",b);for(const P in c){const N=c[P],M=E.target.uuid;M in N&&(N[M].dispose(),delete N[M])}}}function SA(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const de=new lt;let k=null;const ce=new lt(0,0,0,0);return{setMask:function(pe){k!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),k=pe)},setLocked:function(pe){D=pe},setClear:function(pe,je,pt,Wt,In){In===!0&&(pe*=Wt,je*=Wt,pt*=Wt),de.set(pe,je,pt,Wt),ce.equals(de)===!1&&(i.clearColor(pe,je,pt,Wt),ce.copy(de))},reset:function(){D=!1,k=null,ce.set(-1,0,0,0)}}}function s(){let D=!1,de=null,k=null,ce=null;return{setTest:function(pe){pe?Me(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(pe){de!==pe&&!D&&(i.depthMask(pe),de=pe)},setFunc:function(pe){if(k!==pe){switch(pe){case Bg:i.depthFunc(i.NEVER);break;case zg:i.depthFunc(i.ALWAYS);break;case kg:i.depthFunc(i.LESS);break;case qa:i.depthFunc(i.LEQUAL);break;case Vg:i.depthFunc(i.EQUAL);break;case Gg:i.depthFunc(i.GEQUAL);break;case Hg:i.depthFunc(i.GREATER);break;case Wg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ce!==pe&&(i.clearDepth(pe),ce=pe)},reset:function(){D=!1,de=null,k=null,ce=null}}}function a(){let D=!1,de=null,k=null,ce=null,pe=null,je=null,pt=null,Wt=null,In=null;return{setTest:function(mt){D||(mt?Me(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(mt){de!==mt&&!D&&(i.stencilMask(mt),de=mt)},setFunc:function(mt,tn,ai){(k!==mt||ce!==tn||pe!==ai)&&(i.stencilFunc(mt,tn,ai),k=mt,ce=tn,pe=ai)},setOp:function(mt,tn,ai){(je!==mt||pt!==tn||Wt!==ai)&&(i.stencilOp(mt,tn,ai),je=mt,pt=tn,Wt=ai)},setLocked:function(mt){D=mt},setClear:function(mt){In!==mt&&(i.clearStencil(mt),In=mt)},reset:function(){D=!1,de=null,k=null,ce=null,pe=null,je=null,pt=null,Wt=null,In=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,b=null,E=null,w=null,P=null,N=new _e(0,0,0),M=0,T=!1,z=null,W=null,L=null,O=null,B=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=Z>=1):Q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=Z>=2);let re=null,ge={};const Ne=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),ne=new lt().fromArray(Ne),ve=new lt().fromArray(X);function Ce(D,de,k,ce){const pe=new Uint8Array(4),je=i.createTexture();i.bindTexture(D,je),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<k;pt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(de,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(de+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return je}const Ee={};Ee[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ee[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(i.DEPTH_TEST),l.setFunc(qa),me(!1),be(ah),Me(i.CULL_FACE),j(Bi);function Me(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function qe(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Re(D,de){return d[D]!==de?(i.bindFramebuffer(D,de),d[D]=de,n&&(D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de)),!0):!1}function I(D,de){let k=_,ce=!1;if(D){k=m.get(de),k===void 0&&(k=[],m.set(de,k));const pe=D.textures;if(k.length!==pe.length||k[0]!==i.COLOR_ATTACHMENT0){for(let je=0,pt=pe.length;je<pt;je++)k[je]=i.COLOR_ATTACHMENT0+je;k.length=pe.length,ce=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ce=!0);if(ce)if(t.isWebGL2)i.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function le(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const $={[ir]:i.FUNC_ADD,[bg]:i.FUNC_SUBTRACT,[Eg]:i.FUNC_REVERSE_SUBTRACT};if(n)$[uh]=i.MIN,$[hh]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&($[uh]=D.MIN_EXT,$[hh]=D.MAX_EXT)}const ae={[wg]:i.ZERO,[Ag]:i.ONE,[Tg]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[Dg]:i.SRC_ALPHA_SATURATE,[Lg]:i.DST_COLOR,[Rg]:i.DST_ALPHA,[Cg]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Ig]:i.ONE_MINUS_DST_COLOR,[Pg]:i.ONE_MINUS_DST_ALPHA,[Ug]:i.CONSTANT_COLOR,[Ng]:i.ONE_MINUS_CONSTANT_COLOR,[Og]:i.CONSTANT_ALPHA,[Fg]:i.ONE_MINUS_CONSTANT_ALPHA};function j(D,de,k,ce,pe,je,pt,Wt,In,mt){if(D===Bi){p===!0&&(qe(i.BLEND),p=!1);return}if(p===!1&&(Me(i.BLEND),p=!0),D!==Sg){if(D!==x||mt!==T){if((v!==ir||E!==ir)&&(i.blendEquation(i.FUNC_ADD),v=ir,E=ir),mt)switch(D){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,w=null,P=null,N.set(0,0,0),M=0,x=D,T=mt}return}pe=pe||de,je=je||k,pt=pt||ce,(de!==v||pe!==E)&&(i.blendEquationSeparate($[de],$[pe]),v=de,E=pe),(k!==y||ce!==b||je!==w||pt!==P)&&(i.blendFuncSeparate(ae[k],ae[ce],ae[je],ae[pt]),y=k,b=ce,w=je,P=pt),(Wt.equals(N)===!1||In!==M)&&(i.blendColor(Wt.r,Wt.g,Wt.b,In),N.copy(Wt),M=In),x=D,T=!1}function ye(D,de){D.side===di?qe(i.CULL_FACE):Me(i.CULL_FACE);let k=D.side===on;de&&(k=!k),me(k),D.blending===Kr&&D.transparent===!1?j(Bi):j(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(D){z!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),z=D)}function be(D){D!==yg?(Me(i.CULL_FACE),D!==W&&(D===ah?i.cullFace(i.BACK):D===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),W=D}function Ze(D){D!==L&&(H&&i.lineWidth(D),L=D)}function R(D,de,k){D?(Me(i.POLYGON_OFFSET_FILL),(O!==de||B!==k)&&(i.polygonOffset(de,k),O=de,B=k)):qe(i.POLYGON_OFFSET_FILL)}function S(D){D?Me(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function q(D){D===void 0&&(D=i.TEXTURE0+J-1),re!==D&&(i.activeTexture(D),re=D)}function Y(D,de,k){k===void 0&&(re===null?k=i.TEXTURE0+J-1:k=re);let ce=ge[k];ce===void 0&&(ce={type:void 0,texture:void 0},ge[k]=ce),(ce.type!==D||ce.texture!==de)&&(re!==k&&(i.activeTexture(k),re=k),i.bindTexture(D,de||Ee[D]),ce.type=D,ce.texture=de)}function ie(){const D=ge[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function Ae(D){ve.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function et(D,de){let k=h.get(de);k===void 0&&(k=new WeakMap,h.set(de,k));let ce=k.get(D);ce===void 0&&(ce=i.getUniformBlockIndex(de,D.name),k.set(D,ce))}function Ve(D,de){const ce=h.get(de).get(D);u.get(de)!==ce&&(i.uniformBlockBinding(de,ce,D.__bindingPointIndex),u.set(de,ce))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},re=null,ge={},d={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,b=null,E=null,w=null,P=null,N=new _e(0,0,0),M=0,T=!1,z=null,W=null,L=null,O=null,B=null,ne.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:qe,bindFramebuffer:Re,drawBuffers:I,useProgram:le,setBlending:j,setMaterial:ye,setFlipSided:me,setCullFace:be,setLineWidth:Ze,setPolygonOffset:R,setScissorTest:S,activeTexture:q,bindTexture:Y,unbindTexture:ie,compressedTexImage2D:ee,compressedTexImage3D:Oe,texImage2D:Je,texImage3D:Pe,updateUBOMapping:et,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:Lt,texSubImage2D:Ie,texSubImage3D:ue,compressedTexSubImage2D:fe,compressedTexSubImage3D:Fe,scissor:we,viewport:Ae,reset:vt}}function bA(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new K,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return m?new OffscreenCanvas(R,S):so("canvas")}function g(R,S,q,Y){let ie=1;const ee=Ze(R);if((ee.width>Y||ee.height>Y)&&(ie=Y/Math.max(ee.width,ee.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Oe=S?jl:Math.floor,Ie=Oe(ie*ee.width),ue=Oe(ie*ee.height);f===void 0&&(f=_(Ie,ue));const fe=q?_(Ie,ue):f;return fe.width=Ie,fe.height=ue,fe.getContext("2d").drawImage(R,0,0,Ie,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ie+"x"+ue+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){const S=Ze(R);return kh(S.width)&&kh(S.height)}function x(R){return o?!1:R.wrapS!==Kt||R.wrapT!==Kt||R.minFilter!==Pt&&R.minFilter!==Mt}function v(R,S){return R.generateMipmaps&&S&&R.minFilter!==Pt&&R.minFilter!==Mt}function y(R){i.generateMipmap(R)}function b(R,S,q,Y,ie=!1){if(o===!1)return S;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=S;if(S===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),S===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),S===i.RGBA){const Oe=ie?eo:ot.getTransfer(Y);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=Oe===gt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,S,q){return v(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Pt&&R.minFilter!==Mt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){return R===Pt||R===Jl||R===Or?i.NEAREST:i.LINEAR}function P(R){const S=R.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&h.delete(S)}function N(R){const S=R.target;S.removeEventListener("dispose",N),z(S)}function M(R){const S=n.get(R);if(S.__webglInit===void 0)return;const q=R.source,Y=d.get(q);if(Y){const ie=Y[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(R),Object.keys(Y).length===0&&d.delete(q)}n.remove(R)}function T(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const q=R.source,Y=d.get(q);delete Y[S.__cacheKey],a.memory.textures--}function z(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ie=0;ie<S.__webglFramebuffer[Y].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[Y][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=R.textures;for(let Y=0,ie=q.length;Y<ie;Y++){const ee=n.get(q[Y]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(q[Y])}n.remove(R)}let W=0;function L(){W=0}function O(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function J(R,S){const q=n.get(R);if(R.isVideoTexture&&me(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(q,R,S);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function H(R,S){const q=n.get(R);if(R.version>0&&q.__version!==R.version){ve(q,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function Z(R,S){const q=n.get(R);if(R.version>0&&q.__version!==R.version){ve(q,R,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function Q(R,S){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Ce(q,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const re={[Za]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},ge={[Pt]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},Ne={[d_]:i.NEVER,[x_]:i.ALWAYS,[p_]:i.LESS,[xf]:i.LEQUAL,[m_]:i.EQUAL,[v_]:i.GEQUAL,[g_]:i.GREATER,[__]:i.NOTEQUAL};function X(R,S,q){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Mt||S.magFilter===Fa||S.magFilter===Or||S.magFilter===pi||S.minFilter===Mt||S.minFilter===Fa||S.minFilter===Or||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(i.texParameteri(R,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ge[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ge[S.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Kt||S.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,w(S.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Pt&&S.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pt||S.minFilter!==Or&&S.minFilter!==pi||S.type===En&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===oa&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(R,S){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));const Y=S.source;let ie=d.get(Y);ie===void 0&&(ie={},d.set(Y,ie));const ee=B(S);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[ee].usedTimes++;const Oe=ie[R.__cacheKey];Oe!==void 0&&(ie[R.__cacheKey].usedTimes--,Oe.usedTimes===0&&T(S)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return q}function ve(R,S,q){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const ie=ne(R,S),ee=S.source;t.bindTexture(Y,R.__webglTexture,i.TEXTURE0+q);const Oe=n.get(ee);if(ee.version!==Oe.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);const Ie=ot.getPrimaries(ot.workingColorSpace),ue=S.colorSpace===Ui?null:ot.getPrimaries(S.colorSpace),fe=S.colorSpace===Ui||Ie===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Fe=x(S)&&p(S.image)===!1;let oe=g(S.image,Fe,!1,r.maxTextureSize);oe=be(S,oe);const Lt=p(oe)||o,Je=s.convert(S.format,S.colorSpace);let Pe=s.convert(S.type),we=b(S.internalFormat,Je,Pe,S.colorSpace,S.isVideoTexture);X(Y,S,Lt);let Ae;const et=S.mipmaps,Ve=o&&S.isVideoTexture!==!0&&we!==_f,vt=Oe.__version===void 0||ie===!0,D=ee.dataReady,de=E(S,oe,Lt);if(S.isDepthTexture)we=i.DEPTH_COMPONENT,o?S.type===En?we=i.DEPTH_COMPONENT32F:S.type===Oi?we=i.DEPTH_COMPONENT24:S.type===lr?we=i.DEPTH24_STENCIL8:we=i.DEPTH_COMPONENT16:S.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===cr&&we===i.DEPTH_COMPONENT&&S.type!==uc&&S.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Oi,Pe=s.convert(S.type)),S.format===rs&&we===i.DEPTH_COMPONENT&&(we=i.DEPTH_STENCIL,S.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=lr,Pe=s.convert(S.type))),vt&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Je,Pe,null));else if(S.isDataTexture)if(et.length>0&&Lt){Ve&&vt&&t.texStorage2D(i.TEXTURE_2D,de,we,et[0].width,et[0].height);for(let k=0,ce=et.length;k<ce;k++)Ae=et[k],Ve?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Ae.width,Ae.height,Je,Pe,Ae.data):t.texImage2D(i.TEXTURE_2D,k,we,Ae.width,Ae.height,0,Je,Pe,Ae.data);S.generateMipmaps=!1}else Ve?(vt&&t.texStorage2D(i.TEXTURE_2D,de,we,oe.width,oe.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Je,Pe,oe.data)):t.texImage2D(i.TEXTURE_2D,0,we,oe.width,oe.height,0,Je,Pe,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,we,et[0].width,et[0].height,oe.depth);for(let k=0,ce=et.length;k<ce;k++)Ae=et[k],S.format!==mn?Je!==null?Ve?D&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Ae.width,Ae.height,oe.depth,Je,Ae.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,we,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Ae.width,Ae.height,oe.depth,Je,Pe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,we,Ae.width,Ae.height,oe.depth,0,Je,Pe,Ae.data)}else{Ve&&vt&&t.texStorage2D(i.TEXTURE_2D,de,we,et[0].width,et[0].height);for(let k=0,ce=et.length;k<ce;k++)Ae=et[k],S.format!==mn?Je!==null?Ve?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Ae.width,Ae.height,Je,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,k,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Ae.width,Ae.height,Je,Pe,Ae.data):t.texImage2D(i.TEXTURE_2D,k,we,Ae.width,Ae.height,0,Je,Pe,Ae.data)}else if(S.isDataArrayTexture)Ve?(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,we,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Je,Pe,oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,Je,Pe,oe.data);else if(S.isData3DTexture)Ve?(vt&&t.texStorage3D(i.TEXTURE_3D,de,we,oe.width,oe.height,oe.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Je,Pe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,Je,Pe,oe.data);else if(S.isFramebufferTexture){if(vt)if(Ve)t.texStorage2D(i.TEXTURE_2D,de,we,oe.width,oe.height);else{let k=oe.width,ce=oe.height;for(let pe=0;pe<de;pe++)t.texImage2D(i.TEXTURE_2D,pe,we,k,ce,0,Je,Pe,null),k>>=1,ce>>=1}}else if(et.length>0&&Lt){if(Ve&&vt){const k=Ze(et[0]);t.texStorage2D(i.TEXTURE_2D,de,we,k.width,k.height)}for(let k=0,ce=et.length;k<ce;k++)Ae=et[k],Ve?D&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Je,Pe,Ae):t.texImage2D(i.TEXTURE_2D,k,we,Je,Pe,Ae);S.generateMipmaps=!1}else if(Ve){if(vt){const k=Ze(oe);t.texStorage2D(i.TEXTURE_2D,de,we,k.width,k.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,Pe,oe)}else t.texImage2D(i.TEXTURE_2D,0,we,Je,Pe,oe);v(S,Lt)&&y(Y),Oe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ce(R,S,q){if(S.image.length!==6)return;const Y=ne(R,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const ee=n.get(ie);if(ie.version!==ee.__version||Y===!0){t.activeTexture(i.TEXTURE0+q);const Oe=ot.getPrimaries(ot.workingColorSpace),Ie=S.colorSpace===Ui?null:ot.getPrimaries(S.colorSpace),ue=S.colorSpace===Ui||Oe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const fe=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!fe&&!Fe?oe[k]=g(S.image[k],!1,!0,r.maxCubemapSize):oe[k]=Fe?S.image[k].image:S.image[k],oe[k]=be(S,oe[k]);const Lt=oe[0],Je=p(Lt)||o,Pe=s.convert(S.format,S.colorSpace),we=s.convert(S.type),Ae=b(S.internalFormat,Pe,we,S.colorSpace),et=o&&S.isVideoTexture!==!0,Ve=ee.__version===void 0||Y===!0,vt=ie.dataReady;let D=E(S,Lt,Je);X(i.TEXTURE_CUBE_MAP,S,Je);let de;if(fe){et&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ae,Lt.width,Lt.height);for(let k=0;k<6;k++){de=oe[k].mipmaps;for(let ce=0;ce<de.length;ce++){const pe=de[ce];S.format!==mn?Pe!==null?et?vt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce,0,0,pe.width,pe.height,Pe,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?vt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce,0,0,pe.width,pe.height,Pe,we,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce,Ae,pe.width,pe.height,0,Pe,we,pe.data)}}}else{if(de=S.mipmaps,et&&Ve){de.length>0&&D++;const k=Ze(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Ae,k.width,k.height)}for(let k=0;k<6;k++)if(Fe){et?vt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,Pe,we,oe[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ae,oe[k].width,oe[k].height,0,Pe,we,oe[k].data);for(let ce=0;ce<de.length;ce++){const je=de[ce].image[k].image;et?vt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce+1,0,0,je.width,je.height,Pe,we,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce+1,Ae,je.width,je.height,0,Pe,we,je.data)}}else{et?vt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Pe,we,oe[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ae,Pe,we,oe[k]);for(let ce=0;ce<de.length;ce++){const pe=de[ce];et?vt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce+1,0,0,Pe,we,pe.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce+1,Ae,Pe,we,pe.image[k])}}}v(S,Je)&&y(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ee(R,S,q,Y,ie,ee){const Oe=s.convert(q.format,q.colorSpace),Ie=s.convert(q.type),ue=b(q.internalFormat,Oe,Ie,q.colorSpace);if(!n.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>ee),oe=Math.max(1,S.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,ue,Fe,oe,S.depth,0,Oe,Ie,null):t.texImage2D(ie,ee,ue,Fe,oe,0,Oe,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ie,n.get(q).__webglTexture,0,j(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ie,n.get(q).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(R,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let Y=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||ye(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===En?Y=i.DEPTH_COMPONENT32F:ie.type===Oi&&(Y=i.DEPTH_COMPONENT24));const ee=j(S);ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Y,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Y,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const Y=j(S);q&&ye(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,S.width,S.height):ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const Y=S.textures;for(let ie=0;ie<Y.length;ie++){const ee=Y[ie],Oe=s.convert(ee.format,ee.colorSpace),Ie=s.convert(ee.type),ue=b(ee.internalFormat,Oe,Ie,ee.colorSpace),fe=j(S);q&&ye(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ue,S.width,S.height):ye(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);const Y=n.get(S.depthTexture).__webglTexture,ie=j(S);if(S.depthTexture.format===cr)ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(S.depthTexture.format===rs)ye(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Re(R){const S=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,R)}else if(q){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[Y],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(R,S,q){const Y=n.get(R);S!==void 0&&Ee(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Re(R)}function le(R){const S=R.texture,q=n.get(R),Y=n.get(S);R.addEventListener("dispose",N);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Oe=ie.length>1,Ie=p(R)||o;if(Oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,a.memory.textures++),ee){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let fe=0;fe<S.mipmaps.length;fe++)q.__webglFramebuffer[ue][fe]=i.createFramebuffer()}else q.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)q.__webglFramebuffer[ue]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Oe)if(r.drawBuffers)for(let ue=0,fe=ie.length;ue<fe;ue++){const Fe=n.get(ie[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ye(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<ie.length;ue++){const fe=ie[ue];q.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Fe=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),Lt=b(fe.internalFormat,Fe,oe,fe.colorSpace,R.isXRRenderTarget===!0),Je=j(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),X(i.TEXTURE_CUBE_MAP,S,Ie);for(let ue=0;ue<6;ue++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Ee(q.__webglFramebuffer[ue][fe],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Ee(q.__webglFramebuffer[ue],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(S,Ie)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ue=0,fe=ie.length;ue<fe;ue++){const Fe=ie[ue],oe=n.get(Fe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),X(i.TEXTURE_2D,Fe,Ie),Ee(q.__webglFramebuffer,R,Fe,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),v(Fe,Ie)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,Y.__webglTexture),X(ue,S,Ie),o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Ee(q.__webglFramebuffer[fe],R,S,i.COLOR_ATTACHMENT0,ue,fe);else Ee(q.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ue,0);v(S,Ie)&&y(ue),t.unbindTexture()}R.depthBuffer&&Re(R)}function $(R){const S=p(R)||o,q=R.textures;for(let Y=0,ie=q.length;Y<ie;Y++){const ee=q[Y];if(v(ee,S)){const Oe=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ee).__webglTexture;t.bindTexture(Oe,Ie),y(Oe),t.unbindTexture()}}}function ae(R){if(o&&R.samples>0&&ye(R)===!1){const S=R.textures,q=R.width,Y=R.height;let ie=i.COLOR_BUFFER_BIT;const ee=[],Oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),ue=S.length>1;if(ue)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){ee.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&ee.push(Oe);const Fe=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(Fe===!1&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[fe]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Oe])),ue){const oe=n.get(S[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,q,Y,0,0,q,Y,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[fe]);const Fe=n.get(S[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function j(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const S=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function be(R,S){const q=R.colorSpace,Y=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Kl||q!==Xi&&q!==Ui&&(ot.getTransfer(q)===gt?o===!1?e.has("EXT_sRGB")===!0&&Y===mn?(R.format=Kl,R.minFilter=Mt,R.generateMipmaps=!1):S=Mf.sRGBToLinear(S):(Y!==mn||ie!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=I,this.setupRenderTarget=le,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ye}function N_(i,e,t){const n=t.isWebGL2;function r(s,a=Ui){let o;const l=ot.getTransfer(a);if(s===ki)return i.UNSIGNED_BYTE;if(s===hf)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ff)return i.UNSIGNED_SHORT_5_5_5_1;if(s===e_)return i.BYTE;if(s===t_)return i.SHORT;if(s===uc)return i.UNSIGNED_SHORT;if(s===uf)return i.INT;if(s===Oi)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===oa)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===n_)return i.ALPHA;if(s===mn)return i.RGBA;if(s===i_)return i.LUMINANCE;if(s===r_)return i.LUMINANCE_ALPHA;if(s===cr)return i.DEPTH_COMPONENT;if(s===rs)return i.DEPTH_STENCIL;if(s===Kl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===df)return i.RED;if(s===pf)return i.RED_INTEGER;if(s===s_)return i.RG;if(s===mf)return i.RG_INTEGER;if(s===gf)return i.RGBA_INTEGER;if(s===Dl||s===Ul||s===Nl||s===Ol)if(l===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Dl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Dl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ul)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ol)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dh||s===ph||s===mh||s===gh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ph)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_f)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_h||s===vh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_h)return l===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xh||s===yh||s===Mh||s===Sh||s===bh||s===Eh||s===wh||s===Ah||s===Th||s===Ch||s===Rh||s===Ph||s===Lh||s===Ih)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Th)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ch)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ph)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fl||s===Dh||s===Uh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fl)return l===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===a_||s===Nh||s===Oh||s===Fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Oh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class O_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EA={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AA=`
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

}`;class TA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new At,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new ni({extensions:{fragDepth:!0},vertexShader:wA,fragmentShader:AA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nt(new ma(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class CA extends qi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=new TA,g=t.getContextAttributes();let p=null,x=null;const v=[],y=[],b=new K;let E=null;const w=new Vt;w.layers.enable(1),w.viewport=new lt;const P=new Vt;P.layers.enable(2),P.viewport=new lt;const N=[w,P],M=new O_;M.layers.enable(1),M.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new Tu,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new Tu,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new Tu,v[X]=ne),ne.getHandSpace()};function W(X){const ne=y.indexOf(X.inputSource);if(ne===-1)return;const ve=v[ne];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||a),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let X=0;X<v.length;X++){const ne=y[X];ne!==null&&(y[X]=null,v[X].disconnect(ne))}T=null,z=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,x=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ti(d.framebufferWidth,d.framebufferHeight,{format:mn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,ve=null,Ce=null;g.depth&&(Ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?rs:cr,ve=g.stencil?lr:Oi);const Ee={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ti(f.textureWidth,f.textureHeight,{format:mn,type:ki,depthTexture:new Af(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(x);Me.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(X){for(let ne=0;ne<X.removed.length;ne++){const ve=X.removed[ne],Ce=y.indexOf(ve);Ce>=0&&(y[Ce]=null,v[Ce].disconnect(ve))}for(let ne=0;ne<X.added.length;ne++){const ve=X.added[ne];let Ce=y.indexOf(ve);if(Ce===-1){for(let Me=0;Me<v.length;Me++)if(Me>=y.length){y.push(ve),Ce=Me;break}else if(y[Me]===null){y[Me]=ve,Ce=Me;break}if(Ce===-1)break}const Ee=v[Ce];Ee&&Ee.connect(ve)}}const B=new C,J=new C;function H(X,ne,ve){B.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const Ce=B.distanceTo(J),Ee=ne.projectionMatrix.elements,Me=ve.projectionMatrix.elements,qe=Ee[14]/(Ee[10]-1),Re=Ee[14]/(Ee[10]+1),I=(Ee[9]+1)/Ee[5],le=(Ee[9]-1)/Ee[5],$=(Ee[8]-1)/Ee[0],ae=(Me[8]+1)/Me[0],j=qe*$,ye=qe*ae,me=Ce/(-$+ae),be=me*-$;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const Ze=qe+me,R=Re+me,S=j-be,q=ye+(Ce-be),Y=I*Re/R*Ze,ie=le*Re/R*Ze;X.projectionMatrix.makePerspective(S,q,Y,ie,Ze,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Z(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),M.near=P.near=w.near=X.near,M.far=P.far=w.far=X.far,(T!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,z=M.far,w.near=T,w.far=z,P.near=T,P.far=z,w.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,ve=M.cameras;Z(M,ne);for(let Ce=0;Ce<ve.length;Ce++)Z(ve[Ce],ne);ve.length===2?H(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),Q(X,M,ne)};function Q(X,ne,ve){ve===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=la*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function ge(X,ne){if(u=ne.getViewerPose(c||a),m=ne,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ce=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,Ce=!0);for(let Me=0;Me<ve.length;Me++){const qe=ve[Me];let Re=null;if(d!==null)Re=d.getViewport(qe);else{const le=h.getViewSubImage(f,qe);Re=le.viewport,Me===0&&(e.setRenderTargetTextures(x,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(x))}let I=N[Me];I===void 0&&(I=new Vt,I.layers.enable(Me),I.viewport=new lt,N[Me]=I),I.matrix.fromArray(qe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(qe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Re.x,Re.y,Re.width,Re.height),Me===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ce===!0&&M.cameras.push(I)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Me=h.getDepthInformation(ve[0]);Me&&Me.isValid&&Me.texture&&_.init(e,Me,r.renderState)}}for(let ve=0;ve<v.length;ve++){const Ce=y[ve],Ee=v[ve];Ce!==null&&Ee!==void 0&&Ee.update(Ce,ne,c||a)}_.render(e,M),re&&re(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Ne=new R_;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}const Tr=new Pn,RA=new Le;function PA(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,w_(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;if(v&&(g.envMap.value=v,Tr.copy(y),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Tr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function LA(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(m(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(x,b);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const v=h();x.__bindingPointIndex=v;const y=i.createBuffer(),b=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let N=0,M=P.length;N<M;N++){const T=P[N];if(d(T,E,N,b)===!0){const z=T.__offset,W=Array.isArray(T.value)?T.value:[T.value];let L=0;for(let O=0;O<W.length;O++){const B=W[O],J=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+L,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,y,b){const E=x.value,w=v+"_"+y;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const P=b[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return b[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(x){const v=x.uniforms;let y=0;const b=16;for(let w=0,P=v.length;w<P;w++){const N=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,T=N.length;M<T;M++){const z=N[M],W=Array.isArray(z.value)?z.value:[z.value];for(let L=0,O=W.length;L<O;L++){const B=W[L],J=_(B),H=y%b;H!==0&&b-H<J.boundary&&(y+=b-H),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=J.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Rf{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const v=this;let y=!1,b=0,E=0,w=null,P=-1,N=null;const M=new lt,T=new lt;let z=null;const W=new _e(0);let L=0,O=t.width,B=t.height,J=1,H=null,Z=null;const Q=new lt(0,0,O,B),re=new lt(0,0,O,B);let ge=!1;const Ne=new Co;let X=!1,ne=!1,ve=null;const Ce=new Le,Ee=new K,Me=new C,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return w===null?J:1}let I=n;function le(A,U){for(let V=0;V<A.length;V++){const G=A[V],F=t.getContext(G,U);if(F!==null)return F}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=le(U,A),I===null)throw le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,ae,j,ye,me,be,Ze,R,S,q,Y,ie,ee,Oe,Ie,ue,fe,Fe,oe,Lt,Je,Pe,we,Ae;function et(){$=new VE(I),ae=new NE(I,$,e),$.init(ae),Pe=new N_(I,$,ae),j=new SA(I,$,ae),ye=new WE(I),me=new uA,be=new bA(I,$,j,me,ae,Pe,ye),Ze=new FE(v),R=new kE(v),S=new JM(I,ae),we=new DE(I,$,S,ae),q=new GE(I,S,ye,we),Y=new $E(I,q,S,ye),oe=new YE(I,ae,be),ue=new OE(me),ie=new cA(v,Ze,R,$,ae,we,ue),ee=new PA(v,me),Oe=new fA,Ie=new vA($,ae),Fe=new IE(v,Ze,R,j,Y,f,l),fe=new MA(v,Y,ae),Ae=new LA(I,ye,ae,j),Lt=new UE(I,$,ye,ae),Je=new HE(I,$,ye,ae),ye.programs=ie.programs,v.capabilities=ae,v.extensions=$,v.properties=me,v.renderLists=Oe,v.shadowMap=fe,v.state=j,v.info=ye}et();const Ve=new CA(v,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(O,B,!1))},this.getSize=function(A){return A.set(O,B)},this.setSize=function(A,U,V=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,B=U,t.width=Math.floor(A*J),t.height=Math.floor(U*J),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(O*J,B*J).floor()},this.setDrawingBufferSize=function(A,U,V){O=A,B=U,J=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,U,V,G){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,U,V,G),j.viewport(M.copy(Q).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,U,V,G){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,U,V,G),j.scissor(T.copy(re).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){j.setScissorTest(ge=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,U=!0,V=!0){let G=0;if(A){let F=!1;if(w!==null){const xe=w.texture.format;F=xe===gf||xe===mf||xe===pf}if(F){const xe=w.texture.type,Te=xe===ki||xe===Oi||xe===uc||xe===lr||xe===hf||xe===ff,De=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Ye=De.r,Be=De.g,Ge=De.b;Te?(d[0]=Ye,d[1]=Be,d[2]=Ge,d[3]=Ue,I.clearBufferuiv(I.COLOR,0,d)):(m[0]=Ye,m[1]=Be,m[2]=Ge,m[3]=Ue,I.clearBufferiv(I.COLOR,0,m))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Oe.dispose(),Ie.dispose(),me.dispose(),Ze.dispose(),R.dispose(),Y.dispose(),we.dispose(),Ae.dispose(),ie.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",In),Ve.removeEventListener("sessionend",mt),ve&&(ve.dispose(),ve=null),tn.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ye.autoReset,U=fe.enabled,V=fe.autoUpdate,G=fe.needsUpdate,F=fe.type;et(),ye.autoReset=A,fe.enabled=U,fe.autoUpdate=V,fe.needsUpdate=G,fe.type=F}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function k(A){const U=A.target;U.removeEventListener("dispose",k),ce(U)}function ce(A){pe(A),me.remove(A)}function pe(A){const U=me.get(A).programs;U!==void 0&&(U.forEach(function(V){ie.releaseProgram(V)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,G,F,xe){U===null&&(U=qe);const Te=F.isMesh&&F.matrixWorld.determinant()<0,De=Wv(A,U,V,G,F);j.setMaterial(G,Te);let Ue=V.index,Ye=1;if(G.wireframe===!0){if(Ue=q.getWireframeAttribute(V),Ue===void 0)return;Ye=2}const Be=V.drawRange,Ge=V.attributes.position;let Tt=Be.start*Ye,vn=(Be.start+Be.count)*Ye;xe!==null&&(Tt=Math.max(Tt,xe.start*Ye),vn=Math.min(vn,(xe.start+xe.count)*Ye)),Ue!==null?(Tt=Math.max(Tt,0),vn=Math.min(vn,Ue.count)):Ge!=null&&(Tt=Math.max(Tt,0),vn=Math.min(vn,Ge.count));const zt=vn-Tt;if(zt<0||zt===1/0)return;we.setup(F,G,De,V,Ue);let Ai,yt=Lt;if(Ue!==null&&(Ai=S.get(Ue),yt=Je,yt.setIndex(Ai)),F.isMesh)G.wireframe===!0?(j.setLineWidth(G.wireframeLinewidth*Re()),yt.setMode(I.LINES)):yt.setMode(I.TRIANGLES);else if(F.isLine){let We=G.linewidth;We===void 0&&(We=1),j.setLineWidth(We*Re()),F.isLineSegments?yt.setMode(I.LINES):F.isLineLoop?yt.setMode(I.LINE_LOOP):yt.setMode(I.LINE_STRIP)}else F.isPoints?yt.setMode(I.POINTS):F.isSprite&&yt.setMode(I.TRIANGLES);if(F.isBatchedMesh)yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)yt.renderInstances(Tt,zt,F.count);else if(V.isInstancedBufferGeometry){const We=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,kc=Math.min(V.instanceCount,We);yt.renderInstances(Tt,zt,kc)}else yt.render(Tt,zt)};function je(A,U,V){A.transparent===!0&&A.side===di&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,Uo(A,U,V),A.side=Gi,A.needsUpdate=!0,Uo(A,U,V),A.side=di):Uo(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),g=Ie.get(V),g.init(),x.push(g),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),A!==V&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(v._useLegacyLights);const G=new Set;return A.traverse(function(F){const xe=F.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const De=xe[Te];je(De,V,F),G.add(De)}else je(xe,V,F),G.add(xe)}),x.pop(),g=null,G},this.compileAsync=function(A,U,V=null){const G=this.compile(A,U,V);return new Promise(F=>{function xe(){if(G.forEach(function(Te){me.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){F(A);return}setTimeout(xe,10)}$.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let pt=null;function Wt(A){pt&&pt(A)}function In(){tn.stop()}function mt(){tn.start()}const tn=new R_;tn.setAnimationLoop(Wt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(A){pt=A,Ve.setAnimationLoop(A),A===null?tn.stop():tn.start()},Ve.addEventListener("sessionstart",In),Ve.addEventListener("sessionend",mt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(U),U=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,w),g=Ie.get(A,x.length),g.init(),x.push(g),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(Ce),ne=this.localClippingEnabled,X=ue.init(this.clippingPlanes,ne),_=Oe.get(A,p.length),_.init(),p.push(_),ai(A,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,Z),this.info.render.frame++,X===!0&&ue.beginShadows();const V=g.state.shadowsArray;if(fe.render(V,A,U),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1)&&Fe.render(_,A),g.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let F=0,xe=G.length;F<xe;F++){const Te=G[F];Kf(_,A,Te,Te.viewport)}}else Kf(_,A,U);w!==null&&(be.updateMultisampleRenderTarget(w),be.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,U),we.resetDefaultState(),P=-1,N=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ai(A,U,V,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){G&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Te=Y.update(A),De=A.material;De.visible&&_.push(A,Te,De,V,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){const Te=Y.update(A),De=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Me.copy(Te.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(De)){const Ue=Te.groups;for(let Ye=0,Be=Ue.length;Ye<Be;Ye++){const Ge=Ue[Ye],Tt=De[Ge.materialIndex];Tt&&Tt.visible&&_.push(A,Te,Tt,V,Me.z,Ge)}}else De.visible&&_.push(A,Te,De,V,Me.z,null)}}const xe=A.children;for(let Te=0,De=xe.length;Te<De;Te++)ai(xe[Te],U,V,G)}function Kf(A,U,V,G){const F=A.opaque,xe=A.transmissive,Te=A.transparent;g.setupLightsView(V),X===!0&&ue.setGlobalState(v.clippingPlanes,V),xe.length>0&&Hv(F,xe,U,V),G&&j.viewport(M.copy(G)),F.length>0&&Do(F,U,V),xe.length>0&&Do(xe,U,V),Te.length>0&&Do(Te,U,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Hv(A,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const xe=ae.isWebGL2;ve===null&&(ve=new ti(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?oa:ki,minFilter:pi,samples:xe?4:0})),v.getDrawingBufferSize(Ee),xe?ve.setSize(Ee.x,Ee.y):ve.setSize(jl(Ee.x),jl(Ee.y));const Te=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(W),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const De=v.toneMapping;v.toneMapping=zi,Do(A,V,G),be.updateMultisampleRenderTarget(ve),be.updateRenderTargetMipmap(ve);let Ue=!1;for(let Ye=0,Be=U.length;Ye<Be;Ye++){const Ge=U[Ye],Tt=Ge.object,vn=Ge.geometry,zt=Ge.material,Ai=Ge.group;if(zt.side===di&&Tt.layers.test(G.layers)){const yt=zt.side;zt.side=on,zt.needsUpdate=!0,jf(Tt,V,G,vn,zt,Ai),zt.side=yt,zt.needsUpdate=!0,Ue=!0}}Ue===!0&&(be.updateMultisampleRenderTarget(ve),be.updateRenderTargetMipmap(ve)),v.setRenderTarget(Te),v.setClearColor(W,L),v.toneMapping=De}function Do(A,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,xe=A.length;F<xe;F++){const Te=A[F],De=Te.object,Ue=Te.geometry,Ye=G===null?Te.material:G,Be=Te.group;De.layers.test(V.layers)&&jf(De,U,V,Ue,Ye,Be)}}function jf(A,U,V,G,F,xe){A.onBeforeRender(v,U,V,G,F,xe),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,U,V,G,A,xe),F.transparent===!0&&F.side===di&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,v.renderBufferDirect(V,U,G,F,A,xe),F.side=Gi,F.needsUpdate=!0,v.renderBufferDirect(V,U,G,F,A,xe),F.side=di):v.renderBufferDirect(V,U,G,F,A,xe),A.onAfterRender(v,U,V,G,F,xe)}function Uo(A,U,V){U.isScene!==!0&&(U=qe);const G=me.get(A),F=g.state.lights,xe=g.state.shadowsArray,Te=F.state.version,De=ie.getParameters(A,F.state,xe,U,V),Ue=ie.getProgramCacheKey(De);let Ye=G.programs;G.environment=A.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(A.isMeshStandardMaterial?R:Ze).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",k),Ye=new Map,G.programs=Ye);let Be=Ye.get(Ue);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===Te)return ed(A,De),Be}else De.uniforms=ie.getUniforms(A),A.onBuild(V,De,v),A.onBeforeCompile(De,v),Be=ie.acquireProgram(De,Ue),Ye.set(Ue,Be),G.uniforms=De.uniforms;const Ge=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ue.uniform),ed(A,De),G.needsLights=qv(A),G.lightsStateVersion=Te,G.needsLights&&(Ge.ambientLightColor.value=F.state.ambient,Ge.lightProbe.value=F.state.probe,Ge.directionalLights.value=F.state.directional,Ge.directionalLightShadows.value=F.state.directionalShadow,Ge.spotLights.value=F.state.spot,Ge.spotLightShadows.value=F.state.spotShadow,Ge.rectAreaLights.value=F.state.rectArea,Ge.ltc_1.value=F.state.rectAreaLTC1,Ge.ltc_2.value=F.state.rectAreaLTC2,Ge.pointLights.value=F.state.point,Ge.pointLightShadows.value=F.state.pointShadow,Ge.hemisphereLights.value=F.state.hemi,Ge.directionalShadowMap.value=F.state.directionalShadowMap,Ge.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ge.spotShadowMap.value=F.state.spotShadowMap,Ge.spotLightMatrix.value=F.state.spotLightMatrix,Ge.spotLightMap.value=F.state.spotLightMap,Ge.pointShadowMap.value=F.state.pointShadowMap,Ge.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function Qf(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function ed(A,U){const V=me.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Wv(A,U,V,G,F){U.isScene!==!0&&(U=qe),be.resetTextureUnits();const xe=U.fog,Te=G.isMeshStandardMaterial?U.environment:null,De=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xi,Ue=(G.isMeshStandardMaterial?R:Ze).get(G.envMap||Te),Ye=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ge=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,vn=!!V.morphAttributes.color;let zt=zi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=v.toneMapping);const Ai=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=Ai!==void 0?Ai.length:0,We=me.get(G),kc=g.state.lights;if(X===!0&&(ne===!0||A!==N)){const Dn=A===N&&G.id===P;ue.setState(G,A,Dn)}let xt=!1;G.version===We.__version?(We.needsLights&&We.lightsStateVersion!==kc.state.version||We.outputColorSpace!==De||F.isBatchedMesh&&We.batching===!1||!F.isBatchedMesh&&We.batching===!0||F.isInstancedMesh&&We.instancing===!1||!F.isInstancedMesh&&We.instancing===!0||F.isSkinnedMesh&&We.skinning===!1||!F.isSkinnedMesh&&We.skinning===!0||F.isInstancedMesh&&We.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&We.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&We.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&We.instancingMorph===!1&&F.morphTexture!==null||We.envMap!==Ue||G.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ue.numPlanes||We.numIntersection!==ue.numIntersection)||We.vertexAlphas!==Ye||We.vertexTangents!==Be||We.morphTargets!==Ge||We.morphNormals!==Tt||We.morphColors!==vn||We.toneMapping!==zt||ae.isWebGL2===!0&&We.morphTargetsCount!==yt)&&(xt=!0):(xt=!0,We.__version=G.version);let yr=We.currentProgram;xt===!0&&(yr=Uo(G,U,F));let td=!1,xa=!1,Vc=!1;const Yt=yr.getUniforms(),Mr=We.uniforms;if(j.useProgram(yr.program)&&(td=!0,xa=!0,Vc=!0),G.id!==P&&(P=G.id,xa=!0),td||N!==A){Yt.setValue(I,"projectionMatrix",A.projectionMatrix),Yt.setValue(I,"viewMatrix",A.matrixWorldInverse);const Dn=Yt.map.cameraPosition;Dn!==void 0&&Dn.setValue(I,Me.setFromMatrixPosition(A.matrixWorld)),ae.logarithmicDepthBuffer&&Yt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Yt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,xa=!0,Vc=!0)}if(F.isSkinnedMesh){Yt.setOptional(I,F,"bindMatrix"),Yt.setOptional(I,F,"bindMatrixInverse");const Dn=F.skeleton;Dn&&(ae.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Yt.setValue(I,"boneTexture",Dn.boneTexture,be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Yt.setOptional(I,F,"batchingTexture"),Yt.setValue(I,"batchingTexture",F._matricesTexture,be));const Gc=V.morphAttributes;if((Gc.position!==void 0||Gc.normal!==void 0||Gc.color!==void 0&&ae.isWebGL2===!0)&&oe.update(F,V,yr),(xa||We.receiveShadow!==F.receiveShadow)&&(We.receiveShadow=F.receiveShadow,Yt.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mr.envMap.value=Ue,Mr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),xa&&(Yt.setValue(I,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Xv(Mr,Vc),xe&&G.fog===!0&&ee.refreshFogUniforms(Mr,xe),ee.refreshMaterialUniforms(Mr,G,J,B,ve),zl.upload(I,Qf(We),Mr,be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zl.upload(I,Qf(We),Mr,be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Yt.setValue(I,"center",F.center),Yt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Yt.setValue(I,"normalMatrix",F.normalMatrix),Yt.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Dn=G.uniformsGroups;for(let Hc=0,Yv=Dn.length;Hc<Yv;Hc++)if(ae.isWebGL2){const nd=Dn[Hc];Ae.update(nd,yr),Ae.bind(nd,yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yr}function Xv(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function qv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,U,V){me.get(A.texture).__webglTexture=U,me.get(A.depthTexture).__webglTexture=V;const G=me.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const V=me.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){w=A,b=U,E=V;let G=!0,F=null,xe=!1,Te=!1;if(A){const Ue=me.get(A);Ue.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Ue.__webglFramebuffer===void 0?be.setupRenderTarget(A):Ue.__hasExternalTextures&&be.rebindTextures(A,me.get(A.texture).__webglTexture,me.get(A.depthTexture).__webglTexture);const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Te=!0);const Be=me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?F=Be[U][V]:F=Be[U],xe=!0):ae.isWebGL2&&A.samples>0&&be.useMultisampledRTT(A)===!1?F=me.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[V]:F=Be,M.copy(A.viewport),T.copy(A.scissor),z=A.scissorTest}else M.copy(Q).multiplyScalar(J).floor(),T.copy(re).multiplyScalar(J).floor(),z=ge;if(j.bindFramebuffer(I.FRAMEBUFFER,F)&&ae.drawBuffers&&G&&j.drawBuffers(A,F),j.viewport(M),j.scissor(T),j.setScissorTest(z),xe){const Ue=me.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,V)}else if(Te){const Ue=me.get(A.texture),Ye=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,V||0,Ye)}P=-1},this.readRenderTargetPixels=function(A,U,V,G,F,xe,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){j.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ue=A.texture,Ye=Ue.format,Be=Ue.type;if(Ye!==mn&&Pe.convert(Ye)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===oa&&($.has("EXT_color_buffer_half_float")||ae.isWebGL2&&$.has("EXT_color_buffer_float"));if(Be!==ki&&Pe.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===En&&(ae.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&V>=0&&V<=A.height-F&&I.readPixels(U,V,G,F,Pe.convert(Ye),Pe.convert(Be),xe)}finally{const Ue=w!==null?me.get(w).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,U,V=0){const G=Math.pow(2,-V),F=Math.floor(U.image.width*G),xe=Math.floor(U.image.height*G);be.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,A.x,A.y,F,xe),j.unbindTexture()},this.copyTextureToTexture=function(A,U,V,G=0){const F=U.image.width,xe=U.image.height,Te=Pe.convert(V.format),De=Pe.convert(V.type);be.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,A.x,A.y,F,xe,Te,De,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,A.x,A.y,Te,De,U.image),G===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V,G,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=Math.round(A.max.x-A.min.x),Te=Math.round(A.max.y-A.min.y),De=A.max.z-A.min.z+1,Ue=Pe.convert(G.format),Ye=Pe.convert(G.type);let Be;if(G.isData3DTexture)be.setTexture3D(G,0),Be=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)be.setTexture2DArray(G,0),Be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Ge=I.getParameter(I.UNPACK_ROW_LENGTH),Tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vn=I.getParameter(I.UNPACK_SKIP_PIXELS),zt=I.getParameter(I.UNPACK_SKIP_ROWS),Ai=I.getParameter(I.UNPACK_SKIP_IMAGES),yt=V.isCompressedTexture?V.mipmaps[F]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,A.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,A.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Be,F,U.x,U.y,U.z,xe,Te,De,Ue,Ye,yt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,F,U.x,U.y,U.z,xe,Te,De,Ue,yt.data):I.texSubImage3D(Be,F,U.x,U.y,U.z,xe,Te,De,Ue,Ye,yt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vn),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ai),F===0&&G.generateMipmaps&&I.generateMipmap(Be),j.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){b=0,E=0,w=null,j.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ao?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class F_ extends Rf{}F_.prototype.isWebGL1Renderer=!0;class vc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new vc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Pf=class extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class yc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return S_("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new C;class ss{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lf extends en{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const Ta=new C,Rs=new C,Ps=new C,Ls=new K,Ca=new K,B_=new Le,sl=new C,Ra=new C,al=new C,hp=new K,Cu=new K,fp=new K;class z_ extends st{constructor(e=new Lf){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new Xe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yc(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new ss(n,3,0,!1)),Cs.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),B_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Ps.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;ol(sl.set(-.5,-.5,0),Ps,a,Rs,r,s),ol(Ra.set(.5,-.5,0),Ps,a,Rs,r,s),ol(al.set(.5,.5,0),Ps,a,Rs,r,s),hp.set(0,0),Cu.set(1,0),fp.set(1,1);let o=e.ray.intersectTriangle(sl,Ra,al,!1,Ta);if(o===null&&(ol(Ra.set(-.5,.5,0),Ps,a,Rs,r,s),Cu.set(0,1),o=e.ray.intersectTriangle(sl,al,Ra,!1,Ta),o===null))return;const l=e.ray.origin.distanceTo(Ta);l<e.near||l>e.far||t.push({distance:l,point:Ta.clone(),uv:wn.getInterpolation(Ta,sl,Ra,al,hp,Cu,fp,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ol(i,e,t,n,r,s){Ls.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ca.x=s*Ls.x-r*Ls.y,Ca.y=r*Ls.x+s*Ls.y):Ca.copy(Ls),i.copy(e),i.x+=Ca.x,i.y+=Ca.y,i.applyMatrix4(B_)}const ll=new C,dp=new C;class k_ extends st{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ll.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(ll);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ll.setFromMatrixPosition(e.matrixWorld),dp.setFromMatrixPosition(this.matrixWorld);const n=ll.distanceTo(dp)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const pp=new C,mp=new lt,gp=new lt,IA=new C,_p=new Le,cl=new C,Ru=new Qt,vp=new Le,Pu=new pa;class V_ extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cl),this.boundingBox.expandByPoint(cl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cl),this.boundingSphere.expandByPoint(cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ru.copy(this.boundingSphere),Ru.applyMatrix4(r),e.ray.intersectsSphere(Ru)!==!1&&(vp.copy(r).invert(),Pu.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&Pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;mp.fromBufferAttribute(r.attributes.skinIndex,e),gp.fromBufferAttribute(r.attributes.skinWeight,e),pp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=gp.getComponent(s);if(a!==0){const o=mp.getComponent(s);_p.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(IA.copy(pp).applyMatrix4(_p),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class If extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ur extends At{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Pt,u=Pt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new Le,DA=new Le;class Mc{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:DA;xp.multiplyMatrices(o,t[s]),xp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ur(t,e,e,mn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new If),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class ua extends ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new Le,yp=new Le,ul=[],Mp=new ln,UA=new Le,Pa=new Nt,La=new Qt;class G_ extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,UA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Mp.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Mp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),La.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),yp.multiplyMatrices(n,Is),Pa.matrixWorld=yp,Pa.raycast(e,ul);for(let a=0,o=ul.length;a<o;a++){const l=ul[a];l.instanceId=s,l.object=this,t.push(l)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(r*this.count),r,this.count,df,En));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function NA(i,e){return i.z-e.z}function OA(i,e){return e.z-i.z}class FA{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ds="batchId",er=new Le,Sp=new Le,BA=new Le,bp=new Le,Lu=new Co,hl=new ln,Cr=new Qt,Ia=new C,Iu=new FA,Jt=new Nt,fl=[];function zA(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}class H_ extends Nt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,r){super(new Xe,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ur(t,e,e,mn,En);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:u,normalized:h}=l,f=new c.constructor(n*u),d=new l.constructor(f,u,h);d.setUsage(l.usage),t.setAttribute(o,d)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ht(o,1))}const a=r>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ds,new ht(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ds))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ds}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Ds)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,er),this.getBoundingBoxAt(r,hl).applyMatrix4(er),t.union(hl))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,er),this.getBoundingSphereAt(r,Cr).applyMatrix4(er),t.union(Cr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const c=e.getIndex(),u=c!==null;if(u&&(n===-1?r.indexCount=c.count:r.indexCount=n,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,f=this._active,d=this._matricesTexture,m=this._matricesTexture.image.data;h.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,BA.toArray(m,_*16),d.needsUpdate=!0,a.push(r),o.push({start:u?r.indexStart:r.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new ln,sphereInitialized:!1,sphere:new Qt});const g=this.geometry.getAttribute(Ds);for(let p=0;p<r.vertexCount;p++)g.setX(r.vertexStart+p,_);return g.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(r&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){if(d===Ds)continue;const m=t.getAttribute(d),_=n.getAttribute(d);zA(m,_,l);const g=m.itemSize;for(let p=m.count,x=c;p<x;p++){const v=l+p;for(let y=0;y<g;y++)_.setComponent(v,y,0)}_.needsUpdate=!0}if(r){const d=o.indexStart;for(let m=0;m<a.count;m++)s.setX(d+m,l+a.getX(m));for(let m=a.count,_=o.indexCount;m<_;m++)s.setX(d+m,l);s.needsUpdate=!0}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=r?a.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const r=this._bounds[e],s=r.box,a=this.geometry;if(r.boxInitialized===!1){s.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let u=c.start,h=c.start+c.count;u<h;u++){let f=u;o&&(f=o.getX(f)),s.expandByPoint(Ia.fromBufferAttribute(l,f))}r.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const r=this._bounds[e],s=r.sphere,a=this.geometry;if(r.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,hl),hl.getCenter(s.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[e];let u=0;for(let h=c.start,f=c.start+c.count;h<f;h++){let d=h;o&&(d=o.getX(d)),Ia.fromBufferAttribute(l,d),u=Math.max(u,s.center.distanceToSquared(Ia))}s.radius=Math.sqrt(u),r.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,r=this._matricesTexture,s=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,r=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(r,e*16)}setVisibleAt(e,t){const n=this._visibility,r=this._active,s=this._geometryCount;return e>=s||r[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,r=this._geometryCount;return e>=r||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,r=this._active,s=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Jt.material=this.material,Jt.geometry.index=l.index,Jt.geometry.attributes=l.attributes,Jt.geometry.boundingBox===null&&(Jt.geometry.boundingBox=new ln),Jt.geometry.boundingSphere===null&&(Jt.geometry.boundingSphere=new Qt);for(let c=0;c<a;c++){if(!n[c]||!r[c])continue;const u=s[c];Jt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(c,Jt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Jt.geometry.boundingBox),this.getBoundingSphereAt(c,Jt.geometry.boundingSphere),Jt.raycast(e,fl);for(let h=0,f=fl.length;h<f;h++){const d=fl[h];d.object=this,d.batchId=c,t.push(d)}fl.length=0}Jt.material=null,Jt.geometry.index=null,Jt.geometry.attributes={},Jt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,u=this._multiDrawStarts,h=this._multiDrawCounts,f=this._drawRanges,d=this.perObjectFrustumCulled;d&&(bp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Lu.setFromProjectionMatrix(bp,e.coordinateSystem));let m=0;if(this.sortObjects){Sp.copy(this.matrixWorld).invert(),Ia.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Sp);for(let p=0,x=c.length;p<x;p++)if(c[p]&&l[p]){this.getMatrixAt(p,er),this.getBoundingSphereAt(p,Cr).applyMatrix4(er);let v=!1;if(d&&(v=!Lu.intersectsSphere(Cr)),!v){const y=Ia.distanceTo(Cr.center);Iu.push(f[p],y)}}const _=Iu.list,g=this.customSort;g===null?_.sort(s.transparent?OA:NA):g.call(this,_,n);for(let p=0,x=_.length;p<x;p++){const v=_[p];u[m]=v.start*o,h[m]=v.count,m++}Iu.reset()}else for(let _=0,g=c.length;_<g;_++)if(c[_]&&l[_]){let p=!1;if(d&&(this.getMatrixAt(_,er),this.getBoundingSphereAt(_,Cr).applyMatrix4(er),p=!Lu.intersectsSphere(Cr)),!p){const x=f[_];u[m]=x.start*o,h[m]=x.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class cn extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ep=new C,wp=new C,Ap=new Le,Du=new pa,dl=new Qt;class fr extends st{constructor(e=new Xe,t=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ep.fromBufferAttribute(t,r-1),wp.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ep.distanceTo(wp);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Ap.copy(r).invert(),Du.copy(e.ray).applyMatrix4(Ap);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,f=new C,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=d){const b=m.getX(v),E=m.getX(v+1);if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,E),Du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,y=x-1;v<y;v+=d){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Du.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Tp=new C,Cp=new C;class wi extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Tp.fromBufferAttribute(t,r),Cp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tp.distanceTo(Cp);e.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class W_ extends fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Df extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rp=new Le,Hh=new pa,pl=new Qt,ml=new C;class X_ extends st{constructor(e=new Xe,t=new Df){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;Rp.copy(r).invert(),Hh.copy(e.ray).applyMatrix4(Rp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);ml.fromBufferAttribute(h,g),Pp(ml,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=f,_=d;m<_;m++)ml.fromBufferAttribute(h,m),Pp(ml,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Pp(i,e,t,n,r,s,a){const o=Hh.distanceSqToPoint(i);if(o<t){const l=new C;Hh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class kA extends At{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Mt,this.magFilter=s!==void 0?s:Mt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class VA extends At{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Sc extends At{constructor(e,t,n,r,s,a,o,l,c,u,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class GA extends Sc{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Kt}}class HA extends Sc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Hi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class WA extends At{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new K:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,r=[],s=[],a=[],o=new C,l=new Le;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(wt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(wt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends ri{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new K){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class q_ extends bc{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const gl=new C,Uu=new Uf,Nu=new Uf,Ou=new Uf;class Y_ extends ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(gl.subVectors(r[0],r[1]).add(r[0]),c=gl);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=gl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Uu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),Nu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),Ou.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Nu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ou.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Uu.calc(l),Nu.calc(l),Ou.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lp(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function XA(i,e){const t=1-i;return t*t*e}function qA(i,e){return 2*(1-i)*i*e}function YA(i,e){return i*i*e}function za(i,e,t,n){return XA(i,e)+qA(i,t)+YA(i,n)}function $A(i,e){const t=1-i;return t*t*t*e}function ZA(i,e){const t=1-i;return 3*t*t*i*e}function JA(i,e){return 3*(1-i)*i*i*e}function KA(i,e){return i*i*i*e}function ka(i,e,t,n,r){return $A(i,e)+ZA(i,t)+JA(i,n)+KA(i,r)}class Nf extends ri{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $_ extends ri{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y),ka(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends ri{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends ri{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends ri{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(za(e,r.x,s.x,a.x),za(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends ri{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(za(e,r.x,s.x,a.x),za(e,r.y,s.y,a.y),za(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Lp(o,l.x,c.x,u.x,h.x),Lp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new K().fromArray(r))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:q_,CatmullRomCurve3:Y_,CubicBezierCurve:Nf,CubicBezierCurve3:$_,EllipseCurve:bc,LineCurve:Of,LineCurve3:Z_,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:Bf,SplineCurve:zf});class J_ extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ql[r.type]().fromJSON(r))}return this}}class ao extends J_{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Of(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Ff(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Nf(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new bc(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ro extends Xe{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=wt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new C,f=new K,d=new C,m=new C,_=new C;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=t;x++){const v=n+x*u*r,y=Math.sin(v),b=Math.cos(v);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*b,a.push(h.x,h.y,h.z),f.x=x/t,f.y=E/(e.length-1),o.push(f.x,f.y);const w=l[3*E+0]*y,P=l[3*E+1],N=l[3*E+0]*b;c.push(w,P,N)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,b=y,E=y+e.length,w=y+e.length+1,P=y+1;s.push(b,E,P),s.push(w,P,E)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.points,e.segments,e.phiStart,e.phiLength)}}class Ec extends Ro{constructor(e=1,t=1,n=4,r=8){const s=new ao;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Ec(e.radius,e.length,e.capSegments,e.radialSegments)}}class wc extends Xe{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new C,u=new K;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _a extends Xe{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function x(){const y=new C,b=new C;let E=0;const w=(t-e)/n;for(let P=0;P<=s;P++){const N=[],M=P/s,T=M*(t-e)+e;for(let z=0;z<=r;z++){const W=z/r,L=W*l+o,O=Math.sin(L),B=Math.cos(L);b.x=T*O,b.y=-M*n+g,b.z=T*B,h.push(b.x,b.y,b.z),y.set(O,w,B).normalize(),f.push(y.x,y.y,y.z),d.push(W,1-M),N.push(m++)}_.push(N)}for(let P=0;P<r;P++)for(let N=0;N<s;N++){const M=_[N][P],T=_[N+1][P],z=_[N+1][P+1],W=_[N][P+1];u.push(M,T,W),u.push(T,z,W),E+=6}c.addGroup(p,E,0),p+=E}function v(y){const b=m,E=new K,w=new C;let P=0;const N=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),m++;const T=m;for(let z=0;z<=r;z++){const L=z/r*l+o,O=Math.cos(L),B=Math.sin(L);w.x=N*B,w.y=g*M,w.z=N*O,h.push(w.x,w.y,w.z),f.push(0,M,0),E.x=O*.5+.5,E.y=B*.5*M+.5,d.push(E.x,E.y),m++}for(let z=0;z<r;z++){const W=b+z,L=T+z;y===!0?u.push(L,L+1,W):u.push(L+1,L,W),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends _a{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ac(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr extends Xe{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,y=new C,b=new C;for(let E=0;E<t.length;E+=3)d(t[E+0],v),d(t[E+1],y),d(t[E+2],b),l(v,y,b,x)}function l(x,v,y,b){const E=b+1,w=[];for(let P=0;P<=E;P++){w[P]=[];const N=x.clone().lerp(y,P/E),M=v.clone().lerp(y,P/E),T=E-P;for(let z=0;z<=T;z++)z===0&&P===E?w[P][z]=N:w[P][z]=N.clone().lerp(M,z/T)}for(let P=0;P<E;P++)for(let N=0;N<2*(E-P)-1;N++){const M=Math.floor(N/2);N%2===0?(f(w[P][M+1]),f(w[P+1][M]),f(w[P][M])):(f(w[P][M+1]),f(w[P+1][M+1]),f(w[P+1][M]))}}function c(x){const v=new C;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new C;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=g(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;a.push(y,1-b)}m(),h()}function h(){for(let x=0;x<a.length;x+=6){const v=a[x+0],y=a[x+2],b=a[x+4],E=Math.max(v,y,b),w=Math.min(v,y,b);E>.9&&w<.1&&(v<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),b<.2&&(a[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const x=new C,v=new C,y=new C,b=new C,E=new K,w=new K,P=new K;for(let N=0,M=0;N<s.length;N+=9,M+=6){x.set(s[N+0],s[N+1],s[N+2]),v.set(s[N+3],s[N+4],s[N+5]),y.set(s[N+6],s[N+7],s[N+8]),E.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),b.copy(x).add(v).add(y).divideScalar(3);const T=g(b);_(E,M+0,x,T),_(w,M+2,v,T),_(P,M+4,y,T)}}function _(x,v,y,b){b<0&&x.x===1&&(a[v]=x.x-1),y.x===0&&y.z===0&&(a[v]=b/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.vertices,e.indices,e.radius,e.details)}}class Tc extends vr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tc(e.radius,e.detail)}}const _l=new C,vl=new C,Fu=new C,xl=new wn;class K_ extends Xe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(jr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=xl;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),xl.getNormal(Fu),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=h[x],b=h[v],E=xl[u[x]],w=xl[u[v]],P=`${y}_${b}`,N=`${b}_${y}`;N in f&&f[N]?(Fu.dot(f[N].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(w.x,w.y,w.z)),f[N]=null):P in f||(f[P]={index0:c[x],index1:c[v],normal:Fu.clone()})}}for(const m in f)if(f[m]){const{index0:_,index1:g}=f[m];_l.fromBufferAttribute(o,_),vl.fromBufferAttribute(o,g),d.push(_l.x,_l.y,_l.z),d.push(vl.x,vl.y,vl.z)}this.setAttribute("position",new Se(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qr extends ao{constructor(e){super(e),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ao().fromJSON(r))}return this}}const jA={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=j_(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=iT(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let m=t;m<r;m+=t)h=i[m],f=i[m+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return oo(s,a,t,o,l,d,0),a}};function j_(i,e,t,n,r){let s,a;if(r===pT(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Ip(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ip(s,i[s],i[s+1],a);return a&&Cc(a,a.next)&&(co(a),a=a.next),a}function as(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cc(t,t.next)||bt(t.prev,t,t.next)===0)){if(co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&lT(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?eT(i,n,r,s):QA(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),co(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=tT(as(i),e,t),oo(i,e,t,n,r,s,2)):a===2&&nT(i,e,t,n,r,s):oo(as(i),e,t,n,r,s,1);break}}}function QA(i){const e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Gs(r,o,s,l,a,c,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function eT(i,e,t,n){const r=i.prev,s=i,a=i.next;if(bt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=Wh(d,m,e,t,n),x=Wh(_,g,e,t,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&Gs(o,u,l,h,c,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Gs(o,u,l,h,c,f,y.x,y.y)&&bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==a&&Gs(o,u,l,h,c,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Gs(o,u,l,h,c,f,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tT(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Cc(r,s)&&Q_(r,n,n.next,s)&&lo(r,s)&&lo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),co(n),co(n.next),n=i=s),n=n.next}while(n!==i);return as(n)}function nT(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hT(a,o)){let l=ev(a,o);a=as(a,a.next),l=as(l,l.next),oo(a,e,t,n,r,s,0),oo(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function iT(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=j_(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(uT(c));for(r.sort(rT),s=0;s<r.length;s++)t=sT(r[s],t);return t}function rT(i,e){return i.x-e.x}function sT(i,e){const t=aT(i,e);if(!t)return e;const n=ev(t,i);return as(n,n.next),as(t,t.next)}function aT(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Gs(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),lo(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&oT(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function oT(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function lT(i,e,t,n){let r=i;do r.z===0&&(r.z=Wh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cT(r)}function cT(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function Wh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function uT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gs(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function hT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fT(i,e)&&(lo(i,e)&&lo(e,i)&&dT(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||Cc(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cc(i,e){return i.x===e.x&&i.y===e.y}function Q_(i,e,t,n){const r=Ml(bt(i,e,t)),s=Ml(bt(i,e,n)),a=Ml(bt(t,n,i)),o=Ml(bt(t,n,e));return!!(r!==s&&a!==o||r===0&&yl(i,t,e)||s===0&&yl(i,n,e)||a===0&&yl(t,i,n)||o===0&&yl(t,e,n))}function yl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ml(i){return i>0?1:i<0?-1:0}function fT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Q_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function lo(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function dT(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ev(i,e){const t=new Xh(i.i,i.x,i.y),n=new Xh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ip(i,e,t,n){const r=new Xh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pT(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class _i{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return _i.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Dp(e),Up(n,e);let a=e.length;t.forEach(Dp);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Up(n,t[l]);const o=jA.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Dp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Up(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Rc extends Xe{constructor(e=new Qr([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:mT;let v,y=!1,b,E,w,P;p&&(v=p.getSpacedPoints(u),y=!0,f=!1,b=p.computeFrenetFrames(u,!1),E=new C,w=new C,P=new C),f||(g=0,d=0,m=0,_=0);const N=o.extractPoints(c);let M=N.shape;const T=N.holes;if(!_i.isClockWise(M)){M=M.reverse();for(let I=0,le=T.length;I<le;I++){const $=T[I];_i.isClockWise($)&&(T[I]=$.reverse())}}const W=_i.triangulateShape(M,T),L=M;for(let I=0,le=T.length;I<le;I++){const $=T[I];M=M.concat($)}function O(I,le,$){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(le,$)}const B=M.length,J=W.length;function H(I,le,$){let ae,j,ye;const me=I.x-le.x,be=I.y-le.y,Ze=$.x-I.x,R=$.y-I.y,S=me*me+be*be,q=me*R-be*Ze;if(Math.abs(q)>Number.EPSILON){const Y=Math.sqrt(S),ie=Math.sqrt(Ze*Ze+R*R),ee=le.x-be/Y,Oe=le.y+me/Y,Ie=$.x-R/ie,ue=$.y+Ze/ie,fe=((Ie-ee)*R-(ue-Oe)*Ze)/(me*R-be*Ze);ae=ee+me*fe-I.x,j=Oe+be*fe-I.y;const Fe=ae*ae+j*j;if(Fe<=2)return new K(ae,j);ye=Math.sqrt(Fe/2)}else{let Y=!1;me>Number.EPSILON?Ze>Number.EPSILON&&(Y=!0):me<-Number.EPSILON?Ze<-Number.EPSILON&&(Y=!0):Math.sign(be)===Math.sign(R)&&(Y=!0),Y?(ae=-be,j=me,ye=Math.sqrt(S)):(ae=me,j=be,ye=Math.sqrt(S/2))}return new K(ae/ye,j/ye)}const Z=[];for(let I=0,le=L.length,$=le-1,ae=I+1;I<le;I++,$++,ae++)$===le&&($=0),ae===le&&(ae=0),Z[I]=H(L[I],L[$],L[ae]);const Q=[];let re,ge=Z.concat();for(let I=0,le=T.length;I<le;I++){const $=T[I];re=[];for(let ae=0,j=$.length,ye=j-1,me=ae+1;ae<j;ae++,ye++,me++)ye===j&&(ye=0),me===j&&(me=0),re[ae]=H($[ae],$[ye],$[me]);Q.push(re),ge=ge.concat(re)}for(let I=0;I<g;I++){const le=I/g,$=d*Math.cos(le*Math.PI/2),ae=m*Math.sin(le*Math.PI/2)+_;for(let j=0,ye=L.length;j<ye;j++){const me=O(L[j],Z[j],ae);Ce(me.x,me.y,-$)}for(let j=0,ye=T.length;j<ye;j++){const me=T[j];re=Q[j];for(let be=0,Ze=me.length;be<Ze;be++){const R=O(me[be],re[be],ae);Ce(R.x,R.y,-$)}}}const Ne=m+_;for(let I=0;I<B;I++){const le=f?O(M[I],ge[I],Ne):M[I];y?(w.copy(b.normals[0]).multiplyScalar(le.x),E.copy(b.binormals[0]).multiplyScalar(le.y),P.copy(v[0]).add(w).add(E),Ce(P.x,P.y,P.z)):Ce(le.x,le.y,0)}for(let I=1;I<=u;I++)for(let le=0;le<B;le++){const $=f?O(M[le],ge[le],Ne):M[le];y?(w.copy(b.normals[I]).multiplyScalar($.x),E.copy(b.binormals[I]).multiplyScalar($.y),P.copy(v[I]).add(w).add(E),Ce(P.x,P.y,P.z)):Ce($.x,$.y,h/u*I)}for(let I=g-1;I>=0;I--){const le=I/g,$=d*Math.cos(le*Math.PI/2),ae=m*Math.sin(le*Math.PI/2)+_;for(let j=0,ye=L.length;j<ye;j++){const me=O(L[j],Z[j],ae);Ce(me.x,me.y,h+$)}for(let j=0,ye=T.length;j<ye;j++){const me=T[j];re=Q[j];for(let be=0,Ze=me.length;be<Ze;be++){const R=O(me[be],re[be],ae);y?Ce(R.x,R.y+v[u-1].y,v[u-1].x+$):Ce(R.x,R.y,h+$)}}}X(),ne();function X(){const I=r.length/3;if(f){let le=0,$=B*le;for(let ae=0;ae<J;ae++){const j=W[ae];Ee(j[2]+$,j[1]+$,j[0]+$)}le=u+g*2,$=B*le;for(let ae=0;ae<J;ae++){const j=W[ae];Ee(j[0]+$,j[1]+$,j[2]+$)}}else{for(let le=0;le<J;le++){const $=W[le];Ee($[2],$[1],$[0])}for(let le=0;le<J;le++){const $=W[le];Ee($[0]+B*u,$[1]+B*u,$[2]+B*u)}}n.addGroup(I,r.length/3-I,0)}function ne(){const I=r.length/3;let le=0;ve(L,le),le+=L.length;for(let $=0,ae=T.length;$<ae;$++){const j=T[$];ve(j,le),le+=j.length}n.addGroup(I,r.length/3-I,1)}function ve(I,le){let $=I.length;for(;--$>=0;){const ae=$;let j=$-1;j<0&&(j=I.length-1);for(let ye=0,me=u+g*2;ye<me;ye++){const be=B*ye,Ze=B*(ye+1),R=le+ae+be,S=le+j+be,q=le+j+Ze,Y=le+ae+Ze;Me(R,S,q,Y)}}}function Ce(I,le,$){l.push(I),l.push(le),l.push($)}function Ee(I,le,$){qe(I),qe(le),qe($);const ae=r.length/3,j=x.generateTopUV(n,r,ae-3,ae-2,ae-1);Re(j[0]),Re(j[1]),Re(j[2])}function Me(I,le,$,ae){qe(I),qe(le),qe(ae),qe(le),qe($),qe(ae);const j=r.length/3,ye=x.generateSideWallUV(n,r,j-6,j-3,j-2,j-1);Re(ye[0]),Re(ye[1]),Re(ye[3]),Re(ye[1]),Re(ye[2]),Re(ye[3])}function qe(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function Re(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gT(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ql[r.type]().fromJSON(r)),new Rc(n,e.options)}}const mT={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new K(s,a),new K(o,l),new K(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],m=e[r*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-h),new K(f,1-m),new K(_,1-p)]:[new K(o,1-l),new K(u,1-h),new K(d,1-m),new K(g,1-p)]}};function gT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pc extends vr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pc(e.radius,e.detail)}}class Po extends vr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Po(e.radius,e.detail)}}class Lc extends Xe{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,d=new C,m=new K;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const p=s+g/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<r;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,y=x+n+1,b=x+n+2,E=x+1;o.push(v,y,E),o.push(y,b,E)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ic extends Xe{constructor(e=new Qr([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;_i.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];_i.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=_i.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],v=x[0]+h,y=x[1]+h,b=x[2]+h;n.push(v,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _T(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Ic(n,e.curveSegments)}}function _T(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Lo extends Xe{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,f=new C,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const E=b/t;h.x=-e*Math.cos(r+E*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+E*s)*Math.sin(a+v*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+y,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],y=u[p][x],b=u[p+1][x],E=u[p+1][x+1];(p!==0||a>0)&&d.push(v,y,E),(p!==n-1||l<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dc extends vr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dc(e.radius,e.detail)}}class Uc extends Xe{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new C,h=new C,f=new C;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){const _=m/r*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/r),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){const _=(r+1)*d+m-1,g=(r+1)*(d-1)+m-1,p=(r+1)*(d-1)+m,x=(r+1)*d+m;a.push(_,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nc extends Xe{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new C,f=new C,d=new C,m=new C,_=new C,g=new C,p=new C;for(let v=0;v<=n;++v){const y=v/n*s*Math.PI*2;x(y,s,a,e,d),x(y+.01,s,a,e,m),g.subVectors(m,d),p.addVectors(m,d),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let b=0;b<=r;++b){const E=b/r*Math.PI*2,w=-t*Math.cos(E),P=t*Math.sin(E);h.x=d.x+(w*p.x+P*_.x),h.y=d.y+(w*p.y+P*_.y),h.z=d.z+(w*p.z+P*_.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(v/n),u.push(b/r)}}for(let v=1;v<=n;v++)for(let y=1;y<=r;y++){const b=(r+1)*(v-1)+(y-1),E=(r+1)*v+(y-1),w=(r+1)*v+y,P=(r+1)*(v-1)+y;o.push(b,E,P),o.push(E,w,P)}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2));function x(v,y,b,E,w){const P=Math.cos(v),N=Math.sin(v),M=b/y*v,T=Math.cos(M);w.x=E*(2+T)*.5*P,w.y=E*(2+T)*N*.5,w.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Oc extends Xe{constructor(e=new Bf(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new K;let u=new C;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),p()}function g(v){u=e.getPointAt(v/t,u);const y=a.normals[v],b=a.binormals[v];for(let E=0;E<=r;E++){const w=E/r*Math.PI*2,P=Math.sin(w),N=-Math.cos(w);l.x=N*y.x+P*b.x,l.y=N*y.y+P*b.y,l.z=N*y.z+P*b.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=r;y++){const b=(r+1)*(v-1)+(y-1),E=(r+1)*v+(y-1),w=(r+1)*v+y,P=(r+1)*(v-1)+y;m.push(b,E,P),m.push(E,w,P)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=r;y++)c.x=v/t,c.y=y/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oc(new Ql[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class tv extends Xe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new C,s=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,d=h.count;for(let m=f,_=f+d;m<_;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),x=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),Np(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),Np(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Np(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var Op=Object.freeze({__proto__:null,BoxGeometry:ls,CapsuleGeometry:Ec,CircleGeometry:wc,ConeGeometry:Ac,CylinderGeometry:_a,DodecahedronGeometry:Tc,EdgesGeometry:K_,ExtrudeGeometry:Rc,IcosahedronGeometry:Pc,LatheGeometry:Ro,OctahedronGeometry:Po,PlaneGeometry:ma,PolyhedronGeometry:vr,RingGeometry:Lc,ShapeGeometry:Ic,SphereGeometry:Lo,TetrahedronGeometry:Dc,TorusGeometry:Uc,TorusKnotGeometry:Nc,TubeGeometry:Oc,WireframeGeometry:tv});class nv extends en{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class iv extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kf extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rv extends kf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sv extends en{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class av extends en{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ov extends en{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lv extends en{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cv extends en{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uv extends cn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Wr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fv(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function qh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Vf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function vT(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*r;if(!(m<t||m>=n)){h.push(c.times[d]);for(let _=0;_<u;++_)f.push(c.values[d*u+_])}}h.length!==0&&(c.times=Wr(h,c.times.constructor),c.values=Wr(f,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function xT(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const m=o.times.length-1;let _;if(s<=o.times[0]){const p=u,x=h-u;_=o.values.slice(p,x)}else if(s>=o.times[m]){const p=m*h+u,x=p+h-u;_=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=u,v=h-u;p.evaluate(s),_=p.resultBuffer.slice(x,v)}l==="quaternion"&&new gn().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const x=p*d+f;if(l==="quaternion")gn.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const v=d-f*2;for(let y=0;y<v;++y)c.values[x+y]-=_[y]}}}return i.blendMode=vf,i}const yT={convertArray:Wr,isTypedArray:hv,getKeyframeOrder:fv,sortedArray:qh,flattenJSON:Vf,subclip:vT,makeClipAdditive:xT};class Io{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dv extends Io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vr,endingEnd:Vr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gr:s=e,o=2*t-n;break;case Qa:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gr:a=e,l=2*n-t;break;case Qa:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let b=0;b!==o;++b)s[b]=p*a[u+b]+x*a[c+b]+v*a[l+b]+y*a[h+b];return s}}class Gf extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class pv extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&hv(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Bl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=ja;class cs extends si{}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ka;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hf extends si{}Hf.prototype.ValueTypeName="color";class uo extends si{}uo.prototype.ValueTypeName="number";class mv extends Io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)gn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class va extends si{InterpolantFactoryMethodLinear(e){return new mv(this.times,this.values,this.getValueSize(),e)}}va.prototype.ValueTypeName="quaternion";va.prototype.DefaultInterpolation=ja;va.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends si{}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ka;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends si{}ho.prototype.ValueTypeName="vector";class fo{constructor(e,t=-1,n,r=hc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ST(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(si.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=fv(l);l=qh(l,1,u),c=qh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new uo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];Vf(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const v=f[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new uo(".morphTargetInfluence["+_+"]",g,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(ho,d+".position",f,"pos",r),n(va,d+".quaternion",f,"rot",r),n(ho,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function MT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return ho;case"color":return Hf;case"quaternion":return va;case"bool":case"boolean":return cs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ST(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=MT(i.type);if(i.times===void 0){const t=[],n=[];Vf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const gv=new Wf;class _n{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_n.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class bT extends Error{constructor(e,t){super(e),this.response=t}}class Wi extends _n{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ii[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let E=0,w=u.length;E<w;E++){const P=u[E];P.onProgress&&P.onProgress(b)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new bT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Fi.add(e,c);const u=Ii[e];delete Ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ET extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Wi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=fo.parse(e[n]);t.push(r)}return t}}class wT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=[],o=new Sc,l=new Wi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(f){const d=s.parse(f,!0);a[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Mt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else l.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[m].mipmaps.push(f.mipmaps[m*f.mipmapCount+_]),a[m].format=f.format,a[m].width=f.width,a[m].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=Mt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}}class po extends _n{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=so("img");function l(){u(),Fi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class AT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=new To;s.colorSpace=On;const a=new po(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class TT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new ur,o=new Wi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Kt,a.wrapT=c.wrapT!==void 0?c.wrapT:Kt,a.magFilter=c.magFilter!==void 0?c.magFilter:Mt,a.minFilter=c.minFilter!==void 0?c.minFilter:Mt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=pi),c.mipmapCount===1&&(a.minFilter=Mt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class CT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=new At,a=new po(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class xr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _v extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Bu=new Le,Fp=new C,Bp=new C;class Xf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RT extends Xf{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=la*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vv extends xr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new RT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zp=new Le,Da=new C,zu=new C;class PT extends Xf{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),n.position.copy(Da),zu.copy(n.position),zu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zu),n.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}}class xv extends xr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new PT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LT extends Xf{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yv extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new LT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mv extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sv extends xr{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class bv{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class Ev extends xr{constructor(e=new bv,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Fc extends _n{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,a=new Wi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=Fc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new _e().setHex(a.value);break;case"v2":r.uniforms[s].value=new K().fromArray(a.value);break;case"v3":r.uniforms[s].value=new C().fromArray(a.value);break;case"v4":r.uniforms[s].value=new lt().fromArray(a.value);break;case"m3":r.uniforms[s].value=new ze().fromArray(a.value);break;case"m4":r.uniforms[s].value=new Le().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new K().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:nv,SpriteMaterial:Lf,RawShaderMaterial:iv,ShaderMaterial:ni,PointsMaterial:Df,MeshPhysicalMaterial:rv,MeshStandardMaterial:kf,MeshPhongMaterial:sv,MeshToonMaterial:av,MeshNormalMaterial:ov,MeshLambertMaterial:lv,MeshDepthMaterial:Tf,MeshDistanceMaterial:Cf,MeshBasicMaterial:_r,MeshMatcapMaterial:cv,LineDashedMaterial:uv,LineBasicMaterial:cn,Material:en};return new t[e]}}class Yh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wv extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Av extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Wi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=s(d,g.buffer),x=Bs(g.type,p),v=new yc(x,g.stride);return v.uuid=g.uuid,t[m]=v,v}function s(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new wv:new Xe,o=e.data.index;if(o!==void 0){const d=Bs(o.type,o.array);a.setIndex(new ht(d,1))}const l=e.data.attributes;for(const d in l){const m=l[d];let _;if(m.isInterleavedBufferAttribute){const g=r(e.data,m.data);_=new ss(g,m.itemSize,m.offset,m.normalized)}else{const g=Bs(m.type,m.array),p=m.isInstancedBufferAttribute?ua:ht;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const m=c[d],_=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let v;if(x.isInterleavedBufferAttribute){const y=r(e.data,x.data);v=new ss(y,x.itemSize,x.offset,x.normalized)}else{const y=Bs(x.type,x.array);v=new ht(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,m=h.length;d!==m;++d){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new C;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Qt(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class IT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=this.path===""?Yh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Wi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?Yh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new Wi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let h=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new Qr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Mc().fromJSON(e[s],r);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new Av;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in Op?o=Op[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new Fc;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=fo.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Bs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Wf(t);s=new po(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.url;if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new ur(p.data,p.width,p.height)))}r[h.uuid]=new Hr(d)}else{const d=o(h.url);r[h.uuid]=new Hr(d)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return a.data?{data:Bs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new po(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=await s(d);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new ur(m.data,m.width,m.height)))}n[l.uuid]=new Hr(u)}else{const u=await s(l.url);n[l.uuid]=new Hr(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new To,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new ur:u=new At,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,DT)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],kp),u.wrapT=n(o.wrap[1],kp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,Vp)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,Vp)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,n,r,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let m=0,_=f.length;m<_;m++){const g=f[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return r[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),r[f]}let u,h;switch(e.type){case"Scene":a=new Pf,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new xc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new vc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Vt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new gc(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Mv(e.color,e.intensity);break;case"DirectionalLight":a=new yv(e.color,e.intensity);break;case"PointLight":a=new xv(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Sv(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new vv(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new _v(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Ev().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new V_(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new Nt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);const f=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new G_(u,h,f),a.instanceMatrix=new ua(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new ua(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new H_(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new ln;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Qt;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new k_;break;case"Line":a=new fr(o(e.geometry),l(e.material));break;case"LineLoop":a=new W_(o(e.geometry),l(e.material));break;case"LineSegments":a=new wi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new X_(o(e.geometry),l(e.material));break;case"Sprite":a=new z_(l(e.material));break;case"Group":a=new Vs;break;case"Bone":a=new If;break;default:a=new st}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,r,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const m=f[d];a.animations.push(s[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const m=f[d],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}}const DT={UVMapping:cc,CubeReflectionMapping:Hi,CubeRefractionMapping:hr,EquirectangularReflectionMapping:Ya,EquirectangularRefractionMapping:$a,CubeUVReflectionMapping:da},kp={RepeatWrapping:Za,ClampToEdgeWrapping:Kt,MirroredRepeatWrapping:Ja},Vp={NearestFilter:Pt,NearestMipmapNearestFilter:Jl,NearestMipmapLinearFilter:Or,LinearFilter:Mt,LinearMipmapNearestFilter:Fa,LinearMipmapLinearFilter:pi};class UT extends _n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Fi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(e,l),s.manager.itemStart(e)}}let Sl;class qf{static getContext(){return Sl===void 0&&(Sl=new(window.AudioContext||window.webkitAudioContext)),Sl}static setContext(e){Sl=e}}class NT extends _n{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Wi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);qf.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},n,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}const Gp=new Le,Hp=new Le,Rr=new Le;class OT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Vt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Vt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Rr.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(jr*t.fov*.5)/t.zoom;let o,l;Hp.elements[12]=-r,Gp.elements[12]=r,o=-a*t.aspect+s,l=a*t.aspect+s,Rr.elements[0]=2*t.near/(l-o),Rr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Rr),o=-a*t.aspect-s,l=a*t.aspect-s,Rr.elements[0]=2*t.near/(l-o),Rr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Rr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Hp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Gp)}}class Tv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wp(){return(typeof performance>"u"?Date:performance).now()}const Pr=new C,Xp=new gn,FT=new C,Lr=new C;class BT extends st{constructor(){super(),this.type="AudioListener",this.context=qf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Tv}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Pr,Xp,FT),Lr.set(0,0,-1).applyQuaternion(Xp),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Pr.x,r),t.positionY.linearRampToValueAtTime(Pr.y,r),t.positionZ.linearRampToValueAtTime(Pr.z,r),t.forwardX.linearRampToValueAtTime(Lr.x,r),t.forwardY.linearRampToValueAtTime(Lr.y,r),t.forwardZ.linearRampToValueAtTime(Lr.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Pr.x,Pr.y,Pr.z),t.setOrientation(Lr.x,Lr.y,Lr.z,n.x,n.y,n.z)}}class Cv extends st{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ir=new C,qp=new gn,zT=new C,Dr=new C;class kT extends Cv{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ir,qp,zT),Dr.set(0,0,1).applyQuaternion(qp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ir.x,n),t.positionY.linearRampToValueAtTime(Ir.y,n),t.positionZ.linearRampToValueAtTime(Ir.z,n),t.orientationX.linearRampToValueAtTime(Dr.x,n),t.orientationY.linearRampToValueAtTime(Dr.y,n),t.orientationZ.linearRampToValueAtTime(Dr.z,n)}else t.setPosition(Ir.x,Ir.y,Ir.z),t.setOrientation(Dr.x,Dr.y,Dr.z)}}class VT{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Rv{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){gn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;gn.multiplyQuaternionsFlat(e,a,e,t,e,n),gn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const Yf="\\[\\]\\.:\\/",GT=new RegExp("["+Yf+"]","g"),$f="[^"+Yf+"]",HT="[^"+Yf.replace("\\.","")+"]",WT=/((?:WC+[\/:])*)/.source.replace("WC",$f),XT=/(WCOD+)?/.source.replace("WCOD",HT),qT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$f),YT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$f),$T=new RegExp("^"+WT+XT+qT+YT+"$"),ZT=["material","materials","bones","map"];class JT{constructor(e,t,n){const r=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GT,"")}static parseTrackName(e){const t=$T.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);ZT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=JT;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class KT{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Rn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(f);for(let _=0,g=a;_!==g;++_)s[_].push(new nt(f,n[_],r[_]))}else if(m<c){o=e[m];const _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[d]=_,e[_]=f;for(let p=0,x=a;p!==x;++p){const v=s[p],y=v[_];let b=v[m];v[m]=y,b===void 0&&(b=new nt(f,n[p],r[p])),v[_]=b}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[c]=h,e[h]=l;for(let d=0,m=r;d!==m;++d){const _=n[d],g=_[h],p=_[u];_[u]=g,_[h]=p}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],m=--a,_=e[m];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let g=0,p=r;g!==p;++g){const x=n[g],v=x[f],y=x[m];x[h]=v,x[f]=y,x.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let m=0,_=r;m!==_;++m){const g=n[m];g[h]=g[f],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);r=s.length,n[e]=r,a.push(e),o.push(t),s.push(h);for(let f=u,d=l.length;f!==d;++f){const m=l[f];h[f]=new nt(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),r[n]=r[o],r.pop()}}}class Pv{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Vr,endingEnd:Vr};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=l_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case hc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===c_;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===o_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Gr,r.endingEnd=Gr):(e?r.endingStart=this.zeroSlopeAtStart?Gr:Vr:r.endingStart=Qa,t?r.endingEnd=this.zeroSlopeAtEnd?Gr:Vr:r.endingEnd=Qa)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const jT=new Float32Array(1);class QT extends qi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let m=u[d];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new Rv(nt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Gf(new Float32Array(2),new Float32Array(2),1,jT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?fo.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=hc),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Pv(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?fo.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Zf{constructor(e){this.value=e}clone(){return new Zf(this.value.clone===void 0?this.value:this.value.clone())}}let e1=0;class t1 extends qi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.usage=io,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class n1 extends yc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class i1{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Yp=new Le;class r1{constructor(e,t,n=0,r=1/0){this.ray=new pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yp),this}intersectObject(e,t=!0,n=[]){return $h(e,this,n,t),n.sort($p),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)$h(e[r],this,n,t);return n.sort($p),n}}function $p(i,e){return i.distance-e.distance}function $h(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)$h(r[s],e,t,!0)}}class s1{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a1{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Zp=new K;class o1{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jp=new C,bl=new C;class l1{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Jp.subVectors(e,this.start),bl.subVectors(this.end,this.start);const n=bl.dot(bl);let s=bl.dot(Jp)/n;return t&&(s=wt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Kp=new C;class c1 extends st{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Xe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Se(r,3));const s=new cn({fog:!1,toneMapped:!1});this.cone=new wi(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Kp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Kp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const tr=new C,El=new Le,ku=new Le;class u1 extends wi{constructor(e){const t=Lv(e),n=new Xe,r=[],s=[],a=new _e(0,0,1),o=new _e(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Se(r,3)),n.setAttribute("color",new Se(s,3));const l=new cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");ku.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(El.multiplyMatrices(ku,o.matrixWorld),tr.setFromMatrixPosition(El),r.setXYZ(a,tr.x,tr.y,tr.z),El.multiplyMatrices(ku,o.parent.matrixWorld),tr.setFromMatrixPosition(El),r.setXYZ(a+1,tr.x,tr.y,tr.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Lv(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Lv(i.children[t]));return e}class h1 extends Nt{constructor(e,t,n){const r=new Lo(t,4,2),s=new _r({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const f1=new C,jp=new _e,Qp=new _e;class d1 extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new Po(t);r.rotateY(Math.PI*.5),this.material=new _r({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new ht(a,3)),this.add(new Nt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");jp.copy(this.light.color),Qp.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?jp:Qp;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(f1.setFromMatrixPosition(this.light.matrixWorld).negate())}}class p1 extends wi{constructor(e=10,t=10,n=4473924,r=8947848){n=new _e(n),r=new _e(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=t;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=f===s?n:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Xe;u.setAttribute("position",new Se(l,3)),u.setAttribute("color",new Se(c,3));const h=new cn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class m1 extends wi{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new _e(s),a=new _e(a);const o=[],l=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,m=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,m);const _=h&1?s:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:a,d=e-e/n*h;for(let m=0;m<r;m++){let _=m/r*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d;o.push(g,0,p),l.push(f.r,f.g,f.b),_=(m+1)/r*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d,o.push(g,0,p),l.push(f.r,f.g,f.b)}}const c=new Xe;c.setAttribute("position",new Se(o,3)),c.setAttribute("color",new Se(l,3));const u=new cn({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const em=new C,wl=new C,tm=new C;class g1 extends st{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new Xe;r.setAttribute("position",new Se([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new cn({fog:!1,toneMapped:!1});this.lightPlane=new fr(r,s),this.add(this.lightPlane),r=new Xe,r.setAttribute("position",new Se([0,0,0,0,0,1],3)),this.targetLine=new fr(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),em.setFromMatrixPosition(this.light.matrixWorld),wl.setFromMatrixPosition(this.light.target.matrixWorld),tm.subVectors(wl,em),this.lightPlane.lookAt(wl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wl),this.targetLine.scale.z=tm.length()}}const Al=new C,Et=new mc;class _1 extends wi{constructor(e){const t=new Xe,n=new cn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){r.push(0,0,0),s.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(r.length/3-1)}t.setAttribute("position",new Se(r,3)),t.setAttribute("color",new Se(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new _e(16755200),u=new _e(16711680),h=new _e(43775),f=new _e(16777215),d=new _e(3355443);this.setColors(c,u,h,f,d)}setColors(e,t,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Rt("c",t,e,Et,0,0,-1),Rt("t",t,e,Et,0,0,1),Rt("n1",t,e,Et,-n,-r,-1),Rt("n2",t,e,Et,n,-r,-1),Rt("n3",t,e,Et,-n,r,-1),Rt("n4",t,e,Et,n,r,-1),Rt("f1",t,e,Et,-n,-r,1),Rt("f2",t,e,Et,n,-r,1),Rt("f3",t,e,Et,-n,r,1),Rt("f4",t,e,Et,n,r,1),Rt("u1",t,e,Et,n*.7,r*1.1,-1),Rt("u2",t,e,Et,-n*.7,r*1.1,-1),Rt("u3",t,e,Et,0,r*2,-1),Rt("cf1",t,e,Et,-n,0,1),Rt("cf2",t,e,Et,n,0,1),Rt("cf3",t,e,Et,0,-r,1),Rt("cf4",t,e,Et,0,r,1),Rt("cn1",t,e,Et,-n,0,-1),Rt("cn2",t,e,Et,n,0,-1),Rt("cn3",t,e,Et,0,-r,-1),Rt("cn4",t,e,Et,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rt(i,e,t,n,r,s,a){Al.set(r,s,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Al.x,Al.y,Al.z)}}const Tl=new ln;class v1 extends wi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new Xe;s.setIndex(new ht(n,1)),s.setAttribute("position",new ht(r,3)),super(s,new cn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Tl.setFromObject(this.object),Tl.isEmpty())return;const t=Tl.min,n=Tl.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class x1 extends wi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Xe;s.setIndex(new ht(n,1)),s.setAttribute("position",new Se(r,3)),super(s,new cn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class y1 extends fr{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Xe;a.setAttribute("position",new Se(s,3)),a.computeBoundingSphere(),super(a,new cn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Xe;l.setAttribute("position",new Se(o,3)),l.computeBoundingSphere(),this.add(new Nt(l,new _r({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const nm=new C;let Cl,Vu;class M1 extends st{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Cl===void 0&&(Cl=new Xe,Cl.setAttribute("position",new Se([0,0,0,0,1,0],3)),Vu=new _a(0,.5,1,5,1),Vu.translate(0,-.5,0)),this.position.copy(t),this.line=new fr(Cl,new cn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Nt(Vu,new _r({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{nm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(nm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class S1 extends wi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Xe;r.setAttribute("position",new Se(t,3)),r.setAttribute("color",new Se(n,3));const s=new cn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new _e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class b1{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ao,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let v=0,y=p.length;v<y;v++){const b=p[v],E=new Qr;E.curves=b.curves,x.push(E)}return x}function n(p,x){const v=x.length;let y=!1;for(let b=v-1,E=0;E<v;b=E++){let w=x[b],P=x[E],N=P.x-w.x,M=P.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=x[E],N=-N,P=x[b],M=-M),p.y<w.y||p.y>P.y)continue;if(p.y===w.y){if(p.x===w.x)return!0}else{const T=M*(p.x-w.x)-N*(p.y-w.y);if(T===0)return!0;if(T<0)continue;y=!y}}else{if(p.y!==w.y)continue;if(P.x<=p.x&&p.x<=w.x||w.x<=p.x&&p.x<=P.x)return!0}}return y}const r=_i.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Qr,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,_;f[m]=void 0,d[m]=[];for(let p=0,x=s.length;p<x;p++)o=s[p],_=o.getPoints(),a=r(_),a=e?!a:a,a?(!u&&f[m]&&m++,f[m]={s:new Qr,p:_},f[m].s.curves=o.curves,u&&m++,d[m]=[]):d[m].push({h:o,p:_[0]});if(!f[0])return t(s);if(f.length>1){let p=!1,x=0;for(let v=0,y=f.length;v<y;v++)h[v]=[];for(let v=0,y=f.length;v<y;v++){const b=d[v];for(let E=0;E<b.length;E++){const w=b[E];let P=!0;for(let N=0;N<f.length;N++)n(w.p,f[N].p)&&(v!==N&&x++,P?(P=!1,h[N].push(w)):p=!0);P&&h[v].push(w)}}x>0&&p===!1&&(d=h)}let g;for(let p=0,x=f.length;p<x;p++){l=f[p].s,c.push(l),g=d[p];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}}class E1 extends ti{constructor(e=1,t=1,n=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const w1=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:cf,AddEquation:ir,AddOperation:qg,AdditiveAnimationBlendMode:vf,AdditiveBlending:oh,AgXToneMapping:Kg,AlphaFormat:n_,AlwaysCompare:x_,AlwaysDepth:zg,AlwaysStencilFunc:Bh,AmbientLight:Mv,AnimationAction:Pv,AnimationClip:fo,AnimationLoader:ET,AnimationMixer:QT,AnimationObjectGroup:KT,AnimationUtils:yT,ArcCurve:q_,ArrayCamera:O_,ArrowHelper:M1,AttachedBindMode:fh,Audio:Cv,AudioAnalyser:VT,AudioContext:qf,AudioListener:BT,AudioLoader:NT,AxesHelper:S1,BackSide:on,BasicDepthPacking:u_,BasicShadowMap:Cy,BatchedMesh:H_,Bone:If,BooleanKeyframeTrack:cs,Box2:o1,Box3:ln,Box3Helper:x1,BoxGeometry:ls,BoxHelper:v1,BufferAttribute:ht,BufferGeometry:Xe,BufferGeometryLoader:Av,ByteType:e_,Cache:Fi,Camera:mc,CameraHelper:_1,CanvasTexture:WA,CapsuleGeometry:Ec,CatmullRomCurve3:Y_,CineonToneMapping:Zg,CircleGeometry:wc,ClampToEdgeWrapping:Kt,Clock:Tv,Color:_e,ColorKeyframeTrack:Hf,ColorManagement:ot,CompressedArrayTexture:GA,CompressedCubeTexture:HA,CompressedTexture:Sc,CompressedTextureLoader:wT,ConeGeometry:Ac,ConstantAlphaFactor:Og,ConstantColorFactor:Ug,CubeCamera:T_,CubeReflectionMapping:Hi,CubeRefractionMapping:hr,CubeTexture:To,CubeTextureLoader:AT,CubeUVReflectionMapping:da,CubicBezierCurve:Nf,CubicBezierCurve3:$_,CubicInterpolant:dv,CullFaceBack:ah,CullFaceFront:Mg,CullFaceFrontBack:Ty,CullFaceNone:yg,Curve:ri,CurvePath:J_,CustomBlending:Sg,CustomToneMapping:Jg,CylinderGeometry:_a,Cylindrical:a1,Data3DTexture:Sf,DataArrayTexture:dc,DataTexture:ur,DataTextureLoader:TT,DataUtils:OM,DecrementStencilOp:zy,DecrementWrapStencilOp:Vy,DefaultLoadingManager:gv,DepthFormat:cr,DepthStencilFormat:rs,DepthTexture:Af,DetachedBindMode:Qg,DirectionalLight:yv,DirectionalLightHelper:g1,DiscreteInterpolant:pv,DisplayP3ColorSpace:fc,DodecahedronGeometry:Tc,DoubleSide:di,DstAlphaFactor:Rg,DstColorFactor:Lg,DynamicCopyUsage:nM,DynamicDrawUsage:Jy,DynamicReadUsage:Qy,EdgesGeometry:K_,EllipseCurve:bc,EqualCompare:m_,EqualDepth:Vg,EqualStencilFunc:Xy,EquirectangularReflectionMapping:Ya,EquirectangularRefractionMapping:$a,Euler:Pn,EventDispatcher:qi,ExtrudeGeometry:Rc,FileLoader:Wi,Float16BufferAttribute:GM,Float32BufferAttribute:Se,FloatType:En,Fog:xc,FogExp2:vc,FramebufferTexture:VA,FrontSide:Gi,Frustum:Co,GLBufferAttribute:i1,GLSL1:rM,GLSL3:zh,GreaterCompare:g_,GreaterDepth:Hg,GreaterEqualCompare:v_,GreaterEqualDepth:Gg,GreaterEqualStencilFunc:Zy,GreaterStencilFunc:Yy,GridHelper:p1,Group:Vs,HalfFloatType:oa,HemisphereLight:_v,HemisphereLightHelper:d1,IcosahedronGeometry:Pc,ImageBitmapLoader:UT,ImageLoader:po,ImageUtils:Mf,IncrementStencilOp:By,IncrementWrapStencilOp:ky,InstancedBufferAttribute:ua,InstancedBufferGeometry:wv,InstancedInterleavedBuffer:n1,InstancedMesh:G_,Int16BufferAttribute:kM,Int32BufferAttribute:VM,Int8BufferAttribute:FM,IntType:uf,InterleavedBuffer:yc,InterleavedBufferAttribute:ss,Interpolant:Io,InterpolateDiscrete:Ka,InterpolateLinear:ja,InterpolateSmooth:Bl,InvertStencilOp:Gy,KeepStencilOp:Ur,KeyframeTrack:si,LOD:k_,LatheGeometry:Ro,Layers:pc,LessCompare:p_,LessDepth:kg,LessEqualCompare:xf,LessEqualDepth:qa,LessEqualStencilFunc:qy,LessStencilFunc:Wy,Light:xr,LightProbe:Ev,Line:fr,Line3:l1,LineBasicMaterial:cn,LineCurve:Of,LineCurve3:Z_,LineDashedMaterial:uv,LineLoop:W_,LineSegments:wi,LinearDisplayP3ColorSpace:Ao,LinearFilter:Mt,LinearInterpolant:Gf,LinearMipMapLinearFilter:Iy,LinearMipMapNearestFilter:Ly,LinearMipmapLinearFilter:pi,LinearMipmapNearestFilter:Fa,LinearSRGBColorSpace:Xi,LinearToneMapping:Yg,LinearTransfer:eo,Loader:_n,LoaderUtils:Yh,LoadingManager:Wf,LoopOnce:o_,LoopPingPong:c_,LoopRepeat:l_,LuminanceAlphaFormat:r_,LuminanceFormat:i_,MOUSE:wy,Material:en,MaterialLoader:Fc,MathUtils:xM,Matrix3:ze,Matrix4:Le,MaxEquation:hh,Mesh:Nt,MeshBasicMaterial:_r,MeshDepthMaterial:Tf,MeshDistanceMaterial:Cf,MeshLambertMaterial:lv,MeshMatcapMaterial:cv,MeshNormalMaterial:ov,MeshPhongMaterial:sv,MeshPhysicalMaterial:rv,MeshStandardMaterial:kf,MeshToonMaterial:av,MinEquation:uh,MirroredRepeatWrapping:Ja,MixOperation:Xg,MultiplyBlending:ch,MultiplyOperation:wo,NearestFilter:Pt,NearestMipMapLinearFilter:Py,NearestMipMapNearestFilter:Ry,NearestMipmapLinearFilter:Or,NearestMipmapNearestFilter:Jl,NeutralToneMapping:jg,NeverCompare:d_,NeverDepth:Bg,NeverStencilFunc:Hy,NoBlending:Bi,NoColorSpace:Ui,NoToneMapping:zi,NormalAnimationBlendMode:hc,NormalBlending:Kr,NotEqualCompare:__,NotEqualDepth:Wg,NotEqualStencilFunc:$y,NumberKeyframeTrack:uo,Object3D:st,ObjectLoader:IT,ObjectSpaceNormalMap:f_,OctahedronGeometry:Po,OneFactor:Ag,OneMinusConstantAlphaFactor:Fg,OneMinusConstantColorFactor:Ng,OneMinusDstAlphaFactor:Pg,OneMinusDstColorFactor:Ig,OneMinusSrcAlphaFactor:Zl,OneMinusSrcColorFactor:Cg,OrthographicCamera:gc,P3Primaries:no,PCFShadowMap:lf,PCFSoftShadowMap:lc,PMREMGenerator:Vh,Path:ao,PerspectiveCamera:Vt,Plane:nr,PlaneGeometry:ma,PlaneHelper:y1,PointLight:xv,PointLightHelper:h1,Points:X_,PointsMaterial:Df,PolarGridHelper:m1,PolyhedronGeometry:vr,PositionalAudio:kT,PropertyBinding:nt,PropertyMixer:Rv,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:Bf,Quaternion:gn,QuaternionKeyframeTrack:va,QuaternionLinearInterpolant:mv,RED_GREEN_RGTC2_Format:Oh,RED_RGTC1_Format:a_,REVISION:Eo,RGBADepthPacking:h_,RGBAFormat:mn,RGBAIntegerFormat:gf,RGBA_ASTC_10x10_Format:Ph,RGBA_ASTC_10x5_Format:Th,RGBA_ASTC_10x6_Format:Ch,RGBA_ASTC_10x8_Format:Rh,RGBA_ASTC_12x10_Format:Lh,RGBA_ASTC_12x12_Format:Ih,RGBA_ASTC_4x4_Format:xh,RGBA_ASTC_5x4_Format:yh,RGBA_ASTC_5x5_Format:Mh,RGBA_ASTC_6x5_Format:Sh,RGBA_ASTC_6x6_Format:bh,RGBA_ASTC_8x5_Format:Eh,RGBA_ASTC_8x6_Format:wh,RGBA_ASTC_8x8_Format:Ah,RGBA_BPTC_Format:Fl,RGBA_ETC2_EAC_Format:vh,RGBA_PVRTC_2BPPV1_Format:gh,RGBA_PVRTC_4BPPV1_Format:mh,RGBA_S3TC_DXT1_Format:Ul,RGBA_S3TC_DXT3_Format:Nl,RGBA_S3TC_DXT5_Format:Ol,RGB_BPTC_SIGNED_Format:Dh,RGB_BPTC_UNSIGNED_Format:Uh,RGB_ETC1_Format:_f,RGB_ETC2_Format:_h,RGB_PVRTC_2BPPV1_Format:ph,RGB_PVRTC_4BPPV1_Format:dh,RGB_S3TC_DXT1_Format:Dl,RGFormat:s_,RGIntegerFormat:mf,RawShaderMaterial:iv,Ray:pa,Raycaster:r1,Rec709Primaries:to,RectAreaLight:Sv,RedFormat:df,RedIntegerFormat:pf,ReinhardToneMapping:$g,RenderTarget:b_,RepeatWrapping:Za,ReplaceStencilOp:Fy,ReverseSubtractEquation:Eg,RingGeometry:Lc,SIGNED_RED_GREEN_RGTC2_Format:Fh,SIGNED_RED_RGTC1_Format:Nh,SRGBColorSpace:On,SRGBTransfer:gt,Scene:Pf,ShaderChunk:He,ShaderLib:Zn,ShaderMaterial:ni,ShadowMaterial:nv,Shape:Qr,ShapeGeometry:Ic,ShapePath:b1,ShapeUtils:_i,ShortType:t_,Skeleton:Mc,SkeletonHelper:u1,SkinnedMesh:V_,Source:Hr,Sphere:Qt,SphereGeometry:Lo,Spherical:s1,SphericalHarmonics3:bv,SplineCurve:zf,SpotLight:vv,SpotLightHelper:c1,Sprite:z_,SpriteMaterial:Lf,SrcAlphaFactor:$l,SrcAlphaSaturateFactor:Dg,SrcColorFactor:Tg,StaticCopyUsage:tM,StaticDrawUsage:io,StaticReadUsage:jy,StereoCamera:OT,StreamCopyUsage:iM,StreamDrawUsage:Ky,StreamReadUsage:eM,StringKeyframeTrack:us,SubtractEquation:bg,SubtractiveBlending:lh,TOUCH:Ay,TangentSpaceNormalMap:gr,TetrahedronGeometry:Dc,Texture:At,TextureLoader:CT,TorusGeometry:Uc,TorusKnotGeometry:Nc,Triangle:wn,TriangleFanDrawMode:Ny,TriangleStripDrawMode:Uy,TrianglesDrawMode:Dy,TubeGeometry:Oc,UVMapping:cc,Uint16BufferAttribute:bf,Uint32BufferAttribute:Ef,Uint8BufferAttribute:BM,Uint8ClampedBufferAttribute:zM,Uniform:Zf,UniformsGroup:t1,UniformsLib:he,UniformsUtils:A_,UnsignedByteType:ki,UnsignedInt248Type:lr,UnsignedIntType:Oi,UnsignedShort4444Type:hf,UnsignedShort5551Type:ff,UnsignedShortType:uc,VSMShadowMap:oi,Vector2:K,Vector3:C,Vector4:lt,VectorKeyframeTrack:ho,VideoTexture:kA,WebGL1Renderer:F_,WebGL3DRenderTarget:wM,WebGLArrayRenderTarget:EM,WebGLCoordinateSystem:mi,WebGLCubeRenderTarget:C_,WebGLMultipleRenderTargets:E1,WebGLRenderTarget:ti,WebGLRenderer:Rf,WebGLUtils:N_,WebGPUCoordinateSystem:ro,WireframeGeometry:tv,WrapAroundEnding:Qa,ZeroCurvatureEnding:Vr,ZeroFactor:wg,ZeroSlopeEnding:Gr,ZeroStencilOp:Oy,_SRGBAFormat:Kl,createCanvasElement:M_},Symbol.toStringTag,{value:"Module"}));function A1(i){return{all:i=i||new Map,on:function(e,t){var n=i.get(e);n?n.push(t):i.set(e,[t])},off:function(e,t){var n=i.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):i.set(e,[]))},emit:function(e,t){var n=i.get(e);n&&n.slice().map(function(r){r(t)}),(n=i.get("*"))&&n.slice().map(function(r){r(e,t)})}}}class Iv{constructor(){it(this,"allVertices",{});it(this,"isolatedVertices",{});it(this,"connectedVertices",{});it(this,"sortedConnectedValues",[]);it(this,"needsSort",!1);it(this,"emitter",A1());it(this,"emit",this.emitter.emit.bind(this.emitter));it(this,"on",this.emitter.on.bind(this.emitter));it(this,"off",this.emitter.off.bind(this.emitter));it(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let r=this.allVertices[e];r?r.value===void 0&&(r.value=t):(r={value:t,previous:new Set,next:new Set},this.allVertices[e]=r);const s=r.next.size>0||r.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=r,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=r;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{r.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{r.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const r=this.connectedVertices[t];r&&(r.next.forEach(s=>{const a=this.connectedVertices[s];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),r.previous.forEach(s=>{const a=this.connectedVertices[s];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,r)=>{t.push(e(n,r))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const r=this.isolatedVertices[n];r.value!==void 0&&e(r.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],r=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(r.forEach(o=>{e.set(o,0)}),r.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=r.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const u=(e.get(c)||0)-1;e.set(c,u),u===0&&t.push(c)}))}if(n.length!==r.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class T1{constructor(e,t,n){it(this,"key");it(this,"stage");it(this,"callback");it(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class C1 extends Iv{constructor(t,n,r){super();it(this,"key");it(this,"scheduler");it(this,"callback",(t,n)=>n());it(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,r&&(this.callback=r.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,r){const s=new T1(this,t,n);return this.add(t,s,r),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(r=>{r.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,r=>{this.forEachNode(s=>{const a=performance.now();s.run(r??t);const o=performance.now()-a;n[s.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class R1 extends Iv{constructor(t){super();it(this,"lastTime",performance.now());it(this,"clampDeltaTo",.1);it(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const r=new C1(this,t,n==null?void 0:n.callback);return this.add(t,r,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),r}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(r=>{r.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,r={},s=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;r[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-s,stages:r}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const P1=Symbol("use-legacy-frame-compatibility-context"),L1=()=>{const i={useFrameOrders:[],useRenderOrders:[]};return Cn(P1,i),i},li=(i,e)=>{const t=ef(i,s=>s);let n;const r=t.subscribe(async s=>{n&&n();const a=await e(s);a&&(n=a)});ii(()=>{r(),n&&n()})},qn=i=>{const e=an(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const r=n(t.current);t.current=r,e.set(r)},current:i};return t},Dv=typeof window<"u",I1=()=>{const i=qn({width:0,height:0});if(!Dv)return{parentSize:i,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{r.disconnect(),s.disconnect(),r.observe(o),s.observe(o,e)},r=new ResizeObserver(([o])=>{const{width:l,height:c}=o.contentRect;l===i.current.width&&c===i.current.height||i.set({width:l,height:c})}),s=new MutationObserver(o=>{for(const l of o)for(const c of l.removedNodes)if(t===c&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const l=t.parentElement;l&&(i.set({width:l.clientWidth,height:l.clientHeight}),n(l))};return ii(()=>{r.disconnect(),s.disconnect()}),{parentSize:i,parentSizeAction:a}};function Uv(i,e){const t=an(i);let n=i;const r=t.subscribe(o=>n=o);return ii(r),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Jf=Symbol("threlte-hierarchical-parent-context"),Nv=()=>Tn(Jf),D1=i=>Cn(Jf,i),U1=i=>{const e=Uv(i);return Cn(Jf,e),e},Bc=()=>{const i=Tn("threlte");if(i===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return i},N1=()=>({onChildMount:Tn("threlte-hierarchical-object-on-mount"),onChildDestroy:Tn("threlte-hierarchical-object-on-destroy")});function O1(i,e){var p;Mi(e,!1);const t=()=>An(h,"$parentStore",n),[n,r]=pr();let s=Ke(e,"object",8,void 0),a=Ke(e,"onChildMount",8,void 0);const o=x=>{var v;(v=a())==null||v(x)};let l=Ke(e,"onChildDestroy",8,void 0);const c=x=>{var v;(v=l())==null||v(x)},{invalidate:u}=Bc(),h=Nv();let f=Ke(e,"parent",28,t);const d=N1();s()&&((p=d.onChildMount)==null||p.call(d,s()),u());const m=Uv(s(),(x,v)=>{var y,b;v&&((y=d.onChildDestroy)==null||y.call(d,v),u()),x&&((b=d.onChildMount)==null||b.call(d,x),u())});ii(()=>{var x;s()&&((x=d.onChildDestroy)==null||x.call(d,s()),u())}),Cn("threlte-hierarchical-object-on-mount",o),Cn("threlte-hierarchical-object-on-destroy",c),D1(m),rt(()=>t(),()=>{f(t())}),rt(()=>ft(s()),()=>{m.set(s())}),mr(),Ei();var _=pn(),g=Gt(_);yi(g,e,"default",{}),dt(i,_),Si(),r()}function Ov(i,e){Mi(e,!1);let t=Ke(e,"object",8);Ei(),O1(i,{get object(){return t()},onChildMount:n=>t().add(n),onChildDestroy:n=>t().remove(n),children:(n,r)=>{var s=pn(),a=Gt(s);yi(a,e,"default",{}),dt(n,s)},$$slots:{default:!0}}),Si()}const F1=()=>{Cn("threlte-cache",[])},zc=new Vt(75,0,.1,1e3);zc.position.z=5;zc.lookAt(0,0,0);const B1=()=>zc,z1=i=>{li(i.size,e=>{if(i.camera.current===zc){const t=i.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),i.invalidate()}})},k1=i=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(a=!1)=>{await lx(),!(!e.shouldDispose&&!a)&&(e.disposableObjects.forEach((o,l)=>{var c;(o===0||a)&&((c=l==null?void 0:l.dispose)==null||c.call(l),e.disposableObjects.delete(l))}),e.shouldDispose=!1)},collectDisposableObjects:(a,o)=>{const l=o??[];return a&&(a!=null&&a.dispose&&typeof a.dispose=="function"&&a.type!=="Scene"&&l.push(a),Object.entries(a).forEach(([c,u])=>{if(c==="parent"||c==="children"||typeof u!="object")return;const h=u;h!=null&&h.dispose&&e.collectDisposableObjects(h,l)})),l},addDisposableObjects:a=>{a.forEach(o=>{const l=e.disposableObjects.get(o);l?e.disposableObjects.set(o,l+1):e.disposableObjects.set(o,1)})},removeDisposableObjects:a=>{a.length!==0&&(a.forEach(o=>{const l=e.disposableObjects.get(o);l&&l>0&&e.disposableObjects.set(o,l-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},t={size:ef([i.userSize,i.parentSize],([a,o])=>a||o),camera:qn(B1()),scene:new Pf,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:qn(i.colorSpace),toneMapping:qn(i.toneMapping),dpr:qn(i.dpr),useLegacyLights:qn(i.useLegacyLights),shadows:qn(i.shadows),colorManagementEnabled:qn(i.colorManagementEnabled),renderMode:qn(i.renderMode),autoRender:qn(i.autoRender),scheduler:void 0,mainStage:void 0,renderStage:void 0,autoRenderTask:void 0,shouldRender:()=>t.renderMode.current==="always"||t.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||t.renderMode.current==="manual"&&e.advance},n=qn({});return Cn("threlte",t),Cn("threlte-internal-context",e),Cn("threlte-user-context",n),{ctx:t,internalCtx:e,getCtx:()=>t,getInternalCtx:()=>e}},V1=Eo.replace("dev",""),G1=Number.parseInt(V1),H1=i=>{const e=an(void 0),t=(n,r)=>{i.renderer=new Rf({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...r}),e.set(i.renderer)};return li([i.colorManagementEnabled],([n])=>{ot.enabled=n}),li([e,i.colorSpace],([n,r])=>{n&&(n.outputColorSpace=r)}),li([e,i.dpr],([n,r])=>{n==null||n.setPixelRatio(r)}),li([e,i.size],([n,r])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(r.width,r.height)}),li([e,i.shadows],([n,r])=>{n&&(n.shadowMap.enabled=!!r,r&&r!==!0?n.shadowMap.type=r:r===!0&&(n.shadowMap.type=lc))}),li([e,i.toneMapping],([n,r])=>{n&&(n.toneMapping=r)}),li([e,i.useLegacyLights],([n,r])=>{n&&r&&(n.useLegacyLights=r)}),{createRenderer:t}};var W1=Ln('<canvas class="svelte-clyidt"><!></canvas>');function X1(i,e){Mi(e,!1);const t=()=>An(g,"$initialized",n),[n,r]=pr();let s=Ke(e,"colorManagementEnabled",8,!0),a=Ke(e,"colorSpace",8,"srgb"),o=Ke(e,"dpr",24,()=>Dv?window.devicePixelRatio:1),l=Ke(e,"renderMode",8,"on-demand"),c=Ke(e,"rendererParameters",8,void 0),u=Ke(e,"shadows",8,lc),h=Ke(e,"size",8,void 0),f=Ke(e,"toneMapping",8,cf),d=Ke(e,"useLegacyLights",8,!(G1>=155)),m=Ke(e,"autoRender",8,!0),_=Ot(),g=an(!1);const p=an(h()),{parentSize:x,parentSizeAction:v}=I1(),{useRenderOrders:y}=L1(),b=k1({colorManagementEnabled:s(),colorSpace:a(),dpr:o(),renderMode:l(),parentSize:x,autoRender:m(),shadows:u(),toneMapping:f(),useLegacyLights:d(),userSize:p}),E=new R1;b.getCtx().mainStage=E.createStage(Symbol("threlte-main-stage")),b.getCtx().renderStage=E.createStage(Symbol("threlte-render-stage"),{after:b.ctx.mainStage,callback(L,O){b.ctx.shouldRender()&&O()}}),b.getCtx().autoRenderTask=b.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"),L=>{y.length>0||b.ctx.renderer.render(w.scene,w.camera.current)}),li([g,b.ctx.autoRender],([L,O])=>(L&&O?b.getCtx().autoRenderTask.start():b.getCtx().autoRenderTask.stop(),()=>{b.getCtx().autoRenderTask.stop()})),b.getCtx().scheduler=E,F1();const w=b.ctx;z1(w);const{createRenderer:P}=H1(w);bo(()=>{P(se(_),c()),b.getCtx().renderer.setAnimationLoop(L=>{b.getInternalCtx().dispose(),E.run(L),b.getInternalCtx().resetFrameInvalidation()}),g.set(!0)}),ii(()=>{var L;b.internalCtx.dispose(!0),b.ctx.scheduler.dispose(),(L=b.ctx.renderer)==null||L.dispose()}),rt(()=>ft(h()),()=>{p.set(h())}),rt(()=>ft(a()),()=>{b.ctx.colorSpace.set(a())}),rt(()=>ft(o()),()=>{b.ctx.dpr.set(o())}),rt(()=>ft(l()),()=>{b.ctx.renderMode.set(l())}),rt(()=>ft(m()),()=>{b.ctx.autoRender.set(m())}),rt(()=>ft(u()),()=>{b.ctx.shadows.set(u())}),rt(()=>ft(f()),()=>{b.ctx.toneMapping.set(f())}),mr();var N={ctx:w};Ei();var M=W1(),T=ei(M);{var z=L=>{Ov(L,{get object(){return jt(()=>b.ctx.scene)},children:(O,B)=>{var J=pn(),H=Gt(J);yi(H,e,"default",{}),dt(O,J)},$$slots:{default:!0}})};aa(T,L=>{t()&&L(z)})}of(M,L=>v==null?void 0:v(L)),mg(M,L=>ut(_,L),()=>se(_)),dt(i,M),Yx(e,"ctx",w);var W=Si(N);return r(),W}const q1=()=>Tn("threlte-internal-context");function Y1(i,e){Mi(e,!1);const t=()=>An(d,"$parentDispose",r),n=()=>An(m,"$mergedDispose",r),[r,s]=pr(),{collectDisposableObjects:a,addDisposableObjects:o,removeDisposableObjects:l}=q1();let c=Ke(e,"object",8,void 0),u=Ot(c()),h=Ke(e,"dispose",8,void 0);const f="threlte-disposable-object-context",d=Tn(f),m=an(h()??t()??!0);Cn(f,m);let _=Ot(n()?a(c()):[]);o(se(_)),ii(()=>{l(se(_))}),rt(()=>(ft(h()),t()),()=>{m.set(h()??t()??!0)}),rt(()=>(ft(c()),se(u),se(_),n()),()=>{c()!==se(u)&&(l(se(_)),ut(_,n()?a(c()):[]),o(se(_)),ut(u,c()))}),mr(),Ei();var g=pn(),p=Gt(g);yi(p,e,"default",{}),dt(i,g),Si(),s()}const $1=/^\s*class\s+/,Z1=i=>typeof i!="function"?!1:$1.test(i.toString()),J1=i=>Array.isArray(i),im=(i,e)=>Z1(i)?J1(e)?new i(...e):new i:i,rm=i=>"isObject3D"in i,sm=i=>"dispose"in i,Fv=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let r=0;r<t.length;r+=1)i=i[t[r]];return{target:i,key:n}}else return{target:i,key:e}},Gu=Symbol("initialValueBeforeAttach"),K1=()=>{const{invalidate:i}=Bc();let e=!1,t=Gu,n,r,s;const a=(l,c,u)=>{if(o(),!u){const h=l;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:h,key:f}=Fv(c,u);t=h[f],h[f]=l,r=h,s=f}e=!0,i()}},o=()=>{e&&(n?(n(),n=void 0):r&&s&&t!==Gu&&(r[s]=t,t=Gu,r=void 0,s=void 0),e=!1,i())};return ii(()=>{o()}),{update:a}},j1=i=>i&&i.isCamera,Bv=i=>i&&i.isOrthographicCamera,zv=i=>i&&i.isPerspectiveCamera,Q1=i=>zv(i)||Bv(i),eC=()=>{const{invalidate:i,size:e,camera:t}=Bc();let n,r;ii(()=>{r==null||r()});const s=l=>{n&&(Bv(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):zv(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(l,c)=>{if(r==null||r(),c||!Q1(l)){n=void 0;return}n=l,r=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!j1(l)||!c||(t.set(l),i())}}};var tC={},am;function nC(){if(am)return tC;throw am=1,new Error("Your application, or one of its dependencies, imported from 'svelte/internal', which was a private module used by Svelte 4 components that no longer exists in Svelte 5. It is not intended to be public API. If you're a library author and you used 'svelte/internal' deliberately, please raise an issue on https://github.com/sveltejs/svelte/issues detailing your use case.")}var kv=nC();const Vv=()=>{const i=kv.get_current_component(),e=(n,r)=>{const s=i.$$.callbacks[n];s&&s.forEach(a=>{a(r)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!i.$$.callbacks[n],enumerable:!0}),e},iC=()=>{const i=Vv(),e=[];let t,n=!1;const r=()=>{e.forEach(o=>o()),e.length=0,i("create",{ref:t,cleanup:o=>{e.push(o)}})},s=a=>{t=a,n&&r()};return bo(()=>{r(),n=!0}),ii(()=>{e.forEach(a=>a())}),{updateRef:s}},om=i=>!!(i!=null&&i.addEventListener),rC=()=>{const i=Vv(),e=kv.get_current_component(),t=l=>{l!=null&&l.type&&i(l.type,l)},n=(l,c)=>{om(l)&&c.forEach(u=>{l.removeEventListener(u,t)})},r=(l,c)=>{om(l)&&c.forEach(u=>{l.addEventListener(u,t)})},s=an(),a=an([]);return li([s,a],([l,c])=>(r(l,c),()=>n(l,c))),bo(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{s.set(l)}}},sC=i=>{const t=Tn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(i)).filter(Boolean),r=n.flatMap(c=>c.pluginProps??[]);let s=[];return ii(()=>{s.forEach(c=>c())}),{updateRef:c=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,c);h&&s.push(h)})},updateProps:c=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,c)})},updateRestProps:c=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,c)})},pluginsProps:r}},aC=new Set(["$$scope","$$slots","type","args","attach","instance"]),oC=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),lC=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,lm=(i,e,t)=>{var n,r,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=i[e])==null?void 0:n.setScalar)=="function"&&!((r=i[e])!=null&&r.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((s=i[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},cC=()=>{const{invalidate:i}=Bc(),e=new Map,t=new Map,n=(s,a,o,l)=>{if(lC(o)){const h=e.get(a);if(h&&h.instance===s&&h.value===o)return;e.set(a,{instance:s,value:o})}const{key:c,target:u}=Fv(s,a);if(o!=null){const h=t.get(a);if(h)h(u,c,o);else{const f=lm(u,c,o);t.set(a,f),f(u,c,o)}}else lm(u,c,o)(u,c,o);l.manualCamera||oC.has(c)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,a,o)=>{var l;for(const c in a)!aC.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(s,c,a[c],o),i()}}};var uC=Ln("<!> <!>",1);function Gv(i,e){const t=Wa(e,["children","$$slots","$$events","$$legacy"]),n=Wa(t,["is","args","attach","manual","makeDefault","dispose","ref"]);Mi(e,!1);const r=()=>An(d,"$parent",s),[s,a]=pr();let o=Ke(e,"is",8),l=Ke(e,"args",8,void 0),c=Ke(e,"attach",8,void 0),u=Ke(e,"manual",8,void 0),h=Ke(e,"makeDefault",8,void 0),f=Ke(e,"dispose",8,void 0);const d=Nv(),m=iC();let _=Ot(im(o(),l()));m.updateRef(se(_));let g=!1;const p=()=>{if(!g){g=!0;return}ut(_,im(o(),l())),m.updateRef(se(_))};let x=Ke(e,"ref",28,()=>se(_));const v=U1(se(_)),y=sC({ref:se(_),props:t}),b=(y==null?void 0:y.pluginsProps)??[],E=cC(),w=eC(),P=K1(),N=rC();rt(()=>(ft(o()),ft(l())),()=>{o(),l(),p()}),rt(()=>se(_),()=>{x(se(_))}),rt(()=>se(_),()=>{v.set(se(_))}),rt(()=>(se(_),ft(n),ft(u())),()=>{E.updateProps(se(_),n,{manualCamera:u(),pluginsProps:b})}),rt(()=>(se(_),ft(u())),()=>{w.update(se(_),u())}),rt(()=>(se(_),ft(h())),()=>{w.makeDefaultCamera(se(_),h())}),rt(()=>(se(_),r(),ft(c())),()=>{P.update(se(_),r(),c())}),rt(()=>se(_),()=>{N.updateRef(se(_))}),rt(()=>se(_),()=>{y==null||y.updateRef(se(_))}),rt(()=>ft(t),()=>{y==null||y.updateProps(t)}),rt(()=>ft(n),()=>{y==null||y.updateRestProps(n)}),mr(),Ei();var M=uC(),T=Gt(M);{var z=H=>{Y1(H,{get object(){return se(_)},get dispose(){return f()}})},W=ld(()=>(ft(sm),se(_),jt(()=>sm(se(_)))));aa(T,H=>{se(W)&&H(z)})}var L=Fn(T,2);{var O=H=>{Ov(H,{get object(){return se(_)},children:(Z,Q)=>{var re=pn(),ge=Gt(re);yi(ge,e,"default",{get ref(){return se(_)}}),dt(Z,re)},$$slots:{default:!0}})},B=ld(()=>(ft(rm),se(_),jt(()=>rm(se(_))))),J=H=>{var Z=pn(),Q=Gt(Z);yi(Q,e,"default",{get ref(){return se(_)}}),dt(H,Z)};aa(L,H=>{se(B)?H(O):H(J,-1)})}dt(i,M),Si(),a()}const hC={},fC=(i,e)=>{const t=hC[e]||w1[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...i,props:{...i.props,is:t}}},dC=i=>new Proxy(class{},{construct(e,[t]){const n=t;return new Gv(fC(n,i))}}),Hu=new Proxy(class{},{construct(i,[e]){const t=e;return new Gv(t)},get(i,e){return dC(e)}});var pC=Ln("<!> <!>",1);function mC(i){Hu.Mesh(i,{children:(e,t)=>{var n=pC(),r=Gt(n);Hu.BoxGeometry(r,{});var s=Fn(r,2);Hu.MeshBasicMaterial(s,{}),dt(e,n)},$$slots:{default:!0}})}var gC=Ln('<div class="star-paint svelte-1u1a8hg"><!></div>');function _C(i){var e=gC(),t=ei(e);X1(t,{size:{width:screen.width,height:screen.height},children:(n,r)=>{mC(n)},$$slots:{default:!0}}),dt(i,e)}var vC=Ln('<img src="/img/home.svg" alt="H"/>'),xC=Ln("<nav><!></nav> <nav></nav> <!> <!> <!> <!> <!>",1);function yC(i){function e({location:t,href:n,isPartiallyCurrent:r,isCurrent:s}){return n==="/"?s?{class:"hidden"}:{}:r||s?{class:"active"}:{class:"hidden"}}hy(i,{children:(t,n)=>{var r=xC(),s=Gt(r),a=ei(s);ay(a,{to:"/",id:"home-button",getProps:e,children:(f,d)=>{var m=vC();dt(f,m)},$$slots:{default:!0}});var o=Fn(s,4);Sa(o,{get component(){return dy}});var l=Fn(o,2);Sa(l,{path:"/",get component(){return yy}});var c=Fn(l,2);Sa(c,{path:"/resume",get component(){return Ey}});var u=Fn(c,2);Sa(u,{path:"/grocery-bag",get component(){return Sy}});var h=Fn(u,2);Sa(h,{path:"/star-paint",get component(){return _C}}),dt(t,r)},$$slots:{default:!0}})}const MC=an(window.location.pathname);new yC({target:document.getElementById("app")});const SC=()=>{let i=window.location.pathname;const e=document.querySelector("body");new MutationObserver(n=>{n.forEach(()=>{i!==document.location.pathname&&(i=document.location.pathname,MC.set(i))})}).observe(e,{childList:!0,subtree:!0})};window.onload=SC;
