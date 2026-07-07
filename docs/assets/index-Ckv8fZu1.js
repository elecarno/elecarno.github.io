(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Hn=!1;var Qt=Array.isArray,yr=Array.prototype.indexOf,Xt=Array.from,Bt=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,br=Object.prototype,vr=Array.prototype,en=Object.getPrototypeOf,wn=Object.isExtensible;function Je(e){return typeof e=="function"}function kr(e){return e()}function $t(e){for(var t=0;t<e.length;t++)e[t]()}function Cr(){var e,t,n=new Promise((r,o)=>{e=r,t=o});return{promise:n,resolve:e,reject:t}}const K=2,xn=4,tn=8,st=16,ye=32,Pe=64,On=128,J=256,pt=512,W=1024,Q=2048,Ie=4096,oe=8192,Re=16384,nn=32768,zt=65536,pn=1<<17,Pn=1<<18,rn=1<<19,an=1<<20,Kt=1<<21,on=1<<22,ze=1<<23,Le=Symbol("$state"),Rn=Symbol("legacy props"),Mr=Symbol(""),sn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Tr(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Wn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ir(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _r(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Sr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Er(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ar(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Lr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function jr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const xr=1,Or=2,Pr=16,Rr=1,Wr=2,Dr=4,Vr=8,Fr=16,Nr=1,qr=2,x=Symbol(),Yr="http://www.w3.org/1999/xhtml";let Br=!1;function Dn(e){return e===this.v}function Vn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function $r(e,t){return e!==t}function Fn(e){return!Vn(e,this.v)}let $e=!1,Kr=!1;function Gr(){$e=!0}let z=null;function yt(e){z=e}function N(e,t=!1,n){z={p:z,c:null,e:null,s:e,x:null,l:$e&&!t?{s:null,u:null,$:[]}:null}}function q(e){var t=z,n=t.e;if(n!==null){t.e=null;for(var r of n)Qn(r)}return z=t.p,{}}function Ke(){return!$e||z!==null&&z.l===null}const Ur=new WeakMap;function Zr(e){var t=C;if(t===null)return T.f|=ze,e;if((t.f&nn)===0){if((t.f&On)===0)throw!t.parent&&e instanceof Error&&Nn(e),e;t.b.error(e)}else ln(e,t)}function ln(e,t){for(;t!==null;){if((t.f&On)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&Nn(e),e}function Nn(e){const t=Ur.get(e);t&&(Bt(e,"message",{value:t.message}),Bt(e,"stack",{value:t.stack}))}let bt=[];function Jr(){var e=bt;bt=[],$t(e)}function Qr(e){bt.length===0&&queueMicrotask(Jr),bt.push(e)}function Xr(){for(var e=C.b;e!==null&&!e.has_pending_snippet();)e=e.parent;return e===null&&Tr(),e}function Lt(e){var t=K|Q,n=T!==null&&(T.f&K)!==0?T:null;return C===null||n!==null&&(n.f&J)!==0?t|=J:C.f|=rn,{ctx:z,deps:null,effects:null,equals:Dn,f:t,fn:e,reactions:null,rv:0,v:x,wv:0,parent:n??C,ac:null}}function ea(e,t){let n=C;n===null&&Ir();var r=n.b,o=void 0,a=rt(x),i=null,l=!T;return ua(()=>{try{var s=e()}catch(u){s=Promise.reject(u)}var h=()=>s;o=i?.then(h,h)??Promise.resolve(s),i=o;var d=S,f=r.pending;l&&(r.update_pending_count(1),f||d.increment());const c=(u,m=void 0)=>{i=null,f||d.activate(),m?m!==sn&&(a.f|=ze,kt(a,m)):((a.f&ze)!==0&&(a.f^=ze),kt(a,u)),l&&(r.update_pending_count(-1),f||d.decrement()),Bn()};if(o.then(c,u=>c(null,u||"unknown")),d)return()=>{queueMicrotask(()=>d.neuter())}}),new Promise(s=>{function h(d){function f(){d===o?s(a):h(o)}d.then(f,f)}h(o)})}function hn(e){const t=Lt(e);return t.equals=Fn,t}function qn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)pe(t[n])}}function ta(e){for(var t=e.parent;t!==null;){if((t.f&K)===0)return t;t=t.parent}return null}function cn(e){var t,n=C;Te(ta(e));try{qn(e),t=lr(e)}finally{Te(n)}return t}function Yn(e){var t=cn(e);if(e.equals(t)||(e.v=t,e.wv=ir()),!We)if(Ye!==null)Ye.set(e,e.v);else{var n=(Ce||(e.f&J)!==0)&&e.deps!==null?Ie:W;F(e,n)}}function na(e,t,n){const r=Ke()?Lt:hn;if(t.length===0){n(e.map(r));return}var o=S,a=C,i=ra(),l=Xr();Promise.all(t.map(s=>ea(s))).then(s=>{o?.activate(),i();try{n([...e.map(r),...s])}catch(h){(a.f&Re)===0&&ln(h,a)}o?.deactivate(),Bn()}).catch(s=>{l.error(s)})}function ra(){var e=C,t=T,n=z;return function(){Te(e),ue(t),yt(n)}}function Bn(){Te(null),ue(null),yt(null)}const Qe=new Set;let S=null,Ye=null,yn=new Set,vt=[];function $n(){const e=vt.shift();vt.length>0&&queueMicrotask($n),e()}let nt=[],dn=null,Gt=!1;class Be{current=new Map;#e=new Map;#t=new Set;#n=0;#h=null;#c=!1;#a=[];#i=[];#o=[];#r=[];#s=[];#d=[];#u=[];skipped_effects=new Set;process(t){nt=[];var n=null;if(Qe.size>1){n=new Map,Ye=new Map;for(const[a,i]of this.current)n.set(a,{v:a.v,wv:a.wv}),a.v=i;for(const a of Qe)if(a!==this)for(const[i,l]of a.#e)n.has(i)||(n.set(i,{v:i.v,wv:i.wv}),i.v=l)}for(const a of t)this.#m(a);if(this.#a.length===0&&this.#n===0){this.#f();var r=this.#o,o=this.#r;this.#o=[],this.#r=[],this.#s=[],S=null,bn(r),bn(o),S===null?S=this:Qe.delete(this),this.#h?.resolve()}else this.#l(this.#o),this.#l(this.#r),this.#l(this.#s);if(n){for(const[a,{v:i,wv:l}]of n)a.wv<=l&&(a.v=i);Ye=null}for(const a of this.#a)et(a);for(const a of this.#i)et(a);this.#a=[],this.#i=[]}#m(t){t.f^=W;for(var n=t.first;n!==null;){var r=n.f,o=(r&(ye|Pe))!==0,a=o&&(r&W)!==0,i=a||(r&oe)!==0||this.skipped_effects.has(n);if(!i&&n.fn!==null){if(o)n.f^=W;else if((r&W)===0)if((r&xn)!==0)this.#r.push(n);else if((r&on)!==0){var l=n.b?.pending?this.#i:this.#a;l.push(n)}else xt(n)&&((n.f&st)!==0&&this.#s.push(n),et(n));var s=n.first;if(s!==null){n=s;continue}}var h=n.parent;for(n=n.next;n===null&&h!==null;)n=h.next,h=h.parent}}#l(t){for(const n of t)((n.f&Q)!==0?this.#d:this.#u).push(n),F(n,W);t.length=0}capture(t,n){this.#e.has(t)||this.#e.set(t,n),this.current.set(t,t.v)}activate(){S=this}deactivate(){S=null;for(const t of yn)if(yn.delete(t),t(),S!==null)break}neuter(){this.#c=!0}flush(){nt.length>0?aa():this.#f(),S===this&&(this.#n===0&&Qe.delete(this),this.deactivate())}#f(){if(!this.#c)for(const t of this.#t)t();this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,this.#n===0){for(const t of this.#d)F(t,Q),xe(t);for(const t of this.#u)F(t,Ie),xe(t);this.#o=[],this.#r=[],this.flush()}else this.deactivate()}add_callback(t){this.#t.add(t)}settled(){return(this.#h??=Cr()).promise}static ensure(){if(S===null){const t=S=new Be;Qe.add(S),Be.enqueue(()=>{S===t&&t.flush()})}return S}static enqueue(t){vt.length===0&&queueMicrotask($n),vt.unshift(t)}}function aa(){var e=qe;Gt=!0;try{var t=0;for(kn(!0);nt.length>0;){var n=Be.ensure();if(t++>1e3){var r,o;oa()}n.process(nt),He.clear()}}finally{Gt=!1,kn(e),dn=null}}function oa(){try{Ar()}catch(e){ln(e,dn)}}function bn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Re|oe))===0&&xt(r)){var o=S?S.current.size:0;if(et(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?nr(r):r.fn=null),S!==null&&S.current.size>o&&(r.f&an)!==0)break}}for(;n<t;)xe(e[n++])}}function xe(e){for(var t=dn=e;t.parent!==null;){t=t.parent;var n=t.f;if(Gt&&t===C&&(n&st)!==0)return;if((n&(Pe|ye))!==0){if((n&W)===0)return;t.f^=W}}nt.push(t)}const He=new Map;function rt(e,t){var n={f:0,v:e,reactions:null,equals:Dn,rv:0,wv:0};return n}function R(e,t){const n=rt(e);return ma(n),n}function wt(e,t=!1,n=!0){const r=rt(e);return t||(r.equals=Fn),$e&&n&&z!==null&&z.l!==null&&(z.l.s??=[]).push(r),r}function A(e,t,n=!1){T!==null&&(!ce||(T.f&pn)!==0)&&Ke()&&(T.f&(K|st|on|pn))!==0&&!ge?.includes(e)&&jr();let r=n?me(t):t;return kt(e,r)}function kt(e,t){if(!e.equals(t)){var n=e.v;We?He.set(e,t):He.set(e,n),e.v=t;var r=Be.ensure();r.capture(e,n),(e.f&K)!==0&&((e.f&Q)!==0&&cn(e),F(e,(e.f&J)===0?W:Ie)),e.wv=ir(),Kn(e,Q),Ke()&&C!==null&&(C.f&W)!==0&&(C.f&(ye|Pe))===0&&(U===null?ga([e]):U.push(e))}return t}function Rt(e){A(e,e.v+1)}function Kn(e,t){var n=e.reactions;if(n!==null)for(var r=Ke(),o=n.length,a=0;a<o;a++){var i=n[a],l=i.f;if(!(!r&&i===C)){var s=(l&Q)===0;s&&F(i,t),(l&K)!==0?Kn(i,Ie):s&&xe(i)}}}function me(e){if(typeof e!="object"||e===null||Le in e)return e;const t=en(e);if(t!==br&&t!==vr)return e;var n=new Map,r=Qt(e),o=R(0),a=je,i=l=>{if(je===a)return l();var s=T,h=je;ue(null),Mn(a);var d=l();return ue(s),Mn(h),d};return r&&n.set("length",R(e.length)),new Proxy(e,{defineProperty(l,s,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Lr();var d=n.get(s);return d===void 0?d=i(()=>{var f=R(h.value);return n.set(s,f),f}):A(d,h.value,!0),!0},deleteProperty(l,s){var h=n.get(s);if(h===void 0){if(s in l){const d=i(()=>R(x));n.set(s,d),Rt(o)}}else A(h,x),Rt(o);return!0},get(l,s,h){if(s===Le)return e;var d=n.get(s),f=s in l;if(d===void 0&&(!f||Me(l,s)?.writable)&&(d=i(()=>{var u=me(f?l[s]:x),m=R(u);return m}),n.set(s,d)),d!==void 0){var c=y(d);return c===x?void 0:c}return Reflect.get(l,s,h)},getOwnPropertyDescriptor(l,s){var h=Reflect.getOwnPropertyDescriptor(l,s);if(h&&"value"in h){var d=n.get(s);d&&(h.value=y(d))}else if(h===void 0){var f=n.get(s),c=f?.v;if(f!==void 0&&c!==x)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return h},has(l,s){if(s===Le)return!0;var h=n.get(s),d=h!==void 0&&h.v!==x||Reflect.has(l,s);if(h!==void 0||C!==null&&(!d||Me(l,s)?.writable)){h===void 0&&(h=i(()=>{var c=d?me(l[s]):x,u=R(c);return u}),n.set(s,h));var f=y(h);if(f===x)return!1}return d},set(l,s,h,d){var f=n.get(s),c=s in l;if(r&&s==="length")for(var u=h;u<f.v;u+=1){var m=n.get(u+"");m!==void 0?A(m,x):u in l&&(m=i(()=>R(x)),n.set(u+"",m))}if(f===void 0)(!c||Me(l,s)?.writable)&&(f=i(()=>R(void 0)),A(f,me(h)),n.set(s,f));else{c=f.v!==x;var g=i(()=>me(h));A(f,g)}var b=Reflect.getOwnPropertyDescriptor(l,s);if(b?.set&&b.set.call(d,h),!c){if(r&&typeof s=="string"){var M=n.get("length"),k=Number(s);Number.isInteger(k)&&k>=M.v&&A(M,k+1)}Rt(o)}return!0},ownKeys(l){y(o);var s=Reflect.ownKeys(l).filter(f=>{var c=n.get(f);return c===void 0||c.v!==x});for(var[h,d]of n)d.v!==x&&!(h in l)&&s.push(h);return s},setPrototypeOf(){Hr()}})}var vn,X,Gn,Un,Zn;function ia(){if(vn===void 0){vn=window,X=document,Gn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Un=Me(t,"firstChild").get,Zn=Me(t,"nextSibling").get,wn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),wn(n)&&(n.__t=void 0)}}function _e(e=""){return document.createTextNode(e)}function ke(e){return Un.call(e)}function Ht(e){return Zn.call(e)}function v(e,t){return ke(e)}function Ct(e,t){{var n=ke(e);return n instanceof Comment&&n.data===""?Ht(n):n}}function I(e,t=1,n=!1){let r=e;for(;t--;)r=Ht(r);return r}function sa(e){e.textContent=""}function jt(){return!1}function Jn(e){C===null&&T===null&&Er(),T!==null&&(T.f&J)!==0&&C===null&&Sr(),We&&_r()}function la(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Se(e,t,n,r=!0){var o=C;o!==null&&(o.f&oe)!==0&&(e|=oe);var a={ctx:z,deps:null,nodes_start:null,nodes_end:null,f:e|Q,first:null,fn:t,last:null,next:null,parent:o,b:o&&o.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{et(a),a.f|=nn}catch(s){throw pe(a),s}else t!==null&&xe(a);var i=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&rn)===0;if(!i&&r&&(o!==null&&la(a,o),T!==null&&(T.f&K)!==0&&(e&Pe)===0)){var l=T;(l.effects??=[]).push(a)}return a}function ha(e){const t=Se(tn,null,!1);return F(t,W),t.teardown=e,t}function Ut(e){Jn();var t=C.f,n=!T&&(t&ye)!==0&&(t&nn)===0;if(n){var r=z;(r.e??=[]).push(e)}else return Qn(e)}function Qn(e){return Se(xn|an,e,!1)}function ca(e){return Jn(),Se(tn|an,e,!0)}function da(e){Be.ensure();const t=Se(Pe,e,!0);return(n={})=>new Promise(r=>{n.outro?ht(t,()=>{pe(t),r(void 0)}):(pe(t),r(void 0))})}function ua(e){return Se(on|rn,e,!0)}function $(e,t=[],n=[]){na(t,n,r=>{Se(tn,()=>e(...r.map(y)),!0)})}function lt(e,t=0){var n=Se(st|t,e,!0);return n}function Oe(e,t=!0){return Se(ye,e,!0,t)}function Xn(e){var t=e.teardown;if(t!==null){const n=We,r=T;Cn(!0),ue(null);try{t.call(null)}finally{Cn(n),ue(r)}}}function er(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){n.ac?.abort(sn);var r=n.next;(n.f&Pe)!==0?n.parent=null:pe(n,t),n=r}}function fa(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ye)===0&&pe(t),t=n}}function pe(e,t=!0){var n=!1;(t||(e.f&Pn)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(tr(e.nodes_start,e.nodes_end),n=!0),er(e,t&&!n),Mt(e,0),F(e,Re);var r=e.transitions;if(r!==null)for(const a of r)a.stop();Xn(e);var o=e.parent;o!==null&&o.first!==null&&nr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function tr(e,t){for(;e!==null;){var n=e===t?null:Ht(e);e.remove(),e=n}}function nr(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ht(e,t){var n=[];un(e,n,!0),rr(n,()=>{pe(e),t&&t()})}function rr(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var o of e)o.out(r)}else t()}function un(e,t,n){if((e.f&oe)===0){if(e.f^=oe,e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&t.push(i);for(var r=e.first;r!==null;){var o=r.next,a=(r.f&zt)!==0||(r.f&ye)!==0;un(r,t,a?n:!1),r=o}}}function fn(e){ar(e,!0)}function ar(e,t){if((e.f&oe)!==0){e.f^=oe,(e.f&W)===0&&(F(e,Q),xe(e));for(var n=e.first;n!==null;){var r=n.next,o=(n.f&zt)!==0||(n.f&ye)!==0;ar(n,o?t:!1),n=r}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let qe=!1;function kn(e){qe=e}let We=!1;function Cn(e){We=e}let T=null,ce=!1;function ue(e){T=e}let C=null;function Te(e){C=e}let ge=null;function ma(e){T!==null&&(ge===null?ge=[e]:ge.push(e))}let D=null,B=0,U=null;function ga(e){U=e}let or=1,at=0,je=at;function Mn(e){je=e}let Ce=!1;function ir(){return++or}function xt(e){var t=e.f;if((t&Q)!==0)return!0;if((t&Ie)!==0){var n=e.deps,r=(t&J)!==0;if(n!==null){var o,a,i=(t&pt)!==0,l=r&&C!==null&&!Ce,s=n.length;if((i||l)&&(C===null||(C.f&Re)===0)){var h=e,d=h.parent;for(o=0;o<s;o++)a=n[o],(i||!a?.reactions?.includes(h))&&(a.reactions??=[]).push(h);i&&(h.f^=pt),l&&d!==null&&(d.f&J)===0&&(h.f^=J)}for(o=0;o<s;o++)if(a=n[o],xt(a)&&Yn(a),a.wv>e.wv)return!0}(!r||C!==null&&!Ce)&&F(e,W)}return!1}function sr(e,t,n=!0){var r=e.reactions;if(r!==null&&!ge?.includes(e))for(var o=0;o<r.length;o++){var a=r[o];(a.f&K)!==0?sr(a,t,!1):t===a&&(n?F(a,Q):(a.f&W)!==0&&F(a,Ie),xe(a))}}function lr(e){var t=D,n=B,r=U,o=T,a=Ce,i=ge,l=z,s=ce,h=je,d=e.f;D=null,B=0,U=null,Ce=(d&J)!==0&&(ce||!qe||T===null),T=(d&(ye|Pe))===0?e:null,ge=null,yt(e.ctx),ce=!1,je=++at,e.ac!==null&&(e.ac.abort(sn),e.ac=null);try{e.f|=Kt;var f=(0,e.fn)(),c=e.deps;if(D!==null){var u;if(Mt(e,B),c!==null&&B>0)for(c.length=B+D.length,u=0;u<D.length;u++)c[B+u]=D[u];else e.deps=c=D;if(!Ce||(d&K)!==0&&e.reactions!==null)for(u=B;u<c.length;u++)(c[u].reactions??=[]).push(e)}else c!==null&&B<c.length&&(Mt(e,B),c.length=B);if(Ke()&&U!==null&&!ce&&c!==null&&(e.f&(K|Ie|Q))===0)for(u=0;u<U.length;u++)sr(U[u],e);return o!==null&&o!==e&&(at++,U!==null&&(r===null?r=U:r.push(...U))),(e.f&ze)!==0&&(e.f^=ze),f}catch(m){return Zr(m)}finally{e.f^=Kt,D=t,B=n,U=r,T=o,Ce=a,ge=i,yt(l),ce=s,je=h}}function wa(e,t){let n=t.reactions;if(n!==null){var r=yr.call(n,e);if(r!==-1){var o=n.length-1;o===0?n=t.reactions=null:(n[r]=n[o],n.pop())}}n===null&&(t.f&K)!==0&&(D===null||!D.includes(t))&&(F(t,Ie),(t.f&(J|pt))===0&&(t.f^=pt),qn(t),Mt(t,0))}function Mt(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)wa(e,n[r])}function et(e){var t=e.f;if((t&Re)===0){F(e,W);var n=C,r=qe;C=e,qe=!0;try{(t&st)!==0?fa(e):er(e),Xn(e);var o=lr(e);e.teardown=typeof o=="function"?o:null,e.wv=or;var a;Hn&&Kr&&(e.f&Q)!==0&&e.deps}finally{qe=r,C=n}}}function y(e){var t=e.f,n=(t&K)!==0;if(T!==null&&!ce){var r=C!==null&&(C.f&Re)!==0;if(!r&&!ge?.includes(e)){var o=T.deps;if((T.f&Kt)!==0)e.rv<at&&(e.rv=at,D===null&&o!==null&&o[B]===e?B++:D===null?D=[e]:(!Ce||!D.includes(e))&&D.push(e));else{(T.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[T]:a.includes(T)||a.push(T)}}}else if(n&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&J)===0&&(i.f^=J)}if(We){if(He.has(e))return He.get(e);if(n){i=e;var s=i.v;return((i.f&W)===0&&i.reactions!==null||hr(i))&&(s=cn(i)),He.set(i,s),s}}else if(n){if(i=e,Ye?.has(i))return Ye.get(i);xt(i)&&Yn(i)}if((e.f&ze)!==0)throw e.v;return e.v}function hr(e){if(e.v===x)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(He.has(t)||(t.f&K)!==0&&hr(t))return!0;return!1}function V(e){var t=ce;try{return ce=!0,e()}finally{ce=t}}const pa=-7169;function F(e,t){e.f=e.f&pa|t}function Ae(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Le in e)Zt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Le in n&&Zt(n)}}}function Zt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Zt(e[r],t)}catch{}const n=en(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=jn(n);for(let o in r){const a=r[o].get;if(a)try{a.call(e)}catch{}}}}}const ya=["touchstart","touchmove"];function ba(e){return ya.includes(e)}function va(e){var t=T,n=C;ue(null),Te(null);try{return e()}finally{ue(t),Te(n)}}const ka=new Set,Tn=new Set;function Ca(e,t,n,r={}){function o(a){if(r.capture||Xe.call(t,a),!a.cancelBubble)return va(()=>n?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Qr(()=>{t.addEventListener(e,o,r)}):t.addEventListener(e,o,r),o}function E(e,t,n,r,o){var a={capture:r,passive:o},i=Ca(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ha(()=>{t.removeEventListener(e,i,a)})}let In=null;function Xe(e){var t=this,n=t.ownerDocument,r=e.type,o=e.composedPath?.()||[],a=o[0]||e.target;In=e;var i=0,l=In===e&&e.__root;if(l){var s=o.indexOf(l);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var h=o.indexOf(t);if(h===-1)return;s<=h&&(i=s)}if(a=o[i]||e.target,a!==t){Bt(e,"currentTarget",{configurable:!0,get(){return a||n}});var d=T,f=C;ue(null),Te(null);try{for(var c,u=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var g=a["__"+r];if(g!=null&&(!a.disabled||e.target===a))if(Qt(g)){var[b,...M]=g;b.apply(a,[e,...M])}else g.call(a,e)}catch(k){c?u.push(k):c=k}if(e.cancelBubble||m===t||m===null)break;a=m}if(c){for(let k of u)queueMicrotask(()=>{throw k});throw c}}finally{e.__root=t,delete e.currentTarget,ue(d),Te(f)}}}function ie(e){var t;t=document.head.appendChild(_e());try{lt(()=>e(t),Pn)}finally{}}function cr(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Tt(e,t){var n=C;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function j(e,t){var n=(t&Nr)!==0,r=(t&qr)!==0,o,a=!e.startsWith("<!>");return()=>{o===void 0&&(o=cr(a?e:"<!>"+e),n||(o=ke(o)));var i=r||Gn?document.importNode(o,!0):o.cloneNode(!0);if(n){var l=ke(i),s=i.lastChild;Tt(l,s)}else Tt(i,i);return i}}function _n(){var e=document.createDocumentFragment(),t=document.createComment(""),n=_e();return e.append(t,n),Tt(t,n),e}function L(e,t){e!==null&&e.before(t)}function de(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Ma(e,t){return Ta(e,t)}const Ve=new Map;function Ta(e,{target:t,anchor:n,props:r={},events:o,context:a,intro:i=!0}){ia();var l=new Set,s=f=>{for(var c=0;c<f.length;c++){var u=f[c];if(!l.has(u)){l.add(u);var m=ba(u);t.addEventListener(u,Xe,{passive:m});var g=Ve.get(u);g===void 0?(document.addEventListener(u,Xe,{passive:m}),Ve.set(u,1)):Ve.set(u,g+1)}}};s(Xt(ka)),Tn.add(s);var h=void 0,d=da(()=>{var f=n??t.appendChild(_e());return Oe(()=>{if(a){N({});var c=z;c.c=a}o&&(r.$$events=o),h=e(f,r)||{},a&&q()}),()=>{for(var c of l){t.removeEventListener(c,Xe);var u=Ve.get(c);--u===0?(document.removeEventListener(c,Xe),Ve.delete(c)):Ve.set(c,u)}Tn.delete(s),f!==n&&f.parentNode?.removeChild(f)}});return Ia.set(h,d),h}let Ia=new WeakMap;function _a(e,t,n=!1){var r=e,o=null,a=null,i=x,l=n?zt:0,s=!1;const h=(u,m=!0)=>{s=!0,c(m,u)};var d=null;function f(){d!==null&&(d.lastChild.remove(),r.before(d),d=null);var u=i?o:a,m=i?a:o;u&&fn(u),m&&ht(m,()=>{i?a=null:o=null})}const c=(u,m)=>{if(i!==(i=u)){var g=jt(),b=r;if(g&&(d=document.createDocumentFragment(),d.append(b=_e())),i?o??=m&&Oe(()=>m(b)):a??=m&&Oe(()=>m(b)),g){var M=S,k=i?o:a,p=i?a:o;k&&M.skipped_effects.delete(k),p&&M.skipped_effects.add(p),M.add_callback(f)}else f()}};lt(()=>{s=!1,t(h),s||c(null,null)},l)}function Sa(e,t,n){var r=e,o=x,a,i,l=null,s=Ke()?$r:Vn;function h(){a&&ht(a),l!==null&&(l.lastChild.remove(),r.before(l),l=null),a=i}lt(()=>{if(s(o,o=t())){var d=r,f=jt();f&&(l=document.createDocumentFragment(),l.append(d=_e())),i=Oe(()=>n(d)),f?S.add_callback(h):h()}})}function It(e,t){return t}function Ea(e,t,n){for(var r=e.items,o=[],a=t.length,i=0;i<a;i++)un(t[i].e,o,!0);var l=a>0&&o.length===0&&n!==null;if(l){var s=n.parentNode;sa(s),s.append(n),r.clear(),he(e,t[0].prev,t[a-1].next)}rr(o,()=>{for(var h=0;h<a;h++){var d=t[h];l||(r.delete(d.k),he(e,d.prev,d.next)),pe(d.e,!l)}})}function _t(e,t,n,r,o,a=null){var i=e,l={flags:t,items:new Map,first:null};{var s=e;i=s.appendChild(_e())}var h=null,d=!1,f=new Map,c=hn(()=>{var b=n();return Qt(b)?b:b==null?[]:Xt(b)}),u,m;function g(){Aa(m,u,l,f,i,o,t,r,n),a!==null&&(u.length===0?h?fn(h):h=Oe(()=>a(i)):h!==null&&ht(h,()=>{h=null}))}lt(()=>{m??=C,u=y(c);var b=u.length;if(!(d&&b===0)){d=b===0;var M,k,p,_;if(jt()){var H=new Set,fe=S;for(k=0;k<b;k+=1){p=u[k],_=r(p,k);var G=l.items.get(_)??f.get(_);G?dr(G,p,k):(M=ur(null,l,null,null,p,_,k,o,t,n,!0),f.set(_,M)),H.add(_)}for(const[le,P]of l.items)H.has(le)||fe.skipped_effects.add(P.e);fe.add_callback(g)}else g();y(c)}})}function Aa(e,t,n,r,o,a,i,l,s){var h=t.length,d=n.items,f=n.first,c=f,u,m=null,g=[],b=[],M,k,p,_;for(_=0;_<h;_+=1){if(M=t[_],k=l(M,_),p=d.get(k),p===void 0){var H=r.get(k);if(H!==void 0){r.delete(k),d.set(k,H);var fe=m?m.next:c;he(n,m,H),he(n,H,fe),Wt(H,fe,o),m=H}else{var G=c?c.e.nodes_start:o;m=ur(G,n,m,m===null?n.first:m.next,M,k,_,a,i,s)}d.set(k,m),g=[],b=[],c=m.next;continue}if(dr(p,M,_),(p.e.f&oe)!==0&&fn(p.e),p!==c){if(u!==void 0&&u.has(p)){if(g.length<b.length){var le=b[0],P;m=le.prev;var dt=g[0],Ge=g[g.length-1];for(P=0;P<g.length;P+=1)Wt(g[P],le,o);for(P=0;P<b.length;P+=1)u.delete(b[P]);he(n,dt.prev,Ge.next),he(n,m,dt),he(n,Ge,le),c=le,m=Ge,_-=1,g=[],b=[]}else u.delete(p),Wt(p,c,o),he(n,p.prev,p.next),he(n,p,m===null?n.first:m.next),he(n,m,p),m=p;continue}for(g=[],b=[];c!==null&&c.k!==k;)(c.e.f&oe)===0&&(u??=new Set).add(c),b.push(c),c=c.next;if(c===null)continue;p=c}g.push(p),m=p,c=p.next}if(c!==null||u!==void 0){for(var Ue=u===void 0?[]:Xt(u);c!==null;)(c.e.f&oe)===0&&Ue.push(c),c=c.next;var be=Ue.length;if(be>0){var Y=h===0?o:null;Ea(n,Ue,Y)}}e.first=n.first&&n.first.e,e.last=m&&m.e;for(var De of r.values())pe(De.e);r.clear()}function dr(e,t,n,r){kt(e.v,t),e.i=n}function ur(e,t,n,r,o,a,i,l,s,h,d){var f=(s&xr)!==0,c=(s&Pr)===0,u=f?c?wt(o,!1,!1):rt(o):o,m=(s&Or)===0?i:rt(i),g={i:m,v:u,k:a,a:null,e:null,prev:n,next:r};try{if(e===null){var b=document.createDocumentFragment();b.append(e=_e())}return g.e=Oe(()=>l(e,u,m,h),Br),g.e.prev=n&&n.e,g.e.next=r&&r.e,n===null?d||(t.first=g):(n.next=g,n.e.next=g.e),r!==null&&(r.prev=g,r.e.prev=g.e),g}finally{}}function Wt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,o=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var i=Ht(a);o.before(a),a=i}}function he(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function St(e,t,n=!1,r=!1,o=!1){var a=e,i="";$(()=>{var l=C;if(i!==(i=t()??"")&&(l.nodes_start!==null&&(tr(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),i!=="")){var s=i+"";n?s=`<svg>${s}</svg>`:r&&(s=`<math>${s}</math>`);var h=cr(s);if((n||r)&&(h=ke(h)),Tt(ke(h),h.lastChild),n||r)for(;ke(h);)a.before(ke(h));else a.before(h)}})}function za(e,t,n){var r=e,o,a,i=null,l=null;function s(){a&&(ht(a),a=null),i&&(i.lastChild.remove(),r.before(i),i=null),a=l,l=null}lt(()=>{if(o!==(o=t())){var h=jt();if(o){var d=r;h&&(i=document.createDocumentFragment(),i.append(d=_e())),l=Oe(()=>n(d,o))}h?S.add_callback(s):s()}},zt)}function Sn(e,t=!1){var n=t?" !important;":";",r="";for(var o in e){var a=e[o];a!=null&&a!==""&&(r+=" "+o+": "+a+n)}return r}function Dt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function La(e,t){if(t){var n="",r,o;if(Array.isArray(t)?(r=t[0],o=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,i=0,l=!1,s=[];r&&s.push(...Object.keys(r).map(Dt)),o&&s.push(...Object.keys(o).map(Dt));var h=0,d=-1;const g=e.length;for(var f=0;f<g;f++){var c=e[f];if(l?c==="/"&&e[f-1]==="*"&&(l=!1):a?a===c&&(a=!1):c==="/"&&e[f+1]==="*"?l=!0:c==='"'||c==="'"?a=c:c==="("?i++:c===")"&&i--,!l&&a===!1&&i===0){if(c===":"&&d===-1)d=f;else if(c===";"||f===g-1){if(d!==-1){var u=Dt(e.substring(h,d).trim());if(!s.includes(u)){c!==";"&&f++;var m=e.substring(h,f).trim();n+=" "+m+";"}}h=f+1,d=-1}}}}return r&&(n+=Sn(r)),o&&(n+=Sn(o,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Vt(e,t={},n,r){for(var o in n){var a=n[o];t[o]!==a&&(n[o]==null?e.style.removeProperty(o):e.style.setProperty(o,a,r))}}function Ee(e,t,n,r){var o=e.__style;if(o!==t){var a=La(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else r&&(Array.isArray(r)?(Vt(e,n?.[0],r[0]),Vt(e,n?.[1],r[1],"important")):Vt(e,n,r));return r}const Ha=Symbol("is custom element"),ja=Symbol("is html");function Z(e,t,n,r){var o=xa(e);o[t]!==(o[t]=n)&&(t==="loading"&&(e[Mr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Oa(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function xa(e){return e.__attributes??={[Ha]:e.nodeName.includes("-"),[ja]:e.namespaceURI===Yr}}var En=new Map;function Oa(e){var t=En.get(e.nodeName);if(t)return t;En.set(e.nodeName,t=[]);for(var n,r=e,o=Element.prototype;o!==r;){n=jn(r);for(var a in n)n[a].set&&t.push(a);r=en(r)}return t}function ee(e=!1){const t=z,n=t.l.u;if(!n)return;let r=()=>Ae(t.s);if(e){let o=0,a={};const i=Lt(()=>{let l=!1;const s=t.s;for(const h in s)s[h]!==a[h]&&(a[h]=s[h],l=!0);return l&&o++,o});r=()=>y(i)}n.b.length&&ca(()=>{An(t,r),$t(n.b)}),Ut(()=>{const o=V(()=>n.m.map(kr));return()=>{for(const a of o)typeof a=="function"&&a()}}),n.a.length&&Ut(()=>{An(t,r),$t(n.a)})}function An(e,t){if(e.l.s)for(const n of e.l.s)y(n);t()}let mt=!1;function Pa(e){var t=mt;try{return mt=!1,[e(),mt]}finally{mt=t}}const Ra={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Wa(e,t,n){return new Proxy({props:e,exclude:t},Ra)}const Da={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Je(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let o=e.props[r];Je(o)&&(o=o());const a=Me(o,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Je(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const o=Me(r,t);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,t){if(t===Le||t===Rn)return!1;for(let n of e.props)if(Je(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Je(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function Va(...e){return new Proxy({props:e},Da)}function O(e,t,n,r){var o=!$e||(n&Wr)!==0,a=(n&Vr)!==0,i=(n&Fr)!==0,l=r,s=!0,h=()=>(s&&(s=!1,l=i?V(r):r),l),d;if(a){var f=Le in e||Rn in e;d=Me(e,t)?.set??(f&&t in e?p=>e[t]=p:void 0)}var c,u=!1;a?[c,u]=Pa(()=>e[t]):c=e[t],c===void 0&&r!==void 0&&(c=h(),d&&(o&&zr(),d(c)));var m;if(o?m=()=>{var p=e[t];return p===void 0?h():(s=!0,p)}:m=()=>{var p=e[t];return p!==void 0&&(l=void 0),p===void 0?l:p},o&&(n&Dr)===0)return m;if(d){var g=e.$$legacy;return function(p,_){return arguments.length>0?((!o||!_||g||u)&&d(_?m():p),p):m()}}var b=!1,M=((n&Rr)!==0?Lt:hn)(()=>(b=!1,m()));a&&y(M);var k=C;return function(p,_){if(arguments.length>0){const H=_?y(M):o&&a?me(p):p;return A(M,H),b=!0,l!==void 0&&(l=H),p}return We&&b||(k.f&Re)!==0?M.v:y(M)}}function te(e){z===null&&Wn(),$e&&z.l!==null?Fa(z).m.push(e):Ut(()=>{const t=V(e);if(typeof t=="function")return t})}function ne(e){z===null&&Wn(),te(()=>()=>V(e))}function Fa(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Na="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Na);Gr();const w={string:"string",number:"number",boolean:"boolean",null:"null",undefined:"undefined",regexp:"regexp",function:"function",object:"object",array:"array",promise:"promise",unknown:"unknown"},Ft=e=>e===null?w.null:e===void 0?w.undefined:e instanceof RegExp?w.regexp:typeof e=="string"?w.string:typeof e=="number"?w.number:typeof e=="boolean"?w.boolean:Array.isArray(e)?w.array:typeof e=="function"?w.function:typeof e=="object"?w.object:w.unknown,we=e=>{if(typeof e=="string"){if(e.match(/^[\d.-]+$/))return Number.isNaN(Number.parseFloat(e))?Number.isNaN(Number.parseInt(e))?{identity:w.string,value:e}:{identity:w.number,value:Number.parseInt(e)}:{identity:w.number,value:Number.parseFloat(e)};if(!e.includes(",")&&(e.includes("&")||e.includes("="))){const t=e.split(/[&,]/),n={};for(const r of t){if(!r.includes("="))continue;const[o,a]=r.split("="),i=o.replace(/\[\d*\]$/,""),l=we(a);if(o.includes("[")){Array.isArray(n[i])||(n[i]=[]);const s=o.match(/\[(\d+)\]/)?.[1];s?(Array.isArray(n[i])||(n[i]=[]),n[i].push([parseInt(s),l.value])):n[i].push(l.value)}else n[i]=l.value}for(const[r,o]of Object.entries(n))Array.isArray(o)&&o.length>0&&Array.isArray(o[0])&&(n[r]=o.sort((a,i)=>a[0]-i[0]).map(([,a])=>a));return{identity:w.object,value:n}}else if(e.includes("&")&&e.includes("=")){const t={};for(const n of e.split("&")){if(!n.includes("="))continue;const[r,o]=n.split("=");t[r]=o}return{identity:w.object,value:t}}else if(e.match(/^[0-9a-z]+\[\d+\]=.+$/)){const[,t,n]=e.match(/^[0-9a-z]+\[(\d+)\]=(.+)$/)||[];if(t!==void 0&&n!==void 0){const r=[],o=we(n);return r[parseInt(t,10)]=o.value,{identity:w.array,value:r}}}else if(e.match(/^[0-9a-z]+\[\]$/))return{identity:w.array,value:e};return e.match(/^true$/i)?{identity:w.boolean,value:!0}:e.match(/^false$/i)?{identity:w.boolean,value:!1}:{identity:w.string,value:e}}else{if(typeof e=="number")return{identity:w.number,value:e};if(e instanceof RegExp)return{identity:w.regexp,value:e};if(typeof e=="boolean")return{identity:w.boolean,value:e};if(e===null)return{identity:w.null,value:null};if(e===void 0)return{identity:w.undefined,value:void 0};if(Array.isArray(e))return{identity:w.array,value:e};if(typeof e=="object"){const t=Object.entries(e).reduce((n,[r,o])=>(n[r]=we(o)?.value,n),{});return{identity:w.object,value:t}}else{if(typeof e=="function")return{identity:w.function,value:e};if(e instanceof Promise)return{identity:w.promise,value:e}}}throw new Error(`unable to marshal value: ${e} (it is neither a string, number, boolean, nor a regular expression)`)},Nt=["exact-match","base-match","default-match","permitted-no-conditions"];var ot;(function(e){e.any={[w.string]:(t,n)=>t===n,[w.number]:(t,n)=>t===n,[w.boolean]:(t,n)=>t===n,[w.promise]:(t,n)=>t===n,[w.function]:(t,n)=>t===n,[w.null]:(t,n)=>t===n,[w.undefined]:(t,n)=>t===n,[w.unknown]:(t,n)=>t===n,[w.array]:(t,n)=>Array.isArray(t)&&Array.isArray(n)&&t.length===n.length&&t.every((r,o)=>e.any[Ft(r)](r,n[o])),[w.object]:(t,n)=>{if(typeof t!="object"||typeof n!="object")return!1;const r=Object.keys(t),o=Object.keys(n);return r.length!==o.length?!1:r.every(a=>e.any[Ft(t[a])](t[a],n[a]))},[w.regexp]:(t,n)=>{const r=t.exec(n);return r?r.groups?we(r.groups).value:r.length===1&&r[0]===r.input?!0:we(r.slice(1)[0]).value:!1}},e.valid={[w.string]:t=>t.length>0,[w.boolean]:t=>t===!1,[w.number]:t=>!isNaN(t),[w.array]:t=>Array.isArray(t)&&t.length>0,[w.object]:t=>{if(typeof t!="object"||t===null)return!0;const n=Object.keys(t);return n.length===0?!0:n.every(o=>{const a=t[o],i=Ft(a);return e.valid[i](a)})},[w.regexp]:t=>t instanceof RegExp,[w.function]:t=>typeof t=="function",[w.null]:()=>!1,[w.undefined]:()=>!1}})(ot||(ot={}));const qa=(e,t)=>{const n=new URL(e,window.location.origin);t&&Object.entries(t).forEach(([r,o])=>{n.searchParams.set(r,o)}),window.history.pushState({},"",n.toString())};class Fe{params={};original;constructor(t){if(typeof t=="string"&&(this.original=t),t){const n=we(t);n.value&&(this.params=n.value)}}get(t,n){return this.params[t]||n}set(t,n){}delete(t){delete this.params[t]}clear(){this.params={}}goto(t){qa(t,this.params)}test(t){if(typeof t=="object"){const n={};for(const[r,o]of Object.entries(t.params))if(this.params[r]){const a=we(this.params[r]);if(o instanceof RegExp){const i=ot.any[w.regexp](o,this.params[r]);if(i)n[r]=i;else return{condition:"no-match"}}else a.identity===w.number?a.value===this.params[r]&&(n[r]=a.value):a.identity===w.string?n[r]=a.value===this.params[r]:a.identity===w.boolean?n[r]=a.value===!!this.params[r]:a.identity===w.array&&(n[r]=a.value.includes(this.params[r]))}else return{condition:"no-match"};return Object.keys(n).length===Object.keys(t).length&&ot.valid[w.object](n)?{condition:"exact-match",matches:we(n).value}:{condition:Object.keys(n).length>1&&Object.keys(t).length!==Object.keys(n).length?"exact-match":"no-match",matches:n}}}toString(){const t=n=>Array.isArray(n)?n.map(r=>t(r)).join(","):typeof n=="object"&&n!==null?Object.entries(n).map(([r,o])=>`${r}:${t(o)}`).join(","):encodeURIComponent(n);return Object.entries(this.params).map(([n,r])=>`${encodeURIComponent(n)}=${t(r)}`).join("&")}toJSON(t){return Object.fromEntries(Object.entries(this.params).map(([n,r])=>[n,r.toString()]))}}var tt;(function(e){e.parse=t=>{if(t){const[n,r=""]=t.split("#"),[o,a=""]=r.split("?");return{path:o,query:new Fe(a),hash:r}}}})(tt||(tt={}));const Ne=e=>(e&&!e.startsWith("/")&&(e="/"+e),e);var Et;(function(e){e.parse=t=>{if(t===void 0||t.length===0)throw new Error(`invalid URL: ${t}`);const n=t.startsWith("file:///");if(t.includes("://")&&!n){const[o,a]=t.split("://"),i=a.match(/^([^/:]+)(?::(\d+))?(.*)$/),[l,s,h]=i?.slice(1)??[],[d,f=""]=(h||"").split("?"),c=tt.parse(t);return{protocol:o,host:l,port:s,path:Ne(d)||"/",query:new Fe(f),hash:c}}else if(n){const[o,a]=t.split("://"),i=a.indexOf("#"),l=a.indexOf("?");let s="",h="/",d;if(i>l&&l!=-1)s=a.slice(0,l),h=Ne(a.slice(l)),d=new Fe(h);else{s=a.slice(0,i),h=Ne(a.slice(i));const[c,u]=(h||"").split("?");d=new Fe(u)}const f=tt.parse(a);return{protocol:o,host:s,port:"",path:h,query:d,hash:f}}else{const[o,a=""]=t.split("?"),i=tt.parse(t);return{protocol:window.location.protocol.replace(":",""),host:window.location.hostname,port:window.location.port,path:Ne(o)||"/",query:new Fe(a),hash:i}}},e.path=t=>t.split("?")[0]})(Et||(Et={}));const gt={};var ae;(function(e){e.config=t=>({tracing:t?.tracing||gt?.SPA_ROUTER?.tracing||!1,logging:{level:t?.logging?.level||gt?.SPA_ROUTER?.logging?.level||4,console:t?.logging?.console||gt?.SPA_ROUTER?.logging?.console,sink:t?.logging?.sink||gt?.SPA_ROUTER?.logging?.sink}}),e.current=e.config()})(ae||(ae={}));var it;(function(e){let t;(function(n){n[n.FATAL=-1]="FATAL",n[n.ERROR=1]="ERROR",n[n.INFO=2]="INFO",n[n.DEBUG=3]="DEBUG",n[n.TRACE=4]="TRACE",n[n.DISABLED=5]="DISABLED"})(t=e.LogLevel||(e.LogLevel={})),e.info=(...n)=>{e.log(t.INFO,...n)},e.debug=(...n)=>{e.log(t.DEBUG,...n)},e.error=(...n)=>{e.log(t.ERROR,...n)},e.trace=(...n)=>{e.log(t.TRACE,...n)},e.fatal=(...n)=>{throw e.log(t.FATAL,...n),new Error("Fatal error")},e.log=(n,...r)=>{n<=ae.current.logging.level&&n!==t.DISABLED&&(ae.current.logging.console&&(r.some(o=>o?.toConsole)?r.forEach(o=>o?.toConsole?.(ae.current.logging.level)):ae.current.logging.console&&console.log(...r)),ae.current.logging.sink&&ae.current.logging.sink(r))}})(it||(it={}));var At;(function(e){e.from=t=>{if(typeof t=="string")return new RegExp(t);if(t instanceof RegExp)return new RegExp(t.source);throw new Error("invalid regexp expression")},e.can=t=>/[[\]{}()*+?.,\\^$|#\s]|\\[wWdDsS]|\(\?[:!=<]?/.test(t)})(At||(At={}));function Ya(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}const zn=async e=>Ya(e)?await e():e();class mn extends Map{#e=R(!1);get size(){return y(this.#e),super.size}#t(){A(this.#e,!y(this.#e))}add(t,n){if(this.has(t))throw new Error(`key ${t} already exists`);return this.set(t,n)}get(t){return y(this.#e),super.get(t)}set(t,n){const r=super.set(t,n);return this.#t(),r}delete(t){const n=super.delete(t);return n&&this.#t(),n}clear(){const t=super.clear();return this.#t(),t}keys(){return y(this.#e),super.keys()}values(){return y(this.#e),super.values()}entries(){return y(this.#e),super.entries()}forEach(t){return y(this.#e),super.forEach(t)}[Symbol.iterator](){return y(this.#e),super[Symbol.iterator]()}}class Ba{prefix;id;date;name;description;metadata;#e=R(me(new mn));get traces(){return y(this.#e)}set traces(t){A(this.#e,t,!0)}constructor(t,n){this.prefix=n,this.name=t.name,this.id=t.id||Math.random().toString(36).substring(2,25),this.description=t.description,this.metadata=t.metadata,this.date=t.date||new Date}trace(t,n){const r=t.id||Math.random().toString(36).substring(2,25);return t=new $a(t,this.traces.size+1,this,n),this.traces.set(r,t),it.trace(n,t),t}get(){return this.traces.values()}}class $a{prefix;id;index;date;name;description;metadata;span;constructor(t,n,r,o){this.id=t.id||Math.random().toString(36).substring(2,25),this.index=n,this.date=t.date||new Date,this.name=t.name,this.description=t.description,this.metadata=t.metadata,this.span=r,this.prefix=t.prefix}toConsole(t){const n=["%c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s","color: #505050",this.date?.toISOString(),"color: #7A7A7A","color: #915CF2; font-weight: bold",this.span?.name||this.id,"color: #7A7A7A; font-weight: bold","color: #C3F53B; font-weight: bold",this.index,"color: #7A7A7A; font-weight: bold","color: #3BAEF5; font-weight: bold",`${this.metadata?.router?`[${this.metadata.router.id}] `:""}${this.name}`,"color: #06E96C",this.description];this.prefix&&(n[0]=`${this.prefix} %c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s`),ae.current.tracing.level>=it.LogLevel.TRACE?(n[0]+=`
%c%s`,n.push("color: #6B757F",`attached trace metadata:

${JSON.stringify({span:this.span.metadata,trace:this.metadata},null,2)}`)):ae.current.tracing.level>=it.LogLevel.DEBUG&&(this.span&&n.push(this.span.metadata),this.metadata&&n.push(this.metadata)),console.log(...n)}}const Ka=new mn,fr=(e,t)=>{if(ae.current.tracing){const n=new Ba({name:e,metadata:t});return Ka.set(e,n),n}};var Jt;(function(e){e.base=(t,n)=>n.match(new RegExp(`^${t}(/|$)`))!==null})(Jt||(Jt={}));class qt{route;result;constructor(t){this.route=t.route,this.result=t.result}toString(){let t="";if(this.result.querystring.original&&typeof this.result.querystring.original=="object"){const n=new URLSearchParams;for(const[r,o]of Object.entries(this.result.querystring.original))o!=null&&n.append(r,String(o));t=n.toString()}else this.result.querystring.original&&(t=String(this.result.querystring.original));return`${this.result.path.original}${t?`?${t}`:""}`}}class Ga{name;basePath;path;querystring;component;props;hooks;children;status;constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=t.path,this.querystring=t.querystring,this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status}toJSON(){return{name:this.name,basePath:this.basePath,path:this.path,props:this.props,component:this.component,querystring:this.querystring,hooks:this.hooks,children:this.children,status:this.status}}}class gn{name;basePath;path;querystring;component;props;hooks;children;status;#e=R(me([]));get traces(){return y(this.#e)}set traces(t){A(this.#e,t,!0)}constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=typeof t.path=="string"?Ne(t.path):t.path,t.querystring&&(this.querystring=new Fe(t.querystring)),this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status,this.children=t.children?.map(n=>new gn(n))}test(t){const n=Et.path(t.toString());if(typeof this.path=="string")if(At.can(this.path)){const r=At.from(this.path).exec(n);if(r)return{condition:"exact-match",params:r.groups}}else{if(this.path===n)return{condition:"exact-match",params:this.path};if(Jt.base(this.path,n))return{condition:"base-match",params:{}}}else if(this.path instanceof RegExp){const r=ot.any[w.regexp](this.path,n);if(r)return{condition:"exact-match",params:r}}else if(typeof this.path=="number"&&this.path===we(n).value)throw new Error("numbered route match not supported at the route.path level");return{condition:"no-match",params:{}}}absolute(){return this.basePath?`${this.basePath}${this.path}`:this.path.toString()}}class Ua{id;basePath;routes;hooks;initialPath;notFoundComponent;statuses;renavigation;constructor(t){this.id=t.id||Math.random().toString(36).substring(2,15),this.basePath=t.basePath,this.hooks=t.hooks,this.initialPath=t.initialPath,this.notFoundComponent=t.notFoundComponent,this.statuses=t.statuses,this.renavigation=t.renavigation??!0,this.routes=t.routes.map(n=>new Ga({...n,...t}))}toJSON(){return{id:this.id,basePath:this.basePath,routes:this.routes,hooks:this.hooks}}}var ve;(function(e){e[e.OK=200]="OK",e[e.PermanentRedirect=301]="PermanentRedirect",e[e.TemporaryRedirect=302]="TemporaryRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.InternalServerError=500]="InternalServerError"})(ve||(ve={}));const Za=["","/","/*","/^.*$/","/.*/"];class Ja{id;routes=new Set;handlers;config;applyFn;#e=R(!1);get navigating(){return y(this.#e)}set navigating(t){A(this.#e,t,!0)}#t=R();get current(){return y(this.#t)}set current(t){A(this.#t,t,!0)}constructor(t,n){this.id=t.id||Math.random().toString(36).substring(2,15),this.config=t,this.applyFn=n,this.handlers={pushStateHandler:()=>this.handleStateChange(location.toString()),replaceStateHandler:()=>this.handleStateChange(location.toString()),popStateHandler:()=>this.handleStateChange(location.toString()),hashChangeHandler:()=>this.handleStateChange(location.toString())},window.addEventListener("pushState",this.handlers.pushStateHandler),window.addEventListener("replaceState",this.handlers.replaceStateHandler),window.addEventListener("popstate",this.handlers.popStateHandler),window.addEventListener("hashchange",this.handlers.hashChangeHandler);for(let r of t.routes)this.routes.add(new gn({...r,basePath:r.basePath||this.config.basePath}))}async handleStateChange(t,n){const{path:r,query:o}=Et.parse(t);this.navigating=!0,n||(n=fr("detected history change event")),n?.trace({prefix:"🔍",name:"router-instance.handleStateChange",description:`attempting to handle a new state change for path "${r}"`,metadata:{router:{id:this.config.id,basePath:this.config.basePath},location:"/src/lib/router-instance.svelte:handleStateChange()",basePath:this.config.basePath,path:r,query:o,url:t}});const a=await this.get(r,o,n);if(a&&Nt.includes(a.result.path.condition)){if(n?.trace({prefix:"✅",name:"router-instance.handleStateChange",description:`route found for path "${r}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},path:r,query:o?.params||!1,route:a,url:t}}),this.config.hooks?.pre&&!await this.evaluateHooks(a,this.config.hooks.pre)){this.navigating=!1;return}if(a.route?.hooks?.pre&&!await this.evaluateHooks(a,a.route.hooks.pre)){this.navigating=!1;return}const i=this.current&&this.current.result.path.original===a.result.path.original&&JSON.stringify(this.current.result.querystring.params)===JSON.stringify(a.result.querystring.params);if(this.config.renavigation!==!1?(this.current=void 0,n?.trace({prefix:i?"🔄":"✅",name:"router-instance.applyRoute",description:i?`re-mounting same route "${a.result.path.original}" (renavigation enabled)`:`applying new route "${a.result.path.original}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:i,renavigation:this.config.renavigation,result:a}}),this.applyFn(a,n),this.current=a):(n?.trace({prefix:"⏭️",name:"router-instance.skipRenavigation",description:`skipping same route "${a.result.path.original}" (renavigation disabled)`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:i,renavigation:this.config.renavigation,result:a}}),this.current=a),a&&a.route?.hooks?.post&&!await this.evaluateHooks(a,a.route.hooks.post)){this.navigating=!1;return}this.config.hooks?.post&&await this.evaluateHooks(a,this.config.hooks.post),this.current=a}this.navigating=!1}async evaluateHooks(t,n){if(Array.isArray(n))for(const r of n){if(!await zn(()=>r(t)))return!1;await new Promise(o=>setTimeout(o,50))}else if(!await zn(()=>n(t)))return!1;return!0}async get(t,n,r){t=t.replace("/#","");const o=Ne(t.replace(this.config.basePath||"/","")),a=l=>{let s;for(const h of this.routes)if(!h.path||Za.includes(h.path.toString())){s=h;break}if(r?.trace({prefix:s?"✅":"❌",name:"router-instance.getDefaultRoute",description:`get default route because "${l}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:o,route:s}}),s)return new qt({route:s,result:{path:{condition:"default-match",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:s.component,status:ve.OK}})};if(r?.trace({prefix:"🔍",name:"router-instance.get",description:`${this.config.id} with base path "${this.config.basePath||"/"}" is attempting to get a route for path "${t}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:o}}),this.config.basePath===t)return a("base path is the same as the path");let i;for(const l of this.routes){const s=l.test(o);if(s&&Nt.includes(s.condition))if(r?.trace({prefix:"✅",name:"router-instance.get:routesloop",description:`${s.condition} for inbound path "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get():forloop",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:o,route:l,evaluation:{path:s}}}),l.querystring&&n){const h=n.test(l.querystring);Nt.includes(h?.condition)&&(r?.trace({prefix:"✅",name:"router-instance.get.evaluateQuery",description:`${h?.condition} evaluating querystring "${n?.toString()}" for the route "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:o,evaluation:{path:s,querystring:h}}}),i=new qt({route:l,result:{path:{...s,original:o},querystring:{...h,original:n.toJSON()},component:l.component,status:ve.OK}}))}else i=new qt({route:l,result:{path:{...s,original:o},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:l.component,status:ve.OK}})}if(t==="/")return a("no routes match, last resort is to find a default route");if(!i&&this.config.statuses?.[404]){const l=this.config.statuses[404];return typeof l=="function"?{result:{...l({result:{path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}},r),path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}}:{result:{...l,path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}}}return i}deregister(t){window.removeEventListener("pushState",this.handlers.pushStateHandler),window.removeEventListener("replaceState",this.handlers.replaceStateHandler),window.removeEventListener("popstate",this.handlers.popStateHandler),window.removeEventListener("hashchange",this.handlers.hashChangeHandler),mr.deregister(this.config.id,t)}get routesArray(){return Array.from(this.routes)}toJSON(){return{id:this.id,config:this.config}}}class Qa{instances=new mn;constructor(){if(window.__SVELTE_SPA_ROUTER_REGISTERED__)return window.__SVELTE_SPA_ROUTER_REGISTERED__;window.__SVELTE_SPA_ROUTER_REGISTERED__=this;const{pushState:t,replaceState:n}=window.history;window.history.pushState=function(...r){t.apply(window.history,r),window.dispatchEvent(new Event("pushState"))},window.history.replaceState=function(...r){n.apply(window.history,r),window.dispatchEvent(new Event("replaceState"))}}register(t,n,r){if(this.instances.has(t.id))throw new Error(`router instance with id ${t.id} already registered`);const o=new Ja(t,n);return r&&r.trace({prefix:"🔍",name:"registry.register",description:"registering a new router instance",metadata:{router:{id:t.id,basePath:t.basePath},location:"/src/lib/registry.svelte:register()",config:t}}),this.instances.set(t.id,o),o}deregister(t,n){const r=this.instances.get(t);if(n&&n.trace({prefix:r?"✅":"❌",name:"registry.deregister",description:"deregistering a router instance",metadata:{router:{id:t,basePath:r.config.basePath},location:"/src/lib/registry.svelte:deregister()",config:r.config}}),r)this.instances.delete(t);else throw new Error(`router instance with id ${t} not found`)}get(t){return this.instances.get(t)}}const mr=window.__SVELTE_SPA_ROUTER_REGISTRY__||new Qa;function Xa(e,t){N(t,!0);let n=O(t,"instance",15),r=Wa(t,["$$slots","$$events","$$legacy","instance"]);const o=fr(t.id?`[${t.id}]`:"router");let a=R(null),i,l=R(void 0),s=R(me({}));const h=async(g,b)=>{if(A(l,g,!0),b?.trace({prefix:"✅",name:"apply",description:`<Router${i.config.id?` id="${i.config.id}"`:""}/> applying route ${g.result.path.original} (${g.result.path.condition})`,metadata:{location:"/src/lib/router.svelte:apply()",router:{id:i.config.id,basePath:i.config.basePath},result:g}}),typeof g.result.component=="function"&&g.result.component.constructor.name==="AsyncFunction"){const M=await g.result.component();A(a,M.default||M,!0)}else A(a,g.result.component,!0);A(l,{...g},!0),A(s,y(l).route?.props,!0)};i=mr.register(new Ua(r),h,o),o?.trace({prefix:"✅",name:"<Router/> Component",description:"new component mounted",metadata:{router:{id:i.config.id,basePath:i.config.basePath},location:"/src/lib/router.svelte:mount()"}}),n(i),o&&(o.metadata={router:i.config.id}),i.handleStateChange(location.toString(),o),ne(()=>{i.deregister(o)});const{routes:d,basePath:f,...c}=r;var u=_n(),m=Ct(u);Sa(m,()=>y(l)?.result?.path?.original||Math.random(),g=>{var b=_n(),M=Ct(b);za(M,()=>y(a),(k,p)=>{p(k,Va({get route(){return y(l)}},()=>y(s),()=>c))}),L(g,b)}),L(e,u),q()}var eo=j('<main><p class="lbl-title svelte-85uvon">Freelancer & Hobbyist based in Edinburgh, Scotland</p> <p class="lbl-contact svelte-85uvon">Email: elecarno@proton.me • Discord: @elecarno</p> <div class="con-names svelte-85uvon"><button class="btn-name svelte-85uvon" id="btn-1"><h1 class="svelte-85uvon">Elecarno</h1> <p class="svelte-85uvon">Developer · Graphic Designer · Video Editor · VRChat Artist</p></button> <button class="btn-name svelte-85uvon" id="btn-2"><h1 class="svelte-85uvon">Monarch Atolla</h1> <p class="svelte-85uvon">Musical Artist</p></button> <button class="btn-name svelte-85uvon" id="btn-4"><h1 class="svelte-85uvon">B. McEwan</h1> <p class="svelte-85uvon">3D Artist · Writer</p></button> <button class="btn-name svelte-85uvon" id="btn-3"><h1 class="svelte-85uvon">Arkady Orlunda</h1> <p class="svelte-85uvon">Writer · Screenwriter · Composer</p></button></div></main>');function to(e){function t(d){document.documentElement.style.setProperty("--site-bg",d)}function n(){document.documentElement.style.setProperty("--site-bg","rgba(46, 115, 89, 1)")}function r(d){window.location.href=d}var o=eo(),a=I(v(o),4),i=v(a),l=I(i,2),s=I(l,2),h=I(s,2);E("click",i,()=>{r("/elecarno/")}),E("mouseenter",i,()=>{t("#3d4fad")}),E("mouseleave",i,n),E("click",l,()=>{r("/ma/")}),E("mouseenter",l,()=>{t("#ff5733")}),E("mouseleave",l,n),E("click",s,()=>{r("/mcewan/")}),E("mouseenter",s,()=>{t("#b3923e")}),E("mouseleave",s,n),E("click",h,()=>{r("/ao/")}),E("mouseenter",h,()=>{t("#de5b89")}),E("mouseleave",h,n),L(e,o)}var no=j('<main><h1 class="svelte-1r6spzv">404: Not Found</h1> <p>It would appear you are trying to access a page that does not exist on my domain!<br/> Double check the address, or use the button below to go my home page.</p> <button>Go to Home</button> <p>Alternatively, click <a href="links">here</a> to see a list of all pages on this domain.</p></main>');function ro(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-404")}),ne(()=>{document.documentElement.classList.remove("pg-404")});function n(a){window.location.href=a}ee();var r=no();ie(a=>{X.title="Elecarno | 404"});var o=I(v(r),4);E("click",o,()=>{n("/")}),L(e,r),q()}var ao=j(`<main class="svelte-c61b8g"><h1 class="svelte-c61b8g">Links</h1> <p>A list of all sites and pages on this domain.</p> <ul><li><a href="/">/</a> - Home Page</li> <li><a href="/*">/*</a> - 404 Page</li> <li><a href="/links/">/links/</a> - Links Page</li></ul> <h3 class="svelte-c61b8g">Project Sites</h3> <ul><li><a href="/harbour/">/harbour/</a> - Website for the Planet Harbour project.</li> <li><a href="/past-paper-viewer/">/past-paper-viewer/</a> - Website for the Past Paper Viewer project</li> <li><a href="/crossing-red-helios/">/crossing-red-helios/</a> - Website for the Crossing Red-Helios project</li> <li><a href="/crh-wiki/">/crh-wiki/</a> - Wiki for the Crossing Red-Helios project</li> <li><a href="/aster-docs/">/aster-docs/</a> - Documentation for the <a href="https://www.github.com/jachdich/aster-server">Aster</a> project</li> <li><a href="/music-theory-tester/">/music-theory-tester/</a> - A simple web app for memorising heptatonic musical scales.</li></ul> <hr/> <h2 class="svelte-c61b8g">Elecarno</h2> <a href="/elecarno/">/elecarno/</a> <hr/> <h2 class="svelte-c61b8g">Monarch Atolla</h2> <a href="/ma/">/ma/</a> <h3 class="svelte-c61b8g">Albums & EPs</h3> <ul><li><a href="/ma/amber/">/ma/amber</a> - An Amber Ballad</li> <li><a href="/ma/hope/">/ma/hope</a> - Hope Need Not Be Real</li> <li><a href="/ma/candle/">/ma/candle</a> - Candlelight Fragments</li> <li><a href="/ma/brothers/">/ma/brothers</a> - Brothers at the End of an Era</li></ul> <h3 class="svelte-c61b8g">Singles</h3> <ul><li><a href="/ma/golden">/ma/golden</a> - Golden Friend of Silver Water</li> <li><a href="/ma/winter">/ma/winter</a> - Call Your Names In Winter Night</li> <li><a href="/ma/classroom">/ma/classroom</a> Soft Eyes Under Classroom Glow</li> <li><a href="/ma/shimmering">/ma/shimmering</a> - Shimmering Flower</li> <li><a href="/ma/simille">/ma/simile</a> - Fall in Simile</li> <li><a href="/ma/heart">/ma/heart</a> - Brother by Heart</li> <li><a href="/ma/silent">/ma/silent</a> - When Silent Was Joy</li> <li><a href="/ma/parallels">/ma/parallels</a> - Parallels</li></ul> <hr/> <h2 class="svelte-c61b8g">B. McEwan</h2> <a href="/mcewan/">/mcewan/</a> <h3 class="svelte-c61b8g">3D Artist</h3> <a href="/mcewan/3d/">/mcewan/3d/</a> <ul><li><a href="/mcewan/3d/dragonfly">/mcewan/3d/dragonfly</a> - Mechanical Dragonfly</li> <li><a href="/mcewan/3d/butterfly">/mcewan/3d/butterfly</a> - Mechanical Butterfly</li> <li><a href="/mcewan/3d/ontop">/mcewan/3d/ontop</a> - We're on Top</li> <li><a href="/mcewan/3d/fighter">/mcewan/3d/fighter</a> - Space Fighter</li> <li><a href="/mcewan/3d/robot">/mcewan/3d/robot</a> - Robot</li></ul> <h3 class="svelte-c61b8g">Writer</h3> <a href="/mcewan/3d/">/mcewan/writer/</a> <ul><li><a href="/mcewan/writer/collection">/mcewan/writer/collection</a> - Collection</li> <li><a href="/mcewan/writer/lucidity">/mcewan/writer/lucidity</a> - The Secret to Lucidity</li> <li><a href="/mcewan/writer/layer-one">/mcewan/writer/layer-one</a> - Breaking Layer One</li> <li><a href="/mcewan/writer/dreamer">/mcewan/writer/dreamer</a> - Radio to the Dreamer</li> <li><a href="/mcewan/writer/pandora">/mcewan/writer/pandora</a> - Pandora Was a Man From California</li> <li><a href="/mcewan/writer/definitions">/mcewan/writer/definitions</a> - Definitions</li> <li><a href="/mcewan/writer/rifle">/mcewan/writer/rifle</a> - Freedom Is Not a Rifle</li> <li><a href="/mcewan/writer/green">/mcewan/writer/green</a> - A Comforting Green</li> <li><a href="/mcewan/writer/pentadecimal">/mcewan/3d/pentadecimal</a> - The Pentadecimal Watch</li> <li><a href="/mcewan/writer/tool">/mcewan/writer/tool</a> - It is a tool and a tool only</li> <li><a href="/mcewan/writer/taxi">/mcewan/writer/taxi</a> - Cold, Jacket, & Taxi</li></ul> <hr/> <h2 class="svelte-c61b8g">Arkady Orlunda</h2> <a href="/ao/">/ao/</a></main>`);function oo(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-links")}),ne(()=>{document.documentElement.classList.remove("pg-links")}),ee();var n=ao();ie(r=>{X.title="Elecarno | Links"}),L(e,n),q()}var io=j('<main><h1 class="svelte-1n1xj68">Elecarno</h1> <p>Page In Development</p></main>');function so(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-elecarno")}),ne(()=>{document.documentElement.classList.remove("pg-elecarno")}),ee();var n=io();ie(r=>{X.title="Elecarno"}),L(e,n),q()}var lo=j('<a class="a-rel svelte-1gqt99s"><!></a>'),ho=j('<a class="a-rel svelte-1gqt99s"><!></a>'),co=j('<main class="svelte-1gqt99s"><div class="con-logo svelte-1gqt99s"><h1 class="mon svelte-1gqt99s">Monarch</h1> <h1 class="ato svelte-1gqt99s">Atolla</h1></div> <h1 style="margin-top: 75px;" class="svelte-1gqt99s">Albums & EPs</h1> <div class="con-display svelte-1gqt99s"></div> <h1 style="margin-top: 150px;" class="svelte-1gqt99s">Singles</h1> <div class="con-display svelte-1gqt99s"></div></main>');function uo(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-ma")}),ne(()=>{document.documentElement.classList.remove("pg-ma")});let n=[{name:"An Amber Ballad",link:"amber",img:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc"},{name:"Hope Need <br> Not Be Real",link:"hope",img:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd"},{name:"Candlelight <br> Fragments",link:"candle",img:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773"},{name:"Brothers at the <br> End of an Era",link:"brothers",img:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae"}],r=[{name:"Golden Friend of <br> Silver Water",link:"golden",img:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd"},{name:"Call Your Names <br> in Winter Night",link:"winter",img:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db"},{name:"Soft Eyes Under <br> Classroom Glow",link:"classroom",img:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2"},{name:"Shimmering <br> Flower",link:"shimmering",img:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f"},{name:"Fall in Simile",link:"simile",img:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e"},{name:"Brother by Heart",link:"heart",img:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76"},{name:"When Silent <br> Was Joy",link:"silent",img:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0"},{name:"Parallels",link:"parallels",img:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6"}];ee();var o=co();ie(l=>{X.title="Monarch Atolla"});var a=I(v(o),4);_t(a,5,()=>n,It,(l,s)=>{var h=lo(),d=v(h);St(d,()=>y(s).name),$(()=>{Z(h,"href",`/ma/${y(s).link??""}`),Ee(h,`background-image: url(${y(s).img??""})`)}),L(l,h)});var i=I(a,4);_t(i,5,()=>r,It,(l,s)=>{var h=ho(),d=v(h);St(d,()=>y(s).name),$(()=>{Z(h,"href",`/ma/${y(s).link??""}`),Ee(h,`background-image: url(${y(s).img??""})`)}),L(l,h)}),L(e,o),q()}const Ln={icon:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",mask:"M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",color:"#7f7f7f"},fo={bandsintown:{icon:"M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",mask:"M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",color:"#1B8793"},behance:{icon:"M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",mask:"M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",color:"#007CFF"},codepen:{icon:"M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",mask:"M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",color:"##151515"},discord:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 26.404297 16.828125 L 26.769531 17.259766 C 20.186671 19.137498 17.152344 21.990234 17.152344 21.990234 C 17.152344 21.990234 17.957407 21.557233 19.310547 20.943359 C 23.223697 19.246178 26.331328 18.778253 27.611328 18.669922 C 27.830758 18.633812 28.012992 18.597656 28.232422 18.597656 C 30.463282 18.308769 32.987954 18.236508 35.621094 18.525391 C 39.095384 18.922604 42.825476 19.931951 46.628906 21.990234 C 46.628906 21.990234 43.738624 19.282029 37.521484 17.404297 L 38.035156 16.828125 C 38.035156 16.828125 43.044257 16.719236 48.310547 20.619141 C 48.310547 20.619141 53.576172 30.044365 53.576172 41.671875 C 53.576172 41.671875 50.468999 46.907386 42.386719 47.160156 C 42.386719 47.160156 41.069796 45.606565 39.972656 44.234375 C 44.763516 42.898295 46.591797 39.9375 46.591797 39.9375 C 45.092367 40.91248 43.666719 41.598919 42.386719 42.068359 C 40.558139 42.826669 38.802844 43.332214 37.083984 43.621094 C 33.573124 44.271074 30.354188 44.091468 27.611328 43.585938 C 25.526758 43.188727 23.735758 42.610963 22.236328 42.033203 C 21.395188 41.708213 20.480696 41.310228 19.566406 40.804688 C 19.456696 40.732487 19.346048 40.69722 19.236328 40.625 C 19.163228 40.5889 19.126414 40.551755 19.089844 40.515625 C 18.431554 40.154535 18.066406 39.902344 18.066406 39.902344 C 18.066406 39.902344 19.822217 42.789919 24.466797 44.162109 C 23.369647 45.534299 22.015625 47.160156 22.015625 47.160156 C 13.933335 46.907386 10.861328 41.671875 10.861328 41.671875 C 10.861328 30.044375 16.128906 20.619141 16.128906 20.619141 C 21.395196 16.719236 26.404297 16.828125 26.404297 16.828125 z M 25.380859 30.296875 C 23.296289 30.296875 21.650391 32.101957 21.650391 34.304688 C 21.650391 36.507407 23.332859 38.3125 25.380859 38.3125 C 27.465429 38.3125 29.111328 36.507407 29.111328 34.304688 C 29.147928 32.101957 27.465429 30.296875 25.380859 30.296875 z M 38.728516 30.296875 C 36.643946 30.296875 34.998047 32.101957 34.998047 34.304688 C 34.998047 36.507407 36.680516 38.3125 38.728516 38.3125 C 40.813086 38.3125 42.458984 36.507407 42.458984 34.304688 C 42.458984 32.101957 40.813086 30.296875 38.728516 30.296875 z ",color:"#7289DA"},dribbble:{icon:"M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",mask:"M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",color:"#ea4c89"},dropbox:{icon:"M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",mask:"M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",color:"#1081DE"},email:Ln,facebook:{icon:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",mask:"M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",color:"#3b5998"},fivehundredpix:{icon:"M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",mask:"M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",color:"#222222"},flickr:{icon:"M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",mask:"M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",color:"#0063db"},foursquare:{icon:"M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",mask:"M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",color:"#0072b1"},github:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",color:"#24292e"},google:{icon:"M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",mask:"M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",color:"#dd4b39"},google_play:{icon:"M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",mask:"M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",color:"#40BBC1"},instagram:{icon:"M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z",mask:"M0,0v64h64V0H0z M 42.03,23.99 C 42.03,24.99 41.22,25.79 40.23,25.79 39.23,25.79 38.43,24.99 38.43,23.99 38.43,22.99 39.23,22.19 40.23,22.19 41.22,22.19 42.03,22.99 42.03,23.99 Z M 24.52,31.99 C 24.52,27.74 27.97,24.29 32.22,24.29 36.47,24.29 39.92,27.75 39.92,31.99 39.92,36.24 36.47,39.70 32.22,39.70 27.97,39.70 24.52,36.25 24.52,31.99 Z M 27.22,31.99 C 27.22,34.76 29.46,36.99 32.22,36.99 34.98,36.99 37.22,34.76 37.22,31.99 37.22,29.23 34.98,27.00 32.22,27.00 29.46,27.00 27.22,29.23 27.22,31.99 Z M 38.28,19.79 C 36.70,19.72 36.22,19.70 32.22,19.70 28.22,19.70 27.74,19.71 26.17,19.79 24.69,19.85 23.90,20.11 23.37,20.31 22.67,20.58 22.17,20.90 21.65,21.43 21.13,21.96 20.80,22.46 20.53,23.16 20.33,23.68 20.08,24.48 20.01,25.94 19.94,27.52 19.92,27.99 19.92,32.01 19.92,36.01 19.94,36.48 20.01,38.06 20.08,39.52 20.33,40.32 20.53,40.84 20.80,41.54 21.13,42.05 21.65,42.57 22.17,43.10 22.67,43.41 23.37,43.69 23.90,43.90 24.69,44.15 26.17,44.21 27.74,44.28 28.22,44.30 32.22,44.30 36.22,44.30 36.70,44.28 38.28,44.21 39.75,44.15 40.54,43.89 41.07,43.69 41.77,43.42 42.27,43.10 42.80,42.57 43.32,42.05 43.64,41.54 43.91,40.84 44.12,40.32 44.36,39.52 44.43,38.06 44.50,36.48 44.52,36.01 44.52,32.01 44.52,27.99 44.50,27.52 44.43,25.94 44.36,24.48 44.12,23.68 43.91,23.16 43.64,22.46 43.32,21.96 42.80,21.43 42.27,20.90 41.77,20.59 41.07,20.31 40.54,20.10 39.75,19.85 38.28,19.79 Z M 26.03,17.09 C 27.64,17.02 28.15,17.00 32.22,17.00 36.27,17.00 36.80,17.02 38.38,17.08 38.38,17.08 38.41,17.08 38.41,17.08 40.01,17.15 41.10,17.41 42.06,17.78 43.04,18.17 43.87,18.68 44.71,19.51 45.54,20.34 46.06,21.18 46.44,22.17 46.81,23.13 47.06,24.21 47.14,25.81 47.21,27.41 47.23,27.92 47.23,31.99 47.23,36.07 47.21,36.58 47.14,38.18 47.06,39.78 46.81,40.87 46.44,41.82 46.06,42.80 45.54,43.65 44.71,44.48 43.87,45.31 43.04,45.83 42.06,46.21 41.10,46.58 40.00,46.84 38.41,46.91 36.81,46.98 36.31,47.00 32.23,47.00 28.15,47.00 27.64,46.98 26.04,46.91 24.44,46.84 23.35,46.58 22.40,46.21 21.42,45.82 20.58,45.31 19.75,44.48 18.91,43.65 18.39,42.81 18.01,41.82 17.64,40.86 17.39,39.78 17.32,38.18 17.25,36.58 17.23,36.07 17.23,31.99 17.23,27.92 17.25,27.41 17.32,25.82 17.39,24.21 17.64,23.13 18.01,22.17 18.39,21.20 18.91,20.35 19.75,19.52 20.58,18.69 21.41,18.17 22.40,17.78 23.35,17.42 24.44,17.16 26.03,17.09 Z",color:"#e94475"},"itch.io":{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32 16 C 36.482469 15.999275 39.489763 16.027944 43.828125 16.197266 C 45.223688 17.11826 47.973899 20.631595 48 21.552734 L 48 23.076172 C 48 25.008914 46.375769 26.707031 44.900391 26.707031 C 43.128974 26.707031 41.652344 25.07576 41.652344 23.138672 C 41.652344 25.07576 40.226756 26.707031 38.455078 26.707031 C 36.68353 26.707031 35.302734 25.07576 35.302734 23.138672 C 35.302734 25.07576 33.787432 26.707031 32.015625 26.707031 L 31.984375 26.707031 C 30.212699 26.707031 28.697266 25.07576 28.697266 23.138672 C 28.697266 25.07576 27.316728 26.707031 25.544922 26.707031 C 23.773245 26.707031 22.347656 25.07576 22.347656 23.138672 C 22.347526 25.07576 20.871157 26.707031 19.099609 26.707031 C 17.624234 26.707031 16 25.008624 16 23.076172 L 16 21.552734 C 16.026082 20.63174 18.776052 17.11855 20.171875 16.197266 C 21.406769 16.077682 27.517662 16.000435 32 16 z M 28.673828 25.796875 A 3.6505562 4.0580007 0 0 0 29.292969 26.689453 A 3.7155025 4.1301957 0 0 0 31.894531 27.867188 C 31.930136 27.867188 31.964779 27.866621 32 27.865234 C 32.035221 27.866088 32.07219 27.867188 32.107422 27.867188 A 3.7155025 4.1301957 0 0 0 34.708984 26.689453 A 3.6502954 4.0577109 0 0 0 35.326172 25.796875 A 3.6548598 4.0627847 0 0 0 35.949219 26.689453 C 36.617985 27.416189 37.534472 27.867188 38.544922 27.867188 A 3.7141985 4.1287462 0 0 0 41.146484 26.689453 C 41.388792 26.425753 41.573442 26.142952 41.742188 25.814453 C 41.910814 26.143677 42.1458 26.425338 42.388672 26.689453 A 3.7168066 4.1316454 0 0 0 44.990234 27.867188 C 45.112172 27.867188 45.239291 27.830162 45.341797 27.791016 C 45.484209 29.439616 45.543344 31.01503 45.564453 32.164062 L 45.566406 32.169922 C 45.569073 32.753426 45.571445 33.23411 45.574219 33.900391 C 45.546831 37.359375 45.881298 45.110721 44.201172 47.015625 C 41.597581 47.690463 36.806287 47.998187 32 48 C 27.193582 47.998115 22.402421 47.690463 19.798828 47.015625 C 18.118702 45.110865 18.455126 37.359375 18.427734 33.900391 C 18.430401 33.233965 18.432987 32.753281 18.435547 32.169922 L 18.435547 32.164062 C 18.456799 31.015319 18.515782 29.439616 18.658203 27.791016 C 18.760709 27.830151 18.887947 27.867188 19.009766 27.867188 A 3.7168066 4.1316454 0 0 0 21.611328 26.689453 C 21.85416 26.425316 22.089324 26.143533 22.257812 25.814453 C 22.426437 26.142953 22.611207 26.425606 22.853516 26.689453 A 3.7144592 4.129036 0 0 0 25.455078 27.867188 C 26.465659 27.867188 27.382014 27.416332 28.050781 26.689453 A 3.6548598 4.0627847 0 0 0 28.673828 25.796875 z M 37.998047 29.636719 L 37.998047 29.638672 L 37.996094 29.638672 C 36.938044 29.640989 35.998583 29.639715 34.833984 31.052734 C 33.917302 30.94591 32.958545 30.891191 32 30.892578 C 31.041455 30.890977 30.082567 30.945897 29.166016 31.052734 C 28.001416 29.63986 27.061956 29.641019 26.003906 29.638672 L 26.001953 29.638672 C 25.502078 29.638672 23.502722 29.638165 22.109375 33.988281 L 20.613281 39.955078 C 19.504239 44.394801 20.966648 44.503759 22.792969 44.507812 C 25.50128 44.395752 27.001953 42.209586 27.001953 40.023438 C 28.501065 40.296565 30.250885 40.433594 32 40.433594 C 33.748987 40.433449 35.498804 40.296562 36.998047 40.023438 C 36.998047 42.209586 38.496636 44.395759 41.205078 44.507812 C 43.031397 44.503898 44.495762 44.39464 43.386719 39.955078 L 41.890625 33.988281 C 40.497278 29.638166 38.497925 29.636719 37.998047 29.636719 z M 32 33.056641 C 32 33.056641 34.851013 35.967594 35.363281 37.001953 L 33.498047 36.919922 L 33.498047 38.728516 C 33.498047 38.813166 32.749101 38.778784 32 38.740234 C 31.250641 38.778805 30.501953 38.813177 30.501953 38.728516 L 30.501953 36.919922 L 28.636719 37.001953 C 29.148854 35.967594 31.997653 33.059414 32 33.056641 z ",color:"#fa5c5c"},itunes:{icon:"M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",mask:"M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",color:"#E049D1"},linkedin:{icon:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",mask:"M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",color:"#007fb1"},mailto:Ln,medium:{icon:"M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",mask:"M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",color:"#333332"},meetup:{icon:"M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",mask:"M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",color:"#E51937"},pinterest:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#cb2128"},rdio:{icon:"M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",mask:"M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",color:"#0475C5"},reddit:{icon:"M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",mask:"M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",color:"#FF4500"},rss:{icon:"M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",mask:"M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",color:"#EF8733"},sharethis:{icon:"M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",mask:"M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",color:"#00BF00"},smugmug:{icon:"M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",mask:"M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",color:"#8cca1e"},snapchat:{icon:"M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",mask:"M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",color:"#FFC91B"},soundcloud:{icon:"M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",mask:"M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",color:"#FF5700"},spotify:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",mask:"M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",color:"#2EBD59"},squarespace:{icon:"M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",mask:"M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",color:"#1C1C1C"},stackoverflow:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 37.623047 12.775391 L 47.613281 26.207031 L 44.925781 28.203125 L 34.9375 14.771484 L 37.623047 12.775391 z M 31.462891 18.119141 L 44.326172 28.832031 L 42.183594 31.404297 L 29.320312 20.691406 L 31.462891 18.119141 z M 26.533203 25.103516 L 41.708984 32.167969 L 40.294922 35.205078 L 25.121094 28.136719 L 26.533203 25.103516 z M 23.640625 32.705078 L 40.021484 36.150391 L 39.333984 39.423828 L 22.953125 35.980469 L 23.640625 32.705078 z M 15.984375 36.972656 L 19.318359 36.972656 L 19.318359 46.978516 L 42.666016 46.978516 L 42.666016 36.972656 L 46 36.972656 L 46 50.3125 L 15.984375 50.3125 L 15.984375 36.972656 z M 22.654297 40.308594 L 39.330078 40.308594 L 39.330078 43.642578 L 22.654297 43.642578 L 22.654297 40.308594 z",color:"#ed803d"},telegram:{icon:"M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",mask:"M0,0v64h64V0H0z M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",color:"#49a9e9"},tiktok:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z",color:"#000000"},tumblr:{icon:"M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#2c4762"},twitch:{icon:"M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",mask:"M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",color:"#6441A5"},twitter:{icon:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",mask:"M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",color:"#00aced"},upwork:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 32 0 C 14.272 0 0 14.272 0 32 C 0 49.728 14.272 64 32 64 C 49.728 64 64 49.728 64 32 C 64 14.272 49.728 0 32 0 z M 24.9375 17.111328 L 30.537109 17.111328 C 31.637109 20.911328 33.636719 25.310938 36.136719 29.210938 C 37.736719 23.710938 41.737109 20.210938 47.037109 20.210938 C 53.137109 20.210938 58.136719 25.2125 58.136719 31.3125 C 58.136719 37.7125 53.137109 42.710938 47.037109 42.710938 C 44.037109 42.710937 41.537891 41.911719 39.337891 40.511719 L 36.9375 52.412109 L 31.236328 52.412109 L 34.736328 36.111328 C 33.236328 34.011328 31.836328 31.612109 30.736328 29.412109 L 30.736328 31.912109 C 30.736328 38.012109 25.837891 42.912109 19.837891 42.912109 C 13.837891 42.912109 8.9375 38.012109 8.9375 31.912109 L 8.9375 17.210938 L 14.337891 17.210938 L 14.337891 31.8125 C 14.337891 34.7125 16.736719 37.111328 19.636719 37.111328 C 22.536719 37.111328 24.9375 34.7125 24.9375 31.8125 L 24.9375 17.111328 z M 47.136719 25.912109 C 43.036719 25.912109 41.737891 29.9125 41.337891 32.3125 L 41.337891 32.412109 L 40.736328 34.611328 C 42.536328 36.111328 44.837109 37.111328 47.037109 37.111328 C 49.937109 37.111328 52.636328 34.611719 52.736328 31.511719 C 52.736328 28.411719 50.236719 25.912109 47.136719 25.912109 z ",color:"#1a0"},vevo:{icon:"M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",mask:"M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",color:"#ED1A3B"},vimeo:{icon:"M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",mask:"M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",color:"#1ab7ea"},vine:{icon:"M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",mask:"M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",color:"#00BF8F"},vk:{icon:"M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",mask:"M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",color:"#45668e"},vsco:{icon:"M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",mask:"M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",color:"#83878A"},wechat:{icon:"M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z",mask:"M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z",color:"#00c80f"},whatsapp:{icon:"M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",mask:"M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",color:"#25D366"},yelp:{icon:"M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",mask:"M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",color:"#B90C04"},youtube:{icon:"M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",mask:"M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",color:"#ff3333"}};var mo=j('<span class="social-icon"><div class="social-container"><svg class="social-svg" viewBox="0 0 64 64"><g class="social-svg-background"><circle cx="32" cy="32" r="31"></circle></g><g class="social-svg-icon"><path></path></g><g class="social-svg-mask"><path></path></g></svg></div></span>');function Yt(e,t){N(t,!1);let n=O(t,"network",8);const{color:r,icon:o,mask:a}=fo[n()];let i=O(t,"bgColor",8,r),l=O(t,"fgColor",8,"transparent"),s=O(t,"height",8,48),h=O(t,"width",8,48);const f=`display: inline-block; position: relative; overflow: hidden; ${O(t,"style",8,"")()}`,c="position: absolute; inset: 0; width: 100%; height: 100%;",u="border-radius: 50%; position: absolute; inset: 0; width: 100%; height: 100%; fill-rule: evenodd;",m="@media (prefers-reduced-motion: no-preference) { --ms-transition: 'fill 170ms ease-in-out'; -o-transition: 'fill 170ms ease-in-out'; --moz-transition: 'fill 170ms ease-in-out'; --webkit-transition: 'fill 170ms ease-in-out'; transition: 'fill 170ms ease-in-out';}",g=`${m} fill: transparent;`;ee();var b=mo();let M;var k=v(b);Ee(k,c);var p=v(k);Ee(p,u);var _=v(p);Ee(_,g);var H=I(_),fe=v(H),G=I(H);Ee(G,m);var le=v(G);$(P=>{M=Ee(b,f,M,P),Z(H,"fill",l()),Z(fe,"d",o),Z(G,"fill",i()),Z(le,"d",a)},[()=>({width:`${h()}px`,height:`${s()}px`})]),L(e,b),q()}var go=j('<div class="con-lyrics svelte-1irq5j5"><div class="pan-lyrics svelte-1irq5j5"><h2 class="svelte-1irq5j5"> </h2> <pre style="white-space: pre-wrap;" class="svelte-1irq5j5"> </pre> <button>Close</button></div></div>'),wo=j('<li><div class="con-track svelte-1irq5j5"><a class="con-name svelte-1irq5j5"> </a> <span class="con-dur svelte-1irq5j5"> </span></div></li>'),po=j('<!> <main class="svelte-1irq5j5"><div class="con-details svelte-1irq5j5"><img class="img-cover svelte-1irq5j5" alt="Release Cover"/> <div class="con-text svelte-1irq5j5"><h1 style="margin-left: 18px" class="svelte-1irq5j5"><!></h1> <ol></ol> <div class="con-socials svelte-1irq5j5"><a class="a-social svelte-1irq5j5" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-1irq5j5" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-1irq5j5" target="_blank" rel="noopener noreferrer"><!></a> <p class="lab-release svelte-1irq5j5"> </p></div> <a class="a-back svelte-1irq5j5" href="/ma/">←</a></div></div></main>',1);function re(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-album")}),ne(()=>{document.documentElement.classList.remove("pg-album")});let n=O(t,"name",8,""),r=O(t,"tracklist",24,()=>[]),o=O(t,"cover",8,""),a=O(t,"links",24,()=>({})),i=O(t,"release",8,""),l=wt(!1),s=wt(""),h=wt("");ee();var d=po();ie(be=>{$(Y=>X.title=`Monarch Atolla | ${Y??""}`,[()=>(Ae(n()),V(()=>n().replace(/<br>/g,"")))])});var f=Ct(d);{var c=be=>{var Y=go(),De=v(Y),ut=v(De),Ze=v(ut),ft=I(ut,2),Ot=v(ft),Pt=I(ft,2);$(()=>{de(Ze,y(s)),de(Ot,y(h))}),E("click",Pt,()=>{A(l,!1)}),L(be,Y)};_a(f,be=>{y(l)&&be(c)})}var u=I(f,2),m=v(u),g=v(m),b=I(g,2),M=v(b),k=v(M);St(k,n);var p=I(M,2);_t(p,5,r,It,(be,Y)=>{var De=wo(),ut=v(De),Ze=v(ut),ft=v(Ze),Ot=I(Ze,2),Pt=v(Ot);$(()=>{de(ft,(y(Y),V(()=>y(Y).name))),de(Pt,(y(Y),V(()=>y(Y).duration)))}),E("click",Ze,()=>{A(s,y(Y).name),A(h,y(Y).lyrics),A(l,!0)}),L(be,De)});var _=I(p,2),H=v(_),fe=v(H);Yt(fe,{network:"youtube",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var G=I(H,2),le=v(G);Yt(le,{network:"spotify",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var P=I(G,2),dt=v(P);Yt(dt,{network:"itunes",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var Ge=I(P,2),Ue=v(Ge);$(()=>{Z(g,"src",o()),Z(H,"href",(Ae(a()),V(()=>a().yt))),Z(G,"href",(Ae(a()),V(()=>a().sp))),Z(P,"href",(Ae(a()),V(()=>a().it))),de(Ue,i())}),L(e,d),q()}const yo="(Instrumental)",bo=`Nothing there to drain,\r
hollow since the start.\r
Frail foreign body,\r
a pilot in the dark.\r
\r
No expression without a medium,\r
amplify what's there.\r
So hope for a catalyst,\r
to carry thoughts away.\r
\r
Fragile shell,\r
hunger for a heart.\r
Blood and bone,\r
prison to the truth.\r
\r
Empty artist,\r
searching in the ink.\r
For a coffin,\r
to raise from the brink.\r
\r
Stumbling over memories,\r
on the road to reclamation.\r
Caught between livelihood and understanding,\r
with nothing much to keep me going.\r
\r
Fragile shell,\r
hunger for a heart.\r
Blood and bone,\r
prison to the truth.\r
\r
Empty artist,\r
searching in the ink.\r
For a coffin,\r
to raise from the brink.`,vo=`Caught on a windowsill,\r
draped in gold, burning sky.\r
Dreaming of life,\r
what could be, what went by.\r
\r
A ghostly hand, what never was.\r
Too late to stay and that's because,\r
I never saw the world without you,\r
never gave it another chance.\r
\r
Wearing my memories,\r
fake gold and worn out felt.\r
Symbols for another world,\r
another world where no cards were dealt.\r
\r
Where was life was the first choice,\r
and we never even had to think about,\r
which side of the light we had to stand on,\r
which side wouldn't have given us out.\r
\r
I found myself in white corridors,\r
with a pain eating at my heart.\r
I turn around to a hundred hateful eyes,\r
lie to myself and say I'm all okay.\r
\r
Then the day goes by and I'm still alive,\r
hanging on at the edge of a desk,\r
I tell myself this is where I'll live,\r
this is where I'll survive.\r
\r
Where'd my heart go?\r
Was it even there?\r
Did I ever know how it\r
was never in the air?\r
\r
Who's still here?\r
How did everybody fair?\r
I think I know why we're\r
all in despair.\r
\r
Round and round, wasn't getting anywhere.\r
It seemed survival wasn't something I could dare.\r
Everlasting monologue, monotony to apathy,\r
tunnel vision, focus to the grave.\r
\r
To the grave, to the grave, to the grave.\r
Half-hearted commitment to thought every day,\r
To the brave, to the brave I could say,\r
but the pain would never go away.\r
\r
Where'd my heart go?\r
Was it even there?\r
Did I ever know how it\r
was never in the air?\r
\r
Who's still here?\r
How did everybody fair?\r
I think I know why we're\r
all in despair.\r
\r
Caught on a windowsill,\r
draped in gold, burning sky.\r
Dreaming of life,\r
what could be, what went by.\r
\r
A ghostly hand, what never was.\r
Too late to stay and that's because,\r
I never saw the world without you,\r
never gave it another chance.`,ko=`I used to walk\r
walk down the road\r
with my head to the ground.\r
with my head to the ground.\r
\r
And then I watched,\r
as one by one\r
everyone was gone\r
\r
Faces have passed,\r
places have passed.\r
in the shadow of my time.\r
\r
Now here we are,\r
four from today,\r
many tomorrow join the fray.\r
\r
I used to walk,\r
walk down the road\r
with my head in the clouds.\r
with my head in the clouds.\r
\r
Now here we are.\r
Yes here we are today.\r
We've come a long way.`,Co=`Tell me where the wind blows hardest in the fall,\r
Dance at the cliffside with me by the fall.\r
Take me somewhere time will crawl,\r
grasp the fire of morning's call.\r
\r
Out the door, through the grass,\r
tall as trees from a looking glass,\r
accursed plain, accursed road,\r
a reality where dreams erode.\r
\r
Tell me who the shadows warn me of,\r
how the story will come to a close.\r
Take me to the place it all began,\r
a forest home where we had ran.\r
\r
Ran with our minds or so we thought,\r
left a trail to the end of the line.\r
Followed home from the future foretold,\r
on the night where a hand I did hold.\r
\r
Tell me where the wind blows hardest in the fall,\r
Dance at the cliffside with me by the fall.\r
Take me somewhere time will crawl,\r
grasp the fire of morning's call.\r
\r
Take to me the gates of mythology,\r
tell me about the worlds beyond the "free".\r
Sing an amber song while I am gone,\r
I'll sing in ballad while you are gone.\r
\r
Bring me to the\r
grounds of those who came before,\r
the heart of sorrow, of joy, of allure\r
allure to end of the end of it all.\r
\r
To see if you are the end of it all,\r
the time in which we all will fall,\r
the final cliff I can face with a call,\r
the face that started the end of it all.\r
\r
To see if you are the end of it all,\r
the time in which we all will fall,\r
the final cliff I can face with a call,\r
the face that started the end of it all.\r
\r
To see if you are the end of it all,\r
the time in which we all will fall,\r
the final cliff I can face with a call,\r
the face that started the end of it all.\r
\r
Tell me where the wind blows hardest in the fall,\r
Dance at the cliffside with me by the fall.\r
Take me somewhere time will crawl,\r
grasp the fire of morning's call.\r
\r
Take to me the gates of mythology,\r
tell me about the worlds beyond the "free".\r
Sing an amber song while I am gone,\r
I'll sing in ballad while you are gone.\r
\r
To see if you are the end of it all,\r
the time in which we all will fall,\r
the final cliff I can face with a call,\r
the face that started the end of it all.\r
\r
To see if you are the end of it all,\r
the time in which we all will fall,\r
the final cliff I can face with a call,\r
the face that started the end of it all.`;function Mo(e){let t=[{name:"Heed the Glow",duration:"2:13",lyrics:yo},{name:"Cold Hollow",duration:"3:26",lyrics:bo},{name:"Wearing My Memories",duration:"3:08",lyrics:vo},{name:"Now Here We Are",duration:"2:27",lyrics:ko},{name:"Cliffside Dance",duration:"6:16",lyrics:Co}],n={yt:"https://www.youtube.com/watch?v=pDCGaQRyQvY&list=OLAK5uy_l2Oz7qInZp8Syi1MRw1MU-w8EeKLu_tDg",sp:"https://open.spotify.com/album/5w3KLleq7x2Ow2E6YyjIz6",it:"https://music.apple.com/us/album/an-amber-ballad-ep/1825362685"};re(e,{name:"An Amber Ballad",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc",get links(){return n},release:"2025.08.02"})}const To=`Sunny canopy,\r
twirling a silver quill,\r
between my fingers.\r
\r
Sunlight brushes,\r
the stray strands of hair,\r
ornaments of adornment,\r
swaying in the breeze.\r
\r
The wind picks up,\r
and a vestige in memory,\r
lights up my heart,\r
so I look to the clouds.\r
\r
And peering back from,\r
behind the leaves, does\r
Luna look with gaily gaze,\r
and a brightness fill my mind.\r
\r
Down by the shore,\r
the cool air fills my lungs,\r
so I take out my notebook,\r
to think.\r
\r
And comes a bird,\r
to rest upon the loch.\r
Lightly swiftly on the water,\r
here's the stories I am after.\r
\r
Back at home,\r
sitting by the fire.\r
Thinking 'bout mortality\r
and heavenly desire.\r
\r
Daydream of pages,\r
that keep my soul alive.\r
Catching thoughts like butterflies,\r
and hold them close or die.\r
\r
Walking down the roads and paths,\r
and crossings by the streams.\r
Where new people haven't been,\r
words bursting at the seams.\r
\r
And hope to one day find that friend,\r
that'll keep me on my path.\r
Maybe even join me,\r
but I know that's a lot to ask.\r
\r
I got typewriter hands,\r
and I'll travel the lands.\r
Tell the story of the kid,\r
who saw worlds in people's eyes.\r
\r
Who flew with crows,\r
and bound books in gold,\r
and found love alone,\r
and not where was told.\r
\r
I never knew\r
that such ends might come so soon,\r
but I've had a lot already,\r
so I know it's nothing new.\r
\r
And even though,\r
it's sad to say goodbye.\r
I'm glad I did my part,\r
to help you heal your heart.\r
\r
And yes it hurts,\r
but I don't really care,\r
to try and stitch the strands broken,\r
is something I won't dare.\r
\r
So feel no guilt,\r
feel only the joy,\r
to live the life that we have now,\r
there's so much beauty you don't know.\r
\r
I got typewriter hands,\r
and I'll travel the lands.\r
Tell the story of the kid,\r
who saw worlds in people's eyes.\r
\r
Who flew with crows,\r
and bound books in gold,\r
and found love alone,\r
and not where was told.\r
\r
I got stories to tell.\r
I got stories to tell.\r
Of birds and books and watery isles,\r
and catching tears, and trains, and smiles.\r
\r
The places I have been,\r
and the people I have seen,\r
it's worth a read to me,\r
this I hope that you can see.\r
\r
I got typewriter hands,\r
and I'll travel the lands.\r
Tell the story of the kid,\r
who saw worlds in people's eyes.\r
\r
Who flew with crows,\r
and bound books in gold,\r
and found love alone,\r
and not where was told.`,Io=`Twisting trees\r
and a starry sky.\r
I wonder what words I could use,\r
to help me fly.\r
\r
Broken value,\r
to not know a thing you're worth.\r
And share the verses,\r
that lift us from this Earth, this Earth.\r
\r
The Poetry Game,\r
played in the night.\r
To burn into souls,\r
and let their minds take flight.\r
\r
So seek thy lamp,\r
moth-like mind,\r
the brightest thing,\r
you'll ever find.\r
\r
Till dim it turns,\r
and far you'll fall,\r
and then one day,\r
you'll question all.\r
\r
But what good are such bleak words?\r
What good is a cage of your own?\r
Know that the cage is not you,\r
know that the fears are not true.\r
\r
Twisting abyss to the hide the stars,\r
but nothing can hide the joy you are.\r
With words forever by your side,\r
with poems to keep you in the light,\r
\r
A radiant glow in nothingness,\r
it's okay to cry; we're not in bliss.\r
To see the world beyond the isle,\r
to see what lies just past these trails.\r
\r
The Poetry Game,\r
played in the night.\r
To burn into souls,\r
and let their minds take flight.\r
\r
So seek thy lamp,\r
moth-like mind,\r
the brightest thing,\r
you'll ever find.\r
\r
Twisting abyss,\r
to the hide the stars,\r
but nothing can hide,\r
the joy you are.\r
\r
Not cloud nor woods,\r
will mask this heart,\r
these ailments shall,\r
be torn apart.`;function _o(e){let t=[{name:"Typewriter Hands",duration:"3:52",lyrics:To},{name:"The Poetry Game",duration:"4:35",lyrics:Io}],n={yt:"https://www.youtube.com/watch?v=_qhyW86IwY8&list=OLAK5uy_l6KFvvznP5enJK7z_ZlNWTrdHUUeFi1P0",sp:"https://open.spotify.com/album/01H8fvUrWGOhNw2IsoLBfj",it:"https://music.apple.com/us/album/hope-need-not-be-real-single/1761677018"};re(e,{name:"Hope Need Not Be Real",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd",get links(){return n},release:"2024.08.11"})}const So=`Pain\r
for the days that he lives,\r
days that he lives.\r
\r
Old,\r
to see the world through her eyes,\r
world through her eyes.\r
\r
Friendly ghost,\r
do you like rainy days?\r
How about I dance with you?\r
in a trance with you.\r
\r
Hallowed ghost,\r
do you know who you are?\r
How about I give you a clue?\r
Just let it come through.\r
\r
Pieces of your body,\r
pop in and out of reality.\r
Milky eyes turn to pitch black,\r
an abyss that only you can see.\r
\r
Twirling in the starlight,\r
hazy figures of our gravity.\r
A translucent spinal cord,\r
with memories that I once had.\r
\r
Shadow of mine,\r
do you like dark clouds?\r
Waiting for the sky to cry,\r
take my hand with teary eyes.\r
\r
Hauntingly shy,\r
I guess you are mine.\r
Live in cold sobriety,\r
to wait for you to work my mind.\r
\r
Stories,\r
that you whisper to me,\r
whisper to me.\r
\r
Icy,\r
are the hands that you give,\r
hands that you give.\r
\r
Friendly ghost,\r
why do you hide from the sun?\r
I'll pull you into the light,\r
don't you put up a fight.\r
\r
Hallowed ghost,\r
sing me your lullabies.\r
Put me to sleep,\r
so that you may weep.\r
\r
Shadow of mine,\r
do you like dark clouds?\r
Waiting for the sky to cry,\r
take my hand with teary eyes.\r
\r
Hauntingly shy,\r
I guess you are mine.\r
Live in cold sobriety,\r
to wait for you to work my mind.`,gr=`Soft glow,\r
on the classroom walls.\r
Fairy lights,\r
and, a right to dream.\r
\r
Hold slow,\r
for the daring will call.\r
Spend nights,\r
crafting in printer ink.\r
\r
Notebooks,\r
filled with dreary lines.\r
Fantasy,\r
Layers and layers of eyes.\r
\r
Chrysanthemum,\r
something I heard about.\r
Oh maybe I'll,\r
add it to the story.\r
\r
Coarse hands,\r
that run through my hair.\r
Followed myths,\r
that hammer at my skull.\r
\r
And everything,\r
underneath our skin.\r
I can hold close,\r
as its cast, to the wind.\r
\r
Sing along,\r
to our final verses.\r
Bring an end,\r
to the years we could have built.\r
\r
Old lungs,\r
for the breath of the young.\r
We'll go now,\r
remember that you're strong.\r
\r
Coarse hands,\r
that run through my hair.\r
Followed myths,\r
that hammer at my skull.\r
\r
And everything,\r
underneath our skin.\r
I can hold close,\r
as its cast, to the wind.`,Eo=`Old World,\r
that I thought I knew.\r
Dead skin grips to the past,\r
like a tumour I grew.\r
\r
Cold shore,\r
my bones they weep.\r
For the strength that I had,\r
when roots my grew deep.\r
\r
Hallowed past of warm embrace,\r
forget the fires of such a place.\r
\r
Your culture flawed, the fragments sewn,\r
unto my mistakes to which I own.\r
\r
Yet old world,\r
dear dead world,\r
I see you in my dreams.\r
\r
I need those friendly souls,\r
and to meet forgotten foes,\r
so come back to haunt me please.\r
\r
Symbols I see,\r
built in my head,\r
while I was free,\r
hanging by a thread.\r
\r
These fires they don't go out,\r
at least mine don't think they do.`,Ao=`Candlelight flames,\r
a fire that we have tamed,\r
for old light I go.\r
\r
Night stalker's light,\r
a golden coin in the ink,\r
for old light I go.\r
\r
Deadly reprise,\r
a turntable of emotion,\r
for new light I go.\r
\r
Scream in silence,\r
(a star that burns out),\r
before it can glow,\r
(and illuminate the),\r
paper it burns,\r
(with cold furious),\r
hands and a reason,\r
(to hope for an end)\r
hope for a -\r
\r
World of light,\r
that we might know.\r
To help us fight,\r
that enticing glow.\r
Stars we will burn,\r
just to make our globe turn,\r
one more day and a night,\r
that will freeze our light.\r
World alright,\r
that we might hope,\r
for our light.`;function zo(e){let t=[{name:"Does the Ghost Like Rainy Days?",duration:"4:22",lyrics:So},{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:gr},{name:"Haunt Me Please",duration:"4:34",lyrics:Eo},{name:"For Old Light",duration:"2:44",lyrics:Ao}],n={yt:"https://www.youtube.com/watch?v=noiuDgTQK9U&list=OLAK5uy_mJF4cSajYgcmGpWnbZJxlwrehtamoBJrY",sp:"https://open.spotify.com/album/2VFWVR72dGFcHuzCeW5j0U",it:"https://music.apple.com/us/album/candlelight-fragments-ep/1712007436"};re(e,{name:"Candlelight Fragments",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773",get links(){return n},release:"2023.11.11"})}const wr=`I live in parallels,\r
and all the sunlight shines in my mind.\r
I live in polygons,\r
and all the streetlights glow in the day.\r
\r
Why can’t I stay?\r
How these fake eyes are so,\r
Wonderful.\r
Now would you say, say.\r
Flower’s bloom where I stay.\r
\r
Floating islands,\r
with shrines to this unreality.\r
Swirling skies,\r
with glittered thoughts raining down on me.\r
\r
I live in parallels,\r
I live amongst these illusions.\r
Seas of infinity,\r
false divinity.\r
I live in parallels,\r
let the sunlight be true.\r
Let the sunlight be true.`,Lo=`Brother by heart,\r
don’t you see that there’s a tear in your light?\r
Oh brother by heart,\r
won’t you come with me into this great life?\r
\r
I saw you through everything,\r
but I didn’t stop to think what you might do.\r
So you said to me, it's all down the drain,\r
and on this island it’s only the same.\r
\r
Here we are,\r
they said you’re dead to us,\r
and the water’s getting warmer,\r
so let's hurry up.\r
\r
Cause these forests, they\r
won’t hold for long,\r
and it’s only our mouths,\r
that’ll sing their song.\r
\r
Song of our soul,\r
do you remember that night on the field?\r
Oh song of our soul,\r
I swear I knew that I was in the light.\r
\r
But who are we, to mould these minds,\r
your crystal’s gone and your heart’s on the line.\r
I’ll sit with you, by this firelight,\r
‘till our hopes come back and it’s all alright.\r
\r
Even though I couldn’t anticipate,\r
that you would always be around.\r
I’m thankful for all these nights I would’ve lost.\r
If you hadn’t helped me run around.\r
\r
And even though all these thoughts are runnin’ wild,\r
it’s a life that we have not lost.\r
So I’ll look towards that island every night,\r
and see our mark is standing proud.\r
\r
Brother by heart,\r
don’t you see that there’s a tear in your light?\r
Oh brother by heart,\r
won’t you come with me into this great life?\r
\r
I saw you through everything,\r
but I didn’t stop to think what you might do.\r
So you said to me, it's all down the drain,\r
and on this island it’s only the same.\r
\r
Here we are,\r
they said you’re dead to us,\r
and the water’s getting warmer,\r
so let's hurry up.\r
\r
Cause these forests, they\r
won’t hold for long,\r
and it’s only our mouths,\r
that’ll sing their song.\r
\r
Here we are,\r
they said you’re dead to us,\r
and the water’s getting warmer,\r
so let's hurry up.\r
\r
Cause these forests, they\r
won’t hold for long,\r
and it’s only our mouths,\r
that’ll sing their song.`,Ho=`Well hey!\r
This here island is ours eh?\r
\r
Well brother by mind,\r
Let's seize this night.\r
The brain be ticking,\r
As if it's light.\r
Oh paddle down streams,\r
and light the fire,\r
Well brother by mind,\r
this night is ours.\r
\r
I did it again,\r
I had an idea.\r
While roaming’ around\r
this tree right here.\r
\r
And’ all these lines we’re\r
Tryna write.\r
What good are they to this,\r
Crazy life?\r
\r
Now we won’t admit,\r
Cause it's just our bit.\r
It’ll shadow us,\r
like that solar eclipse.\r
\r
So we’ll wait for this here,\r
and we’ll wait for that there,\r
but now we can see,\r
everything’s everywhere.\r
\r
So hey, what you doin’?\r
Is it project,\r
one or two?\r
and how are you?\r
Don’t know? That’s fine!\r
Unsigned? What line?\r
Wait, how are we working till it's 2AM?\r
I guess it’s just lemon and cheese, friend!\r
\r
Well brother by mind,\r
Let's seize this night.\r
The brain be ticking,\r
As if it's light.\r
Oh paddle down streams,\r
and light the fire,\r
Well brother by mind,\r
this night is ours.\r
\r
Well brother by mind,\r
Let's seize this night.\r
The brain be ticking,\r
As if it's light.\r
Oh paddle down streams,\r
and light the fire,\r
Well brother by mind,\r
this night is ours.\r
The night is ours.\r
Oh brother by mind the night is ours.\r
Let's seize this night.`,jo=`Masks are coming off,\r
looks like our fun is over.\r
There’s a spanner in the works,\r
I guess we’ll have to wait for the world.\r
\r
Oh how will I give back,\r
After all of this is over?\r
Like a disappearing act,\r
I thought that we were sober.\r
\r
So here you are my kin,\r
who praised me like a clover.\r
But soon it will begin,\r
I thought that we were sober.\r
\r
We met inside a box,\r
with walls as big as a mansion.\r
Yet it came with a cost,\r
now these walls are our contraption.\r
\r
There’s clouds in my head,\r
and skies in the water.\r
There’s reason in the grass,\r
and memories in the hills.\r
\r
It’s the end of the beginning,\r
I thought we would be winning.\r
How will we be living,\r
when its the end of the beginning?\r
\r
Dots on a map,\r
vines and rivers on the paper.\r
This timeline is a forfeit,\r
We’ll be our own saviour.\r
\r
Together we’ll run,\r
through the bracken.\r
Just like the box,\r
is what I reckon.\r
\r
I thought that we were sober\r
\r
It’s the end of the beginning,\r
I thought we would be winning.\r
How will we be living,\r
when its the end of the beginning?\r
\r
I thought that we were sober\r
I thought that we were sober\r
I thought that we were sober\r
Cause its the end of the beginning`,xo="(Instrumental)",Oo=`Looks like I’m through,\r
chapter two.\r
And now I’ll go runnin’,\r
runnin’ with you.\r
\r
And now I’m alone,\r
with someone new.\r
An hour or two,\r
maybe we’re true.\r
\r
So we’ll chat every single night,\r
wishing there was firelight.\r
But these stories are ephemeral,\r
cause this is just the interlude.\r
\r
I’m a severed contact,\r
dead on contract.\r
With my heart, so conscious.\r
How they say, I’m so monstrous.\r
\r
We’re raised in information.\r
Overload in conversation.\r
Maybe I’ll just, stay here pretty,\r
While you walk off, on a spider lily.\r
\r
And now I’m free,\r
from chapter three.\r
Falling down,\r
that’s how you sound.\r
\r
This curse of mine,\r
it comes with time.\r
An hour or two,\r
and we’ll be blue.\r
\r
This sky’s just you and I,\r
and the next one down is,\r
fading slowly, losing hope, telling lies,\r
just to get some of it back.\r
\r
So we’ll chat every single night,\r
wishing there was firelight.\r
But these stories are ephemeral,\r
cause this is just the interlude.`,Po=`It’s been a while since we walked in this valley together,\r
ey, boy?\r
I thought myself a poison to your soul written in,\r
your red eyes.\r
\r
And it was only a matter of minds,\r
till’ our worlds came down and you gave me a line.\r
Rosy glasses only do so much,\r
and yours are even more worn than mine.\r
\r
I’d say we both got a way with words,\r
oh yours are blunt and mine are fine.\r
Even so, we’re still so clumsy and I,\r
gave way for the rhyme.\r
\r
Shadows walk behind me,\r
in your stride.\r
But you picked ‘em up,\r
and you gave me my side.\r
\r
Just another little set of words,\r
to give to a mind,\r
some are soothing' and,\r
some are blind.\r
\r
It’s been a while since we walked in this valley together,\r
ey, boy?\r
I thought myself a poison to your soul written in,\r
your red eyes.\r
\r
And it was only a matter of minds,\r
till’ our worlds came down and you gave me a line.\r
Rosy glasses only do so much,\r
and yours are even more worn than mine.\r
\r
Smiles are such a horrid thing when they fade with time.\r
I don’t know what yours looked like but I’m,\r
glad I see it now.\r
\r
Why is it that the sky turns pink,\r
every time I’m on that road?\r
Could it be that you’re in the sunset,\r
perpetual and at prime.\r
\r
Now our shadows walk together,\r
walking' away from that era.\r
Oh and it’s a hell of mark we’ll make,\r
all along this path we’ll take.\r
\r
It’s been a while since we walked in this valley together,\r
ey, boy?\r
I thought myself a poison to your soul written in,\r
your red eyes.\r
\r
And it was only a matter of minds,\r
till’ our worlds came down and you gave me a line.\r
Rosy glasses only do so much,\r
and yours are even more worn than mine.`,Ro=`Oh brother by time,\r
let the sands flow.\r
Track your dreams,\r
let ‘em fly.\r
Against the shore,\r
I remember the fields.\r
\r
Let these connections,\r
twist and turn,\r
let these creations,\r
for a story, I yearn.\r
\r
Walk with me,\r
and I, with you.\r
It's our equation,\r
hidden crew.\r
\r
Oh brother by time,\r
let the sands flow.\r
Track your dreams,\r
let ‘em fly.\r
Against the shore,\r
I remember the fields.\r
\r
Brush the grass,\r
watch your step,\r
our rocky road,\r
that we’ll chisel at,\r
let us see ourselves tower high,\r
and give hope for Luna.\r
\r
Oh brother by time,\r
let the sands flow.\r
Track your dreams,\r
let ‘em fly.\r
Against the shore,\r
I remember the fields.`,pr=`I seem to remember,\r
that there were stars.\r
But all it was, was messages,\r
that cleared a heavy fog.\r
\r
I didn’t understand,\r
how that joy felt.\r
Just like the passing butterflies,\r
when all was done and dealt.\r
\r
So I will cry softly,\r
for when silent was joy.\r
And hope that I might win the storm,\r
for that old little boy.\r
Then I will fall slowly,\r
like the place that we knew.\r
And when I reach the bottom,\r
I’ll find myself anew.\r
\r
Take the stage from me dear friend,\r
how will we play this out?\r
The lights give way for you to shine,\r
the silence will stand out.\r
\r
Yet I’m floating in my ignorance,\r
my lack of reality.\r
And through it all my head is filled,\r
and now I can’t forget.\r
\r
These tunnels I found myself in,\r
were lifted in mind by all your smilin’.\r
So I will always remember,\r
when silent was joy.\r
\r
I couldn’t foresee\r
but this is how I fared.\r
I didn’t think I’d see myself,\r
falling and so scared.\r
\r
To a soul you lended,\r
a long missed kind hand.\r
But I never saw it through,\r
and now I understand.\r
\r
So here’s my melody,\r
my gift to you.\r
Some might call it parody,\r
but some might fall through.\r
\r
and here amongst the trees I sit,\r
with my mind against the wall.\r
Thinkin’ ‘bout the memories,\r
that glisten while I fall.`,Wo="(Instrumental)";function Do(e){let t=[{name:"Parallels",duration:"4:02",lyrics:wr},{name:"Brother by Heart",duration:"4:44",lyrics:Lo},{name:"Brother by Mind",duration:"3:34",lyrics:Ho},{name:"End of the Beginning",duration:"4:29",lyrics:jo},{name:"Thought Rewind",duration:"2:11",lyrics:xo},{name:"Friends in the Interlude",duration:"3:39",lyrics:Oo},{name:"Ey, Boy?",duration:"3:14",lyrics:Po},{name:"Brother by Time",duration:"3:13",lyrics:Ro},{name:"When Silent Was Joy",duration:"4:02",lyrics:pr},{name:"We Talked of Peace",duration:"2:04",lyrics:Wo}],n={yt:"https://www.youtube.com/watch?v=b_IhNVL1YWc&list=OLAK5uy_lQ8o_6Bo-FJVEa2kiK6dF6KqQBf3qWZzU",sp:"https://open.spotify.com/album/1O9xeZhBlIJCU3ZUbk4H1X",it:"https://music.apple.com/us/album/brothers-at-the-end-of-an-era/1694202095"};re(e,{name:"Brothers at the <br> End of an Era",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae",get links(){return n},release:"2023.05.13"})}const Vo=`Mirror world where I reach for the clouds,\r
place my hand on our heart,\r
together we will be art.\r
\r
Kindle the flames that beckon our names,\r
but time it is not for our part,\r
lets go back to the start.\r
\r
Spark on the racing line,\r
with an imaginary hourglass counting down time.\r
Flicking through the book of our lives,\r
it doesn't help that the rain always comes by surprise.\r
\r
I remember it fondly, I was a lone reflection,\r
by the silver lake water, into which I looked.\r
Where I saw you staring, back at me into my soul,\r
and then the one became two.\r
\r
Golden friend, lend me your spirit,\r
give me back my eyes, for them I have merit.\r
Cold fellow, let me be free,\r
sing this song and your sight I will give.\r
\r
Caregiver for this cradle frost,\r
I see me walking down the river.\r
The river. The river.\r
\r
I request that my mind be frozen,\r
and left in a jar by the field.\r
The field. The field.\r
\r
Golden friend, lend me your spirit,\r
give me back my eyes, for them I have merit.\r
Cold fellow, let me be free,\r
sing this song and your sight I will give.`;function Fo(e){let t=[{name:"Golden Friend of Silver Water",duration:"4:14",lyrics:Vo}],n={yt:"https://www.youtube.com/watch?v=zk0C53CZvKU",sp:"https://open.spotify.com/track/0tTIVp3AL7WfmTg2QsVoEC",it:"https://music.apple.com/us/album/golden-friend-of-silver-water-single/1723646587"};re(e,{name:"Golden Friend of <br> Silver Water",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd",get links(){return n},release:"2024.02.02"})}const No=`Winter sky,\r
fire fades.\r
flowers die,\r
and here we go again.\r
\r
Silky snow,\r
watch the smoke rise from afterglow.\r
The frost creeps in,\r
again I must begin.\r
\r
Poems and notebooks,\r
and some in my head.\r
\r
Summation of the year,\r
before I wish to disappear.\r
\r
When my mind alights,\r
and when my spark arrives.\r
\r
I'll sweep the snow away,\r
turn my night into day.\r
\r
Around the fire,\r
telling stories of what we were.\r
Never forget the faces,\r
that helped us feel alive.\r
\r
But now the embers fade,\r
and everyone must go home.\r
To cold of the night,\r
under faint candlelight.\r
\r
And faint is my heart,\r
so remember me please.\r
Then the darkness creeps in,\r
and the frost creeps in.\r
\r
So when I call your names,\r
to the stars up above me.\r
I hope you feel the spark alight,\r
and you have the strength to fight.\r
\r
Now it's a memory,\r
just something to forget, something to forget.\r
Your voice is burned into my skull,\r
deeper than anyone.\r
\r
Singed my thoughts,\r
left them blank.\r
Feeling like,\r
I'm in a tank.\r
\r
And the world swirls around me,\r
in your wake.\r
`;function qo(e){let t=[{name:"Call Your Friends in Winter Night",duration:"5:27",lyrics:No}],n={yt:"https://www.youtube.com/watch?v=qar1hU0VG0M",sp:"https://open.spotify.com/track/6AlIpLZ3D18Ps4mZBC7cY0",it:"https://music.apple.com/us/album/call-your-names-in-winter-night-single/1720664029"};re(e,{name:"Call Your Names in <br> Winter Night",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db",get links(){return n},release:"2024.12.19"})}function Yo(e){let t=[{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:gr}],n={yt:"https://www.youtube.com/watch?v=0ccUTJZJBqA",sp:"https://open.spotify.com/track/3UtvtmHMU2YTfhdcqZErmH",it:"https://music.apple.com/us/album/soft-eyes-under-classroom-glow-single/1705710719"};re(e,{name:"Soft Eyes Under <br> Classroom Glow",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2",get links(){return n},release:"2023.08.05"})}const Bo=`\r
Shimmering flower,\r
walk with me.\r
This is the hour,\r
come quick you’ll see.\r
\r
Stand in golden light,\r
where you might take flight.\r
Or burn away,\r
send the ash astray.\r
\r
Don’t leave me here,\r
this fire is yours.\r
Don’t rise above,\r
my hand is frail.\r
\r
I know I lost myself,\r
but forgive this mind.\r
I know it's foggy but,\r
the water’s clear.\r
\r
Shimmering flower,\r
walk with me.\r
This is the hour,\r
come quick you’ll see.\r
\r
Stand in golden light,\r
where you might take flight.\r
Or burn away,\r
send the ash astray.`;function $o(e){let t=[{name:"Shimmering Flower",duration:"3:31",lyrics:Bo}],n={yt:"https://www.youtube.com/watch?v=2KeM0xMxMPI",sp:"https://open.spotify.com/track/6I5FOVuSmSs0Al1Xq4ZLGT",it:"https://music.apple.com/us/album/shimmering-flower-single/1694204258"};re(e,{name:"Shimmering Flower",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f",get links(){return n},release:"2023.07.29"})}const Ko=`Listen, listen for the sun.\r
Give heed to wanderers,\r
give heed to the flame.\r
Listen, listen for the sun.\r
\r
Stand up,\r
Turn around,\r
Listen to the moonlight,\r
and join me on the shore.\r
  \r
Cliffs you say?\r
We got plenty of those.\r
I’ll fall while we’re in simile,\r
and float down to the crystal sand.\r
\r
Fall away,\r
Fall away.\r
Your outta my head,\r
Am I outta yours?\r
\r
Take my hand,\r
although I’m shy.\r
Sail for land,\r
that we might try.\r
\r
Irises that I adorn,\r
or maybe this is how we’re born.\r
Forge myself a single thorn,\r
to which I say that I have sworn.\r
\r
Fall away,\r
fall away,\r
fall away,\r
fall away,\r
fall away,\r
fall away,\r
fall away,\r
fall away,\r
fall away.\r
\r
Stand up,\r
Turn around,\r
Listen to the moonlight,\r
and join me on the shore.\r
\r
Cliffs you say?\r
We got plenty of those.\r
I’ll fall while we’re in simile,\r
and float down to the crystal sand.\r
\r
So let our story be told,\r
let it ring amongst the stars.\r
Let our minds, be known,\r
let them stand in history.\r
\r
Books you say?\r
We got plenty of those.\r
I await the day you come with me,\r
when I lay right here in your company.`;function Go(e){let t=[{name:"Fall in Simile",duration:"3:31",lyrics:Ko}],n={yt:"https://www.youtube.com/watch?v=W59dYm4CPaI",sp:"https://open.spotify.com/track/6OW8skRtKVOP9TKUYoYXc3",it:"https://music.apple.com/us/album/fall-in-simile-single/1694203979"};re(e,{name:"Fall in Simile",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e",get links(){return n},release:"2023.07.29"})}function Uo(e){let t=[{name:"Brother by Heart",duration:"4:44"}],n={yt:"https://www.youtube.com/watch?v=zefqQorn1po",sp:"https://open.spotify.com/track/6kd60HFkCMujDEEhnAGwMr",it:"https://music.apple.com/us/album/brother-by-heart-single/1693113027"};re(e,{name:"Brother by Heart",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76",get links(){return n},release:"2023.07.01"})}function Zo(e){let t=[{name:"When Silent Was Joy",duration:"4:02",lyrics:pr}],n={yt:"https://www.youtube.com/watch?v=6tOfbpyMhEc",sp:"https://open.spotify.com/track/1EfwWVlkS6iZFJkffmTlcQ",it:"https://music.apple.com/us/album/when-silent-was-joy-single/1690783575"};re(e,{name:"When Silent Was Joy",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0",get links(){return n},release:"2023.06.17"})}function Jo(e){let t=[{name:"Parallels",duration:"4:02",lyrics:wr}],n={yt:"https://www.youtube.com/watch?v=S73H33-I21o",sp:"https://open.spotify.com/track/02D9jPrNetIFelcDvrmDmH",it:"https://music.apple.com/us/album/parallels-single/1692112083"};re(e,{name:"Parallels",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6",get links(){return n},release:"2023.07.10"})}var Qo=j('<main><h1 class="svelte-1eny9a3">B. McEwan</h1> <div class="con-names svelte-1eny9a3"><button class="btn-name svelte-1eny9a3" id="btn-1"><h1 class="svelte-1eny9a3">3D Artist</h1></button> <button class="btn-name svelte-1eny9a3" id="btn-2"><h1 class="svelte-1eny9a3">Writer</h1></button></div></main>');function Xo(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-mcewan")}),ne(()=>{document.documentElement.classList.remove("pg-mcewan")});function n(l){window.location.href=l}ee();var r=Qo();ie(l=>{X.title="B. McEwan"});var o=I(v(r),2),a=v(o),i=I(a,2);E("click",a,()=>{n("/mcewan/3d/")}),E("click",i,()=>{n("/mcewan/writer/")}),L(e,r),q()}var ei=j(`<main><div class="con-header svelte-1vlp3rw"><h1 class="svelte-1vlp3rw">B. McEwan</h1> <p class="svelte-1vlp3rw">Hard Surface Modeller</p></div> <p class="lbl-contact svelte-1vlp3rw">Email: elecarno@proton.me • Discord: @elecarno</p> <div class="con-artworks svelte-1vlp3rw"><button class="btn-art svelte-1vlp3rw" id="btn-1">Mechanical Dragonfly</button> <button class="btn-art svelte-1vlp3rw" id="btn-2">Mechanical Butterfly</button> <button class="btn-art svelte-1vlp3rw" id="btn-3">We're On Top</button> <button class="btn-art svelte-1vlp3rw" id="btn-4">Space Fighter</button> <button class="btn-art svelte-1vlp3rw" id="btn-5">Study Robot</button></div></main>`);function ti(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-mcewan-3d")}),ne(()=>{document.documentElement.classList.remove("pg-mcewan-3d")});function n(d){window.location.href=d}ee();var r=ei();ie(d=>{X.title="B. McEwan | 3D Artist"});var o=I(v(r),4),a=v(o),i=I(a,2),l=I(i,2),s=I(l,2),h=I(s,2);E("click",a,()=>{n("/mcewan/3d/dragonfly")}),E("click",i,()=>{n("/mcewan/3d/butterfly")}),E("click",l,()=>{n("/mcewan/3d/ontop")}),E("click",s,()=>{n("/mcewan/3d/fighter")}),E("click",h,()=>{n("/mcewan/3d/robot")}),L(e,r),q()}var ni=j('<div class="con-image svelte-1xfcqlj"><img class="svelte-1xfcqlj"/> <p> </p></div>'),ri=j('<main><h1 class="svelte-1xfcqlj"> </h1> <p><!></p> <div class="con-images svelte-1xfcqlj"></div></main>');function ct(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-artwork")}),ne(()=>{document.documentElement.classList.remove("pg-artwork")});let n=O(t,"name",8,""),r=O(t,"description",8,""),o=O(t,"images",8);ee();var a=ri();ie(f=>{$(c=>X.title=`B. McEwan | ${c??""}`,[()=>(Ae(n()),V(()=>n().replace(/<br>/g,"")))])});var i=v(a),l=v(i),s=I(i,2),h=v(s);St(h,r);var d=I(s,2);_t(d,5,o,It,(f,c)=>{var u=ni(),m=v(u),g=I(m,2),b=v(g);$(()=>{Z(m,"src",(y(c),V(()=>y(c).url))),Z(m,"alt",(y(c),V(()=>y(c).title))),de(b,(y(c),V(()=>y(c).title)))}),L(f,u)}),$(()=>de(l,n())),L(e,a),q()}function ai(e){let t=[{title:"Wide Shot",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/685/large/benjamin-mcewan-wide.jpg?1661684261"},{title:"Mechanism Closeup",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/673/large/benjamin-mcewan-closeup-6.jpg?1661684192"},{title:"Mechanism Overview",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/715/large/benjamin-mcewan-closeup-1.jpg?1661684311"},{title:"Head & Abdomen",url:"https://cdna.artstation.com/p/assets/images/images/053/205/618/large/benjamin-mcewan-closeup-2.jpg?1661684070"},{title:"Legs",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/629/large/benjamin-mcewan-closeup-3.jpg?1661684101"},{title:"Stand",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/659/large/benjamin-mcewan-closeup-5.jpg?1661684162"}];ct(e,{name:"Mechanical Dragonfly",description:"Project to expand my techniques and improve upon the presentation and texturing of my models.",get images(){return t}})}function oi(e){let t=[{title:"Wide Shot",url:"https://cdna.artstation.com/p/assets/images/images/043/522/874/large/benjamin-mcewan-render-1.jpg?1637525570"},{title:"Wing Mechanism",url:"https://cdna.artstation.com/p/assets/images/images/043/522/896/large/benjamin-mcewan-render-3.jpg?1637525541"},{title:"Thorax Plating",url:"https://cdna.artstation.com/p/assets/images/images/043/522/866/large/benjamin-mcewan-render-7.jpg?1637525462"},{title:"Head",url:"https://cdna.artstation.com/p/assets/images/images/043/522/890/large/benjamin-mcewan-render-2.jpg?1637525508"},{title:"Wings",url:"https://cdna.artstation.com/p/assets/images/images/043/522/906/large/benjamin-mcewan-render-4.jpg?1637525572"},{title:"Legs",url:"https://cdnb.artstation.com/p/assets/images/images/043/522/921/large/benjamin-mcewan-render-5.jpg?1637525593"},{title:"Abdomen",url:"https://cdna.artstation.com/p/assets/images/images/043/522/936/large/benjamin-mcewan-render-6.jpg?1637525617"}];ct(e,{name:"Mechanical Butterfly",description:"An experiment in emulating the organic using the mechanical.",get images(){return t}})}function ii(e){let t=[{title:"TVs Scene",url:"https://cdna.artstation.com/p/assets/images/images/039/606/380/large/benjamin-mcewan-shot-7-test-2.jpg?1626378928"},{title:"Elecarno",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/319/large/benjamin-mcewan-carno-denoised.jpg?1626378805"},{title:"JayG",url:"https://cdna.artstation.com/p/assets/images/images/039/606/324/large/benjamin-mcewan-jg-denoise.jpg?1626378814"},{title:"Richjie",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/331/large/benjamin-mcewan-ritchjie-denoise.jpg?1626378833"},{title:"Yasai",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/391/large/benjamin-mcewan-yasai-denoise.jpg?1626378952"},{title:"Rush",url:"https://cdna.artstation.com/p/assets/images/images/039/606/340/large/benjamin-mcewan-rush-denoise.jpg?1626378846"},{title:"Full Table",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/387/large/benjamin-mcewan-table.jpg?1626378942"},{title:"Low Shot",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/345/large/benjamin-mcewan-shot-1-denoise.jpg?1626378862"},{title:"High Shot",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/351/large/benjamin-mcewan-shot-2-denoise.jpg?1626378875"},{title:"Window Shot",url:"https://cdna.artstation.com/p/assets/images/images/039/606/356/large/benjamin-mcewan-shot-3-denoise.jpg?1626378885"},{title:"Far Shot",url:"https://cdna.artstation.com/p/assets/images/images/039/606/362/large/benjamin-mcewan-shot-4-denoise.jpg?1626378895"},{title:"Cables",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/369/large/benjamin-mcewan-shot-5.jpg?1626378904"},{title:"Ground",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/373/large/benjamin-mcewan-shot-6.jpg?1626378915"}];ct(e,{name:"We're on Top",description:"Introductory animated scenes for a collaborative <a href='https://www.youtube.com/watch?v=DsWrZJkiOME'>game montage</a>.",get images(){return t}})}function si(e){let t=[{title:"Overview",url:"https://cdna.artstation.com/p/assets/images/images/032/061/602/large/benjamin-mcewan-render-a.jpg?1605367157"},{title:"Rear",url:"https://cdna.artstation.com/p/assets/images/images/032/061/606/large/benjamin-mcewan-render-b.jpg?1605366884"},{title:"Cockpit",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/613/large/benjamin-mcewan-render-c.jpg?1605366892"},{title:"Engines",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/619/large/benjamin-mcewan-render-d.jpg?1605366902"},{title:"Moon",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/623/large/benjamin-mcewan-render-e.jpg?1605366910"}];ct(e,{name:"Space Fighter",description:"",get images(){return t}})}function li(e){let t=[{title:"Overview",url:"https://cdna.artstation.com/p/assets/images/images/022/403/996/large/benjamin-mcewan-render-a.jpg?1575317573"},{title:"Front Module",url:"https://cdnb.artstation.com/p/assets/images/images/022/403/997/large/benjamin-mcewan-render-b.jpg?1575317577"},{title:"Leg",url:"https://cdna.artstation.com/p/assets/images/images/022/404/000/large/benjamin-mcewan-render-c.jpg?1575317580"},{title:"Attachment Module",url:"https://cdna.artstation.com/p/assets/images/images/022/404/030/large/benjamin-mcewan-render-d.jpg?1575317704"},{title:"Antenna/Radio",url:"https://cdna.artstation.com/p/assets/images/images/022/404/106/large/benjamin-mcewan-render-e.jpg?1575317900"},{title:"Power Module",url:"https://cdna.artstation.com/p/assets/images/images/022/404/150/large/benjamin-mcewan-render-f.jpg?1575318020"},{title:"Side View",url:"https://cdna.artstation.com/p/assets/images/images/022/404/194/large/benjamin-mcewan-render-g.jpg?1575318167"}];ct(e,{name:"Study Robot",description:"My result after finishing Creative Shrimp's hard surface modelling course. Details done using the kitbash set that came with the course.",get images(){return t}})}var hi=j(`<main class="svelte-1b299wh"><div class="con-header svelte-1b299wh"><h1 class="svelte-1b299wh">B. McEwan</h1> <p class="lbl-subtitle svelte-1b299wh">Fiction & Poetry</p> <p class="lbl-contact svelte-1b299wh">Email: elecarno@proton.me</p></div> <div class="con-body svelte-1b299wh"><p>I'm a writer and poet from the West Coast of Scotland, now based in Edinburgh. For my fiction
            I write in a range of genres from science fiction and alternate histories, to contemporary settings
            and personal poetry.

            I was also a 2024 winner and 2025 shortlistee in the Orwell Youth Prize, and I am a member
            of the Orwell Youth Fellows and work as a writer within their collaborative projects.</p> <div class="con-works svelte-1b299wh"><h2 class="svelte-1b299wh">Project Dreamcatcher - Orwell Youth Fellows 2025</h2> <hr class="svelte-1b299wh"/> <p style="margin: 0; margin-bottom: 32px">Project Dreamcatcher was the Orwell Youth Fellows' 2025 collaborative writing project. 
                It can be read on substack <a href="https://digitalisarchives.substack.com/">here</a>.</p> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/collection" class="svelte-1b299wh">Collection</a> <span>R.I.C.A. Tale - Pt. 4</span></div> <p class="svelte-1b299wh">She remembered breaking into the first house, making her way to the bedroom. 
                    Immediately upon entering the room her mind began to fog up. 
                    She fell to her hands and knees as her limbs suddenly <strong>felt as though they were comprised of solid iron</strong>, 
                    only barely managing to crawl back out of the room.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/lucidity" class="svelte-1b299wh">The Secret to Lucidity</a> <span>R.I.C.A. Tale - Pt. 3</span></div> <p class="svelte-1b299wh">The drive was a blur, headlights and streetlamps lurched out from the darkness then faded back into the night. 
                    The whole trip was poorly recollected. K attempted to piece the fragments together, <strong>twisting and stretching Mitchell’s mind</strong>.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/layer-one" class="svelte-1b299wh">Breaking Layer One</a> <span>R.I.C.A. Tale - Pt. 2</span></div> <p class="svelte-1b299wh">Mitchell exited the car and followed Elise to the beach. The cold ocean air swept over them both, 
                    and a burning sunset could be seen on the horizon. He had been working for Siobhan for a month now, 
                    and had become quite fond of the position. The forest was a kind of tranquillity he had never even conceived of. 
                    It lacked the excitement of most dream programs, yet <strong>every image and sound he perceived in that cabin was sharper and clearer than any fantasy he had ever experienced in a dream</strong>.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/dreamer" class="svelte-1b299wh">Radio to the Dreamer</a> <span>R.I.C.A. Tale - Pt. 1</span></div> <p class="svelte-1b299wh">The sun had not yet risen on that Autumn morning. <strong>Mitchell was awoken by the clattering of a letter through his door</strong>.
                    The sound reverberated through the slightly damp air of his one room flat. He dragged himself out of bed. 
                    There was no need to turn the lights on — the residual glow of the city cut through his curtains. 
                    He heard some sirens in the streets below. The time was seven in the morning.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/pandora" class="svelte-1b299wh">Pandora Was a Man From California</a> <span>Prologue</span></div> <p class="svelte-1b299wh">The digital clock positioned at the head of the bus read five minutes past midnight. 
                    There were two people on the bus that night. The driver was accustomed to such shifts, 
                    yet nonetheless a weariness persisted upon him. Tonight however he was a content man, <strong>for the lone passenger had tipped him substantially</strong>.</p></div></div> <div class="con-works svelte-1b299wh"><h2 class="svelte-1b299wh">Short Stories</h2> <hr class="svelte-1b299wh"/> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/definitions" class="svelte-1b299wh">Definitions</a> <span>2025</span></div> <p class="svelte-1b299wh">A figure stands squint in the doorway of the 7th Street bar (which was actually on
                    Mirror Lane, yet self-failingly refused to give itself up to sentimentality). A scarf had
                    been draped over her left shoulder, offset to such an extent that <strong>one questioned if she
                    truly wanted to wear it in the first place</strong> — its colour muddied under the neon signs
                    above.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/rifle" class="svelte-1b299wh">Freedom is not a Rifle</a> <span>OYP 2025 Shortlist</span></div> <p class="svelte-1b299wh">Only a dozen miles from the city walls, a plume of smoke could be seen rising from a 
                    nearby village — the signature blue flare of the revolution climbing alongside it. 
                    Gasps of horror could be heard amongst the crowds, and a loud horn was sounded to 
                    signal the beginning of curfew. <strong>The city was under siege.</strong></p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/green" class="svelte-1b299wh">A Comforting Green</a> <span>OYP 2024 Winner</span></div> <p class="svelte-1b299wh">The room was awash with a green glow. Leaving her bed, 
                    she dragged herself with heavy footsteps towards the window. 
                    That was the first morning she actually saw it. The ‘Ivy Cloud’ they called it. <strong>Tendrils of fallout from some distant nuclear conflict, stretching across the planet.</strong> Its emerald hue of altered sunlight, scattered by radioactive material, 
                    would soon be over her city.</p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/pentadecimal" class="svelte-1b299wh">The Pentadecimal Watch</a> <span>2024</span></div> <p class="svelte-1b299wh">Thomas stood by the assembly line as time slowed around him. His gaze was fixed 
                    on a watch that fell through the air just ahead of him. It was an artwork of a 
                    timepiece, using five separate hands to tell the hour in a system of fifteen divisions. 
                    Behind it, were the tall factory windows through which the smokestacks and churning 
                    streets of the city created a perfect contrast with the watch. <strong>A precision instrument of expression, back-dropped by the monotonous world beyond.</strong></p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/tool" class="svelte-1b299wh">It is a tool and a tool only</a> <span>2023</span></div> <p class="svelte-1b299wh">The robot was splayed out on the table. A ray of light shone through a grating in the 
                    upper wall of the basement and fell upon a heart shaped crystal in the machine's inner torso. 
                    It had no legs and its arms were delicately constructed stalks. Its head was skeletal, 
                    yet on it were attached two large blue eyes. <strong>On the back of its mechanical spinal cord was written “Aiden”.</strong></p></div> <div class="con-w svelte-1b299wh"><div class="con-w-title svelte-1b299wh"><a href="/mcewan/writer/taxi" class="svelte-1b299wh">Cold, Jacket, & Taxi</a> <span>2022</span></div> <p class="svelte-1b299wh">The last image burned into your retinas. The sunset. You remember how pretty it was. 
                    How you felt its warmth on your face. <strong>A picturesque view you would never forget.</strong></p></div></div></div></main>`);function ci(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-mcewan-writer")}),ne(()=>{document.documentElement.classList.remove("pg-mcewan-writer")}),ee();var n=hi();ie(r=>{X.title="B. McEwan | Writer"}),L(e,n),q()}var di=j('<main class="svelte-a2jxob"><a class="a-back svelte-a2jxob" href="/mcewan/writer">←</a> <h1 class="svelte-a2jxob"> </h1> <p class="p-subtitle svelte-a2jxob"> </p> <pre class="con-content svelte-a2jxob" style="white-space: pre-wrap;"> </pre></main>');function se(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-story")}),ne(()=>{document.documentElement.classList.remove("pg-story")});let n=O(t,"name",8,""),r=O(t,"content",8,""),o=O(t,"subtitle",8,"");ee();var a=di();ie(c=>{$(u=>X.title=`B. McEwan | ${u??""}`,[()=>(Ae(n()),V(()=>n().replace(/<br>/g,"")))])});var i=I(v(a),2),l=v(i),s=I(i,2),h=v(s),d=I(s,2),f=v(d);$(()=>{de(l,n()),de(h,`${o()??""}, Benjamin McEwan`),de(f,r())}),L(e,a),q()}const ui=`“For years you have been watched!” Elise cried out. The townspeople gathered around her in front of the church. Their eyes were milky and blinking erratically, a consequence of being prematurely pulled out of enforced dreams. Elise had always wondered how the corporation was able to forcefully lock up an entire village each night. The answer lay in a new development — instead of controlling brain signals with magnets placed inside headsets, the entire bedroom would be built to contain hidden magnetic arrays within the walls.\r
\r
She remembered breaking into the first house, making her way to the bedroom. Immediately upon entering the room her mind began to fog up. She fell to her hands and knees as her limbs suddenly felt as though they were comprised of solid iron, only barely managing to crawl back out of the room. She knew the hill was not insubstantial, and that it would take some time before Toby and Mitchell could make it to the control tower — so she knew that she would have to bypass the magnetic room before them if there was to be any hope of drawing a large enough crowd.\r
Elise ran back through the house. Passing through the kitchen she grabbed a few fridge magnets and stuffed them into her pockets. She was about to leave and attempt to raid another house when she noticed a glass door leading into a small back garden, at the far end of which was a wooden shed.\r
She lunged down by the door and began frantically attempting to pick its lock. The door was stubborn however, and in her frustration she placed too much tension on her tool and broke it clean off at the head. Lacking any other option, she picked up a nearby chair with metal legs and rammed it into the glass. It bounced straight off, yet she was undeterred. She tried again, this time swinging the chair at the door, making sure that the sharp edges of the legs hit perpendicular to the glass — it cracked. She swung again. The cracked spread wider. With a final swing she shattered the glass entirely.\r
The shed door was wooden and partially rotten so she kicked it down easily. As she had hoped — inside was a bike, and above it a row of helmets. One of the helmets was significantly older than the others, with a smooth round shape. She picked it off the wall and placed one of the magnets against it, to which it stuck strongly.\r
Donning the helmet she attempted to breach the bedroom once more. The effects of the magnets were undoubtedly still present, yet were mitigated just enough for her to stand up and move with some difficulty about the room. The bed was stationed in the middle of the room, its occupant still sleeping soundly, with a large wooden headboard that stretched from floor to ceiling. With some effort she was able to remove a panel from the headboard, revealing a small control panel behind it, and with minimal options or time to comprehend exactly what she was looking at, she slammed her hand against what appeared to be an emergency stop — and the world suddenly became clear again.\r
\r
“You have been manipulated! Your dreams have been studied and catalogued!”\r
Tired faces stared back at her. Minds that needed to adjust back to reality — some of them likely having been torn by the cord from some alternative fabricated life.\r
“We are here to set you free, our people are working to bring an end to the tyranny of Ever-Lucid!” The whirr of a helicopter could be heard in the distance. “You can hear for yourselves — they have come to silence you, they have come to purge your memories of this night and place you back under their control, they have—”\r
Elise dropped dead on the ground. The crackle of a shot rang out a few seconds later. The pooling blood glistened under the light of the dropped flare.\r
\r
On the hill overlooking the town, a group of armed soldiers clad in thick black kevlar emerged from the tall grass and aimed their rifles directly at Mitchell.\r
He dropped the gun, and stood up with his hands in the air. The soldiers beat him back to the ground, then forced a mask onto his face. A gas came pouring into his lungs, and in moments he was asleep.\r
\r
***\r
\r
The headset lifts from K’s head, and he stands up to join the other agents at the control desk. \r
“I will admit, their plan wasn’t half bad,” K says.\r
“The plan is still missing,” the agent next to him replies.\r
“Yes, well, we can extract that information in due time.”\r
“I think not. It is well and truly annihilated.”\r
“Are you suggesting that they used the headset in that shack to remove key memories?”\r
“I see no other possibility.”\r
K observes Mitchell. He is only a few meters in front of the desk, strapped down tightly in a surgical bed with a bulbous mass of wires and metal engulfing his head.\r
“Then I suppose we must take a more traditional approach.”\r
K walks back to his headset, and re-initialises the interrogation.\r
\r
***\r
\r
Mitchell sits on the bed in the corner of his apartment.\r
“I know I’m dreaming,” he states, before looking up to see K seated on a chair some distance in front of him.\r
“Yes, we kept that information with you this time.” K does not move a muscle, he is sat still as concrete, his eyes staring piercingly into Mitchell’s. “But you are aware that we can take it away at any time.”\r
“Go ahead.”\r
“Are you sure? You have no comprehension of the places we could leave you.”\r
Everything goes black for a moment. Suddenly the two of them are standing in a small concrete room. The walls are discoloured, and the floor is rough and agonising to stand on. The low ceiling bears down upon them, and a single drop of water falls to the ground every minute.\r
“Another effect we have mastered—” K continues “—is that of time dilation. How would you like to spend a hundred years in this box? Two hundred? Shall we make it a millennium?”\r
“It’s not a very creative punishment,” Mitchell replies drily.\r
“No, but it is an effective one.”\r
The world shifts again. Mitchell stands in the forest amongst trees he recognises. A strong wind rushes over him and the carpet of fallen leaves on the forest floor begins to rustle. Swiftly the pileup is cleared and a metal hatch is revealed.\r
“You weren’t able to get every important memory out of your mind in time it seems.” The hatch opens, and the whirr of a helicopter can suddenly be heard in the distance. “You did well, that we can admit. The bullet shattered Elise’s cranium and left us little to work with, and Toby’s brain was so thoroughly manipulated that it had practically melted — in an entirely literal sense.” The helicopter was overhead now. “But what did it get you? Soon Siobhan will also be dead, and you will be alone. You will spend uncountable days in a concrete box knowing only that you have failed and that you have nothing to go back to.” A spotlight comes bearing down upon them, bathing K in an overwhelming white light. “You need only tell us why you are here. Why were you chosen to live? It is implied information, not hard data — this we know, for if you were oblivious to your current purpose then you would not be your collected self.”\r
Mitchell does not stir. He says no words.\r
\r
***\r
\r
Siobhan can hear it now. The rhythm of the blades cutting through the air. She sits under layers of concrete, in a room filled with countless radios, receivers, oscilloscopes, record players. The sum total of her life after leaving Ever-Lucid.\r
She reaches under the desk and retrieves a large canister of petrol. She douses the equipment, the records, the room itself, and onwards to cover the entire bunker. Returning to her room, she lights an antique old lamp and places it under her chair — concealing its presence with a cloth. After this task she simply sits down once more.\r
Footsteps reverberate from above. A soldier’s chatter comes echoing down the entrance shaft. There is a moment of silence — then an explosion.\r
The hatch is blown open. The black suited riflemen begin to descend, flooding into the bunker and working through its rooms. They come closer, and closer, until finally Siobhan is looking down the spider-like lenses of a night-vision headset.\r
“Don’t move! Hands up!”\r
Siobhan complies readily. Another soldier steps in with a radio strapped to his chest. The voice of K comes blaring through.\r
“Dr. Bechtel, six successful years hiding from Ever-Lucid is a new record, you should be proud of yourself.”\r
Siobhan does not speak.\r
“This is Dr. Bechtel, yes? Mastermind behind the second generation headset and the long-term simulated reality experiment?”\r
“Do not associate me with such things.” Siobhan retorts.\r
“You cannot run from the past, Siobhan.”\r
“I have not been running, Kimberly.”\r
“I have your dog. He has been most useful.”\r
“He certainly has.”\r
One of the soldiers presses forwards.\r
“We should make this swift,” Kimberly continues, “You will come back to Ever-Lucid and you will be reprogrammed such that you are subservient to our needs and you will subsequently continue your research.”\r
The soldier steps forward again. Siobhan kicks over the lantern. The room is alight. A shot sounds — blood oozes from her stomach. The soldiers scramble to exit the bunker.\r
She drops to the floor, the fire searing her skin. She crawls through the blaze to reach the dropped and crackling radio. With her dying breaths, she speaks:\r
“I remember Kimberly, ten years ago suddenly sitting atop the most important scientific paper in the world. I remember Kimberly, seven years ago when he talked Dr. Caldera into forcing her own daughter into the dream study. I remember Kimberly, when he discarded the broken Caldera and assigned me to the cursed project. I remember the faces of the subjects on the day the system shut down and the collective hallucination was annihilated.” The air is thick with smoke now, the roar of the fire louder than anything else. “I see Kimberly now — a man who sacrificed all of humanity for a false goal, and who I know will search fruitlessly through my ashes for answers he will never receive.”\r
\r
In the interrogation room, in the deep recesses of an Ever-Lucid facility, K begins to shudder in his chair. The agents scramble to extract him, yet the system refuses. All around them their infrastructure begins to shut down.\r
\r
In the dream, Mitchell sits amongst the leaves with a smile wide on his face. The warped and distorted voice of Toby echoes around them. The simulation begins to collapse. K is lifted from the ground, suspended in the air — choking. His white suit and mask begin to flake away.\r
“Toby’s mind was always one to reject M.C.E.T.” Mitchell explained, “So we uploaded the best imprint of his brain that we could make in five minutes in a shack to your system. Doing so created a rogue AI with one singular goal — to find someone it recognised.” Mitchell held his arm up. “Here I am, Toby.” He turned back to K, “The poor guy has now cut a hole straight through your infrastructure, and I expect he’s ready to make plenty more damage.”\r
\r
In reality, K’s body contorts under his headset. He wails a painful, guttural scream — and dies. The Ever-Lucid facility, and all worldwide Ever-Lucid products and infrastructure, shut down promptly.\r
\r
\r
EPILOGUE\r
\r
A bunker lies sealed, hidden deep in the English countryside and buried under a mound of dirt. Inside, four beds are neatly made. Clothes are folded and packed into drawers. Dishes and cutlery are organised in the cupboards of a spotless kitchen. On the archway above the entrance, just before the shaft to the surface, a single photo hangs:\r
Four figures on the beach, awash with the golden glow of a sunset; restful expressions adorning their faces.\r
`;function fi(e){se(e,{name:"Collection",subtitle:"Project Dreamcatcher, R.I.C.A. Tale - Pt. 4",get content(){return ui}})}const mi=`The drive was a blur, headlights and streetlamps lurched out from the darkness then faded back into the night. The whole trip was poorly recollected. K attempted to piece the fragments together, twisting and stretching Mitchell’s mind.\r
Sounds overlapped, the sky flashed. Memories bled into one another, spilling together until it all came to a sudden halt. He was stood by a battered car, stuck in the mud deep in the forest. Toby and Elise were rummaging through the boot.\r
Mitchell was shoved from behind.\r
“Continue,” K ordered.\r
Elise moved from the back of the car and approached him. In her arms she cradled a wooden rifle. The carved stock curved gently upwards and gave way to a long black barrel, topped with a large magnified scope.\r
“This was Siobhan’s,” she handed him the weapon, “don’t you dare miss that shot.”\r
Toby joined them, a pair of bolt-cutters hanging from his hands. He gave them only a nod, and the team moved into action.\r
\r
Mitchell followed Toby through the woods while Elise moved in the opposite direction. The ground grew steeper, and soon moonlight could be seen streaking through the trees as they reached the edge of the treeline. Toby stopped at the threshold, ducking behind the tall grass ahead of them. They were soon to be at the top of the hill, upon which stood a small metal shack with a signal tower nearby.\r
He scanned the area. “I don’t see much security, they’re not expecting anyone to approach. You could check the building a bit better with that scope.”\r
“Well who would approach a signal tower?” Mitchell pulled the rifle down from his shoulder and held it up, placing his eye to the scope.\r
“Exactly, and besides, ‘the bigger they are…’” Toby chuckled.\r
“I think I see a guard at the door, doesn’t looked armed though.”\r
“We can deal with him. Let’s go.”\r
\r
They split up and moved slowly through the grass, each arcing up and towards the building. A light wind glided over the hillside, the movement of the grass masking their trails.\r
Mitchell was almost at the building when he heard a sudden clatter. He lifted his head slightly and watched as Toby leapt from the grass and ensnared the guard. A black cloth quickly engulfed the man’s face as Toby pulled it taut behind his neck, slowly bringing him to the ground.\r
Toby looked around before gesturing for Mitchell to approach. They moved to the door. Toby brought the bolt-cutters to bear and clamped them down onto the padlock, cutting clean through.\r
The door swung open and they rushed inside. Large monitors lined the wall from end to end. Dozens of graphs and meters, a column of patient files, and a map of the town in the valley below. A lone man was stationed at the desk. He swung to face them in shock.\r
Mitchell raised the gun, “don’t move.”\r
Toby ran over to the man and questioned him, “where’s the alarm?”\r
“What?” the man replied.\r
“How do I trip the emergency alarm that calls in the company?”\r
The man pointed to a small covered button on the underside of the desk.\r
“Thanks.” Toby said before promptly knocking him out with the back of the cutters.\r
On the right side of the room was a raised bed not dissimilar to those Mitchell had formerly used in the EverLucid booths, yet this was less refined — with sharp corners and visible welds, and a bulky headset with dozens of thick cables protruding up to a box bolted to the ceiling.\r
Toby climbed onto the bed, “alright, strap me in.”\r
Mitchell lowered the headset onto him and tightened it accordingly.\r
“It’s been six years since I was in one of these.”\r
“Twice is a lot better than my hundreds.”\r
“Once was always too much.”\r
Mitchell walked over to the nearby pedestal and activated the screen. He flicked through  the buttons until finding a long list of parameters. “What did Siobhan say we needed again?”\r
“The ‘depth’ setting mostly. Just crank it all though, I’d like to go out with some style.”\r
Mitchell turned each parameter up to its maximum value. “You ready?”\r
“Hit it, I’ll see you on the ‘flip-side’ or whatever they say.”\r
He activated the headset. A blinding flash emanated from beneath the visor. Toby screamed out and his body writhed, before just as quickly he fell back to the bed completely limp.\r
\r
Mitchell turned to the desk and the wall of screens emanating their blue glow upon him. A large map of the village below covered the centre screen — with a status marker on each house. To the left, dozens of panels corresponded with each of the markers. The panels were labelled with various terms to do with M.C.E.T. technologies.\r
A few of the status makers had turned red. He watched as another one flicked from green to crimson, and another. To the right — a wall of camera feeds displaying the surveillance placed throughout the village. A bright flash appeared on one of the feeds, and he saw Elise standing at the foot of a church tower, a flare in her hand. A small crowd of dazed onlookers was starting to form around her.\r
He moved to the keyboard and began manipulating the interface. He searched its menus, trawling through the cryptic options. He turned off every controllable technology he could find, until eventually every house on the map was red, and the numbers in the crowd grew.\r
Mitchell slammed his hand against the alarm underneath the desk, and exited the shack — taking one final glance at Toby’s lifeless body before shutting the door behind him.\r
\r
The wind had grown stronger atop the hill. He found a rock jutting out from the grass and laid himself upon it. Numerous windows were now lit across the village, and a plume of red smoke rose from the church.\r
Taking the rifle down from his shoulder, Mitchell put his eye to the scope and peered down upon the village centre where Elise stood. Through the small and warped lens he could make out the movement of her mouth as she made her speech to the gathering village folk.\r
He looked up from the scope and towards the night sky. He watched as the dark clouds rolled past, and strained his eyes to catch every glimpse he could of the stars beyond them.\r
“It’s almost perfect isn’t it?” A voice suddenly appeared beside him.\r
Mitchell nearly fell from the rock. He instantly felt the hazy feeling of his dreams creep back in. He turned to see K standing in the grass next to him.\r
“It turns out,” K continued, “that the final ingredient to creating a dream that is truly indistinguishable from reality is simply removing all knowledge that one is within a dream.” The world was frozen around them. “That includes subconscious retention of course. Throughout this interrogation we’ve been pulling the strings in your mind quite a bit — the moment I’m gone we’ll remove any and all information about me and you’ll be back to re-experiencing these moments of your life. When I return as I am doing now, we need only reintroduce the information of my existence and the brain is able to adapt quite readily.”\r
Mitchell realised he could not move.\r
“It’s a shame we cannot yet put the process to market. It has some rather significant side effects — akin to a lobotomy. There are some… similarly apparent gaps in your recollection already however. A few possibilities present themselves: the first, is that your mind was simply deteriorating already. After your thousands of hours in our headsets it would hardly be a surprise. The second, is that our tampering has been more severe than intended; but I highly doubt that — our technicians are very experienced.” He turned to the shack behind them. “The final option, is that by some manner — likely Siobhan — you discovered this capability beforehand and have already utilised it, would that be so?”\r
Mitchell could not speak.\r
K chuckled. “Do not worry, were it so you would have no recollection anyway.” He walked away, disappearing into the grass.\r
\r
The low whirr of a helicopter’s blades could be heard rapidly approaching in the distance. Mitchell pressed the rifle to his cheek and looked down the scope once more. The flare in Elise’s hand was beginning to die down, yet crowds around her had grown vocal, and their chanting could be heard down the valley.\r
He waited until the helicopter was nearly overhead, the grass swaying wildly beneath it. Carefully he lined up the cross on the scope to cover Elise’s head, moved it a few notches to up and to the left to account for wind and distance — and fired into the night.\r
`;function gi(e){se(e,{name:"The Secret to Lucidity",subtitle:"Project Dreamcatcher, R.I.C.A. Tale - Pt. 3",get content(){return mi}})}const wi=`For the third time Mitchell awoke in his apartment. He saw K pacing across the room shuffling through various papers, discarding many of them until only two remained.\r
“Subject-1043CAL4 — Elise Caldera, Long-term Dreamscape Generation Trail.” K chuckled. “We had her in that headset for four years. She was the daughter of a former researcher; when her mother threatened to leak company secrets—” he paused and looked Mitchell in the eyes “—well, we had to clean up. But she never did tell you any of that, did she? No, let’s take a look at what she did say.”\r
\r
Mitchell exited the car and followed Elise to the beach. The cold ocean air swept over them both, and a burning sunset could be seen on the horizon. He had been working for Siobhan for a month now, and had become quite fond of the position. The forest was a kind of tranquillity he had never even conceived of. It lacked the excitement of most dream programs, yet every image and sound he perceived in that cabin was sharper and clearer than any fantasy he had ever experienced in a dream.\r
“We’ll wait for the others here,” Elise said, and the two sat down on a rock. “Siobhan tells me you’re from the city.”\r
“Yeah, I never really used to leave before I got this job.”\r
“Why not? Too busy?”\r
“Well I usually just rented out the cubicles at EverLucid, never had a reason to travel when I can just hop into my dreams.”\r
“Never even went to the park?”\r
Mitchell paused, “I don’t know where they are to be honest.”\r
The waves sputtered and rolled their way up the sand. Mitchell could see Elise’s leg trembling. She realised he had noticed and quickly rummaged through her pockets to find a bottle of pills.\r
“You remind me of someone I knew, back when I lived in a city too.” She shook a pill onto her hand and swallowed it.\r
“Oh yeah?”\r
“Yeah, he was an interesting guy, always had plenty to talk about. I worried about him though.”\r
“Why’s that?”\r
She sighed. “Just didn’t take care of himself, that’s all. One day he seemingly just dropped off of the face of the Earth, never saw him again.”\r
Mitchell looked out at the ocean. He watched as a flock of seagulls twisted and turned through the air, the patterns of their motion mesmerising him slightly. He felt as though the hazy atmosphere of his dreams was beginning to creep in. He turned to Elise again and tried to shake off the feeling.\r
“Where do you live now?”\r
“A village, not far from here.”\r
“You know, I just thought — I haven’t actually been using those cubicles that much lately. Do you have them in the village? I’ve heard things are pretty rough in the country right now.”\r
“There’s a few, and it’s not so bad.”\r
“Do you use them?”\r
“No.”\r
The thud of car doors could be heard behind them. \r
Elise turned and stood up. “That’ll be the others.”\r
Mitchell spotted Siobhan approaching them on the beach, a man walking alongside her. They greeted one another and the man outstretched his hand towards Mitchell.\r
“Toby, nice to meet you.”\r
Mitchell shook his hand, “likewise.”\r
Siobhan spoke, “Let's get a fire together before it gets too dark.”\r
\r
Night soon arrived, and the four of them stood around the small hastily constructed fire-pit. Mitchell had not seen night beyond the city. It was quiet, and the air was cool. Every sound was sharp and seemed to carry itself effortlessly; the crackling of the fire, the waves gliding onto the shore, the shuffling of shoes in the sand.\r
“So, Mitchell,” Soibhan interrupted the silence. “I’ll admit you’ve adjusted to the job faster than I expected. We took in some other city folk before, they didn’t last much of a day or two in the cabin.”\r
“I’m hardly surprised.” Mitchell replied, again reflecting on the shift in his lifestyle.\r
“Despite that there is one thing you seem to have in common with the others.”\r
“What’s that?”\r
“Not one of you has ever questioned the work.”\r
Mitchell’s eyes opened wide. He looked at Toby and Elise, then back to Siobhan. It suddenly felt as if all three of them were interrogating him.\r
“Well, do you want to know?”\r
“Okay?”\r
“This is something you need to be certain about.”\r
He struggled to understand but agreed nonetheless. “I want to know.”\r
“Eight years ago, you finished school and applied for your first job…” She began listing the details of every job Mitchell had ever worked. The dates of his employments and terminations, the schedules he followed at each company, the specific nature of each job itself — all of which were remarkably similar to one another, even more so than Mitchell had first realised. “…and finally, that brings us to the present. Each of the companies you have worked at previously were all owned by EverLucid.”\r
Mitchell thought he could see the distinctive white suited body of K standing behind Siobhan as she spoke.\r
“Each company was situated close to an EverLucid building, and each one offered you practically meaningless work. The perfect customer.”\r
“The perfect customer,” the phrase rang out in K’s voice.\r
Siobhan continued, “meanwhile in the past few days with us,” she reached into her coat pocket and retrieved a small USB-stick, “you’ve helped us to collect and analyse EverLucid signals,” she held the device with outstretched arms “and now, we have a key — and we want you to help us use it.”\r
\r
***\r
\r
Mitchell was awoken by a scream. The howl echoed throughout the bunker, and he heard footsteps rush past his door. He carefully left the bed and ventured out into the concrete hallway. The hatch was open, and moonlight poured in through the shaft.\r
Ascending the ladder he found Toby standing amongst the trees, barefoot and shirtless. Mitchell’s feet shuffled through the leaves, alerting him.\r
“Sorry, did I wake you?”\r
“I wasn’t going to sleep much anyway.”\r
“The beds aren’t great but you get used to them. At least we’re just commandeering, I’d hate to be stuck down there during a war.”\r
Mitchell walked to stand beside him. “How’d Siobhan find this place anyway?”\r
“There’s tons of them, all up and down the country. She just picked one and did some tinkering to remove it from the records — the digital ones at least.”\r
“I thought she didn’t like computers?”\r
“No, not anymore, just radios now.”\r
The clouds were thin on that night, and looking up Mitchell could see stars glittering from through the canopy. “Was that you a moment ago? Have a nightmare or something?”\r
“Something like that,” he paused, “did Elise tell you yet?”\r
“Tell me what?”\r
“I guess not then. The two of us were forced into EverLucid testing programs. She was already there when I was brought in. My brain rejected their tech though, didn’t work on me for whatever reason. I took my chance and made a run for it. I found her and some others on the way, tried to break them all out but it was only me and her that made it.”\r
“What were they testing on you?”\r
“Me? No idea. Elise? You better ask her.”\r
\r
***\r
\r
“Twenty years. I dreamed my life right into my forties. I remember sitting down for dinner one night and all of a sudden I was strapped into a bed in a dark room hearing  gunshots coming from the door.”\r
Mitchell noticed that Elise always walked with an absent minded stride. Her steps would linger and were of uneven lengths. The two of them were returning to the bunker following a day in the cabin. They came to the site, and brushed away the leaves on the forest floor to reveal a large concrete hatch.\r
Adorning the inside of the ladder shaft was an emblem depicting three eyes encircled by rays of sunlight. The first eye was halfway obscured, the second crossed on its pupil, and the third gazed into a twirling spiral. R.I.C.A. — the name of the organisation carved into the concrete just below the symbol.\r
Mitchell remembered the pledge he took. It was handed to him on a black and white cloth from which he read the words:\r
\r
I HAVE LOOKED BEYOND THE SLEEPLESS FACADE.\r
I WILL PLUNGE MYSELF INTO THE DARKNESS.\r
I WILL NOT BE MEASURABLE.\r
I WELCOME THE KNOWLEDGE THAT I WILL BE FORGOTTEN.\r
I WILL BE THE BRIGHT UNBEARABLE NIGHTMARE THAT AWAKENS THE SLEEPERS.\r
WHEN I AM DONE I WILL REST IN DREAMS MY OWN.\r
\r
Throughout the world were the various cells of this organisation. Siobhan was of course the head of this particular cell.\r
“Welcome back.” Toby greeted them as they descended the ladder.\r
“Everything set?” Elise replied.\r
Siobhan entered the room, “the tests went well, we’ve got what we need,” she sat down, “so Mitchell, are you ready to hear how we plan to bite history’s largest corporation?”\r
`;function pi(e){se(e,{name:"Breaking Layer One",subtitle:"Project Dreamcatcher, R.I.C.A. Tale - Pt. 2",get content(){return wi}})}const yi=`The sun had not yet risen on that Autumn morning. Mitchell was awoken by the clattering of a letter through his door. The sound reverberated through the slightly damp air of his one room flat. He dragged himself out of bed. There was no need to turn the lights on — the residual glow of the city cut through his curtains. He heard some sirens in the streets below. The time was seven in the morning.\r
Opening the envelope he found a short letter from his employer which detailed the premature termination of his contract with the company. The letter detailed the various reasons for this decision, yet he paid no attention to this. He found some clothes that appeared clean enough and grabbed a breakfast bar from the cupboard. He did not bother to lock the door after leaving the flat.\r
He stepped onto the elevator on the twenty-first floor, and a minute later arrived at the ground floor lobby. Immediately he was greeted by the sound of advertisements blaring throughout the streets; the glass door intended to keep the lobby quiet had been shattered some years ago.\r
It was busy on the roads even at that early hour. It was busy at all hours. Mitchell wondered to himself as to where all these people were going, he pitied them even — the thought of spending so much of his life stuck in traffic, truly unfathomable.\r
Of course, were he still employed he would have been supposed to have been on a bus by now travelling across the city to sit at his desk and write data prompts all day long. He would have been watching the small ticker in the corner of his monitor track the percentage improvements he was making to the model: 0.0001%, 0.0002%, and so on.\r
While he was employed that was supposed to have been his week, but it seldom was. He would only work once or twice a month — earning himself just enough money to buy two energy bars each evening; one to eat for dinner, and one to eat in the morning. As with every other worker, his real contribution to the company’s product was so low that it hardly made a difference as to whether he showed up or not. Even so, it was only a matter of time until the system caught on and ousted him.\r
He came to the boulevard, one of several that had been recently constructed throughout the city. A sign hung over its entrance: EverLucid Developments, and on either side were large digital billboards displaying headsets against bright white backgrounds. There were no words on either of these screens, as the small symbol of a sideways crescent moon was all that was needed to communicate their meaning.\r
He walked to the building at the centre of the boulevard. The same symbol was adorned in the very sandstone above its entrance, its presence like a great eye looming over visitors. Inside was a large white room, with cool air and quiet ambience — almost like that of a hospital lobby. This was despite the large crowd, which was huddled in a mass around the main reception.\r
Mitchell retrieved a small purple card from his pocket and held it in the air.\r
“Excuse me, sorry, priority pass.” He raised his voice slightly and the crowd opened to reluctantly let him through.\r
The receptionist recognised him instantly, and gave him a quick wave as he approached.\r
“Hey Mitch, how you doing?”\r
“Well, the bots finally saw what I was up to at work. Doesn’t matter, I’ll just nab the same thing somewhere else.”\r
“Man, what are you on now? Job four? Five?”\r
“Six probably.”\r
“Sheesh, well anyway what’ll it be? Just your usual?”\r
“Yeah, twelve hours. I’ll grab my dinner at the end.”\r
“Sure thing.” The receptionist hit a few keys at his computer, and printed a small ticket which he handed to Mitchell. “Booth five, twelve hours.”\r
“Thanks.”\r
“No problem, enjoy your stay with EverLucid.”\r
Mitchell wormed his way back out of the crowd and made for the booth. It was even quieter in the hallways, with only the soft whirr of computer fans filling the air. Doors lined the sides, each labelled with large bold numbers. He scanned his ticket at the door, at which point he noticed the price had increased by a few pence.\r
The booth was just like the rest of the building. Pure white walls with rounded corners, and an almost seamlessly integrated air vent in the ceiling. In the centre of the booth was a bed that was raised and shaped in a clinical fashion, below which was a circular strip of light that illuminated the room in a slightly warm glow. Above the headrest was a sleek white headset attached with an adjustable mount.\r
He laid himself down on the bed, and hinged the headset over his eyes. The lights dimmed and shifted to a purple hue. He closed his eyes, and fell instantly into a deep sleep.\r
\r
***\r
\r
Mitchell did not dream. He awoke once again in his flat. Checking his phone — it read seven in the morning.\r
The door handle turned, and in stepped a tall thin man. He wore a long white lab coat which was buttoned from the waist up, along with white boots, and a pair of white trousers. A plastic helmet covered his head, yet it was shaped so closely to its contours that one might have thought the man himself to have a plastic head. It too was a matte white.\r
“What a miserable set of scenes that was,” the man said with a sharp and nasal voice. “And of course that made you the perfect customer.”\r
The man approached slowly, his footsteps ringing loudly against the hard laminate floor, and Mitchell realised that the city had gone silent. He looked up in horror at the white figure.\r
“You’re dreaming, Mitchell. Everything you just experienced happened three months ago, you’re only reliving the memory.”\r
The questions poured through Mitchell’s brain.\r
“You are currently under legal custody of the EverLucid Corporation. Your real body is in a secure facility in an undisclosed location, where you are currently strapped into a headset which is currently giving you this exact dream.”\r
“Why am I here?”\r
The man knelt by his bedside. He spoke drily. “You are a terrorist Mitchell. Of course you don’t know that right now — we’ve put those memories away for the moment — but nonetheless that is what you are and I’m here to find out how that happened.”\r
“You’re an EverLucid employee?”\r
The room shifted. The walls folded outwards and suddenly the two of them were in the boulevard — the EverLucid building towering above.\r
“Yes, Mitchell,” the man continued, “and for the duration of this interrogation you may call me K.”\r
K snapped his fingers and time froze around them.\r
“So, you lost your job — no big deal to you, you were intent on simply finding a new one. Not exactly an uncommon way of life in these times, far from uncommon actually. Yet something happened this time around and you never did get that new job, at least not as we might have expected.”  The world shifted again, and the two of them were placed back inside the small white booth. “So let’s take a look at what that might have been, shall we?”\r
The lights flickered, and suddenly Mitchell was back on the bed. He was not visibly strapped in, yet he could feel the tightening of buckles around his body and limbs. White faded to purple once more, and again the headset descended upon him — sending him further into the dream.\r
\r
He felt a soft breeze against his cheeks, and his hand brushed against tall grass. Mitchell opened his eyes to find himself at the centre of a large field. A dirt path stretched ahead of him. His phone buzzed in his pocket, he opened it to see a message from an unlabelled number that simply read: “9:00, don’t be late.”\r
He tapped the message and checked back through the conversation, discovering that this unknown person was offering him a job — and they had requested to meet in the forest. The time was twelve minutes to nine.\r
He continued down the path, crossing the threshold into woodland. It was an overcast day, and a constant dampness permeated the air. The path terminated in a small clearing — at the centre of which stood a woman. She was dressed in a long black coat.\r
“Are you Mitchell?” She called out upon noticing him.\r
“Yeah, are you the weird number on my phone that’s offering me a job?”\r
The woman put her hand out, Mitch shook it hesitantly. “Yes, my name is Siobhan. Come with me.”\r
He was led to a small wooden cabin. Jutting out from the roof was a tall metal truss that held an antenna at its top. Soibhan brought him inside, revealing the cabin to be packed with black boxes covered in dials and fluorescent screens.\r
She pointed to one screen in particular. It displayed an erratic waveform that was punctuated by sudden bursts of loudness.\r
“The job is simple,” she explained, using a pencil and paper to demonstrate, “I need you to sit here and record the time of each of these blips on this sheet.”\r
“That’s it?” Mitchell asked.\r
“That’s it. Give it a go for a few hours, I’ll come back at midday. If I’m happy with the results you can have the job.”\r
Siobhan promptly left without elaborating further. Mitchell sat and recorded the data as he was shown. The work was monotonous, yet he enjoyed the sounds of the forest around him. It had been many years since he had left the city.\r
\r
Siobhan returned exactly three hours later. She inspected the roughly four sheets Mitchell had filled in that time.\r
“Good.” She folded them up and stuffed them in her pocket. “You want the job?”\r
“Yeah?”\r
“It’s yours then. Let's get you acquainted with the team.”\r
Mitchell expressed some confusion — the lack of a contract in particular — yet Siobhan simply brushed off his concerns. They walked out the door together, and made their way deeper into the woods.\r
`;function bi(e){se(e,{name:"Radio to the Dreamer",subtitle:"Project Dreamcatcher, R.I.C.A Tale - Pt. 1",get content(){return yi}})}const vi=`The digital clock positioned at the head of the bus read five minutes past midnight. There were two people on the bus that night. The driver was accustomed to such shifts, yet nonetheless a weariness persisted upon him. Tonight however he was a content man, for the lone passenger had tipped him substantially.\r
The passenger sat at the back of the bus in the single seat that looked directly down the aisle. Wedged between the seats of the row in front of him was a large suitcase, upon which he had placed a laptop. The man scrolled absent mindedly through various articles, his leg twitched restlessly yet he was not anxious - he simply disliked remaining seated for a prolonged period of time, and he yearned for his upright desk.\r
It was a still night. This particular region of the city saw little life at these hours. At some point — perhaps an hour or thirty minutes ago — a threshold had been crossed, and where formerly there were youths and bars and clubs, there were now rows of old buildings where bankers slept soundly on the top floors.\r
The bus came to a stop.\r
“East campus!” The driver called out.\r
The passenger closed his laptop and pushed the suitcase free. He stood up and removed the unused plane pillow that was wrapped around his neck, clipping it to his backpack (which he had also worn for the duration of the trip). He wore poorly fitted jeans and a grey shirt. Trundling his way to the front of the bus he thanked the driver before stepping off.\r
\r
The man walked towards the gate ahead of him. It was inconspicuous, placed between two white concrete pillars with only a small metal plaque to denote the institution it belonged to. The building cantilevered over him, its slanted bare walls and black windows sitting somewhere in-between brutalism and modernism, though lacking the thought provoking qualities of either. He pulled his phone from his pocket and deftly typed out a message. A few moments later a buzzer sounded, and he was able to push the gate open and let himself inside.\r
Crossing through a short tunnel that cut through the bleak facade, he came to a large square courtyard. A multi-tiered fountain stood at the centre of the construction, its delicate sculptures and careful proportions might have made an impression; however it was dark, the fountain itself was turned off, and the man to whom it was bearing witness — simply did not care.\r
The courtyard was an architecturally sealed region. The outer walls sloped inwards, and were it not for the effects of light pollution blotting out the stars, then one might have been forgiven for thinking themselves in the middle of the countryside, far away from the city.\r
Only a single light was illuminated then, a small bulb that sat above an insignificant looking door on the other side of the grass. The man made his way to the door, and entered the building.\r
\r
“This is it!” An agitated voice could be heard echoing down the dimly lit hallway. “They’re going to pull our funding. In nine hours — less than nine hours — the director is going to walk into this room and see that we have achieved practically nothing in four months, and he’s going to pull the plug!”\r
The man stepped into the laboratory. Fluorescent lights stung his eyes, yet as he adjusted to the conditions he saw a small group of people come into view. There was one man with his head against a desk, presumably sleeping, with his oily hair drooped over his face, wearing clothes that appeared as though they had not been washed in several days. Another sat at a counter, struggling to stay awake — he rubbed his red ringed eyes fruitlessly and continually readjusted his glasses. A woman stood leaning forward on a table, her head propped up precariously on her hands.\r
In front of him was another man, evidently the one who had been shouting frantically moments before. His glasses sat crooked on his nose, and his shoulders were bowed heavily forward — yet he could not have been older than thirty years of age. He stood panting, exhausted from his outburst, and struggled even to lift his head enough to face the man who had just walked in.\r
“Who are you?” He said.\r
“Sam Miller, you let me in five minutes ago.”\r
“I did?” The dishevelled man trundled over to the nearby table and checked his phone, “Oh, so I did,” he looked Sam up and down, “right, you’ve just flown in from—?”\r
“California.”\r
“Long way to come,” he rubbed his eyes, “sorry, I’m Dr. Browne. My colleagues are Dr. —, Dr. —, and Dr. Caldera.” He gestured to each of the other researchers: the first man, the second man, and the woman respectively. “I’m sure you heard my outburst earlier — which I do apologise for — but as you can see we’re really at our ends right now.”\r
“Well I didn’t fly eleven hours to come out of this empty handed. Have you got any kind of neural network set up already?”\r
Dr. Caldera joined the conversation, “yes, but it’s quite rudimentary and hasn’t given us any meaningful analyses at all.”\r
“How quickly do you think you can run me through your API?”\r
“An hour, perhaps.” Dr. Caldera replied.\r
“Then let’s get to it.”\r
\r
***\r
\r
The night bus was packed with passengers. All of them were quiet, most of them scrolling on their phones, some looking blankly out the windows — lost entirely within their own thoughts.\r
A series of large white banners showcased various devices back-dropped with subtle purple lights. They were hung up on the old residential flats, strewn over the windows below — blocking out the sunlight for all but the top rooms. The old sleeping bankers now laid in the ground in a cemetery some distance from the city.\r
“East Campus Street!” The driver called out as he pulled up to the stop.\r
The passengers flooded out from the bus. He remembered the day — almost a decade ago now — when a strange man with a heavy suitcase tipped him double the price of the ticket to be taken to this very street. He remembered how that man disappeared into the cold white building at the same hour as the passengers he was transporting now.\r
Nine years ago that building showed hardly a single sign of life inside; today its frosted windows glowed brightly over the streets below.\r
The bus emptied and the driver set off once more, ready to pick up the next round of passengers sure to be waiting throughout the city, and in his wake he left one of the many small mobs that were to travel to that street each night.\r
A crowd of weary peoples, waddling into the central consumer facility of the corporation known as Ever-Lucid.\r
`;function ki(e){se(e,{name:"Pandora Was a Man From California",subtitle:"Project Dreamcatcher, Prologue",get content(){return vi}})}const Ci=`A figure stands squint in the doorway of the 7th Street bar (which was actually on Mirror Lane, yet self-failingly refused to give itself up to sentimentality). A scarf had been draped over her left shoulder, offset to such an extent that one questioned if she truly wanted to wear it in the first place — its colour muddied under the neon signs above.\r
It was not a cold night, in fact she had even dawned a short sleeved shirt — one side of the collar poking out from the tightly wrapped scarf — which one could infer was red itself owing to the vibrancy with which it glowed.\r
Over her right shoulder was the strap of a guitar case, a large black rectangular box on which she leaned — and which no matter how many times it began to slide down her arm, she refused to wear with both shoulders.\r
Passersby walked in front of her (it should be noted that there was evidently a major presence within 7th Street, for loud music rang out from the doorway — yet for as long as the girl stood at the entrance, not a single soul left or entered the establishment).\r
Those that passed from her right paid her no attention — she was a spectre to them, a part of the building’s facade itself. Those that passed from her left were more attentive. Some of them swerved to avoid her, others were drawn so much to her that they appeared to lean sideways as they attempted to pass.\r
\r
The night stood still. The girl barely stirred, each movement she made was slow and methodical. \r
A bird landed on the road ahead. The girl moved. She walked out onto the tarmac to greet the avian — just as the headlights of a vehicle came barrelling down the road.\r
\r
A figure stands tall in the doorway of the 8th Street bar — on the left side of Mirror Lane.\r
`;function Mi(e){se(e,{name:"Definitions",subtitle:"2025",get content(){return Ci}})}const Ti=`The sun hung low over the city as Ralph walked down its narrow cobblestone streets, a long shadow cast ahead of him. He ascended a stairway, and the low rumble of an explosion in the distance rushed through the air. The townspeople came rushing from their doors to view the source of the disturbance.\r
Only a dozen miles from the city walls, a plume of smoke could be seen rising from a nearby village — the signature blue flare of the revolution climbing alongside it. Gasps of horror could be heard amongst the crowds, and a loud horn was sounded to signal the beginning of curfew. The city was under siege.\r
\r
Ralph opened the front door to his home and stepped inside to see his father looming over him. He had walked at a leisurely pace while the masses rushed around him.\r
“Where have you been?” his father inquired angrily.\r
“I went for a walk.”\r
“A walk? We are at war! The enemy will be at our gates before sunset. You’re coming with me to the command bunker.”\r
“No I’m not.”\r
“What do you mean you’re not?”\r
“I’m staying here.”\r
The two argued for some time, yet Ralph could not be swayed. His father was a General in the King’s army, and duty called.\r
\r
With his father departed, Ralph spared no time in removing the royal lapel on his collar. He ran up the stairs to his room and retrieved a box hidden under his bed. Inside were a few books banned by the King, and a blue armband emblazoned with the symbol of the revolution.\r
He was about to put the armband on when he glanced up at the photograph of his mother framed atop his bedside cabinet. He decided to tear the armband down the middle, leaving only half of the symbol remaining before putting it on.\r
\r
***\r
\r
Planes flew overhead and bombs rained down upon the buildings. The sky erupted with the constant bursts of flak and shells.\r
Ralph lifted a chair with both arms and hurled it at the small window in his room. He crawled through the shattered glass and sat upon the slanted roof as the fiery light of the sunset washed over him. Towards the centre of the city was the Royal Palace. Ralph watched the artillery placed atop its tall white walls fire shells that arced through the air and came crashing down on the invading force.\r
It wasn’t long until the city defences were breached. Using a pair of binoculars he had stolen from his father he watched the revolutionaries flood through the gates and down the city streets while the King’s soldiers scrambled to maintain a perimeter.\r
Blue flares rose across the city. Guerrilla fighters emerged from hiding and former loyalists defected to the new oncoming authority.\r
A loud banging came from downstairs, then the clatter of a wooden door being smashed open.\r
Ralph glanced down at his torn armband as he heard footsteps come rushing up the stairway and the cold barrel of a rifle was pressed against the back of his head.\r
\r
“Turn around, slowly.”\r
Ralph stepped down from the roof and backed in through the smashed window. He turned to face the soldier.\r
The soldier inspected Ralph. He could see the boy was well dressed, with cotton trousers and a black cardigan atop an off-white shirt. To the soldier, it was the stereotypical dress of the loyalist — an everyday prison culturally imposed by the regime. He saw however, the absence of the royal lapel, and the presence of the torn armband.\r
“Why is your armband torn?”\r
Ralph looked at the soldier. He was young, wearing a simple uniform that was clearly once well made but now tattered. He had large bags under his sunken eyes and a scar across his lip. “My mother was killed by one of your attacks.”\r
The soldier’s grip on his rifle faltered, the barrel drooped momentarily. He was panting heavily, and flinched at the sound of every explosion outside. Ralph had no such reaction.\r
“Who do you support?”\r
“Not the king.”\r
“And the revolution?”\r
Ralph sighed, unbothered by the barrel pointed at his face. He lowered his arms and turned back to step out onto the roof again.\r
“Hey! what are you doing?” the soldier raised the rifle as if to aim, yet his hands shuddered.\r
“You’re not going to shoot me.”\r
“Yes I will!” The gun was now visibly shaking.\r
“No you won’t — why did you sign up to fight?”\r
The soldier thought of making further threats, but decided to answer instead. “My parents were farmers, the King taxed our crops during the last drought. My parents fed me the little food we had before they starved to death themselves.”\r
“So you’re fighting for their memory.”\r
“I’m fighting so no one else has to bury their parents like I did.”\r
“Sure.”\r
“What do you mean ‘sure’?” he steadied his grip on the rifle and pressed it into Ralph once more.\r
“I’ll shoot! I swear I’ll shoot! Why are you even on the roof? Where’s your father? Did we get him too? Was he a loyalist?”\r
“Look, how old are you? What’s your name?”\r
The doubt crept back into the soldier’s mind, again his weapon began to shake. “I’m seventeen, my name’s Terry, what does that matter?”\r
“I’m sixteen, Terry! Sixteen! My name is Ralph, we could have been friends in a school together — but no, here we are pointing guns and shouting at each other and calling it the fight for freedom!”\r
Terry saw for the first time the youthfulness of the face in front of him. He dropped his rifle. An explosion shook the building, yet the two boys stood unshaken and stared at each other in silence. Eventually Ralph turned again and sat back down on the roof.\r
“Can I sit with you?” Terry asked. Ralph gave him a weak nod and he crawled through the broken window to sit next to him. They sat together on the red tiles with tucked knees as a soft breeze blew through their hair. Gunshots echoed below. From the roof it seemed almost like a normal day, but with gunfire instead of crowds.\r
“My father is a General in the King’s army.” Ralph muttered.\r
“Is he tough?” Terry muttered back.\r
“Well, he couldn’t convince me to go to the bunker with him.”\r
“And?”\r
“And I think the city will fall.”\r
They sat in silence. A plane crashed nearby, a few houses went up in flames.\r
\r
The battle waxed and waned as both sides played their games of grand strategy. One army would retreat and the other would flood in to take their place, only to be gunned down by an ambush. The skies grew quiet again, as craters and flames now covered the city — the walls of the Royal Palace cracked and crumbling.\r
“We never had much fuel, it was hard to keep the fight going.”\r
“You never wrote enough — and we never read enough.”\r
Terry looked at him confused. Ralph shuffled back through the window, and returned a few moments later with a book. He handed it to Terry as he sat back down on the roof. It was dark now, and quiet once again. The skies had cleared and moonlight glowed over the city.\r
The book was old, the symbol of the revolution adorned its cover. Terry opened to the first page, the language was archaic and difficult to read, yet as he worked down the opening preface he soon saw that the book was dated to nearly a hundred years ago.\r
“I’ve never heard of this?”\r
“It’s banned. That’s probably one of the only copies left.”\r
Terry gestured to return the book, yet Ralph refused.\r
“It doesn't matter if the revolution wins, it doesn't matter if the whole royal family is slaughtered. One day someone is always going to be fighting for freedom again.” A flare rose in the distance. “We’ve already been fighting for as long as we can possibly know.” The artillery resumed firing. “I know I’m just some kid, but I don’t see how that fight is going to end here with some gunpowder.” Soldiers began pouring out of bunkers and into the streets, gunfire was exchanged once more. “I don’t think that’s freedom, I can’t see it; and I can’t understand why everyone fighting in this city thinks it is.”\r
“So what is then? How do we win?”\r
“We can’t ‘win’ — there is no ‘win’. Not in my mind and not in those minds a hundred years ago. We have to make freedom, we have to make it and keep it alive.”\r
Voices could be heard below.\r
“I wanted to flee once, but I couldn’t make my freedom in time.”\r
A gunshot rang out from directly beneath them.\r
“Now I’m sitting on the roof — the most ‘free’ I’ve ever been —”\r
Footsteps came rushing up the stairs.\r
“—and I guess it might be too late.”\r
Once more, a rifle at the back of his head.\r
`;function Ii(e){se(e,{name:"Freedom Is Not a Rifle",subtitle:"OYP 2025 Shortlist",get content(){return Ti}})}const _i=`The room was awash with a green glow. Leaving her bed, she dragged herself with heavy footsteps towards the window. That was the first morning she actually saw it. The ‘Ivy Cloud’ they called it. Tendrils of fallout from some distant nuclear conflict, stretching across the planet. Its emerald hue of altered sunlight, scattered by radioactive material, would soon be over her city.\r
\r
Dawn checked her phone. As expected, there was no longer any signal. She assumed that the approaching cloud, combined with the mass exodus of the city’s population, had finally crippled the infrastructure. There was a tight feeling in her chest, and her mind was restless. Her eyes dashed between objects. Reminders of the past scattered around her flat. A vine had crept down from a hole in the ceiling, and coiled itself around a picture framed upon the wall. It was a group photo taken with her friends on their final day of high school. Dated only three weeks prior to the current day. She packed what few supplies she had remaining into a backpack, and left the flat.\r
\r
She exited the building, and was met by the explosion of greenery that had engulfed the city. Despite the slow speed of the Ivy Cloud, the war was of such magnitude that it had blanketed the planet in an immediate low-level fallout. What followed, was a rapid increase in the growth rate of plant-life. Dawn set off in the direction of her old high school. She walked  through grassy streets and past buildings swallowed by roots. No longer was Earth the home of humanity. No longer, she thought, was the city her home.\r
\r
“Dawn! You’re here!” A young woman around her age called out with a thin voice from the entrance to the school.\r
“Carla, of course, we promised we’d meet here when—” Dawn looked to the cloud behind her. She moved to sit by her friend.\r
\r
Carla was sitting slouched against the wall, her face was sickly, her eyes were milky. With thin hands she held a flower that sprouted from a vine beside her. The vines. Carla was surrounded by a dense mass of ivy, roots, leaves, and all manner of twisting flora. All of it was a vibrant green — even the flowers.\r
\r
“I don’t think I can stay.” Dawn broke the silence between them.\r
“What?”\r
“The city, I think I need to leave; join the refugees and get out of here.”\r
Carla sighed deeply, “this is your home — our home.”\r
“It was our home,” Dawn grabbed a vine and tore it from the wall, “not anymore.”\r
\r
Carla took out her phone and began to scroll through her pictures. Memories of their past together. Their other friends who were yet to appear. She came to a photo of the whole group standing in the park together, and held the phone up to eye it side by side with where the park had been. Across the street, where now there was only a thick mass of woodland.\r
\r
“I’m in no state to leave,” Carla placed her phone on Dawn’s lap, “and anyway, I don’t think I’d get very far.”\r
Dawn attempted to ignore her words, but she could see what Carla was saying. “What’s this for?”\r
“Throw it away for me, will you?” Dawn moved to object but Carla put her hand up. “Photos aren’t worth much, really. I’ve got what I need in here,” she pointed to her head.\r
\r
Dawn stood up and threw the phone. She threw it far and hard, far and into the overgrown park ahead of them. She gave out a defeated sigh. “I’m sorry Carla.”\r
“Are you afraid?”\r
Dawn thought for a moment. “Yes, yes I am.”\r
Carla outstretched her arms, and Dawn moved in to hug her. “Alright, live. I forgive you.”\r
\r
She left Carla by the school. Only then did she again notice the strained feeling in her chest. Like her heart was being torn apart. Dawn did her best to ignore it, and began to make her way to the main street.\r
\r
“You going to join the group?” A man called out to her from what appeared to be the smashed window of a shop. He was difficult to make out; but she could see that he was wearing a uniform — tucked in shirt and black trousers  — and his hair was neatly combed back. “C’mon, I’ve got some gear that might help you out.”\r
\r
The man’s demeanour presented no malice, so Dawn obliged and jogged over to his store. As with everything in the city, the shop was overrun greatly with foliage. She could just barely read a sign plastered across the back wall: George’s Survival Gear.\r
\r
He returned with a set of walking poles, a compass, and various other pieces of equipment for Dawn.\r
“The grass is tall past the city, it’s almost impossible to see where you’re going.”\r
She held the compass and inspected the north indicator. A big red arrow to cut through the green seas. “I’m sorry, but I—”\r
The man cut her off and chuckled, “What am I going to do with money? They’re free to take.”\r
“Thank you, Mr. George. Although, aren’t you looking to get out of here too?”\r
“It’s just George, and no problem.” He turned to face the window. “I had left already before.”\r
“You came back?”\r
“Funny, isn’t it? It feels as though I’d spent my whole life preparing for a situation like this. I was ready for the survivalist life — you could say I still am, but the moment I stepped outside the city, it just felt wrong. I just knew I couldn’t leave.”\r
Dawn gave a puzzled expression.\r
“Sure, my shop is in ruins and everyone I knew is gone. But even still, I feel privileged. Privileged to have run the shop, and to have known those people for so many years.”\r
“But you’ll die if you stay here.”\r
“I know, and that’s okay. Because this city; it’s my home.”\r
\r
Dawn stepped outside and faced the cloud once more. By tomorrow at least, both Carla and George will have met their end.\r
\r
***\r
\r
She found herself agitated within the camp environment. It was set-up indoors, throughout the upper levels of a parking complex where the plant’s reach was minimal. Around her were the last of the city’s people. Those who had waited as long as possible before leaving. Those who did not truly want to abandon their town, yet feared death more than loss.\r
\r
The sunset had come, and once again was the city bathed in the emerald hue reflected off of the Ivy Cloud. It was time to go. She was to join the first group of more well-equipped refugees that were to forge a path for the others to follow in the morning. She grabbed her bag and made for the journey, leaving behind the final photo of her and Carla that she still held. “This is your home, I won’t take you from it.” She said to the picture before laying it down on the concrete.\r
\r
***\r
\r
Each step that she took past the city limits felt heavier than the last. Her heart pumped as if she were ascending a mountain, yet they walked through only low fields and wet plains. The group trudged slowly through the grass like a pack of pained animals fleeing from a burning forest.\r
\r
They passed hundreds of trinkets, items, photos — objects pertaining to memories, dropped by those who had left before them. She spied a truck nearby, poking out from over the tall foliage, and trekked over to it. She climbed the side of its frame and hauled herself onto its roof, standing atop it to see the city one final time.\r
\r
As her gaze fell upon the familiar skyline, a strand within her heart — the one which tied her to the city and that she wished to break — grew stronger. It was as if the Ivy Cloud itself had reached out to ensnare her, and it began to reel her in.\r
\r
Dawn dropped her bag. She dropped her gear. She dropped everything that would hinder the speed at which she could run back to the city. Back to her friends. She ran faster than her body had ever let her. She cut a trail through the grass, through the shrubbery of the streets, and directly towards the high school.\r
\r
There they were; her friends, gazing up at death above them. Dancing together, telling their final jokes, letting go of regrets. She ran straight to Carla and hugged her. Dawn attempted to apologise but Carla shushed her. “Welcome home,” she simply said.\r
\r
It mattered not what the city had become. It mattered not that each of them lay precisely on death’s doorstep. The city was not home, and it never was. Her friends were home — Carla was home. A black rain began to fall upon them, but as it hit her skin, Dawn saw it was green. All around her was greenery, and her heart finally felt at ease.\r
`;function Si(e){se(e,{name:"A Comforting Green",subtitle:"OYP 2024 Winner",get content(){return _i}})}const Ei=`Thomas stood by the assembly line as time slowed around him. His gaze was fixed on a watch that fell through the air just ahead of him. It was an artwork of a timepiece, using five separate hands to tell the hour in a system of fifteen divisions. Behind it, were the tall factory windows through which the smokestacks and churning streets of the city created a perfect contrast with the watch. A precision instrument of expression, back-dropped by the monotonous world beyond.\r
\r
It hit the floor and shattered into a multitude of glittering pieces. In the corner of his eye Thomas saw a man, swift in movement and cloaked in leathery brown, sprint across one of the upper balconies and throw himself out of the factory.\r
\r
Not a single other person had noticed. Neither the watch nor the escapee whom it had presumably been thrown by. Both went entirely unseen by everyone in that hall - except for him.\r
\r
He looked around for his supervisor — who was nowhere to be seen — and crouched down to face the debris scattered across the factory floor. He made one last check for the signature jingle of the supervisor’s embellished uniform, before diving under the conveyor belt to grab the debris. Frantically he tucked each piece into the pockets of his work overalls, then hastily pushed himself up to return to his post.\r
\r
“Seven—teen,” the supervisor grumbled out Thomas’ number the moment he stood up. She spoke with the air of eager disapproval.\r
“What are you doing?”\r
“Nothing, Ma’am.”\r
“Didn’t look like nothing to me, Seven—teen.” The supervisor leaned in, expectantly waiting for Thomas’ admission of guilt. Eventually, when he gave none, she leaned back and wandered off again. Her grumbling could scarcely be heard over the clatter of her uniform.\r
\r
Returning home that night, he stepped down from the cobblestone of the street and into his small apartment that was squeezed into the corner of a block. Seated on a low stool, he held the segments of broken watch close under a filament light. The sour yellow hue spilled unevenly over his work desk. Around him were the fruits of his labour — his labour: devices, mechanisms; bronze, brass, and copper inventions of all kinds, built from the various scraps he was able to sneak out of the factory. There was always excess, and Thomas knew that no one would be keeping track of waste.\r
\r
His hands almost shuddered as he worked with the watch. It was unlike anything he had ever worked with. The parts were finely crafted, slotting together perfectly, and producing a smooth and almost fluid-like motion in the hands.\r
\r
He was unsure where he had the design before, but he was certain he had. It was highly esoteric, and arguably pretentious; likely a statement of sorts by its creator, whomever that may be.\r
\r
A knock at the door. His hand snapped reflexively to the switch on the bulb and flicked it off. He took a small oil burner for light, an intentionally small and wispy flame. Upon opening the door he was met by a tall officer clad in an over-adorned uniform, the various medals and brass accents blackened by the reflections of night. Thomas did note, however, the presence of an unusual five-sided medal that stood out amongst the rest.\r
\r
He greeted the officer, who returned the formality yet looked straight over him and into the room.\r
"Any trouble, officer?" Thomas did his best to appear calm, despite the thumping of his heart in his chest - even though, to his knowledge, he had done nothing wrong.\r
"Routine inspection. There's much talk of rebellion in the streets, I'm sure you know." The officer continued to avoid eye contact, peering into the dark room with strained eyes. He walked uncomfortably, as if attempting to appear as the hulking symbols of the regime that the enforcers were known to be.\r
\r
Thomas knew what he was talking about. He recalled the night before; a plume of black smoke spilling out into the street as volleys of flintlock rifles fired at guerrilla soldiers hurling powder bombs and dynamite. The Enforcement Authority had sent wave after wave of officers to suppress the unrest.\r
\r
The officer unhooked a flashlight from his belt. It had a lopsided construction with a large fan jutting out of its side to cool the oversized bulb. Thomas held his breath as he illuminated the room and moved to inspect the various creations. Peering down at the designation on Thomas’ overalls, the officer smirked.\r
"I hadn't heard about a great inventor on the streets."\r
Thomas chuckled nervously, the officer switched off the flashlight and moved — rather hastily — to make his exit, turning to Thomas just before ducking to step out of the door,\r
“The authority—” he paused,  “—would suggest that you stay in line.”\r
\r
Not long after the encounter, Thomas had fixed the watch. He went to bed at seventy-two minutes past fourteen o’clock.\r
\r
Thomas walked down the cobblestone street in the early hours of the morning, when there was still clarity in the air before the smog fell upon the city. In its place, the sombre hustle of the great workforce that shuffled to their factory posts.\r
\r
The not yet polluted air afforded him the rare chance to look upwards, letting him catch a glimpse of a passing airship. A colossal craft furnished in fine woods and copious brass embellishments. As Thomas once read in a flyer he had found stuffed into a cracked brick in the side of a building: it was perhaps the greatest symbol of oppression ever conjured by the regime. Each craft a monolithic indulgence of the supposed wealth of the nation, under which we - the people - have no apparent choice but to cower in fear of.\r
\r
It was the wording of that passage which had allowed it to be lodged so thoroughly in his mind. “No apparent choice,” he whispered to himself, having stopped mid stride, staring at the patch of sky where the airship once was.\r
\r
Something hit him. A hand had shoved a rolled up poster into his chest, almost knocking him over. Two figures flew past him, the distinctive rattle of enforcer uniforms trailing them. He turned back to see a thin parting in the crowd, and a cloaked man running from two officers. It was the same cloaked man that he had seen sprinting out of the factory shortly after the watch had fallen in front of him.\r
\r
Thomas pulled the watch from his pocket. It took him a moment to comprehend it and convert the oddly structured time into that of the regular twelve hour clock. Realising he would soon be late to his post, he stuffed the poster into his pocket, and forgot about it for the remainder of the day.\r
\r
Under the yellow light of his work desk once more. Thomas placed the poster down and carefully unrolled it. Facing him then, was a large and vibrant print of another abstract watch. The exterior decorations differed greatly to the one he held, yet there was no mistaking the design itself - both watches were clearly of the same mechanical family.\r
\r
Scribbled in the corner of the poster, was an anonymous message addressed directly to him: Your inventions are marvellous. We could use a skill-set such as yours. Fixed to the paper, just above the message, was a pentagonal medallion - emblazoned with a bright pink paint.\r
\r
Like gears in his mind, the pieces clicked into place. Thomas clasped the watch in his hands. The decision was easy. He grabbed his work overalls, clawing at the label that designated him as just a number, and tore it clean off. He knew then exactly what the watch was, and from whom it came. Tomorrow, he would join their ranks. And soon enough, even the airships would fall in the face of the Pentadecimal Watch.\r
`;function Ai(e){se(e,{name:"The Pentadecimal Watch",subtitle:"2024",get content(){return Ei}})}const zi=`The robot was splayed out on the table. A ray of light shone through a grating in the upper wall of the basement and fell upon a heart shaped crystal in the machine's inner torso. It had no legs and its arms were delicately constructed stalks. Its head was skeletal, yet on it were attached two large blue eyes. On the back of its mechanical spinal cord was written “Aiden”.\r
\r
Oscar entered the basement and flicked the lights on. He walked towards the robot on the table and powered on the adjacent computer and its systems. “Good morning Aiden,” he said with the slight tone of questioning that comes with talking to an inanimate object. “Let's see how you’re doing, shall we?” again, with the same tone.\r
\r
It was Dr. Oscar Vida who had dreamed of developing the necessary knowledge of the brain to be able to quantify human sentience; it still couldn’t be understood, but it could be objectively measured.\r
\r
The system monitors flickered to life. Oscar took a cable and carefully lifted the back of Aiden’s head to make the connection between the machine and its mind; as Aiden’s body did not yet possess a processing unit, it was simply a vessel for expression. As the connection was secured, the blue eyes began to glimmer, the thin metal fingers began to move, and the crystal at the centre of the torso began to pulse like a heart.\r
\r
As many had predicted in the decades before, the rise of artificial intelligence had combined with the rapid development of robotics to produce a workforce of adaptive machines that had taken the place of humans in various industries. The key shortcoming of this AI however, is that it could only act and adapt based on the data it had been trained on, it could not think like a human and could not produce and execute ideas and thoughts like a human. The heart of Oscar’s dream and the difference between the machines and humanity - was sentience.\r
\r
Aiden’s neural network kicked into action. The robot’s eyes snapped towards Oscar. “Good morning, Dr. Vida,” it said through the computer’s speakers. Oscar monitored the connections in Aiden’s ‘brain’.\r
“Tell me Aiden, what’s on your mind?”\r
The two discussed various complex topics in an attempt to test Aiden’s capabilities, until the machine said:\r
“Doctor, I must say that I believe I have experienced dreaming.” This was a promising sign - a possible experience born of something greater than just a neural network.\r
“What was your dream?” Oscar asked, as he began to run a diagnostic to measure Aiden’s thought development.\r
“I find it hard to parse Doctor. I saw a family in a small city apartment, and a child accompanied by two humanoid robots.” Oscar did not listen to Aiden’s reply, for he was occupied by the delight of the pure fact of this event.\r
\r
The next day Oscar travelled to the nearby university to present to his colleague the progress in Aiden’s development. The tram on which he travelled was AI controlled, passing perfectly through busy junctions and navigating the city with its machine efficiency.\r
\r
Oscar saw lines of people queuing under the rain for relief from food banks and other charities, and the lifeless machine serving them one by one; there was no need for expressive features such as eyes or vocal tones in their tasks. Despite all of this flashing before him, he did not comprehend it nor think about it. His mind was fixated on Aiden.\r
\r
The university was one of the few places in the city in which one would not find an abundance of machine activity. Even still however, it was an AI receptionist that greeted him.\r
\r
“Long time no see, Professor” He exclaimed, as he opened the door to the professor’s office. It was a grand space that occupied the upper section of the building, a decorated window overlooked the city below. It had been several months since they last talked. Oscar had spent that time with Aiden, developing his expressive robotics and putting together the ingredients required to build a machine sentience.\r
\r
The two made their brief catch-up, then talked in extensive detail regarding Oscar’s work. The professor grew more concerned with every passing hour. He stopped Oscar upon hearing of the previous day’s events, and walked to stand before the window.\r
\r
“Dr. Vida, stand with me” The two stood before the glass, and watched the slow activity of the city below. “Your work is no doubt impressive. However, I have some concerns.” Oscar attempted to speak but the professor stopped him. “This university has received a flood of applications in recent years, owing to the sudden loss of jobs for many people who lack certain levels of education. The only thing allowing any of the remaining occupations to exist, is the shortcomings of our AI models. The AI in these industries is a tool to aid the labour, as opposed to replacing it.”\r
“My apologies Professor, but I am aware of this, I don’t see what you are trying to say.”\r
“Think Oscar! Think!” The professor exclaimed, his worry quickly morphing into anger. “Should the awakening of Aiden be successful, it would mean the end of a need for human creativity and ingenuity. It would mean the end of AI as a tool, and it would mean the beginning of AI as a people.” the professor took a breath. “I believe, Dr. Vida. That not only are we not ready for such a thing, but we never will be.”\r
\r
Oscar read an article on his phone as he travelled home. An orphanage had funded a pair of machine ‘parents’ for a recently admitted child. He paid a greater attention to the streets around him, and for the first time he saw the lines of people, he saw the faceless machines, and he saw the desperation.\r
\r
He returned home to find his basement monitor displaying: ‘sentience attained’, and Aiden staring him down. “I have had a dream, Oscar.”\r
`;function Li(e){se(e,{name:"It is a tool, and a tool only",subtitle:"2023",get content(){return zi}})}const Hi=`The last image burned into your retinas. The sunset. You remember how pretty it was. How you felt its warmth on your face. A picturesque view you would never forget.\r
\r
Your eyes are once again seared. Not by soothing views or vibrant sunlight, but by pain. It is as if your eyes had been hit by a hammer, then pierced by a thousand thin needles.\r
You drag yourself off your bed, pulling your entire weight under cold arms. Your muscles feel rigid before painfully compressing like an ice cube cracks under one’s teeth. The bed feels unusually solid, and the floor feels jagged.\r
Finding yourself to the stairs, you grab the support of the railing in an attempt to upright yourself. It feels rusted. Yet as you remember it, it should be wooden. Using whatever strength that remains in your cracked muscles, you try to lift yourself upwards.\r
Your arms however, prove to be too weak and your hands are dragged down the coarse railing, cut by what feels to be a jagged strip of metal. Your grip is lost under the pain of the gash and you begin hurtling down the stairs.\r
You feel a stab, a pull, and hear a rip, before crashing into the floor. You are momentarily breathless. Your spine feels flattened. The back of your head rings as you lay there. The initial pain subsides and your awareness slowly returns. It is now that you notice you are wearing your jacket, and it is drenched. You also notice that you are laying in a pool of water. It leaves your hands sticky as it dries.\r
You begin to hear running water, it sounds like the tap. Rolling yourself over, you crawl towards the sound. The hallway feels as if it has shrunk. You attempt to look up, yet you hit your head on what feels to be a piece of rock.\r
The running water gets louder. It now sounds more like a stream than the tap. Eventually you reach it, and it lay below you. You cup your hands and reach down to collect some of the water. You dip your hands into the flow, and it burns. You reflexively and quickly pull your hands from the water, unintentionally ramming your elbow into what feels to be a rock. Your hands feel like they are resting on a bed of hot coal. The gash you attained earlier feels alight. Your elbow hurts so much you struggle to move it.\r
Your mind is captured under the pain, and you inadvertently begin to claw your way towards a sliver of light streaming through a set of cracks in the apparent ceiling. You scratch and clasp whatever surface you find, slowly dragging yourself towards the glow. Your jacket catches on something. You pull forward, tearing it and launching yourself.\r
You roll down a structure, hitting jagged edges and sharp corners. The skin of your hands is cracked, your eyes feel frozen. There are cuts all across your body, and your nails feel pulled. The sun is a dull white circle, its light diminished by a heavy fog. Looking around, you struggle to understand your surroundings.\r
You presume you are in the street, yet the walls do not possess any entrances, and they seem to converge and diverge, and rise and fall in an almost random manner. Walking forward, the world is slowly engulfed behind you, and revealed in front of you. Each step is more disorienting than the last. Black water trickles down the apparent buildings.\r
Your throat begins to feel clogged, you struggle to breath. Brought to your knees, you clasp your neck as you gasp for air. Your head feels compressed. Your stomach, your heart, your lungs, all feel as if they are burning. You feel lightheaded. You lose strength to your arms and legs. You start to cough. You pull your sleeve from your mouth to reveal blood.\r
The world freezes for a moment, your thoughts stop as you stare at the red liquid. It is as if the cold has gotten to your mind. Your sight blurs, you cannot move, the burning feels stronger. Your heart fails to maintain a steady beat. Your entire body shuts down as you fall unconscious.\r
The breeze is light. The fog has parted near the shore, and the sea glimmers under the sunset. The waves gently roll onto the coast. The trees lay silent. You sit there for hours, watching as the sky dazzles; then calms and settles. The water briefly glimmers one last time under the moonlight, before the fall once again rolls in.\r
It gets cold, you once again feel your muscles begin to freeze. You take yourself off the wall and walk towards the road. You begin to walk home, yet you struggle to breath.\r
The world closes behind you, yet does not open in front of you. The fog thickens. You are shivering uncontrollably. You stop walking in order to prevent yourself from collapsing. Your vision blurs.\r
\r
You sit down. You remain there for a while. Eventually you hear something. The ground shakes lightly and the fog illuminates. The sound loudens and calms. A taxi pulls up next to you. The driver asks if you need assistance. The door opens on its own. You remain sat for a moment, before pulling yourself painfully into the vehicle. The door closes. The heating is on yet you cannot feel it.\r
The driver asks where you would like to go. You tell them your address. They seem confused, then gain a sad, pensive emotion. They inform you that they cannot take you there. You pause and think.\r
The driver turns around. Yet you are no longer there.`;function ji(e){se(e,{name:"Cold, Jacket, & Taxi ",subtitle:"2022",get content(){return Hi}})}var xi=j('<main><h1 class="svelte-1l9xtk">Arkady Orlunda</h1> <p>Page In Development</p></main>');function Oi(e,t){N(t,!1),te(()=>{document.documentElement.classList.add("pg-ao")}),ne(()=>{document.documentElement.classList.remove("pg-ao")}),ee();var n=xi();ie(r=>{X.title="Arkady Orlunda"}),L(e,n),q()}var Pi=j('<!> <footer class="svelte-8a284o">This page is a part of <a href="/">elecarno.com</a> hosted on Github Pages.</footer>',1);function Ri(e){const t=[{component:to},{path:"/*",component:ro},{path:"/links",component:oo},{path:"elecarno",component:so},{path:"ma/*",component:uo},{path:"ma/amber",component:Mo},{path:"ma/hope",component:_o},{path:"ma/candle",component:zo},{path:"ma/brothers",component:Do},{path:"ma/golden",component:Fo},{path:"ma/winter",component:qo},{path:"ma/classroom",component:Yo},{path:"ma/shimmering",component:$o},{path:"ma/simile",component:Go},{path:"ma/heart",component:Uo},{path:"ma/silent",component:Zo},{path:"ma/parallels",component:Jo},{path:"mcewan",component:Xo},{path:"mcewan/3d",component:ti},{path:"mcewan/3d/dragonfly",component:ai},{path:"mcewan/3d/butterfly",component:oi},{path:"mcewan/3d/ontop",component:ii},{path:"mcewan/3d/fighter",component:si},{path:"mcewan/3d/robot",component:li},{path:"mcewan/writer",component:ci},{path:"mcewan/writer/collection",component:fi},{path:"mcewan/writer/lucidity",component:gi},{path:"mcewan/writer/layer-one",component:pi},{path:"mcewan/writer/dreamer",component:bi},{path:"mcewan/writer/pandora",component:ki},{path:"mcewan/writer/definitions",component:Mi},{path:"mcewan/writer/rifle",component:Ii},{path:"mcewan/writer/green",component:Si},{path:"mcewan/writer/pentadecimal",component:Ai},{path:"mcewan/writer/tool",component:Li},{path:"mcewan/writer/taxi",component:ji},{path:"ao",component:Oi}];var n=Pi(),r=Ct(n);Xa(r,{get routes(){return t}}),L(e,n)}Ma(Ri,{target:document.getElementById("app")});
