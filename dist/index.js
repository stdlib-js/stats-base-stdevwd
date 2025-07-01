"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(g,i){
var w=require('@stdlib/stats-strided-variancewd/dist'),p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return p(w(e,r,t,a))}i.exports=x
});var v=s(function(h,n){
var y=require('@stdlib/stats-strided-variancewd/dist').ndarray,f=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,o){return f(y(e,r,t,a,o))}n.exports=l
});var c=s(function(j,q){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=u(),O=v();m(d,"ndarray",O);q.exports=d
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
