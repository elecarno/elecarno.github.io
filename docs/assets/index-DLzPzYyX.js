(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const jn=!1;var Kt=Array.isArray,v0=Array.prototype.indexOf,Qt=Array.from,$t=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,w0=Object.prototype,y0=Array.prototype,Xt=Object.getPrototypeOf,pn=Object.isExtensible;function Ye(e){return typeof e=="function"}function b0(e){return e()}function qt(e){for(var t=0;t<e.length;t++)e[t]()}function C0(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}const $=2,Hn=4,en=8,st=16,ge=32,Ve=64,Vn=128,Y=256,gt=512,x=1024,K=2048,ke=4096,te=8192,Pe=16384,tn=32768,Lt=65536,gn=1<<17,Pn=1<<18,nn=1<<19,rn=1<<20,Ut=1<<21,an=1<<22,Ee=1<<23,Le=Symbol("$state"),On=Symbol("legacy props"),_0=Symbol(""),sn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function k0(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function xn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function M0(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function z0(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function I0(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function S0(e){throw new Error("https://svelte.dev/e/effect_orphan")}function E0(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function L0(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function A0(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function j0(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function T0(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const H0=1,V0=2,P0=16,O0=1,x0=2,R0=4,F0=8,N0=16,W0=1,D0=2,H=Symbol(),B0="http://www.w3.org/1999/xhtml";let $0=!1;function Rn(e){return e===this.v}function Fn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function q0(e,t){return e!==t}function Nn(e){return!Fn(e,this.v)}let qe=!1,U0=!1;function Z0(){qe=!0}let A=null;function vt(e){A=e}function q(e,t=!1,n){A={p:A,c:null,e:null,s:e,x:null,l:qe&&!t?{s:null,u:null,$:[]}:null}}function U(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)Kn(r)}return A=t.p,{}}function Ue(){return!qe||A!==null&&A.l===null}const G0=new WeakMap;function J0(e){var t=_;if(t===null)return M.f|=Ee,e;if((t.f&tn)===0){if((t.f&Vn)===0)throw!t.parent&&e instanceof Error&&Wn(e),e;t.b.error(e)}else on(e,t)}function on(e,t){for(;t!==null;){if((t.f&Vn)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e instanceof Error&&Wn(e),e}function Wn(e){const t=G0.get(e);t&&($t(e,"message",{value:t.message}),$t(e,"stack",{value:t.stack}))}let wt=[];function Y0(){var e=wt;wt=[],qt(e)}function K0(e){wt.length===0&&queueMicrotask(Y0),wt.push(e)}function Q0(){for(var e=_.b;e!==null&&!e.has_pending_snippet();)e=e.parent;return e===null&&k0(),e}function At(e){var t=$|K,n=M!==null&&(M.f&$)!==0?M:null;return _===null||n!==null&&(n.f&Y)!==0?t|=Y:_.f|=nn,{ctx:A,deps:null,effects:null,equals:Rn,f:t,fn:e,reactions:null,rv:0,v:H,wv:0,parent:n??_,ac:null}}function X0(e,t){let n=_;n===null&&M0();var r=n.b,i=void 0,a=nt(H),s=null,l=!M;return u1(()=>{try{var o=e()}catch(d){o=Promise.reject(d)}var c=()=>o;i=s?.then(c,c)??Promise.resolve(o),s=i;var u=S,f=r.pending;l&&(r.update_pending_count(1),f||u.increment());const h=(d,m=void 0)=>{s=null,f||u.activate(),m?m!==sn&&(a.f|=Ee,bt(a,m)):((a.f&Ee)!==0&&(a.f^=Ee),bt(a,d)),l&&(r.update_pending_count(-1),f||u.decrement()),$n()};if(i.then(h,d=>h(null,d||"unknown")),u)return()=>{queueMicrotask(()=>u.neuter())}}),new Promise(o=>{function c(u){function f(){u===i?o(a):c(i)}u.then(f,f)}c(i)})}function ln(e){const t=At(e);return t.equals=Nn,t}function Dn(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)pe(t[n])}}function e1(e){for(var t=e.parent;t!==null;){if((t.f&$)===0)return t;t=t.parent}return null}function cn(e){var t,n=_;_e(e1(e));try{Dn(e),t=o0(e)}finally{_e(n)}return t}function Bn(e){var t=cn(e);if(e.equals(t)||(e.v=t,e.wv=i0()),!Oe)if(Be!==null)Be.set(e,e.v);else{var n=(be||(e.f&Y)!==0)&&e.deps!==null?ke:x;W(e,n)}}function t1(e,t,n){const r=Ue()?At:ln;if(t.length===0){n(e.map(r));return}var i=S,a=_,s=n1(),l=Q0();Promise.all(t.map(o=>X0(o))).then(o=>{i?.activate(),s();try{n([...e.map(r),...o])}catch(c){(a.f&Pe)===0&&on(c,a)}i?.deactivate(),$n()}).catch(o=>{l.error(o)})}function n1(){var e=_,t=M,n=A;return function(){_e(e),ce(t),vt(n)}}function $n(){_e(null),ce(null),vt(null)}const Ke=new Set;let S=null,Be=null,vn=new Set,yt=[];function qn(){const e=yt.shift();yt.length>0&&queueMicrotask(qn),e()}let tt=[],hn=null,Zt=!1;class $e{current=new Map;#e=new Map;#t=new Set;#n=0;#c=null;#h=!1;#a=[];#s=[];#i=[];#r=[];#o=[];#u=[];#d=[];skipped_effects=new Set;process(t){tt=[];var n=null;if(Ke.size>1){n=new Map,Be=new Map;for(const[a,s]of this.current)n.set(a,{v:a.v,wv:a.wv}),a.v=s;for(const a of Ke)if(a!==this)for(const[s,l]of a.#e)n.has(s)||(n.set(s,{v:s.v,wv:s.wv}),s.v=l)}for(const a of t)this.#m(a);if(this.#a.length===0&&this.#n===0){this.#f();var r=this.#i,i=this.#r;this.#i=[],this.#r=[],this.#o=[],S=null,wn(r),wn(i),S===null?S=this:Ke.delete(this),this.#c?.resolve()}else this.#l(this.#i),this.#l(this.#r),this.#l(this.#o);if(n){for(const[a,{v:s,wv:l}]of n)a.wv<=l&&(a.v=s);Be=null}for(const a of this.#a)Xe(a);for(const a of this.#s)Xe(a);this.#a=[],this.#s=[]}#m(t){t.f^=x;for(var n=t.first;n!==null;){var r=n.f,i=(r&(ge|Ve))!==0,a=i&&(r&x)!==0,s=a||(r&te)!==0||this.skipped_effects.has(n);if(!s&&n.fn!==null){if(i)n.f^=x;else if((r&x)===0)if((r&Hn)!==0)this.#r.push(n);else if((r&an)!==0){var l=n.b?.pending?this.#s:this.#a;l.push(n)}else Ht(n)&&((n.f&st)!==0&&this.#o.push(n),Xe(n));var o=n.first;if(o!==null){n=o;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)n=c.next,c=c.parent}}#l(t){for(const n of t)((n.f&K)!==0?this.#u:this.#d).push(n),W(n,x);t.length=0}capture(t,n){this.#e.has(t)||this.#e.set(t,n),this.current.set(t,t.v)}activate(){S=this}deactivate(){S=null;for(const t of vn)if(vn.delete(t),t(),S!==null)break}neuter(){this.#h=!0}flush(){tt.length>0?r1():this.#f(),S===this&&(this.#n===0&&Ke.delete(this),this.deactivate())}#f(){if(!this.#h)for(const t of this.#t)t();this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,this.#n===0){for(const t of this.#u)W(t,K),Te(t);for(const t of this.#d)W(t,ke),Te(t);this.#i=[],this.#r=[],this.flush()}else this.deactivate()}add_callback(t){this.#t.add(t)}settled(){return(this.#c??=C0()).promise}static ensure(){if(S===null){const t=S=new $e;Ke.add(S),$e.enqueue(()=>{S===t&&t.flush()})}return S}static enqueue(t){yt.length===0&&queueMicrotask(qn),yt.unshift(t)}}function r1(){var e=De;Zt=!0;try{var t=0;for(bn(!0);tt.length>0;){var n=$e.ensure();if(t++>1e3){var r,i;a1()}n.process(tt),Ae.clear()}}finally{Zt=!1,bn(e),hn=null}}function a1(){try{E0()}catch(e){on(e,hn)}}function wn(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Pe|te))===0&&Ht(r)){var i=S?S.current.size:0;if(Xe(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?t0(r):r.fn=null),S!==null&&S.current.size>i&&(r.f&rn)!==0)break}}for(;n<t;)Te(e[n++])}}function Te(e){for(var t=hn=e;t.parent!==null;){t=t.parent;var n=t.f;if(Zt&&t===_&&(n&st)!==0)return;if((n&(Ve|ge))!==0){if((n&x)===0)return;t.f^=x}}tt.push(t)}const Ae=new Map;function nt(e,t){var n={f:0,v:e,reactions:null,equals:Rn,rv:0,wv:0};return n}function O(e,t){const n=nt(e);return f1(n),n}function pt(e,t=!1,n=!0){const r=nt(e);return t||(r.equals=Nn),qe&&n&&A!==null&&A.l!==null&&(A.l.s??=[]).push(r),r}function L(e,t,n=!1){M!==null&&(!le||(M.f&gn)!==0)&&Ue()&&(M.f&($|st|an|gn))!==0&&!fe?.includes(e)&&T0();let r=n?de(t):t;return bt(e,r)}function bt(e,t){if(!e.equals(t)){var n=e.v;Oe?Ae.set(e,t):Ae.set(e,n),e.v=t;var r=$e.ensure();r.capture(e,n),(e.f&$)!==0&&((e.f&K)!==0&&cn(e),W(e,(e.f&Y)===0?x:ke)),e.wv=i0(),Un(e,K),Ue()&&_!==null&&(_.f&x)!==0&&(_.f&(ge|Ve))===0&&(G===null?m1([e]):G.push(e))}return t}function Ot(e){L(e,e.v+1)}function Un(e,t){var n=e.reactions;if(n!==null)for(var r=Ue(),i=n.length,a=0;a<i;a++){var s=n[a],l=s.f;if(!(!r&&s===_)){var o=(l&K)===0;o&&W(s,t),(l&$)!==0?Un(s,ke):o&&Te(s)}}}function de(e){if(typeof e!="object"||e===null||Le in e)return e;const t=Xt(e);if(t!==w0&&t!==y0)return e;var n=new Map,r=Kt(e),i=O(0),a=je,s=l=>{if(je===a)return l();var o=M,c=je;ce(null),_n(a);var u=l();return ce(o),_n(c),u};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(l,o,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&A0();var u=n.get(o);return u===void 0?u=s(()=>{var f=O(c.value);return n.set(o,f),f}):L(u,c.value,!0),!0},deleteProperty(l,o){var c=n.get(o);if(c===void 0){if(o in l){const u=s(()=>O(H));n.set(o,u),Ot(i)}}else L(c,H),Ot(i);return!0},get(l,o,c){if(o===Le)return e;var u=n.get(o),f=o in l;if(u===void 0&&(!f||Ce(l,o)?.writable)&&(u=s(()=>{var d=de(f?l[o]:H),m=O(d);return m}),n.set(o,u)),u!==void 0){var h=w(u);return h===H?void 0:h}return Reflect.get(l,o,c)},getOwnPropertyDescriptor(l,o){var c=Reflect.getOwnPropertyDescriptor(l,o);if(c&&"value"in c){var u=n.get(o);u&&(c.value=w(u))}else if(c===void 0){var f=n.get(o),h=f?.v;if(f!==void 0&&h!==H)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(l,o){if(o===Le)return!0;var c=n.get(o),u=c!==void 0&&c.v!==H||Reflect.has(l,o);if(c!==void 0||_!==null&&(!u||Ce(l,o)?.writable)){c===void 0&&(c=s(()=>{var h=u?de(l[o]):H,d=O(h);return d}),n.set(o,c));var f=w(c);if(f===H)return!1}return u},set(l,o,c,u){var f=n.get(o),h=o in l;if(r&&o==="length")for(var d=c;d<f.v;d+=1){var m=n.get(d+"");m!==void 0?L(m,H):d in l&&(m=s(()=>O(H)),n.set(d+"",m))}if(f===void 0)(!h||Ce(l,o)?.writable)&&(f=s(()=>O(void 0)),L(f,de(c)),n.set(o,f));else{h=f.v!==H;var p=s(()=>de(c));L(f,p)}var y=Reflect.getOwnPropertyDescriptor(l,o);if(y?.set&&y.set.call(u,c),!h){if(r&&typeof o=="string"){var k=n.get("length"),b=Number(o);Number.isInteger(b)&&b>=k.v&&L(k,b+1)}Ot(i)}return!0},ownKeys(l){w(i);var o=Reflect.ownKeys(l).filter(f=>{var h=n.get(f);return h===void 0||h.v!==H});for(var[c,u]of n)u.v!==H&&!(c in l)&&o.push(c);return o},setPrototypeOf(){j0()}})}var yn,ne,Zn,Gn,Jn;function i1(){if(yn===void 0){yn=window,ne=document,Zn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Gn=Ce(t,"firstChild").get,Jn=Ce(t,"nextSibling").get,pn(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),pn(n)&&(n.__t=void 0)}}function Me(e=""){return document.createTextNode(e)}function ye(e){return Gn.call(e)}function jt(e){return Jn.call(e)}function C(e,t){return ye(e)}function Ct(e,t){{var n=ye(e);return n instanceof Comment&&n.data===""?jt(n):n}}function z(e,t=1,n=!1){let r=e;for(;t--;)r=jt(r);return r}function s1(e){e.textContent=""}function Tt(){return!1}function Yn(e){_===null&&M===null&&S0(),M!==null&&(M.f&Y)!==0&&_===null&&I0(),Oe&&z0()}function o1(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ze(e,t,n,r=!0){var i=_;i!==null&&(i.f&te)!==0&&(e|=te);var a={ctx:A,deps:null,nodes_start:null,nodes_end:null,f:e|K,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Xe(a),a.f|=tn}catch(o){throw pe(a),o}else t!==null&&Te(a);var s=n&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&nn)===0;if(!s&&r&&(i!==null&&o1(a,i),M!==null&&(M.f&$)!==0&&(e&Ve)===0)){var l=M;(l.effects??=[]).push(a)}return a}function l1(e){const t=ze(en,null,!1);return W(t,x),t.teardown=e,t}function Gt(e){Yn();var t=_.f,n=!M&&(t&ge)!==0&&(t&tn)===0;if(n){var r=A;(r.e??=[]).push(e)}else return Kn(e)}function Kn(e){return ze(Hn|rn,e,!1)}function c1(e){return Yn(),ze(en|rn,e,!0)}function h1(e){$e.ensure();const t=ze(Ve,e,!0);return(n={})=>new Promise(r=>{n.outro?lt(t,()=>{pe(t),r(void 0)}):(pe(t),r(void 0))})}function u1(e){return ze(an|nn,e,!0)}function ee(e,t=[],n=[]){t1(t,n,r=>{ze(en,()=>e(...r.map(w)),!0)})}function ot(e,t=0){var n=ze(st|t,e,!0);return n}function He(e,t=!0){return ze(ge,e,!0,t)}function Qn(e){var t=e.teardown;if(t!==null){const n=Oe,r=M;Cn(!0),ce(null);try{t.call(null)}finally{Cn(n),ce(r)}}}function Xn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){n.ac?.abort(sn);var r=n.next;(n.f&Ve)!==0?n.parent=null:pe(n,t),n=r}}function d1(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ge)===0&&pe(t),t=n}}function pe(e,t=!0){var n=!1;(t||(e.f&Pn)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(e0(e.nodes_start,e.nodes_end),n=!0),Xn(e,t&&!n),_t(e,0),W(e,Pe);var r=e.transitions;if(r!==null)for(const a of r)a.stop();Qn(e);var i=e.parent;i!==null&&i.first!==null&&t0(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function e0(e,t){for(;e!==null;){var n=e===t?null:jt(e);e.remove(),e=n}}function t0(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function lt(e,t){var n=[];un(e,n,!0),n0(n,()=>{pe(e),t&&t()})}function n0(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function un(e,t,n){if((e.f&te)===0){if(e.f^=te,e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&t.push(s);for(var r=e.first;r!==null;){var i=r.next,a=(r.f&Lt)!==0||(r.f&ge)!==0;un(r,t,a?n:!1),r=i}}}function dn(e){r0(e,!0)}function r0(e,t){if((e.f&te)!==0){e.f^=te,(e.f&x)===0&&(W(e,K),Te(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Lt)!==0||(n.f&ge)!==0;r0(n,i?t:!1),n=r}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let De=!1;function bn(e){De=e}let Oe=!1;function Cn(e){Oe=e}let M=null,le=!1;function ce(e){M=e}let _=null;function _e(e){_=e}let fe=null;function f1(e){M!==null&&(fe===null?fe=[e]:fe.push(e))}let R=null,B=0,G=null;function m1(e){G=e}let a0=1,rt=0,je=rt;function _n(e){je=e}let be=!1;function i0(){return++a0}function Ht(e){var t=e.f;if((t&K)!==0)return!0;if((t&ke)!==0){var n=e.deps,r=(t&Y)!==0;if(n!==null){var i,a,s=(t&gt)!==0,l=r&&_!==null&&!be,o=n.length;if((s||l)&&(_===null||(_.f&Pe)===0)){var c=e,u=c.parent;for(i=0;i<o;i++)a=n[i],(s||!a?.reactions?.includes(c))&&(a.reactions??=[]).push(c);s&&(c.f^=gt),l&&u!==null&&(u.f&Y)===0&&(c.f^=Y)}for(i=0;i<o;i++)if(a=n[i],Ht(a)&&Bn(a),a.wv>e.wv)return!0}(!r||_!==null&&!be)&&W(e,x)}return!1}function s0(e,t,n=!0){var r=e.reactions;if(r!==null&&!fe?.includes(e))for(var i=0;i<r.length;i++){var a=r[i];(a.f&$)!==0?s0(a,t,!1):t===a&&(n?W(a,K):(a.f&x)!==0&&W(a,ke),Te(a))}}function o0(e){var t=R,n=B,r=G,i=M,a=be,s=fe,l=A,o=le,c=je,u=e.f;R=null,B=0,G=null,be=(u&Y)!==0&&(le||!De||M===null),M=(u&(ge|Ve))===0?e:null,fe=null,vt(e.ctx),le=!1,je=++rt,e.ac!==null&&(e.ac.abort(sn),e.ac=null);try{e.f|=Ut;var f=(0,e.fn)(),h=e.deps;if(R!==null){var d;if(_t(e,B),h!==null&&B>0)for(h.length=B+R.length,d=0;d<R.length;d++)h[B+d]=R[d];else e.deps=h=R;if(!be||(u&$)!==0&&e.reactions!==null)for(d=B;d<h.length;d++)(h[d].reactions??=[]).push(e)}else h!==null&&B<h.length&&(_t(e,B),h.length=B);if(Ue()&&G!==null&&!le&&h!==null&&(e.f&($|ke|K))===0)for(d=0;d<G.length;d++)s0(G[d],e);return i!==null&&i!==e&&(rt++,G!==null&&(r===null?r=G:r.push(...G))),(e.f&Ee)!==0&&(e.f^=Ee),f}catch(m){return J0(m)}finally{e.f^=Ut,R=t,B=n,G=r,M=i,be=a,fe=s,vt(l),le=o,je=c}}function p1(e,t){let n=t.reactions;if(n!==null){var r=v0.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(t.f&$)!==0&&(R===null||!R.includes(t))&&(W(t,ke),(t.f&(Y|gt))===0&&(t.f^=gt),Dn(t),_t(t,0))}function _t(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)p1(e,n[r])}function Xe(e){var t=e.f;if((t&Pe)===0){W(e,x);var n=_,r=De;_=e,De=!0;try{(t&st)!==0?d1(e):Xn(e),Qn(e);var i=o0(e);e.teardown=typeof i=="function"?i:null,e.wv=a0;var a;jn&&U0&&(e.f&K)!==0&&e.deps}finally{De=r,_=n}}}function w(e){var t=e.f,n=(t&$)!==0;if(M!==null&&!le){var r=_!==null&&(_.f&Pe)!==0;if(!r&&!fe?.includes(e)){var i=M.deps;if((M.f&Ut)!==0)e.rv<rt&&(e.rv=rt,R===null&&i!==null&&i[B]===e?B++:R===null?R=[e]:(!be||!R.includes(e))&&R.push(e));else{(M.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[M]:a.includes(M)||a.push(M)}}}else if(n&&e.deps===null&&e.effects===null){var s=e,l=s.parent;l!==null&&(l.f&Y)===0&&(s.f^=Y)}if(Oe){if(Ae.has(e))return Ae.get(e);if(n){s=e;var o=s.v;return((s.f&x)===0&&s.reactions!==null||l0(s))&&(o=cn(s)),Ae.set(s,o),o}}else if(n){if(s=e,Be?.has(s))return Be.get(s);Ht(s)&&Bn(s)}if((e.f&Ee)!==0)throw e.v;return e.v}function l0(e){if(e.v===H)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ae.has(t)||(t.f&$)!==0&&l0(t))return!0;return!1}function N(e){var t=le;try{return le=!0,e()}finally{le=t}}const g1=-7169;function W(e,t){e.f=e.f&g1|t}function Fe(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Le in e)Jt(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Le in n&&Jt(n)}}}function Jt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Jt(e[r],t)}catch{}const n=Xt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Tn(n);for(let i in r){const a=r[i].get;if(a)try{a.call(e)}catch{}}}}}const v1=["touchstart","touchmove"];function w1(e){return v1.includes(e)}function y1(e){var t=M,n=_;ce(null),_e(null);try{return e()}finally{ce(t),_e(n)}}const b1=new Set,kn=new Set;function C1(e,t,n,r={}){function i(a){if(r.capture||Qe.call(t,a),!a.cancelBubble)return y1(()=>n?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?K0(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function E(e,t,n,r,i){var a={capture:r,passive:i},s=C1(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&l1(()=>{t.removeEventListener(e,s,a)})}let Mn=null;function Qe(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;Mn=e;var s=0,l=Mn===e&&e.__root;if(l){var o=i.indexOf(l);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var c=i.indexOf(t);if(c===-1)return;o<=c&&(s=o)}if(a=i[s]||e.target,a!==t){$t(e,"currentTarget",{configurable:!0,get(){return a||n}});var u=M,f=_;ce(null),_e(null);try{for(var h,d=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+r];if(p!=null&&(!a.disabled||e.target===a))if(Kt(p)){var[y,...k]=p;y.apply(a,[e,...k])}else p.call(a,e)}catch(b){h?d.push(b):h=b}if(e.cancelBubble||m===t||m===null)break;a=m}if(h){for(let b of d)queueMicrotask(()=>{throw b});throw h}}finally{e.__root=t,delete e.currentTarget,ce(u),_e(f)}}}function he(e){var t;t=document.head.appendChild(Me());try{ot(()=>e(t),Pn)}finally{}}function c0(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function kt(e,t){var n=_;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function V(e,t){var n=(t&W0)!==0,r=(t&D0)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=c0(a?e:"<!>"+e),n||(i=ye(i)));var s=r||Zn?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=ye(s),o=s.lastChild;kt(l,o)}else kt(s,s);return s}}function zn(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Me();return e.append(t,n),kt(t,n),e}function T(e,t){e!==null&&e.before(t)}function Ie(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function _1(e,t){return k1(e,t)}const Re=new Map;function k1(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:s=!0}){i1();var l=new Set,o=f=>{for(var h=0;h<f.length;h++){var d=f[h];if(!l.has(d)){l.add(d);var m=w1(d);t.addEventListener(d,Qe,{passive:m});var p=Re.get(d);p===void 0?(document.addEventListener(d,Qe,{passive:m}),Re.set(d,1)):Re.set(d,p+1)}}};o(Qt(b1)),kn.add(o);var c=void 0,u=h1(()=>{var f=n??t.appendChild(Me());return He(()=>{if(a){q({});var h=A;h.c=a}i&&(r.$$events=i),c=e(f,r)||{},a&&U()}),()=>{for(var h of l){t.removeEventListener(h,Qe);var d=Re.get(h);--d===0?(document.removeEventListener(h,Qe),Re.delete(h)):Re.set(h,d)}kn.delete(o),f!==n&&f.parentNode?.removeChild(f)}});return M1.set(c,u),c}let M1=new WeakMap;function z1(e,t,n=!1){var r=e,i=null,a=null,s=H,l=n?Lt:0,o=!1;const c=(d,m=!0)=>{o=!0,h(m,d)};var u=null;function f(){u!==null&&(u.lastChild.remove(),r.before(u),u=null);var d=s?i:a,m=s?a:i;d&&dn(d),m&&lt(m,()=>{s?a=null:i=null})}const h=(d,m)=>{if(s!==(s=d)){var p=Tt(),y=r;if(p&&(u=document.createDocumentFragment(),u.append(y=Me())),s?i??=m&&He(()=>m(y)):a??=m&&He(()=>m(y)),p){var k=S,b=s?i:a,v=s?a:i;b&&k.skipped_effects.delete(b),v&&k.skipped_effects.add(v),k.add_callback(f)}else f()}};ot(()=>{o=!1,t(c),o||h(null,null)},l)}function I1(e,t,n){var r=e,i=H,a,s,l=null,o=Ue()?q0:Fn;function c(){a&&lt(a),l!==null&&(l.lastChild.remove(),r.before(l),l=null),a=s}ot(()=>{if(o(i,i=t())){var u=r,f=Tt();f&&(l=document.createDocumentFragment(),l.append(u=Me())),s=He(()=>n(u)),f?S.add_callback(c):c()}})}function Mt(e,t){return t}function S1(e,t,n){for(var r=e.items,i=[],a=t.length,s=0;s<a;s++)un(t[s].e,i,!0);var l=a>0&&i.length===0&&n!==null;if(l){var o=n.parentNode;s1(o),o.append(n),r.clear(),oe(e,t[0].prev,t[a-1].next)}n0(i,()=>{for(var c=0;c<a;c++){var u=t[c];l||(r.delete(u.k),oe(e,u.prev,u.next)),pe(u.e,!l)}})}function zt(e,t,n,r,i,a=null){var s=e,l={flags:t,items:new Map,first:null};{var o=e;s=o.appendChild(Me())}var c=null,u=!1,f=new Map,h=ln(()=>{var y=n();return Kt(y)?y:y==null?[]:Qt(y)}),d,m;function p(){E1(m,d,l,f,s,i,t,r,n),a!==null&&(d.length===0?c?dn(c):c=He(()=>a(s)):c!==null&&lt(c,()=>{c=null}))}ot(()=>{m??=_,d=w(h);var y=d.length;if(!(u&&y===0)){u=y===0;var k,b,v,I;if(Tt()){var j=new Set,ue=S;for(b=0;b<y;b+=1){v=d[b],I=r(v,b);var Z=l.items.get(I)??f.get(I);Z?h0(Z,v,b):(k=u0(null,l,null,null,v,I,b,i,t,n,!0),f.set(I,k)),j.add(I)}for(const[se,P]of l.items)j.has(se)||ue.skipped_effects.add(P.e);ue.add_callback(p)}else p();w(h)}})}function E1(e,t,n,r,i,a,s,l,o){var c=t.length,u=n.items,f=n.first,h=f,d,m=null,p=[],y=[],k,b,v,I;for(I=0;I<c;I+=1){if(k=t[I],b=l(k,I),v=u.get(b),v===void 0){var j=r.get(b);if(j!==void 0){r.delete(b),u.set(b,j);var ue=m?m.next:h;oe(n,m,j),oe(n,j,ue),xt(j,ue,i),m=j}else{var Z=h?h.e.nodes_start:i;m=u0(Z,n,m,m===null?n.first:m.next,k,b,I,a,s,o)}u.set(b,m),p=[],y=[],h=m.next;continue}if(h0(v,k,I),(v.e.f&te)!==0&&dn(v.e),v!==h){if(d!==void 0&&d.has(v)){if(p.length<y.length){var se=y[0],P;m=se.prev;var ht=p[0],Ze=p[p.length-1];for(P=0;P<p.length;P+=1)xt(p[P],se,i);for(P=0;P<y.length;P+=1)d.delete(y[P]);oe(n,ht.prev,Ze.next),oe(n,m,ht),oe(n,Ze,se),h=se,m=Ze,I-=1,p=[],y=[]}else d.delete(v),xt(v,h,i),oe(n,v.prev,v.next),oe(n,v,m===null?n.first:m.next),oe(n,m,v),m=v;continue}for(p=[],y=[];h!==null&&h.k!==b;)(h.e.f&te)===0&&(d??=new Set).add(h),y.push(h),h=h.next;if(h===null)continue;v=h}p.push(v),m=v,h=v.next}if(h!==null||d!==void 0){for(var Ge=d===void 0?[]:Qt(d);h!==null;)(h.e.f&te)===0&&Ge.push(h),h=h.next;var ve=Ge.length;if(ve>0){var D=c===0?i:null;S1(n,Ge,D)}}e.first=n.first&&n.first.e,e.last=m&&m.e;for(var xe of r.values())pe(xe.e);r.clear()}function h0(e,t,n,r){bt(e.v,t),e.i=n}function u0(e,t,n,r,i,a,s,l,o,c,u){var f=(o&H0)!==0,h=(o&P0)===0,d=f?h?pt(i,!1,!1):nt(i):i,m=(o&V0)===0?s:nt(s),p={i:m,v:d,k:a,a:null,e:null,prev:n,next:r};try{if(e===null){var y=document.createDocumentFragment();y.append(e=Me())}return p.e=He(()=>l(e,d,m,c),$0),p.e.prev=n&&n.e,p.e.next=r&&r.e,n===null?u||(t.first=p):(n.next=p,n.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function xt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,a=e.e.nodes_start;a!==null&&a!==r;){var s=jt(a);i.before(a),a=s}}function oe(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function It(e,t,n=!1,r=!1,i=!1){var a=e,s="";ee(()=>{var l=_;if(s!==(s=t()??"")&&(l.nodes_start!==null&&(e0(l.nodes_start,l.nodes_end),l.nodes_start=l.nodes_end=null),s!=="")){var o=s+"";n?o=`<svg>${o}</svg>`:r&&(o=`<math>${o}</math>`);var c=c0(o);if((n||r)&&(c=ye(c)),kt(ye(c),c.lastChild),n||r)for(;ye(c);)a.before(ye(c));else a.before(c)}})}function L1(e,t,n){var r=e,i,a,s=null,l=null;function o(){a&&(lt(a),a=null),s&&(s.lastChild.remove(),r.before(s),s=null),a=l,l=null}ot(()=>{if(i!==(i=t())){var c=Tt();if(i){var u=r;c&&(s=document.createDocumentFragment(),s.append(u=Me())),l=He(()=>n(u,i))}c?S.add_callback(o):o()}},Lt)}function In(e,t=!1){var n=t?" !important;":";",r="";for(var i in e){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+n)}return r}function Rt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function A1(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,l=!1,o=[];r&&o.push(...Object.keys(r).map(Rt)),i&&o.push(...Object.keys(i).map(Rt));var c=0,u=-1;const p=e.length;for(var f=0;f<p;f++){var h=e[f];if(l?h==="/"&&e[f-1]==="*"&&(l=!1):a?a===h&&(a=!1):h==="/"&&e[f+1]==="*"?l=!0:h==='"'||h==="'"?a=h:h==="("?s++:h===")"&&s--,!l&&a===!1&&s===0){if(h===":"&&u===-1)u=f;else if(h===";"||f===p-1){if(u!==-1){var d=Rt(e.substring(c,u).trim());if(!o.includes(d)){h!==";"&&f++;var m=e.substring(c,f).trim();n+=" "+m+";"}}c=f+1,u=-1}}}}return r&&(n+=In(r)),i&&(n+=In(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ft(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Se(e,t,n,r){var i=e.__style;if(i!==t){var a=A1(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else r&&(Array.isArray(r)?(Ft(e,n?.[0],r[0]),Ft(e,n?.[1],r[1],"important")):Ft(e,n,r));return r}const j1=Symbol("is custom element"),T1=Symbol("is html");function J(e,t,n,r){var i=H1(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[_0]=n),n==null?e.removeAttribute(t):typeof n!="string"&&V1(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function H1(e){return e.__attributes??={[j1]:e.nodeName.includes("-"),[T1]:e.namespaceURI===B0}}var Sn=new Map;function V1(e){var t=Sn.get(e.nodeName);if(t)return t;Sn.set(e.nodeName,t=[]);for(var n,r=e,i=Element.prototype;i!==r;){n=Tn(r);for(var a in n)n[a].set&&t.push(a);r=Xt(r)}return t}function re(e=!1){const t=A,n=t.l.u;if(!n)return;let r=()=>Fe(t.s);if(e){let i=0,a={};const s=At(()=>{let l=!1;const o=t.s;for(const c in o)o[c]!==a[c]&&(a[c]=o[c],l=!0);return l&&i++,i});r=()=>w(s)}n.b.length&&c1(()=>{En(t,r),qt(n.b)}),Gt(()=>{const i=N(()=>n.m.map(b0));return()=>{for(const a of i)typeof a=="function"&&a()}}),n.a.length&&Gt(()=>{En(t,r),qt(n.a)})}function En(e,t){if(e.l.s)for(const n of e.l.s)w(n);t()}let ft=!1;function P1(e){var t=ft;try{return ft=!1,[e(),ft]}finally{ft=t}}const O1={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function x1(e,t,n){return new Proxy({props:e,exclude:t},O1)}const R1={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ye(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Ye(i)&&(i=i());const a=Ce(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Ye(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Ce(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Le||t===On)return!1;for(let n of e.props)if(Ye(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Ye(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function F1(...e){return new Proxy({props:e},R1)}function F(e,t,n,r){var i=!qe||(n&x0)!==0,a=(n&F0)!==0,s=(n&N0)!==0,l=r,o=!0,c=()=>(o&&(o=!1,l=s?N(r):r),l),u;if(a){var f=Le in e||On in e;u=Ce(e,t)?.set??(f&&t in e?v=>e[t]=v:void 0)}var h,d=!1;a?[h,d]=P1(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=c(),u&&(i&&L0(),u(h)));var m;if(i?m=()=>{var v=e[t];return v===void 0?c():(o=!0,v)}:m=()=>{var v=e[t];return v!==void 0&&(l=void 0),v===void 0?l:v},i&&(n&R0)===0)return m;if(u){var p=e.$$legacy;return function(v,I){return arguments.length>0?((!i||!I||p||d)&&u(I?m():v),v):m()}}var y=!1,k=((n&O0)!==0?At:ln)(()=>(y=!1,m()));a&&w(k);var b=_;return function(v,I){if(arguments.length>0){const j=I?w(k):i&&a?de(v):v;return L(k,j),y=!0,l!==void 0&&(l=j),v}return Oe&&y||(b.f&Pe)!==0?k.v:w(k)}}function ae(e){A===null&&xn(),qe&&A.l!==null?N1(A).m.push(e):Gt(()=>{const t=N(e);if(typeof t=="function")return t})}function ie(e){A===null&&xn(),ae(()=>()=>N(e))}function N1(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const W1="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(W1);Z0();const g={string:"string",number:"number",boolean:"boolean",null:"null",undefined:"undefined",regexp:"regexp",function:"function",object:"object",array:"array",promise:"promise",unknown:"unknown"},Nt=e=>e===null?g.null:e===void 0?g.undefined:e instanceof RegExp?g.regexp:typeof e=="string"?g.string:typeof e=="number"?g.number:typeof e=="boolean"?g.boolean:Array.isArray(e)?g.array:typeof e=="function"?g.function:typeof e=="object"?g.object:g.unknown,me=e=>{if(typeof e=="string"){if(e.match(/^[\d.-]+$/))return Number.isNaN(Number.parseFloat(e))?Number.isNaN(Number.parseInt(e))?{identity:g.string,value:e}:{identity:g.number,value:Number.parseInt(e)}:{identity:g.number,value:Number.parseFloat(e)};if(!e.includes(",")&&(e.includes("&")||e.includes("="))){const t=e.split(/[&,]/),n={};for(const r of t){if(!r.includes("="))continue;const[i,a]=r.split("="),s=i.replace(/\[\d*\]$/,""),l=me(a);if(i.includes("[")){Array.isArray(n[s])||(n[s]=[]);const o=i.match(/\[(\d+)\]/)?.[1];o?(Array.isArray(n[s])||(n[s]=[]),n[s].push([parseInt(o),l.value])):n[s].push(l.value)}else n[s]=l.value}for(const[r,i]of Object.entries(n))Array.isArray(i)&&i.length>0&&Array.isArray(i[0])&&(n[r]=i.sort((a,s)=>a[0]-s[0]).map(([,a])=>a));return{identity:g.object,value:n}}else if(e.includes("&")&&e.includes("=")){const t={};for(const n of e.split("&")){if(!n.includes("="))continue;const[r,i]=n.split("=");t[r]=i}return{identity:g.object,value:t}}else if(e.match(/^[0-9a-z]+\[\d+\]=.+$/)){const[,t,n]=e.match(/^[0-9a-z]+\[(\d+)\]=(.+)$/)||[];if(t!==void 0&&n!==void 0){const r=[],i=me(n);return r[parseInt(t,10)]=i.value,{identity:g.array,value:r}}}else if(e.match(/^[0-9a-z]+\[\]$/))return{identity:g.array,value:e};return e.match(/^true$/i)?{identity:g.boolean,value:!0}:e.match(/^false$/i)?{identity:g.boolean,value:!1}:{identity:g.string,value:e}}else{if(typeof e=="number")return{identity:g.number,value:e};if(e instanceof RegExp)return{identity:g.regexp,value:e};if(typeof e=="boolean")return{identity:g.boolean,value:e};if(e===null)return{identity:g.null,value:null};if(e===void 0)return{identity:g.undefined,value:void 0};if(Array.isArray(e))return{identity:g.array,value:e};if(typeof e=="object"){const t=Object.entries(e).reduce((n,[r,i])=>(n[r]=me(i)?.value,n),{});return{identity:g.object,value:t}}else{if(typeof e=="function")return{identity:g.function,value:e};if(e instanceof Promise)return{identity:g.promise,value:e}}}throw new Error(`unable to marshal value: ${e} (it is neither a string, number, boolean, nor a regular expression)`)},Wt=["exact-match","base-match","default-match","permitted-no-conditions"];var at;(function(e){e.any={[g.string]:(t,n)=>t===n,[g.number]:(t,n)=>t===n,[g.boolean]:(t,n)=>t===n,[g.promise]:(t,n)=>t===n,[g.function]:(t,n)=>t===n,[g.null]:(t,n)=>t===n,[g.undefined]:(t,n)=>t===n,[g.unknown]:(t,n)=>t===n,[g.array]:(t,n)=>Array.isArray(t)&&Array.isArray(n)&&t.length===n.length&&t.every((r,i)=>e.any[Nt(r)](r,n[i])),[g.object]:(t,n)=>{if(typeof t!="object"||typeof n!="object")return!1;const r=Object.keys(t),i=Object.keys(n);return r.length!==i.length?!1:r.every(a=>e.any[Nt(t[a])](t[a],n[a]))},[g.regexp]:(t,n)=>{const r=t.exec(n);return r?r.groups?me(r.groups).value:r.length===1&&r[0]===r.input?!0:me(r.slice(1)[0]).value:!1}},e.valid={[g.string]:t=>t.length>0,[g.boolean]:t=>t===!1,[g.number]:t=>!isNaN(t),[g.array]:t=>Array.isArray(t)&&t.length>0,[g.object]:t=>{if(typeof t!="object"||t===null)return!0;const n=Object.keys(t);return n.length===0?!0:n.every(i=>{const a=t[i],s=Nt(a);return e.valid[s](a)})},[g.regexp]:t=>t instanceof RegExp,[g.function]:t=>typeof t=="function",[g.null]:()=>!1,[g.undefined]:()=>!1}})(at||(at={}));const D1=(e,t)=>{const n=new URL(e,window.location.origin);t&&Object.entries(t).forEach(([r,i])=>{n.searchParams.set(r,i)}),window.history.pushState({},"",n.toString())};class Ne{params={};original;constructor(t){if(typeof t=="string"&&(this.original=t),t){const n=me(t);n.value&&(this.params=n.value)}}get(t,n){return this.params[t]||n}set(t,n){}delete(t){delete this.params[t]}clear(){this.params={}}goto(t){D1(t,this.params)}test(t){if(typeof t=="object"){const n={};for(const[r,i]of Object.entries(t.params))if(this.params[r]){const a=me(this.params[r]);if(i instanceof RegExp){const s=at.any[g.regexp](i,this.params[r]);if(s)n[r]=s;else return{condition:"no-match"}}else a.identity===g.number?a.value===this.params[r]&&(n[r]=a.value):a.identity===g.string?n[r]=a.value===this.params[r]:a.identity===g.boolean?n[r]=a.value===!!this.params[r]:a.identity===g.array&&(n[r]=a.value.includes(this.params[r]))}else return{condition:"no-match"};return Object.keys(n).length===Object.keys(t).length&&at.valid[g.object](n)?{condition:"exact-match",matches:me(n).value}:{condition:Object.keys(n).length>1&&Object.keys(t).length!==Object.keys(n).length?"exact-match":"no-match",matches:n}}}toString(){const t=n=>Array.isArray(n)?n.map(r=>t(r)).join(","):typeof n=="object"&&n!==null?Object.entries(n).map(([r,i])=>`${r}:${t(i)}`).join(","):encodeURIComponent(n);return Object.entries(this.params).map(([n,r])=>`${encodeURIComponent(n)}=${t(r)}`).join("&")}toJSON(t){return Object.fromEntries(Object.entries(this.params).map(([n,r])=>[n,r.toString()]))}}var et;(function(e){e.parse=t=>{if(t){const[n,r=""]=t.split("#"),[i,a=""]=r.split("?");return{path:i,query:new Ne(a),hash:r}}}})(et||(et={}));const We=e=>(e&&!e.startsWith("/")&&(e="/"+e),e);var St;(function(e){e.parse=t=>{if(t===void 0||t.length===0)throw new Error(`invalid URL: ${t}`);const n=t.startsWith("file:///");if(t.includes("://")&&!n){const[i,a]=t.split("://"),s=a.match(/^([^/:]+)(?::(\d+))?(.*)$/),[l,o,c]=s?.slice(1)??[],[u,f=""]=(c||"").split("?"),h=et.parse(t);return{protocol:i,host:l,port:o,path:We(u)||"/",query:new Ne(f),hash:h}}else if(n){const[i,a]=t.split("://"),s=a.indexOf("#"),l=a.indexOf("?");let o="",c="/",u;if(s>l&&l!=-1)o=a.slice(0,l),c=We(a.slice(l)),u=new Ne(c);else{o=a.slice(0,s),c=We(a.slice(s));const[h,d]=(c||"").split("?");u=new Ne(d)}const f=et.parse(a);return{protocol:i,host:o,port:"",path:c,query:u,hash:f}}else{const[i,a=""]=t.split("?"),s=et.parse(t);return{protocol:window.location.protocol.replace(":",""),host:window.location.hostname,port:window.location.port,path:We(i)||"/",query:new Ne(a),hash:s}}},e.path=t=>t.split("?")[0]})(St||(St={}));const mt={};var X;(function(e){e.config=t=>({tracing:t?.tracing||mt?.SPA_ROUTER?.tracing||!1,logging:{level:t?.logging?.level||mt?.SPA_ROUTER?.logging?.level||4,console:t?.logging?.console||mt?.SPA_ROUTER?.logging?.console,sink:t?.logging?.sink||mt?.SPA_ROUTER?.logging?.sink}}),e.current=e.config()})(X||(X={}));var it;(function(e){let t;(function(n){n[n.FATAL=-1]="FATAL",n[n.ERROR=1]="ERROR",n[n.INFO=2]="INFO",n[n.DEBUG=3]="DEBUG",n[n.TRACE=4]="TRACE",n[n.DISABLED=5]="DISABLED"})(t=e.LogLevel||(e.LogLevel={})),e.info=(...n)=>{e.log(t.INFO,...n)},e.debug=(...n)=>{e.log(t.DEBUG,...n)},e.error=(...n)=>{e.log(t.ERROR,...n)},e.trace=(...n)=>{e.log(t.TRACE,...n)},e.fatal=(...n)=>{throw e.log(t.FATAL,...n),new Error("Fatal error")},e.log=(n,...r)=>{n<=X.current.logging.level&&n!==t.DISABLED&&(X.current.logging.console&&(r.some(i=>i?.toConsole)?r.forEach(i=>i?.toConsole?.(X.current.logging.level)):X.current.logging.console&&console.log(...r)),X.current.logging.sink&&X.current.logging.sink(r))}})(it||(it={}));var Et;(function(e){e.from=t=>{if(typeof t=="string")return new RegExp(t);if(t instanceof RegExp)return new RegExp(t.source);throw new Error("invalid regexp expression")},e.can=t=>/[[\]{}()*+?.,\\^$|#\s]|\\[wWdDsS]|\(\?[:!=<]?/.test(t)})(Et||(Et={}));function B1(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}const Ln=async e=>B1(e)?await e():e();class fn extends Map{#e=O(!1);get size(){return w(this.#e),super.size}#t(){L(this.#e,!w(this.#e))}add(t,n){if(this.has(t))throw new Error(`key ${t} already exists`);return this.set(t,n)}get(t){return w(this.#e),super.get(t)}set(t,n){const r=super.set(t,n);return this.#t(),r}delete(t){const n=super.delete(t);return n&&this.#t(),n}clear(){const t=super.clear();return this.#t(),t}keys(){return w(this.#e),super.keys()}values(){return w(this.#e),super.values()}entries(){return w(this.#e),super.entries()}forEach(t){return w(this.#e),super.forEach(t)}[Symbol.iterator](){return w(this.#e),super[Symbol.iterator]()}}class $1{prefix;id;date;name;description;metadata;#e=O(de(new fn));get traces(){return w(this.#e)}set traces(t){L(this.#e,t,!0)}constructor(t,n){this.prefix=n,this.name=t.name,this.id=t.id||Math.random().toString(36).substring(2,25),this.description=t.description,this.metadata=t.metadata,this.date=t.date||new Date}trace(t,n){const r=t.id||Math.random().toString(36).substring(2,25);return t=new q1(t,this.traces.size+1,this,n),this.traces.set(r,t),it.trace(n,t),t}get(){return this.traces.values()}}class q1{prefix;id;index;date;name;description;metadata;span;constructor(t,n,r,i){this.id=t.id||Math.random().toString(36).substring(2,25),this.index=n,this.date=t.date||new Date,this.name=t.name,this.description=t.description,this.metadata=t.metadata,this.span=r,this.prefix=t.prefix}toConsole(t){const n=["%c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s","color: #505050",this.date?.toISOString(),"color: #7A7A7A","color: #915CF2; font-weight: bold",this.span?.name||this.id,"color: #7A7A7A; font-weight: bold","color: #C3F53B; font-weight: bold",this.index,"color: #7A7A7A; font-weight: bold","color: #3BAEF5; font-weight: bold",`${this.metadata?.router?`[${this.metadata.router.id}] `:""}${this.name}`,"color: #06E96C",this.description];this.prefix&&(n[0]=`${this.prefix} %c%s %cspan:%c%s:%ctrace:%c%s%c:%c%s %c%s`),X.current.tracing.level>=it.LogLevel.TRACE?(n[0]+=`
%c%s`,n.push("color: #6B757F",`attached trace metadata:

${JSON.stringify({span:this.span.metadata,trace:this.metadata},null,2)}`)):X.current.tracing.level>=it.LogLevel.DEBUG&&(this.span&&n.push(this.span.metadata),this.metadata&&n.push(this.metadata)),console.log(...n)}}const U1=new fn,d0=(e,t)=>{if(X.current.tracing){const n=new $1({name:e,metadata:t});return U1.set(e,n),n}};var Yt;(function(e){e.base=(t,n)=>n.match(new RegExp(`^${t}(/|$)`))!==null})(Yt||(Yt={}));class Dt{route;result;constructor(t){this.route=t.route,this.result=t.result}toString(){let t="";if(this.result.querystring.original&&typeof this.result.querystring.original=="object"){const n=new URLSearchParams;for(const[r,i]of Object.entries(this.result.querystring.original))i!=null&&n.append(r,String(i));t=n.toString()}else this.result.querystring.original&&(t=String(this.result.querystring.original));return`${this.result.path.original}${t?`?${t}`:""}`}}class Z1{name;basePath;path;querystring;component;props;hooks;children;status;constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=t.path,this.querystring=t.querystring,this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status}toJSON(){return{name:this.name,basePath:this.basePath,path:this.path,props:this.props,component:this.component,querystring:this.querystring,hooks:this.hooks,children:this.children,status:this.status}}}class mn{name;basePath;path;querystring;component;props;hooks;children;status;#e=O(de([]));get traces(){return w(this.#e)}set traces(t){L(this.#e,t,!0)}constructor(t){this.name=t.name,this.basePath=t.basePath,this.path=typeof t.path=="string"?We(t.path):t.path,t.querystring&&(this.querystring=new Ne(t.querystring)),this.component=t.component,this.props=t.props,this.hooks=t.hooks,this.status=t.status,this.children=t.children?.map(n=>new mn(n))}test(t){const n=St.path(t.toString());if(typeof this.path=="string")if(Et.can(this.path)){const r=Et.from(this.path).exec(n);if(r)return{condition:"exact-match",params:r.groups}}else{if(this.path===n)return{condition:"exact-match",params:this.path};if(Yt.base(this.path,n))return{condition:"base-match",params:{}}}else if(this.path instanceof RegExp){const r=at.any[g.regexp](this.path,n);if(r)return{condition:"exact-match",params:r}}else if(typeof this.path=="number"&&this.path===me(n).value)throw new Error("numbered route match not supported at the route.path level");return{condition:"no-match",params:{}}}absolute(){return this.basePath?`${this.basePath}${this.path}`:this.path.toString()}}class G1{id;basePath;routes;hooks;initialPath;notFoundComponent;statuses;renavigation;constructor(t){this.id=t.id||Math.random().toString(36).substring(2,15),this.basePath=t.basePath,this.hooks=t.hooks,this.initialPath=t.initialPath,this.notFoundComponent=t.notFoundComponent,this.statuses=t.statuses,this.renavigation=t.renavigation??!0,this.routes=t.routes.map(n=>new Z1({...n,...t}))}toJSON(){return{id:this.id,basePath:this.basePath,routes:this.routes,hooks:this.hooks}}}var we;(function(e){e[e.OK=200]="OK",e[e.PermanentRedirect=301]="PermanentRedirect",e[e.TemporaryRedirect=302]="TemporaryRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.InternalServerError=500]="InternalServerError"})(we||(we={}));const J1=["","/","/*","/^.*$/","/.*/"];class Y1{id;routes=new Set;handlers;config;applyFn;#e=O(!1);get navigating(){return w(this.#e)}set navigating(t){L(this.#e,t,!0)}#t=O();get current(){return w(this.#t)}set current(t){L(this.#t,t,!0)}constructor(t,n){this.id=t.id||Math.random().toString(36).substring(2,15),this.config=t,this.applyFn=n,this.handlers={pushStateHandler:()=>this.handleStateChange(location.toString()),replaceStateHandler:()=>this.handleStateChange(location.toString()),popStateHandler:()=>this.handleStateChange(location.toString()),hashChangeHandler:()=>this.handleStateChange(location.toString())},window.addEventListener("pushState",this.handlers.pushStateHandler),window.addEventListener("replaceState",this.handlers.replaceStateHandler),window.addEventListener("popstate",this.handlers.popStateHandler),window.addEventListener("hashchange",this.handlers.hashChangeHandler);for(let r of t.routes)this.routes.add(new mn({...r,basePath:r.basePath||this.config.basePath}))}async handleStateChange(t,n){const{path:r,query:i}=St.parse(t);this.navigating=!0,n||(n=d0("detected history change event")),n?.trace({prefix:"🔍",name:"router-instance.handleStateChange",description:`attempting to handle a new state change for path "${r}"`,metadata:{router:{id:this.config.id,basePath:this.config.basePath},location:"/src/lib/router-instance.svelte:handleStateChange()",basePath:this.config.basePath,path:r,query:i,url:t}});const a=await this.get(r,i,n);if(a&&Wt.includes(a.result.path.condition)){if(n?.trace({prefix:"✅",name:"router-instance.handleStateChange",description:`route found for path "${r}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},path:r,query:i?.params||!1,route:a,url:t}}),this.config.hooks?.pre&&!await this.evaluateHooks(a,this.config.hooks.pre)){this.navigating=!1;return}if(a.route?.hooks?.pre&&!await this.evaluateHooks(a,a.route.hooks.pre)){this.navigating=!1;return}const s=this.current&&this.current.result.path.original===a.result.path.original&&JSON.stringify(this.current.result.querystring.params)===JSON.stringify(a.result.querystring.params);if(this.config.renavigation!==!1?(this.current=void 0,n?.trace({prefix:s?"🔄":"✅",name:"router-instance.applyRoute",description:s?`re-mounting same route "${a.result.path.original}" (renavigation enabled)`:`applying new route "${a.result.path.original}"`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:s,renavigation:this.config.renavigation,result:a}}),this.applyFn(a,n),this.current=a):(n?.trace({prefix:"⏭️",name:"router-instance.skipRenavigation",description:`skipping same route "${a.result.path.original}" (renavigation disabled)`,metadata:{location:"/src/lib/router-instance.svelte:handleStateChange()",router:{id:this.config.id,basePath:this.config.basePath},isSameRoute:s,renavigation:this.config.renavigation,result:a}}),this.current=a),a&&a.route?.hooks?.post&&!await this.evaluateHooks(a,a.route.hooks.post)){this.navigating=!1;return}this.config.hooks?.post&&await this.evaluateHooks(a,this.config.hooks.post),this.current=a}this.navigating=!1}async evaluateHooks(t,n){if(Array.isArray(n))for(const r of n){if(!await Ln(()=>r(t)))return!1;await new Promise(i=>setTimeout(i,50))}else if(!await Ln(()=>n(t)))return!1;return!0}async get(t,n,r){t=t.replace("/#","");const i=We(t.replace(this.config.basePath||"/","")),a=l=>{let o;for(const c of this.routes)if(!c.path||J1.includes(c.path.toString())){o=c;break}if(r?.trace({prefix:o?"✅":"❌",name:"router-instance.getDefaultRoute",description:`get default route because "${l}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,route:o}}),o)return new Dt({route:o,result:{path:{condition:"default-match",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:o.component,status:we.OK}})};if(r?.trace({prefix:"🔍",name:"router-instance.get",description:`${this.config.id} with base path "${this.config.basePath||"/"}" is attempting to get a route for path "${t}"`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i}}),this.config.basePath===t)return a("base path is the same as the path");let s;for(const l of this.routes){const o=l.test(i);if(o&&Wt.includes(o.condition))if(r?.trace({prefix:"✅",name:"router-instance.get:routesloop",description:`${o.condition} for inbound path "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get():forloop",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,route:l,evaluation:{path:o}}}),l.querystring&&n){const c=n.test(l.querystring);Wt.includes(c?.condition)&&(r?.trace({prefix:"✅",name:"router-instance.get.evaluateQuery",description:`${c?.condition} evaluating querystring "${n?.toString()}" for the route "${t}"${l.name?` (named: "${l.name}")`:""}`,metadata:{location:"/src/lib/router-instance.svelte:get()",router:{id:this.config.id,basePath:this.config.basePath},path:t,query:n,normalized:i,evaluation:{path:o,querystring:c}}}),s=new Dt({route:l,result:{path:{...o,original:i},querystring:{...c,original:n.toJSON()},component:l.component,status:we.OK}}))}else s=new Dt({route:l,result:{path:{...o,original:i},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},component:l.component,status:we.OK}})}if(t==="/")return a("no routes match, last resort is to find a default route");if(!s&&this.config.statuses?.[404]){const l=this.config.statuses[404];return typeof l=="function"?{result:{...l({result:{path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:we.NotFound}},r),path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:we.NotFound}}:{result:{...l,path:{condition:"permitted-no-conditions",original:t},querystring:{condition:"permitted-no-conditions",original:n?.toJSON(),params:n?.toJSON()},status:we.NotFound}}}return s}deregister(t){window.removeEventListener("pushState",this.handlers.pushStateHandler),window.removeEventListener("replaceState",this.handlers.replaceStateHandler),window.removeEventListener("popstate",this.handlers.popStateHandler),window.removeEventListener("hashchange",this.handlers.hashChangeHandler),f0.deregister(this.config.id,t)}get routesArray(){return Array.from(this.routes)}toJSON(){return{id:this.id,config:this.config}}}class K1{instances=new fn;constructor(){if(window.__SVELTE_SPA_ROUTER_REGISTERED__)return window.__SVELTE_SPA_ROUTER_REGISTERED__;window.__SVELTE_SPA_ROUTER_REGISTERED__=this;const{pushState:t,replaceState:n}=window.history;window.history.pushState=function(...r){t.apply(window.history,r),window.dispatchEvent(new Event("pushState"))},window.history.replaceState=function(...r){n.apply(window.history,r),window.dispatchEvent(new Event("replaceState"))}}register(t,n,r){if(this.instances.has(t.id))throw new Error(`router instance with id ${t.id} already registered`);const i=new Y1(t,n);return r&&r.trace({prefix:"🔍",name:"registry.register",description:"registering a new router instance",metadata:{router:{id:t.id,basePath:t.basePath},location:"/src/lib/registry.svelte:register()",config:t}}),this.instances.set(t.id,i),i}deregister(t,n){const r=this.instances.get(t);if(n&&n.trace({prefix:r?"✅":"❌",name:"registry.deregister",description:"deregistering a router instance",metadata:{router:{id:t,basePath:r.config.basePath},location:"/src/lib/registry.svelte:deregister()",config:r.config}}),r)this.instances.delete(t);else throw new Error(`router instance with id ${t} not found`)}get(t){return this.instances.get(t)}}const f0=window.__SVELTE_SPA_ROUTER_REGISTRY__||new K1;function Q1(e,t){q(t,!0);let n=F(t,"instance",15),r=x1(t,["$$slots","$$events","$$legacy","instance"]);const i=d0(t.id?`[${t.id}]`:"router");let a=O(null),s,l=O(void 0),o=O(de({}));const c=async(p,y)=>{if(L(l,p,!0),y?.trace({prefix:"✅",name:"apply",description:`<Router${s.config.id?` id="${s.config.id}"`:""}/> applying route ${p.result.path.original} (${p.result.path.condition})`,metadata:{location:"/src/lib/router.svelte:apply()",router:{id:s.config.id,basePath:s.config.basePath},result:p}}),typeof p.result.component=="function"&&p.result.component.constructor.name==="AsyncFunction"){const k=await p.result.component();L(a,k.default||k,!0)}else L(a,p.result.component,!0);L(l,{...p},!0),L(o,w(l).route?.props,!0)};s=f0.register(new G1(r),c,i),i?.trace({prefix:"✅",name:"<Router/> Component",description:"new component mounted",metadata:{router:{id:s.config.id,basePath:s.config.basePath},location:"/src/lib/router.svelte:mount()"}}),n(s),i&&(i.metadata={router:s.config.id}),s.handleStateChange(location.toString(),i),ie(()=>{s.deregister(i)});const{routes:u,basePath:f,...h}=r;var d=zn(),m=Ct(d);I1(m,()=>w(l)?.result?.path?.original||Math.random(),p=>{var y=zn(),k=Ct(y);L1(k,()=>w(a),(b,v)=>{v(b,F1({get route(){return w(l)}},()=>w(o),()=>h))}),T(p,y)}),T(e,d),U()}var X1=V('<main><p class="lbl-title svelte-85uvon">Freelancer & Hobbyist based in Edinburgh, Scotland</p> <p class="lbl-contact svelte-85uvon">Email: elecarno@proton.me • Discord: @elecarno</p> <div class="con-names svelte-85uvon"><button class="btn-name svelte-85uvon" id="btn-1"><h1 class="svelte-85uvon">Elecarno</h1> <p class="svelte-85uvon">Developer · Graphic Designer · Video Editor · VRChat Artist</p></button> <button class="btn-name svelte-85uvon" id="btn-2"><h1 class="svelte-85uvon">Monarch Atolla</h1> <p class="svelte-85uvon">Musical Artist</p></button> <button class="btn-name svelte-85uvon" id="btn-4"><h1 class="svelte-85uvon">B. McEwan</h1> <p class="svelte-85uvon">3D Artist · Writer</p></button> <button class="btn-name svelte-85uvon" id="btn-3"><h1 class="svelte-85uvon">Arkady Orlunda</h1> <p class="svelte-85uvon">Writer · Screenwriter · Composer</p></button></div></main>');function e2(e){function t(u){document.documentElement.style.setProperty("--site-bg",u)}function n(){document.documentElement.style.setProperty("--site-bg","rgba(46, 115, 89, 1)")}function r(u){window.location.href=u}var i=X1(),a=z(C(i),4),s=C(a),l=z(s,2),o=z(l,2),c=z(o,2);E("click",s,()=>{r("/elecarno/")}),E("mouseenter",s,()=>{t("#3d4fad")}),E("mouseleave",s,n),E("click",l,()=>{r("/ma/")}),E("mouseenter",l,()=>{t("#ff5733")}),E("mouseleave",l,n),E("click",o,()=>{r("/mcewan/")}),E("mouseenter",o,()=>{t("#b3923e")}),E("mouseleave",o,n),E("click",c,()=>{r("/ao/")}),E("mouseenter",c,()=>{t("#de5b89")}),E("mouseleave",c,n),T(e,i)}var t2=V('<main><h1 class="svelte-1r6spzv">404: Not Found</h1> <p>It would appear you are trying to access a page that does not exist on my domain!<br/> Double check the address, or use the button below to go my home page.</p> <button>Go to Home</button> <p>Alternatively, click <a href="links">here</a> to see a list of all pages on this domain.</p></main>');function n2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-404")}),ie(()=>{document.documentElement.classList.remove("pg-404")});function n(a){window.location.href=a}re();var r=t2();he(a=>{ne.title="Elecarno | 404"});var i=z(C(r),4);E("click",i,()=>{n("/")}),T(e,r),U()}var r2=V(`<main class="svelte-buje38"><h1 class="svelte-buje38">Links</h1> <p>A list of all sites and pages on this domain.</p> <ul><li><a href="/">/</a> - Home Page</li> <li><a href="/*">/*</a> - 404 Page</li> <li><a href="/links/">/links/</a> - Links Page</li></ul> <h3 class="svelte-buje38">Project Sites</h3> <ul><li><a href="/past-paper-viewer/">/past-paper-viewer/</a> - Website for the Past Paper Viewer project</li> <li><a href="/crossing-red-helios/">/crossing-red-helios/</a> - Website for the Crossing Red-Helios project</li> <li><a href="/crh-wiki/">/crh-wiki/</a> - Wiki for the Crossing Red-Helios project</li> <li><a href="/aster-docs/">/aster-docs/</a> - Documentation for the <a href="https://www.github.com/jachdich/aster-server">Aster</a> project</li> <li><a href="/music-theory-tester/">/music-theory-tester/</a> - A simple web app for memorising heptatonic musical scales.</li></ul> <hr/> <h2 class="svelte-buje38">Elecarno</h2> <a href="/elecarno/">/elecarno/</a> <hr/> <h2 class="svelte-buje38">Monarch Atolla</h2> <a href="/ma/">/ma/</a> <h3 class="svelte-buje38">Albums & EPs</h3> <ul><li><a href="/ma/amber/">/ma/amber/</a> - An Amber Ballad</li> <li><a href="/ma/hope/">/ma/hope/</a> - Hope Need Not Be Real</li> <li><a href="/ma/candle/">/ma/candle/</a> - Candlelight Fragments</li> <li><a href="/ma/brothers/">/ma/brothers/</a> - Brothers at the End of an Era</li></ul> <h3 class="svelte-buje38">Singles</h3> <ul><li><a href="/ma/golden">/ma/golden/</a> - Golden Friend of Silver Water</li> <li><a href="/ma/winter">/ma/winter/</a> - Call Your Names In Winter Night</li> <li><a href="/ma/classroom">/ma/classroom/</a> Soft Eyes Under Classroom Glow</li> <li><a href="/ma/shimmering">/ma/shimmering/</a> - Shimmering Flower</li> <li><a href="/ma/simille">/ma/simile/</a> - Fall in Simile</li> <li><a href="/ma/heart">/ma/heart/</a> - Brother by Heart</li> <li><a href="/ma/silent">/ma/silent/</a> - When Silent Was Joy</li> <li><a href="/ma/parallels">/ma/parallels/</a> - Parallels</li></ul> <hr/> <h2 class="svelte-buje38">B. McEwan</h2> <a href="/mcewan/">/mcewan/</a> <h3 class="svelte-buje38">3D Artist</h3> <a href="/mcewan/3d/">/mcewan/3d/</a> <ul><li><a href="/mcewan/3d/dragonfly">/mcewan/3d/dragonfly/</a> - Mechanical Dragonfly</li> <li><a href="/mcewan/3d/butterfly">/mcewan/3d/butterfly/</a> - Mechanical Butterfly</li> <li><a href="/mcewan/3d/ontop">/mcewan/3d/ontop/</a> - We're on Top</li> <li><a href="/mcewan/3d/fighter">/mcewan/3d/fighter/</a> - Space Fighter</li> <li><a href="/mcewan/3d/robot">/mcewan/3d/robot/</a> - Robot</li></ul> <h3 class="svelte-buje38">Writer</h3> <a href="/mcewan/3d/">/mcewan/writer/</a> <hr/> <h2 class="svelte-buje38">Arkady Orlunda</h2> <a href="/ao/">/ao/</a></main>`);function a2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-links")}),ie(()=>{document.documentElement.classList.remove("pg-links")}),re();var n=r2();he(r=>{ne.title="Elecarno | Links"}),T(e,n),U()}var i2=V('<main><h1 class="svelte-1n1xj68">Elecarno</h1> <p>Page In Development</p></main>');function s2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-elecarno")}),ie(()=>{document.documentElement.classList.remove("pg-elecarno")}),re();var n=i2();he(r=>{ne.title="Elecarno"}),T(e,n),U()}var o2=V('<a class="a-rel svelte-1wxv882"><!></a>'),l2=V('<a class="a-rel svelte-1wxv882"><!></a>'),c2=V('<main class="svelte-1wxv882"><div class="con-logo svelte-1wxv882"><h1 class="mon svelte-1wxv882">Monarch</h1> <h1 class="ato svelte-1wxv882">Atolla</h1></div> <h1 style="margin-top: 75px;" class="svelte-1wxv882">Albums & EPs</h1> <div class="con-display svelte-1wxv882"></div> <h1 style="margin-top: 150px;" class="svelte-1wxv882">Singles</h1> <div class="con-display svelte-1wxv882"></div></main>');function h2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-ma")}),ie(()=>{document.documentElement.classList.remove("pg-ma")});let n=[{name:"An Amber Ballad",link:"amber",img:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc"},{name:"Hope Need <br> Not Be Real",link:"hope",img:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd"},{name:"Candlelight <br> Fragments",link:"candle",img:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773"},{name:"Brothers at the <br> End of an Era",link:"brothers",img:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae"}],r=[{name:"Golden Friend of <br> Silver Water",link:"golden",img:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd"},{name:"Call Your Names <br> in Winter Night",link:"winter",img:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db"},{name:"Soft Eyes Under <br> Classroom Glow",link:"classroom",img:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2"},{name:"Shimmering <br> Flower",link:"shimmering",img:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f"},{name:"Fall in Simile",link:"simile",img:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e"},{name:"Brother by Heart",link:"heart",img:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76"},{name:"When Silent <br> Was Joy",link:"silent",img:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0"},{name:"Parallels",link:"parallels",img:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6"}];re();var i=c2();he(l=>{ne.title="Monarch Atolla"});var a=z(C(i),4);zt(a,5,()=>n,Mt,(l,o)=>{var c=o2(),u=C(c);It(u,()=>w(o).name),ee(()=>{J(c,"href",`/ma/${w(o).link??""}`),Se(c,`background-image: url(${w(o).img??""})`)}),T(l,c)});var s=z(a,4);zt(s,5,()=>r,Mt,(l,o)=>{var c=l2(),u=C(c);It(u,()=>w(o).name),ee(()=>{J(c,"href",`/ma/${w(o).link??""}`),Se(c,`background-image: url(${w(o).img??""})`)}),T(l,c)}),T(e,i),U()}const An={icon:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",mask:"M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",color:"#7f7f7f"},u2={bandsintown:{icon:"M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",mask:"M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",color:"#1B8793"},behance:{icon:"M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",mask:"M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",color:"#007CFF"},codepen:{icon:"M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",mask:"M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",color:"##151515"},discord:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 26.404297 16.828125 L 26.769531 17.259766 C 20.186671 19.137498 17.152344 21.990234 17.152344 21.990234 C 17.152344 21.990234 17.957407 21.557233 19.310547 20.943359 C 23.223697 19.246178 26.331328 18.778253 27.611328 18.669922 C 27.830758 18.633812 28.012992 18.597656 28.232422 18.597656 C 30.463282 18.308769 32.987954 18.236508 35.621094 18.525391 C 39.095384 18.922604 42.825476 19.931951 46.628906 21.990234 C 46.628906 21.990234 43.738624 19.282029 37.521484 17.404297 L 38.035156 16.828125 C 38.035156 16.828125 43.044257 16.719236 48.310547 20.619141 C 48.310547 20.619141 53.576172 30.044365 53.576172 41.671875 C 53.576172 41.671875 50.468999 46.907386 42.386719 47.160156 C 42.386719 47.160156 41.069796 45.606565 39.972656 44.234375 C 44.763516 42.898295 46.591797 39.9375 46.591797 39.9375 C 45.092367 40.91248 43.666719 41.598919 42.386719 42.068359 C 40.558139 42.826669 38.802844 43.332214 37.083984 43.621094 C 33.573124 44.271074 30.354188 44.091468 27.611328 43.585938 C 25.526758 43.188727 23.735758 42.610963 22.236328 42.033203 C 21.395188 41.708213 20.480696 41.310228 19.566406 40.804688 C 19.456696 40.732487 19.346048 40.69722 19.236328 40.625 C 19.163228 40.5889 19.126414 40.551755 19.089844 40.515625 C 18.431554 40.154535 18.066406 39.902344 18.066406 39.902344 C 18.066406 39.902344 19.822217 42.789919 24.466797 44.162109 C 23.369647 45.534299 22.015625 47.160156 22.015625 47.160156 C 13.933335 46.907386 10.861328 41.671875 10.861328 41.671875 C 10.861328 30.044375 16.128906 20.619141 16.128906 20.619141 C 21.395196 16.719236 26.404297 16.828125 26.404297 16.828125 z M 25.380859 30.296875 C 23.296289 30.296875 21.650391 32.101957 21.650391 34.304688 C 21.650391 36.507407 23.332859 38.3125 25.380859 38.3125 C 27.465429 38.3125 29.111328 36.507407 29.111328 34.304688 C 29.147928 32.101957 27.465429 30.296875 25.380859 30.296875 z M 38.728516 30.296875 C 36.643946 30.296875 34.998047 32.101957 34.998047 34.304688 C 34.998047 36.507407 36.680516 38.3125 38.728516 38.3125 C 40.813086 38.3125 42.458984 36.507407 42.458984 34.304688 C 42.458984 32.101957 40.813086 30.296875 38.728516 30.296875 z ",color:"#7289DA"},dribbble:{icon:"M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",mask:"M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",color:"#ea4c89"},dropbox:{icon:"M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",mask:"M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",color:"#1081DE"},email:An,facebook:{icon:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",mask:"M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",color:"#3b5998"},fivehundredpix:{icon:"M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",mask:"M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",color:"#222222"},flickr:{icon:"M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",mask:"M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",color:"#0063db"},foursquare:{icon:"M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",mask:"M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",color:"#0072b1"},github:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",color:"#24292e"},google:{icon:"M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",mask:"M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",color:"#dd4b39"},google_play:{icon:"M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",mask:"M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",color:"#40BBC1"},instagram:{icon:"M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z",mask:"M0,0v64h64V0H0z M 42.03,23.99 C 42.03,24.99 41.22,25.79 40.23,25.79 39.23,25.79 38.43,24.99 38.43,23.99 38.43,22.99 39.23,22.19 40.23,22.19 41.22,22.19 42.03,22.99 42.03,23.99 Z M 24.52,31.99 C 24.52,27.74 27.97,24.29 32.22,24.29 36.47,24.29 39.92,27.75 39.92,31.99 39.92,36.24 36.47,39.70 32.22,39.70 27.97,39.70 24.52,36.25 24.52,31.99 Z M 27.22,31.99 C 27.22,34.76 29.46,36.99 32.22,36.99 34.98,36.99 37.22,34.76 37.22,31.99 37.22,29.23 34.98,27.00 32.22,27.00 29.46,27.00 27.22,29.23 27.22,31.99 Z M 38.28,19.79 C 36.70,19.72 36.22,19.70 32.22,19.70 28.22,19.70 27.74,19.71 26.17,19.79 24.69,19.85 23.90,20.11 23.37,20.31 22.67,20.58 22.17,20.90 21.65,21.43 21.13,21.96 20.80,22.46 20.53,23.16 20.33,23.68 20.08,24.48 20.01,25.94 19.94,27.52 19.92,27.99 19.92,32.01 19.92,36.01 19.94,36.48 20.01,38.06 20.08,39.52 20.33,40.32 20.53,40.84 20.80,41.54 21.13,42.05 21.65,42.57 22.17,43.10 22.67,43.41 23.37,43.69 23.90,43.90 24.69,44.15 26.17,44.21 27.74,44.28 28.22,44.30 32.22,44.30 36.22,44.30 36.70,44.28 38.28,44.21 39.75,44.15 40.54,43.89 41.07,43.69 41.77,43.42 42.27,43.10 42.80,42.57 43.32,42.05 43.64,41.54 43.91,40.84 44.12,40.32 44.36,39.52 44.43,38.06 44.50,36.48 44.52,36.01 44.52,32.01 44.52,27.99 44.50,27.52 44.43,25.94 44.36,24.48 44.12,23.68 43.91,23.16 43.64,22.46 43.32,21.96 42.80,21.43 42.27,20.90 41.77,20.59 41.07,20.31 40.54,20.10 39.75,19.85 38.28,19.79 Z M 26.03,17.09 C 27.64,17.02 28.15,17.00 32.22,17.00 36.27,17.00 36.80,17.02 38.38,17.08 38.38,17.08 38.41,17.08 38.41,17.08 40.01,17.15 41.10,17.41 42.06,17.78 43.04,18.17 43.87,18.68 44.71,19.51 45.54,20.34 46.06,21.18 46.44,22.17 46.81,23.13 47.06,24.21 47.14,25.81 47.21,27.41 47.23,27.92 47.23,31.99 47.23,36.07 47.21,36.58 47.14,38.18 47.06,39.78 46.81,40.87 46.44,41.82 46.06,42.80 45.54,43.65 44.71,44.48 43.87,45.31 43.04,45.83 42.06,46.21 41.10,46.58 40.00,46.84 38.41,46.91 36.81,46.98 36.31,47.00 32.23,47.00 28.15,47.00 27.64,46.98 26.04,46.91 24.44,46.84 23.35,46.58 22.40,46.21 21.42,45.82 20.58,45.31 19.75,44.48 18.91,43.65 18.39,42.81 18.01,41.82 17.64,40.86 17.39,39.78 17.32,38.18 17.25,36.58 17.23,36.07 17.23,31.99 17.23,27.92 17.25,27.41 17.32,25.82 17.39,24.21 17.64,23.13 18.01,22.17 18.39,21.20 18.91,20.35 19.75,19.52 20.58,18.69 21.41,18.17 22.40,17.78 23.35,17.42 24.44,17.16 26.03,17.09 Z",color:"#e94475"},"itch.io":{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32 16 C 36.482469 15.999275 39.489763 16.027944 43.828125 16.197266 C 45.223688 17.11826 47.973899 20.631595 48 21.552734 L 48 23.076172 C 48 25.008914 46.375769 26.707031 44.900391 26.707031 C 43.128974 26.707031 41.652344 25.07576 41.652344 23.138672 C 41.652344 25.07576 40.226756 26.707031 38.455078 26.707031 C 36.68353 26.707031 35.302734 25.07576 35.302734 23.138672 C 35.302734 25.07576 33.787432 26.707031 32.015625 26.707031 L 31.984375 26.707031 C 30.212699 26.707031 28.697266 25.07576 28.697266 23.138672 C 28.697266 25.07576 27.316728 26.707031 25.544922 26.707031 C 23.773245 26.707031 22.347656 25.07576 22.347656 23.138672 C 22.347526 25.07576 20.871157 26.707031 19.099609 26.707031 C 17.624234 26.707031 16 25.008624 16 23.076172 L 16 21.552734 C 16.026082 20.63174 18.776052 17.11855 20.171875 16.197266 C 21.406769 16.077682 27.517662 16.000435 32 16 z M 28.673828 25.796875 A 3.6505562 4.0580007 0 0 0 29.292969 26.689453 A 3.7155025 4.1301957 0 0 0 31.894531 27.867188 C 31.930136 27.867188 31.964779 27.866621 32 27.865234 C 32.035221 27.866088 32.07219 27.867188 32.107422 27.867188 A 3.7155025 4.1301957 0 0 0 34.708984 26.689453 A 3.6502954 4.0577109 0 0 0 35.326172 25.796875 A 3.6548598 4.0627847 0 0 0 35.949219 26.689453 C 36.617985 27.416189 37.534472 27.867188 38.544922 27.867188 A 3.7141985 4.1287462 0 0 0 41.146484 26.689453 C 41.388792 26.425753 41.573442 26.142952 41.742188 25.814453 C 41.910814 26.143677 42.1458 26.425338 42.388672 26.689453 A 3.7168066 4.1316454 0 0 0 44.990234 27.867188 C 45.112172 27.867188 45.239291 27.830162 45.341797 27.791016 C 45.484209 29.439616 45.543344 31.01503 45.564453 32.164062 L 45.566406 32.169922 C 45.569073 32.753426 45.571445 33.23411 45.574219 33.900391 C 45.546831 37.359375 45.881298 45.110721 44.201172 47.015625 C 41.597581 47.690463 36.806287 47.998187 32 48 C 27.193582 47.998115 22.402421 47.690463 19.798828 47.015625 C 18.118702 45.110865 18.455126 37.359375 18.427734 33.900391 C 18.430401 33.233965 18.432987 32.753281 18.435547 32.169922 L 18.435547 32.164062 C 18.456799 31.015319 18.515782 29.439616 18.658203 27.791016 C 18.760709 27.830151 18.887947 27.867188 19.009766 27.867188 A 3.7168066 4.1316454 0 0 0 21.611328 26.689453 C 21.85416 26.425316 22.089324 26.143533 22.257812 25.814453 C 22.426437 26.142953 22.611207 26.425606 22.853516 26.689453 A 3.7144592 4.129036 0 0 0 25.455078 27.867188 C 26.465659 27.867188 27.382014 27.416332 28.050781 26.689453 A 3.6548598 4.0627847 0 0 0 28.673828 25.796875 z M 37.998047 29.636719 L 37.998047 29.638672 L 37.996094 29.638672 C 36.938044 29.640989 35.998583 29.639715 34.833984 31.052734 C 33.917302 30.94591 32.958545 30.891191 32 30.892578 C 31.041455 30.890977 30.082567 30.945897 29.166016 31.052734 C 28.001416 29.63986 27.061956 29.641019 26.003906 29.638672 L 26.001953 29.638672 C 25.502078 29.638672 23.502722 29.638165 22.109375 33.988281 L 20.613281 39.955078 C 19.504239 44.394801 20.966648 44.503759 22.792969 44.507812 C 25.50128 44.395752 27.001953 42.209586 27.001953 40.023438 C 28.501065 40.296565 30.250885 40.433594 32 40.433594 C 33.748987 40.433449 35.498804 40.296562 36.998047 40.023438 C 36.998047 42.209586 38.496636 44.395759 41.205078 44.507812 C 43.031397 44.503898 44.495762 44.39464 43.386719 39.955078 L 41.890625 33.988281 C 40.497278 29.638166 38.497925 29.636719 37.998047 29.636719 z M 32 33.056641 C 32 33.056641 34.851013 35.967594 35.363281 37.001953 L 33.498047 36.919922 L 33.498047 38.728516 C 33.498047 38.813166 32.749101 38.778784 32 38.740234 C 31.250641 38.778805 30.501953 38.813177 30.501953 38.728516 L 30.501953 36.919922 L 28.636719 37.001953 C 29.148854 35.967594 31.997653 33.059414 32 33.056641 z ",color:"#fa5c5c"},itunes:{icon:"M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",mask:"M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",color:"#E049D1"},linkedin:{icon:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",mask:"M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",color:"#007fb1"},mailto:An,medium:{icon:"M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",mask:"M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",color:"#333332"},meetup:{icon:"M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",mask:"M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",color:"#E51937"},pinterest:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",mask:"M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",color:"#cb2128"},rdio:{icon:"M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",mask:"M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",color:"#0475C5"},reddit:{icon:"M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",mask:"M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",color:"#FF4500"},rss:{icon:"M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",mask:"M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",color:"#EF8733"},sharethis:{icon:"M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",mask:"M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",color:"#00BF00"},smugmug:{icon:"M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",mask:"M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",color:"#8cca1e"},snapchat:{icon:"M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",mask:"M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",color:"#FFC91B"},soundcloud:{icon:"M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",mask:"M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",color:"#FF5700"},spotify:{icon:"M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",mask:"M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",color:"#2EBD59"},squarespace:{icon:"M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",mask:"M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",color:"#1C1C1C"},stackoverflow:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 37.623047 12.775391 L 47.613281 26.207031 L 44.925781 28.203125 L 34.9375 14.771484 L 37.623047 12.775391 z M 31.462891 18.119141 L 44.326172 28.832031 L 42.183594 31.404297 L 29.320312 20.691406 L 31.462891 18.119141 z M 26.533203 25.103516 L 41.708984 32.167969 L 40.294922 35.205078 L 25.121094 28.136719 L 26.533203 25.103516 z M 23.640625 32.705078 L 40.021484 36.150391 L 39.333984 39.423828 L 22.953125 35.980469 L 23.640625 32.705078 z M 15.984375 36.972656 L 19.318359 36.972656 L 19.318359 46.978516 L 42.666016 46.978516 L 42.666016 36.972656 L 46 36.972656 L 46 50.3125 L 15.984375 50.3125 L 15.984375 36.972656 z M 22.654297 40.308594 L 39.330078 40.308594 L 39.330078 43.642578 L 22.654297 43.642578 L 22.654297 40.308594 z",color:"#ed803d"},telegram:{icon:"M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",mask:"M0,0v64h64V0H0z M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",color:"#49a9e9"},tiktok:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z",color:"#000000"},tumblr:{icon:"M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",mask:"M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",color:"#2c4762"},twitch:{icon:"M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",mask:"M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",color:"#6441A5"},twitter:{icon:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",mask:"M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",color:"#00aced"},upwork:{icon:"M 0,0 H 64 V 64 H 0 Z",mask:"M 32 0 C 14.272 0 0 14.272 0 32 C 0 49.728 14.272 64 32 64 C 49.728 64 64 49.728 64 32 C 64 14.272 49.728 0 32 0 z M 24.9375 17.111328 L 30.537109 17.111328 C 31.637109 20.911328 33.636719 25.310938 36.136719 29.210938 C 37.736719 23.710938 41.737109 20.210938 47.037109 20.210938 C 53.137109 20.210938 58.136719 25.2125 58.136719 31.3125 C 58.136719 37.7125 53.137109 42.710938 47.037109 42.710938 C 44.037109 42.710937 41.537891 41.911719 39.337891 40.511719 L 36.9375 52.412109 L 31.236328 52.412109 L 34.736328 36.111328 C 33.236328 34.011328 31.836328 31.612109 30.736328 29.412109 L 30.736328 31.912109 C 30.736328 38.012109 25.837891 42.912109 19.837891 42.912109 C 13.837891 42.912109 8.9375 38.012109 8.9375 31.912109 L 8.9375 17.210938 L 14.337891 17.210938 L 14.337891 31.8125 C 14.337891 34.7125 16.736719 37.111328 19.636719 37.111328 C 22.536719 37.111328 24.9375 34.7125 24.9375 31.8125 L 24.9375 17.111328 z M 47.136719 25.912109 C 43.036719 25.912109 41.737891 29.9125 41.337891 32.3125 L 41.337891 32.412109 L 40.736328 34.611328 C 42.536328 36.111328 44.837109 37.111328 47.037109 37.111328 C 49.937109 37.111328 52.636328 34.611719 52.736328 31.511719 C 52.736328 28.411719 50.236719 25.912109 47.136719 25.912109 z ",color:"#1a0"},vevo:{icon:"M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",mask:"M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",color:"#ED1A3B"},vimeo:{icon:"M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",mask:"M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",color:"#1ab7ea"},vine:{icon:"M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",mask:"M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",color:"#00BF8F"},vk:{icon:"M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",mask:"M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",color:"#45668e"},vsco:{icon:"M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",mask:"M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",color:"#83878A"},wechat:{icon:"M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z",mask:"M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z",color:"#00c80f"},whatsapp:{icon:"M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",mask:"M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",color:"#25D366"},yelp:{icon:"M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",mask:"M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",color:"#B90C04"},youtube:{icon:"M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",mask:"M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",color:"#ff3333"}};var d2=V('<span class="social-icon"><div class="social-container"><svg class="social-svg" viewBox="0 0 64 64"><g class="social-svg-background"><circle cx="32" cy="32" r="31"></circle></g><g class="social-svg-icon"><path></path></g><g class="social-svg-mask"><path></path></g></svg></div></span>');function Bt(e,t){q(t,!1);let n=F(t,"network",8);const{color:r,icon:i,mask:a}=u2[n()];let s=F(t,"bgColor",8,r),l=F(t,"fgColor",8,"transparent"),o=F(t,"height",8,48),c=F(t,"width",8,48);const f=`display: inline-block; position: relative; overflow: hidden; ${F(t,"style",8,"")()}`,h="position: absolute; inset: 0; width: 100%; height: 100%;",d="border-radius: 50%; position: absolute; inset: 0; width: 100%; height: 100%; fill-rule: evenodd;",m="@media (prefers-reduced-motion: no-preference) { --ms-transition: 'fill 170ms ease-in-out'; -o-transition: 'fill 170ms ease-in-out'; --moz-transition: 'fill 170ms ease-in-out'; --webkit-transition: 'fill 170ms ease-in-out'; transition: 'fill 170ms ease-in-out';}",p=`${m} fill: transparent;`;re();var y=d2();let k;var b=C(y);Se(b,h);var v=C(b);Se(v,d);var I=C(v);Se(I,p);var j=z(I),ue=C(j),Z=z(j);Se(Z,m);var se=C(Z);ee(P=>{k=Se(y,f,k,P),J(j,"fill",l()),J(ue,"d",i),J(Z,"fill",s()),J(se,"d",a)},[()=>({width:`${c()}px`,height:`${o()}px`})]),T(e,y),U()}var f2=V('<div class="con-lyrics svelte-nvy5wv"><div class="pan-lyrics svelte-nvy5wv"><h2 class="svelte-nvy5wv"> </h2> <pre style="white-space: pre-wrap;" class="svelte-nvy5wv"> </pre> <button>Close</button></div></div>'),m2=V('<li><div class="con-track svelte-nvy5wv"><a class="con-name svelte-nvy5wv"> </a> <span class="con-dur svelte-nvy5wv"> </span></div></li>'),p2=V('<!> <main class="svelte-nvy5wv"><div class="con-details svelte-nvy5wv"><img class="img-cover svelte-nvy5wv" alt="Release Cover"/> <div class="con-text svelte-nvy5wv"><h1 style="margin-left: 18px" class="svelte-nvy5wv"><!></h1> <ol></ol> <div class="con-socials svelte-nvy5wv"><a class="a-social svelte-nvy5wv" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-nvy5wv" target="_blank" rel="noopener noreferrer"><!></a> <a class="a-social svelte-nvy5wv" target="_blank" rel="noopener noreferrer"><!></a> <p class="lab-release svelte-nvy5wv"> </p></div> <a class="a-back svelte-nvy5wv" href="/ma/">←</a></div></div></main>',1);function Q(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-album")}),ie(()=>{document.documentElement.classList.remove("pg-album")});let n=F(t,"name",8,""),r=F(t,"tracklist",24,()=>[]),i=F(t,"cover",8,""),a=F(t,"links",24,()=>({})),s=F(t,"release",8,""),l=pt(!1),o=pt(""),c=pt("");re();var u=p2();he(ve=>{ee(D=>ne.title=`Monarch Atolla | ${D??""}`,[()=>(Fe(n()),N(()=>n().replace(/<br>/g,"")))])});var f=Ct(u);{var h=ve=>{var D=f2(),xe=C(D),ut=C(xe),Je=C(ut),dt=z(ut,2),Vt=C(dt),Pt=z(dt,2);ee(()=>{Ie(Je,w(o)),Ie(Vt,w(c))}),E("click",Pt,()=>{L(l,!1)}),T(ve,D)};z1(f,ve=>{w(l)&&ve(h)})}var d=z(f,2),m=C(d),p=C(m),y=z(p,2),k=C(y),b=C(k);It(b,n);var v=z(k,2);zt(v,5,r,Mt,(ve,D)=>{var xe=m2(),ut=C(xe),Je=C(ut),dt=C(Je),Vt=z(Je,2),Pt=C(Vt);ee(()=>{Ie(dt,(w(D),N(()=>w(D).name))),Ie(Pt,(w(D),N(()=>w(D).duration)))}),E("click",Je,()=>{L(o,w(D).name),L(c,w(D).lyrics),L(l,!0)}),T(ve,xe)});var I=z(v,2),j=C(I),ue=C(j);Bt(ue,{network:"youtube",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var Z=z(j,2),se=C(Z);Bt(se,{network:"spotify",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var P=z(Z,2),ht=C(P);Bt(ht,{network:"itunes",alt:"",bgColor:"#111111",fgColor:"#f1f1f1"});var Ze=z(P,2),Ge=C(Ze);ee(()=>{J(p,"src",i()),J(j,"href",(Fe(a()),N(()=>a().yt))),J(Z,"href",(Fe(a()),N(()=>a().sp))),J(P,"href",(Fe(a()),N(()=>a().it))),Ie(Ge,s())}),T(e,u),U()}const g2="(Instrumental)",v2=`Nothing there to drain,\r
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
to raise from the brink.`,w2=`Caught on a windowsill,\r
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
never gave it another chance.`,y2=`I used to walk\r
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
We've come a long way.`,b2=`Tell me where the wind blows hardest in the fall,\r
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
the face that started the end of it all.`;function C2(e){let t=[{name:"Heed the Glow",duration:"2:13",lyrics:g2},{name:"Cold Hollow",duration:"3:26",lyrics:v2},{name:"Wearing My Memories",duration:"3:08",lyrics:w2},{name:"Now Here We Are",duration:"2:27",lyrics:y2},{name:"Cliffside Dance",duration:"6:16",lyrics:b2}],n={yt:"https://www.youtube.com/watch?v=pDCGaQRyQvY&list=OLAK5uy_l2Oz7qInZp8Syi1MRw1MU-w8EeKLu_tDg",sp:"https://open.spotify.com/album/5w3KLleq7x2Ow2E6YyjIz6",it:"https://music.apple.com/us/album/an-amber-ballad-ep/1825362685"};Q(e,{name:"An Amber Ballad",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27386b4d9ee6b6858ea8ded0efc",get links(){return n},release:"2025.08.02"})}const _2=`Sunny canopy,\r
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
and not where was told.`,k2=`Twisting trees\r
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
be torn apart.`;function M2(e){let t=[{name:"Typewriter Hands",duration:"3:52",lyrics:_2},{name:"The Poetry Game",duration:"4:35",lyrics:k2}],n={yt:"https://www.youtube.com/watch?v=_qhyW86IwY8&list=OLAK5uy_l6KFvvznP5enJK7z_ZlNWTrdHUUeFi1P0",sp:"https://open.spotify.com/album/01H8fvUrWGOhNw2IsoLBfj",it:"https://music.apple.com/us/album/hope-need-not-be-real-single/1761677018"};Q(e,{name:"Hope Need Not Be Real",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273fa388bb39949324dce2b02dd",get links(){return n},release:"2024.08.11"})}const z2=`Pain\r
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
to wait for you to work my mind.`,m0=`Soft glow,\r
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
as its cast, to the wind.`,I2=`Old World,\r
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
at least mine don't think they do.`,S2=`Candlelight flames,\r
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
for our light.`;function E2(e){let t=[{name:"Does the Ghost Like Rainy Days?",duration:"4:22",lyrics:z2},{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:m0},{name:"Haunt Me Please",duration:"4:34",lyrics:I2},{name:"For Old Light",duration:"2:44",lyrics:S2}],n={yt:"https://www.youtube.com/watch?v=noiuDgTQK9U&list=OLAK5uy_mJF4cSajYgcmGpWnbZJxlwrehtamoBJrY",sp:"https://open.spotify.com/album/2VFWVR72dGFcHuzCeW5j0U",it:"https://music.apple.com/us/album/candlelight-fragments-ep/1712007436"};Q(e,{name:"Candlelight Fragments",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273350dd3901b9befd86ac5d773",get links(){return n},release:"2023.11.11"})}const p0=`I live in parallels,\r
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
that’ll sing their song.`,A2=`Well hey!\r
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
Let's seize this night.`,j2=`Masks are coming off,\r
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
I remember the fields.`,g0=`I seem to remember,\r
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
that glisten while I fall.`,O2="(Instrumental)";function x2(e){let t=[{name:"Parallels",duration:"4:02",lyrics:p0},{name:"Brother by Heart",duration:"4:44",lyrics:L2},{name:"Brother by Mind",duration:"3:34",lyrics:A2},{name:"End of the Beginning",duration:"4:29",lyrics:j2},{name:"Thought Rewind",duration:"2:11",lyrics:T2},{name:"Friends in the Interlude",duration:"3:39",lyrics:H2},{name:"Ey, Boy?",duration:"3:14",lyrics:V2},{name:"Brother by Time",duration:"3:13",lyrics:P2},{name:"When Silent Was Joy",duration:"4:02",lyrics:g0},{name:"We Talked of Peace",duration:"2:04",lyrics:O2}],n={yt:"https://www.youtube.com/watch?v=b_IhNVL1YWc&list=OLAK5uy_lQ8o_6Bo-FJVEa2kiK6dF6KqQBf3qWZzU",sp:"https://open.spotify.com/album/1O9xeZhBlIJCU3ZUbk4H1X",it:"https://music.apple.com/us/album/brothers-at-the-end-of-an-era/1694202095"};Q(e,{name:"Brothers at the <br> End of an Era",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2735a964f5c30352282e9d15fae",get links(){return n},release:"2023.05.13"})}const R2=`Mirror world where I reach for the clouds,\r
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
sing this song and your sight I will give.`;function F2(e){let t=[{name:"Golden Friend of Silver Water",duration:"4:14",lyrics:R2}],n={yt:"https://www.youtube.com/watch?v=zk0C53CZvKU",sp:"https://open.spotify.com/track/0tTIVp3AL7WfmTg2QsVoEC",it:"https://music.apple.com/us/album/golden-friend-of-silver-water-single/1723646587"};Q(e,{name:"Golden Friend of <br> Silver Water",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b20329f04ffcb47f20153bd",get links(){return n},release:"2024.02.02"})}const N2=`Winter sky,\r
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
`;function W2(e){let t=[{name:"Call Your Friends in Winter Night",duration:"5:27",lyrics:N2}],n={yt:"https://www.youtube.com/watch?v=qar1hU0VG0M",sp:"https://open.spotify.com/track/6AlIpLZ3D18Ps4mZBC7cY0",it:"https://music.apple.com/us/album/call-your-names-in-winter-night-single/1720664029"};Q(e,{name:"Call Your Names in <br> Winter Night",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27347cbb541de3a0ec08ef230db",get links(){return n},release:"2024.12.19"})}function D2(e){let t=[{name:"Soft Eyes Under Classroom Glow",duration:"4:16",lyrics:m0}],n={yt:"https://www.youtube.com/watch?v=0ccUTJZJBqA",sp:"https://open.spotify.com/track/3UtvtmHMU2YTfhdcqZErmH",it:"https://music.apple.com/us/album/soft-eyes-under-classroom-glow-single/1705710719"};Q(e,{name:"Soft Eyes Under <br> Classroom Glow",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273204cdc2c62bc42035f571ec2",get links(){return n},release:"2023.08.05"})}const B2=`\r
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
send the ash astray.`;function $2(e){let t=[{name:"Shimmering Flower",duration:"3:31",lyrics:B2}],n={yt:"https://www.youtube.com/watch?v=2KeM0xMxMPI",sp:"https://open.spotify.com/track/6I5FOVuSmSs0Al1Xq4ZLGT",it:"https://music.apple.com/us/album/shimmering-flower-single/1694204258"};Q(e,{name:"Shimmering Flower",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b273403009507b17a8954dcdfa2f",get links(){return n},release:"2023.07.29"})}const q2=`Listen, listen for the sun.\r
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
when I lay right here in your company.`;function U2(e){let t=[{name:"Fall in Simile",duration:"3:31",lyrics:q2}],n={yt:"https://www.youtube.com/watch?v=W59dYm4CPaI",sp:"https://open.spotify.com/track/6OW8skRtKVOP9TKUYoYXc3",it:"https://music.apple.com/us/album/fall-in-simile-single/1694203979"};Q(e,{name:"Fall in Simile",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27365a488ba80a331c37dba934e",get links(){return n},release:"2023.07.29"})}function Z2(e){let t=[{name:"Brother by Heart",duration:"4:44"}],n={yt:"https://www.youtube.com/watch?v=zefqQorn1po",sp:"https://open.spotify.com/track/6kd60HFkCMujDEEhnAGwMr",it:"https://music.apple.com/us/album/brother-by-heart-single/1693113027"};Q(e,{name:"Brother by Heart",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2731b6d55bb5a6e5a960e160e76",get links(){return n},release:"2023.07.01"})}function G2(e){let t=[{name:"When Silent Was Joy",duration:"4:02",lyrics:g0}],n={yt:"https://www.youtube.com/watch?v=6tOfbpyMhEc",sp:"https://open.spotify.com/track/1EfwWVlkS6iZFJkffmTlcQ",it:"https://music.apple.com/us/album/when-silent-was-joy-single/1690783575"};Q(e,{name:"When Silent Was Joy",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b2737c619a4a9245c8a0c5070be0",get links(){return n},release:"2023.06.17"})}function J2(e){let t=[{name:"Parallels",duration:"4:02",lyrics:p0}],n={yt:"https://www.youtube.com/watch?v=S73H33-I21o",sp:"https://open.spotify.com/track/02D9jPrNetIFelcDvrmDmH",it:"https://music.apple.com/us/album/parallels-single/1692112083"};Q(e,{name:"Parallels",get tracklist(){return t},cover:"https://i.scdn.co/image/ab67616d0000b27356a4d8aeeea07da3fc27e7d6",get links(){return n},release:"2023.07.10"})}var Y2=V('<main><h1 class="svelte-1eny9a3">B. McEwan</h1> <div class="con-names svelte-1eny9a3"><button class="btn-name svelte-1eny9a3" id="btn-1"><h1 class="svelte-1eny9a3">3D Artist</h1></button> <button class="btn-name svelte-1eny9a3" id="btn-2"><h1 class="svelte-1eny9a3">Writer</h1></button></div></main>');function K2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-mcewan")}),ie(()=>{document.documentElement.classList.remove("pg-mcewan")});function n(l){window.location.href=l}re();var r=Y2();he(l=>{ne.title="B. McEwan"});var i=z(C(r),2),a=C(i),s=z(a,2);E("click",a,()=>{n("/mcewan/3d/")}),E("click",s,()=>{n("/mcewan/writer/")}),T(e,r),U()}var Q2=V(`<main><div class="con-header svelte-1vlp3rw"><h1 class="svelte-1vlp3rw">B. McEwan</h1> <p class="svelte-1vlp3rw">Hard Surface Modeller</p></div> <p class="lbl-contact svelte-1vlp3rw">Email: elecarno@proton.me • Discord: @elecarno</p> <div class="con-artworks svelte-1vlp3rw"><button class="btn-art svelte-1vlp3rw" id="btn-1">Mechanical Dragonfly</button> <button class="btn-art svelte-1vlp3rw" id="btn-2">Mechanical Butterfly</button> <button class="btn-art svelte-1vlp3rw" id="btn-3">We're On Top</button> <button class="btn-art svelte-1vlp3rw" id="btn-4">Space Fighter</button> <button class="btn-art svelte-1vlp3rw" id="btn-5">Study Robot</button></div></main>`);function X2(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-mcewan-3d")}),ie(()=>{document.documentElement.classList.remove("pg-mcewan-3d")});function n(u){window.location.href=u}re();var r=Q2();he(u=>{ne.title="B. McEwan | 3D Artist"});var i=z(C(r),4),a=C(i),s=z(a,2),l=z(s,2),o=z(l,2),c=z(o,2);E("click",a,()=>{n("/mcewan/3d/dragonfly")}),E("click",s,()=>{n("/mcewan/3d/butterfly")}),E("click",l,()=>{n("/mcewan/3d/ontop")}),E("click",o,()=>{n("/mcewan/3d/fighter")}),E("click",c,()=>{n("/mcewan/3d/robot")}),T(e,r),U()}var er=V('<div class="con-image svelte-1xfcqlj"><img class="svelte-1xfcqlj"/> <p> </p></div>'),tr=V('<main><h1 class="svelte-1xfcqlj"> </h1> <p><!></p> <div class="con-images svelte-1xfcqlj"></div></main>');function ct(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-artwork")}),ie(()=>{document.documentElement.classList.remove("pg-artwork")});let n=F(t,"name",8,""),r=F(t,"description",8,""),i=F(t,"images",8);re();var a=tr();he(f=>{ee(h=>ne.title=`B. McEwan | ${h??""}`,[()=>(Fe(n()),N(()=>n().replace(/<br>/g,"")))])});var s=C(a),l=C(s),o=z(s,2),c=C(o);It(c,r);var u=z(o,2);zt(u,5,i,Mt,(f,h)=>{var d=er(),m=C(d),p=z(m,2),y=C(p);ee(()=>{J(m,"src",(w(h),N(()=>w(h).url))),J(m,"alt",(w(h),N(()=>w(h).title))),Ie(y,(w(h),N(()=>w(h).title)))}),T(f,d)}),ee(()=>Ie(l,n())),T(e,a),U()}function nr(e){let t=[{title:"Wide Shot",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/685/large/benjamin-mcewan-wide.jpg?1661684261"},{title:"Mechanism Closeup",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/673/large/benjamin-mcewan-closeup-6.jpg?1661684192"},{title:"Mechanism Overview",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/715/large/benjamin-mcewan-closeup-1.jpg?1661684311"},{title:"Head & Abdomen",url:"https://cdna.artstation.com/p/assets/images/images/053/205/618/large/benjamin-mcewan-closeup-2.jpg?1661684070"},{title:"Legs",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/629/large/benjamin-mcewan-closeup-3.jpg?1661684101"},{title:"Stand",url:"https://cdnb.artstation.com/p/assets/images/images/053/205/659/large/benjamin-mcewan-closeup-5.jpg?1661684162"}];ct(e,{name:"Mechanical Dragonfly",description:"Project to expand my techniques and improve upon the presentation and texturing of my models.",get images(){return t}})}function rr(e){let t=[{title:"Wide Shot",url:"https://cdna.artstation.com/p/assets/images/images/043/522/874/large/benjamin-mcewan-render-1.jpg?1637525570"},{title:"Wing Mechanism",url:"https://cdna.artstation.com/p/assets/images/images/043/522/896/large/benjamin-mcewan-render-3.jpg?1637525541"},{title:"Thorax Plating",url:"https://cdna.artstation.com/p/assets/images/images/043/522/866/large/benjamin-mcewan-render-7.jpg?1637525462"},{title:"Head",url:"https://cdna.artstation.com/p/assets/images/images/043/522/890/large/benjamin-mcewan-render-2.jpg?1637525508"},{title:"Wings",url:"https://cdna.artstation.com/p/assets/images/images/043/522/906/large/benjamin-mcewan-render-4.jpg?1637525572"},{title:"Legs",url:"https://cdnb.artstation.com/p/assets/images/images/043/522/921/large/benjamin-mcewan-render-5.jpg?1637525593"},{title:"Abdomen",url:"https://cdna.artstation.com/p/assets/images/images/043/522/936/large/benjamin-mcewan-render-6.jpg?1637525617"}];ct(e,{name:"Mechanical Butterfly",description:"An experiment in emulating the organic using the mechanical.",get images(){return t}})}function ar(e){let t=[{title:"TVs Scene",url:"https://cdna.artstation.com/p/assets/images/images/039/606/380/large/benjamin-mcewan-shot-7-test-2.jpg?1626378928"},{title:"Elecarno",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/319/large/benjamin-mcewan-carno-denoised.jpg?1626378805"},{title:"JayG",url:"https://cdna.artstation.com/p/assets/images/images/039/606/324/large/benjamin-mcewan-jg-denoise.jpg?1626378814"},{title:"Richjie",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/331/large/benjamin-mcewan-ritchjie-denoise.jpg?1626378833"},{title:"Yasai",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/391/large/benjamin-mcewan-yasai-denoise.jpg?1626378952"},{title:"Rush",url:"https://cdna.artstation.com/p/assets/images/images/039/606/340/large/benjamin-mcewan-rush-denoise.jpg?1626378846"},{title:"Full Table",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/387/large/benjamin-mcewan-table.jpg?1626378942"},{title:"Low Shot",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/345/large/benjamin-mcewan-shot-1-denoise.jpg?1626378862"},{title:"High Shot",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/351/large/benjamin-mcewan-shot-2-denoise.jpg?1626378875"},{title:"Window Shot",url:"https://cdna.artstation.com/p/assets/images/images/039/606/356/large/benjamin-mcewan-shot-3-denoise.jpg?1626378885"},{title:"Far Shot",url:"https://cdna.artstation.com/p/assets/images/images/039/606/362/large/benjamin-mcewan-shot-4-denoise.jpg?1626378895"},{title:"Cables",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/369/large/benjamin-mcewan-shot-5.jpg?1626378904"},{title:"Ground",url:"https://cdnb.artstation.com/p/assets/images/images/039/606/373/large/benjamin-mcewan-shot-6.jpg?1626378915"}];ct(e,{name:"We're on Top",description:"Introductory animated scenes for a collaborative <a href='https://www.youtube.com/watch?v=DsWrZJkiOME'>game montage</a>.",get images(){return t}})}function ir(e){let t=[{title:"Overview",url:"https://cdna.artstation.com/p/assets/images/images/032/061/602/large/benjamin-mcewan-render-a.jpg?1605367157"},{title:"Rear",url:"https://cdna.artstation.com/p/assets/images/images/032/061/606/large/benjamin-mcewan-render-b.jpg?1605366884"},{title:"Cockpit",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/613/large/benjamin-mcewan-render-c.jpg?1605366892"},{title:"Engines",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/619/large/benjamin-mcewan-render-d.jpg?1605366902"},{title:"Moon",url:"https://cdnb.artstation.com/p/assets/images/images/032/061/623/large/benjamin-mcewan-render-e.jpg?1605366910"}];ct(e,{name:"Space Fighter",description:"",get images(){return t}})}function sr(e){let t=[{title:"Overview",url:"https://cdna.artstation.com/p/assets/images/images/022/403/996/large/benjamin-mcewan-render-a.jpg?1575317573"},{title:"Front Module",url:"https://cdnb.artstation.com/p/assets/images/images/022/403/997/large/benjamin-mcewan-render-b.jpg?1575317577"},{title:"Leg",url:"https://cdna.artstation.com/p/assets/images/images/022/404/000/large/benjamin-mcewan-render-c.jpg?1575317580"},{title:"Attachment Module",url:"https://cdna.artstation.com/p/assets/images/images/022/404/030/large/benjamin-mcewan-render-d.jpg?1575317704"},{title:"Antenna/Radio",url:"https://cdna.artstation.com/p/assets/images/images/022/404/106/large/benjamin-mcewan-render-e.jpg?1575317900"},{title:"Power Module",url:"https://cdna.artstation.com/p/assets/images/images/022/404/150/large/benjamin-mcewan-render-f.jpg?1575318020"},{title:"Side View",url:"https://cdna.artstation.com/p/assets/images/images/022/404/194/large/benjamin-mcewan-render-g.jpg?1575318167"}];ct(e,{name:"Study Robot",description:"My result after finishing Creative Shrimp's hard surface modelling course. Details done using the kitbash set that came with the course.",get images(){return t}})}var or=V('<main><div class="con-header svelte-4am982"><h1 class="svelte-4am982">B. McEwan</h1> <p class="lbl-subtitle svelte-4am982">Fiction & Poetry</p> <p class="lbl-contact svelte-4am982">Email: elecarno@proton.me</p></div></main>');function lr(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-mcewan-writer")}),ie(()=>{document.documentElement.classList.remove("pg-mcewan-writer")}),re();var n=or();he(r=>{ne.title="B. McEwan | Writer"}),T(e,n),U()}var cr=V('<main><h1 class="svelte-1l9xtk">Arkady Orlunda</h1> <p>Page In Development</p></main>');function hr(e,t){q(t,!1),ae(()=>{document.documentElement.classList.add("pg-ao")}),ie(()=>{document.documentElement.classList.remove("pg-ao")}),re();var n=cr();he(r=>{ne.title="Arkady Orlunda"}),T(e,n),U()}var ur=V('<!> <footer class="svelte-8a284o">This page is a part of <a href="https://www.elecarno.com">elecarno.com</a> hosted on Github Pages.</footer>',1);function dr(e){const t=[{component:e2},{path:"/*",component:n2},{path:"/links",component:a2},{path:"elecarno",component:s2},{path:"ma/*",component:h2},{path:"ma/amber",component:C2},{path:"ma/hope",component:M2},{path:"ma/candle",component:E2},{path:"ma/brothers",component:x2},{path:"ma/golden",component:F2},{path:"ma/winter",component:W2},{path:"ma/classroom",component:D2},{path:"ma/shimmering",component:$2},{path:"ma/simile",component:U2},{path:"ma/heart",component:Z2},{path:"ma/silent",component:G2},{path:"ma/parallels",component:J2},{path:"mcewan",component:K2},{path:"mcewan/3d",component:X2},{path:"mcewan/3d/dragonfly",component:nr},{path:"mcewan/3d/butterfly",component:rr},{path:"mcewan/3d/ontop",component:ar},{path:"mcewan/3d/fighter",component:ir},{path:"mcewan/3d/robot",component:sr},{path:"mcewan/writer",component:lr},{path:"ao",component:hr}];var n=ur(),r=Ct(n);Q1(r,{get routes(){return t}}),T(e,n)}_1(dr,{target:document.getElementById("app")});
