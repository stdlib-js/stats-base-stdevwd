// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).stdevwd=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var f=t,c=function(e,r,t){var f,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),d&&i&&i.call(e,r,t.set),e},_=r()?f:c;var d=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(e,r,t,n){var o,a,i,u,l,f,c;if(f=e-r,e<=0||f<=0)return NaN;if(1===e||0===n)return 0;for(u=n<0?(1-e)*n:0,i=0,a=0,c=0;c<e;c++)i+=(o=(l=t[u])-a)*(l-(a+=o/(c+1))),u+=n;return i/f};d(p,"ndarray",(function(e,r,t,n,o){var a,i,u,l,f,c,_;if(c=e-r,e<=0||c<=0)return NaN;if(1===e||0===n)return 0;for(l=o,u=0,i=0,_=0;_<e;_++)u+=(a=(f=t[l])-i)*(f-(i+=a/(_+1))),l+=n;return u/c}));var y=p,s=Math.sqrt,b=y,v=s;var j=y.ndarray,m=s;var g=function(e,r,t,n){return v(b(e,r,t,n))};return d(g,"ndarray",(function(e,r,t,n,o){return m(j(e,r,t,n,o))})),g}));
//# sourceMappingURL=bundle.js.map
