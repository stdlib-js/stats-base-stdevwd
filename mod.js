// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),_="get"in l,p="set"in l,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r,e,t,n){var o,a,u,i,l,c,f;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(i=n<0?(1-r)*n:0,u=0,a=0,f=0;f<r;f++)u+=(o=(l=t[i])-a)*(l-(a+=o/(f+1))),i+=n;return u/c}c(f,"ndarray",(function(r,e,t,n,o){var a,u,i,l,c,f,_;if(f=r-e,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(l=o,i=0,u=0,_=0;_<r;_++)i+=(a=(c=t[l])-u)*(c-(u+=a/(_+1))),l+=n;return i/f}));const{ndarray:_}=f;var p=Math.sqrt;function y(r,e,t,n){return p(f(r,e,t,n))}c(y,"ndarray",(function(r,e,t,n,o){return p(_(r,e,t,n,o))}));const{ndarray:b}=y;export{y as default,b as ndarray};
//# sourceMappingURL=mod.js.map
