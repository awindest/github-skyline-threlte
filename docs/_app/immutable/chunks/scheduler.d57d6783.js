function E(){}const V=t=>t;function D(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function X(){return Object.create(null)}function B(t){t.forEach(P)}function L(t){return typeof t=="function"}function Y(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const i of n)i(void 0);return E}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function $(t,n,e){t.$$.on_destroy.push(M(n,e))}function tt(t,n,e,i){if(t){const r=N(t,n,e,i);return t[0](r)}}function N(t,n,e,i){return t[1]&&i?D(e.ctx.slice(),t[1](i(n))):e.ctx}function nt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function et(t,n,e,i,r,o){if(r){const c=N(n,e,i,o);t.p(c,r)}}function it(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function rt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ct(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function st(t,n,e){return t.set(e),n}function lt(t){return t&&L(t.destroy)?t.destroy:E}function ot(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let p=!1;function ut(){p=!0}function at(){p=!1}function O(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:O(1,r,S=>n[e[S]].claim_order,u))-1;i[s]=e[a]+1;const w=a+1;e[w]=s,r=Math.max(w,r)}const o=[],c=[];let l=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);l>=s;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function q(t,n){t.appendChild(n)}function F(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function ft(t){const n=A("style");return n.textContent="/* empty */",H(F(t),n),n.sheet}function H(t,n){return q(t.head||t,n),n.sheet}function I(t,n){if(p){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){p&&!e?I(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function A(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function mt(){return v(" ")}function pt(){return v("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function gt(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,r=!1){R(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,n,e,i){return C(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function vt(t,n,e){return z(t,n,e,A)}function U(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function wt(t){return U(t," ")}function kt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Et(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList.toggle(n,!!e)}function W(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function At(t,n){return new t(n)}let m;function y(t){m=t}function d(){if(!m)throw new Error("Function called outside component initialization");return m}function Ct(t){d().$$.on_mount.push(t)}function jt(t){d().$$.after_update.push(t)}function St(t){d().$$.on_destroy.push(t)}function Dt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=W(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Pt(t,n){return d().$$.context.set(t,n),n}function Bt(t){return d().$$.context.get(t)}const h=[],k=[];let _=[];const g=[],j=Promise.resolve();let x=!1;function G(){x||(x=!0,j.then(K))}function Lt(){return G(),j}function J(t){_.push(t)}function Mt(t){g.push(t)}const b=new Set;let f=0;function K(){if(f!==0)return;const t=m;do{try{for(;f<h.length;){const n=h[f];f++,y(n),Q(n.$$)}}catch(n){throw h.length=0,f=0,n}for(y(null),h.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(h.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function Q(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}function Ot(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{Ot as $,St as A,Pt as B,Bt as C,lt as D,d as E,ct as F,D as G,rt as H,V as I,Mt as J,Dt as K,st as L,ht as M,ot as N,gt as O,J as P,Nt as Q,yt as R,M as S,B as T,L as U,F as V,ft as W,W as X,X as Y,K as Z,Z as _,mt as a,m as a0,y as a1,P as a2,h as a3,G as a4,ut as a5,at as a6,jt as b,wt as c,dt as d,pt as e,A as f,vt as g,xt as h,_t as i,bt as j,Et as k,v as l,U as m,kt as n,Ct as o,k as p,At as q,tt as r,Y as s,Lt as t,et as u,it as v,nt as w,I as x,E as y,$ as z};