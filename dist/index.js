"use strict";var s=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var m=s(function(J,d){
var y=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(i,a,u,t,c,q){var n,v,o,e,r,f;if(n=a.data,v=a.accessors[0],i===1||u===0)return r=c.call(q,v(n,t),0,t,a),r===void 0||y(r)?NaN:r;for(e=t,f=0;f<i&&(o=c.call(q,v(n,e),f,e,n),!(o===o&&o!==void 0));f++)e+=u;if(f===i)return NaN;for(f+=1,f;f<i;f++)e+=u,r=c.call(q,v(n,e),f,e,n),!(r===void 0||y(r))&&(r<o||r===o&&j(r))&&(o=r);return o}d.exports=O
});var l=s(function(K,p){
var P=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-assert-is-negative-zero/dist'),w=require('@stdlib/array-base-arraylike2object/dist'),z=m();function C(i,a,u,t,c,q){var n,v,o,e,r;if(i<=0)return NaN;if(o=w(a),o.accessorProtocol)return z(i,o,u,t,c,q);if(i===1||u===0)return e=c.call(q,a[t],0,t,a),e===void 0?NaN:e;for(v=t,r=0;r<i&&(n=c.call(q,a[v],r,v,a),!(n===n&&n!==void 0));r++)v+=u;if(r===i)return NaN;for(r+=1,r;r<i;r++)v+=u,e=c.call(q,a[v],r,v,a),!(e===void 0||P(e))&&(e<n||e===n&&R(e))&&(n=e);return n}p.exports=C
});var N=s(function(L,B){
var D=require('@stdlib/strided-base-stride2offset/dist'),E=l();function F(i,a,u,t,c){return E(i,a,u,D(i,u),t,c)}B.exports=F
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=N(),H=l();G(Z,"ndarray",H);module.exports=Z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
