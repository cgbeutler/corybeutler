var Sx=Object.defineProperty;var vp=s=>{throw TypeError(s)};var bx=(s,e,t)=>e in s?Sx(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var lt=(s,e,t)=>bx(s,typeof e!="symbol"?e+"":e,t),mh=(s,e,t)=>e.has(s)||vp("Cannot "+t);var z=(s,e,t)=>(mh(s,e,"read from private field"),t?t.call(s):e.get(s)),Qe=(s,e,t)=>e.has(s)?vp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Je=(s,e,t,n)=>(mh(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),dt=(s,e,t)=>(mh(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const wx="5";var fg;typeof window<"u"&&((fg=window.__svelte??(window.__svelte={})).v??(fg.v=new Set)).add(wx);let Ia=!1,Tx=!1;function Ex(){Ia=!0}Ex();const Ax=1,Cx=2,Rx=4,Px=8,Ix=16,Lx=1,Dx=2,qt=Symbol(),pg="http://www.w3.org/1999/xhtml",Nx="http://www.w3.org/2000/svg",Ux="http://www.w3.org/1998/Math/MathML",mg=!1;var Fx=Array.isArray,Ox=Array.prototype.indexOf,Ma=Array.prototype.includes,Bx=Array.from,gg=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,zx=Object.getOwnPropertyDescriptors,kx=Object.prototype,Vx=Array.prototype,_g=Object.getPrototypeOf,yp=Object.isExtensible;function Va(s){return typeof s=="function"}const hi=()=>{};function Gx(s){return s()}function yc(s){for(var e=0;e<s.length;e++)s[e]()}function xg(){var s,e,t=new Promise((n,i)=>{s=n,e=i});return{promise:t,resolve:s,reject:e}}const jt=2,Sa=4,Qo=8,vg=1<<24,li=16,Fi=32,Is=64,df=128,Wn=512,Vt=1024,Zt=2048,mi=4096,Xn=8192,fi=16384,Cr=32768,pf=1<<25,vr=65536,Mc=1<<17,Hx=1<<18,La=1<<19,yg=1<<20,yr=65536,Sc=1<<21,fa=1<<22,Rs=1<<23,Ps=Symbol("$state"),Mg=Symbol("legacy props"),uc=Symbol("attributes"),mf=Symbol("class"),Wx=Symbol("style"),Xx=Symbol("text"),wu=new class extends Error{constructor(){super(...arguments);lt(this,"name","StaleReactionError");lt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Jf(s){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function qx(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Yx(s){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zx(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $x(s){throw new Error("https://svelte.dev/e/effect_orphan")}function Jx(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kx(s){throw new Error("https://svelte.dev/e/props_invalid_value")}function jx(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qx(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ev(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function tv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function nv(){console.warn("https://svelte.dev/e/derived_inert")}function iv(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Sg(s){return s===this.v}function bg(s,e){return s!=s?e==e:s!==e||s!==null&&typeof s=="object"||typeof s=="function"}function wg(s){return!bg(s,this.v)}let yt=null;function ba(s){yt=s}function xi(s){return Tg().get(s)}function Kn(s,e){return Tg().set(s,e),e}function Rr(s,e=!1,t){yt={p:yt,i:!1,c:null,e:null,s,x:null,r:at,l:Ia&&!e?{s:null,u:null,$:[]}:null}}function Pr(s){var e=yt,t=e.e;if(t!==null){e.e=null;for(var n of t)Jg(n)}return e.i=!0,yt=e.p,{}}function el(){return!Ia||yt!==null&&yt.l===null}function Tg(s){return yt===null&&Jf(),yt.c??(yt.c=new Map(sv(yt)||void 0))}function sv(s){let e=s.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let ir=[];function Eg(){var s=ir;ir=[],yc(s)}function dr(s){if(ir.length===0&&!oo){var e=ir;queueMicrotask(()=>{e===ir&&Eg()})}ir.push(s)}function rv(){for(;ir.length>0;)Eg()}function Ag(s){var e=at;if(e===null)return ct.f|=Rs,s;if((e.f&Cr)===0&&(e.f&Sa)===0)throw s;bs(s,e)}function bs(s,e){for(;e!==null;){if((e.f&df)!==0){if((e.f&Cr)===0)throw s;try{e.b.error(s);return}catch(t){s=t}}e=e.parent}throw s}const av=-7169;function Rt(s,e){s.f=s.f&av|e}function Kf(s){(s.f&Wn)!==0||s.deps===null?Rt(s,Vt):Rt(s,mi)}function Cg(s){if(s!==null)for(const e of s)(e.f&jt)===0||(e.f&yr)===0||(e.f^=yr,Cg(e.deps))}function Rg(s,e,t){(s.f&Zt)!==0?e.add(s):(s.f&mi)!==0&&t.add(s),Cg(s.deps),Rt(s,Vt)}function jf(s,e,t){if(s==null)return e(void 0),t&&t(void 0),hi;const n=as(()=>s.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const Fr=[];function Qf(s,e){return{subscribe:Ln(s,e).subscribe}}function Ln(s,e=hi){let t=null;const n=new Set;function i(o){if(bg(s,o)&&(s=o,t)){const l=!Fr.length;for(const c of n)c[1](),Fr.push(c,s);if(l){for(let c=0;c<Fr.length;c+=2)Fr[c][0](Fr[c+1]);Fr.length=0}}}function r(o){i(o(s))}function a(o,l=hi){const c=[o,l];return n.add(c),n.size===1&&(t=e(i,r)||hi),o(s),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}function ed(s,e,t){const n=!Array.isArray(s),i=n?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return Qf(t,(a,o)=>{let l=!1;const c=[];let h=0,f=hi;const u=()=>{if(h)return;f();const p=e(n?c[0]:c,a,o);r?a(p):f=typeof p=="function"?p:hi},d=i.map((p,_)=>jf(p,m=>{c[_]=m,h&=~(1<<_),l&&u()},()=>{h|=1<<_}));return l=!0,u(),function(){yc(d),f(),l=!1}})}function bc(s){let e;return jf(s,t=>e=t)(),e}let gf=!1,pl=!1,_f=Symbol();function Pg(s,e,t){const n=t[e]??(t[e]={store:null,source:co(void 0),unsubscribe:hi});if(n.store!==s&&!(_f in t))if(n.unsubscribe(),n.store=s??null,s==null)n.source.v=void 0,n.unsubscribe=hi;else{var i=!0;n.unsubscribe=jf(s,r=>{i?n.source.v=r:Jt(n.source,r)}),i=!1}return s&&_f in t?bc(s):st(n.source)}function ov(s,e){return Lg(s,e),e}function Ig(){const s={};function e(){rd(()=>{for(var t in s)s[t].unsubscribe();gg(s,_f,{enumerable:!1,value:!0})})}return[s,e]}function Lg(s,e){gf=!0;try{s.set(e)}finally{gf=!1}}function lv(s,e,t=1){return Lg(s,e+t),e}function cv(s){var e=pl;try{return pl=!1,[s(),pl]}finally{pl=e}}let gh=null,Or=null,Ze=null,ao=null,$t=null,xf=null,oo=!1,_h=!1,aa=null,hc=null;var Mp=0;let uv=1;var pa,ys,lr,ma,ga,cr,_a,Ji,Yo,Cn,Zo,Ms,Ci,Ri,xa,va,_t,vf,no,yf,Dg,Ng,fc,hv,Mf,ra;const yu=class yu{constructor(){Qe(this,_t);lt(this,"id",uv++);Qe(this,pa,!1);lt(this,"linked",!0);Qe(this,ys,null);Qe(this,lr,null);lt(this,"async_deriveds",new Map);lt(this,"current",new Map);lt(this,"previous",new Map);lt(this,"unblocked",new Set);Qe(this,ma,new Set);Qe(this,ga,new Set);Qe(this,cr,new Set);Qe(this,_a,0);Qe(this,Ji,new Map);Qe(this,Yo,null);Qe(this,Cn,[]);Qe(this,Zo,[]);Qe(this,Ms,new Set);Qe(this,Ci,new Set);Qe(this,Ri,new Map);Qe(this,xa,new Set);lt(this,"is_fork",!1);Qe(this,va,!1)}skip_effect(e){z(this,Ri).has(e)||z(this,Ri).set(e,{d:[],m:[]}),z(this,xa).delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=z(this,Ri).get(e);if(n){z(this,Ri).delete(e);for(var i of n.d)Rt(i,Zt),t(i);for(i of n.m)Rt(i,mi),t(i)}z(this,xa).add(e)}capture(e,t,n=!1){e.v!==qt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Rs)===0&&(this.current.set(e,[t,n]),$t==null||$t.set(e,t)),this.is_fork||(e.v=t)}activate(){Ze=this}deactivate(){Ze=null,$t=null}flush(){try{_h=!0,Ze=this,dt(this,_t,no).call(this)}finally{Mp=0,xf=null,aa=null,hc=null,_h=!1,Ze=null,$t=null,pr.clear()}}discard(){for(const e of z(this,ga))e(this);z(this,ga).clear(),z(this,cr).clear(),dt(this,_t,ra).call(this)}register_created_effect(e){z(this,Zo).push(e)}increment(e,t){if(Je(this,_a,z(this,_a)+1),e){let n=z(this,Ji).get(t)??0;z(this,Ji).set(t,n+1)}}decrement(e,t){if(Je(this,_a,z(this,_a)-1),e){let n=z(this,Ji).get(t)??0;n===1?z(this,Ji).delete(t):z(this,Ji).set(t,n-1)}z(this,va)||(Je(this,va,!0),dr(()=>{Je(this,va,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const n of e)z(this,Ms).add(n);for(const n of t)z(this,Ci).add(n);e.clear(),t.clear()}oncommit(e){z(this,ma).add(e)}ondiscard(e){z(this,ga).add(e)}on_fork_commit(e){z(this,cr).add(e)}run_fork_commit_callbacks(){for(const e of z(this,cr))e(this);z(this,cr).clear()}settled(){return(z(this,Yo)??Je(this,Yo,xg())).promise}static ensure(){var e;if(Ze===null){const t=Ze=new yu;dt(e=t,_t,Mf).call(e),!_h&&!oo&&dr(()=>{z(t,pa)||t.flush()})}return Ze}apply(){{$t=null;return}}schedule(e){var i;if(xf=e,(i=e.b)!=null&&i.is_pending&&(e.f&(Sa|Qo|vg))!==0&&(e.f&Cr)===0){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(aa!==null&&t===at&&(ct===null||(ct.f&jt)===0)&&!gf)return;if((n&(Is|Fi))!==0){if((n&Vt)===0)return;t.f^=Vt}}z(this,Cn).push(t)}};pa=new WeakMap,ys=new WeakMap,lr=new WeakMap,ma=new WeakMap,ga=new WeakMap,cr=new WeakMap,_a=new WeakMap,Ji=new WeakMap,Yo=new WeakMap,Cn=new WeakMap,Zo=new WeakMap,Ms=new WeakMap,Ci=new WeakMap,Ri=new WeakMap,xa=new WeakMap,va=new WeakMap,_t=new WeakSet,vf=function(){if(this.is_fork)return!0;for(const n of z(this,Ji).keys()){for(var e=n,t=!1;e.parent!==null;){if(z(this,Ri).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},no=function(){var l,c,h,f;if(Je(this,pa,!0),Mp++>1e3&&(dt(this,_t,ra).call(this),dv()),!dt(this,_t,vf).call(this)){for(const u of z(this,Ms))z(this,Ci).delete(u),Rt(u,Zt),this.schedule(u);for(const u of z(this,Ci))Rt(u,mi),this.schedule(u)}const e=z(this,Cn);Je(this,Cn,[]),this.apply();var t=aa=[],n=[],i=hc=[];for(const u of e)try{dt(this,_t,yf).call(this,u,t,n)}catch(d){throw Og(u),d}if(Ze=null,i.length>0){var r=yu.ensure();for(const u of i)r.schedule(u)}if(aa=null,hc=null,dt(this,_t,vf).call(this)){dt(this,_t,fc).call(this,n),dt(this,_t,fc).call(this,t);for(const[u,d]of z(this,Ri))Fg(u,d);i.length>0&&dt(l=Ze,_t,no).call(l);return}const a=dt(this,_t,Dg).call(this);if(a){dt(c=a,_t,Ng).call(c,this);return}z(this,Ms).clear(),z(this,Ci).clear();for(const u of z(this,ma))u(this);z(this,ma).clear(),ao=this,Sp(n),Sp(t),ao=null,(h=z(this,Yo))==null||h.resolve();var o=Ze;if(this.linked&&z(this,_a)===0&&dt(this,_t,ra).call(this),z(this,Cn).length>0){o===null&&(o=this,dt(this,_t,Mf).call(this));const u=o;z(u,Cn).push(...z(this,Cn).filter(d=>!z(u,Cn).includes(d)))}o!==null&&dt(f=o,_t,no).call(f)},yf=function(e,t,n){e.f^=Vt;for(var i=e.first;i!==null;){var r=i.f,a=(r&(Fi|Is))!==0,o=a&&(r&Vt)!==0,l=o||(r&Xn)!==0||z(this,Ri).has(i);if(!l&&i.fn!==null){a?i.f^=Vt:(r&Sa)!==0?t.push(i):Na(i)&&((r&li)!==0&&z(this,Ci).add(i),Sr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var h=i.next;if(h!==null){i=h;break}i=i.parent}}},Dg=function(){for(var e=z(this,ys);e!==null;){if(!e.is_fork){for(const[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=z(e,ys)}return null},Ng=function(e){var n;for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve)}const t=i=>{var r=i.reactions;if(r!==null)for(const l of r){var a=l.f;if((a&jt)!==0)t(l);else{var o=l;a&(fa|li)&&!this.async_deriveds.has(o)&&(z(this,Ci).delete(o),Rt(o,Zt),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),dt(n=e,_t,ra).call(n),Ze=this,dt(this,_t,no).call(this)},fc=function(e){for(var t=0;t<e.length;t+=1)Rg(e[t],z(this,Ms),z(this,Ci))},hv=function(){var h;dt(this,_t,ra).call(this);for(let f=gh;f!==null;f=z(f,lr)){var e=f.id<this.id,t=[];for(const[u,[d,p]]of this.current){if(f.current.has(u)){var n=f.current.get(u)[0];if(e&&d!==n)f.current.set(u,[d,p]);else continue}t.push(u)}if(e)for(const[u,d]of this.async_deriveds){const p=f.async_deriveds.get(u);p&&d.promise.then(p.resolve)}if(z(f,pa)){var i=[...f.current.keys()].filter(u=>!this.current.has(u));if(i.length===0)e&&f.discard();else if(t.length>0){if(e)for(const u of z(this,xa))f.unskip_effect(u,d=>{var p;(d.f&(li|fa))!==0?f.schedule(d):dt(p=f,_t,fc).call(p,[d])});f.activate();var r=new Set,a=new Map;for(var o of t)Ug(o,i,r,a);a=new Map;var l=[...f.current.keys()].filter(u=>this.current.has(u)?this.current.get(u)[0]!==u.v:!0);if(l.length>0)for(const u of z(this,Zo))(u.f&(fi|Xn|Mc))===0&&td(u,l,a)&&((u.f&(fa|li))!==0?(Rt(u,Zt),f.schedule(u)):z(f,Ms).add(u));if(z(f,Cn).length>0){f.apply();for(var c of z(f,Cn))dt(h=f,_t,yf).call(h,c,[],[]);Je(f,Cn,[])}f.deactivate()}}}},Mf=function(){Or===null?gh=Or=this:(Je(Or,lr,this),Je(this,ys,Or)),Or=this},ra=function(){var e=z(this,ys),t=z(this,lr);e===null?gh=t:Je(e,lr,t),t===null?Or=e:Je(t,ys,e),this.linked=!1};let Mr=yu;function fv(s){var e=oo;oo=!0;try{for(var t;;){if(rv(),Ze===null)return t;Ze.flush()}}finally{oo=e}}function dv(){try{Jx()}catch(s){bs(s,xf)}}let ni=null;function Sp(s){var e=s.length;if(e!==0){for(var t=0;t<e;){var n=s[t++];if((n.f&(fi|Xn))===0&&Na(n)&&(ni=new Set,Sr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Qg(n),(ni==null?void 0:ni.size)>0)){pr.clear();for(const i of ni){if((i.f&(fi|Xn))!==0)continue;const r=[i];let a=i.parent;for(;a!==null;)ni.has(a)&&(ni.delete(a),r.push(a)),a=a.parent;for(let o=r.length-1;o>=0;o--){const l=r[o];(l.f&(fi|Xn))===0&&Sr(l)}}ni.clear()}}ni=null}}function Ug(s,e,t,n){if(!t.has(s)&&(t.add(s),s.reactions!==null))for(const i of s.reactions){const r=i.f;(r&jt)!==0?Ug(i,e,t,n):(r&(fa|li))!==0&&(r&Zt)===0&&td(i,e,n)&&(Rt(i,Zt),nd(i))}}function td(s,e,t){const n=t.get(s);if(n!==void 0)return n;if(s.deps!==null)for(const i of s.deps){if(Ma.call(e,i))return!0;if((i.f&jt)!==0&&td(i,e,t))return t.set(i,!0),!0}return t.set(s,!1),!1}function nd(s){Ze.schedule(s)}function Fg(s,e){if(!((s.f&Fi)!==0&&(s.f&Vt)!==0)){(s.f&Zt)!==0?e.d.push(s):(s.f&mi)!==0&&e.m.push(s),Rt(s,Vt);for(var t=s.first;t!==null;)Fg(t,e),t=t.next}}function Og(s){Rt(s,Vt);for(var e=s.first;e!==null;)Og(e),e=e.next}function Bg(s){let e=0,t=tl(0),n;return()=>{Eu()&&(st(t),Au(()=>(e===0&&(n=as(()=>s(()=>uo(t)))),e+=1,()=>{dr(()=>{e-=1,e===0&&(n==null||n(),n=void 0,uo(t))})})))}}var pv=vr|La;function mv(s,e,t,n){new gv(s,e,t,n)}var kn,$f,Vn,ur,_n,Gn,ln,Rn,Ki,hr,Ss,ya,$o,Jo,ji,Mu,Nt,_v,xv,vv,Sf,dc,pc,bf,wf;class gv{constructor(e,t,n,i){Qe(this,Nt);lt(this,"parent");lt(this,"is_pending",!1);lt(this,"transform_error");Qe(this,kn);Qe(this,$f,null);Qe(this,Vn);Qe(this,ur);Qe(this,_n);Qe(this,Gn,null);Qe(this,ln,null);Qe(this,Rn,null);Qe(this,Ki,null);Qe(this,hr,0);Qe(this,Ss,0);Qe(this,ya,!1);Qe(this,$o,new Set);Qe(this,Jo,new Set);Qe(this,ji,null);Qe(this,Mu,Bg(()=>(Je(this,ji,tl(z(this,hr))),()=>{Je(this,ji,null)})));var r;Je(this,kn,e),Je(this,Vn,t),Je(this,ur,a=>{var o=at;o.b=this,o.f|=df,n(a)}),this.parent=at.b,this.transform_error=i??((r=this.parent)==null?void 0:r.transform_error)??(a=>a),Je(this,_n,od(()=>{dt(this,Nt,Sf).call(this)},pv))}defer_effect(e){Rg(e,z(this,$o),z(this,Jo))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!z(this,Vn).pending}update_pending_count(e,t){dt(this,Nt,bf).call(this,e,t),Je(this,hr,z(this,hr)+e),!(!z(this,ji)||z(this,ya))&&(Je(this,ya,!0),dr(()=>{Je(this,ya,!1),z(this,ji)&&Ec(z(this,ji),z(this,hr))}))}get_effect_pending(){return z(this,Mu).call(this),st(z(this,ji))}error(e){if(!z(this,Vn).onerror&&!z(this,Vn).failed)throw e;Ze!=null&&Ze.is_fork?(z(this,Gn)&&Ze.skip_effect(z(this,Gn)),z(this,ln)&&Ze.skip_effect(z(this,ln)),z(this,Rn)&&Ze.skip_effect(z(this,Rn)),Ze.on_fork_commit(()=>{dt(this,Nt,wf).call(this,e)})):dt(this,Nt,wf).call(this,e)}}kn=new WeakMap,$f=new WeakMap,Vn=new WeakMap,ur=new WeakMap,_n=new WeakMap,Gn=new WeakMap,ln=new WeakMap,Rn=new WeakMap,Ki=new WeakMap,hr=new WeakMap,Ss=new WeakMap,ya=new WeakMap,$o=new WeakMap,Jo=new WeakMap,ji=new WeakMap,Mu=new WeakMap,Nt=new WeakSet,_v=function(){try{Je(this,Gn,$i(()=>z(this,ur).call(this,z(this,kn))))}catch(e){this.error(e)}},xv=function(e){const t=z(this,Vn).failed;t&&Je(this,Rn,$i(()=>{t(z(this,kn),()=>e,()=>()=>{})}))},vv=function(){const e=z(this,Vn).pending;e&&(this.is_pending=!0,Je(this,ln,$i(()=>e(z(this,kn)))),dr(()=>{var t=Je(this,Ki,document.createDocumentFragment()),n=To();t.append(n),Je(this,Gn,dt(this,Nt,pc).call(this,()=>$i(()=>z(this,ur).call(this,n)))),z(this,Ss)===0&&(z(this,kn).before(t),Je(this,Ki,null),ho(z(this,ln),()=>{Je(this,ln,null)}),dt(this,Nt,dc).call(this,Ze))}))},Sf=function(){try{if(this.is_pending=this.has_pending_snippet(),Je(this,Ss,0),Je(this,hr,0),Je(this,Gn,$i(()=>{z(this,ur).call(this,z(this,kn))})),z(this,Ss)>0){var e=Je(this,Ki,document.createDocumentFragment());n_(z(this,Gn),e);const t=z(this,Vn).pending;Je(this,ln,$i(()=>t(z(this,kn))))}else dt(this,Nt,dc).call(this,Ze)}catch(t){this.error(t)}},dc=function(e){this.is_pending=!1,e.transfer_effects(z(this,$o),z(this,Jo))},pc=function(e){var t=at,n=ct,i=yt;Zn(z(this,_n)),Yn(z(this,_n)),ba(z(this,_n).ctx);try{return Mr.ensure(),e()}catch(r){return Ag(r),null}finally{Zn(t),Yn(n),ba(i)}},bf=function(e,t){var n;if(!this.has_pending_snippet()){this.parent&&dt(n=this.parent,Nt,bf).call(n,e,t);return}Je(this,Ss,z(this,Ss)+e),z(this,Ss)===0&&(dt(this,Nt,dc).call(this,t),z(this,ln)&&ho(z(this,ln),()=>{Je(this,ln,null)}),z(this,Ki)&&(z(this,kn).before(z(this,Ki)),Je(this,Ki,null)))},wf=function(e){z(this,Gn)&&(Dn(z(this,Gn)),Je(this,Gn,null)),z(this,ln)&&(Dn(z(this,ln)),Je(this,ln,null)),z(this,Rn)&&(Dn(z(this,Rn)),Je(this,Rn,null));var t=z(this,Vn).onerror;let n=z(this,Vn).failed;var i=!1,r=!1;const a=()=>{if(i){iv();return}i=!0,r&&tv(),z(this,Rn)!==null&&ho(z(this,Rn),()=>{Je(this,Rn,null)}),dt(this,Nt,pc).call(this,()=>{dt(this,Nt,Sf).call(this)})},o=l=>{try{r=!0,t==null||t(l,a),r=!1}catch(c){bs(c,z(this,_n)&&z(this,_n).parent)}n&&Je(this,Rn,dt(this,Nt,pc).call(this,()=>{try{return $i(()=>{var c=at;c.b=this,c.f|=df,n(z(this,kn),()=>l,()=>a)})}catch(c){return bs(c,z(this,_n).parent),null}}))};dr(()=>{var l;try{l=this.transform_error(e)}catch(c){bs(c,z(this,_n)&&z(this,_n).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>bs(c,z(this,_n)&&z(this,_n).parent)):o(l)})};function yv(s,e,t,n){const i=el()?wa:kg;var r=s.filter(u=>!u.settled);if(t.length===0&&r.length===0){n(e.map(i));return}var a=at,o=Mv(),l=r.length===1?r[0].promise:r.length>1?Promise.all(r.map(u=>u.promise)):null;function c(u){if((a.f&fi)===0){o();try{n(u)}catch(d){bs(d,a)}wc()}}var h=zg();if(t.length===0){l.then(()=>c(e.map(i))).finally(h);return}function f(){Promise.all(t.map(u=>Sv(u))).then(u=>c([...e.map(i),...u])).catch(u=>bs(u,a)).finally(h)}l?l.then(()=>{o(),f(),wc()}):f()}function Mv(){var s=at,e=ct,t=yt,n=Ze;return function(r=!0){Zn(s),Yn(e),ba(t),r&&(s.f&fi)===0&&(n==null||n.activate(),n==null||n.apply())}}function wc(s=!0){Zn(null),Yn(null),ba(null),s&&(Ze==null||Ze.deactivate())}function zg(){var s=at,e=s.b,t=Ze,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n,s),()=>{e.update_pending_count(-1,t),t.decrement(n,s)}}function wa(s){var e=jt|Zt;return at!==null&&(at.f|=La),{ctx:yt,deps:null,effects:null,equals:Sg,f:e,fn:s,reactions:null,rv:0,v:qt,wv:0,parent:at,ac:null}}const ml=Symbol("obsolete");function Sv(s,e,t){let n=at;n===null&&qx();var i=void 0,r=tl(qt),a=!ct,o=new Set;return Dv(()=>{var d;var l=at,c=xg();i=c.promise;try{Promise.resolve(s()).then(c.resolve,p=>{p!==wu&&c.reject(p)}).finally(wc)}catch(p){c.reject(p),wc()}var h=Ze;if(a){if((l.f&Cr)!==0)var f=zg();if(n.b.is_rendered())(d=h.async_deriveds.get(l))==null||d.reject(ml);else for(const p of o.values())p.reject(ml);o.add(c),h.async_deriveds.set(l,c)}const u=(p,_=void 0)=>{f==null||f(),o.delete(c),_!==ml&&(h.activate(),_?(r.f|=Rs,Ec(r,_)):((r.f&Rs)!==0&&(r.f^=Rs),Ec(r,p)),h.deactivate())};c.promise.then(u,p=>u(null,p||"unknown"))}),rd(()=>{for(const l of o)l.reject(ml)}),new Promise(l=>{function c(h){function f(){h===i?l(r):c(i)}h.then(f,f)}c(i)})}function lo(s){const e=wa(s);return i_(e),e}function kg(s){const e=wa(s);return e.equals=wg,e}function bv(s){var e=s.effects;if(e!==null){s.effects=null;for(var t=0;t<e.length;t+=1)Dn(e[t])}}function id(s){var e,t=at,n=s.parent;if(!ns&&n!==null&&(n.f&(fi|Xn))!==0)return nv(),s.v;Zn(n);try{s.f&=~yr,bv(s),e=o_(s)}finally{Zn(t)}return e}function Vg(s){var e=id(s);if(!s.equals(e)&&(s.wv=r_(),(!(Ze!=null&&Ze.is_fork)||s.deps===null)&&(Ze!==null?(Ze.capture(s,e,!0),ao==null||ao.capture(s,e,!0)):s.v=e,s.deps===null))){Rt(s,Vt);return}ns||($t!==null?(Eu()||Ze!=null&&Ze.is_fork)&&$t.set(s,e):Kf(s))}function wv(s){var e,t;if(s.effects!==null)for(const n of s.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),(t=n.ac)==null||t.abort(wu),n.teardown=hi,n.ac=null,Eo(n,0),ld(n))}function Gg(s){if(s.effects!==null)for(const e of s.effects)e.teardown&&Sr(e)}let Tc=new Set;const pr=new Map;let Hg=!1;function tl(s,e){var t={f:0,v:s,reactions:null,equals:Sg,rv:0,wv:0};return t}function Ai(s,e){const t=tl(s);return i_(t),t}function co(s,e=!1,t=!0){var i;const n=tl(s);return e||(n.equals=wg),Ia&&t&&yt!==null&&yt.l!==null&&((i=yt.l).s??(i.s=[])).push(n),n}function Jt(s,e,t=!1){ct!==null&&(!ci||(ct.f&Mc)!==0)&&el()&&(ct.f&(jt|li|fa|Mc))!==0&&(qn===null||!Ma.call(qn,s))&&ev();let n=t?oa(e):e;return Ec(s,n,hc)}function Ec(s,e,t=null){if(!s.equals(e)){pr.set(s,ns?e:s.v);var n=Mr.ensure();if(n.capture(s,e),(s.f&jt)!==0){const i=s;(s.f&Zt)!==0&&id(i),$t===null&&Kf(i)}s.wv=r_(),Wg(s,Zt,t),el()&&at!==null&&(at.f&Vt)!==0&&(at.f&(Fi|Is))===0&&(zn===null?Fv([s]):zn.push(s)),!n.is_fork&&Tc.size>0&&!Hg&&Tv()}return e}function Tv(){Hg=!1;for(const s of Tc){(s.f&Vt)!==0&&Rt(s,mi);let e;try{e=Na(s)}catch{e=!0}e&&Sr(s)}Tc.clear()}function uo(s){Jt(s,s.v+1)}function Wg(s,e,t){var n=s.reactions;if(n!==null)for(var i=el(),r=n.length,a=0;a<r;a++){var o=n[a],l=o.f;if(!(!i&&o===at)){var c=(l&Zt)===0;if(c&&Rt(o,e),(l&Mc)!==0)Tc.add(o);else if((l&jt)!==0){var h=o;$t==null||$t.delete(h),(l&yr)===0&&(l&Wn&&(at===null||(at.f&Sc)===0)&&(o.f|=yr),Wg(h,mi,t))}else if(c){var f=o;(l&li)!==0&&ni!==null&&ni.add(f),t!==null?t.push(f):nd(f)}}}}function oa(s){if(typeof s!="object"||s===null||Ps in s)return s;const e=_g(s);if(e!==kx&&e!==Vx)return s;var t=new Map,n=Fx(s),i=Ai(0),r=mr,a=o=>{if(mr===r)return o();var l=ct,c=mr;Yn(null),Tp(r);var h=o();return Yn(l),Tp(c),h};return n&&t.set("length",Ai(s.length)),new Proxy(s,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&jx();var h=t.get(l);return h===void 0?a(()=>{var f=Ai(c.value);return t.set(l,f),f}):Jt(h,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const h=a(()=>Ai(qt));t.set(l,h),uo(i)}}else Jt(c,qt),uo(i);return!0},get(o,l,c){var d;if(l===Ps)return s;var h=t.get(l),f=l in o;if(h===void 0&&(!f||(d=Cs(o,l))!=null&&d.writable)&&(h=a(()=>{var p=oa(f?o[l]:qt),_=Ai(p);return _}),t.set(l,h)),h!==void 0){var u=st(h);return u===qt?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var h=t.get(l);h&&(c.value=st(h))}else if(c===void 0){var f=t.get(l),u=f==null?void 0:f.v;if(f!==void 0&&u!==qt)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===Ps)return!0;var c=t.get(l),h=c!==void 0&&c.v!==qt||Reflect.has(o,l);if(c!==void 0||at!==null&&(!h||(u=Cs(o,l))!=null&&u.writable)){c===void 0&&(c=a(()=>{var d=h?oa(o[l]):qt,p=Ai(d);return p}),t.set(l,c));var f=st(c);if(f===qt)return!1}return h},set(o,l,c,h){var v;var f=t.get(l),u=l in o;if(n&&l==="length")for(var d=c;d<f.v;d+=1){var p=t.get(d+"");p!==void 0?Jt(p,qt):d in o&&(p=a(()=>Ai(qt)),t.set(d+"",p))}if(f===void 0)(!u||(v=Cs(o,l))!=null&&v.writable)&&(f=a(()=>Ai(void 0)),Jt(f,oa(c)),t.set(l,f));else{u=f.v!==qt;var _=a(()=>oa(c));Jt(f,_)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m!=null&&m.set&&m.set.call(h,c),!u){if(n&&typeof l=="string"){var g=t.get("length"),x=Number(l);Number.isInteger(x)&&x>=g.v&&Jt(g,x+1)}uo(i)}return!0},ownKeys(o){st(i);var l=Reflect.ownKeys(o).filter(f=>{var u=t.get(f);return u===void 0||u.v!==qt});for(var[c,h]of t)h.v!==qt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Qx()}})}var bp,Xg,qg,Yg;function Ev(){if(bp===void 0){bp=window,Xg=/Firefox/.test(navigator.userAgent);var s=Element.prototype,e=Node.prototype,t=Text.prototype;qg=Cs(e,"firstChild").get,Yg=Cs(e,"nextSibling").get,yp(s)&&(s[mf]=void 0,s[uc]=null,s[Wx]=void 0,s.__e=void 0),yp(t)&&(t[Xx]=void 0)}}function To(s=""){return document.createTextNode(s)}function ws(s){return qg.call(s)}function Tu(s){return Yg.call(s)}function Ls(s,e){return ws(s)}function Da(s,e=!1){{var t=ws(s);return t instanceof Comment&&t.data===""?Tu(t):t}}function nl(s,e=1,t=!1){let n=s;for(;e--;)n=Tu(n);return n}function Av(){return!1}function Zg(s,e,t){return document.createElementNS(e??pg,s,void 0)}function sd(s){var e=ct,t=at;Yn(null),Zn(null);try{return s()}finally{Yn(e),Zn(t)}}function $g(s){at===null&&(ct===null&&$x(),Zx()),ns&&Yx()}function Cv(s,e){var t=e.last;t===null?e.last=e.first=s:(t.next=s,s.prev=t,e.last=s)}function ki(s,e){var t=at;t!==null&&(t.f&Xn)!==0&&(s|=Xn);var n={ctx:yt,deps:null,nodes:null,f:s|Zt|Wn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Ze==null||Ze.register_created_effect(n);var i=n;if((s&Sa)!==0)aa!==null?aa.push(n):Mr.ensure().schedule(n);else if(e!==null){try{Sr(n)}catch(a){throw Dn(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&La)===0&&(i=i.first,(s&li)!==0&&(s&vr)!==0&&i!==null&&(i.f|=vr))}if(i!==null&&(i.parent=t,t!==null&&Cv(i,t),ct!==null&&(ct.f&jt)!==0&&(s&Is)===0)){var r=ct;(r.effects??(r.effects=[])).push(i)}return n}function Eu(){return ct!==null&&!ci}function rd(s){const e=ki(Qo,null);return Rt(e,Vt),e.teardown=s,e}function ai(s){$g();var e=at.f,t=!ct&&(e&Fi)!==0&&(e&Cr)===0;if(t){var n=yt;(n.e??(n.e=[])).push(s)}else return Jg(s)}function Jg(s){return ki(Sa|yg,s)}function Bn(s){return $g(),ki(Qo|yg,s)}function Rv(s){Mr.ensure();const e=ki(Is|La,s);return(t={})=>new Promise(n=>{t.outro?ho(e,()=>{Dn(e),n(void 0)}):(Dn(e),n(void 0))})}function Pv(s){return ki(Sa,s)}function Iv(s,e){var t=yt,n={effect:null,ran:!1,deps:s};t.l.$.push(n),n.effect=Au(()=>{if(!n.ran){n.ran=!0;var i=at;try{Zn(i.parent),as(e)}finally{Zn(i)}}})}function Lv(){var s=yt;Au(()=>{for(var e of s.l.$){e.deps();var t=e.effect;(t.f&Vt)!==0&&t.deps!==null&&Rt(t,mi),Na(t)&&Sr(t),e.ran=!1}})}function Dv(s){return ki(fa|La,s)}function Au(s,e=0){return ki(Qo|e,s)}function ad(s,e=[],t=[],n=[]){yv(n,e,t,i=>{ki(Qo,()=>s(...i.map(st)))})}function od(s,e=0){var t=ki(li|e,s);return t}function $i(s){return ki(Fi|La,s)}function Kg(s){var e=s.teardown;if(e!==null){const t=ns,n=ct;wp(!0),Yn(null);try{e.call(null)}finally{wp(t),Yn(n)}}}function ld(s,e=!1){var t=s.first;for(s.first=s.last=null;t!==null;){const i=t.ac;i!==null&&sd(()=>{i.abort(wu)});var n=t.next;(t.f&Is)!==0?t.parent=null:Dn(t,e),t=n}}function Nv(s){for(var e=s.first;e!==null;){var t=e.next;(e.f&Fi)===0&&Dn(e),e=t}}function Dn(s,e=!0){var t=!1;(e||(s.f&Hx)!==0)&&s.nodes!==null&&s.nodes.end!==null&&(jg(s.nodes.start,s.nodes.end),t=!0),Rt(s,pf),ld(s,e&&!t),Eo(s,0);var n=s.nodes&&s.nodes.t;if(n!==null)for(const r of n)r.stop();Kg(s),s.f^=pf,s.f|=fi;var i=s.parent;i!==null&&i.first!==null&&Qg(s),s.next=s.prev=s.teardown=s.ctx=s.deps=s.fn=s.nodes=s.ac=s.b=null}function jg(s,e){for(;s!==null;){var t=s===e?null:Tu(s);s.remove(),s=t}}function Qg(s){var e=s.parent,t=s.prev,n=s.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===s&&(e.first=n),e.last===s&&(e.last=t))}function ho(s,e,t=!0){var n=[];e_(s,n,!0);var i=()=>{t&&Dn(s),e&&e()},r=n.length;if(r>0){var a=()=>--r||i();for(var o of n)o.out(a)}else i()}function e_(s,e,t){if((s.f&Xn)===0){s.f^=Xn;var n=s.nodes&&s.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var i=s.first;i!==null;){var r=i.next;if((i.f&Is)===0){var a=(i.f&vr)!==0||(i.f&Fi)!==0&&(s.f&li)!==0;e_(i,e,a?t:!1)}i=r}}}function Uv(s){t_(s,!0)}function t_(s,e){if((s.f&Xn)!==0){s.f^=Xn,(s.f&Vt)===0&&(Rt(s,Zt),Mr.ensure().schedule(s));for(var t=s.first;t!==null;){var n=t.next,i=(t.f&vr)!==0||(t.f&Fi)!==0;t_(t,i?e:!1),t=n}var r=s.nodes&&s.nodes.t;if(r!==null)for(const a of r)(a.is_global||e)&&a.in()}}function n_(s,e){if(s.nodes)for(var t=s.nodes.start,n=s.nodes.end;t!==null;){var i=t===n?null:Tu(t);e.append(t),t=i}}let mc=!1,ns=!1;function wp(s){ns=s}let ct=null,ci=!1;function Yn(s){ct=s}let at=null;function Zn(s){at=s}let qn=null;function i_(s){ct!==null&&(qn===null?qn=[s]:qn.push(s))}let xn=null,An=0,zn=null;function Fv(s){zn=s}let s_=1,sr=0,mr=sr;function Tp(s){mr=s}function r_(){return++s_}function Na(s){var e=s.f;if((e&Zt)!==0)return!0;if(e&jt&&(s.f&=~yr),(e&mi)!==0){for(var t=s.deps,n=t.length,i=0;i<n;i++){var r=t[i];if(Na(r)&&Vg(r),r.wv>s.wv)return!0}(e&Wn)!==0&&$t===null&&Rt(s,Vt)}return!1}function a_(s,e,t=!0){var n=s.reactions;if(n!==null&&!(qn!==null&&Ma.call(qn,s)))for(var i=0;i<n.length;i++){var r=n[i];(r.f&jt)!==0?a_(r,e,!1):e===r&&(t?Rt(r,Zt):(r.f&Vt)!==0&&Rt(r,mi),nd(r))}}function o_(s){var _;var e=xn,t=An,n=zn,i=ct,r=qn,a=yt,o=ci,l=mr,c=s.f;xn=null,An=0,zn=null,ct=(c&(Fi|Is))===0?s:null,qn=null,ba(s.ctx),ci=!1,mr=++sr,s.ac!==null&&(sd(()=>{s.ac.abort(wu)}),s.ac=null);try{s.f|=Sc;var h=s.fn,f=h();s.f|=Cr;var u=s.deps,d=Ze==null?void 0:Ze.is_fork;if(xn!==null){var p;if(d||Eo(s,An),u!==null&&An>0)for(u.length=An+xn.length,p=0;p<xn.length;p++)u[An+p]=xn[p];else s.deps=u=xn;if(Eu()&&(s.f&Wn)!==0)for(p=An;p<u.length;p++)((_=u[p]).reactions??(_.reactions=[])).push(s)}else!d&&u!==null&&An<u.length&&(Eo(s,An),u.length=An);if(el()&&zn!==null&&!ci&&u!==null&&(s.f&(jt|mi|Zt))===0)for(p=0;p<zn.length;p++)a_(zn[p],s);if(i!==null&&i!==s){if(sr++,i.deps!==null)for(let m=0;m<t;m+=1)i.deps[m].rv=sr;if(e!==null)for(const m of e)m.rv=sr;zn!==null&&(n===null?n=zn:n.push(...zn))}return(s.f&Rs)!==0&&(s.f^=Rs),f}catch(m){return Ag(m)}finally{s.f^=Sc,xn=e,An=t,zn=n,ct=i,qn=r,ba(a),ci=o,mr=l}}function Ov(s,e){let t=e.reactions;if(t!==null){var n=Ox.call(t,s);if(n!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[n]=t[i],t.pop())}}if(t===null&&(e.f&jt)!==0&&(xn===null||!Ma.call(xn,e))){var r=e;(r.f&Wn)!==0&&(r.f^=Wn,r.f&=~yr),r.v!==qt&&Kf(r),wv(r),Eo(r,0)}}function Eo(s,e){var t=s.deps;if(t!==null)for(var n=e;n<t.length;n++)Ov(s,t[n])}function Sr(s){var e=s.f;if((e&fi)===0){Rt(s,Vt);var t=at,n=mc;at=s,mc=!0;try{(e&(li|vg))!==0?Nv(s):ld(s),Kg(s);var i=o_(s);s.teardown=typeof i=="function"?i:null,s.wv=s_;var r;mg&&Tx&&(s.f&Zt)!==0&&s.deps}finally{mc=n,at=t}}}async function Bv(){await Promise.resolve(),fv()}function st(s){var e=s.f,t=(e&jt)!==0;if(ct!==null&&!ci){var n=at!==null&&(at.f&fi)!==0;if(!n&&(qn===null||!Ma.call(qn,s))){var i=ct.deps;if((ct.f&Sc)!==0)s.rv<sr&&(s.rv=sr,xn===null&&i!==null&&i[An]===s?An++:xn===null?xn=[s]:xn.push(s));else{(ct.deps??(ct.deps=[])).push(s);var r=s.reactions;r===null?s.reactions=[ct]:Ma.call(r,ct)||r.push(ct)}}}if(ns&&pr.has(s))return pr.get(s);if(t){var a=s;if(ns){var o=a.v;return((a.f&Vt)===0&&a.reactions!==null||c_(a))&&(o=id(a)),pr.set(a,o),o}var l=(a.f&Wn)===0&&!ci&&ct!==null&&(mc||(ct.f&Wn)!==0),c=(a.f&Cr)===0;Na(a)&&(l&&(a.f|=Wn),Vg(a)),l&&!c&&(Gg(a),l_(a))}if($t!=null&&$t.has(s))return $t.get(s);if((s.f&Rs)!==0)throw s.v;return s.v}function l_(s){if(s.f|=Wn,s.deps!==null)for(const e of s.deps)(e.reactions??(e.reactions=[])).push(s),(e.f&jt)!==0&&(e.f&Wn)===0&&(Gg(e),l_(e))}function c_(s){if(s.v===qt)return!0;if(s.deps===null)return!1;for(const e of s.deps)if(pr.has(e)||(e.f&jt)!==0&&c_(e))return!0;return!1}function as(s){var e=ci;try{return ci=!0,s()}finally{ci=e}}function zv(s){if(!(typeof s!="object"||!s||s instanceof EventTarget)){if(Ps in s)Tf(s);else if(!Array.isArray(s))for(let e in s){const t=s[e];typeof t=="object"&&t&&Ps in t&&Tf(t)}}}function Tf(s,e=new Set){if(typeof s=="object"&&s!==null&&!(s instanceof EventTarget)&&!e.has(s)){e.add(s),s instanceof Date&&s.getTime();for(let n in s)try{Tf(s[n],e)}catch{}const t=_g(s);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=zx(t);for(let i in n){const r=n[i].get;if(r)try{r.call(s)}catch{}}}}}const gl=Symbol("events"),kv=new Set,Ep=new Set;function Vv(s,e,t,n={}){function i(r){if(n.capture||Ef.call(e,r),!r.cancelBubble)return sd(()=>t==null?void 0:t.call(this,r))}return s.startsWith("pointer")||s.startsWith("touch")||s==="wheel"?dr(()=>{e.addEventListener(s,i,n)}):e.addEventListener(s,i,n),i}function cd(s,e,t,n,i){var r={capture:n,passive:i},a=Vv(s,e,t,r);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&rd(()=>{e.removeEventListener(s,a,r)})}let Ap=null;function Ef(s){var m,g;var e=this,t=e.ownerDocument,n=s.type,i=((m=s.composedPath)==null?void 0:m.call(s))||[],r=i[0]||s.target;Ap=s;var a=0,o=Ap===s&&s[gl];if(o){var l=i.indexOf(o);if(l!==-1&&(e===document||e===window)){s[gl]=e;return}var c=i.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(r=i[a]||s.target,r!==e){gg(s,"currentTarget",{configurable:!0,get(){return r||t}});var h=ct,f=at;Yn(null),Zn(null);try{for(var u,d=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var _=(g=r[gl])==null?void 0:g[n];_!=null&&(!r.disabled||s.target===r)&&_.call(r,s)}catch(x){u?d.push(x):u=x}if(s.cancelBubble||p===e||p===null)break;r=p}if(u){for(let x of d)queueMicrotask(()=>{throw x});throw u}}finally{s[gl]=e,delete s.currentTarget,Yn(h),Zn(f)}}}var dg;const xh=((dg=globalThis==null?void 0:globalThis.window)==null?void 0:dg.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:s=>s});function Gv(s){return(xh==null?void 0:xh.createHTML(s))??s}function Hv(s){var e=Zg("template");return e.innerHTML=Gv(s.replaceAll("<!>","<!---->")),e.content}function Ao(s,e){var t=at;t.nodes===null&&(t.nodes={start:s,end:e,a:null,t:null})}function Os(s,e){var t=(e&Lx)!==0,n=(e&Dx)!==0,i,r=!s.startsWith("<!>");return()=>{i===void 0&&(i=Hv(r?s:"<!>"+s),t||(i=ws(i)));var a=n||Xg?document.importNode(i,!0):i.cloneNode(!0);if(t){var o=ws(a),l=a.lastChild;Ao(o,l)}else Ao(a,a);return a}}function ud(){var s=document.createDocumentFragment(),e=document.createComment(""),t=To();return s.append(e,t),Ao(e,t),s}function gi(s,e){s!==null&&s.before(e)}const Wv=["touchstart","touchmove"];function Xv(s){return Wv.includes(s)}function qv(s,e){return Yv(s,e)}const _l=new Map;function Yv(s,{target:e,anchor:t,props:n={},events:i,context:r,intro:a=!0,transformError:o}){Ev();var l=void 0,c=Rv(()=>{var h=t??e.appendChild(To());mv(h,{pending:()=>{}},d=>{Rr({});var p=yt;r&&(p.c=r),i&&(n.$$events=i),l=s(d,n)||{},Pr()},o);var f=new Set,u=d=>{for(var p=0;p<d.length;p++){var _=d[p];if(!f.has(_)){f.add(_);var m=Xv(_);for(const v of[e,document]){var g=_l.get(v);g===void 0&&(g=new Map,_l.set(v,g));var x=g.get(_);x===void 0?(v.addEventListener(_,Ef,{passive:m}),g.set(_,1)):g.set(_,x+1)}}}};return u(Bx(kv)),Ep.add(u),()=>{var m;for(var d of f)for(const g of[e,document]){var p=_l.get(g),_=p.get(d);--_==0?(g.removeEventListener(d,Ef),p.delete(d),p.size===0&&_l.delete(g)):p.set(d,_)}Ep.delete(u),h!==t&&((m=h.parentNode)==null||m.removeChild(h))}});return Zv.set(l,c),l}let Zv=new WeakMap;var ii,Pi,Pn,fr,Ko,jo,Su;class u_{constructor(e,t=!0){lt(this,"anchor");Qe(this,ii,new Map);Qe(this,Pi,new Map);Qe(this,Pn,new Map);Qe(this,fr,new Set);Qe(this,Ko,!0);Qe(this,jo,e=>{if(z(this,ii).has(e)){var t=z(this,ii).get(e),n=z(this,Pi).get(t);if(n)Uv(n),z(this,fr).delete(t);else{var i=z(this,Pn).get(t);i&&(z(this,Pi).set(t,i.effect),z(this,Pn).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[r,a]of z(this,ii)){if(z(this,ii).delete(r),r===e)break;const o=z(this,Pn).get(a);o&&(Dn(o.effect),z(this,Pn).delete(a))}for(const[r,a]of z(this,Pi)){if(r===t||z(this,fr).has(r))continue;const o=()=>{if(Array.from(z(this,ii).values()).includes(r)){var c=document.createDocumentFragment();n_(a,c),c.append(To()),z(this,Pn).set(r,{effect:a,fragment:c})}else Dn(a);z(this,fr).delete(r),z(this,Pi).delete(r)};z(this,Ko)||!n?(z(this,fr).add(r),ho(a,o,!1)):o()}}});Qe(this,Su,e=>{z(this,ii).delete(e);const t=Array.from(z(this,ii).values());for(const[n,i]of z(this,Pn))t.includes(n)||(Dn(i.effect),z(this,Pn).delete(n))});this.anchor=e,Je(this,Ko,t)}ensure(e,t){var n=Ze,i=Av();if(t&&!z(this,Pi).has(e)&&!z(this,Pn).has(e))if(i){var r=document.createDocumentFragment(),a=To();r.append(a),z(this,Pn).set(e,{effect:$i(()=>t(a)),fragment:r})}else z(this,Pi).set(e,$i(()=>t(this.anchor)));if(z(this,ii).set(n,e),i){for(const[o,l]of z(this,Pi))o===e?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of z(this,Pn))o===e?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(z(this,jo)),n.ondiscard(z(this,Su))}else z(this,jo).call(this,n)}}ii=new WeakMap,Pi=new WeakMap,Pn=new WeakMap,fr=new WeakMap,Ko=new WeakMap,jo=new WeakMap,Su=new WeakMap;function hd(s,e,...t){var n=new u_(s);od(()=>{const i=e()??null;n.ensure(i,i&&(r=>i(r,...t)))},vr)}function fd(s){yt===null&&Jf(),Ia&&yt.l!==null?$v(yt).m.push(s):ai(()=>{const e=as(s);if(typeof e=="function")return e})}function Bs(s){yt===null&&Jf(),fd(()=>()=>as(s))}function $v(s){var e=s.l;return e.u??(e.u={a:[],b:[],m:[]})}function h_(s,e,t=!1){var n=new u_(s),i=t?vr:0;function r(a,o){n.ensure(a,o)}od(()=>{var a=!1;e((o,l=0)=>{a=!0,r(l,o)}),a||r(-1,null)},i)}function Jv(s,e,t=!1,n=!1,i=!1,r=!1){var a=s,o="";if(t)var l=s;ad(()=>{var c=at;if(o!==(o=e()??"")){if(t){c.nodes=null,l.innerHTML=o,o!==""&&Ao(ws(l),l.lastChild);return}if(c.nodes!==null&&(jg(c.nodes.start,c.nodes.end),c.nodes=null),o!==""){var h=n?Nx:i?Ux:void 0,f=Zg(n?"svg":i?"math":"template",h);f.innerHTML=o;var u=n||i?f:f.content;if(Ao(ws(u),u.lastChild),n||i)for(;ws(u);)a.before(ws(u));else a.before(u)}}})}const Kv=()=>performance.now(),Ii={tick:s=>requestAnimationFrame(s),now:()=>Kv(),tasks:new Set};function f_(){const s=Ii.now();Ii.tasks.forEach(e=>{e.c(s)||(Ii.tasks.delete(e),e.f())}),Ii.tasks.size!==0&&Ii.tick(f_)}function jv(s){let e;return Ii.tasks.size===0&&Ii.tick(f_),{promise:new Promise(t=>{Ii.tasks.add(e={c:s,f:t})}),abort(){Ii.tasks.delete(e)}}}function d_(s){var e,t,n="";if(typeof s=="string"||typeof s=="number")n+=s;else if(typeof s=="object")if(Array.isArray(s)){var i=s.length;for(e=0;e<i;e++)s[e]&&(t=d_(s[e]))&&(n&&(n+=" "),n+=t)}else for(t in s)s[t]&&(n&&(n+=" "),n+=t);return n}function Qv(){for(var s,e,t=0,n="",i=arguments.length;t<i;t++)(s=arguments[t])&&(e=d_(s))&&(n&&(n+=" "),n+=e);return n}function ey(s){return typeof s=="object"?Qv(s):s??""}const Cp=[...` 	
\r\f \v\uFEFF`];function ty(s,e,t){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var r=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+r;(a===0||Cp.includes(n[a-1]))&&(o===n.length||Cp.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function gc(s,e,t,n,i,r){var a=s[mf];if(a!==t||a===void 0){var o=ty(t,n,r);o==null?s.removeAttribute("class"):s.className=o,s[mf]=t}else if(r&&i!==r)for(var l in r){var c=!!r[l];(i==null||c!==!!i[l])&&s.classList.toggle(l,c)}return r}const ny=Symbol("is custom element"),iy=Symbol("is html");function sy(s,e,t,n){var i=ry(s);i[e]!==(i[e]=t)&&s.setAttribute(e,t)}function ry(s){return s[uc]??(s[uc]={[ny]:s.nodeName.includes("-"),[iy]:s.namespaceURI===pg})}function vh(s,e){return s===e||(s==null?void 0:s[Ps])===e}function Af(s={},e,t,n){var i=yt.r,r=at;return Pv(()=>{var a,o;return Au(()=>{a=o,o=[],as(()=>{vh(t(...o),s)||(e(s,...o),a&&vh(t(...a),s)&&e(null,...a))})}),()=>{let l=r;for(;l!==i&&l.parent!==null&&l.parent.f&pf;)l=l.parent;const c=()=>{o&&vh(t(...o),s)&&e(null,...o)},h=l.teardown;l.teardown=()=>{c(),h==null||h()}}}),s}function Cu(s=!1){const e=yt,t=e.l.u;if(!t)return;let n=()=>zv(e.s);if(s){let i=0,r={};const a=wa(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==r[c]&&(r[c]=l[c],o=!0);return o&&i++,i});n=()=>st(a)}t.b.length&&Bn(()=>{Rp(e,n),yc(t.b)}),ai(()=>{const i=as(()=>t.m.map(Gx));return()=>{for(const r of i)typeof r=="function"&&r()}}),t.a.length&&ai(()=>{Rp(e,n),yc(t.a)})}function Rp(s,e){if(s.l.s)for(const t of s.l.s)st(t);e()}const ay={get(s,e){if(!s.exclude.includes(e))return s.props[e]},set(s,e){return!1},getOwnPropertyDescriptor(s,e){if(!s.exclude.includes(e)&&e in s.props)return{enumerable:!0,configurable:!0,value:s.props[e]}},has(s,e){return s.exclude.includes(e)?!1:e in s.props},ownKeys(s){return Reflect.ownKeys(s.props).filter(e=>!s.exclude.includes(e))}};function dd(s,e,t){return new Proxy({props:s,exclude:e},ay)}const oy={get(s,e){let t=s.props.length;for(;t--;){let n=s.props[t];if(Va(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n)return n[e]}},set(s,e,t){let n=s.props.length;for(;n--;){let i=s.props[n];Va(i)&&(i=i());const r=Cs(i,e);if(r&&r.set)return r.set(t),!0}return!1},getOwnPropertyDescriptor(s,e){let t=s.props.length;for(;t--;){let n=s.props[t];if(Va(n)&&(n=n()),typeof n=="object"&&n!==null&&e in n){const i=Cs(n,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(s,e){if(e===Ps||e===Mg)return!1;for(let t of s.props)if(Va(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(s){const e=[];for(let t of s.props)if(Va(t)&&(t=t()),!!t){for(const n in t)e.includes(n)||e.push(n);for(const n of Object.getOwnPropertySymbols(t))e.includes(n)||e.push(n)}return e}};function ly(...s){return new Proxy({props:s},oy)}function xl(s,e,t,n){var M;var i=!Ia||(t&Cx)!==0,r=(t&Px)!==0,a=(t&Ix)!==0,o=n,l=!0,c=void 0,h=()=>a&&i?(c??(c=wa(n)),st(c)):(l&&(l=!1,o=a?as(n):n),o);let f;if(r){var u=Ps in s||Mg in s;f=((M=Cs(s,e))==null?void 0:M.set)??(u&&e in s?A=>s[e]=A:void 0)}var d,p=!1;r?[d,p]=cv(()=>s[e]):d=s[e],d===void 0&&n!==void 0&&(d=h(),f&&(i&&Kx(),f(d)));var _;if(i?_=()=>{var A=s[e];return A===void 0?h():(l=!0,A)}:_=()=>{var A=s[e];return A!==void 0&&(o=void 0),A===void 0?o:A},i&&(t&Rx)===0)return _;if(f){var m=s.$$legacy;return function(A,w){return arguments.length>0?((!i||!w||m||p)&&f(w?_():A),A):_()}}var g=!1,x=((t&Ax)!==0?wa:kg)(()=>(g=!1,_()));r&&st(x);var v=at;return function(A,w){if(arguments.length>0){const R=w?st(x):i&&r?oa(A):A;return Jt(x,R),g=!0,o!==void 0&&(o=R),A}return ns&&g||(v.f&fi)!==0?x.v:st(x)}}function cy(s){let e;const t=Bg(i=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&i()});return r=!0,a});function n(){return Eu()?(t(),e):bc(s)}return"set"in s?{get current(){return n()},set current(i){s.set(i)}}:{get current(){return n()}}}const Ac=Ln(window.location.pathname);var uy=Os('<div class="page"><h1>Page Not Found</h1> <button class="button-outlined">Return To Homepage</button></div>');function hy(s,e){Rr(e,!1);function t(r){window.history.pushState(null,"",r),window.dispatchEvent(new PopStateEvent("popstate"))}Cu();var n=uy(),i=nl(Ls(n),2);cd("click",i,()=>t("/")),gi(s,n),Pr()}function Pp(s){return Object.prototype.toString.call(s)==="[object Date]"}function fy(s){return s}function Cf(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const n=e.map((i,r)=>Cf(s[r],i));return i=>n.map(r=>r(i))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(Pp(s)&&Pp(e)){const r=s.getTime(),o=e.getTime()-r;return l=>new Date(r+l*o)}const n=Object.keys(e),i={};return n.forEach(r=>{i[r]=Cf(s[r],e[r])}),r=>{const a={};return n.forEach(o=>{a[o]=i[o](r)}),a}}if(t==="number"){const n=e-s;return i=>s+i*n}return()=>e}function dy(s,e={}){const t=Ln(s);let n,i=s;function r(a,o){if(i=a,s==null)return t.set(s=a),Promise.resolve();let l=n,c=!1,{delay:h=0,duration:f=400,easing:u=fy,interpolate:d=Cf}={...e,...o};if(f===0)return l&&(l.abort(),l=null),t.set(s=i),Promise.resolve();const p=Ii.now()+h;let _;return n=jv(m=>{if(m<p)return!0;c||(_=d(s,a),typeof f=="function"&&(f=f(s,a)),c=!0),l&&(l.abort(),l=null);const g=m-p;return g>f?(t.set(s=a),!1):(t.set(s=_(u(g/f))),!0)}),n.promise}return{set:r,update:(a,o)=>r(a(i,s),o),subscribe:t.subscribe}}const py="/img/Dog.png";var my=Os('<div id="doghouse" class="svelte-1p95qbx"><div id="dog"><img id="dog-sprite"/></div> <div id="heart">♥️</div></div>');function gy(s){let e=0,t=co(!1);function n(){++e>=3?Jt(t,!0):a()}let i=co(),r=co(!1);function a(){Jt(r,!1),setTimeout(function(){Jt(r,!0)},80)}var o=my(),l=Ls(o);let c;var h=Ls(l);let f;var u=nl(l,2);let d;Af(u,p=>Jt(i,p),()=>st(i)),ad(()=>{c=gc(l,1,"svelte-1p95qbx",null,c,{animation_dogwalk_exit:st(t)}),sy(h,"src",py),f=gc(h,1,"svelte-1p95qbx",null,f,{animation_dogwalk:st(t)}),d=gc(u,1,"svelte-1p95qbx",null,d,{animation_heartfly:st(r)})}),cd("click",l,n),gi(s,o)}var _y=Os('<div id="banner-image" class="svelte-1nmp6pz"></div> <div id="profile-image-box" class="svelte-1nmp6pz"><img src="/img/DressedUp.jpg" class="profile-image svelte-1nmp6pz" alt="me"/></div> <div class="page"><h1>Cory Beutler</h1> <p>I am currently looking for work as a software developer.</p> <div style="margin: 20px"><a href="https://www.linkedin.com/in/cory-beutler" class="button-outlined" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></div> <br/> <p style="margin: 0pt 10pt">Personal Projects:</p> <p><a class="ext-link-big svelte-1nmp6pz" href="http://proper.monster" target="_blank" rel="noopener noreferrer"><img src="/img/ProperMonster.png" alt="proper monster" class="svelte-1nmp6pz"/></a> <a class="ext-link-big svelte-1nmp6pz" href="https://monstervial.itch.io/minescroller" target="_blank" rel="noopener noreferrer"><img src="/img/Minescroller.png" alt="minescroller" class="svelte-1nmp6pz"/></a></p></div> <div class="ext-nav"><span style="margin: 0pt 10pt">Profiles:</span> <a class="ext-link svelte-1nmp6pz" href="https://github.com/cgbeutler"><img src="/img/github_logo.png" alt="github" class="svelte-1nmp6pz"/></a> <a class="ext-link svelte-1nmp6pz" href="https://stackoverflow.com/users/1884803"><span style="white-space: nowrap;"><img src="/img/stack-white.svg" alt="stack" class="svelte-1nmp6pz"/> stack<b>overflow</b></span></a> <a class="ext-link svelte-1nmp6pz" href="https://aristonaut.itch.io/"><img src="/img/itchio_logo.svg" alt="itch.io" class="svelte-1nmp6pz"/></a></div> <!>',1);function xy(s,e){Rr(e,!1);const t=()=>Pg(a,"$timer",n),[n,i]=Ig();let a=dy(3);setInterval(()=>{t()>0?lv(a,t(),-1):ov(a,t()+3),t()<1},1e3),new IntersectionObserver(c=>{c.forEach(h=>{h.isIntersecting})}),Iv(()=>{},()=>{}),Lv(),Cu();var o=_y(),l=nl(Da(o),8);gy(l),gi(s,o),Pr(),i()}var vy=Os('<div class="page"><div class="groc-list svelte-1aordls"></div></div>');function yy(s,e){Rr(e,!1);let t=co("");fetch("/groceries.html").then(r=>{if(r.ok)return r.text();throw new Error(r.status+" Failed Fetch ")}).then(r=>{Jt(t,r)}).catch(r=>{console.log(r),console.log("Trying dev path"),fetch("/raw/groceries.html").then(a=>{if(a.ok)return a.text();throw new Error(a.status+" Failed Fetch ")}).then(a=>{Jt(t,a)}).catch(a=>{console.log(a),console.log("Trying dev path")})}),Cu();var n=vy(),i=Ls(n);Jv(i,()=>st(t),!0),gi(s,n),Pr()}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="184",My={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sy={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p_=0,Rf=1,m_=2,by=3,wy=0,fo=1,po=2,la=3,is=0,fn=1,Li=2,Ui=0,gr=1,Pf=2,If=3,Lf=4,g_=5,Ty=6,vs=100,__=101,x_=102,v_=103,y_=104,M_=200,S_=201,b_=202,w_=203,Cc=204,Rc=205,T_=206,E_=207,A_=208,C_=209,R_=210,P_=211,I_=212,L_=213,D_=214,Pc=0,Ic=1,Lc=2,br=3,Dc=4,Nc=5,Uc=6,Fc=7,il=0,N_=1,U_=2,di=0,pd=1,md=2,gd=3,_d=4,xd=5,Co=6,vd=7,Df="attached",F_="detached",Pu=300,Oi=301,Ds=302,mo=303,go=304,Ua=306,Ro=1e3,Sn=1001,Po=1002,zt=1003,yd=1004,Ey=1004,ca=1005,Ay=1005,Ct=1006,_o=1007,Cy=1007,Di=1008,Ry=1008,yn=1009,Md=1010,Sd=1011,Ta=1012,Iu=1013,$n=1014,un=1015,Bi=1016,Lu=1017,Du=1018,Ea=1020,bd=35902,wd=35899,Td=1021,Ed=1022,hn=1023,zi=1026,Ts=1027,Nu=1028,sl=1029,Ns=1030,Uu=1031,Py=1032,Fu=1033,xo=33776,vo=33777,yo=33778,Mo=33779,Oc=35840,Bc=35841,zc=35842,kc=35843,Vc=36196,Gc=37492,Hc=37496,Wc=37488,Xc=37489,Io=37490,qc=37491,Yc=37808,Zc=37809,$c=37810,Jc=37811,Kc=37812,jc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,su=37819,ru=37820,au=37821,ou=36492,lu=36494,cu=36495,uu=36283,hu=36284,Lo=36285,fu=36286,O_=2200,B_=2201,z_=2202,Do=2300,du=2301,_c=2302,Nf=2303,rr=2400,ar=2401,No=2402,Ou=2500,Ad=2501,Iy=0,Ly=1,Dy=2,k_=3200,Ny=3201,Uy=3202,Fy=3203,ss=0,V_=1,Qi="",vn="srgb",Uo="srgb-linear",Fo="linear",vt="srgb",Oy="",By="rg",zy="ga",ky=0,tr=7680,Vy=7681,Gy=7682,Hy=7683,Wy=34055,Xy=34056,qy=5386,Yy=512,Zy=513,$y=514,Jy=515,Ky=516,jy=517,Qy=518,Uf=519,G_=512,H_=513,W_=514,Bu=515,X_=516,q_=517,zu=518,Y_=519,Oo=35044,eM=35048,tM=35040,nM=35045,iM=35049,sM=35041,rM=35046,aM=35050,oM=35042,lM="100",Ff="300 es",In=2e3,wr=2001,cM={COMPUTE:"compute",RENDER:"render"},uM={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},hM={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},fM={TEXTURE_COMPARE:"depthTextureCompare"};function dM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const pM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ua(s,e){return new pM[s](e)}function Z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $_(){const s=Bo("canvas");return s.style.display="block",s}const Ip={};let Us=null;function mM(s){Us=s}function gM(){return Us}function zo(...s){const e="THREE."+s.shift();Us?Us("log",e,...s):console.log(e,...s)}function J_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function de(...s){s=J_(s);const e="THREE."+s.shift();if(Us)Us("warn",e,...s);else{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pe(...s){s=J_(s);const e="THREE."+s.shift();if(Us)Us("error",e,...s);else{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function pu(...s){const e=s.join(" ");e in Ip||(Ip[e]=!0,de(...s))}function _M(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const xM={[Pc]:Ic,[Lc]:Uc,[Dc]:Fc,[br]:Nc,[Ic]:Pc,[Uc]:Lc,[Fc]:Dc,[Nc]:br};class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lp=1234567;const _r=Math.PI/180,Aa=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Be(s,e,t){return Math.max(e,Math.min(t,s))}function Cd(s,e){return(s%e+e)%e}function vM(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yM(s,e,t){return s!==e?(t-s)/(e-s):0}function So(s,e,t){return(1-t)*s+t*e}function MM(s,e,t,n){return So(s,e,1-Math.exp(-t*n))}function SM(s,e=1){return e-Math.abs(Cd(s,e*2)-e)}function bM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function TM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function EM(s,e){return s+Math.random()*(e-s)}function AM(s){return s*(.5-Math.random())}function CM(s){s!==void 0&&(Lp=s);let e=Lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RM(s){return s*_r}function PM(s){return s*Aa}function IM(s){return(s&s-1)===0&&s!==0}function LM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function DM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function NM(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const UM={DEG2RAD:_r,RAD2DEG:Aa,generateUUID:Nn,clamp:Be,euclideanModulo:Cd,mapLinear:vM,inverseLerp:yM,lerp:So,damp:MM,pingpong:SM,smoothstep:bM,smootherstep:wM,randInt:TM,randFloat:EM,randFloatSpread:AM,seededRandom:CM,degToRad:RM,radToDeg:PM,isPowerOfTwo:IM,ceilPowerOfTwo:LM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:NM,normalize:et,denormalize:cn},ap=class ap{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ap.prototype.isVector2=!0;let j=ap;class dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*_;m<0&&(u=-u,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const x=Math.acos(m),v=Math.sin(x);g=Math.sin(g*x)/v,o=Math.sin(o*x)/v,l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+_*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+_*o;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const op=class op{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};op.prototype.isVector3=!0;let C=op;const yh=new C,Dp=new dn,lp=class lp{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],v=i[4],M=i[7],A=i[2],w=i[5],R=i[8];return r[0]=a*_+o*x+l*A,r[3]=a*m+o*v+l*w,r[6]=a*g+o*M+l*R,r[1]=c*_+h*x+f*A,r[4]=c*m+h*v+f*w,r[7]=c*g+h*M+f*R,r[2]=u*_+d*x+p*A,r[5]=u*m+d*v+p*w,r[8]=u*g+d*M+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lp.prototype.isMatrix3=!0;let We=lp;const Mh=new We,Np=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const s={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=da(i.r),i.g=da(i.g),i.b=da(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qi?Fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Uo]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Np,fromXYZ:Up,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),s}const ot=FM();function ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Br;class K_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Bo("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ts(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class Es{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sh(i[a].image)):r.push(Sh(i[a]))}else r=Sh(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?K_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let BM=0;const bh=new C;class It extends vi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Sn,i=Sn,r=Ct,a=Di,o=hn,l=yn,c=It.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Nn(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){de(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){de(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Pu;It.DEFAULT_ANISOTROPY=1;const cp=class cp{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(g+1)/2,w=(h+u)/4,R=(f+_)/4,y=(p+m)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=R/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=w/i,r=y/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=y/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cp.prototype.isVector4=!0;let Mt=cp;class Rd extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new It(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zM extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ku(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Vu extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kM extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Vu(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const bu=class bu{constructor(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,m)}set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VM,e,GM)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),us.crossVectors(n,Tn),us.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),us.crossVectors(n,Tn)),us.normalize(),vl.crossVectors(Tn,us),i[0]=us.x,i[4]=vl.x,i[8]=Tn.x,i[1]=us.y,i[5]=vl.y,i[9]=Tn.y,i[2]=us.z,i[6]=vl.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],v=n[7],M=n[11],A=n[15],w=i[0],R=i[4],y=i[8],E=i[12],I=i[1],P=i[5],U=i[9],W=i[13],q=i[2],N=i[6],G=i[10],B=i[14],ne=i[3],ie=i[7],me=i[11],Se=i[15];return r[0]=a*w+o*I+l*q+c*ne,r[4]=a*R+o*P+l*N+c*ie,r[8]=a*y+o*U+l*G+c*me,r[12]=a*E+o*W+l*B+c*Se,r[1]=h*w+f*I+u*q+d*ne,r[5]=h*R+f*P+u*N+d*ie,r[9]=h*y+f*U+u*G+d*me,r[13]=h*E+f*W+u*B+d*Se,r[2]=p*w+_*I+m*q+g*ne,r[6]=p*R+_*P+m*N+g*ie,r[10]=p*y+_*U+m*G+g*me,r[14]=p*E+_*W+m*B+g*Se,r[3]=x*w+v*I+M*q+A*ne,r[7]=x*R+v*P+M*N+A*ie,r[11]=x*y+v*U+M*G+A*me,r[15]=x*E+v*W+M*B+A*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],x=l*d-c*u,v=o*d-c*f,M=o*u-l*f,A=a*d-c*h,w=a*u-l*h,R=a*f-o*h;return t*(_*x-m*v+g*M)-n*(p*x-m*A+g*w)+i*(p*v-_*A+g*R)-r*(p*M-_*w+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=t*o-n*a,v=t*l-i*a,M=t*c-r*a,A=n*l-i*o,w=n*c-r*o,R=i*c-r*l,y=h*_-f*p,E=h*m-u*p,I=h*g-d*p,P=f*m-u*_,U=f*g-d*_,W=u*g-d*m,q=x*W-v*U+M*P+A*I-w*E+R*y;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/q;return e[0]=(o*W-l*U+c*P)*N,e[1]=(i*U-n*W-r*P)*N,e[2]=(_*R-m*w+g*A)*N,e[3]=(u*w-f*R-d*A)*N,e[4]=(l*I-a*W-c*E)*N,e[5]=(t*W-i*I+r*E)*N,e[6]=(m*M-p*R-g*v)*N,e[7]=(h*R-u*M+d*v)*N,e[8]=(a*U-o*I+c*y)*N,e[9]=(n*I-t*U-r*y)*N,e[10]=(p*w-_*M+g*x)*N,e[11]=(f*M-h*w-d*x)*N,e[12]=(o*E-a*P-l*y)*N,e[13]=(t*P-n*E+i*y)*N,e[14]=(_*v-p*A-m*x)*N,e[15]=(h*A-f*v+u*x)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,_=a*h,m=a*f,g=o*f,x=l*c,v=l*h,M=l*f,A=n.x,w=n.y,R=n.z;return i[0]=(1-(_+g))*A,i[1]=(d+M)*A,i[2]=(p-v)*A,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(u+g))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(p+v)*R,i[9]=(m-x)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=zr.set(i[0],i[1],i[2]).length();const o=zr.set(i[4],i[5],i[6]).length(),l=zr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Qn.copy(this);const c=1/a,h=1/o,f=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=In,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===In)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===wr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=In,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===In)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===wr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bu.prototype.isMatrix4=!0;let ke=bu;const zr=new C,Qn=new ke,VM=new C(0,0,0),GM=new C(1,1,1),us=new C,vl=new C,Tn=new C,Fp=new ke,Op=new dn;class _i{constructor(e=0,t=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const Bp=new C,kr=new dn,Hi=new ke,yl=new C,Ga=new C,WM=new C,XM=new dn,zp=new C(1,0,0),kp=new C(0,1,0),Vp=new C(0,0,1),Gp={type:"added"},qM={type:"removed"},Vr={type:"childadded",child:null},wh={type:"childremoved",child:null};class mt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new C,t=new _i,n=new dn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new We}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,t){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yl.copy(e):yl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Ga,yl,this.up):Hi.lookAt(yl,Ga,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),kr.setFromRotationMatrix(Hi),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qM),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new C(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ha extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ha;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function Th(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Cd(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Th(a,r,e+1/3),this.g=Th(a,r,e),this.b=Th(a,r,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:de("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=j_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ot.workingToColorSpace(tn.copy(this),e),Math.round(Be(tn.r*255,0,255))*65536+Math.round(Be(tn.g*255,0,255))*256+Math.round(Be(tn.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(tn.copy(this),t);const n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=vn){ot.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,i=tn.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Ml);const n=So(hs.h,Ml.h,t),i=So(hs.s,Ml.s,t),r=So(hs.l,Ml.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new we;we.NAMES=j_;class Hu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new Hu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new Wu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Pd=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const ei=new C,Wi=new C,Eh=new C,Xi=new C,Gr=new C,Hr=new C,Hp=new C,Ah=new C,Ch=new C,Rh=new C,Ph=new Mt,Ih=new Mt,Lh=new Mt;class Mn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ei.subVectors(i,t),Wi.subVectors(n,t),Eh.subVectors(e,t);const a=ei.dot(ei),o=ei.dot(Wi),l=ei.dot(Eh),c=Wi.dot(Wi),h=Wi.dot(Eh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ph.setScalar(0),Ih.setScalar(0),Lh.setScalar(0),Ph.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ph,r.x),a.addScaledVector(Ih,r.y),a.addScaledVector(Lh,r.z),a}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Wi.subVectors(e,t),ei.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ei.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gr.subVectors(i,n),Hr.subVectors(r,n),Ah.subVectors(e,n);const l=Gr.dot(Ah),c=Hr.dot(Ah);if(l<=0&&c<=0)return t.copy(n);Ch.subVectors(e,i);const h=Gr.dot(Ch),f=Hr.dot(Ch);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gr,a);Rh.subVectors(e,r);const d=Gr.dot(Rh),p=Hr.dot(Rh);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hr,o);const m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Hp.subVectors(r,i),o=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(Hp,o);const g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Gr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),bl.subVectors(this.max,Ha),Wr.subVectors(e.a,Ha),Xr.subVectors(e.b,Ha),qr.subVectors(e.c,Ha),fs.subVectors(Xr,Wr),ds.subVectors(qr,Xr),Hs.subVectors(Wr,qr);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Hs.z,Hs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Hs.z,0,-Hs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Hs.y,Hs.x,0];return!Dh(t,Wr,Xr,qr,bl)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,Wr,Xr,qr,bl))?!1:(wl.crossVectors(fs,ds),t=[wl.x,wl.y,wl.z],Dh(t,Wr,Xr,qr,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,Sl=new sn,Wr=new C,Xr=new C,qr=new C,fs=new C,ds=new C,Hs=new C,Ha=new C,bl=new C,wl=new C,Ws=new C;function Dh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ws.fromArray(s,r);const o=i.x*Math.abs(Ws.x)+i.y*Math.abs(Ws.y)+i.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),h=n.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const es=ZM();function ZM(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function gn(s){Math.abs(s)>65504&&de("DataUtils.toHalfFloat(): Value out of range."),s=Be(s,-65504,65504),es.floatView[0]=s;const e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}function io(s){const e=s>>10;return es.uint32View[0]=es.mantissaTable[es.offsetTable[e]+(s&1023)]+es.exponentTable[e],es.floatView[0]}class $M{static toHalfFloat(e){return gn(e)}static fromHalfFloat(e){return io(e)}}const kt=new C,Tl=new j;let JM=0;class wt extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class KM extends wt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class jM extends wt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class QM extends wt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class eS extends wt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Id extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tS extends wt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ld extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nS extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=io(this.array[e*this.itemSize]);return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=gn(t),this}getY(e){let t=io(this.array[e*this.itemSize+1]);return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=gn(t),this}getZ(e){let t=io(this.array[e*this.itemSize+2]);return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=gn(t),this}getW(e){let t=io(this.array[e*this.itemSize+3]);return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=gn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this.array[e+3]=gn(r),this}}class Ce extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const iS=new sn,Wa=new C,Nh=new C;class Kt{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):iS.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Nh)),this.expandByPoint(Wa.copy(e.center).sub(Nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sS=0;const On=new ke,Uh=new mt,Yr=new C,En=new sn,Xa=new sn,Xt=new C;class $e extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?Ld:Id)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(En.min,Xa.min),En.expandByPoint(Xt),Xt.addVectors(En.max,Xa.max),En.expandByPoint(Xt)):(En.expandByPoint(Xa.min),En.expandByPoint(Xa.max))}En.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),Xt.add(Yr)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;const c=new C,h=new C,f=new C,u=new j,d=new j,p=new j,_=new C,m=new C;function g(y,E,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),h.sub(c),f.sub(c),d.sub(u),p.sub(u);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),o[y].add(_),o[E].add(_),o[I].add(_),l[y].add(m),l[E].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,E=x.length;y<E;++y){const I=x[y],P=I.start,U=I.count;for(let W=P,q=P+U;W<q;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new C,M=new C,A=new C,w=new C;function R(y){A.fromBufferAttribute(i,y),w.copy(A);const E=o[y];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),M.crossVectors(w,E);const P=M.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,P)}for(let y=0,E=x.length;y<E;++y){const I=x[y],P=I.start,U=I.count;for(let W=P,q=P+U;W<q;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){const p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new wt(u,h,f)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new C;class Tr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let rS=0;class rn extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=gr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Rc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){de(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){de(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dd extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zr;const qa=new C,$r=new C,Jr=new C,Kr=new j,Ya=new j,Q_=new ke,El=new C,Za=new C,Al=new C,Wp=new j,Fh=new j,Xp=new j;class e0 extends mt{constructor(e=new Dd){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xu(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new Tr(n,3,0,!1)),Zr.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new j(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Q_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Jr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Cl(El.set(-.5,-.5,0),Jr,a,$r,i,r),Cl(Za.set(.5,-.5,0),Jr,a,$r,i,r),Cl(Al.set(.5,.5,0),Jr,a,$r,i,r),Wp.set(0,0),Fh.set(1,0),Xp.set(1,1);let o=e.ray.intersectTriangle(El,Za,Al,!1,qa);if(o===null&&(Cl(Za.set(-.5,.5,0),Jr,a,$r,i,r),Fh.set(0,1),o=e.ray.intersectTriangle(El,Al,Za,!1,qa),o===null))return;const l=e.ray.origin.distanceTo(qa);l<e.near||l>e.far||t.push({distance:l,point:qa.clone(),uv:Mn.getInterpolation(qa,El,Za,Al,Wp,Fh,Xp,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(s,e,t,n,i,r){Kr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ya.x=r*Kr.x-i*Kr.y,Ya.y=i*Kr.x+r*Kr.y):Ya.copy(Kr),s.copy(e),s.x+=Ya.x,s.y+=Ya.y,s.applyMatrix4(Q_)}const Rl=new C,qp=new C;class t0 extends mt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Rl.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Rl);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Rl.setFromMatrixPosition(e.matrixWorld),qp.setFromMatrixPosition(this.matrixWorld);const n=Rl.distanceTo(qp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Yi=new C,Oh=new C,Pl=new C,ps=new C,Bh=new C,Il=new C,zh=new C;class Fa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oh.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),ps.copy(this.origin).sub(Oh);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Pl),o=ps.dot(this.direction),l=-ps.dot(Pl),c=ps.lengthSq(),h=Math.abs(1-a*a);let f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Oh).addScaledVector(Pl,u),d}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,r){Bh.subVectors(t,e),Il.subVectors(n,e),zh.crossVectors(Bh,Il);let a=this.direction.dot(zh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ps.subVectors(this.origin,e);const l=o*this.direction.dot(Il.crossVectors(ps,Il));if(l<0)return null;const c=o*this.direction.dot(Bh.cross(ps));if(c<0||l+c>a)return null;const h=-o*ps.dot(zh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zs extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yp=new ke,Xs=new Fa,Ll=new Kt,Zp=new C,Dl=new C,Nl=new C,Ul=new C,kh=new C,Fl=new C,$p=new C,Ol=new C;class Gt extends mt{constructor(e=new $e,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(kh.fromBufferAttribute(f,e),a?Fl.addScaledVector(kh,h):Fl.addScaledVector(kh.sub(t),h))}t.add(Fl)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ll.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ll,Zp)===null||Xs.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Yp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(Yp),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,A=v;M<A;M+=3){const w=o.getX(M),R=o.getX(M+1),y=o.getX(M+2);i=Bl(this,g,e,n,c,h,f,w,R,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);i=Bl(this,a,e,n,c,h,f,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,A=v;M<A;M+=3){const w=M,R=M+1,y=M+2;i=Bl(this,g,e,n,c,h,f,w,R,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,v=m+1,M=m+2;i=Bl(this,a,e,n,c,h,f,x,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function aS(s,e,t,n,i,r,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===is,o),l===null)return null;Ol.copy(o),Ol.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ol);return c<t.near||c>t.far?null:{distance:c,point:Ol.clone(),object:s}}function Bl(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Dl),s.getVertexPosition(l,Nl),s.getVertexPosition(c,Ul);const h=aS(s,e,t,n,Dl,Nl,Ul,$p);if(h){const f=new C;Mn.getBarycoord($p,Dl,Nl,Ul,f),i&&(h.uv=Mn.getInterpolatedAttribute(i,o,l,c,f,new j)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,f,new j)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Mn.getNormal(Dl,Nl,Ul,u.normal),h.face=u,h.barycoord=f}return h}const $a=new Mt,Jp=new Mt,Kp=new Mt,oS=new Mt,jp=new ke,zl=new C,Vh=new Kt,Qp=new ke,Gh=new Fa;class n0 extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Df,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zl),this.boundingBox.expandByPoint(zl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zl),this.boundingSphere.expandByPoint(zl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vh.copy(this.boundingSphere),Vh.applyMatrix4(i),e.ray.intersectsSphere(Vh)!==!1&&(Qp.copy(i).invert(),Gh.copy(e.ray).applyMatrix4(Qp),!(this.boundingBox!==null&&Gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F_?this.bindMatrixInverse.copy(this.bindMatrix).invert():de("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Jp.fromBufferAttribute(i.attributes.skinIndex,e),Kp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?($a.copy(t),t.set(0,0,0,0)):($a.set(...t,1),t.set(0,0,0)),$a.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Kp.getComponent(r);if(a!==0){const o=Jp.getComponent(r);jp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(oS.copy($a).applyMatrix4(jp),a)}}return t.isVector4&&(t.w=$a.w),t.applyMatrix4(this.bindMatrixInverse)}}class Nd extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pi extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=zt,h=zt,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const em=new ke,lS=new ke;class qu{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){de("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:lS;em.multiplyMatrices(o,t[r]),em.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pi(t,e,e,hn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(de("Skeleton: No bone found with UUID:",r),a=new Nd),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ca extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jr=new ke,tm=new ke,kl=[],nm=new sn,cS=new ke,Ja=new Gt,Ka=new Kt;class i0 extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),nm.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(nm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Ka.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ja.geometry=this.geometry,Ja.material=this.material,Ja.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(n),e.ray.intersectsSphere(Ka)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,jr),tm.multiplyMatrices(n,jr),Ja.matrixWorld=tm,Ja.raycast(e,kl);for(let a=0,o=kl.length;a<o;a++){const l=kl[a];l.instanceId=r,l.object=this,t.push(l)}kl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(i*this.count),i,this.count,Nu,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hh=new C,uS=new C,hS=new We;class _s{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hh.subVectors(n,t).cross(uS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Hh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hS.getNormalMatrix(e),i=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Kt,fS=new j(.5,.5),Vl=new C;class Oa{constructor(e=new _s,t=new _s,n=new _s,i=new _s,r=new _s,a=new _s){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],v=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-a,d-h,g-p,A-x).normalize(),i[1].setComponents(c+a,d+h,g+p,A+x).normalize(),i[2].setComponents(c+o,d+f,g+_,A+v).normalize(),i[3].setComponents(c-o,d-f,g-_,A-v).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,d-u,g-m,A-M).normalize();else if(i[4].setComponents(c-l,d-u,g-m,A-M).normalize(),t===In)i[5].setComponents(c+l,d+u,g+m,A+M).normalize();else if(t===wr)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const t=fS.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vl.x=i.normal.x>0?e.max.x:e.min.x,Vl.y=i.normal.y>0?e.max.y:e.min.y,Vl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bi=new ke,wi=new Oa;class Yu{constructor(){this.coordinateSystem=In}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wi.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth),wi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wi.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth),wi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wi.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth),wi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wi.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth),wi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(bi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wi.setFromProjectionMatrix(bi,i.coordinateSystem,i.reversedDepth),wi.containsPoint(e))return!0}return!1}clone(){return new Yu}}function Wh(s,e){return s-e}function dS(s,e){return s.z-e.z}function pS(s,e){return e.z-s.z}class mS{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const mn=new ke,gS=new we(1,1,1),im=new Oa,_S=new Yu,Gl=new sn,Ys=new Kt,ja=new C,sm=new C,xS=new C,Xh=new mS,nn=new Gt,Hl=[];function vS(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Zs(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class s0 extends Gt{constructor(e,t,n=t*2,i){super(new $e,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new pi(t,e,e,hn,un);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new pi(t,e,e,sl,$n);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new pi(t,e,e,hn,un);n.colorSpace=ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),f=new wt(h,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new wt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,mn),this.getBoundingBoxAt(r,Gl).applyMatrix4(mn),e.union(Gl)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,mn),this.getBoundingSphereAt(r,Ys).applyMatrix4(mn),e.union(Ys)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Wh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;mn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(gS.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Wh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const f=t.getAttribute(h),u=n.getAttribute(h);vS(f,u,l);const d=f.itemSize;for(let p=f.count,_=c;p<_;p++){const m=l+p;for(let g=0;g<d;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(i){const h=o.indexStart,f=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,d=f;u<d;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:f,reservedIndexCount:u}=c,d=r.index,p=d.array,_=e-f;for(let m=h;m<h+u;m++)p[m]=p[m]+_;d.array.copyWithin(t,h,h+u),d.addUpdateRange(t,u),d.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:f}=c,u=r.attributes;for(const d in u){const p=u[d],{array:_,itemSize:m}=p;_.copyWithin(e*m,h*m,(h+f)*m),p.addUpdateRange(e*m,f*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new sn,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(ja.fromBufferAttribute(o,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Kt;this.getBoundingBoxAt(e,Gl),Gl.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let f=c;a&&(f=a.getX(f)),ja.fromBufferAttribute(o,f),l=Math.max(l,r.center.distanceToSquared(ja))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Wh);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Zs(this._multiDrawCounts,i),Zs(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Zs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Zs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Zs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new $e,this._initializeGeometry(r));const a=this.geometry;r.index&&Zs(r.index.array,a.index.array);for(const o in r.attributes)Zs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;nn.material=this.material,nn.geometry.index=a.index,nn.geometry.attributes=a.attributes,nn.geometry.boundingBox===null&&(nn.geometry.boundingBox=new sn),nn.geometry.boundingSphere===null&&(nn.geometry.boundingSphere=new Kt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];nn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,nn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,nn.geometry.boundingBox),this.getBoundingSphereAt(c,nn.geometry.boundingSphere),nn.raycast(e,Hl);for(let f=0,u=Hl.length;f<u;f++){const d=Hl[f];d.object=this,d.batchId=o,t.push(d)}Hl.length=0}nn.material=null,nn.geometry.index=null,nn.geometry.attributes={},nn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?_S:im;d&&!n.isArrayCamera&&(mn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),im.setFromProjectionMatrix(mn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){mn.copy(this.matrixWorld).invert(),ja.setFromMatrixPosition(n.matrixWorld).applyMatrix4(mn),sm.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(mn);for(let M=0,A=c.length;M<A;M++)if(c[M].visible&&c[M].active){const w=c[M].geometryIndex;this.getMatrixAt(M,mn),this.getBoundingSphereAt(w,Ys).applyMatrix4(mn);let R=!1;if(d&&(R=!m.intersectsSphere(Ys,n)),!R){const y=u[w],E=xS.subVectors(Ys.center,ja).dot(sm);Xh.push(y.start,y.count,E,M)}}const x=Xh.list,v=this.customSort;v===null?x.sort(r.transparent?pS:dS):v.call(this,x,n);for(let M=0,A=x.length;M<A;M++){const w=x[M];h[g]=w.start*o*l,f[g]=w.count*l,_[g]=w.index,g++}Xh.reset()}else for(let x=0,v=c.length;x<v;x++)if(c[x].visible&&c[x].active){const M=c[x].geometryIndex;let A=!1;if(d&&(this.getMatrixAt(x,mn),this.getBoundingSphereAt(M,Ys).applyMatrix4(mn),A=!m.intersectsSphere(Ys,n)),!A){const w=u[M];h[g]=w.start*o*l,f[g]=w.count*l,_[g]=x,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class pn extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new C,gu=new C,rm=new ke,Qa=new Fa,Wl=new Kt,qh=new C,am=new C;class Fs extends mt{constructor(e=new $e,t=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mu.fromBufferAttribute(t,i-1),gu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Ce(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(i),Wl.radius+=r,e.ray.intersectsSphere(Wl)===!1)return;rm.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(rm);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),v=Xl(this,e,Qa,l,g,x,_);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=Xl(this,e,Qa,l,_,m,p-1);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=Xl(this,e,Qa,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Xl(this,e,Qa,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xl(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(mu.fromBufferAttribute(o,i),gu.fromBufferAttribute(o,r),t.distanceSqToSegment(mu,gu,qh,am)>n)return;qh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(qh);if(!(c<e.near||c>e.far))return{distance:c,point:am.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const om=new C,lm=new C;class Vi extends Fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)om.fromBufferAttribute(t,i),lm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+om.distanceTo(lm);e.setAttribute("lineDistance",new Ce(n,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r0 extends Fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ud extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new ke,Of=new Fa,ql=new Kt,Yl=new C;class a0 extends mt{constructor(e=new $e,t=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(i),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;cm.copy(i).invert(),Of.copy(e.ray).applyMatrix4(cm);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,_=d;p<_;p++){const m=c.getX(p);Yl.fromBufferAttribute(f,m),um(Yl,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,_=d;p<_;p++)Yl.fromBufferAttribute(f,p),um(Yl,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function um(s,e,t,n,i,r,a){const o=Of.distanceSqToPoint(s);if(o<t){const l=new C;Of.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class o0 extends It{constructor(e,t,n,i,r=Ct,a=Ct,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function f(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class yS extends o0{constructor(e,t,n,i,r,a,o,l){super({},e,t,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class MS extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=zt,this.minFilter=zt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Zu extends It{constructor(e,t,n,i,r,a,o,l,c,h,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class SS extends Zu{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Sn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends Zu{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class rl extends It{constructor(e=[],t=Oi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class TS extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class Er extends It{constructor(e,t,n=$n,i,r,a,o=zt,l=zt,c,h=zi,f=1){if(h!==zi&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class l0 extends Er{constructor(e,t=$n,n=Oi,i,r,a=zt,o=zt,l,c=zi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fd extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ir extends $e{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function p(_,m,g,x,v,M,A,w,R,y,E){const I=M/R,P=A/y,U=M/2,W=A/2,q=w/2,N=R+1,G=y+1;let B=0,ne=0;const ie=new C;for(let me=0;me<G;me++){const Se=me*P-W;for(let Re=0;Re<N;Re++){const tt=Re*I-U;ie[_]=tt*x,ie[m]=Se*v,ie[g]=q,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[g]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Re/R),f.push(1-me/y),B+=1}}for(let me=0;me<y;me++)for(let Se=0;Se<R;Se++){const Re=u+Se+N*me,tt=u+Se+N*(me+1),ut=u+(Se+1)+N*(me+1),Xe=u+(Se+1)+N*me;l.push(Re,tt,Xe),l.push(tt,ut,Xe),ne+=6}o.addGroup(d,ne,E),d+=ne,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $u extends $e{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,p=n*2+r,_=i+1,m=new C,g=new C;for(let x=0;x<=p;x++){let v=0,M=0,A=0,w=0;if(x<=n){const E=x/n,I=E*Math.PI/2;M=-h-e*Math.cos(I),A=e*Math.sin(I),w=-e*Math.cos(I),v=E*f}else if(x<=n+r){const E=(x-n)/r;M=-h+E*t,A=e,w=0,v=f+E*u}else{const E=(x-n-r)/n,I=E*Math.PI/2;M=h+e*Math.sin(I),A=e*Math.cos(I),w=e*Math.sin(I),v=f+u+E*f}const R=Math.max(0,Math.min(1,v/d));let y=0;x===0?y=.5/i:x===p&&(y=-.5/i);for(let E=0;E<=i;E++){const I=E/i,P=I*Math.PI*2,U=Math.sin(P),W=Math.cos(P);g.x=-A*W,g.y=M,g.z=A*U,o.push(g.x,g.y,g.z),m.set(-A*W,w,A*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,R)}if(x>0){const E=(x-1)*_;for(let I=0;I<i;I++){const P=E+I,U=E+I+1,W=x*_+I,q=x*_+I+1;a.push(P,U,W),a.push(U,q,W)}}}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ju extends $e{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class al extends $e{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let p=0;const _=[],m=n/2;let g=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function x(){const M=new C,A=new C;let w=0;const R=(t-e)/n;for(let y=0;y<=r;y++){const E=[],I=y/r,P=I*(t-e)+e;for(let U=0;U<=i;U++){const W=U/i,q=W*l+o,N=Math.sin(q),G=Math.cos(q);A.x=P*N,A.y=-I*n+m,A.z=P*G,f.push(A.x,A.y,A.z),M.set(N,R,G).normalize(),u.push(M.x,M.y,M.z),d.push(W,1-I),E.push(p++)}_.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){const I=_[E][y],P=_[E+1][y],U=_[E+1][y+1],W=_[E][y+1];(e>0||E!==0)&&(h.push(I,P,W),w+=3),(t>0||E!==r-1)&&(h.push(P,U,W),w+=3)}c.addGroup(g,w,0),g+=w}function v(M){const A=p,w=new j,R=new C;let y=0;const E=M===!0?e:t,I=M===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),p++;const P=p;for(let U=0;U<=i;U++){const q=U/i*l+o,N=Math.cos(q),G=Math.sin(q);R.x=E*G,R.y=m*I,R.z=E*N,f.push(R.x,R.y,R.z),u.push(0,I,0),w.x=N*.5+.5,w.y=G*.5*I+.5,d.push(w.x,w.y),p++}for(let U=0;U<i;U++){const W=A+U,q=P+U;M===!0?h.push(q,q+1,W):h.push(q+1,q,W),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends al{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ks extends $e{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,M=new C,A=new C;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],M),d(t[w+2],A),l(v,M,A,x)}function l(x,v,M,A){const w=A+1,R=[];for(let y=0;y<=w;y++){R[y]=[];const E=x.clone().lerp(M,y/w),I=v.clone().lerp(M,y/w),P=w-y;for(let U=0;U<=P;U++)U===0&&y===w?R[y][U]=E:R[y][U]=E.clone().lerp(I,U/P)}for(let y=0;y<w;y++)for(let E=0;E<2*(w-y)-1;E++){const I=Math.floor(E/2);E%2===0?(u(R[y][I+1]),u(R[y+1][I]),u(R[y][I])):(u(R[y][I+1]),u(R[y+1][I+1]),u(R[y+1][I]))}}function c(x){const v=new C;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(x),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const M=m(x)/2/Math.PI+.5,A=g(x)/Math.PI+.5;a.push(M,1-A)}p(),f()}function f(){for(let x=0;x<a.length;x+=6){const v=a[x+0],M=a[x+2],A=a[x+4],w=Math.max(v,M,A),R=Math.min(v,M,A);w>.9&&R<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,v){const M=x*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){const x=new C,v=new C,M=new C,A=new C,w=new j,R=new j,y=new j;for(let E=0,I=0;E<r.length;E+=9,I+=6){x.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),w.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),A.copy(x).add(v).add(M).divideScalar(3);const P=m(A);_(w,I+0,x,P),_(R,I+2,v,P),_(y,I+4,M,P)}}function _(x,v,M,A){A<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.vertices,e.indices,e.radius,e.detail)}}class Ku extends ks{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ku(e.radius,e.detail)}}const Zl=new C,$l=new C,Yh=new C,Jl=new Mn;class c0 extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(_r*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=Jl;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Jl.getNormal(Yh),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const v=(x+1)%3,M=f[x],A=f[v],w=Jl[h[x]],R=Jl[h[v]],y=`${M}_${A}`,E=`${A}_${M}`;E in u&&u[E]?(Yh.dot(u[E].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(R.x,R.y,R.z)),u[E]=null):y in u||(u[y]={index0:c[x],index1:c[v],normal:Yh.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:m}=u[p];Zl.fromBufferAttribute(o,_),$l.fromBufferAttribute(o,m),d.push(Zl.x,Zl.y,Zl.z),d.push($l.x,$l.y,$l.z)}this.setAttribute("position",new Ce(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new j:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],r=[],a=[],o=new C,l=new ke;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Be(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Be(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ju extends yi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new j){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u0 extends ju{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Od(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const hm=new C,fm=new C,Zh=new Od,$h=new Od,Jh=new Od;class h0 extends yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(fm.subVectors(i[0],i[1]).add(i[0]),c=fm);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(hm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=hm),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Zh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,m),$h.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,m),Jh.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$h.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Jh.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Zh.calc(l),$h.calc(l),Jh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dm(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function ES(s,e){const t=1-s;return t*t*e}function AS(s,e){return 2*(1-s)*s*e}function CS(s,e){return s*s*e}function bo(s,e,t,n){return ES(s,e)+AS(s,t)+CS(s,n)}function RS(s,e){const t=1-s;return t*t*t*e}function PS(s,e){const t=1-s;return 3*t*t*s*e}function IS(s,e){return 3*(1-s)*s*s*e}function LS(s,e){return s*s*s*e}function wo(s,e,t,n,i){return RS(s,e)+PS(s,t)+IS(s,n)+LS(s,i)}class Bd extends yi{constructor(e=new j,t=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,i.x,r.x,a.x,o.x),wo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class f0 extends yi{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wo(e,i.x,r.x,a.x,o.x),wo(e,i.y,r.y,a.y,o.y),wo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zd extends yi{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends yi{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends yi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y),bo(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(dm(o,l.x,c.x,h.x,f.x),dm(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new j().fromArray(i))}return this}}var _u=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:h0,CubicBezierCurve:Bd,CubicBezierCurve3:f0,EllipseCurve:ju,LineCurve:zd,LineCurve3:d0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Vd,SplineCurve:Gd});class p0 extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _u[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _u[i.type]().fromJSON(i))}return this}}class xu extends p0{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new zd(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new kd(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Bd(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new ju(e,t,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xr extends xu{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xu().fromJSON(i))}return this}}function DS(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=m0(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=BS(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,f=l;for(let u=t;u<i;u+=t){const d=s[u],p=s[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return ko(r,a,t,o,l,c,0),a}function m0(s,e,t,n,i){let r;if(i===$S(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=pm(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pm(a/n|0,s[a],s[a+1],r);return r&&Ra(r,r.next)&&(Go(r),r=r.next),r}function Ar(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ra(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ko(s,e,t,n,i,r,a){if(!s)return;!a&&r&&HS(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?US(s,n,i,r):NS(s)){e.push(l.i,s.i,c.i),Go(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=FS(Ar(s),e),ko(s,e,t,n,i,r,2)):a===2&&OS(s,e,t,n,i,r):ko(Ar(s),e,t,n,i,r,1);break}}}function NS(s){const e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&so(i,o,r,l,a,c,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function US(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Pt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),_=Math.max(o,l,c),m=Math.max(h,f,u),g=Bf(d,p,e,t,n),x=Bf(_,m,e,t,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=g&&M&&M.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&so(o,h,l,f,c,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&so(o,h,l,f,c,u,M.x,M.y)&&Pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==a&&so(o,h,l,f,c,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==a&&so(o,h,l,f,c,u,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function FS(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ra(n,i)&&_0(n,t,t.next,i)&&Vo(n,i)&&Vo(i,n)&&(e.push(n.i,t.i,i.i),Go(t),Go(t.next),t=s=i),t=t.next}while(t!==s);return Ar(t)}function OS(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qS(a,o)){let l=x0(a,o);a=Ar(a,a.next),l=Ar(l,l.next),ko(a,e,t,n,i,r,0),ko(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function BS(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=m0(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(XS(c))}i.sort(zS);for(let r=0;r<i.length;r++)t=kS(i[r],t);return t}function zS(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function kS(s,e){const t=VS(s,e);if(!t)return e;const n=x0(t,s);return Ar(n,n.next),Ar(t,t.next)}function VS(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(Ra(s,t))return t;do{if(Ra(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&g0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const f=Math.abs(i-t.y)/(n-t.x);Vo(t,s)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&GS(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function GS(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function HS(s,e,t,n){let i=s;do i.z===0&&(i.z=Bf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,WS(i)}function WS(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Bf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function XS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function g0(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function so(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&g0(s,e,t,n,i,r,a,o)}function qS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!YS(s,e)&&(Vo(s,e)&&Vo(e,s)&&ZS(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Ra(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ra(s,e){return s.x===e.x&&s.y===e.y}function _0(s,e,t,n){const i=jl(Pt(s,e,t)),r=jl(Pt(s,e,n)),a=jl(Pt(t,n,s)),o=jl(Pt(t,n,e));return!!(i!==r&&a!==o||i===0&&Kl(s,t,e)||r===0&&Kl(s,n,e)||a===0&&Kl(t,s,n)||o===0&&Kl(t,e,n))}function Kl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function jl(s){return s>0?1:s<0?-1:0}function YS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Vo(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function ZS(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function x0(s,e){const t=zf(s.i,s.x,s.y),n=zf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pm(s,e,t,n){const i=zf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Go(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $S(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class JS{static triangulate(e,t,n=2){return DS(e,t,n)}}class ui{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];mm(e),gm(n,e);let a=e.length;t.forEach(mm);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,gm(n,t[l]);const o=JS.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function mm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function gm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Qu extends $e{constructor(e=new xr([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:KS;let v,M=!1,A,w,R,y;if(g){v=g.getSpacedPoints(h),M=!0,u=!1;const K=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,K),w=new C,R=new C,y=new C}u||(m=0,d=0,p=0,_=0);const E=o.extractPoints(c);let I=E.shape;const P=E.holes;if(!ui.isClockWise(I)){I=I.reverse();for(let K=0,se=P.length;K<se;K++){const Q=P[K];ui.isClockWise(Q)&&(P[K]=Q.reverse())}}function W(K){const Q=10000000000000001e-36;let ve=K[0];for(let pe=1;pe<=K.length;pe++){const Ge=pe%K.length,L=K[Ge],qe=L.x-ve.x,Ie=L.y-ve.y,He=qe*qe+Ie*Ie,re=Math.max(Math.abs(L.x),Math.abs(L.y),Math.abs(ve.x),Math.abs(ve.y)),xt=Q*re*re;if(He<=xt){K.splice(Ge,1),pe--;continue}ve=L}}W(I),P.forEach(W);const q=P.length,N=I;for(let K=0;K<q;K++){const se=P[K];I=I.concat(se)}function G(K,se,Q){return se||Pe("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(se,Q)}const B=I.length;function ne(K,se,Q){let ve,pe,Ge;const L=K.x-se.x,qe=K.y-se.y,Ie=Q.x-K.x,He=Q.y-K.y,re=L*L+qe*qe,xt=L*He-qe*Ie;if(Math.abs(xt)>Number.EPSILON){const T=Math.sqrt(re),S=Math.sqrt(Ie*Ie+He*He),O=se.x-qe/T,Z=se.y+L/T,ee=Q.x-He/S,ae=Q.y+Ie/S,ue=((ee-O)*He-(ae-Z)*Ie)/(L*He-qe*Ie);ve=O+L*ue-K.x,pe=Z+qe*ue-K.y;const X=ve*ve+pe*pe;if(X<=2)return new j(ve,pe);Ge=Math.sqrt(X/2)}else{let T=!1;L>Number.EPSILON?Ie>Number.EPSILON&&(T=!0):L<-Number.EPSILON?Ie<-Number.EPSILON&&(T=!0):Math.sign(qe)===Math.sign(He)&&(T=!0),T?(ve=-qe,pe=L,Ge=Math.sqrt(re)):(ve=L,pe=qe,Ge=Math.sqrt(re/2))}return new j(ve/Ge,pe/Ge)}const ie=[];for(let K=0,se=N.length,Q=se-1,ve=K+1;K<se;K++,Q++,ve++)Q===se&&(Q=0),ve===se&&(ve=0),ie[K]=ne(N[K],N[Q],N[ve]);const me=[];let Se,Re=ie.concat();for(let K=0,se=q;K<se;K++){const Q=P[K];Se=[];for(let ve=0,pe=Q.length,Ge=pe-1,L=ve+1;ve<pe;ve++,Ge++,L++)Ge===pe&&(Ge=0),L===pe&&(L=0),Se[ve]=ne(Q[ve],Q[Ge],Q[L]);me.push(Se),Re=Re.concat(Se)}let tt;if(m===0)tt=ui.triangulateShape(N,P);else{const K=[],se=[];for(let Q=0;Q<m;Q++){const ve=Q/m,pe=d*Math.cos(ve*Math.PI/2),Ge=p*Math.sin(ve*Math.PI/2)+_;for(let L=0,qe=N.length;L<qe;L++){const Ie=G(N[L],ie[L],Ge);De(Ie.x,Ie.y,-pe),ve===0&&K.push(Ie)}for(let L=0,qe=q;L<qe;L++){const Ie=P[L];Se=me[L];const He=[];for(let re=0,xt=Ie.length;re<xt;re++){const T=G(Ie[re],Se[re],Ge);De(T.x,T.y,-pe),ve===0&&He.push(T)}ve===0&&se.push(He)}}tt=ui.triangulateShape(K,se)}const ut=tt.length,Xe=p+_;for(let K=0;K<B;K++){const se=u?G(I[K],Re[K],Xe):I[K];M?(R.copy(A.normals[0]).multiplyScalar(se.x),w.copy(A.binormals[0]).multiplyScalar(se.y),y.copy(v[0]).add(R).add(w),De(y.x,y.y,y.z)):De(se.x,se.y,0)}for(let K=1;K<=h;K++)for(let se=0;se<B;se++){const Q=u?G(I[se],Re[se],Xe):I[se];M?(R.copy(A.normals[K]).multiplyScalar(Q.x),w.copy(A.binormals[K]).multiplyScalar(Q.y),y.copy(v[K]).add(R).add(w),De(y.x,y.y,y.z)):De(Q.x,Q.y,f/h*K)}for(let K=m-1;K>=0;K--){const se=K/m,Q=d*Math.cos(se*Math.PI/2),ve=p*Math.sin(se*Math.PI/2)+_;for(let pe=0,Ge=N.length;pe<Ge;pe++){const L=G(N[pe],ie[pe],ve);De(L.x,L.y,f+Q)}for(let pe=0,Ge=P.length;pe<Ge;pe++){const L=P[pe];Se=me[pe];for(let qe=0,Ie=L.length;qe<Ie;qe++){const He=G(L[qe],Se[qe],ve);M?De(He.x,He.y+v[h-1].y,v[h-1].x+Q):De(He.x,He.y,f+Q)}}}J(),_e();function J(){const K=i.length/3;if(u){let se=0,Q=B*se;for(let ve=0;ve<ut;ve++){const pe=tt[ve];ze(pe[2]+Q,pe[1]+Q,pe[0]+Q)}se=h+m*2,Q=B*se;for(let ve=0;ve<ut;ve++){const pe=tt[ve];ze(pe[0]+Q,pe[1]+Q,pe[2]+Q)}}else{for(let se=0;se<ut;se++){const Q=tt[se];ze(Q[2],Q[1],Q[0])}for(let se=0;se<ut;se++){const Q=tt[se];ze(Q[0]+B*h,Q[1]+B*h,Q[2]+B*h)}}n.addGroup(K,i.length/3-K,0)}function _e(){const K=i.length/3;let se=0;oe(N,se),se+=N.length;for(let Q=0,ve=P.length;Q<ve;Q++){const pe=P[Q];oe(pe,se),se+=pe.length}n.addGroup(K,i.length/3-K,1)}function oe(K,se){let Q=K.length;for(;--Q>=0;){const ve=Q;let pe=Q-1;pe<0&&(pe=K.length-1);for(let Ge=0,L=h+m*2;Ge<L;Ge++){const qe=B*Ge,Ie=B*(Ge+1),He=se+ve+qe,re=se+pe+qe,xt=se+pe+Ie,T=se+ve+Ie;Oe(He,re,xt,T)}}}function De(K,se,Q){l.push(K),l.push(se),l.push(Q)}function ze(K,se,Q){ht(K),ht(se),ht(Q);const ve=i.length/3,pe=x.generateTopUV(n,i,ve-3,ve-2,ve-1);Ve(pe[0]),Ve(pe[1]),Ve(pe[2])}function Oe(K,se,Q,ve){ht(K),ht(se),ht(ve),ht(se),ht(Q),ht(ve);const pe=i.length/3,Ge=x.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Ve(Ge[0]),Ve(Ge[1]),Ve(Ge[3]),Ve(Ge[1]),Ve(Ge[2]),Ve(Ge[3])}function ht(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Ve(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _u[i.type]().fromJSON(i)),new Qu(n,e.options)}}const KS={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-f),new j(u,1-p),new j(_,1-g)]:[new j(o,1-l),new j(h,1-f),new j(d,1-p),new j(m,1-g)]}};function jS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class eh extends ks{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}class th extends $e{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Be(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new C,u=new j,d=new C,p=new C,_=new C;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const v=n+x*h*i,M=Math.sin(v),A=Math.cos(v);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*M,f.y=e[w].y,f.z=e[w].x*A,a.push(f.x,f.y,f.z),u.x=x/t,u.y=w/(e.length-1),o.push(u.x,u.y);const R=l[3*w+0]*M,y=l[3*w+1],E=l[3*w+0]*A;c.push(R,y,E)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const M=v+x*e.length,A=M,w=M+e.length,R=M+e.length+1,y=M+1;r.push(A,w,y),r.push(R,y,w)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.points,e.segments,e.phiStart,e.phiLength)}}class ll extends ks{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}class Ba extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*u-a;for(let v=0;v<c;v++){const M=v*f-r;p.push(M,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const v=x+c*g,M=x+c*(g+1),A=x+1+c*(g+1),w=x+1+c*g;d.push(v,M,w),d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class nh extends $e{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new C,p=new j;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}f+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,v=x,M=x+n+1,A=x+n+2,w=x+1;o.push(v,M,w),o.push(M,A,w)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ih extends $e{constructor(e=new xr([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function c(h){const f=i.length/3,u=h.extractPoints(t);let d=u.shape;const p=u.holes;ui.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];ui.isClockWise(x)===!0&&(p[m]=x.reverse())}const _=ui.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];d=d.concat(x)}for(let m=0,g=d.length;m<g;m++){const x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){const x=_[m],v=x[0]+f,M=x[1]+f,A=x[2]+f;n.push(v,M,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return QS(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ih(n,e.curveSegments)}}function QS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class cl extends $e{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,u=new C,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],v=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const w=A/t;f.x=-e*Math.cos(i+w*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+w*r)*Math.sin(a+v*o),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(w+M,1-v),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const v=h[g][x+1],M=h[g][x],A=h[g+1][x],w=h[g+1][x+1];(g!==0||a>0)&&d.push(v,M,w),(g!==n-1||l<Math.PI)&&d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sh extends ks{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sh(e.radius,e.detail)}}class rh extends $e{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new C,d=new C,p=new C;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const x=g/i*r;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,v=(i+1)*(_-1)+m,M=(i+1)*_+m;l.push(g,x,M),l.push(x,v,M)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ah extends $e{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],f=new C,u=new C,d=new C,p=new C,_=new C,m=new C,g=new C;for(let v=0;v<=n;++v){const M=v/n*r*Math.PI*2;x(M,r,a,e,d),x(M+.01,r,a,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let A=0;A<=i;++A){const w=A/i*Math.PI*2,R=-t*Math.cos(w),y=t*Math.sin(w);f.x=d.x+(R*g.x+y*_.x),f.y=d.y+(R*g.y+y*_.y),f.z=d.z+(R*g.z+y*_.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(A/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),w=(i+1)*v+(M-1),R=(i+1)*v+M,y=(i+1)*(v-1)+M;o.push(A,w,y),o.push(w,R,y)}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2));function x(v,M,A,w,R){const y=Math.cos(v),E=Math.sin(v),I=A/M*v,P=Math.cos(I);R.x=w*(2+P)*.5*y,R.y=w*(2+P)*E*.5,R.z=w*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class oh extends $e{constructor(e=new Vd(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new j;let h=new C;const f=[],u=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),x(),g()}function m(v){h=e.getPointAt(v/t,h);const M=a.normals[v],A=a.binormals[v];for(let w=0;w<=i;w++){const R=w/i*Math.PI*2,y=Math.sin(R),E=-Math.cos(R);l.x=E*M.x+y*A.x,l.y=E*M.y+y*A.y,l.z=E*M.z+y*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),w=(i+1)*v+(M-1),R=(i+1)*v+M,y=(i+1)*(v-1)+M;p.push(A,w,y),p.push(w,R,y)}}function x(){for(let v=0;v<=t;v++)for(let M=0;M<=i;M++)c.x=v/t,c.y=M/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new oh(new _u[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class v0 extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let p=u,_=u+d;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),x=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),_m(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),_m(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function _m(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var xm=Object.freeze({__proto__:null,BoxGeometry:Ir,CapsuleGeometry:$u,CircleGeometry:Ju,ConeGeometry:ol,CylinderGeometry:al,DodecahedronGeometry:Ku,EdgesGeometry:c0,ExtrudeGeometry:Qu,IcosahedronGeometry:eh,LatheGeometry:th,OctahedronGeometry:ll,PlaneGeometry:Ba,PolyhedronGeometry:ks,RingGeometry:nh,ShapeGeometry:ih,SphereGeometry:cl,TetrahedronGeometry:sh,TorusGeometry:rh,TorusKnotGeometry:ah,TubeGeometry:oh,WireframeGeometry:v0});class y0 extends rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Pa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(vm(i))i.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(vm(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function on(s){const e={};for(let t=0;t<s.length;t++){const n=Pa(s[t]);for(const i in n)e[i]=n[i]}return e}function vm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function eb(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function M0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const S0={clone:Pa,merge:on};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hd extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wd extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b0 extends Wd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class w0 extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=il,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T0 extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class E0 extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class A0 extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=il,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xd extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class C0 extends rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R0 extends pn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function or(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function P0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Yd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function ib(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),f=[],u=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){f.push(c.times[d]);for(let _=0;_<h;++_)u.push(c.values[d*h+_])}}f.length!==0&&(c.times=or(f,c.times.constructor),c.values=or(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function sb(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const g=h,x=f-h;_=o.values.slice(g,x)}else if(r>=o.times[p]){const g=p*f+h,x=g+f-h;_=o.values.slice(g,x)}else{const g=o.createInterpolant(),x=h,v=f-h;g.evaluate(r),_=g.resultBuffer.slice(x,v)}l==="quaternion"&&new dn().fromArray(_).normalize().conjugate().toArray(_);const m=c.times.length;for(let g=0;g<m;++g){const x=g*d+u;if(l==="quaternion")dn.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const v=d-u*2;for(let M=0;M<v;++M)c.values[x+M]-=_[M]}}}return s.blendMode=Ad,s}class rb{static convertArray(e,t){return or(e,t)}static isTypedArray(e){return Z_(e)}static getKeyframeOrder(e){return P0(e)}static sortedArray(e,t,n){return kf(e,t,n)}static flattenJSON(e,t,n,i){Yd(e,t,n,i)}static subclip(e,t,n,i,r=30){return ib(e,t,n,i,r)}static makeClipAdditive(e,t=0,n=e,i=30){return sb(e,t,n,i)}}class za{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class I0 extends za{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rr,endingEnd:rr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ar:r=e,o=2*t-n;break;case No:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ar:a=e,l=2*n-t;break;case No:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,v=(-1-d)*m+(1.5+d)*_+.5*p,M=d*m-d*_;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+x*a[c+A]+v*a[l+A]+M*a[f+A];return r}}class Zd extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}}class L0 extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class D0 extends za{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){const _=(n-t)/(i-t),m=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*m+a[l+g]*_;return r}const d=o*2,p=e-1;for(let _=0;_!==o;++_){const m=a[c+_],g=a[l+_],x=p*d+_*2,v=u[x],M=u[x+1],A=e*d+_*2,w=f[A],R=f[A+1];let y=(n-t)/(i-t),E,I,P,U,W;for(let q=0;q<8;q++){E=y*y,I=E*y,P=1-y,U=P*P,W=U*P;const G=W*t+3*U*y*v+3*P*E*w+I*i-n;if(Math.abs(G)<1e-10)break;const B=3*U*(v-t)+6*P*y*(w-v)+3*E*(i-w);if(Math.abs(B)<1e-10)break;y=y-G/B,y=Math.max(0,Math.min(1,y))}r[_]=W*m+3*U*y*M+3*P*E*R+I*g}return r}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new L0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new I0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new D0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case du:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break;case Nf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return du;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return Nf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Z_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_c,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=du;class Lr extends jn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Do;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class $d extends jn{constructor(e,t,n,i){super(e,t,n,i)}}$d.prototype.ValueTypeName="color";class Ho extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Ho.prototype.ValueTypeName="number";class N0 extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ul extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new N0(this.times,this.values,this.getValueSize(),e)}}ul.prototype.ValueTypeName="quaternion";ul.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends jn{constructor(e,t,n){super(e,t,n)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Do;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wo extends jn{constructor(e,t,n,i){super(e,t,n,i)}}Wo.prototype.ValueTypeName="vector";class Xo{constructor(e="",t=-1,n=[],i=Ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ob(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=P0(l);l=kf(l,1,h),c=kf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ho(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(de("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,p,_){if(d.length!==0){const m=[],g=[];Yd(d,m,g,p),m.length!==0&&_.push(new f(u,m,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let _=0;_<u[p].morphTargets.length;_++)d[u[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==u[p].morphTargets.length;++x){const v=u[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new Ho(".morphTargetInfluence["+_+"]",m,g))}l=d.length*a}else{const d=".bones["+t[f].name+"]";n(Wo,d+".position",u,"pos",i),n(ul,d+".quaternion",u,"rot",i),n(Wo,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ab(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ho;case"vector":case"vector2":case"vector3":case"vector4":return Wo;case"color":return $d;case"quaternion":return ul;case"bool":case"boolean":return Lr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ob(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ab(s.type);if(s.times===void 0){const t=[],n=[];Yd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ym(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ym(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ym(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jd{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U0=new Jd;class bn{constructor(e){this.manager=e!==void 0?e:U0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class lb extends Error{constructor(e,t){super(e),this.response=t}}class rs extends bn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&de("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zi[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){f.read().then(({done:v,value:M})=>{if(v)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,R=h.length;w<R;w++){const y=h[w];y.onProgress&&y.onProgress(A)}g.enqueue(M),x()}},v=>{g.error(v)})}}});return new Response(m)}else throw new lb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ni.add(`file:${e}`,c);const h=Zi[e];delete Zi[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class cb extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new rs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Xo.parse(e[n]);t.push(i)}return t}}class ub extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new Zu,l=new rs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(f){l.load(e[f],function(u){const d=r.parse(u,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Ct),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)h(f);else l.load(e,function(f){const u=r.parse(f,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Ct),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}const Qr=new WeakMap;class qo extends bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Qr.get(a);f===void 0&&(f=[],Qr.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=Bo("img");function l(){h(),t&&t(this);const f=Qr.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Qr.delete(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),Ni.remove(`image:${e}`);const u=Qr.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onError&&p.onError(f)}Qr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class hb extends bn{constructor(e){super(e)}load(e,t,n,i){const r=new rl;r.colorSpace=vn;const a=new qo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class fb extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new pi,o=new rs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Pe(h);return}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Sn,a.wrapT=c.wrapT!==void 0?c.wrapT:Sn,a.magFilter=c.magFilter!==void 0?c.magFilter:Ct,a.minFilter=c.minFilter!==void 0?c.minFilter:Ct,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Di),c.mipmapCount===1&&(a.minFilter=Ct),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class db extends bn{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new qo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vs extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class F0 extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Kh=new ke,Mm=new C,Sm=new C;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mm),Sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sm),t.updateMatrixWorld(),Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new C,ec=new dn,Ti=new C;class lh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ql,ec,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new C,bm=new j,wm=new j;class Yt extends lh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,bm,wm),t.subVectors(wm,bm)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pb extends Kd{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Aa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class O0 extends Vs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class mb extends Kd{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class B0 extends Vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hl extends lh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gb extends Kd{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class k0 extends Vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class V0 extends Vs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class jd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class G0 extends Vs{constructor(e=new jd,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ch extends bn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new rs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&de("MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(i.allowOverride=e.allowOverride),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new we().setHex(a.value);break;case"v2":i.uniforms[r].value=new j().fromArray(a.value);break;case"v3":i.uniforms[r].value=new C().fromArray(a.value);break;case"v4":i.uniforms[r].value=new Mt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new We().fromArray(a.value);break;case"m4":i.uniforms[r].value=new ke().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return ch.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:y0,SpriteMaterial:Dd,RawShaderMaterial:Hd,ShaderMaterial:Jn,PointsMaterial:Ud,MeshPhysicalMaterial:b0,MeshStandardMaterial:Wd,MeshPhongMaterial:w0,MeshToonMaterial:T0,MeshNormalMaterial:E0,MeshLambertMaterial:A0,MeshDepthMaterial:Xd,MeshDistanceMaterial:qd,MeshBasicMaterial:zs,MeshMatcapMaterial:C0,LineDashedMaterial:R0,LineBasicMaterial:pn,Material:rn};return new t[e]}}class Vf{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class H0 extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class W0 extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new rs(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):Pe(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),x=ua(m.type,g),v=new Xu(x,m.stride);return v.uuid=m.uuid,t[p]=v,v}function r(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=e.isInstancedBufferGeometry?new H0:new $e,o=e.data.index;if(o!==void 0){const d=ua(o.type,o.array);a.setIndex(new wt(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Tr(m,p.itemSize,p.offset,p.normalized)}else{const m=ua(p.type,p.array),g=p.isInstancedBufferAttribute?Ca:wt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];let v;if(x.isInterleavedBufferAttribute){const M=i(e.data,x.data);v=new Tr(M,x.itemSize,x.offset,x.normalized)}else{const M=ua(x.type,x.array);v=new wt(M,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){const _=f[d];a.addGroup(_.start,_.count,_.materialIndex)}const u=e.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Kt().fromJSON(u)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const jh={};class _b extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Vf.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new rs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){i!==void 0&&i(f),Pe("ObjectLoader: Can't parse "+e+".",f.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Vf.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new rs(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let f=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){jh[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new xr().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new qu().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new W0;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in xm?o=xm[l.type].fromJSON(l,t):l.type in jh?o=jh[l.type].fromJSON(l,t):de(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new ch;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Xo.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:ua(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Jd(t);r=new qo(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const f=e[c],u=f.url;if(Array.isArray(u)){const d=[];for(let p=0,_=u.length;p<_;p++){const m=u[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new pi(g.data,g.width,g.height)))}i[f.uuid]=new Es(d)}else{const d=o(f.url);i[f.uuid]=new Es(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:ua(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new qo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new pi(p.data,p.width,p.height)))}n[l.uuid]=new Es(h)}else{const h=await r(l.url);n[l.uuid]=new Es(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(de("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&de('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&de("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new rl,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new pi:h=new It,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,xb)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Tm),h.wrapT=n(o.wrap[1],Tm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Em)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Em)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(u){return t[u]===void 0&&de("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let p=0,_=u.length;p<_;p++){const m=u[p];n[m]===void 0&&de("ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[u]===void 0&&de("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&de("ObjectLoader: Undefined texture",u),i[u]}let h,f;switch(e.type){case"Scene":a=new Pd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new we(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Wu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Hu(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Yt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new hl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new k0(e.color,e.intensity);break;case"DirectionalLight":a=new z0(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new B0(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new V0(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new O0(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new F0(e.color,e.groundColor,e.intensity);break;case"LightProbe":const u=new jd().fromArray(e.sh);a=new G0(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),f=l(e.material),a=new n0(h,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),f=l(e.material),a=new Gt(h,f);break;case"InstancedMesh":h=o(e.geometry),f=l(e.material);const d=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new i0(h,f,d),a.instanceMatrix=new Ca(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new Ca(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=o(e.geometry),f=l(e.material),a=new s0(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(m=>{let g=null,x=null;return m.boundingBox!==void 0&&(g=new sn().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(x=new Kt().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:x}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Kt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new sn().fromJSON(e.boundingBox));break;case"LOD":a=new t0;break;case"Line":a=new Fs(o(e.geometry),l(e.material));break;case"LineLoop":a=new r0(o(e.geometry),l(e.material));break;case"LineSegments":a=new Vi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new a0(o(e.geometry),l(e.material));break;case"Sprite":a=new e0(l(e.material));break;case"Group":a=new ha;break;case"Bone":a=new Nd;break;default:a=new mt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)a.add(this.parseObject(u[d],t,n,i,r))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const p=u[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const p=u[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?de("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new mt}})}}const xb={UVMapping:Pu,CubeReflectionMapping:Oi,CubeRefractionMapping:Ds,EquirectangularReflectionMapping:mo,EquirectangularRefractionMapping:go,CubeUVReflectionMapping:Ua},Tm={RepeatWrapping:Ro,ClampToEdgeWrapping:Sn,MirroredRepeatWrapping:Po},Em={NearestFilter:zt,NearestMipmapNearestFilter:yd,NearestMipmapLinearFilter:ca,LinearFilter:Ct,LinearMipmapNearestFilter:_o,LinearMipmapLinearFilter:Di},Qh=new WeakMap;class vb extends bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&de("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&de("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ni.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Qh.has(a)===!0?(i&&i(Qh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),Qh.set(l,c),Ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let tc;class Qd{static getContext(){return tc===void 0&&(tc=new(window.AudioContext||window.webkitAudioContext)),tc}static setContext(e){tc=e}}class yb extends bn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new rs(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),h=Qd.getContext(),f=e+"#decode";r.manager.itemStart(f),h.decodeAudioData(c,function(u){t(u),r.manager.itemEnd(f)}).catch(function(u){o(u),r.manager.itemEnd(f)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Pe(l),r.manager.itemError(e)}}}const Am=new ke,Cm=new ke,$s=new ke;class Mb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Yt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Yt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,$s.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(_r*t.fov*.5)/t.zoom;let o,l;Cm.elements[12]=-i,Am.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,$s.elements[0]=2*t.near/(l-o),$s.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy($s),o=-a*t.aspect-r,l=a*t.aspect-r,$s.elements[0]=2*t.near/(l-o),$s.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy($s)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Cm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Am)}}const ea=-90,ta=1;class X0 extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(ea,ta,e,t);i.layers=this.layers,this.add(i);const r=new Yt(ea,ta,e,t);r.layers=this.layers,this.add(r);const a=new Yt(ea,ta,e,t);a.layers=this.layers,this.add(a);const o=new Yt(ea,ta,e,t);o.layers=this.layers,this.add(o);const l=new Yt(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ea,ta,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class q0 extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Y0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Sb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Sb(){this._document.hidden===!1&&this.reset()}const Js=new C,ef=new dn,bb=new C,Ks=new C,js=new C;class wb extends mt{constructor(){super(),this.type="AudioListener",this.context=Qd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Y0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Js,ef,bb),Ks.set(0,0,-1).applyQuaternion(ef),js.set(0,1,0).applyQuaternion(ef),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Js.x,n),t.positionY.linearRampToValueAtTime(Js.y,n),t.positionZ.linearRampToValueAtTime(Js.z,n),t.forwardX.linearRampToValueAtTime(Ks.x,n),t.forwardY.linearRampToValueAtTime(Ks.y,n),t.forwardZ.linearRampToValueAtTime(Ks.z,n),t.upX.linearRampToValueAtTime(js.x,n),t.upY.linearRampToValueAtTime(js.y,n),t.upZ.linearRampToValueAtTime(js.z,n)}else t.setPosition(Js.x,Js.y,Js.z),t.setOrientation(Ks.x,Ks.y,Ks.z,js.x,js.y,js.z)}}class Z0 extends mt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){de("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(de("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(de("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Qs=new C,Rm=new dn,Tb=new C,er=new C;class Eb extends Z0{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Qs,Rm,Tb),er.set(0,0,1).applyQuaternion(Rm);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Qs.x,n),t.positionY.linearRampToValueAtTime(Qs.y,n),t.positionZ.linearRampToValueAtTime(Qs.z,n),t.orientationX.linearRampToValueAtTime(er.x,n),t.orientationY.linearRampToValueAtTime(er.y,n),t.orientationZ.linearRampToValueAtTime(er.z,n)}else t.setPosition(Qs.x,Qs.y,Qs.z),t.setOrientation(er.x,er.y,er.z)}}class Ab{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class $0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){dn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;dn.multiplyQuaternionsFlat(e,a,e,t,e,n),dn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const ep="\\[\\]\\.:\\/",Cb=new RegExp("["+ep+"]","g"),tp="[^"+ep+"]",Rb="[^"+ep.replace("\\.","")+"]",Pb=/((?:WC+[\/:])*)/.source.replace("WC",tp),Ib=/(WCOD+)?/.source.replace("WCOD",Rb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tp),Db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tp),Nb=new RegExp("^"+Pb+Ib+Lb+Db+"$"),Ub=["material","materials","bones","map"];class Fb{constructor(e,t,n){const i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){const t=Nb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ub.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Fb;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ob{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Nn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],d=u.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(u);for(let _=0,m=a;_!==m;++_)r[_].push(new pt(u,n[_],i[_]))}else if(p<c){o=e[p];const _=--c,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=u;for(let g=0,x=a;g!==x;++g){const v=r[g],M=v[_];let A=v[p];v[p]=M,A===void 0&&(A=new pt(u,n[g],i[g])),v[_]=A}}else e[p]!==o&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const f=r++,u=e[f];t[u.uuid]=h,e[h]=u,t[c]=f,e[f]=l;for(let d=0,p=i;d!==p;++d){const _=n[d],m=_[f],g=_[h];_[h]=m,_[f]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,f=t[h];if(f!==void 0)if(delete t[h],f<r){const u=--r,d=e[u],p=--a,_=e[p];t[d.uuid]=f,e[f]=d,t[_.uuid]=u,e[u]=_,e.pop();for(let m=0,g=i;m!==g;++m){const x=n[m],v=x[u],M=x[p];x[f]=v,x[u]=M,x.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[f]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(f);for(let u=h,d=l.length;u!==d;++u){const p=l[u];f[u]=new pt(p,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class J0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:rr,endingEnd:rr};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings&&Object.assign(l,h.settings),h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=B_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ad:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ou:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===z_;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===O_){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ar,i.endingEnd=ar):(e?i.endingStart=this.zeroSlopeAtStart?ar:rr:i.endingStart=No,t?i.endingEnd=this.zeroSlopeAtEnd?ar:rr:i.endingEnd=No)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Bb=new Float32Array(1);class zb extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){const u=i[f],d=u.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;p=new $0(pt.create(n,d,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zd(new Float32Array(2),new Float32Array(2),1,Bb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Xo.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ou),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new J0(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Xo.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class kb extends Rd{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Vu(null,e,t,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class np{constructor(e){this.value=e}clone(){return new np(this.value.clone===void 0?this.value:this.value.clone())}}let Vb=0;class Gb extends vi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.usage=Oo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Hb extends Xu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Wb{constructor(e,t,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Pm=new ke;class Xb{constructor(e,t,n=0,i=1/0){this.ray=new Fa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pm),this}intersectObject(e,t=!0,n=[]){return Gf(e,this,n,t),n.sort(Im),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Gf(e[i],this,n,t);return n.sort(Im),n}}function Im(s,e){return s.distance-e.distance}function Gf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Gf(r[a],e,t,!0)}}class qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Yb{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zb{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const up=class up{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};up.prototype.isMatrix2=!0;let Hf=up;const Lm=new j;class $b{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dm=new C,nc=new C,na=new C,ia=new C,tf=new C,Jb=new C,Kb=new C;class jb{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Dm.subVectors(e,this.start),nc.subVectors(this.end,this.start);const n=nc.dot(nc);if(n===0)return 0;let r=nc.dot(Dm)/n;return t&&(r=Be(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Jb,n=Kb){const i=10000000000000001e-32;let r,a;const o=this.start,l=e.start,c=this.end,h=e.end;na.subVectors(c,o),ia.subVectors(h,l),tf.subVectors(o,l);const f=na.dot(na),u=ia.dot(ia),d=ia.dot(tf);if(f<=i&&u<=i)return t.copy(o),n.copy(l),t.sub(n),t.dot(t);if(f<=i)r=0,a=d/u,a=Be(a,0,1);else{const p=na.dot(tf);if(u<=i)a=0,r=Be(-p/f,0,1);else{const _=na.dot(ia),m=f*u-_*_;m!==0?r=Be((_*d-p*u)/m,0,1):r=0,a=(_*r+d)/u,a<0?(a=0,r=Be(-p/f,0,1)):a>1&&(a=1,r=Be((_-p)/f,0,1))}}return t.copy(o).addScaledVector(na,r),n.copy(l).addScaledVector(ia,a),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Nm=new C;class Qb extends mt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new $e,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ce(i,3));const r=new pn({fog:!1,toneMapped:!1});this.cone=new Vi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Nm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const gs=new C,ic=new ke,nf=new ke;class ew extends Vi{constructor(e){const t=K0(e),n=new $e,i=[],r=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(r,3));const a=new pn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new we(255),l=new we(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");nf.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(ic.multiplyMatrices(nf,o.matrixWorld),gs.setFromMatrixPosition(ic),i.setXYZ(a,gs.x,gs.y,gs.z),ic.multiplyMatrices(nf,o.parent.matrixWorld),gs.setFromMatrixPosition(ic),i.setXYZ(a+1,gs.x,gs.y,gs.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,e.r,e.g,e.b),i.setXYZ(r+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function K0(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push(...K0(s.children[t]));return e}class tw extends Gt{constructor(e,t,n){const i=new cl(t,4,2),r=new zs({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const nw=new C,Um=new we,Fm=new we;class iw extends mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ll(t);i.rotateY(Math.PI*.5),this.material=new zs({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new wt(a,3)),this.add(new Gt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Um.copy(this.light.color),Fm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Um:Fm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(nw.setFromMatrixPosition(this.light.matrixWorld).negate())}}class sw extends Vi{constructor(e=10,t=10,n=4473924,i=8947848){n=new we(n),i=new we(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=u===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new $e;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const f=new pn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class rw extends Vi{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new we(r),a=new we(a);const o=[],l=[];if(t>1)for(let f=0;f<t;f++){const u=f/t*(Math.PI*2),d=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,p);const _=f&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let f=0;f<n;f++){const u=f&1?r:a,d=e-e/n*f;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;o.push(m,0,g),l.push(u.r,u.g,u.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,o.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new $e;c.setAttribute("position",new Ce(o,3)),c.setAttribute("color",new Ce(l,3));const h=new pn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Om=new C,sc=new C,Bm=new C;class aw extends mt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new $e;i.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new pn({fog:!1,toneMapped:!1});this.lightPlane=new Fs(i,r),this.add(this.lightPlane),i=new $e,i.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new Fs(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Om.setFromMatrixPosition(this.light.matrixWorld),sc.setFromMatrixPosition(this.light.target.matrixWorld),Bm.subVectors(sc,Om),this.lightPlane.lookAt(sc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(sc),this.targetLine.scale.z=Bm.length()}}const rc=new C,Dt=new lh;class ow extends Vi{constructor(e){const t=new $e,n=new pn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Ce(i,3)),t.setAttribute("color",new Ce(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new we(16755200),h=new we(16711680),f=new we(43775),u=new we(16777215),d=new we(3355443);this.setColors(c,h,f,u,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let r,a;if(Dt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===In)r=-1,a=1;else if(this.camera.coordinateSystem===wr)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Bt("c",t,e,Dt,0,0,r),Bt("t",t,e,Dt,0,0,a),Bt("n1",t,e,Dt,-n,-i,r),Bt("n2",t,e,Dt,n,-i,r),Bt("n3",t,e,Dt,-n,i,r),Bt("n4",t,e,Dt,n,i,r),Bt("f1",t,e,Dt,-n,-i,a),Bt("f2",t,e,Dt,n,-i,a),Bt("f3",t,e,Dt,-n,i,a),Bt("f4",t,e,Dt,n,i,a),Bt("u1",t,e,Dt,n*.7,i*1.1,r),Bt("u2",t,e,Dt,-n*.7,i*1.1,r),Bt("u3",t,e,Dt,0,i*2,r),Bt("cf1",t,e,Dt,-n,0,a),Bt("cf2",t,e,Dt,n,0,a),Bt("cf3",t,e,Dt,0,-i,a),Bt("cf4",t,e,Dt,0,i,a),Bt("cn1",t,e,Dt,-n,0,r),Bt("cn2",t,e,Dt,n,0,r),Bt("cn3",t,e,Dt,0,-i,r),Bt("cn4",t,e,Dt,0,i,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bt(s,e,t,n,i,r,a){rc.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],rc.x,rc.y,rc.z)}}const ac=new sn;class lw extends Vi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new $e;r.setIndex(new wt(n,1)),r.setAttribute("position",new wt(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ac.setFromObject(this.object),ac.isEmpty())return;const e=ac.min,t=ac.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class cw extends Vi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $e;r.setIndex(new wt(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new pn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class uw extends Fs{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new $e;a.setAttribute("position",new Ce(r,3)),a.computeBoundingSphere(),super(a,new pn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $e;l.setAttribute("position",new Ce(o,3)),l.computeBoundingSphere(),this.add(new Gt(l,new zs({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const zm=new C;let oc,sf;class hw extends mt{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",oc===void 0&&(oc=new $e,oc.setAttribute("position",new Ce([0,0,0,0,1,0],3)),sf=new ol(.5,1,5,1),sf.translate(0,-.5,0)),this.position.copy(t),this.line=new Fs(oc,new pn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Gt(sf,new zs({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{zm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(zm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class fw extends Vi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new $e;i.setAttribute("position",new Ce(t,3)),i.setAttribute("color",new Ce(n,3));const r=new pn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new we,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dw{constructor(){this.type="ShapePath",this.color=new we,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new xu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let v=0,M=g.length;v<M;v++){const A=g[v],w=new xr;w.curves=A.curves,x.push(w)}return x}function n(g,x){const v=x.length;let M=!1;for(let A=v-1,w=0;w<v;A=w++){let R=x[A],y=x[w],E=y.x-R.x,I=y.y-R.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(R=x[w],E=-E,y=x[A],I=-I),g.y<R.y||g.y>y.y)continue;if(g.y===R.y){if(g.x===R.x)return!0}else{const P=I*(g.x-R.x)-E*(g.y-R.y);if(P===0)return!0;if(P<0)continue;M=!M}}else{if(g.y!==R.y)continue;if(y.x<=g.x&&g.x<=R.x||R.x<=g.x&&g.x<=y.x)return!0}}return M}const i=ui.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new xr,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],p=0,_;u[p]=void 0,d[p]=[];for(let g=0,x=r.length;g<x;g++)o=r[g],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&u[p]&&p++,u[p]={s:new xr,p:_},u[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:_[0]});if(!u[0])return t(r);if(u.length>1){let g=!1,x=0;for(let v=0,M=u.length;v<M;v++)f[v]=[];for(let v=0,M=u.length;v<M;v++){const A=d[v];for(let w=0;w<A.length;w++){const R=A[w];let y=!0;for(let E=0;E<u.length;E++)n(R.p,u[E].p)&&(v!==E&&x++,y?(y=!1,f[E].push(R)):g=!0);y&&f[v].push(R)}}x>0&&g===!1&&(d=f)}let m;for(let g=0,x=u.length;g<x;g++){l=u[g].s,c.push(l),m=d[g];for(let v=0,M=m.length;v<M;v++)l.holes.push(m[v].h)}return c}}class pw extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){de("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mw(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function gw(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function _w(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Wf(s,e,t,n){const i=xw(n);switch(t){case Td:return s*e;case Nu:return s*e/i.components*i.byteLength;case sl:return s*e/i.components*i.byteLength;case Ns:return s*e*2/i.components*i.byteLength;case Uu:return s*e*2/i.components*i.byteLength;case Ed:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case Fu:return s*e*4/i.components*i.byteLength;case xo:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bc:case kc:return Math.max(s,16)*Math.max(e,8)/4;case Oc:case zc:return Math.max(s,8)*Math.max(e,8)/2;case Vc:case Gc:case Wc:case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Io:case qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ou:case lu:case cu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uu:case hu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lo:case fu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xw(s){switch(s){case yn:case Md:return{byteLength:1,components:1};case Ta:case Sd:case Bi:return{byteLength:2,components:1};case Lu:case Du:return{byteLength:2,components:4};case $n:case Iu:case un:return{byteLength:4,components:1};case bd:case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class vw{static contain(e,t){return mw(e,t)}static cover(e,t){return gw(e,t)}static fill(e){return _w(e)}static getByteLength(e,t,n,i){return Wf(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j0(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yw(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Mw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sw=`#ifdef USE_ALPHAHASH
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
#endif`,bw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ew=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Aw=`#ifdef USE_AOMAP
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
#endif`,Cw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nw=`#ifdef USE_IRIDESCENCE
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
#endif`,Uw=`#ifdef USE_BUMPMAP
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ww=`#define PI 3.141592653589793
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
} // validated`,Xw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qw=`vec3 transformedNormal = objectNormal;
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
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,nT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lT=`#ifdef USE_GRADIENTMAP
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
}`,cT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,dT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,pT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IT=`#if defined( USE_POINTS_UV )
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
#endif`,LT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,BT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WT=`#ifdef USE_NORMALMAP
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
#endif`,XT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$T=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,CE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
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
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,UE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zE=`#define MATCAP
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
}`,kE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
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
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,XE=`#define STANDARD
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
}`,qE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,YE=`#define TOON
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
}`,ZE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,$E=`uniform float size;
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
}`,JE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,eA=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Mw,alphahash_pars_fragment:Sw,alphamap_fragment:bw,alphamap_pars_fragment:ww,alphatest_fragment:Tw,alphatest_pars_fragment:Ew,aomap_fragment:Aw,aomap_pars_fragment:Cw,batching_pars_vertex:Rw,batching_vertex:Pw,begin_vertex:Iw,beginnormal_vertex:Lw,bsdfs:Dw,iridescence_fragment:Nw,bumpmap_pars_fragment:Uw,clipping_planes_fragment:Fw,clipping_planes_pars_fragment:Ow,clipping_planes_pars_vertex:Bw,clipping_planes_vertex:zw,color_fragment:kw,color_pars_fragment:Vw,color_pars_vertex:Gw,color_vertex:Hw,common:Ww,cube_uv_reflection_fragment:Xw,defaultnormal_vertex:qw,displacementmap_pars_vertex:Yw,displacementmap_vertex:Zw,emissivemap_fragment:$w,emissivemap_pars_fragment:Jw,colorspace_fragment:Kw,colorspace_pars_fragment:jw,envmap_fragment:Qw,envmap_common_pars_fragment:eT,envmap_pars_fragment:tT,envmap_pars_vertex:nT,envmap_physical_pars_fragment:dT,envmap_vertex:iT,fog_vertex:sT,fog_pars_vertex:rT,fog_fragment:aT,fog_pars_fragment:oT,gradientmap_pars_fragment:lT,lightmap_pars_fragment:cT,lights_lambert_fragment:uT,lights_lambert_pars_fragment:hT,lights_pars_begin:fT,lights_toon_fragment:pT,lights_toon_pars_fragment:mT,lights_phong_fragment:gT,lights_phong_pars_fragment:_T,lights_physical_fragment:xT,lights_physical_pars_fragment:vT,lights_fragment_begin:yT,lights_fragment_maps:MT,lights_fragment_end:ST,lightprobes_pars_fragment:bT,logdepthbuf_fragment:wT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:AT,map_fragment:CT,map_pars_fragment:RT,map_particle_fragment:PT,map_particle_pars_fragment:IT,metalnessmap_fragment:LT,metalnessmap_pars_fragment:DT,morphinstance_vertex:NT,morphcolor_vertex:UT,morphnormal_vertex:FT,morphtarget_pars_vertex:OT,morphtarget_vertex:BT,normal_fragment_begin:zT,normal_fragment_maps:kT,normal_pars_fragment:VT,normal_pars_vertex:GT,normal_vertex:HT,normalmap_pars_fragment:WT,clearcoat_normal_fragment_begin:XT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:YT,iridescence_pars_fragment:ZT,opaque_fragment:$T,packing:JT,premultiplied_alpha_fragment:KT,project_vertex:jT,dithering_fragment:QT,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:sE,shadowmap_vertex:rE,shadowmask_pars_fragment:aE,skinbase_vertex:oE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:hE,specularmap_pars_fragment:fE,tonemapping_fragment:dE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:_E,uv_pars_vertex:xE,uv_vertex:vE,worldpos_vertex:yE,background_vert:ME,background_frag:SE,backgroundCube_vert:bE,backgroundCube_frag:wE,cube_vert:TE,cube_frag:EE,depth_vert:AE,depth_frag:CE,distance_vert:RE,distance_frag:PE,equirect_vert:IE,equirect_frag:LE,linedashed_vert:DE,linedashed_frag:NE,meshbasic_vert:UE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:BE,meshmatcap_vert:zE,meshmatcap_frag:kE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:HE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:YE,meshtoon_frag:ZE,points_vert:$E,points_frag:JE,shadow_vert:KE,shadow_frag:jE,sprite_vert:QE,sprite_frag:eA},ge={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},si={basic:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new we(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([ge.points,ge.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([ge.common,ge.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([ge.sprite,ge.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:on([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:on([ge.lights,ge.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const lc={r:0,b:0,g:0},tA=new ke,Q0=new We;Q0.set(-1,0,0,0,1,0,0,0,1);function nA(s,e,t,n,i,r){const a=new we(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){const M=x.backgroundBlurriness>0;v=e.get(v,M)}return v}function p(x){let v=!1;const M=d(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(x,v){const M=d(v);M&&(M.isCubeTexture||M.mapping===Ua)?(c===void 0&&(c=new Gt(new Ir(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Pa(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Q0),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==vt,(h!==M||f!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new Ba(2,2),new Jn({name:"BackgroundMaterial",uniforms:Pa(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(lc,M0(s)),t.buffers.color.setClear(lc.r,lc.g,lc.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:_,dispose:g}}function iA(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,U,W,q,N){let G=!1;const B=f(P,q,W,U);r!==B&&(r=B,c(r.object)),G=d(P,q,W,N),G&&p(P,q,W,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(P,U,W,q),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function f(P,U,W,q){const N=q.wireframe===!0;let G=n[U.id];G===void 0&&(G={},n[U.id]=G);const B=P.isInstancedMesh===!0?P.id:0;let ne=G[B];ne===void 0&&(ne={},G[B]=ne);let ie=ne[W.id];ie===void 0&&(ie={},ne[W.id]=ie);let me=ie[N];return me===void 0&&(me=u(l()),ie[N]=me),me}function u(P){const U=[],W=[],q=[];for(let N=0;N<t;N++)U[N]=0,W[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function d(P,U,W,q){const N=r.attributes,G=U.attributes;let B=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){const Se=N[ie];let Re=G[ie];if(Re===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;B++}return r.attributesNum!==B||r.index!==q}function p(P,U,W,q){const N={},G=U.attributes;let B=0;const ne=W.getAttributes();for(const ie in ne)if(ne[ie].location>=0){let Se=G[ie];Se===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),N[ie]=Re,B++}r.attributes=N,r.attributesNum=B,r.index=q}function _(){const P=r.newAttributes;for(let U=0,W=P.length;U<W;U++)P[U]=0}function m(P){g(P,0)}function g(P,U){const W=r.newAttributes,q=r.enabledAttributes,N=r.attributeDivisors;W[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),N[P]!==U&&(s.vertexAttribDivisor(P,U),N[P]=U)}function x(){const P=r.newAttributes,U=r.enabledAttributes;for(let W=0,q=U.length;W<q;W++)U[W]!==P[W]&&(s.disableVertexAttribArray(W),U[W]=0)}function v(P,U,W,q,N,G,B){B===!0?s.vertexAttribIPointer(P,U,W,N,G):s.vertexAttribPointer(P,U,W,q,N,G)}function M(P,U,W,q){_();const N=q.attributes,G=W.getAttributes(),B=U.defaultAttributeValues;for(const ne in G){const ie=G[ne];if(ie.location>=0){let me=N[ne];if(me===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),me!==void 0){const Se=me.normalized,Re=me.itemSize,tt=e.get(me);if(tt===void 0)continue;const ut=tt.buffer,Xe=tt.type,J=tt.bytesPerElement,_e=Xe===s.INT||Xe===s.UNSIGNED_INT||me.gpuType===Iu;if(me.isInterleavedBufferAttribute){const oe=me.data,De=oe.stride,ze=me.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ie.locationSize;Oe++)g(ie.location+Oe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<ie.locationSize;Oe++)m(ie.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Oe=0;Oe<ie.locationSize;Oe++)v(ie.location+Oe,Re/ie.locationSize,Xe,Se,De*J,(ze+Re/ie.locationSize*Oe)*J,_e)}else{if(me.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)g(ie.location+oe,me.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let oe=0;oe<ie.locationSize;oe++)m(ie.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let oe=0;oe<ie.locationSize;oe++)v(ie.location+oe,Re/ie.locationSize,Xe,Se,Re*J,Re/ie.locationSize*oe*J,_e)}}else if(B!==void 0){const Se=B[ne];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ie.location,Se);break;case 3:s.vertexAttrib3fv(ie.location,Se);break;case 4:s.vertexAttrib4fv(ie.location,Se);break;default:s.vertexAttrib1fv(ie.location,Se)}}}}x()}function A(){E();for(const P in n){const U=n[P];for(const W in U){const q=U[W];for(const N in q){const G=q[N];for(const B in G)h(G[B].object),delete G[B];delete q[N]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;const U=n[P.id];for(const W in U){const q=U[W];for(const N in q){const G=q[N];for(const B in G)h(G[B].object),delete G[B];delete q[N]}}delete n[P.id]}function R(P){for(const U in n){const W=n[U];for(const q in W){const N=W[q];if(N[P.id]===void 0)continue;const G=N[P.id];for(const B in G)h(G[B].object),delete G[B];delete N[P.id]}}}function y(P){for(const U in n){const W=n[U],q=P.isInstancedMesh===!0?P.id:0,N=W[q];if(N!==void 0){for(const G in N){const B=N[G];for(const ne in B)h(B[ne].object),delete B[ne];delete N[G]}delete W[q],Object.keys(W).length===0&&delete n[U]}}}function E(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function sA(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rA(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==hn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!y)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:M,maxSamples:A,samples:w}}function aA(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new _s,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let M=g.clippingState||null;l.value=M,M=h(p,u,v,d);for(let A=0;A!==v;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=d;v!==_;++v,M+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const As=4,km=[.125,.215,.35,.446,.526,.582],nr=20,oA=256,eo=new hl,Vm=new we;let rf=null,af=0,of=0,lf=!1;const lA=new C;class Xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=lA}=r;rf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,af,of),this._renderer.xr.enabled=lf,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Bi,format:hn,colorSpace:Uo,depthBuffer:!1},i=Gm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cA(r)),this._blurMaterial=hA(r,e,t),this._ggxMaterial=uA(r,e,t)}return i}_compileMaterial(e){const t=new Gt(new $e,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Vm),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Ir,new zs({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,g=!0):(m.color.copy(Vm),g=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const A=this._cubeSize;sa(i,M*A,v>2?A:0,A,A),f.setRenderTarget(i),g&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-As?n-p+As:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,sa(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(o,eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,sa(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,eo)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[i];f.material=c;const u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*nr-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):nr;m>nr&&de(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const g=[];let x=0;for(let R=0;R<nr;++R){const y=R/_,E=Math.exp(-y*y/2);g.push(E),R===0?x+=E:R<m&&(x+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-As?i-v+As:0),w=4*(this._cubeSize-M);sa(t,A,w,3*M,2*M),l.setRenderTarget(t),l.render(f,eo)}}function cA(s){const e=[],t=[],n=[];let i=s;const r=s-As+1+km.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-As?l=km[a-s+As-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),v=new Float32Array(m*p*d),M=new Float32Array(g*p*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,y=w>2?0:-1,E=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];x.set(E,_*p*w),v.set(u,m*p*w);const I=[w,w,w,w,w,w];M.set(I,g*p*w)}const A=new $e;A.setAttribute("position",new wt(x,_)),A.setAttribute("uv",new wt(v,m)),A.setAttribute("faceIndex",new wt(M,g)),n.push(new Gt(A,null)),i>As&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gm(s,e,t){const n=new Un(s,e,t);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function uA(s,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function hA(s,e,t){const n=new Float32Array(nr),i=new C(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Hm(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Wm(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}class ip extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ir(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Pa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ui});r.uniforms.tEquirect.value=t;const a=new Gt(i,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ct),new X0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function fA(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===mo||d===go)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new ip(p.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,p=d===mo||d===go,_=d===Oi||d===Ds;if(p||_){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Xf(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Xf(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===mo?u.mapping=Oi:d===go&&(u.mapping=Ds),u}function l(u){let d=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function dA(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&pu("WebGLRenderer: "+n+" extension not supported."),i}}}function pA(s,e,t,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],s.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let v=0,M=x.length;v<M;v+=3){const A=x[v+0],w=x[v+1],R=x[v+2];u.push(A,w,w,R,R,A)}}else{const x=p.array;_=p.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const A=v+0,w=v+1,R=v+2;u.push(A,w,w,R,R,A)}}const m=new(p.count>=65535?Ld:Id)(u,1);m.version=_;const g=r.get(f);g&&e.remove(g),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function mA(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _A(s,e,t){const n=new WeakMap,i=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let I=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var d=I;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*w*4*f),y=new ku(R,A,w,f);y.type=un,y.needsUpdate=!0;const E=M*4;for(let P=0;P<f;P++){const U=g[P],W=x[P],q=v[P],N=A*w*4*P;for(let G=0;G<U.count;G++){const B=G*E;p===!0&&(i.fromBufferAttribute(U,G),R[N+B+0]=i.x,R[N+B+1]=i.y,R[N+B+2]=i.z,R[N+B+3]=0),_===!0&&(i.fromBufferAttribute(W,G),R[N+B+4]=i.x,R[N+B+5]=i.y,R[N+B+6]=i.z,R[N+B+7]=0),m===!0&&(i.fromBufferAttribute(q,G),R[N+B+8]=i.x,R[N+B+9]=i.y,R[N+B+10]=i.z,R[N+B+11]=q.itemSize===4?i.w:1)}}u={count:f,texture:y,size:new j(A,w)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function xA(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const vA={[pd]:"LINEAR_TONE_MAPPING",[md]:"REINHARD_TONE_MAPPING",[gd]:"CINEON_TONE_MAPPING",[_d]:"ACES_FILMIC_TONE_MAPPING",[Co]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[xd]:"CUSTOM_TONE_MAPPING"};function yA(s,e,t,n,i){const r=new Un(e,t,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Er(e,t):void 0}),a=new Un(e,t,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),o=new $e;o.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const l=new Hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Gt(o,l),h=new hl(-1,1,1,-1,0,1);let f=null,u=null,d=!1,p,_=null,m=[],g=!1;this.setSize=function(x,v){r.setSize(x,v),a.setSize(x,v);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(x,v)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const v=r.width,M=r.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(v,M)}},this.begin=function(x,v){if(d||x.toneMapping===di&&m.length===0)return!1;if(_=v,v!==null){const M=v.width,A=v.height;(r.width!==M||r.height!==A)&&this.setSize(M,A)}return g===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=di,!0},this.hasRenderPass=function(){return g},this.end=function(x,v){x.toneMapping=p,d=!0;let M=r,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(x,A,M,v),R.needsSwap!==!1)){const y=M;M=A,A=y}}if(f!==x.outputColorSpace||u!==x.toneMapping){f=x.outputColorSpace,u=x.toneMapping,l.defines={},ot.getTransfer(f)===vt&&(l.defines.SRGB_TRANSFER="");const w=vA[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(_),x.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ex=new It,qf=new Er(1,1),tx=new ku,nx=new Vu,ix=new rl,Xm=[],qm=[],Ym=new Float32Array(16),Zm=new Float32Array(9),$m=new Float32Array(4);function ka(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Xm[i];if(r===void 0&&(r=new Float32Array(i),Xm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function hh(s,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function MA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function SA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function bA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function wA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function TA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;$m.set(n),s.uniformMatrix2fv(this.addr,!1,$m),Wt(t,n)}}function EA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Zm.set(n),s.uniformMatrix3fv(this.addr,!1,Zm),Wt(t,n)}}function AA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,n))return;Ym.set(n),s.uniformMatrix4fv(this.addr,!1,Ym),Wt(t,n)}}function CA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function PA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function IA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function LA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function DA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function NA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function UA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function FA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qf.compareFunction=t.isReversedDepthBuffer()?zu:Bu,r=qf):r=ex,t.setTexture2D(e||r,i)}function OA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nx,i)}function BA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ix,i)}function zA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tx,i)}function kA(s){switch(s){case 5126:return MA;case 35664:return SA;case 35665:return bA;case 35666:return wA;case 35674:return TA;case 35675:return EA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return IA;case 5125:return LA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}function VA(s,e){s.uniform1fv(this.addr,e)}function GA(s,e){const t=ka(e,this.size,2);s.uniform2fv(this.addr,t)}function HA(s,e){const t=ka(e,this.size,3);s.uniform3fv(this.addr,t)}function WA(s,e){const t=ka(e,this.size,4);s.uniform4fv(this.addr,t)}function XA(s,e){const t=ka(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qA(s,e){const t=ka(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function YA(s,e){const t=ka(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ZA(s,e){s.uniform1iv(this.addr,e)}function $A(s,e){s.uniform2iv(this.addr,e)}function JA(s,e){s.uniform3iv(this.addr,e)}function KA(s,e){s.uniform4iv(this.addr,e)}function jA(s,e){s.uniform1uiv(this.addr,e)}function QA(s,e){s.uniform2uiv(this.addr,e)}function e1(s,e){s.uniform3uiv(this.addr,e)}function t1(s,e){s.uniform4uiv(this.addr,e)}function n1(s,e,t){const n=this.cache,i=e.length,r=hh(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=qf:a=ex;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function i1(s,e,t){const n=this.cache,i=e.length,r=hh(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nx,r[a])}function s1(s,e,t){const n=this.cache,i=e.length,r=hh(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ix,r[a])}function r1(s,e,t){const n=this.cache,i=e.length,r=hh(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tx,r[a])}function a1(s){switch(s){case 5126:return VA;case 35664:return GA;case 35665:return HA;case 35666:return WA;case 35674:return XA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return ZA;case 35667:case 35671:return $A;case 35668:case 35672:return JA;case 35669:case 35673:return KA;case 5125:return jA;case 36294:return QA;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}class o1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kA(t.type)}}class l1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a1(t.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function Jm(s,e){s.seq.push(e),s.map[e.id]=e}function u1(s,e,t){const n=s.name,i=n.length;for(cf.lastIndex=0;;){const r=cf.exec(n),a=cf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jm(t,c===void 0?new o1(o,s,e):new l1(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new c1(o),Jm(t,f)),t=f}}}class vc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);u1(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Km(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const h1=37297;let f1=0;function d1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const jm=new We;function p1(s){ot._getMatrix(jm,ot.workingColorSpace,s);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case Fo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d1(s.getShaderSource(e),o)}else return r}function m1(s,e){const t=p1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const g1={[pd]:"Linear",[md]:"Reinhard",[gd]:"Cineon",[_d]:"ACESFilmic",[Co]:"AgX",[vd]:"Neutral",[xd]:"Custom"};function _1(s,e){const t=g1[e];return t===void 0?(de("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cc=new C;function x1(){ot.getLuminanceCoefficients(cc);const s=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function y1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ro(s){return s!==""}function eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(S1,w1)}const b1=new Map;function w1(s,e){let t=it[e];if(t===void 0){const n=b1.get(e);if(n!==void 0)t=it[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yf(t)}const T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(s){return s.replace(T1,E1)}function E1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ig(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A1={[fo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function C1(s){return A1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R1={[Oi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function P1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":R1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const I1={[Ds]:"ENVMAP_MODE_REFRACTION"};function L1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D1={[il]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function N1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":D1[s.combine]||"ENVMAP_BLENDING_NONE"}function U1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function F1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=C1(t),c=P1(t),h=L1(t),f=N1(t),u=U1(t),d=v1(t),p=y1(r),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ro).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ro).join(`
`),g.length>0&&(g+=`
`)):(m=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),g=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?it.tonemapping_pars_fragment:"",t.toneMapping!==di?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,m1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),a=Yf(a),a=eg(a,t),a=tg(a,t),o=Yf(o),o=eg(o,t),o=tg(o,t),a=ng(a),o=ng(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+m+a,M=x+g+o,A=Km(i,i.VERTEX_SHADER,v),w=Km(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(P){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",W=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(w)||"",N=U.trim(),G=W.trim(),B=q.trim();let ne=!0,ie=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const me=Qm(i,A,"vertex"),Se=Qm(i,w,"fragment");Pe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+me+`
`+Se)}else N!==""?de("WebGLProgram: Program Info Log:",N):(G===""||B==="")&&(ie=!1);ie&&(P.diagnostics={runnable:ne,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(A),i.deleteShader(w),y=new vc(i,_),E=M1(i,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,h1)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let O1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z1(e),t.set(e,n)),n}}class z1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function k1(s){return s===Ns||s===Io||s===Lo}function V1(s,e,t,n,i,r){const a=new Gu,o=new B1,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,I,P,U,W){const q=P.fog,N=U.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ne=e.get(y.envMap||G,B),ie=ne&&ne.mapping===Ua?ne.image.height:null,me=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&de("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Se=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Re=Se!==void 0?Se.length:0;let tt=0;N.morphAttributes.position!==void 0&&(tt=1),N.morphAttributes.normal!==void 0&&(tt=2),N.morphAttributes.color!==void 0&&(tt=3);let ut,Xe,J,_e;if(me){const Ke=si[me];ut=Ke.vertexShader,Xe=Ke.fragmentShader}else ut=y.vertexShader,Xe=y.fragmentShader,o.update(y),J=o.getVertexShaderID(y),_e=o.getFragmentShaderID(y);const oe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,ht=!!y.map,Ve=!!y.matcap,K=!!ne,se=!!y.aoMap,Q=!!y.lightMap,ve=!!y.bumpMap,pe=!!y.normalMap,Ge=!!y.displacementMap,L=!!y.emissiveMap,qe=!!y.metalnessMap,Ie=!!y.roughnessMap,He=y.anisotropy>0,re=y.clearcoat>0,xt=y.dispersion>0,T=y.iridescence>0,S=y.sheen>0,O=y.transmission>0,Z=He&&!!y.anisotropyMap,ee=re&&!!y.clearcoatMap,ae=re&&!!y.clearcoatNormalMap,ue=re&&!!y.clearcoatRoughnessMap,X=T&&!!y.iridescenceMap,$=T&&!!y.iridescenceThicknessMap,Me=S&&!!y.sheenColorMap,Ee=S&&!!y.sheenRoughnessMap,he=!!y.specularMap,le=!!y.specularColorMap,Ye=!!y.specularIntensityMap,nt=O&&!!y.transmissionMap,gt=O&&!!y.thicknessMap,D=!!y.gradientMap,ce=!!y.alphaMap,Y=y.alphaTest>0,be=!!y.alphaHash,fe=!!y.extensions;let te=di;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(te=s.toneMapping);const Ne={shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:Xe,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:Ve,envMap:K,envMapMode:K&&ne.mapping,envMapCubeUVHeight:ie,aoMap:se,lightMap:Q,bumpMap:ve,normalMap:pe,displacementMap:Ge,emissiveMap:L,normalMapObjectSpace:pe&&y.normalMapType===V_,normalMapTangentSpace:pe&&y.normalMapType===ss,packedNormalMap:pe&&y.normalMapType===ss&&k1(y.normalMap.format),metalnessMap:qe,roughnessMap:Ie,anisotropy:He,anisotropyMap:Z,clearcoat:re,clearcoatMap:ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:xt,iridescence:T,iridescenceMap:X,iridescenceThicknessMap:$,sheen:S,sheenColorMap:Me,sheenRoughnessMap:Ee,specularMap:he,specularColorMap:le,specularIntensityMap:Ye,transmission:O,transmissionMap:nt,thicknessMap:gt,gradientMap:D,opaque:y.transparent===!1&&y.blending===gr&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Y,alphaHash:be,combine:y.combine,mapUv:ht&&p(y.map.channel),aoMapUv:se&&p(y.aoMap.channel),lightMapUv:Q&&p(y.lightMap.channel),bumpMapUv:ve&&p(y.bumpMap.channel),normalMapUv:pe&&p(y.normalMap.channel),displacementMapUv:Ge&&p(y.displacementMap.channel),emissiveMapUv:L&&p(y.emissiveMap.channel),metalnessMapUv:qe&&p(y.metalnessMap.channel),roughnessMapUv:Ie&&p(y.roughnessMap.channel),anisotropyMapUv:Z&&p(y.anisotropyMap.channel),clearcoatMapUv:ee&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:$&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(y.sheenRoughnessMap.channel),specularMapUv:he&&p(y.specularMap.channel),specularColorMapUv:le&&p(y.specularColorMap.channel),specularIntensityMapUv:Ye&&p(y.specularIntensityMap.channel),transmissionMapUv:nt&&p(y.transmissionMap.channel),thicknessMapUv:gt&&p(y.thicknessMap.channel),alphaMapUv:ce&&p(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pe||He),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(ht||ce),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Li,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(E,y),x(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function v(y){const E=d[y.type];let I;if(E){const P=si[E];I=S0.clone(P.uniforms)}else I=y.uniforms;return I}function M(y,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new F1(s,E,y,i),c.push(I),h.set(E,I)),I}function A(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:R}}function G1(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function H1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function sg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rg(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,_,m,g){let x=s[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},s[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.materialVariant=a(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=m,x.group=g),e++,x}function l(u,d,p,_,m,g){const x=o(u,d,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function c(u,d,p,_,m,g){const x=o(u,d,p,_,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function h(u,d){t.length>1&&t.sort(u||H1),n.length>1&&n.sort(d||sg),i.length>1&&i.sort(d||sg)}function f(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function W1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new rg,s.set(n,[a])):i>=r.length?(a=new rg,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function X1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new we};break;case"SpotLight":t={position:new C,direction:new C,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function q1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Y1=0;function Z1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $1(s){const e=new X1,t=q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new ke,a=new ke;function o(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,v=0,M=0,A=0,w=0,R=0;c.sort(Z1);for(let E=0,I=c.length;E<I;E++){const P=c[E],U=P.color,W=P.intensity,q=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ns?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=U.r*W,f+=U.g*W,u+=U.b*W;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],W);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,ne=t.get(P);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,n.directionalShadow[d]=ne,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(U).multiplyScalar(W),G.distance=q,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const B=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,n.spotShadow[_]=ne,n.spotShadowMap[_]=N,M++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(U).multiplyScalar(W),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const B=P.shadow,ne=t.get(P);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,ne.shadowCameraNear=B.camera.near,ne.shadowCameraFar=B.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,v++}n.point[p]=G,p++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(W),G.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[g]=G,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const y=n.hash;(y.directionalLength!==d||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==x||y.numPointShadows!==v||y.numSpotShadows!==M||y.numSpotMaps!==A||y.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,y.directionalLength=d,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=x,y.numPointShadows=v,y.numSpotShadows=M,y.numSpotMaps=A,y.numLightProbes=R,n.version=Y1++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const v=c[g];if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ag(s){const e=new $1(s),t=[],n=[],i=[];function r(u){f.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ag(s),e.set(i,[o])):r>=a.length?(o=new ag(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],eC=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],og=new ke,to=new C,uf=new C;function tC(s,e,t){let n=new Oa;const i=new j,r=new j,a=new Mt,o=new Xd,l=new qd,c={},h=t.maxTextureSize,f={[is]:fn,[fn]:is,[Li]:Li},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:K1,fragmentShader:j1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new $e;p.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let g=this.type;this.render=function(w,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===po&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fo);const E=s.getRenderTarget(),I=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=g!==this.type;W&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(N=>N.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,N=w.length;q<N;q++){const G=w[q],B=G.shadow;if(B===void 0){de("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const ne=B.getFrameExtents();i.multiply(ne),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,B.mapSize.y=r.y));const ie=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ie,B.map===null||W===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===la){if(G.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Un(i.x,i.y,{format:Ns,type:Bi,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new Er(i.x,i.y,un),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=zi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt}else G.isPointLight?(B.map=new ip(i.x),B.map.depthTexture=new l0(i.x,$n)):(B.map=new Un(i.x,i.y),B.map.depthTexture=new Er(i.x,i.y,$n)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=zi,this.type===fo?(B.map.depthTexture.compareFunction=ie?zu:Bu,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt);B.camera.updateProjectionMatrix()}const me=B.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<me;Se++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(B.map),s.clear());const Re=B.getViewport(Se);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),U.viewport(a)}if(G.isPointLight){const Re=B.camera,tt=B.matrix,ut=G.distance||Re.far;ut!==Re.far&&(Re.far=ut,Re.updateProjectionMatrix()),to.setFromMatrixPosition(G.matrixWorld),Re.position.copy(to),uf.copy(Re.position),uf.add(Q1[Se]),Re.up.copy(eC[Se]),Re.lookAt(uf),Re.updateMatrixWorld(),tt.makeTranslation(-to.x,-to.y,-to.z),og.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(og,Re.coordinateSystem,Re.reversedDepth)}else B.updateMatrices(G);n=B.getFrustum(),M(R,y,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===la&&x(B,y),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,I,P)};function x(w,R){const y=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Un(i.x,i.y,{format:Ns,type:Bi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,y,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,y,d,_,null)}function v(w,R,y,E){let I=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=I.uuid,W=R.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let N=q[W];N===void 0&&(N=I.clone(),q[W]=N,R.addEventListener("dispose",A)),I=N}if(I.visible=R.visible,I.wireframe=R.wireframe,E===la?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:f[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const U=s.properties.get(I);U.light=y}return I}function M(w,R,y,E,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===la)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const W=e.update(w),q=w.material;if(Array.isArray(q)){const N=W.groups;for(let G=0,B=N.length;G<B;G++){const ne=N[G],ie=q[ne.materialIndex];if(ie&&ie.visible){const me=v(w,ie,E,I);w.onBeforeShadow(s,w,R,y,W,me,ne),s.renderBufferDirect(y,null,W,me,w,ne),w.onAfterShadow(s,w,R,y,W,me,ne)}}}else if(q.visible){const N=v(w,q,E,I);w.onBeforeShadow(s,w,R,y,W,N,null),s.renderBufferDirect(y,null,W,N,w,null),w.onAfterShadow(s,w,R,y,W,N,null)}}const U=w.children;for(let W=0,q=U.length;W<q;W++)M(U[W],R,y,E,I)}function A(w){w.target.removeEventListener("dispose",A);for(const y in c){const E=c[y],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function nC(s,e){function t(){let D=!1;const ce=new Mt;let Y=null;const be=new Mt(0,0,0,0);return{setMask:function(fe){Y!==fe&&!D&&(s.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){D=fe},setClear:function(fe,te,Ne,Ke,Ut){Ut===!0&&(fe*=Ke,te*=Ke,Ne*=Ke),ce.set(fe,te,Ne,Ke),be.equals(ce)===!1&&(s.clearColor(fe,te,Ne,Ke),be.copy(ce))},reset:function(){D=!1,Y=null,be.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Y=null,be=null,fe=null;return{setReversed:function(te){if(ce!==te){const Ne=e.get("EXT_clip_control");te?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ke=fe;fe=null,this.setClear(Ke)}},getReversed:function(){return ce},setTest:function(te){te?oe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(te){Y!==te&&!D&&(s.depthMask(te),Y=te)},setFunc:function(te){if(ce&&(te=xM[te]),be!==te){switch(te){case Pc:s.depthFunc(s.NEVER);break;case Ic:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case br:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Nc:s.depthFunc(s.GEQUAL);break;case Uc:s.depthFunc(s.GREATER);break;case Fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=te}},setLocked:function(te){D=te},setClear:function(te){fe!==te&&(fe=te,ce&&(te=1-te),s.clearDepth(te))},reset:function(){D=!1,Y=null,be=null,fe=null,ce=!1}}}function i(){let D=!1,ce=null,Y=null,be=null,fe=null,te=null,Ne=null,Ke=null,Ut=null;return{setTest:function(St){D||(St?oe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(St){ce!==St&&!D&&(s.stencilMask(St),ce=St)},setFunc:function(St,Gi,Mi){(Y!==St||be!==Gi||fe!==Mi)&&(s.stencilFunc(St,Gi,Mi),Y=St,be=Gi,fe=Mi)},setOp:function(St,Gi,Mi){(te!==St||Ne!==Gi||Ke!==Mi)&&(s.stencilOp(St,Gi,Mi),te=St,Ne=Gi,Ke=Mi)},setLocked:function(St){D=St},setClear:function(St){Ut!==St&&(s.clearStencil(St),Ut=St)},reset:function(){D=!1,ce=null,Y=null,be=null,fe=null,te=null,Ne=null,Ke=null,Ut=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,x=null,v=null,M=null,A=null,w=null,R=null,y=new we(0,0,0),E=0,I=!1,P=null,U=null,W=null,q=null,N=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ne=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=ne>=1):ie.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=ne>=2);let me=null,Se={};const Re=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),ut=new Mt().fromArray(Re),Xe=new Mt().fromArray(tt);function J(D,ce,Y,be){const fe=new Uint8Array(4),te=s.createTexture();s.bindTexture(D,te),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<Y;Ne++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ce+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return te}const _e={};_e[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(br),ve(!1),pe(Rf),oe(s.CULL_FACE),se(Ui);function oe(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function De(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function ze(D,ce){return u[D]!==ce?(s.bindFramebuffer(D,ce),u[D]=ce,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function Oe(D,ce){let Y=p,be=!1;if(D){Y=d.get(ce),Y===void 0&&(Y=[],d.set(ce,Y));const fe=D.textures;if(Y.length!==fe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let te=0,Ne=fe.length;te<Ne;te++)Y[te]=s.COLOR_ATTACHMENT0+te;Y.length=fe.length,be=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,be=!0);be&&s.drawBuffers(Y)}function ht(D){return _!==D?(s.useProgram(D),_=D,!0):!1}const Ve={[vs]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[x_]:s.FUNC_REVERSE_SUBTRACT};Ve[v_]=s.MIN,Ve[y_]=s.MAX;const K={[M_]:s.ZERO,[S_]:s.ONE,[b_]:s.SRC_COLOR,[Cc]:s.SRC_ALPHA,[R_]:s.SRC_ALPHA_SATURATE,[A_]:s.DST_COLOR,[T_]:s.DST_ALPHA,[w_]:s.ONE_MINUS_SRC_COLOR,[Rc]:s.ONE_MINUS_SRC_ALPHA,[C_]:s.ONE_MINUS_DST_COLOR,[E_]:s.ONE_MINUS_DST_ALPHA,[P_]:s.CONSTANT_COLOR,[I_]:s.ONE_MINUS_CONSTANT_COLOR,[L_]:s.CONSTANT_ALPHA,[D_]:s.ONE_MINUS_CONSTANT_ALPHA};function se(D,ce,Y,be,fe,te,Ne,Ke,Ut,St){if(D===Ui){m===!0&&(De(s.BLEND),m=!1);return}if(m===!1&&(oe(s.BLEND),m=!0),D!==g_){if(D!==g||St!==I){if((x!==vs||A!==vs)&&(s.blendEquation(s.FUNC_ADD),x=vs,A=vs),St)switch(D){case gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pf:s.blendFunc(s.ONE,s.ONE);break;case If:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case If:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lf:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}v=null,M=null,w=null,R=null,y.set(0,0,0),E=0,g=D,I=St}return}fe=fe||ce,te=te||Y,Ne=Ne||be,(ce!==x||fe!==A)&&(s.blendEquationSeparate(Ve[ce],Ve[fe]),x=ce,A=fe),(Y!==v||be!==M||te!==w||Ne!==R)&&(s.blendFuncSeparate(K[Y],K[be],K[te],K[Ne]),v=Y,M=be,w=te,R=Ne),(Ke.equals(y)===!1||Ut!==E)&&(s.blendColor(Ke.r,Ke.g,Ke.b,Ut),y.copy(Ke),E=Ut),g=D,I=!1}function Q(D,ce){D.side===Li?De(s.CULL_FACE):oe(s.CULL_FACE);let Y=D.side===fn;ce&&(Y=!Y),ve(Y),D.blending===gr&&D.transparent===!1?se(Ui):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const be=D.stencilWrite;o.setTest(be),be&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),L(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(D){P!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),P=D)}function pe(D){D!==p_?(oe(s.CULL_FACE),D!==U&&(D===Rf?s.cullFace(s.BACK):D===m_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),U=D}function Ge(D){D!==W&&(B&&s.lineWidth(D),W=D)}function L(D,ce,Y){D?(oe(s.POLYGON_OFFSET_FILL),(q!==ce||N!==Y)&&(q=ce,N=Y,a.getReversed()&&(ce=-ce),s.polygonOffset(ce,Y))):De(s.POLYGON_OFFSET_FILL)}function qe(D){D?oe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=s.TEXTURE0+G-1),me!==D&&(s.activeTexture(D),me=D)}function He(D,ce,Y){Y===void 0&&(me===null?Y=s.TEXTURE0+G-1:Y=me);let be=Se[Y];be===void 0&&(be={type:void 0,texture:void 0},Se[Y]=be),(be.type!==D||be.texture!==ce)&&(me!==Y&&(s.activeTexture(Y),me=Y),s.bindTexture(D,ce||_e[D]),be.type=D,be.texture=ce)}function re(){const D=Se[me];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function T(){try{s.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function S(){try{s.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function O(){try{s.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ae(){try{s.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function ue(){try{s.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function X(){try{s.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function $(){try{s.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Me(D){return f[D]!==void 0?f[D]:s.getParameter(D)}function Ee(D,ce){f[D]!==ce&&(s.pixelStorei(D,ce),f[D]=ce)}function he(D){ut.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function le(D){Xe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Xe.copy(D))}function Ye(D,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let be=Y.get(D);be===void 0&&(be=s.getUniformBlockIndex(ce,D.name),Y.set(D,be))}function nt(D,ce){const be=c.get(ce).get(D);l.get(ce)!==be&&(s.uniformBlockBinding(ce,be,D.__bindingPointIndex),l.set(ce,be))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},me=null,Se={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,x=null,v=null,M=null,A=null,w=null,R=null,y=new we(0,0,0),E=0,I=!1,P=null,U=null,W=null,q=null,N=null,ut.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:De,bindFramebuffer:ze,drawBuffers:Oe,useProgram:ht,setBlending:se,setMaterial:Q,setFlipSided:ve,setCullFace:pe,setLineWidth:Ge,setPolygonOffset:L,setScissorTest:qe,activeTexture:Ie,bindTexture:He,unbindTexture:re,compressedTexImage2D:xt,compressedTexImage3D:T,texImage2D:X,texImage3D:$,pixelStorei:Ee,getParameter:Me,updateUBOMapping:Ye,uniformBlockBinding:nt,texStorage2D:ae,texStorage3D:ue,texSubImage2D:S,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:he,viewport:le,reset:gt}}function iC(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return p?new OffscreenCanvas(T,S):Bo("canvas")}function m(T,S,O){let Z=1;const ee=xt(T);if((ee.width>O||ee.height>O)&&(Z=O/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(Z*ee.width),ue=Math.floor(Z*ee.height);u===void 0&&(u=_(ae,ue));const X=S?_(ae,ue):u;return X.width=ae,X.height=ue,X.getContext("2d").drawImage(T,0,0,ae,ue),de("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+ue+")."),X}else return"data"in T&&de("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function g(T){return T.generateMipmaps}function x(T){s.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(T,S,O,Z,ee,ae=!1){if(T!==null){if(s[T]!==void 0)return s[T];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;Z&&(ue=e.get("EXT_texture_norm16"),ue||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=S;if(S===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8),O===s.UNSIGNED_SHORT&&ue&&(X=ue.R16_EXT),O===s.SHORT&&ue&&(X=ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),S===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8),O===s.UNSIGNED_SHORT&&ue&&(X=ue.RG16_EXT),O===s.SHORT&&ue&&(X=ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),S===s.RGB&&(O===s.UNSIGNED_SHORT&&ue&&(X=ue.RGB16_EXT),O===s.SHORT&&ue&&(X=ue.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),S===s.RGBA){const $=ae?Fo:ot.getTransfer(ee);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=$===vt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ue&&(X=ue.RGBA16_EXT),O===s.SHORT&&ue&&(X=ue.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function A(T,S){let O;return T?S===null||S===$n||S===Ea?O=s.DEPTH24_STENCIL8:S===un?O=s.DEPTH32F_STENCIL8:S===Ta&&(O=s.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===Ea?O=s.DEPTH_COMPONENT24:S===un?O=s.DEPTH_COMPONENT32F:S===Ta&&(O=s.DEPTH_COMPONENT16),O}function w(T,S){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==Ct?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),E(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function y(T){const S=T.target;S.removeEventListener("dispose",y),P(S)}function E(T){const S=n.get(T);if(S.__webglInit===void 0)return;const O=T.source,Z=d.get(O);if(Z){const ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(T),Object.keys(Z).length===0&&d.delete(O)}n.remove(T)}function I(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const O=T.source,Z=d.get(O);delete Z[S.__cacheKey],a.memory.textures--}function P(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=T.textures;for(let Z=0,ee=O.length;Z<ee;Z++){const ae=n.get(O[Z]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(T)}let U=0;function W(){U=0}function q(){return U}function N(T){U=T}function G(){const T=U;return T>=i.maxTextures&&de("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),U+=1,T}function B(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ne(T,S){const O=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const Z=T.image;if(Z===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{De(O,T,S);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function ie(T,S){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){De(O,T,S);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function me(T,S){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){De(O,T,S);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function Se(T,S){const O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){ze(O,T,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const Re={[Ro]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Po]:s.MIRRORED_REPEAT},tt={[zt]:s.NEAREST,[yd]:s.NEAREST_MIPMAP_NEAREST,[ca]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[_o]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR},ut={[G_]:s.NEVER,[Y_]:s.ALWAYS,[H_]:s.LESS,[Bu]:s.LEQUAL,[W_]:s.EQUAL,[zu]:s.GEQUAL,[X_]:s.GREATER,[q_]:s.NOTEQUAL};function Xe(T,S){if(S.type===un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ct||S.magFilter===_o||S.magFilter===ca||S.magFilter===Di||S.minFilter===Ct||S.minFilter===_o||S.minFilter===ca||S.minFilter===Di)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Re[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Re[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Re[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,tt[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==ca&&S.minFilter!==Di||S.type===un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function J(T,S){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const ae=B(S);if(ae!==T.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[ae].usedTimes++;const ue=ee[T.__cacheKey];ue!==void 0&&(ee[T.__cacheKey].usedTimes--,ue.usedTimes===0&&I(S)),T.__cacheKey=ae,T.__webglTexture=ee[ae].texture}return O}function _e(T,S,O){return Math.floor(Math.floor(T/O)/S)}function oe(T,S,O,Z){const ae=T.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,O,Z,S.data);else{ae.sort((Ee,he)=>Ee.start-he.start);let ue=0;for(let Ee=1;Ee<ae.length;Ee++){const he=ae[ue],le=ae[Ee],Ye=he.start+he.count,nt=_e(le.start,S.width,4),gt=_e(he.start,S.width,4);le.start<=Ye+1&&nt===gt&&_e(le.start+le.count-1,S.width,4)===nt?he.count=Math.max(he.count,le.start+le.count-he.start):(++ue,ae[ue]=le)}ae.length=ue+1;const X=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),Me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,he=ae.length;Ee<he;Ee++){const le=ae[Ee],Ye=Math.floor(le.start/4),nt=Math.ceil(le.count/4),gt=Ye%S.width,D=Math.floor(Ye/S.width),ce=nt,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,gt,D,ce,Y,O,Z,S.data)}T.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,X),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,Me)}}function De(T,S,O){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=J(T,S),ae=S.source;t.bindTexture(Z,T.__webglTexture,s.TEXTURE0+O);const ue=n.get(ae);if(ae.version!==ue.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Y=ot.getPrimaries(ot.workingColorSpace),be=S.colorSpace===Qi?null:ot.getPrimaries(S.colorSpace),fe=S.colorSpace===Qi||Y===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let $=m(S.image,!1,i.maxTextureSize);$=re(S,$);const Me=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type);let he=M(S.internalFormat,Me,Ee,S.normalized,S.colorSpace,S.isVideoTexture);Xe(Z,S);let le;const Ye=S.mipmaps,nt=S.isVideoTexture!==!0,gt=ue.__version===void 0||ee===!0,D=ae.dataReady,ce=w(S,$);if(S.isDepthTexture)he=A(S.format===Ts,S.type),gt&&(nt?t.texStorage2D(s.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,he,$.width,$.height,0,Me,Ee,null));else if(S.isDataTexture)if(Ye.length>0){nt&&gt&&t.texStorage2D(s.TEXTURE_2D,ce,he,Ye[0].width,Ye[0].height);for(let Y=0,be=Ye.length;Y<be;Y++)le=Ye[Y],nt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,le.width,le.height,Me,Ee,le.data):t.texImage2D(s.TEXTURE_2D,Y,he,le.width,le.height,0,Me,Ee,le.data);S.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(s.TEXTURE_2D,ce,he,$.width,$.height),D&&oe(S,$,Me,Ee)):t.texImage2D(s.TEXTURE_2D,0,he,$.width,$.height,0,Me,Ee,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,he,Ye[0].width,Ye[0].height,$.depth);for(let Y=0,be=Ye.length;Y<be;Y++)if(le=Ye[Y],S.format!==hn)if(Me!==null)if(nt){if(D)if(S.layerUpdates.size>0){const fe=Wf(le.width,le.height,S.format,S.type);for(const te of S.layerUpdates){const Ne=le.data.subarray(te*fe/le.data.BYTES_PER_ELEMENT,(te+1)*fe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,te,le.width,le.height,1,Me,Ne)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,$.depth,Me,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,he,le.width,le.height,$.depth,0,le.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,le.width,le.height,$.depth,Me,Ee,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,he,le.width,le.height,$.depth,0,Me,Ee,le.data)}else{nt&&gt&&t.texStorage2D(s.TEXTURE_2D,ce,he,Ye[0].width,Ye[0].height);for(let Y=0,be=Ye.length;Y<be;Y++)le=Ye[Y],S.format!==hn?Me!==null?nt?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,he,le.width,le.height,0,le.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,le.width,le.height,Me,Ee,le.data):t.texImage2D(s.TEXTURE_2D,Y,he,le.width,le.height,0,Me,Ee,le.data)}else if(S.isDataArrayTexture)if(nt){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,he,$.width,$.height,$.depth),D)if(S.layerUpdates.size>0){const Y=Wf($.width,$.height,S.format,S.type);for(const be of S.layerUpdates){const fe=$.data.subarray(be*Y/$.data.BYTES_PER_ELEMENT,(be+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,$.width,$.height,1,Me,Ee,fe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Me,Ee,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,Me,Ee,$.data);else if(S.isData3DTexture)nt?(gt&&t.texStorage3D(s.TEXTURE_3D,ce,he,$.width,$.height,$.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Me,Ee,$.data)):t.texImage3D(s.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,Me,Ee,$.data);else if(S.isFramebufferTexture){if(gt)if(nt)t.texStorage2D(s.TEXTURE_2D,ce,he,$.width,$.height);else{let Y=$.width,be=$.height;for(let fe=0;fe<ce;fe++)t.texImage2D(s.TEXTURE_2D,fe,he,Y,be,0,Me,Ee,null),Y>>=1,be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),$.parentNode!==Y){Y.appendChild($),f.add(S),Y.onpaint=Ke=>{const Ut=Ke.changedElements;for(const St of f)Ut.includes(St.image)&&(St.needsUpdate=!0)},Y.requestPaint();return}const be=0,fe=s.RGBA,te=s.RGBA,Ne=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,be,fe,te,Ne,$),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(nt&&gt){const Y=xt(Ye[0]);t.texStorage2D(s.TEXTURE_2D,ce,he,Y.width,Y.height)}for(let Y=0,be=Ye.length;Y<be;Y++)le=Ye[Y],nt?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me,Ee,le):t.texImage2D(s.TEXTURE_2D,Y,he,Me,Ee,le);S.generateMipmaps=!1}else if(nt){if(gt){const Y=xt($);t.texStorage2D(s.TEXTURE_2D,ce,he,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Ee,$)}else t.texImage2D(s.TEXTURE_2D,0,he,Me,Ee,$);g(S)&&x(Z),ue.__version=ae.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ze(T,S,O){if(S.image.length!==6)return;const Z=J(T,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const ae=n.get(ee);if(ee.version!==ae.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const ue=ot.getPrimaries(ot.workingColorSpace),X=S.colorSpace===Qi?null:ot.getPrimaries(S.colorSpace),$=S.colorSpace===Qi||ue===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!Me&&!Ee?he[te]=m(S.image[te],!0,i.maxCubemapSize):he[te]=Ee?S.image[te].image:S.image[te],he[te]=re(S,he[te]);const le=he[0],Ye=r.convert(S.format,S.colorSpace),nt=r.convert(S.type),gt=M(S.internalFormat,Ye,nt,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,ce=ae.__version===void 0||Z===!0,Y=ee.dataReady;let be=w(S,le);Xe(s.TEXTURE_CUBE_MAP,S);let fe;if(Me){D&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,gt,le.width,le.height);for(let te=0;te<6;te++){fe=he[te].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const Ke=fe[Ne];S.format!==hn?Ye!==null?D?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Ke.width,Ke.height,Ye,Ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,gt,Ke.width,Ke.height,0,Ke.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,0,0,Ke.width,Ke.height,Ye,nt,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne,gt,Ke.width,Ke.height,0,Ye,nt,Ke.data)}}}else{if(fe=S.mipmaps,D&&ce){fe.length>0&&be++;const te=xt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,gt,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){D?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ye,nt,he[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,gt,he[te].width,he[te].height,0,Ye,nt,he[te].data);for(let Ne=0;Ne<fe.length;Ne++){const Ut=fe[Ne].image[te].image;D?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,Ut.width,Ut.height,Ye,nt,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,gt,Ut.width,Ut.height,0,Ye,nt,Ut.data)}}else{D?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ye,nt,he[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,gt,Ye,nt,he[te]);for(let Ne=0;Ne<fe.length;Ne++){const Ke=fe[Ne];D?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,0,0,Ye,nt,Ke.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ne+1,gt,Ye,nt,Ke.image[te])}}}g(S)&&x(s.TEXTURE_CUBE_MAP),ae.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Oe(T,S,O,Z,ee,ae){const ue=r.convert(O.format,O.colorSpace),X=r.convert(O.type),$=M(O.internalFormat,ue,X,O.normalized,O.colorSpace),Me=n.get(S),Ee=n.get(O);if(Ee.__renderTarget=S,!Me.__hasExternalTextures){const he=Math.max(1,S.width>>ae),le=Math.max(1,S.height>>ae);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ae,$,he,le,S.depth,0,ue,X,null):t.texImage2D(ee,ae,$,he,le,0,ue,X,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ie(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,Ee.__webglTexture,0,qe(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,Ee.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(T,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,ae=A(S.stencilBuffer,ee),ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),ae,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),ae,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ae,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,T)}else{const Z=S.textures;for(let ee=0;ee<Z.length;ee++){const ae=Z[ee],ue=r.convert(ae.format,ae.colorSpace),X=r.convert(ae.type),$=M(ae.internalFormat,ue,X,ae.normalized,ae.colorSpace);Ie(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(S),$,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(S),$,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,$,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(T,S,O){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,S.depthTexture);const Me=r.convert(S.depthTexture.format),Ee=r.convert(S.depthTexture.type);let he;S.depthTexture.format===zi?he=s.DEPTH_COMPONENT24:S.depthTexture.format===Ts&&(he=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,S.width,S.height,0,Me,Ee,null)}}else ne(S.depthTexture,0);const ae=ee.__webglTexture,ue=qe(S),X=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,$=S.depthTexture.format===Ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===zi)Ie(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,X,ae,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,$,X,ae,0);else if(S.depthTexture.format===Ts)Ie(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,X,ae,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,$,X,ae,0);else throw new Error("Unknown depthTexture format")}function K(T){const S=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Ve(S.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?Ve(S.__webglFramebuffer[0],T,0):Ve(S.__webglFramebuffer,T,0)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ht(S.__webglDepthbuffer[Z],T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ae)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ht(S.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(T,S,O){const Z=n.get(T);S!==void 0&&Oe(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&K(T)}function Q(T){const S=T.texture,O=n.get(T),Z=n.get(S);T.addEventListener("dispose",y);const ee=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let $=0;$<S.mipmaps.length;$++)O.__webglFramebuffer[X][$]=s.createFramebuffer()}else O.__webglFramebuffer[X]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<S.mipmaps.length;X++)O.__webglFramebuffer[X]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ue)for(let X=0,$=ee.length;X<$;X++){const Me=n.get(ee[X]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Ie(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<ee.length;X++){const $=ee[X];O.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[X]);const Me=r.convert($.format,$.colorSpace),Ee=r.convert($.type),he=M($.internalFormat,Me,Ee,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),le=qe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,O.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,S);for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)Oe(O.__webglFramebuffer[X][$],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else Oe(O.__webglFramebuffer[X],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);g(S)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let X=0,$=ee.length;X<$;X++){const Me=ee[X],Ee=n.get(Me);let he=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),Xe(he,Me),Oe(O.__webglFramebuffer,T,Me,s.COLOR_ATTACHMENT0+X,he,0),g(Me)&&x(he)}t.unbindTexture()}else{let X=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(X,Z.__webglTexture),Xe(X,S),S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)Oe(O.__webglFramebuffer[$],T,S,s.COLOR_ATTACHMENT0,X,$);else Oe(O.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,X,0);g(S)&&x(X),t.unbindTexture()}T.depthBuffer&&K(T)}function ve(T){const S=T.textures;for(let O=0,Z=S.length;O<Z;O++){const ee=S[O];if(g(ee)){const ae=v(T),ue=n.get(ee).__webglTexture;t.bindTexture(ae,ue),x(ae),t.unbindTexture()}}}const pe=[],Ge=[];function L(T){if(T.samples>0){if(Ie(T)===!1){const S=T.textures,O=T.width,Z=T.height;let ee=s.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(T),X=S.length>1;if(X)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const $=T.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Me]);const Ee=n.get(S[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,ee,s.NEAREST),l===!0&&(pe.length=0,Ge.length=0,pe.push(s.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(pe.push(ae),Ge.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Me]);const Ee=n.get(S[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function qe(T){return Math.min(i.maxSamples,T.samples)}function Ie(T){const S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function re(T,S){const O=T.colorSpace,Z=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Uo&&O!==Qi&&(ot.getTransfer(O)===vt?(Z!==hn||ee!==yn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",O)),S}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=N,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=me,this.setTextureCube=Se,this.rebindTextures=se,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sx(s,e){function t(n,i=Qi){let r;const a=ot.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===Lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Du)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Md)return s.BYTE;if(n===Sd)return s.SHORT;if(n===Ta)return s.UNSIGNED_SHORT;if(n===Iu)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===Bi)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===Ed)return s.RGB;if(n===hn)return s.RGBA;if(n===zi)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===Nu)return s.RED;if(n===sl)return s.RED_INTEGER;if(n===Ns)return s.RG;if(n===Uu)return s.RG_INTEGER;if(n===Fu)return s.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===Mo)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===zc||n===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===Io||n===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vc||n===Gc)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return r.COMPRESSED_RG11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ou||n===lu||n===cu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ou)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===hu||n===Lo||n===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ea?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:sC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends vi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new aC,g={},x=t.getContextAttributes();let v=null,M=null;const A=[],w=[],R=new j;let y=null;const E=new Yt;E.viewport=new Mt;const I=new Yt;I.viewport=new Mt;const P=[E,I],U=new q0;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=A[J];return _e===void 0&&(_e=new xc,A[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=A[J];return _e===void 0&&(_e=new xc,A[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=A[J];return _e===void 0&&(_e=new xc,A[J]=_e),_e.getHandSpace()};function N(J){const _e=w.indexOf(J.inputSource);if(_e===-1)return;const oe=A[_e];oe!==void 0&&(oe.update(J.inputSource,J.frame,c||a),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",B);for(let J=0;J<A.length;J++){const _e=w[J];_e!==null&&(w[J]=null,A[J].disconnect(_e))}W=null,q=null,m.reset();for(const J in g)delete g[J];e.setRenderTarget(v),d=null,u=null,f=null,i=null,M=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,De=null,ze=null;x.depth&&(ze=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=x.stencil?Ts:zi,De=x.stencil?Ea:$n);const Oe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Oe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Un(u.textureWidth,u.textureHeight,{format:hn,type:yn,depthTexture:new Er(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Un(d.framebufferWidth,d.framebufferHeight,{format:hn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(J){for(let _e=0;_e<J.removed.length;_e++){const oe=J.removed[_e],De=w.indexOf(oe);De>=0&&(w[De]=null,A[De].disconnect(oe))}for(let _e=0;_e<J.added.length;_e++){const oe=J.added[_e];let De=w.indexOf(oe);if(De===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=w.length){w.push(oe),De=Oe;break}else if(w[Oe]===null){w[Oe]=oe,De=Oe;break}if(De===-1)break}const ze=A[De];ze&&ze.connect(oe)}}const ne=new C,ie=new C;function me(J,_e,oe){ne.setFromMatrixPosition(_e.matrixWorld),ie.setFromMatrixPosition(oe.matrixWorld);const De=ne.distanceTo(ie),ze=_e.projectionMatrix.elements,Oe=oe.projectionMatrix.elements,ht=ze[14]/(ze[10]-1),Ve=ze[14]/(ze[10]+1),K=(ze[9]+1)/ze[5],se=(ze[9]-1)/ze[5],Q=(ze[8]-1)/ze[0],ve=(Oe[8]+1)/Oe[0],pe=ht*Q,Ge=ht*ve,L=De/(-Q+ve),qe=L*-Q;if(_e.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(L),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ze[10]===-1)J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ie=ht+L,He=Ve+L,re=pe-qe,xt=Ge+(De-qe),T=K*Ve/He*Ie,S=se*Ve/He*Ie;J.projectionMatrix.makePerspective(re,xt,T,S,Ie,He),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Se(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let _e=J.near,oe=J.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=I.near=E.near=_e,U.far=I.far=E.far=oe,(W!==U.near||q!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,q=U.far),U.layers.mask=J.layers.mask|6,E.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;const De=J.parent,ze=U.cameras;Se(U,De);for(let Oe=0;Oe<ze.length;Oe++)Se(ze[Oe],De);ze.length===2?me(U,E,I):U.projectionMatrix.copy(E.projectionMatrix),Re(J,U,De)};function Re(J,_e,oe){oe===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Aa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return g[J]};let tt=null;function ut(J,_e){if(h=_e.getViewerPose(c||a),p=_e,h!==null){const oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let De=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Ve=0;Ve<oe.length;Ve++){const K=oe[Ve];let se=null;if(d!==null)se=d.getViewport(K);else{const ve=f.getViewSubImage(u,K);se=ve.viewport,Ve===0&&(e.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(M))}let Q=P[Ve];Q===void 0&&(Q=new Yt,Q.layers.enable(Ve),Q.viewport=new Mt,P[Ve]=Q),Q.matrix.fromArray(K.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(K.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(se.x,se.y,se.width,se.height),Ve===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(Q)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Ve=f.getDepthInformation(oe[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,i.renderState)}if(ze&&ze.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ve=0;Ve<oe.length;Ve++){const K=oe[Ve].camera;if(K){let se=g[K];se||(se=new Fd,g[K]=se);const Q=f.getCameraImage(K);se.sourceTexture=Q}}}}for(let oe=0;oe<A.length;oe++){const De=w[oe],ze=A[oe];De!==null&&ze!==void 0&&ze.update(De,_e,c||a)}tt&&tt(J,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}const Xe=new j0;Xe.setAnimationLoop(ut),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const lC=new ke,rx=new We;rx.set(-1,0,0,0,1,0,0,0,1);function cC(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,M0(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,v,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(rx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uC(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(p(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const v=f();x.__bindingPointIndex=v;const M=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],M=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,R=M.length;w<R;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,I=y.length;E<I;E++){const P=y[E];if(d(P,w,E,A)===!0){const U=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let N=0;N<W.length;N++){const G=W[N],B=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+q,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):ArrayBuffer.isView(G)?P.__data.set(new G.constructor(G.buffer,G.byteOffset,P.__data.length)):(G.toArray(P.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,M,A){const w=x.value,R=v+"_"+M;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:ArrayBuffer.isView(w)?A[R]=w.slice():A[R]=w.clone(),!0;{const y=A[R];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return A[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function p(x){const v=x.uniforms;let M=0;const A=16;for(let R=0,y=v.length;R<y;R++){const E=Array.isArray(v[R])?v[R]:[v[R]];for(let I=0,P=E.length;I<P;I++){const U=E[I],W=Array.isArray(U.value)?U.value:[U.value];for(let q=0,N=W.length;q<N;q++){const G=W[q],B=_(G),ne=M%A,ie=ne%B.boundary,me=ne+ie;M+=ie,me!==0&&A-me<B.storage&&(M+=A-me),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=B.storage}}}const w=M%A;return w>0&&(M+=A-w),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):de("WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}const hC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function fC(){return Ei===null&&(Ei=new pi(hC,16,16,Ns,Bi),Ei.name="DFG_LUT",Ei.minFilter=Ct,Ei.magFilter=Ct,Ei.wrapS=Sn,Ei.wrapT=Sn,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class ax{constructor(e={}){const{canvas:t=$_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,m=new Set([Fu,Uu,sl]),g=new Set([yn,$n,Ta,Ea,Lu,Du]),x=new Uint32Array(4),v=new Int32Array(4),M=new C;let A=null,w=null;const R=[],y=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,U=null;this._outputColorSpace=vn;let W=0,q=0,N=null,G=-1,B=null;const ne=new Mt,ie=new Mt;let me=null;const Se=new we(0);let Re=0,tt=t.width,ut=t.height,Xe=1,J=null,_e=null;const oe=new Mt(0,0,tt,ut),De=new Mt(0,0,tt,ut);let ze=!1;const Oe=new Oa;let ht=!1,Ve=!1;const K=new ke,se=new C,Q=new Mt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Ge(){return N===null?Xe:1}let L=n;function qe(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),L===null){const F="webgl2";if(L=qe(F,b),L===null)throw qe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Pe("WebGLRenderer: "+b.message),b}let Ie,He,re,xt,T,S,O,Z,ee,ae,ue,X,$,Me,Ee,he,le,Ye,nt,gt,D,ce,Y;function be(){Ie=new dA(L),Ie.init(),D=new sx(L,Ie),He=new rA(L,Ie,e,D),re=new nC(L,Ie),He.reversedDepthBuffer&&u&&re.buffers.depth.setReversed(!0),xt=new gA(L),T=new G1,S=new iC(L,Ie,re,T,He,D,xt),O=new fA(I),Z=new yw(L),ce=new iA(L,Z),ee=new pA(L,Z,xt,ce),ae=new xA(L,ee,Z,ce,xt),Ye=new _A(L,He,S),Ee=new aA(T),ue=new V1(I,O,Ie,He,ce,Ee),X=new cC(I,T),$=new W1,Me=new J1(Ie),le=new nA(I,O,re,ae,p,l),he=new tC(I,ae,He),Y=new uC(L,xt,He,re),nt=new sA(L,Ie,xt),gt=new mA(L,Ie,xt),xt.programs=ue.programs,I.capabilities=He,I.extensions=Ie,I.properties=T,I.renderLists=$,I.shadowMap=he,I.state=re,I.info=xt}be(),_!==yn&&(E=new yA(_,t.width,t.height,i,r));const fe=new oC(I,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ie.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ie.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(b){b!==void 0&&(Xe=b,this.setSize(tt,ut,!1))},this.getSize=function(b){return b.set(tt,ut)},this.setSize=function(b,F,H=!0){if(fe.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=b,ut=F,t.width=Math.floor(b*Xe),t.height=Math.floor(F*Xe),H===!0&&(t.style.width=b+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(tt*Xe,ut*Xe).floor()},this.setDrawingBufferSize=function(b,F,H){tt=b,ut=F,Xe=H,t.width=Math.floor(b*H),t.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===yn){Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){de("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,F,H,k){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,F,H,k),re.viewport(ne.copy(oe).multiplyScalar(Xe).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,F,H,k){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,F,H,k),re.scissor(ie.copy(De).multiplyScalar(Xe).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){re.setScissorTest(ze=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,H=!0){let k=0;if(b){let V=!1;if(N!==null){const ye=N.texture.format;V=m.has(ye)}if(V){const ye=N.texture.type,Ae=g.has(ye),xe=le.getClearColor(),Le=le.getClearAlpha(),Ue=xe.r,je=xe.g,rt=xe.b;Ae?(x[0]=Ue,x[1]=je,x[2]=rt,x[3]=Le,L.clearBufferuiv(L.COLOR,0,x)):(v[0]=Ue,v[1]=je,v[2]=rt,v[3]=Le,L.clearBufferiv(L.COLOR,0,v))}else k|=L.COLOR_BUFFER_BIT}F&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),le.dispose(),$.dispose(),Me.dispose(),T.dispose(),O.dispose(),ae.dispose(),ce.dispose(),Y.dispose(),ue.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",hp),fe.removeEventListener("sessionend",fp),Gs.stop()};function te(b){b.preventDefault(),zo("WebGLRenderer: Context Lost."),P=!0}function Ne(){zo("WebGLRenderer: Context Restored."),P=!1;const b=xt.autoReset,F=he.enabled,H=he.autoUpdate,k=he.needsUpdate,V=he.type;be(),xt.autoReset=b,he.enabled=F,he.autoUpdate=H,he.needsUpdate=k,he.type=V}function Ke(b){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const F=b.target;F.removeEventListener("dispose",Ut),St(F)}function St(b){Gi(b),T.remove(b)}function Gi(b){const F=T.get(b).programs;F!==void 0&&(F.forEach(function(H){ue.releaseProgram(H)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,k,V,ye){F===null&&(F=ve);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,xe=gx(b,F,H,k,V);re.setMaterial(k,Ae);let Le=H.index,Ue=1;if(k.wireframe===!0){if(Le=ee.getWireframeAttribute(H),Le===void 0)return;Ue=2}const je=H.drawRange,rt=H.attributes.position;let Fe=je.start*Ue,bt=(je.start+je.count)*Ue;ye!==null&&(Fe=Math.max(Fe,ye.start*Ue),bt=Math.min(bt,(ye.start+ye.count)*Ue)),Le!==null?(Fe=Math.max(Fe,0),bt=Math.min(bt,Le.count)):rt!=null&&(Fe=Math.max(Fe,0),bt=Math.min(bt,rt.count));const Ft=bt-Fe;if(Ft<0||Ft===1/0)return;ce.setup(V,k,xe,H,Le);let Lt,Tt=nt;if(Le!==null&&(Lt=Z.get(Le),Tt=gt,Tt.setIndex(Lt)),V.isMesh)k.wireframe===!0?(re.setLineWidth(k.wireframeLinewidth*Ge()),Tt.setMode(L.LINES)):Tt.setMode(L.TRIANGLES);else if(V.isLine){let Qt=k.linewidth;Qt===void 0&&(Qt=1),re.setLineWidth(Qt*Ge()),V.isLineSegments?Tt.setMode(L.LINES):V.isLineLoop?Tt.setMode(L.LINE_LOOP):Tt.setMode(L.LINE_STRIP)}else V.isPoints?Tt.setMode(L.POINTS):V.isSprite&&Tt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Qt=V._multiDrawStarts,Te=V._multiDrawCounts,wn=V._multiDrawCount,ft=Le?Z.get(Le).bytesPerElement:1,Fn=T.get(k).currentProgram.getUniforms();for(let Si=0;Si<wn;Si++)Fn.setValue(L,"_gl_DrawID",Si),Tt.render(Qt[Si]/ft,Te[Si])}else if(V.isInstancedMesh)Tt.renderInstances(Fe,Ft,V.count);else if(H.isInstancedBufferGeometry){const Qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Qt);Tt.renderInstances(Fe,Ft,Te)}else Tt.render(Fe,Ft)};function Mi(b,F,H){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,dl(b,F,H),b.side=is,b.needsUpdate=!0,dl(b,F,H),b.side=Li):dl(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),w=Me.get(H),w.init(F),y.push(w),H.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==H&&b.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const xe=ye[Ae];Mi(xe,H,V),k.add(xe)}else Mi(ye,H,V),k.add(ye)}),w=y.pop(),k},this.compileAsync=function(b,F,H=null){const k=this.compile(b,F,H);return new Promise(V=>{function ye(){if(k.forEach(function(Ae){T.get(Ae).currentProgram.isReady()&&k.delete(Ae)}),k.size===0){V(b);return}setTimeout(ye,10)}Ie.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let dh=null;function px(b){dh&&dh(b)}function hp(){Gs.stop()}function fp(){Gs.start()}const Gs=new j0;Gs.setAnimationLoop(px),typeof self<"u"&&Gs.setContext(self),this.setAnimationLoop=function(b){dh=b,fe.setAnimationLoop(b),b===null?Gs.stop():Gs.start()},fe.addEventListener("sessionstart",hp),fe.addEventListener("sessionend",fp),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(b,F);const H=fe.enabled===!0&&fe.isPresenting===!0,k=E!==null&&(N===null||H)&&E.begin(I,N);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,N),w=Me.get(b,y.length),w.init(F),w.state.textureUnits=S.getTextureUnits(),y.push(w),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(K,In,F.reversedDepth),Ve=this.localClippingEnabled,ht=Ee.init(this.clippingPlanes,Ve),A=$.get(b,R.length),A.init(),R.push(A),fe.enabled===!0&&fe.isPresenting===!0){const Ae=I.xr.getDepthSensingMesh();Ae!==null&&ph(Ae,F,-1/0,I.sortObjects)}ph(b,F,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(J,_e),pe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,pe&&le.addToRenderList(A,b),this.info.render.frame++,ht===!0&&Ee.beginShadows();const V=w.state.shadowsArray;if(he.render(V,b,F),ht===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&E.hasRenderPass())===!1){const Ae=A.opaque,xe=A.transmissive;if(w.setupLights(),F.isArrayCamera){const Le=F.cameras;if(xe.length>0)for(let Ue=0,je=Le.length;Ue<je;Ue++){const rt=Le[Ue];pp(Ae,xe,b,rt)}pe&&le.render(b);for(let Ue=0,je=Le.length;Ue<je;Ue++){const rt=Le[Ue];dp(A,b,rt,rt.viewport)}}else xe.length>0&&pp(Ae,xe,b,F),pe&&le.render(b),dp(A,b,F)}N!==null&&q===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),k&&E.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),ce.resetDefaultState(),G=-1,B=null,y.pop(),y.length>0?(w=y[y.length-1],S.setTextureUnits(w.state.textureUnits),ht===!0&&Ee.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?A=R[R.length-1]:A=null,U!==null&&U.renderEnd()};function ph(b,F,H,k){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Oe.intersectsSprite(b)){k&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Ae=ae.update(b),xe=b.material;xe.visible&&A.push(b,Ae,xe,H,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Oe.intersectsObject(b))){const Ae=ae.update(b),xe=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Q.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Q.copy(Ae.boundingSphere.center)),Q.applyMatrix4(b.matrixWorld).applyMatrix4(K)),Array.isArray(xe)){const Le=Ae.groups;for(let Ue=0,je=Le.length;Ue<je;Ue++){const rt=Le[Ue],Fe=xe[rt.materialIndex];Fe&&Fe.visible&&A.push(b,Ae,Fe,H,Q.z,rt)}}else xe.visible&&A.push(b,Ae,xe,H,Q.z,null)}}const ye=b.children;for(let Ae=0,xe=ye.length;Ae<xe;Ae++)ph(ye[Ae],F,H,k)}function dp(b,F,H,k){const{opaque:V,transmissive:ye,transparent:Ae}=b;w.setupLightsView(H),ht===!0&&Ee.setGlobalState(I.clippingPlanes,H),k&&re.viewport(ne.copy(k)),V.length>0&&fl(V,F,H),ye.length>0&&fl(ye,F,H),Ae.length>0&&fl(Ae,F,H),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function pp(b,F,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const Fe=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new Un(1,1,{generateMipmaps:!0,type:Fe?Bi:yn,minFilter:Di,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=w.state.transmissionRenderTarget[k.id],Ae=k.viewport||ne;ye.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);const xe=I.getRenderTarget(),Le=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(Se),Re=I.getClearAlpha(),Re<1&&I.setClearColor(16777215,.5),I.clear(),pe&&le.render(H);const je=I.toneMapping;I.toneMapping=di;const rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),ht===!0&&Ee.setGlobalState(I.clippingPlanes,k),fl(b,H,k),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let bt=0,Ft=F.length;bt<Ft;bt++){const Lt=F[bt],{object:Tt,geometry:Qt,material:Te,group:wn}=Lt;if(Te.side===Li&&Tt.layers.test(k.layers)){const ft=Te.side;Te.side=fn,Te.needsUpdate=!0,mp(Tt,H,k,Qt,Te,wn),Te.side=ft,Te.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye))}I.setRenderTarget(xe,Le,Ue),I.setClearColor(Se,Re),rt!==void 0&&(k.viewport=rt),I.toneMapping=je}function fl(b,F,H){const k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ye=b.length;V<ye;V++){const Ae=b[V],{object:xe,geometry:Le,group:Ue}=Ae;let je=Ae.material;je.allowOverride===!0&&k!==null&&(je=k),xe.layers.test(H.layers)&&mp(xe,F,H,Le,je,Ue)}}function mp(b,F,H,k,V,ye){b.onBeforeRender(I,F,H,k,V,ye),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,F,H,k,b,ye),V.transparent===!0&&V.side===Li&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,I.renderBufferDirect(H,F,k,V,b,ye),V.side=is,V.needsUpdate=!0,I.renderBufferDirect(H,F,k,V,b,ye),V.side=Li):I.renderBufferDirect(H,F,k,V,b,ye),b.onAfterRender(I,F,H,k,V,ye)}function dl(b,F,H){F.isScene!==!0&&(F=ve);const k=T.get(b),V=w.state.lights,ye=w.state.shadowsArray,Ae=V.state.version,xe=ue.getParameters(b,V.state,ye,F,H,w.state.lightProbeGridArray),Le=ue.getProgramCacheKey(xe);let Ue=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=O.get(b.envMap||k.environment,je),k.envMapRotation=k.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",Ut),Ue=new Map,k.programs=Ue);let rt=Ue.get(Le);if(rt!==void 0){if(k.currentProgram===rt&&k.lightsStateVersion===Ae)return _p(b,xe),rt}else xe.uniforms=ue.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,H,xe),b.onBeforeCompile(xe,I),rt=ue.acquireProgram(xe,Le),Ue.set(Le,rt),k.uniforms=xe.uniforms;const Fe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ee.uniform),_p(b,xe),k.needsLights=xx(b),k.lightsStateVersion=Ae,k.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=rt,k.uniformsList=null,rt}function gp(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=vc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function _p(b,F){const H=T.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function mx(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let H=0,k=b.length;H<k;H++){const V=b[H];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function gx(b,F,H,k,V){F.isScene!==!0&&(F=ve),S.resetTextureUnits();const ye=F.fog,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,xe=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ot.workingColorSpace,Le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ue=O.get(k.envMap||Ae,Le),je=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,rt=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!H.morphAttributes.position,bt=!!H.morphAttributes.normal,Ft=!!H.morphAttributes.color;let Lt=di;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Lt=I.toneMapping);const Tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Tt!==void 0?Tt.length:0,Te=T.get(k),wn=w.state.lights;if(ht===!0&&(Ve===!0||b!==B)){const At=b===B&&k.id===G;Ee.setState(k,b,At)}let ft=!1;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==wn.state.version||Te.outputColorSpace!==xe||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Ue||k.fog===!0&&Te.fog!==ye||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ee.numPlanes||Te.numIntersection!==Ee.numIntersection)||Te.vertexAlphas!==je||Te.vertexTangents!==rt||Te.morphTargets!==Fe||Te.morphNormals!==bt||Te.morphColors!==Ft||Te.toneMapping!==Lt||Te.morphTargetsCount!==Qt||!!Te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Te.__version=k.version);let Fn=Te.currentProgram;ft===!0&&(Fn=dl(k,F,V),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Fn,Te));let Si=!1,os=!1,Nr=!1;const Et=Fn.getUniforms(),Ot=Te.uniforms;if(re.useProgram(Fn.program)&&(Si=!0,os=!0,Nr=!0),k.id!==G&&(G=k.id,os=!0),Te.needsLights){const At=mx(w.state.lightProbeGridArray,V);Te.lightProbeGrid!==At&&(Te.lightProbeGrid=At,os=!0)}if(Si||B!==b){re.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Et.setValue(L,"projectionMatrix",b.projectionMatrix),Et.setValue(L,"viewMatrix",b.matrixWorldInverse);const cs=Et.map.cameraPosition;cs!==void 0&&cs.setValue(L,se.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,os=!0,Nr=!0)}if(Te.needsLights&&(wn.state.directionalShadowMap.length>0&&Et.setValue(L,"directionalShadowMap",wn.state.directionalShadowMap,S),wn.state.spotShadowMap.length>0&&Et.setValue(L,"spotShadowMap",wn.state.spotShadowMap,S),wn.state.pointShadowMap.length>0&&Et.setValue(L,"pointShadowMap",wn.state.pointShadowMap,S)),V.isSkinnedMesh){Et.setOptional(L,V,"bindMatrix"),Et.setOptional(L,V,"bindMatrixInverse");const At=V.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Et.setValue(L,"boneTexture",At.boneTexture,S))}V.isBatchedMesh&&(Et.setOptional(L,V,"batchingTexture"),Et.setValue(L,"batchingTexture",V._matricesTexture,S),Et.setOptional(L,V,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",V._indirectTexture,S),Et.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",V._colorsTexture,S));const ls=H.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&Ye.update(V,H,Fn),(os||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,Et.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Ot.envMapIntensity.value=F.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=fC()),os){if(Et.setValue(L,"toneMappingExposure",I.toneMappingExposure),Te.needsLights&&_x(Ot,Nr),ye&&k.fog===!0&&X.refreshFogUniforms(Ot,ye),X.refreshMaterialUniforms(Ot,k,Xe,ut,w.state.transmissionRenderTarget[b.id]),Te.needsLights&&Te.lightProbeGrid){const At=Te.lightProbeGrid;Ot.probesSH.value=At.texture,Ot.probesMin.value.copy(At.boundingBox.min),Ot.probesMax.value.copy(At.boundingBox.max),Ot.probesResolution.value.copy(At.resolution)}vc.upload(L,gp(Te),Ot,S)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vc.upload(L,gp(Te),Ot,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(L,"center",V.center),Et.setValue(L,"modelViewMatrix",V.modelViewMatrix),Et.setValue(L,"normalMatrix",V.normalMatrix),Et.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const At=k.uniformsGroups;for(let cs=0,Ur=At.length;cs<Ur;cs++){const xp=At[cs];Y.update(xp,Fn),Y.bind(xp,Fn)}}return Fn}function _x(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function xx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,F,H){const k=T.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=F,T.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const H=T.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const vx=L.createFramebuffer();this.setRenderTarget=function(b,F=0,H=0){N=b,W=F,q=H;let k=null,V=!1,ye=!1;if(b){const xe=T.get(b);if(xe.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(b.viewport),ie.copy(b.scissor),me=b.scissorTest,re.viewport(ne),re.scissor(ie),re.setScissorTest(me),G=-1;return}else if(xe.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(xe.__hasExternalTextures)S.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(xe.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ye=!0);const Ue=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?k=Ue[F][H]:k=Ue[F],V=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?k=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[H]:k=Ue,ne.copy(b.viewport),ie.copy(b.scissor),me=b.scissorTest}else ne.copy(oe).multiplyScalar(Xe).floor(),ie.copy(De).multiplyScalar(Xe).floor(),me=ze;if(H!==0&&(k=vx),re.bindFramebuffer(L.FRAMEBUFFER,k)&&re.drawBuffers(b,k),re.viewport(ne),re.scissor(ie),re.setScissorTest(me),V){const xe=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,H)}else if(ye){const xe=F;for(let Le=0;Le<b.textures.length;Le++){const Ue=T.get(b.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,H,xe)}}else if(b!==null&&H!==0){const xe=T.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,H)}G=-1},this.readRenderTargetPixels=function(b,F,H,k,V,ye,Ae,xe=0){if(!(b&&b.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){re.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ue=b.textures[xe],je=Ue.format,rt=Ue.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!He.textureFormatReadable(je)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(rt)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-k&&H>=0&&H<=b.height-V&&L.readPixels(F,H,k,V,D.convert(je),D.convert(rt),ye)}finally{const Ue=N!==null?T.get(N).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,F,H,k,V,ye,Ae,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(F>=0&&F<=b.width-k&&H>=0&&H<=b.height-V){re.bindFramebuffer(L.FRAMEBUFFER,Le);const Ue=b.textures[xe],je=Ue.format,rt=Ue.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),!He.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(F,H,k,V,D.convert(je),D.convert(rt),0);const bt=N!==null?T.get(N).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,bt);const Ft=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _M(L,Ft,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Fe),L.deleteSync(Ft),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,H=0){const k=Math.pow(2,-H),V=Math.floor(b.image.width*k),ye=Math.floor(b.image.height*k),Ae=F!==null?F.x:0,xe=F!==null?F.y:0;S.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Ae,xe,V,ye),re.unbindTexture()};const yx=L.createFramebuffer(),Mx=L.createFramebuffer();this.copyTextureToTexture=function(b,F,H=null,k=null,V=0,ye=0){let Ae,xe,Le,Ue,je,rt,Fe,bt,Ft;const Lt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(H!==null)Ae=H.max.x-H.min.x,xe=H.max.y-H.min.y,Le=H.isBox3?H.max.z-H.min.z:1,Ue=H.min.x,je=H.min.y,rt=H.isBox3?H.min.z:0;else{const Ot=Math.pow(2,-V);Ae=Math.floor(Lt.width*Ot),xe=Math.floor(Lt.height*Ot),b.isDataArrayTexture?Le=Lt.depth:b.isData3DTexture?Le=Math.floor(Lt.depth*Ot):Le=1,Ue=0,je=0,rt=0}k!==null?(Fe=k.x,bt=k.y,Ft=k.z):(Fe=0,bt=0,Ft=0);const Tt=D.convert(F.format),Qt=D.convert(F.type);let Te;F.isData3DTexture?(S.setTexture3D(F,0),Te=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Te=L.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Te=L.TEXTURE_2D),re.activeTexture(L.TEXTURE0),re.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),re.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),re.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const wn=re.getParameter(L.UNPACK_ROW_LENGTH),ft=re.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=re.getParameter(L.UNPACK_SKIP_PIXELS),Si=re.getParameter(L.UNPACK_SKIP_ROWS),os=re.getParameter(L.UNPACK_SKIP_IMAGES);re.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),re.pixelStorei(L.UNPACK_SKIP_ROWS,je),re.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);const Nr=b.isDataArrayTexture||b.isData3DTexture,Et=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Ot=T.get(b),ls=T.get(F),At=T.get(Ot.__renderTarget),cs=T.get(ls.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,At.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Ur=0;Ur<Le;Ur++)Nr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(b).__webglTexture,V,rt+Ur),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(F).__webglTexture,ye,Ft+Ur)),L.blitFramebuffer(Ue,je,Ae,xe,Fe,bt,Ae,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||T.has(b)){const Ot=T.get(b),ls=T.get(F);re.bindFramebuffer(L.READ_FRAMEBUFFER,yx),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mx);for(let At=0;At<Le;At++)Nr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,V,rt+At):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,V),Et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ls.__webglTexture,ye,Ft+At):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ls.__webglTexture,ye),V!==0?L.blitFramebuffer(Ue,je,Ae,xe,Fe,bt,Ae,xe,L.COLOR_BUFFER_BIT,L.NEAREST):Et?L.copyTexSubImage3D(Te,ye,Fe,bt,Ft+At,Ue,je,Ae,xe):L.copyTexSubImage2D(Te,ye,Fe,bt,Ue,je,Ae,xe);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Et?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Te,ye,Fe,bt,Ft,Ae,xe,Le,Tt,Qt,Lt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,ye,Fe,bt,Ft,Ae,xe,Le,Tt,Lt.data):L.texSubImage3D(Te,ye,Fe,bt,Ft,Ae,xe,Le,Tt,Qt,Lt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,Fe,bt,Ae,xe,Tt,Qt,Lt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,Fe,bt,Lt.width,Lt.height,Tt,Lt.data):L.texSubImage2D(L.TEXTURE_2D,ye,Fe,bt,Ae,xe,Tt,Qt,Lt);re.pixelStorei(L.UNPACK_ROW_LENGTH,wn),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),re.pixelStorei(L.UNPACK_SKIP_ROWS,Si),re.pixelStorei(L.UNPACK_SKIP_IMAGES,os),ye===0&&F.generateMipmaps&&L.generateMipmap(Te),re.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),re.unbindTexture()},this.resetState=function(){W=0,q=0,N=null,re.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const dC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:_d,AddEquation:vs,AddOperation:U_,AdditiveAnimationBlendMode:Ad,AdditiveBlending:Pf,AgXToneMapping:Co,AlphaFormat:Td,AlwaysCompare:Y_,AlwaysDepth:Ic,AlwaysStencilFunc:Uf,AmbientLight:k0,AnimationAction:J0,AnimationClip:Xo,AnimationLoader:cb,AnimationMixer:zb,AnimationObjectGroup:Ob,AnimationUtils:rb,ArcCurve:u0,ArrayCamera:q0,ArrowHelper:hw,AttachedBindMode:Df,Audio:Z0,AudioAnalyser:Ab,AudioContext:Qd,AudioListener:wb,AudioLoader:yb,AxesHelper:fw,BackSide:fn,BasicDepthPacking:k_,BasicShadowMap:wy,BatchedMesh:s0,BezierInterpolant:D0,Bone:Nd,BooleanKeyframeTrack:Lr,Box2:$b,Box3:sn,Box3Helper:cw,BoxGeometry:Ir,BoxHelper:lw,BufferAttribute:wt,BufferGeometry:$e,BufferGeometryLoader:W0,ByteType:Md,Cache:Ni,Camera:lh,CameraHelper:ow,CanvasTexture:wS,CapsuleGeometry:$u,CatmullRomCurve3:h0,CineonToneMapping:gd,CircleGeometry:Ju,ClampToEdgeWrapping:Sn,Clock:qb,Color:we,ColorKeyframeTrack:$d,ColorManagement:ot,Compatibility:fM,CompressedArrayTexture:SS,CompressedCubeTexture:bS,CompressedTexture:Zu,CompressedTextureLoader:ub,ConeGeometry:ol,ConstantAlphaFactor:L_,ConstantColorFactor:P_,Controls:pw,CubeCamera:X0,CubeDepthTexture:l0,CubeReflectionMapping:Oi,CubeRefractionMapping:Ds,CubeTexture:rl,CubeTextureLoader:hb,CubeUVReflectionMapping:Ua,CubicBezierCurve:Bd,CubicBezierCurve3:f0,CubicInterpolant:I0,CullFaceBack:Rf,CullFaceFront:m_,CullFaceFrontBack:by,CullFaceNone:p_,Curve:yi,CurvePath:p0,CustomBlending:g_,CustomToneMapping:xd,CylinderGeometry:al,Cylindrical:Zb,Data3DTexture:Vu,DataArrayTexture:ku,DataTexture:pi,DataTextureLoader:fb,DataUtils:$M,DecrementStencilOp:Hy,DecrementWrapStencilOp:Xy,DefaultLoadingManager:U0,DepthFormat:zi,DepthStencilFormat:Ts,DepthTexture:Er,DetachedBindMode:F_,DirectionalLight:z0,DirectionalLightHelper:aw,DiscreteInterpolant:L0,DodecahedronGeometry:Ku,DoubleSide:Li,DstAlphaFactor:T_,DstColorFactor:A_,DynamicCopyUsage:aM,DynamicDrawUsage:eM,DynamicReadUsage:iM,EdgesGeometry:c0,EllipseCurve:ju,EqualCompare:W_,EqualDepth:Dc,EqualStencilFunc:$y,EquirectangularReflectionMapping:mo,EquirectangularRefractionMapping:go,Euler:_i,EventDispatcher:vi,ExternalTexture:Fd,ExtrudeGeometry:Qu,FileLoader:rs,Float16BufferAttribute:nS,Float32BufferAttribute:Ce,FloatType:un,Fog:Wu,FogExp2:Hu,FramebufferTexture:MS,FrontSide:is,Frustum:Oa,FrustumArray:Yu,GLBufferAttribute:Wb,GLSL1:lM,GLSL3:Ff,GreaterCompare:X_,GreaterDepth:Uc,GreaterEqualCompare:zu,GreaterEqualDepth:Nc,GreaterEqualStencilFunc:Qy,GreaterStencilFunc:Ky,GridHelper:sw,Group:ha,HTMLTexture:TS,HalfFloatType:Bi,HemisphereLight:F0,HemisphereLightHelper:iw,IcosahedronGeometry:eh,ImageBitmapLoader:vb,ImageLoader:qo,ImageUtils:K_,IncrementStencilOp:Gy,IncrementWrapStencilOp:Wy,InstancedBufferAttribute:Ca,InstancedBufferGeometry:H0,InstancedInterleavedBuffer:Hb,InstancedMesh:i0,Int16BufferAttribute:eS,Int32BufferAttribute:tS,Int8BufferAttribute:KM,IntType:Iu,InterleavedBuffer:Xu,InterleavedBufferAttribute:Tr,Interpolant:za,InterpolateBezier:Nf,InterpolateDiscrete:Do,InterpolateLinear:du,InterpolateSmooth:_c,InterpolationSamplingMode:hM,InterpolationSamplingType:uM,InvertStencilOp:qy,KeepStencilOp:tr,KeyframeTrack:jn,LOD:t0,LatheGeometry:th,Layers:Gu,LessCompare:H_,LessDepth:Lc,LessEqualCompare:Bu,LessEqualDepth:br,LessEqualStencilFunc:Jy,LessStencilFunc:Zy,Light:Vs,LightProbe:G0,Line:Fs,Line3:jb,LineBasicMaterial:pn,LineCurve:zd,LineCurve3:d0,LineDashedMaterial:R0,LineLoop:r0,LineSegments:Vi,LinearFilter:Ct,LinearInterpolant:Zd,LinearMipMapLinearFilter:Ry,LinearMipMapNearestFilter:Cy,LinearMipmapLinearFilter:Di,LinearMipmapNearestFilter:_o,LinearSRGBColorSpace:Uo,LinearToneMapping:pd,LinearTransfer:Fo,Loader:bn,LoaderUtils:Vf,LoadingManager:Jd,LoopOnce:O_,LoopPingPong:z_,LoopRepeat:B_,MOUSE:My,Material:rn,MaterialBlending:Ty,MaterialLoader:ch,MathUtils:UM,Matrix2:Hf,Matrix3:We,Matrix4:ke,MaxEquation:y_,Mesh:Gt,MeshBasicMaterial:zs,MeshDepthMaterial:Xd,MeshDistanceMaterial:qd,MeshLambertMaterial:A0,MeshMatcapMaterial:C0,MeshNormalMaterial:E0,MeshPhongMaterial:w0,MeshPhysicalMaterial:b0,MeshStandardMaterial:Wd,MeshToonMaterial:T0,MinEquation:v_,MirroredRepeatWrapping:Po,MixOperation:N_,MultiplyBlending:Lf,MultiplyOperation:il,NearestFilter:zt,NearestMipMapLinearFilter:Ay,NearestMipMapNearestFilter:Ey,NearestMipmapLinearFilter:ca,NearestMipmapNearestFilter:yd,NeutralToneMapping:vd,NeverCompare:G_,NeverDepth:Pc,NeverStencilFunc:Yy,NoBlending:Ui,NoColorSpace:Qi,NoNormalPacking:Oy,NoToneMapping:di,NormalAnimationBlendMode:Ou,NormalBlending:gr,NormalGAPacking:zy,NormalRGPacking:By,NotEqualCompare:q_,NotEqualDepth:Fc,NotEqualStencilFunc:jy,NumberKeyframeTrack:Ho,Object3D:mt,ObjectLoader:_b,ObjectSpaceNormalMap:V_,OctahedronGeometry:ll,OneFactor:S_,OneMinusConstantAlphaFactor:D_,OneMinusConstantColorFactor:I_,OneMinusDstAlphaFactor:E_,OneMinusDstColorFactor:C_,OneMinusSrcAlphaFactor:Rc,OneMinusSrcColorFactor:w_,OrthographicCamera:hl,PCFShadowMap:fo,PCFSoftShadowMap:po,PMREMGenerator:Xf,Path:xu,PerspectiveCamera:Yt,Plane:_s,PlaneGeometry:Ba,PlaneHelper:uw,PointLight:B0,PointLightHelper:tw,Points:a0,PointsMaterial:Ud,PolarGridHelper:rw,PolyhedronGeometry:ks,PositionalAudio:Eb,PropertyBinding:pt,PropertyMixer:$0,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Vd,Quaternion:dn,QuaternionKeyframeTrack:ul,QuaternionLinearInterpolant:N0,R11_EAC_Format:Wc,RED_GREEN_RGTC2_Format:Lo,RED_RGTC1_Format:uu,REVISION:Ru,RG11_EAC_Format:Io,RGBADepthPacking:Ny,RGBAFormat:hn,RGBAIntegerFormat:Fu,RGBA_ASTC_10x10_Format:su,RGBA_ASTC_10x5_Format:tu,RGBA_ASTC_10x6_Format:nu,RGBA_ASTC_10x8_Format:iu,RGBA_ASTC_12x10_Format:ru,RGBA_ASTC_12x12_Format:au,RGBA_ASTC_4x4_Format:Yc,RGBA_ASTC_5x4_Format:Zc,RGBA_ASTC_5x5_Format:$c,RGBA_ASTC_6x5_Format:Jc,RGBA_ASTC_6x6_Format:Kc,RGBA_ASTC_8x5_Format:jc,RGBA_ASTC_8x6_Format:Qc,RGBA_ASTC_8x8_Format:eu,RGBA_BPTC_Format:ou,RGBA_ETC2_EAC_Format:Hc,RGBA_PVRTC_2BPPV1_Format:kc,RGBA_PVRTC_4BPPV1_Format:zc,RGBA_S3TC_DXT1_Format:vo,RGBA_S3TC_DXT3_Format:yo,RGBA_S3TC_DXT5_Format:Mo,RGBDepthPacking:Uy,RGBFormat:Ed,RGBIntegerFormat:Py,RGB_BPTC_SIGNED_Format:lu,RGB_BPTC_UNSIGNED_Format:cu,RGB_ETC1_Format:Vc,RGB_ETC2_Format:Gc,RGB_PVRTC_2BPPV1_Format:Bc,RGB_PVRTC_4BPPV1_Format:Oc,RGB_S3TC_DXT1_Format:xo,RGDepthPacking:Fy,RGFormat:Ns,RGIntegerFormat:Uu,RawShaderMaterial:Hd,Ray:Fa,Raycaster:Xb,RectAreaLight:V0,RedFormat:Nu,RedIntegerFormat:sl,ReinhardToneMapping:md,RenderTarget:Rd,RenderTarget3D:kb,RepeatWrapping:Ro,ReplaceStencilOp:Vy,ReverseSubtractEquation:x_,RingGeometry:nh,SIGNED_R11_EAC_Format:Xc,SIGNED_RED_GREEN_RGTC2_Format:fu,SIGNED_RED_RGTC1_Format:hu,SIGNED_RG11_EAC_Format:qc,SRGBColorSpace:vn,SRGBTransfer:vt,Scene:Pd,ShaderChunk:it,ShaderLib:si,ShaderMaterial:Jn,ShadowMaterial:y0,Shape:xr,ShapeGeometry:ih,ShapePath:dw,ShapeUtils:ui,ShortType:Sd,Skeleton:qu,SkeletonHelper:ew,SkinnedMesh:n0,Source:Es,Sphere:Kt,SphereGeometry:cl,Spherical:Yb,SphericalHarmonics3:jd,SplineCurve:Gd,SpotLight:O0,SpotLightHelper:Qb,Sprite:e0,SpriteMaterial:Dd,SrcAlphaFactor:Cc,SrcAlphaSaturateFactor:R_,SrcColorFactor:b_,StaticCopyUsage:rM,StaticDrawUsage:Oo,StaticReadUsage:nM,StereoCamera:Mb,StreamCopyUsage:oM,StreamDrawUsage:tM,StreamReadUsage:sM,StringKeyframeTrack:Dr,SubtractEquation:__,SubtractiveBlending:If,TOUCH:Sy,TangentSpaceNormalMap:ss,TetrahedronGeometry:sh,Texture:It,TextureLoader:db,TextureUtils:vw,Timer:Y0,TimestampQuery:cM,TorusGeometry:rh,TorusKnotGeometry:ah,Triangle:Mn,TriangleFanDrawMode:Dy,TriangleStripDrawMode:Ly,TrianglesDrawMode:Iy,TubeGeometry:oh,UVMapping:Pu,Uint16BufferAttribute:Id,Uint32BufferAttribute:Ld,Uint8BufferAttribute:jM,Uint8ClampedBufferAttribute:QM,Uniform:np,UniformsGroup:Gb,UniformsLib:ge,UniformsUtils:S0,UnsignedByteType:yn,UnsignedInt101111Type:wd,UnsignedInt248Type:Ea,UnsignedInt5999Type:bd,UnsignedIntType:$n,UnsignedShort4444Type:Lu,UnsignedShort5551Type:Du,UnsignedShortType:Ta,VSMShadowMap:la,Vector2:j,Vector3:C,Vector4:Mt,VectorKeyframeTrack:Wo,VideoFrameTexture:yS,VideoTexture:o0,WebGL3DRenderTarget:kM,WebGLArrayRenderTarget:zM,WebGLCoordinateSystem:In,WebGLCubeRenderTarget:ip,WebGLRenderTarget:Un,WebGLRenderer:ax,WebGLUtils:sx,WebGPUCoordinateSystem:wr,WebXRController:xc,WireframeGeometry:v0,WrapAroundEnding:No,ZeroCurvatureEnding:rr,ZeroFactor:M_,ZeroSlopeEnding:ar,ZeroStencilOp:ky,createCanvasElement:$_,error:Pe,getConsoleFunction:gM,log:zo,setConsoleFunction:mM,warn:de,warnOnce:pu},Symbol.toStringTag,{value:"Module"})),lg=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},pC=()=>{const s=[],n={items:s,remember:(i,r)=>{for(let o=0;o<s.length;o++){const l=s[o];if(lg(r,l.keys)&&l.promise)return l.promise}const a={promise:i(),keys:r};return s.push(a),a.promise},clear:i=>{for(let r=0;r<s.length;r++){const a=s[r];if(lg(i,a.keys)){s.splice(r,1);return}}}};return Kn("threlte-cache",n),n},cg=Symbol(),mC=s=>typeof(s==null?void 0:s.subscribe)=="function",ox=(s,e,t)=>{const n=s().map(a=>mC(a)?cy(a):cg),i=lo(()=>s().map((a,o)=>n[o]===cg?a:n[o].current)),r=()=>{st(i);let a;return as(()=>{a=e(st(i))}),a};t?Bn(r):ai(r)},gC=(s,e)=>ox(s,e,!1),_C=(s,e)=>ox(s,e,!0);Object.assign(gC,{pre:_C});const ri=(s,e)=>(s==null?void 0:s[`is${e}`])===!0,xC=typeof window<"u",Hn=(s,e)=>{const t=ed(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});Bs(()=>{i(),n&&n()})},oi=s=>{const e=Ln(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},vC=s=>({subscribe:s.subscribe,get current(){return s.current}}),lx=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},yC=s=>{const{dom:e,canvas:t}=s,n=oi(e.getBoundingClientRect());fd(()=>{const r=new ResizeObserver(()=>{n.set(e.getBoundingClientRect())});return r.observe(e),()=>{r.disconnect()}});const i={dom:e,canvas:t,size:vC(n)};return Kn("threlte-dom-context",i),i},sp=()=>{const s=xi("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function MC(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class xs{constructor(){lt(this,"allVertices",{});lt(this,"isolatedVertices",{});lt(this,"connectedVertices",{});lt(this,"sortedConnectedValues",[]);lt(this,"needsSort",!1);lt(this,"emitter",MC());lt(this,"emit",this.emitter.emit.bind(this.emitter));lt(this,"on",this.emitter.on.bind(this.emitter));lt(this,"off",this.emitter.off.bind(this.emitter));lt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class SC{constructor(e,t,n){lt(this,"key");lt(this,"stage");lt(this,"callback");lt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class bC extends xs{constructor(t,n,i){super();lt(this,"key");lt(this,"scheduler");lt(this,"runTask",!0);lt(this,"callback",(t,n)=>n());lt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,this.start=this.start.bind(this),this.stop=this.stop.bind(this),i&&(this.callback=i.bind(this))}stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new SC(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.runTask&&this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){if(!this.runTask)return{};const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class wC extends xs{constructor(t){super();lt(this,"lastTime",performance.now());lt(this,"clampDeltaTo",.1);lt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new bC(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const TC=s=>{const e=new wC,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:oi(s.autoRender??!0),renderMode:oi(s.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(i,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return ai(()=>{n.autoRender.set(s.autoRender??!0)}),ai(()=>{n.renderMode.set(s.renderMode??"on-demand")}),Bs(()=>{n.scheduler.dispose()}),Kn("threlte-scheduler-context",n),n},fh=()=>{const s=xi("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},EC=()=>{const{size:s}=sp(),{invalidate:e}=fh(),t=new Yt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=oi(t);Hn(s,r=>{if(n.current===t){const a=n.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}});const i={camera:n};return Kn("threlte-camera-context",i),i},cx=()=>{const s=xi("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},AC=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Bv(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,n)=>{var i;(t===0||e)&&((i=n==null?void 0:n.dispose)==null||i.call(n),s.disposableObjects.delete(n))}),s.shouldDispose=!1)}};return Bs(()=>{s.dispose(!0)}),Kn("threlte-disposal-context",s),s},ux=()=>{const s=xi("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},hx=Symbol("threlte-parent-context"),fx=s=>{const e=oi(s);return Kn(hx,e),e},CC=()=>xi(hx),vu=Symbol("threlte-parent-object3d-context"),RC=s=>{const e=Qf(s);return Kn(vu,e),e},PC=s=>{const e=xi(vu),t=Ln(s),n=ed([t,e],([i,r])=>i??r);return Kn(vu,n),t},IC=()=>xi(vu);function LC(s,e,t){if(!xC)return{task:void 0,start:()=>{},stop:()=>{},started:Qf(!1)};let n,i,r;xs.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=fh();let o=a.mainStage;if(r){if(r.stage)if(xs.isValue(r.stage))o=r.stage;else{const u=a.scheduler.getStage(r.stage);if(!u)throw new Error(`No stage found with key ${r.stage.toString()}`);o=u}else if(r.after)if(Array.isArray(r.after))for(let u=0;u<r.after.length;u++){const d=r.after[u];if(xs.isValue(d)){o=d.stage;break}}else xs.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let u=0;u<r.before.length;u++){const d=r.before[u];if(xs.isValue(d)){o=d.stage;break}}else xs.isValue(r.before)&&(o=r.before.stage)}const l=Ln(!1),c=o.createTask(n,i,r),h=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.add(i),c.start()},f=()=>{l.set(!1),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.delete(i),c.stop()};return(r==null?void 0:r.autoStart)??!0?h():f(),Bs(()=>{f(),o.removeTask(n)}),{task:c,start:h,stop:f,started:{subscribe:l.subscribe}}}const DC=s=>{const e={scene:new Pd};return Kn("threlte-scene-context",e),e},dx=()=>{const s=xi("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},NC=s=>{const{dispose:e}=ux(),{camera:t}=cx(),{scene:n}=dx(),{invalidate:i,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=fh(),{size:c,canvas:h}=sp(),f=s.createRenderer?s.createRenderer(h):new ax({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),u=r.createTask(Symbol("threlte-auto-render-task"),()=>{f.render(n,t.current)}),d={renderer:f,colorManagementEnabled:oi(s.colorManagementEnabled??!0),colorSpace:oi(s.colorSpace??"srgb"),dpr:oi(s.dpr??window.devicePixelRatio),shadows:oi(s.shadows??po),toneMapping:oi(s.toneMapping??Co),autoRenderTask:u};Kn("threlte-renderer-context",d),Hn([d.colorManagementEnabled],([m])=>{ot.enabled=m}),Hn([d.colorSpace],([m])=>{"outputColorSpace"in f&&(f.outputColorSpace=m)}),Hn([d.dpr],([m])=>{"setPixelRatio"in f&&f.setPixelRatio(m)});const{start:p,stop:_}=LC(()=>{var m;!("xr"in f)||(m=f.xr)!=null&&m.isPresenting||(f.setSize(c.current.width,c.current.height),i(),_())},{before:u,autoStart:!1,autoInvalidate:!1});return Hn([c],()=>{p()}),Hn([d.shadows],([m])=>{"shadowMap"in f&&(f.shadowMap.enabled=!!m,m&&m!==!0?f.shadowMap.type=m:m===!0&&(f.shadowMap.type=po))}),Hn([d.toneMapping],([m])=>{"toneMapping"in f&&(f.toneMapping=m)}),Hn([a],([m])=>(m?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(g=>{e(),o.run(g),l()}),Bs(()=>{if("dispose"in d.renderer){const m=d.renderer.dispose;m()}}),ai(()=>{d.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),ai(()=>{d.colorSpace.set(s.colorSpace??"srgb")}),ai(()=>{d.toneMapping.set(s.toneMapping??Co)}),ai(()=>{d.shadows.set(s.shadows??po)}),ai(()=>{d.dpr.set(s.dpr??window.devicePixelRatio)}),d},UC=()=>{const s=xi("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},FC=()=>{const s=oi({});return Kn("threlte-user-context",s),s},OC=s=>{const{scene:e}=DC();return{scene:e,...yC(s),...pC(),...fx(e),...RC(e),...AC(),...TC(s),...EC(),...NC(s),...FC()}};function BC(s,e){Rr(e,!0),OC(dd(e,["$$slots","$$events","$$legacy","children"]));var n=ud(),i=Da(n);hd(i,()=>e.children),gi(s,n),Pr()}var zC=Os('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function kC(s,e){let t=dd(e,["$$slots","$$events","$$legacy","children"]),n=Ai(void 0),i=Ai(void 0);var r=zC(),a=Ls(r),o=Ls(a);{var l=c=>{BC(c,ly({get dom(){return st(i)},get canvas(){return st(n)}},()=>t,{children:(h,f)=>{var u=ud(),d=Da(u);hd(d,()=>e.children??hi),gi(h,u)},$$slots:{default:!0}}))};h_(o,c=>{st(n)&&st(i)&&c(l)})}Af(a,c=>Jt(n,c),()=>st(n)),Af(r,c=>Jt(i,c),()=>st(i)),gi(s,r)}const rp=()=>{const s=fh(),e=UC(),t=cx(),n=dx(),i=sp();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:i.dom,canvas:i.canvas,size:i.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},VC=s=>typeof s=="object"&&s!==null,GC=()=>{const{invalidate:s}=rp();let e;const t=Ln(),n=CC(),i=IC(),r=fx(),a=PC();Hn([t,r,n,i],([c,h,f,u])=>{if(e==null||e(),e=void 0,!h){s();return}if(c!==void 0){if(c){if(typeof c=="function")e=c({ref:h,parent:f,parentObject3D:u});else if(ri(c,"Object3D")&&ri(h,"Object3D"))e=()=>c==null?void 0:c.remove(h),c==null||c.add(h);else if(typeof c=="string"){const{target:d,key:p}=lx(f,c),_=d[p];e=()=>d[p]=_,d[p]=h}}}else ri(h,"Object3D")?(e=()=>u==null?void 0:u.remove(h),u==null||u.add(h)):VC(f)&&(ri(h,"Material")?f.material=h:ri(h,"BufferGeometry")&&(f.geometry=h));s()});const o=c=>{t.set(c)},l=c=>{r.set(c),ri(c,"Object3D")&&a.set(c)};return Bs(()=>{e==null||e(),s()}),{updateRef:l,updateAttach:o}},HC=s=>ri(s,"PerspectiveCamera")||ri(s,"OrthographicCamera"),WC=()=>{const{invalidate:s,size:e,camera:t}=rp(),n=Ln(),i=Ln(!0),r=Ln(!1);return Hn([n,r],([c,h])=>{!c||!h||(t.set(c),s())}),Hn([n,i,e],([c,h,f])=>{!c||h||(ri(c,"OrthographicCamera")?(c.left=f.width/-2,c.right=f.width/2,c.top=f.height/2,c.bottom=f.height/-2,c.updateProjectionMatrix(),c.updateMatrixWorld(),s()):ri(c,"PerspectiveCamera")&&(c.aspect=f.width/f.height,c.updateProjectionMatrix(),c.updateMatrixWorld(),s()))}),{updateRef:c=>{HC(c)&&n.set(c)},updateManual:c=>{i.set(c)},updateMakeDefault:c=>{r.set(c)}}},XC=s=>{let e,t,n=!1;const i=()=>{e==null||e(),e=s==null?void 0:s(t)},r=a=>{t=a,n&&i()};return fd(()=>{i(),n=!0}),Bs(()=>e==null?void 0:e()),{updateRef:r}},ug=Symbol("threlte-disposable-object-context"),qC=s=>typeof(s==null?void 0:s.dispose)=="function"&&!ri(s,"Scene"),YC=s=>{let e;const t=Ln(void 0),n=Ln(s),{disposableObjectMounted:i,disposableObjectUnmounted:r,removeObjectFromDisposal:a}=ux(),o=xi(ug),l=ed([n,o??Ln(!0)],([f,u])=>f??u??!0);return Kn(ug,l),Hn([t,l],([f,u])=>{f===e?u?e&&i(e):e&&a(e):u&&(e&&r(e),f&&i(f)),e=f}),Bs(()=>{if(!bc(l))return;const f=bc(t);f&&r(f)}),{updateRef:f=>{qC(f)&&t.set(f)},updateDispose:f=>{n.set(f)}}},ZC=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,$C=(s={})=>{const e=i=>{var r;i!=null&&i.type&&((r=s[`on${i.type}`])==null||r.call(s,i))},t=(i,r)=>{const a=[];for(const o of Object.keys(r))o.startsWith("on")&&(i.addEventListener(o.slice(2),e),a.push(o));return()=>{for(let o=0;o<a.length;o++)i.removeEventListener(a[o],e)}};return{updateRef:i=>{if(ZC(i))return t(i,s)}}};let Zf;const JC=s=>{Zf=s},KC=()=>{const s=Zf;return Zf=void 0,s},jC=s=>{const t=xi("threlte-plugin-context");if(!t)return;const n=[],i=Object.values(t);if(i.length){const r=s();for(let a=0;a<i.length;a++){const o=i[a],l=o(r);l&&l.pluginProps&&n.push(...l.pluginProps)}}return{pluginsProps:n}},QC=new Set(["$$scope","$$slots","type","args","attach","instance"]),eR=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),tR=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,hg=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},nR=()=>{const{invalidate:s}=rp(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(tR(o)){const f=e.get(a);if(f&&f.instance===r&&f.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=lx(r,a);if(o!=null){const f=t.get(a);if(f)f(h,c,o);else{const u=hg(h,c,o);t.set(a,u),u(h,c,o)}}else hg(h,c,o)(h,c,o);l.manualCamera||eR.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,l)=>{var c;!QC.has(a)&&!((c=l.pluginsProps)!=null&&c.includes(a))&&n(r,a,o,l),s()}}},iR=/^\s*class\s+/,sR=s=>typeof s!="function"?!1:iR.test(s.toString()),rR=s=>Array.isArray(s),aR=(s,e)=>sR(s)?rR(e)?new s(...e):new s:s;function hf(s,e){Rr(e,!0);let t=xl(e,"is",19,KC),n=xl(e,"manual",3,!1),i=xl(e,"makeDefault",3,!1),r=xl(e,"ref",15),a=dd(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),o=lo(()=>aR(t(),e.args));const l=XC(e.oncreate);Bn(()=>{r()!==st(o)&&(r(st(o)),l.updateRef(st(o)))});const c=jC(()=>({get ref(){return st(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return i()},get dispose(){return e.dispose},get props(){return a}})),{updateProp:h}=nR();Object.keys(a).forEach(g=>{Bn(()=>{h(st(o),g,a[g],{manualCamera:n(),pluginsProps:c==null?void 0:c.pluginsProps})})});const f=GC();Bn(()=>f.updateAttach(e.attach)),Bn(()=>f.updateRef(st(o)));const u=WC();Bn(()=>u.updateRef(st(o))),Bn(()=>u.updateManual(n())),Bn(()=>u.updateMakeDefault(i()));const d=YC(e.dispose);Bn(()=>d.updateRef(st(o))),Bn(()=>d.updateDispose(e.dispose));const p=$C(a);Bn(()=>p.updateRef(st(o)));var _=ud(),m=Da(_);hd(m,()=>e.children??hi,()=>({ref:st(o)})),gi(s,_),Pr()}const oR={},ff=new Proxy(function(){},{apply(s,e,t){return hf(...t)},get(s,e){if(typeof e!="string")return hf;const t=oR[e]||dC[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return JC(t),hf}});var lR=Os("<!> <!>",1);function cR(s){ff.Mesh(s,{children:(e,t)=>{var n=lR(),i=Da(n);ff.BoxGeometry(i,{});var r=nl(i,2);ff.MeshBasicMaterial(r,{}),gi(e,n)},$$slots:{default:!0}})}var uR=Os('<div class="star-paint svelte-1u1a8hg"><!></div>');function hR(s){var e=uR(),t=Ls(e);kC(t,{size:{width:screen.width,height:screen.height},children:(n,i)=>{cR(n)},$$slots:{default:!0}}),gi(s,e)}var fR=Os('<nav><button id="home-button"><img src="/img/home.svg" alt="H"/></button></nav> <nav></nav> <!>',1);function dR(s,e){Rr(e,!1);const t=()=>Pg(Ac,"$pathname",n),[n,i]=Ig();function r(v){window.history.pushState(null,"",v),Ac.set(v)}function a(v){return t()===v}function o(v){return a("/")?"hidden":""}Cu();var l=fR(),c=Da(l),h=Ls(c),f=nl(c,4);{var u=v=>{xy(v,{})},d=lo(()=>a("/")),p=v=>{yy(v,{})},_=lo(()=>a("/grocery-bag")),m=v=>{hR(v)},g=lo(()=>a("/star-paint")),x=v=>{hy(v,{})};h_(f,v=>{st(d)?v(u):st(_)?v(p,1):st(g)?v(m,2):v(x,-1)})}ad(v=>gc(h,1,v),[()=>ey(o())]),cd("click",h,()=>r("/")),gi(s,l),Pr(),i()}qv(dR,{target:document.getElementById("app")});const pR=()=>{let s=window.location.pathname;const e=document.querySelector("body");new MutationObserver(n=>{n.forEach(()=>{s!==document.location.pathname&&(s=document.location.pathname,Ac.set(s))})}).observe(e,{childList:!0,subtree:!0})};window.addEventListener("popstate",()=>{Ac.set(window.location.pathname)});window.onload=pR;
