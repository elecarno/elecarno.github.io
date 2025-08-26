(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const S1=!1;var K0=Array.isArray,pt=Array.prototype.indexOf,Y0=Array.from,N0=Object.defineProperty,be=Object.getOwnPropertyDescriptor,A1=Object.getOwnPropertyDescriptors,vt=Object.prototype,gt=Array.prototype,Q0=Object.getPrototypeOf,d1=Object.isExtensible;function Ge(e){return typeof e=="function"}function wt(e){return e()}function j0(e){for(var t=0;t<e.length;t++)e[t]()}function yt(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}const D=2,T1=4,X0=8,o0=16,he=32,Ve=64,H1=128,U=256,p0=512,O=1024,Z=2048,_e=4096,K=8192,Pe=16384,e1=32768,M0=65536,m1=1<<17,V1=1<<18,t1=1<<19,n1=1<<20,W0=1<<21,r1=1<<22,Ee=1<<23,Le=Symbol("$state"),P1=Symbol("legacy props"),bt=Symbol(""),a1=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ct(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function O1(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _t(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function kt(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Mt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function It(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Et(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Lt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function St(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function At(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Tt=1,Ht=2,Vt=16,Pt=1,Ot=2,Rt=4,xt=8,Ft=16,Nt=1,jt=2,H=Symbol(),Wt="http://www.w3.org/1999/xhtml";let Dt=!1;function R1(e){return e===this.v}function x1(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function $t(e,t){return e!==t}function F1(e){return!x1(e,this.v)}let $e=!1,Bt=!1;function qt(){$e=!0}let A=null;function v0(e){A=e}function Y(e,t=!1,n){A={p:A,c:null,e:null,s:e,x:null,l:$e&&!t?{s:null,u:null,$:[]}:null}}function Q(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)J1(r)}return A=t.p,{}}function Be(){return!$e||A!==null&&A.l===null}const Ut=new WeakMap;function Zt(e){var t=C;if(t===null)return M.f|=Ee,e;if((t.f&e1)===0){if((t.f&H1)===0)throw!t.parent&&e instanceof Error&&N1(e),e;t.b.error(e)}else i1(e,t)}function i1(e,t){for(;t!==null;){if((t.f&H1)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&N1(e),e}function N1(e){const t=Ut.get(e);t&&(N0(e,"message",{value:t.message}),N0(e,"stack",{value:t.stack}))}let g0=[];function Gt(){var e=g0;g0=[],j0(e)}function Jt(e){g0.length===0&&queueMicrotask(Gt),g0.push(e)}function Kt(){for(var e=C.b;e!==null&&!e.has_pending_snippet();)e=e.parent;return e===null&&Ct(),e}function z0(e){var t=D|Z,n=M!==null&&(M.f&D)!==0?M:null;return C===null||n!==null&&(n.f&U)!==0?t|=U:C.f|=t1,{ctx:A,deps:null,effects:null,equals:R1,f:t,fn:e,reactions:null,rv:0,v:H,wv:0,parent:n??C,ac:null}}function Yt(e,t){let n=C;n===null&&_t();var r=n.b,i=void 0,a=n0(H),o=null,l=!M;return hn(()=>{try{var s=e()}catch(f){s=Promise.reject(f)}var c=()=>s;i=o?.then(c,c)??Promise.resolve(s),o=i;var h=E,d=r.pending;l&&(r.update_pending_count(1),d||h.increment());const u=(f,m=void 0)=>{o=null,d||h.activate(),m?m!==a1&&(a.f|=Ee,y0(a,m)):((a.f&Ee)!==0&&(a.f^=Ee),y0(a,f)),l&&(r.update_pending_count(-1),d||h.decrement()),D1()};if(i.then(u,f=>u(null,f||"unknown")),h)return()=>{queueMicrotask(()=>h.neuter())}}),new Promise(s=>{function c(h){function d(){h===i?s(a):c(i)}h.then(d,d)}c(i)})}function o1(e){const t=z0(e);return t.equals=F1,t}function j1(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ce(t[n])}}function Qt(e){for(var t=e.parent;t!==null;){if((t.f&D)===0)return t;t=t.parent}return null}function s1(e){var t,n=C;Ce(Qt(e));try{j1(e),t=it(e)}finally{Ce(n)}return t}function W1(e){var t=s1(e);if(e.equals(t)||(e.v=t,e.wv=rt()),!Oe)if(We!==null)We.set(e,e.v);else{var n=(ye||(e.f&U)!==0)&&e.deps!==null?_e:O;F(e,n)}}function Xt(e,t,n){const r=Be()?z0:o1;if(t.length===0){n(e.map(r));return}var i=E,a=C,o=en(),l=Kt();Promise.all(t.map(s=>Yt(s))).then(s=>{i?.activate(),o();try{n([...e.map(r),...s])}catch(c){(a.f&Pe)===0&&i1(c,a)}i?.deactivate(),D1()}).catch(s=>{l.error(s)})}function en(){var e=C,t=M,n=A;return function(){Ce(e),ae(t),v0(n)}}function D1(){Ce(null),ae(null),v0(null)}const Je=new Set;let E=null,We=null,p1=new Set,w0=[];function $1(){const e=w0.shift();w0.length>0&&queueMicrotask($1),e()}let t0=[],l1=null,D0=!1;class De{current=new Map;#e=new Map;#t=new Set;#n=0;#c=null;#h=!1;#a=[];#o=[];#i=[];#r=[];#s=[];#u=[];#f=[];skipped_effects=new Set;process(t){t0=[];var n=null;if(Je.size>1){n=new Map,We=new Map;for(const[a,o]of this.current)n.set(a,{v:a.v,wv:a.wv}),a.v=o;for(const a of Je)if(a!==this)for(const[o,l]of a.#e)n.has(o)||(n.set(o,{v:o.v,wv:o.wv}),o.v=l)}for(const a of t)this.#m(a);if(this.#a.length===0&&this.#n===0){this.#d();var r=this.#i,i=this.#r;this.#i=[],this.#r=[],this.#s=[],E=null,v1(r),v1(i),E===null?E=this:Je.delete(this),this.#c?.resolve()}else this.#l(this.#i),this.#l(this.#r),this.#l(this.#s);if(n){for(const[a,{v:o,wv:l}]of n)a.wv<=l&&(a.v=o);We=null}for(const a of this.#a)Xe(a);for(const a of this.#o)Xe(a);this.#a=[],this.#o=[]}#m(t){t.f^=O;for(var n=t.first;n!==null;){var r=n.f,i=(r&(he|Ve))!==0,a=i&&(r&O)!==0,o=a||(r&K)!==0||this.skipped_effects.has(n);if(!o&&n.fn!==null){if(i)n.f^=O;else if((r&O)===0)if((r&T1)!==0)this.#r.push(n);else if((r&r1)!==0){var l=n.b?.pending?this.#o:this.#a;l.push(n)}else L0(n)&&((n.f&o0)!==0&&this.#s.push(n),Xe(n));var s=n.first;if(s!==null){n=s;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)n=c.next,c=c.parent}}#l(t){for(const n of t)((n.f&Z)!==0?this.#u:this.#f).push(n),F(n,O);t.length=0}capture(t,n){this.#e.has(t)||this.#e.set(t,n),this.current.set(t,t.v)}activate(){E=this}deactivate(){E=null;for(const t of p1)if(p1.delete(t),t(),E!==null)break}neuter(){this.#h=!0}flush(){t0.length>0?tn():this.#d(),E===this&&(this.#n===0&&Je.delete(this),this.deactivate())}#d(){if(!this.#h)for(const t of this.#t)t();this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,this.#n===0){for(const t of this.#u)F(t,Z),Te(t);for(const t of this.#f)F(t,_e),Te(t);this.#i=[],this.#r=[],this.flush()}else this.deactivate()}add_callback(t){this.#t.add(t)}settled(){return(this.#c??=yt()).promise}static ensure(){if(E===null){const t=E=new De;Je.add(E),De.enqueue(()=>{E===t&&t.flush()})}return E}static enqueue(t){w0.length===0&&queueMicrotask($1),w0.unshift(t)}}function tn(){var e=je;D0=!0;try{var t=0;for(w1(!0);t0.length>0;){var n=De.ensure();if(t++>1e3){var r,i;nn()}n.process(t0),Se.clear()}}finally{D0=!1,w1(e),l1=null}}function nn(){try{It()}catch(e){i1(e,l1)}}function v1(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Pe|K))===0&&L0(r)){var i=E?E.current.size:0;if(Xe(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?X1(r):r.fn=null),E!==null&&E.current.size>i&&(r.f&n1)!==0)break}}for(;n<t;)Te(e[n++])}}function Te(e){for(var t=l1=e;t.parent!==null;){t=t.parent;var n=t.f;if(D0&&t===C&&(n&o0)!==0)return;if((n&(Ve|he))!==0){if((n&O)===0)return;t.f^=O}}t0.push(t)}const Se=new Map;function n0(e,t){var n={f:0,v:e,reactions:null,equals:R1,rv:0,wv:0};return n}function P(e,t){const n=n0(e);return fn(n),n}function m0(e,t=!1,n=!0){const r=n0(e);return t||(r.equals=F1),$e&&n&&A!==null&&A.l!==null&&(A.l.s??=[]).push(r),r}function S(e,t,n=!1){M!==null&&(!ne||(M.f&m1)!==0)&&Be()&&(M.f&(D|o0|r1|m1))!==0&&!se?.includes(e)&&At();let r=n?oe(t):t;return y0(e,r)}function y0(e,t){if(!e.equals(t)){var n=e.v;Oe?Se.set(e,t):Se.set(e,n),e.v=t;var r=De.ensure();r.capture(e,n),(e.f&D)!==0&&((e.f&Z)!==0&&s1(e),F(e,(e.f&U)===0?O:_e)),e.wv=rt(),B1(e,Z),Be()&&C!==null&&(C.f&O)!==0&&(C.f&(he|Ve))===0&&(B===null?dn([e]):B.push(e))}return t}function T0(e){S(e,e.v+1)}function B1(e,t){var n=e.reactions;if(n!==null)for(var r=Be(),i=n.length,a=0;a<i;a++){var o=n[a],l=o.f;if(!(!r&&o===C)){var s=(l&Z)===0;s&&F(o,t),(l&D)!==0?B1(o,_e):s&&Te(o)}}}function oe(e){if(typeof e!="object"||e===null||Le in e)return e;const t=Q0(e);if(t!==vt&&t!==gt)return e;var n=new Map,r=K0(e),i=P(0),a=Ae,o=l=>{if(Ae===a)return l();var s=M,c=Ae;ae(null),b1(a);var h=l();return ae(s),b1(c),h};return r&&n.set("length",P(e.length)),new Proxy(e,{defineProperty(l,s,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Lt();var h=n.get(s);return h===void 0?h=o(()=>{var d=P(c.value);return n.set(s,d),d}):S(h,c.value,!0),!0},deleteProperty(l,s){var c=n.get(s);if(c===void 0){if(s in l){const h=o(()=>P(H));n.set(s,h),T0(i)}}else S(c,H),T0(i);return!0},get(l,s,c){if(s===Le)return e;var h=n.get(s),d=s in l;if(h===void 0&&(!d||be(l,s)?.writable)&&(h=o(()=>{var f=oe(d?l[s]:H),m=P(f);return m}),n.set(s,h)),h!==void 0){var u=w(h);return u===H?void 0:u}return Reflect.get(l,s,c)},getOwnPropertyDescriptor(l,s){var c=Reflect.getOwnPropertyDescriptor(l,s);if(c&&"value"in c){var h=n.get(s);h&&(c.value=w(h))}else if(c===void 0){var d=n.get(s),u=d?.v;if(d!==void 0&&u!==H)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(l,s){if(s===Le)return!0;var c=n.get(s),h=c!==void 0&&c.v!==H||Reflect.has(l,s);if(c!==void 0||C!==null&&(!h||be(l,s)?.writable)){c===void 0&&(c=o(()=>{var u=h?oe(l[s]):H,f=P(u);return f}),n.set(s,c));var d=w(c);if(d===H)return!1}return h},set(l,s,c,h){var d=n.get(s),u=s in l;if(r&&s==="length")for(var f=c;f<d.v;f+=1){var m=n.get(f+"");m!==void 0?S(m,H):f in l&&(m=o(()=>P(H)),n.set(f+"",m))}if(d===void 0)(!u||be(l,s)?.writable)&&(d=o(()=>P(void 0)),S(d,oe(c)),n.set(s,d));else{u=d.v!==H;var p=o(()=>oe(c));S(d,p)}var y=Reflect.getOwnPropertyDescriptor(l,s);if(y?.set&&y.set.call(h,c),!u){if(r&&typeof s=="string"){var _=n.get("length"),b=Number(s);Number.isInteger(b)&&b>=_.v&&S(_,b+1)}T0(i)}return!0},ownKeys(l){w(i);var s=Reflect.ownKeys(l).filter(d=>{var u=n.get(d);return u===void 0||u.v!==H});for(var[c,h]of n)h.v!==H&&!(c in l)&&s.push(c);return s},setPrototypeOf(){St()}})}var g1,ue,q1,U1,Z1;function rn(){if(g1===void 0){g1=window,ue=document,q1=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;U1=be(t,"firstChild").get,Z1=be(t,"nextSibling").get,d1(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),d1(n)&&(n.__t=void 0)}}function ke(e=""){return document.createTextNode(e)}function ge(e){return U1.call(e)}function I0(e){return Z1.call(e)}function k(e,t){return ge(e)}function $0(e,t){{var n=ge(e);return n instanceof Comment&&n.data===""?I0(n):n}}function z(e,t=1,n=!1){let r=e;for(;t--;)r=I0(r);return r}function an(e){e.textContent=""}function E0(){return!1}function G1(e){C===null&&M===null&&zt(),M!==null&&(M.f&U)!==0&&C===null&&Mt(),Oe&&kt()}function on(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Me(e,t,n,r=!0){var i=C;i!==null&&(i.f&K)!==0&&(e|=K);var a={ctx:A,deps:null,nodes_start:null,nodes_end:null,f:e|Z,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Xe(a),a.f|=e1}catch(s){throw ce(a),s}else t!==null&&Te(a);var o=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&t1)===0;if(!o&&r&&(i!==null&&on(a,i),M!==null&&(M.f&D)!==0&&(e&Ve)===0)){var l=M;(l.effects??=[]).push(a)}return a}function sn(e){const t=Me(X0,null,!1);return F(t,O),t.teardown=e,t}function B0(e){G1();var t=C.f,n=!M&&(t&he)!==0&&(t&e1)===0;if(n){var r=A;(r.e??=[]).push(e)}else return J1(e)}function J1(e){return Me(T1|n1,e,!1)}function ln(e){return G1(),Me(X0|n1,e,!0)}function cn(e){De.ensure();const t=Me(Ve,e,!0);return(n={})=>new Promise(r=>{n.outro?l0(t,()=>{ce(t),r(void 0)}):(ce(t),r(void 0))})}function hn(e){return Me(r1|t1,e,!0)}function we(e,t=[],n=[]){Xt(t,n,r=>{Me(X0,()=>e(...r.map(w)),!0)})}function s0(e,t=0){var n=Me(o0|t,e,!0);return n}function He(e,t=!0){return Me(he,e,!0,t)}function K1(e){var t=e.teardown;if(t!==null){const n=Oe,r=M;y1(!0),ae(null);try{t.call(null)}finally{y1(n),ae(r)}}}function Y1(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){n.ac?.abort(a1);var r=n.next;(n.f&Ve)!==0?n.parent=null:ce(n,t),n=r}}function un(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&he)===0&&ce(t),t=n}}function ce(e,t=!0){var n=!1;(t||(e.f&V1)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Q1(e.nodes_start,e.nodes_end),n=!0),Y1(e,t&&!n),b0(e,0),F(e,Pe);var r=e.transitions;if(r!==null)for(const a of r)a.stop();K1(e);var i=e.parent;i!==null&&i.first!==null&&X1(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Q1(e,t){for(;e!==null;){var n=e===t?null:I0(e);e.remove(),e=n}}function X1(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function l0(e,t){var n=[];c1(e,n,!0),et(n,()=>{ce(e),t&&t()})}function et(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function c1(e,t,n){if((e.f&K)===0){if(e.f^=K,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&t.push(o);for(var r=e.first;r!==null;){var i=r.next,a=(r.f&M0)!==0||(r.f&he)!==0;c1(r,t,a?n:!1),r=i}}}function h1(e){tt(e,!0)}function tt(e,t){if((e.f&K)!==0){e.f^=K,(e.f&O)===0&&(F(e,Z),Te(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&M0)!==0||(n.f&he)!==0;tt(n,i?t:!1),n=r}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let je=!1;function w1(e){je=e}let Oe=!1;function y1(e){Oe=e}let M=null,ne=!1;function ae(e){M=e}let C=null;function Ce(e){C=e}let se=null;function fn(e){M!==null&&(se===null?se=[e]:se.push(e))}let x=null,W=0,B=null;function dn(e){B=e}let nt=1,r0=0,Ae=r0;function b1(e){Ae=e}let ye=!1;function rt(){return++nt}function L0(e){var t=e.f;if((t&Z)!==0)return!0;if((t&_e)!==0){var n=e.deps,r=(t&U)!==0;if(n!==null){var i,a,o=(t&p0)!==0,l=r&&C!==null&&!ye,s=n.length;if((o||l)&&(C===null||(C.f&Pe)===0)){var c=e,h=c.parent;for(i=0;i<s;i++)a=n[i],(o||!a?.reactions?.includes(c))&&(a.reactions??=[]).push(c);o&&(c.f^=p0),l&&h!==null&&(h.f&U)===0&&(c.f^=U)}for(i=0;i<s;i++)if(a=n[i],L0(a)&&W1(a),a.wv>e.wv)return!0}(!r||C!==null&&!ye)&&F(e,O)}return!1}function at(e,t,n=!0){var r=e.reactions;if(r!==null&&!se?.includes(e))for(var i=0;i<r.length;i++){var a=r[i];(a.f&D)!==0?at(a,t,!1):t===a&&(n?F(a,Z):(a.f&O)!==0&&F(a,_e),Te(a))}}function it(e){var t=x,n=W,r=B,i=M,a=ye,o=se,l=A,s=ne,c=Ae,h=e.f;x=null,W=0,B=null,ye=(h&U)!==0&&(ne||!je||M===null),M=(h&(he|Ve))===0?e:null,se=null,v0(e.ctx),ne=!1,Ae=++r0,e.ac!==null&&(e.ac.abort(a1),e.ac=null);try{e.f|=W0;var d=(0,e.fn)(),u=e.deps;if(x!==null){var f;if(b0(e,W),u!==null&&W>0)for(u.length=W+x.length,f=0;f<x.length;f++)u[W+f]=x[f];else e.deps=u=x;if(!ye||(h&D)!==0&&e.reactions!==null)for(f=W;f<u.length;f++)(u[f].reactions??=[]).push(e)}else u!==null&&W<u.length&&(b0(e,W),u.length=W);if(Be()&&B!==null&&!ne&&u!==null&&(e.f&(D|_e|Z))===0)for(f=0;f<B.length;f++)at(B[f],e);return i!==null&&i!==e&&(r0++,B!==null&&(r===null?r=B:r.push(...B))),(e.f&Ee)!==0&&(e.f^=Ee),d}catch(m){return Zt(m)}finally{e.f^=W0,x=t,W=n,B=r,M=i,ye=a,se=o,v0(l),ne=s,Ae=c}}function mn(e,t){let n=t.reactions;if(n!==null){var r=pt.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(t.f&D)!==0&&(x===null||!x.includes(t))&&(F(t,_e),(t.f&(U|p0))===0&&(t.f^=p0),j1(t),b0(t,0))}function b0(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)mn(e,n[r])}function Xe(e){var t=e.f;if((t&Pe)===0){F(e,O);var n=C,r=je;C=e,je=!0;try{(t&o0)!==0?un(e):Y1(e),K1(e);var i=it(e);e.teardown=typeof i=="function"?i:null,e.wv=nt;var a;S1&&Bt&&(e.f&Z)!==0&&e.deps}finally{je=r,C=n}}}function w(e){var t=e.f,n=(t&D)!==0;if(M!==null&&!ne){var r=C!==null&&(C.f&Pe)!==0;if(!r&&!se?.includes(e)){var i=M.deps;if((M.f&W0)!==0)e.rv<r0&&(e.rv=r0,x===null&&i!==null&&i[W]===e?W++:x===null?x=[e]:(!ye||!x.includes(e))&&x.push(e));else{(M.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[M]:a.includes(M)||a.push(M)}}}else if(n&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&U)===0&&(o.f^=U)}if(Oe){if(Se.has(e))return Se.get(e);if(n){o=e;var s=o.v;return((o.f&O)===0&&o.reactions!==null||ot(o))&&(s=s1(o)),Se.set(o,s),s}}else if(n){if(o=e,We?.has(o))return We.get(o);L0(o)&&W1(o)}if((e.f&Ee)!==0)throw e.v;return e.v}function ot(e){if(e.v===H)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Se.has(t)||(t.f&D)!==0&&ot(t))return!0;return!1}function te(e){var t=ne;try{return ne=!0,e()}finally{ne=t}}const pn=-7169;function F(e,t){e.f=e.f&pn|t}function Ye(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Le in e)q0(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Le in n&&q0(n)}}}function q0(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{q0(e[r],t)}catch{}const n=Q0(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=A1(n);for(let i in r){const a=r[i].get;if(a)try{a.call(e)}catch{}}}}}const vn=["touchstart","touchmove"];function gn(e){return vn.includes(e)}function wn(e){var t=M,n=C;ae(null),Ce(null);try{return e()}finally{ae(t),Ce(n)}}const yn=new Set,C1=new Set;function bn(e,t,n,r={}){function i(a){if(r.capture||Qe.call(t,a),!a.cancelBubble)return wn(()=>n?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Jt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function L(e,t,n,r,i){var a={capture:r,passive:i},o=bn(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&sn(()=>{t.removeEventListener(e,o,a)})}let _1=null;function Qe(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;_1=e;var o=0,l=_1===e&&e.__root;if(l){var s=i.indexOf(l);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var c=i.indexOf(t);if(c===-1)return;s<=c&&(o=s)}if(a=i[o]||e.target,a!==t){N0(e,"currentTarget",{configurable:!0,get(){return a||n}});var h=M,d=C;ae(null),Ce(null);try{for(var u,f=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+r];if(p!=null&&(!a.disabled||e.target===a))if(K0(p)){var[y,..._]=p;y.apply(a,[e,..._])}else p.call(a,e)}catch(b){u?f.push(b):u=b}if(e.cancelBubble||m===t||m===null)break;a=m}if(u){for(let b of f)queueMicrotask(()=>{throw b});throw u}}finally{e.__root=t,delete e.currentTarget,ae(h),Ce(d)}}}function ze(e){var t;t=document.head.appendChild(ke());try{s0(()=>e(t),V1)}finally{}}function st(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function C0(e,t){var n=C;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function N(e,t){var n=(t&Nt)!==0,r=(t&jt)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=st(a?e:"<!>"+e),n||(i=ge(i)));var o=r||q1?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=ge(o),s=o.lastChild;C0(l,s)}else C0(o,o);return o}}function k1(){var e=document.createDocumentFragment(),t=document.createComment(""),n=ke();return e.append(t,n),C0(t,n),e}function R(e,t){e!==null&&e.before(t)}function Ke(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Cn(e,t){return _n(e,t)}const xe=new Map;function _n(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:o=!0}){rn();var l=new Set,s=d=>{for(var u=0;u<d.length;u++){var f=d[u];if(!l.has(f)){l.add(f);var m=gn(f);t.addEventListener(f,Qe,{passive:m});var p=xe.get(f);p===void 0?(document.addEventListener(f,Qe,{passive:m}),xe.set(f,1)):xe.set(f,p+1)}}};s(Y0(yn)),C1.add(s);var c=void 0,h=cn(()=>{var d=n??t.appendChild(ke());return He(()=>{if(a){Y({});var u=A;u.c=a}i&&(r.$$events=i),c=e(d,r)||{},a&&Q()}),()=>{for(var u of l){t.removeEventListener(u,Qe);var f=xe.get(u);--f===0?(document.removeEventListener(u,Qe),xe.delete(u)):xe.set(u,f)}C1.delete(s),d!==n&&d.parentNode?.removeChild(d)}});return kn.set(c,h),c}let kn=new WeakMap;function Mn(e,t,n=!1){var r=e,i=null,a=null,o=H,l=n?M0:0,s=!1;const c=(f,m=!0)=>{s=!0,u(m,f)};var h=null;function d(){h!==null&&(h.lastChild.remove(),r.before(h),h=null);var f=o?i:a,m=o?a:i;f&&h1(f),m&&l0(m,()=>{o?a=null:i=null})}const u=(f,m)=>{if(o!==(o=f)){var p=E0(),y=r;if(p&&(h=document.createDocumentFragment(),h.append(y=ke())),o?i??=m&&He(()=>m(y)):a??=m&&He(()=>m(y)),p){var _=E,b=o?i:a,g=o?a:i;b&&_.skipped_effects.delete(b),g&&_.skipped_effects.add(g),_.add_callback(d)}else d()}};s0(()=>{s=!1,t(c),s||u(null,null)},l)}function zn(e,t,n){var r=e,i=H,a,o,l=null,s=Be()?$t:x1;function c(){a&&l0(a),l!==null&&(l.lastChild.remove(),r.before(l),l=null),a=o}s0(()=>{if(s(i,i=t())){var h=r,d=E0();d&&(l=document.createDocumentFragment(),l.append(h=ke())),o=He(()=>n(h)),d?E.add_callback(c):c()}})}function U0(e,t){return t}function In(e,t,n){for(var r=e.items,i=[],a=t.length,o=0;o<a;o++)c1(t[o].e,i,!0);var l=a>0&&i.length===0&&n!==null;if(l){var s=n.parentNode;an(s),s.append(n),r.clear(),ee(e,t[0].prev,t[a-1].next)}et(i,()=>{for(var c=0;c<a;c++){var h=t[c];l||(r.delete(h.k),ee(e,h.prev,h.next)),ce(h.e,!l)}})}function Z0(e,t,n,r,i,a=null){var o=e,l={flags:t,items:new Map,first:null};{var s=e;o=s.appendChild(ke())}var c=null,h=!1,d=new Map,u=o1(()=>{var y=n();return K0(y)?y:y==null?[]:Y0(y)}),f,m;function p(){En(m,f,l,d,o,i,t,r,n),a!==null&&(f.length===0?c?h1(c):c=He(()=>a(o)):c!==null&&l0(c,()=>{c=null}))}s0(()=>{m??=C,f=w(u);var y=f.length;if(!(h&&y===0)){h=y===0;var _,b,g,I;if(E0()){var T=new Set,ie=E;for(b=0;b<y;b+=1){g=f[b],I=r(g,b);var $=l.items.get(I)??d.get(I);$?lt($,g,b):(_=ct(null,l,null,null,g,I,b,i,t,n,!0),d.set(I,_)),T.add(I)}for(const[X,V]of l.items)T.has(X)||ie.skipped_effects.add(V.e);ie.add_callback(p)}else p();w(u)}})}function En(e,t,n,r,i,a,o,l,s){var c=t.length,h=n.items,d=n.first,u=d,f,m=null,p=[],y=[],_,b,g,I;for(I=0;I<c;I+=1){if(_=t[I],b=l(_,I),g=h.get(b),g===void 0){var T=r.get(b);if(T!==void 0){r.delete(b),h.set(b,T);var ie=m?m.next:u;ee(n,m,T),ee(n,T,ie),H0(T,ie,i),m=T}else{var $=u?u.e.nodes_start:i;m=ct($,n,m,m===null?n.first:m.next,_,b,I,a,o,s)}h.set(b,m),p=[],y=[],u=m.next;continue}if(lt(g,_,I),(g.e.f&K)!==0&&h1(g.e),g!==u){if(f!==void 0&&f.has(g)){if(p.length<y.length){var X=y[0],V;m=X.prev;var c0=p[0],qe=p[p.length-1];for(V=0;V<p.length;V+=1)H0(p[V],X,i);for(V=0;V<y.length;V+=1)f.delete(y[V]);ee(n,c0.prev,qe.next),ee(n,m,c0),ee(n,qe,X),u=X,m=qe,I-=1,p=[],y=[]}else f.delete(g),H0(g,u,i),ee(n,g.prev,g.next),ee(n,g,m===null?n.first:m.next),ee(n,m,g),m=g;continue}for(p=[],y=[];u!==null&&u.k!==b;)(u.e.f&K)===0&&(f??=new Set).add(u),y.push(u),u=u.next;if(u===null)continue;g=u}p.push(g),m=g,u=g.next}if(u!==null||f!==void 0){for(var Ue=f===void 0?[]:Y0(f);u!==null;)(u.e.f&K)===0&&Ue.push(u),u=u.next;var pe=Ue.length;if(pe>0){var j=c===0?i:null;In(n,Ue,j)}}e.first=n.first&&n.first.e,e.last=m&&m.e;for(var Re of r.values())ce(Re.e);r.clear()}function lt(e,t,n,r){y0(e.v,t),e.i=n}function ct(e,t,n,r,i,a,o,l,s,c,h){var d=(s&Tt)!==0,u=(s&Vt)===0,f=d?u?m0(i,!1,!1):n0(i):i,m=(s&Ht)===0?o:n0(o),p={i:m,v:f,k:a,a:null,e:null,prev:n,next:r};try{if(e===null){var y=document.createDocumentFragment();y.append(e=ke())}return p.e=He(()=>l(e,f,m,c),Dt),p.e.prev=n&&n.e,p.e.next=r&&r.e,n===null?h||(t.first=p):(n.next=p,n.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function H0(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var o=I0(a);i.before(a),a=o}}function ee(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function G0(e,t,n=!1,r=!1,i=!1){var a=e,o="";we(()=>{var l=C;if(o!==(o=t()??"")&&(l.nodes_start!==null&&(Q1(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),o!=="")){var s=o+"";n?s=`<svg>${s}</svg>`:r&&(s=`<math>${s}</math>`);var c=st(s);if((n||r)&&(c=ge(c)),C0(ge(c),c.lastChild),n||r)for(;ge(c);)a.before(ge(c));else a.before(c)}})}function Ln(e,t,n){var r=e,i,a,o=null,l=null;function s(){a&&(l0(a),a=null),o&&(o.lastChild.remove(),r.before(o),o=null),a=l,l=null}s0(()=>{if(i!==(i=t())){var c=E0();if(i){var h=r;c&&(o=document.createDocumentFragment(),o.append(h=ke())),l=He(()=>n(h,i))}c?E.add_callback(s):s()}},M0)}function M1(e,t=!1){var n=t?" !important;":";",r="";for(var i in e){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+n)}return r}function V0(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Sn(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,s=[];r&&s.push(...Object.keys(r).map(V0)),i&&s.push(...Object.keys(i).map(V0));var c=0,h=-1;const p=e.length;for(var d=0;d<p;d++){var u=e[d];if(l?u==="/"&&e[d-1]==="*"&&(l=!1):a?a===u&&(a=!1):u==="/"&&e[d+1]==="*"?l=!0:u==='"'||u==="'"?a=u:u==="("?o++:u===")"&&o--,!l&&a===!1&&o===0){if(u===":"&&h===-1)h=d;else if(u===";"||d===p-1){if(h!==-1){var f=V0(e.substring(c,h).trim());if(!s.includes(f)){u!==";"&&d++;var m=e.substring(c,d).trim();n+=" "+m+";"}}c=d+1,h=-1}}}}return r&&(n+=M1(r)),i&&(n+=M1(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function P0(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Ie(e,t,n,r){var i=e.__style;if(i!==t){var a=Sn(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else r&&(Array.isArray(r)?(P0(e,n?.[0],r[0]),P0(e,n?.[1],r[1],"important")):P0(e,n,r));return r}const An=Symbol("is custom element"),Tn=Symbol("is html");function re(e,t,n,r){var i=Hn(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[bt]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Vn(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Hn(e){return e.__attributes??={[An]:e.nodeName.includes("-"),[Tn]:e.namespaceURI===Wt}}var z1=new Map;function Vn(e){var t=z1.get(e.nodeName);if(t)return t;z1.set(e.nodeName,t=[]);for(var n,r=e,i=Element.prototype;i!==r;){n=A1(r);for(var a in n)n[a].set&&t.push(a);r=Q0(r)}return t}function fe(e=!1){const t=A,n=t.l.u;if(!n)return;let r=()=>Ye(t.s);if(e){let i=0,a={};const o=z0(()=>{let l=!1;const s=t.s;for(const c in s)s[c]!==a[c]&&(a[c]=s[c],l=!0);return l&&i++,i});r=()=>w(o)}n.b.length&&ln(()=>{I1(t,r),j0(n.b)}),B0(()=>{const i=te(()=>n.m.map(wt));return()=>{for(const a of i)typeof a=="function"&&a()}}),n.a.length&&B0(()=>{I1(t,r),j0(n.a)})}function I1(e,t){if(e.l.s)for(const n of e.l.s)w(n);t()}let f0=!1;function Pn(e){var t=f0;try{return f0=!1,[e(),f0]}finally{f0=t}}const On={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Rn(e,t,n){return new Proxy({props:e,exclude:t},On)}const xn={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ge(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Ge(i)&&(i=i());const a=be(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ge(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=be(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Le||t===P1)return!1;for(let n of e.props)if(Ge(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Ge(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function Fn(...e){return new Proxy({props:e},xn)}function q(e,t,n,r){var i=!$e||(n&Ot)!==0,a=(n&xt)!==0,o=(n&Ft)!==0,l=r,s=!0,c=()=>(s&&(s=!1,l=o?te(r):r),l),h;if(a){var d=Le in e||P1 in e;h=be(e,t)?.set??(d&&t in e?g=>e[t]=g:void 0)}var u,f=!1;a?[u,f]=Pn(()=>e[t]):u=e[t],u===void 0&&r!==void 0&&(u=c(),h&&(i&&Et(),h(u)));var m;if(i?m=()=>{var g=e[t];return g===void 0?c():(s=!0,g)}:m=()=>{var g=e[t];return g!==void 0&&(l=void 0),g===void 0?l:g},i&&(n&Rt)===0)return m;if(h){var p=e.$$legacy;return function(g,I){return arguments.length>0?((!i||!I||p||f)&&h(I?m():g),g):m()}}var y=!1,_=((n&Pt)!==0?z0:o1)(()=>(y=!1,m()));a&&w(_);var b=C;return function(g,I){if(arguments.length>0){const T=I?w(_):i&&a?oe(g):g;return S(_,T),y=!0,l!==void 0&&(l=T),g}return Oe&&y||(b.f&Pe)!==0?_.v:w(_)}}function de(e){A===null&&O1(),$e&&A.l!==null?Nn(A).m.push(e):B0(()=>{const t=te(e);if(typeof t=="function")return t})}function me(e){A===null&&O1(),de(()=>()=>te(e))}function Nn(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const jn="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(jn);qt();const v={string:"string",number:"number",boolean:"boolean",null:"null",undefined:"undefined",regexp:"regexp",function:"function",object:"object",array:"array",promise:"promise",unknown:"unknown"},O0=e=>e===null?v.null:e===void 0?v.undefined:e instanceof RegExp?v.regexp:typeof e=="string"?v.string:typeof e=="number"?v.number:typeof e=="boolean"?v.boolean:Array.isArray(e)?v.array:typeof e=="function"?v.function:typeof e=="object"?v.object:v.unknown,le=e=>{if(typeof e=="string"){if(e.match(/^[\d.-]+$/))return Number.isNaN(Number.parseFloat(e))?Number.isNaN(Number.parseInt(e))?{identity:v.string,value:e}:{identity:v.number,value:Number.parseInt(e)}:{identity:v.number,value:Number.parseFloat(e)};if(!e.includes(",")&&(e.includes("&")||e.includes("="))){const t=e.split(/[&,]/),n={};for(const r of t){if(!r.includes("="))continue;const[i,a]=r.split("="),o=i.replace(/\[\d*\]$/,""),l=le(a);if(i.includes("[")){Array.isArray(n[o])||(n[o]=[]);const s=i.match(/\[(\d+)\]/)?.[1];s?(Array.isArray(n[o])||(n[o]=[]),n[o].push([parseInt(s),l.value])):n[o].push(l.value)}else n[o]=l.value}for(const[r,i]of Object.entries(n))Array.isArray(i)&&i.length>0&&Array.isArray(i[0])&&(n[r]=i.sort((a,o)=>a[0]-o[0]).map(([,a])=>a));return{identity:v.object,value:n}}else if(e.includes("&")&&e.includes("=")){const t={};for(const n of e.split("&")){if(!n.includes("="))continue;const[r,i]=n.split("=");t[r]=i}return{identity:v.object,value:t}}else if(e.match(/^[0-9a-z]+\[\d+\]=.+$/)){const[,t,n]=e.match(/^[0-9a-z]+\[(\d+)\]=(.+)$/)||[];if(t!==void 0&&n!==void 0){const r=[],i=le(n);return r[parseInt(t,10)]=i.value,{identity:v.array,value:r}}}else if(e.match(/^[0-9a-z]+\[\]$/))return{identity:v.array,value:e};return e.match(/^true$/i)?{identity:v.boolean,value:!0}:e.match(/^false$/i)?{identity:v.boolean,value:!1}:{identity:v.string,value:e}}else{if(typeof e=="number")return{identity:v.number,value:e};if(e instanceof RegExp)return{identity:v.regexp,value:e};if(typeof e=="boolean")return{identity:v.boolean,value:e};if(e===null)return{identity:v.null,value:null};if(e===void 0)return{identity:v.undefined,value:void 0};if(Array.isArray(e))return{identity:v.array,value:e};if(typeof e=="object"){const t=Object.entries(e).reduce((n,[r,i])=>(n[r]=le(i)?.value,n),{});return{identity:v.object,value:t}}else{if(typeof e=="function")return{identity:v.function,value:e};if(e instanceof Promise)return{identity:v.promise,value:e}}}throw new Error(`unable to marshal value: ${e} (it is neither a string, number, boolean, nor a regular expression)`)},R0=["exact-match","base-match","default-match","permitted-no-conditions"];var a0;(function(e){e.any={[v.string]:(t,n)=>t===n,[v.number]:(t,n)=>t===n,[v.boolean]:(t,n)=>t===n,[v.promise]:(t,n)=>t===n,[v.function]:(t,n)=>t===n,[v.null]:(t,n)=>t===n,[v.undefined]:(t,n)=>t===n,[v.unknown]:(t,n)=>t===n,[v.array]:(t,n)=>Array.isArray(t)&&Array.isArray(n)&&t.length===n.length&&t.every((r,i)=>e.any[O0(r)](r,n[i])),[v.object]:(t,n)=>{if(typeof t!="object"||typeof n!="object")return!1;const r=Object.keys(t),i=Object.keys(n);return r.length!==i.length?!1:r.every(a=>e.any[O0(t[a])](t[a],n[a]))},[v.regexp]:(t,n)=>{const r=t.exec(n);return r?r.groups?le(r.groups).value:r.length===1&&r[0]===r.input?!0:le(r.slice(1)[0]).value:!1}},e.valid={[v.string]:t=>t.length>0,[v.boolean]:t=>t===!1,[v.number]:t=>!isNaN(t),[v.array]:t=>Array.isArray(t)&&t.length>0,[v.object]:t=>{if(typeof t!="object"||t===null)return!0;const n=Object.keys(t);return n.length===0?!0:n.every(i=>{const a=t[i],o=O0(a);return e.valid[o](a)})},[v.regexp]:t=>t instanceof RegExp,[v.function]:t=>typeof t=="function",[v.null]:()=>!1,[v.undefined]:()=>!1}})(a0||(a0={}));const Wn=(e,t)=>{const n=new URL(e,window.location.origin);t&&Object.entries(t).forEach(([r,i])=>{n.searchParams.set(r,i)}),window.history.pushState({},"",n.toString())};class Fe{params={};original;constructor(t){if(typeof t=="string"&&(this.original=t),t){const n=le(t);n.value&&(this.params=n.value)}}get(t,n){return this.params[t]||n}set(t,n){}delete(t){delete this.params[t]}clear(){this.params={}}goto(t){Wn(t,this.params)}test(t){if(typeof t=="object"){const n={};for(const[r,i]of Object.entries(t.params))if(this.params[r]){const a=le(this.params[r]);if(i instanceof RegExp){const o=a0.any[v.regexp](i,this.params[r]);if(o)n[r]=o;else return{condition:"no-match"}}else a.identity===v.number?a.value===this.params[r]&&(n[r]=a.value):a.identity===v.string?n[r]=a.value===this.params[r]:a.identity===v.boolean?n[r]=a.value===!!this.params[r]:a.identity===v.array&&(n[r]=a.value.includes(this.params[r]))}else return{condition:"no-match"};return Object.keys(n).length===Object.keys(t).length&&a0.valid[v.object](n)?{condition:"exact-match",matches:le(n).value}:{condition:Object.keys(n).length>1&&Object.keys(t).length!==Object.keys(n).length?"exact-match":"no-match",matches:n}}}toString(){const t=n=>Array.isArray(n)?n.map(r=>t(r)).join(","):typeof n=="object"&&n!==null?Object.entries(n).map(([r,i])=>`${r}:${t(i)}`).join(","):encodeURIComponent(n);return Object.entries(this.params).map(([n,r])=>`${encodeURIComponent(n)}=${t(r)}`).join("&")}toJSON(t){return Object.fromEntries(Object.entries(this.params).map(([n,r])=>[n,r.toString()]))}}var e0;(function(e){e.parse=t=>{if(t){const[n,r=""]=t.split("#"),[i,a=""]=r.split("?");return{path:i,query:new Fe(a),hash:r}}}})(e0||(e0={}));const Ne=e=>(e&&!e.startsWith("/")&&(e="/"+e),e);var _0;(function(e){e.parse=t=>{if(t===void 0||t.length===0)throw new Error(`invalid URL: ${t}`);const n=t.startsWith("file:///");if(t.includes("://")&&!n){const[i,a]=t.split("://"),o=a.match(/^([^/:]+)(?::(\d+))?(.*)$/),[l,s,c]=o?.slice(1)??[],[h,d=""]=(c||"").split("?"),u=e0.parse(t);return{protocol:i,host:l,port:s,path:Ne(h)||"/",query:new Fe(d),hash:u}}else if(n){const[i,a]=t.split("://"),o=a.indexOf("#"),l=a.indexOf("?");let s="",c="/",h;if(o>l&&l!=-1)s=a.slice(0,l),c=Ne(a.slice(l)),h=new Fe(c);else{s=a.slice(0,o),c=Ne(a.slice(o));const[u,f]=(c||"").split("?");h=new Fe(f)}const d=e0.parse(a);return{protocol:i,host:s,port:"",path:c,query:h,hash:d}}else{const[i,a=""]=t.split("?"),o=e0.parse(t);return{protocol:window.location.protocol.replace(":",""),host:window.location.hostname,port:window.location.port,path:Ne(i)||"/",query:new Fe(a),hash:o}}},e.path=t=>t.split("?")[0]})(_0||(_0={}));const d0={};var J;(function(e){e.config=t=>({tracing:t?.tracing||d0?.SPA_ROUTER?.tracing||!1,logging:{level:t?.logging?.level||d0?.SPA_ROUTER?.logging?.level||4,console:t?.logging?.console||d0?.SPA_ROUTER?.logging?.console,sink:t?.logging?.sink||d0?.SPA_ROUTER?.logging?.sink}}),e.current=e.config()})(J||(J={}));var i0;(function(e){let t;(function(n){n[n.FATAL=-1]="FATAL",n[n.ERROR=1]="ERROR",n[n.INFO=2]="INFO",n[n.DEBUG=3]="DEBUG",n[n.TRACE=4]="TRACE",n[n.DISABLED=5]="DISABLED"})(t=e.LogLevel||(e.LogLevel={})),e.info=(...n)=>{e.log(t.INFO,...n)},e.debug=(...n)=>{e.log(t.DEBUG,...n)},e.error=(...n)=>{e.log(t.ERROR,...n)},e.trace=(...n)=>{e.log(t.TRACE,...n)},e.fatal=(...n)=>{throw e.log(t.FATAL,...n),new Error("Fatal error")},e.log=(n,...r)=>{n<=J.current.logging.level&&n!==t.DISABLED&&(J.current.logging.console&&(r.some(i=>i?.toConsole)?r.forEach(i=>i?.toConsole?.(J.current.logging.level)):J.current.logging.console&&console.log(...r)),J.current.logging.sink&&J.current.logging.sink(r))}})(i0||(i0={}));var k0;(function(e){e.from=t=>{if(typeof t=="string")return new RegExp(t);if(t instanceof RegExp)return new RegExp(t.source);throw new Error("invalid regexp expression")},e.can=t=>/[[\]{}()*+?.,\\^$|#\s]|\\[wWdDsS]|\(\?[:!=<]?/.test(t)})(k0||(k0={}));function Dn(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}const E1=async e=>Dn(e)?await e():e();class u1 extends Map{#e=P(!1);get size(){return w(this.#e),super.size}#t(){S(this.#e,!w(this.#e))}add(t,n){if(this.has(t))throw new Error(`key ${t} already exists`);return this.set(t,n)}get(t){return w(this.#e),super.get(t)}set(t,n){const r=super.set(t,n);return this.#t(),r}delete(t){const n=super.delete(t);return n&&this.#t(),n}clear(){const t=super.clear();return this.#t(),t}keys(){return w(this.#e),super.keys()}values(){return w(this.#e),super.values()}entries(){return w(this.#e),super.entries()}forEach(t){return w(this.#e),super.forEach(t)}[Symbol.iterator](){return w(this.#e),super[Symbol.iterator]()}}class $n{prefix;id;date;name;description;metadata;#e=P(oe(new u1));get traces(){return w(this.#e)}set traces(t){S(this.#e,t,!0)}constructor(t,n){this.prefix=n,this.name=t.name,this.id=t.id||Math.random().toString(36).substring(2,25),this.description=t.description,this.metadata=t.metadata,this.date=t.date||new Date}trace(t,n){const r=t.id||Math.random().toString(36).substring(2,25);return t=new Bn(t,this.traces.size+1,this,n),this.traces.set(r,t),i0.trace(n,t),t}get(){return this.traces.values()}}class Bn{prefix;id;index;date;name;description;metadata;span;constructor(t,n,r,i){this.id=t.id||Math.random().toString(36).substring(2,25),this.index=n,this.date=t.date||new Date,this.name=t.name,this.description=t.description,this.metadata=t.metadata,this.span=r,this.prefix=t.prefix}toConsole(t){const n=["%c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s","color: #505050",this.date?.toISOString(),"color: #7A7A7A","color: #915CF2; font-weight: bold",this.span?.name||this.id,"color: #7A7A7A; font-weight: bold","color: #C3F53B; font-weight: bold",this.index,"color: #7A7A7A; font-weight: bold","color: #3BAEF5; font-weight: bold",`${this.metadata?.router?`[${this.metadata.router.id}] `:""}${this.name}`,"color: #06E96C",this.description];this.prefix&&(n[0]=`${this.prefix} %c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s`),J.current.tracing.level>=i0.LogLevel.TRACE?(n[0]+=`
%c%s`,n.push("color: #6B757F",`attached trace metadata:

${JSON.stringify({span:this.span.metadata,trace:this.metadata},null,2)}`)):J.current.tracing.level>=i0.LogLevel.DEBUG&&(this.span&&n.push(this.span.metadata),this.metadata&&n.push(this.metadata)),console.log(...n)}}const qn=new u1,ht=(e,t)=>{if(J.current.tracing){const n=new $n({name:e,metadata:t});return qn.set(e,n),n}};var J0;(function(e){e.base=(t,n)=>n.match(new RegExp(`^${t}(/|$)`))!==null})(J0||(J0={}));class x0{route;result;constructor(t){this.route=t.route,this.result=t.result}toString(){let t="";if(this.result.querystring.original&&typeof this.result.querystring.original=="object"){const n=new URLSearchParams;for(const[r,i]of Object.entries(this.result.querystring.original))i!=null&&n.append(r,String(i));t=n.toString()}else this.result.querystring.original&&(t=String(this.result.querystring.original));return`${this.result.path.original}${t?`?${t}`:""}`}}class Un{name;basePath;path;querystring;component;props;hooks;children;status;constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=t.path,this.querystring=t.querystring,this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status}toJSON(){return{name:this.name,basePath:this.basePath,path:this.path,props:this.props,component:this.component,querystring:this.querystring,hooks:this.hooks,children:this.children,status:this.status}}}class f1{name;basePath;path;querystring;component;props;hooks;children;status;#e=P(oe([]));get traces(){return w(this.#e)}set traces(t){S(this.#e,t,!0)}constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=typeof t.path=="string"?Ne(t.path):t.path,t.querystring&&(this.querystring=new Fe(t.querystring)),this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status,this.children=t.children?.map(n=>new f1(n))}test(t){const n=_0.path(t.toString());if(typeof this.path=="string")if(k0.can(this.path)){const r=k0.from(this.path).exec(n);if(r)return{condition:"exact-match",params:r.groups}}else{if(this.path===n)return{condition:"exact-match",params:this.path};if(J0.base(this.path,n))return{condition:"base-match",params:{}}}else if(this.path instanceof RegExp){const r=a0.any[v.regexp](this.path,n);if(r)return{condition:"exact-match",params:r}}else if(typeof this.path=="number"&&this.path===le(n).value)throw new Error("numbered route match not supported at the route.path level");return{condition:"no-match",params:{}}}absolute(){return this.basePath?`${this.basePath}${this.path}`:this.path.toString()}}class Zn{id;basePath;routes;hooks;initialPath;notFoundComponent;statuses;renavigation;constructor(t){this.id=t.id||Math.random().toString(36).substring(2,15),this.basePath=t.basePath,this.hooks=t.hooks,this.initialPath=t.initialPath,this.notFoundComponent=t.notFoundComponent,this.statuses=t.statuses,this.renavigation=t.renavigation??!0,this.routes=t.routes.map(n=>new Un({...n,...t}))}toJSON(){return{id:this.id,basePath:this.basePath,routes:this.routes,hooks:this.hooks}}}var ve;(function(e){e[e.OK=200]="OK",e[e.PermanentRedirect=301]="PermanentRedirect",e[e.TemporaryRedirect=302]="TemporaryRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.InternalServerError=500]="InternalServerError"})(ve||(ve={}));const Gn=["","/","/*","/^.*$/","/.*/"];class Jn{id;routes=new Set;handlers;config;applyFn;#e=P(!1);get navigating(){return w(this.#e)}set navigating(t){S(this.#e,t,!0)}#t=P();get current(){return w(this.#t)}set current(t){S(this.#t,t,!0)}constructor(t,n){this.id=t.id||Math.random().toString(36).substring(2,15),this.config=t,this.applyFn=n,this.handlers={pushStateHandler:()=>this.handleStateChange(location.toString()),replaceStateHandler:()=>this.handleStateChange(location.toString()),popStateHandler:()=>this.handleStateChange(location.toString()),hashChangeHandler:()=>this.handleStateChange(location.toString())},window.addEventListener("pushState",this.handlers.pushStateHandler),window.addEventListener("replaceState",this.handlers.replaceStateHandler),window.addEventListener("popstate",this.handlers.popStateHandler),window.addEventListener("hashchange",this.handlers.hashChangeHandler);for(let r of t.routes)this.routes.add(new f1({...r,basePath:r.basePath||this.config.basePath}))}async handleStateChange(t,n){const{path:r,query:i}=_0.parse(t);this.navigating=!0,n||(n=ht("detected history change event")),n?.trace({prefix:"🔍",name:"router-instance.handleStateChange",description:`attempting to handle a new state change for path "${r}"`,metadata:{router:{id:this.config.id,basePath:this.config.basePath},location:"/src/lib/router-instance.svelte:handleStateChange()",basePath:this.config.basePath,path:r,query:i,url:t}});const a=await this.get(r,i,n);if(a&&R0.includes(a.result.path.condition)){if(n?.trace({prefix:"✅",name:"router-instance.handleStateChange",description:`route found for path "${r}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},path:r,query:i?.params||!1,route:a,url:t}}),this.config.hooks?.pre&&!await this.evaluateHooks(a,this.config.hooks.pre)){this.navigating=!1;return}if(a.route?.hooks?.pre&&!await this.evaluateHooks(a,a.route.hooks.pre)){this.navigating=!1;return}const o=this.current&&this.current.result.path.original===a.result.path.original&&JSON.stringify(this.current.result.querystring.params)===JSON.stringify(a.result.querystring.params);if(this.config.renavigation!==!1?(this.current=void 0,n?.trace({prefix:o?"🔄":"✅",name:"router-instance.applyRoute",description:o?`re-mounting same route "${a.result.path.original}" (renavigation enabled)`:`applying new route "${a.result.path.original}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:o,renavigation:this.config.renavigation,result:a}}),this.applyFn(a,n),this.current=a):(n?.trace({prefix:"⏭️",name:"router-instance.skipRenavigation",description:`skipping same route "${a.result.path.original}" (renavigation disabled)`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:o,renavigation:this.config.renavigation,result:a}}),this.current=a),a&&a.route?.hooks?.post&&!await this.evaluateHooks(a,a.route.hooks.post)){this.navigating=!1;return}this.config.hooks?.post&&await this.evaluateHooks(a,this.config.hooks.post),this.current=a}this.navigating=!1}async evaluateHooks(t,n){if(Array.isArray(n))for(const r of n){if(!await E1(()=>r(t)))return!1;await new Promise(i=>setTimeout(i,50))}else if(!await E1(()=>n(t)))return!1;return!0}async get(t,n,r){t=t.replace("/#","");const i=Ne(t.replace(this.config.basePath||"/","")),a=l=>{let s;for(const c of this.routes)if(!c.path||Gn.includes(c.path.toString())){s=c;break}if(r?.trace({prefix:s?"✅":"❌",name:"router-instance.getDefaultRoute",description:`get default route because "${l}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,route:s}}),s)return new x0({route:s,result:{path:{condition:"default-match",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:s.component,status:ve.OK}})};if(r?.trace({prefix:"🔍",name:"router-instance.get",description:`${this.config.id} with base path "${this.config.basePath||"/"}" is attempting to get a route for path "${t}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i}}),this.config.basePath===t)return a("base path is the same as the path");let o;for(const l of this.routes){const s=l.test(i);if(s&&R0.includes(s.condition))if(r?.trace({prefix:"✅",name:"router-instance.get:routesloop",description:`${s.condition} for inbound path "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get():forloop",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,route:l,evaluation:{path:s}}}),l.querystring&&n){const c=n.test(l.querystring);R0.includes(c?.condition)&&(r?.trace({prefix:"✅",name:"router-instance.get.evaluateQuery",description:`${c?.condition} evaluating querystring "${n?.toString()}" for the route "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,evaluation:{path:s,querystring:c}}}),o=new x0({route:l,result:{path:{...s,original:i},querystring:{...c,original:n.toJSON()},component:l.component,status:ve.OK}}))}else o=new x0({route:l,result:{path:{...s,original:i},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:l.component,status:ve.OK}})}if(t==="/")return a("no routes match, last resort is to find a default route");if(!o&&this.config.statuses?.[404]){const l=this.config.statuses[404];return typeof l=="function"?{result:{...l({result:{path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}},r),path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}}:{result:{...l,path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:ve.NotFound}}}return o}deregister(t){window.removeEventListener("pushState",this.handlers.pushStateHandler),window.removeEventListener("replaceState",this.handlers.replaceStateHandler),window.removeEventListener("popstate",this.handlers.popStateHandler),window.removeEventListener("hashchange",this.handlers.hashChangeHandler),ut.deregister(this.config.id,t)}get routesArray(){return Array.from(this.routes)}toJSON(){return{id:this.id,config:this.config}}}class Kn{instances=new u1;constructor(){if(window.__SVELTE_SPA_ROUTER_REGISTERED__)return window.__SVELTE_SPA_ROUTER_REGISTERED__;window.__SVELTE_SPA_ROUTER_REGISTERED__=this;const{pushState:t,replaceState:n}=window.history;window.history.pushState=function(...r){t.apply(window.history,r),window.dispatchEvent(new Event("pushState"))},window.history.replaceState=function(...r){n.apply(window.history,r),window.dispatchEvent(new Event("replaceState"))}}register(t,n,r){if(this.instances.has(t.id))throw new Error(`router instance with id ${t.id} already registered`);const i=new Jn(t,n);return r&&r.trace({prefix:"🔍",name:"registry.register",description:"registering a new router instance",metadata:{router:{id:t.id,basePath:t.basePath},location:"/src/lib/registry.svelte:register()",config:t}}),this.instances.set(t.id,i),i}deregister(t,n){const r=this.instances.get(t);if(n&&n.trace({prefix:r?"✅":"❌",name:"registry.deregister",description:"deregistering a router instance",metadata:{router:{id:t,basePath:r.config.basePath},location:"/src/lib/registry.svelte:deregister()",config:r.config}}),r)this.instances.delete(t);else throw new Error(`router instance with id ${t} not found`)}get(t){return this.instances.get(t)}}const ut=window.__SVELTE_SPA_ROUTER_REGISTRY__||new Kn;function Yn(e,t){Y(t,!0);let n=q(t,"instance",15),r=Rn(t,["$$slots","$$events","$$legacy","instance"]);const i=ht(t.id?`[${t.id}]`:"router");let a=P(null),o,l=P(void 0),s=P(oe({}));const c=async(p,y)=>{if(S(l,p,!0),y?.trace({prefix:"✅",name:"apply",description:`<Router${o.config.id?` id="${o.config.id}"`:""}/> applying route ${p.result.path.original} (${p.result.path.condition})`,metadata:{location:"/src/lib/router.svelte:apply()",router:{id:o.config.id,basePath:o.config.basePath},result:p}}),typeof p.result.component=="function"&&p.result.component.constructor.name==="AsyncFunction"){const _=await p.result.component();S(a,_.default||_,!0)}else S(a,p.result.component,!0);S(l,{...p},!0),S(s,w(l).route?.props,!0)};o=ut.register(new Zn(r),c,i),i?.trace({prefix:"✅",name:"<Router/> Component",description:"new component mounted",metadata:{router:{id:o.config.id,basePath:o.config.basePath},location:"/src/lib/router.svelte:mount()"}}),n(o),i&&(i.metadata={router:o.config.id}),o.handleStateChange(location.toString(),i),me(()=>{o.deregister(i)});const{routes:h,basePath:d,...u}=r;var f=k1(),m=$0(f);zn(m,()=>w(l)?.result?.path?.original||Math.random(),p=>{var y=k1(),_=$0(y);Ln(_,()=>w(a),(b,g)=>{g(b,Fn({get route(){return w(l)}},()=>w(s),()=>u))}),R(p,y)}),R(e,f),Q()}var Qn=N('<main><p class="lbl-title svelte-vtqfo5">Freelancer & Hobbyist based in Edinburgh, Scotland</p> <p class="lbl-contact svelte-vtqfo5">Email: elecarno@proton.me • Discord: @elecarno</p> <div class="con-names svelte-vtqfo5"><button class="btn-name svelte-vtqfo5" id="btn-1"><h1 class="svelte-vtqfo5">Elecarno</h1> <p class="svelte-vtqfo5">Developer · Graphic Designer · Video Editor · VRChat Artist</p></button> <button class="btn-name svelte-vtqfo5" id="btn-2"><h1 class="svelte-vtqfo5">Monarch Atolla</h1> <p class="svelte-vtqfo5">Musical Artist</p></button> <button class="btn-name svelte-vtqfo5" id="btn-4"><h1 class="svelte-vtqfo5">B. McEwan</h1> <p class="svelte-vtqfo5">3D Artist · Writer</p></button> <button class="btn-name svelte-vtqfo5" id="btn-3"><h1 class="svelte-vtqfo5">Arkady Orlunda</h1> <p class="svelte-vtqfo5">Writer · Screenwriter · Composer</p></button></div></main>');function Xn(e){function t(h){document.documentElement.style.setProperty("--site-bg",h)}function n(){document.documentElement.style.setProperty("--site-bg","rgba(46, 115, 89, 1)")}function r(h){window.location.href=h}var i=Qn(),a=z(k(i),4),o=k(a),l=z(o,2),s=z(l,2),c=z(s,2);L("click",o,()=>{r("/elecarno/")}),L("mouseenter",o,()=>{t("#3d4fad")}),L("mouseleave",o,n),L("click",l,()=>{r("/ma/")}),L("mouseenter",l,()=>{t("#ff5733")}),L("mouseleave",l,n),L("click",s,()=>{r("/mcewan/")}),L("mouseenter",s,()=>{t("#b3923e")}),L("mouseleave",s,n),L("click",c,()=>{r("/ao/")}),L("mouseenter",c,()=>{t("#de5b89")}),L("mouseleave",c,n),R(e,i)}var e2=N('<main><h1 class="svelte-1r6spzv">404: Not Found</h1> <p>It would appear you are trying to access a page that does not exist on my domain!<br/> Double check the address, or use the button below to go my home page.</p> <button>Go to Home</button> <p>Alternatively, click <a href="links">here</a> to see a list of all pages on this domain.</p></main>');function t2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-404")}),me(()=>{document.documentElement.classList.remove("pg-404")});function n(a){window.location.href=a}fe();var r=e2();ze(a=>{ue.title="Elecarno | 404"});var i=z(k(r),4);L("click",i,()=>{n("/")}),R(e,r),Q()}var n2=N(`<main class="svelte-buje38"><h1 class="svelte-buje38">Links</h1> <p>A list of all sites and pages on this domain.</p> <ul><li><a href="/">/</a> - Home Page</li> <li><a href="/*">/*</a> - 404 Page</li> <li><a href="/links/">/links/</a> - Links Page</li></ul> <h3 class="svelte-buje38">Project Sites</h3> <ul><li><a href="/past-paper-viewer/">/past-paper-viewer/</a> - Website for the Past Paper Viewer project</li> <li><a href="/crossing-red-helios/">/crossing-red-helios/</a> - Website for the Crossing Red-Helios project</li> <li><a href="/crh-wiki/">/crh-wiki/</a> - Wiki for the Crossing Red-Helios project</li> <li><a href="/aster-docs/">/aster-docs/</a> - Documentation for the <a href="https://www.github.com/jachdich/aster-server">Aster</a> project</li> <li><a href="/music-theory-tester/">/music-theory-tester/</a> - A simple web app for memorising heptatonic musical scales.</li></ul> <hr/> <h2 class="svelte-buje38">Elecarno</h2> <a href="/elecarno/">/elecarno/</a> <hr/> <h2 class="svelte-buje38">Monarch Atolla</h2> <a href="/ma/">/ma/</a> <h3 class="svelte-buje38">Albums & EPs</h3> <ul><li><a href="/ma/amber/">/ma/amber/</a> - An Amber Ballad</li> <li><a href="/ma/hope/">/ma/hope/</a> - Hope Need Not Be Real</li> <li><a href="/ma/candle/">/ma/candle/</a> - Candlelight Fragments</li> <li><a href="/ma/brothers/">/ma/brothers/</a> - Brothers at the End of an Era</li></ul> <h3 class="svelte-buje38">Singles</h3> <ul><li><a href="/ma/golden">/ma/golden/</a> - Golden Friend of Silver Water</li> <li><a href="/ma/winter">/ma/winter/</a> - Call Your Names In Winter Night</li> <li><a href="/ma/classroom">/ma/classroom/</a> Soft Eyes Under Classroom Glow</li> <li><a href="/ma/shimmering">/ma/shimmering/</a> - Shimmering Flower</li> <li><a href="/ma/simille">/ma/simile/</a> - Fall in Simile</li> <li><a href="/ma/heart">/ma/heart/</a> - Brother by Heart</li> <li><a href="/ma/silent">/ma/silent/</a> - When Silent Was Joy</li> <li><a href="/ma/parallels">/ma/parallels/</a> - Parallels</li></ul> <hr/> <h2 class="svelte-buje38">B. McEwan</h2> <a href="/mcewan/">/mcewan/</a> <h3 class="svelte-buje38">3D Artist</h3> <a href="/mcewan/3d/">/mcewan/3d/</a> <ul><li><a href="/mcewan/3d/dragonfly">/mcewan/3d/dragonfly/</a> - Mechanical Dragonfly</li> <li><a href="/mcewan/3d/butterfly">/mcewan/3d/butterfly/</a> - Mechanical Butterfly</li> <li><a href="/mcewan/3d/ontop">/mcewan/3d/ontop/</a> - We're on Top</li> <li><a href="/mcewan/3d/fighter">/mcewan/3d/fighter/</a> - Space Fighter</li> <li><a href="/mcewan/3d/robot">/mcewan/3d/robot/</a> - Robot</li></ul> <h3 class="svelte-buje38">Writer</h3> <a href="/mcewan/3d/">/mcewan/writer/</a> <hr/> <h2 class="svelte-buje38">Arkady Orlunda</h2> <a href="/ao/">/ao/</a></main>`);function r2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-links")}),me(()=>{document.documentElement.classList.remove("pg-links")}),fe();var n=n2();ze(r=>{ue.title="Elecarno | Links"}),R(e,n),Q()}var a2=N('<main><h1 class="svelte-1n1xj68">Elecarno</h1> <p>Page In Development</p></main>');function i2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-elecarno")}),me(()=>{document.documentElement.classList.remove("pg-elecarno")}),fe();var n=a2();ze(r=>{ue.title="Elecarno"}),R(e,n),Q()}var o2=N('<a class="a-rel svelte-104jnap"><!></a>'),s2=N('<a class="a-rel svelte-104jnap"><!></a>'),l2=N('<main class="svelte-104jnap"><div class="con-logo svelte-104jnap"><h1 class="mon svelte-104jnap">Monarch</h1> <h1 class="ato svelte-104jnap">Atolla</h1></div> <h1 style="margin-top: 75px;" class="svelte-104jnap">Albums & EPs</h1> <div class="con-display svelte-104jnap"></div> <h1 style="margin-top: 150px;" class="svelte-104jnap">Singles</h1> <div class="con-display svelte-104jnap"></div></main>');function c2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-ma")}),me(()=>{document.documentElement.classList.remove("pg-ma")});let n=[{name:"An Amber Ballad",link:"amber",img:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc"},{name:"Hope Need <br> Not Be Real",link:"hope",img:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd"},{name:"Candlelight <br> Fragments",link:"candle",img:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773"},{name:"Brothers at the <br> End of an Era",link:"brothers",img:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae"}],r=[{name:"Golden Friend of <br> Silver Water",link:"golden",img:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd"},{name:"Call Your Names <br> in Winter Night",link:"winter",img:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db"},{name:"Soft Eyes Under <br> Classroom Glow",link:"classroom",img:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2"},{name:"Shimmering <br> Flower",link:"shimmering",img:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f"},{name:"Fall in Simile",link:"simile",img:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e"},{name:"Brother by Heart",link:"heart",img:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76"},{name:"When Silent <br> Was Joy",link:"silent",img:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0"},{name:"Parallels",link:"parallels",img:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6"}];fe();var i=l2();ze(l=>{ue.title="Monarch Atolla"});var a=z(k(i),4);Z0(a,5,()=>n,U0,(l,s)=>{var c=o2(),h=k(c);G0(h,()=>w(s).name),we(()=>{re(c,"href",`/ma/${w(s).link??""}`),Ie(c,`background-image: url(${w(s).img??""})`)}),R(l,c)});var o=z(a,4);Z0(o,5,()=>r,U0,(l,s)=>{var c=s2(),h=k(c);G0(h,()=>w(s).name),we(()=>{re(c,"href",`/ma/${w(s).link??""}`),Ie(c,`background-image: url(${w(s).img??""})`)}),R(l,c)}),R(e,i),Q()}const L1={icon:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",mask:"M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",color:"#7f7f7f"},h2={bandsintown:{icon:"M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",mask:"M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",color:"#1B8793"},behance:{icon:"M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",mask:"M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",color:"#007CFF"},codepen:{icon:"M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",mask:"M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",color:"##151515"},discord:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 26.404297 16.828125 L 26.769531 17.259766 C 20.186671 19.137498 17.152344 21.990234 17.152344 21.990234 C 17.152344 21.990234 17.957407 21.557233 19.310547 20.943359 C 23.223697 19.246178 26.331328 18.778253 27.611328 18.669922 C 27.830758 18.633812 28.012992 18.597656 28.232422 18.597656 C 30.463282 18.308769 32.987954 18.236508 35.621094 18.525391 C 39.095384 18.922604 42.825476 19.931951 46.628906 21.990234 C 46.628906 21.990234 43.738624 19.282029 37.521484 17.404297 L 38.035156 16.828125 C 38.035156 16.828125 43.044257 16.719236 48.310547 20.619141 C 48.310547 20.619141 53.576172 30.044365 53.576172 41.671875 C 53.576172 41.671875 50.468999 46.907386 42.386719 47.160156 C 42.386719 47.160156 41.069796 45.606565 39.972656 44.234375 C 44.763516 42.898295 46.591797 39.9375 46.591797 39.9375 C 45.092367 40.91248 43.666719 41.598919 42.386719 42.068359 C 40.558139 42.826669 38.802844 43.332214 37.083984 43.621094 C 33.573124 44.271074 30.354188 44.091468 27.611328 43.585938 C 25.526758 43.188727 23.735758 42.610963 22.236328 42.033203 C 21.395188 41.708213 20.480696 41.310228 19.566406 40.804688 C 19.456696 40.732487 19.346048 40.69722 19.236328 40.625 C 19.163228 40.5889 19.126414 40.551755 19.089844 40.515625 C 18.431554 40.154535 18.066406 39.902344 18.066406 39.902344 C 18.066406 39.902344 19.822217 42.789919 24.466797 44.162109 C 23.369647 45.534299 22.015625 47.160156 22.015625 47.160156 C 13.933335 46.907386 10.861328 41.671875 10.861328 41.671875 C 10.861328 30.044375 16.128906 20.619141 16.128906 20.619141 C 21.395196 16.719236 26.404297 16.828125 26.404297 16.828125 z M 25.380859 30.296875 C 23.296289 30.296875 21.650391 32.101957 21.650391 34.304688 C 21.650391 36.507407 23.332859 38.3125 25.380859 38.3125 C 27.465429 38.3125 29.111328 36.507407 29.111328 34.304688 C 29.147928 32.101957 27.465429 30.296875 25.380859 30.296875 z M 38.728516 30.296875 C 36.643946 30.296875 34.998047 32.101957 34.998047 34.304688 C 34.998047 36.507407 36.680516 38.3125 38.728516 38.3125 C 40.813086 38.3125 42.458984 36.507407 42.458984 34.304688 C 42.458984 32.101957 40.813086 30.296875 38.728516 30.296875 z ",color:"#7289DA"},dribbble:{icon:"M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",mask:"M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",color:"#ea4c89"},dropbox:{icon:"M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",mask:"M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",color:"#1081DE"},email:L1,facebook:{icon:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",mask:"M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",color:"#3b5998"},fivehundredpix:{icon:"M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",mask:"M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",color:"#222222"},flickr:{icon:"M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",mask:"M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",color:"#0063db"},foursquare:{icon:"M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",mask:"M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",color:"#0072b1"},github:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",color:"#24292e"},google:{icon:"M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",mask:"M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",color:"#dd4b39"},google_play:{icon:"M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",mask:"M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",color:"#40BBC1"},instagram:{icon:"M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z",mask:"M0,0v64h64V0H0z M 42.03,23.99 C 42.03,24.99 41.22,25.79 40.23,25.79 39.23,25.79 38.43,24.99 38.43,23.99 38.43,22.99 39.23,22.19 40.23,22.19 41.22,22.19 42.03,22.99 42.03,23.99 Z M 24.52,31.99 C 24.52,27.74 27.97,24.29 32.22,24.29 36.47,24.29 39.92,27.75 39.92,31.99 39.92,36.24 36.47,39.70 32.22,39.70 27.97,39.70 24.52,36.25 24.52,31.99 Z M 27.22,31.99 C 27.22,34.76 29.46,36.99 32.22,36.99 34.98,36.99 37.22,34.76 37.22,31.99 37.22,29.23 34.98,27.00 32.22,27.00 29.46,27.00 27.22,29.23 27.22,31.99 Z M 38.28,19.79 C 36.70,19.72 36.22,19.70 32.22,19.70 28.22,19.70 27.74,19.71 26.17,19.79 24.69,19.85 23.90,20.11 23.37,20.31 22.67,20.58 22.17,20.90 21.65,21.43 21.13,21.96 20.80,22.46 20.53,23.16 20.33,23.68 20.08,24.48 20.01,25.94 19.94,27.52 19.92,27.99 19.92,32.01 19.92,36.01 19.94,36.48 20.01,38.06 20.08,39.52 20.33,40.32 20.53,40.84 20.80,41.54 21.13,42.05 21.65,42.57 22.17,43.10 22.67,43.41 23.37,43.69 23.90,43.90 24.69,44.15 26.17,44.21 27.74,44.28 28.22,44.30 32.22,44.30 36.22,44.30 36.70,44.28 38.28,44.21 39.75,44.15 40.54,43.89 41.07,43.69 41.77,43.42 42.27,43.10 42.80,42.57 43.32,42.05 43.64,41.54 43.91,40.84 44.12,40.32 44.36,39.52 44.43,38.06 44.50,36.48 44.52,36.01 44.52,32.01 44.52,27.99 44.50,27.52 44.43,25.94 44.36,24.48 44.12,23.68 43.91,23.16 43.64,22.46 43.32,21.96 42.80,21.43 42.27,20.90 41.77,20.59 41.07,20.31 40.54,20.10 39.75,19.85 38.28,19.79 Z M 26.03,17.09 C 27.64,17.02 28.15,17.00 32.22,17.00 36.27,17.00 36.80,17.02 38.38,17.08 38.38,17.08 38.41,17.08 38.41,17.08 40.01,17.15 41.10,17.41 42.06,17.78 43.04,18.17 43.87,18.68 44.71,19.51 45.54,20.34 46.06,21.18 46.44,22.17 46.81,23.13 47.06,24.21 47.14,25.81 47.21,27.41 47.23,27.92 47.23,31.99 47.23,36.07 47.21,36.58 47.14,38.18 47.06,39.78 46.81,40.87 46.44,41.82 46.06,42.80 45.54,43.65 44.71,44.48 43.87,45.31 43.04,45.83 42.06,46.21 41.10,46.58 40.00,46.84 38.41,46.91 36.81,46.98 36.31,47.00 32.23,47.00 28.15,47.00 27.64,46.98 26.04,46.91 24.44,46.84 23.35,46.58 22.40,46.21 21.42,45.82 20.58,45.31 19.75,44.48 18.91,43.65 18.39,42.81 18.01,41.82 17.64,40.86 17.39,39.78 17.32,38.18 17.25,36.58 17.23,36.07 17.23,31.99 17.23,27.92 17.25,27.41 17.32,25.82 17.39,24.21 17.64,23.13 18.01,22.17 18.39,21.20 18.91,20.35 19.75,19.52 20.58,18.69 21.41,18.17 22.40,17.78 23.35,17.42 24.44,17.16 26.03,17.09 Z",color:"#e94475"},"itch.io":{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32 16 C 36.482469 15.999275 39.489763 16.027944 43.828125 16.197266 C 45.223688 17.11826 47.973899 20.631595 48 21.552734 L 48 23.076172 C 48 25.008914 46.375769 26.707031 44.900391 26.707031 C 43.128974 26.707031 41.652344 25.07576 41.652344 23.138672 C 41.652344 25.07576 40.226756 26.707031 38.455078 26.707031 C 36.68353 26.707031 35.302734 25.07576 35.302734 23.138672 C 35.302734 25.07576 33.787432 26.707031 32.015625 26.707031 L 31.984375 26.707031 C 30.212699 26.707031 28.697266 25.07576 28.697266 23.138672 C 28.697266 25.07576 27.316728 26.707031 25.544922 26.707031 C 23.773245 26.707031 22.347656 25.07576 22.347656 23.138672 C 22.347526 25.07576 20.871157 26.707031 19.099609 26.707031 C 17.624234 26.707031 16 25.008624 16 23.076172 L 16 21.552734 C 16.026082 20.63174 18.776052 17.11855 20.171875 16.197266 C 21.406769 16.077682 27.517662 16.000435 32 16 z M 28.673828 25.796875 A 3.6505562 4.0580007 0 0 0 29.292969 26.689453 A 3.7155025 4.1301957 0 0 0 31.894531 27.867188 C 31.930136 27.867188 31.964779 27.866621 32 27.865234 C 32.035221 27.866088 32.07219 27.867188 32.107422 27.867188 A 3.7155025 4.1301957 0 0 0 34.708984 26.689453 A 3.6502954 4.0577109 0 0 0 35.326172 25.796875 A 3.6548598 4.0627847 0 0 0 35.949219 26.689453 C 36.617985 27.416189 37.534472 27.867188 38.544922 27.867188 A 3.7141985 4.1287462 0 0 0 41.146484 26.689453 C 41.388792 26.425753 41.573442 26.142952 41.742188 25.814453 C 41.910814 26.143677 42.1458 26.425338 42.388672 26.689453 A 3.7168066 4.1316454 0 0 0 44.990234 27.867188 C 45.112172 27.867188 45.239291 27.830162 45.341797 27.791016 C 45.484209 29.439616 45.543344 31.01503 45.564453 32.164062 L 45.566406 32.169922 C 45.569073 32.753426 45.571445 33.23411 45.574219 33.900391 C 45.546831 37.359375 45.881298 45.110721 44.201172 47.015625 C 41.597581 47.690463 36.806287 47.998187 32 48 C 27.193582 47.998115 22.402421 47.690463 19.798828 47.015625 C 18.118702 45.110865 18.455126 37.359375 18.427734 33.900391 C 18.430401 33.233965 18.432987 32.753281 18.435547 32.169922 L 18.435547 32.164062 C 18.456799 31.015319 18.515782 29.439616 18.658203 27.791016 C 18.760709 27.830151 18.887947 27.867188 19.009766 27.867188 A 3.7168066 4.1316454 0 0 0 21.611328 26.689453 C 21.85416 26.425316 22.089324 26.143533 22.257812 25.814453 C 22.426437 26.142953 22.611207 26.425606 22.853516 26.689453 A 3.7144592 4.129036 0 0 0 25.455078 27.867188 C 26.465659 27.867188 27.382014 27.416332 28.050781 26.689453 A 3.6548598 4.0627847 0 0 0 28.673828 25.796875 z M 37.998047 29.636719 L 37.998047 29.638672 L 37.996094 29.638672 C 36.938044 29.640989 35.998583 29.639715 34.833984 31.052734 C 33.917302 30.94591 32.958545 30.891191 32 30.892578 C 31.041455 30.890977 30.082567 30.945897 29.166016 31.052734 C 28.001416 29.63986 27.061956 29.641019 26.003906 29.638672 L 26.001953 29.638672 C 25.502078 29.638672 23.502722 29.638165 22.109375 33.988281 L 20.613281 39.955078 C 19.504239 44.394801 20.966648 44.503759 22.792969 44.507812 C 25.50128 44.395752 27.001953 42.209586 27.001953 40.023438 C 28.501065 40.296565 30.250885 40.433594 32 40.433594 C 33.748987 40.433449 35.498804 40.296562 36.998047 40.023438 C 36.998047 42.209586 38.496636 44.395759 41.205078 44.507812 C 43.031397 44.503898 44.495762 44.39464 43.386719 39.955078 L 41.890625 33.988281 C 40.497278 29.638166 38.497925 29.636719 37.998047 29.636719 z M 32 33.056641 C 32 33.056641 34.851013 35.967594 35.363281 37.001953 L 33.498047 36.919922 L 33.498047 38.728516 C 33.498047 38.813166 32.749101 38.778784 32 38.740234 C 31.250641 38.778805 30.501953 38.813177 30.501953 38.728516 L 30.501953 36.919922 L 28.636719 37.001953 C 29.148854 35.967594 31.997653 33.059414 32 33.056641 z ",color:"#fa5c5c"},itunes:{icon:"M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",mask:"M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",color:"#E049D1"},linkedin:{icon:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",mask:"M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",color:"#007fb1"},mailto:L1,medium:{icon:"M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",mask:"M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",color:"#333332"},meetup:{icon:"M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",mask:"M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",color:"#E51937"},pinterest:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#cb2128"},rdio:{icon:"M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",mask:"M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",color:"#0475C5"},reddit:{icon:"M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",mask:"M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",color:"#FF4500"},rss:{icon:"M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",mask:"M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",color:"#EF8733"},sharethis:{icon:"M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",mask:"M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",color:"#00BF00"},smugmug:{icon:"M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",mask:"M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",color:"#8cca1e"},snapchat:{icon:"M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",mask:"M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",color:"#FFC91B"},soundcloud:{icon:"M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",mask:"M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",color:"#FF5700"},spotify:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",mask:"M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",color:"#2EBD59"},squarespace:{icon:"M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",mask:"M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",color:"#1C1C1C"},stackoverflow:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 37.623047 12.775391 L 47.613281 26.207031 L 44.925781 28.203125 L 34.9375 14.771484 L 37.623047 12.775391 z M 31.462891 18.119141 L 44.326172 28.832031 L 42.183594 31.404297 L 29.320312 20.691406 L 31.462891 18.119141 z M 26.533203 25.103516 L 41.708984 32.167969 L 40.294922 35.205078 L 25.121094 28.136719 L 26.533203 25.103516 z M 23.640625 32.705078 L 40.021484 36.150391 L 39.333984 39.423828 L 22.953125 35.980469 L 23.640625 32.705078 z M 15.984375 36.972656 L 19.318359 36.972656 L 19.318359 46.978516 L 42.666016 46.978516 L 42.666016 36.972656 L 46 36.972656 L 46 50.3125 L 15.984375 50.3125 L 15.984375 36.972656 z M 22.654297 40.308594 L 39.330078 40.308594 L 39.330078 43.642578 L 22.654297 43.642578 L 22.654297 40.308594 z",color:"#ed803d"},telegram:{icon:"M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",mask:"M0,0v64h64V0H0z M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",color:"#49a9e9"},tiktok:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z",color:"#000000"},tumblr:{icon:"M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#2c4762"},twitch:{icon:"M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",mask:"M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",color:"#6441A5"},twitter:{icon:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",mask:"M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",color:"#00aced"},upwork:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 32 0 C 14.272 0 0 14.272 0 32 C 0 49.728 14.272 64 32 64 C 49.728 64 64 49.728 64 32 C 64 14.272 49.728 0 32 0 z M 24.9375 17.111328 L 30.537109 17.111328 C 31.637109 20.911328 33.636719 25.310938 36.136719 29.210938 C 37.736719 23.710938 41.737109 20.210938 47.037109 20.210938 C 53.137109 20.210938 58.136719 25.2125 58.136719 31.3125 C 58.136719 37.7125 53.137109 42.710938 47.037109 42.710938 C 44.037109 42.710937 41.537891 41.911719 39.337891 40.511719 L 36.9375 52.412109 L 31.236328 52.412109 L 34.736328 36.111328 C 33.236328 34.011328 31.836328 31.612109 30.736328 29.412109 L 30.736328 31.912109 C 30.736328 38.012109 25.837891 42.912109 19.837891 42.912109 C 13.837891 42.912109 8.9375 38.012109 8.9375 31.912109 L 8.9375 17.210938 L 14.337891 17.210938 L 14.337891 31.8125 C 14.337891 34.7125 16.736719 37.111328 19.636719 37.111328 C 22.536719 37.111328 24.9375 34.7125 24.9375 31.8125 L 24.9375 17.111328 z M 47.136719 25.912109 C 43.036719 25.912109 41.737891 29.9125 41.337891 32.3125 L 41.337891 32.412109 L 40.736328 34.611328 C 42.536328 36.111328 44.837109 37.111328 47.037109 37.111328 C 49.937109 37.111328 52.636328 34.611719 52.736328 31.511719 C 52.736328 28.411719 50.236719 25.912109 47.136719 25.912109 z ",color:"#1a0"},vevo:{icon:"M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",mask:"M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",color:"#ED1A3B"},vimeo:{icon:"M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",mask:"M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",color:"#1ab7ea"},vine:{icon:"M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",mask:"M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",color:"#00BF8F"},vk:{icon:"M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",mask:"M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",color:"#45668e"},vsco:{icon:"M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",mask:"M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",color:"#83878A"},wechat:{icon:"M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z",mask:"M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z",color:"#00c80f"},whatsapp:{icon:"M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",mask:"M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",color:"#25D366"},yelp:{icon:"M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",mask:"M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",color:"#B90C04"},youtube:{icon:"M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",mask:"M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",color:"#ff3333"}};var u2=N('<span class="social-icon"><div class="social-container"><svg class="social-svg" viewBox="0 0 64 64"><g class="social-svg-background"><circle cx="32" cy="32" r="31"></circle></g><g class="social-svg-icon"><path></path></g><g class="social-svg-mask"><path></path></g></svg></div></span>');function F0(e,t){Y(t,!1);let n=q(t,"network",8);const{color:r,icon:i,mask:a}=h2[n()];let o=q(t,"bgColor",8,r),l=q(t,"fgColor",8,"transparent"),s=q(t,"height",8,48),c=q(t,"width",8,48);const d=`display: inline-block; position: relative; overflow: hidden; ${q(t,"style",8,"")()}`,u="position: absolute; inset: 0; width: 100%; height: 100%;",f="border-radius: 50%; position: absolute; inset: 0; width: 100%; height: 100%; fill-rule: evenodd;",m="@media (prefers-reduced-motion: no-preference) { --ms-transition: 'fill 170ms ease-in-out'; -o-transition: 'fill 170ms ease-in-out'; --moz-transition: 'fill 170ms ease-in-out'; --webkit-transition: 'fill 170ms ease-in-out'; transition: 'fill 170ms ease-in-out';}",p=`${m} fill: transparent;`;fe();var y=u2();let _;var b=k(y);Ie(b,u);var g=k(b);Ie(g,f);var I=k(g);Ie(I,p);var T=z(I),ie=k(T),$=z(T);Ie($,m);var X=k($);we(V=>{_=Ie(y,d,_,V),re(T,"fill",l()),re(ie,"d",i),re($,"fill",o()),re(X,"d",a)},[()=>({width:`${c()}px`,height:`${s()}px`})]),R(e,y),Q()}var f2=N('<div class="con-lyrics svelte-auz48y"><div class="pan-lyrics svelte-auz48y"><h2 class="svelte-auz48y"> </h2> <pre style="white-space: pre-wrap;" class="svelte-auz48y"> </pre> <button>Close</button></div></div>'),d2=N('<li><div class="con-track svelte-auz48y"><a class="con-name svelte-auz48y"> </a> <span class="con-dur svelte-auz48y"> </span></div></li>'),m2=N('<!> <main><div class="con-details svelte-auz48y"><img class="img-cover svelte-auz48y" alt="Release Cover"/> <div class="con-text svelte-auz48y"><h1 style="margin-left: 18px" class="svelte-auz48y"><!></h1> <ol></ol> <div class="con-socials svelte-auz48y"><a class="a-social svelte-auz48y" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-auz48y" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-auz48y" target="_blank" rel="noopener noreferrer"><!></a> <p class="lab-release svelte-auz48y"> </p></div> <a class="a-back svelte-auz48y" href="/ma/">←</a></div></div></main>',1);function G(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-album")}),me(()=>{document.documentElement.classList.remove("pg-album")});let n=q(t,"name",8,""),r=q(t,"tracklist",24,()=>[]),i=q(t,"cover",8,""),a=q(t,"links",24,()=>({})),o=q(t,"release",8,""),l=m0(!1),s=m0(""),c=m0("");fe();var h=m2();ze(pe=>{we(j=>ue.title=`Monarch Atolla | ${j??""}`,[()=>(Ye(n()),te(()=>n().replace(/<br>/g,"")))])});var d=$0(h);{var u=pe=>{var j=f2(),Re=k(j),h0=k(Re),Ze=k(h0),u0=z(h0,2),S0=k(u0),A0=z(u0,2);we(()=>{Ke(Ze,w(s)),Ke(S0,w(c))}),L("click",A0,()=>{S(l,!1)}),R(pe,j)};Mn(d,pe=>{w(l)&&pe(u)})}var f=z(d,2),m=k(f),p=k(m),y=z(p,2),_=k(y),b=k(_);G0(b,n);var g=z(_,2);Z0(g,5,r,U0,(pe,j)=>{var Re=d2(),h0=k(Re),Ze=k(h0),u0=k(Ze),S0=z(Ze,2),A0=k(S0);we(()=>{Ke(u0,(w(j),te(()=>w(j).name))),Ke(A0,(w(j),te(()=>w(j).duration)))}),L("click",Ze,()=>{S(s,w(j).name),S(c,w(j).lyrics),S(l,!0)}),R(pe,Re)});var I=z(g,2),T=k(I),ie=k(T);F0(ie,{network:"youtube",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var $=z(T,2),X=k($);F0(X,{network:"spotify",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var V=z($,2),c0=k(V);F0(c0,{network:"itunes",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var qe=z(V,2),Ue=k(qe);we(()=>{re(p,"src",i()),re(T,"href",(Ye(a()),te(()=>a().yt))),re($,"href",(Ye(a()),te(()=>a().sp))),re(V,"href",(Ye(a()),te(()=>a().it))),Ke(Ue,o())}),R(e,h),Q()}const p2="(Instrumental)",v2=`Nothing there to drain,\r
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
to raise from the brink.`,g2=`Caught on a windowsill,\r
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
never gave it another chance.`,w2=`I used to walk\r
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
We've come a long way.`,y2=`Tell me where the wind blows hardest in the fall,\r
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
the face that started the end of it all.`;function b2(e){let t=[{name:"Heed the Glow",duration:"2:13",lyrics:p2},{name:"Cold Hollow",duration:"3:26",lyrics:v2},{name:"Wearing My Memories",duration:"3:08",lyrics:g2},{name:"Now Here We Are",duration:"2:27",lyrics:w2},{name:"Cliffside Dance",duration:"6:16",lyrics:y2}],n={yt:"https://www.youtube.com/watch?v=pDCGaQRyQvY&list=OLAK5uy_l2Oz7qInZp8Syi1MRw1MU-w8EeKLu_tDg",sp:"https://open.spotify.com/album/5w3KLleq7x2Ow2E6YyjIz6",it:"https://music.apple.com/us/album/an-amber-ballad-ep/1825362685"};G(e,{name:"An Amber Ballad",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc",get links(){return n},release:"2025.08.02"})}const C2=`Sunny canopy,\r
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
and not where was told.`,_2=`Twisting trees\r
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
be torn apart.`;function k2(e){let t=[{name:"Typewriter Hands",duration:"3:52",lyrics:C2},{name:"The Poetry Game",duration:"4:35",lyrics:_2}],n={yt:"https://www.youtube.com/watch?v=_qhyW86IwY8&list=OLAK5uy_l6KFvvznP5enJK7z_ZlNWTrdHUUeFi1P0",sp:"https://open.spotify.com/album/01H8fvUrWGOhNw2IsoLBfj",it:"https://music.apple.com/us/album/hope-need-not-be-real-single/1761677018"};G(e,{name:"Hope Need Not Be Real",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd",get links(){return n},release:"2024.08.11"})}const M2=`Pain\r
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
to wait for you to work my mind.`,ft=`Soft glow,\r
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
as its cast, to the wind.`,z2=`Old World,\r
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
at least mine don't think they do.`,I2=`Candlelight flames,\r
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
for our light.`;function E2(e){let t=[{name:"Does the Ghost Like Rainy Days?",duration:"4:22",lyrics:M2},{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:ft},{name:"Haunt Me Please",duration:"4:34",lyrics:z2},{name:"For Old Light",duration:"2:44",lyrics:I2}],n={yt:"https://www.youtube.com/watch?v=noiuDgTQK9U&list=OLAK5uy_mJF4cSajYgcmGpWnbZJxlwrehtamoBJrY",sp:"https://open.spotify.com/album/2VFWVR72dGFcHuzCeW5j0U",it:"https://music.apple.com/us/album/candlelight-fragments-ep/1712007436"};G(e,{name:"Candlelight Fragments",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773",get links(){return n},release:"2023.11.11"})}const dt=`I live in parallels,\r
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
Let the sunlight be true.`,L2=`Brother by heart,\r
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
that’ll sing their song.`,S2=`Well hey!\r
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
Let's seize this night.`,A2=`Masks are coming off,\r
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
Cause its the end of the beginning`,T2="(Instrumental)",H2=`Looks like I’m through,\r
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
cause this is just the interlude.`,V2=`It’s been a while since we walked in this valley together,\r
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
and yours are even more worn than mine.`,P2=`Oh brother by time,\r
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
I remember the fields.`,mt=`I seem to remember,\r
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
that glisten while I fall.`,O2="(Instrumental)";function R2(e){let t=[{name:"Parallels",duration:"4:02",lyrics:dt},{name:"Brother by Heart",duration:"4:44",lyrics:L2},{name:"Brother by Mind",duration:"3:34",lyrics:S2},{name:"End of the Beginning",duration:"4:29",lyrics:A2},{name:"Thought Rewind",duration:"2:11",lyrics:T2},{name:"Friends in the Interlude",duration:"3:39",lyrics:H2},{name:"Ey, Boy?",duration:"3:14",lyrics:V2},{name:"Brother by Time",duration:"3:13",lyrics:P2},{name:"When Silent Was Joy",duration:"4:02",lyrics:mt},{name:"We Talked of Peace",duration:"2:04",lyrics:O2}],n={yt:"https://www.youtube.com/watch?v=b_IhNVL1YWc&list=OLAK5uy_lQ8o_6Bo-FJVEa2kiK6dF6KqQBf3qWZzU",sp:"https://open.spotify.com/album/1O9xeZhBlIJCU3ZUbk4H1X",it:"https://music.apple.com/us/album/brothers-at-the-end-of-an-era/1694202095"};G(e,{name:"Brothers at the <br> End of an Era",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae",get links(){return n},release:"2023.05.13"})}const x2=`Mirror world where I reach for the clouds,\r
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
sing this song and your sight I will give.`;function F2(e){let t=[{name:"Golden Friend of Silver Water",duration:"4:14",lyrics:x2}],n={yt:"https://www.youtube.com/watch?v=zk0C53CZvKU",sp:"https://open.spotify.com/track/0tTIVp3AL7WfmTg2QsVoEC",it:"https://music.apple.com/us/album/golden-friend-of-silver-water-single/1723646587"};G(e,{name:"Golden Friend of <br> Silver Water",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd",get links(){return n},release:"2024.02.02"})}const N2=`Winter sky,\r
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
`;function j2(e){let t=[{name:"Call Your Friends in Winter Night",duration:"5:27",lyrics:N2}],n={yt:"https://www.youtube.com/watch?v=qar1hU0VG0M",sp:"https://open.spotify.com/track/6AlIpLZ3D18Ps4mZBC7cY0",it:"https://music.apple.com/us/album/call-your-names-in-winter-night-single/1720664029"};G(e,{name:"Call Your Names in <br> Winter Night",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db",get links(){return n},release:"2024.12.19"})}function W2(e){let t=[{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:ft}],n={yt:"https://www.youtube.com/watch?v=0ccUTJZJBqA",sp:"https://open.spotify.com/track/3UtvtmHMU2YTfhdcqZErmH",it:"https://music.apple.com/us/album/soft-eyes-under-classroom-glow-single/1705710719"};G(e,{name:"Soft Eyes Under <br> Classroom Glow",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2",get links(){return n},release:"2023.08.05"})}const D2=`\r
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
send the ash astray.`;function $2(e){let t=[{name:"Shimmering Flower",duration:"3:31",lyrics:D2}],n={yt:"https://www.youtube.com/watch?v=2KeM0xMxMPI",sp:"https://open.spotify.com/track/6I5FOVuSmSs0Al1Xq4ZLGT",it:"https://music.apple.com/us/album/shimmering-flower-single/1694204258"};G(e,{name:"Shimmering Flower",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f",get links(){return n},release:"2023.07.29"})}const B2=`Listen, listen for the sun.\r
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
when I lay right here in your company.`;function q2(e){let t=[{name:"Fall in Simile",duration:"3:31",lyrics:B2}],n={yt:"https://www.youtube.com/watch?v=W59dYm4CPaI",sp:"https://open.spotify.com/track/6OW8skRtKVOP9TKUYoYXc3",it:"https://music.apple.com/us/album/fall-in-simile-single/1694203979"};G(e,{name:"Fall in Simile",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e",get links(){return n},release:"2023.07.29"})}function U2(e){let t=[{name:"Brother by Heart",duration:"4:44"}],n={yt:"https://www.youtube.com/watch?v=zefqQorn1po",sp:"https://open.spotify.com/track/6kd60HFkCMujDEEhnAGwMr",it:"https://music.apple.com/us/album/brother-by-heart-single/1693113027"};G(e,{name:"Brother by Heart",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76",get links(){return n},release:"2023.07.01"})}function Z2(e){let t=[{name:"When Silent Was Joy",duration:"4:02",lyrics:mt}],n={yt:"https://www.youtube.com/watch?v=6tOfbpyMhEc",sp:"https://open.spotify.com/track/1EfwWVlkS6iZFJkffmTlcQ",it:"https://music.apple.com/us/album/when-silent-was-joy-single/1690783575"};G(e,{name:"When Silent Was Joy",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0",get links(){return n},release:"2023.06.17"})}function G2(e){let t=[{name:"Parallels",duration:"4:02",lyrics:dt}],n={yt:"https://www.youtube.com/watch?v=S73H33-I21o",sp:"https://open.spotify.com/track/02D9jPrNetIFelcDvrmDmH",it:"https://music.apple.com/us/album/parallels-single/1692112083"};G(e,{name:"Parallels",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6",get links(){return n},release:"2023.07.10"})}var J2=N('<main><h1 class="svelte-1eny9a3">B. McEwan</h1> <div class="con-names svelte-1eny9a3"><button class="btn-name svelte-1eny9a3" id="btn-1"><h1 class="svelte-1eny9a3">3D Artist</h1></button> <button class="btn-name svelte-1eny9a3" id="btn-2"><h1 class="svelte-1eny9a3">Writer</h1></button></div></main>');function K2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-mcewan")}),me(()=>{document.documentElement.classList.remove("pg-mcewan")});function n(l){window.location.href=l}fe();var r=J2();ze(l=>{ue.title="B. McEwan"});var i=z(k(r),2),a=k(i),o=z(a,2);L("click",a,()=>{n("/mcewan/3d/")}),L("click",o,()=>{n("/mcewan/writer/")}),R(e,r),Q()}var Y2=N('<main><div class="con-header svelte-14ldrt7"><h1 class="svelte-14ldrt7">B. McEwan</h1> <p class="svelte-14ldrt7">Hard Surface Modeller</p></div> <div class="con-artworks svelte-14ldrt7"><button class="btn-art svelte-14ldrt7" id="btn-1">artwork</button> <button class="btn-art svelte-14ldrt7" id="btn-2">artwork</button> <button class="btn-art svelte-14ldrt7" id="btn-3">artwork</button></div> <div class="con-artworks svelte-14ldrt7"><button class="btn-art svelte-14ldrt7" id="btn-4">artwork</button> <button class="btn-art svelte-14ldrt7" id="btn-5">artwork</button></div></main>');function Q2(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-mcewan-3d")}),me(()=>{document.documentElement.classList.remove("pg-mcewan-3d")});function n(d){window.location.href=d}fe();var r=Y2();ze(d=>{ue.title="B. McEwan"});var i=z(k(r),2),a=k(i),o=z(a,2),l=z(o,2),s=z(i,2),c=k(s),h=z(c,2);L("click",a,()=>{n("/mcewan/3d/dragonfly")}),L("click",o,()=>{n("/mcewan/3d/butterfly")}),L("click",l,()=>{n("/mcewan/3d/ontop")}),L("click",c,()=>{n("/mcewan/3d/fighter")}),L("click",h,()=>{n("/mcewan/3d/robot")}),R(e,r),Q()}function X2(e){}var er=N('<main><h1 class="svelte-1l9xtk">Arkady Orlunda</h1> <p>Page In Development</p></main>');function tr(e,t){Y(t,!1),de(()=>{document.documentElement.classList.add("pg-ao")}),me(()=>{document.documentElement.classList.remove("pg-ao")}),fe();var n=er();ze(r=>{ue.title="Arkady Orlunda"}),R(e,n),Q()}function nr(e){const t=[{component:Xn},{path:"/*",component:t2},{path:"/links",component:r2},{path:"elecarno",component:i2},{path:"ma/*",component:c2},{path:"ma/amber",component:b2},{path:"ma/hope",component:k2},{path:"ma/candle",component:E2},{path:"ma/brothers",component:R2},{path:"ma/golden",component:F2},{path:"ma/winter",component:j2},{path:"ma/classroom",component:W2},{path:"ma/shimmering",component:$2},{path:"ma/simile",component:q2},{path:"ma/heart",component:U2},{path:"ma/silent",component:Z2},{path:"ma/parallels",component:G2},{path:"mcewan",component:K2},{path:"mcewan/3d",component:Q2},{path:"mcewan/writer",component:X2},{path:"ao",component:tr}];Yn(e,{get routes(){return t}})}Cn(nr,{target:document.getElementById("app")});
