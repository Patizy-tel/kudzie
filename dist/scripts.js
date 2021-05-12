/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
    'use strict';

    (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement={HTMLElement:function HTMLElement(){return Reflect.construct(a,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());

;/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var w;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(){da=function(){};ca.Symbol||(ca.Symbol=fa)}
function ha(a,b){this.a=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}ha.prototype.toString=function(){return this.a};var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function ia(){da();var a=ca.Symbol.iterator;a||(a=ca.Symbol.iterator=ca.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(aa(this))}});ia=function(){}}function la(a){ia();a={next:a};a[ca.Symbol.iterator]=function(){return this};return a}function ma(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function na(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={Pa:!0},ra={};try{ra.__proto__=qa;pa=ra.Pa;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;function wa(){this.l=!1;this.b=null;this.Ea=void 0;this.a=1;this.Y=0;this.c=null}
function ya(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}wa.prototype.J=function(a){this.Ea=a};function za(a,b){a.c={Sa:b,Wa:!0};a.a=a.Y}wa.prototype.return=function(a){this.c={return:a};this.a=this.Y};function Aa(a,b){a.a=3;return{value:b}}function Ba(a){this.a=new wa;this.b=a}function Ca(a,b){ya(a.a);var c=a.a.b;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a.return);a.a.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.l=!1,e;var f=e.value}catch(g){return a.a.b=null,za(a.a,g),Ea(a)}a.a.b=null;d.call(a.a,f);return Ea(a)}function Ea(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.l=!1,{value:b.value,done:!1}}catch(c){a.a.Ea=void 0,za(a.a,c)}a.a.l=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Wa)throw b.Sa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){ya(a.a);a.a.b?b=Da(a,a.a.b.next,b,a.a.J):(a.a.J(b),b=Ea(a));return b};this.throw=function(b){ya(a.a);a.a.b?b=Da(a,a.a.b["throw"],b,a.a.J):(za(a.a,b),b=Ea(a));return b};this.return=function(b){return Ca(a,b)};ia();this[Symbol.iterator]=function(){return this}}function Ga(a,b){b=new Fa(new Ba(b));sa&&sa(b,a.prototype);return b}Array.from||(Array.from=function(a){return[].slice.call(a)});
Object.assign||(Object.assign=function(a){for(var b=[].slice.call(arguments,1),c=0,d;c<b.length;c++)if(d=b[c])for(var e=a,f=Object.keys(d),g=0;g<f.length;g++){var h=f[g];e[h]=d[h]}return a});var Ha=document.createEvent("Event");Ha.initEvent("foo",!0,!0);Ha.preventDefault();if(!Ha.defaultPrevented){var Ia=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(Ia.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var Ja=/Trident/.test(navigator.userAgent);
if(!window.Event||Ja&&"function"!==typeof window.Event){var Ka=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(Ka){for(var La in Ka)window.Event[La]=Ka[La];window.Event.prototype=Ka.prototype}}
if(!window.CustomEvent||Ja&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;
if(!window.MouseEvent||Ja&&"function"!==typeof window.MouseEvent){var Ma=window.MouseEvent;window.MouseEvent=function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(Ma)for(var Na in Ma)window.MouseEvent[Na]=Ma[Na];window.MouseEvent.prototype=Ma.prototype};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){function a(){}function b(p,r){if(!p.childNodes.length)return[];switch(p.nodeType){case Node.DOCUMENT_NODE:return F.call(p,r);case Node.DOCUMENT_FRAGMENT_NODE:return E.call(p,r);default:return t.call(p,r)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function p(z,R){if(z instanceof DocumentFragment)for(var fb;fb=z.firstChild;)B.call(this,fb,R);else B.call(this,
z,R);return z}e=!0;var r=Node.prototype.cloneNode;Node.prototype.cloneNode=function(z){z=r.call(this,z);this instanceof DocumentFragment&&(z.__proto__=DocumentFragment.prototype);return z};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var B=Node.prototype.insertBefore;Node.prototype.insertBefore=p;var K=Node.prototype.appendChild;Node.prototype.appendChild=function(z){z instanceof DocumentFragment?p.call(this,z,null):K.call(this,z);return z};var Z=Node.prototype.removeChild,ja=Node.prototype.replaceChild;Node.prototype.replaceChild=function(z,R){z instanceof DocumentFragment?(p.call(this,z,R),Z.call(this,R)):ja.call(this,z,R);return R};Document.prototype.createDocumentFragment=
function(){var z=this.createElement("df");z.__proto__=DocumentFragment.prototype;return z};var ta=Document.prototype.importNode;Document.prototype.importNode=function(z,R){R=ta.call(this,z,R||!1);z instanceof DocumentFragment&&(R.__proto__=DocumentFragment.prototype);return R}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,m=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
H=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(p){this.innerHTML=p}},C=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},t=Element.prototype.querySelectorAll,F=Document.prototype.querySelectorAll,E=DocumentFragment.prototype.querySelectorAll,M=function(){if(!c){var p=document.createElement("template"),r=document.createElement("template");r.content.appendChild(document.createElement("div"));
p.content.appendChild(r);p=p.cloneNode(!0);return 0===p.content.childNodes.length||0===p.content.firstChild.content.childNodes.length||d}}();if(c){var y=document.implementation.createHTMLDocument("template"),W=!0,v=document.createElement("style");v.textContent="template{display:none;}";var ua=document.head;ua.insertBefore(v,ua.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var ea=!document.createElement("div").hasOwnProperty("innerHTML");a.U=function(p){if(!p.content&&p.namespaceURI===
document.documentElement.namespaceURI){p.content=y.createDocumentFragment();for(var r;r=p.firstChild;)l.call(p.content,r);if(ea)p.__proto__=a.prototype;else if(p.cloneNode=function(B){return a.b(this,B)},W)try{n(p),I(p)}catch(B){W=!1}a.a(p.content)}};var va={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},n=function(p){Object.defineProperty(p,"innerHTML",{get:function(){return xa(this)},set:function(r){var B=va[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r)||
["",""])[1].toLowerCase()];if(B)for(var K=0;K<B.length;K++)r="<"+B[K]+">"+r+"</"+B[K]+">";y.body.innerHTML=r;for(a.a(y);this.content.firstChild;)k.call(this.content,this.content.firstChild);r=y.body;if(B)for(K=0;K<B.length;K++)r=r.lastChild;for(;r.firstChild;)l.call(this.content,r.firstChild)},configurable:!0})},I=function(p){Object.defineProperty(p,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(r){if(this.parentNode){y.body.innerHTML=r;for(r=this.ownerDocument.createDocumentFragment();y.body.firstChild;)l.call(r,
y.body.firstChild);m.call(this.parentNode,r,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};n(a.prototype);I(a.prototype);a.a=function(p){p=b(p,"template");for(var r=0,B=p.length,K;r<B&&(K=p[r]);r++)a.U(K)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var p=g.apply(this,arguments);"template"===p.localName&&a.U(p);return p};DOMParser.prototype.parseFromString=
function(){var p=q.apply(this,arguments);a.a(p);return p};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return xa(this)},set:function(p){H.set.call(this,p);a.a(this)},configurable:!0,enumerable:!0});var ka=/[&\u00A0"]/g,bc=/[&\u00A0<>]/g,gb=function(p){switch(p){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};v=function(p){for(var r={},B=0;B<p.length;B++)r[p[B]]=!0;return r};var Sa=v("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
hb=v("style script xmp iframe noembed noframes plaintext noscript".split(" ")),xa=function(p,r){"template"===p.localName&&(p=p.content);for(var B="",K=r?r(p):C.get.call(p),Z=0,ja=K.length,ta;Z<ja&&(ta=K[Z]);Z++){a:{var z=ta;var R=p;var fb=r;switch(z.nodeType){case Node.ELEMENT_NODE:for(var cc=z.localName,ib="<"+cc,rg=z.attributes,Bd=0;R=rg[Bd];Bd++)ib+=" "+R.name+'="'+R.value.replace(ka,gb)+'"';ib+=">";z=Sa[cc]?ib:ib+xa(z,fb)+"</"+cc+">";break a;case Node.TEXT_NODE:z=z.data;z=R&&hb[R.localName]?z:
z.replace(bc,gb);break a;case Node.COMMENT_NODE:z="\x3c!--"+z.data+"--\x3e";break a;default:throw window.console.error(z),Error("not implemented");}}B+=z}return B}}if(c||M){a.b=function(p,r){var B=f.call(p,!1);this.U&&this.U(B);r&&(l.call(B.content,f.call(p.content,!0)),J(B.content,p.content));return B};var J=function(p,r){if(r.querySelectorAll&&(r=b(r,"template"),0!==r.length)){p=b(p,"template");for(var B=0,K=p.length,Z,ja;B<K;B++)ja=r[B],Z=p[B],a&&a.U&&a.U(ja),m.call(Z.parentNode,u.call(ja,!0),
Z)}},u=Node.prototype.cloneNode=function(p){if(!e&&d&&this instanceof DocumentFragment)if(p)var r=G.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?r=a.b(this,p):r=f.call(this,p);p&&J(r,this);return r},G=Document.prototype.importNode=function(p,r){r=r||!1;if("template"===p.localName)return a.b(p,r);var B=h.call(this,p,r);if(r){J(B,p);
p=b(B,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var K,Z=0;Z<p.length;Z++){K=p[Z];r=g.call(document,"script");r.textContent=K.textContent;for(var ja=K.attributes,ta=0,z;ta<ja.length;ta++)z=ja[ta],r.setAttribute(z.name,z.value);m.call(K.parentNode,r,K)}}return B}}c&&(window.HTMLTemplateElement=a)})();var Oa=setTimeout;function Pa(){}function Qa(a,b){return function(){a.apply(b,arguments)}}function x(a){if(!(this instanceof x))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.za=!1;this.C=void 0;this.W=[];Ra(a,this)}
function Ta(a,b){for(;3===a.I;)a=a.C;0===a.I?a.W.push(b):(a.za=!0,Ua(function(){var c=1===a.I?b.Ya:b.Za;if(null===c)(1===a.I?Va:Wa)(b.va,a.C);else{try{var d=c(a.C)}catch(e){Wa(b.va,e);return}Va(b.va,d)}}))}function Va(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof x){a.I=3;a.C=b;Xa(a);return}if("function"===typeof c){Ra(Qa(c,b),a);return}}a.I=1;a.C=b;Xa(a)}catch(d){Wa(a,d)}}
function Wa(a,b){a.I=2;a.C=b;Xa(a)}function Xa(a){2===a.I&&0===a.W.length&&Ua(function(){a.za||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.C)});for(var b=0,c=a.W.length;b<c;b++)Ta(a,a.W[b]);a.W=null}function Ya(a,b,c){this.Ya="function"===typeof a?a:null;this.Za="function"===typeof b?b:null;this.va=c}function Ra(a,b){var c=!1;try{a(function(d){c||(c=!0,Va(b,d))},function(d){c||(c=!0,Wa(b,d))})}catch(d){c||(c=!0,Wa(b,d))}}
x.prototype["catch"]=function(a){return this.then(null,a)};x.prototype.then=function(a,b){var c=new this.constructor(Pa);Ta(this,new Ya(a,b,c));return c};x.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Za(a){return new x(function(b,c){function d(h,k){try{if(k&&("object"===typeof k||"function"===typeof k)){var l=k.then;if("function"===typeof l){l.call(k,function(m){d(h,m)},c);return}}e[h]=k;0===--f&&b(e)}catch(m){c(m)}}if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function $a(a){return a&&"object"===typeof a&&a.constructor===x?a:new x(function(b){b(a)})}function ab(a){return new x(function(b,c){c(a)})}function bb(a){return new x(function(b,c){if(!a||"undefined"===typeof a.length)return c(new TypeError("Promise.race accepts an array"));for(var d=0,e=a.length;d<e;d++)$a(a[d]).then(b,c)})}var Ua="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Oa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=x;x.prototype.then=x.prototype.then;x.all=Za;x.race=bb;x.resolve=$a;x.reject=ab;var cb=document.createTextNode(""),db=[];(new MutationObserver(function(){for(var a=db.length,b=0;b<a;b++)db[b]();db.splice(0,a)})).observe(cb,{characterData:!0});Ua=function(a){db.push(a);cb.textContent=0<cb.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,m=a.freeze||a,q=a.defineProperty,H=a.defineProperties,C=h(a,"getOwnPropertyNames"),t=a.prototype,F=t.hasOwnProperty,E=t.propertyIsEnumerable,M=t.toString,y=function(J,u,G){F.call(J,f)||q(J,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});J[f]["@@"+u]=G},W=function(J,u){var G=k(J);g(u).forEach(function(p){va.call(u,
p)&&Sa(G,p,u[p])});return G},v=function(){},ua=function(J){return J!=f&&!F.call(ka,J)},ea=function(J){return J!=f&&F.call(ka,J)},va=function(J){var u=""+J;return ea(u)?F.call(this,u)&&this[f]["@@"+u]:E.call(this,J)},n=function(J){q(t,J,{enumerable:!1,configurable:!0,get:v,set:function(u){xa(this,J,{enumerable:!1,configurable:!0,writable:!0,value:u});y(this,J,!0)}});return m(ka[J]=q(a(J),"constructor",bc))},I=function G(u){if(this instanceof G)throw new TypeError("Symbol is not a constructor");return n("__\u0001symbol:".concat(u||
"",e,++d))},ka=k(null),bc={value:I},gb=function(u){return ka[u]},Sa=function(u,G,p){var r=""+G;if(ea(r)){G=xa;if(p.enumerable){var B=k(p);B.enumerable=!1}else B=p;G(u,r,B);y(u,r,!!p.enumerable)}else q(u,G,p);return u},hb=function(u){return g(u).filter(ea).map(gb)};C.value=Sa;q(a,"defineProperty",C);C.value=hb;q(a,b,C);C.value=function(u){return g(u).filter(ua)};q(a,"getOwnPropertyNames",C);C.value=function(u,G){var p=hb(G);p.length?l(G).concat(p).forEach(function(r){va.call(G,r)&&Sa(u,r,G[r])}):H(u,
G);return u};q(a,"defineProperties",C);C.value=va;q(t,"propertyIsEnumerable",C);C.value=I;q(c,"Symbol",C);C.value=function(u){u="__\u0001symbol:".concat("__\u0001symbol:",u,e);return u in t?ka[u]:n(u)};q(I,"for",C);C.value=function(u){if(ua(u))throw new TypeError(u+" is not a symbol");if(F.call(ka,u)&&(u=u.slice(10),"__\u0001symbol:"===u.slice(0,10)&&(u=u.slice(10),u!==e)))return u=u.slice(0,u.length-e.length),0<u.length?u:void 0};q(I,"keyFor",C);C.value=function(u,G){var p=h(u,G);p&&ea(G)&&(p.enumerable=
va.call(u,G));return p};q(a,"getOwnPropertyDescriptor",C);C.value=function(u,G){return 1===arguments.length||"undefined"===typeof G?k(u):W(u,G)};q(a,"create",C);C.value=function(){var u=M.call(this);return"[object String]"===u&&ea(this)?"[object Symbol]":u};q(t,"toString",C);try{if(!0===k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!0})["__\u0001symbol:"]}}))["__\u0001symbol:"])var xa=q;else throw"IE11";}catch(u){xa=function(G,p,r){var B=h(t,p);delete t[p];q(G,p,
r);q(t,p,B)}}}})(Object,"getOwnPropertySymbols");
(function(a,b){var c=a.defineProperty,d=a.prototype,e=d.toString,f;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(g){if(!(g in b))switch(c(b,g,{value:b(g)}),g){case "toStringTag":f=a.getOwnPropertyDescriptor(d,"toString"),f.value=function(){var h=e.call(this),k=null!=this?this[b.toStringTag]:this;return null==k?h:"[object "+k+"]"},c(d,"toString",f)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var e=0,f=this,g={next:function(){var h=f.length<=e;return h?{done:h}:{done:h,value:f[e++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var e=String.fromCodePoint,f=this,g=0,h=f.length,k={next:function(){var l=h<=g,m=l?"":e(f.codePointAt(g));g+=m.length;return l?{done:l}:{done:l,value:m}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var eb=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":eb.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};da();ia();
String.prototype[Symbol.iterator]&&String.prototype.codePointAt||(da(),ia(),String.prototype[Symbol.iterator]=function b(){var c,d=this;return Ga(b,function(e){1==e.a&&(c=0);if(3!=e.a)return c<d.length?e=Aa(e,d[c]):(e.a=0,e=void 0),e;c++;e.a=2})});da();ia();
Set.prototype[Symbol.iterator]||(da(),ia(),Set.prototype[Symbol.iterator]=function b(){var c,d=this,e;return Ga(b,function(f){1==f.a&&(c=[],d.forEach(function(g){c.push(g)}),e=0);if(3!=f.a)return e<c.length?f=Aa(f,c[e]):(f.a=0,f=void 0),f;e++;f.a=2})});da();ia();
Map.prototype[Symbol.iterator]||(da(),ia(),Map.prototype[Symbol.iterator]=function b(){var c,d=this,e;return Ga(b,function(f){1==f.a&&(c=[],d.forEach(function(g,h){c.push([h,g])}),e=0);if(3!=f.a)return e<c.length?f=Aa(f,c[e]):(f.a=0,f=void 0),f;e++;f.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var jb=window;jb.WebComponents=jb.WebComponents||{flags:{}};var kb=document.querySelector('script[src*="webcomponents-bundle"]'),lb=/wc-(.+)/,mb={};if(!mb.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(lb))&&(mb[b[1]]=a[1]||!0)});if(kb)for(var nb=0,ob=void 0;ob=kb.attributes[nb];nb++)"src"!==ob.name&&(mb[ob.name]=ob.value||!0);var pb={};mb.log&&mb.log.split&&mb.log.split(",").forEach(function(a){pb[a]=!0});mb.log=pb}
jb.WebComponents.flags=mb;var qb=mb.shadydom;if(qb){jb.ShadyDOM=jb.ShadyDOM||{};jb.ShadyDOM.force=qb;var rb=mb.noPatch;jb.ShadyDOM.noPatch="true"===rb?!0:rb}var sb=mb.register||mb.ce;sb&&window.customElements&&(jb.customElements.forcePolyfill=sb);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function tb(){}tb.prototype.toJSON=function(){return{}};function A(a){a.__shady||(a.__shady=new tb);return a.__shady}function D(a){return a&&a.__shady};var L=window.ShadyDOM||{};L.Ua=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ub=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");L.B=!!(ub&&ub.configurable&&ub.get);L.sa=L.force||!L.Ua;L.D=L.noPatch||!1;L.aa=L.preferPerformance;L.ua="on-demand"===L.D;L.Ia=navigator.userAgent.match("Trident");function vb(a){return(a=D(a))&&void 0!==a.firstChild}function N(a){return a instanceof ShadowRoot}function wb(a){return(a=(a=D(a))&&a.root)&&xb(a)}
var yb=Element.prototype,zb=yb.matches||yb.matchesSelector||yb.mozMatchesSelector||yb.msMatchesSelector||yb.oMatchesSelector||yb.webkitMatchesSelector,Ab=document.createTextNode(""),Bb=0,Cb=[];(new MutationObserver(function(){for(;Cb.length;)try{Cb.shift()()}catch(a){throw Ab.textContent=Bb++,a;}})).observe(Ab,{characterData:!0});function Db(a){Cb.push(a);Ab.textContent=Bb++}
var Eb=document.contains?function(a,b){return a.__shady_native_contains(b)}:function(a,b){return a===b||a.documentElement&&a.documentElement.__shady_native_contains(b)};function Fb(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function Gb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(e){return a[e]};a.namedItem=function(e){if("length"!==e&&isNaN(e)&&a[e])return a[e];for(var f=ma(a),g=f.next();!g.done;g=f.next())if(g=g.value,(g.getAttribute("id")||g.getAttribute("name"))==e)return g;return null};return a}function Hb(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function Ib(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function Jb(a,b,c){c.configurable=!0;if(c.value)a[b]=c.value;else try{Object.defineProperty(a,b,c)}catch(d){}}function O(a,b,c,d){c=void 0===c?"":c;for(var e in b)d&&0<=d.indexOf(e)||Jb(a,c+e,b[e])}function Kb(a,b){for(var c in b)c in a&&Jb(a,c,b[c])}function P(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b}
function Lb(a,b){for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length;d++)e=c[d],a[e]=b[e]};var Mb=[],Nb;function Ob(a){Nb||(Nb=!0,Db(Pb));Mb.push(a)}function Pb(){Nb=!1;for(var a=!!Mb.length;Mb.length;)Mb.shift()();return a}Pb.list=Mb;function Qb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ja=new Set}function Rb(a){a.a||(a.a=!0,Db(function(){a.flush()}))}Qb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ja.forEach(function(b){b(a)})}};Qb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Sb(a,b){var c=A(a);c.Z||(c.Z=new Qb);c.Z.ja.add(b);var d=c.Z;return{Ma:b,S:d,Na:a,takeRecords:function(){return d.takeRecords()}}}function Tb(a){var b=a&&a.S;b&&(b.ja.delete(a.Ma),b.ja.size||(A(a.Na).Z=null))}
function Ub(a,b){var c=b.getRootNode();return a.map(function(d){var e=c===d.target.getRootNode();if(e&&d.addedNodes){if(e=[].slice.call(d.addedNodes).filter(function(f){return c===f.getRootNode()}),e.length)return d=Object.create(d),Object.defineProperty(d,"addedNodes",{value:e,configurable:!0}),d}else if(e)return d}).filter(function(d){return d})};var Vb=/[&\u00A0"]/g,Wb=/[&\u00A0<>]/g;function Xb(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Yb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Zb=Yb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),$b=Yb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function ac(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var m="<"+k,q=h.attributes,H=0,C;C=q[H];H++)m+=" "+C.name+'="'+C.value.replace(Vb,Xb)+'"';m+=">";h=Zb[k]?m:m+ac(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&$b[k.localName]?h:h.replace(Wb,Xb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var dc=L.B,ec={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},fc={};function gc(a){fc[a]=function(b){return b["__shady_native_"+a]}}function hc(a,b){O(a,b,"__shady_native_");for(var c in b)gc(c)}function Q(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?ec[d]||(ec[d]=e.value):gc(d))}}
var ic=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),jc=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),kc=document.implementation.createHTMLDocument("inert");function lc(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var mc=["firstElementChild","lastElementChild","children","childElementCount"],nc=["querySelector","querySelectorAll"];
function oc(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?Q(window.EventTarget.prototype,a):(Q(Node.prototype,a),Q(Window.prototype,a));dc?Q(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):hc(Node.prototype,{parentNode:{get:function(){ic.currentNode=this;return ic.parentNode()}},firstChild:{get:function(){ic.currentNode=this;return ic.firstChild()}},lastChild:{get:function(){ic.currentNode=
this;return ic.lastChild()}},previousSibling:{get:function(){ic.currentNode=this;return ic.previousSibling()}},nextSibling:{get:function(){ic.currentNode=this;return ic.nextSibling()}},childNodes:{get:function(){var b=[];ic.currentNode=this;for(var c=ic.firstChild();c;)b.push(c),c=ic.nextSibling();return b}},parentElement:{get:function(){jc.currentNode=this;return jc.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var b=
document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),c="",d;d=b.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(b){if("undefined"===typeof b||null===b)b="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:lc(this);(0<b.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(b),void 0);break;default:this.nodeValue=b}}}});Q(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
Q(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){jc.currentNode=this;return jc.firstChild()}},lastElementChild:{get:function(){jc.currentNode=this;return jc.lastChild()}},children:{get:function(){var b=[];jc.currentNode=this;for(var c=jc.firstChild();c;)b.push(c),c=jc.nextSibling();return Gb(b)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};dc?(Q(Element.prototype,mc),Q(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),Q(HTMLElement.prototype,["children","innerHTML","className"])):(hc(Element.prototype,a),hc(Element.prototype,{previousElementSibling:{get:function(){jc.currentNode=this;return jc.previousSibling()}},nextElementSibling:{get:function(){jc.currentNode=this;return jc.nextSibling()}},innerHTML:{get:function(){return ac(this,Hb)},set:function(b){var c="template"===this.localName?this.content:this;lc(c);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==kc.namespaceURI?
kc.createElementNS(this.namespaceURI,d):kc.createElement(d);d.innerHTML=b;for(b="template"===this.localName?d.content:d;d=b.__shady_native_firstChild;)c.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(b){this.setAttribute("class",b)}}}));Q(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));Q(Element.prototype,nc);Q(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
Q(window.HTMLTemplateElement.prototype,["innerHTML"]);dc?Q(DocumentFragment.prototype,mc):hc(DocumentFragment.prototype,a);Q(DocumentFragment.prototype,nc);dc?(Q(Document.prototype,mc),Q(Document.prototype,["activeElement"])):hc(Document.prototype,a);Q(Document.prototype,["importNode","getElementById"]);Q(Document.prototype,nc)};var pc=P({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),qc=P({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),rc=P({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
set className(a){return this.__shady_className=a}});function sc(a){for(var b in a){var c=a[b];c&&(c.enumerable=!1)}}sc(pc);sc(qc);sc(rc);var tc=L.B||!0===L.D,uc=tc?function(){}:function(a){var b=A(a);b.Ka||(b.Ka=!0,Kb(a,rc))},vc=tc?function(){}:function(a){var b=A(a);b.Ja||(b.Ja=!0,Kb(a,pc),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!L.D||Kb(a,qc))};var wc="__eventWrappers"+Date.now(),xc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),yc=function(){function a(){}var b=!1,c={get capture(){b=!0;return!1}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function zc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O}else b=!!a,d=c=!1;return{Ga:e,capture:b,once:c,passive:d,Fa:yc?a:b}}
var Ac={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},Bc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function Cc(a){return a instanceof Node?a.__shady_getRootNode():a}
function Dc(a,b){var c=[],d=a;for(a=Cc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function Ec(a){a.__composedPath||(a.__composedPath=Dc(a.target,!0));return a.__composedPath}function Fc(a,b){if(!N)return a;a=Dc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=Cc(d),f!==e&&(g=a.indexOf(f),e=f),!N(f)||-1<g)return d}
function Gc(a){function b(c,d){c=new a(c,d);c.__composed=d&&!!d.composed;return c}b.__proto__=a;b.prototype=a.prototype;return b}var Hc={focus:!0,blur:!0};function Ic(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function Jc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!Ic(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
function Kc(a){var b=a.composedPath(),c=b.map(function(k){return Fc(k,b)}),d=a.bubbles;Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:function(){return g}});var e=Event.CAPTURING_PHASE;Object.defineProperty(a,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return e}});for(var f=b.length-1;0<=f;f--){var g=b[f];e=g===c[f]?Event.AT_TARGET:Event.CAPTURING_PHASE;Jc(a,g,"capture");if(a.ma)return}for(f=0;f<b.length;f++){g=b[f];var h=g===c[f];if(h||d)if(e=h?Event.AT_TARGET:
Event.BUBBLING_PHASE,Jc(a,g,"bubble"),a.ma)return}e=0;g=null}function Lc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,m=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===m&&f===q)return g}return-1}function Mc(a){Pb();return!L.aa&&this instanceof Node&&!Eb(document,this)?(a.__target||Nc(a,this),Kc(a)):this.__shady_native_dispatchEvent(a)}
function Oc(a,b,c){var d=zc(c),e=d.capture,f=d.once,g=d.passive,h=d.Ga;d=d.Fa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(Bc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[wc]){if(-1<Lc(h,l,a,e,f,g))return}else b[wc]=[];h=function(m){f&&this.__shady_removeEventListener(a,b,c);m.__target||Nc(m);if(l!==this){var q=Object.getOwnPropertyDescriptor(m,"currentTarget");Object.defineProperty(m,"currentTarget",
{get:function(){return l},configurable:!0});var H=Object.getOwnPropertyDescriptor(m,"eventPhase");Object.defineProperty(m,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return e?Event.CAPTURING_PHASE:Event.BUBBLING_PHASE}})}m.__previousCurrentTarget=m.currentTarget;if(!N(l)&&"slot"!==l.localName||-1!=m.composedPath().indexOf(l))if(m.composed||-1<m.composedPath().indexOf(l))if(Ic(m)&&m.target===m.relatedTarget)m.eventPhase===Event.BUBBLING_PHASE&&m.stopImmediatePropagation();else if(m.eventPhase===
Event.CAPTURING_PHASE||m.bubbles||m.target===l||l instanceof Window){var C="function"===k?b.call(l,m):b.handleEvent&&b.handleEvent(m);l!==this&&(q?(Object.defineProperty(m,"currentTarget",q),q=null):delete m.currentTarget,H?(Object.defineProperty(m,"eventPhase",H),H=null):delete m.eventPhase);return C}};b[wc].push({node:l,type:a,capture:e,once:f,passive:g,lb:h});this.__handlers=this.__handlers||{};this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]};this.__handlers[a][e?"capture":"bubble"].push(h);
Hc[a]||this.__shady_native_addEventListener(a,h,d)}}}
function Pc(a,b,c){if(b){var d=zc(c);c=d.capture;var e=d.once,f=d.passive,g=d.Ga;d=d.Fa;if(Bc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[wc]}catch(l){}k&&(e=Lc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].lb,k.length||(b[wc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1))}}
function Qc(){for(var a in Hc)window.__shady_native_addEventListener(a,function(b){b.__target||(Nc(b),Kc(b))},!0)}
var Rc=P({get composed(){void 0===this.__composed&&(xc?this.__composed="focusin"===this.type||"focusout"===this.type||xc(this):!1!==this.isTrusted&&(this.__composed=Ac[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=Dc(this.__target,this.composed));return this.__composedPath},get target(){return Fc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=Dc(this.__relatedTarget,!0));return Fc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ma=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ma=this.__immediatePropagationStopped=!0}});
function Nc(a,b){b=void 0===b?a.target:b;a.__target=b;a.__relatedTarget=a.relatedTarget;if(L.B){b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;O(c,Rc);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else O(a,Rc)}var Sc=Gc(Event),Tc=Gc(CustomEvent),Uc=Gc(MouseEvent);
function Vc(){if(!xc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var b=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(b)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}
var Wc=Object.getOwnPropertyNames(Element.prototype).filter(function(a){return"on"===a.substring(0,2)}),Xc=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(a){return"on"===a.substring(0,2)});function Yc(a){return{set:function(b){var c=A(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b},get:function(){var b=D(this);return b&&b.N&&b.N[a]},configurable:!0}};function Zc(a,b){return{index:a,ba:[],ia:b}}
function $c(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,m=0;m<k-g&&ad(a[--h],c[--l]);)m++;h=m}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Zc(e,0);f<d;)b.ba.push(c[f++]);return[b]}if(f==d)return[Zc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<h;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,H=b[l][m-1]+1;b[l][m]=q<H?q:H}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<h?l:h:m<h?m:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Zc(e,0));b.ia++;e++;b.ba.push(c[f]);f++;break;case 2:b||(b=Zc(e,
0));b.ia++;e++;break;case 3:b||(b=Zc(e,0)),b.ba.push(c[f]),f++}b&&k.push(b);return k}function ad(a,b){return a===b};var bd=P({dispatchEvent:Mc,addEventListener:Oc,removeEventListener:Pc});var cd=null;function dd(){cd||(cd=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return cd||null}function ed(a,b,c){var d=dd();return d&&"class"===b?(d.setElementClass(a,c),!0):!1}function fd(a,b){var c=dd();c&&c.unscopeNode(a,b)}function gd(a,b){var c=dd();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&gd(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}
function hd(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=dd();return b?b.currentScopeForNode(a):""}function id(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&id(a,b)};var jd=window.document,kd=L.aa,ld=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),md=ld&&ld.get;function nd(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function od(a){var b=D(a);if(b&&void 0!==b.la)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)od(b);if(a=D(a))a.la=void 0}function pd(a){var b=a;if(a&&"slot"===a.localName){var c=D(a);(c=c&&c.V)&&(b=c.length?c[0]:pd(a.__shady_nextSibling))}return b}
function qd(a,b,c){if(a=(a=D(a))&&a.Z){if(b)if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var d=0,e=b.childNodes.length;d<e;d++)a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c&&a.removedNodes.push(c);Rb(a)}}
var xd=P({get parentNode(){var a=D(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=D(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=D(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=D(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=D(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(vb(this)){var a=D(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(d){return c[d]};return c},get parentElement(){var a=D(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(md&&md.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(null===a||Eb(a,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(N(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(vb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!vb(this)&&
L.B){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&nd(this);this.__shady_native_textContent=a}else nd(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==jd&&a.ownerDocument!==jd)return this.__shady_native_insertBefore(a,b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
if(b){var c=D(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;qd(this,a);var d=[],e=(c=rd(this))?c.host.localName:hd(this),f=a.__shady_parentNode;if(f){var g=hd(a);var h=!!c||!rd(a)||kd&&void 0!==this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!kd||void 0===a.__noInsertionPoint&&void 0===
this.__noInsertionPoint)&&!gd(a,e),l=c&&!a.__noInsertionPoint&&(!kd||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||hd(a)),id(a,function(m){l&&"slot"===m.localName&&d.push(m);if(k){var q=g;dd()&&(q&&fd(m,q),(q=dd())&&q.scopeNode(m,e))}});d.length&&(sd(c),c.c.push.apply(c.c,d instanceof Array?d:na(ma(d))),td(c));vb(this)&&(ud(a,this,b),h=D(this),h.root?(f=!1,wb(this)&&td(h.root)):c&&"slot"===this.localName&&(f=!1,td(c)));f?(c=N(this)?this.host:this,b?(b=pd(b),c.__shady_native_insertBefore(a,
b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);return a},appendChild:function(a){if(this!=a||!N(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==jd)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);qd(this,null,a);var c=rd(a),d=c&&vd(c,a),e=D(this);if(vb(this)&&(wd(a,this),wb(this))){td(e.root);
var f=!0}if(dd()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=hd(a);id(a,function(h){fd(h,g)})}od(a);c&&((b="slot"===this.localName)&&(f=!0),(d||b)&&td(c));f||(f=N(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);
if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=A(this),c=b.la;void 0===c&&(N(this)?(c=this,b.la=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.la=c)));return c}},contains:function(a){return Fb(this,a)}});var zd=P({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&yd(a);return(a=D(this))&&a.assignedSlot||null}});function Ad(a,b,c){var d=[];Cd(a,b,c,d);return d}function Cd(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(Cd(e,f,g,h),e=void 0)}if(e)break}}
var Dd=P({get firstElementChild(){var a=D(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=D(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return vb(this)?Gb(Array.prototype.filter.call(Ib(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),Ed=P({querySelector:function(a){return Ad(this,function(b){return zb.call(b,a)},function(b){return!!b})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return Gb(b.filter(function(d){return d.__shady_getRootNode()==c}))}return Gb(Ad(this,function(d){return zb.call(d,
a)}))}}),Fd=L.aa&&!L.D?Lb({},Dd):Dd;Lb(Dd,Ed);var Gd=window.document;function Hd(a,b){if("slot"===b)a=a.__shady_parentNode,wb(a)&&td(D(a).root);else if("slot"===a.localName&&"name"===b&&(b=rd(a))){if(b.a){Id(b);var c=a.La,d=Jd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Kd(c))}}td(b)}}
var Ld=P({get previousElementSibling(){var a=D(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=D(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){this.ownerDocument!==Gd?this.__shady_native_setAttribute(a,b):ed(this,a,b)||(this.__shady_native_setAttribute(a,b),Hd(this,a))},removeAttribute:function(a){this.ownerDocument!==Gd?this.__shady_native_removeAttribute(a):ed(this,a,"")?""===this.getAttribute(a)&&this.__shady_native_removeAttribute(a):(this.__shady_native_removeAttribute(a),
Hd(this,a))}});L.aa||Wc.forEach(function(a){Ld[a]=Yc(a)});
var Qd=P({attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!L.Ia){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;Md(b,this,a);Nd(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;sd(c);c.c.push.apply(c.c,a instanceof Array?a:na(ma(a)));td(b)}b.host.__shady_native_appendChild(b)}else b=new Od(Pd,this,a);return this.__CE_shadowRoot=b},
get shadowRoot(){var a=D(this);return a&&a.bb||null}});Lb(Ld,Qd);var Rd=document.implementation.createHTMLDocument("inert"),Sd=P({get innerHTML(){return vb(this)?ac("template"===this.localName?this.content:this,Ib):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{nd(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==Rd.namespaceURI?Rd.createElementNS(this.namespaceURI,b):Rd.createElement(b);for(L.B?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var Td=P({blur:function(){var a=D(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});L.aa||Xc.forEach(function(a){Td[a]=Yc(a)});var Ud=P({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&N(b)&&yd(b);return(b=D(this))?(a&&a.flatten?b.V:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)Oc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)Pc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c)}}});var Vd=P({getElementById:function(a){return""===a?null:Ad(this,function(b){return b.id==a},function(b){return!!b})[0]||null}});var Wd=P({get activeElement(){var a=L.B?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!N(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=rd(a);b&&b!==this;)a=b.host,b=rd(a);return this===document?b?null:a:b===this?a:null}});var Xd=window.document,Yd=P({importNode:function(a,b){if(a.ownerDocument!==Xd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Zd=P({dispatchEvent:Mc,addEventListener:Oc.bind(window),removeEventListener:Pc.bind(window)});var $d={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&($d.parentElement=xd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&($d.contains=xd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&($d.children=Dd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&($d.innerHTML=Sd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&($d.className=Ld.className);
var ae={EventTarget:[bd],Node:[xd,window.EventTarget?null:bd],Text:[zd],Comment:[zd],CDATASection:[zd],ProcessingInstruction:[zd],Element:[Ld,Dd,zd,!L.B||"innerHTML"in Element.prototype?Sd:null,window.HTMLSlotElement?null:Ud],HTMLElement:[Td,$d],HTMLSlotElement:[Ud],DocumentFragment:[Fd,Vd],Document:[Yd,Fd,Vd,Wd],Window:[Zd]},be=L.B?null:["innerHTML","textContent"];function ce(a,b,c,d){b.forEach(function(e){return a&&e&&O(a,e,c,d)})}
function de(a){var b=a?null:be,c;for(c in ae)ce(window[c]&&window[c].prototype,ae[c],a,b)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(a){var b=window[a],c=Object.create(b.prototype);c.__shady_protoIsPatched=!0;ce(c,ae.EventTarget);ce(c,ae.Node);ae[a]&&ce(c,ae[a]);b.prototype.__shady_patchedProto=c});function ee(a){a.__shady_protoIsPatched=!0;ce(a,ae.EventTarget);ce(a,ae.Node);ce(a,ae.Element);ce(a,ae.HTMLElement);ce(a,ae.HTMLSlotElement);return a};var fe=L.ua,ge=L.B;function he(a,b){if(fe&&!a.__shady_protoIsPatched&&!N(a)){var c=Object.getPrototypeOf(a),d=c.hasOwnProperty("__shady_patchedProto")&&c.__shady_patchedProto;d||(d=Object.create(c),ee(d),c.__shady_patchedProto=d);Object.setPrototypeOf(a,d)}ge||(1===b?uc(a):2===b&&vc(a))}
function ie(a,b,c,d){he(a,1);d=d||null;var e=A(a),f=d?A(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=D(e.previousSibling))f.nextSibling=a;if(f=D(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function ud(a,b,c){he(b,2);var d=A(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)ie(a,b,d,c);else ie(a,b,d,c)}
function wd(a,b){var c=A(a);b=A(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(A(a).nextSibling=d);d&&(A(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Nd(a,b){var c=A(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;he(a,2);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=A(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;he(c,1)}}};var je=P({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c)}});function ke(a,b){O(a,je,b);O(a,Wd,b);O(a,Sd,b);O(a,Dd,b);L.D&&!b?(O(a,xd,b),O(a,Vd,b)):L.B||(O(a,rc),O(a,pc),O(a,qc))};var Pd={},le=L.deferConnectionCallbacks&&"loading"===document.readyState,me;function ne(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function Od(a,b,c){if(a!==Pd)throw new TypeError("Illegal constructor");this.a=null;Md(this,b,c)}
function Md(a,b,c){a.host=b;a.mode=c&&c.mode;Nd(a.host);b=A(a.host);b.root=a;b.bb="closed"!==a.mode?a:null;b=A(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(L.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else td(a)}function td(a){a.T||(a.T=!0,Ob(function(){return yd(a)}))}
function yd(a){var b;if(b=a.T){for(var c;a;)a:{a.T&&(c=a),b=a;a=b.host.__shady_getRootNode();if(N(a)&&(b=D(b.host))&&0<b.da)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
Od.prototype._renderSelf=function(){var a=le;le=!0;this.T=!1;if(this.a){Id(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=D(c),e=d.assignedNodes;d.assignedNodes=[];d.V=[];if(d.Ba=e)for(d=0;d<e.length;d++){var f=D(e[d]);f.oa=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)oe(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=D(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)oe(this,
d,c);(d=(d=D(c.__shady_parentNode))&&d.root)&&(xb(d)||d.T)&&d._renderSelf();pe(this,e.V,e.assignedNodes);if(d=e.Ba){for(f=0;f<d.length;f++)D(d[f]).oa=null;e.Ba=null;d.length>e.assignedNodes.length&&(e.ra=!0)}e.ra&&(e.ra=!1,qe(this,c))}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=D(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=D(f).V,h=0;h<
g.length;h++)d.push(g[h]);else d.push(f);f=Hb(e);g=$c(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var m=0,q=void 0;m<l.ba.length&&(q=l.ba[m]);m++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.ia}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],m=l.index;m<l.index+l.ia;m++)q=d[m],e.__shady_native_insertBefore(q,h),f.splice(m,0,q)}}if(!L.preferPerformance&&!this.Aa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
D(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.Aa=!0;le=a;me&&me()};function oe(a,b,c){var d=A(b),e=d.oa;d.oa=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(A(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(A(d.assignedSlot).ra=!0)}
function pe(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=D(e).assignedNodes;f&&f.length&&pe(a,b,f)}else b.push(c[d])}function qe(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=D(b);b.assignedSlot&&qe(a,b.assignedSlot)}function sd(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{}}
function Id(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Nd(e);var f=e.__shady_parentNode;Nd(f);f=D(f);f.da=(f.da||0)+1;f=Jd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Kd(a.b[g]);a.c=[]}}function Jd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.La=b}
function Kd(a){return a.sort(function(b,c){b=ne(b);for(var d=ne(c),e=0;e<b.length;e++){c=b[e];var f=d[e];if(c!==f)return b=Ib(c.__shady_parentNode),b.indexOf(c)-b.indexOf(f)}})}
function vd(a,b){if(a.a){Id(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Fb(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=D(g.__shady_parentNode))&&h.da&&h.da--);f--;g=D(g);if(h=g.V)for(var k=0;k<h.length;k++){var l=h[k],m=l.__shady_native_parentNode;m&&m.__shady_native_removeChild(l)}g.V=[];g.assignedNodes=[];h=!0}}return h}}function xb(a){Id(a);return!(!a.a||!a.a.length)}
(function(a){a.__proto__=DocumentFragment.prototype;ke(a,"__shady_");ke(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(Od.prototype);
if(window.customElements&&window.customElements.define&&L.sa&&!L.preferPerformance){var re=new Map;me=function(){var a=[];re.forEach(function(d,e){a.push([e,d])});re.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};le&&document.addEventListener("readystatechange",function(){le=!1;me()},{once:!0});var se=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=
function(){le?re.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){le?this.isConnected||re.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},te=window.customElements.define,ue=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;te.call(window.customElements,a,se(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=
ue;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:ue,configurable:!0})}function rd(a){a=a.__shady_getRootNode();if(N(a))return a};function ve(a){this.node=a}w=ve.prototype;w.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};w.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};w.appendChild=function(a){return this.node.__shady_appendChild(a)};w.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};w.removeChild=function(a){return this.node.__shady_removeChild(a)};w.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
w.cloneNode=function(a){return this.node.__shady_cloneNode(a)};w.getRootNode=function(a){return this.node.__shady_getRootNode(a)};w.contains=function(a){return this.node.__shady_contains(a)};w.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};w.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};w.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};w.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};w.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
w.attachShadow=function(a){return this.node.__shady_attachShadow(a)};w.focus=function(){this.node.__shady_native_focus()};w.blur=function(){this.node.__shady_blur()};w.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};w.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};w.querySelector=function(a){return this.node.__shady_querySelector(a)};
w.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};w.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
ca.Object.defineProperties(ve.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(N(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(N(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
a}}});function we(a){Object.defineProperty(ve.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})}Wc.forEach(function(a){return we(a)});Xc.forEach(function(a){return we(a)});var xe=new WeakMap;function ye(a){if(N(a)||a instanceof ve)return a;var b=xe.get(a);b||(b=new ve(a),xe.set(a,b));return b};if(L.sa){var ze=L.B?function(a){return a}:function(a){vc(a);uc(a);return a},ShadyDOM={inUse:L.sa,patch:ze,isShadyRoot:N,enqueue:Ob,flush:Pb,flushInitial:function(a){!a.Aa&&a.T&&yd(a)},settings:L,filterMutations:Ub,observeChildren:Sb,unobserveChildren:Tb,deferConnectionCallbacks:L.deferConnectionCallbacks,preferPerformance:L.preferPerformance,handlesDynamicScoping:!0,wrap:L.D?ye:ze,wrapIfNeeded:!0===L.D?ye:function(a){return a},Wrapper:ve,composedPath:Ec,noPatch:L.D,patchOnDemand:L.ua,nativeMethods:ec,
nativeTree:fc,patchElementProto:ee};window.ShadyDOM=ShadyDOM;oc();de("__shady_");Object.defineProperty(document,"_activeElement",Wd.activeElement);O(Window.prototype,Zd,"__shady_");L.D?L.ua&&O(Element.prototype,Qd):(de(),Vc());Qc();window.Event=Sc;window.CustomEvent=Tc;window.MouseEvent=Uc;window.ShadowRoot=Od};/*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Ae=window.Document.prototype.createElement,Be=window.Document.prototype.createElementNS,Ce=window.Document.prototype.importNode,De=window.Document.prototype.prepend,Ee=window.Document.prototype.append,Fe=window.DocumentFragment.prototype.prepend,Ge=window.DocumentFragment.prototype.append,He=window.Node.prototype.cloneNode,Ie=window.Node.prototype.appendChild,Je=window.Node.prototype.insertBefore,Ke=window.Node.prototype.removeChild,Le=window.Node.prototype.replaceChild,Me=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Ne=window.Element.prototype.attachShadow,Oe=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Pe=window.Element.prototype.getAttribute,Qe=window.Element.prototype.setAttribute,Re=window.Element.prototype.removeAttribute,Se=window.Element.prototype.getAttributeNS,Te=window.Element.prototype.setAttributeNS,Ue=window.Element.prototype.removeAttributeNS,Ve=window.Element.prototype.insertAdjacentElement,We=window.Element.prototype.insertAdjacentHTML,Xe=window.Element.prototype.prepend,
Ye=window.Element.prototype.append,Ze=window.Element.prototype.before,$e=window.Element.prototype.after,af=window.Element.prototype.replaceWith,bf=window.Element.prototype.remove,cf=window.HTMLElement,df=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ef=window.HTMLElement.prototype.insertAdjacentElement,ff=window.HTMLElement.prototype.insertAdjacentHTML;var gf=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return gf.add(a)});function hf(a){var b=gf.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var jf=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function S(a){var b=a.isConnected;if(void 0!==b)return b;if(jf(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function kf(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function lf(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function mf(a,b,c){for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;void 0===c&&(c=new Set);if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)mf(d,b,c);d=lf(a,e);continue}else if("template"===f){d=lf(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)mf(e,b,c)}d=d.firstChild?d.firstChild:lf(a,d)}};function nf(){var a=!(null===of||void 0===of||!of.noDocumentConstructionObserver),b=!(null===of||void 0===of||!of.shadyDomFastWalk);this.X=[];this.a=[];this.R=!1;this.shadyDomFastWalk=b;this.jb=!a}function pf(a,b,c,d){var e=window.ShadyDom;if(a.shadyDomFastWalk&&e&&e.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=e.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else mf(b,c,d)}function qf(a,b){a.R=!0;a.X.push(b)}function rf(a,b){a.R=!0;a.a.push(b)}
function sf(a,b){a.R&&pf(a,b,function(c){return tf(a,c)})}function tf(a,b){if(a.R&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.X.length;c++)a.X[c](b);for(c=0;c<a.a.length;c++)a.a[c](b)}}function uf(a,b){var c=[];pf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):vf(a,d)}}function wf(a,b){var c=[];pf(a,b,function(e){return c.push(e)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function xf(a,b,c){c=void 0===c?{}:c;var d=c.kb,e=c.upgrade||function(g){return vf(a,g)},f=[];pf(a,b,function(g){a.R&&tf(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;d&&(d.forEach(function(m){return l.add(m)}),
l.delete(k));xf(a,k,{kb:l,upgrade:e})}})}else f.push(g)},d);for(b=0;b<f.length;b++)e(f[b])}
function vf(a,b){try{var c=b.ownerDocument,d=c.__CE_registry;var e=d&&(c.defaultView||c.__CE_isImportDocument)?yf(d,b.localName):void 0;if(e&&void 0===b.__CE_state){e.constructionStack.push(b);try{try{if(new e.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=e;if(e.attributeChangedCallback&&b.hasAttributes()){var f=e.observedAttributes;
for(e=0;e<f.length;e++){var g=f[e],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}S(b)&&a.connectedCallback(b)}}catch(k){zf(k)}}nf.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){zf(c)}};nf.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){zf(c)}};
nf.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;if(f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b))try{f.attributeChangedCallback.call(a,b,c,d,e)}catch(g){zf(g)}};
function Af(a,b,c,d){var e=b.__CE_registry;if(e&&(null===d||"http://www.w3.org/1999/xhtml"===d)&&(e=yf(e,c)))try{var f=new e.constructorFunction;if(void 0===f.__CE_state||void 0===f.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==f.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(f.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==f.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==f.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(f.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(f.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return f}catch(g){return zf(g),b=null===d?Ae.call(b,c):Be.call(b,d,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,tf(a,b),b}b=null===d?Ae.call(b,c):Be.call(b,d,c);tf(a,b);return b}
function zf(a){var b=a.message,c=a.sourceURL||a.fileName||"",d=a.line||a.lineNumber||0,e=a.column||a.columnNumber||0,f=void 0;void 0===ErrorEvent.prototype.initErrorEvent?f=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:d,colno:e,error:a}):(f=document.createEvent("ErrorEvent"),f.initErrorEvent("error",!1,!0,b,c,d),f.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===f.error&&Object.defineProperty(f,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(f);f.defaultPrevented||console.error(a)};function Bf(){var a=this;this.C=void 0;this.Ca=new Promise(function(b){a.a=b})}Bf.prototype.resolve=function(a){if(this.C)throw Error("Already resolved.");this.C=a;this.a(a)};function Cf(a){var b=document;this.S=void 0;this.M=a;this.a=b;xf(this.M,this.a);"loading"===this.a.readyState&&(this.S=new MutationObserver(this.b.bind(this)),this.S.observe(this.a,{childList:!0,subtree:!0}))}function Df(a){a.S&&a.S.disconnect()}Cf.prototype.b=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||Df(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)xf(this.M,c[d])};function T(a){this.fa=new Map;this.ga=new Map;this.xa=new Map;this.na=!1;this.qa=new Map;this.ea=function(b){return b()};this.P=!1;this.ha=[];this.M=a;this.ya=a.jb?new Cf(a):void 0}w=T.prototype;w.$a=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");Ef(this,a);this.fa.set(a,b);this.ha.push(a);this.P||(this.P=!0,this.ea(function(){return Ff(c)}))};
w.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");Ef(this,a);Gf(this,a,b);this.ha.push(a);this.P||(this.P=!0,this.ea(function(){return Ff(c)}))};function Ef(a,b){if(!hf(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(yf(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.na)throw Error("A custom element is already being defined.");}
function Gf(a,b,c){a.na=!0;var d;try{var e=c.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=function(m){var q=e[m];if(void 0!==q&&!(q instanceof Function))throw Error("The '"+m+"' callback must be a function.");return q};var g=f("connectedCallback");var h=f("disconnectedCallback");var k=f("adoptedCallback");var l=(d=f("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.na=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:d,observedAttributes:l,constructionStack:[]};a.ga.set(b,c);a.xa.set(c.constructorFunction,c);return c}w.upgrade=function(a){xf(this.M,a)};
function Ff(a){if(!1!==a.P){a.P=!1;for(var b=[],c=a.ha,d=new Map,e=0;e<c.length;e++)d.set(c[e],[]);xf(a.M,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=d.get(l);m?m.push(k):a.ga.has(l)&&b.push(k)}}});for(e=0;e<b.length;e++)vf(a.M,b[e]);for(e=0;e<c.length;e++){for(var f=c[e],g=d.get(f),h=0;h<g.length;h++)vf(a.M,g[h]);(f=a.qa.get(f))&&f.resolve(void 0)}c.length=0}}w.get=function(a){if(a=yf(this,a))return a.constructorFunction};
w.whenDefined=function(a){if(!hf(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.qa.get(a);if(b)return b.Ca;b=new Bf;this.qa.set(a,b);var c=this.ga.has(a)||this.fa.has(a);a=-1===this.ha.indexOf(a);c&&a&&b.resolve(void 0);return b.Ca};w.polyfillWrapFlushCallback=function(a){this.ya&&Df(this.ya);var b=this.ea;this.ea=function(c){return a(function(){return b(c)})}};
function yf(a,b){var c=a.ga.get(b);if(c)return c;if(c=a.fa.get(b)){a.fa.delete(b);try{return Gf(a,b,c())}catch(d){zf(d)}}}window.CustomElementRegistry=T;T.prototype.define=T.prototype.define;T.prototype.upgrade=T.prototype.upgrade;T.prototype.get=T.prototype.get;T.prototype.whenDefined=T.prototype.whenDefined;T.prototype.polyfillDefineLazy=T.prototype.$a;T.prototype.polyfillWrapFlushCallback=T.prototype.polyfillWrapFlushCallback;function Hf(a,b,c){function d(e){return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&S(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}e.apply(this,g);for(g=0;g<k.length;g++)wf(a,k[g]);if(S(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&uf(a,k)}}void 0!==c.prepend&&(b.prepend=d(c.prepend));void 0!==c.append&&(b.append=d(c.append))}
;function If(a){Document.prototype.createElement=function(b){return Af(a,this,b,null)};Document.prototype.importNode=function(b,c){b=Ce.call(this,b,!!c);this.__CE_registry?xf(a,b):sf(a,b);return b};Document.prototype.createElementNS=function(b,c){return Af(a,this,c,b)};Hf(a,Document.prototype,{prepend:De,append:Ee})};function Jf(a){function b(d){return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];g=[];for(var h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&S(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}d.apply(this,f);for(f=0;f<h.length;f++)wf(a,h[f]);if(S(this))for(f=0;f<g.length;f++)h=g[f],h instanceof Element&&uf(a,h)}}var c=Element.prototype;void 0!==Ze&&(c.before=b(Ze));void 0!==$e&&(c.after=b($e));void 0!==
af&&(c.replaceWith=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];f=[];for(var g=[],h=0;h<e.length;h++){var k=e[h];k instanceof Element&&S(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k)}h=S(this);af.apply(this,e);for(e=0;e<g.length;e++)wf(a,g[e]);if(h)for(wf(a,this),e=0;e<f.length;e++)g=f[e],g instanceof Element&&uf(a,g)});void 0!==bf&&(c.remove=function(){var d=S(this);bf.call(this);d&&wf(a,this)})};function Kf(a){function b(e,f){Object.defineProperty(e,"innerHTML",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(g){var h=this,k=void 0;S(this)&&(k=[],pf(a,this,function(q){q!==h&&k.push(q)}));f.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?xf(a,this):sf(a,this);return g}})}function c(e,f){e.insertAdjacentElement=function(g,h){var k=S(h);g=f.call(this,g,h);k&&wf(a,h);S(g)&&uf(a,h);return g}}
function d(e,f){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)xf(a,l[k])}e.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;f.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,f.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,f.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,f.call(this,h,k),g(this.nextSibling,
l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}Ne&&(Element.prototype.attachShadow=function(e){e=Ne.call(this,e);if(a.R&&!e.__CE_patched){e.__CE_patched=!0;for(var f=0;f<a.X.length;f++)a.X[f](e)}return this.__CE_shadowRoot=e});Oe&&Oe.get?b(Element.prototype,Oe):df&&df.get?b(HTMLElement.prototype,df):rf(a,function(e){b(e,{enumerable:!0,configurable:!0,get:function(){return He.call(this,!0).innerHTML},set:function(f){var g=
"template"===this.localName,h=g?this.content:this,k=Be.call(document,this.namespaceURI,this.localName);for(k.innerHTML=f;0<h.childNodes.length;)Ke.call(h,h.childNodes[0]);for(f=g?k.content:k;0<f.childNodes.length;)Ie.call(h,f.childNodes[0])}})});Element.prototype.setAttribute=function(e,f){if(1!==this.__CE_state)return Qe.call(this,e,f);var g=Pe.call(this,e);Qe.call(this,e,f);f=Pe.call(this,e);a.attributeChangedCallback(this,e,g,f,null)};Element.prototype.setAttributeNS=function(e,f,g){if(1!==this.__CE_state)return Te.call(this,
e,f,g);var h=Se.call(this,e,f);Te.call(this,e,f,g);g=Se.call(this,e,f);a.attributeChangedCallback(this,f,h,g,e)};Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return Re.call(this,e);var f=Pe.call(this,e);Re.call(this,e);null!==f&&a.attributeChangedCallback(this,e,f,null,null)};Element.prototype.removeAttributeNS=function(e,f){if(1!==this.__CE_state)return Ue.call(this,e,f);var g=Se.call(this,e,f);Ue.call(this,e,f);var h=Se.call(this,e,f);g!==h&&a.attributeChangedCallback(this,
f,g,h,e)};ef?c(HTMLElement.prototype,ef):Ve&&c(Element.prototype,Ve);ff?d(HTMLElement.prototype,ff):We&&d(Element.prototype,We);Hf(a,Element.prototype,{prepend:Xe,append:Ye});Jf(a)};var Lf={};function Mf(a){function b(){var c=this.constructor;var d=document.__CE_registry.xa.get(c);if(!d)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=Ae.call(document,d.localName),Object.setPrototypeOf(e,c.prototype),e.__CE_state=1,e.__CE_definition=d,tf(a,e),e;var f=e.length-1,g=e[f];if(g===Lf)throw Error("Failed to construct '"+d.localName+"': This element was already constructed.");e[f]=
Lf;Object.setPrototypeOf(g,c.prototype);tf(a,g);return g}b.prototype=cf.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function Nf(a){function b(c,d){Object.defineProperty(c,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,e);else{var f=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&S(this)){f=Array(h);for(var k=0;k<h;k++)f[k]=g[k]}}d.set.call(this,e);if(f)for(e=0;e<f.length;e++)wf(a,f[e])}}})}Node.prototype.insertBefore=function(c,d){if(c instanceof DocumentFragment){var e=kf(c);c=Je.call(this,c,d);if(S(this))for(d=
0;d<e.length;d++)uf(a,e[d]);return c}e=c instanceof Element&&S(c);d=Je.call(this,c,d);e&&wf(a,c);S(this)&&uf(a,c);return d};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var d=kf(c);c=Ie.call(this,c);if(S(this))for(var e=0;e<d.length;e++)uf(a,d[e]);return c}d=c instanceof Element&&S(c);e=Ie.call(this,c);d&&wf(a,c);S(this)&&uf(a,c);return e};Node.prototype.cloneNode=function(c){c=He.call(this,!!c);this.ownerDocument.__CE_registry?xf(a,c):sf(a,c);return c};Node.prototype.removeChild=
function(c){var d=c instanceof Element&&S(c),e=Ke.call(this,c);d&&wf(a,c);return e};Node.prototype.replaceChild=function(c,d){if(c instanceof DocumentFragment){var e=kf(c);c=Le.call(this,c,d);if(S(this))for(wf(a,d),d=0;d<e.length;d++)uf(a,e[d]);return c}e=c instanceof Element&&S(c);var f=Le.call(this,c,d),g=S(this);g&&wf(a,d);e&&wf(a,c);g&&uf(a,c);return f};Me&&Me.get?b(Node.prototype,Me):qf(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var d=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==
Node.COMMENT_NODE&&d.push(e.textContent);return d.join("")},set:function(d){for(;this.firstChild;)Ke.call(this,this.firstChild);null!=d&&""!==d&&Ie.call(this,document.createTextNode(d))}})})};var of=window.customElements;function Of(){var a=new nf;Mf(a);If(a);Hf(a,DocumentFragment.prototype,{prepend:Fe,append:Ge});Nf(a);Kf(a);a=new T(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}of&&!of.forcePolyfill&&"function"==typeof of.define&&"function"==typeof of.get||Of();window.__CE_installPolyfill=Of;/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Pf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function Qf(a){var b=a=a.replace(Rf,"").replace(Sf,""),c=new Pf;c.start=0;c.end=b.length;for(var d=c,e=0,f=b.length;e<f;e++)if("{"===b[e]){d.rules||(d.rules=[]);var g=d,h=g.rules[g.rules.length-1]||null;d=new Pf;d.start=e+1;d.parent=g;d.previous=h;g.rules.push(d)}else"}"===b[e]&&(d.end=e+1,d=d.parent||c);return Tf(c,a)}
function Tf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=Uf(c),c=c.replace(Vf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Wf:c.match(Xf)&&(a.type=Yf,a.keyframesName=a.selector.split(Vf).pop()):a.type=0===c.indexOf("--")?Zf:$f);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)Tf(f,
b);return a}function Uf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(b,c){b=c;for(c=6-b.length;c--;)b="0"+b;return"\\"+b})}
function ag(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=ag(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(bg,"").replace(cg,""),b=b.replace(dg,"").replace(eg,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var $f=1,Yf=7,Wf=4,Zf=1E3,Rf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Sf=/@import[^;]*;/gim,bg=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,cg=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,dg=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,eg=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Xf=/^@[^\s]*keyframes/,Vf=/\s+/g;var U=!(window.ShadyDOM&&window.ShadyDOM.inUse),fg;function gg(a){fg=a&&a.shimcssproperties?!1:U||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var hg;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(hg=window.ShadyCSS.cssBuild);var ig=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?fg=window.ShadyCSS.nativeCss:window.ShadyCSS?(gg(window.ShadyCSS),window.ShadyCSS=void 0):gg(window.WebComponents&&window.WebComponents.flags);var V=fg;var jg=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,kg=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,lg=/(--[\w-]+)\s*([:,;)]|$)/gi,mg=/(animation\s*:)|(animation-name\s*:)/,ng=/@media\s(.*)/,og=/\{[^}]*\}/g;var pg=new Set;function qg(a,b){if(!a)return"";"string"===typeof a&&(a=Qf(a));b&&sg(a,b);return ag(a,V)}function tg(a){!a.__cssRules&&a.textContent&&(a.__cssRules=Qf(a.textContent));return a.__cssRules||null}function ug(a){return!!a.parent&&a.parent.type===Yf}function sg(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Wf){var g=a.selector.match(ng);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===$f?b(a):c&&f===Yf?c(a):f===Zf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)sg(g,b,c,d)}}
function vg(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;wg(e,c,d);return e}var xg=null;function yg(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(xg?xg.nextSibling:null)||b.firstChild);return xg=a}function wg(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);xg?a.compareDocumentPosition(xg)===Node.DOCUMENT_POSITION_PRECEDING&&(xg=a):xg=a}
function zg(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function Ag(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=zg(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Ag(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Bg(a,b){U?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var Cg=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function Dg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,ca:c}}function Eg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=zg(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function Fg(a){if(void 0!==hg)return hg;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function Gg(a){a=void 0===a?"":a;return""!==a&&V?U?"shadow"===a:"shady"===a:!1};function Hg(){}function Ig(a,b){Jg(Kg,a,function(c){Lg(c,b||"")})}function Jg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)Jg(a,d[b],c)}
function Lg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Bg(a,b)):Bg(a,(d?d+" ":"")+"style-scope "+b)}}function Mg(a,b,c){Jg(Kg,a,function(d){Lg(d,b,!0);Lg(d,c)})}function Ng(a,b){Jg(Kg,a,function(c){Lg(c,b||"",!0)})}
function Og(a,b,c,d,e){var f=Kg;e=void 0===e?"":e;""===e&&(U||"shady"===(void 0===d?"":d)?e=qg(b,c):(a=Dg(a),e=Pg(f,b,a.is,a.ca,c)+"\n\n"));return e.trim()}function Pg(a,b,c,d,e){var f=Qg(c,d);c=c?"."+c:"";return qg(b,function(g){g.c||(g.selector=g.w=Rg(a,g,a.b,c,f),g.c=!0);e&&e(g,c,f)})}function Qg(a,b){return b?"[is="+a+"]":a}
function Rg(a,b,c,d,e){var f=Eg(b.selector);if(!ug(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(k){return!!k}).join(",")}function Sg(a){return a.replace(Tg,function(b,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function Ug(a){for(var b=[],c;c=a.match(Vg);){var d=c.index,e=zg(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{wa:a,matches:b}}function Wg(a,b){var c=a.split("\ue000");return b.reduce(function(d,e,f){return d+e+c[f+1]},c[0])}
Hg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=Tg.test(a);e&&(a=a.replace(Tg,function(h,k,l){return":"+k+"("+l.replace(/\s/g,"")+")"}),a=Sg(a));var f=Vg.test(a);if(f){var g=Ug(a);a=g.wa;g=g.matches}a=a.replace(Xg,":host $1");a=a.replace(Yg,function(h,k,l){d||(h=Zg(l,k,b,c),d=d||h.stop,k=h.Qa,l=h.value);return k+l});f&&(a=Wg(a,g));e&&(a=Sg(a));return a=a.replace($g,function(h,k,l,m){return'[dir="'+l+'"] '+k+m+", "+k+'[dir="'+l+'"]'+m})};
function Zg(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=ah(a,d):0!==e&&(a=c?bh(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(ch,function(g,h){return" > "+h}))}return{value:a,Qa:b,stop:f}}function bh(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function ah(a,b){var c=a.match(dh);return(c=c&&c[2].trim()||"")?c[0].match(eh)?a.replace(dh,function(d,e,f){return b+f}):c.split(eh)[0]===b?c:"should_not_match":a.replace(":host",b)}function fh(a){":root"===a.selector&&(a.selector="html")}Hg.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):bh(a.trim(),":not(.style-scope)")};ca.Object.defineProperties(Hg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var Tg=/:(nth[-\w]+)\(([^)]+)\)/,Yg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,eh=/[[.:#*]/,Xg=/^(::slotted)/,dh=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ch=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,$g=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Vg=/:(?:matches|any|-(?:webkit|moz)-any)/,Kg=new Hg;function gh(a,b,c,d,e){this.H=a||null;this.b=b||null;this.ta=c||[];this.F=null;this.cssBuild=e||"";this.ca=d||"";this.a=this.G=this.L=null}function hh(a){return a?a.__styleInfo:null}function ih(a,b){return a.__styleInfo=b}gh.prototype.c=function(){return this.H};gh.prototype._getStyleRules=gh.prototype.c;function jh(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var kh=/:host\s*>\s*/,lh=navigator.userAgent.match("Trident");function mh(){}function nh(a){var b={},c=[],d=0;sg(a,function(f){oh(f);f.index=d++;f=f.v.cssText;for(var g;g=lg.exec(f);){var h=g[1];":"!==g[2]&&(b[h]=!0)}},function(f){c.push(f)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function oh(a){if(!a.v){var b={},c={};ph(a,c)&&(b.K=c,a.rules=null);b.cssText=a.parsedCssText.replace(og,"").replace(jg,"");a.v=b}}function ph(a,b){var c=a.v;if(c){if(c.K)return Object.assign(b,c.K),!0}else{c=a.parsedCssText;for(var d;a=jg.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function qh(a,b,c){b&&(b=0<=b.indexOf(";")?rh(a,b,c):Ag(b,function(d,e,f,g){if(!e)return d+g;(e=qh(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=qh(a,c[f]||f,c)||f;return d+(e||"")+g}));return b&&b.trim()||""}
function rh(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){kg.lastIndex=0;if(f=kg.exec(e))e=qh(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=qh(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function sh(a,b){var c={},d=[];sg(a,function(e){e.v||oh(e);var f=e.w||e.parsedSelector;b&&e.v.K&&f&&jh.call(b,f)&&(ph(e,c),e=e.index,f=parseInt(e/32,10),d[f]=(d[f]||0)|1<<e%32)},null,!0);return{K:c,key:d}}
function th(a,b,c,d){b.v||oh(b);if(b.v.K){var e=Dg(a);a=e.is;e=e.ca;e=a?Qg(a,e):"html";var f=b.parsedSelector;var g=!!f.match(kh)||"html"===e&&-1<f.indexOf("html");var h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.w||(b.w=Rg(Kg,b,Kg.b,a?"."+a:"",e)),c=b.w||e),g&&"html"===e&&(c=b.w||b.J),d({wa:c,Xa:h,mb:g})}}
function uh(a,b,c){var d={},e={};sg(b,function(f){th(a,f,c,function(g){jh.call(a._element||a,g.wa)&&(g.Xa?ph(f,d):ph(f,e))})},null,!0);return{cb:e,Va:d}}
function vh(a,b,c,d){var e=Dg(b),f=Qg(e.is,e.ca),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=hh(b);e=h.H;h=h.cssBuild;var k=wh(e,d);return Og(b,e,function(l){var m="";l.v||oh(l);l.v.cssText&&(m=rh(a,l.v.cssText,c));l.cssText=m;if(!U&&!ug(l)&&l.cssText){var q=m=l.cssText;null==l.Da&&(l.Da=mg.test(m));if(l.Da)if(null==l.ka){l.ka=[];for(var H in k)q=k[H],q=q(m),m!==q&&(m=q,l.ka.push(H))}else{for(H=0;H<l.ka.length;++H)q=k[l.ka[H]],m=q(m);q=m}l.cssText=q;l.w=
l.w||l.selector;m="."+d;H=Eg(l.w);q=0;for(var C=H.length,t=void 0;q<C&&(t=H[q]);q++)H[q]=t.match(g)?t.replace(f,m):m+" "+t;l.selector=H.join(",")}},h)}function wh(a,b){a=a.b;var c={};if(!U&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.l=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.w=f.w||f.selector;f.selector=f.w.replace(f.keyframesName,f.a);c[e.keyframesName]=xh(e)}return c}function xh(a){return function(b){return b.replace(a.l,a.a)}}
function yh(a,b){var c=zh,d=tg(a);a.textContent=qg(d,function(e){var f=e.cssText=e.parsedCssText;e.v&&e.v.cssText&&(f=f.replace(bg,"").replace(cg,""),e.cssText=rh(c,f,b))})}ca.Object.defineProperties(mh.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var zh=new mh;var Ah={},Bh=window.customElements;if(Bh&&!U&&!ig){var Ch=Bh.define;Bh.define=function(a,b,c){Ah[a]||(Ah[a]=yg(a));Ch.call(Bh,a,b,c)}};function Dh(){this.cache={}}Dh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({K:b,styleElement:c,G:d});100<e.length&&e.shift();this.cache[a]=e};function Eh(){}var Fh=new RegExp(Kg.a+"\\s*([^\\s]*)");function Gh(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Fh))?a[1]:""}function Hh(a){var b=Cg(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?Dg(a).is:""}
function Ih(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Gh(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Fg(e)))Ng(e,g);else if(f instanceof ShadowRoot)for(f=Hh(e),f!==g&&Mg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+Kg.a+")"),g=0;g<e.length;g++){f=e[g];
var h=Hh(f);h&&Lg(f,h)}}}}}
if(!(U||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Jh=new MutationObserver(Ih),Kh=function(a){Jh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Kh(document);else{var Lh=function(){Kh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Lh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Lh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else Lh()})}Eh=function(){Ih(Jh.takeRecords())}};var Mh={};var Nh=Promise.resolve();function Oh(a){if(a=Mh[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function Ph(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function Qh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,Nh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var Rh={},Sh=new Dh;function X(){this.Y={};this.c=document.documentElement;var a=new Pf;a.rules=[];this.l=ih(this.c,new gh(a));this.J=!1;this.a=this.b=null}w=X.prototype;w.flush=function(){Eh()};w.Ta=function(a){return tg(a)};w.hb=function(a){return qg(a)};w.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
w.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!ig){U||Ah[b]||(Ah[b]=yg(b));a._prepared=!0;a.name=b;a.extends=c;Mh[b]=a;var d=Fg(a),e=Gg(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!U){var l=k.textContent;if(!pg.has(l)){pg.add(l);var m=document.createElement("style");m.setAttribute("shady-unscoped","");m.textContent=l;document.head.appendChild(m)}k.parentNode.removeChild(k)}}else f.push(k.textContent),
k.parentNode.removeChild(k)}f=f.join("").trim()+(Rh[b]||"");Th(this);if(!e){if(g=!d)g=kg.test(f)||jg.test(f),kg.lastIndex=0,jg.lastIndex=0;h=Qf(f);g&&V&&this.b&&this.b.transformRules(h,b);a._styleAst=h}g=[];V||(g=nh(a._styleAst));if(!g.length||V)h=U?a.content:null,b=Ah[b]||null,d=Og(c,a._styleAst,null,d,e?f:""),d=d.length?vg(d,c.is,h,b):null,a._style=d;a.a=g}};w.ab=function(a,b){Rh[b]=a.join(" ")};
w.prepareTemplateDom=function(a,b){if(!ig){var c=Fg(a);U||"shady"===c||a._domPrepared||(a._domPrepared=!0,Ig(a.content,b))}};function Uh(a){var b=Dg(a),c=b.is;b=b.ca;var d=Ah[c]||null,e=Mh[c];if(e){c=e._styleAst;var f=e.a;e=Fg(e);b=new gh(c,d,f,b,e);ih(a,b);return b}}
function Vh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.a=window.ShadyCSS.CustomStyleInterface,a.a.transformCallback=function(b){a.Ha(b)},a.a.validateCallback=function(){requestAnimationFrame(function(){(a.a.enqueued||a.J)&&a.flushCustomStyles()})})}function Th(a){if(!a.b&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){a.b=window.ShadyCSS.ApplyShim;a.b.invalidCallback=Oh;var b=!0}else b=!1;Vh(a);return b}
w.flushCustomStyles=function(){if(!ig){var a=Th(this);if(this.a){var b=this.a.processStyles();if((a||this.a.enqueued)&&!Gg(this.l.cssBuild)){if(V){if(!this.l.cssBuild)for(a=0;a<b.length;a++){var c=this.a.getStyleForCustomStyle(b[a]);if(c&&V&&this.b){var d=tg(c);Th(this);this.b.transformRules(d);c.textContent=qg(d)}}}else{Wh(this,b);Xh(this,this.c,this.l);for(a=0;a<b.length;a++)(c=this.a.getStyleForCustomStyle(b[a]))&&yh(c,this.l.L);this.J&&this.styleDocument()}this.a.enqueued=!1}}}};
function Wh(a,b){b=b.map(function(c){return a.a.getStyleForCustomStyle(c)}).filter(function(c){return!!c});b.sort(function(c,d){c=d.compareDocumentPosition(c);return c&Node.DOCUMENT_POSITION_FOLLOWING?1:c&Node.DOCUMENT_POSITION_PRECEDING?-1:0});a.l.H.rules=b.map(function(c){return tg(c)})}
w.styleElement=function(a,b){if(ig){if(b){hh(a)||ih(a,new gh(null));var c=hh(a);c.F=c.F||{};Object.assign(c.F,b);Yh(this,a,c)}}else if(c=hh(a)||Uh(a))if(a!==this.c&&(this.J=!0),b&&(c.F=c.F||{},Object.assign(c.F,b)),V)Yh(this,a,c);else if(this.flush(),Xh(this,a,c),c.ta&&c.ta.length){b=Dg(a).is;var d;a:{if(d=Sh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.ta;for(var h=0;h<g.length;h++){var k=g[h];if(f.K[k]!==c.L[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:
null;e=c.G;(f=d&&d.G)||(f=this.Y[b]=(this.Y[b]||0)+1,f=b+"-"+f);c.G=f;f=c.G;h=zh;h=g?g.textContent||"":vh(h,a,c.L,f);k=hh(a);var l=k.a;l&&!U&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));U?k.a?(k.a.textContent=h,g=k.a):h&&(g=vg(h,f,a.shadowRoot,k.b)):g?g.parentNode||(lh&&-1<h.indexOf("@media")&&(g.textContent=h),wg(g,null,k.b)):h&&(g=vg(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;U||(g=c.G,k=h=a.getAttribute("class")||"",e&&(k=
h.replace(new RegExp("\\s*x-scope\\s*"+e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Bg(a,k));d||Sh.store(b,c.L,f,c.G)}};
function Yh(a,b,c){var d=Dg(b).is;if(c.F){var e=c.F,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=Mh[d];if(!(!e&&b!==a.c||e&&""!==Fg(e))&&e&&e._style&&!Ph(e)){if(Ph(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)Th(a),a.b&&a.b.transformRules(e._styleAst,d),e._style.textContent=Og(b,c.H),Qh(e);U&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=Og(b,c.H));c.H=e._styleAst}}
function Zh(a,b){return(b=Cg(b).getRootNode().host)?hh(b)||Uh(b)?b:Zh(a,b):a.c}function Xh(a,b,c){var d=Zh(a,b),e=hh(d),f=e.L;d===a.c||f||(Xh(a,d,e),f=e.L);a=Object.create(f||null);d=uh(b,c.H,c.cssBuild);b=sh(e.H,b).K;Object.assign(a,d.Va,b,d.cb);b=c.F;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=zh;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=qh(g,a[d],a);c.L=a}w.styleDocument=function(a){this.styleSubtree(this.c,a)};
w.styleSubtree=function(a,b){var c=Cg(a),d=c.shadowRoot,e=a===this.c;(d||e)&&this.styleElement(a,b);if(a=e?c:d)for(a=Array.from(a.querySelectorAll("*")).filter(function(f){return Cg(f).shadowRoot}),b=0;b<a.length;b++)this.styleSubtree(a[b])};
w.Ha=function(a){var b=this,c=Fg(a);c!==this.l.cssBuild&&(this.l.cssBuild=c);if(!Gg(c)){var d=tg(a);sg(d,function(e){if(U)fh(e);else{var f=Kg;e.selector=e.parsedSelector;fh(e);e.selector=e.w=Rg(f,e,f.c,void 0,void 0)}V&&""===c&&(Th(b),b.b&&b.b.transformRule(e))});V?a.textContent=qg(d):this.l.H.rules.push(d)}};w.getComputedStyleValue=function(a,b){var c;V||(c=(hh(a)||hh(Zh(this,a))).L[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
w.gb=function(a,b){var c=Cg(a).getRootNode(),d;b?d=("string"===typeof b?b:String(b)).split(/\s/):d=[];b=c.host&&c.host.localName;if(!b&&(c=a.getAttribute("class"))){c=c.split(/\s/);for(var e=0;e<c.length;e++)if(c[e]===Kg.a){b=c[e+1];break}}b&&d.push(Kg.a,b);V||(b=hh(a))&&b.G&&d.push(zh.a,b.G);Bg(a,d.join(" "))};w.Oa=function(a){return hh(a)};w.fb=function(a,b){Lg(a,b)};w.ib=function(a,b){Lg(a,b,!0)};w.eb=function(a){return Hh(a)};w.Ra=function(a){return Gh(a)};X.prototype.flush=X.prototype.flush;
X.prototype.prepareTemplate=X.prototype.prepareTemplate;X.prototype.styleElement=X.prototype.styleElement;X.prototype.styleDocument=X.prototype.styleDocument;X.prototype.styleSubtree=X.prototype.styleSubtree;X.prototype.getComputedStyleValue=X.prototype.getComputedStyleValue;X.prototype.setElementClass=X.prototype.gb;X.prototype._styleInfoForNode=X.prototype.Oa;X.prototype.transformCustomStyleForDocument=X.prototype.Ha;X.prototype.getStyleAst=X.prototype.Ta;X.prototype.styleAstToString=X.prototype.hb;
X.prototype.flushCustomStyles=X.prototype.flushCustomStyles;X.prototype.scopeNode=X.prototype.fb;X.prototype.unscopeNode=X.prototype.ib;X.prototype.scopeForNode=X.prototype.eb;X.prototype.currentScopeForNode=X.prototype.Ra;X.prototype.prepareAdoptedCssText=X.prototype.ab;Object.defineProperties(X.prototype,{nativeShadow:{get:function(){return U}},nativeCss:{get:function(){return V}}});var Y=new X,$h,ai;window.ShadyCSS&&($h=window.ShadyCSS.ApplyShim,ai=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Y,prepareTemplate:function(a,b,c){Y.flushCustomStyles();Y.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Y.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Y.flushCustomStyles();Y.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Y.flushCustomStyles();Y.styleSubtree(a,b)},styleElement:function(a){Y.flushCustomStyles();Y.styleElement(a)},styleDocument:function(a){Y.flushCustomStyles();Y.styleDocument(a)},flushCustomStyles:function(){Y.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Y.getComputedStyleValue(a,b)},nativeCss:V,nativeShadow:U,cssBuild:hg,disableRuntime:ig};$h&&(window.ShadyCSS.ApplyShim=$h);ai&&(window.ShadyCSS.CustomStyleInterface=ai);(function(a){function b(t){""==t&&(f.call(this),this.h=!0);return t.toLowerCase()}function c(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,63,96].indexOf(F)?t:encodeURIComponent(t)}function d(t){var F=t.charCodeAt(0);return 32<F&&127>F&&-1==[34,35,60,62,96].indexOf(F)?t:encodeURIComponent(t)}function e(t,F,E){function M(ka){va.push(ka)}var y=F||"scheme start",W=0,v="",ua=!1,ea=!1,va=[];a:for(;(void 0!=t[W-1]||0==W)&&!this.h;){var n=t[W];switch(y){case "scheme start":if(n&&q.test(n))v+=
n.toLowerCase(),y="scheme";else if(F){M("Invalid scheme.");break a}else{v="";y="no scheme";continue}break;case "scheme":if(n&&H.test(n))v+=n.toLowerCase();else if(":"==n){this.g=v;v="";if(F)break a;void 0!==l[this.g]&&(this.A=!0);y="file"==this.g?"relative":this.A&&E&&E.g==this.g?"relative or authority":this.A?"authority first slash":"scheme data"}else if(F){void 0!=n&&M("Code point not allowed in scheme: "+n);break a}else{v="";W=0;y="no scheme";continue}break;case "scheme data":"?"==n?(this.o="?",
y="query"):"#"==n?(this.u="#",y="fragment"):void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.pa+=c(n));break;case "no scheme":if(E&&void 0!==l[E.g]){y="relative";continue}else M("Missing scheme."),f.call(this),this.h=!0;break;case "relative or authority":if("/"==n&&"/"==t[W+1])y="authority ignore slashes";else{M("Expected /, got: "+n);y="relative";continue}break;case "relative":this.A=!0;"file"!=this.g&&(this.g=E.g);if(void 0==n){this.i=E.i;this.m=E.m;this.j=E.j.slice();this.o=E.o;this.s=E.s;this.f=E.f;
break a}else if("/"==n||"\\"==n)"\\"==n&&M("\\ is an invalid code point."),y="relative slash";else if("?"==n)this.i=E.i,this.m=E.m,this.j=E.j.slice(),this.o="?",this.s=E.s,this.f=E.f,y="query";else if("#"==n)this.i=E.i,this.m=E.m,this.j=E.j.slice(),this.o=E.o,this.u="#",this.s=E.s,this.f=E.f,y="fragment";else{y=t[W+1];var I=t[W+2];if("file"!=this.g||!q.test(n)||":"!=y&&"|"!=y||void 0!=I&&"/"!=I&&"\\"!=I&&"?"!=I&&"#"!=I)this.i=E.i,this.m=E.m,this.s=E.s,this.f=E.f,this.j=E.j.slice(),this.j.pop();y=
"relative path";continue}break;case "relative slash":if("/"==n||"\\"==n)"\\"==n&&M("\\ is an invalid code point."),y="file"==this.g?"file host":"authority ignore slashes";else{"file"!=this.g&&(this.i=E.i,this.m=E.m,this.s=E.s,this.f=E.f);y="relative path";continue}break;case "authority first slash":if("/"==n)y="authority second slash";else{M("Expected '/', got: "+n);y="authority ignore slashes";continue}break;case "authority second slash":y="authority ignore slashes";if("/"!=n){M("Expected '/', got: "+
n);continue}break;case "authority ignore slashes":if("/"!=n&&"\\"!=n){y="authority";continue}else M("Expected authority, got: "+n);break;case "authority":if("@"==n){ua&&(M("@ already seen."),v+="%40");ua=!0;for(n=0;n<v.length;n++)I=v[n],"\t"==I||"\n"==I||"\r"==I?M("Invalid whitespace in authority."):":"==I&&null===this.f?this.f="":(I=c(I),null!==this.f?this.f+=I:this.s+=I);v=""}else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){W-=v.length;v="";y="host";continue}else v+=n;break;case "file host":if(void 0==
n||"/"==n||"\\"==n||"?"==n||"#"==n){2!=v.length||!q.test(v[0])||":"!=v[1]&&"|"!=v[1]?(0!=v.length&&(this.i=b.call(this,v),v=""),y="relative path start"):y="relative path";continue}else"\t"==n||"\n"==n||"\r"==n?M("Invalid whitespace in file host."):v+=n;break;case "host":case "hostname":if(":"!=n||ea)if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n){this.i=b.call(this,v);v="";y="relative path start";if(F)break a;continue}else"\t"!=n&&"\n"!=n&&"\r"!=n?("["==n?ea=!0:"]"==n&&(ea=!1),v+=n):M("Invalid code point in host/hostname: "+
n);else if(this.i=b.call(this,v),v="",y="port","hostname"==F)break a;break;case "port":if(/[0-9]/.test(n))v+=n;else if(void 0==n||"/"==n||"\\"==n||"?"==n||"#"==n||F){""!=v&&(v=parseInt(v,10),v!=l[this.g]&&(this.m=v+""),v="");if(F)break a;y="relative path start";continue}else"\t"==n||"\n"==n||"\r"==n?M("Invalid code point in port: "+n):(f.call(this),this.h=!0);break;case "relative path start":"\\"==n&&M("'\\' not allowed in path.");y="relative path";if("/"!=n&&"\\"!=n)continue;break;case "relative path":if(void 0!=
n&&"/"!=n&&"\\"!=n&&(F||"?"!=n&&"#"!=n))"\t"!=n&&"\n"!=n&&"\r"!=n&&(v+=c(n));else{"\\"==n&&M("\\ not allowed in relative path.");if(I=m[v.toLowerCase()])v=I;".."==v?(this.j.pop(),"/"!=n&&"\\"!=n&&this.j.push("")):"."==v&&"/"!=n&&"\\"!=n?this.j.push(""):"."!=v&&("file"==this.g&&0==this.j.length&&2==v.length&&q.test(v[0])&&"|"==v[1]&&(v=v[0]+":"),this.j.push(v));v="";"?"==n?(this.o="?",y="query"):"#"==n&&(this.u="#",y="fragment")}break;case "query":F||"#"!=n?void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.o+=
d(n)):(this.u="#",y="fragment");break;case "fragment":void 0!=n&&"\t"!=n&&"\n"!=n&&"\r"!=n&&(this.u+=n)}W++}}function f(){this.s=this.pa=this.g="";this.f=null;this.m=this.i="";this.j=[];this.u=this.o="";this.A=this.h=!1}function g(t,F){void 0===F||F instanceof g||(F=new g(String(F)));this.a=t;f.call(this);e.call(this,this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,F)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(t){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var m=Object.create(null);m["%2e"]=".";m[".%2e"]="..";m["%2e."]="..";m["%2e%2e"]="..";var q=/[a-zA-Z]/,H=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.h)return this.a;var t="";if(""!=this.s||null!=this.f)t=this.s+(null!=this.f?":"+this.f:"")+"@";return this.protocol+(this.A?"//"+t+this.host:"")+this.pathname+this.o+this.u},set href(t){f.call(this);e.call(this,t)},get protocol(){return this.g+
":"},set protocol(t){this.h||e.call(this,t+":","scheme start")},get host(){return this.h?"":this.m?this.i+":"+this.m:this.i},set host(t){!this.h&&this.A&&e.call(this,t,"host")},get hostname(){return this.i},set hostname(t){!this.h&&this.A&&e.call(this,t,"hostname")},get port(){return this.m},set port(t){!this.h&&this.A&&e.call(this,t,"port")},get pathname(){return this.h?"":this.A?"/"+this.j.join("/"):this.pa},set pathname(t){!this.h&&this.A&&(this.j=[],e.call(this,t,"relative path start"))},get search(){return this.h||
!this.o||"?"==this.o?"":this.o},set search(t){!this.h&&this.A&&(this.o="?","?"==t[0]&&(t=t.slice(1)),e.call(this,t,"query"))},get hash(){return this.h||!this.u||"#"==this.u?"":this.u},set hash(t){this.h||(t?(this.u="#","#"==t[0]&&(t=t.slice(1)),e.call(this,t,"fragment")):this.u="")},get origin(){var t;if(this.h||!this.g)return"";switch(this.g){case "data":case "file":case "javascript":case "mailto":return"null"}return(t=this.host)?this.g+"://"+t:""}};var C=a.URL;C&&(g.createObjectURL=function(t){return C.createObjectURL.apply(C,
arguments)},g.revokeObjectURL=function(t){C.revokeObjectURL(t)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var bi=document.createElement("style");bi.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var ci=document.querySelector("head");ci.insertBefore(bi,ci.firstChild);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var di=window.customElements,ei=!1,fi=null;di.polyfillWrapFlushCallback&&di.polyfillWrapFlushCallback(function(a){fi=a;ei&&a()});function gi(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);fi&&fi();ei=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",gi),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",gi);gi()})):gi();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

;!function(l,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var i=a();for(var t in i)("object"==typeof exports?exports:l)[t]=i[t]}}(this,function(){return t={},c.m=i={"./src/clr-icons-api.ts":
/*!******************************!*\
  !*** ./src/clr-icons-api.ts ***!
  \******************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ClarityIconsApi=void 0;var t=i(/*! ./utils/shape-template-observer */"./src/utils/shape-template-observer.ts"),c={},e=(Object.defineProperty(r,"instance",{get:function(){return r.singleInstance||(r.singleInstance=new r),r.singleInstance},enumerable:!1,configurable:!0}),r.prototype.validateName=function(l){if(0===l.length)throw new Error("Shape name or alias must be a non-empty string!");if(/\s/.test(l))throw new Error("Shape name or alias must not contain any whitespace characters!");return!0},r.prototype.normalizeShapeName=function(l){return l.toLowerCase()},r.prototype.setIconTemplate=function(l,a){var i=a.trim();this.validateName(l)&&(l=this.normalizeShapeName(l),c[l]&&delete c[l],c[l]=i,t.ShapeTemplateObserver.instance.emitChanges(l,i))},r.prototype.setIconAliases=function(l,a,i){for(var t=0,c=i;t<c.length;t++){var e=c[t];this.validateName(e)&&Object.defineProperty(l,e,{get:function(){return l[a]},enumerable:!0,configurable:!0})}},r.prototype.add=function(l){if("object"!=typeof l)throw new Error('The argument must be an object literal passed in the following pattern:\n                { "shape-name": "shape-template" }');for(var a in l)l.hasOwnProperty(a)&&this.setIconTemplate(a,l[a])},r.prototype.has=function(l){return!!c[this.normalizeShapeName(l)]},r.prototype.get=function(l){if(!l)return c;if("string"!=typeof l)throw new TypeError("Only string argument is allowed in this method.");return c[this.normalizeShapeName(l)]},r.prototype.alias=function(l){if("object"!=typeof l)throw new Error('The argument must be an object literal passed in the following pattern:\n                { "shape-name": ["alias-name", ...] }');for(var a in l)if(l.hasOwnProperty(a)){if(!c.hasOwnProperty(a))throw new Error('An icon "'+a+"\" you are trying to set aliases to doesn't exist in the Clarity Icons sets!");this.setIconAliases(c,a,l[a])}},r);function r(){}a.ClarityIconsApi=e},"./src/clr-icons-element.ts":
/*!**********************************!*\
  !*** ./src/clr-icons-element.ts ***!
  \**********************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ClarityIconElement=void 0;var e=i(/*! ./clr-icons-api */"./src/clr-icons-api.ts"),r=i(/*! ./utils/shape-template-observer */"./src/utils/shape-template-observer.ts"),t=0,c=document.createElement("span");c.className="is-off-screen";var h=function(){return HTMLElement.apply(this,arguments)};function s(){var l=h.apply(this,arguments);return l.clrIconUniqId="_clr_icon_"+t,t++,l}"object"==typeof Reflect&&(h=function(){return Reflect.construct(HTMLElement,arguments,this.constructor)}),(a.ClarityIconElement=s).observedAttributes=["shape","size","title"],((s.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:s}})).constructor=s).prototype._appendCustomTitle=function(){var l=c.cloneNode(!1);l.id=this.clrIconUniqId,l.textContent=this.currentTitleAttrVal,this.appendChild(l)},s.prototype._setIconSize=function(l){!Number(l)||Number(l)<0?(this.style.width=null,this.style.height=null):(this.style.width=l+"px",this.style.height=l+"px")},s.prototype._normalizeShape=function(l){return l.split(/\s/)[0].toLowerCase()},s.prototype.connectedCallback=function(){var l,a=this;if(this.getAttribute("role")||this.setAttribute("role","none"),this.hasAttribute("size")&&(l=this.getAttribute("size"),this.currentSizeAttrVal!==l&&(this.currentSizeAttrVal=l,this._setIconSize(l))),this.hasAttribute("shape")){var i=this._normalizeShape(this.getAttribute("shape"));if(this._shapeTemplateSubscription=r.ShapeTemplateObserver.instance.subscribeTo(i,function(l){a._injectTemplate(l)}),this.currentShapeAttrVal=i,!e.ClarityIconsApi.instance.has(this.currentShapeAttrVal))return void this._injectErrorTemplate();var t=e.ClarityIconsApi.instance.get(this.currentShapeAttrVal);if(t===this.currentShapeTemplate)return;this.currentShapeTemplate=t}if(this.hasAttribute("title")){var c=this.getAttribute("title");if(this.currentTitleAttrVal!==c&&(this.currentTitleAttrVal=c),!this.currentShapeAttrVal)return}this._injectTemplate()},s.prototype.attributeChangedCallback=function(l,a,i){var t=this;if("size"===l&&this._setIconSize(i),"shape"===l){if(this.currentShapeAttrVal=this._normalizeShape(i),this._shapeTemplateSubscription&&(this._shapeTemplateSubscription(),this._shapeTemplateSubscription=r.ShapeTemplateObserver.instance.subscribeTo(this.currentShapeAttrVal,function(l){t._injectTemplate(l)})),!e.ClarityIconsApi.instance.has(this.currentShapeAttrVal))return void this._injectErrorTemplate();this.currentShapeTemplate=e.ClarityIconsApi.instance.get(this.currentShapeAttrVal)}"title"===l&&(this.currentTitleAttrVal=i,!this.currentShapeAttrVal)||this._injectTemplate()},s.prototype.disconnectedCallback=function(){this._shapeTemplateSubscription&&this._shapeTemplateSubscription()},s.prototype._setAriaLabelledBy=function(){var l=this.getAttribute("aria-labelledby"),a=this.querySelector("svg"),i=a||this;l?l&&l.indexOf(this.clrIconUniqId)<0&&i.setAttribute("aria-labelledby",l+" "+this.clrIconUniqId):i.setAttribute("aria-labelledby",this.clrIconUniqId)},s.prototype._injectTemplate=function(l){l&&l!==this.currentShapeTemplate&&(this.currentShapeTemplate=l),this.innerHTML=this.currentShapeTemplate,this.currentTitleAttrVal&&(this._setAriaLabelledBy(),this._appendCustomTitle())},s.prototype._injectErrorTemplate=function(){this.currentShapeTemplate=e.ClarityIconsApi.instance.get("error"),this._injectTemplate()}},"./src/clr-icons-sfx.ts":
/*!******************************!*\
  !*** ./src/clr-icons-sfx.ts ***!
  \******************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ClarityIcons=void 0;var t=i(/*! ./index */"./src/index.ts");Object.defineProperty(a,"ClarityIcons",{enumerable:!0,get:function(){return t.ClarityIcons}});var c=i(/*! ./shapes/all-shapes */"./src/shapes/all-shapes.ts");t.ClarityIcons.add(c.AllShapes)},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ClarityIcons=void 0;var t=i(/*! ./clr-icons-api */"./src/clr-icons-api.ts"),c=i(/*! ./clr-icons-element */"./src/clr-icons-element.ts"),e=i(/*! ./shapes/core-shapes */"./src/shapes/core-shapes.ts"),r=t.ClarityIconsApi.instance;(a.ClarityIcons=r).add(e.CoreShapes),"undefined"!=typeof window&&(window.hasOwnProperty("ClarityIcons")||(window.ClarityIcons=r),customElements.define("clr-icon",c.ClarityIconElement))},"./src/shapes/all-shapes.ts":
/*!**********************************!*\
  !*** ./src/shapes/all-shapes.ts ***!
  \**********************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AllShapes=void 0;var t=i(/*! ./chart-shapes */"./src/shapes/chart-shapes.ts"),c=i(/*! ./commerce-shapes */"./src/shapes/commerce-shapes.ts"),e=i(/*! ./core-shapes */"./src/shapes/core-shapes.ts"),r=i(/*! ./essential-shapes */"./src/shapes/essential-shapes.ts"),h=i(/*! ./media-shapes */"./src/shapes/media-shapes.ts"),s=i(/*! ./social-shapes */"./src/shapes/social-shapes.ts"),d=i(/*! ./technology-shapes */"./src/shapes/technology-shapes.ts"),n=i(/*! ./text-edit-shapes */"./src/shapes/text-edit-shapes.ts"),o=i(/*! ./travel-shapes */"./src/shapes/travel-shapes.ts"),p=[e.CoreShapes,c.CommerceShapes,r.EssentialShapes,h.MediaShapes,s.SocialShapes,d.TechnologyShapes,o.TravelShapes,t.ChartShapes,n.TextEditShapes],u={};a.AllShapes=u;for(var H=0,V=p;H<V.length;H++){var A=V[H];for(var Z in A)A.hasOwnProperty(Z)&&(u[Z]=A[Z])}"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(u)},"./src/shapes/chart-shapes.ts":
/*!************************************!*\
  !*** ./src/shapes/chart-shapes.ts ***!
  \************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ChartShapes=a.ClrShapeBellCurve=a.ClrShapeTickChart=a.ClrShapeScatterPlot=a.ClrShapePieChart=a.ClrShapeLineChart=a.ClrShapeHeatMap=a.ClrShapeGridChart=a.ClrShapeCurveChart=a.ClrShapeCloudChart=a.ClrShapeBubbleChart=a.ClrShapeBoxPlot=a.ClrShapeBarChart=a.ClrShapeAxisChart=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeAxisChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"/>\n  <path class="clr-i-outline clr-i-outline-path-2" d="M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 L 6.007 26.731 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 L 6.007 26.731 Z"/>\n  <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 Z"/>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 L 6.007 26.731 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 6.007 26.731 L 27.73 26.73 C 28.49 26.67 28.91 25.8 28.47 25.17 C 28.3 24.92 28.03 24.76 27.73 24.74 L 8.001 24.736 L 8.01 11.01 C 8.01 10.23 7.17 9.75 6.5 10.14 C 6.19 10.31 6 10.65 6 11.01 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>'),a.ClrShapeBarChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"></path>\n  <path d="M 7 10 L 13 10 L 13 26 L 11.4 26 L 11.4 11.6 L 8.6 11.6 L 8.6 26 L 7 26 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path d="M 15 19 L 21 19 L 21 26 L 19.4 26 L 19.4 20.6 L 16.6 20.6 L 16.6 26 L 15 26 Z" class="clr-i-outline clr-i-outline-path-3"></path>\n  <path d="M 23 16 L 29 16 L 29 26 L 27.4 26 L 27.4 17.6 L 24.6 17.6 L 24.6 26 L 23 26 Z" class="clr-i-outline clr-i-outline-path-4"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 32 5 C 33.105 5 34 5.895 34 7 Z M 7 26 L 13 26 L 13 10 L 7 10 Z M 15 26 L 21 26 L 21 19 L 15 19 Z M 23 26 L 29 26 L 29 16 L 23 16 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.105 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 7 10 L 13 10 L 13 26 L 11.4 26 L 11.4 11.6 L 8.6 11.6 L 8.6 26 L 7 26 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <path d="M 15 19 L 21 19 L 21 26 L 19.4 26 L 19.4 20.6 L 16.6 20.6 L 16.6 26 L 15 26 Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></path>\n  <path d="M 23 16 L 29 16 L 29 26 L 27.4 26 L 27.4 17.6 L 24.6 17.6 L 24.6 26 L 23 26 Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.625 13.429 32.895 13.036 34 12.34 Z M 7 26 L 13 26 L 13 10 L 7 10 Z M 15 26 L 21 26 L 21 19 L 15 19 Z M 23 26 L 29 26 L 29 16 L 23 16 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 7 10 L 13 10 L 13 26 L 11.4 26 L 11.4 11.6 L 8.6 11.6 L 8.6 26 L 7 26 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path d="M 15 19 L 21 19 L 21 26 L 19.4 26 L 19.4 20.6 L 16.6 20.6 L 16.6 26 L 15 26 Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></path>\n  <path d="M 23 16 L 29 16 L 29 26 L 27.4 26 L 27.4 17.6 L 24.6 17.6 L 24.6 26 L 23 26 Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 7 26 L 13 26 L 13 10 L 7 10 Z M 15 26 L 21 26 L 21 19 L 15 19 Z M 23 26 L 29 26 L 29 16 L 23 16 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeBoxPlot=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"></path>\n  <path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path d="M 19 24 L 29 24 L 29 10 L 19 10 L 19 24 Z M 20.6 11.6 L 27.4 11.6 L 27.4 17.2 L 20.6 17.2 L 20.6 11.6 Z M 27.4 22.4 L 20.6 22.4 L 20.6 18.8 L 27.4 18.8 L 27.4 22.4 Z" class="clr-i-outline clr-i-outline-path-3"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 32 5 C 33.105 5 34 5.895 34 7 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 19 24 L 29 24 L 29 10 L 19 10 Z M 21 12 L 27 12 L 27 17 L 21 17 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.105 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <path d="M 19 10 L 23.728 10 C 24.105 10.596 24.564 11.135 25.09 11.6 L 20.6 11.6 L 20.6 17.2 L 27.4 17.2 L 27.4 12.987 C 27.909 13.177 28.445 13.313 29 13.387 L 29 24 L 19 24 Z M 27.4 18.8 L 20.6 18.8 L 20.6 22.4 L 27.4 22.4 Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 22.57 5 C 22.312 6.817 22.732 8.566 23.633 10 L 19 10 L 19 24 L 29 24 L 29 13.427 C 29.103 13.44 29.206 13.451 29.31 13.46 L 30.32 13.48 C 31.625 13.429 32.895 13.036 34 12.34 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 21 12 L 25.472 12 C 25.94 12.352 26.452 12.65 27 12.885 L 27 17 L 21 17 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path d="M 29 24 L 19 24 L 19 15.345 C 19.021 15.348 20.6 15.36 20.6 15.36 L 20.6 17.2 L 27.4 17.2 L 27.4 15.36 L 29 15.357 L 29 24 Z M 27.4 18.8 L 20.6 18.8 L 20.6 22.4 L 27.4 22.4 L 27.4 18.8 Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 19.028 10 L 19 10 L 19 10.048 L 17.625 12.395 C 16.807 13.583 17.571 15.197 19 15.345 L 19 24 L 29 24 L 29 15.357 L 34 15.357 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 27 17 L 21 17 L 21 15.357 L 27 15.357 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeBubbleChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"></path>\n  <path d="M 29 18 C 29 19.657 27.657 21 26 21 C 24.343 21 23 19.657 23 18 C 23 16.343 24.343 15 26 15 C 27.657 15 29 16.343 29 18 Z M 26 16.6 C 25.227 16.6 24.6 17.227 24.6 18 C 24.6 18.773 25.227 19.4 26 19.4 C 26.773 19.4 27.4 18.773 27.4 18 C 27.4 17.227 26.773 16.6 26 16.6 Z" class="clr-i-outline clr-i-outline-path-2" rx="3"></path>\n  <path d="M 15 14 C 15 16.209 13.209 18 11 18 C 8.791 18 7 16.209 7 14 C 7 11.791 8.791 10 11 10 C 13.209 10 15 11.791 15 14 Z M 11 11.6 C 9.675 11.6 8.6 12.675 8.6 14 C 8.6 15.325 9.675 16.4 11 16.4 C 12.325 16.4 13.4 15.325 13.4 14 C 13.4 12.675 12.325 11.6 11 11.6 Z" class="clr-i-outline clr-i-outline-path-3" rx="3"></path>\n  <path d="M 21 23 C 21 24.657 19.657 26 18 26 C 16.343 26 15 24.657 15 23 C 15 21.343 16.343 20 18 20 C 19.657 20 21 21.343 21 23 Z M 18 21.6 C 17.227 21.6 16.6 22.227 16.6 23 C 16.6 23.773 17.227 24.4 18 24.4 C 18.773 24.4 19.4 23.773 19.4 23 C 19.4 22.227 18.773 21.6 18 21.6 Z" class="clr-i-outline clr-i-outline-path-4" rx="3"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 11 10 C 8.791 10 7 11.791 7 14 C 7 16.209 8.791 18 11 18 C 13.209 18 15 16.209 15 14 C 15 11.791 13.209 10 11 10 Z M 26 15 C 24.343 15 23 16.343 23 18 C 23 19.657 24.343 21 26 21 C 27.657 21 29 19.657 29 18 C 29 16.343 27.657 15 26 15 Z M 18 20 C 16.343 20 15 21.343 15 23 C 15 24.657 16.343 26 18 26 C 19.657 26 21 24.657 21 23 C 21 21.343 19.657 20 18 20 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 29 18 C 29 19.657 27.657 21 26 21 C 24.343 21 23 19.657 23 18 C 23 16.343 24.343 15 26 15 C 27.657 15 29 16.343 29 18 Z M 26 16.6 C 25.227 16.6 24.6 17.227 24.6 18 C 24.6 18.773 25.227 19.4 26 19.4 C 26.773 19.4 27.4 18.773 27.4 18 C 27.4 17.227 26.773 16.6 26 16.6 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" rx="3"></path>\n  <path d="M 15 14 C 15 16.209 13.209 18 11 18 C 8.791 18 7 16.209 7 14 C 7 11.791 8.791 10 11 10 C 13.209 10 15 11.791 15 14 Z M 11 11.6 C 9.675 11.6 8.6 12.675 8.6 14 C 8.6 15.325 9.675 16.4 11 16.4 C 12.325 16.4 13.4 15.325 13.4 14 C 13.4 12.675 12.325 11.6 11 11.6 Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" rx="3"></path>\n  <path d="M 21 23 C 21 24.657 19.657 26 18 26 C 16.343 26 15 24.657 15 23 C 15 21.343 16.343 20 18 20 C 19.657 20 21 21.343 21 23 Z M 18 21.6 C 17.227 21.6 16.6 22.227 16.6 23 C 16.6 23.773 17.227 24.4 18 24.4 C 18.773 24.4 19.4 23.773 19.4 23 C 19.4 22.227 18.773 21.6 18 21.6 Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" rx="3"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 11 10 C 8.791 10 7 11.791 7 14 C 7 16.209 8.791 18 11 18 C 13.209 18 15 16.209 15 14 C 15 11.791 13.209 10 11 10 Z M 26 15 C 24.343 15 23 16.343 23 18 C 23 19.657 24.343 21 26 21 C 27.657 21 29 19.657 29 18 C 29 16.343 27.657 15 26 15 Z M 18 20 C 16.343 20 15 21.343 15 23 C 15 24.657 16.343 26 18 26 C 19.657 26 21 24.657 21 23 C 21 21.343 19.657 20 18 20 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 29 18 C 29 19.657 27.657 21 26 21 C 24.343 21 23 19.657 23 18 C 23 16.343 24.343 15 26 15 C 27.657 15 29 16.343 29 18 Z M 26 16.6 C 25.227 16.6 24.6 17.227 24.6 18 C 24.6 18.773 25.227 19.4 26 19.4 C 26.773 19.4 27.4 18.773 27.4 18 C 27.4 17.227 26.773 16.6 26 16.6 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" rx="3"></path>\n  <path d="M 15 14 C 15 16.209 13.209 18 11 18 C 8.791 18 7 16.209 7 14 C 7 11.791 8.791 10 11 10 C 13.209 10 15 11.791 15 14 Z M 11 11.6 C 9.675 11.6 8.6 12.675 8.6 14 C 8.6 15.325 9.675 16.4 11 16.4 C 12.325 16.4 13.4 15.325 13.4 14 C 13.4 12.675 12.325 11.6 11 11.6 Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" rx="3"></path>\n  <path d="M 21 23 C 21 24.657 19.657 26 18 26 C 16.343 26 15 24.657 15 23 C 15 21.343 16.343 20 18 20 C 19.657 20 21 21.343 21 23 Z M 18 21.6 C 17.227 21.6 16.6 22.227 16.6 23 C 16.6 23.773 17.227 24.4 18 24.4 C 18.773 24.4 19.4 23.773 19.4 23 C 19.4 22.227 18.773 21.6 18 21.6 Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" rx="3"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 24.579 15.357 C 23.639 15.863 23 16.857 23 18 C 23 19.657 24.343 21 26 21 C 27.657 21 29 19.657 29 18 C 29 16.857 28.361 15.863 27.421 15.357 L 34 15.357 Z M 11 10 C 8.791 10 7 11.791 7 14 C 7 16.209 8.791 18 11 18 C 13.209 18 15 16.209 15 14 C 15 11.791 13.209 10 11 10 Z M 18 20 C 16.343 20 15 21.343 15 23 C 15 24.657 16.343 26 18 26 C 19.657 26 21 24.657 21 23 C 21 21.343 19.657 20 18 20 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeCloudChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"></path>\n  <path d="M 20.971 11.243 C 23.314 13.586 22.364 18.335 18.849 21.849 C 15.334 25.364 10.586 26.314 8.243 23.97 C 5.899 21.627 6.849 16.878 10.364 13.364 C 13.879 9.849 18.628 8.9 20.971 11.243 Z M 11.636 14.637 C 8.824 17.449 7.875 21.058 9.515 22.698 C 11.155 24.338 14.764 23.389 17.576 20.577 C 20.388 17.765 21.338 14.156 19.697 12.516 C 18.057 10.876 14.448 11.825 11.636 14.637 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path d="M 28 22 C 28 23.657 26.657 25 25 25 C 23.343 25 22 23.657 22 22 C 22 20.343 23.343 19 25 19 C 26.657 19 28 20.343 28 22 Z M 25 20.6 C 24.227 20.6 23.6 21.227 23.6 22 C 23.6 22.773 24.227 23.4 25 23.4 C 25.773 23.4 26.4 22.773 26.4 22 C 26.4 21.227 25.773 20.6 25 20.6 Z" class="clr-i-outline clr-i-outline-path-3" x="7"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 32 5 C 33.105 5 34 5.895 34 7 Z M 10.364 13.364 C 6.849 16.878 5.899 21.627 8.243 23.97 C 10.586 26.314 15.334 25.364 18.849 21.849 C 22.364 18.335 23.314 13.586 20.971 11.243 C 18.628 8.9 13.879 9.849 10.364 13.364 Z M 25 19 C 23.343 19 22 20.343 22 22 C 22 23.657 23.343 25 25 25 C 26.657 25 28 23.657 28 22 C 28 20.343 26.657 19 25 19 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.105 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 20.971 11.243 C 23.314 13.586 22.364 18.335 18.849 21.849 C 15.334 25.364 10.586 26.314 8.243 23.97 C 5.899 21.627 6.849 16.878 10.364 13.364 C 13.879 9.849 18.628 8.9 20.971 11.243 Z M 11.636 14.637 C 8.824 17.449 7.875 21.058 9.515 22.698 C 11.155 24.338 14.764 23.389 17.576 20.577 C 20.388 17.765 21.338 14.156 19.697 12.516 C 18.057 10.876 14.448 11.825 11.636 14.637 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <path d="M 28 22 C 28 23.657 26.657 25 25 25 C 23.343 25 22 23.657 22 22 C 22 20.343 23.343 19 25 19 C 26.657 19 28 20.343 28 22 Z M 25 20.6 C 24.226 20.6 23.6 21.226 23.6 22 C 23.6 22.773 24.226 23.4 25 23.4 C 25.773 23.4 26.4 22.773 26.4 22 C 26.4 21.226 25.773 20.6 25 20.6 Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" x="7"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.625 13.429 32.895 13.036 34 12.34 Z M 10.364 13.364 C 6.849 16.878 5.899 21.627 8.243 23.97 C 10.586 26.314 15.334 25.364 18.849 21.849 C 22.364 18.335 23.314 13.586 20.971 11.243 C 18.628 8.9 13.879 9.849 10.364 13.364 Z M 25 19 C 23.343 19 22 20.343 22 22 C 22 23.657 23.343 25 25 25 C 26.657 25 28 23.657 28 22 C 28 20.343 26.657 19 25 19 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 18.849 21.849 C 15.334 25.364 10.586 26.314 8.243 23.97 C 5.899 21.627 6.849 16.878 10.364 13.364 C 13.049 10.679 16.453 9.492 18.956 10.124 L 18.008 11.741 C 16.18 11.518 13.695 12.578 11.636 14.637 C 8.824 17.449 7.875 21.058 9.515 22.698 C 11.155 24.338 14.764 23.389 17.576 20.577 C 19.228 18.925 20.237 16.998 20.456 15.357 L 22.22 15.357 C 22.006 17.477 20.838 19.861 18.849 21.849 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path d="M 28 22 C 28 23.657 26.657 25 25 25 C 23.343 25 22 23.657 22 22 C 22 20.343 23.343 19 25 19 C 26.657 19 28 20.343 28 22 Z M 25 20.6 C 24.226 20.6 23.6 21.226 23.6 22 C 23.6 22.773 24.226 23.4 25 23.4 C 25.773 23.4 26.4 22.773 26.4 22 C 26.4 21.226 25.773 20.6 25 20.6 Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" x="7"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 18.956 10.124 C 16.453 9.492 13.049 10.679 10.364 13.364 C 6.849 16.878 5.899 21.627 8.243 23.97 C 10.586 26.314 15.334 25.364 18.849 21.849 C 20.838 19.861 22.006 17.477 22.22 15.357 L 34 15.357 Z M 25 19 C 23.343 19 22 20.343 22 22 C 22 23.657 23.343 25 25 25 C 26.657 25 28 23.657 28 22 C 28 20.343 26.657 19 25 19 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeCurveChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"></path>\n  <path d="M 7 11.8 C 6.558 11.8 6.2 11.442 6.2 11 C 6.2 10.558 6.558 10.2 7 10.2 L 13 10.2 C 15.404 10.2 16.368 11.907 17.653 16.478 C 17.695 16.628 17.744 16.803 17.835 17.129 C 17.909 17.392 17.964 17.588 18.019 17.78 C 19.332 22.375 20.549 24.2 23 24.2 L 29 24.2 C 29.442 24.2 29.8 24.558 29.8 25 C 29.8 25.442 29.442 25.8 29 25.8 L 23 25.8 C 19.535 25.8 17.981 23.469 16.481 18.22 C 16.425 18.025 16.369 17.826 16.295 17.56 C 16.203 17.234 16.154 17.06 16.113 16.911 C 15.043 13.105 14.305 11.8 13 11.8 L 7 11.8 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 13 12 C 14.817 12 15.674 13.499 17.039 18.275 C 17.813 20.984 18.201 22.118 18.882 23.309 C 19.87 25.038 21.205 26 23 26 L 29 26 C 29.552 26 30 25.552 30 25 C 30 24.448 29.552 24 29 24 L 23 24 C 21.183 24 20.326 22.501 18.962 17.725 C 18.188 15.016 17.799 13.882 17.118 12.691 C 16.13 10.962 14.795 10 13 10 L 7 10 C 6.448 10 6 10.448 6 11 C 6 11.552 6.448 12 7 12 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 7 11.8 C 6.558 11.8 6.2 11.442 6.2 11 C 6.2 10.558 6.558 10.2 7 10.2 L 13 10.2 C 15.404 10.2 16.368 11.907 17.653 16.478 C 17.695 16.628 17.744 16.803 17.835 17.129 C 17.909 17.392 17.964 17.588 18.019 17.78 C 19.332 22.375 20.549 24.2 23 24.2 L 29 24.2 C 29.442 24.2 29.8 24.558 29.8 25 C 29.8 25.442 29.442 25.8 29 25.8 L 23 25.8 C 19.535 25.8 17.981 23.469 16.481 18.22 C 16.425 18.025 16.369 17.826 16.295 17.56 C 16.203 17.234 16.154 17.06 16.113 16.911 C 15.043 13.105 14.305 11.8 13 11.8 L 7 11.8 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 13 12 C 14.817 12 15.674 13.499 17.039 18.275 C 17.813 20.984 18.201 22.118 18.882 23.309 C 19.87 25.038 21.205 26 23 26 L 29 26 C 29.552 26 30 25.552 30 25 C 30 24.448 29.552 24 29 24 L 23 24 C 21.183 24 20.326 22.501 18.962 17.725 C 18.188 15.016 17.799 13.882 17.118 12.691 C 16.13 10.962 14.795 10 13 10 L 7 10 C 6.448 10 6 10.448 6 11 C 6 11.552 6.448 12 7 12 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 7 11.8 C 6.558 11.8 6.2 11.442 6.2 11 C 6.2 10.558 6.558 10.2 7 10.2 L 13 10.2 C 15.404 10.2 16.368 11.907 17.653 16.478 C 17.695 16.628 17.744 16.803 17.835 17.129 C 17.909 17.392 17.964 17.588 18.019 17.78 C 19.332 22.375 20.549 24.2 23 24.2 L 29 24.2 C 29.442 24.2 29.8 24.558 29.8 25 C 29.8 25.442 29.442 25.8 29 25.8 L 23 25.8 C 19.535 25.8 17.981 23.469 16.481 18.22 C 16.425 18.025 16.369 17.826 16.295 17.56 C 16.203 17.234 16.154 17.06 16.113 16.911 C 15.043 13.105 14.305 11.8 13 11.8 L 7 11.8 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 17.476 12.612 17.379 12.843 17.33 13.077 C 17.262 12.948 17.192 12.82 17.118 12.691 C 16.13 10.962 14.795 10 13 10 L 7 10 C 6.448 10 6 10.448 6 11 C 6 11.552 6.448 12 7 12 L 13 12 C 14.817 12 15.674 13.499 17.039 18.275 C 17.813 20.984 18.201 22.118 18.882 23.309 C 19.87 25.038 21.205 26 23 26 L 29 26 C 29.552 26 30 25.552 30 25 C 30 24.448 29.552 24 29 24 L 23 24 C 21.183 24 20.326 22.501 18.962 17.725 C 18.64 16.598 18.385 15.744 18.147 15.044 C 18.407 15.215 18.717 15.326 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeGridChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z"/>\n  <path class="clr-i-outline clr-i-outline-path-2" d="M32,17H21a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,17ZM21,8v7H32V8Z"/>\n  <path class="clr-i-outline clr-i-outline-path-3" d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z"/>\n  <path class="clr-i-outline clr-i-outline-path-4" d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z"/>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 15 17 L 4 17 C 2.895 17 2 16.105 2 15 L 2 8 C 2 6.895 2.895 6 4 6 L 15 6 C 16.105 6 17 6.895 17 8 L 17 15 C 17 16.105 16.105 17 15 17 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-2" d="M 32 17 L 21 17 C 19.895 17 19 16.105 19 15 L 19 8 C 19 6.895 19.895 6 21 6 L 32 6 C 33.105 6 34 6.895 34 8 L 34 15 C 34 16.105 33.105 17 32 17 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-3" d="M 15 30 L 4 30 C 2.895 30 2 29.105 2 28 L 2 21 C 2 19.895 2.895 19 4 19 L 15 19 C 16.105 19 17 19.895 17 21 L 17 28 C 17 29.105 16.105 30 15 30 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-4" d="M 32 30 L 21 30 C 19.895 30 19 29.105 19 28 L 19 21 C 19 19.895 19.895 19 21 19 L 32 19 C 33.105 19 34 19.895 34 21 L 34 28 C 34 29.105 33.105 30 32 30 Z"/>\n  <path class="clr-i-outline-alerted clr-i-outline-path-1-alerted" d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z"/>\n  <path class="clr-i-outline-alerted clr-i-outline-path-2-alerted" d="M 32 17 L 21 17 C 20.014 17 19.195 16.287 19.03 15.348 C 19.041 15.349 19.053 15.35 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 33.968 15.357 C 33.8 16.292 32.983 17 32 17 Z M 19 8 C 19 6.895 19.895 6 21 6 L 21.372 6 L 19 10.048 Z"/>\n  <path class="clr-i-outline-alerted clr-i-outline-path-3-alerted" d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z"/>\n  <path class="clr-i-outline-alerted clr-i-outline-path-4-alerted" d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 15 17 L 4 17 C 2.895 17 2 16.105 2 15 L 2 8 C 2 6.895 2.895 6 4 6 L 15 6 C 16.105 6 17 6.895 17 8 L 17 15 C 17 16.105 16.105 17 15 17 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M 32 17 L 21 17 C 20.014 17 19.195 16.287 19.03 15.348 C 19.041 15.349 19.053 15.35 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 33.968 15.357 C 33.8 16.292 32.983 17 32 17 Z M 19 8 C 19 6.895 19.895 6 21 6 L 21.372 6 L 19 10.048 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M 15 30 L 4 30 C 2.895 30 2 29.105 2 28 L 2 21 C 2 19.895 2.895 19 4 19 L 15 19 C 16.105 19 17 19.895 17 21 L 17 28 C 17 29.105 16.105 30 15 30 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M 32 30 L 21 30 C 19.895 30 19 29.105 19 28 L 19 21 C 19 19.895 19.895 19 21 19 L 32 19 C 33.105 19 34 19.895 34 21 L 34 28 C 34 29.105 33.105 30 32 30 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M 32 17 L 21 17 C 19.895 17 19 16.105 19 15 L 19 8 C 19 6.895 19.895 6 21 6 L 22.59 6 C 22.59 6.019 22.59 6.037 22.59 6.056 C 22.59 6.729 22.68 7.381 22.848 8 L 21 8 L 21 15 L 32 15 L 32 13.175 C 32.717 12.972 33.389 12.664 34 12.269 L 34 15 C 34 16.105 33.105 17 32 17 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z"/>\n  <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 15 17 L 4 17 C 2.895 17 2 16.105 2 15 L 2 8 C 2 6.895 2.895 6 4 6 L 15 6 C 16.105 6 17 6.895 17 8 L 17 15 C 17 16.105 16.105 17 15 17 Z"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M 32 17 L 21 17 C 19.895 17 19 16.105 19 15 L 19 8 C 19 6.895 19.895 6 21 6 L 22.59 6 C 22.59 6.019 22.59 6.037 22.59 6.056 C 22.59 10.141 25.901 13.452 29.986 13.452 C 31.466 13.452 32.844 13.018 34 12.269 L 34 15 C 34 16.105 33.105 17 32 17 Z"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M 15 30 L 4 30 C 2.895 30 2 29.105 2 28 L 2 21 C 2 19.895 2.895 19 4 19 L 15 19 C 16.105 19 17 19.895 17 21 L 17 28 C 17 29.105 16.105 30 15 30 Z"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-4--badged" d="M 32 30 L 21 30 C 19.895 30 19 29.105 19 28 L 19 21 C 19 19.895 19.895 19 21 19 L 32 19 C 33.105 19 34 19.895 34 21 L 34 28 C 34 29.105 33.105 30 32 30 Z"/>\n  <circle class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeHeatMap=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"></path>\n  <path d="M 8 10 L 28 10 L 28 26 L 8 26 Z M 9.6 24 L 14.1 24 L 14.1 18.8 L 9.6 18.8 Z M 14.1 11.6 L 9.6 11.6 L 9.6 17.2 L 14.1 17.2 Z M 26 24 L 26 18.8 L 21.9 18.8 L 21.9 24 Z M 26 11.6 L 21.9 11.6 L 21.9 17.2 L 26 17.2 Z M 15.7 11.6 L 15.7 17.2 L 20.3 17.2 L 20.3 11.6 Z M 15.7 24 L 20.3 24 L 20.3 18.8 L 15.7 18.8 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 8 10 L 23.728 10 C 24.105 10.596 24.564 11.135 25.09 11.6 L 21.9 11.6 L 21.9 17.2 L 26 17.2 L 26 12.287 C 26.611 12.679 27.284 12.983 28 13.182 L 28 26 L 8 26 Z M 9.6 24 L 14.1 24 L 14.1 18.8 L 9.6 18.8 Z M 14.1 11.6 L 9.6 11.6 L 9.6 17.2 L 14.1 17.2 Z M 26 24 L 26 18.8 L 21.9 18.8 L 21.9 24 Z M 15.7 11.6 L 15.7 17.2 L 20.3 17.2 L 20.3 11.6 Z M 15.7 24 L 20.3 24 L 20.3 18.8 L 15.7 18.8 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-22--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 8 10 L 19.028 10 L 18.091 11.6 L 15.7 11.6 L 15.7 17.2 L 20.3 17.2 L 20.3 15.357 L 21.9 15.357 L 21.9 17.2 L 26 17.2 L 26 15.357 L 28 15.357 L 28 26 L 8 26 Z M 9.6 24 L 14.1 24 L 14.1 18.8 L 9.6 18.8 Z M 14.1 11.6 L 9.6 11.6 L 9.6 17.2 L 14.1 17.2 Z M 26 24 L 26 18.8 L 21.9 18.8 L 21.9 24 Z M 15.7 24 L 20.3 24 L 20.3 18.8 L 15.7 18.8 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-22--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 8 26 L 28 26 L 28 10 L 8 10 Z M 10 19 L 14 19 L 14 24 L 10 24 Z M 22 24 L 22 19 L 26 19 L 26 24 Z M 20 19 L 20 24 L 16 24 L 16 19 Z M 26 17 L 22 17 L 22 12 L 26 12 Z M 20 12 L 20 17 L 16 17 L 16 12 Z M 14 12 L 14 17 L 10 17 L 10 12 Z"></path>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 22.312 6.817 22.732 8.566 23.633 10 L 8 10 L 8 26 L 28 26 L 28 13.232 C 28.421 13.345 28.859 13.422 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 10 19 L 14 19 L 14 24 L 10 24 Z M 22 24 L 22 19 L 26 19 L 26 24 Z M 20 19 L 20 24 L 16 24 L 16 19 Z M 26 17 L 22 17 L 22 12 L 25.584 12 C 25.719 12.1 25.858 12.196 26 12.287 Z M 20 12 L 20 17 L 16 17 L 16 12 Z M 14 12 L 14 17 L 10 17 L 10 12 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-22--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 19.028 10 L 8 10 L 8 26 L 28 26 L 28 15.357 L 34 15.357 Z M 10 19 L 14 19 L 14 24 L 10 24 Z M 22 24 L 22 19 L 26 19 L 26 24 Z M 20 19 L 20 24 L 16 24 L 16 19 Z M 26 17 L 22 17 L 22 15.357 L 26 15.357 Z M 20 17 L 16 17 L 16 12 L 17.856 12 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 20 15.357 Z M 14 12 L 14 17 L 10 17 L 10 12 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-22--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeLineChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"></path>\n  <polygon points="15.62 15.222 9.602 23.968 5.55 20.384 6.61 19.186 9.308 21.572 15.634 12.38 22.384 22.395 29.138 13.47 30.414 14.436 22.308 25.145" class="clr-i-outline clr-i-outline-path-2"></polygon>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 32 5 L 4 5 C 2.896 5 2 5.896 2 7 L 2 29 C 2 30.105 2.896 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.896 33.105 5 32 5 Z M 22.56 25.94 L 15.46 15.36 L 9.12 24.64 L 4.62 20.64 L 6 19.05 L 8.7 21.44 L 15.46 11.56 L 22.65 22.27 L 29.65 13 L 31.35 14.28 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <polygon points="15.62 15.222 9.602 23.968 5.55 20.384 6.61 19.186 9.308 21.572 15.634 12.38 22.384 22.395 29.138 13.47 30.414 14.436 22.308 25.145" class="clr-i-outline--badged clr-i-outline-path-2--badged"></polygon>\n  <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 30.32 13.48 L 31.38 14.28 L 22.56 25.94 L 15.46 15.36 L 9.12 24.64 L 4.62 20.64 L 6 19.05 L 8.7 21.44 L 15.46 11.56 L 22.65 22.27 L 29.31 13.46 C 25.05 13.1 21.969 9.233 22.57 5 L 4 5 C 2.896 5 2 5.896 2 7 L 2 29 C 2 30.105 2.896 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 12.34 C 32.895 13.036 31.626 13.429 30.32 13.48 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 15.62 15.222 L 9.602 23.968 L 5.55 20.384 L 6.61 19.186 L 9.308 21.572 L 15.634 12.38 L 22.384 22.395 L 27.717 15.348 L 29.724 15.348 L 22.308 25.145 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 27.452 15.357 L 22.38 22.06 L 15.63 12 L 9.28 21.28 L 6.75 19.04 L 5.42 20.53 L 9.65 24.28 L 15.61 15.56 L 22.28 25.5 L 29.959 15.357 L 34 15.357 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapePieChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"></path>\n  <path d="M 17 27 C 12.582 27 9 23.418 9 19 C 9 14.582 12.582 11 17 11 L 17 19 L 25 19 C 25 23.418 21.418 27 17 27 Z M 23.247 20.4 L 15.4 20.4 L 15.4 12.802 C 12.64 13.513 10.601 16.018 10.6 19 C 10.6 22.535 13.465 25.4 17 25.4 C 20.054 25.401 22.608 23.261 23.247 20.4 Z" class="clr-i-outline clr-i-outline-path-2"></path>\n  <path d="M 19 9 C 23.418 9 27 12.582 27 17 L 19 17 Z M 25.198 15.4 C 24.62 13.15 22.849 11.38 20.6 10.801 L 20.6 15.4 Z" class="clr-i-outline clr-i-outline-path-3"></path>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 C 32 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 25 19 L 17 19 L 17 11 C 12.582 11 9 14.582 9 19 C 9 23.418 12.582 27 17 27 C 21.418 27 25 23.418 25 19 Z M 19 17 L 27 17 C 27 12.582 23.418 9 19 9 Z"></path>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"></path>\n  <path d="M 17 27 C 12.582 27 9 23.418 9 19 C 9 14.582 12.582 11 17 11 L 17 19 L 25 19 C 25 23.418 21.418 27 17 27 Z M 23.247 20.4 L 15.4 20.4 L 15.4 12.802 C 12.64 13.513 10.601 16.018 10.6 19 C 10.6 22.535 13.465 25.4 17 25.4 C 20.054 25.401 22.608 23.261 23.247 20.4 Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></path>\n  <path d="M 19 9 C 23.418 9 27 12.582 27 17 L 19 17 Z M 25.198 15.4 C 24.62 13.15 22.849 11.38 20.6 10.801 L 20.6 15.4 Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></path>\n  <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 25 19 L 17 19 L 17 11 C 12.582 11 9 14.582 9 19 C 9 23.418 12.582 27 17 27 C 21.418 27 25 23.418 25 19 Z M 19 17 L 27 17 C 27 12.582 23.418 9 19 9 Z"></path>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"></circle>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"></path>\n  <path d="M 17 27 C 12.582 27 9 23.418 9 19 C 9 14.582 12.582 11 17 11 L 17 19 L 25 19 C 25 23.418 21.418 27 17 27 Z M 23.247 20.4 L 15.4 20.4 L 15.4 12.802 C 12.64 13.513 10.601 16.018 10.6 19 C 10.6 22.535 13.465 25.4 17 25.4 C 20.054 25.401 22.608 23.261 23.247 20.4 Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></path>\n  <path d="M 27 17 L 19 17 L 19 15.345 C 19.021 15.348 19.043 15.349 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 26.831 15.357 C 26.942 15.887 27 16.437 27 17 Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></path>\n  <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.807 13.583 17.571 15.197 19 15.345 L 19 17 L 27 17 C 27 16.437 26.942 15.887 26.831 15.357 L 34 15.357 Z M 25 19 L 17 19 L 17 11 C 12.582 11 9 14.582 9 19 C 9 23.418 12.582 27 17 27 C 21.418 27 25 23.418 25 19 Z"></path>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"></path>'),a.ClrShapeScatterPlot=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"/>\n  <path class="clr-i-outline clr-i-outline-path-2" d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/>\n  <path class="clr-i-outline clr-i-outline-path-3" d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/>\n  <path class="clr-i-outline clr-i-outline-path-4" d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <rect width="36" height="36" fill-opacity="0"/>'),a.ClrShapeTickChart=c.clrIconSVG('\n  <path class="clr-i-outline clr-i-outline-path-1" d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"/>\n  <path class="clr-i-outline clr-i-outline-path-2" d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>\n  <path class="clr-i-solid clr-i-solid-path-1" d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/>\n  <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>\n  <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>\n  <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M 6 25 L 8 25 L 8 22 L 10 22 L 10 25 L 13 25 L 13 22 L 15 22 L 15 25 L 18 25 L 18 22 L 20 22 L 20 25 L 23 25 L 23 22 L 25 22 L 25 25 L 27.723 25 C 28.023 25.02 28.293 25.18 28.463 25.43 C 28.903 26.06 28.483 26.93 27.723 26.99 L 6 26.991 Z"/>\n  <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 6 26.991 L 27.723 26.99 C 28.483 26.93 28.903 26.06 28.463 25.43 C 28.293 25.18 28.023 25.02 27.723 25 L 25 25 L 25 22 L 23 22 L 23 25 L 20 25 L 20 22 L 18 22 L 18 25 L 15 25 L 15 22 L 13 22 L 13 25 L 10 25 L 10 22 L 8 22 L 8 25 L 6 25 Z"/>\n  <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M 26.854 1.144 L 21.134 11.004 C 20.579 11.818 21.114 12.928 22.097 13.001 C 22.142 13.005 22.188 13.006 22.234 13.004 L 33.684 13.004 C 34.669 13.036 35.319 11.991 34.855 11.122 C 34.834 11.081 34.81 11.042 34.784 11.004 L 29.064 1.144 C 28.57 0.299 27.348 0.299 26.854 1.144 Z"/>'),a.ClrShapeBellCurve=c.clrIconSVG('<path d="M33,29H3A1,1,0,1,1,3,27H33A1,1,0,1,1,33,29Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M33,25h-.62a8.11,8.11,0,0,1-8-6.67C23.62,14.44,21.89,7.94,18,7.94s-5.69,6.51-6.38,10.39a8.11,8.11,0,0,1-8,6.65H3a1,1,0,1,1,0-2h.6A6.11,6.11,0,0,0,9.6,18c1.41-7.88,4.3-12,8.35-12s6.93,4.16,8.33,12a6.11,6.11,0,0,0,6,5H33a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ChartShapes={"axis-chart":a.ClrShapeAxisChart,"bar-chart":a.ClrShapeBarChart,"bubble-chart":a.ClrShapeBubbleChart,"cloud-chart":a.ClrShapeCloudChart,"curve-chart":a.ClrShapeCurveChart,"grid-chart":a.ClrShapeGridChart,"line-chart":a.ClrShapeLineChart,"pie-chart":a.ClrShapePieChart,"tick-chart":a.ClrShapeTickChart,"scatter-plot":a.ClrShapeScatterPlot,"box-plot":a.ClrShapeBoxPlot,"heat-map":a.ClrShapeHeatMap,"bell-curve":a.ClrShapeBellCurve},Object.defineProperty(a.ChartShapes,"analytics",t.descriptorConfig(a.ChartShapes["line-chart"])),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.ChartShapes)},"./src/shapes/commerce-shapes.ts":
/*!***************************************!*\
  !*** ./src/shapes/commerce-shapes.ts ***!
  \***************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CommerceShapes=a.ClrShapeFactory=a.ClrShapeEmployee=a.ClrShapeEmployeeGroup=a.ClrShapeRuble=a.ClrShapePeso=a.ClrShapeCoinBag=a.ClrShapeBitcoin=a.ClrShapeYen=a.ClrShapeWon=a.ClrShapeRupee=a.ClrShapePound=a.ClrShapeECheck=a.ClrShapeDollarBill=a.ClrShapeBank=a.ClrShapeCreditCard=a.ClrShapeDollar=a.ClrShapeEuro=a.ClrShapeStore=a.ClrShapeWallet=a.ClrShapeShoppingCart=a.ClrShapePiggyBank=a.ClrShapeShoppingBag=a.ClrShapeCalculator=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeCalculator=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM8,32V4H28V32Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M12,8H25.67V6H11a1,1,0,0,0-1,1v4.67h2Z"/>\n            <polygon class="clr-i-outline clr-i-outline-path-3" points="12 16 10 16 10 18 14 18 14 14 12 14 12 16"/>\n            <polygon class="clr-i-outline clr-i-outline-path-4" points="24 16 22 16 22 18 26 18 26 14 24 14 24 16"/>\n            <polygon class="clr-i-outline clr-i-outline-path-5" points="18 16 16 16 16 18 20 18 20 14 18 14 18 16"/>\n            <polygon class="clr-i-outline clr-i-outline-path-6" points="12 22 10 22 10 24 14 24 14 20 12 20 12 22"/>\n            <polygon class="clr-i-outline clr-i-outline-path-7" points="24 22 22 22 22 24 26 24 26 20 24 20 24 22"/>\n            <polygon class="clr-i-outline clr-i-outline-path-8" points="18 22 16 22 16 24 20 24 20 20 18 20 18 22"/>\n            <polygon class="clr-i-outline clr-i-outline-path-9" points="12 28 10 28 10 30 14 30 14 26 12 26 12 28"/>\n            <polygon class="clr-i-outline clr-i-outline-path-10" points="24 28 22 28 22 30 26 30 26 26 24 26 24 28"/>\n            <polygon class="clr-i-outline clr-i-outline-path-11" points="18 28 16 28 16 30 20 30 20 26 18 26 18 28"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM12,28H10V26h2Zm0-6H10V20h2Zm0-6H10V14h2Zm7,12H17V26h2Zm0-6H17V20h2Zm0-6H17V14h2Zm7,12H24V26h2Zm0-6H24V20h2Zm0-6H24V14h2Zm0-7H10V5H26Z"/>'),a.ClrShapeShoppingBag=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M25,12V9.05a7,7,0,1,0-14,0v7a1,1,0,0,0,2,0V14h8V12H13V9.05a5,5,0,1,1,10,0V16a1,1,0,1,0,2,0V14h5V32H6V14H9V12H4V32.09A1.91,1.91,0,0,0,5.91,34H30.09A1.91,1.91,0,0,0,32,32.09V12Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M13,9.22a5,5,0,1,1,10,0V12h2V9.22a7,7,0,1,0-14,0V12h2Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M25,12v3.1a1,1,0,1,1-2,0V12H13v3.1a1,1,0,0,1-2,0V12H4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12Z"/>'),a.ClrShapePiggyBank=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M19.72,10.47a11.65,11.65,0,0,0-6.31.52A.8.8,0,1,0,14,12.48,10.11,10.11,0,0,1,19.44,12a.8.8,0,1,0,.28-1.57Z"/>\n            <circle class="clr-i-outline clr-i-outline-path-2" cx="25.38" cy="16.71" r="1.36"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M35.51,18.63a1,1,0,0,0-.84-.44,3.42,3.42,0,0,1-2.09-1.12,17.35,17.35,0,0,1-2.63-3.78l2.88-4.5A1.89,1.89,0,0,0,33,7a1.77,1.77,0,0,0-1.33-1,10.12,10.12,0,0,0-5.39.75,12.72,12.72,0,0,0-2.72,1.63,16.94,16.94,0,0,0-5.16-1.39C11.31,6.3,4.83,10.9,4,17H4a2.56,2.56,0,0,1-1.38-1.53,1.81,1.81,0,0,1,.14-1.4,1.19,1.19,0,0,1,.43-.43,1.08,1.08,0,0,0-1.12-1.85A3.31,3.31,0,0,0,.91,13a4,4,0,0,0-.33,3.08A4.76,4.76,0,0,0,3,18.95l.92.46a17.58,17.58,0,0,0,1.82,7l.17.38A23,23,0,0,0,9.2,31.88a1,1,0,0,0,.75.34h4.52a1,1,0,0,0,.92-1.38L15,29.94l1.18.13a20.33,20.33,0,0,0,4,0c.37.6.77,1.2,1.21,1.79a1,1,0,0,0,.8.41h4.34a1,1,0,0,0,.92-1.39c-.17-.4-.34-.83-.47-1.2-.18-.53-.32-1-.43-1.45A13.18,13.18,0,0,0,29.56,26a12.5,12.5,0,0,0,3,0,1,1,0,0,0,.78-.62l2.26-5.81A1,1,0,0,0,35.51,18.63Zm-3.78,5.44a11.37,11.37,0,0,1-2.35-.11h0a8.2,8.2,0,0,1-2.53-.87,1,1,0,0,0-.93,1.77,11.72,11.72,0,0,0,1.29.58,8,8,0,0,1-1.8,1.16l-1.06.48s.49,2.19.82,3.16H22.79c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53,18.53,0,0,1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63,2.43.75,2.74v0H10.42A20.57,20.57,0,0,1,7.76,26l-.18-.39A14.62,14.62,0,0,1,6,17.48c.54-5.19,6.12-9.11,12.19-8.54a15.47,15.47,0,0,1,5.08,1.48l.62.29.5-.47A10.29,10.29,0,0,1,27,8.54a8.25,8.25,0,0,1,4-.65l-3.38,5.29.25.5h0a21.16,21.16,0,0,0,3.31,4.84,6.49,6.49,0,0,0,2.14,1.39Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M35,18.87A5.83,5.83,0,0,1,33,17.61a21.63,21.63,0,0,1-3.29-4.84l3.39-5.29a.9.9,0,0,0-.54-1.38,9.67,9.67,0,0,0-5.13.72,12,12,0,0,0-3.13,2A17.37,17.37,0,0,0,18.6,7.15C11.8,6.52,5.27,10.9,4.54,17l-.14-.07A2.76,2.76,0,0,1,2.9,15.29a2,2,0,0,1,.15-1.55,1.32,1.32,0,0,1,.47-.48,1.08,1.08,0,1,0-1.12-1.85,3.45,3.45,0,0,0-1.23,1.25A4.16,4.16,0,0,0,.84,15.9a5,5,0,0,0,2.57,3l1,.54a18.62,18.62,0,0,0,2,7.3,23,23,0,0,0,3,4.79,1,1,0,0,0,.8.38h3.61a.52.52,0,0,0,.4-.75L14,30.38a11,11,0,0,1-.33-1.18c.91.16,2.08.31,2.87.38a20.07,20.07,0,0,0,3.12,0c.39.7.79,1.33,1.15,1.85a.93.93,0,0,0,.77.41h3.11a.65.65,0,0,0,.61-.85c-.23-.74-.53-1.75-.71-2.37a15.9,15.9,0,0,0,3.75-1.76c.16-.11.32-.26.48-.39a13.77,13.77,0,0,1-2.42-1,.8.8,0,0,1,.74-1.42,11.64,11.64,0,0,0,3.18,1.1,13.31,13.31,0,0,0,2.68.12,1,1,0,0,0,.9-.66l1.73-4.44A1,1,0,0,0,35,18.87ZM13.79,11.59a.86.86,0,0,1-.3.05.85.85,0,0,1-.3-1.64,12.41,12.41,0,0,1,6.69-.55.85.85,0,1,1-.3,1.67A10.75,10.75,0,0,0,13.79,11.59Zm12.52,6.12a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,26.32,17.72Z"/>'),a.ClrShapeShoppingCart=c.clrIconSVG('<circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M33.08,5.37A1,1,0,0,0,32.31,5H11.49l.65,2H31L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l3.17-14A1,1,0,0,0,33.08,5.37Z" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <polygon points="20.71 7 21.87 5 11.49 5 12.14 7 20.71 7" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M29.15,15.4,28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.09-4.82Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />\n            <circle cx="13.33" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="27" cy="29.75" r="2.25" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M22.57,7a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H11.49l.65,2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M30,13.5l-.42,0L28.33,19h-15L8.76,4.53a1,1,0,0,0-.66-.65L4,2.62a1,1,0,1,0-.59,1.92L7,5.64l4.59,14.5L9.95,21.48l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.13a1,1,0,0,0,1-.78l1.57-6.91A7.51,7.51,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />\n            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid clr-i-solid-path-1" />\n            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M33.1,6.39A1,1,0,0,0,32.31,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l3.2-13A1,1,0,0,0,33.1,6.39Z" class="clr-i-solid clr-i-solid-path-3" />\n            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L21.29,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.19-4.84Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />\n            <circle cx="13.5" cy="29.5" r="2.5" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="26.5" cy="29.5" r="2.5" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <path d="M30,13.5A7.5,7.5,0,0,1,22.5,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l1.71-7A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" />'),a.ClrShapeWallet=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,15H31V9a1,1,0,0,0-1-1H6a1,1,0,0,1-1-.82V6.82A1,1,0,0,1,6,6H29.58a1,1,0,0,0,0-2H6A3,3,0,0,0,3,7a3.08,3.08,0,0,0,0,.36V27.93A4.1,4.1,0,0,0,7.13,32H30a1,1,0,0,0,1-1V25h1a1,1,0,0,0,1-1V16A1,1,0,0,0,32,15ZM29,30H7.13A2.11,2.11,0,0,1,5,27.93V9.88A3.11,3.11,0,0,0,6,10H29v5H22a5,5,0,0,0,0,10h7Zm2-7H22a3,3,0,0,1,0-6H31Z"/>\n            <circle class="clr-i-outline clr-i-outline-path-2" cx="23.01" cy="20" r="1.5"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32.94,14H31V9a1,1,0,0,0-1-1H6A1,1,0,0,1,5,7H5V7A1,1,0,0,1,6,6H29.6a1,1,0,1,0,0-2H6A2.94,2.94,0,0,0,3,6.88v21A4.13,4.13,0,0,0,7.15,32H30a1,1,0,0,0,1-1V26h1.94a.93.93,0,0,0,1-.91v-10A1.08,1.08,0,0,0,32.94,14ZM32,24l-8.58,0a3.87,3.87,0,0,1-3.73-4,3.87,3.87,0,0,1,3.73-4L32,16Z"/>\n            <circle class="clr-i-solid clr-i-solid-path-2" cx="24.04" cy="19.92" r="1.5"/>'),a.ClrShapeStore=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM30,18.13A2.68,2.68,0,0,1,27.82,17L27,15.88,26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88,20.19,17a2.71,2.71,0,0,1-4.37,0L15,15.88,14.19,17a2.71,2.71,0,0,1-4.37,0L9,15.88,8.18,17A2.68,2.68,0,0,1,6,18.13a2.64,2.64,0,0,1-2-.88V14.17L8.08,6H27.92L32,14.16v.67l0,2.39A2.67,2.67,0,0,1,30,18.13Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M28,30H16V22H14v8H8V22H6v8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V22H28Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M33.79,13.27,29.71,5.11A2,2,0,0,0,27.92,4H8.08A2,2,0,0,0,6.29,5.11L2.21,13.27a2,2,0,0,0-.21.9v3.08a2,2,0,0,0,.46,1.28A4.67,4.67,0,0,0,6,20.13a4.72,4.72,0,0,0,3-1.07,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.73,4.73,0,0,0,6,0,4.72,4.72,0,0,0,6.53-.52A2,2,0,0,0,34,17.26V14.17A2,2,0,0,0,33.79,13.27ZM15,14.4v1.52L14.18,17a2.71,2.71,0,0,1-4.37,0L9,15.88V14.4L11.59,6H16Zm12,1.48L26.19,17a2.71,2.71,0,0,1-4.37,0L21,15.88l0,0V14.4L20,6h4.45L27,14.4Z"/>'),a.ClrShapeEuro=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31.48,28.49a1,1,0,0,0-1.38-.32A12,12,0,0,1,12.45,22H24.16a1,1,0,0,0,0-2H11.93a11.16,11.16,0,0,1,0-4H24.16a1,1,0,0,0,0-2H12.45A12,12,0,0,1,30.06,7.8a1,1,0,0,0,1.06-1.7A14,14,0,0,0,10.34,14H3.54a1,1,0,1,0,0,2H9.91a14,14,0,0,0-.16,2,14,14,0,0,0,.16,2H3.54a1,1,0,1,0,0,2h6.8a14,14,0,0,0,20.83,7.87A1,1,0,0,0,31.48,28.49Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"/>'),a.ClrShapeDollar=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M26,21.15a6.91,6.91,0,0,0-4.38-3.32A26,26,0,0,0,19,17.19V8.12A10.05,10.05,0,0,1,23.86,10a1,1,0,0,0,1.33-1.5A11.75,11.75,0,0,0,19,6.1V3a1,1,0,0,0-2,0V6c-4.4.1-6.83,2.29-7.57,4.18A5.56,5.56,0,0,0,11.66,17,13.2,13.2,0,0,0,17,18.84V28a12.3,12.3,0,0,1-7.14-2.74A1,1,0,1,0,8.49,26.7,14.09,14.09,0,0,0,17,30v3a1,1,0,0,0,2,0V30c2.82-.19,6.07-1.09,7.3-4.76A5.33,5.33,0,0,0,26,21.15ZM12.79,15.32a3.57,3.57,0,0,1-1.49-4.39C11.41,10.63,12.53,8.12,17,8v8.8A10.7,10.7,0,0,1,12.79,15.32ZM24.4,24.56c-.72,2.14-2.32,3.17-5.4,3.4V19.23c.64.14,1.3.3,2,.51a5,5,0,0,1,3.19,2.32A3.34,3.34,0,0,1,24.4,24.56Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1"\n                d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.65,21.59c-1,3-3.61,3.84-5.9,4v2a1.25,1.25,0,0,1-2.5,0V27.59A11.47,11.47,0,0,1,11,25a1.25,1.25,0,1,1,1.71-1.83,9.11,9.11,0,0,0,4.55,1.94V18.83a9.63,9.63,0,0,1-3.73-1.41,4.8,4.8,0,0,1-1.91-5.84c.59-1.51,2.42-3.23,5.64-3.51V6.25a1.25,1.25,0,0,1,2.5,0V8.11a9.67,9.67,0,0,1,4.9,2A1.25,1.25,0,0,1,23,11.95a7.14,7.14,0,0,0-3.24-1.31v6.13c.6.13,1.24.27,1.91.48a5.85,5.85,0,0,1,3.69,2.82A4.64,4.64,0,0,1,25.65,23.59Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M20.92,19.64c-.4-.12-.79-.22-1.17-.3v5.76c2-.2,3.07-.9,3.53-2.3a2.15,2.15,0,0,0-.15-1.58A3.49,3.49,0,0,0,20.92,19.64Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M13.94,12.48a2.31,2.31,0,0,0,1,2.87,6.53,6.53,0,0,0,2.32.92V10.55C15.16,10.8,14.19,11.84,13.94,12.48Z"/>'),a.ClrShapeCreditCard=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,2,0,12H4L4,8ZM4,28V24H32v4Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="7" y="3" width="22" height="30" rx="0.96" ry="0.96" transform="translate(36) rotate(90)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,18H4V20H32Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeBank=c.clrIconSVG('<path d="M3.5,13.56,18,5.23l14.5,8.33a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <rect x="5.02" y="14" width="26" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z" class="clr-i-outline clr-i-outline-path-5"/>\n            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <rect x="5.02" y="14" width="26" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M22.15,11.58h3.21L18.65,7.72a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,22.77,8A7.49,7.49,0,0,1,22.5,6Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"/>\n            <path d="M4,26a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H28V17.63H26V25H19V17.63H17V25H10V17.63H8V25H5A1,1,0,0,0,4,26Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M33,29H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M22.5,15A3.51,3.51,0,0,1,20,14H5v2H31V15Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M19.46,9.74l.68-1.17-1.49-.85a.8.8,0,0,0-.8,0l-6.72,3.86h3.21l3.9-2.24,1.1.63C19.39,9.89,19.42,9.81,19.46,9.74Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <path d="M22.05,5.25,18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L18,5.23,21.05,7Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"/>\n            <path d="M3.5,13.56,5,12.68V16H31V12.71l1.48.85a1,1,0,0,0,1-1.73L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73ZM17.85,7.11a.8.8,0,0,1,.8,0L25.37,11H22.15l-3.9-2.24L14.35,11H11.14Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M30,13.5A7.47,7.47,0,0,1,24.39,11H22.15l-3.9-2.24L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l5,2.87A7.45,7.45,0,0,1,22.5,6c0-.16,0-.32,0-.48L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V13.42A7.53,7.53,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M31.94,13.24l.56.32a1,1,0,0,0,1.44-1.19A7.45,7.45,0,0,1,31.94,13.24Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>\n            <path d="M32.85,27H32v-.85A1.15,1.15,0,0,0,30.85,25H28V17.63H24V25H20V17.63H16V25H12V17.63H8V25H5.15A1.15,1.15,0,0,0,4,26.15V27H3.15A1.15,1.15,0,0,0,2,28.15V31H34V28.15A1.15,1.15,0,0,0,32.85,27Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M22.5,15a3.51,3.51,0,0,1-3-5.26l.14-.24-1.35-.78L14.35,11H11.14l6.72-3.86a.8.8,0,0,1,.8,0l1.75,1,1.65-2.86L18,2.92,2.5,11.83a1,1,0,1,0,1,1.73L5,12.68V16H31V15Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>'),a.ClrShapeDollarBill=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,6a4.25,4.25,0,0,1-3.9-4H32Zm0,1.62v4.83A5.87,5.87,0,0,0,26.49,26h-17A5.87,5.87,0,0,0,4,20.44V15.6A5.87,5.87,0,0,0,9.51,10h17A5.87,5.87,0,0,0,32,15.6ZM7.9,10A4.25,4.25,0,0,1,4,14V10ZM4,22.06A4.25,4.25,0,0,1,7.9,26H4ZM28.1,26A4.25,4.25,0,0,1,32,22.06V26Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18,10.85c-3.47,0-6.3,3.21-6.3,7.15s2.83,7.15,6.3,7.15,6.3-3.21,6.3-7.15S21.47,10.85,18,10.85Zm0,12.69c-2.59,0-4.7-2.49-4.7-5.55s2.11-5.55,4.7-5.55,4.7,2.49,4.7,5.55S20.59,23.55,18,23.55Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM4,26V21.15A5.18,5.18,0,0,1,8.79,26ZM4,14.85V10H8.79A5.18,5.18,0,0,1,4,14.85ZM18,25.15c-3.47,0-6.3-3.21-6.3-7.15s2.83-7.15,6.3-7.15,6.3,3.21,6.3,7.15S21.47,25.15,18,25.15ZM32,26H27.25A5.18,5.18,0,0,1,32,21.15Zm0-11.15A5.18,5.18,0,0,1,27.25,10H32Z"/>\n            <ellipse class="clr-i-solid clr-i-solid-path-2" cx="18" cy="18" rx="4" ry="4.72"/>'),a.ClrShapeECheck=c.clrIconSVG('<rect class="clr-i-outline clr-i-outline-path-1" x="16" y="16" width="15" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="20" y="21" width="11" height="2"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M34,8H12.93a8.35,8.35,0,0,1,.79,2H33V26H3V19.9a7.83,7.83,0,0,1-2-1.34V27a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V9A1,1,0,0,0,34,8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M6.57,18.68a6.17,6.17,0,0,0,4.32-1.59,1.2,1.2,0,0,0,.36-.84,1.08,1.08,0,0,0-1.09-1.11,1,1,0,0,0-.71.25,4.32,4.32,0,0,1-2.84,1,3.35,3.35,0,0,1-3.46-3h7.53A1.29,1.29,0,0,0,12,12.06,5.68,5.68,0,0,0,6.27,6.14,6,6,0,0,0,.4,12.4v0A6,6,0,0,0,6.57,18.68ZM6.25,8.39c1.82,0,2.87,1.39,3,3.16H3.13C3.38,9.69,4.56,8.39,6.25,8.39Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M34,8H12.91a8.61,8.61,0,0,1,1.2,4.39,8,8,0,0,1-7.78,8.27A7.51,7.51,0,0,1,1,18.41V27a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V9A1,1,0,0,0,34,8ZM31,23H20V21H31Zm0-5H16V16H31Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M6.57,18.68A6,6,0,0,1,.4,12.44v0A6,6,0,0,1,6.27,6.14,5.68,5.68,0,0,1,12,12.06a1.29,1.29,0,0,1-1.3,1.32H3.15a3.35,3.35,0,0,0,3.46,3,4.32,4.32,0,0,0,2.84-1,1,1,0,0,1,.71-.25,1.08,1.08,0,0,1,1.09,1.11,1.2,1.2,0,0,1-.36.84A6.17,6.17,0,0,1,6.57,18.68ZM9.3,11.55c-.18-1.77-1.23-3.16-3-3.16s-2.87,1.3-3.12,3.16Z"/>'),a.ClrShapePound=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.9,30H13.4A8.45,8.45,0,0,0,15,24.65V21h4.31a1,1,0,0,0,0-2H15V11.31A5.24,5.24,0,0,1,20.21,6,5.19,5.19,0,0,1,24,7.73a1,1,0,0,0,1.48-1.35A7.19,7.19,0,0,0,13,11.31V19H8.72a1,1,0,1,0,0,2H13v3.65C13,29.38,10.12,30,10,30a1,1,0,0,0,.17,2H27.9a1,1,0,1,0,0-2Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm6.5,25.92H11.74a1.25,1.25,0,0,1-.22-2.48c.15,0,1.72-.49,1.72-3.54V19h-2.5a1,1,0,0,1,0-2h2.5V11.88a5.85,5.85,0,0,1,5.72-6,5.63,5.63,0,0,1,4.21,1.94A1.25,1.25,0,1,1,21.3,9.51,3.08,3.08,0,0,0,19,8.42a3.35,3.35,0,0,0-3.22,3.46V17h3a1,1,0,0,1,0,2h-3v2.9A7.65,7.65,0,0,1,15,25.42H24.5a1.25,1.25,0,0,1,0,2.5Z"/>'),a.ClrShapeRupee=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M28,8H24.14A7.52,7.52,0,0,0,22.6,6H28a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2h7.55a5.42,5.42,0,0,1,4.2,2H10a1,1,0,0,0,0,2H22.79A5.54,5.54,0,0,1,23,11.51,5.48,5.48,0,0,1,17.55,17H11.14a1,1,0,0,0-.75,1.66L22.06,32a1,1,0,1,0,1.5-1.32L13.35,19h4.21a7.51,7.51,0,0,0,7.3-9H28a1,1,0,0,0,0-2Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm5.88,9H26a1,1,0,0,1,0,2H24.26c0,.06,0,.12,0,.19a6.09,6.09,0,0,1-6,6.2h-2l6.82,8.06a1.25,1.25,0,0,1-1.91,1.62L12.63,18.94a1.25,1.25,0,0,1,1-2.06h4.71a3.59,3.59,0,0,0,3.48-3.69c0-.07,0-.13,0-.2h-9a1,1,0,0,1,0-2h8.32a3.41,3.41,0,0,0-2.78-1.5H12.75a1.25,1.25,0,0,1,0-2.5H26a1,1,0,0,1,0,2H22.68A6.23,6.23,0,0,1,23.88,11Z"/>'),a.ClrShapeWon=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33,18H28.75l.5-2H33a1,1,0,0,0,0-2H29.74l2.17-8.76A1,1,0,0,0,30,4.76L27.68,14H21.31L19,4.76a1,1,0,0,0-1.94,0L14.79,14H8.42L6.13,4.76a1,1,0,0,0-1.94.48L6.36,14H3a1,1,0,0,0,0,2H6.85l.5,2H3a1,1,0,0,0,0,2H7.84l2.79,11.24a1,1,0,0,0,1.94,0L15.36,20h5.38l2.79,11.24a1,1,0,0,0,1.94,0L28.25,20H33a1,1,0,0,0,0-2Zm-5.82-2-.5,2H22.3l-.5-2ZM18,9.16,19.25,14h-2.4ZM8.91,16h5.38l-.5,2H9.41ZM11.6,26.84,9.91,20H13.3ZM15.85,18l.5-2h3.39l.5,2Zm8.64,8.84L22.8,20h3.39Z"/>\n            <polygon class="clr-i-solid clr-i-solid-path-1" points="17.74 16 17.22 18 18.85 18 18.32 16 17.74 16"/>\n            <polygon class="clr-i-solid clr-i-solid-path-2" points="11.94 18 14.63 18 15.16 16 11.41 16 11.94 18"/>\n            <polygon class="clr-i-solid clr-i-solid-path-3" points="13.29 23.1 14.1 20 12.47 20 13.29 23.1"/>\n            <polygon class="clr-i-solid clr-i-solid-path-4" points="21.44 18 24.13 18 24.66 16 20.91 16 21.44 18"/>\n            <polygon class="clr-i-solid clr-i-solid-path-5" points="22.78 23.1 23.6 20 21.97 20 22.78 23.1"/>\n            <path class="clr-i-solid clr-i-solid-path-6" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM29,20H26.19L24,28.32a1.25,1.25,0,0,1-2.42,0L19.38,20H16.69l-2.19,8.32a1.25,1.25,0,0,1-2.42,0L9.88,20H7a1,1,0,0,1,0-2H9.35l-.53-2H7a1,1,0,0,1,0-2H8.3l-1-3.68a1.25,1.25,0,0,1,2.42-.64L10.88,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42,0L20.38,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42.64l-1,3.68H29a1,1,0,0,1,0,2H27.24l-.53,2H29a1,1,0,0,1,0,2Z"/>'),a.ClrShapeYen=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M29.34,4.55a1,1,0,1,0-1.67-1.1L18,18.23,8.33,3.45a1,1,0,0,0-1.67,1.1L17,20.35V22.2H12a.8.8,0,0,0,0,1.6h5v2.4H12a.8.8,0,0,0,0,1.6h5V32a1,1,0,0,0,2,0V27.8h5a.8.8,0,0,0,0-1.6H19V23.8h5a.8.8,0,0,0,0-1.6H19V20.35Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8.07,7.91L19.74,20H22a1,1,0,0,1,0,2H19.25v2H22a1,1,0,0,1,0,2H19.25v2.75a1.25,1.25,0,0,1-2.5,0V26H14a1,1,0,1,1,0-2h2.75V22H14a1,1,0,1,1,0-2h2.26L9.93,9.91a1.25,1.25,0,1,1,2.12-1.33L18,18.08l5.95-9.49a1.25,1.25,0,1,1,2.12,1.33Z"/>'),a.ClrShapeBitcoin=c.clrIconSVG('<path d="M24.11,16.88A5.49,5.49,0,0,0,21,7V4a1,1,0,0,0-2,0V7H16V4a1,1,0,0,0-2,0V7H11a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1h3v3a1,1,0,0,0,2,0V29h3v3a1,1,0,0,0,2,0V29h.08A6.07,6.07,0,0,0,27,22.81v-.62A6.25,6.25,0,0,0,24.11,16.88ZM12,9h8.69a3.59,3.59,0,0,1,3.43,2.36A3.51,3.51,0,0,1,20.79,16H12ZM25,22.81A4.08,4.08,0,0,1,21.06,27H12V18h9.06A4.08,4.08,0,0,1,25,22.19Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M21.18,18.47H14.5v6h6.68a2.7,2.7,0,0,0,2.63-2.77v-.48A2.71,2.71,0,0,0,21.18,18.47Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M23,13.75a2.24,2.24,0,0,0-2.23-2.25H14.5V16h6.3A2.22,2.22,0,0,0,23,13.75Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8.31,19.73A5.22,5.22,0,0,1,21.18,27H21v1.9a1,1,0,0,1-2,0V27H17v1.9a1,1,0,0,1-2,0V27H13.25A1.25,1.25,0,0,1,12,25.75V17.23h0v-7A1.25,1.25,0,0,1,13.25,9H15V7.07a1,1,0,0,1,2,0V9h2V7.07a1,1,0,0,1,2,0V9a4.72,4.72,0,0,1,3.2,8,5.31,5.31,0,0,1,2.11,4.24Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeCoinBag=c.clrIconSVG('<path d="M21.6,29a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,29Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M22.54,24h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M22,32H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M32.7,32h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M33.7,28h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M33.74,26a28,28,0,0,0-2.82-10.12A20.24,20.24,0,0,0,24.6,8.71L27,3.42a1,1,0,0,0-.07-1A1,1,0,0,0,26.13,2H9.8a1,1,0,0,0-.91,1.42l2.45,5.31a20.33,20.33,0,0,0-6.28,7.15c-2.15,4-2.82,8.89-3,12.28a3.6,3.6,0,0,0,1,2.71A3.79,3.79,0,0,0,5.8,31.94H12V30H5.72a1.68,1.68,0,0,1-1.21-.52,1.62,1.62,0,0,1-.45-1.23c.14-2.61.69-7.58,2.76-11.45A18,18,0,0,1,13.08,10h1a30.81,30.81,0,0,0-1.87,2.92,22.78,22.78,0,0,0-1.47,3.34l1.37.92a24,24,0,0,1,1.49-3.47A29.1,29.1,0,0,1,16.05,10h1a21.45,21.45,0,0,1,1.41,5,22.54,22.54,0,0,1,.32,3.86l1.58-1.11a24.15,24.15,0,0,0-.32-3A24.82,24.82,0,0,0,18.76,10h.78l.91-2H13.21L11.36,4H24.57l-2.5,5.47a9.93,9.93,0,0,1,1.23.78,18.63,18.63,0,0,1,5.86,6.57A26.59,26.59,0,0,1,31.73,26Z" class="clr-i-outline clr-i-outline-path-6" />\n    <path d="M24.89,26h7.86c-.66-8.71-4.41-14.12-9.22-17.32L25.72,3.9a1,1,0,0,0-.91-1.4H11.1a1,1,0,0,0-.91,1.4l1.2,2.6H21.51l-.9,2H18.76A24.9,24.9,0,0,1,20,13.19a24.49,24.49,0,0,1,.32,3l-1.58,1.11a22.54,22.54,0,0,0-.32-3.86A21.74,21.74,0,0,0,17,8.5h-1a28.22,28.22,0,0,0-2.48,3.7,23.91,23.91,0,0,0-1.49,3.46l-1.37-.91a22.78,22.78,0,0,1,1.47-3.34A30.81,30.81,0,0,1,14.05,8.5H12.3l.08.17C7.08,12.2,3.05,18.4,3.05,28.75A1.65,1.65,0,0,0,4.61,30.5h8A2.67,2.67,0,0,1,14.21,26a2.67,2.67,0,0,1-.37-1.34,2.7,2.7,0,0,1,2.7-2.7h6a2.7,2.7,0,0,1,2.7,2.7A2.63,2.63,0,0,1,24.89,26Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M21.6,28.5a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,28.5Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M22.54,23.5h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M22,31.5H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-4" /><path d="M32.7,31.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-5" /><path d="M33.7,27.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-6" />'),a.ClrShapePeso=c.clrIconSVG('<path d="M31,13.2H27.89A6.81,6.81,0,0,0,28,12a7.85,7.85,0,0,0-.1-1.19h2.93a.8.8,0,0,0,0-1.6H27.46A8.44,8.44,0,0,0,19.57,4H11a1,1,0,0,0-1,1V9.2H7a.8.8,0,0,0,0,1.6h3v2.4H7a.8.8,0,0,0,0,1.6h3V31a1,1,0,0,0,2,0V20h7.57a8.45,8.45,0,0,0,7.89-5.2H31a.8.8,0,0,0,0-1.6ZM12,6h7.57a6.51,6.51,0,0,1,5.68,3.2H12Zm0,4.8H25.87a5.6,5.6,0,0,1,0,2.4H12ZM19.57,18H12V14.8H25.25A6.51,6.51,0,0,1,19.57,18Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M14.18,13.8V16h9.45a5.26,5.26,0,0,0,.08-.89,4.72,4.72,0,0,0-.2-1.31Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M14.18,19.7h5.19a4.28,4.28,0,0,0,3.5-1.9H14.18Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M19.37,10.51H14.18V12h8.37A4.21,4.21,0,0,0,19.37,10.51Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M17.67,2a16,16,0,1,0,16,16A16,16,0,0,0,17.67,2Zm10.5,15.8H25.7a6.87,6.87,0,0,1-6.33,4.4H14.18v6.54a1.25,1.25,0,1,1-2.5,0V17.8H8.76a.9.9,0,1,1,0-1.8h2.92V13.8H8.76a.9.9,0,1,1,0-1.8h2.92V9.26A1.25,1.25,0,0,1,12.93,8h6.44a6.84,6.84,0,0,1,6.15,4h2.65a.9.9,0,0,1,0,1.8H26.09a6.91,6.91,0,0,1,.12,1.3,6.8,6.8,0,0,1-.06.9h2a.9.9,0,0,1,0,1.8Z" class="clr-i-solid clr-i-solid-path-4" />'),a.ClrShapeRuble=c.clrIconSVG('<path d="M20.57,20A8.23,8.23,0,0,0,29,12a8.23,8.23,0,0,0-8.43-8H12a1,1,0,0,0-1,1V18H9a1,1,0,0,0,0,2h2v2H9a1,1,0,0,0,0,2h2v7a1,1,0,0,0,2,0V24h9a1,1,0,0,0,0-2H13V20ZM13,6h7.57A6.24,6.24,0,0,1,27,12a6.23,6.23,0,0,1-6.43,6H13Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M20.75,9.25H15v8.81h5.79a4.66,4.66,0,0,0,4.86-4.4A4.65,4.65,0,0,0,20.75,9.25Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm2.75,18.56H15V22h8.29a1,1,0,0,1,0,2H15v5a1.25,1.25,0,0,1-2.5,0V24H11.25a1,1,0,0,1,0-2h1.21V20.56H11.25a1.25,1.25,0,0,1,0-2.5h1.21V8a1.25,1.25,0,0,1,1.25-1.25h7a7.14,7.14,0,0,1,7.36,6.9A7.15,7.15,0,0,1,20.75,20.56Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeEmployeeGroup=c.clrIconSVG('<path d="M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M18.42,16.31a5.7,5.7,0,1,1,5.76-5.7A5.74,5.74,0,0,1,18.42,16.31Zm0-9.4a3.7,3.7,0,1,0,3.76,3.7A3.74,3.74,0,0,0,18.42,6.91Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M21.91,17.65a20.6,20.6,0,0,0-13,2A1.77,1.77,0,0,0,8,21.25v3.56a1,1,0,0,0,2,0V21.38a18.92,18.92,0,0,1,12-1.68Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M33,22H26.3V20.52a1,1,0,0,0-2,0V22H17a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V23A1,1,0,0,0,33,22ZM32,32H18V24h6.3v.41a1,1,0,0,0,2,0V24H32Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <rect x="21.81" y="27.42" width="5.96" height="1.4" class="clr-i-outline clr-i-outline-path-5"/>\n  <path d="M10.84,12.24a18,18,0,0,0-7.95,2A1.67,1.67,0,0,0,2,15.71v3.1a1,1,0,0,0,2,0v-2.9a16,16,0,0,1,7.58-1.67A7.28,7.28,0,0,1,10.84,12.24Z" class="clr-i-outline clr-i-outline-path-6"/>\n  <path d="M33.11,14.23a17.8,17.8,0,0,0-7.12-2,7.46,7.46,0,0,1-.73,2A15.89,15.89,0,0,1,32,15.91v2.9a1,1,0,1,0,2,0v-3.1A1.67,1.67,0,0,0,33.11,14.23Z" class="clr-i-outline clr-i-outline-path-7"/>\n  <path d="M10.66,10.61c0-.23,0-.45,0-.67a3.07,3.07,0,0,1,.54-6.11,3.15,3.15,0,0,1,2.2.89,8.16,8.16,0,0,1,1.7-1.08,5.13,5.13,0,0,0-9,3.27,5.1,5.1,0,0,0,4.7,5A7.42,7.42,0,0,1,10.66,10.61Z" class="clr-i-outline clr-i-outline-path-8"/>\n  <path d="M24.77,1.83a5.17,5.17,0,0,0-3.69,1.55,7.87,7.87,0,0,1,1.9,1,3.14,3.14,0,0,1,4.93,2.52,3.09,3.09,0,0,1-1.79,2.77,7.14,7.14,0,0,1,.06.93,7.88,7.88,0,0,1-.1,1.2,5.1,5.1,0,0,0,3.83-4.9A5.12,5.12,0,0,0,24.77,1.83Z" class="clr-i-outline clr-i-outline-path-9"/>\n  \n  <ellipse cx="18" cy="11.28" rx="4.76" ry="4.7" class="clr-i-solid clr-i-solid-path-1"/>\n  <path d="M10.78,11.75c.16,0,.32,0,.48,0,0-.15,0-.28,0-.43a6.7,6.7,0,0,1,3.75-6,4.62,4.62,0,1,0-4.21,6.46Z" class="clr-i-solid clr-i-solid-path-2"/>\n  <path d="M24.76,11.28c0,.15,0,.28,0,.43.16,0,.32,0,.48,0A4.58,4.58,0,1,0,21,5.29,6.7,6.7,0,0,1,24.76,11.28Z" class="clr-i-solid clr-i-solid-path-3"/>\n  <path d="M22.29,16.45a21.45,21.45,0,0,1,5.71,2,2.71,2.71,0,0,1,.68.53H34V15.56a.72.72,0,0,0-.38-.64,18,18,0,0,0-8.4-2.05l-.66,0A6.66,6.66,0,0,1,22.29,16.45Z" class="clr-i-solid clr-i-solid-path-4"/>\n  <path d="M6.53,20.92A2.76,2.76,0,0,1,8,18.47a21.45,21.45,0,0,1,5.71-2,6.66,6.66,0,0,1-2.27-3.55l-.66,0a18,18,0,0,0-8.4,2.05.72.72,0,0,0-.38.64V22H6.53Z" class="clr-i-solid clr-i-solid-path-5"/>\n  <rect x="21.46" y="26.69" width="5.96" height="1.4" class="clr-i-solid clr-i-solid-path-6"/>\n  <path d="M32.81,21.26H25.94v-1a1,1,0,0,0-2,0v1H22V18.43A20.17,20.17,0,0,0,18,18a19.27,19.27,0,0,0-9.06,2.22.76.76,0,0,0-.41.68v5.61h7.11v6.09a1,1,0,0,0,1,1H32.81a1,1,0,0,0,1-1V22.26A1,1,0,0,0,32.81,21.26Zm-1,10.36H17.64V23.26h6.3v.91a1,1,0,0,0,2,0v-.91h5.87Z" class="clr-i-solid clr-i-solid-path-7"/>'),a.ClrShapeEmployee=c.clrIconSVG('<path d="M16.43,16.69a7,7,0,1,1,7-7A7,7,0,0,1,16.43,16.69Zm0-11.92a5,5,0,1,0,5,5A5,5,0,0,0,16.43,4.77Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M22,17.9A25.41,25.41,0,0,0,5.88,19.57a4.06,4.06,0,0,0-2.31,3.68V29.2a1,1,0,1,0,2,0V23.25a2,2,0,0,1,1.16-1.86,22.91,22.91,0,0,1,9.7-2.11,23.58,23.58,0,0,1,5.57.66Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <rect x="22.14" y="27.41" width="6.14" height="1.4" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M33.17,21.47H28v2h4.17v8.37H18V23.47h6.3v.42a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0v1.47H17a1,1,0,0,0-1,1V32.84a1,1,0,0,0,1,1H33.17a1,1,0,0,0,1-1V22.47A1,1,0,0,0,33.17,21.47Z" class="clr-i-outline clr-i-outline-path-4"/>\n  \n  <circle cx="16.86" cy="9.73" r="6.46" class="clr-i-solid clr-i-solid-path-1"/>\n  <rect x="21" y="28" width="7" height="1.4" class="clr-i-solid clr-i-solid-path-2"/>\n  <path d="M15,30v3a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V23a1,1,0,0,0-1-1H26V20.53a1,1,0,0,0-2,0V22H22V18.42A32.12,32.12,0,0,0,16.86,18a26,26,0,0,0-11,2.39,3.28,3.28,0,0,0-1.88,3V30Zm17,2H17V24h7v.42a1,1,0,0,0,2,0V24h6Z" class="clr-i-solid clr-i-solid-path-3"/>'),a.ClrShapeFactory=c.clrIconSVG('<path d="M33.47,7.37a1,1,0,0,0-1,.06L23,13.77V8.26a1,1,0,0,0-1.64-.77L13.48,14H10V4.62a1,1,0,0,0-.78-1l-4-.9a1,1,0,0,0-.85.2A1,1,0,0,0,4,3.73V14H3a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V8.26A1,1,0,0,0,33.47,7.37ZM6,5l2,.44V14H6ZM32,30H4V16h9.83a1,1,0,0,0,.64-.23L21,10.37v5.28a1,1,0,0,0,1.56.83L32,10.14Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <rect x="6" y="17.99" width="8" height="2" class="clr-i-outline clr-i-outline-path-2"/>\n  <rect x="6" y="21.99" width="8" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n  <rect x="6" y="25.99" width="8" height="2" class="clr-i-outline clr-i-outline-path-4"/>\n  <rect x="19" y="18.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-5"/>\n  <rect x="19" y="24.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-6"/>\n  <rect x="23" y="18.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-7"/>\n  <rect x="23" y="24.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-8"/>\n  <rect x="27" y="18.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-9"/>\n  <rect x="27" y="24.99" width="2" height="3" class="clr-i-outline clr-i-outline-path-10"/>\n  \n  <path d="M32.45,8.44,22,15.3V9.51a1,1,0,0,0-1.63-.78L14.07,14H10V4.06L4,2.71V14H2V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V9.27A1,1,0,0,0,32.45,8.44ZM14,29H6V27h8Zm0-4H6V23h8Zm0-4H6V19h8Zm8,8H20V26h2Zm0-6H20V20h2Zm4,6H24V26h2Zm0-6H24V20h2Zm4,6H28V26h2Zm0-6H28V20h2Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.CommerceShapes={calculator:a.ClrShapeCalculator,"piggy-bank":a.ClrShapePiggyBank,"shopping-bag":a.ClrShapeShoppingBag,"shopping-cart":a.ClrShapeShoppingCart,wallet:a.ClrShapeWallet,store:a.ClrShapeStore,euro:a.ClrShapeEuro,dollar:a.ClrShapeDollar,peso:a.ClrShapePeso,"credit-card":a.ClrShapeCreditCard,bank:a.ClrShapeBank,"dollar-bill":a.ClrShapeDollarBill,"e-check":a.ClrShapeECheck,pound:a.ClrShapePound,rupee:a.ClrShapeRupee,won:a.ClrShapeWon,yen:a.ClrShapeYen,bitcoin:a.ClrShapeBitcoin,ruble:a.ClrShapeRuble,"coin-bag":a.ClrShapeCoinBag,"employee-group":a.ClrShapeEmployeeGroup,employee:a.ClrShapeEmployee,factory:a.ClrShapeFactory},Object.defineProperty(a.CommerceShapes,"savings",t.descriptorConfig(a.CommerceShapes["piggy-bank"])),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.CommerceShapes)},"./src/shapes/core-shapes.ts":
/*!***********************************!*\
  !*** ./src/shapes/core-shapes.ts ***!
  \***********************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CoreShapes=a.ClrShapeArrow=a.ClrShapeStepForward2=a.ClrShapeEyeHide=a.ClrShapeEye=a.ClrShapeEvent=a.ClrShapeCalendar=a.ClrShapeAngleDouble=a.ClrShapeViewColumns=a.ClrShapeSearch=a.ClrShapeVmBug=a.ClrShapeFilterGridCircle=a.ClrShapeFilterGrid=a.ClrShapeEllipsisVertical=a.ClrShapeEllipsisHorizontal=a.ClrShapeCloud=a.ClrShapeImage=a.ClrShapeBell=a.ClrShapeFolderOpen=a.ClrShapeFolder=a.ClrShapeAngle=a.ClrShapeUser=a.ClrShapeBars=a.ClrShapeHelpInfo=a.ClrShapeWarningStandard=a.ClrShapeErrorStandard=a.ClrShapeSuccessStandard=a.ClrShapeInfoStandard=a.ClrShapeInfoCircle=a.ClrShapeCheckCircle=a.ClrShapeExclamationCircle=a.ClrShapeExclamationTriangle=a.ClrShapeTimes=a.ClrShapeCheck=a.ClrShapeCog=a.ClrShapeHome=a.ClrShapeUnknownStatus=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeUnknownStatus=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1" cx="17.58" cy="26.23" r="1.4"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M24.7,13a5.18,5.18,0,0,0-2.16-3.56,7.26,7.26,0,0,0-5.71-1.09A11.34,11.34,0,0,0,12,10.44,1,1,0,1,0,13.26,12a9.32,9.32,0,0,1,3.94-1.72,5.29,5.29,0,0,1,4.16.74,3.21,3.21,0,0,1,1.35,2.19c.33,2.69-3.19,3.75-5.32,4.14l-.82.15v4.36a1,1,0,0,0,2,0V19.17C24.61,17.79,24.88,14.41,24.7,13Z"/>'),a.ClrShapeHome=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15a1,1,0,0,0,1.41,1.41L18,4.41,32.29,18.71a1,1,0,0,0,1.41-1.41Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M28,32h-5V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"/>'),a.ClrShapeCog=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M11.1,18c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7s-3.1-7-7-7C14.2,11,11.1,14.1,11.1,18z M23.1,18c0,2.8-2.2,5-5,5c-2.8,0-5-2.2-5-5s2.2-5,5-5C20.9,13,23.1,15.2,23.1,18z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.8,14.7L30,13.8l-0.1-0.3c-0.8,0-1.6-0.2-2.4-0.4c0.3,0.6,0.6,1.3,0.8,1.9l0.1,0.5l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.3,0.5,1.9,0.8c-0.3-0.8-0.4-1.6-0.4-2.5l-0.4-0.2l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.7,15.4h-5.3v0.1l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.4l1.4-2.3l-0.6-2C21,2.4,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,16,33.9,15.7,33.7,15.4z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c0.2,0,0.5,0,0.7,0.1c-0.2-0.6-0.3-1.3-0.2-2h-0.5c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7c0-0.9-0.2-1.8-0.5-2.6h-2.2c0.5,0.8,0.7,1.6,0.7,2.5C23.1,20.8,20.9,23,18.1,23z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32.57,15.72l-3.35-1a12.12,12.12,0,0,0-.47-1.32,7.49,7.49,0,0,1-6.14-6.16,11.82,11.82,0,0,0-1.33-.48l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M32.57,15.72,31.5,15.4H22.85A5.5,5.5,0,1,1,18,12.5a5.53,5.53,0,0,1,.65,0A3.68,3.68,0,0,1,19,9.89l2.09-3.62-.86-2.83A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>'),a.ClrShapeCheck=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M13.72,27.69,3.29,17.27a1,1,0,0,1,1.41-1.41l9,9L31.29,7.29a1,1,0,0,1,1.41,1.41Z"/>'),a.ClrShapeTimes=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"/>'),a.ClrShapeExclamationTriangle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,21.32a1.3,1.3,0,0,0,1.3-1.3V14a1.3,1.3,0,1,0-2.6,0v6A1.3,1.3,0,0,0,18,21.32Z"/>\n                <circle class="clr-i-outline clr-i-outline-path-2" cx="17.95" cy="24.27" r="1.5"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M30.33,25.54,20.59,7.6a3,3,0,0,0-5.27,0L5.57,25.54A3,3,0,0,0,8.21,30H27.69a3,3,0,0,0,2.64-4.43Zm-1.78,1.94a1,1,0,0,1-.86.49H8.21a1,1,0,0,1-.88-1.48L17.07,8.55a1,1,0,0,1,1.76,0l9.74,17.94A1,1,0,0,1,28.55,27.48Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M30.33,25.54,20.59,7.6a3,3,0,0,0-5.27,0L5.57,25.54A3,3,0,0,0,8.21,30H27.69a3,3,0,0,0,2.64-4.43ZM16.46,12.74a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,26.25a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,26.25Z"/>'),a.ClrShapeExclamationCircle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z"/>\n                <circle class="clr-i-outline clr-i-outline-path-3" cx="17.95" cy="23.02" r="1.5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"/>'),a.ClrShapeCheckCircle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M16.34,23.74l-5-5a1,1,0,0,1,1.41-1.41l3.59,3.59,6.78-6.78a1,1,0,0,1,1.41,1.41Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M30,18A12,12,0,1,1,18,6,12,12,0,0,1,30,18Zm-4.77-2.16a1.4,1.4,0,0,0-2-2l-6.77,6.77L13,17.16a1.4,1.4,0,0,0-2,2l5.45,5.45Z"/>'),a.ClrShapeInfoCircle=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1"  cx="17.93" cy="11.9" r="1.4"/>\n                <path class="clr-i-outline clr-i-outline-path-2"  d="M21,23H19V15H16a1,1,0,0,0,0,2h1v6H15a1,1,0,1,0,0,2h6a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3"  d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-2,5.15a2,2,0,1,1,2,2A2,2,0,0,1,15.9,11.15ZM23,24a1,1,0,0,1-1,1H15a1,1,0,1,1,0-2h2V17H16a1,1,0,0,1,0-2h4v8h2A1,1,0,0,1,23,24Z"/>'),a.ClrShapeInfoStandard=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1" cx="17.97" cy="10.45" r="1.4"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M21,25H19V14.1H16a1,1,0,0,0,0,2h1V25H15a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2.1a16,16,0,1,0,16,16A16,16,0,0,0,18,2.1Zm-.1,5.28a2,2,0,1,1-2,2A2,2,0,0,1,17.9,7.38Zm3.6,21.25h-7a1.4,1.4,0,1,1,0-2.8h2.1v-9.2H15a1.4,1.4,0,1,1,0-2.8h4.4v12h2.1a1.4,1.4,0,1,1,0,2.8Z"/>'),a.ClrShapeSuccessStandard=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM28.45,12.63,15.31,25.76,7.55,18a1.4,1.4,0,0,1,2-2l5.78,5.78L26.47,10.65a1.4,1.4,0,1,1,2,2Z"/>'),a.ClrShapeErrorStandard=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1" cx="18" cy="26.06" r="1.33"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,22.61a1,1,0,0,1-1-1v-12a1,1,0,1,1,2,0v12A1,1,0,0,1,18,22.61Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2.1a16,16,0,1,0,16,16A16,16,0,0,0,18,2.1ZM16.6,8.8a1.4,1.4,0,0,1,2.8,0v12a1.4,1.4,0,0,1-2.8,0ZM18,28.6a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,18,28.6Z"/>'),a.ClrShapeWarningStandard=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1" cx="18" cy="26.06" r="1.33"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,22.61a1,1,0,0,1-1-1v-12a1,1,0,1,1,2,0v12A1,1,0,0,1,18,22.61Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M15.0620782,1.681196 C15.6298819,0.649266355 16.7109091,0.0102219396 17.885,0.0102219396 C19.0590909,0.0102219396 20.1401181,0.649266355 20.7086433,1.68252129 L34.598644,27.2425225 C35.1407746,28.2401397 35.1174345,29.4495373 34.5372161,30.4254943 C33.9569977,31.4014514 32.905671,31.9996984 31.77,32 L4.02239323,31.9997492 C2.87409009,32.0254699 1.79902843,31.4375753 1.20106335,30.4569126 C0.603098265,29.4762499 0.572777899,28.2513179 1.12207818,27.241196 L15.0620782,1.681196 Z M2.87850767,28.1977282 C2.67060966,28.5800376 2.6820975,29.0441423 2.9086557,29.4156977 C3.1352139,29.7872532 3.5425354,30.0099959 4,30 L31.7697344,30 C32.1999191,29.9998858 32.5982478,29.7732208 32.8180821,29.4034482 C33.0379164,29.0336757 33.0467595,28.5754567 32.8413567,28.1974787 L18.9538739,2.64208195 C18.7394236,2.25234436 18.3298419,2.01022194 17.885,2.01022194 C17.4406889,2.01022194 17.0315538,2.25176692 16.8168946,2.64068753 L2.87850767,28.1977282 Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M34.6,29.21,20.71,3.65a3.22,3.22,0,0,0-5.66,0L1.17,29.21A3.22,3.22,0,0,0,4,34H31.77a3.22,3.22,0,0,0,2.83-4.75ZM16.6,10a1.4,1.4,0,0,1,2.8,0v12a1.4,1.4,0,0,1-2.8,0ZM18,29.85a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,18,29.85Z"/>'),a.ClrShapeHelpInfo=c.clrIconSVG('<path d="M25.39,25.45a1,1,0,0,0-1.38.29c-1.41,2.16-4,4.81-6.31,5.7s-4.12.57-4.84,0c-.31-.27-1.12-1-.43-3.49.46-1.66,3.32-9.48,4-11.38l-2.18.28c-.69,1.86-3.29,8.84-3.76,10.58-.68,2.49-.34,4.3,1.09,5.56A5.59,5.59,0,0,0,15,34a9.53,9.53,0,0,0,3.45-.7c2.79-1.09,5.72-4.12,7.26-6.47A1,1,0,0,0,25.39,25.45Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M19.3,11a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,19.3,11Zm0-7a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,19.3,4Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M11.81,15c.06,0,6.27-.82,7.73-1,.65-.1,1.14,0,1.3.15s.21.8-.07,1.68c-.61,1.86-3.69,11-4.59,13.71a8,8,0,0,0,1.29-.38,7.32,7.32,0,0,0,1.15-.6C19.85,25,22.15,18.1,22.67,16.52s.39-2.78-.3-3.6a3.16,3.16,0,0,0-3.08-.83c-1.43.15-7.47.94-7.73,1a1,1,0,0,0,.26,2Z" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="20.75" cy="6" r="4" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M24.84,26.23a1,1,0,0,0-1.4.29,16.6,16.6,0,0,1-3.51,3.77c-.33.25-1.56,1.2-2.08,1-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64,4.05-12,4.47-13.3.62-1.9.35-3.77-2.48-3.32-.77.08-8.58,1.09-8.72,1.1a1,1,0,0,0,.13,2s3-.39,3.33-.42a.88.88,0,0,1,.85.44,2.47,2.47,0,0,1-.07,1.71c-.26,1-4.37,12.58-4.5,13.25a2.78,2.78,0,0,0,1.18,3,5,5,0,0,0,3.08.83h0a8.53,8.53,0,0,0,3.09-.62c2.49-1,5.09-3.66,6.46-5.75A1,1,0,0,0,24.84,26.23Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeBars=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"/>'),a.ClrShapeUser=c.clrIconSVG('<path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M18,17a7,7,0,0,0,4.45-1.6h-.22A3.68,3.68,0,0,1,20,14.6a5,5,0,1,1,1.24-8.42l1-1.76A7,7,0,1,0,18,17Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" />\n            <path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M18,17a7,7,0,0,0,6.85-5.56,7.4,7.4,0,0,1-2.24-6.69A7,7,0,1,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" />\n            <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z" class="clr-i-solid clr-i-solid-path-1" />\n            <circle cx="18" cy="10" r="7" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M18,17a7,7,0,0,0,4.45-1.6h-.22A3.68,3.68,0,0,1,19,9.89l3.16-5.47A7,7,0,1,0,18,17Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" />\n            <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M18,17a7,7,0,0,0,6.85-5.56,7.4,7.4,0,0,1-2.24-6.69A7,7,0,1,0,18,17Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />'),a.ClrShapeAngle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M29.52,22.52,18,10.6,6.48,22.52a1.7,1.7,0,0,0,2.45,2.36L18,15.49l9.08,9.39a1.7,1.7,0,0,0,2.45-2.36Z"/>'),a.ClrShapeFolder=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9Zm0,20H6V13h7.31a2,2,0,0,0,2-2H6V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H30Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M30,13.5V29H6V13h7.31a2,2,0,0,0,2-2H6V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h8.51a7.5,7.5,0,0,1-1.29-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M30,15.4V29H6V13h7.31a2,2,0,0,0,2-2H6V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h2.73A3.66,3.66,0,0,1,19,9.89L19.56,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9ZM6,11V7h6.49l2.72,4Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L19.56,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM6,11V7h6.49l2.72,4Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5A7.5,7.5,0,0,1,23.13,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM6,11V7h6.49l2.72,4Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeFolderOpen=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M35.32,13.74A1.71,1.71,0,0,0,33.87,13H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H32a2,2,0,0,0-2-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1A1.64,1.64,0,0,0,35.32,13.74ZM29.55,29H6.9l3.88-13.81a.66.66,0,0,1,.38-.24H33.49Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M35.32,13.74A1.71,1.71,0,0,0,33.87,13H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h8.52a7.49,7.49,0,0,1-1.29-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1A1.64,1.64,0,0,0,35.32,13.74ZM29.55,29H6.9l3.88-13.81a.66.66,0,0,1,.38-.24H33.49Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.4h-.3L29.55,29H6.9l3.88-13.81a.66.66,0,0,1,.38-.24h9.42A3.67,3.67,0,0,1,19,13.56a3.63,3.63,0,0,1-.26-.56H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h2.73A3.66,3.66,0,0,1,19,9.89L19.56,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1a1.68,1.68,0,0,0,.07-.32A3.67,3.67,0,0,1,33.68,15.4Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M35.32,13.74A1.71,1.71,0,0,0,33.87,13H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H32a2,2,0,0,0-2-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1A1.64,1.64,0,0,0,35.32,13.74Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19,13.56a3.63,3.63,0,0,1-.26-.56H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h2.73A3.66,3.66,0,0,1,19,9.89L19.56,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1a1.68,1.68,0,0,0,.07-.32A3.67,3.67,0,0,1,33.68,15.4Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M35.32,13.74A1.71,1.71,0,0,0,33.87,13H11.17a2.59,2.59,0,0,0-2.25,1.52,1,1,0,0,0,0,.14L6,25V7h6.49l2.61,3.59a1,1,0,0,0,.81.41h8.52a7.49,7.49,0,0,1-1.31-2H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29.69A1.37,1.37,0,0,0,5.41,31H30.34a1,1,0,0,0,1-.72l4.19-15.1A1.64,1.64,0,0,0,35.32,13.74Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeBell=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79,7.44,7.44,0,0,1-2.24-.84,8.89,8.89,0,0,1,.4,2.64v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3H5.13a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15A8.8,8.8,0,0,1,18,6.31a8.61,8.61,0,0,1,4.76,1.44A7.49,7.49,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.58,10.58,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79A7.5,7.5,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.57,10.57,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeImage=c.clrIconSVG('<path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,30V6H32V30Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M8.92,14a3,3,0,1,0-3-3A3,3,0,0,0,8.92,14Zm0-4.6A1.6,1.6,0,1,1,7.33,11,1.6,1.6,0,0,1,8.92,9.41Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M22.78,15.37l-5.4,5.4-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81A1,1,0,0,0,22.78,15.37Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M11.93,11a3,3,0,1,0-3,3A3,3,0,0,0,11.93,11Zm-4.6,0a1.6,1.6,0,1,1,1.6,1.6A1.6,1.6,0,0,1,7.33,11Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M17.38,20.77l-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81a1,1,0,0,0-1.41,0Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M32,13.22V30H4V6H22.5a7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M30,13.5A7.48,7.48,0,0,1,22.78,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>'),a.ClrShapeCloud=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.14,33H10.62C5.67,33,1,28.19,1,23.1a10,10,0,0,1,8-9.75,10.19,10.19,0,0,1,20.33,1.06A10.07,10.07,0,0,1,29,16.66a8.29,8.29,0,0,1,6,8C35,29.1,31.33,33,27.14,33ZM19.09,6.23a8.24,8.24,0,0,0-8.19,8l0,.87-.86.1A7.94,7.94,0,0,0,3,23.1c0,4,3.77,7.9,7.62,7.9H27.14C30.21,31,33,28,33,24.65a6.31,6.31,0,0,0-5.37-6.26l-1.18-.18.39-1.13A8.18,8.18,0,0,0,19.09,6.23Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24c0-.33,0-.65,0-1a7.45,7.45,0,0,1-2.1-.54,8,8,0,0,1-.3,4.16l-.39,1.13,1.18.18a6.31,6.31,0,0,1,5.37,6.26C32.95,28,30.16,31,27.09,31H10.57c-3.84,0-7.62-3.91-7.62-7.9a7.94,7.94,0,0,1,7-7.89l.86-.1,0-.87a8.24,8.24,0,0,1,8.19-8A8.13,8.13,0,0,1,22.58,7a7.53,7.53,0,0,1-.08-1,7.51,7.51,0,0,1,.09-1.12A10.13,10.13,0,0,0,19,4.23,10.26,10.26,0,0,0,8.91,13.36a10,10,0,0,0-8,9.75c0,5.09,4.67,9.9,9.62,9.9H27.09c4.19,0,7.86-3.9,7.86-8.35A8.29,8.29,0,0,0,29,16.66Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M29,16.66a10.14,10.14,0,0,0,.2-1.3h-2a8.28,8.28,0,0,1-.37,1.72l-.39,1.13,1.18.18a6.31,6.31,0,0,1,5.37,6.26C32.95,28,30.16,31,27.09,31H10.57c-3.84,0-7.62-3.91-7.62-7.9a7.94,7.94,0,0,1,7-7.89l.86-.1,0-.87A8.16,8.16,0,0,1,21,6.47l1-1.8A10.19,10.19,0,0,0,8.91,13.36a10,10,0,0,0-8,9.75c0,5.09,4.67,9.9,9.62,9.9H27.09c4.19,0,7.86-3.9,7.86-8.35A8.29,8.29,0,0,0,29,16.66Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24A10.19,10.19,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M29,16.66a10.07,10.07,0,0,0,.25-2.24c0-.33,0-.65,0-1a7.44,7.44,0,0,1-6.6-8.58A10.13,10.13,0,0,0,19,4.23,10.26,10.26,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M29,16.66a10.15,10.15,0,0,0,.2-1.26h-7A3.68,3.68,0,0,1,19,9.89l3-5.21A10.19,10.19,0,0,0,8.91,13.36,10,10,0,0,0,1,23.1C1,28.19,5.62,33,10.57,33H27.09C31.28,33,35,29.1,35,24.65A8.29,8.29,0,0,0,29,16.66Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>'),a.ClrShapeEllipsisHorizontal=c.clrIconSVG('<circle cx="31.1" cy="18" r="2.9" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="18" cy="18" r="2.9" class="clr-i-outline clr-i-outline-path-2" />\n            <circle cx="4.9" cy="18" r="2.9" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="31.1" cy="18" r="2.9" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="18" cy="18" r="2.9" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <circle cx="4.9" cy="18" r="2.9" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />'),a.ClrShapeEllipsisVertical=c.clrIconSVG('<circle cx="18" cy="4.9" r="2.9" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="18" cy="18" r="2.9" class="clr-i-outline clr-i-outline-path-2" />\n            <circle cx="18" cy="31.1" r="2.9" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="18" cy="4.9" r="2.9" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="18" cy="18" r="2.9" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <circle cx="18" cy="31.1" r="2.9" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />'),a.ClrShapeFilterGrid=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M15,25.86l2,1V20.27a1,1,0,0,0-.29-.7L10.23,13H25.79l-6.47,6.57a1,1,0,0,0-.29.7L19,28l2,1V20.68L27.58,14A1.46,1.46,0,0,0,28,13V12a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v1a1.46,1.46,0,0,0,.42,1L15,20.68Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M8,11v1.12a.5.5,0,0,0,.15.35l7.28,7.36a.5.5,0,0,1,.15.35v6.89a.5.5,0,0,0,.28.45l3.95,1.41a.5.5,0,0,0,.72-.45l0-8.39a.54.54,0,0,1,.18-.35l7.12-7.25a.5.5,0,0,0,.15-.35V11Z"/>'),a.ClrShapeFilterGridCircle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M15,25.86l2,1V20.27a1,1,0,0,0-.29-.7L10.23,13H25.79l-6.47,6.57a1,1,0,0,0-.29.7L19,28l2,1V20.68L27.58,14A1.46,1.46,0,0,0,28,13V12a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v1a1.46,1.46,0,0,0,.42,1L15,20.68Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M8,11v1.12a.5.5,0,0,0,.15.35l7.28,7.36a.5.5,0,0,1,.15.35v6.89a.5.5,0,0,0,.28.45l3.95,1.41a.5.5,0,0,0,.72-.45l0-8.39a.54.54,0,0,1,.18-.35l7.12-7.25a.5.5,0,0,0,.15-.35V11Z"/>'),a.ClrShapeVmBug=c.clrIconSVG('<rect width="36" height="36" rx="3" fill="#ffffff" opacity="0.15" style="isolation:isolate"/><path d="M3.79,14.83a1.09,1.09,0,0,0-1.47-.56,1.09,1.09,0,0,0-.54,1.49l2.47,5.4c.39.85.8,1.29,1.57,1.29S7,22,7.39,21.16l2.17-4.77a.33.33,0,0,1,.31-.2.35.35,0,0,1,.35.35v4.61a1.15,1.15,0,0,0,1.14,1.3,1.17,1.17,0,0,0,1.17-1.3V17.38a1.15,1.15,0,0,1,1.22-1.2,1.13,1.13,0,0,1,1.18,1.2v3.77a1.17,1.17,0,1,0,2.32,0V17.38a1.15,1.15,0,0,1,1.22-1.2,1.13,1.13,0,0,1,1.18,1.2v3.77a1.16,1.16,0,1,0,2.31,0V16.86a2.69,2.69,0,0,0-2.78-2.69,3.57,3.57,0,0,0-2.47,1.05,2.75,2.75,0,0,0-2.38-1.05A3.93,3.93,0,0,0,12,15.22a2.82,2.82,0,0,0-2.08-1.05A2.55,2.55,0,0,0,7.4,15.89L5.82,19.63l-2-4.8" fill="#ffffff"/><path d="M33,14.18A1.14,1.14,0,0,0,31.9,15l-1.19,3.73L29.5,15.05a1.18,1.18,0,0,0-1.15-.87h-.1a1.2,1.2,0,0,0-1.15.87l-1.19,3.71-1.18-3.71a1.15,1.15,0,0,0-1.11-.87,1.08,1.08,0,0,0-1.12,1.07,1.68,1.68,0,0,0,.1.54l2,5.7a1.27,1.27,0,0,0,1.27,1,1.24,1.24,0,0,0,1.2-.93l1.2-3.64,1.2,3.64a1.25,1.25,0,0,0,1.26.93A1.27,1.27,0,0,0,32,21.5L34,15.73a1.77,1.77,0,0,0,.08-.48A1.07,1.07,0,0,0,33,14.18Z" fill="#ffffff"/>'),a.ClrShapeSearch=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M16.33,5.05A10.95,10.95,0,1,1,5.39,16,11,11,0,0,1,16.33,5.05m0-2.05a13,13,0,1,0,13,13,13,13,0,0,0-13-13Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M35,33.29l-7.37-7.42-1.42,1.41,7.37,7.42A1,1,0,1,0,35,33.29Z"/>'),a.ClrShapeViewColumns=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31,5H5A2,2,0,0,0,3,7V29a2,2,0,0,0,2,2H31a2,2,0,0,0,2-2V7A2,2,0,0,0,31,5ZM13,29H5V7h8Zm10,0H15V7h8Z"/>'),a.ClrShapeAngleDouble=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"/>'),a.ClrShapeCalendar=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-2" x="8" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-3" x="14" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-4" x="20" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-5" x="26" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-6" x="8" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-7" x="14" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-8" x="20" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-9" x="26" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-10" x="8" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-11" x="14" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-12" x="20" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline clr-i-outline-path-13" x="26" y="24" width="2" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-14" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-outline clr-i-outline-path-15" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-16" x="13" y="6" width="10" height="2"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.22V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,32,13.22Z"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="8" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-3--badged" x="14" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-4--badged" x="20" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-5--badged" x="26" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-6--badged" x="8" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-7--badged" x="14" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-8--badged" x="20" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-9--badged" x="26" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-10--badged" x="8" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-11--badged" x="14" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-12--badged" x="20" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-13--badged" x="26" y="24" width="2" height="2"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-14--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-15--badged" d="M22.5,6H13V8h9.78A7.49,7.49,0,0,1,22.5,6Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-16--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.4H32V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="8" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-3--alerted" x="14" y="14" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-4--alerted" x="8" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-5--alerted" x="14" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-6--alerted" x="20" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-7--alerted" x="26" y="19" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-8--alerted" x="8" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-9--alerted" x="14" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-10--alerted" x="20" y="24" width="2" height="2"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-11--alerted" x="26" y="24" width="2" height="2"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-12--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><polygon points="21.29 6 13 6 13 8 20.14 8 21.29 6"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-13--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid clr-i-solid-path-3" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5A7.5,7.5,0,0,1,22.5,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,30,13.5ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89L21.29,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm6,5H26V24h2Zm0-5H26V19h2Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>'),a.ClrShapeEvent=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M16.17,25.86,10.81,20.5a1,1,0,0,1,1.41-1.41L16.17,23l8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-outline clr-i-outline-path-4" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-5" x="13" y="6" width="10" height="2"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M10.81,20.5l5.36,5.36L26.22,15.81a1,1,0,0,0-1.41-1.41L16.17,23l-3.94-3.94a1,1,0,0,0-1.41,1.41Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M32,13.22V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,32,13.22Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M22.5,6H13V8h9.78A7.49,7.49,0,0,1,22.5,6Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M10.81,20.5l5.36,5.36L26.22,15.81a1,1,0,0,0,.23-.41H23.8L16.17,23l-3.94-3.94a1,1,0,0,0-1.41,1.41Z"/>\n                <polygon class="clr-i-outline--alerted clr-i-outline-path-3--alerted" points="21.29 6 13 6 13 8 20.14 8 21.29 6"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M33.68,15.4H32V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>\n                <path class="clr-i-solid clr-i-solid-path-3" d="M32.25,6h-4V9a2.2,2.2,0,0,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM25.94,16.58l-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38L24,14.66a1.36,1.36,0,1,1,1.93,1.93Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M33.68,15.4H26.3a1.34,1.34,0,0,1-.36,1.18l-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38,7-7h-1A3.68,3.68,0,0,1,19,9.89L21.29,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5A7.5,7.5,0,0,1,22.5,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,30,13.5Zm-4.06,3.08-9.67,9.67L11,20.94A1.36,1.36,0,0,1,12.9,19l3.38,3.38L24,14.66a1.36,1.36,0,1,1,1.93,1.93Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeEye=c.clrIconSVG('<path d="M33.62,17.53c-3.37-6.23-9.28-10-15.82-10S5.34,11.3,2,17.53L1.72,18l.26.48c3.37,6.23,9.28,10,15.82,10s12.46-3.72,15.82-10l.26-.48ZM17.8,26.43C12.17,26.43,7,23.29,4,18c3-5.29,8.17-8.43,13.8-8.43S28.54,12.72,31.59,18C28.54,23.29,23.42,26.43,17.8,26.43Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18.09,11.17A6.86,6.86,0,1,0,25,18,6.86,6.86,0,0,0,18.09,11.17Zm0,11.72A4.86,4.86,0,1,1,23,18,4.87,4.87,0,0,1,18.09,22.89Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M33.62,17.53c-3.37-6.23-9.28-10-15.82-10S5.34,11.3,2,17.53L1.72,18l.26.48c3.37,6.23,9.28,10,15.82,10s12.46-3.72,15.82-10l.26-.48ZM17.8,26.43C12.17,26.43,7,23.29,4,18c3-5.29,8.17-8.43,13.8-8.43S28.54,12.72,31.59,18C28.54,23.29,23.42,26.43,17.8,26.43Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <circle cx="18.09" cy="18.03" r="6.86" class="clr-i-solid clr-i-solid-path-2"/>'),a.ClrShapeEyeHide=c.clrIconSVG('<path d="M25.19,20.4A6.78,6.78,0,0,0,25.62,18a6.86,6.86,0,0,0-6.86-6.86,6.79,6.79,0,0,0-2.37.43L18,13.23a4.78,4.78,0,0,1,.74-.06A4.87,4.87,0,0,1,23.62,18a4.79,4.79,0,0,1-.06.74Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm9.75,9.75,6.65,6.65a4.81,4.81,0,0,1-2.5.72A4.87,4.87,0,0,1,13.9,18,4.81,4.81,0,0,1,14.62,15.53Zm-1.45-1.45a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M18.37,11.17A6.79,6.79,0,0,0,16,11.6l8.8,8.8A6.78,6.78,0,0,0,25.23,18,6.86,6.86,0,0,0,18.37,11.17Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm8.3,8.3a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" class="clr-i-solid clr-i-solid-path-3"/>'),a.ClrShapeStepForward2=c.clrIconSVG('<path d="M7.08,6.52a1.68,1.68,0,0,0,0,2.4L16.51,18,7.12,27.08a1.7,1.7,0,0,0,2.36,2.44h0L21.4,18,9.48,6.47A1.69,1.69,0,0,0,7.08,6.52Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M26.49,5a1.7,1.7,0,0,0-1.7,1.7V29.3a1.7,1.7,0,0,0,3.4,0V6.7A1.7,1.7,0,0,0,26.49,5Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeArrow=c.clrIconSVG('<path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-1"/>'),a.CoreShapes={"unknown-status":a.ClrShapeUnknownStatus,home:a.ClrShapeHome,cog:a.ClrShapeCog,check:a.ClrShapeCheck,times:a.ClrShapeTimes,"exclamation-triangle":a.ClrShapeExclamationTriangle,"exclamation-circle":a.ClrShapeExclamationCircle,"check-circle":a.ClrShapeCheckCircle,"info-circle":a.ClrShapeInfoCircle,"info-standard":a.ClrShapeInfoStandard,"success-standard":a.ClrShapeSuccessStandard,"error-standard":a.ClrShapeErrorStandard,"warning-standard":a.ClrShapeWarningStandard,"help-info":a.ClrShapeHelpInfo,bars:a.ClrShapeBars,user:a.ClrShapeUser,angle:a.ClrShapeAngle,folder:a.ClrShapeFolder,"folder-open":a.ClrShapeFolderOpen,bell:a.ClrShapeBell,image:a.ClrShapeImage,cloud:a.ClrShapeCloud,"ellipsis-horizontal":a.ClrShapeEllipsisHorizontal,"ellipsis-vertical":a.ClrShapeEllipsisVertical,"filter-grid":a.ClrShapeFilterGrid,"filter-grid-circle":a.ClrShapeFilterGridCircle,"vm-bug":a.ClrShapeVmBug,search:a.ClrShapeSearch,"view-columns":a.ClrShapeViewColumns,"angle-double":a.ClrShapeAngleDouble,calendar:a.ClrShapeCalendar,event:a.ClrShapeEvent,eye:a.ClrShapeEye,"eye-hide":a.ClrShapeEyeHide,"step-forward-2":a.ClrShapeStepForward2,arrow:a.ClrShapeArrow},Object.defineProperty(a.CoreShapes,"house",t.descriptorConfig(a.CoreShapes.home)),Object.defineProperty(a.CoreShapes,"settings",t.descriptorConfig(a.CoreShapes.cog)),Object.defineProperty(a.CoreShapes,"success",t.descriptorConfig(a.CoreShapes.check)),Object.defineProperty(a.CoreShapes,"close",t.descriptorConfig(a.CoreShapes.times)),Object.defineProperty(a.CoreShapes,"warning",t.descriptorConfig(a.CoreShapes["exclamation-triangle"])),Object.defineProperty(a.CoreShapes,"error",t.descriptorConfig(a.CoreShapes["exclamation-circle"])),Object.defineProperty(a.CoreShapes,"info",t.descriptorConfig(a.CoreShapes["info-circle"])),Object.defineProperty(a.CoreShapes,"menu",t.descriptorConfig(a.CoreShapes.bars)),Object.defineProperty(a.CoreShapes,"avatar",t.descriptorConfig(a.CoreShapes.user)),Object.defineProperty(a.CoreShapes,"caret",t.descriptorConfig(a.CoreShapes.angle)),Object.defineProperty(a.CoreShapes,"directory",t.descriptorConfig(a.CoreShapes.folder)),Object.defineProperty(a.CoreShapes,"notification",t.descriptorConfig(a.CoreShapes.bell)),Object.defineProperty(a.CoreShapes,"collapse",t.descriptorConfig(a.CoreShapes["angle-double"]))},"./src/shapes/essential-shapes.ts":
/*!****************************************!*\
  !*** ./src/shapes/essential-shapes.ts ***!
  \****************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.EssentialShapes=a.ClrShapeColorPalette=a.ClrShapeFirstAid=a.ClrShapeBeta=a.ClrShapeDotCircle=a.ClrShapeCircle=a.ClrShapeCrosshairs=a.ClrShapeVolume=a.ClrShapeTable=a.ClrShapeSnowflake=a.ClrShapeFuel=a.ClrShapeForm=a.ClrShapeFish=a.ClrShapeTree=a.ClrShapeRecycle=a.ClrShapeFilterOff=a.ClrShapeFileZip=a.ClrShapeCursorHandOpen=a.ClrShapeCursorHandGrab=a.ClrShapeTreeView=a.ClrShapePortrait=a.ClrShapePaste=a.ClrShapeLandscape=a.ClrShapeEraser=a.ClrShapeDragHandleCorner=a.ClrShapeDetails=a.ClrShapeClone=a.ClrShapeCursorMove=a.ClrShapeWand=a.ClrShapeSun=a.ClrShapeMoon=a.ClrShapeFilter2=a.ClrShapeDragHandle=a.ClrShapeCopyToClipboard=a.ClrShapeColorPicker=a.ClrShapeBriefcase=a.ClrShapeExpandCard=a.ClrShapeCollapseCard=a.ClrShapeSortBy=a.ClrShapeAccessibility2=a.ClrShapeAccessibility1=a.ClrShapeShrink=a.ClrShapePaperclip=a.ClrShapeFileGroup=a.ClrShapeRepeat=a.ClrShapeIdBadge=a.ClrShapeBalance=a.ClrShapeOrganization=a.ClrShapeNoAccess=a.ClrShapeHourglass=a.ClrShapeFlame=a.ClrShapeTarget=a.ClrShapeBullseye=a.ClrShapeWrench=a.ClrShapeBolt=a.ClrShapeLibrary=a.ClrShapeKey=a.ClrShapeZoomOut=a.ClrShapeZoomIn=a.ClrShapeWindowRestore=a.ClrShapeWindowMin=a.ClrShapeWindowMax=a.ClrShapeWindowClose=a.ClrShapeTools=a.ClrShapeSwitch=a.ClrShapeTwoWayArrows=a.ClrShapeFileSettings=a.ClrShapeScroll=a.ClrShapeUndo=a.ClrShapeRedo=a.ClrShapeList=a.ClrShapeFirewall=a.ClrShapeClipboard=a.ClrShapeSlider=a.ClrShapeWorld=a.ClrShapePrinter=a.ClrShapeLogout=a.ClrShapeLogin=a.ClrShapeHelp=a.ClrShapeCopy=a.ClrShapeChildArrow=a.ClrShapeCircleArrow=a.ClrShapeAlarmClock=a.ClrShapeClock=a.ClrShapeHistory=a.ClrShapeTags=a.ClrShapeTag=a.ClrShapeTrash=a.ClrShapeTimesCircle=a.ClrShapeBan=a.ClrShapePlusCircle=a.ClrShapeMinusCircle=a.ClrShapeMinus=a.ClrShapePlus=a.ClrShapeFile=a.ClrShapePin=a.ClrShapeFilter=a.ClrShapePopOut=a.ClrShapeUsers=a.ClrShapeUnlock=a.ClrShapeLock=a.ClrShapeUpload=a.ClrShapeDownload=a.ClrShapeLightbulb=a.ClrShapeViewCards=a.ClrShapeViewList=a.ClrShapeSync=a.ClrShapeRefresh=a.ClrShapeNote=a.ClrShapePencil=a.ClrShapeThermometer=a.ClrShapeBug=a.ClrShapeScissors=a.ClrShapeAsterisk=a.ClrShapeBook=a.ClrShapeObjects=a.ClrShapeResize=a.ClrShapeCursorHandClick=a.ClrShapeCursorHand=a.ClrShapeCursorArrow=a.ClrShapeGridView=a.ClrShapeBubbleExclamation=a.ClrShapeNew=a.ClrShapeAlarmOff=a.ClrShapePinboard=a.ClrShapeAddText=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts"),e=i(/*! ./core-shapes */"./src/shapes/core-shapes.ts");a.ClrShapeAddText=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31,21H13a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M12,16a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H13A1,1,0,0,0,12,16Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M27,27H13a1,1,0,0,0,0,2H27a1,1,0,0,0,0-2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M15.89,9a1,1,0,0,0-1-1H10V3.21a1,1,0,0,0-2,0V8H2.89a1,1,0,0,0,0,2H8v5.21a1,1,0,0,0,2,0V10h4.89A1,1,0,0,0,15.89,9Z"/>'),a.ClrShapePinboard=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,30,6,30,6,6H22V4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V14H30Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M33.57,9.33l-7-7a1,1,0,0,0-1.41,1.41l7,7a1,1,0,1,0,1.41-1.41Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M22.1,11.19l.7.5L26.46,8,25,6.56,22.51,9.13c-2-.87-4.35.14-5.92,1.68l-.72.71,3.54,3.54-3.67,3.67,1.41,1.41,3.67-3.67L24.37,20l.71-.72c1.54-1.57,2.55-3.92,1.68-5.93l2.54-2.57L27.88,9.38,24.21,13.1l.49.69c.76,1,.25,2.37-.41,3.33L18.77,11.6C19.84,10.86,21.15,10.5,22.1,11.19Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M30,30,6,30,6,6H22V4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V14H30Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M33.57,9.33l-7-7a1,1,0,0,0-1.41,1.41l1.38,1.38-4,4c-2-.87-4.35.14-5.92,1.68l-.72.71,3.54,3.54-3.67,3.67,1.41,1.41,3.67-3.67L24.37,20l.71-.72c1.54-1.57,2.55-3.91,1.68-5.92l4-4,1.38,1.38a1,1,0,1,0,1.41-1.41Z"/>'),a.ClrShapeAlarmOff=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M25.33,21.54a.9.9,0,0,0-.41-1.2l-3.2-1.56L24.89,22A.89.89,0,0,0,25.33,21.54Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18,8.6a.9.9,0,0,0-.9.9v4.6l1.8,1.81V9.5A.9.9,0,0,0,18,8.6Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M11.42,3.43a5.8,5.8,0,0,0-5.81-.81L8.3,5.32A16,16,0,0,1,11.42,3.43Z"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M18,4a13.91,13.91,0,0,0-8.3,2.75l1.42,1.43A12,12,0,0,1,27.82,24.9l1.42,1.43A14,14,0,0,0,18,4Z"/>\n            <path class="clr-i-outline clr-i-outline-path-6" d="M1.56,4.21,2.73,5.38a5.7,5.7,0,0,0,.67,6.1A15.78,15.78,0,0,1,5.46,8.12L6.88,9.55A13.94,13.94,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.89,13.89,0,0,0,16.8,0l4.14,4.15L32,31.9,3,2.8ZM25,27.72A11.89,11.89,0,0,1,18,30,12,12,0,0,1,6,18a11.89,11.89,0,0,1,2.29-7Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M11.42,3.43a5.8,5.8,0,0,0-5.77-.82L8.33,5.3A16,16,0,0,1,11.42,3.43Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M24.92,21.94l4.34,4.36A14,14,0,0,0,9.75,6.73L17,14V9.69a1,1,0,0,1,2,0V16l2.33,2.34L25,20.1a1,1,0,0,1,.47,1.33A1,1,0,0,1,24.92,21.94Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M1.61,4.21,2.73,5.34a5.73,5.73,0,0,0,.67,6.15A15.88,15.88,0,0,1,5.48,8.1L6.91,9.52A13.94,13.94,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.89,13.89,0,0,0,16.83,0l4.16,4.17L32,31.9,3,2.8Z"/>'),a.ClrShapeNew=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M34.59,23l-4.08-5,4-4.9a1.82,1.82,0,0,0,.23-1.94A1.93,1.93,0,0,0,32.94,10h-31A1.91,1.91,0,0,0,0,11.88V24.13A1.91,1.91,0,0,0,1.94,26H33.05a1.93,1.93,0,0,0,1.77-1.09A1.82,1.82,0,0,0,34.59,23ZM2,24V12H32.78l-4.84,5.93L32.85,24Z"/>\n            <polygon  class="clr-i-outline clr-i-outline-path-2" points="9.39 19.35 6.13 15 5 15 5 21.18 6.13 21.18 6.13 16.84 9.39 21.18 10.51 21.18 10.51 15 9.39 15 9.39 19.35"/>\n            <polygon  class="clr-i-outline clr-i-outline-path-3" points="12.18 21.18 16.84 21.18 16.84 20.16 13.31 20.16 13.31 18.55 16.5 18.55 16.5 17.52 13.31 17.52 13.31 16.03 16.84 16.03 16.84 15 12.18 15 12.18 21.18"/>\n            <polygon  class="clr-i-outline clr-i-outline-path-4" points="24.52 19.43 23.06 15 21.84 15 20.37 19.43 19.05 15 17.82 15 19.78 21.18 20.89 21.18 22.45 16.59 24 21.18 25.13 21.18 27.08 15 25.85 15 24.52 19.43"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M34.11,24.49l-3.92-6.62,3.88-6.35A1,1,0,0,0,33.22,10H2a2,2,0,0,0-2,2V24a2,2,0,0,0,2,2H33.25A1,1,0,0,0,34.11,24.49Zm-23.6-3.31H9.39L6.13,16.84v4.35H5V15H6.13l3.27,4.35V15h1.12ZM16.84,16H13.31v1.49h3.2v1h-3.2v1.61h3.53v1H12.18V15h4.65Zm8.29,5.16H24l-1.55-4.59L20.9,21.18H19.78l-2-6.18H19l1.32,4.43L21.84,15h1.22l1.46,4.43L25.85,15h1.23Z"/>'),a.ClrShapeBubbleExclamation=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM28.29,24.61a1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.08,11.08,0,0,1,28.29,24.61Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18,20.63a1,1,0,0,0,1-1V8.48a1,1,0,1,0-2,0V19.61A1,1,0,0,0,18,20.63Z"/>\n            <circle class="clr-i-outline clr-i-outline-path-3" cx="18" cy="24.04" r="1.33"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM16.93,9.13a1.41,1.41,0,1,1,2.81,0V18.9a1.41,1.41,0,1,1-2.81,0Zm1.41,17.35a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,18.34,26.47Z"/>'),a.ClrShapeGridView=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M14,4H6A2,2,0,0,0,4,6v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6A2,2,0,0,0,14,4ZM6,14V6h8v8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M30,4H22a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM22,14V6h8v8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M14,20H6a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V22A2,2,0,0,0,14,20ZM6,30V22h8v8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M30,20H22a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V22A2,2,0,0,0,30,20ZM22,30V22h8v8Z"/>\n            <rect class="clr-i-solid clr-i-solid-path-1" x="4" y="4" width="12" height="12" rx="2" ry="2"/>\n            <rect class="clr-i-solid clr-i-solid-path-2" x="20" y="4" width="12" height="12" rx="2" ry="2"/>\n            <rect class="clr-i-solid clr-i-solid-path-3" x="4" y="20" width="12" height="12" rx="2" ry="2"/>\n            <rect class="clr-i-solid clr-i-solid-path-4" x="20" y="20" width="12" height="12" rx="2" ry="2"/>'),a.ClrShapeCursorArrow=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M14.58,32.31a1,1,0,0,1-.94-.65L4,5.65A1,1,0,0,1,5.25,4.37l26,9.68a1,1,0,0,1-.05,1.89l-8.36,2.57,8.3,8.3a1,1,0,0,1,0,1.41l-3.26,3.26a1,1,0,0,1-.71.29h0a1,1,0,0,1-.71-.29l-8.33-8.33-2.6,8.45a1,1,0,0,1-.93.71Zm3.09-12a1,1,0,0,1,.71.29l8.79,8.79L29,27.51l-8.76-8.76a1,1,0,0,1,.41-1.66l7.13-2.2L6.6,7l7.89,21.2L16.71,21a1,1,0,0,1,.71-.68Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M29,12.36,3.88,3A1,1,0,0,0,2.59,4.28L12,29.44a1,1,0,0,0,1.89-.05l2.69-8.75,9.12,8.9a1,1,0,0,0,1.41,0l2.35-2.35a1,1,0,0,0,0-1.41l-9.09-8.86L29,14.25A1,1,0,0,0,29,12.36Z"/>'),a.ClrShapeCursorHand=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30.74,15.19a13.66,13.66,0,0,0-6.87-3.83A26,26,0,0,0,18,10.58V5.28A3.4,3.4,0,0,0,14.5,2,3.4,3.4,0,0,0,11,5.28v10L9.4,13.7a3.77,3.77,0,0,0-5.28,0A3.67,3.67,0,0,0,3,16.33a3.6,3.6,0,0,0,1,2.56l4.66,5.52a11.53,11.53,0,0,0,1.43,4,10.12,10.12,0,0,0,2,2.54v1.92a1.07,1.07,0,0,0,1,1.08H27a1.07,1.07,0,0,0,1-1.08v-2.7a12.81,12.81,0,0,0,3-8.36v-6A1,1,0,0,0,30.74,15.19ZM29,21.86a10.72,10.72,0,0,1-2.6,7.26,1.11,1.11,0,0,0-.4.72V32H14.14V30.52a1,1,0,0,0-.44-.83,7.26,7.26,0,0,1-1.82-2.23,9.14,9.14,0,0,1-1.2-3.52,1,1,0,0,0-.23-.59L5.53,17.53a1.7,1.7,0,0,1,0-2.42,1.76,1.76,0,0,1,2.47,0l3,3v3.14l2-1V5.28A1.42,1.42,0,0,1,14.5,4,1.42,1.42,0,0,1,16,5.28v11.8l2,.43V12.59a24.27,24.27,0,0,1,2.51.18V18l1.6.35V13c.41.08.83.17,1.26.28a14.88,14.88,0,0,1,1.53.49v5.15l1.6.35V14.5A11.06,11.06,0,0,1,29,16.23Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M28.69,14.33v4.83l-2-.43V13.24a16.19,16.19,0,0,0-2.33-.84v5.82l-2-.43V12c-1.1-.18-2.18-.3-3.08-.36v5.51l-2-.43V11.48h0V4.34a2.53,2.53,0,0,0-2.6-2.43,2.53,2.53,0,0,0-2.6,2.43V17.27h0v2.59l-2,1V15.6L7.75,13.21a2.83,2.83,0,0,0-4,0,2.93,2.93,0,0,0,0,4.09l6,7.1a10.82,10.82,0,0,0,1.39,4.22,8.42,8.42,0,0,0,2.21,2.73v2.56H27.79V30.62a12.54,12.54,0,0,0,3-8.5v-6A10,10,0,0,0,28.69,14.33Z"/>'),a.ClrShapeCursorHandClick=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30.4,17.6c-1.8-1.9-4.2-3.2-6.7-3.7c-1.1-0.3-2.2-0.5-3.3-0.6c2.8-3.3,2.3-8.3-1-11.1s-8.3-2.3-11.1,1s-2.3,8.3,1,11.1\n                    c0.6,0.5,1.2,0.9,1.8,1.1v2.2l-1.6-1.5c-1.4-1.4-3.7-1.4-5.2,0c-1.4,1.4-1.5,3.6-0.1,5l4.6,5.4c0.2,1.4,0.7,2.7,1.4,3.9\n                    c0.5,0.9,1.2,1.8,1.9,2.5v1.9c0,0.6,0.4,1,1,1h13.6c0.5,0,1-0.5,1-1v-2.6c1.9-2.3,2.9-5.2,2.9-8.1v-5.8\n                    C30.7,17.9,30.6,17.7,30.4,17.6z M8.4,8.2c0-3.3,2.7-5.9,6-5.8c3.3,0,5.9,2.7,5.8,6c0,1.8-0.8,3.4-2.2,4.5V7.9\n                    c-0.1-1.8-1.6-3.2-3.4-3.2c-1.8-0.1-3.4,1.4-3.4,3.2v5.2C9.5,12.1,8.5,10.2,8.4,8.2L8.4,8.2z M28.7,24c0.1,2.6-0.8,5.1-2.5,7.1\n                    c-0.2,0.2-0.4,0.4-0.4,0.7v2.1H14.2v-1.4c0-0.3-0.2-0.6-0.4-0.8c-0.7-0.6-1.3-1.3-1.8-2.2c-0.6-1-1-2.2-1.2-3.4\n                    c0-0.2-0.1-0.4-0.2-0.6l-4.8-5.7c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.4,0.2-0.9,0.5-1.2c0.7-0.6,1.7-0.6,2.4,0l2.9,2.9v3l1.9-1V7.9\n                    c0.1-0.7,0.7-1.3,1.5-1.2c0.7,0,1.4,0.5,1.4,1.2v11.5l2,0.4v-4.6c0.1-0.1,0.2-0.1,0.3-0.2c0.7,0,1.4,0.1,2.1,0.2v5.1l1.6,0.3v-5.2\n                    l1.2,0.3c0.5,0.1,1,0.3,1.5,0.5v5l1.6,0.3v-4.6c0.9,0.4,1.7,1,2.4,1.7L28.7,24z"/>'),a.ClrShapeResize=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M19,4a1,1,0,0,0,0,2h9.59l-9.25,9.25a1,1,0,1,0,1.41,1.41L30,7.41V17a1,1,0,0,0,2,0V4Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M4,19a1,1,0,0,1,2,0v9.59l9.25-9.25a1,1,0,1,1,1.41,1.41L7.41,30H17a1,1,0,0,1,0,2H4Z"/>'),a.ClrShapeObjects=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M16.08,14.9a10.41,10.41,0,0,1,1.87-.71l-4-10.77a2,2,0,0,0-3.75,0L2,25.26A2,2,0,0,0,3.92,28h6.94a10,10,0,0,1-.52-2H3.92L12.06,4.12Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M32,9H22a2,2,0,0,0-2,2v2.85c.23,0,.46,0,.69,0A10.51,10.51,0,0,1,22,13.9V11H32V21H30.65a10.42,10.42,0,0,1,.45,2H32a2,2,0,0,0,2-2V11A2,2,0,0,0,32,9Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M20.69,15.81a8.5,8.5,0,1,0,8.5,8.5A8.51,8.51,0,0,0,20.69,15.81Zm0,15a6.5,6.5,0,1,1,6.5-6.5A6.51,6.51,0,0,1,20.69,30.81Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M10.65,24.44a9.51,9.51,0,0,1,7.06-9.17L13,3a1,1,0,0,0-1.87,0L2.07,26.56A1,1,0,0,0,3,27.92h8.32A9.44,9.44,0,0,1,10.65,24.44Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M32,10H20a1,1,0,0,0-1,1v4a9.43,9.43,0,0,1,10.63,9H32a1,1,0,0,0,1-1V11A1,1,0,0,0,32,10Z"/>\n            <circle class="clr-i-solid clr-i-solid-path-3" cx="20.15" cy="24.44" r="7.5"/>'),a.ClrShapeBook=c.clrIconSVG('<rect class="clr-i-outline clr-i-outline-path-1" x="10" y="5.2" width="18" height="1.55"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,0,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8ZM28,32H9.86A2,2,0,0,1,8,30V9.55A3.63,3.63,0,0,0,9.86,10H28Z"/>\n            <rect class="clr-i-solid clr-i-solid-path-1" x="10" y="5.2" width="18" height="1.55"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,1,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8Z"/>'),a.ClrShapeAsterisk=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M28.89,20.91l-5-2.91,4.87-2.86a3.11,3.11,0,0,0,1.14-1.08,3,3,0,0,0-4.09-4.15L21,12.76V7a3,3,0,0,0-6,0v5.76L10.15,9.91a3,3,0,1,0-3,5.18l5,2.91L7.2,20.86a3.11,3.11,0,0,0-1.14,1.08,3,3,0,0,0,4.09,4.14L15,23.24V28.9a3,3,0,0,0,2,2.94A3,3,0,0,0,21,29V23.24l4.85,2.85a3,3,0,1,0,3-5.18ZM28.24,24a1,1,0,0,1-1.37.36L19,19.75V29a1,1,0,0,1-2,0V19.75L9.13,24.36a1,1,0,0,1-1-1.72L16,18l-7.9-4.64a1,1,0,1,1,1-1.72L17,16.25V7a1,1,0,0,1,2,0v9.25l7.87-4.62a1,1,0,0,1,1,1.72L20,18l7.9,4.64A1,1,0,0,1,28.24,24Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M28.89,20.91l-5-2.91,4.87-2.86a3.11,3.11,0,0,0,1.14-1.08,3,3,0,0,0-4.09-4.15L21,12.76V7a3,3,0,0,0-6,0v5.76L10.15,9.91a3,3,0,1,0-3,5.18l5,2.91L7.2,20.86a3.11,3.11,0,0,0-1.14,1.08,3,3,0,0,0,4.09,4.14L15,23.24V28.9a3,3,0,0,0,2,2.94A3,3,0,0,0,21,29V23.24l4.85,2.85a3,3,0,1,0,3-5.18Z"/>'),a.ClrShapeScissors=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1"\n            d="M24.06,18.18l9.61-8.77a1,1,0,0,0-.09-1.55l-2.24-1.6a3.57,3.57,0,0,0-4.28.12L15.88,15.3l-3.26-2.52a5.45,5.45,0,1,0-1,1.77l2.62,2L10,20a5.48,5.48,0,1,0,1.59,1.29L28.3,7.94a1.57,1.57,0,0,1,1.88-.05l1.23.88L21.1,18.19l10.31,9.4-1.23.88a1.57,1.57,0,0,1-1.88-.05l-9.81-7.85L17,21.93l10.06,8a3.57,3.57,0,0,0,4.29.12l2.24-1.6a1,1,0,0,0,.09-1.55ZM7.45,14.54a3.46,3.46,0,1,1,3.45-3.46A3.46,3.46,0,0,1,7.45,14.54Zm0,13.72A3.46,3.46,0,1,1,10.9,24.8,3.46,3.46,0,0,1,7.45,28.26Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M33.81,8.13,31.63,6.48a1.92,1.92,0,0,0-2.36,0L10,22.06a5.46,5.46,0,1,0,2,1.81l3.9-3.12L29.27,31.52a1.92,1.92,0,0,0,2.36,0l2.18-1.64L20.94,19ZM7.45,29.75a2.86,2.86,0,1,1,2.86-2.86A2.87,2.87,0,0,1,7.45,29.75Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M14.3,15.24,12,13.38a5.46,5.46,0,1,0-2,1.81L12.16,17Zm-6.85-2a2.86,2.86,0,1,1,2.86-2.86A2.86,2.86,0,0,1,7.45,13.23Z"/>'),a.ClrShapeBug=c.clrIconSVG('<circle class="clr-i-outline clr-i-outline-path-1" cx="23.56" cy="17.74" r="1.95"/>\n            <circle class="clr-i-outline clr-i-outline-path-2" cx="22.42" cy="25.88" r="1.58"/>\n            <circle class="clr-i-outline clr-i-outline-path-3" cx="12.86" cy="17.74" r="1.95"/>\n            <circle class="clr-i-outline clr-i-outline-path-4" cx="13.99" cy="25.88" r="1.58"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M30.83,20H29a19.29,19.29,0,0,0-1.18-5.73l1.46-.79a1,1,0,0,0-.95-1.76l-3,1.64A17.65,17.65,0,0,1,27,20.72C27,27,23.8,31.23,18.8,31.62V15H17.2V31.62C12.22,31.21,9,27,9,20.72a17.74,17.74,0,0,1,1.73-7.34L7.7,11.72a1,1,0,0,0-.95,1.76l1.5.8A19.38,19.38,0,0,0,7.07,20H5.17a1,1,0,0,0,0,2H7.1a14.62,14.62,0,0,0,1.66,6.17L6.87,29.49A1,1,0,1,0,8,31.12l1.84-1.29A10.38,10.38,0,0,0,18,33.66a10.38,10.38,0,0,0,8.14-3.81L28,31.12a1,1,0,1,0,1.15-1.64l-1.86-1.3A14.61,14.61,0,0,0,28.94,22h1.89a1,1,0,0,0,0-2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-6" d="M11.51,5.36a1.67,1.67,0,0,0,1.07-.51A3.21,3.21,0,0,1,13.76,6a16.38,16.38,0,0,0-2.65,2.89,2,2,0,0,0,1.61,3.19H23.32A2,2,0,0,0,25.1,11a2,2,0,0,0-.17-2.1A16.34,16.34,0,0,0,22.25,6a3.21,3.21,0,0,1,1.17-1.11A1.68,1.68,0,1,0,23,3.27,4.77,4.77,0,0,0,21,5a5.81,5.81,0,0,0-2.93-1,5.83,5.83,0,0,0-3,1A4.77,4.77,0,0,0,13,3.27a1.68,1.68,0,1,0-1.49,2.09ZM18,6.07c1.45,0,3.53,1.57,5.31,4h0l-10.6,0C14.49,7.63,16.56,6.07,18,6.07Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M30.83,20H29a19.29,19.29,0,0,0-1.18-5.73l1.46-.79a1,1,0,0,0-.95-1.76l-3,1.28H10.78L7.7,11.72a1,1,0,0,0-.95,1.76l1.5.8A19.38,19.38,0,0,0,7.07,20H5.17a1,1,0,0,0,0,2H7.1a14.62,14.62,0,0,0,1.66,6.17L6.87,29.49A1,1,0,1,0,8,31.12l1.84-1.29A10.29,10.29,0,0,0,17,33.6V15h2V33.6a10.29,10.29,0,0,0,7.16-3.75L28,31.12a1,1,0,1,0,1.15-1.64l-1.86-1.3A14.61,14.61,0,0,0,28.94,22h1.89a1,1,0,0,0,0-2ZM10.91,17.74a1.95,1.95,0,1,1,1.95,1.95A1.95,1.95,0,0,1,10.91,17.74ZM14,27.46a1.58,1.58,0,1,1,1.58-1.58A1.58,1.58,0,0,1,14,27.46Zm8.43,0A1.58,1.58,0,1,1,24,25.88,1.58,1.58,0,0,1,22.42,27.46Zm1.13-7.77a1.95,1.95,0,1,1,1.95-1.95A1.95,1.95,0,0,1,23.56,19.69Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M11.23,5.26a1.67,1.67,0,0,0,.54-.32,5.9,5.9,0,0,1,.89.58,7.44,7.44,0,0,1,.95.94A18.48,18.48,0,0,0,10.79,9.7c-.4.57.09,1.28.86,1.28H24.44c.77,0,1.26-.71.86-1.28a18.38,18.38,0,0,0-2.88-3.28,7.28,7.28,0,0,1,.91-.9,5.9,5.9,0,0,1,.89-.58,1.69,1.69,0,1,0-.56-1.51,7.49,7.49,0,0,0-1.32.83,9.06,9.06,0,0,0-1.19,1.18A5.85,5.85,0,0,0,18,4.3a5.91,5.91,0,0,0-3.17,1.19,9.2,9.2,0,0,0-1.22-1.21,7.49,7.49,0,0,0-1.32-.83,1.68,1.68,0,1,0-1.11,1.83Z"/>'),a.ClrShapeThermometer=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M19,23.17V11.46H17V23.2a3,3,0,1,0,2,0Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M26,15a1,1,0,0,0,0-2H23.92V11H26a1,1,0,0,0,0-2H23.92V8a6,6,0,0,0-12,0V20.81a8,8,0,1,0,12-.2V19H26a1,1,0,0,0,0-2H23.92V15ZM24,26a6,6,0,1,1-10.36-4.12l.27-.29V8a4,4,0,0,1,8,0V21.44l.3.29A6,6,0,0,1,24,26Z"/>'),a.ClrShapePencil=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33.87,8.32,28,2.42a2.07,2.07,0,0,0-2.92,0L4.27,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13.09,32,33.87,11.24A2.07,2.07,0,0,0,33.87,8.32ZM12.09,30.2,4.32,31.83l1.77-7.62L21.66,8.7l6,6ZM29,13.25l-6-6,3.48-3.46,5.9,6Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M4.22,23.2l-1.9,8.2a2.06,2.06,0,0,0,2,2.5,2.14,2.14,0,0,0,.43,0L13,32,28.84,16.22,20,7.4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M33.82,8.32l-5.9-5.9a2.07,2.07,0,0,0-2.92,0L21.72,5.7l8.83,8.83,3.28-3.28A2.07,2.07,0,0,0,33.82,8.32Z"/>'),a.ClrShapeNote=c.clrIconSVG('<path d="M28,30H6V8H19.22l2-2H6A2,2,0,0,0,4,8V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15l-2,2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M33.53,5.84,30.16,2.47a1.61,1.61,0,0,0-2.28,0L14.17,16.26l-1.11,4.81A1.61,1.61,0,0,0,14.63,23,1.69,1.69,0,0,0,15,23l4.85-1.07L33.53,8.12A1.61,1.61,0,0,0,33.53,5.84ZM18.81,20.08l-3.66.81L16,17.26,26.32,6.87l2.82,2.82ZM30.27,8.56,27.45,5.74,29,4.16,31.84,7Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M33,6.4,29.3,2.7a1.71,1.71,0,0,0-2.36,0L23.65,6H6A2,2,0,0,0,4,8V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V11.76l3-3A1.67,1.67,0,0,0,33,6.4ZM18.83,20.13l-4.19.93,1-4.15,9.55-9.57,3.23,3.23ZM29.5,9.43,26.27,6.2l1.85-1.85,3.23,3.23Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeRefresh=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M22.4,11.65a1.09,1.09,0,0,0,1.09,1.09H34.43V1.81a1.09,1.09,0,1,0-2.19,0V8.95a16.41,16.41,0,1,0,1.47,15.86,1.12,1.12,0,0,0-2.05-.9,14.18,14.18,0,1,1-1.05-13.36H23.5A1.09,1.09,0,0,0,22.4,11.65Z"/>'),a.ClrShapeSync=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32.84,15.72a1,1,0,1,0-2,.29A13.15,13.15,0,0,1,31,17.94,13,13,0,0,1,8.7,27h5.36a1,1,0,0,0,0-2h-9v9a1,1,0,1,0,2,0V28.2A15,15,0,0,0,32.84,15.72Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M30.06,1A1.05,1.05,0,0,0,29,2V7.83A14.94,14.94,0,0,0,3,17.94a15.16,15.16,0,0,0,.2,2.48,1,1,0,0,0,1,.84h.16a1,1,0,0,0,.82-1.15A13.23,13.23,0,0,1,5,17.94a13,13,0,0,1,13-13A12.87,12.87,0,0,1,27.44,9H22.06a1,1,0,0,0,0,2H31V2A1,1,0,0,0,30.06,1Z"/>'),a.ClrShapeViewList=c.clrIconSVG('<rect class="clr-i-outline clr-i-outline-path-1" x="2" y="8" width="2" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M7,10H31a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-3" x="2" y="14" width="2" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-4" d="M31,14H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-5" x="2" y="20" width="2" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-6" d="M31,20H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-7" x="2" y="26" width="2" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-8" d="M31,26H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>'),a.ClrShapeViewCards=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M15,17H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,17ZM4,8v7H15V8Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M32,17H21a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,17ZM21,8v7H32V8Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M15,30H4a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H15a2,2,0,0,1,2,2v7A2,2,0,0,1,15,30ZM4,21v7H15V21Z"/>\n                <path class="clr-i-outline clr-i-outline-path-4" d="M32,30H21a2,2,0,0,1-2-2V21a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2v7A2,2,0,0,1,32,30ZM21,21v7H32V21Z"/>'),a.ClrShapeLightbulb=c.clrIconSVG('<path d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h2A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23a9,9,0,0,1,18.07,0A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18.63,15.51a.8.8,0,0,0-1.13,0l-3,3,2.86,3.13v5.54H19V21l-2.24-2.45,1.89-1.89A.8.8,0,0,0,18.63,15.51Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M17.32,10.89l-2.73,2.73a.8.8,0,0,0,1.13,1.13L18.45,12a.8.8,0,1,0-1.13-1.13Z" class="clr-i-outline clr-i-outline-path-5"/>\n            <path d="M19,27.15V21l-2.24-2.45,1.89-1.89a.8.8,0,0,0-1.13-1.13l-3,3,2.86,3.13v5.54Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M15.72,14.75,18.45,12a.8.8,0,1,0-1.13-1.13l-2.73,2.73a.8.8,0,0,0,1.13,1.13Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <path d="M27,12.88c0,.12,0,.23,0,.35A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.63,10.63,0,0,0,1-4.43A7.45,7.45,0,0,1,27,12.88Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <path d="M13.71,27.15A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23,9,9,0,0,1,22.53,5.47a7.45,7.45,0,0,1,.43-2,11,11,0,0,0-16,9.8,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4Z" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge"/>\n            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h5.69V21.61l-2.86-3.13,3-3a.8.8,0,0,1,1.13,1.13l-1.89,1.89L19,21v6.17H24.3a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25ZM18.45,12l-2.73,2.73a.8.8,0,1,1-1.13-1.13l2.73-2.73A.8.8,0,1,1,18.45,12Z" class="clr-i-solid clr-i-solid-path-3"/>\n            <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M22.5,6A7.47,7.47,0,0,1,23,3.44a11,11,0,0,0-16,9.8,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h5.69V21.61l-2.86-3.13,3-3a.8.8,0,0,1,1.13,1.13l-1.89,1.89L19,21v6.17H24.3a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.63,10.63,0,0,0,1-4.43A7.5,7.5,0,0,1,22.5,6Zm-4,6-2.73,2.73a.8.8,0,1,1-1.13-1.13l2.73-2.73A.8.8,0,1,1,18.45,12Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>'),a.ClrShapeDownload=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>'),a.ClrShapeUpload=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline clr-i-outline-path-1" d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M31,31H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h26c0.6,0,1-0.4,1-1S31.6,31,31,31z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M8.8,15L17,6.8v20.6c0,0.6,0.4,1,1,1s1-0.4,1-1V6.8L20.1,8l1-1.8L18,3L7.4,13.6C7,14,6.9,14.6,7.2,15s1,0.5,1.4,0.1C8.7,15.1,8.8,15.1,8.8,15z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeLock=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18.09,20.59A2.41,2.41,0,0,0,17,25.14V28h2V25.23a2.41,2.41,0,0,0-.91-4.64Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM12,10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36V15H12ZM9,32V17H27V32Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M26,15V10.72a8.2,8.2,0,0,0-8-8.36,8.2,8.2,0,0,0-8,8.36V15H7V32a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V15ZM19,25.23V28H17V25.14a2.4,2.4,0,1,1,2,.09ZM24,15H12V10.72a6.2,6.2,0,0,1,6-6.36,6.2,6.2,0,0,1,6,6.36Z"/>'),a.ClrShapeUnlock=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M12,25.14V28h2V25.23a2.42,2.42,0,1,0-2-.09Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M26,2a8.2,8.2,0,0,0-8,8.36V15H2V32a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15H20V10.36A6.2,6.2,0,0,1,26,4a6.2,6.2,0,0,1,6,6.36v6.83a1,1,0,0,0,2,0V10.36A8.2,8.2,0,0,0,26,2ZM22,17V32H4V17Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M26,2a8.2,8.2,0,0,0-8,8.36V15H2V32a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V15H20V10.36A6.2,6.2,0,0,1,26,4a6.2,6.2,0,0,1,6,6.36v6.83a1,1,0,0,0,2,0V10.36A8.2,8.2,0,0,0,26,2ZM14,25.23V28H12V25.14a2.4,2.4,0,1,1,2,.09Z"/>'),a.ClrShapeUsers=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M17.9,17.3c2.7,0,4.8-2.2,4.8-4.9c0-2.7-2.2-4.8-4.9-4.8c-2.7,0-4.8,2.2-4.8,4.8C13,15.1,15.2,17.3,17.9,17.3z M17.8,9.6C17.9,9.6,17.9,9.6,17.8,9.6c1.6,0,2.9,1.3,2.9,2.9s-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8C15,10.9,16.3,9.6,17.8,9.6z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M32.7,16.7c-1.9-1.7-4.4-2.6-7-2.5c-0.3,0-0.5,0-0.8,0c-0.2,0.8-0.5,1.5-0.9,2.1c0.6-0.1,1.1-0.1,1.7-0.1c1.9-0.1,3.8,0.5,5.3,1.6V25h2v-8L32.7,16.7z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M23.4,7.8c0.5-1.2,1.9-1.8,3.2-1.3c1.2,0.5,1.8,1.9,1.3,3.2c-0.4,0.9-1.3,1.5-2.2,1.5c-0.2,0-0.5,0-0.7-0.1c0.1,0.5,0.1,1,0.1,1.4c0,0.2,0,0.4,0,0.6c0.2,0,0.4,0.1,0.6,0.1c2.5,0,4.5-2,4.5-4.4c0-2.5-2-4.5-4.4-4.5c-1.6,0-3,0.8-3.8,2.2C22.5,6.8,23,7.2,23.4,7.8z"/>\n                <path class="clr-i-outline clr-i-outline-path-4" d="M12,16.4c-0.4-0.6-0.7-1.3-0.9-2.1c-0.3,0-0.5,0-0.8,0c-2.6-0.1-5.1,0.8-7,2.4L3,17v8h2v-7.2c1.6-1.1,3.4-1.7,5.3-1.6C10.9,16.2,11.5,16.3,12,16.4z"/>\n                <path class="clr-i-outline clr-i-outline-path-5" d="M10.3,13.1c0.2,0,0.4,0,0.6-0.1c0-0.2,0-0.4,0-0.6c0-0.5,0-1,0.1-1.4c-0.2,0.1-0.5,0.1-0.7,0.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1,0,1.9,0.6,2.3,1.5c0.4-0.5,1-1,1.5-1.4c-1.3-2.1-4-2.8-6.1-1.5c-2.1,1.3-2.8,4-1.5,6.1C7.3,12.3,8.7,13.1,10.3,13.1z"/>\n                <path class="clr-i-outline clr-i-outline-path-6" d="M26.1,22.7l-0.2-0.3c-2-2.2-4.8-3.5-7.8-3.4c-3-0.1-5.9,1.2-7.9,3.4L10,22.7v7.6c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0h12.8c0.9,0,1.7-0.8,1.7-1.7c0,0,0,0,0,0V22.7z M24.1,30H12v-6.6c1.6-1.6,3.8-2.4,6.1-2.4c2.2-0.1,4.4,0.8,6,2.4V30z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M11.09,14.57c.1,0,.2,0,.31,0a6.43,6.43,0,0,1,.09-2,2.09,2.09,0,1,1,1.47-3,6.58,6.58,0,0,1,1.55-1.31,4.09,4.09,0,1,0-3.42,6.33Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M13,18.14a6.53,6.53,0,0,1-1.28-2.2l-.63,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v7h2V19.51a7,7,0,0,1,4.67-1.6A8.09,8.09,0,0,1,13,18.14Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M31.35,18.42A8.59,8.59,0,0,0,25,15.91c-.32,0-.6,0-.9.06a6.53,6.53,0,0,1-1.35,2.25A7.9,7.9,0,0,1,25,17.91a6.94,6.94,0,0,1,4.64,1.58v6.27h2V18.7Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M18.1,19.73A9.69,9.69,0,0,0,11,22.47l-.25.28v7.33a1.57,1.57,0,0,0,1.61,1.54H23.83a1.57,1.57,0,0,0,1.61-1.54V22.73l-.25-.28A9.58,9.58,0,0,0,18.1,19.73Zm5.33,9.88H12.73V23.55a8.08,8.08,0,0,1,5.37-1.82,8,8,0,0,1,5.33,1.8Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M20.28,14.27a2.46,2.46,0,1,1-2.42-2.89,2.44,2.44,0,0,1,1,.24,3.67,3.67,0,0,1,.43-2,4.41,4.41,0,0,0-1.48-.27A4.47,4.47,0,1,0,22.14,15,3.69,3.69,0,0,1,20.28,14.27Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M27.18.8l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H34a1.28,1.28,0,0,0,1.1-1.91L29.39.8A1.28,1.28,0,0,0,27.18.8Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M11.09,14.57c.1,0,.2,0,.31,0a6.43,6.43,0,0,1,.09-2,2.09,2.09,0,1,1,1.47-3,6.58,6.58,0,0,1,1.55-1.31,4.09,4.09,0,1,0-3.42,6.33Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M13,18.14a6.53,6.53,0,0,1-1.28-2.2l-.63,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v7h2V19.51a7,7,0,0,1,4.67-1.6A8.09,8.09,0,0,1,13,18.14Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M31.35,18.42A8.59,8.59,0,0,0,25,15.91c-.32,0-.6,0-.9.06a6.53,6.53,0,0,1-1.35,2.25A7.9,7.9,0,0,1,25,17.91a6.94,6.94,0,0,1,4.64,1.58v6.27h2V18.7Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M17.86,18.3a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,17.86,18.3Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,17.86,11.37Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-5--badged" d="M18.1,19.73A9.69,9.69,0,0,0,11,22.47l-.25.28v7.33a1.57,1.57,0,0,0,1.61,1.54H23.83a1.57,1.57,0,0,0,1.61-1.54V22.73l-.25-.28A9.58,9.58,0,0,0,18.1,19.73Zm5.33,9.88H12.73V23.55a8.08,8.08,0,0,1,5.37-1.82,8,8,0,0,1,5.33,1.8Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-6--badged" d="M26.37,12a2,2,0,0,1-2.09.42,6.53,6.53,0,0,1,.15,1.38,6.59,6.59,0,0,1,0,.68,4,4,0,0,0,.57.06,4.08,4.08,0,0,0,3.3-1.7A7.45,7.45,0,0,1,26.37,12Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-7--badged" d="M22.95,6.93a4.16,4.16,0,0,0-1.47,1.44A6.59,6.59,0,0,1,23,9.77a2.1,2.1,0,0,1,.59-.83A7.44,7.44,0,0,1,22.95,6.93Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" cx="30.33" cy="5.67" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>\n                <path class="clr-i-solid clr-i-solid-path-3" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>\n                <path class="clr-i-solid clr-i-solid-path-4" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/>\n                <circle class="clr-i-solid clr-i-solid-path-5" cx="17.87" cy="13.45" r="4.47"/>\n                <path class="clr-i-solid clr-i-solid-path-6" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted" d="M17.87,17.92a4.46,4.46,0,0,0,4-2.54A3.67,3.67,0,0,1,19,9.89l.35-.61A4.42,4.42,0,0,0,17.87,9a4.47,4.47,0,1,0,0,8.93Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-6--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.58,6.58,0,0,1,12,16.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-4--badged" cx="17.87" cy="13.45" r="4.47"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-5--badged" d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-6--badged" d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19a4.05,4.05,0,0,0,2.52-1,7.5,7.5,0,0,1-5.14-6.32A4.13,4.13,0,0,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-7--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapePopOut=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27,33H5a2,2,0,0,1-2-2V9A2,2,0,0,1,5,7H15V9H5V31H27V21h2V31A2,2,0,0,1,27,33Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,3a1,1,0,0,0,0,2H29.59L15.74,18.85a1,1,0,1,0,1.41,1.41L31,6.41V18a1,1,0,0,0,2,0V3Z"/>'),a.ClrShapeFilter=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2Z"/>\n                <path d="M33.48,4h-31A.52.52,0,0,0,2,4.52V6.24a1.33,1.33,0,0,0,.39.95l12,12v10l7.25,3.61V19.17l12-12A1.35,1.35,0,0,0,34,6.26V4.52A.52.52,0,0,0,33.48,4Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapePin=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33,16.59a1,1,0,0,1-.71-.29L19.7,3.71a1,1,0,0,1,1.41-1.41L33.71,14.89A1,1,0,0,1,33,16.59Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M28.52,15.56l-1.41-1.41-7.2,7.2a1,1,0,0,0-.25,1,9,9,0,0,1-1.53,8.09L5.58,17.87a9,9,0,0,1,8.09-1.53,1,1,0,0,0,1-.25l7.2-7.2L20.44,7.48l-6.79,6.79A10.94,10.94,0,0,0,3.41,17.11a1,1,0,0,0,0,1.42l6.33,6.33L2.29,32.29a1,1,0,1,0,1.41,1.41l7.44-7.44,6.33,6.33a1,1,0,0,0,.71.29h0a1,1,0,0,0,.71-.3,11,11,0,0,0,2.84-10.24Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M33,16.71a1,1,0,0,1-.71-.29L19.7,3.82a1,1,0,0,1,1.41-1.41L33.71,15A1,1,0,0,1,33,16.71Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M20.44,7.59l-6.79,6.79A10.94,10.94,0,0,0,3.41,17.22a1,1,0,0,0,0,1.42L9.73,25,2.29,32.41a1,1,0,1,0,1.41,1.41l7.44-7.44,6.33,6.33a1,1,0,0,0,.71.29h0a1,1,0,0,0,.71-.3,11,11,0,0,0,2.84-10.24l6.79-6.79Z"/>'),a.ClrShapeFile=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V11.92Zm-.3,2.49,6,5.9h-6ZM8,30V6H20v8h8V30Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M21.59,12.39V6.49l1.07,1a7.31,7.31,0,0,1,0-2.82L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V13.5a7.45,7.45,0,0,1-3.91-1.11ZM28,30H8V6H20v8h8Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M28,15.4V30H8V6H20V8.25l2.25-3.9L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V15.4Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V11.92ZM21,13V5.84L28.3,13Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M27.25,13H21V5.84l1.64,1.6a7.25,7.25,0,0,1,0-2.74L21.89,4H7.83A1.88,1.88,0,0,0,6,5.91V30.09A1.88,1.88,0,0,0,7.83,32H28.17A1.88,1.88,0,0,0,30,30.09V13.5A7.47,7.47,0,0,1,27.25,13Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M22.2,15.4c-2,0-3.7-1.6-3.7-3.6c0-0.7,0.2-1.3,0.5-1.9l3.2-5.5L21.9,4H7.8C6.8,4,6,4.9,6,5.9v24.2c0,1,0.8,1.9,1.8,1.9h20.3c1,0,1.8-0.9,1.8-1.9V15.4H22.2z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>'),a.ClrShapePlus=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,17H19V6a1,1,0,1,0-2,0V17H6a1,1,0,0,0-1,1,.91.91,0,0,0,1,.94H17V30a1,1,0,1,0,2,0V19H30a1,1,0,0,0,1-1A1,1,0,0,0,30,17Z"/>'),a.ClrShapeMinus=c.clrIconSVG('<path d="M26,17H10a1,1,0,0,0,0,2H26a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeMinusCircle=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M24,17H12a1,1,0,0,0,0,2H24a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm6,17.5H12a1.5,1.5,0,0,1,0-3H24a1.5,1.5,0,0,1,0,3Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapePlusCircle=c.clrIconSVG('<path d="M26.17,17H19V9.83a1,1,0,0,0-2,0V17H9.83a1,1,0,0,0,0,2H17v7.17a1,1,0,0,0,2,0V19h7.17a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M34,18A16,16,0,1,1,18,2,16,16,0,0,1,34,18Zm-8.41-1.5H19.5V10.41a1.5,1.5,0,0,0-3,0V16.5H10.41a1.5,1.5,0,0,0,0,3H16.5v6.09a1.5,1.5,0,0,0,3,0V19.5h6.09a1.5,1.5,0,0,0,0-3Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeBan=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18A13.93,13.93,0,0,1,7.43,8.85L27.15,28.57A14,14,0,0,1,4,18Zm24.57,9.15L8.85,7.43A14,14,0,0,1,28.57,27.15Z"/>'),a.ClrShapeTimesCircle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M19.61,18l4.86-4.86a1,1,0,0,0-1.41-1.41L18.2,16.54l-4.89-4.89a1,1,0,0,0-1.41,1.41L16.78,18,12,22.72a1,1,0,1,0,1.41,1.41l4.77-4.77,4.74,4.74a1,1,0,0,0,1.41-1.41Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,22.1a1.4,1.4,0,0,1-2,2l-6-6L12,26.12a1.4,1.4,0,1,1-2-2L16,18.08,9.83,11.86a1.4,1.4,0,1,1,2-2L18,16.1l6.17-6.17a1.4,1.4,0,1,1,2,2L20,18.08Z"/>'),a.ClrShapeTrash=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-3" x="21" y="13" width="2" height="15"/>\n                <rect class="clr-i-outline clr-i-outline-path-4" x="13" y="13" width="2" height="15"/>\n                <path class="clr-i-outline clr-i-outline-path-5" d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M6,9V31a2.93,2.93,0,0,0,2.86,3H27.09A2.93,2.93,0,0,0,30,31V9Zm9,20H13V14h2Zm8,0H21V14h2Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M30.73,5H23V4A2,2,0,0,0,21,2h-6.2A2,2,0,0,0,13,4V5H5A1,1,0,1,0,5,7H30.73a1,1,0,0,0,0-2Z"/>'),a.ClrShapeTag=c.clrIconSVG('<circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM20.62,30.52,6,15.91V6h9.92l14.6,14.62Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M31.93,19.2l-3.8-3.8H25.31l5.22,5.22-9.9,9.9L6,15.91V6h9.92l3.41,3.41,1-1.78-3-3A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"/>\n            <circle cx="10.52" cy="10.52" r="1.43" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM20.62,30.52,6,15.91V6h9.92l14.6,14.62Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>\n            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M28.46,15.73H22.23A3.68,3.68,0,0,1,19,10.22l1.43-2.47L17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9a2,2,0,0,0,0-2.83ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.47l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1.47A1.28,1.28,0,0,0,26.85,1.47Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n            <path d="M31.93,19.2,17.33,4.6A2,2,0,0,0,15.92,4L6,4A2,2,0,0,0,4,6l0,9.92a2,2,0,0,0,.59,1.41l14.6,14.6a2,2,0,0,0,2.83,0l9.9-9.9A2,2,0,0,0,31.93,19.2ZM9.65,11.31a1.66,1.66,0,1,1,1.66-1.66A1.66,1.66,0,0,1,9.65,11.31Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6.33" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>'),a.ClrShapeTags=c.clrIconSVG('<path d="M33.16,19.13,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L31.75,20.45,21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <circle cx="7.81" cy="11.14" r="1.33" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M27.78,19.17,14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM17.26,29.69,3.69,16.15V7h9.1L26.37,20.48Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <circle cx="7.81" cy="11.14" r="1.33" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M27.78,19.17,14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM17.26,29.69,3.69,16.15V7h9.1L26.37,20.48Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M33.16,19.13,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L31.75,20.45,21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <circle cx="7.81" cy="11.14" r="1.33" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M27.78,19.17,24,15.4H22.23A3.65,3.65,0,0,1,21,15.19l5.33,5.29-9.11,9.21L3.69,16.15V7h9.1l6,5.94a3.68,3.68,0,0,1,.1-2.69L14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M20.83,6.8,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L19.79,8.6Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M33.16,19.13,29.43,15.4H26.65l5.1,5L21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>\n            <path d="M33.16,19.13,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L31.75,20.45,21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M27.78,19.17,14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM6.67,11.72A1.73,1.73,0,1,1,8.4,10,1.73,1.73,0,0,1,6.67,11.72Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M27.78,19.17,14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM6.67,11.72A1.73,1.73,0,1,1,8.4,10,1.73,1.73,0,0,1,6.67,11.72Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M33.16,19.13,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L31.75,20.45,21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n            <path d="M20.83,6.8,19.58,5.55A1.92,1.92,0,0,0,18.21,5H16.12L19.79,8.6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M33.16,19.13,29.43,15.4H26.65l5.1,5L21.22,31.07a1.93,1.93,0,0,0,2.73,0l9.21-9.21a1.93,1.93,0,0,0,0-2.73Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M27.78,19.17,24,15.4H22.23a3.67,3.67,0,0,1-3.36-5.15L14.2,5.58A1.92,1.92,0,0,0,12.83,5H3.61A1.93,1.93,0,0,0,1.68,6.93v9.22a1.92,1.92,0,0,0,.57,1.36L15.84,31.1a1.93,1.93,0,0,0,2.73,0l9.21-9.21A1.93,1.93,0,0,0,27.78,19.17ZM6.67,11.72A1.73,1.73,0,1,1,8.4,10,1.73,1.73,0,0,1,6.67,11.72Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>'),a.ClrShapeHistory=c.clrIconSVG('<path d="M18,9.83a1,1,0,0,0-1,1v8.72l5.9,4A1,1,0,0,0,24,21.88l-5-3.39V10.83A1,1,0,0,0,18,9.83Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18,2A16.09,16.09,0,0,0,4,10.26V5.2a1,1,0,0,0-2,0V14h8.8a1,1,0,0,0,0-2H5.35A14,14,0,1,1,8.58,28.35a1,1,0,0,0-1.35,1.48A16,16,0,1,0,18,2Z" class="clr-i-outline clr-i-outline-path-2"/>'),a.ClrShapeClock=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18.92,18.4V10.75a1,1,0,0,0-2,0v8.72l5.9,4a1,1,0,1,0,1.11-1.66Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M8,17.94A9.94,9.94,0,0,1,23.41,9.59l.85-1.36a11.55,11.55,0,1,0-8.53,21L16,27.7A10,10,0,0,1,8,17.94Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M18.92,10.75a1,1,0,0,0-2,0v8.72l5.9,4a1,1,0,1,0,1.11-1.66l-5-3.39Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M33.12,12.81a7.44,7.44,0,0,1-1.91.58,14.05,14.05,0,1,1-8.6-8.6,7.44,7.44,0,0,1,.58-1.91,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M18,6.38a11.56,11.56,0,0,0-2.27,22.89L16,27.7a10,10,0,1,1,7.39-18.1h0a7.45,7.45,0,0,1-.78-2.23A11.45,11.45,0,0,0,18,6.38Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M18.92,10.75a1,1,0,0,0-2,0v8.72l5.9,4a1,1,0,1,0,1.11-1.66l-5-3.39Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M33.77,15.39h-2A14,14,0,1,1,22.09,4.61l1-1.76A16,16,0,1,0,34,18,16,16,0,0,0,33.77,15.39Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M18,8a9.81,9.81,0,0,1,2,.23l.85-1.46a11.55,11.55,0,1,0-5.13,22.52L16,27.7A10,10,0,0,1,18,8Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm6.2,21.18a1,1,0,0,1-1.39.28l-5.9-4V10.75a1,1,0,0,1,2,0V18.4l5,3.39A1,1,0,0,1,24.2,23.18ZM23.85,8.23a11.39,11.39,0,1,0-8.54,20.83L15,30.63a13,13,0,1,1,9.7-23.77Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M33.12,12.81A7.48,7.48,0,0,1,22.68,7.63,11.24,11.24,0,0,0,18,6.6a11.39,11.39,0,0,0-2.69,22.47L15,30.63A13,13,0,0,1,18,5a12.81,12.81,0,0,1,4.51.82,7.46,7.46,0,0,1,.68-2.94,16.06,16.06,0,1,0,9.93,9.93ZM24.2,23.18a1,1,0,0,1-1.39.28l-5.9-4V10.75a1,1,0,0,1,2,0V18.4l5,3.39A1,1,0,0,1,24.2,23.18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n            <path d="M33.77,15.39H22.23A3.69,3.69,0,0,1,19,13.56c0-.09-.09-.18-.13-.27V18.4l5,3.39a1,1,0,0,1-1.11,1.66l-5.9-4V10.75a1,1,0,0,1,1.91-.41A3.65,3.65,0,0,1,19,9.89L20.74,7A11.19,11.19,0,0,0,18,6.6a11.39,11.39,0,0,0-2.69,22.47L15,30.63A13,13,0,0,1,18,5a12.8,12.8,0,0,1,3.57.51l1.53-2.66A16,16,0,1,0,34,18,16,16,0,0,0,33.77,15.39Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert"/>'),a.ClrShapeAlarmClock=c.clrIconSVG('<path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M16.4,4.09A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,16.4,4.09ZM19.58,29.9A12,12,0,1,1,29.92,19.56,12,12,0,0,1,19.58,29.9Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M24.92,20.34l-6.06-3V9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4h-2a12.07,12.07,0,1,1-8.67-9l1-1.8a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M28,27.78A13.88,13.88,0,0,0,31.77,15.4H22.23A3.69,3.69,0,0,1,19,13.56L19,13.4v3.78L25,20.1a1,1,0,1,1-.87,1.8L17,18.44V9.69a1,1,0,0,1,2,0V10L19,9.89l3-5.28a14,14,0,0,0-14,23.27L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39A7.46,7.46,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Zm-2.52-6.35a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39,7,7,0,0,1-2.11.05A12,12,0,1,1,22.56,6.9,7.54,7.54,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M31.47,3.84a5.78,5.78,0,0,0-7.37-.63,16.08,16.08,0,0,1,8.2,7.65A5.73,5.73,0,0,0,31.47,3.84Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M18,4A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41L28,27.78A14,14,0,0,0,18,4Zm7.47,17.43a1,1,0,0,1-1.33.47L17,18.44V9.69a1,1,0,0,1,2,0v7.5L25,20.1A1,1,0,0,1,25.49,21.43Z" class="clr-i-solid clr-i-solid-path-3"/>'),a.ClrShapeCircleArrow=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18.08,8.26l-7.61,7.61a1,1,0,1,0,1.41,1.41L17,12.18v15a1,1,0,0,0,2,0V12l5.28,5.28a1,1,0,1,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,15.57a1.43,1.43,0,0,1-2,0L19.4,13V27.14a1.4,1.4,0,0,1-2.8,0v-14l-4.43,4.43a1.4,1.4,0,0,1-2-2L18.08,7.7,26,15.59A1.4,1.4,0,0,1,26,17.57Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeChildArrow=c.clrIconSVG('<path d="M24.82,15.8a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L27.2,21H9V3.78a1,1,0,1,0-2,0V21a2,2,0,0,0,2,2H27.15l-3.74,3.75a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29L31,22Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeCopy=c.clrIconSVG('<path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M27,3.56A1.56,1.56,0,0,0,25.43,2H5.57A1.56,1.56,0,0,0,4,3.56V28.44A1.56,1.56,0,0,0,5.57,30h.52V4.07H27Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <rect x="8" y="6" width="23" height="28" rx="1.5" ry="1.5" class="clr-i-solid clr-i-solid-path-2"/>'),a.ClrShapeHelp=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18.29,8.92a7.38,7.38,0,0,0-5.72,2.57,1,1,0,0,0-.32.71.92.92,0,0,0,.95.92,1.08,1.08,0,0,0,.71-.29,5.7,5.7,0,0,1,4.33-2c2.36,0,3.83,1.52,3.83,3.41v.05c0,2.21-1.76,3.44-4.54,3.65a.8.8,0,0,0-.76.92s0,2.32,0,2.75a1,1,0,0,0,1,.9h.11a1,1,0,0,0,.9-1V19.45c3-.42,5.43-2,5.43-5.28v-.05C24.18,11.12,21.84,8.92,18.29,8.92Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <circle cx="17.78" cy="26.2" r="1.25" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M24.18,14.17v-.05c0-3-2.34-5.2-5.88-5.2a7.38,7.38,0,0,0-5.72,2.57,1,1,0,0,0-.32.71.92.92,0,0,0,.95.92,1.08,1.08,0,0,0,.71-.29,5.7,5.7,0,0,1,4.33-2c2.36,0,3.83,1.52,3.83,3.41v.05c0,2.21-1.76,3.44-4.54,3.65a.8.8,0,0,0-.76.92s0,2.32,0,2.75a1,1,0,0,0,1,.9h.11a1,1,0,0,0,.9-1V19.45C21.75,19,24.18,17.45,24.18,14.17Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <circle cx="17.78" cy="26.2" r="1.25" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M33.12,12.81a7.43,7.43,0,0,1-1.91.58,14.05,14.05,0,1,1-8.6-8.6,7.44,7.44,0,0,1,.58-1.91,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M33.12,12.81a7.49,7.49,0,0,1-9.93-9.93,16.06,16.06,0,1,0,9.93,9.93Zm-15.34,15a1.65,1.65,0,1,1,1.65-1.65A1.65,1.65,0,0,1,17.78,27.85Zm1.37-8.06v1.72a1.37,1.37,0,0,1-1.3,1.36h-.11a1.34,1.34,0,0,1-1.39-1.3c0-.44,0-2.76,0-2.76a1.19,1.19,0,0,1,1.12-1.31c1.57-.12,4.18-.7,4.18-3.25,0-1.83-1.41-3.07-3.43-3.07a5.31,5.31,0,0,0-4,1.92,1.36,1.36,0,0,1-2.35-.9,1.43,1.43,0,0,1,.43-1,7.77,7.77,0,0,1,6-2.69c3.7,0,6.28,2.3,6.28,5.6C24.58,17.16,22.61,19.2,19.15,19.79Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm-.22,25.85a1.65,1.65,0,1,1,1.65-1.65A1.65,1.65,0,0,1,17.78,27.85Zm1.37-8.06v1.72a1.37,1.37,0,0,1-1.3,1.36h-.11a1.34,1.34,0,0,1-1.39-1.3c0-.44,0-2.76,0-2.76a1.19,1.19,0,0,1,1.12-1.31c1.57-.12,4.18-.7,4.18-3.25,0-1.83-1.41-3.07-3.43-3.07a5.31,5.31,0,0,0-4,1.92,1.36,1.36,0,0,1-2.35-.9,1.43,1.43,0,0,1,.43-1,7.77,7.77,0,0,1,6-2.69c3.7,0,6.28,2.3,6.28,5.6C24.58,17.16,22.61,19.2,19.15,19.79Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeLogin=c.clrIconSVG('<path d="M28,4H12a2,2,0,0,0-2,2H28V30H12V20.2H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M15.12,18.46a1,1,0,1,0,1.41,1.41l5.79-5.79L16.54,8.29a1,1,0,0,0-1.41,1.41L18.5,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1H18.5Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M28,4H12a2,2,0,0,0-2,2v7h8.5L15.12,9.71a1,1,0,0,1,1.41-1.41l5.79,5.79-5.79,5.79a1,1,0,0,1-1.41-1.41L18.5,15H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M10,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1h6Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeLogout=c.clrIconSVG('<path d="M7,6H23v9.8h2V6a2,2,0,0,0-2-2H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2H7Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H15.63a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14.5l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M23,4H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2V24H15.63a1,1,0,0,1-1-1,1,1,0,0,1,1-1H25V6A2,2,0,0,0,23,4Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H25v2h5.13l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z" class="clr-i-solid clr-i-solid-path-2"/>'),a.ClrShapePrinter=c.clrIconSVG('<path d="M29,9H27V5H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5V13a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2v9H29.08V24H33V13A4,4,0,0,0,29,9ZM25,9H11V7H25Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <rect x="27" y="13.04" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <polygon points="31 15.4 31 22.09 29.08 22.09 29.08 24 33 24 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M5,13a2,2,0,0,1,2-2H18.64A3.65,3.65,0,0,1,19,9.89L19.54,9H11V7h9.71l1.13-2H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M28,18H8a1,1,0,0,0,0,2H9V32H27V20h1a1,1,0,0,0,0-2ZM25,30H11V20H25Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <rect x="27" y="13.04" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M33,12.88a7.45,7.45,0,0,1-2,.55v8.66H29.08V24H33V13C33,13,33,12.93,33,12.88Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M5,13a2,2,0,0,1,2-2H24.42a7.5,7.5,0,0,1-1.27-2H11V7H22.57a7.52,7.52,0,0,1-.07-1,7.54,7.54,0,0,1,.07-1H9V9H7a4,4,0,0,0-4,4V24H6.92V22.09H5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>\n            <path d="M29,9H27V5H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V13A4,4,0,0,0,29,9ZM25,24v6H11V19H25ZM25,9H11V7H25Zm4,6H27V13h2Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L19.54,9H11V7h9.71l1.13-2H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V15.4ZM25,24v6H11V19H25Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n            <path d="M33,12.88a7.3,7.3,0,0,1-4,.55V15H27V13h.32a7.52,7.52,0,0,1-4.18-4H11V7H22.57a7.52,7.52,0,0,1-.07-1,7.54,7.54,0,0,1,.07-1H9V9H7a4,4,0,0,0-4,4V24H9v8H27V24h6V13C33,13,33,12.93,33,12.88ZM25,24v6H11V19H25Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>'),a.ClrShapeWorld=c.clrIconSVG('<path d="M26.54,18a19.38,19.38,0,0,0-.43-4h3.6a12.3,12.3,0,0,0-.67-1.6H25.69A19.72,19.72,0,0,0,22.8,6.53a12.3,12.3,0,0,0-2.55-.76,17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26A19.67,19.67,0,0,0,26.54,18Zm-9.29,4.37H11.51a17.69,17.69,0,0,1-.09-8.4h5.83Zm7.24,0H18.75V14h5.83A18.21,18.21,0,0,1,25,18,18.12,18.12,0,0,1,24.49,22.37Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M33.12,12.81a7.44,7.44,0,0,1-1.91.58,14.05,14.05,0,1,1-8.6-8.6,7.43,7.43,0,0,1,.58-1.91,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M20.25,5.77a17.83,17.83,0,0,1,3.89,6.59H18.75V5.6c-.25,0-.51,0-.77,0s-.49,0-.73,0v6.77H11.86a17.83,17.83,0,0,1,3.9-6.6,12.28,12.28,0,0,0-2.54.75,19.72,19.72,0,0,0-2.91,5.85H6.94A12.3,12.3,0,0,0,6.26,14H9.89a19.38,19.38,0,0,0-.43,4,19.67,19.67,0,0,0,.5,4.37H6.42A12.34,12.34,0,0,0,7.16,24h3.23a19.32,19.32,0,0,0,2.69,5.36,12.28,12.28,0,0,0,2.61.79A17.91,17.91,0,0,1,12,24h5.26v6.34c.24,0,.49,0,.73,0s.51,0,.77,0V24H24a17.9,17.9,0,0,1-3.7,6.15,12.28,12.28,0,0,0,2.62-.81A19.32,19.32,0,0,0,25.61,24h3.2a12.34,12.34,0,0,0,.74-1.6H26a19.67,19.67,0,0,0,.5-4.37,19.38,19.38,0,0,0-.43-4h3.6c-.06-.17-.12-.33-.19-.49a7.45,7.45,0,0,1-3.47-1.11h-.36c0-.11-.08-.21-.11-.32a7.48,7.48,0,0,1-3.06-5.62A12.41,12.41,0,0,0,20.25,5.77Zm-3,16.59H11.51a17.69,17.69,0,0,1-.09-8.4h5.83ZM25,18a18.12,18.12,0,0,1-.55,4.37H18.75V14h5.83A18.21,18.21,0,0,1,25,18Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>\n            <path d="M10.05,18a20.46,20.46,0,0,0,.62,4.93h6.48V13.45H10.58A20.55,20.55,0,0,0,10.05,18Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M18.85,13.45v9.48h6.48A20.46,20.46,0,0,0,26,18a20.55,20.55,0,0,0-.52-4.55Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM30.22,24.71H26.6a21.8,21.8,0,0,1-3,6,13.86,13.86,0,0,1-3,.92,20.21,20.21,0,0,0,4.18-6.94H18.86v7.15c-.29,0-.57,0-.86,0s-.55,0-.83,0V24.71H11.22a20.21,20.21,0,0,0,4.18,6.95,13.86,13.86,0,0,1-2.94-.9,21.8,21.8,0,0,1-3-6.05H5.78a13.94,13.94,0,0,1-.83-1.81h4A22.2,22.2,0,0,1,8.37,18a21.88,21.88,0,0,1,.48-4.55H4.76a13.88,13.88,0,0,1,.76-1.81H9.33A22.26,22.26,0,0,1,12.61,5a13.86,13.86,0,0,1,2.87-.84,20.13,20.13,0,0,0-4.4,7.45h6.09V4c.28,0,.55,0,.83,0s.58,0,.86,0v7.64h6.09a20.13,20.13,0,0,0-4.39-7.44A13.89,13.89,0,0,1,23.43,5a22.26,22.26,0,0,1,3.27,6.59h3.77a13.89,13.89,0,0,1,.76,1.81H27.17A21.88,21.88,0,0,1,27.66,18a22.2,22.2,0,0,1-.57,4.93h4A13.94,13.94,0,0,1,30.22,24.71Z" class="clr-i-solid clr-i-solid-path-3"/>\n            <path d="M10.05,18a20.46,20.46,0,0,0,.62,4.93h6.48V13.45H10.58A20.55,20.55,0,0,0,10.05,18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M18.85,22.94h6.48A20.46,20.46,0,0,0,26,18a20.55,20.55,0,0,0-.52-4.55H18.85Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M33.12,12.81a7.44,7.44,0,0,1-1.9.58v0H31a6.77,6.77,0,0,1-2.07,0h-1.8A21.88,21.88,0,0,1,27.66,18a22.2,22.2,0,0,1-.57,4.93h4a13.94,13.94,0,0,1-.83,1.81H26.6a21.8,21.8,0,0,1-3,6,13.86,13.86,0,0,1-3,.92,20.21,20.21,0,0,0,4.18-6.94H18.86v7.15c-.29,0-.57,0-.86,0s-.55,0-.83,0V24.71H11.22a20.21,20.21,0,0,0,4.18,6.95,13.86,13.86,0,0,1-2.94-.9,21.8,21.8,0,0,1-3-6.05H5.78a13.94,13.94,0,0,1-.83-1.81h4A22.2,22.2,0,0,1,8.37,18a21.88,21.88,0,0,1,.48-4.55H4.76a13.88,13.88,0,0,1,.76-1.81H9.33A22.26,22.26,0,0,1,12.61,5a13.86,13.86,0,0,1,2.87-.84,20.13,20.13,0,0,0-4.4,7.45h6.09V4c.28,0,.55,0,.83,0s.58,0,.86,0v7.64h6.09l0-.13a7.47,7.47,0,0,1-2.36-4.76,20.37,20.37,0,0,0-2-2.55,14.23,14.23,0,0,1,2.06.56,7.44,7.44,0,0,1,.57-1.86,16.06,16.06,0,1,0,9.93,9.93Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>'),a.ClrShapeSlider=c.clrIconSVG('<path d="M12,12.37A4,4,0,0,0,9,8.48V5A1,1,0,1,0,7,5V8.48a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V16.26A4,4,0,0,0,12,12.37Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,8,14.4Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M32,15.83a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0v6.94a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V19.72A4,4,0,0,0,32,15.83Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,28,17.87Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M22,24.5a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0V20.61a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V28.39A4,4,0,0,0,22,24.5Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,18,26.53Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M9,9.29V5A1,1,0,1,0,7,5V9.3a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V15.43A3.22,3.22,0,0,0,9,9.29Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M19,21.45V5a1,1,0,1,0-2,0V21.47a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V27.6a3.22,3.22,0,0,0,0-6.14Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M29,12.75V5a1,1,0,1,0-2,0v7.76a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V18.89a3.22,3.22,0,0,0,0-6.14Z" class="clr-i-solid clr-i-solid-path-3"/>'),a.ClrShapeClipboard=c.clrIconSVG('<path d="M29.29,5H27V7h2V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V6.69A1.7,1.7,0,0,0,29.29,5Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M26,7.33A2.34,2.34,0,0,0,23.67,5H21.87a4,4,0,0,0-7.75,0H12.33A2.34,2.34,0,0,0,10,7.33V11H26ZM24,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h3.67a.33.33,0,0,1,.33.33Z" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="11" y="14" width="14" height="2" class="clr-i-outline clr-i-outline-path-3" />\n            <rect x="11" y="18" width="14" height="2" class="clr-i-outline clr-i-outline-path-4" />\n            <rect x="11" y="22" width="14" height="2" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="11" y="26" width="14" height="2" class="clr-i-outline clr-i-outline-path-6" />\n            <rect x="11" y="14" width="14" height="2" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <rect x="11" y="18" width="14" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <rect x="11" y="22" width="14" height="2" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <rect x="11" y="26" width="14" height="2" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <path d="M23.13,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h2.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1h-.7a4,4,0,0,0-7.75,0H12.33A2.34,2.34,0,0,0,10,7.33V11H24.42A7.5,7.5,0,0,1,23.13,9Z" class="clr-i-outline--badged clr-i-outline-path-5--badged" />\n            <path d="M30,13.5a7.52,7.52,0,0,1-1-.07V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V13.43A7.52,7.52,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-6--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge" />\n            <path d="M29.29,5H22.17a4.45,4.45,0,0,0-4.11-3A4.46,4.46,0,0,0,14,5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V6.69A1.7,1.7,0,0,0,29.29,5Zm-18,3a1,1,0,0,1,1-1h3.44V6.31a2.31,2.31,0,1,1,4.63,0V7h3.44a1,1,0,0,1,1,1v2H11.31ZM25,28H11V26H25Zm0-4H11V22H25Zm0-4H11V18H25Zm0-4H11V14H25Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,13.5A7.49,7.49,0,0,1,23.66,10H11.31V8a1,1,0,0,1,1-1h3.44V6.31a2.31,2.31,0,1,1,4.63,0V7h2.19a7.54,7.54,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1h-.4a4.45,4.45,0,0,0-4.11-3A4.46,4.46,0,0,0,14,5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V13.43A7.52,7.52,0,0,1,30,13.5ZM25,28H11V26H25Zm0-4H11V22H25Zm0-4H11V18H25Zm0-4H11V14H25Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeFirewall=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM4,8H32v5.08H23.8v-4H22v4H14v-4H12v4H4Zm0,7H32v6.08H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M33.68,15.4H32v5.68H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4V15H20.58a3.58,3.58,0,0,1-1.76-1.92H14v-4H12v4H4V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5a7.47,7.47,0,0,1-2.45-.42H23.8V10.22a7.5,7.5,0,0,1-.63-1.14H22v4H14v-4H12v4H4V8H22.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,30,13.5ZM4,15H32v6.08H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" />\n            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Zm0-8H4V12h8V8h2v4h8V8h2v4h8Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19.35,14H4V12h8V8h2v4h4.57A3.67,3.67,0,0,1,19,9.89L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M24,10.49V12h1.51A7.53,7.53,0,0,1,24,10.49Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M32,13.22V14H4V12h8V8h2v4h8V8h.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />'),a.ClrShapeList=c.clrIconSVG('<rect x="15" y="8" width="9" height="2" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="15" y="12" width="9" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="15" y="16" width="9" height="2" class="clr-i-outline clr-i-outline-path-3" />\n            <rect x="15" y="20" width="9" height="2" class="clr-i-outline clr-i-outline-path-4" />\n            <rect x="15" y="24" width="9" height="2" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="11" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-6" />\n            <rect x="11" y="12" width="2" height="2" class="clr-i-outline clr-i-outline-path-7" />\n            <rect x="11" y="16" width="2" height="2" class="clr-i-outline clr-i-outline-path-8" />\n            <rect x="11" y="20" width="2" height="2" class="clr-i-outline clr-i-outline-path-9" />\n            <rect x="11" y="24" width="2" height="2" class="clr-i-outline clr-i-outline-path-10" />\n            <path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2Zm0,30H8V4H28Z" class="clr-i-outline clr-i-outline-path-11" />\n            <rect x="15" y="12" width="9" height="2" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <rect x="15" y="16" width="9" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <rect x="15" y="20" width="9" height="2" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <rect x="15" y="24" width="9" height="2" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <rect x="11" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-5--badged" />\n            <rect x="11" y="12" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-6--badged" />\n            <rect x="11" y="16" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-7--badged" />\n            <rect x="11" y="20" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-8--badged" />\n            <rect x="11" y="24" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-9--badged" />\n            <path d="M15,8v2h8.66a7.45,7.45,0,0,1-.89-2Z" class="clr-i-outline--badged clr-i-outline-path-10--badged" />\n            <path d="M28,13.22V32H8V4H22.78a7.45,7.45,0,0,1,.88-2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z" class="clr-i-outline--badged clr-i-outline-path-11--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-12--badged clr-i-badge" />\n            <path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Zm0-4H15V8H25Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M23.66,10H15V8h7.78a7.42,7.42,0,0,1,.89-6H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,23.66,10ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeRedo=c.clrIconSVG('<path d="M24,4.22a1,1,0,0,0-1.41,1.42l5.56,5.49h-13A11,11,0,0,0,10.07,32,1,1,0,0,0,11,30.18a9,9,0,0,1-5-8,9.08,9.08,0,0,1,9.13-9h13l-5.54,5.48A1,1,0,0,0,24,20l8-7.91Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeUndo=c.clrIconSVG('<path d="M20.87,11.14h-13l5.56-5.49A1,1,0,0,0,12,4.22L4,12.13,12,20a1,1,0,0,0,1.41-1.42L7.86,13.14h13a9.08,9.08,0,0,1,9.13,9,9,9,0,0,1-5,8A1,1,0,0,0,25.93,32a11,11,0,0,0-5.06-20.82Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeScroll=c.clrIconSVG('<path d="M34,11.12V6.58a4.5,4.5,0,0,0-4.5-4.5h-16A4.5,4.5,0,0,0,9,6.58v23a2.5,2.5,0,1,1-5,0V26H7.19V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5V13.13h-2V29.54a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54Zm-4.5-7A2.5,2.5,0,0,1,32,6.58V9.12H18V6.58a4.48,4.48,0,0,0-.76-2.5Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M28.08,15.4V29.54a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54h2.61A3.66,3.66,0,0,1,19,9.89l.44-.76H18V6.58a4.48,4.48,0,0,0-.76-2.5H22.4l1.15-2H13.5A4.5,4.5,0,0,0,9,6.58v23a2.5,2.5,0,1,1-5,0V26H7.19V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5a7.49,7.49,0,0,1-1.92-.26v16.3a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54h8.54a7.5,7.5,0,0,1-1.35-2H18V6.58a4.48,4.48,0,0,0-.76-2.5h5.52a7.44,7.44,0,0,1,.86-2H13.5A4.5,4.5,0,0,0,9,6.58v23a2.5,2.5,0,1,1-5,0V26H7.19V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5v-16Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" />\n            <path d="M34,11.12V6.58a4.5,4.5,0,0,0-4.5-4.5h-16A4.5,4.5,0,0,0,9,6.58V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5V13.13h-2V29.54a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M28.08,15.4V29.54a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54h2.61A3.66,3.66,0,0,1,19,9.89l4.51-7.8H13.5A4.5,4.5,0,0,0,9,6.58V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5a7.49,7.49,0,0,1-1.92-.26v16.3a2.5,2.5,0,0,1-2.5,2.5H10.24a4.47,4.47,0,0,0,.76-2.5v-23a2.5,2.5,0,0,1,5,0v4.54h8.54a7.46,7.46,0,0,1-.92-9H13.5A4.5,4.5,0,0,0,9,6.58V24H2v5.5A4.5,4.5,0,0,0,6.5,34H25.58a4.5,4.5,0,0,0,4.5-4.5v-16Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeFileSettings=c.clrIconSVG('<path d="M33.83,23.43a1.16,1.16,0,0,0-.71-1.12l-1.68-.5c-.09-.24-.18-.48-.29-.71l.78-1.44a1.16,1.16,0,0,0-.21-1.37l-1.42-1.41a1.16,1.16,0,0,0-1.37-.2l-1.45.76a7.84,7.84,0,0,0-.76-.32l-.48-1.58a1.15,1.15,0,0,0-1.11-.77h-2a1.16,1.16,0,0,0-1.11.82l-.47,1.54a7.76,7.76,0,0,0-.77.32l-1.42-.76a1.16,1.16,0,0,0-1.36.2l-1.45,1.4a1.16,1.16,0,0,0-.21,1.38L17.08,21a7.64,7.64,0,0,0-.31.74l-1.58.47a1.15,1.15,0,0,0-.83,1.11v2a1.15,1.15,0,0,0,.83,1.1l1.59.47a7.53,7.53,0,0,0,.31.72l-.78,1.46a1.16,1.16,0,0,0,.21,1.37l1.42,1.4a1.16,1.16,0,0,0,1.37.21l1.48-.78c.23.11.47.2.72.29L22,33.18a1.16,1.16,0,0,0,1.11.81h2a1.16,1.16,0,0,0,1.11-.82l.47-1.58c.24-.08.47-.18.7-.29l1.5.79a1.16,1.16,0,0,0,1.36-.2l1.42-1.4a1.16,1.16,0,0,0,.21-1.38l-.79-1.45q.16-.34.29-.69L33,26.5a1.15,1.15,0,0,0,.83-1.11Zm-1.6,1.63-2.11.62-.12.42a6,6,0,0,1-.5,1.19l-.21.38,1,1.91-1,1-2-1-.37.2a6.21,6.21,0,0,1-1.2.49l-.42.12-.63,2.09H23.42l-.63-2.08-.42-.12a6.23,6.23,0,0,1-1.21-.49l-.37-.2-1.94,1-1-1,1-1.94-.22-.38A6,6,0,0,1,18.17,26L18,25.63,16,25V23.69L18,23.08l.13-.41a5.94,5.94,0,0,1,.53-1.23L18.9,21l-1-1.85,1-.94,1.89,1,.38-.21a6.23,6.23,0,0,1,1.26-.52l.41-.12.63-2h1.38l.62,2,.41.12A6.21,6.21,0,0,1,27.1,19l.38.21,1.92-1,1,1-1,1.89.21.38a6.08,6.08,0,0,1,.5,1.21l.12.42,2.06.61Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M24.12,20.35a4,4,0,1,0,4.08,4A4.06,4.06,0,0,0,24.12,20.35Zm0,6.46a2.43,2.43,0,1,1,2.48-2.43A2.46,2.46,0,0,1,24.12,26.82Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M14.49,31H6V5H26v7.89a3.2,3.2,0,0,1,2,1.72V5a2,2,0,0,0-2-2H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H16.23l-1.1-1.08A3.11,3.11,0,0,1,14.49,31Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M24.12,20.35a4,4,0,1,0,4.08,4A4.06,4.06,0,0,0,24.12,20.35Zm0,6.46a2.43,2.43,0,1,1,2.48-2.43A2.46,2.46,0,0,1,24.12,26.82Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M33.83,23.43a1.16,1.16,0,0,0-.71-1.12l-1.68-.5c-.09-.24-.18-.48-.29-.71l.78-1.44a1.16,1.16,0,0,0-.21-1.37l-1.42-1.41a1.16,1.16,0,0,0-1.37-.2l-1.45.76a7.84,7.84,0,0,0-.76-.32l-.48-1.58a1.15,1.15,0,0,0-1.11-.77h-2a1.16,1.16,0,0,0-1.11.82l-.47,1.54a7.76,7.76,0,0,0-.77.32l-1.42-.76a1.16,1.16,0,0,0-1.36.2l-1.45,1.4a1.16,1.16,0,0,0-.21,1.38L17.08,21a7.64,7.64,0,0,0-.31.74l-1.58.47a1.15,1.15,0,0,0-.83,1.11v2a1.15,1.15,0,0,0,.83,1.1l1.59.47a7.53,7.53,0,0,0,.31.72l-.78,1.46a1.16,1.16,0,0,0,.21,1.37l1.42,1.4a1.16,1.16,0,0,0,1.37.21l1.48-.78c.23.11.47.2.72.29L22,33.18a1.16,1.16,0,0,0,1.11.81h2a1.16,1.16,0,0,0,1.11-.82l.47-1.58c.24-.08.47-.18.7-.29l1.5.79a1.16,1.16,0,0,0,1.36-.2l1.42-1.4a1.16,1.16,0,0,0,.21-1.38l-.79-1.45q.16-.34.29-.69L33,26.5a1.15,1.15,0,0,0,.83-1.11Zm-1.6,1.63-2.11.62-.12.42a6,6,0,0,1-.5,1.19l-.21.38,1,1.91-1,1-2-1-.37.2a6.21,6.21,0,0,1-1.2.49l-.42.12-.63,2.09H23.42l-.63-2.08-.42-.12a6.23,6.23,0,0,1-1.21-.49l-.37-.2-1.94,1-1-1,1-1.94-.22-.38A6,6,0,0,1,18.17,26L18,25.63,16,25V23.69L18,23.08l.13-.41a5.94,5.94,0,0,1,.53-1.23L18.9,21l-1-1.85,1-.94,1.89,1,.38-.21a6.23,6.23,0,0,1,1.26-.52l.41-.12.63-2h1.38l.62,2,.41.12A6.21,6.21,0,0,1,27.1,19l.38.21,1.92-1,1,1-1,1.89.21.38a6.08,6.08,0,0,1,.5,1.21l.12.42,2.06.61Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M14.49,31H6V5H21.87L23,3H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H16.23l-1.1-1.08A3.11,3.11,0,0,1,14.49,31Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" />\n            <path d="M33.83,23.43a1.16,1.16,0,0,0-.71-1.12l-1.68-.5c-.09-.24-.18-.48-.29-.71l.78-1.44a1.16,1.16,0,0,0-.21-1.37l-1.42-1.41a1.16,1.16,0,0,0-1.37-.2l-1.45.76a7.84,7.84,0,0,0-.76-.32l-.48-1.58a1.15,1.15,0,0,0-1.11-.77h-2a1.16,1.16,0,0,0-1.11.82l-.47,1.54a7.76,7.76,0,0,0-.77.32l-1.42-.76a1.16,1.16,0,0,0-1.36.2l-1.45,1.4a1.16,1.16,0,0,0-.21,1.38L17.08,21a7.64,7.64,0,0,0-.31.74l-1.58.47a1.15,1.15,0,0,0-.83,1.11v2a1.15,1.15,0,0,0,.83,1.1l1.59.47a7.53,7.53,0,0,0,.31.72l-.78,1.46a1.16,1.16,0,0,0,.21,1.37l1.42,1.4a1.16,1.16,0,0,0,1.37.21l1.48-.78c.23.11.47.2.72.29L22,33.18a1.16,1.16,0,0,0,1.11.81h2a1.16,1.16,0,0,0,1.11-.82l.47-1.58c.24-.08.47-.18.7-.29l1.5.79a1.16,1.16,0,0,0,1.36-.2l1.42-1.4a1.16,1.16,0,0,0,.21-1.38l-.79-1.45q.16-.34.29-.69L33,26.5a1.15,1.15,0,0,0,.83-1.11Zm-1.6,1.63-2.11.62-.12.42a6,6,0,0,1-.5,1.19l-.21.38,1,1.91-1,1-2-1-.37.2a6.21,6.21,0,0,1-1.2.49l-.42.12-.63,2.09H23.42l-.63-2.08-.42-.12a6.23,6.23,0,0,1-1.21-.49l-.37-.2-1.94,1-1-1,1-1.94-.22-.38A6,6,0,0,1,18.17,26L18,25.63,16,25V23.69L18,23.08l.13-.41a5.94,5.94,0,0,1,.53-1.23L18.9,21l-1-1.85,1-.94,1.89,1,.38-.21a6.23,6.23,0,0,1,1.26-.52l.41-.12.63-2h1.38l.62,2,.41.12A6.21,6.21,0,0,1,27.1,19l.38.21,1.92-1,1,1-1,1.89.21.38a6.08,6.08,0,0,1,.5,1.21l.12.42,2.06.61Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M24.12,20.35a4,4,0,1,0,4.08,4A4.06,4.06,0,0,0,24.12,20.35Zm0,6.46a2.43,2.43,0,1,1,2.48-2.43A2.46,2.46,0,0,1,24.12,26.82Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M14.49,31H6V5H23.08a6.94,6.94,0,0,1,.6-2H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H16.23l-1.1-1.08A3.11,3.11,0,0,1,14.49,31Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M28,15.33V12.71a7,7,0,0,1-2-1v1.88A3.2,3.2,0,0,1,28,15.33Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />\n            <path d="M15.55,31H6V5H26v8.78a2.37,2.37,0,0,1,2,1.57V5a2,2,0,0,0-2-2H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H17.16l-1-1A2.38,2.38,0,0,1,15.55,31Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.54,23.47l-2-.61a7.06,7.06,0,0,0-.58-1.41l1-1.86a.37.37,0,0,0-.07-.44L30.41,17.7a.37.37,0,0,0-.44-.07l-1.85,1A7,7,0,0,0,26.69,18l-.61-2a.37.37,0,0,0-.36-.25h-2a.37.37,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.61l-1.82-1a.37.37,0,0,0-.44.07l-1.47,1.44a.37.37,0,0,0-.07.44l1,1.82a7,7,0,0,0-.61,1.44l-2,.61a.37.37,0,0,0-.26.35v2a.37.37,0,0,0,.26.35l2,.61a7,7,0,0,0,.61,1.41l-1,1.9a.37.37,0,0,0,.07.44L19,32a.37.37,0,0,0,.44.07l1.87-1a7.06,7.06,0,0,0,1.39.57l.61,2a.37.37,0,0,0,.35.26h2a.37.37,0,0,0,.35-.26l.61-2a7,7,0,0,0,1.38-.57l1.89,1a.37.37,0,0,0,.44-.07l1.45-1.45a.37.37,0,0,0,.07-.44l-1-1.88a7.06,7.06,0,0,0,.58-1.39l2-.61a.37.37,0,0,0,.26-.35V23.83A.37.37,0,0,0,33.54,23.47ZM24.7,28.19A3.33,3.33,0,1,1,28,24.86,3.33,3.33,0,0,1,24.7,28.19Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M33.54,23.47l-2-.61a7.06,7.06,0,0,0-.58-1.41l1-1.86a.37.37,0,0,0-.07-.44L30.41,17.7a.37.37,0,0,0-.44-.07l-1.85,1A7,7,0,0,0,26.69,18l-.61-2a.37.37,0,0,0-.36-.25h-2a.37.37,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.61l-1.82-1a.37.37,0,0,0-.44.07l-1.47,1.44a.37.37,0,0,0-.07.44l1,1.82a7,7,0,0,0-.61,1.44l-2,.61a.37.37,0,0,0-.26.35v2a.37.37,0,0,0,.26.35l2,.61a7,7,0,0,0,.61,1.41l-1,1.9a.37.37,0,0,0,.07.44L19,32a.37.37,0,0,0,.44.07l1.87-1a7.06,7.06,0,0,0,1.39.57l.61,2a.37.37,0,0,0,.35.26h2a.37.37,0,0,0,.35-.26l.61-2a7,7,0,0,0,1.38-.57l1.89,1a.37.37,0,0,0,.44-.07l1.45-1.45a.37.37,0,0,0,.07-.44l-1-1.88a7.06,7.06,0,0,0,.58-1.39l2-.61a.37.37,0,0,0,.26-.35V23.83A.37.37,0,0,0,33.54,23.47ZM24.7,28.19A3.33,3.33,0,1,1,28,24.86,3.33,3.33,0,0,1,24.7,28.19Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M15.55,31H6V5H21.87L23,3H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H17.16l-1-1A2.38,2.38,0,0,1,15.55,31Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-1--badged clr-i-badge" />\n            <path d="M33.54,23.47l-2-.61a7.06,7.06,0,0,0-.58-1.41l1-1.86a.37.37,0,0,0-.07-.44L30.41,17.7a.37.37,0,0,0-.44-.07l-1.85,1A7,7,0,0,0,26.69,18l-.61-2a.37.37,0,0,0-.36-.25h-2a.37.37,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.61l-1.82-1a.37.37,0,0,0-.44.07l-1.47,1.44a.37.37,0,0,0-.07.44l1,1.82a7,7,0,0,0-.61,1.44l-2,.61a.37.37,0,0,0-.26.35v2a.37.37,0,0,0,.26.35l2,.61a7,7,0,0,0,.61,1.41l-1,1.9a.37.37,0,0,0,.07.44L19,32a.37.37,0,0,0,.44.07l1.87-1a7.06,7.06,0,0,0,1.39.57l.61,2a.37.37,0,0,0,.35.26h2a.37.37,0,0,0,.35-.26l.61-2a7,7,0,0,0,1.38-.57l1.89,1a.37.37,0,0,0,.44-.07l1.45-1.45a.37.37,0,0,0,.07-.44l-1-1.88a7.06,7.06,0,0,0,.58-1.39l2-.61a.37.37,0,0,0,.26-.35V23.83A.37.37,0,0,0,33.54,23.47ZM24.7,28.19A3.33,3.33,0,1,1,28,24.86,3.33,3.33,0,0,1,24.7,28.19Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <path d="M15.55,31H6V5H23.08a6.94,6.94,0,0,1,.6-2H6A2,2,0,0,0,4,5V31a2,2,0,0,0,2,2H17.16l-1-1A2.38,2.38,0,0,1,15.55,31Z" class="clr-i-solid--badged clr-i-solid-path-3--badged" />\n            <path d="M28,15.36V12.71a7,7,0,0,1-2-1v2A2.37,2.37,0,0,1,28,15.36Z" class="clr-i-solid--badged clr-i-solid-path-4--badged" />'),a.ClrShapeTwoWayArrows=c.clrIconSVG('<path d="M23.43,16.83A1,1,0,0,0,22,18.24L25.72,22H7.83a1,1,0,0,0,0,2H25.72L22,27.7a1,1,0,1,0,1.42,1.41L29.53,23Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M13.24,18.45a1,1,0,0,0,.71-1.71L10.24,13H28.12a1,1,0,0,0,0-2H10.24l3.71-3.73a1,1,0,0,0-1.42-1.41L6.42,12l6.11,6.14A1,1,0,0,0,13.24,18.45Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeSwitch=c.clrIconSVG('<path d="M5.71,14H20.92V12H5.71L9.42,8.27A1,1,0,1,0,8,6.86L1.89,13,8,19.14a1,1,0,1,0,1.42-1.4Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="23" y="12" width="3" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="28" y="12" width="2" height="2" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M27.92,17.86a1,1,0,0,0-1.42,1.41L30.21,23H15v2H30.21L26.5,28.74a1,1,0,1,0,1.42,1.4L34,24Z" class="clr-i-outline clr-i-outline-path-4" />\n            <rect x="10" y="23" width="3" height="2" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="6" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeTools=c.clrIconSVG('<path d="M20,14H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V15A1,1,0,0,0,20,14Zm-.4,6.6H16.4V15.4h3.2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M33.71,12.38,29.62,8.29A1,1,0,0,0,28.92,8h-5V6.05A2,2,0,0,0,22,4H13.84A1.92,1.92,0,0,0,12,6.05V8H7.08a1,1,0,0,0-.71.29L2.29,12.38a1,1,0,0,0-.29.71V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V13.08A1,1,0,0,0,33.71,12.38ZM14,6h8V8H14ZM32,17H22v1.93H32V28H4V18.93H14V17H4V13.5L7.5,10h21L32,13.5Z" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="16.4" y="15.4" width="3.2" height="5.2" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M21,21a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V19H2v9a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19H21Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M33.71,12.38,29.62,8.29A1,1,0,0,0,28.92,8h-5V6.05A2,2,0,0,0,22,4H13.84A1.92,1.92,0,0,0,12,6.05V8H7.08a1,1,0,0,0-.71.29L2.29,12.38a1,1,0,0,0-.29.71V17H15V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v2H34V13.08A1,1,0,0,0,33.71,12.38ZM22,8H14V6h8Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeWindowClose=c.clrIconSVG('<path d="M19.41,18l7.29-7.29a1,1,0,0,0-1.41-1.41L18,16.59,10.71,9.29a1,1,0,0,0-1.41,1.41L16.59,18,9.29,25.29a1,1,0,1,0,1.41,1.41L18,19.41l7.29,7.29a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeWindowMax=c.clrIconSVG('<path d="M27.89,9h-20a2,2,0,0,0-2,2V25a2,2,0,0,0,2,2h20a2,2,0,0,0,2-2V11A2,2,0,0,0,27.89,9Zm-20,16V11h20V25Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeWindowMin=c.clrIconSVG('<path d="M27,27H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeWindowRestore=c.clrIconSVG('<path d="M28,8H14a2,2,0,0,0-2,2v2h2V10H28V20H26v2h2a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M22,14H8a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V16A2,2,0,0,0,22,14ZM8,26V16H22V26Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeZoomIn=c.clrIconSVG('<path d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm0,21.91A10,10,0,1,1,26,16,10,10,0,0,1,16,25.91Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M31.71,29.69l-5.17-5.17A13.68,13.68,0,0,1,25.15,26l5.15,5.15a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M21,15H17V11a1,1,0,0,0-2,0v4H11a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V17h4a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeZoomOut=c.clrIconSVG('<path d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm0,21.91A10,10,0,1,1,26,16,10,10,0,0,1,16,25.91Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M31.71,29.69l-5.17-5.17A13.68,13.68,0,0,1,25.15,26l5.15,5.15a1,1,0,0,0,1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M20,15H12a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeKey=c.clrIconSVG('<rect x="6.33" y="10.71" width="9.71" height="2.57" rx="1" ry="1" transform="translate(-5.21 11.43) rotate(-45)" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M23.35,16.8l.63-.63A5,5,0,0,0,24,9.1L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.4-.4L18,26.48h3.44v3h3.69v1.63L28,34h6V27.45ZM32,32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-3-3L14,23.31a3,3,0,0,1-4.24,0L4.5,18a3,3,0,0,1,0-4.24l8.56-8.56a3,3,0,0,1,4.24,0l5.26,5.26a3,3,0,0,1,0,4.24l-2,2L32,28.28Z" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="6.33" y="10.71" width="9.71" height="2.57" rx="1" ry="1" transform="translate(-5.21 11.43) rotate(-45)" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M23.35,16.8l.63-.63a5,5,0,0,0,.63-.77H22.23l-.29,0L20.52,16.8,32,28.28V32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-3-3L14,23.31a3,3,0,0,1-4.24,0L4.5,18a3,3,0,0,1,0-4.24l8.56-8.56a3,3,0,0,1,4.24,0L20.1,8.06l1-1.79L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.4-.4L18,26.48h3.44v3h3.69v1.63L28,34h6V27.45Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" />\n            <rect x="6.33" y="10.71" width="9.71" height="2.57" rx="1" ry="1" transform="translate(-5.21 11.43) rotate(-45)" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M23.35,16.8l.63-.63A5,5,0,0,0,24,9.1L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.4-.4L18,26.48h3.44v3h3.69v1.63L28,34h6V27.45ZM32,32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-3-3L14,23.31a3,3,0,0,1-4.24,0L4.5,18a3,3,0,0,1,0-4.24l8.56-8.56a3,3,0,0,1,4.24,0l5.26,5.26a3,3,0,0,1,0,4.24l-2,2L32,28.28Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" />\n            <path d="M23.38,16.77l.6-.6A5,5,0,0,0,24,9.1L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.45-.45,2.1,2.2h3.44v3h3.69v1.63L28,34h6V27.45Zm-8.56-6.59L9.37,15.64a1,1,0,0,1-1.41,0l-.4-.4a1,1,0,0,1,0-1.41L13,8.36a1,1,0,0,1,1.41,0l.4.4A1,1,0,0,1,14.82,10.18ZM32,32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-1.52-1.61L22,18.18,32,28.28Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M23.38,16.77l.6-.6a5,5,0,0,0,.63-.77H22.23A3.68,3.68,0,0,1,19,9.89l2.09-3.62L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.45-.45,2.1,2.2h3.44v3h3.69v1.63L28,34h6V27.45Zm-8.56-6.59L9.37,15.64a1,1,0,0,1-1.41,0l-.4-.4a1,1,0,0,1,0-1.41L13,8.36a1,1,0,0,1,1.41,0l.4.4A1,1,0,0,1,14.82,10.18ZM32,32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-1.52-1.61L22,18.18,32,28.28Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M23.38,16.77l.6-.6A5,5,0,0,0,24,9.1L18.71,3.84a5,5,0,0,0-7.07,0L3.09,12.39a5,5,0,0,0,0,7.07l5.26,5.26a5,5,0,0,0,7.07,0l.45-.45,2.1,2.2h3.44v3h3.69v1.63L28,34h6V27.45Zm-8.56-6.59L9.37,15.64a1,1,0,0,1-1.41,0l-.4-.4a1,1,0,0,1,0-1.41L13,8.36a1,1,0,0,1,1.41,0l.4.4A1,1,0,0,1,14.82,10.18ZM32,32H28.86l-1.77-1.76v-2.8H23.41v-3H18.8l-1.52-1.61L22,18.18,32,28.28Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeLibrary=c.clrIconSVG('<path d="M33.48,29.63,26.74,11.82a2,2,0,0,0-2.58-1.16L21,11.85V8.92A1.92,1.92,0,0,0,19.08,7H14V4.92A1.92,1.92,0,0,0,12.08,3H5A2,2,0,0,0,3,5V32a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V19.27l5,13.21a1,1,0,0,0,1.29.58l5.61-2.14a1,1,0,0,0,.58-1.29ZM12,8.83V31H5V5h7ZM19,31H14V9h5Zm8.51-.25L21.13,13.92l3.74-1.42,6.39,16.83Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M12.75,3H5.25A1.15,1.15,0,0,0,4,4V33H14V4A1.15,1.15,0,0,0,12.75,3Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.77,31.09l-6.94-18.3a1,1,0,0,0-1.29-.58L22,13.59V9a1,1,0,0,0-1-1H16V33h6V14.69L28.93,33Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeBolt=c.clrIconSVG('<path d="M10.52,34h-3a1,1,0,0,1-.88-1.44L12.55,21H6a1,1,0,0,1-.85-1.54l10.68-17A1,1,0,0,1,16.64,2H30.07a1,1,0,0,1,.77,1.69L21.78,14h5.38a1,1,0,0,1,.73,1.66l-16.63,18A1,1,0,0,1,10.52,34ZM9.18,32h.91L24.86,16H19.59a1,1,0,0,1-.77-1.69L27.88,4H17.19L7.77,19H14.2a1,1,0,0,1,.88,1.44Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30.8,2.29A.49.49,0,0,0,30.35,2H16.42a.5.5,0,0,0-.42.23l-10.71,17A.49.49,0,0,0,5.7,20h7.67L6.6,33.25a.52.52,0,0,0,.46.75h3a.5.5,0,0,0,.37-.16L28,14.85a.5.5,0,0,0-.37-.85H20.89L30.72,2.82A.49.49,0,0,0,30.8,2.29Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeWrench=c.clrIconSVG('<path d="M33.18,26.11,20.35,13.28A9.28,9.28,0,0,0,7.54,2.79l-1.34.59,5.38,5.38L8.76,11.59,3.38,6.21,2.79,7.54A9.27,9.27,0,0,0,13.28,20.35L26.11,33.18a2,2,0,0,0,2.83,0l4.24-4.24A2,2,0,0,0,33.18,26.11Zm-5.66,5.66L13.88,18.12l-.57.16a7.27,7.27,0,0,1-9.31-7,7.2,7.2,0,0,1,.15-1.48l4.61,4.61,5.66-5.66L9.81,4.15a7.27,7.27,0,0,1,8.47,9.16l-.16.57L31.77,27.53Z" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="27.13" cy="27.09" r="1.3" transform="translate(-11.21 27.12) rotate(-45)" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M33.73,27.72,19.67,13.66a8.79,8.79,0,0,0-12-10.5L13,8.53,8.53,13,3.16,7.67a8.79,8.79,0,0,0,10.5,12L27.72,33.73a1.07,1.07,0,0,0,1.5,0l4.51-4.51A1.07,1.07,0,0,0,33.73,27.72ZM29,29a1.38,1.38,0,1,1,0-2A1.38,1.38,0,0,1,29,29Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeBullseye=c.clrIconSVG('<path d="M18,2a15.92,15.92,0,0,0-4.25.59l.77,1.86a14.07,14.07,0,1,1-10,10l-1.86-.78A16,16,0,1,0,18,2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M7.45,15.7a10.81,10.81,0,1,0,8.3-8.26L16.37,9A9.24,9.24,0,1,1,9,16.32Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18,22.09a4.08,4.08,0,0,1-4-3.68l-1.63-.68c0,.09,0,.18,0,.27A5.69,5.69,0,1,0,18,12.31h-.24L18.43,14A4.07,4.07,0,0,1,18,22.09Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M8.2,13.34a.5.5,0,0,0,.35.15H12.2l5.37,5.37A1,1,0,0,0,19,17.44L13.53,12V8.51a.5.5,0,0,0-.15-.35L7.79,2.57a.5.5,0,0,0-.85.35v4H3a.5.5,0,0,0-.35.85Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M19,18.85a1,1,0,0,1-1.41,0l-3-3A4,4,0,0,0,13.91,18,4.09,4.09,0,1,0,18,13.91a4,4,0,0,0-2,.55l3,3A1,1,0,0,1,19,18.85Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M18,2a15.92,15.92,0,0,0-4.25.59l1.6,3.89A11.89,11.89,0,1,1,6.49,15.3L2.61,13.68A16,16,0,1,0,18,2Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M8,15.94A10.17,10.17,0,1,0,16,8l1.69,4.11.31,0A5.88,5.88,0,1,1,12.12,18c0-.12,0-.23,0-.35Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M8.2,13.34a.5.5,0,0,0,.35.15H12.2l2.35,2.35A4.09,4.09,0,0,1,16,14.46L13.53,12V8.51a.5.5,0,0,0-.15-.35L7.79,2.57a.5.5,0,0,0-.85.35v4H3a.5.5,0,0,0-.35.85Z" class="clr-i-solid clr-i-solid-path-4" />'),a.ClrShapeTarget=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M18,7.2A10.8,10.8,0,1,0,28.8,18,10.81,10.81,0,0,0,18,7.2Zm0,20A9.2,9.2,0,1,1,27.2,18,9.21,9.21,0,0,1,18,27.2Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18,12.31A5.69,5.69,0,1,0,23.69,18,5.69,5.69,0,0,0,18,12.31Zm0,9.77A4.09,4.09,0,1,1,22.09,18,4.09,4.09,0,0,1,18,22.09Z" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="18" cy="18" r="4.09" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M18,7.83A10.17,10.17,0,1,0,28.17,18,10.18,10.18,0,0,0,18,7.83Zm0,16A5.88,5.88,0,1,1,23.88,18,5.88,5.88,0,0,1,18,23.88Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,27.83A11.83,11.83,0,1,1,29.83,18,11.85,11.85,0,0,1,18,29.83Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeFlame=c.clrIconSVG('<path d="M31.3,16.66c-1.19-2.09-7.94-14.15-7.94-14.15a1,1,0,0,0-1.75,0l-6,10.64-3-5.28a1,1,0,0,0-1.75,0S5.4,17.78,4.42,19.5A9.3,9.3,0,0,0,3,24.61C3,29.72,5.86,34,11.67,34H22.48C28.28,34,33,29,33,22.78A11.13,11.13,0,0,0,31.3,16.66ZM22.48,32H11.77C8.13,32,5,28.66,5,24.61a7.43,7.43,0,0,1,1.16-4.13c.73-1.29,4.05-7.21,5.65-10.07l3,5.28a1,1,0,0,0,.87.51h0a1,1,0,0,0,.87-.51L22.49,5c1.86,3.33,6.15,11,7.07,12.6A9.24,9.24,0,0,1,31,22.78C31,27.87,27.18,32,22.48,32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M25.75,21.73c-.65-1.16-4.38-7.81-4.38-7.81a.8.8,0,0,0-1.4,0l-4.2,7.48-1.59-2.49a.8.8,0,0,0-1.35,0L9.37,24.35a4.35,4.35,0,0,0-.82,2.6,4.49,4.49,0,0,0,.5,2H11a3,3,0,0,1-.83-2,2.78,2.78,0,0,1,.56-1.73l2.8-4.38,1.66,2.6a.8.8,0,0,0,1.41-.12,7.82,7.82,0,0,1,.4-.8L20.67,16l3.69,6.57a4.83,4.83,0,0,1,.77,2.71A5,5,0,0,1,23.46,29h2.13a6.68,6.68,0,0,0,1.14-3.74,6.45,6.45,0,0,0-1-3.5Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M31.3,16.32c-1.19-2.09-7.94-14.15-7.94-14.15a1,1,0,0,0-1.75,0l-6,10.64-3-5.28a1,1,0,0,0-1.75,0S5.4,17.43,4.42,19.15A9.3,9.3,0,0,0,3,24.26c0,5.11,3.88,9.65,8.67,9.74H22.48C28.28,34,33,28.62,33,22.44A11.13,11.13,0,0,0,31.3,16.32ZM21.48,32H14.54A4.68,4.68,0,0,1,10,27.41a3.91,3.91,0,0,1,.75-2.34l3.35-5.21a.5.5,0,0,1,.84,0l1.78,2.77,0-.08c.63-1.11,4.23-7.48,4.23-7.48a.5.5,0,0,1,.87,0s3.6,6.38,4.23,7.48A5.83,5.83,0,0,1,27,25.76C27,32,22.1,32,21.48,32Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeHourglass=c.clrIconSVG('<path d="M29,32H26V24.91a6.67,6.67,0,0,0-2.69-5.33l-1.28-1A6.36,6.36,0,0,0,21,18h0a6.29,6.29,0,0,0,1-.62l1.28-1A6.67,6.67,0,0,0,26,11.09V4h3a1,1,0,0,0,0-2H7A1,1,0,0,0,7,4h3v7.09a6.67,6.67,0,0,0,2.69,5.33l1.28,1A6.36,6.36,0,0,0,15,18h0a6.27,6.27,0,0,0-1,.62l-1.28,1A6.67,6.67,0,0,0,10,24.91V32H7a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2ZM12,24.91a4.66,4.66,0,0,1,1.88-3.72l1.28-1a4.66,4.66,0,0,1,1.18-.63,1,1,0,0,0,.65-.94V17.33a1,1,0,0,0-.65-.94,4.67,4.67,0,0,1-1.19-.63l-1.28-1A4.66,4.66,0,0,1,12,11.09V4H24v7.09a4.66,4.66,0,0,1-1.88,3.72l-1.28,1h0a4.66,4.66,0,0,1-1.18.63,1,1,0,0,0-.65.94v1.34a1,1,0,0,0,.65.94,4.67,4.67,0,0,1,1.19.63l1.28,1A4.66,4.66,0,0,1,24,24.91V32H12Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M29,32H26V24.91a6.67,6.67,0,0,0-2.69-5.33l-1.28-1A6.36,6.36,0,0,0,21,18h0a6.29,6.29,0,0,0,1-.62l1.28-1a6.64,6.64,0,0,0,1.09-1H22.23a3.64,3.64,0,0,1-.78-.09l-.62.46h0a4.66,4.66,0,0,1-1.18.63,1,1,0,0,0-.65.94v1.34a1,1,0,0,0,.65.94,4.67,4.67,0,0,1,1.19.63l1.28,1A4.66,4.66,0,0,1,24,24.91V32H12V24.91a4.66,4.66,0,0,1,1.88-3.72l1.28-1a4.66,4.66,0,0,1,1.18-.63,1,1,0,0,0,.65-.94V17.33a1,1,0,0,0-.65-.94,4.67,4.67,0,0,1-1.19-.63l-1.28-1A4.66,4.66,0,0,1,12,11.09V4H22.45L23.6,2H7A1,1,0,0,0,7,4h3v7.09a6.67,6.67,0,0,0,2.69,5.33l1.28,1A6.36,6.36,0,0,0,15,18h0a6.27,6.27,0,0,0-1,.62l-1.28,1A6.67,6.67,0,0,0,10,24.91V32H7a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n            <path d="M29,32H26V24.91a6.67,6.67,0,0,0-2.69-5.33l-1.28-1A6.36,6.36,0,0,0,21,18h0a6.29,6.29,0,0,0,1-.62l1.28-1a6.68,6.68,0,0,0,2.57-4.16A7.53,7.53,0,0,1,24,10.49v.61a4.66,4.66,0,0,1-1.88,3.72l-1.28,1h0a4.66,4.66,0,0,1-1.18.63,1,1,0,0,0-.65.94v1.34a1,1,0,0,0,.65.94,4.67,4.67,0,0,1,1.19.63l1.28,1A4.66,4.66,0,0,1,24,24.91V32H12V24.91a4.66,4.66,0,0,1,1.88-3.72l1.28-1a4.66,4.66,0,0,1,1.18-.63,1,1,0,0,0,.65-.94V17.33a1,1,0,0,0-.65-.94,4.67,4.67,0,0,1-1.19-.63l-1.28-1A4.66,4.66,0,0,1,12,11.09V4H22.78a7.45,7.45,0,0,1,.89-2H7A1,1,0,0,0,7,4h3v7.09a6.67,6.67,0,0,0,2.69,5.33l1.28,1A6.36,6.36,0,0,0,15,18h0a6.27,6.27,0,0,0-1,.62l-1.28,1A6.67,6.67,0,0,0,10,24.91V32H7a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" />\n            <path d="M6.67,4h22a1,1,0,0,0,0-2h-22a1,1,0,1,0,0,2Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M28.67,32h-22a1,1,0,0,0,0,2h22a1,1,0,1,0,0-2Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M22.55,15.67A6.07,6.07,0,0,0,25,11.12V6H10.06v5.12a6.07,6.07,0,0,0,2.45,4.55,11.48,11.48,0,0,0,2.91,1.72v1.16a11.48,11.48,0,0,0-2.91,1.72,6.07,6.07,0,0,0-2.45,4.55v5.12H25V24.82a6.07,6.07,0,0,0-2.45-4.55,11.48,11.48,0,0,0-2.91-1.72V17.39A11.48,11.48,0,0,0,22.55,15.67Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M28.67,32h-22a1,1,0,0,0,0,2h22a1,1,0,1,0,0-2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M6.67,4H22.45L23.6,2H6.67a1,1,0,1,0,0,2Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M12.51,20.27a6.07,6.07,0,0,0-2.45,4.55v5.12H25V24.82a6.07,6.07,0,0,0-2.45-4.55,11.48,11.48,0,0,0-2.91-1.72V17.39a11.48,11.48,0,0,0,2.91-1.72l.3-.27h-.62A3.68,3.68,0,0,1,19,9.89L21.29,6H10.06v5.12a6.07,6.07,0,0,0,2.45,4.55,11.48,11.48,0,0,0,2.91,1.72v1.16A11.48,11.48,0,0,0,12.51,20.27Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />\n            <path d="M28.67,32h-22a1,1,0,0,0,0,2h22a1,1,0,1,0,0-2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M6.67,4H22.78a7.45,7.45,0,0,1,.89-2h-17a1,1,0,1,0,0,2Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <path d="M22.55,20.27a11.48,11.48,0,0,0-2.91-1.72V17.39a11.48,11.48,0,0,0,2.91-1.72A6.25,6.25,0,0,0,25,11.55,7.47,7.47,0,0,1,22.5,6H10.06v5.12a6.07,6.07,0,0,0,2.45,4.55,11.48,11.48,0,0,0,2.91,1.72v1.16a11.48,11.48,0,0,0-2.91,1.72,6.07,6.07,0,0,0-2.45,4.55v5.12H25V24.82A6.07,6.07,0,0,0,22.55,20.27Z" class="clr-i-solid--badged clr-i-solid-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" />'),a.ClrShapeNoAccess=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M27.15,15H8.85A1.85,1.85,0,0,0,7,16.85v2.29A1.85,1.85,0,0,0,8.85,21H27.15A1.85,1.85,0,0,0,29,19.15V16.85A1.85,1.85,0,0,0,27.15,15Zm.25,4.15a.25.25,0,0,1-.25.25H8.85a.25.25,0,0,1-.25-.25V16.85a.25.25,0,0,1,.25-.25H27.15a.25.25,0,0,1,.25.25Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM29.15,20H6.85A.85.85,0,0,1,6,19.15V16.85A.85.85,0,0,1,6.85,16H29.15a.85.85,0,0,1,.85.85v2.29A.85.85,0,0,1,29.15,20Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeOrganization=c.clrIconSVG('<polygon points="9.8 18.8 26.2 18.8 26.2 21.88 27.8 21.88 27.8 17.2 18.8 17.2 18.8 14 17.2 14 17.2 17.2 8.2 17.2 8.2 21.88 9.8 21.88 9.8 18.8" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M14,23H4a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V25A2,2,0,0,0,14,23ZM4,31V25H14v6Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M32,23H22a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V25A2,2,0,0,0,32,23ZM22,31V25H32v6Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M13,13H23a2,2,0,0,0,2-2V5a2,2,0,0,0-2-2H13a2,2,0,0,0-2,2v6A2,2,0,0,0,13,13Zm0-8H23v6H13Z" class="clr-i-outline clr-i-outline-path-4" />\n            <polygon points="9.8 18.8 26.2 18.8 26.2 21.88 27.8 21.88 27.8 17.2 18.8 17.2 18.8 14 17.2 14 17.2 17.2 8.2 17.2 8.2 21.88 9.8 21.88 9.8 18.8" class="clr-i-solid clr-i-solid-path-1" />\n            <rect x="2" y="23" width="14" height="10" rx="2" ry="2" class="clr-i-solid clr-i-solid-path-2" />\n            <rect x="20" y="23" width="14" height="10" rx="2" ry="2" class="clr-i-solid clr-i-solid-path-3" />\n            <rect x="11" y="3" width="14" height="10" rx="2" ry="2" class="clr-i-solid clr-i-solid-path-4" />'),a.ClrShapeBalance=c.clrIconSVG('<path d="M24,33H12a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="17" y="9" width="2" height="22.5" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M28,7H8A1,1,0,0,1,8,5H28a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M26.93,24.79a7.23,7.23,0,0,1-5.81-2.89l-.6-.8,1.59-1.21.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,26.93,24.79Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M30.51,19.25a.8.8,0,0,1-.73-.48L26.93,12.2l-2.85,6.57a.8.8,0,0,1-1.47-.64L26.2,9.87a.83.83,0,0,1,1.47,0l3.58,8.26a.8.8,0,0,1-.73,1.12Z" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M9.68,24.79A7.23,7.23,0,0,1,3.88,21.9l-.6-.8L4.86,19.9l.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,9.68,24.79Z" class="clr-i-outline clr-i-outline-path-6" />\n            <path d="M13.26,19.25a.8.8,0,0,1-.73-.48L9.68,12.2,6.84,18.77a.8.8,0,0,1-1.47-.64L8.95,9.87a.83.83,0,0,1,1.47,0L14,18.13a.8.8,0,0,1-.73,1.12Z" class="clr-i-outline clr-i-outline-path-7" />'),a.ClrShapeIdBadge=c.clrIconSVG('<path d="M18,22a4.23,4.23,0,1,0-4.23-4.23A4.23,4.23,0,0,0,18,22Zm0-6.86a2.63,2.63,0,1,1-2.63,2.63A2.63,2.63,0,0,1,18,15.14Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M22,4a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2v7h8ZM20,9H16V4h4Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M26,30V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27a1.13,1.13,0,0,0-.26.73V30h1.6V27.87A8.33,8.33,0,0,1,18,25.29a8.33,8.33,0,0,1,6.4,2.59V30Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M28,6H24V8h4V32H8V8h4V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M18,22a4.23,4.23,0,1,0-4.23-4.23A4.23,4.23,0,0,0,18,22Zm0-6.86a2.63,2.63,0,1,1-2.63,2.63A2.63,2.63,0,0,1,18,15.14Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M10.26,27a1.13,1.13,0,0,0-.26.73V30h1.6V27.87A8.33,8.33,0,0,1,18,25.29a8.33,8.33,0,0,1,6.4,2.59V30H26V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M19,9.89,19.56,9H16V4h4V8.24l2-3.46V4a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2v7h4.64A3.66,3.66,0,0,1,19,9.89Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M28,15.4V32H8V8h4V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />\n            <path d="M18,22a4.23,4.23,0,1,0-4.23-4.23A4.23,4.23,0,0,0,18,22Zm0-6.86a2.63,2.63,0,1,1-2.63,2.63A2.63,2.63,0,0,1,18,15.14Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M22,4a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2v7h8ZM20,9H16V4h4Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M10.26,27a1.13,1.13,0,0,0-.26.73V30h1.6V27.87A8.33,8.33,0,0,1,18,25.29a8.33,8.33,0,0,1,6.4,2.59V30H26V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M28,13.22V32H8V8h4V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />\n            <circle cx="18" cy="17.77" r="4.23" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M21,4a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2v6h6Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M10.26,27a1.13,1.13,0,0,0-.26.73V30H26V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M28,6H23V8h5V32H8V8h5V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6Z" class="clr-i-solid clr-i-solid-path-4" />\n            <path d="M19,9.89,21,6.5V4a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2v6h4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <circle cx="18" cy="17.77" r="4.23" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M10.26,27a1.13,1.13,0,0,0-.26.73V30H26V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M28,15.4V32H8V8h5V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert" />\n            <circle cx="18" cy="17.77" r="4.23" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M21,4a2,2,0,0,0-2-2H17a2,2,0,0,0-2,2v6h6Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <path d="M10.26,27a1.13,1.13,0,0,0-.26.73V30H26V27.7a1.12,1.12,0,0,0-.26-.73A9.9,9.9,0,0,0,18,23.69,9.9,9.9,0,0,0,10.26,27Z" class="clr-i-solid--badged clr-i-solid-path-3--badged" />\n            <path d="M28,13.22V32H8V8h5V6H8A2,2,0,0,0,6,8V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z" class="clr-i-solid--badged clr-i-solid-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge" />'),a.ClrShapeRepeat=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M6,14.15A3.17,3.17,0,0,1,9.17,11H28.4l-4.28,4.54a1,1,0,1,0,1.46,1.37L32.09,10,25.58,3.09a1,1,0,1,0-1.46,1.37L28.4,9H9.17A5.17,5.17,0,0,0,4,14.15v6.1l2-2.12Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M30,21.85A3.17,3.17,0,0,1,26.83,25H7.6l4.28-4.54a1,1,0,1,0-1.46-1.37L3.91,26l6.51,6.91a1,1,0,1,0,1.46-1.37L7.6,27H26.83A5.17,5.17,0,0,0,32,21.85v-6.1l-2,2.12Z"/>'),a.ClrShapeFileGroup=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M31,34H13a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H31a1,1,0,0,1,1,1V33A1,1,0,0,1,31,34ZM14,32H30V12H14Z"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="16" y="16" width="12" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-3" x="16" y="20" width="12" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-4" x="16" y="24" width="12" height="2"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M6,24V4H24V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V25a1,1,0,0,0,1,1H6Z"/>\n            <path class="clr-i-outline clr-i-outline-path-6" d="M10,28V8H28V7a1,1,0,0,0-1-1H9A1,1,0,0,0,8,7V29a1,1,0,0,0,1,1h1Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M31,10H13a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V11A1,1,0,0,0,31,10ZM28,26H16V24H28Zm0-4H16V20H28Zm0-4H16V16H28Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M6,24V4H24V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V25a1,1,0,0,0,1,1H6Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M10,28V8H28V7a1,1,0,0,0-1-1H9A1,1,0,0,0,8,7V29a1,1,0,0,0,1,1h1Z"/>'),a.ClrShapePaperclip=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M8.42,32.6A6.3,6.3,0,0,1,4,30.79l-.13-.13A6.2,6.2,0,0,1,2,26.22,6.77,6.77,0,0,1,4,21.4L19.5,6.07a8.67,8.67,0,0,1,12.15-.35A8,8,0,0,1,34,11.44a9,9,0,0,1-2.7,6.36L17.37,31.6A1,1,0,1,1,16,30.18L29.89,16.38A7,7,0,0,0,32,11.44a6,6,0,0,0-1.76-4.3,6.67,6.67,0,0,0-9.34.35L5.45,22.82A4.78,4.78,0,0,0,4,26.22a4.21,4.21,0,0,0,1.24,3l.13.13a4.64,4.64,0,0,0,6.5-.21L25.22,15.94A2.7,2.7,0,0,0,26,14a2.35,2.35,0,0,0-.69-1.68,2.61,2.61,0,0,0-3.66.13l-9.2,9.12a1,1,0,1,1-1.41-1.42L20.28,11a4.62,4.62,0,0,1,6.48-.13A4.33,4.33,0,0,1,28,14a4.68,4.68,0,0,1-1.41,3.34L13.28,30.58A6.91,6.91,0,0,1,8.42,32.6Z"/>'),a.ClrShapeShrink=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,15H22.41l9.25-9.25a1,1,0,0,0-1.41-1.41L21,13.59V4a1,1,0,0,0-2,0V17H32a1,1,0,0,0,0-2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M4,19a1,1,0,0,0,0,2h9.59L4.33,30.25a1,1,0,1,0,1.41,1.41L15,22.41V32a1,1,0,0,0,2,0V19Z"/>'),a.ClrShapeAccessibility1=c.clrIconSVG('<path d="M14.44,31.94a7.31,7.31,0,0,1-5.7-11.88L7.32,18.64a9.3,9.3,0,0,0,13.1,13.11L19,30.33A7.29,7.29,0,0,1,14.44,31.94Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M25.36,1.67a4.12,4.12,0,1,0,4.11,4.11A4.12,4.12,0,0,0,25.36,1.67Zm0,6.23a2.12,2.12,0,1,1,2.11-2.12A2.12,2.12,0,0,1,25.36,7.9Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M26.56,18.18h-5a1,1,0,0,0-.24.05l3.09-3.55a2.83,2.83,0,0,0-.69-4.33l-8-4.6a1,1,0,0,0-1.12.08L9.83,9.58A1,1,0,0,0,9.66,11a1,1,0,0,0,.79.38,1,1,0,0,0,.61-.21l4.27-3.34,3.11,1.77-5.08,5.78h0a9.28,9.28,0,0,0-4.53,1.83l1.43,1.43A7.3,7.3,0,0,1,20.42,28.81l1.42,1.43a9.27,9.27,0,0,0,.77-10.06h2.82l-.77,6.51a1,1,0,0,0,.88,1.11h.12a1,1,0,0,0,1-.88l.9-7.62a1,1,0,0,0-.25-.78A1,1,0,0,0,26.56,18.18Zm-6.37-7.56,2.52,1.46a.79.79,0,0,1,.4.59.81.81,0,0,1-.2.69L19.75,17A9.17,9.17,0,0,0,16,15.45Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M14.77,31.94a7.31,7.31,0,0,1-5.7-11.88L7.65,18.64a9.3,9.3,0,0,0,13.1,13.11l-1.42-1.42A7.29,7.29,0,0,1,14.77,31.94Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M26.65,2.1a3.12,3.12,0,1,0,3.11,3.12A3.12,3.12,0,0,0,26.65,2.1Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M26.81,18.18H21.47q-.31-.33-.66-.63l4.38-4.86a2.14,2.14,0,0,0-.53-3.27L20.9,7.23l0,0L17.05,5.07a1,1,0,0,0-1.11.08L11.15,8.9a1,1,0,0,0,1.23,1.58l4.27-3.34,2.87,1.63L13.6,15.39a9.33,9.33,0,0,0-4.44,1.82l1.42,1.43A7.3,7.3,0,0,1,20.75,28.81l1.43,1.43A9.27,9.27,0,0,0,23,20.18h2.74l-.77,6.51a1,1,0,0,0,.87,1.11h.12a1,1,0,0,0,1-.88l.9-7.62a1,1,0,0,0-.25-.78A1,1,0,0,0,26.81,18.18Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeAccessibility2=c.clrIconSVG('<path d="M30.06,11h-24a1,1,0,1,0,0,2H14v9.65s0,0,0,0l-3.75,10a1,1,0,0,0,.58,1.29,1.13,1.13,0,0,0,.36.06,1,1,0,0,0,.93-.65L15.62,24h4.76l3.52,9.35a1,1,0,0,0,.93.65,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.29L22,22.68s0,0,0,0V13h8.06a1,1,0,1,0,0-2ZM20,22H16V13h4Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M18,10a4,4,0,1,0-4-4A4,4,0,0,0,18,10Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,18,4Z" class="clr-i-outline clr-i-outline-path-2" />\n            <circle cx="17.96" cy="5" r="3" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,10H6a1,1,0,0,0,0,2h8v8.36s0,0,0,0L10.11,33.17a1,1,0,0,0,.66,1.25,1.55,1.55,0,0,0,.29,0,1,1,0,0,0,1-.71l3.29-10.84h5.38L24,33.75a1,1,0,0,0,1,.71,1.55,1.55,0,0,0,.29,0,1,1,0,0,0,.66-1.25L22,20.4s0,0,0,0V12h8a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeSortBy=c.clrIconSVG('<path d="M28.54,13H7.46a1,1,0,0,1,0-2H28.54a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M21.17,19H7.46a1,1,0,0,1,0-2H21.17a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M13.74,25H7.46a1,1,0,0,1,0-2h6.28a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeCollapseCard=c.clrIconSVG('<path d="M33,21H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V22A1,1,0,0,0,33,21Zm-1,6H4V23H32Z"  class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18,20.22l5.65-5.65a.81.81,0,0,0,0-1.14.8.8,0,0,0-1.13,0L18,18l-4.52-4.52a.8.8,0,0,0-1.13,0,.81.81,0,0,0,0,1.14Z"  class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M18,14.22l5.65-5.65a.81.81,0,0,0,0-1.14.8.8,0,0,0-1.13,0L18,12,13.48,7.43a.8.8,0,0,0-1.13,0,.81.81,0,0,0,0,1.14Z"  class="clr-i-outline clr-i-outline-path-3"/>\n            <rect x="2" y="22" width="32" height="8" rx="1" ry="1" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M18,20.7l-5.79-5.79a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L18,17.87l4.38-4.37a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M18,14.5,12.21,8.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0L18,11.67l4.38-4.38a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeExpandCard=c.clrIconSVG('<path d="M33,6H3A1,1,0,0,0,2,7V29a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V7A1,1,0,0,0,33,6ZM32,28H4V8H32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M13.48,15.86,18,11.34l4.52,4.52a.77.77,0,0,0,.56.24.81.81,0,0,0,.57-1.37L18,9.08l-5.65,5.65a.8.8,0,1,0,1.13,1.13Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M13.48,21.86,18,17.34l4.52,4.52a.77.77,0,0,0,.56.24.81.81,0,0,0,.57-1.37L18,15.08l-5.65,5.65a.8.8,0,1,0,1.13,1.13Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M33,6H3A1,1,0,0,0,2,7V29a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V7A1,1,0,0,0,33,6ZM23.79,21.41a1,1,0,0,1-1.41,0L18,17l-4.38,4.38a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,14.2,23.79,20A1,1,0,0,1,23.79,21.41Zm0-6.2a1,1,0,0,1-1.41,0L18,10.83l-4.38,4.38a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,8l5.79,5.79A1,1,0,0,1,23.79,15.21Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeBriefcase=c.clrIconSVG('<path d="M32,28a0,0,0,0,1,0,0H4V21.32a7.1,7.1,0,0,1-2-1.43V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.89a6.74,6.74,0,0,1-2,1.42Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M25,22.4a1,1,0,0,0,1-1V15.94H24V18H14v2H24v1.4A1,1,0,0,0,25,22.4Z" class="clr-i-outline clr-i-outline-path-2" />\n<path d="M33,6H24V4.38A2.42,2.42,0,0,0,21.55,2h-7.1A2.42,2.42,0,0,0,12,4.38V6H3A1,1,0,0,0,2,7v8a5,5,0,0,0,5,5h3v1.4a1,1,0,0,0,2,0V15.94H10V18H7a3,3,0,0,1-3-3V8H32v7a3,3,0,0,1-3,3H28v2h1a5,5,0,0,0,5-5V7A1,1,0,0,0,33,6ZM22,6H14V4.43A.45.45,0,0,1,14.45,4h7.11a.43.43,0,0,1,.44.42Z" class="clr-i-outline clr-i-outline-path-3" />\n<path d="M30,18A4.06,4.06,0,0,0,34,14V6H24V4.43A2.44,2.44,0,0,0,21.55,2h-7.1A2.44,2.44,0,0,0,12,4.43V6H2v8A4.06,4.06,0,0,0,6.05,18h4V15.92h2v5.7a1,1,0,1,1-2,0V20.06H6.06A6.06,6.06,0,0,1,2,18.49v9.45a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V18.49a6,6,0,0,1-4.06,1.57H28V18ZM14,4.43A.45.45,0,0,1,14.45,4h7.1a.45.45,0,0,1,.45.43V6H14ZM26,21.62a1,1,0,1,1-2,0V20.06H14V18H24V15.92h2Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeColorPicker=c.clrIconSVG('<path d="M33,10.05a5.07,5.07,0,0,0,.1-7.17A5.06,5.06,0,0,0,26,3L20.78,8.15a2.13,2.13,0,0,1-3,0l-.67-.67L15.72,8.92,27.08,20.28l1.42-1.42-.67-.67a2.13,2.13,0,0,1,0-3ZM26.44,13.8a4.07,4.07,0,0,0-1.08,1.92l-5.08-5.08A4.07,4.07,0,0,0,22.2,9.56l5.16-5.17a3.09,3.09,0,0,1,4.35-.1,3.09,3.09,0,0,1-.1,4.35Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M7.3,31.51a2,2,0,1,1-2.83-2.83L18.58,14.57l-1.42-1.41L3.05,27.27a4,4,0,0,0-.68,4.8L.89,33.55A1,1,0,0,0,.89,35a1,1,0,0,0,1.42,0l1.43-1.44a3.93,3.93,0,0,0,2.09.6,4.06,4.06,0,0,0,2.88-1.2L22.82,18.81,21.41,17.4Z" class="clr-i-outline clr-i-outline-path-2" />\n<path d="M33.73,2.11a4.09,4.09,0,0,0-5.76.1L22.81,7.38a3.13,3.13,0,0,1-4.3.11L17.09,8.91,27,18.79l1.42-1.42A3.18,3.18,0,0,1,28.46,13l5.17-5.17A4.08,4.08,0,0,0,33.73,2.11Z" class="clr-i-solid clr-i-solid-path-1" />\n<path d="M22.18,16.79,7.46,31.51a2,2,0,1,1-2.82-2.83L19.35,14l-1.41-1.41L3.22,27.27a4,4,0,0,0-.68,4.8L1.06,33.55a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l1.44-1.44a3.93,3.93,0,0,0,2.09.6,4.06,4.06,0,0,0,2.88-1.2L23.6,18.21Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeCopyToClipboard=c.clrIconSVG('<path d="M22.6,4H21.55a3.89,3.89,0,0,0-7.31,0H13.4A2.41,2.41,0,0,0,11,6.4V10H25V6.4A2.41,2.41,0,0,0,22.6,4ZM23,8H13V6.25A.25.25,0,0,1,13.25,6h2.69l.12-1.11A1.24,1.24,0,0,1,16.61,4a2,2,0,0,1,3.15,1.18l.09.84h2.9a.25.25,0,0,1,.25.25Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M33.25,18.06H21.33l2.84-2.83a1,1,0,1,0-1.42-1.42L17.5,19.06l5.25,5.25a1,1,0,0,0,.71.29,1,1,0,0,0,.71-1.7l-2.84-2.84H33.25a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />\n<path d="M29,16h2V6.68A1.66,1.66,0,0,0,29.35,5H27.08V7H29Z" class="clr-i-outline clr-i-outline-path-3" />\n<path d="M29,31H7V7H9V5H6.64A1.66,1.66,0,0,0,5,6.67V31.32A1.66,1.66,0,0,0,6.65,33H29.36A1.66,1.66,0,0,0,31,31.33V22.06H29Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeDragHandle=c.clrIconSVG('<circle cx="15" cy="12" r="1.5" class="clr-i-outline clr-i-outline-path-1" /><circle cx="15" cy="24" r="1.5" class="clr-i-outline clr-i-outline-path-2" /><circle cx="21" cy="12" r="1.5" class="clr-i-outline clr-i-outline-path-3" /><circle cx="21" cy="24" r="1.5" class="clr-i-outline clr-i-outline-path-4" /><circle cx="21" cy="18" r="1.5" class="clr-i-outline clr-i-outline-path-5" /><circle cx="15" cy="18" r="1.5" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeFilter2=c.clrIconSVG('<path d="M33,11H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M28,17H8a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />\n<path d="M23,23H13a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeMoon=c.clrIconSVG('<path d="M31,27.19a1,1,0,0,0-1-.56c-.28,0-.56,0-.85,0A11,11,0,0,1,24.92,5.61a1,1,0,0,0,.61-1,1,1,0,0,0-.67-.91,14.7,14.7,0,0,0-5-.87,15.12,15.12,0,0,0,0,30.24,14.78,14.78,0,0,0,11-4.81A1,1,0,0,0,31,27.19ZM19.89,31.12a13.12,13.12,0,0,1,0-26.24,11.81,11.81,0,0,1,2,.16,13,13,0,0,0,5.72,23.53A12.75,12.75,0,0,1,19.89,31.12Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M29.2,26.72A12.07,12.07,0,0,1,22.9,4.44,13.68,13.68,0,0,0,19.49,4a14,14,0,0,0,0,28,13.82,13.82,0,0,0,10.9-5.34A11.71,11.71,0,0,1,29.2,26.72Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeSun=c.clrIconSVG('<path d="M18,6.31a1,1,0,0,0,1-1V1.91a1,1,0,0,0-2,0v3.4A1,1,0,0,0,18,6.31Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M18,29.69a1,1,0,0,0-1,1v3.4a1,1,0,0,0,2,0v-3.4A1,1,0,0,0,18,29.69Z" class="clr-i-outline clr-i-outline-path-2" />\n<path d="M8.32,9.74A1,1,0,0,0,9,10a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L7.33,5.92A1,1,0,0,0,5.92,7.33Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M27.68,26.26a1,1,0,1,0-1.42,1.42l2.41,2.4a1,1,0,0,0,.71.3,1,1,0,0,0,.7-.3,1,1,0,0,0,0-1.41Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M6.31,18a1,1,0,0,0-1-1H1.91a1,1,0,0,0,0,2h3.4A1,1,0,0,0,6.31,18Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M34.09,17h-3.4a1,1,0,1,0,0,2h3.4a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M8.32,26.26l-2.4,2.41a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l2.41-2.4a1,1,0,1,0-1.42-1.42Z" class="clr-i-outline clr-i-outline-path-7" /><path d="M27,10a1,1,0,0,0,.71-.29l2.4-2.41a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0l-2.41,2.4a1,1,0,0,0,0,1.42A1,1,0,0,0,27,10Z" class="clr-i-outline clr-i-outline-path-8" /><path d="M18.13,7.75a10.13,10.13,0,1,0,10,10.13A10.08,10.08,0,0,0,18.13,7.75Zm0,18.25a8.13,8.13,0,1,1,8-8.12A8.08,8.08,0,0,1,18.13,26Z" class="clr-i-outline clr-i-outline-path-9" /><path d="M18,6.42a1,1,0,0,0,1-1V1.91a1,1,0,0,0-2,0V5.42A1,1,0,0,0,18,6.42Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M18,29.58a1,1,0,0,0-1,1v3.51a1,1,0,0,0,2,0V30.58A1,1,0,0,0,18,29.58Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M8.4,9.81A1,1,0,0,0,9.81,8.4L7.33,5.92A1,1,0,0,0,5.92,7.33Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M27.6,26.19a1,1,0,0,0-1.41,1.41l2.48,2.48a1,1,0,0,0,1.41-1.41Z" class="clr-i-solid clr-i-solid-path-4" /><path d="M6.42,18a1,1,0,0,0-1-1H1.91a1,1,0,0,0,0,2H5.42A1,1,0,0,0,6.42,18Z" class="clr-i-solid clr-i-solid-path-5" /><path d="M34.09,17H30.58a1,1,0,0,0,0,2h3.51a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-6" /><path d="M8.4,26.19,5.92,28.67a1,1,0,0,0,1.41,1.41L9.81,27.6A1,1,0,0,0,8.4,26.19Z" class="clr-i-solid clr-i-solid-path-7" /><path d="M27.6,9.81l2.48-2.48a1,1,0,0,0-1.41-1.41L26.19,8.4A1,1,0,0,0,27.6,9.81Z" class="clr-i-solid clr-i-solid-path-8" /><circle cx="18" cy="18" r="10" class="clr-i-solid clr-i-solid-path-9" />'),a.ClrShapeWand=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M34.1,4,31.71,1.6a1.83,1.83,0,0,0-1.31-.54h0a2.05,2.05,0,0,0-1.45.62L1.76,29.23A2,2,0,0,0,1.68,32l2.4,2.43A1.83,1.83,0,0,0,5.39,35h0a2.05,2.05,0,0,0,1.45-.62L34,6.79A2,2,0,0,0,34.1,4ZM5.42,32.93,3.16,30.65h0L24.11,9.43l2.25,2.28ZM32.61,5.39l-5.12,5.18L25.24,8.29l5.13-5.2,2.25,2.28Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M32.53,20.47l2.09-2.09a.8.8,0,0,0-1.13-1.13l-2.09,2.09-2.09-2.09a.8.8,0,0,0-1.13,1.13l2.09,2.09-2.09,2.09a.8.8,0,0,0,1.13,1.13l2.09-2.09,2.09,2.09a.8.8,0,0,0,1.13-1.13Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M14.78,6.51a.8.8,0,0,0,1.13,0L17.4,5l1.49,1.49A.8.8,0,0,0,20,5.38L18.54,3.89,20,2.4a.8.8,0,0,0-1.13-1.13L17.4,2.76,15.91,1.27A.8.8,0,1,0,14.78,2.4l1.49,1.49L14.78,5.38A.8.8,0,0,0,14.78,6.51Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M8.33,15.26a.8.8,0,0,0,1.13,0l1.16-1.16,1.16,1.16a.8.8,0,1,0,1.13-1.13L11.76,13l1.16-1.16a.8.8,0,1,0-1.13-1.13l-1.16,1.16L9.46,10.68a.8.8,0,1,0-1.13,1.13L9.49,13,8.33,14.13A.8.8,0,0,0,8.33,15.26Z"/>'),a.ClrShapeCursorMove=c.clrIconSVG('<path d="M28.85,12.89a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L30.14,17H19V5.86l2.69,2.7a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42L18,2,12.89,7.15a1,1,0,0,0-.29.71,1,1,0,0,0,1.71.7L17,5.86V17H5.86l2.7-2.69a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L2,18l5.14,5.11a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71L5.86,19H17V30.14l-2.69-2.7a1,1,0,0,0-1.71.7,1,1,0,0,0,.29.71L18,34l5.11-5.14a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L19,30.14V19H30.14l-2.7,2.69a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.29L34,18Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeClone=c.clrIconSVG('<path d="M6,6H22v4h2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V22a2,2,0,0,0,2,2h4V22H6Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M30,12H14a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V14A2,2,0,0,0,30,12Zm0,18H14V14H30Z" class="clr-i-outline clr-i-outline-path-2" /><polygon points="21 28 23 28 23 23 28 23 28 21 23 21 23 16 21 16 21 21 16 21 16 23 21 23 21 28" class="clr-i-outline clr-i-outline-path-3" /><path d="M24,10V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V22a2,2,0,0,0,2,2h4V12a2,2,0,0,1,2-2Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M30,12H14a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V14A2,2,0,0,0,30,12ZM28,23H23v5H21V23H16V21h5V16h2v5h5Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeDetails=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M9,14H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M9,18H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M9,22H19a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM19,22H9a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Zm8-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Zm0-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeDragHandleCorner=c.clrIconSVG('<circle cx="12" cy="24" r="1.5" class="clr-i-outline clr-i-outline-path-1" /><circle cx="18" cy="24" r="1.5" class="clr-i-outline clr-i-outline-path-2" /><circle cx="18" cy="18" r="1.5" class="clr-i-outline clr-i-outline-path-3" /><circle cx="24" cy="12" r="1.5" class="clr-i-outline clr-i-outline-path-4" /><circle cx="24" cy="24" r="1.5" class="clr-i-outline clr-i-outline-path-5" /><circle cx="24" cy="18" r="1.5" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeEraser=c.clrIconSVG('<path d="M35.62,12a2.82,2.82,0,0,0-.84-2L27.49,2.65a2.9,2.9,0,0,0-4,0L2.83,23.28a2.84,2.84,0,0,0,0,4L7.53,32H3a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2H16.74l18-18A2.82,2.82,0,0,0,35.62,12ZM13.91,32H10.36L4.25,25.89a.84.84,0,0,1,0-1.19l5.51-5.52,8.49,8.48ZM33.37,12.54,19.66,26.25l-8.48-8.49,13.7-13.7a.86.86,0,0,1,1.19,0l7.3,7.29a.86.86,0,0,1,.25.6A.82.82,0,0,1,33.37,12.54Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M28,32H15.33L19,28.37l-9.9-9.9L3.54,24a1.83,1.83,0,0,0,0,2.6L9,32H3a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M34.08,10.65l-7.3-7.3a1.83,1.83,0,0,0-2.6,0L10.47,17.06l9.9,9.9L34.08,13.25A1.85,1.85,0,0,0,34.08,10.65Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeLandscape=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M9,22a.82.82,0,0,0,.55-.21.8.8,0,0,0,0-1.13L7.83,18.8H28.17l-1.72,1.86a.8.8,0,0,0,0,1.13A.82.82,0,0,0,27,22a.78.78,0,0,0,.58-.26L31.09,18l-3.47-3.74a.79.79,0,0,0-1.13,0,.8.8,0,0,0,0,1.13l1.72,1.86H7.83l1.72-1.86a.8.8,0,0,0,0-1.13.79.79,0,0,0-1.13,0L4.91,18l3.47,3.74A.78.78,0,0,0,9,22Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM27.77,21.88a1,1,0,0,1-.73.32,1,1,0,0,1-.68-.27,1,1,0,0,1-.06-1.41L27.71,19H8.29L9.7,20.52a1,1,0,0,1-.06,1.41A1,1,0,0,1,9,22.2a1,1,0,0,1-.73-.32L4.64,18l3.59-3.88A1,1,0,0,1,9.7,15.48L8.29,17H27.71L26.3,15.48a1,1,0,0,1,1.47-1.36L31.36,18Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapePaste=c.clrIconSVG('<path d="M30,12H26v2h4v2h2V14A2,2,0,0,0,30,12Z" class="clr-i-outline clr-i-outline-path-1" /><rect x="30" y="18" width="2" height="6" class="clr-i-outline clr-i-outline-path-2" /><path d="M30,30H28v2h2a2,2,0,0,0,2-2V26H30Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M24,22V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V22a2,2,0,0,0,2,2H22A2,2,0,0,0,24,22ZM6,6H22V22H6Z" class="clr-i-outline clr-i-outline-path-4" /><rect x="20" y="30" width="6" height="2" class="clr-i-outline clr-i-outline-path-5" /><path d="M14,26H12v4a2,2,0,0,0,2,2h4V30H14Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M30,12H26v2h4v2h2V14A2,2,0,0,0,30,12Z" class="clr-i-solid clr-i-solid-path-1" /><rect x="30" y="18" width="2" height="6" class="clr-i-solid clr-i-solid-path-2" /><path d="M30,30H28v2h2a2,2,0,0,0,2-2V26H30Z" class="clr-i-solid clr-i-solid-path-3" /><rect x="4" y="4" width="20" height="20" rx="2" ry="2" class="clr-i-solid clr-i-solid-path-4" /><rect x="20" y="30" width="6" height="2" class="clr-i-solid clr-i-solid-path-5" /><path d="M14,26H12v4a2,2,0,0,0,2,2h4V30H14Z" class="clr-i-solid clr-i-solid-path-6" />'),a.ClrShapePortrait=c.clrIconSVG('<path d="M15.34,26.45a.8.8,0,0,0-1.13,0,.79.79,0,0,0,0,1.13L18,31.09l3.74-3.47a.79.79,0,0,0,.05-1.13.8.8,0,0,0-1.13,0L18.8,28.17V7.83l1.86,1.72a.8.8,0,1,0,1.08-1.17L18,4.91,14.26,8.38a.79.79,0,0,0,0,1.13.8.8,0,0,0,1.13,0L17.2,7.83V28.17Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2Zm0,30H8V4H28Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM20.52,26.3a1,1,0,0,1,1.36,1.47L18,31.36l-3.88-3.59a1,1,0,0,1,1.36-1.47L17,27.71V8.29L15.48,9.7a1,1,0,0,1-1.36-1.47L18,4.64l3.88,3.59a1,1,0,0,1,.05,1.41,1,1,0,0,1-.73.32,1,1,0,0,1-.68-.26L19,8.29V27.71Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeTreeView=c.clrIconSVG('<path d="M15,32H11a1,1,0,0,1-1-1V27a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,15,32Zm-3-2h2V28H12Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8h6.36a.8.8,0,0,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16ZM4,8H6v2H4ZM14,20H12V18h2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M34,9a1,1,0,0,0-1-1H10v2H33A1,1,0,0,0,34,9Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M33,18H18v2H33a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M33,28H18v2H33a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-5" /><rect x="10" y="26" width="6" height="6" rx="1" ry="1" class="clr-i-solid clr-i-solid-path-1" /><path d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8H11a.8.8,0,1,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M33,8H10v2H33a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M33,18H18v2H33a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-4" /><path d="M33,28H18v2H33a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-5" />'),a.ClrShapeCursorHandGrab=c.clrIconSVG('<path d="M28.09,9.74a4,4,0,0,0-1.16.19c-.19-1.24-1.55-2.18-3.27-2.18A4,4,0,0,0,22.13,8,3.37,3.37,0,0,0,19,6.3a3.45,3.45,0,0,0-2.87,1.32,3.65,3.65,0,0,0-1.89-.51A3.05,3.05,0,0,0,11,9.89v.91c-1.06.4-4.11,1.8-4.91,4.84s.34,8,2.69,11.78a25.21,25.21,0,0,0,5.9,6.41.9.9,0,0,0,.53.17H25.55a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13A25.8,25.8,0,0,0,31.41,18v-5.5A3.08,3.08,0,0,0,28.09,9.74ZM29.61,18a24,24,0,0,1-1.47,9.15A12.46,12.46,0,0,1,25.2,32.2H15.47a23.75,23.75,0,0,1-5.2-5.72c-2.37-3.86-3-8.23-2.48-10.39A5.7,5.7,0,0,1,11,12.76v7.65a.9.9,0,0,0,1.8,0V9.89c0-.47.59-1,1.46-1s1.49.52,1.49,1v5.72h1.8V8.81c0-.28.58-.71,1.46-.71s1.53.48,1.53.75v6.89h1.8V10l.17-.12a2.1,2.1,0,0,1,1.18-.32c.93,0,1.5.44,1.5.68l0,6.5H27V11.87a1.91,1.91,0,0,1,1.12-.33c.86,0,1.52.51,1.52.94Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeCursorHandOpen=c.clrIconSVG('<path d="M31.46,8.57A3.11,3.11,0,0,0,27,5.75a3.19,3.19,0,0,0-4.66-2.64,3.29,3.29,0,0,0-6.42-.76,3.23,3.23,0,0,0-1.66-.46A3.27,3.27,0,0,0,11,5.18V17.84c-1.28-1.6-2.53-3.18-2.72-3.45A3.19,3.19,0,0,0,5.56,12.9a3.37,3.37,0,0,0-3.47,3.48C2.18,18.18,5.66,24.54,8,28c3.54,5.24,6.92,6,7.07,6l.18,0H25.59a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13c1-3.09,1.53-7.53,1.58-13.56ZM28.18,27.12a12.46,12.46,0,0,1-2.94,5.08H15.33c-.47-.14-3.07-1.1-5.87-5.25S3.94,17.27,3.89,16.29a1.5,1.5,0,0,1,.45-1.13,1.52,1.52,0,0,1,1.14-.46,1.43,1.43,0,0,1,1.32.71c.29.43,2.36,3,3.57,4.53L12.8,18.3V5.18a1.48,1.48,0,1,1,2.95,0V16.32h1.8v-13a1.51,1.51,0,0,1,3,0V16.45h1.8V6a1.43,1.43,0,1,1,2.85,0V17.44H27V8.54a1.33,1.33,0,0,1,2.65,0v5.55C29.62,20,29.14,24.21,28.18,27.12Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeFileZip=c.clrIconSVG('<path d="M30,30.2V12l-8.1-7.9H7.8C6.8,4.1,6,4.9,6,6c0,0,0,0,0,0v24.2c0,1,0.7,1.8,1.7,1.8c0,0,0.1,0,0.1,0h20.3\n\t\tc1,0,1.8-0.7,1.8-1.7C30,30.3,30,30.2,30,30.2z M22,6.6l5.6,5.4H22V6.6z M28,30H7.9L8,6h12v8h8V30z" class="clr-i-outline clr-i-outline-path-1" /><path d="M12,24c0,1.7,1.3,3,3,3s3-1.3,3-3v-4h-6V24z M13.4,24v-2.6h3.2V24c0.1,0.9-0.6,1.7-1.5,1.7c-0.9,0.1-1.7-0.6-1.7-1.5\n\t\tC13.4,24.2,13.4,24.1,13.4,24z" class="clr-i-outline clr-i-outline-path-2" /><path d="M18.2,9c0-0.6-0.4-1-1-1H15v2h2.2C17.8,10,18.2,9.6,18.2,9z" class="clr-i-outline clr-i-outline-path-3" /><path d="M12.7,10c-0.6,0-1,0.4-1,1s0.4,1,1,1H15v-2H12.7z" class="clr-i-outline clr-i-outline-path-4" /><path d="M17.2,14c0.6,0,1-0.4,1-1s-0.4-1-1-1H15v2H17.2z" class="clr-i-outline clr-i-outline-path-5" /><path d="M11.7,15c0,0.6,0.4,1,1,1H15v-2h-2.3C12.2,14,11.7,14.4,11.7,15z" class="clr-i-outline clr-i-outline-path-6" /><path d="M17.2,18c0.6,0,1-0.4,1-1s-0.4-1-1-1H15v2H17.2z" class="clr-i-outline clr-i-outline-path-7" /><path d="M15,25.6c0.9,0,1.6-0.7,1.6-1.6v-2.6h-3.2V24C13.4,24.9,14.1,25.6,15,25.6z" class="clr-i-solid clr-i-solid-path-1" /><path d="M21.9,4H7.8C6.8,4,6,4.9,6,5.9v24.2c0,1,0.8,1.9,1.8,1.9h20.3c1,0,1.8-0.9,1.8-1.9V11.9L21.9,4z M18,24c0,1.7-1.3,3-3,3\n\t\ts-3-1.3-3-3v-4h6V24z M17.2,12c0.6,0,1,0.4,1,1s-0.4,1-1,1H15v2h2.2c0.6,0,1,0.4,1,1s-0.4,1-1,1H15v-2h-2.2c-0.6,0-1-0.4-1-1\n\t\ts0.4-1,1-1H15v-2h-2.2c-0.6,0-1-0.4-1-1s0.4-1,1-1H15V8h2.2c0.6,0,1,0.4,1,1s-0.4,1-1,1H15v2H17.2z M21.9,12V6.5l5.7,5.5H21.9z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeFilterOff=c.clrIconSVG('<path d="M34,6.4C34,5.6,33.3,5,32.5,5H10.3l2,2H32v0.6l-9.6,9.6l1.4,1.4L33.4,9C33.8,8.6,34,8.1,34,7.6V6.5C34,6.5,34,6.4,34,6.4z"\n\t\t class="clr-i-outline clr-i-outline-path-1" /><path d="M2.7,3l2,2h-1C2.9,4.9,2.1,5.5,2,6.3v1.1c0,0.5,0.2,1,0.6,1.4L14,20.2v10.3l1.9,0.8V19.4L4,7.5V7h2.7L20,20.3v12.9l2,0.8\n\t\tc0,0,0,0,0-0.1V22.3l10.1,10.1l1.4-1.4L4.1,1.6L2.7,3z" class="clr-i-outline clr-i-outline-path-2" /><path d="M23.9,18.6L10.3,5.1h22.2C33.3,5,34,5.6,34,6.4c0,0,0,0,0,0.1v1.1c0,0.5-0.2,1-0.6,1.4L23.9,18.6z" class="clr-i-solid clr-i-solid-path-1" /><path d="M33.5,31L4.1,1.6L2.6,3l2.1,2.1H3.5C2.7,5,2,5.6,2,6.4c0,0,0,0,0,0.1v1.1c0,0.5,0.2,1,0.6,1.4L14,20.5v10.1l8,3.4V22.4\n\tl10.1,10.1L33.5,31z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeRecycle=c.clrIconSVG('<path d="M6.4,17.4c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4-0.1,0.5-0.1l7-4.1c0.3-0.2,0.5-0.5,0.5-0.9c0-0.4-0.2-0.7-0.5-0.9L11.9,10\n\t\tL14,6.2c0.4-0.7,1-1.3,1.7-1.7c2-1.1,4.5-0.3,5.6,1.7c0.3,0.5,0.9,0.6,1.4,0.3c0,0,0,0,0.1,0c0.4-0.3,0.5-0.9,0.3-1.3\n\t\tc-0.6-1-1.4-1.9-2.4-2.4c-3-1.6-6.7-0.6-8.3,2.4L9.6,9.9c-0.3,0.5-0.1,1.1,0.3,1.4l2,1.2l-4,2.4V8.2c0-0.6-0.4-1-1-1\n\t\tC6.4,7.3,6,7.7,6,8.3v8.3C6,16.9,6.2,17.2,6.4,17.4z" class="clr-i-outline clr-i-outline-path-1" /><path d="M32.1,21l-3.5-6.2c-0.1-0.2-0.4-0.4-0.6-0.5c-0.3-0.1-0.5,0-0.8,0.1l-2.2,1.3V11l5.5,3.3c0.1,0,0.1,0.1,0.2,0.1\n\t\tc0.5,0.2,1.1,0,1.3-0.5c0.2-0.5,0-1.1-0.5-1.3l-7-4.2c-0.3-0.2-0.7-0.2-1,0C23.1,8.5,23,8.8,23,9.2v8.3c0,0.4,0.1,0.8,0.4,1\n\t\tc0.3,0.2,0.7,0.2,1,0l2.9-1.7l3,5.3c0.7,1.3,0.7,2.8,0,4.1c-0.6,1.2-1.9,1.9-3.2,1.9h-0.9c-0.5,0-1.2,0.4-1.2,1\n\t\tc0.1,0.6,0.6,1,1.2,1h0.9c2.1,0,4-1.1,5-2.9C33.2,25.2,33.2,22.9,32.1,21z" class="clr-i-outline clr-i-outline-path-2" /><path d="M22.4,28.2l-7-4.2c-0.3-0.2-0.7-0.2-1,0c-0.3,0.2-0.4,0.5-0.4,0.9v3.3H9.1c-1.5-0.1-2.9-0.9-3.6-2.3\n\t\tc-0.8-1.4-0.8-3.2,0-4.6c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4c-1.2,2.1-1.1,4.6,0.1,6.6C4.9,28.8,7,30,9.2,30H15\n\t\tc0.6,0,1-0.4,1-1v-2.4l4,2.4l-5.6,3.3c-0.3,0.2-0.5,0.5-0.5,0.9c0,0.6,0.5,1,1,1c0.2,0,0.3-0.1,0.5-0.2l7-4.2\n\t\tc0.2-0.1,0.3-0.2,0.4-0.4C23.1,29,22.9,28.4,22.4,28.2z" class="clr-i-outline clr-i-outline-path-3" /><path d="M20.8,3.1c-3-1.6-6.7-0.6-8.4,2.4l-2.2,3.8l-2-1.1C8.2,8,8,8,7.9,8C7.4,8,7,8.4,7,8.9v7.2c0,0.3,0.1,0.6,0.4,0.8\n\t\tc0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.4-0.1l6.3-3.6c0.3-0.2,0.4-0.4,0.4-0.8c0-0.3-0.2-0.6-0.4-0.8L12,10.3l2.2-3.8\n\t\tc0.4-0.7,1-1.3,1.7-1.7c2-1.1,4.5-0.3,5.6,1.7c0.3,0.5,0.9,0.6,1.4,0.4c0.5-0.3,0.6-0.9,0.4-1.4C22.6,4.5,21.8,3.6,20.8,3.1z" class="clr-i-solid clr-i-solid-path-1" /><path d="M32.2,21.1l-3-5.3l2.3-1.3c0.3-0.2,0.4-0.4,0.4-0.8c0-0.3-0.2-0.6-0.4-0.8l-6.2-3.6c-0.1-0.1-0.3-0.1-0.4-0.1\n\t\tc-0.5,0-0.9,0.4-0.9,0.9v7.2c0,0.3,0.2,0.6,0.4,0.8c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3-0.1,0.4-0.1l2.2-1.3l3,5.3\n\t\tc0.7,1.2,0.7,2.8,0,4c-0.7,1.2-1.9,1.9-3.2,1.9h-0.9c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h0.9c2.1,0,4-1.1,5-3\n\t\tC33.2,25.3,33.2,23,32.2,21.1z" class="clr-i-solid clr-i-solid-path-2" /><path d="M21.7,28.4l-6.2-3.6c-0.1-0.1-0.3-0.1-0.4-0.1c-0.5,0-0.9,0.4-0.9,0.9v2.6H9.3c-1.5,0-2.9-0.8-3.6-2.1\n\t\tc-0.8-1.4-0.8-3.1,0-4.5c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4c-1.2,2-1.2,4.5,0,6.5c1.1,1.9,3.1,3.1,5.4,3.1h4.8v2.6\n\t\tc0,0.3,0.2,0.6,0.4,0.8c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l6.3-3.6c0.3-0.2,0.4-0.4,0.4-0.8\n\t\tC22.1,28.8,21.9,28.5,21.7,28.4z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeTree=c.clrIconSVG('<path d="M30.6,11.7C29.2,5.8,24,1.7,18,1.7c-7.2,0-13,5.8-13,13c0,6.8,5.3,12.4,12,12.9v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5v-2V22\n\tc0,0,0,0,0-0.1v-3.6l4.7-4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L19,15.6v-3l-3.3-3.3c-0.4-0.4-1-0.4-1.4,0\n\tc-0.4,0.4-0.4,1,0,1.4l2.7,2.7v6.2l-3.8-3.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l5.2,5.2v3.2c-5.6-0.5-10-5.2-10-10.9\n\tc0-6.1,4.9-11,11-11s11,4.9,11,11c0,4.9-3.3,9.2-8,10.6v2.1C28,25.7,32.3,18.7,30.6,11.7z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,2C10.8,1.7,4.8,7.3,4.5,14.5C4.2,21.7,9.8,27.7,17,28v-5.2l-5.2-5.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0\n\tc0,0,0,0,0,0l3.8,3.8v-6.2l-2.7-2.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l3.3,3.3v3l3.3-3.3c0.4-0.4,1-0.4,1.4,0\n\tc0,0,0,0,0,0c0.4,0.4,0.4,1,0,1.4L19,18.8V28c7.2-0.3,12.8-6.3,12.5-13.5S25.2,1.7,18,2z" class="clr-i-solid clr-i-solid-path-1" /><path d="M18,28c-0.3,0-0.6,0-1,0v5c0,0.6,0.4,1,1,1s1-0.4,1-1v-5C18.7,28,18.3,28,18,28z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeFish=c.clrIconSVG('<circle cx="11.49" cy="17.5" r="1.5" class="clr-i-outline clr-i-outline-path-1" /><path d="M33.48,9.29a1,1,0,0,0-1,0c-3.37,2-5.91,5.81-6.9,7.45L24.85,18s-1,1.62-1,1.62c-1.76,2.49-5.1,6.36-8.79,6.36-4.65,0-8.75-6.15-9.84-7.94,1.09-1.79,5.18-7.94,9.84-7.94,3.54,0,6.77,3.58,8.58,6.07l.28-.48s.36-.51.93-1.25C22.72,11.64,19.18,8.06,15,8.06c-6.59,0-11.67,9.07-11.88,9.46L2.89,18l.27.48c.21.39,5.29,9.46,11.88,9.46,5.06,0,9.22-5.34,11-8C26,20,27.18,18,27.18,18h0l.07-.11a18.06,18.06,0,0,1,1.88-2.75s0,0,0,0a20.31,20.31,0,0,1,2.86-3V23.88a20.93,20.93,0,0,1-3.61-4l-.16.26h0l-1,1.59a18.74,18.74,0,0,0,5.21,4.95,1,1,0,0,0,.5.14,1.13,1.13,0,0,0,.5-.13,1,1,0,0,0,.5-.87V10.16A1,1,0,0,0,33.48,9.29Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeForm=c.clrIconSVG('<path d="M21,12H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H21a1,1,0,0,1,1,1v4A1,1,0,0,1,21,12ZM8,10H20V7.94H8Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M21,14.08H7a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H18.36L22,16.3V15.08A1,1,0,0,0,21,14.08ZM20,18H8V16H20Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M11.06,31.51v-.06l.32-1.39H4V4h20V14.25L26,12.36V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V31a1,1,0,0,0,1,1h8A3.44,3.44,0,0,1,11.06,31.51Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M22,19.17l-.78.79A1,1,0,0,0,22,19.17Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M6,26.94a1,1,0,0,0,1,1h4.84l.3-1.3.13-.55,0-.05H8V24h6.34l2-2H7a1,1,0,0,0-1,1Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M33.49,16.67,30.12,13.3a1.61,1.61,0,0,0-2.28,0h0L14.13,27.09,13,31.9a1.61,1.61,0,0,0,1.26,1.9,1.55,1.55,0,0,0,.31,0,1.15,1.15,0,0,0,.37,0l4.85-1.07L33.49,19a1.6,1.6,0,0,0,0-2.27ZM18.77,30.91l-3.66.81L16,28.09,26.28,17.7l2.82,2.82ZM30.23,19.39l-2.82-2.82L29,15l2.84,2.84Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeFuel=c.clrIconSVG('<path d="M20.12,34H5.9A2.81,2.81,0,0,1,3,31.19V4.86A2.9,2.9,0,0,1,6,2.07H20.22A2.72,2.72,0,0,1,23,4.86V31.19A2.82,2.82,0,0,1,20.12,34ZM5.9,4A.87.87,0,0,0,5,4.86V31.19a.87.87,0,0,0,.87.87H20.12a.94.94,0,0,0,.95-.87V4.86A.94.94,0,0,0,20.12,4Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M29.53,34A3.5,3.5,0,0,1,26,30.5V23a2,2,0,0,0-2-2H22.57a1,1,0,0,1,0-2H24a4,4,0,0,1,4,4V30.5a1.5,1.5,0,0,0,3,0V17.3l-3.13-7A2.29,2.29,0,0,0,25.8,9h-.73a1,1,0,1,1,0-2h.73a4.3,4.3,0,0,1,3.93,2.55l3.21,7.16a1,1,0,0,1,.09.41V30.5A3.5,3.5,0,0,1,29.53,34Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M18,9H8A1,1,0,1,1,8,7H18a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M18,13H8A1,1,0,1,1,8,11H18A1,1,0,1,1,18,13Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M25,12.08a1,1,0,0,1-1-1v-6a1,1,0,0,1,2,0v6A1,1,0,0,1,25,12.08Z" class="clr-i-outline clr-i-outline-path-5" />'),a.ClrShapeSnowflake=c.clrIconSVG('<path d="M18.05,33.61a1,1,0,0,1-1-1V3.37a1,1,0,1,1,1.95,0V32.63A1,1,0,0,1,18.05,33.61Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18.06,10.07,14.52,6.54a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0l2.13,2.12,2.12-2.12a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M20.85,31.17a1,1,0,0,1-.7-.29L18,28.76,15.9,30.88a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,25.93l3.54,3.53a1,1,0,0,1,0,1.42A1,1,0,0,1,20.85,31.17Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30.92,26.5a1,1,0,0,1-.5-.13l-26-15A1,1,0,0,1,4.07,10a1,1,0,0,1,1.37-.36l26,15a1,1,0,0,1-.5,1.87Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M6,15.37a1,1,0,0,1-.26-2l2.9-.78L7.84,9.73a1,1,0,1,1,1.93-.52L11.07,14,6.24,15.33A.82.82,0,0,1,6,15.37Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M27.05,27.54a1,1,0,0,1-1-.75L24.8,22l4.82-1.3a1,1,0,1,1,.52,1.93l-2.9.78.78,2.9a1,1,0,0,1-.71,1.22A.75.75,0,0,1,27.05,27.54Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M4.94,26.5a1,1,0,0,1-.5-1.87l26-15a1,1,0,0,1,1.36.36,1,1,0,0,1-.36,1.37l-26,15A1,1,0,0,1,4.94,26.5Z" class="clr-i-outline clr-i-outline-path-7" /><path d="M8.81,27.54a.75.75,0,0,1-.26,0,1,1,0,0,1-.71-1.22l.78-2.9-2.9-.78A1,1,0,0,1,5,21.38a1,1,0,0,1,1.23-.71L11.07,22l-1.3,4.82A1,1,0,0,1,8.81,27.54Z" class="clr-i-outline clr-i-outline-path-8" /><path d="M29.88,15.37a.82.82,0,0,1-.26,0L24.8,14l1.29-4.83A1,1,0,1,1,28,9.73l-.78,2.89,2.9.78a1,1,0,0,1-.26,2Z" class="clr-i-outline clr-i-outline-path-9" />'),a.ClrShapeTable=c.clrIconSVG('<path d="M8,34a1,1,0,0,1-1-1V2.92a1,1,0,0,1,2,0V33A1,1,0,0,1,8,34Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M17,33.92a1,1,0,0,1-1-1V9.1a1,1,0,1,1,2,0V32.92A1,1,0,0,1,17,33.92Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M26,34a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0V33A1,1,0,0,1,26,34Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M33.11,18h-25a1,1,0,1,1,0-2h25a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M33.1,26.94H8.1A1,1,0,1,1,8.1,25h25a1,1,0,1,1,0,1.92Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M33,8.92H3A1,1,0,1,1,3,7H33a1,1,0,1,1,0,1.94Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeVolume=c.clrIconSVG('<path d="M25.88,32H12a4,4,0,0,1-4-4V11.46L2.31,5.77a1,1,0,0,1-.22-1.09A1,1,0,0,1,3,4.06H28.86a1,1,0,0,1,1,1V28A4,4,0,0,1,25.88,32ZM5.43,6l4.28,4.34a.75.75,0,0,1,.21.63v17A2.13,2.13,0,0,0,12,30H25.88A2.1,2.1,0,0,0,28,28V6Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M33,16a1,1,0,0,1-1-1V6H28.86a.92.92,0,0,1-1-.9,1,1,0,0,1,1-1H33a1,1,0,0,1,1,1V15A1,1,0,0,1,33,16Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M24,11H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M24,15H21a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M24,19H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M24,27H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M24,23H21A1,1,0,1,1,21,21H24A1,1,0,1,1,24,23Z" class="clr-i-outline clr-i-outline-path-7" />'),a.ClrShapeCrosshairs=c.clrIconSVG('<path d="M18,29A11,11,0,1,1,29,18,11,11,0,0,1,18,29ZM18,9a9,9,0,1,0,9,9A9,9,0,0,0,18,9Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,23a5,5,0,1,1,5-5A5,5,0,0,1,18,23Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,18,15Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M18,9a1,1,0,0,1-1-1V2.8a1,1,0,0,1,2,0V8A1,1,0,0,1,18,9Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M18,34a1,1,0,0,1-1-1V28a1,1,0,0,1,2,0v5A1,1,0,0,1,18,34Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M8,19H3.17a1,1,0,0,1,0-2H8a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M33.1,19H28a1,1,0,0,1,0-2h5.1a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeCircle=c.clrIconSVG('<path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeDotCircle=c.clrIconSVG('<path d="M18,11a7,7,0,1,1-7,7,7,7,0,0,1,7-7" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeBeta=c.clrIconSVG('<path d="M7.21,14.07h3a1.61,1.61,0,0,1,1.81,1.5,1.44,1.44,0,0,1-.84,1.34,1.67,1.67,0,0,1,1.1,1.53,1.75,1.75,0,0,1-2,1.63H7.21Zm2.71,2.42c.48,0,.82-.28.82-.67s-.34-.65-.82-.65H8.49v1.32Zm.2,2.48a.75.75,0,1,0,0-1.47H8.49V19Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M14.55,15.23v1.2h3v1.16h-3v1.32h3.33v1.16H13.26v-6h4.62v1.16Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M20.41,15.23H18.54V14.07h5v1.16H21.7v4.84H20.41Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M28,19.12H25.32l-.38.95H23.5l2.44-6h1.44l2.45,6H28.38ZM27.55,18l-.89-2.19L25.77,18Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M8.06,30a.84.84,0,0,1-.38-.08A1,1,0,0,1,7.06,29V25h-4a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h30a1,1,0,0,1,1,1V24a1,1,0,0,1-1,1H13.48L8.77,29.71A1,1,0,0,1,8.06,30Zm-4-7h4a1,1,0,0,1,1,1v2.59l3.3-3.3a1,1,0,0,1,.7-.29h19V11h-28Z" class="clr-i-outline clr-i-outline-path-5"/>\n\n  <polygon points="25.8,18 27.5,18 26.7,15.8" class="clr-i-solid clr-i-solid-path-1"/>\n\t<path d="M10.4,17.5c-0.1,0-0.2,0-0.3,0H8.5V19l1.6,0c0.4,0.1,0.8-0.2,0.9-0.6C11.1,18,10.8,17.6,10.4,17.5z" class="clr-i-solid clr-i-solid-path-2"/>\n\t<path d="M10.7,15.8c0-0.4-0.3-0.7-0.8-0.7H8.5v1.3h1.4C10.4,16.5,10.7,16.2,10.7,15.8z" class="clr-i-solid clr-i-solid-path-3"/>\n\t<path d="M33.1,9h-30c-0.6,0-1,0.4-1,1v14c0,0.6,0.4,1,1,1h4v4c0,0.4,0.2,0.8,0.6,0.9C7.8,30,7.9,30,8.1,30c0.3,0,0.5-0.1,0.7-0.3\n\t\tl4.7-4.7h19.6c0.6,0,1-0.4,1-1V10C34.1,9.4,33.6,9,33.1,9z M10.4,20.1c-0.1,0-0.1,0-0.2,0H7.2v-6h3c0.9-0.1,1.7,0.5,1.8,1.4\n\t\tc0,0,0,0.1,0,0.1c0,0.6-0.3,1.1-0.8,1.3c0.6,0.2,1.1,0.8,1.1,1.5C12.2,19.4,11.4,20.1,10.4,20.1z M17.9,15.2h-3.3v1.2h3v1.2h-3v1.3\n\t\th3.3v1.2h-4.6v-6h4.6V15.2z M21.7,20.1h-1.3v-4.8h-1.9v-1.2h5v1.2h-1.8V20.1z M28.4,20.1l-0.4-1h-2.7l-0.4,1h-1.4l2.4-6h1.4l2.5,6\n\t\tH28.4z" class="clr-i-solid clr-i-solid-path-4"/>\n'),a.ClrShapeFirstAid=c.clrIconSVG('\n  <path d="M32,6H23.91V4.5A2.5,2.5,0,0,0,21.41,2h-7a2.5,2.5,0,0,0-2.5,2.5V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM13.91,4.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V6h-8ZM4,28V8H32V28Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M20.15,25.2H16.74a1.3,1.3,0,0,1-1.3-1.3V21.2h-2.7a1.3,1.3,0,0,1-1.3-1.3V16.5a1.3,1.3,0,0,1,1.3-1.3h2.7V12.5a1.3,1.3,0,0,1,1.3-1.3h3.41a1.3,1.3,0,0,1,1.29,1.3v2.7h2.71a1.3,1.3,0,0,1,1.29,1.3v3.4a1.3,1.3,0,0,1-1.29,1.3H21.44v2.7A1.3,1.3,0,0,1,20.15,25.2ZM17,23.6h2.81v-4h4V16.8h-4v-4H17v4H13v2.8h4Zm7.11-6.8Z" class="clr-i-outline clr-i-outline-path-2"/>\n\n  <path d="M32,6H23.91V4.5A2.5,2.5,0,0,0,21.41,2h-7a2.5,2.5,0,0,0-2.5,2.5V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM13.91,4.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V6h-8ZM24.64,19.9a.5.5,0,0,1-.5.5h-3.5v3.5a.5.5,0,0,1-.5.5h-3.4a.5.5,0,0,1-.5-.5V20.4h-3.5a.5.5,0,0,1-.5-.5V16.5a.5.5,0,0,1,.5-.5h3.5V12.5a.5.5,0,0,1,.5-.5h3.4a.5.5,0,0,1,.5.5V16h3.5a.5.5,0,0,1,.5.5Z" class="clr-i-solid clr-i-solid-path-1"/>\n  '),a.ClrShapeColorPalette=c.clrIconSVG('<path d="M21.54,23.05a3.22,3.22,0,0,1-3-1.77A3.05,3.05,0,0,1,18.5,19a3.74,3.74,0,0,1,1.95-2.06A3.4,3.4,0,0,1,25,18.3a3,3,0,0,1,.08,2.32,3.69,3.69,0,0,1-2,2.07A3.85,3.85,0,0,1,21.54,23.05Zm.54-4.91a2.41,2.41,0,0,0-1,.21h0A2.13,2.13,0,0,0,20,19.51a1.37,1.37,0,0,0,0,1.09,1.81,1.81,0,0,0,2.45.63,2.1,2.1,0,0,0,1.12-1.15,1.4,1.4,0,0,0,0-1.1A1.59,1.59,0,0,0,22.08,18.14Zm-1.29-.52h0Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M16.19,33.87A13.72,13.72,0,0,1,6.4,30,13.86,13.86,0,0,1,2,20c0-4.4,2-8.84,5.68-12.5a18.2,18.2,0,0,1,13.1-5.37h.12c3.33,0,6.85,1.49,7.24,4.73.21,1.77-.59,3.47-1.29,5-.55,1.17-1.11,2.39-.72,2.81s1,.12,2.09-.2a6.27,6.27,0,0,1,3.38-.36,3,3,0,0,1,1.87,1.56c.94,1.83.47,4.67-.23,6.54h0A17.38,17.38,0,0,1,29,28.74,19.43,19.43,0,0,1,16.19,33.87ZM20.78,4.16A16.22,16.22,0,0,0,9.09,9C5.79,12.23,4,16.16,4,20A11.92,11.92,0,0,0,7.8,28.6c5.38,5.25,14.62,3.55,19.87-1.33a15.52,15.52,0,0,0,3.7-5.75h0c.7-1.9.84-3.92.32-4.92a1,1,0,0,0-.61-.55,4.86,4.86,0,0,0-2.29.35c-1.31.39-3,.89-4.12-.35-1.32-1.4-.46-3.25.37-5a7.93,7.93,0,0,0,1.11-3.9c-.24-2-2.81-2.95-5.26-3Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M23.87,26.65A2.59,2.59,0,0,0,22.35,25L22,24.9l-.46,1.53.16,0a1,1,0,0,1,.6.61c.17.6-.41,1.31-1.26,1.55s-1.71-.07-1.88-.66l-1.54.43h0a2.83,2.83,0,0,0,2.84,1.91,4,4,0,0,0,1-.14A3,3,0,0,0,23.87,26.65Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M15.07,25.59h0a2.73,2.73,0,0,0-2.24-1.84l-.27,1.58a1.12,1.12,0,0,1,1,.7c.17.59-.41,1.3-1.26,1.54A1.92,1.92,0,0,1,11,27.52a1,1,0,0,1-.6-.61s0-.09,0-.13l-1.58.16a2,2,0,0,0,.06.41A2.59,2.59,0,0,0,10.37,29a3.36,3.36,0,0,0,1.31.25,3.7,3.7,0,0,0,1-.14A3,3,0,0,0,15.07,25.59Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M10.78,19.17a2.59,2.59,0,0,0-1.52-1.65,2.91,2.91,0,0,0-.5-.16l-.37,1.56a1.21,1.21,0,0,1,.25.08,1,1,0,0,1,.6.6c.17.6-.41,1.31-1.26,1.55s-1.71-.06-1.88-.66a.86.86,0,0,1,0-.39l-1.56-.34a2.4,2.4,0,0,0,0,1.16A2.83,2.83,0,0,0,7.4,22.83a4,4,0,0,0,1-.14A3,3,0,0,0,10.78,19.17Z" class="clr-i-outline clr-i-outline-path-5"/>\n  <path d="M13.45,11.4a2.59,2.59,0,0,0-1.52-1.65,1.17,1.17,0,0,0-.2-.06l-.52,1.51a.38.38,0,0,1,.1,0,1,1,0,0,1,.6.6c.17.6-.41,1.31-1.26,1.55a2.06,2.06,0,0,1-1.28-.05,1,1,0,0,1-.6-.61.85.85,0,0,1,0-.32l-1.58-.19a2.3,2.3,0,0,0,.06.94A2.56,2.56,0,0,0,8.75,14.8a3.37,3.37,0,0,0,1.31.26,4,4,0,0,0,1-.14A3,3,0,0,0,13.45,11.4Z" class="clr-i-outline clr-i-outline-path-6"/>\n  <path d="M21,6.78a2.56,2.56,0,0,0-1.52-1.65l-.3-.1L18.7,6.56l.15,0a1,1,0,0,1,.6.61c.17.6-.41,1.3-1.26,1.54s-1.71-.06-1.88-.65a.9.9,0,0,1,.06-.58L14.89,6.9a2.47,2.47,0,0,0-.12,1.63,2.84,2.84,0,0,0,2.84,1.91,3.58,3.58,0,0,0,1-.15A3,3,0,0,0,21,6.78Z" class="clr-i-outline clr-i-outline-path-7"/>\n\n  <path d="M32.23,14.89c-2.1-.56-4.93,1.8-6.34.3-1.71-1.82,2.27-5.53,1.86-8.92-.33-2.78-3.51-4.08-6.66-4.1A18.5,18.5,0,0,0,7.74,7.59c-6.64,6.59-8.07,16-1.37,22.48,6.21,6,16.61,4.23,22.67-1.4a17.73,17.73,0,0,0,4.22-6.54C34.34,19.23,34.44,15.49,32.23,14.89ZM9.4,10.57a2.23,2.23,0,0,1,2.87,1.21,2.22,2.22,0,0,1-1.81,2.53A2.22,2.22,0,0,1,7.59,13.1,2.23,2.23,0,0,1,9.4,10.57ZM5.07,20.82a2.22,2.22,0,0,1,1.82-2.53A2.22,2.22,0,0,1,9.75,19.5,2.23,2.23,0,0,1,7.94,22,2.24,2.24,0,0,1,5.07,20.82Zm7,8.33a2.22,2.22,0,0,1-2.87-1.21A2.23,2.23,0,0,1,11,25.41a2.23,2.23,0,0,1,2.87,1.21A2.22,2.22,0,0,1,12,29.15ZM15,8.26a2.23,2.23,0,0,1,1.81-2.53,2.24,2.24,0,0,1,2.87,1.21,2.22,2.22,0,0,1-1.82,2.53A2.21,2.21,0,0,1,15,8.26Zm5.82,22.19a2.22,2.22,0,0,1-2.87-1.21,2.23,2.23,0,0,1,1.81-2.53,2.24,2.24,0,0,1,2.87,1.21A2.22,2.22,0,0,1,20.78,30.45Zm5-10.46a3.2,3.2,0,0,1-1.69,1.76,3.53,3.53,0,0,1-1.4.3,2.78,2.78,0,0,1-2.56-1.5,2.49,2.49,0,0,1-.07-2,3.2,3.2,0,0,1,1.69-1.76,3,3,0,0,1,4,1.2A2.54,2.54,0,0,1,25.79,20Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.EssentialShapes={"add-text":a.ClrShapeAddText,"alarm-off":a.ClrShapeAlarmOff,pinboard:a.ClrShapePinboard,new:a.ClrShapeNew,"bubble-exclamation":a.ClrShapeBubbleExclamation,"grid-view":a.ClrShapeGridView,"cursor-arrow":a.ClrShapeCursorArrow,"cursor-hand":a.ClrShapeCursorHand,"cursor-hand-click":a.ClrShapeCursorHandClick,"cursor-hand-grab":a.ClrShapeCursorHandGrab,"cursor-hand-open":a.ClrShapeCursorHandOpen,"cursor-move":a.ClrShapeCursorMove,"first-aid":a.ClrShapeFirstAid,resize:a.ClrShapeResize,objects:a.ClrShapeObjects,book:a.ClrShapeBook,asterisk:a.ClrShapeAsterisk,bug:a.ClrShapeBug,scissors:a.ClrShapeScissors,thermometer:a.ClrShapeThermometer,pencil:a.ClrShapePencil,note:a.ClrShapeNote,refresh:a.ClrShapeRefresh,sync:a.ClrShapeSync,"view-list":a.ClrShapeViewList,"view-cards":a.ClrShapeViewCards,"tree-view":a.ClrShapeTreeView,lightbulb:a.ClrShapeLightbulb,download:a.ClrShapeDownload,upload:a.ClrShapeUpload,lock:a.ClrShapeLock,unlock:a.ClrShapeUnlock,users:a.ClrShapeUsers,"pop-out":a.ClrShapePopOut,filter:a.ClrShapeFilter,pin:a.ClrShapePin,file:a.ClrShapeFile,plus:a.ClrShapePlus,minus:a.ClrShapeMinus,"minus-circle":a.ClrShapeMinusCircle,"plus-circle":a.ClrShapePlusCircle,ban:a.ClrShapeBan,"times-circle":a.ClrShapeTimesCircle,trash:a.ClrShapeTrash,circle:a.ClrShapeCircle,tag:a.ClrShapeTag,tags:a.ClrShapeTags,history:a.ClrShapeHistory,clock:a.ClrShapeClock,"alarm-clock":a.ClrShapeAlarmClock,arrow:e.ClrShapeArrow,"circle-arrow":a.ClrShapeCircleArrow,"child-arrow":a.ClrShapeChildArrow,copy:a.ClrShapeCopy,help:a.ClrShapeHelp,login:a.ClrShapeLogin,logout:a.ClrShapeLogout,printer:a.ClrShapePrinter,world:a.ClrShapeWorld,slider:a.ClrShapeSlider,clipboard:a.ClrShapeClipboard,firewall:a.ClrShapeFirewall,list:a.ClrShapeList,redo:a.ClrShapeRedo,undo:a.ClrShapeUndo,scroll:a.ClrShapeScroll,"file-settings":a.ClrShapeFileSettings,"two-way-arrows":a.ClrShapeTwoWayArrows,switch:a.ClrShapeSwitch,tools:a.ClrShapeTools,"window-close":a.ClrShapeWindowClose,"window-max":a.ClrShapeWindowMax,"window-min":a.ClrShapeWindowMin,"window-restore":a.ClrShapeWindowRestore,"zoom-in":a.ClrShapeZoomIn,"zoom-out":a.ClrShapeZoomOut,key:a.ClrShapeKey,library:a.ClrShapeLibrary,bolt:a.ClrShapeBolt,wrench:a.ClrShapeWrench,bullseye:a.ClrShapeBullseye,target:a.ClrShapeTarget,flame:a.ClrShapeFlame,hourglass:a.ClrShapeHourglass,"no-access":a.ClrShapeNoAccess,organization:a.ClrShapeOrganization,balance:a.ClrShapeBalance,"id-badge":a.ClrShapeIdBadge,repeat:a.ClrShapeRepeat,"file-group":a.ClrShapeFileGroup,paperclip:a.ClrShapePaperclip,shrink:a.ClrShapeShrink,"accessibility-1":a.ClrShapeAccessibility1,"accessibility-2":a.ClrShapeAccessibility2,"sort-by":a.ClrShapeSortBy,"collapse-card":a.ClrShapeCollapseCard,"expand-card":a.ClrShapeExpandCard,briefcase:a.ClrShapeBriefcase,"color-picker":a.ClrShapeColorPicker,"copy-to-clipboard":a.ClrShapeCopyToClipboard,"filter-2":a.ClrShapeFilter2,"drag-handle":a.ClrShapeDragHandle,moon:a.ClrShapeMoon,sun:a.ClrShapeSun,wand:a.ClrShapeWand,clone:a.ClrShapeClone,details:a.ClrShapeDetails,"drag-handle-corner":a.ClrShapeDragHandleCorner,eraser:a.ClrShapeEraser,landscape:a.ClrShapeLandscape,paste:a.ClrShapePaste,portrait:a.ClrShapePortrait,"file-zip":a.ClrShapeFileZip,"filter-off":a.ClrShapeFilterOff,recycle:a.ClrShapeRecycle,tree:a.ClrShapeTree,fish:a.ClrShapeFish,form:a.ClrShapeForm,fuel:a.ClrShapeFuel,snowflake:a.ClrShapeSnowflake,table:a.ClrShapeTable,"dot-circle":a.ClrShapeDotCircle,volume:a.ClrShapeVolume,crosshairs:a.ClrShapeCrosshairs,beta:a.ClrShapeBeta,"color-palette":a.ClrShapeColorPalette},Object.defineProperty(a.EssentialShapes,"edit",t.descriptorConfig(a.EssentialShapes.pencil)),Object.defineProperty(a.EssentialShapes,"note-edit",t.descriptorConfig(a.EssentialShapes.note)),Object.defineProperty(a.EssentialShapes,"group",t.descriptorConfig(a.EssentialShapes.users)),Object.defineProperty(a.EssentialShapes,"document",t.descriptorConfig(a.EssentialShapes.file)),Object.defineProperty(a.EssentialShapes,"add",t.descriptorConfig(a.EssentialShapes.plus)),Object.defineProperty(a.EssentialShapes,"cancel",t.descriptorConfig(a.EssentialShapes.ban)),Object.defineProperty(a.EssentialShapes,"remove",t.descriptorConfig(a.EssentialShapes["times-circle"])),Object.defineProperty(a.EssentialShapes,"sign-in",t.descriptorConfig(a.EssentialShapes.login)),Object.defineProperty(a.EssentialShapes,"sign-out",t.descriptorConfig(a.EssentialShapes.logout)),Object.defineProperty(a.EssentialShapes,"lightning",t.descriptorConfig(a.EssentialShapes.bolt)),Object.defineProperty(a.EssentialShapes,"flow-chart",t.descriptorConfig(a.EssentialShapes.organization)),Object.defineProperty(a.EssentialShapes,"alert",t.descriptorConfig(a.EssentialShapes["bubble-exclamation"])),Object.defineProperty(a.EssentialShapes,"pinned",t.descriptorConfig(a.EssentialShapes.pinboard)),Object.defineProperty(a.EssentialShapes,"attachment",t.descriptorConfig(a.EssentialShapes.paperclip)),Object.defineProperty(a.EssentialShapes,"attachment",t.descriptorConfig(a.EssentialShapes.paperclip)),Object.defineProperty(a.EssentialShapes,"resize-down",t.descriptorConfig(a.EssentialShapes.shrink)),Object.defineProperty(a.EssentialShapes,"resize-up",t.descriptorConfig(a.EssentialShapes.resize)),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.EssentialShapes)},"./src/shapes/media-shapes.ts":
/*!************************************!*\
  !*** ./src/shapes/media-shapes.ts ***!
  \************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.MediaShapes=a.ClrShapeMicrophoneMute=a.ClrShapeMicrophone=a.ClrShapeVideoGallery=a.ClrShapeReplayOne=a.ClrShapeReplayAll=a.ClrShapeImageGallery=a.ClrShapeMusicNote=a.ClrShapeFilmStrip=a.ClrShapeHeadphones=a.ClrShapeVolumeMute=a.ClrShapeVolumeUp=a.ClrShapeVolumeDown=a.ClrShapeShuffle=a.ClrShapeVideoCamera=a.ClrShapeCamera=a.ClrShapeFastForward=a.ClrShapeRewind=a.ClrShapePower=a.ClrShapeStop=a.ClrShapeStepForward=a.ClrShapePause=a.ClrShapePlay=void 0;var t=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapePlay=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M8.07,31.6A2.07,2.07,0,0,1,6,29.53V6.32A2.07,2.07,0,0,1,9,4.47L32.21,16.08a2.07,2.07,0,0,1,0,3.7L9,31.38A2.06,2.06,0,0,1,8.07,31.6Zm0-25.34L8,6.32V29.53l.1.06L31.31,18a.06.06,0,0,0,0-.06Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z"/>'),a.ClrShapePause=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M12.93,32H6.07A2.07,2.07,0,0,1,4,29.93V6.07A2.07,2.07,0,0,1,6.07,4h6.87A2.07,2.07,0,0,1,15,6.07V29.93A2.07,2.07,0,0,1,12.93,32ZM13,6H6V30h7Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M29.93,32H23.07A2.07,2.07,0,0,1,21,29.93V6.07A2.07,2.07,0,0,1,23.07,4h6.87A2.07,2.07,0,0,1,32,6.07V29.93A2.07,2.07,0,0,1,29.93,32ZM30,6H23V30h7Z"/>\n                <rect class="clr-i-solid clr-i-solid-path-1" x="3.95" y="4" width="11" height="28" rx="2.07" ry="2.07"/>\n                <rect class="clr-i-solid clr-i-solid-path-2" x="20.95" y="4" width="11" height="28" rx="2.07" ry="2.07"/>'),a.ClrShapeStepForward=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M5,32.23a2,2,0,0,1-2-2V5.77A2,2,0,0,1,6.17,4.14L23.23,16.38a2,2,0,0,1,0,3.25h0L6.17,31.86A2,2,0,0,1,5,32.23ZM5,5.77V30.23L22.07,18Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M31,32H28a2,2,0,0,1-2-2V6a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2V30A2,2,0,0,1,31,32ZM28,6V30h3V6Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M5,31.9a2,2,0,0,1-2-2V5.44A2,2,0,0,1,6.12,3.81L23.18,16a2,2,0,0,1,0,3.25h0L6.12,31.52A2,2,0,0,1,5,31.9Z"/>\n                <rect class="clr-i-solid clr-i-solid-path-2" x="25.95" y="3.67" width="7" height="28" rx="2" ry="2"/>'),a.ClrShapeStop=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,32H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H30a2,2,0,0,1,2,2V30A2,2,0,0,1,30,32ZM6,6V30H30V6Z"/>\n                <rect class="clr-i-solid clr-i-solid-path-1" x="3.96" y="4" width="27.99" height="28" rx="2" ry="2"/>'),a.ClrShapePower=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,21a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V20A1,1,0,0,1,18,21Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,34.15a15,15,0,0,1-7.52-28,1,1,0,0,1,1,1.73,13,13,0,1,0,13,0,1,1,0,1,1,1-1.73,15,15,0,0,1-7.52,28Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M18,21a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V20A1,1,0,0,0,18,21Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M32.51,15.4H30.44a13,13,0,1,1-19-7.5,1,1,0,0,0-1-1.73A15,15,0,1,0,33,19.15,14.9,14.9,0,0,0,32.51,15.4Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,21a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V20A1,1,0,0,1,18,21Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M30,13.5l-.31,0A13,13,0,1,1,11.48,7.9a1,1,0,0,0-1-1.73,15,15,0,1,0,21.31,7.1A7.49,7.49,0,0,1,30,13.5Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm.06,17.68a1.28,1.28,0,0,1-1.29-1.28V8.65a1.29,1.29,0,0,1,2.58,0V18.4A1.28,1.28,0,0,1,18.06,19.68ZM18,27.79A9.88,9.88,0,0,1,12.17,9.85a1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.07,7.07,0,0,0-3-5.76A1.37,1.37,0,0,1,22,10.2a1.4,1.4,0,0,1,1.94-.29A9.88,9.88,0,0,1,18,27.79Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4h-6A9.7,9.7,0,0,1,28,17.89a10,10,0,1,1-15.83-8,1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.08,7.08,0,0,0-.45-2.49H22.23A3.69,3.69,0,0,1,19.35,14v4.4a1.29,1.29,0,0,1-2.58,0V8.65a1.29,1.29,0,0,1,2.58,0v.71l3.76-6.51A16,16,0,1,0,34,18a16,16,0,0,0-.23-2.61Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5a7.47,7.47,0,0,1-3.57-.9A9.83,9.83,0,0,1,28,17.89a10,10,0,1,1-15.83-8,1.4,1.4,0,0,1,1.94.31,1.37,1.37,0,0,1-.31,1.92,7.18,7.18,0,1,0,11.43,5.8,7.07,7.07,0,0,0-3-5.76A1.37,1.37,0,0,1,22,10.2a1.38,1.38,0,0,1,1.52-.49,7.45,7.45,0,0,1-.3-6.83,16.06,16.06,0,1,0,9.93,9.93A7.46,7.46,0,0,1,30,13.5ZM16.77,8.65a1.29,1.29,0,0,1,2.58,0V18.4a1.29,1.29,0,0,1-2.58,0Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeRewind=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M17.09,31.58l-15.32-12a2,2,0,0,1,0-3.15l15.32-12a1.93,1.93,0,0,1,2.06-.22A1.77,1.77,0,0,1,20,6v6.7L30.83,4.42a1.93,1.93,0,0,1,2.06-.22A2,2,0,0,1,34,6V30a2,2,0,0,1-1.11,1.79,1.94,1.94,0,0,1-2.06-.22L20,23.31V30a1.77,1.77,0,0,1-.85,1.79,1.94,1.94,0,0,1-2.06-.22ZM32,30l.06-24L18,16.8V6L3,18,18,30V19.2Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M16.92,31.58,1.6,19.57a2,2,0,0,1,0-3.15l15.32-12A1.93,1.93,0,0,1,19,4.2,1.89,1.89,0,0,1,20,6v6.7L30.66,4.42a1.93,1.93,0,0,1,2.06-.22A2,2,0,0,1,33.83,6V30a2,2,0,0,1-1.11,1.79,1.94,1.94,0,0,1-2.06-.22L20,23.31V30a1.89,1.89,0,0,1-1,1.79,1.94,1.94,0,0,1-2.06-.22Z"/>'),a.ClrShapeFastForward=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M17.77,31.92a2,2,0,0,1-.86-.2A1.81,1.81,0,0,1,16,29.93v-6.7L5.24,31.5a1.94,1.94,0,0,1-2.06.22,2,2,0,0,1-1.11-1.79v-24A2,2,0,0,1,3.18,4.12a1.93,1.93,0,0,1,2.06.22L16,12.61V5.91a1.81,1.81,0,0,1,.91-1.79A1.93,1.93,0,0,1,19,4.34l15.32,12a2,2,0,0,1,0,3.15L19,31.5A2,2,0,0,1,17.77,31.92Zm0-12.8V29.93l15.26-12-15.32-12,.06,10.81L4,5.91v24Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M17.71,32a2,2,0,0,1-.86-.2A1.77,1.77,0,0,1,16,30v-6.7L5.17,31.58a1.94,1.94,0,0,1-2.06.22A2,2,0,0,1,2,30V6A2,2,0,0,1,3.11,4.2a1.93,1.93,0,0,1,2.06.22L16,12.69V6a1.77,1.77,0,0,1,.85-1.79,1.93,1.93,0,0,1,2.06.22l15.32,12a2,2,0,0,1,0,3.15l-15.32,12A2,2,0,0,1,17.71,32Z"/>'),a.ClrShapeCamera=t.clrIconSVG('<path d="M32,8H24.7L23.64,5.28A2,2,0,0,0,21.78,4H14.22a2,2,0,0,0-1.87,1.28L11.3,8H4a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,22H4V10h8.67l1.55-4h7.56l1.55,4H32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M9,19a9,9,0,1,0,9-9A9,9,0,0,0,9,19Zm16.4,0A7.4,7.4,0,1,1,18,11.6,7.41,7.41,0,0,1,25.4,19Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M9.37,12.83a.8.8,0,0,0-.8-.8H6.17a.8.8,0,0,0,0,1.6h2.4A.8.8,0,0,0,9.37,12.83Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M12.34,19a5.57,5.57,0,0,0,3.24,5l.85-1.37a4,4,0,1,1,4.11-6.61l.86-1.38A5.56,5.56,0,0,0,12.34,19Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M32,8H24.7L23.64,5.28A2,2,0,0,0,21.78,4H14.22a2,2,0,0,0-1.87,1.28L11.3,8H4a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM6.17,13.63a.8.8,0,0,1,0-1.6h2.4a.8.8,0,0,1,0,1.6ZM18,28a9,9,0,1,1,9-9A9,9,0,0,1,18,28Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M11.11,19.06a7.07,7.07,0,0,0,4.11,6.41l1.09-1.74a5,5,0,1,1,5.22-8.39l1.09-1.76a7.06,7.06,0,0,0-11.51,5.48Z" class="clr-i-solid clr-i-solid-path-2"/>'),a.ClrShapeVideoCamera=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M34,10.34a2.11,2.11,0,0,0-1.16-1.9,2,2,0,0,0-2.13.15L26,11.6V8a2,2,0,0,0-2-2H6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H24a2,2,0,0,0,2-2V24.4l4.64,3a2.07,2.07,0,0,0,2.2.2A2.11,2.11,0,0,0,34,25.66ZM31.93,25.77c-.06,0-.11,0-.19-.06L24,20.77V28H6a2,2,0,0,1-2-2V10A2,2,0,0,1,6,8H24v7.23l7.8-5a.11.11,0,0,1,.13,0,.11.11,0,0,1,.07.11V25.66A.11.11,0,0,1,31.93,25.77Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32.3,9.35,26,12.9V8a2,2,0,0,0-2-2H6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H24a2,2,0,0,0,2-2V23.08l6.3,3.55A1.1,1.1,0,0,0,34,25.77V10.2A1.1,1.1,0,0,0,32.3,9.35Z"/>'),a.ClrShapeShuffle=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M21.61,11h8.62l-3.3,3.3a1,1,0,1,0,1.41,1.42L34,10.08l-.71-.71h0L28.34,4.43a1,1,0,0,0-1.41,1.42L30.11,9H21a1,1,0,0,0-.86.5L17.5,14.09l1.16,2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M11.07,25.07H3a1,1,0,0,0,0,2h8.65a1,1,0,0,0,.86-.5L15.18,22,14,20Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M28.34,20.17a1,1,0,0,0-1.41,1.42l3.5,3.5H21.61L12.51,9.53a1,1,0,0,0-.86-.5H3a1,1,0,1,0,0,2h8.07l9.1,15.55a1,1,0,0,0,.86.5H29.9l-3,3a1,1,0,0,0,1.41,1.42l4.95-4.94h0l.71-.71Z"/>'),a.ClrShapeVolumeDown=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18,32a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.41A2,2,0,0,1,20,6V30a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32ZM4,14v8H9.56a1,1,0,0,1,.71.28L18,30V6l-7.65,7.68a1,1,0,0,1-.71.3ZM18,6Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M18.34,3.87,9,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V4.62A1,1,0,0,0,18.34,3.87Z"/>'),a.ClrShapeVolumeUp=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18,32.06a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.39A2,2,0,0,1,20,6v24a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32.06ZM4,14v8H9.56a1,1,0,0,1,.71.3L18,30.06V6L10.35,13.7a1,1,0,0,1-.71.3ZM18,6Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M18.33,4,9.07,12h-6a1,1,0,0,0-1,1v9.92a1,1,0,0,0,1,1H8.88l9.46,8.24A1,1,0,0,0,20,31.43V4.72A1,1,0,0,0,18.33,4Z"/>'),a.ClrShapeVolumeMute=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M3.61,6.41,9.19,12H4a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H9.14l7.41,7.47A2,2,0,0,0,18,32a2,2,0,0,0,.76-.15A2,2,0,0,0,20,30V22.77l5.89,5.89c-.25.15-.49.29-.75.42a1,1,0,0,0,.9,1.79,14.4,14.4,0,0,0,1.31-.75l2.28,2.28L31,31,5,5ZM18,30l-7.73-7.77A1,1,0,0,0,9.56,22H4V14H9.64a1,1,0,0,0,.71-.3l.26-.26L18,20.81Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M24.89,6.69A12.42,12.42,0,0,1,29,26.1l1.42,1.42A14.42,14.42,0,0,0,25.76,4.88a1,1,0,1,0-.87,1.8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.24,3.71L26,23.13A8.15,8.15,0,0,0,27.8,18a8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M18,6v9.15l2,2V6a2,2,0,0,0-3.42-1.41L12,9.17l1.41,1.41Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M24.87,6.69A12.42,12.42,0,0,1,28.75,26.3l1.42,1.42A14.43,14.43,0,0,0,25.74,4.88a1,1,0,0,0-.87,1.8Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M27.3,27.67h0l-3.84-3.84-.57-.57h0L4.63,5,3.21,6.41,8.8,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V23.2l5.59,5.59c-.17.1-.34.2-.51.29a1,1,0,0,0,.9,1.79c.37-.19.72-.4,1.08-.62l2.14,2.14L30.61,31l-3.25-3.25Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.42,3.92l1.42,1.42a8.16,8.16,0,0,0,2-5.34,8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M20,4.62a1,1,0,0,0-1.66-.75l-6.42,5.6L20,17.54Z"/>'),a.ClrShapeHeadphones=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,3A14.27,14.27,0,0,0,4,17.5V31H9.2A2.74,2.74,0,0,0,12,28.33V21.67A2.74,2.74,0,0,0,9.2,19H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V19H26.8A2.74,2.74,0,0,0,24,21.67v6.67A2.74,2.74,0,0,0,26.8,31H32V17.5A14.27,14.27,0,0,0,18,3ZM9.2,21a.75.75,0,0,1,.8.67v6.67a.75.75,0,0,1-.8.67H6V21ZM26,28.33V21.67a.75.75,0,0,1,.8-.67H30v8H26.8A.75.75,0,0,1,26,28.33Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,3A14.27,14.27,0,0,0,4,17.5V31H8.2A1.74,1.74,0,0,0,10,29.33V22.67A1.74,1.74,0,0,0,8.2,21H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V21H27.8A1.74,1.74,0,0,0,26,22.67v6.67A1.74,1.74,0,0,0,27.8,31H32V17.5A14.27,14.27,0,0,0,18,3Z"/>'),a.ClrShapeFilmStrip=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4Zm0,26H6V6H30Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M14.6,23.07a1.29,1.29,0,0,0,1.24.09l8.73-4a1.3,1.3,0,0,0,0-2.37h0l-8.73-4A1.3,1.3,0,0,0,14,14v8A1.29,1.29,0,0,0,14.6,23.07Zm1-8.6L23.31,18,15.6,21.51Z"/>\n            <rect class="clr-i-outline clr-i-outline-path-3" x="8" y="7" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-4" x="14" y="7" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-5" x="20" y="7" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-6" x="26" y="7" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-7" x="8" y="26" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-8" x="14" y="26" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-9" x="20" y="26" width="2" height="3"/>\n            <rect class="clr-i-outline clr-i-outline-path-10" x="26" y="26" width="2" height="3"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM20,7h2v3H20ZM14,7h2v3H14ZM10,29H8V26h2Zm0-19H8V7h2Zm6,19H14V26h2Zm6,0H20V26h2Zm3.16-10.16L15.39,23.2A1,1,0,0,1,14,22.28V13.57a1,1,0,0,1,1.41-.91L25.16,17A1,1,0,0,1,25.16,18.84ZM28,29H26V26h2Zm0-19H26V7h2Z"/>'),a.ClrShapeMusicNote=t.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1"\n                d="M31.68,6.16c-1.92-3.3-10.6-4-11.58-4.09L19,2V22.34a5.89,5.89,0,0,0-.82-.56,8.33,8.33,0,0,0-6.53-.41C7.57,22.7,4.92,26.5,5.78,29.84a5.33,5.33,0,0,0,2.66,3.32,7.48,7.48,0,0,0,3.61.88A9.54,9.54,0,0,0,15,33.57c3.67-1.18,6.17-4.33,6.06-7.36V9.34a29.14,29.14,0,0,1,6.55,1.43,1,1,0,1,0,.72-1.87A31.37,31.37,0,0,0,21,7.33V4.17c3.33.36,8,1.38,8.92,3,2,3.41-2.33,7.36-2.37,7.4a1,1,0,0,0,1.33,1.49C29.15,15.85,34.5,11,31.68,6.16ZM14.35,31.67a6.43,6.43,0,0,1-5-.26,3.31,3.31,0,0,1-1.69-2.07c-.6-2.33,1.45-5.05,4.58-6.06a7.52,7.52,0,0,1,2.3-.37,5.52,5.52,0,0,1,2.65.62,3.31,3.31,0,0,1,1.69,2.07C19.54,27.94,17.49,30.66,14.35,31.67Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1"\n                d="M31.68,6.16c-1.92-3.3-10.6-4-11.58-4.09L19,2V22.29a5.88,5.88,0,0,0-.81-.55,8.33,8.33,0,0,0-6.53-.41c-4.12,1.33-6.77,5.13-5.91,8.47a5.33,5.33,0,0,0,2.66,3.32,7.48,7.48,0,0,0,3.61.88A9.54,9.54,0,0,0,15,33.52c3.7-1.19,6.2-4.37,6.06-7.42,0,0,0,0,0,0V8.49c1,.12,2.37.33,3.82.64a11.17,11.17,0,0,1,4.06,1.46c1,.66.38,1.9.33,2a11.8,11.8,0,0,1-1.66,2,1,1,0,0,0,1.33,1.49C29.15,15.85,34.5,11,31.68,6.16Z"/>'),a.ClrShapeImageGallery=t.clrIconSVG('<path d="M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM32,30H4V12H32Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M8.56,19.45a3,3,0,1,0-3-3A3,3,0,0,0,8.56,19.45Zm0-4.6A1.6,1.6,0,1,1,7,16.45,1.6,1.6,0,0,1,8.56,14.85Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M7.9,28l6-6,3.18,3.18L14.26,28h2l7.46-7.46L30,26.77v-2L24.2,19a.71.71,0,0,0-1,0l-5.16,5.16L14.37,20.5a.71.71,0,0,0-1,0L5.92,28Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM8.56,13.45a3,3,0,1,1-3,3A3,3,0,0,1,8.56,13.45ZM30,28h-24l7.46-7.47a.71.71,0,0,1,1,0l3.68,3.68L23.21,19a.71.71,0,0,1,1,0L30,24.79Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeReplayAll=t.clrIconSVG('<path d="M17.46,26.22a1.4,1.4,0,0,0,1-.42l5.59-5.56a1.43,1.43,0,0,0,.42-1,1.46,1.46,0,0,0-.42-1l-5.59-5.56a1.43,1.43,0,0,0-2.44,1V24.79a1.41,1.41,0,0,0,.88,1.32A1.54,1.54,0,0,0,17.46,26.22Zm.16-12.16,5.19,5.16-5.19,5.17Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18.06,5h-6.7l2.92-2.64A1,1,0,0,0,12.94.88L7.32,6,12.94,11a1,1,0,0,0,.67.26,1,1,0,0,0,.74-.33,1,1,0,0,0-.07-1.42L11.46,7h6.6A11.78,11.78,0,1,1,7.71,24.41,1,1,0,0,0,6,25.36,13.78,13.78,0,1,0,18.06,5Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeReplayOne=t.clrIconSVG('<path d="M19,27.27a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H19a3.8,3.8,0,0,0-1.1.23l-2,.62a.92.92,0,0,0-.72.86.88.88,0,0,0,.88.86,1.46,1.46,0,0,0,.43-.08L18,15.07v11.2A1,1,0,0,0,19,27.27Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18.06,5h-6.7l2.92-2.64A1,1,0,0,0,12.94.88L7.32,6,12.94,11a1,1,0,0,0,.67.26,1,1,0,0,0,.74-.33,1,1,0,0,0-.07-1.42L11.46,7h6.6A11.78,11.78,0,1,1,7.71,24.41,1,1,0,0,0,6,25.36,13.78,13.78,0,1,0,18.06,5Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeVideoGallery=t.clrIconSVG('<path d="M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM32,30H4V12H32Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M12.82,26.79a1.74,1.74,0,0,0,.93.28,1.68,1.68,0,0,0,.69-.15l9.77-4.36a1.69,1.69,0,0,0,0-3.1L14.44,15.1a1.7,1.7,0,0,0-2.39,1.55v8.72A1.7,1.7,0,0,0,12.82,26.79Zm.63-10.14a.29.29,0,0,1,.14-.25.3.3,0,0,1,.16,0,.27.27,0,0,1,.12,0l9.77,4.35a.29.29,0,0,1,.18.28.28.28,0,0,1-.18.27l-9.77,4.36a.28.28,0,0,1-.28,0,.31.31,0,0,1-.14-.25Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M32.12,10H3.88A1.88,1.88,0,0,0,2,11.88V30.12A1.88,1.88,0,0,0,3.88,32H32.12A1.88,1.88,0,0,0,34,30.12V11.88A1.88,1.88,0,0,0,32.12,10ZM24.18,21.83l-9.77,4.36A1,1,0,0,1,13,25.28V16.56a1,1,0,0,1,1.41-.91L24.18,20A1,1,0,0,1,24.18,21.83Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M30.14,3h0a1,1,0,0,0-1-1h-22a1,1,0,0,0-1,1h0V4h24Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M32.12,7V7a1,1,0,0,0-1-1h-26a1,1,0,0,0-1,1h0V8h28Z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeMicrophone=t.clrIconSVG('<path d="M18,24c3.9,0,7-3.1,7-7V9c0-3.9-3.1-7-7-7s-7,3.1-7,7v8C11,20.9,14.1,24,18,24z M13,9c0-2.8,2.2-5,5-5s5,2.2,5,5v8\n\t\tc0,2.8-2.2,5-5,5s-5-2.2-5-5V9z" class="clr-i-outline clr-i-outline-path-1" /><path d="M30,17h-2c0,5.5-4.5,10-10,10S8,22.5,8,17H6c0,6.3,4.8,11.4,11,11.9V32h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1\n\t\ts-0.4-1-1-1h-3v-3.1C25.2,28.4,30,23.3,30,17z" class="clr-i-outline clr-i-outline-path-2" /><path d="M18,24c3.9,0,7-3.1,7-7V9c0-3.9-3.1-7-7-7s-7,3.1-7,7v8C11,20.9,14.1,24,18,24z" class="clr-i-solid clr-i-solid-path-1" /><path d="M30,17h-2c0,5.5-4.5,10-10,10S8,22.5,8,17H6c0,6.3,4.8,11.4,11,11.9V32h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1\n\t\ts-0.4-1-1-1h-3v-3.1C25.2,28.4,30,23.3,30,17z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeMicrophoneMute=t.clrIconSVG('<path d="M30,17h-2c0,1.8-0.5,3.5-1.4,5l1.5,1.5C29.3,21.5,29.9,19.3,30,17z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,4c2.8,0,5,2.2,5,5v8c0,0.4-0.1,0.8-0.2,1.2l1.6,1.6c0.4-0.9,0.6-1.8,0.6-2.8V9c0-3.9-3.2-7-7.1-6.9\n\t\tc-2.9,0-5.6,1.9-6.5,4.7L13,8.3C13.5,5.9,15.6,4.2,18,4z" class="clr-i-outline clr-i-outline-path-2" /><path d="M25.2,26.6l6.9,6.9l1.4-1.4L4,2.6L2.6,4l8.4,8.4V17c0,3.9,3.1,7,7,7c1.3,0,2.5-0.3,3.6-1l2.2,2.2C22.1,26.4,20.1,27,18,27\n\t\tc-5.4,0.2-9.8-4.1-10-9.4c0-0.2,0-0.4,0-0.6H6c0.1,6.2,4.8,11.4,11,12v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1\n\t\ts-0.4-1-1-1h-3v-3C21.2,28.8,23.4,28,25.2,26.6z M13.8,19.7C13.3,18.9,13,18,13,17v-2.6l7.1,7.1C17.9,22.5,15.2,21.8,13.8,19.7z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30,17h-2c0,1.8-0.5,3.5-1.4,5l1.5,1.5C29.3,21.5,29.9,19.3,30,17z" class="clr-i-solid clr-i-solid-path-1" /><path d="M25,17V9c0-3.9-3.2-7-7.1-6.9c-2.9,0-5.6,1.9-6.5,4.7l13,13C24.8,18.9,25,17.9,25,17z" class="clr-i-solid clr-i-solid-path-2" /><path d="M25.2,26.6l6.9,6.9l1.4-1.4L4,2.6L2.6,4l8.4,8.4V17c0,3.9,3.1,7,7,7c1.3,0,2.5-0.3,3.6-1l2.2,2.2C22.1,26.4,20.1,27,18,27\n\t\tc-5.4,0.2-9.8-4.1-10-9.4c0-0.2,0-0.4,0-0.6H6c0.1,6.2,4.8,11.4,11,12v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1\n\t\ts-0.4-1-1-1h-3v-3C21.2,28.8,23.4,28,25.2,26.6z" class="clr-i-solid clr-i-solid-path-3" />'),a.MediaShapes={play:a.ClrShapePlay,pause:a.ClrShapePause,"step-forward":a.ClrShapeStepForward,stop:a.ClrShapeStop,power:a.ClrShapePower,rewind:a.ClrShapeRewind,"fast-forward":a.ClrShapeFastForward,camera:a.ClrShapeCamera,"video-camera":a.ClrShapeVideoCamera,shuffle:a.ClrShapeShuffle,"volume-up":a.ClrShapeVolumeUp,"volume-down":a.ClrShapeVolumeDown,"volume-mute":a.ClrShapeVolumeMute,headphones:a.ClrShapeHeadphones,"film-strip":a.ClrShapeFilmStrip,"music-note":a.ClrShapeMusicNote,"image-gallery":a.ClrShapeImageGallery,"replay-all":a.ClrShapeReplayAll,"replay-one":a.ClrShapeReplayOne,"video-gallery":a.ClrShapeVideoGallery,microphone:a.ClrShapeMicrophone,"microphone-mute":a.ClrShapeMicrophoneMute},"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.MediaShapes)},"./src/shapes/social-shapes.ts":
/*!*************************************!*\
  !*** ./src/shapes/social-shapes.ts ***!
  \*************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SocialShapes=a.ClrShapeHashtag=a.ClrShapeCrown=a.ClrShapeThumbsDown=a.ClrShapeThumbsUp=a.ClrShapeSadFace=a.ClrShapeNeutralFace=a.ClrShapeHappyFace=a.ClrShapePicture=a.ClrShapeChatBubble=a.ClrShapeTalkBubbles=a.ClrShapeHeartBroken=a.ClrShapeHeart=a.ClrShapeInbox=a.ClrShapeFlag=a.ClrShapeTasks=a.ClrShapeEnvelope=a.ClrShapeBookmark=a.ClrShapeHalfStar=a.ClrShapeStar=a.ClrShapeShare=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts"),e=i(/*! ./core-shapes */"./src/shapes/core-shapes.ts");a.ClrShapeShare=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Zm0-20a3,3,0,1,1-3,3A3,3,0,0,1,27.53,4ZM7,21a3,3,0,1,1,3-3A3,3,0,0,1,7,21ZM27.53,32a3,3,0,1,1,3-3A3,3,0,0,1,27.53,32Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M27.53,24a5,5,0,0,0-3.6,1.55L11.74,19.45a4.47,4.47,0,0,0,0-2.8l12.21-6.21a5.12,5.12,0,1,0-1.07-1.7L10.79,14.89a5,5,0,1,0,0,6.33l12.06,6.07A4.93,4.93,0,0,0,22.54,29a5,5,0,1,0,5-5Z"/>'),a.ClrShapeStar=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.19,34a2.22,2.22,0,0,1-1.24-.38l-7.46-5a.22.22,0,0,0-.25,0l-7.46,5A2.22,2.22,0,0,1,7.4,31.21l2.45-8.64a.23.23,0,0,0-.08-.24L2.71,16.78a2.22,2.22,0,0,1,1.29-4l9-.34a.23.23,0,0,0,.2-.15l3.1-8.43a2.22,2.22,0,0,1,4.17,0l3.1,8.43a.23.23,0,0,0,.2.15l9,.34a2.22,2.22,0,0,1,1.29,4L27,22.33a.22.22,0,0,0-.08.24l2.45,8.64A2.23,2.23,0,0,1,27.19,34Zm-8.82-7.42A2.21,2.21,0,0,1,19.6,27l7.46,5a.22.22,0,0,0,.34-.25l-2.45-8.64a2.21,2.21,0,0,1,.77-2.35l7.06-5.55a.22.22,0,0,0-.13-.4l-9-.34a2.22,2.22,0,0,1-2-1.46l-3.1-8.43a.22.22,0,0,0-.42,0L15.06,13a2.22,2.22,0,0,1-2,1.46l-9,.34a.22.22,0,0,0-.13.4L11,20.76a2.22,2.22,0,0,1,.77,2.35L9.33,31.75a.21.21,0,0,0,.08.24.2.2,0,0,0,.26,0l7.46-5A2.22,2.22,0,0,1,18.36,26.62Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"/>'),a.ClrShapeHalfStar=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.22.22,0,0,1,.08.24L7.35,31.21A2.23,2.23,0,0,0,9.49,34a2.22,2.22,0,0,0,1.24-.38l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.22,2.22,0,0,0,3.38-2.45l-2.45-8.64a.23.23,0,0,1,.08-.24ZM18.33,26.62h0a2.21,2.21,0,0,0-1.24.38L9.62,32a.22.22,0,0,1-.34-.25l2.45-8.64A2.21,2.21,0,0,0,11,20.76L3.9,15.21a.22.22,0,0,1,.13-.4l9-.34A2.22,2.22,0,0,0,15,13l3.1-8.43a.2.2,0,0,1,.21-.15h0Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24ZM24.9,23.11l2.45,8.64A.22.22,0,0,1,27,32l-7.46-5a2.21,2.21,0,0,0-1.24-.38h0V4.44h0a.2.2,0,0,1,.21.15L21.62,13a2.22,2.22,0,0,0,2,1.46l9,.34a.22.22,0,0,1,.13.4l-7.06,5.55A2.21,2.21,0,0,0,24.9,23.11Z"/>'),a.ClrShapeBookmark=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M26,34a2,2,0,0,1-1.41-.58L18,26.82l-6.54,6.52A2,2,0,0,1,8,31.93V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V32a2,2,0,0,1-2,2Zm0-2h0V4H10V31.93L18,24Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M26,2H10A2,2,0,0,0,8,4V31.93a2,2,0,0,0,3.42,1.41l6.54-6.52,6.63,6.6A2,2,0,0,0,28,32V4A2,2,0,0,0,26,2Z"/>'),a.ClrShapeEnvelope=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M32,13.08V26.71l-7.36-7.36-1.41,1.41L30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0l8.83-8.78a7.44,7.44,0,0,1-2-.85l-8.26,8.21L5.31,8H22.81a7.49,7.49,0,0,1-.31-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.2A7.45,7.45,0,0,1,32,13.08Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="5.86" r="5"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M33.68,15.26H32V26.71l-7.36-7.36-1.41,1.41L30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0l6.66-6.63H23.08l-5.24,5.21L5.31,8H20.06l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.24Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" d="M26.85,1l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1A1.28,1.28,0,0,0,26.85,1Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M26,12.34A7.49,7.49,0,0,1,22.5,6H3.92a2,2,0,0,0-.53.08L17.84,20.47Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M30,13.5a7.49,7.49,0,0,1-2-.29l-8.71,8.68a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V12.39A7.45,7.45,0,0,1,30,13.5ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M33.68,15.4H25.77l-6.52,6.49a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V15.38ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M22.94,15.4h-.7A3.68,3.68,0,0,1,19,9.89L21.29,6H3.92a2,2,0,0,0-.53.08L17.84,20.47Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>'),a.ClrShapeTasks=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M29.29,34H6.71A1.7,1.7,0,0,1,5,32.31V6.69A1.75,1.75,0,0,1,7,5H9V7H7V32H29V7H27V5h2.25A1.7,1.7,0,0,1,31,6.69V32.31A1.7,1.7,0,0,1,29.29,34Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M16.66,25.76,11.3,20.4A1,1,0,0,1,12.72,19l3.94,3.94,8.64-8.64a1,1,0,0,1,1.41,1.41Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M26,11H10V7.33A2.34,2.34,0,0,1,12.33,5h1.79a4,4,0,0,1,7.75,0h1.79A2.34,2.34,0,0,1,26,7.33ZM12,9H24V7.33A.33.33,0,0,0,23.67,7H20V6a2,2,0,0,0-4,0V7H12.33a.33.33,0,0,0-.33.33Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M19,9.89,19.56,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h.71l1.16-2a4,4,0,0,0-7.74,0H12.33A2.34,2.34,0,0,0,10,7.33V11h8.64A3.65,3.65,0,0,1,19,9.89Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M24.19,15.4l-7.53,7.53L12.72,19A1,1,0,0,0,11.3,20.4l5.36,5.36L26.71,15.71a1,1,0,0,0,.2-.31Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M29,15.4V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V15.4Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M12.72,19A1,1,0,0,0,11.3,20.4l5.36,5.36L26.71,15.71a1,1,0,0,0-1.41-1.41l-8.64,8.64Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M23.13,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h2.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1h-.7a4,4,0,0,0-7.75,0H12.33A2.34,2.34,0,0,0,10,7.33V11H24.42A7.5,7.5,0,0,1,23.13,9Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M30,13.5a7.52,7.52,0,0,1-1-.07V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V13.43A7.52,7.52,0,0,1,30,13.5Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M29.29,4.95h-7.2a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V6.64A1.7,1.7,0,0,0,29.29,4.95Zm-18,3a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h3.44a1,1,0,0,1,1,1V9.8H11.25Zm14.52,9.23-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M25.88,15.4a1.38,1.38,0,0,1-.11,1.81l-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7-7H22.23A3.68,3.68,0,0,1,19,9.89l0-.09H11.25V8a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h.42L22,4.76a4.3,4.3,0,0,0-8.09.19H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V15.4Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M30,13.5a7.49,7.49,0,0,1-6.46-3.7H11.25V8a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h2.26a7.53,7.53,0,0,1-.07-1,7.53,7.53,0,0,1,.08-1.05h-.5a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V13.43A7.52,7.52,0,0,1,30,13.5Zm-4.23,3.71-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeFlag=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M6,34a1,1,0,0,1-1-1V3A1,1,0,0,1,7,3V33A1,1,0,0,1,6,34Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M30.55,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,2.85V5.08A8.8,8.8,0,0,1,13.25,4a11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66A18.75,18.75,0,0,0,29,6.12V18.95a16.16,16.16,0,0,1-5.58.93,13.11,13.11,0,0,1-5.18-1.49,12.78,12.78,0,0,0-5-1.45A10.86,10.86,0,0,0,9,17.79V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.55,3.82Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M5.92,2a1,1,0,0,0-1,1V33a1,1,0,0,0,2,0V3A1,1,0,0,0,5.92,2Z"/>\n                <path class="clr-i-solid clr-i-solid-path-2" d="M30.5,3.82a1,1,0,0,0-1,0,14.9,14.9,0,0,1-6.13,1.16,13.11,13.11,0,0,1-5.18-1.49A12.78,12.78,0,0,0,13.2,2,10.86,10.86,0,0,0,9,2.85V20a8.8,8.8,0,0,1,4.25-1.08,11.22,11.22,0,0,1,4.2,1.28,14.84,14.84,0,0,0,6,1.66,16.79,16.79,0,0,0,7-1.37,1,1,0,0,0,.55-.89V4.67A1,1,0,0,0,30.5,3.82Z"/>'),a.ClrShapeInbox=c.clrIconSVG('<path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M29.5,5H22V7h7V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V6.5A1.5,1.5,0,0,0,29.5,5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M30,13.5a7.52,7.52,0,0,1-1-.07V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V13.43A7.52,7.52,0,0,1,30,13.5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>'),a.ClrShapeHeart=c.clrIconSVG('<path d="M18,32.43a1,1,0,0,1-.61-.21C11.83,27.9,8,24.18,5.32,20.51,1.9,15.82,1.12,11.49,3,7.64c1.34-2.75,5.19-5,9.69-3.69A9.87,9.87,0,0,1,18,7.72a9.87,9.87,0,0,1,5.31-3.77c4.49-1.29,8.35.94,9.69,3.69,1.88,3.85,1.1,8.18-2.32,12.87C28,24.18,24.17,27.9,18.61,32.22A1,1,0,0,1,18,32.43ZM10.13,5.58A5.9,5.9,0,0,0,4.8,8.51c-1.55,3.18-.85,6.72,2.14,10.81A57.13,57.13,0,0,0,18,30.16,57.13,57.13,0,0,0,29.06,19.33c3-4.1,3.69-7.64,2.14-10.81-1-2-4-3.59-7.34-2.65a8,8,0,0,0-4.94,4.2,1,1,0,0,1-1.85,0,7.93,7.93,0,0,0-4.94-4.2A7.31,7.31,0,0,0,10.13,5.58Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87,9.87,0,0,0,18,7.72a9.87,9.87,0,0,0-5.31-3.77C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeHeartBroken=c.clrIconSVG('<path d="M33,7.64c-1.34-2.75-5.09-5-9.69-3.69a9.87,9.87,0,0,0-6,4.84,18.9,18.9,0,0,0-2.23,5.33l5.28,2.34-4.6,4.37,3.49,4.1,1.52-1.3L18.54,21l5.4-5.13L17.58,13A16.23,16.23,0,0,1,19.75,8.9a7.68,7.68,0,0,1,4.11-3c3.34-.89,6.34.6,7.34,2.65,1.55,3.18.85,6.72-2.14,10.81A57.16,57.16,0,0,1,18,30.16,57.16,57.16,0,0,1,6.94,19.33c-3-4.1-3.69-7.64-2.14-10.81a5.9,5.9,0,0,1,5.33-2.93,7.31,7.31,0,0,1,2,.29,7.7,7.7,0,0,1,3.38,2l.15-.3a10.66,10.66,0,0,1,1-1.41,9.64,9.64,0,0,0-3.94-2.22C8.2,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A11.55,11.55,0,0,0,18.19,7.5a16.89,16.89,0,0,0-2.48,4.56L22.27,15,16.7,20.26,19,23l-1.57,1.34-3.6-4.22,4.74-4.51-5.44-2.41a19.49,19.49,0,0,1,2.3-5.5,14.77,14.77,0,0,1,1.06-1.54l.06,0a9.66,9.66,0,0,0-3.89-2.18C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeTalkBubbles=c.clrIconSVG('<path d="M23,26a1,1,0,0,1-1,1H8c-.22,0-.43.2-.61.33L4,30V14a1,1,0,0,1,1-1H8.86V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H23Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M31,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V7A3,3,0,0,0,31,4ZM32,22.94,28.5,20.21a1,1,0,0,0-.61-.21H14a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1H31A1.1,1.1,0,0,1,32,7.06Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M23,26a1,1,0,0,1-1,1H8c-.22,0-.43.2-.61.33L4,30V14a1,1,0,0,1,1-1H8.86V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H23Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M32,13.22v9.72L28.5,20.21a1,1,0,0,0-.61-.21H14a1,1,0,0,1-1-1V7a1,1,0,0,1,1-1H22.5a7.49,7.49,0,0,1,.28-2H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V12.37A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>\n            <path d="M8,19V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H14A6,6,0,0,1,8,19Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M31,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V7A3,3,0,0,0,31,4Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M8,19V11H5a3,3,0,0,0-3,3V32a1,1,0,0,0,.56.89,1,1,0,0,0,1-.1L8.71,29H22.15A2.77,2.77,0,0,0,25,26.13V25H14A6,6,0,0,1,8,19Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M30,13.5A7.48,7.48,0,0,1,22.78,4H14a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H27.55l4.78,3.71a1,1,0,0,0,1,.11,1,1,0,0,0,.57-.9V12.37A7.45,7.45,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>'),a.ClrShapeChatBubble=c.clrIconSVG('<path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM28.29,24.61a1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.08,11.08,0,0,1,28.29,24.61Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M25,15.5H11a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M21.75,20.5h-7.5a1,1,0,0,0,0,2h7.5a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M11.28,12.5H24.72a1,1,0,0,0,0-2H11.28a1,1,0,0,0,0,2Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M33.38,12.69a7.43,7.43,0,0,1-1.89.66A10.35,10.35,0,0,1,32,16.5a11.08,11.08,0,0,1-3.71,8.11,1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12a16,16,0,0,1,4.55.66A7.44,7.44,0,0,1,23,3.22a18,18,0,0,0-5-.72c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27A12.32,12.32,0,0,0,33.38,12.69Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M11,15.5a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M14.25,20.5a1,1,0,0,0,0,2h7.5a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M10.28,11.5a1,1,0,0,0,1,1H24.72a1,1,0,0,0,.83-.47A7.53,7.53,0,0,1,24,10.5H11.28A1,1,0,0,0,10.28,11.5Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />\n            <path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5Zm8,14a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,16.5Zm-3.25,5a1,1,0,0,1-1,1h-7.5a1,1,0,0,1,0-2h7.5A1,1,0,0,1,22.75,21.5Zm-12.47-10a1,1,0,0,1,1-1H24.72a1,1,0,0,1,0,2H11.28A1,1,0,0,1,10.28,11.5Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,13.25a7.46,7.46,0,0,1-4.35-1.4,1,1,0,0,1-.93.65H11.28a1,1,0,0,1,0-2H24.2A7.46,7.46,0,0,1,23,3.2a18,18,0,0,0-5-.7c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27,12.34,12.34,0,0,0-.68-4A7.46,7.46,0,0,1,30,13.25ZM21.75,22.5h-7.5a1,1,0,0,1,0-2h7.5a1,1,0,0,1,0,2Zm3.25-5H11a1,1,0,0,1,0-2H25a1,1,0,0,1,0,2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="5.75" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapePicture=c.clrIconSVG('<path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,30V6H32V30Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M8.92,14a3,3,0,1,0-3-3A3,3,0,0,0,8.92,14Zm0-4.6A1.6,1.6,0,1,1,7.33,11,1.6,1.6,0,0,1,8.92,9.41Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M22.78,15.37l-5.4,5.4-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81A1,1,0,0,0,22.78,15.37Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M11.93,11a3,3,0,1,0-3,3A3,3,0,0,0,11.93,11Zm-4.6,0a1.6,1.6,0,1,1,1.6,1.6A1.6,1.6,0,0,1,7.33,11Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M17.38,20.77l-4-4a1,1,0,0,0-1.41,0L5.92,22.9v2.83l6.79-6.79L16,22.18l-3.75,3.75H15l8.45-8.45L30,24V21.18l-5.81-5.81a1,1,0,0,0-1.41,0Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M32,13.22V30H4V6H22.5a7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M30,13.5A7.48,7.48,0,0,1,22.78,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM8.92,8a3,3,0,1,1-3,3A3,3,0,0,1,8.92,8ZM6,27V22.9l6-6.08a1,1,0,0,1,1.41,0L16,19.35,8.32,27Zm24,0H11.15l6.23-6.23,5.4-5.4a1,1,0,0,1,1.41,0L30,21.18Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>'),a.ClrShapeHappyFace=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <circle cx="10.89" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-2"/>\n            <circle cx="25.05" cy="13.89" r="2" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M18.13,28.21a8.67,8.67,0,0,0,8.26-6H9.87A8.67,8.67,0,0,0,18.13,28.21Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM8.89,13.89a2,2,0,1,1,2,2A2,2,0,0,1,8.89,13.89Zm9.24,14.32a8.67,8.67,0,0,1-8.26-6H26.38A8.67,8.67,0,0,1,18.13,28.21Zm6.93-12.32a2,2,0,1,1,2-2A2,2,0,0,1,25.05,15.89Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeNeutralFace=c.clrIconSVG('<path d="M24.05,22.06h-12a1,1,0,0,0,0,2h12a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>\n            <circle cx="11.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.05,21.06a1,1,0,0,1-1,1h-12a1,1,0,0,1,0-2h12A1,1,0,0,1,25.05,23.06ZM27,14.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.8,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.16,16.08Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeSadFace=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <circle cx="25.16" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-2"/>\n            <circle cx="11.41" cy="14.28" r="1.8" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M18.16,20a9,9,0,0,0-7.33,3.78,1,1,0,1,0,1.63,1.16,7,7,0,0,1,11.31-.13,1,1,0,0,0,1.6-1.2A9,9,0,0,0,18.16,20Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm9,12.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.55,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.41,16.08Zm14,7.53a1,1,0,0,1-1.6,1.2,7,7,0,0,0-11.31.13,1,1,0,1,1-1.63-1.16,9,9,0,0,1,14.54-.17Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.ClrShapeThumbsUp=c.clrIconSVG('<path d="M24,26c-2.92,1.82-7.3,4-9.37,4h-6a16.68,16.68,0,0,1-3.31-6.08A26.71,26.71,0,0,1,4,16h9V6a2.05,2.05,0,0,1,1.26-1.69c.77,2,2.62,6.57,4.23,8.72A11.39,11.39,0,0,0,24,16.91V14.78a9.13,9.13,0,0,1-3.91-3c-1.88-2.51-4.29-9.11-4.31-9.17A1,1,0,0,0,14.59,2C13.25,2.38,11,3.6,11,6v8H3a1,1,0,0,0-1,1,29,29,0,0,0,1.4,9.62c1.89,5.4,4.1,7.14,4.2,7.22a1,1,0,0,0,.61.21h6.42c2.43,0,6.55-2,9.37-3.63Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M34,31H27a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h7Zm-6-2h4V15H28Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M19.63,12.12C17.51,9.28,14.88,2,14.88,2S12,2.83,12,5.25V15H2.23a29.46,29.46,0,0,0,1.44,9.74C5.61,30.27,7.8,32,7.8,32h6.86C16.9,32,21,30.06,24,28.31V15.51A10.84,10.84,0,0,1,19.63,12.12Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M27,13a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1h7V13Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeThumbsDown=c.clrIconSVG('<path d="M12,10c2.92-1.82,7.3-4,9.37-4h6a16.68,16.68,0,0,1,3.31,6.08A26.71,26.71,0,0,1,32,20H23V30a2.05,2.05,0,0,1-1.26,1.69c-.77-2-2.62-6.57-4.23-8.72A11.39,11.39,0,0,0,12,19.09v2.13a9.13,9.13,0,0,1,3.91,3c1.88,2.51,4.29,9.11,4.31,9.17a1,1,0,0,0,1.19.63C22.75,33.62,25,32.4,25,30V22h8a1,1,0,0,0,1-1,29,29,0,0,0-1.4-9.62c-1.89-5.4-4.1-7.14-4.2-7.22A1,1,0,0,0,27.79,4H21.37C18.94,4,14.83,6,12,7.63Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M2,5H9a1,1,0,0,1,1,1V22a1,1,0,0,1-1,1H2ZM8,7H4V21H8Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M16.37,23.84c2.12,2.84,4.76,10.07,4.76,10.07S24,33.13,24,30.71V21h9.77a29.46,29.46,0,0,0-1.44-9.74C30.39,5.68,28.2,4,28.2,4H21.35C19.1,4,15,5.9,12,7.65v12.8A10.84,10.84,0,0,1,16.37,23.84Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M9,23a1,1,0,0,0,1-1V6A1,1,0,0,0,9,5H2V23Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeCrown=c.clrIconSVG('\n  <path d="M4,13.33A1.39,1.39,0,1,0,2.6,14.72,1.39,1.39,0,0,0,4,13.33Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M31.81,15.84a20.35,20.35,0,0,0-4.58,1.43,22.7,22.7,0,0,0-3.48,2.1A17.69,17.69,0,0,1,22,16.57a47.65,47.65,0,0,1-2.8-7.69,1,1,0,0,0-1-.74,1,1,0,0,0-1,.74,46.71,46.71,0,0,1-2.8,7.69,17,17,0,0,1-1.76,2.8,22.7,22.7,0,0,0-3.48-2.1,20.66,20.66,0,0,0-4.58-1.43,1,1,0,0,0-1,.39,1,1,0,0,0-.09,1.05A50.13,50.13,0,0,1,7.82,31.17a1,1,0,0,0,1,.83H27.62a1,1,0,0,0,1-.83,50.15,50.15,0,0,1,4.26-13.89,1,1,0,0,0-.09-1.05A1,1,0,0,0,31.81,15.84ZM26.79,30H9.64a55.66,55.66,0,0,0-3.4-11.71,15.75,15.75,0,0,1,2.09.78,20,20,0,0,1,3.85,2.45,1,1,0,0,0,1.39-.09,19.28,19.28,0,0,0,2.67-4,43.46,43.46,0,0,0,2-4.89,41.74,41.74,0,0,0,2,4.89,19.92,19.92,0,0,0,2.66,4,1,1,0,0,0,1.4.09,19.21,19.21,0,0,1,3.85-2.45,14.77,14.77,0,0,1,2.09-.78A55.07,55.07,0,0,0,26.79,30Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <ellipse cx="33.83" cy="13.33" rx="1.39" ry="1.39" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M18.22,6.39A1.39,1.39,0,1,0,16.84,5,1.39,1.39,0,0,0,18.22,6.39Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M18.23,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,18.23,26.34Z" class="clr-i-outline clr-i-outline-path-5"/>\n  <path d="M12.58,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,12.58,26.34Z"/><path d="M23.89,26.34a1.11,1.11,0,1,0,1.1,1.1A1.1,1.1,0,0,0,23.89,26.34Z" class="clr-i-outline clr-i-outline-path-6"/>\n\n  <path d="M2.6,11.93A1.4,1.4,0,1,0,4,13.33,1.4,1.4,0,0,0,2.6,11.93Z" class="clr-i-solid clr-i-solid-path-1"/>\n  <ellipse cx="33.83" cy="13.33" rx="1.39" ry="1.39" class="clr-i-solid clr-i-solid-path-2"/>\n  <path d="M18.22,6.39A1.39,1.39,0,1,0,16.84,5,1.39,1.39,0,0,0,18.22,6.39Z" class="clr-i-solid clr-i-solid-path-3"/>\n  <path d="M31.63,16.1A18.61,18.61,0,0,0,28,17.34a21.57,21.57,0,0,0-4,2.49,19.2,19.2,0,0,1-2.26-3.49,48.92,48.92,0,0,1-2.52-6.58,1,1,0,0,0-1-.71h0a1,1,0,0,0-1,.71,48.42,48.42,0,0,1-2.52,6.58,18.69,18.69,0,0,1-2.26,3.48,22.81,22.81,0,0,0-4-2.48A18.83,18.83,0,0,0,4.9,16.1a1,1,0,0,0-1,.33,1,1,0,0,0-.13,1.07,55.9,55.9,0,0,1,4,13.5,1,1,0,0,0,1,.83h19a1,1,0,0,0,1-.83,55.9,55.9,0,0,1,4-13.5,1,1,0,0,0-.13-1.07A1,1,0,0,0,31.63,16.1ZM11.08,28.55a1.11,1.11,0,1,1,1.1-1.11A1.11,1.11,0,0,1,11.08,28.55Zm7.15,0a1.11,1.11,0,0,1,0-2.21,1.11,1.11,0,0,1,0,2.21Zm7.16,0a1.11,1.11,0,1,1,1.1-1.11A1.11,1.11,0,0,1,25.39,28.55Z" class="clr-i-solid clr-i-solid-path-4"/>\n  '),a.ClrShapeHashtag=c.clrIconSVG('\n  <path d="M32,12H25.34l1.55-7.74a1,1,0,0,0-2-.39L23.3,12H15.11l1.55-7.74a1,1,0,0,0-2-.39L13.07,12H6a1,1,0,0,0,0,2h6.67l-1.6,8H4a1,1,0,0,0,0,2h6.66L9.11,31.74a1,1,0,0,0,.79,1.17.68.68,0,0,0,.2,0,1,1,0,0,0,1-.8L12.7,24h8.19l-1.55,7.74a1,1,0,0,0,.79,1.17.62.62,0,0,0,.19,0,1,1,0,0,0,1-.8L22.93,24H30a1,1,0,0,0,0-2H23.33l1.61-8H32a1,1,0,0,0,0-2ZM21.29,22H13.1l1.61-8H22.9Z" class="clr-i-outline clr-i-outline-path-1"/>\n\n  <path d="M31.87,10H26.32l1-4.83A1,1,0,0,0,26.35,4h-2a1,1,0,0,0-1,.78L22.33,10h-5.4l1-4.83A1,1,0,0,0,17,4H15a1,1,0,0,0-1,.78L13,10H7a1,1,0,0,0-1,.8l-.41,2a1,1,0,0,0,1,1.2h5.55L10.5,22h-6a1,1,0,0,0-1,.8l-.41,2a1,1,0,0,0,1,1.2H9.68l-1,4.83a1,1,0,0,0,1,1.17h2a1,1,0,0,0,.95-.78L13.67,26h5.4l-1,4.83A1,1,0,0,0,19,32h2a1,1,0,0,0,1-.78L23.05,26h6a1,1,0,0,0,1-.8l.4-2a1,1,0,0,0-1-1.2H23.87l1.63-8h6a1,1,0,0,0,1-.8l.41-2A1,1,0,0,0,31.87,10Zm-12,12h-5.4l1.64-8h5.4Z" class="clr-i-solid clr-i-solid-path-1"/>\n  '),a.SocialShapes={crown:a.ClrShapeCrown,share:a.ClrShapeShare,star:a.ClrShapeStar,"half-star":a.ClrShapeHalfStar,bookmark:a.ClrShapeBookmark,envelope:a.ClrShapeEnvelope,calendar:e.ClrShapeCalendar,event:e.ClrShapeEvent,tasks:a.ClrShapeTasks,flag:a.ClrShapeFlag,inbox:a.ClrShapeInbox,hashtag:a.ClrShapeHashtag,heart:a.ClrShapeHeart,"heart-broken":a.ClrShapeHeartBroken,"talk-bubbles":a.ClrShapeTalkBubbles,"chat-bubble":a.ClrShapeChatBubble,picture:a.ClrShapePicture,"happy-face":a.ClrShapeHappyFace,"neutral-face":a.ClrShapeNeutralFace,"sad-face":a.ClrShapeSadFace,"thumbs-up":a.ClrShapeThumbsUp,"thumbs-down":a.ClrShapeThumbsDown},Object.defineProperty(a.SocialShapes,"favorite",t.descriptorConfig(a.SocialShapes.star)),Object.defineProperty(a.SocialShapes,"email",t.descriptorConfig(a.SocialShapes.envelope)),Object.defineProperty(a.SocialShapes,"date",t.descriptorConfig(a.SocialShapes.calendar)),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.SocialShapes)},"./src/shapes/technology-shapes.ts":
/*!*****************************************!*\
  !*** ./src/shapes/technology-shapes.ts ***!
  \*****************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TechnologyShapes=a.ClrShapeFileShare2=a.ClrShapeCiCd=a.ClrShapeAnimation=a.ClrShapeTapeDrive=a.ClrShapeMediaChanger=a.ClrControlLun=a.ClrShapePod=a.ClrShapeNode=a.ClrShapeNamespace=a.ClrShapeNodes=a.ClrShapeNodeGroup=a.ClrShapeStorageAdapter=a.ClrShapeHostGroup=a.ClrShapeSquid=a.ClrShapeCapacitor=a.ClrShapeResistor=a.ClrShapeInductor=a.ClrShapeRadar=a.ClrShapeUsb=a.ClrShapeQrCode=a.ClrShapeFileShare=a.ClrShapeContainerVolume=a.ClrShapeContainer=a.ClrShapeCdDvd=a.ClrShapeBarCode=a.ClrShapeAtom=a.ClrShapeAssignUser=a.ClrShapeProcessOnVM=a.ClrShapeBluetoothOff=a.ClrShapeBluetooth=a.ClrShapeSSD=a.ClrShapeNVMe=a.ClrShapeHardDriveDisks=a.ClrShapeHardDrive=a.ClrShapeAdministrator=a.ClrShapeFlask=a.ClrShapeHelix=a.ClrShapeDeploy=a.ClrShapeCloudTraffic=a.ClrShapeCloudScale=a.ClrShapeCloudNetwork=a.ClrShapeUnlink=a.ClrShapeLink=a.ClrShapeDisconnect=a.ClrShapeConnect=a.ClrShapeUnarchive=a.ClrShapeArchive=a.ClrShapeCertificate=a.ClrShapeVMWApp=a.ClrShapeVM=a.ClrShapeRouter=a.ClrShapeNetworkSwitch=a.ClrShapeNetworkSettings=a.ClrShapeNetworkGlobe=a.ClrShapeTablet=a.ClrShapeMobile=a.ClrShapeBattery=a.ClrShapeApplication=a.ClrShapeCode=a.ClrShapeTerminal=a.ClrShapeDisplay=a.ClrShapeComputer=a.ClrShapeFloppy=a.ClrShapePlugin=a.ClrShapeDownloadCloud=a.ClrShapeUploadCloud=a.ClrShapeExport=a.ClrShapeImport=a.ClrShapeShieldX=a.ClrShapeShield=a.ClrShapeShieldCheck=a.ClrShapeResourcePool=a.ClrShapeDataCluster=a.ClrShapeMemory=a.ClrShapeCPU=a.ClrShapeBuilding=a.ClrShapeApplications=a.ClrShapeCluster=a.ClrShapeStorage=a.ClrShapeHost=a.ClrShapeDashboard=a.ClrShapeMouse=a.ClrShapeKeyboard=a.ClrShapeDevices=a.ClrShapeBackup=a.ClrShapeBackupRestore=a.ClrShapeHardDisk=a.ClrShapeRackServer=a.ClrShapeWifi=a.ClrShapeBundle=a.ClrShapeBlocksGroup=a.ClrShapeBlock=a.ClrShapeLayers=a.ClrShapeUninstall=a.ClrShapeInstall=a.ClrShapeNoWifi=a.ClrShapePhoneHandset=a.ClrShapeRulerPencil=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeRulerPencil=c.clrIconSVG('<polygon class="clr-i-outline clr-i-outline-path-1" points="9 17.41 9 27 18.59 27 16.59 25 11 25 11 19.41 9 17.41"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M34.87,32.29,32,29.38V32H4V27.85H6v-1.6H4V19.6H6V18H4V11.6H6V10H4V4.41L19.94,20.26V17.44L3.71,1.29A1,1,0,0,0,2,2V33a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M24,30h4a2,2,0,0,0,2-2V8.7L27.7,4.47a2,2,0,0,0-1.76-1h0a2,2,0,0,0-1.76,1.08L22,8.72V28A2,2,0,0,0,24,30ZM24,9.2l1.94-3.77L28,9.21V24H24Zm0,16.43h4v2.44H24Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M34.87,32.21,30,27.37V8.75L27.7,4.52a2,2,0,0,0-3.54,0L22,8.76V19.41L3.71,1.21A1,1,0,0,0,2,1.92V10H4.17v1.6H2V18H4.17v1.6H2v6.65H4.17v1.6H2v5.07a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71ZM10,26V16.94L19.07,26Zm18,2.11H24V25.68h4Zm0-4H24V9.25l1.94-3.77L28,9.26Z"/>\n'),a.ClrShapePhoneHandset=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M27.73,35.44a4.72,4.72,0,0,1-1-.11,33.91,33.91,0,0,1-16.62-8.75,32.71,32.71,0,0,1-9-16.25A4.58,4.58,0,0,1,2.46,6.05l4-3.85A2,2,0,0,1,8,1.66a2,2,0,0,1,1.45.87l5,7.39a1.6,1.6,0,0,1-.11,1.9l-2.51,3a18.94,18.94,0,0,0,4.17,5.89h0a19.26,19.26,0,0,0,6.07,4.09l3.11-2.47a1.64,1.64,0,0,1,1.86-.12l7.55,4.88A2,2,0,0,1,35,30.2l-3.9,3.86A4.74,4.74,0,0,1,27.73,35.44ZM7.84,3.64l-4,3.85a2.54,2.54,0,0,0-.75,2.4,30.7,30.7,0,0,0,8.41,15.26,31.9,31.9,0,0,0,15.64,8.23,2.75,2.75,0,0,0,2.5-.74l3.9-3.86-7.29-4.71-3.34,2.66a1,1,0,0,1-.92.17,20.06,20.06,0,0,1-7.36-4.75h0a19.49,19.49,0,0,1-4.87-7.2A1,1,0,0,1,10,14l2.7-3.23Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M15.22,20.64a20.37,20.37,0,0,0,7.4,4.79l3.77-3a.67.67,0,0,1,.76,0l7,4.51a2,2,0,0,1,.33,3.18l-3.28,3.24a4,4,0,0,1-3.63,1.07,35.09,35.09,0,0,1-17.15-9A33.79,33.79,0,0,1,1.15,8.6a3.78,3.78,0,0,1,1.1-3.55l3.4-3.28a2,2,0,0,1,3.12.32L13.43,9a.63.63,0,0,1,0,.75l-3.07,3.69A19.75,19.75,0,0,0,15.22,20.64Z"/>\n'),a.ClrShapeNoWifi=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,24.42a4,4,0,1,0,4,4A4,4,0,0,0,18,24.42Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,30.42Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M26.21,21.85a1,1,0,0,0-.23-1.4,13.56,13.56,0,0,0-5-2.23l3.87,3.87A1,1,0,0,0,26.21,21.85Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18.05,10.72a20.88,20.88,0,0,0-4.16.43l1.74,1.74a19,19,0,0,1,2.42-.17A18.76,18.76,0,0,1,28.64,16a1,1,0,0,0,1.12-1.65A20.75,20.75,0,0,0,18.05,10.72Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M33.55,8.2A28.11,28.11,0,0,0,8.11,5.36L9.69,6.93A26,26,0,0,1,32.45,9.87a1,1,0,0,0,1.1-1.67Z"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M1.84,4.75,4.27,7.18c-.62.34-1.23.7-1.83,1.1A1,1,0,1,0,3.56,9.94C4.26,9.47,5,9,5.74,8.65l3.87,3.87A20.59,20.59,0,0,0,6.23,14.4,1,1,0,0,0,7.36,16a18.82,18.82,0,0,1,3.77-2l4.16,4.16A13.51,13.51,0,0,0,10,20.55a1,1,0,0,0,1.18,1.61A11.52,11.52,0,0,1,17,20l10.8,10.8,1.41-1.41-26-26Z"/>\n            <circle class="clr-i-solid clr-i-solid-path-1" cx="18" cy="29.54" r="3"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M29.18,17.71l.11-.17a1.51,1.51,0,0,0-.47-2.1A20.57,20.57,0,0,0,18,12.37c-.56,0-1.11,0-1.65.07l3.21,3.21a17.41,17.41,0,0,1,7.6,2.52A1.49,1.49,0,0,0,29.18,17.71Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M32.76,9.38A27.9,27.9,0,0,0,10.18,6.27L12.81,8.9A24.68,24.68,0,0,1,31.1,12.12a1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,32.76,9.38Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M3,4.75l3.1,3.1A27.28,27.28,0,0,0,3.18,9.42a1.51,1.51,0,0,0-.48,2.11l.11.17a1.49,1.49,0,0,0,2,.46,24.69,24.69,0,0,1,3.67-1.9l3.14,3.14a20.63,20.63,0,0,0-4.53,2.09,1.51,1.51,0,0,0-.46,2.1l.11.17a1.49,1.49,0,0,0,2,.46A17.46,17.46,0,0,1,14.25,16l3.6,3.6a13.39,13.39,0,0,0-6.79,1.93,1.5,1.5,0,0,0-.46,2.09l.1.16a1.52,1.52,0,0,0,2.06.44,10.2,10.2,0,0,1,9-.7L29,30.75l1.41-1.41-26-26Z"/>\n'),a.ClrShapeInstall=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30.92,8H26.55a1,1,0,0,0,0,2H31V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V10A2,2,0,0,0,30.92,8Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M10.3,18.87l7,6.89a1,1,0,0,0,1.4,0l7-6.89a1,1,0,0,0-1.4-1.43L19,22.65V4a1,1,0,0,0-2,0V22.65l-5.3-5.21a1,1,0,0,0-1.4,1.43Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M10.3,18.87l7,6.89a1,1,0,0,0,1.4,0l7-6.89a1,1,0,0,0-1.4-1.43L19,22.65V4a1,1,0,0,0-2,0V22.65l-5.3-5.21a1,1,0,0,0-1.4,1.43Z"/><path d="M31,13.43V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V12.87A7.45,7.45,0,0,1,31,13.43Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M10.3,18.87l7,6.89a1,1,0,0,0,1.4,0l7-6.89a1,1,0,0,0-1.4-1.43L19,22.65V4a1,1,0,0,0-2,0V22.65l-5.3-5.21a1,1,0,0,0-1.4,1.43Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M31,15.4V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V15.4Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n'),a.ClrShapeUninstall=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,5.28-5.21a1,1,0,0,0-1.41-1.42L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M30.92,8H26.55a1,1,0,0,0,0,2H31V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V10A2,2,0,0,0,30.92,8Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,5.28-5.21a1,1,0,0,0-1.41-1.42L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M31,13.43V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V12.87A7.45,7.45,0,0,1,31,13.43Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,4.75-4.69H22.23a3.65,3.65,0,0,1-.81-.1L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M31,15.4V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V15.4Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n'),a.ClrShapeLayers=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,20.25a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,0-1.81l15-7.09a1,1,0,0,1,.85,0l15,7.09a1,1,0,0,1,0,1.81l-15,7.09A1,1,0,0,1,18,20.25ZM5.34,12.16l12.66,6,12.66-6L18,6.18Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18,26.16a1,1,0,0,1-.43-.1L2.57,19a1,1,0,1,1,.85-1.81L18,24.06l14.57-6.89A1,1,0,1,1,33.43,19l-15,7.09A1,1,0,0,1,18,26.16Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18,32.07a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,.85-1.81L18,30l14.57-6.89a1,1,0,1,1,.85,1.81L18.43,32A1,1,0,0,1,18,32.07Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,20.25a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,0-1.81l15-7.09a1,1,0,0,1,.85,0l15,7.09a1,1,0,0,1,0,1.81l-15,7.09A1,1,0,0,1,18,20.25Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M18,26.16a1,1,0,0,1-.43-.1L2.57,19a1,1,0,1,1,.85-1.81L18,24.06l14.57-6.89A1,1,0,1,1,33.43,19l-15,7.09A1,1,0,0,1,18,26.16Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M18,32.07a1,1,0,0,1-.43-.1l-15-7.09a1,1,0,0,1,.85-1.81L18,30l14.57-6.89a1,1,0,1,1,.85,1.81L18.43,32A1,1,0,0,1,18,32.07Z"/>\n'),a.ClrShapeBlock=c.clrIconSVG('<path d="M31.42,9.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V10A1,1,0,0,0,31.42,9.09ZM18,5.1,28.61,10,18,14.9,7.39,10ZM6,11.56l11,5.08v14.8L6,26.36ZM19,31.44V16.64l11-5.08v14.8Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30,15.53V26.36L19,31.44V16.64l2.57-1.19a3.67,3.67,0,0,1-2.11-1.22L18,14.9,7.39,10,18,5.1l3.08,1.42,1-1.74L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V15.53ZM17,31.44,6,26.36V11.56l11,5.08Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M26.87,1.26l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.92H33.7a1.28,1.28,0,0,0,1.1-1.92L29.08,1.26A1.28,1.28,0,0,0,26.87,1.26Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5V26.36L19,31.44V16.64l8.08-3.73a7.57,7.57,0,0,1-2-1.27L18,14.9,7.39,10,18,5.1l4.61,2.13A7.12,7.12,0,0,1,22.5,6a8,8,0,0,1,.07-1L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V13.22A7.37,7.37,0,0,1,30,13.5ZM17,31.44,6,26.36V11.56l11,5.08Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" />\n            \n            <path d="M31.42,9.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V10A1,1,0,0,0,31.42,9.09ZM18,14.9,7.39,10,18,5.1,28.61,10ZM30,26.36,19,31.44V16.64l11-5.08Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,15.38v11L19,31.44V16.64l2.79-1.29a3.68,3.68,0,0,1-2.25-1.16L18,14.9,7.39,10,18,5.1l3,1.39,1-1.75L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.12,21.13,11a1.27,1.27,0,0,0,1.1,1.91H33.68A1.27,1.27,0,0,0,34.78,11L29.06,1.12A1.28,1.28,0,0,0,26.85,1.12Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5V26.36L19,31.44V16.64l8.08-3.73a7.57,7.57,0,0,1-2-1.27L18,14.9,7.39,10,18,5.1l4.61,2.13A7.12,7.12,0,0,1,22.5,6a8,8,0,0,1,.07-1L18.42,3.09a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V13.22A7.37,7.37,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeBlocksGroup=c.clrIconSVG('<path d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76Zm-2.81.91L25.61,22,20.5,19.67l5.11-2.35ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8ZM11.6,15.57h0V8l6.08,2.8a1,1,0,0,0,.84,0L24.6,8v7.58h0l-6.5,3ZM32.11,28.81l-6.5,3-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8Z" class="clr-i-outline clr-i-outline-path-1" />\n<path d="M33.53,18.76,26.6,15.57h-2v0l-6.5,3-6.5-3V8l6.08,2.8a1,1,0,0,0,.84,0l.24-.11a4.17,4.17,0,0,1,.29-.65l1.33-2.31-2.28,1L13,6.43l5.1-2.35,3.47,1.6,1-1.73L18.5,2.08a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14l-6.9,3.18a1,1,0,0,0-.58.91v9.78a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91V19.67A1,1,0,0,0,33.53,18.76ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm0,14.49-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8,0,7.6Zm15-14.48,5.11,2.35L25.61,22,20.5,19.67Zm0,14.49-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8,0,7.61Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n<path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n<path d="M33.53,18.76,26.6,15.57V12.7a7.58,7.58,0,0,1-2-1.51v4.39l-6.5,3-6.5-3V8l6.08,2.8a1,1,0,0,0,.84,0L23,8.72a7.05,7.05,0,0,1-.47-2l-4.47,2L13,6.43l5.1-2.35,4.44,2s0-.06,0-.09a7.55,7.55,0,0,1,.27-2l-4.3-2a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14l-6.9,3.18a1,1,0,0,0-.58.91v9.78a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91V19.67A1,1,0,0,0,33.53,18.76ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm0,14.49-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8,0,7.6Zm15-14.48,5.11,2.35L25.61,22,20.5,19.67Zm0,14.49-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8,0,7.61Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n<circle cx="30.03" cy="6.03" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge" />\n<path d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76ZM25.61,22,20.5,19.67l5.11-2.35,5.11,2.35Zm-1-6.44-6.44,3V10.87a1,1,0,0,0,.35-.08L24.6,8v7.58ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3h0V24.11h0A1,1,0,0,0,11,24l6.08-2.8Zm15,0-6.46,3V24.11A1,1,0,0,0,26,24l6.08-2.8Z" class="clr-i-solid clr-i-solid-path-1" />\n<path d="M33.53,18.76,26.6,15.57v0h-2v0l-6.43,3V10.87a1.05,1.05,0,0,0,.35-.08l.14-.06A3.23,3.23,0,0,1,19,10l1.28-2.22-2.14,1L13,6.43l5.1-2.35,3.39,1.56,1-1.73-4-1.83a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14l-6.9,3.18a1,1,0,0,0-.58.91v9.78a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91V19.67A1,1,0,0,0,33.53,18.76Zm-28,.91,5.11-2.36,5.11,2.35L10.6,22ZM10.6,31.8V24.11A1.08,1.08,0,0,0,11,24l6.08-2.8,0,7.6Zm9.9-12.13,5.11-2.35,5.11,2.35L25.61,22ZM25.64,31.8V24.11A.89.89,0,0,0,26,24l6.08-2.8,0,7.6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n<path d="M26.89,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.27,13H33.72a1.27,1.27,0,0,0,1.1-1.91L29.1,1.14A1.28,1.28,0,0,0,26.89,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n<path d="M33.53,18.76,26.6,15.57V12.69a7.66,7.66,0,0,1-2-1.47v4.34l-6.43,3V10.87a1.05,1.05,0,0,0,.35-.08L23,8.73a7.65,7.65,0,0,1-.48-2l-4.42,2L13,6.43l5.1-2.35,4.38,2V6a7.55,7.55,0,0,1,.27-2L18.5,2.08a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14l-6.9,3.18a1,1,0,0,0-.58.91v9.78a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91V19.67A1,1,0,0,0,33.53,18.76Zm-28,.91,5.11-2.36,5.11,2.35L10.6,22ZM10.6,31.8V24.11A1.08,1.08,0,0,0,11,24l6.08-2.8,0,7.6Zm9.9-12.13,5.11-2.35,5.11,2.35L25.61,22ZM25.64,31.8V24.11A.89.89,0,0,0,26,24l6.08-2.8,0,7.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n<circle cx="29.98" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />'),a.ClrShapeBundle=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91ZM5,12.13,16,17.4V31.46L5,26.2ZM18,31.45V17.36l13-6.29v14.1Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91Zm1,15.8V17.36l13-6.29v14.1Z"/>\n'),a.ClrShapeWifi=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33.55,8.2a28.1,28.1,0,0,0-31.11.08A1,1,0,1,0,3.56,9.94a26.11,26.11,0,0,1,28.89-.07,1,1,0,0,0,1.1-1.67Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18.05,10.72A20.74,20.74,0,0,0,6.23,14.4,1,1,0,0,0,7.36,16,18.85,18.85,0,0,1,28.64,16a1,1,0,0,0,1.12-1.65A20.75,20.75,0,0,0,18.05,10.72Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18.05,17.9a13.51,13.51,0,0,0-8,2.64,1,1,0,0,0,1.18,1.61,11.56,11.56,0,0,1,13.62-.08A1,1,0,1,0,26,20.46,13.52,13.52,0,0,0,18.05,17.9Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M18,24.42a4,4,0,1,0,4,4A4,4,0,0,0,18,24.42Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,30.42Z"/>\n            <circle class="clr-i-solid clr-i-solid-path-1" cx="18" cy="29.54" r="3"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M32.76,9.38a27.87,27.87,0,0,0-29.57,0,1.51,1.51,0,0,0-.48,2.11l.11.17a1.49,1.49,0,0,0,2,.46,24.68,24.68,0,0,1,26.26,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,32.76,9.38Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M28.82,15.44a20.59,20.59,0,0,0-21.7,0,1.51,1.51,0,0,0-.46,2.1l.11.17a1.49,1.49,0,0,0,2,.46,17.4,17.4,0,0,1,18.36,0,1.49,1.49,0,0,0,2-.46l.11-.17A1.51,1.51,0,0,0,28.82,15.44Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M24.88,21.49a13.41,13.41,0,0,0-13.82,0,1.5,1.5,0,0,0-.46,2.09l.1.16a1.52,1.52,0,0,0,2.06.44,10.27,10.27,0,0,1,10.42,0,1.52,1.52,0,0,0,2.06-.45l.1-.16A1.49,1.49,0,0,0,24.88,21.49Z"/>\n'),a.ClrShapeRackServer=c.clrIconSVG('<rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="10" y="17" width="14" height="2"/>\n            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="6" y="25" width="2" height="2"/>\n            <rect class="clr-i-outline--alerted clr-i-outline-path-3--alerted" x="10" y="25" width="14" height="2"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M18.64,11A3.65,3.65,0,0,1,19,9.89L19.56,9H10v2Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M33.68,15.4H32V21H4V15H20.58A3.67,3.67,0,0,1,19,13.56a3.63,3.63,0,0,1-.26-.56H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM4,29V23H32v6Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="9" width="2" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="6" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-3--badged" x="10" y="17" width="14" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-4--badged" x="6" y="25" width="2" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-5--badged" x="10" y="25" width="14" height="2"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-6--badged" d="M10,11H24v-.51A7.48,7.48,0,0,1,23.13,9H10Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-7--badged" d="M30,13.5a7.47,7.47,0,0,1-2.68-.5H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM4,15H32v6H4ZM4,29V23H32v6Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="9" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="10" y="9" width="14" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-3" x="6" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-4" x="10" y="17" width="14" height="2"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32v6H4Zm0,8H32v6H4ZM4,29V23H32v6Z"/>\n            <rect class="clr-i-outline clr-i-outline-path-6" x="6" y="25" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-7" x="10" y="25" width="14" height="2"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M19,9.89,19.56,9H10V7H20.71l1.73-3H4A2,2,0,0,0,2,6v6H18.57A3.67,3.67,0,0,1,19,9.89ZM8,9H6V7H8Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19.35,14H2v8H34V15.38ZM8,19H6V17H8Zm16,0H10V17H24Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,14v8H34V14Zm6,5H6V17H8Zm16,0H10V17H24Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M23.13,9H10V7H22.57a7.52,7.52,0,0,1-.07-1,7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6v6H25.51A7.52,7.52,0,0,1,23.13,9ZM8,9H6V7H8Z"/>\n            <circle class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M2,22H34V14H2Zm8-5H24v2H10ZM6,17H8v2H6Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M32,4H4A2,2,0,0,0,2,6v6H34V6A2,2,0,0,0,32,4ZM8,9H6V7H8ZM24,9H10V7H24Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>\n'),a.ClrShapeHardDisk=c.clrIconSVG('<rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="20" width="24" height="2"/>\n            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="24" width="4" height="2"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M34,21.08l-1.4-5.68H30.51l1.49,6V29H4V21.44L7.06,9h12.5l1.15-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="20" width="24" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="24" width="4" height="2"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M34,21.08,32,13.21a7.49,7.49,0,0,1-2,.29l2,7.94V29H4V21.44L7.06,9H23.13a7.45,7.45,0,0,1-.55-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-outline clr-i-outline-path-1" d="M34,21.08,30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08ZM4,29V21.44L7.06,9H28.93L32,21.44V29Z"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="6" y="20" width="24" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-3" x="26" y="24" width="4" height="2"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M32.58,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32,13.21A7.47,7.47,0,0,1,22.57,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>\n            <circle class="clr-i-solid--badged clr-i-solid-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>\n'),a.ClrShapeBackupRestore=c.clrIconSVG('<rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="22" width="24" height="2"/>\n            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l1.47,1.46,1-1.79L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M31.58,15.4H29.46c1,2.85,2.31,6.37,2.54,7.08V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.12,34,22,31.58,15.4Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="22" width="24" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l4,3.95a1,1,0,0,0,.71.29l.11,0a7.46,7.46,0,0,1-1.25-3.52L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05A7.46,7.46,0,0,1,25.51,12H21v2h7.95C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.87,13.45Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="22" width="24" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M13,9.92,17,6V19a1,1,0,1,0,2,0V6l4,3.95A1,1,0,1,0,24.38,8.5L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H21v2h7.95C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H15V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.84,13.37Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l1.47,1.46,1-1.79L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M31.58,15.4H22.23A3.62,3.62,0,0,1,21,15.16V18a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.79,21.49,33.28,20.07,31.58,15.4Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l4,3.95a1,1,0,0,0,.71.29l.11,0a7.46,7.46,0,0,1-1.25-3.52L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05A7.46,7.46,0,0,1,25.51,12H21v6a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.77,21.43,33.15,19.7,30.87,13.45Z"/>\n            <circle class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,5H26V27h4Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H21v6a3,3,0,1,1-6,0V12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H33.93C33.77,21.43,33.14,19.69,30.84,13.37Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M13,9.92,17,6V18a1,1,0,1,0,2,0V6l4,3.95A1,1,0,1,0,24.38,8.5L18,2.16,11.61,8.5A1,1,0,0,0,13,9.92Z"/>\n'),a.ClrShapeBackup=c.clrIconSVG('<rect class="clr-i-outline--alerted clr-i-outline-path-1--alerted" x="6" y="22" width="24" height="2"/>\n            <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted" d="M18,19.84l4.47-4.44h-.23a3.67,3.67,0,0,1-2-.61L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M31.58,15.4H29.46c1,2.85,2.31,6.37,2.54,7.08V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.12,34,22,31.58,15.4Z"/>\n            <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-1--badged" x="6" y="22" width="24" height="2"/>\n            <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M30.87,13.45a7.55,7.55,0,0,1-.87.05,7.46,7.46,0,0,1-3.35-.8,3,3,0,0,1-.24,1.3h2.54C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.87,13.45Z"/>\n            <circle class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <rect class="clr-i-outline clr-i-outline-path-1" x="6" y="22" width="24" height="2"/><rect x="26" y="26" width="4" height="2"/>\n            <path class="clr-i-outline clr-i-outline-path-2"\n                d="M30.84,13.37A1.94,1.94,0,0,0,28.93,12H26.55a3,3,0,0,1-.14,2h2.54C30,16.94,31.72,21.65,32,22.48V30H4V22.48C4.28,21.65,7.05,14,7.05,14H9.58a3,3,0,0,1-.14-2H7.07a1.92,1.92,0,0,0-1.9,1.32C2,22,2,22.1,2,22.33V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22.33C34,22.1,34,22,30.84,13.37Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted" d="M18.66,22H33.93c-.15-.51-.65-1.93-2.35-6.6H25.3l-5.89,5.86Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-4--alerted" d="M18,19.84l4.47-4.44h-.23a3.64,3.64,0,0,1-2-.61L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-2--badged" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-3--badged" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>\n            <path class="clr-i-solid--badged clr-i-solid-path-4--badged" d="M18.66,22H33.93c-.17-.57-.79-2.3-3.06-8.55a7.55,7.55,0,0,1-.87.05,7.46,7.46,0,0,1-3.35-.8,3,3,0,0,1-.86,2.21l-6.38,6.35Z"/>\n            <circle class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge" cx="30" cy="6" r="5"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,19.84l6.38-6.35A1,1,0,1,0,23,12.08L19,16V4a1,1,0,1,0-2,0V16l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M19.41,21.26l-.74.74H33.93c-.17-.57-.79-2.31-3.09-8.63A1.94,1.94,0,0,0,28.93,12H26.55a3,3,0,0,1-.76,2.92Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M16.58,21.26,10.2,14.91A3,3,0,0,1,9.44,12H7.07a1.92,1.92,0,0,0-1.9,1.32C2.86,19.68,2.24,21.43,2.07,22H17.33Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M2,24v6a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24Zm28,4H26V26h4Z"/>\n'),a.ClrShapeDevices=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V26H24V15ZM24,30V27.6h8V30Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M20,22H4V6H28v5h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2H20Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M20,26H9a1,1,0,0,0,0,2H20Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V28H24V15Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M28,4H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2h8v2H9.32A1.2,1.2,0,0,0,8,27a1.2,1.2,0,0,0,1.32,1H19.92v-.37H20V22H4V6H28v5h2V6A2,2,0,0,0,28,4Z"/>\n'),a.ClrShapeKeyboard=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,18H4V10H32Z"/>\n            <rect class="clr-i-outline clr-i-outline-path-2" x="7" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-3" x="11" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-4" x="15" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-5" x="19" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-6" x="23" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-7" x="27" y="13" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-8" x="7" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-9" x="11" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-10" x="15" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-11" x="19" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-12" x="23" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-13" x="27" y="17" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-14" x="27" y="22" width="1.94" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-15" x="7" y="22" width="2" height="2"/>\n            <rect class="clr-i-outline clr-i-outline-path-16" x="11.13" y="22" width="13.75" height="2"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM19,13h2v2H19Zm0,4h2v2H19Zm-4-4h2v2H15Zm0,4h2v2H15Zm-4-4h2v2H11ZM9,24H7V22H9Zm0-5H7V17H9Zm0-4H7V13H9Zm2,2h2v2H11Zm13.88,7H11.13V22H24.88ZM25,19H23V17h2Zm0-4H23V13h2Zm3.94,9H27V22h1.94ZM29,19H27V17h2Zm0-4H27V13h2Z"/>\n'),a.ClrShapeMouse=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,34A10,10,0,0,1,8,24V12a10,10,0,0,1,20,0V24A10,10,0,0,1,18,34ZM18,4a8,8,0,0,0-8,8V24a8,8,0,0,0,16,0V12A8,8,0,0,0,18,4Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M18,15a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0v4A1,1,0,0,1,18,15Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A10,10,0,0,0,8,12V24a10,10,0,0,0,20,0V12A10,10,0,0,0,18,2Zm1.3,11.44a1.3,1.3,0,0,1-2.6,0V10a1.3,1.3,0,0,1,2.6,0Z"/>\n'),a.ClrShapeDashboard=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M25.18,12.32l-5.91,5.81a3,3,0,1,0,1.41,1.42l5.92-5.81Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm11.34,25.5H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3a14.47,14.47,0,0,1,13.4,13.61H28.92v2h3.53A14.43,14.43,0,0,1,29.34,29.75Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M15.85,18.69a3,3,0,1,0,4.83.85l5.92-5.81-1.41-1.41-5.91,5.81A3,3,0,0,0,15.85,18.69Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.58,13a7.45,7.45,0,0,1-2.06.44,14.4,14.4,0,0,1,1.93,6.43H28.92v2h3.53a14.43,14.43,0,0,1-3.11,7.84H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3A14.41,14.41,0,0,1,22.58,7a7.52,7.52,0,0,1-.08-1,7.52,7.52,0,0,1,.09-1.09A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm8.6,9.48-5.92,5.81a3,3,0,1,1-1.41-1.42l5.91-5.81Zm-23,6.17H7v2H3.56c0-.39-.05-.77-.05-1.17S3.53,20.18,3.55,19.9Zm4.88-10,2.46,2.46L9.47,13.74,7,11.29A14.57,14.57,0,0,1,8.43,9.87ZM19,9.79H17V6.29c.32,0,.63,0,1,0s.7,0,1,.05ZM32.49,20.74c0,.39,0,.79-.05,1.17H28.92v-2h3.53C32.47,20.18,32.49,20.46,32.49,20.74Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M32.58,13a7.46,7.46,0,0,1-10-8.12A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35a16.45,16.45,0,0,0,2-18.36ZM17,6.29c.32,0,.63,0,1,0s.7,0,1,.05v3.5H17ZM7,21.91H3.56c0-.39-.05-.77-.05-1.17s0-.56,0-.83H7Zm2.51-8.16L7,11.29A14.57,14.57,0,0,1,8.43,9.87l2.46,2.46Zm10.62,9.19a3,3,0,1,1-.82-4.81l5.91-5.81,1.41,1.41-5.92,5.81A3,3,0,0,1,20.09,22.93Zm12.35-1H28.92v-2h3.53c0,.28,0,.55,0,.83S32.47,21.52,32.44,21.91Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="6" r="5"/>\n'),a.ClrShapeHost=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,24.3a2.48,2.48,0,1,0,2.48,2.47A2.48,2.48,0,0,0,18,24.3Zm0,3.6a1.13,1.13,0,1,1,1.13-1.12A1.13,1.13,0,0,1,18,27.9Z"/><rect x="13.5" y="20.7" width="9" height="1.44"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M25.65,3.6H10.35A1.35,1.35,0,0,0,9,4.95V32.4H27V4.95A1.35,1.35,0,0,0,25.65,3.6Zm-.45,27H10.8V5.4H25.2Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-3" x="12.6" y="7.2" width="10.8" height="1.44"/>\n                <rect class="clr-i-outline clr-i-outline-path-4" x="12.6" y="10.8" width="10.8" height="1.44"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/>\n                <rect class="clr-i-outline--alerted clr-i-outline-path-2--alerted" x="13" y="21" width="10" height="1.6"/>\n                <polygon class="clr-i-outline--alerted clr-i-outline-path-3--alerted" points="21.3,6 12,6 12,7.6 20.4,7.6"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-4--alerted" d="M12,11.6h6.6c0-0.6,0.2-1.1,0.4-1.6h-7V11.6z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-5--alerted" d="M26,15.4V32H10V4h12.5l1.1-2H9.5C8.7,2,8,2.7,8,3.5V34h20V15.4H26z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert" d="M26.9,1.1L21.1,11c-0.4,0.6-0.2,1.4,0.3,1.8c0.2,0.2,0.5,0.2,0.8,0.2h11.5c0.7,0,1.3-0.5,1.3-1.2c0-0.3-0.1-0.5-0.2-0.8l-5.7-9.9c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.8,27,1,26.9,1.1z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/>\n                <rect class="clr-i-outline--badged clr-i-outline-path-2--badged" x="13" y="21" width="10" height="1.6"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-3--badged" d="M24,10.5c-0.1-0.2-0.2-0.3-0.3-0.5H12v1.6h12V10.5z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-4--badged" d="M12,6v1.6h10.7c-0.1-0.5-0.2-1.1-0.2-1.6H12z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-5--badged" d="M26,12.3V32H10V4h12.8c0.2-0.7,0.5-1.4,0.9-2H9.5C8.7,2,8,2.7,8,3.5V34h20V13.2C27.3,13,26.6,12.7,26,12.3z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M26.5,2h-17C8.7,2,8,2.7,8,3.5V34h20V3.5C28,2.7,27.3,2,26.5,2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z M24,11.6H12V10h12V11.6z M24,7.6H12V6h12V7.6z"/>\n                <circle class="clr-i-solid clr-i-solid-path-2" cx="18" cy="27.8" r="1.2"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M22.2,15.3c-2,0-3.7-1.6-3.7-3.7H12V10h6.9c0-0.1,0.1-0.2,0.1-0.2l1.2-2.2H12V6h9.2l2.3-4h-14C8.7,2,8,2.7,8,3.5V34h20V15.3H22.2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z"/>\n                <circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted" cx="18" cy="27.8" r="1.2"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert" d="M26.9,1l-5.7,9.9c-0.3,0.6-0.1,1.4,0.5,1.7c0.2,0.1,0.4,0.2,0.6,0.2h11.4c0.7,0,1.3-0.6,1.3-1.3c0-0.2-0.1-0.4-0.2-0.6L29.1,1c-0.4-0.6-1.1-0.8-1.8-0.5C27.1,0.7,27,0.8,26.9,1z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M24,10.3v1.2H12V10h11.8c-0.5-0.7-0.8-1.5-1-2.4H12V6h10.5c0,0,0-0.1,0-0.1c0-1.4,0.4-2.7,1.1-3.9H9.5C8.7,2,8,2.7,8,3.5V34h20V13.1C26.4,12.6,25,11.7,24,10.3z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5zM23,22.6H13V21h10V22.6z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged" cx="18" cy="27.8" r="1.2"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="5.9" r="5"/>\n'),a.ClrShapeStorage=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33,6.69h0c-.18-3.41-9.47-4.33-15-4.33S3,3.29,3,6.78V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V6.78s0,0,0,0S33,6.7,33,6.69Zm-2,7.56c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.32,43.32,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.32,43.32,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c7.77,0,12.46,1.53,13,2.37-.52.87-5.21,2.39-13,2.39A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27c4,0,9.93-.48,13-2Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-1--alerted" d="M19.51,9.09,18,9.11A37.6,37.6,0,0,1,7,7.76V9.85a43.53,43.53,0,0,0,11,1.27h.61A3.66,3.66,0,0,1,19,9.89Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-2--alerted" d="M28.83,15.4A38.37,38.37,0,0,1,18,16.7,37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.5,0,2.89.06,4.15.16l1.1-1.9c-1.86-.18-3.7-.26-5.25-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43v-14Z"/>\n                <path class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M7,7.76V9.85a43.53,43.53,0,0,0,11,1.27,54.82,54.82,0,0,0,6.2-.36,7.5,7.5,0,0,1-1.13-1.88c-1.5.15-3.2.24-5.07.24A37.6,37.6,0,0,1,7,7.76Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M31,13.43v.82c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,15.34v2.08A43.33,43.33,0,0,0,18,18.7c4,0,9.93-.48,13-2v5.17c-.33.86-5.06,2.45-13,2.45A37.45,37.45,0,0,1,7,22.92V25a43.33,43.33,0,0,0,11,1.28c4,0,9.93-.48,13-2v5.1c-.35.86-5.08,2.45-13,2.45S5.3,30.2,5,29.37V6.82C5.3,6,10,4.36,18,4.36c1.7,0,3.25.08,4.64.2a7.44,7.44,0,0,1,.67-1.94c-1.88-.18-3.75-.26-5.31-.26-5.57,0-15,.93-15,4.43V29.37c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V12.87A7.45,7.45,0,0,1,31,13.43Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M17.91,18.28c8.08,0,14.66-1.74,15.09-3.94V8.59c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51C26,10.53,32.52,8.79,33,6.61h0C32.8,3.2,23.52,2.28,18,2.28S3,3.21,3,6.71V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,18.77v-2A39.4,39.4,0,0,0,17.91,18.28Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-1--alerted" d="M17.91,20.28A39.4,39.4,0,0,1,6.25,18.77v-2a39.4,39.4,0,0,0,11.66,1.51c6.9,0,12.7-1.27,14.51-3H22.23a3.67,3.67,0,0,1-3.55-2.75h-.77A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51h.82A3.64,3.64,0,0,1,19,9.75l4.17-7.22c-1.85-.18-3.68-.25-5.21-.25-5.57,0-15,.93-15,4.43V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34C32.57,18.53,26,20.28,17.91,20.28Z"/>\n                <path class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" d="M26.85,1l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06,1A1.28,1.28,0,0,0,26.85,1Z"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M17.91,18.28c8.08,0,14.66-1.74,15.09-3.94v-1.6a7.47,7.47,0,0,1-7.38-.8,48.3,48.3,0,0,1-7.71.59A39.4,39.4,0,0,1,6.25,11V9a39.4,39.4,0,0,0,11.66,1.51,51,51,0,0,0,6-.34,7.46,7.46,0,0,1-.59-7.65c-1.87-.18-3.73-.26-5.28-.26-5.57,0-15,.93-15,4.43V29.29c0,3.49,9.43,4.43,15,4.43s15-.93,15-4.43V24.09C32.57,26.28,26,28,17.91,28A39.4,39.4,0,0,1,6.25,26.52v-2A39.4,39.4,0,0,0,17.91,26C26,26,32.57,24.28,33,22.09V16.34c-.43,2.2-7,3.94-15.09,3.94A39.4,39.4,0,0,1,6.25,18.77v-2A39.4,39.4,0,0,0,17.91,18.28Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" cx="30" cy="5.86" r="5"/>\n'),a.ClrShapeCluster=c.clrIconSVG('<path d="M31.36,8H27.5v2H31V30H27.5v2H33V9.67A1.65,1.65,0,0,0,31.36,8Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline clr-i-outline-path-2"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM24,30H12V6H24Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <rect x="13.5" y="9.21" width="9" height="1.6" class="clr-i-outline clr-i-outline-path-5"/>\n            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M19,9.89l.39-.68H13.5v1.6h5.17A3.65,3.65,0,0,1,19,9.89Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M24,30H12V6h9.29l1.15-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H24Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <polygon points="31 15.4 31 30 27.5 30 27.5 32 33 32 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted clr-i-alert"/>\n            <path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <rect x="13.5" y="9.21" width="9" height="1.6" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M24,10.49V30H12V6H22.5a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.53,7.53,0,0,1,24,10.49Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <path d="M31,13.43V30H27.5v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"/>\n            <path d="M31.36,8H27.5V32H33V9.67A1.65,1.65,0,0,0,31.36,8Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z" class="clr-i-solid clr-i-solid-path-3"/>\n            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <rect x="27.5" y="15.4" width="5.5" height="16.6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M19,13.56a3.68,3.68,0,0,1-.31-3H13V9h6.56l2.89-5H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H22.23A3.69,3.69,0,0,1,19,13.56ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>\n            <path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.49,7.49,0,0,1,22.5,6ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M30,13.5a7.47,7.47,0,0,1-2.5-.44V32H33V12.87A7.47,7.47,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>\n        '),a.ClrShapeApplications=c.clrIconSVG('<polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline clr-i-outline-path-1"/>\n            <polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8" class="clr-i-outline clr-i-outline-path-2"/>\n            <polygon points="30 4 30 8 26 8 26 10 32 10 32 4 30 4" class="clr-i-outline clr-i-outline-path-3"/>\n            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline clr-i-outline-path-4"/>\n            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline clr-i-outline-path-5"/>\n            <polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19" class="clr-i-outline clr-i-outline-path-6"/>\n            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline clr-i-outline-path-7"/>\n            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline clr-i-outline-path-8"/>\n            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline clr-i-outline-path-9"/>\n            <polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>\n            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline--badged clr-i-outline-path-7--badged"/>\n            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline--badged clr-i-outline-path-8--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-9--badged clr-i-badge"/>\n            <polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <polygon points="30 15 30 19 26 19 26 21 32 21 32 15 30 15" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n            <polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>\n            <polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"/>\n            <path d="M19,8H15v2h4L19,9.89,21,6.5V4H19Z" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-9--alerted clr-i-alert"/>\n            <rect x="4" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-1"/>\n            <rect x="4" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-2"/>\n            <rect x="4" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-3"/>\n            <rect x="15" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-4"/>\n            <rect x="15" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-5"/>\n            <rect x="15" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-6"/>\n            <rect x="26" y="4" width="6" height="6" class="clr-i-solid clr-i-solid-path-7"/>\n            <rect x="26" y="15" width="6" height="6" class="clr-i-solid clr-i-solid-path-8"/>\n            <rect x="26" y="26" width="6" height="6" class="clr-i-solid clr-i-solid-path-9"/>\n            <rect x="4" y="4" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <rect x="4" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <rect x="4" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n            <rect x="15" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"/>\n            <rect x="15" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-5--alerted"/>\n            <rect x="26" y="15" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-6--alerted"/>\n            <rect x="26" y="26" width="6" height="6" class="clr-i-solid--alerted clr-i-solid-path-7--alerted"/>\n            <path d="M15,10h4L19,9.89,21,6.5V4H15Z" class="clr-i-solid--alerted clr-i-solid-path-8--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-9--alerted clr-i-alert"/>\n            <rect x="4" y="4" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <rect x="4" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <rect x="4" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <rect x="15" y="4" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-4--badged"/>\n            <rect x="15" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-5--badged"/>\n            <rect x="15" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-6--badged"/>\n            <rect x="26" y="15" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-7--badged"/>\n            <rect x="26" y="26" width="6" height="6" class="clr-i-solid--badged clr-i-solid-path-8--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-9--badged clr-i-badge"/>\n        '),a.ClrShapeBuilding=c.clrIconSVG('<path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <rect x="8" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <rect x="12" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <rect x="16" y="8" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <rect x="8" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <rect x="12" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>\n            <rect x="16" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-7--badged"/>\n            <rect x="8" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-8--badged"/>\n            <rect x="12" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-9--badged"/>\n            <rect x="16" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-10--badged"/>\n            <rect x="8" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-11--badged"/>\n            <rect x="12" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-12--badged"/>\n            <rect x="16" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-13--badged"/>\n            <rect x="23" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-14--badged"/>\n            <rect x="27" y="13" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-15--badged"/>\n            <rect x="23" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-16--badged"/>\n            <rect x="27" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-17--badged"/>\n            <rect x="23" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-18--badged"/>\n            <rect x="27" y="23" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-19--badged"/>\n            <path d="M31,13.43V31H23v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z" class="clr-i-outline--badged clr-i-outline-path-20--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-21--badged clr-i-badge"/>\n            <rect x="8" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <rect x="12" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <rect x="16" y="8" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <rect x="8" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <rect x="12" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n            <rect x="16" y="13" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>\n            <rect x="8" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"/>\n            <rect x="12" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"/>\n            <rect x="16" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-9--alerted"/>\n            <rect x="8" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-10--alerted"/>\n            <rect x="12" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-11--alerted"/>\n            <rect x="16" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-12--alerted"/>\n            <rect x="23" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-13--alerted"/>\n            <rect x="27" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-14--alerted"/>\n            <rect x="23" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-15--alerted"/>\n            <rect x="27" y="23" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-16--alerted"/>\n            <path d="M20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12V8.24l2-3.41A2.12,2.12,0,0,0,19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V15.38a3.68,3.68,0,0,1-2-.74Z" class="clr-i-outline--alerted clr-i-outline-path-17--alerted"/>\n            <polygon points="31 15.4 31 31 23 31 23 33 33 33 33 15.4 31 15.4" class="clr-i-outline--alerted clr-i-outline-path-18--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-19--alerted clr-i-alert"/>\n            <path d="M31,8H22V33H33V10A2,2,0,0,0,31,8ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Zm0-5H28V13h2Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V14.64a3.67,3.67,0,0,1-1-4.76l1-1.65V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M22.23,15.4l-.23,0V33H33V15.4ZM26,25H24V23h2Zm0-5H24V18h2Zm4,5H28V23h2Zm0-5H28V18h2Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M30,13.5V15H28V13.22A7.5,7.5,0,0,1,22.78,8H22V33H33V12.87A7.47,7.47,0,0,1,30,13.5ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n            <path d="M31,8H23v2h8V31H23v2H33V10A2,2,0,0,0,31,8Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <rect x="8" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n            <rect x="12" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-4"/>\n            <rect x="16" y="8" width="2" height="2" class="clr-i-outline clr-i-outline-path-5"/>\n            <rect x="8" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-6"/>\n            <rect x="12" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-7"/>\n            <rect x="16" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-8"/>\n            <rect x="8" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-9"/>\n            <rect x="12" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-10"/>\n            <rect x="16" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-11"/>\n            <rect x="8" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-12"/>\n            <rect x="12" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-13"/>\n            <rect x="16" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-14"/>\n            <rect x="23" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-15"/>\n            <rect x="27" y="13" width="2" height="2" class="clr-i-outline clr-i-outline-path-16"/>\n            <rect x="23" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-17"/>\n            <rect x="27" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-18"/>\n            <rect x="23" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-19"/>\n            <rect x="27" y="23" width="2" height="2" class="clr-i-outline clr-i-outline-path-20"/>\n        '),a.ClrShapeCPU=c.clrIconSVG('<path d="M23.08,23.07h-11v1.5H23.83a.75.75,0,0,0,.75-.75V11.33h-1.5Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M32.2,18.15a.8.8,0,1,0,0-1.6H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V8.1A2.1,2.1,0,0,0,27.9,6H26.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6H30v-5.4ZM28,27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8H27.9a.1.1,0,0,1,.1.1Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M12.06,24.57H23.83a.75.75,0,0,0,.75-.75V11.33h-1.5V23.07h-11Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V13.5a7.49,7.49,0,0,1-2-.28V27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8H22.78a7.49,7.49,0,0,1-.28-2H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"/>\n            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V15.4H28V27.9a.1.1,0,0,1-.1.1H8.1a.1.1,0,0,1-.1-.1V8.1A.1.1,0,0,1,8.1,8h12l1.15-2H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M12.06,24.57H23.83a.75.75,0,0,0,.75-.75V15.4h-1.5v7.67h-11Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"/>\n            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V15.4H25v8.41A1.18,1.18,0,0,1,24,25H13V23H23V15.4h-.77A3.68,3.68,0,0,1,19,9.89L21.29,6H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M32.2,23.55H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V13.5a7.46,7.46,0,0,1-5-1.92V23.81A1.18,1.18,0,0,1,24,25H13V23H23V11h1.42A7.46,7.46,0,0,1,22.5,6H19.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n            <path d="M32.2,18.15a.8.8,0,1,0,0-1.6H30v-5.4h2.2a.8.8,0,1,0,0-1.6H30V8.1A2.1,2.1,0,0,0,27.9,6H26.35V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6h-5.4V3.8a.8.8,0,1,0-1.6,0V6H8.1A2.1,2.1,0,0,0,6,8.1V9.55H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6v5.4H3.8a.8.8,0,1,0,0,1.6H6V27.9A2.1,2.1,0,0,0,8.1,30h2.65v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30h5.4v2.2a.8.8,0,1,0,1.6,0V30H27.9A2.1,2.1,0,0,0,30,27.9V25.15h2.2a.8.8,0,1,0,0-1.6H30v-5.4ZM25,23.81A1.18,1.18,0,0,1,24,25H13V23H23V11h2Z" class="clr-i-solid clr-i-solid-path-1"/>\n        '),a.ClrShapeMemory=c.clrIconSVG('<rect x="8" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-1"/>\n            <rect x="16" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-2"/>\n            <rect x="24" y="12" width="4" height="8" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline clr-i-outline-path-4"/>\n            <path d="M32,7H4A2,2,0,0,0,2,9v4H4V9H32v4h2V9A2,2,0,0,0,32,7Z" class="clr-i-outline clr-i-outline-path-5"/>\n            <path d="M32,27H19v2H32a2,2,0,0,0,2-2V17H32Z" class="clr-i-outline clr-i-outline-path-6"/>\n            <rect x="8" y="12" width="4" height="8" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M19,13.56A3.66,3.66,0,0,1,18.57,12H16v8h4V14.64A3.67,3.67,0,0,1,19,13.56Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <rect x="24" y="15.4" width="4" height="4.6" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n            <path d="M4,9H19.56l1.15-2H4A2,2,0,0,0,2,9v4H4Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted clr-i-alert"/>\n            <rect x="8" y="12" width="4" height="8" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <rect x="16" y="12" width="4" height="8" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <path d="M28,13.22A7.46,7.46,0,0,1,25.51,12H24v8h4Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n            <path d="M4,9H23.13a7.45,7.45,0,0,1-.55-2H4A2,2,0,0,0,2,9v4H4Z" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge"/>\n            <path d="M34,13V9a2,2,0,0,0-2-2H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17H32V13ZM12,20H8V12h4Zm8,0H16V12h4Zm8,0H24V12h4Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M32,17V15.07H28V20H24V15.07H22.23A3.68,3.68,0,0,1,20,14.31V20H16V12h2.61A3.68,3.68,0,0,1,19,9.55L20.52,7H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85.8l-5.72,9.91a1.28,1.28,0,0,0,1.1,1.91H33.68a1.28,1.28,0,0,0,1.1-1.91L29.06.8A1.28,1.28,0,0,0,26.85.8Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n            <path d="M32,17V13.22a7.33,7.33,0,0,1-4,0V20H24V12h1.51a7.48,7.48,0,0,1-2.94-5H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Zm8,0H16V12h4Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n        '),a.ClrShapeDataCluster=c.clrIconSVG('<path d="M26.5,4.08C22.77,4.08,19,5.4,19,7.91V9.5a18.75,18.75,0,0,1,2,.2V7.91c0-.65,2.09-1.84,5.5-1.84S32,7.27,32,7.91V18.24c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75V7.91C34,5.4,30.23,4.08,26.5,4.08Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.23C26.65,12.73,22.93,10.85,18,10.85Zm6.65,7.67c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38s6.65,1.43,6.65,2.38Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M24.65,18.52c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38l.75,0a3.69,3.69,0,0,1-.08-2l-.66,0c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.4h-2Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M22,4.8c-1.75.63-3,1.68-3,3.12V9.5l.25,0Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M33.68,15.4H32v2.84c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>\n            <path d="M4,18.24V7.91c0-.65,2.09-1.84,5.5-1.84S15,7.27,15,7.91V9.7a18.75,18.75,0,0,1,2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22V20C5.46,19.68,4,18.78,4,18.24Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V15.23C26.65,12.73,22.93,10.85,18,10.85Zm6.65,7.67c-.85,1-3.42,2-6.65,2A14.49,14.49,0,0,1,14,20v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v3.12c-.85,1-3.42,2-6.65,2a14.49,14.49,0,0,1-4-.53v1.46a16.33,16.33,0,0,0,4,.47,12.76,12.76,0,0,0,6.65-1.56v2.29c0,.95-2.65,2.38-6.65,2.38s-6.65-1.43-6.65-2.38V15.23c0-.95,2.65-2.38,6.65-2.38s6.65,1.43,6.65,2.38Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M21,7.91c0-.33.55-.8,1.54-1.18,0-.24,0-.48,0-.73a7.52,7.52,0,0,1,.14-1.41C20.55,5.19,19,6.3,19,7.91V9.5a18.75,18.75,0,0,1,2,.2Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M32,13.22v5c0,.54-1.46,1.44-3.9,1.73v2c3.13-.32,5.9-1.6,5.9-3.75v-5.9A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>\n            <path d="M26.5,4.08C22.77,4.08,19,5.4,19,7.91V9.48c5.3.26,9,2.6,9,5.76v6.7l.05.06c3.13-.32,5.9-1.6,5.9-3.75V7.91C34,5.4,30.23,4.08,26.5,4.08Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.23C26.65,12.73,22.93,10.85,18,10.85Z" class="clr-i-solid clr-i-solid-path-3"/>\n            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M19,13.56a3.68,3.68,0,0,1-.39-2.7l-.66,0c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.4H22.23A3.69,3.69,0,0,1,19,13.56Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M22,4.8c-1.75.63-3,1.68-3,3.12V9.48l.27,0Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n            <path d="M33.68,15.4H28v6.53l.05.06c3.13-.32,5.9-1.6,5.9-3.75V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-5--alerted clr-i-alert"/>\n            <path d="M17,9.48V7.91c0-2.52-3.77-3.84-7.5-3.84S2,5.4,2,7.91V18.24C2,20.4,4.77,21.67,7.9,22L8,21.93v-6.7C8,12.08,11.7,9.74,17,9.48Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M18,10.85c-4.93,0-8.65,1.88-8.65,4.38V27.54c0,2.5,3.72,4.38,8.65,4.38s8.65-1.88,8.65-4.38V25.38A13.58,13.58,0,0,1,18,28a16.77,16.77,0,0,1-6-1V25.27a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.23,8.63-3.23V20.47C24.8,22,21.72,23,18,23a16.77,16.77,0,0,1-6-1V20.23a14.5,14.5,0,0,0,6,1.17c4.21,0,7.65-1.11,8.63-3.11V15.23C26.65,12.73,22.93,10.85,18,10.85Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M22.5,6a7.52,7.52,0,0,1,.14-1.4C20.55,5.19,19,6.3,19,7.91V9.48a15.33,15.33,0,0,1,5,1A7.46,7.46,0,0,1,22.5,6Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <path d="M30,13.49A7.47,7.47,0,0,1,27.35,13a4,4,0,0,1,.7,2.23v6.7l.05.06c3.13-.32,5.9-1.6,5.9-3.75V12.33A7.46,7.46,0,0,1,30,13.49Z" class="clr-i-solid--badged clr-i-solid-path-4--badged"/>\n            <circle cx="30" cy="5.99" r="5" class="clr-i-solid--badged clr-i-solid-path-5--badged clr-i-badge"/>\n        '),a.ClrShapeResourcePool=c.clrIconSVG('<path d="M33.68,15.4H31.73a14,14,0,0,1,.22,1.6H17.49L8.3,28.07A14,14,0,0,1,22.09,4.62l1-1.76A16,16,0,1,0,34,18a16,16,0,0,0-.23-2.61ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18a14,14,0,0,1,27.95-1H17.49L8.3,28.07A14,14,0,0,1,4,18ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M31.2,13.4a13.91,13.91,0,0,1,.75,3.6H17.49L8.3,28.07A14,14,0,0,1,22.61,4.8a7.43,7.43,0,0,1,.58-1.92,16.06,16.06,0,1,0,9.93,9.93A7.43,7.43,0,0,1,31.2,13.4ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>\n            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M33.95,17A16,16,0,1,0,7,29.6L17.49,17Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M33.95,17a15.91,15.91,0,0,0-.84-4.18,7.49,7.49,0,0,1-9.92-9.94A16,16,0,0,0,7,29.6L17.49,17Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n            <path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M33.95,17a16,16,0,0,0-.18-1.61H22.23A3.68,3.68,0,0,1,19,9.89l4.06-7A16,16,0,0,0,7,29.6L17.49,17Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n        '),a.ClrShapeShieldCheck=c.clrIconSVG('<path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M10.88,16.87a1,1,0,0,0-1.41,1.41l6,6L26.4,13.77A1,1,0,0,0,25,12.33l-9.47,9.19Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59Zm-4.57,6.65L15.51,24.9,9.19,18.57a1.4,1.4,0,0,1,2-2L15.54,21,24.73,12a1.4,1.4,0,1,1,2,2Z" class="clr-i-solid clr-i-solid-path-1"/>\n        '),a.ClrShapeShield=c.clrIconSVG('<path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M30,15.4v.53c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3c1,.64,2.2,1.27,3.43,1.89l1-1.74a41.1,41.1,0,0,1-3.89-2.18L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>\n            <path d="M30,13.5v2.43c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,46.19,46.19,0,0,0,4.51,2.42c0-.1,0-.19,0-.29a7.49,7.49,0,0,1,.23-1.83,41.61,41.61,0,0,1-4.19-2.33L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>\n            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L22.43,4a41.1,41.1,0,0,1-3.89-2.18L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n            <path d="M30,13.5a7.47,7.47,0,0,1-7.27-9.33,41.61,41.61,0,0,1-4.19-2.33L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n        '),a.ClrShapeShieldX=c.clrIconSVG('<path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M22.81,10.79,18,15.61l-4.81-4.81a1,1,0,0,0-1.41,1.41L16.59,17l-4.81,4.81a1,1,0,1,0,1.41,1.41L18,18.43l4.81,4.81a1,1,0,0,0,1.41-1.41L19.41,17l4.81-4.81a1,1,0,0,0-1.41-1.41Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM24.51,21.55a1.4,1.4,0,0,1-2,2L18,19l-4.53,4.53a1.43,1.43,0,0,1-2,0,1.4,1.4,0,0,1,0-2L16,17l-4.53-4.53a1.4,1.4,0,1,1,2-2L18,15l4.53-4.53a1.4,1.4,0,0,1,2,2L20,17Z" class="clr-i-solid clr-i-solid-path-1"/>\n        '),a.ClrShapeImport=c.clrIconSVG('<path d="M28,4H14.87L8,10.86V15h2V13.61h7.61V6H28V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM16,12H10v-.32L15.7,6H16Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M28,15.4V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M10,13.61h7.61V6h3.68l1.15-2H14.87L8,10.86V15h2Zm0-1.92L15.7,6H16v6H10Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M11.94,26.28a1,1,0,1,0,1.41,1.41L19,22l-5.68-5.68a1,1,0,0,0-1.41,1.41L15.2,21H3a1,1,0,1,0,0,2H15.23Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M28,13.22V30H8a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M10,13.61h7.61V6H22.5a7.49,7.49,0,0,1,.28-2H14.87L8,10.86V15h2Zm0-1.92L15.7,6H16v6H10Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M28,4H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M22.23,15.4A3.68,3.68,0,0,1,19,9.89L22.45,4H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V15.4ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M3,21a1,1,0,1,0,0,2H8V21Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H14.87L8,10.86V21H15.2l-3.25-3.25a1,1,0,0,1,1.41-1.41L19,22l-5.68,5.68a1,1,0,0,1-1.41-1.41L15.23,23H8v7a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.5,7.5,0,0,1,22.5,6ZM16,12H10v-.32L15.69,6H16Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n        '),a.ClrShapeExport=c.clrIconSVG('<path d="M6,13.61h7.61V6H24v8.38h2V6a2,2,0,0,0-2-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M6,13.61h7.61V6h7.68l1.15-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"/>\n            <path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M26,12.34a7.53,7.53,0,0,1-2-1.85v3.89h2Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M6,13.61h7.61V6H22.5a7.49,7.49,0,0,1,.28-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M17,22a1,1,0,0,1,1-1h8V6a2,2,0,0,0-2-2H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M17,22a1,1,0,0,1,1-1h8V15.4H22.23A3.68,3.68,0,0,1,19,9.89L22.45,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M17,22a1,1,0,0,1,1-1h8V12.34A7.46,7.46,0,0,1,22.78,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n        '),a.ClrShapeUploadCloud=c.clrIconSVG('<path d="M30.31,13c0-.1,0-.21,0-.32a10.26,10.26,0,0,0-10.45-10,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.26,8.26,0,0,1,8.45,8,7.75,7.75,0,0,1,0,.8l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,3.93-15Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.81,8.81,0,0,1,2,.25l1-1.8a10.8,10.8,0,0,0-3.07-.45,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M32.9,15.4H30.21A6,6,0,0,1,26.38,26H21v2h5.38A8,8,0,0,0,32.9,15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M22.28,21.85A1,1,0,0,0,23,20.14l-5-5-5,5a1,1,0,0,0,1.41,1.41L17,19V31.25a1,1,0,1,0,2,0V19l2.57,2.57A1,1,0,0,0,22.28,21.85Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M30.92,13.44a7.13,7.13,0,0,1-2.63-.14c0,.08,0,.15,0,.23l-.08.72.65.3A6,6,0,0,1,26.38,26H21v2h5.38a8,8,0,0,0,4.54-14.56Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M3.6,18.38A7.71,7.71,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.79,8.79,0,0,1,2.68.42,7.45,7.45,0,0,1,.5-1.94,10.79,10.79,0,0,0-3.18-.48,10.47,10.47,0,0,0-9.6,6.1A9.74,9.74,0,0,0,1.6,18.4,9.62,9.62,0,0,0,11.25,28H15V26H11.25A7.66,7.66,0,0,1,3.6,18.38Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n        '),a.ClrShapeDownloadCloud=c.clrIconSVG('<path d="M30.31,13c0-.1,0-.21,0-.32a10.26,10.26,0,0,0-10.45-10,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63a8.43,8.43,0,0,1,8-5.4,8.26,8.26,0,0,1,8.45,8,7.75,7.75,0,0,1,0,.8l-.08.72.65.3A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28a8,8,0,0,0,3.93-15Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M19.87,4.69a8.81,8.81,0,0,1,2,.25l1-1.8a10.8,10.8,0,0,0-3.07-.45,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63A8.43,8.43,0,0,1,19.87,4.69Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M32.9,15.4H30.21A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28A8,8,0,0,0,32.9,15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M22.28,26.07a1,1,0,0,0-.71.29L19,28.94V16.68a1,1,0,1,0-2,0V28.94l-2.57-2.57A1,1,0,0,0,13,27.78l5,5,5-5a1,1,0,0,0-.71-1.71Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M19.87,4.69a8.79,8.79,0,0,1,2.68.42,7.45,7.45,0,0,1,.5-1.94,10.79,10.79,0,0,0-3.18-.48,10.47,10.47,0,0,0-9.6,6.1A9.65,9.65,0,0,0,10.89,28a3,3,0,0,1,0-2A7.65,7.65,0,0,1,11,10.74l.67,0,.23-.63A8.43,8.43,0,0,1,19.87,4.69Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M30.92,13.44a7.13,7.13,0,0,1-2.63-.14c0,.08,0,.15,0,.23l-.08.72.65.3A6,6,0,0,1,26.38,26H25.09a3,3,0,0,1,0,2h1.28a8,8,0,0,0,4.54-14.61Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n        '),a.ClrShapePlugin=c.clrIconSVG('<path d="M29.81,16H29V8.83a2,2,0,0,0-2-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Zm2.41,7A3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h8V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M29.81,16H29v-.6H27V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23,3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h.66L21,6.59A5.12,5.12,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>\n            <path d="M29.81,16H29V13.43a7.45,7.45,0,0,1-2-.55V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23,3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h4.06a7.44,7.44,0,0,1-.51-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>\n            <path d="M29.81,16H29V8.83a2,2,0,0,0-2-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M29.81,16H29v-.6H22.23A3.68,3.68,0,0,1,19,9.89L21,6.59A5.12,5.12,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n            <path d="M29.81,16H29V13.43a7.5,7.5,0,0,1-6.45-6.59H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n        '),a.ClrShapeFloppy=c.clrIconSVG('<path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM25,30H11V22H25Zm5,0H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H12V6H26.51L30,9.59Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30,13.5h0V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-1.68l-.43-.3H12V6H22.5a7.49,7.49,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM25,30H11V22H25Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"/>\n            <path d="M30,15.4V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2h7.35a3.54,3.54,0,0,1-.77-2H12V6h9.29l1.15-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM25,30H11V22H25Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert"/>\n            <path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5ZM24,14H12a2,2,0,0,1-2-2V6h2v6H26A2,2,0,0,1,24,14Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M30,13.5a7.46,7.46,0,0,1-4-1.18A2,2,0,0,1,24,14H12a2,2,0,0,1-2-2V6h2v6H25.54a7.45,7.45,0,0,1-2.76-8H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n            <path d="M22.23,15.4A3.69,3.69,0,0,1,19.35,14H12a2,2,0,0,1-2-2V6h2v6h6.58A3.67,3.67,0,0,1,19,9.89L22.45,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert"/>\n        '),a.ClrShapeComputer=c.clrIconSVG('<polygon points="9.6 22.88 9.6 10.6 24.4 10.6 25.98 9 8 9 8 22.88 9.6 22.88" class="clr-i-outline clr-i-outline-path-1"/>\n            <path d="M6,7H30V23h2V6.5A1.5,1.5,0,0,0,30.5,5H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M9.6,22.88V10.6h9.14A3.64,3.64,0,0,1,19,9.89L19.56,9H8V22.88Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <path d="M6,7H20.71l1.15-2H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <rect x="30" y="15.4" width="2" height="7.6" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>\n            <path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M22.5,6a7.52,7.52,0,0,1,.07-1H5.5A1.5,1.5,0,0,0,4,6.5V23H6V7H22.57A7.52,7.52,0,0,1,22.5,6Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M30,13.5V23h2V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <path d="M23.13,9H8V22.88H9.6V10.6H24.08A7.49,7.49,0,0,1,23.13,9Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>\n            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M7,10H29V24h3V7.57A1.54,1.54,0,0,0,30.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <rect x="29" y="15.4" width="3" height="8.6" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M7,10H19L19,9.89,21.29,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>\n            <path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M7,10H23.66A7.46,7.46,0,0,1,22.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M32,13.22a7.14,7.14,0,0,1-3,.2V24h3Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>\n        '),a.ClrShapeDisplay=c.clrIconSVG('<path d="M32.5,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V4.5A1.5,1.5,0,0,0,32.5,3ZM32,25H4V5H32Z" class="clr-i-outline clr-i-outline-path-1"/>\n            <polygon points="7.7 8.76 28.13 8.76 29.94 7.16 6.1 7.16 6.1 23 7.7 23 7.7 8.76" class="clr-i-outline clr-i-outline-path-2"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline clr-i-outline-path-3"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n            <path d="M33.68,15.4H32V25H4V5H21.87L23,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n            <polygon points="7.7 23 7.7 8.76 19.7 8.76 20.62 7.16 6.1 7.16 6.1 23 7.7 23" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H21.24V29.5A4.2,4.2,0,0,0,22.17,32H13.83a4.2,4.2,0,0,0,.93-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n            <path d="M6.1,23H7.7V8.76H23a7.44,7.44,0,0,1-.43-1.6H6.1Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n            <path d="M32,13.22V25H4V5H22.57a7.45,7.45,0,0,1,.55-2H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid clr-i-solid-path-1"/>\n            <path d="M32.5,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V4.5A1.5,1.5,0,0,0,32.5,3ZM31,21.83H5V7H31Z" class="clr-i-solid clr-i-solid-path-2"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n            <path d="M33.68,15.4H31v6.43H5V7H20.71L23,3H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n            <path d="M26,32H24.26a3.61,3.61,0,0,1-1.5-2.52V28.13H13.24V29.5A3.61,3.61,0,0,1,11.74,32H9.94a1,1,0,1,0,0,2H26.06a.92.92,0,0,0,1-1A1,1,0,0,0,26,32Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M31,13.43v8.41H5V7H22.57a7.29,7.29,0,0,1,.55-4H3.5A1.5,1.5,0,0,0,2,4.5v21A1.5,1.5,0,0,0,3.5,27h29A1.5,1.5,0,0,0,34,25.5V12.34A7.44,7.44,0,0,1,31,13.43Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n        '),a.ClrShapeTerminal=c.clrIconSVG('<path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32V9.2H4ZM4,29V10.8H32V29Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="17" y="23" width="6" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <polygon points="7 15.68 13.79 18.8 7 21.91 7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68" class="clr-i-outline clr-i-outline-path-3" />\n            <rect x="17" y="23" width="6" height="2" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M33.68,15.4H32V29H4V10.8H18.68A3.66,3.66,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" />\n            <rect x="17" y="23" width="6" height="2" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M32,13.22V29H4V10.8H24.24a7.51,7.51,0,0,1-1-1.6H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />\n            <path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM6.8,15.81V13.17l10,4.59v2.08l-10,4.59V21.78l6.51-3ZM23.4,25.4H17V23h6.4ZM4,9.2V7H32V9.2Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M30,13.5a7.49,7.49,0,0,1-6.78-4.3H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />\n        '),a.ClrShapeCode=c.clrIconSVG('<path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30.21,16.78l-6.53-4.45A1,1,0,1,0,22.55,14l5.32,3.63-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M19.94,9.83a.9.9,0,0,0-1.09.66L15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68l3.44-13.81A.9.9,0,0,0,19.94,9.83Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M18.56,11.62,15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68L19.73,14.4a3.59,3.59,0,0,1-1.16-2.79Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M30.21,16.78l-2-1.38H24.64l3.24,2.21-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert" />\n            <path d="M13.71,12.59a1,1,0,0,0-1.39-.26L5.79,16.78a1,1,0,0,0,0,1.65l6.53,4.45a1,1,0,1,0,1.13-1.65L8.13,17.61,13.45,14A1,1,0,0,0,13.71,12.59Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M30.21,16.78l-6.53-4.45A1,1,0,1,0,22.55,14l5.32,3.63-5.32,3.63a1,1,0,0,0,1.13,1.65l6.53-4.45a1,1,0,0,0,0-1.65Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M19.94,9.83a.9.9,0,0,0-1.09.66L15.41,24.29a.9.9,0,0,0,.66,1.09l.22,0a.9.9,0,0,0,.87-.68l3.44-13.81A.9.9,0,0,0,19.94,9.83Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />\n        '),a.ClrShapeApplication=c.clrIconSVG('<rect x="5" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="9" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="13" y="7" width="2" height="2" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,6H32v4.2H4ZM4,30V11.8H32V30Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4Zm0,6.2H4V6H32Z" class="clr-i-solid clr-i-solid-path-1" />\n            <rect x="5" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-2" />\n            <rect x="9" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-3" />\n            <rect x="13" y="7" width="2" height="2" class="clr-i-solid clr-i-solid-path-4" />\n        '),a.ClrShapeBattery=c.clrIconSVG('<path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M25.12,4H23V3.58A1.58,1.58,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V5.88A1.88,1.88,0,0,0,25.12,4ZM25,32H11V6h4V4h6V6h4Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-2--alerted clr-i-alert" />\n            <path d="M25,15.4V32H11V6h4V4h6V6h.28l1.64-2.85A1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" />\n            <path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M25,11.58V32H11V6h4V4h6V6H22.5A7.47,7.47,0,0,1,23,3.38,1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V12.87A7.5,7.5,0,0,1,25,11.58Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M22,4V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94v-28A1.09,1.09,0,0,0,26,4ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-1--alerted clr-i-alert" />\n            <path d="M22.23,15.4A3.66,3.66,0,0,1,20.55,15l2.76,4.79L16.9,18.7l3.36,6.73a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l.09.15A3.66,3.66,0,0,1,19,9.89L22.45,4H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-1--badged clr-i-badge" />\n            <path d="M22.5,6a7.49,7.49,0,0,1,.28-2H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V12.87A7.5,7.5,0,0,1,22.5,6ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n        '),a.ClrShapeMobile=c.clrIconSVG('<path d="M25,4H11A2,2,0,0,0,9,6V30a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4ZM11,6H25V24H11Zm0,24V26H25v4Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="17" y="27" width="2" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M25,4H11A2,2,0,0,0,9,6V30a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V6A2,2,0,0,0,25,4ZM19,30H17V28h2Zm-8-4V6H25V26Z" class="clr-i-solid clr-i-solid-path-1" />\n        '),a.ClrShapeTablet=c.clrIconSVG('<rect x="17" y="29" width="2" height="2" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2Zm0,2V26.38H6V4ZM6,32V28H30v4Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2ZM19,32H17V30h2ZM6,28V4H30V28Z" class="clr-i-solid clr-i-solid-path-1" />\n        '),a.ClrShapeNetworkGlobe=c.clrIconSVG('<path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M17.75,2a14,14,0,0,0-14,14c0,.45,0,.89.07,1.33l0,0h0A14,14,0,1,0,17.75,2Zm0,2a12,12,0,0,1,8.44,3.48c0,.33,0,.66,0,1A18.51,18.51,0,0,0,14,8.53a2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.92,11.92,0,0,1,17.75,4Zm-3,5.87A17,17,0,0,1,25.92,10a16.9,16.9,0,0,1-3.11,7,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77Zm-4-3.6c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Zm6.51-8.9a2.33,2.33,0,0,0-.33-1.19,18.4,18.4,0,0,0,3.39-7.37q.75.35,1.48.78a12,12,0,0,1,.42,8.2A16,16,0,0,1,24.27,19.11Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M31.73,15.4h-2c0,.2,0,.4,0,.61a12,12,0,0,1-.53,3.52,16,16,0,0,1-5-.41,2.33,2.33,0,0,0-.33-1.19,18.87,18.87,0,0,0,1.62-2.52H23.83a17.29,17.29,0,0,1-1,1.54,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77A17.08,17.08,0,0,1,19.56,9l.87-1.51a18.59,18.59,0,0,0-6.39,1,2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.88,11.88,0,0,1,22,4.79L23,3A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0A14,14,0,0,0,31.76,16C31.76,15.8,31.74,15.6,31.73,15.4Zm-21-9.13c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert" />\n            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M31.5,13.35a7.54,7.54,0,0,1-1.5.15l-.51,0a11.91,11.91,0,0,1-.25,6,16,16,0,0,1-5-.41,2.33,2.33,0,0,0-.33-1.19,18.59,18.59,0,0,0,2.78-5.18,7.49,7.49,0,0,1-1.31-.82,17,17,0,0,1-2.61,5,2.28,2.28,0,0,0-2.58.57c-.35-.2-.7-.4-1-.63a16,16,0,0,1-4.93-5.23,2.25,2.25,0,0,0,.47-1.77,17,17,0,0,1,8.53-.62,7.43,7.43,0,0,1-.56-1.59A18.56,18.56,0,0,0,14,8.53a2.33,2.33,0,0,0-1.14-.61l-.25,0c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.92,11.92,0,0,1,22.57,5a7.45,7.45,0,0,1,.53-2A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0a14,14,0,1,0,27.68-4ZM10.76,6.27c0,.21.06.43.1.64.09.44.21.87.33,1.3a2.28,2.28,0,0,0-1.1,2.25A18.32,18.32,0,0,0,5.9,14.22,12,12,0,0,1,10.76,6.27Zm0,15.71A2.34,2.34,0,0,0,9.2,23.74l-.64,0A11.94,11.94,0,0,1,5.8,16.92l.11-.19a16.9,16.9,0,0,1,4.81-4.89,2.31,2.31,0,0,0,2.28.63,17.53,17.53,0,0,0,5.35,5.65c.41.27.83.52,1.25.76A2.32,2.32,0,0,0,19.78,20a16.94,16.94,0,0,1-6.2,3.11A2.34,2.34,0,0,0,10.76,22Zm7,6a11.92,11.92,0,0,1-5.81-1.51l.28-.06a2.34,2.34,0,0,0,1.57-1.79,18.43,18.43,0,0,0,7-3.5,2.29,2.29,0,0,0,3-.62,17.41,17.41,0,0,0,4.32.56l.53,0A12,12,0,0,1,17.75,28Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" />\n            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M14.72,9.87a2.25,2.25,0,0,1-.47,1.77,16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,16.9,16.9,0,0,0,3.11-7A17,17,0,0,0,14.72,9.87Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M17.75,2a14,14,0,0,0-14,14c0,.45,0,.89.07,1.33l0,0h0A14,14,0,1,0,17.75,2ZM28.1,21.09a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.51,18.51,0,0,1,12.11-.07c0-.32,0-.65,0-1h0a12,12,0,0,1,2.62,3.85h0q-.73-.43-1.48-.78a18.4,18.4,0,0,1-3.39,7.37,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M31.73,15.4H25.56a18.87,18.87,0,0,1-1.62,2.52,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53H28.1a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.59,18.59,0,0,1,6.39-1L23,3A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0A14,14,0,0,0,31.76,16C31.76,15.8,31.74,15.6,31.73,15.4Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M14.26,11.64a16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,17.29,17.29,0,0,0,1-1.54h-1.6A3.68,3.68,0,0,1,19,9.89L19.56,9a17.08,17.08,0,0,0-4.84.88,2.25,2.25,0,0,1-.47,1.77Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />\n            <path d="M26.58,32h-18a1,1,0,1,0,0,2h18a1,1,0,0,0,0-2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n            <path d="M31.5,13.35a7.54,7.54,0,0,1-1.5.15,7.46,7.46,0,0,1-3.28-.76,18.59,18.59,0,0,1-2.78,5.18,2.33,2.33,0,0,1,.33,1.19,22,22,0,0,0,5,.45,11.88,11.88,0,0,1-.61,1.53H28.1a17.41,17.41,0,0,1-4.32-.56,2.29,2.29,0,0,1-3,.62,18.43,18.43,0,0,1-7,3.5,2.34,2.34,0,0,1-1.57,1.79l-.29.06a11.93,11.93,0,0,1-3.39-2.8l.66,0a2.33,2.33,0,0,1,4.37-.58A16.94,16.94,0,0,0,19.78,20a2.32,2.32,0,0,1-.18-1.17c-.42-.24-.84-.49-1.25-.76A17.53,17.53,0,0,1,13,12.47a2.31,2.31,0,0,1-2.28-.63,27.31,27.31,0,0,0-5,4.74c0-.2,0-.39,0-.57a12,12,0,0,1,.14-1.73,18.75,18.75,0,0,1,4.2-3.8,2.28,2.28,0,0,1,1.1-2.25c-.12-.43-.24-.86-.33-1.3,0-.14,0-.29-.11-.64a12,12,0,0,1,1.37-.87c.1.59.14.9.21,1.21s.2.85.32,1.27l.25,0A2.33,2.33,0,0,1,14,8.53a18.56,18.56,0,0,1,8.65-.87,7.45,7.45,0,0,1,.41-4.59A14,14,0,0,0,3.75,16c0,.45,0,.89.07,1.33l0,0h0a14,14,0,1,0,27.68-4Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n            <path d="M14.72,9.87a2.25,2.25,0,0,1-.47,1.77,16,16,0,0,0,4.93,5.23c.34.23.69.43,1,.63a2.28,2.28,0,0,1,2.58-.57,17,17,0,0,0,2.61-5,7.52,7.52,0,0,1-2.16-2.67A17,17,0,0,0,14.72,9.87Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n            <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>\n        '),a.ClrShapeNetworkSettings=c.clrIconSVG('<path d="M10.85,27.44a2.29,2.29,0,0,0,1.74-1.68c.54-.14,1.06-.32,1.59-.51v-1.2a2.77,2.77,0,0,1,.06-.51,17.44,17.44,0,0,1-1.82.62,2.28,2.28,0,0,0-4.28.63l-.45,0h0a11.93,11.93,0,0,1-2.88-7.27,17.79,17.79,0,0,1,5-4.72,2.23,2.23,0,0,0,2.29.56,18.52,18.52,0,0,0,4.47,5,2.74,2.74,0,0,1,.21-.24l.95-.91a16.9,16.9,0,0,1-4.35-4.79,2.27,2.27,0,0,0,.35-1.2c0-.07,0-.14,0-.22A17.69,17.69,0,0,1,25,11a17.49,17.49,0,0,1-1.15,3.34l.19,0h1.56a19,19,0,0,0,.91-2.72c.43.19.84.41,1.26.64a11.94,11.94,0,0,1,1,4.09l0,0A2.77,2.77,0,0,1,30,16a2.73,2.73,0,0,1,.68.1A14,14,0,1,0,16.08,31a2.72,2.72,0,0,1,0-2A11.93,11.93,0,0,1,10.85,27.44ZM16.76,5a12,12,0,0,1,8.61,3.66c0,.25,0,.51-.08.76a19.21,19.21,0,0,0-12.35.11A2.28,2.28,0,0,0,11.74,9a17,17,0,0,1-.61-2.53A11.92,11.92,0,0,1,16.76,5ZM9.66,7.36a18.72,18.72,0,0,0,.49,1.92,2.28,2.28,0,0,0-1.07,1.93s0,.1,0,.15A19.45,19.45,0,0,0,5,14.79,12,12,0,0,1,9.66,7.36Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M25,21.19A3.84,3.84,0,1,0,28.88,25,3.87,3.87,0,0,0,25,21.19Zm0,6.08A2.24,2.24,0,1,1,27.28,25,2.26,2.26,0,0,1,25,27.27Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M34.17,24.14a1.14,1.14,0,0,0-.7-1.1l-1.56-.46q-.11-.32-.26-.63l.72-1.33a1.14,1.14,0,0,0-.21-1.34l-1.34-1.32a1.14,1.14,0,0,0-1.34-.2l-1.34.71a7.28,7.28,0,0,0-.67-.28L27,16.71a1.14,1.14,0,0,0-1.08-.76H24a1.14,1.14,0,0,0-1.08.8l-.44,1.43a7.32,7.32,0,0,0-.68.28l-1.32-.7a1.14,1.14,0,0,0-1.33.19l-1.37,1.31a1.14,1.14,0,0,0-.21,1.35l.7,1.28q-.16.32-.28.65L16.58,23a1.13,1.13,0,0,0-.81,1.09v1.87A1.14,1.14,0,0,0,16.59,27l1.47.44q.12.32.28.64l-.72,1.35a1.14,1.14,0,0,0,.2,1.35l1.34,1.32a1.14,1.14,0,0,0,1.34.2l1.37-.72q.31.14.63.26l.44,1.47a1.14,1.14,0,0,0,1.09.8h1.9A1.14,1.14,0,0,0,27,33.31l.44-1.47c.21-.07.42-.16.62-.25l1.38.73a1.14,1.14,0,0,0,1.33-.2l1.34-1.32a1.14,1.14,0,0,0,.21-1.35l-.73-1.34q.14-.3.25-.6l1.5-.44A1.13,1.13,0,0,0,34.17,26Zm-1.6,1.5-2,.58-.12.42A5.55,5.55,0,0,1,30,27.73l-.21.38,1,1.79-.86.84-1.82-1-.37.2a5.78,5.78,0,0,1-1.12.46l-.42.12-.59,2H24.38l-.59-1.95-.42-.12A5.86,5.86,0,0,1,22.24,30l-.37-.2-1.81,1-.86-.85,1-1.82-.22-.38a5.6,5.6,0,0,1-.49-1.13l-.13-.41-1.95-.58V24.42l1.94-.58.12-.41a5.53,5.53,0,0,1,.49-1.14l.22-.39-1-1.73.87-.84,1.77.94.38-.21a5.8,5.8,0,0,1,1.17-.49l.41-.12.59-1.91h1.23l.58,1.9.41.12a5.79,5.79,0,0,1,1.16.48l.38.21,1.8-.95.86.85-1,1.77.21.38a5.53,5.53,0,0,1,.47,1.13l.12.42,1.93.57Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M34,23.63,32,23a7.06,7.06,0,0,0-.58-1.41l1-1.86a.37.37,0,0,0-.07-.44L30.9,17.86a.37.37,0,0,0-.44-.07l-1.85,1a7,7,0,0,0-1.43-.61l-.61-2a.37.37,0,0,0-.36-.25h-2a.37.37,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.61L20,17.8a.37.37,0,0,0-.44.07L18,19.31a.37.37,0,0,0-.07.44l1,1.82A7,7,0,0,0,18.35,23l-2,.61a.37.37,0,0,0-.26.35v2a.37.37,0,0,0,.26.35l2,.61A7,7,0,0,0,19,28.37l-1,1.9a.37.37,0,0,0,.07.44l1.45,1.45a.37.37,0,0,0,.44.07l1.87-1a7.06,7.06,0,0,0,1.39.57l.61,2a.37.37,0,0,0,.35.26h2a.37.37,0,0,0,.35-.26l.61-2a7,7,0,0,0,1.38-.57l1.89,1a.37.37,0,0,0,.44-.07l1.45-1.45a.37.37,0,0,0,.07-.44l-1-1.88A7,7,0,0,0,31.95,27l2-.61a.37.37,0,0,0,.26-.35V24A.37.37,0,0,0,34,23.63Zm-8.83,4.72A3.33,3.33,0,1,1,28.53,25,3.33,3.33,0,0,1,25.19,28.34Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M10.85,27.44a2.29,2.29,0,0,0,1.74-1.68,19.71,19.71,0,0,0,1.89-.6V23.95a2,2,0,0,1,.09-.55,17.42,17.42,0,0,1-2.17.78,2.28,2.28,0,0,0-4.28.63l-.45,0h0a11.93,11.93,0,0,1-2.88-7.27,17.79,17.79,0,0,1,5-4.72,2.23,2.23,0,0,0,2.29.56,18.52,18.52,0,0,0,4.65,5.09,1.93,1.93,0,0,1,.23-.32l.89-.87a16.89,16.89,0,0,1-4.49-4.89,2.27,2.27,0,0,0,.35-1.2c0-.07,0-.14,0-.22A17.69,17.69,0,0,1,25,11a17.49,17.49,0,0,1-1.15,3.35,1.94,1.94,0,0,1,.31-.05h1.45a19.06,19.06,0,0,0,.9-2.7c.43.19.84.41,1.26.64a11.93,11.93,0,0,1,1,4.63l1-.51a2,2,0,0,1,.92-.23h.08A14,14,0,1,0,16.44,31a1.94,1.94,0,0,1,.12-1.46l.28-.53h-.07A11.91,11.91,0,0,1,10.85,27.44ZM16.76,5a12,12,0,0,1,8.61,3.66c0,.25,0,.51-.08.76a19.21,19.21,0,0,0-12.35.11A2.28,2.28,0,0,0,11.74,9a17,17,0,0,1-.61-2.53A11.92,11.92,0,0,1,16.76,5ZM9.66,7.36a18.72,18.72,0,0,0,.49,1.92,2.28,2.28,0,0,0-1.07,1.93s0,.1,0,.15A19.45,19.45,0,0,0,5,14.79,12,12,0,0,1,9.66,7.36Z" class="clr-i-solid clr-i-solid-path-2" />\n        '),a.ClrShapeNetworkSwitch=c.clrIconSVG('<path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM32,27H4V19.06L7.13,9H28.87L32,19.06Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-3" />\n            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-4" />\n            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline clr-i-outline-path-6" />\n            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline clr-i-outline-path-7" />\n            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />\n            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />\n            <path d="M33.91,18.47,33,15.4H30.86L32,19.06V27H4V19.06L7.13,9H19.56l1.15-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-8--alerted clr-i-alert" />\n            <rect x="7.12" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <rect x="12.12" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <rect x="17.11" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <rect x="22.1" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <rect x="27.1" y="22" width="1.8" height="3" class="clr-i-outline--badged clr-i-outline-path-5--badged" />\n            <rect x="6.23" y="18" width="23.69" height="1.4" class="clr-i-outline--badged clr-i-outline-path-6--badged" />\n            <path d="M33.91,18.47l-1.65-5.32a7.49,7.49,0,0,1-2,.33L32,19.06V27H4V19.06L7.13,9h16a7.45,7.45,0,0,1-.55-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z" class="clr-i-outline--badged clr-i-outline-path-7--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-8--badged clr-i-badge" />\n            <path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M32.26,13.15A7.49,7.49,0,0,1,22.57,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />\n        '),a.ClrShapeRouter=c.clrIconSVG('<path d="M18,14.87l5.11-5.14a1,1,0,1,0-1.42-1.41L19,11V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M28.85,12.89a1,1,0,0,0-1.41,1.42L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M31.38,15.4H28.54L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M18,14.87l1.15-1.16-.1-.15A3.68,3.68,0,0,1,19,10V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />\n            <path d="M18,14.87l5.11-5.14a1,1,0,1,0-1.42-1.41L19,11V3.33a1,1,0,0,0-2,0V11L14.31,8.32a1,1,0,1,0-1.42,1.41Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M18,21.13l-5.11,5.14a1,1,0,0,0,1.42,1.41L17,25v7.69a1,1,0,0,0,2,0V25l2.69,2.71a1,1,0,0,0,1.42-1.41Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M28.85,12.89a1,1,0,0,0-1.41,1.42L30.15,17H22.46a1,1,0,1,0,0,2h7.69l-2.71,2.69a1,1,0,0,0,1.41,1.42L34,18Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M5.85,19h7.69a1,1,0,0,0,0-2H5.85l2.71-2.69a1,1,0,1,0-1.41-1.42L2,18l5.14,5.11a1,1,0,1,0,1.41-1.42Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge" />\n            <path d="M18,1.67a16,16,0,1,0,16,16A16,16,0,0,0,18,1.67ZM13.86,9.92a.8.8,0,0,1,1.13,0l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v6.18L21,9.92a.8.8,0,1,1,1.13,1.14L18,15.15l-4.14-4.1A.8.8,0,0,1,13.86,9.92ZM10.32,21.74a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Zm4.67-3.66a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-2.2-2.14a.8.8,0,1,1,1.12-1.14L31,17.67Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.82,15.39H28.68L31,17.67l-4.19,4.09a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-1.5-1.47H22.23a3.68,3.68,0,0,1-3-1.51L18,15.15l-4.14-4.1A.8.8,0,1,1,15,9.92l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v4.49A3.65,3.65,0,0,1,19,9.89l4.22-7.31A16,16,0,1,0,34,17.67,16,16,0,0,0,33.82,15.39Zm-23.5,6.35a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert" />\n            <path d="M33.22,12.76A7.49,7.49,0,0,1,23.32,2.6a16,16,0,1,0,9.9,10.17ZM13.86,9.92a.8.8,0,0,1,1.13,0l2.21,2.19V5.93a.8.8,0,0,1,1.6,0v6.18L21,9.92a.8.8,0,1,1,1.13,1.14L18,15.15l-4.14-4.1A.8.8,0,0,1,13.86,9.92ZM10.32,21.74a.8.8,0,0,1-1.13,0L5,17.67l4.19-4.09a.8.8,0,1,1,1.12,1.14l-2.2,2.14h6.27a.8.8,0,0,1,0,1.6H8.11l2.2,2.15A.8.8,0,0,1,10.32,21.74Zm11.82,3.67a.8.8,0,0,1-1.13,0L18.8,23.23V29.4a.8.8,0,0,1-1.6,0V23.23L15,25.42a.8.8,0,1,1-1.13-1.14L18,20.18l4.14,4.1A.8.8,0,0,1,22.14,25.41Zm4.67-3.66a.8.8,0,1,1-1.12-1.14l2.2-2.15H21.63a.8.8,0,0,1,0-1.6h6.27l-2.2-2.14a.8.8,0,1,1,1.12-1.14L31,17.67Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge" />\n        '),a.ClrShapeVM=c.clrIconSVG('<path d="M11,5H25V8h2V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30,10H17v2h8v6h2V12h3V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M11,5H21.87L23,3H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <rect x="25.01" y="15.4" width="1.99" height="2.6" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M30,15.4V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V15.4ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M17,10v2h1.57A3.67,3.67,0,0,1,19,10Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert" />\n            <path d="M11,5H22.57a7.45,7.45,0,0,1,.55-2H11A2,2,0,0,0,9,5v6.85h2Z" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <path d="M30,13.5h0V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <path d="M17,12h8v6h2V12.87A7.52,7.52,0,0,1,23.66,10H17Z" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge" />\n            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H27V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6h2.72L23,3H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M17.19,10a2,2,0,0,0-2,2v1.4H19A3.68,3.68,0,0,1,19,10Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M23.21,15.4A3.55,3.55,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />\n            <path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H22.9A7.45,7.45,0,0,1,23.13,3H11A2,2,0,0,0,9,5v8.4h4.59Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M30,13.5A7.49,7.49,0,0,1,23.66,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />\n        '),a.ClrShapeVMWApp=c.clrIconSVG('<polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline clr-i-outline-path-1" />\n            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline clr-i-outline-path-2" />\n            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline clr-i-outline-path-3" />\n            <polygon points="20 4 20 8 22 8 22 6 30 6 30 14 28 14 28 16 32 16 32 4 20 4" class="clr-i-outline clr-i-outline-path-4" />\n            <rect x="11" y="11" width="6" height="6" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="19" y="11" width="6" height="6" class="clr-i-outline clr-i-outline-path-6" />\n            <rect x="11" y="19" width="6" height="6" class="clr-i-outline clr-i-outline-path-7" />\n            <rect x="19" y="19" width="6" height="6" class="clr-i-outline clr-i-outline-path-8" />\n            <polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <rect x="11" y="11" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <rect x="11" y="19" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />\n            <rect x="19" y="19" width="6" height="6" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />\n            <path d="M25,15.4H22.23A3.69,3.69,0,0,1,19,13.56l0-.1V17h6Z" class="clr-i-outline--alerted clr-i-outline-path-7--alerted" />\n            <polygon points="22.45 4 20 4 20 8 20.14 8 22.45 4" class="clr-i-outline--alerted clr-i-outline-path-8--alerted" />\n            <rect x="28" y="15.4" width="4" height="0.6" class="clr-i-outline--alerted clr-i-outline-path-9--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-10--alerted clr-i-alert" />\n            <polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <rect x="11" y="11" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <rect x="11" y="19" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-5--badged" />\n            <rect x="19" y="19" width="6" height="6" class="clr-i-outline--badged clr-i-outline-path-6--badged" />\n            <path d="M22,6h.5a7.49,7.49,0,0,1,.28-2H20V8h2Z" class="clr-i-outline--badged clr-i-outline-path-7--badged" />\n            <path d="M30,13.5V14H28v2h4V13.22A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-8--badged" />\n            <path d="M25,11.58a7.53,7.53,0,0,1-.58-.58H19v6h6Z" class="clr-i-outline--badged clr-i-outline-path-9--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-10--badged clr-i-badge" />\n        '),a.ClrShapeCertificate=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28H4V8H32l0,8.56a8.41,8.41,0,0,1,2,1.81V8A2,2,0,0,0,32,6Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="7" y="12" width="17" height="1.6" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline clr-i-outline-path-3" />\n            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline--alerted clr-i-outline-path-1--alerted" />\n            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline--alerted clr-i-outline-path-2--alerted" />\n            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted" />\n            <path d="M19,13.56A3.66,3.66,0,0,1,18.57,12H7v1.6H19.07Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted" />\n            <path d="M33.68,15.4H32v1.16a8.41,8.41,0,0,1,2,1.81v-3Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted" />\n            <path d="M4,28V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28Z" class="clr-i-outline--alerted clr-i-outline-path-6--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-outline--alerted clr-i-outline-path-7--alerted clr-i-alert" />\n            <rect x="7" y="12" width="17" height="1.6" class="clr-i-outline--badged clr-i-outline-path-1--badged" />\n            <rect x="7" y="16" width="11" height="1.6" class="clr-i-outline--badged clr-i-outline-path-2--badged" />\n            <rect x="7" y="23" width="10" height="1.6" class="clr-i-outline--badged clr-i-outline-path-3--badged" />\n            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-outline--badged clr-i-outline-path-4--badged" />\n            <path d="M32,13.22v3.34a8.41,8.41,0,0,1,2,1.81v-6A7.45,7.45,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-5--badged" />\n            <path d="M4,28V8H22.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14L20.41,28Z" class="clr-i-outline--badged clr-i-outline-path-6--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-outline--badged clr-i-outline-path-7--badged clr-i-badge" />\n            <path d="M19,30H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H32a2,2,0,0,1,2,2V18.37a8.34,8.34,0,0,0-13.49,9.79l-.93,1.14ZM7,12v1.6H24V12Zm0,5.6H18V16H7Zm0,7H17V23H7Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.83,23.59a6.37,6.37,0,1,0-10.77,4.59l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37A6.34,6.34,0,0,0,33.83,23.59Zm-10.74,0a4.37,4.37,0,1,1,4.37,4.31A4.35,4.35,0,0,1,23.1,23.59Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M33.83,23.59a6.37,6.37,0,1,0-10.77,4.59l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37A6.34,6.34,0,0,0,33.83,23.59Zm-10.74,0a4.37,4.37,0,1,1,4.37,4.31A4.35,4.35,0,0,1,23.1,23.59Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted" />\n            <path d="M33.68,15.4H29.25a8.36,8.36,0,0,1,4.75,3v-3Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted" />\n            <path d="M19.07,13.6H7V12H18.57A3.67,3.67,0,0,1,19,9.89L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14A8.34,8.34,0,0,1,25.66,15.4H22.23A3.68,3.68,0,0,1,19.07,13.6ZM17,24.6H7V23H17Zm1-7H7V16H18Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted" />\n            <path d="M26.85,1.14,21.13,11A1.28,1.28,0,0,0,22.23,13H33.68A1.28,1.28,0,0,0,34.78,11L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z"  class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert" />\n            <path d="M27.46,17.23a6.36,6.36,0,0,0-4.4,11l-1.94,2.37.9,3.61,3.66-4.46a6.26,6.26,0,0,0,3.55,0l3.66,4.46.9-3.61-1.94-2.37a6.36,6.36,0,0,0-4.4-11Zm0,10.68a4.31,4.31,0,1,1,4.37-4.31A4.35,4.35,0,0,1,27.46,27.91Z" class="clr-i-solid--badged clr-i-solid-path-1--badged" />\n            <path d="M30,13.5A7.5,7.5,0,0,1,22.5,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H19l.57-.7.93-1.14A8.34,8.34,0,0,1,34,18.37v-6A7.46,7.46,0,0,1,30,13.5ZM17,24.6H7V23H17Zm1-7H7V16H18Zm6-4H7V12H24Z" class="clr-i-solid--badged clr-i-solid-path-2--badged" />\n            <circle cx="30" cy="6" r="5"  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" />\n        '),a.ClrShapeArchive=c.clrIconSVG('<path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M14,18H6V14h4a3,3,0,0,1-.68-1.87s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V20H16Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M30.5,12H26.66s0,.09,0,.13A3,3,0,0,1,26,14h4v4H22l-2,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M19.41,20.6,18,22l-1.41-1.4L16,20H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20ZM22,24a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30.5,12H26.66s0,.09,0,.13a3,3,0,0,1-.88,2.12L22,18H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M10.2,14.25a3,3,0,0,1-.88-2.12s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V18H14Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z" class="clr-i-solid clr-i-solid-path-4" />\n        '),a.ClrShapeUnarchive=c.clrIconSVG('<path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M15,18H6V14h9V12H5.5A1.5,1.5,0,0,0,4,13.5V20H15.78A3,3,0,0,1,15,18Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M30.5,12H21v2h9v4H21a3,3,0,0,1-.78,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M18,21a3,3,0,0,1-2.22-1H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20.21A3,3,0,0,1,18,21Zm4,3a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M15,12H5.5A1.5,1.5,0,0,0,4,13.5V18H15Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M30.5,12H21v6H32V13.5A1.5,1.5,0,0,0,30.5,12Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z" class="clr-i-solid clr-i-solid-path-4" />\n        '),a.ClrShapeConnect=c.clrIconSVG('<path d="M34,17H28.23A6.25,6.25,0,0,0,22,12H14.15a6.25,6.25,0,0,0-6.21,5H2v2H7.93a6.22,6.22,0,0,0,6.22,5H22a6.22,6.22,0,0,0,6.22-5H34ZM17.08,22H14.15a4.17,4.17,0,0,1-4.31-4,4.17,4.17,0,0,1,4.31-4h2.94ZM22,22H19V14h3a4.17,4.17,0,0,1,4.31,4A4.17,4.17,0,0,1,22,22Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M17,12H14.15a6.25,6.25,0,0,0-6.21,5H2v2H7.93a6.22,6.22,0,0,0,6.22,5H17Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M28.23,17A6.25,6.25,0,0,0,22,12H19V24h3a6.22,6.22,0,0,0,6.22-5H34V17Z" class="clr-i-solid clr-i-solid-path-2" />\n        '),a.ClrShapeDisconnect=c.clrIconSVG('<path d="M12.17,6A6.21,6.21,0,0,0,6,11H2.13v2H6a6.23,6.23,0,0,0,6.21,5H17V6ZM15.1,16H12.17a4.2,4.2,0,0,1-4.31-4,4.17,4.17,0,0,1,4.31-4H15.1Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M33.92,23H30.14a6.25,6.25,0,0,0-6.21-5H19v2H14a1,1,0,1,0,0,2h5v4H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v2h4.94a6.23,6.23,0,0,0,6.22-5h3.76Zm-10,5H21V20h2.94a4.17,4.17,0,0,1,4.31,4A4.17,4.17,0,0,1,23.94,28Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M12,6a6.21,6.21,0,0,0-6.21,5H2v2H5.83A6.23,6.23,0,0,0,12,18H17V6Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M33.79,23H30.14a6.25,6.25,0,0,0-6.21-5H19v2H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v4H14a1,1,0,0,0-1,1,1,1,0,0,0,1,1h5v2h4.94a6.23,6.23,0,0,0,6.22-5h3.64Z" class="clr-i-solid clr-i-solid-path-2" />\n        '),a.ClrShapeLink=c.clrIconSVG('<path d="M17.6,24.32l-2.46,2.44a4,4,0,0,1-5.62,0,3.92,3.92,0,0,1,0-5.55l4.69-4.65a4,4,0,0,1,5.62,0,3.86,3.86,0,0,1,1,1.71A2,2,0,0,0,21.1,18l1.29-1.28a5.89,5.89,0,0,0-1.15-1.62,6,6,0,0,0-8.44,0L8.1,19.79a5.91,5.91,0,0,0,0,8.39,6,6,0,0,0,8.44,0l3.65-3.62c-.17,0-.33,0-.5,0A8,8,0,0,1,17.6,24.32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M28.61,7.82a6,6,0,0,0-8.44,0l-3.65,3.62c.17,0,.33,0,.49,0h0a8,8,0,0,1,2.1.28l2.46-2.44a4,4,0,0,1,5.62,0,3.92,3.92,0,0,1,0,5.55l-4.69,4.65a4,4,0,0,1-5.62,0,3.86,3.86,0,0,1-1-1.71,2,2,0,0,0-.28.23l-1.29,1.28a5.89,5.89,0,0,0,1.15,1.62,6,6,0,0,0,8.44,0l4.69-4.65a5.92,5.92,0,0,0,0-8.39Z" class="clr-i-outline clr-i-outline-path-2" />\n        '),a.ClrShapeUnlink=c.clrIconSVG('<path d="M5,5,3.59,6.41l9,9L8.1,19.79a5.91,5.91,0,0,0,0,8.39,6,6,0,0,0,8.44,0L21,23.78l8.63,8.63L31,31ZM15.13,26.76a4,4,0,0,1-5.62,0,3.92,3.92,0,0,1,0-5.55L14,16.79l5.58,5.58Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M21.53,9.22a4,4,0,0,1,5.62,0,3.92,3.92,0,0,1,0,5.55l-4.79,4.76L23.78,21l4.79-4.76a5.92,5.92,0,0,0,0-8.39,6,6,0,0,0-8.44,0l-4.76,4.74L16.78,14Z" class="clr-i-outline clr-i-outline-path-2" />\n        '),a.ClrShapeCloudNetwork=c.clrIconSVG('<path d="M30.71,15.18v-1A11.28,11.28,0,0,0,19.56,2.83h-.11a11.28,11.28,0,0,0-11,8.93,7.47,7.47,0,0,0,0,14.94H29.13a5.86,5.86,0,0,0,1.58-11.52ZM29.13,24.7H8.46a5.47,5.47,0,1,1,0-10.94h1.69l.11-.87a9.27,9.27,0,0,1,18.45,1.3v1.28c0,.09,0,.18,0,.27l-.07,1.15.94.11a3.86,3.86,0,0,1-.43,7.71Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M29.58,31.18H18.85v-2.4h-2v2.4H6.08a1,1,0,0,0,0,2h23.5a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" />\n        '),a.ClrShapeCloudScale=c.clrIconSVG('<path d="M6.32,11.11H7.84L8,10.24A7.19,7.19,0,0,1,15.07,4h.07a7.15,7.15,0,0,1,4.71,1.83,11.1,11.1,0,0,1,3.09.64A9.18,9.18,0,0,0,15.16,2h-.09A9.2,9.2,0,0,0,6.13,9.11,6.15,6.15,0,0,0,2.33,19.95,8.09,8.09,0,0,1,3,17.71a4.12,4.12,0,0,1-.81-2.44A4.16,4.16,0,0,1,6.32,11.11Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M10.4,16.91h1.52L12,16a7.19,7.19,0,0,1,7.12-6.25h.07a7.17,7.17,0,0,1,5.7,2.92,11.05,11.05,0,0,1,2.72.77,9.2,9.2,0,0,0-8.4-5.69h-.09a9.2,9.2,0,0,0-8.94,7.12,6.15,6.15,0,0,0-3.64,11,8.11,8.11,0,0,1,.79-2,4.14,4.14,0,0,1,3-7Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M32.42,24.47v-.62a9.18,9.18,0,0,0-18.13-2.16A6.16,6.16,0,0,0,14.48,34H31a4.88,4.88,0,0,0,1.46-9.53ZM31,32H14.48a4.16,4.16,0,1,1,0-8.32H16l.11-.87a7.19,7.19,0,0,1,7.12-6.25h.07a7.21,7.21,0,0,1,7.12,7.25v1c0,.07,0,.13,0,.2l-.07,1.11.94.11A2.88,2.88,0,0,1,31,32Z" class="clr-i-outline clr-i-outline-path-3" />\n        '),a.ClrShapeCloudTraffic=c.clrIconSVG('<path d="M26.54,20.82a.88.88,0,0,0-.88-.88H20.75l1.1-1.1A.88.88,0,0,0,20.6,17.6l-3.21,3.22L20.6,24a.88.88,0,1,0,1.25-1.24L20.76,21.7h4.9A.88.88,0,0,0,26.54,20.82Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M29.27,21.7a.88.88,0,1,0,0-1.76h-.58a.88.88,0,1,0,0,1.76Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M32.21,20h-.06a.85.85,0,0,0-.85.88.91.91,0,0,0,.91.88.88.88,0,1,0,0-1.76Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M32.59,11a.88.88,0,0,0-1.25,1.24l1.1,1.1H27.53a.88.88,0,1,0,0,1.76h4.9l-1.09,1.09a.88.88,0,0,0,1.25,1.24l3.21-3.22Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M24.5,15.07a.88.88,0,1,0,0-1.76h-.58a.88.88,0,1,0,0,1.76Z" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M21.9,14.27a.85.85,0,0,0-.85-.88H21a.88.88,0,1,0,0,1.76A.91.91,0,0,0,21.9,14.27Z" class="clr-i-outline clr-i-outline-path-6" />\n            <path d="M30.36,23.65c0,.13,0,.26,0,.39a3.77,3.77,0,0,1-3.62,3.89H7.28a5.32,5.32,0,0,1-5.13-5.48A5.32,5.32,0,0,1,7.28,17H8.91L9,16.12a8.92,8.92,0,0,1,8.62-8h.08a8.49,8.49,0,0,1,6.56,3.29h2.37a10.55,10.55,0,0,0-8.91-5.25h-.11A10.82,10.82,0,0,0,7.22,15a7.28,7.28,0,0,0-7,7.43,7.27,7.27,0,0,0,7.08,7.43H26.77A5.72,5.72,0,0,0,32.35,24a3.77,3.77,0,0,0,0-.39Z" class="clr-i-outline clr-i-outline-path-7" />\n        '),a.ClrShapeDeploy=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M11.54,10.73l-9,5.17a1,1,0,0,0-.5.87v11a1,1,0,0,0,.5.87l9,5.15a1,1,0,0,0,1,0l9-5.15a1,1,0,0,0,.5-.87v-11a1,1,0,0,0-.5-.87l-9-5.17A1,1,0,0,0,11.54,10.73ZM11,31.08l-7-4V18.44l7,4ZM12,21,4.81,16.87,12,12.78l7.21,4.12Zm8,6.09-7,4V22.44l7-4Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M12.46,10.73a1,1,0,0,0-1,0l-8.68,5L12,21l9.19-5.26Z"/>\n            <path class="clr-i-solid clr-i-solid-path-3" d="M2,27.73a1,1,0,0,0,.5.87L11,33.46v-11L2,17.28Z"/>\n            <path class="clr-i-solid clr-i-solid-path-4" d="M13,33.46l8.5-4.86a1,1,0,0,0,.5-.87V17.29l-9,5.15Z"/>\n        '),a.ClrShapeHelix=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M8.88,13.07a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,1,1,1,1.52L9.37,12.92A.9.9,0,0,1,8.88,13.07Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M13.25,15.11a.9.9,0,0,1-.49-1.66L18,10.08a.9.9,0,1,1,1,1.52L13.74,15A.9.9,0,0,1,13.25,15.11Z"/>\n            <path class="clr-i-outline clr-i-outline-path-3" d="M19.72,30.23a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,0,1,1,1.52L20.2,30.09A.9.9,0,0,1,19.72,30.23Z"/>\n            <path class="clr-i-outline clr-i-outline-path-4" d="M18.92,25.94a.9.9,0,0,1-.49-1.66l5.25-3.37a.9.9,0,1,1,1,1.51L19.4,25.8A.89.89,0,0,1,18.92,25.94Z"/>\n            <path class="clr-i-outline clr-i-outline-path-5" d="M21.56,5.69a3.59,3.59,0,0,1,.15,3.53L18.83,15h2.25l2.43-4.87a5.61,5.61,0,0,0-5-8.14H13.26l-1,2h6.22A3.61,3.61,0,0,1,21.56,5.69Z"/>\n            <path class="clr-i-outline clr-i-outline-path-1" d="M32.91,20.78A5.53,5.53,0,0,0,27.66,17H9.31a3.54,3.54,0,0,1-3.56-3.67,3.61,3.61,0,0,1,.42-1.54l4.26-8.49a1,1,0,1,0-1.79-.9L4.4,10.84A5.67,5.67,0,0,0,4,15.22,5.53,5.53,0,0,0,9.28,19h7.6l-3.44,6.87a5.64,5.64,0,0,0,1.5,6.92A5.38,5.38,0,0,0,18.41,34h5.25l1-2H18.43a3.58,3.58,0,0,1-3.22-5.21L19.11,19h8.54a3.42,3.42,0,0,1,2.15.71,3.57,3.57,0,0,1,1,4.43l-4.12,8.22a1,1,0,1,0,1.79.9l4.06-8.1A5.67,5.67,0,0,0,32.91,20.78Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M32.16,19.63A5.55,5.55,0,0,0,27.42,17H10.06a4.36,4.36,0,0,1-3.67-2,4.07,4.07,0,0,1-.19-4.13l3.62-7,1.42,1.63-2.74,5.3,8.84-5.66a.91.91,0,0,1,1,1.53L7.84,13.38a2.13,2.13,0,0,0,.24.52,2.28,2.28,0,0,0,1.65,1L18.11,9.5a.91.91,0,0,1,1,1.52L13,14.94H20.8l2.41-4.82a5.6,5.6,0,0,0-5-8.12H9a1,1,0,0,0-.9.56L3.88,10.89a5.6,5.6,0,0,0,5,8.12h7.65l-3.43,6.87a5.6,5.6,0,0,0,5,8.12h9.28a1,1,0,0,0,.93-.65l4.14-8.24A5.58,5.58,0,0,0,32.16,19.63ZM17.75,25.57A.91.91,0,0,1,18,24.31l6-3.88A.91.91,0,1,1,25,22l-6,3.88a.91.91,0,0,1-1.26-.27ZM29,24.34l-9,5.78a.91.91,0,1,1-1-1.53l9-5.78a.91.91,0,1,1,1,1.53Z"/>\n        '),a.ClrShapeFlask=c.clrIconSVG('<path d="M31.43,27.28,23,14.84V4h1a1,1,0,0,0,0-2H12a1,1,0,0,0,0,2h1V14.84L4.51,27.36A4.29,4.29,0,0,0,5,32.8,4.38,4.38,0,0,0,8.15,34H28a4.24,4.24,0,0,0,3.42-6.72ZM29.85,31a2.62,2.62,0,0,1-2,1H8a2.2,2.2,0,0,1-2.06-1.41,2.68,2.68,0,0,1,.29-2.17l3-4.44,14,0-1.31-2H10.57L15,15.46V4h6V15.46l8.84,13.05A2.23,2.23,0,0,1,29.85,31Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M31.49,27.4,23,14.94V4h1a1,1,0,0,0,0-2H12.08a1,1,0,0,0,0,2H13V14.94L4.58,27.31a4.31,4.31,0,0,0-.78,3A4.23,4.23,0,0,0,8,34H27.86A4.36,4.36,0,0,0,31,32.8,4.23,4.23,0,0,0,31.49,27.4ZM15,15.49V4h6V15.49L26.15,23H9.85Z" class="clr-i-solid clr-i-solid-path-1" />\n        '),a.ClrShapeAdministrator=c.clrIconSVG('<path d="M14.68,14.81a6.76,6.76,0,1,1,6.76-6.75A6.77,6.77,0,0,1,14.68,14.81Zm0-11.51a4.76,4.76,0,1,0,4.76,4.76A4.76,4.76,0,0,0,14.68,3.3Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M16.42,31.68A2.14,2.14,0,0,1,15.8,30H4V24.22a14.81,14.81,0,0,1,11.09-4.68l.72,0a2.2,2.2,0,0,1,.62-1.85l.12-.11c-.47,0-1-.06-1.46-.06A16.47,16.47,0,0,0,2.2,23.26a1,1,0,0,0-.2.6V30a2,2,0,0,0,2,2H16.7Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M26.87,16.29a.37.37,0,0,1,.15,0,.42.42,0,0,0-.15,0Z"  class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M33.68,23.32l-2-.61a7.21,7.21,0,0,0-.58-1.41l1-1.86A.38.38,0,0,0,32,19l-1.45-1.45a.36.36,0,0,0-.44-.07l-1.84,1a7.15,7.15,0,0,0-1.43-.61l-.61-2a.36.36,0,0,0-.36-.24H23.82a.36.36,0,0,0-.35.26l-.61,2a7,7,0,0,0-1.44.6l-1.82-1a.35.35,0,0,0-.43.07L17.69,19a.38.38,0,0,0-.06.44l1,1.82A6.77,6.77,0,0,0,18,22.69l-2,.6a.36.36,0,0,0-.26.35v2.05A.35.35,0,0,0,16,26l2,.61a7,7,0,0,0,.6,1.41l-1,1.91a.36.36,0,0,0,.06.43l1.45,1.45a.38.38,0,0,0,.44.07l1.87-1a7.09,7.09,0,0,0,1.4.57l.6,2a.38.38,0,0,0,.35.26h2.05a.37.37,0,0,0,.35-.26l.61-2.05a6.92,6.92,0,0,0,1.38-.57l1.89,1a.36.36,0,0,0,.43-.07L32,30.4A.35.35,0,0,0,32,30l-1-1.88a7,7,0,0,0,.58-1.39l2-.61a.36.36,0,0,0,.26-.35V23.67A.36.36,0,0,0,33.68,23.32ZM24.85,28a3.34,3.34,0,1,1,3.33-3.33A3.34,3.34,0,0,1,24.85,28Z" class="clr-i-outline clr-i-outline-path-4" />\n            <circle cx="14.67" cy="8.3" r="6" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M16.44,31.82a2.15,2.15,0,0,1-.38-2.55l.53-1-1.09-.33A2.14,2.14,0,0,1,14,25.84V23.79a2.16,2.16,0,0,1,1.53-2.07l1.09-.33-.52-1a2.17,2.17,0,0,1,.35-2.52,18.92,18.92,0,0,0-2.32-.16A15.58,15.58,0,0,0,2,23.07v7.75a1,1,0,0,0,1,1H16.44Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M33.7,23.46l-2-.6a6.73,6.73,0,0,0-.58-1.42l1-1.86a.35.35,0,0,0-.07-.43l-1.45-1.46a.38.38,0,0,0-.43-.07l-1.85,1a7.74,7.74,0,0,0-1.43-.6l-.61-2a.38.38,0,0,0-.36-.25H23.84a.38.38,0,0,0-.35.26l-.6,2a6.85,6.85,0,0,0-1.45.61l-1.81-1a.38.38,0,0,0-.44.06l-1.47,1.44a.37.37,0,0,0-.07.44l1,1.82A7.24,7.24,0,0,0,18,22.83l-2,.61a.36.36,0,0,0-.26.35v2.05a.36.36,0,0,0,.26.35l2,.61a7.29,7.29,0,0,0,.6,1.41l-1,1.9a.37.37,0,0,0,.07.44L19.16,32a.38.38,0,0,0,.44.06l1.87-1a7.09,7.09,0,0,0,1.4.57l.6,2.05a.38.38,0,0,0,.36.26h2.05a.38.38,0,0,0,.35-.26l.6-2.05a6.68,6.68,0,0,0,1.38-.57l1.89,1a.38.38,0,0,0,.44-.06L32,30.55a.38.38,0,0,0,.06-.44l-1-1.88a6.92,6.92,0,0,0,.57-1.38l2-.61a.39.39,0,0,0,.27-.35V23.82A.4.4,0,0,0,33.7,23.46Zm-8.83,4.72a3.34,3.34,0,1,1,3.33-3.34A3.34,3.34,0,0,1,24.87,28.18Z" class="clr-i-solid clr-i-solid-path-3" />\n        '),a.ClrShapeHardDrive=c.clrIconSVG('<path d="M34,8a2,2,0,0,0-2-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2ZM32,28H4V8H32V28Z" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="6.21" cy="10.25" r="1.25" class="clr-i-outline clr-i-outline-path-2" />\n            <circle cx="29.81" cy="10.25" r="1.25" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="6.21" cy="25.42" r="1.25" class="clr-i-outline clr-i-outline-path-4" />\n            <circle cx="29.81" cy="25.42" r="1.25" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M11.88,18.08a3.59,3.59,0,1,0,3.59-3.59,3.84,3.84,0,0,0-.91.13L15,16.16a2.08,2.08,0,0,1,.5-.07,2,2,0,1,1-2,2,1.64,1.64,0,0,1,.08-.5L12,17.16A3.53,3.53,0,0,0,11.88,18.08Z" class="clr-i-outline clr-i-outline-path-6" />\n            <path d="M15.47,25.73a7.66,7.66,0,0,1-7.65-7.65,7.55,7.55,0,0,1,.27-2L6.54,15.7a9.24,9.24,0,0,0,17.8,4.95H22.66A7.64,7.64,0,0,1,15.47,25.73Z" class="clr-i-outline clr-i-outline-path-7" />\n            <path d="M28.22,17.83a.8.8,0,0,0-.8-.8H24.66a9.26,9.26,0,0,0-9.19-8.2,9.36,9.36,0,0,0-2.38.32l.42,1.54a7.86,7.86,0,0,1,2-.26A7.66,7.66,0,0,1,23,17H20.92a.8.8,0,0,0,0,1.6h6.5A.8.8,0,0,0,28.22,17.83Z" class="clr-i-outline clr-i-outline-path-8" />\n            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM12,17.16l1.54.42a1.64,1.64,0,0,0-.08.5,2,2,0,1,0,2-2,2.08,2.08,0,0,0-.5.07l-.41-1.54a3.84,3.84,0,0,1,.91-.13,3.59,3.59,0,1,1-3.59,3.59A3.53,3.53,0,0,1,12,17.16ZM5.31,8A1.25,1.25,0,1,1,4.06,9.25,1.25,1.25,0,0,1,5.31,8Zm0,20.06a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,5.31,28.06Zm10.16-.73A9.22,9.22,0,0,1,6.54,15.7l1.55.41a7.55,7.55,0,0,0-.27,2,7.64,7.64,0,0,0,14.84,2.57h1.68A9.25,9.25,0,0,1,15.47,27.33Zm12-8.7h-6.5a.8.8,0,0,1,0-1.6H23a7.66,7.66,0,0,0-7.57-6.6,7.86,7.86,0,0,0-2,.26l-.42-1.54a9.36,9.36,0,0,1,2.38-.32A9.26,9.26,0,0,1,24.66,17h2.76a.8.8,0,0,1,0,1.6Zm3.39,9.43a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.81,28.06Zm0-17.56a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.81,10.5Z" class="clr-i-solid clr-i-solid-path-1" />\n        '),a.ClrShapeHardDriveDisks=c.clrIconSVG('<path d="M26,5.74A1.74,1.74,0,0,0,24.26,4H3.74A1.74,1.74,0,0,0,2,5.74V20.26A1.74,1.74,0,0,0,3.74,22H4V6H26Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M30,9.74A1.74,1.74,0,0,0,28.26,8H7.74A1.74,1.74,0,0,0,6,9.74V24.26A1.74,1.74,0,0,0,7.74,26H8V10H30Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M32.26,12H11.74A1.74,1.74,0,0,0,10,13.74V28.26A1.74,1.74,0,0,0,11.74,30H32.26A1.74,1.74,0,0,0,34,28.26V13.74A1.74,1.74,0,0,0,32.26,12ZM32,28H12V14H32Z" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M19.94,23.68a2.64,2.64,0,1,0-2.7-2.63A2.67,2.67,0,0,0,19.94,23.68Zm0-3.87a1.24,1.24,0,1,1-1.29,1.24A1.27,1.27,0,0,1,19.94,19.81Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M19.94,16.22a4.93,4.93,0,0,1,4.95,4.35H23.71V22h4.41a.7.7,0,0,0,0-1.4H26.31a6.33,6.33,0,0,0-6.37-5.75,6.58,6.58,0,0,0-1.48.17l.35,1.37A4.73,4.73,0,0,1,19.94,16.22Z" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M19.94,27.27a6.42,6.42,0,0,0,5.67-3.35H23.93a5,5,0,0,1-4,1.95,4.91,4.91,0,0,1-5-4.82,5.16,5.16,0,0,1,.08-.79L13.63,20a7,7,0,0,0-.09,1A6.32,6.32,0,0,0,19.94,27.27Z" class="clr-i-outline clr-i-outline-path-6" />\n            <path d="M26,5.74A1.74,1.74,0,0,0,24.26,4H3.74A1.74,1.74,0,0,0,2,5.74V20.26A1.74,1.74,0,0,0,3.74,22H4V6H26Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M30,9.74A1.74,1.74,0,0,0,28.26,8H7.74A1.74,1.74,0,0,0,6,9.74V24.26A1.74,1.74,0,0,0,7.74,26H8V10H30Z" class="clr-i-solid clr-i-solid-path-2" />\n            <path d="M19.62,22.6A1.55,1.55,0,1,0,18,21.05,1.6,1.6,0,0,0,19.62,22.6Z" class="clr-i-solid clr-i-solid-path-3" />\n            <path d="M32.26,12H11.74A1.74,1.74,0,0,0,10,13.74V28.26A1.74,1.74,0,0,0,11.74,30H32.26A1.74,1.74,0,0,0,34,28.26V13.74A1.74,1.74,0,0,0,32.26,12ZM19.62,17.74a3.31,3.31,0,1,1-3.38,3.31A3.35,3.35,0,0,1,19.62,17.74Zm0,11.13a7.94,7.94,0,0,1-8-7.82,7.83,7.83,0,0,1,.11-1.29l1.75.3a5.36,5.36,0,0,0-.11,1,6.18,6.18,0,0,0,6.28,6.06,6.35,6.35,0,0,0,5-2.46h2.1A8.06,8.06,0,0,1,19.62,28.87ZM29.89,22.2H24.36V20.44h1.48A6.19,6.19,0,0,0,19.62,15a6.48,6.48,0,0,0-1.41.16l-.45-1.7a8.16,8.16,0,0,1,1.86-.22,8,8,0,0,1,8,7.21h2.26a.88.88,0,0,1,0,1.76Z" class="clr-i-solid clr-i-solid-path-4" />\n        '),a.ClrShapeNVMe=c.clrIconSVG('<path d="M27,22V14a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H25A2,2,0,0,0,27,22ZM11,14H25v8H11Z" class="clr-i-outline clr-i-outline-path-1" />\n            <rect x="19" y="6" width="4" height="2" class="clr-i-outline clr-i-outline-path-2" />\n            <rect x="25.01" y="6" width="1.97" height="2" class="clr-i-outline clr-i-outline-path-3" />\n            <path d="M5.8,8H16.87V6h-11L7.78,4.08a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L2,7,6.37,11.4a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" class="clr-i-outline clr-i-outline-path-4" />\n            <path d="M29.61,24.68a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L30.1,28H19v2H30.2l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29L34,29.05Z" class="clr-i-outline clr-i-outline-path-5" />\n            <rect x="13" y="28" width="4" height="2" class="clr-i-outline clr-i-outline-path-6" />\n            <rect x="9" y="28" width="1.97" height="2" class="clr-i-outline clr-i-outline-path-7" />\n        '),a.ClrShapeSSD=c.clrIconSVG('<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z" class="clr-i-outline clr-i-outline-path-1" />\n            <circle cx="6.21" cy="10.25" r="1.25" class="clr-i-outline clr-i-outline-path-2" />\n            <circle cx="29.81" cy="10.25" r="1.25" class="clr-i-outline clr-i-outline-path-3" />\n            <circle cx="6.21" cy="25.42" r="1.25" class="clr-i-outline clr-i-outline-path-4" />\n            <circle cx="29.81" cy="25.42" r="1.25" class="clr-i-outline clr-i-outline-path-5" />\n            <path d="M10,18.62c1.32.31,1.91.54,1.91,1.22s-.53,1.09-1.55,1.09a4,4,0,0,1-2.71-1.11l-.86,1.06a5,5,0,0,0,3.52,1.34c2,0,3.1-1,3.1-2.52s-1.15-2.05-2.87-2.44c-1.31-.3-1.92-.54-1.92-1.21A1.25,1.25,0,0,1,10,15a3.68,3.68,0,0,1,2.37,1l.81-1.1A4.58,4.58,0,0,0,10,13.69c-1.74,0-3,1.05-3,2.49S8.26,18.22,10,18.62Z" class="clr-i-outline clr-i-outline-path-6" />\n            <path d="M17.83,20.93a4,4,0,0,1-2.71-1.11l-.86,1.06a5,5,0,0,0,3.52,1.34c2,0,3.1-1,3.1-2.52S19.73,17.65,18,17.26c-1.31-.3-1.92-.54-1.92-1.21A1.25,1.25,0,0,1,17.48,15a3.68,3.68,0,0,1,2.37,1l.81-1.1a4.56,4.56,0,0,0-3.12-1.15c-1.73,0-3,1.05-3,2.49s1.19,2,2.89,2.44c1.32.31,1.91.54,1.91,1.22S18.85,20.93,17.83,20.93Z" class="clr-i-outline clr-i-outline-path-7" />\n            <path d="M29.9,18c0-2.41-1.92-4.12-4.64-4.12h-2.9v8.24h2.9C28,22.08,29.9,20.37,29.9,18Zm-6-2.76h1.56a2.77,2.77,0,1,1,0,5.53H23.86Z" class="clr-i-outline clr-i-outline-path-8" />\n            <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM5.21,8A1.25,1.25,0,1,1,4,9.25,1.25,1.25,0,0,1,5.21,8Zm0,20a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,5.21,28Zm5.06-5.78a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.22-2.49,3-2.49a4.58,4.58,0,0,1,3.12,1.15l-.81,1.1A3.68,3.68,0,0,0,10,15a1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S12.24,22.22,10.27,22.22Zm7.51,0a5,5,0,0,1-3.52-1.34l.86-1.06a4,4,0,0,0,2.71,1.11c1,0,1.55-.5,1.55-1.09s-.59-.91-1.91-1.22c-1.7-.4-2.89-.89-2.89-2.44s1.23-2.49,3-2.49a4.56,4.56,0,0,1,3.12,1.15l-.81,1.1a3.68,3.68,0,0,0-2.37-1,1.25,1.25,0,0,0-1.39,1.08c0,.67.61.91,1.92,1.21,1.72.39,2.87.94,2.87,2.44S19.75,22.22,17.78,22.22Zm4.58-.14V13.84h2.9c2.72,0,4.64,1.71,4.64,4.12S28,22.08,25.26,22.08ZM30.69,28a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,28Zm0-17.5a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,30.69,10.5Z" class="clr-i-solid clr-i-solid-path-1" />\n            <path d="M23.86,15.2h1.56a2.77,2.77,0,1,1,0,5.53H23.86Z" class="clr-i-solid clr-i-solid-path-2" />\n        '),a.ClrShapeBluetooth=c.clrIconSVG('<path d="M26.64,25.27,19,17.53,19,3,25.21,9.4l-5.65,5.79L21,16.62l5.68-5.82a2,2,0,0,0,0-2.78L20.48,1.7A2.08,2.08,0,0,0,18.85,1,2,2,0,0,0,17,3V15.38L10.05,8.27A1,1,0,0,0,8.62,9.66L16.79,18,9.06,26a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.72-.31L17,20.68V33a2.07,2.07,0,0,0,.71,1.62A2,2,0,0,0,19,35a1.94,1.94,0,0,0,1.42-.6l6.23-6.38A2,2,0,0,0,26.64,25.27ZM19,33.05V20.29l6.21,6.36Z" class="clr-i-outline clr-i-outline-path-1" />\n  <path d="M26.52,24.52l-5.65-5.83-1.46-1.5v-12L23.79,9.7l-3.6,3.71,2.24,2.29,4.09-4.22a2.54,2.54,0,0,0,0-3.56L20.57,1.78A2.54,2.54,0,0,0,16.2,3.55V13.86l-5.53-5.7a1.6,1.6,0,1,0-2.3,2.23L15.75,18l-7,7.19a1.6,1.6,0,0,0,0,2.26,1.63,1.63,0,0,0,1.12.45,1.58,1.58,0,0,0,1.15-.49l5.11-5.27V32.45a2.53,2.53,0,0,0,1.59,2.36,2.44,2.44,0,0,0,.95.19,2.56,2.56,0,0,0,1.83-.77l5.95-6.15A2.54,2.54,0,0,0,26.52,24.52ZM19.4,30.83V21.77l4.39,4.53Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeBluetoothOff=c.clrIconSVG('<path d="M19,3,25.22,9.4l-5.66,5.8L21,16.63l5.68-5.83a2,2,0,0,0,0-2.78L20.48,1.7A2,2,0,0,0,18.85,1,2,2,0,0,0,17,3v11.4l2,2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M4.77,5,3.36,6.42,15.89,19,9.06,26a1,1,0,0,0,.71,1.7,1,1,0,0,0,.72-.31L17,20.68V32.94a2.08,2.08,0,0,0,.71,1.63A2,2,0,0,0,19,35a2,2,0,0,0,1.42-.6l5.41-5.54,3.54,3.53L30.77,31ZM19,33.05v-11l5.41,5.41Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M19.31,5.17,23.7,9.7l-3.59,3.71,2.24,2.29,4.09-4.22a2.56,2.56,0,0,0,0-3.56l-6-6.14a2.51,2.51,0,0,0-2.77-.59,2.54,2.54,0,0,0-1.6,2.36v10l3.21,3.21Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M4.5,5,3.09,6.42,15.17,18.51,8.7,25.19A1.6,1.6,0,0,0,9.85,27.9,1.57,1.57,0,0,0,11,27.41l5.11-5.27V32.45a2.54,2.54,0,0,0,1.6,2.36,2.44,2.44,0,0,0,.95.19,2.55,2.55,0,0,0,1.82-.77l5.12-5.29,3.49,3.48L30.5,31ZM19.81,30.83V22.65l4,4Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeProcessOnVM=c.clrIconSVG('<path d="M33.49,26.28a1,1,0,0,0-1.2-.7l-2.49.67a14.23,14.23,0,0,0,2.4-6.75A14.48,14.48,0,0,0,27.37,7.35,1,1,0,0,0,26,7.44a1,1,0,0,0,.09,1.41,12.45,12.45,0,0,1,4.16,10.46,12.19,12.19,0,0,1-2,5.74L28,22.54a1,1,0,1,0-1.95.16l.5,6.44,6.25-1.66A1,1,0,0,0,33.49,26.28Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M4.31,17.08a1.06,1.06,0,0,0,.44.16,1,1,0,0,0,1.12-.85A12.21,12.21,0,0,1,18.69,5.84L16.45,7.37a1,1,0,0,0,.47,1.79A1,1,0,0,0,17.56,9l5.33-3.66L18.33.76a1,1,0,1,0-1.39,1.38l1.7,1.7A14.2,14.2,0,0,0,3.89,16.12,1,1,0,0,0,4.31,17.08Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M21.73,29.93a12,12,0,0,1-4.84.51,12.3,12.3,0,0,1-9.57-6.3l2.49.93a1,1,0,0,0,.69-1.84l-4.59-1.7h0L4.44,21,3.33,27.35a1,1,0,0,0,.79,1.13l.17,0a1,1,0,0,0,1-.81l.42-2.4a14.3,14.3,0,0,0,11,7.14,13.91,13.91,0,0,0,5.63-.6,1,1,0,0,0-.6-1.9Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M22,13H14a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V14A1,1,0,0,0,22,13Zm-1,8H15V15h6Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeAssignUser=c.clrIconSVG('<path d="M18,17a7.46,7.46,0,1,0-7.45-7.46A7.46,7.46,0,0,0,18,17ZM18,4.07a5.46,5.46,0,1,1-5.45,5.45A5.46,5.46,0,0,1,18,4.07Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6,31.89V25.77a16.13,16.13,0,0,1,12-5,16.61,16.61,0,0,1,8.71,2.33l1.35-1.51A18.53,18.53,0,0,0,18,18.74,17.7,17.7,0,0,0,4.21,24.8a1,1,0,0,0-.21.6v6.49A2.06,2.06,0,0,0,6,34H18.39l-1.9-2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M30,31.89,30,32H26.85l-1.8,2H30a2.06,2.06,0,0,0,2-2.07V26.2l-2,2.23Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M34.76,18.62a1,1,0,0,0-1.41.08l-11.62,13-5.2-5.59A1,1,0,0,0,15.12,26a1,1,0,0,0-.06,1.42l6.69,7.2L34.84,20A1,1,0,0,0,34.76,18.62Z" class="clr-i-outline clr-i-outline-path-4" /><circle cx="17.99" cy="10.36" r="6.81" class="clr-i-solid clr-i-solid-path-1" /><path d="M12,26.65a2.8,2.8,0,0,1,4.85-1.8L20.71,29l6.84-7.63A16.81,16.81,0,0,0,18,18.55,16.13,16.13,0,0,0,5.5,24a1,1,0,0,0-.2.61V30a2,2,0,0,0,1.94,2h8.57l-3.07-3.3A2.81,2.81,0,0,1,12,26.65Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M28.76,32a2,2,0,0,0,1.94-2V26.24L25.57,32Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M33.77,18.62a1,1,0,0,0-1.42.08l-11.62,13-5.2-5.59A1,1,0,0,0,14.12,26a1,1,0,0,0,0,1.42l6.68,7.2L33.84,20A1,1,0,0,0,33.77,18.62Z" class="clr-i-solid clr-i-solid-path-4" />'),a.ClrShapeAtom=c.clrIconSVG('<path d="M18,14.05a4,4,0,1,0,4,4A4,4,0,0,0,18,14.05Zm0,6.44a2.42,2.42,0,1,1,2.42-2.42A2.42,2.42,0,0,1,18,20.49Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M24.23,11.71a39.14,39.14,0,0,0-4.57-3.92,22.86,22.86,0,0,1,3.48-1.72c.32-.12.62-.21.92-.3a2.28,2.28,0,0,0,3.81-.46,3.31,3.31,0,0,1,1.92.84c1.19,1.19,1.22,3.59.1,6.58.49.65.94,1.31,1.35,2,.17-.4.35-.79.49-1.18,1.47-3.85,1.28-7-.53-8.78a5.29,5.29,0,0,0-3.33-1.44,2.29,2.29,0,0,0-4.31.54c-.37.11-.74.22-1.13.37a25.79,25.79,0,0,0-4.57,2.35A26.21,26.21,0,0,0,13.28,4.2c-3.85-1.46-7-1.28-8.77.53C2.85,6.4,2.58,9.17,3.68,12.59a2.28,2.28,0,0,0,1.59,3.67c.32.61.67,1.22,1.06,1.82A25.54,25.54,0,0,0,4,22.66c-1.47,3.84-1.28,7,.53,8.77a5.63,5.63,0,0,0,4.12,1.51,13.34,13.34,0,0,0,4.65-1,26.21,26.21,0,0,0,4.58-2.35A25.79,25.79,0,0,0,22.43,32a14.16,14.16,0,0,0,3.65.9A2.3,2.3,0,0,0,30.46,32a4.55,4.55,0,0,0,.74-.57c1.81-1.81,2-4.93.53-8.77A32.68,32.68,0,0,0,24.23,11.71ZM12.57,30.09c-3,1.15-5.45,1.13-6.65-.08s-1.23-3.62-.07-6.64a22.77,22.77,0,0,1,1.71-3.48,40.19,40.19,0,0,0,3.92,4.56c.43.43.87.85,1.31,1.25q.9-.46,1.83-1.05c-.58-.52-1.16-1-1.72-1.61a34,34,0,0,1-5.74-7.47A2.29,2.29,0,0,0,5.5,11.69h0c-.75-2.5-.62-4.49.43-5.54a3.72,3.72,0,0,1,2.72-.92,11.4,11.4,0,0,1,3.93.84,22.86,22.86,0,0,1,3.48,1.72,39.14,39.14,0,0,0-4.57,3.92c-.44.44-.87.9-1.29,1.36a20.27,20.27,0,0,0,1,1.85c.54-.61,1.09-1.21,1.68-1.8a36.33,36.33,0,0,1,5-4.17,36.88,36.88,0,0,1,4.95,4.17,36.26,36.26,0,0,1,4.17,5,37,37,0,0,1-4.17,5A30.68,30.68,0,0,1,12.57,30.09ZM29.79,30l-.16.13a2.27,2.27,0,0,0-3.5.72,12.57,12.57,0,0,1-3-.77,22,22,0,0,1-3.48-1.72,39.14,39.14,0,0,0,4.57-3.92,38.26,38.26,0,0,0,3.92-4.56,22.88,22.88,0,0,1,1.72,3.48C31,26.39,31,28.81,29.79,30Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M24.23,11.71a39.14,39.14,0,0,0-4.57-3.92,22.86,22.86,0,0,1,3.48-1.72c.32-.12.62-.21.92-.3a2.28,2.28,0,0,0,3.81-.46,3.31,3.31,0,0,1,1.92.84c1.19,1.19,1.22,3.59.1,6.58.49.65.94,1.31,1.35,2,.17-.4.35-.79.49-1.18,1.47-3.85,1.28-7-.53-8.78a5.29,5.29,0,0,0-3.33-1.44,2.29,2.29,0,0,0-4.31.54c-.37.11-.74.22-1.13.37a25.79,25.79,0,0,0-4.57,2.35A26.21,26.21,0,0,0,13.28,4.2c-3.85-1.46-7-1.28-8.77.53C2.85,6.4,2.58,9.17,3.68,12.59a2.28,2.28,0,0,0,1.59,3.67c.32.61.67,1.22,1.06,1.82A25.54,25.54,0,0,0,4,22.66c-1.47,3.84-1.28,7,.53,8.77a5.63,5.63,0,0,0,4.12,1.51,13.34,13.34,0,0,0,4.65-1,26.21,26.21,0,0,0,4.58-2.35A25.79,25.79,0,0,0,22.43,32a14.16,14.16,0,0,0,3.65.9A2.3,2.3,0,0,0,30.46,32a4.55,4.55,0,0,0,.74-.57c1.81-1.81,2-4.93.53-8.77A32.68,32.68,0,0,0,24.23,11.71ZM12.57,30.09c-3,1.15-5.45,1.13-6.65-.08s-1.23-3.62-.07-6.64a22.77,22.77,0,0,1,1.71-3.48,40.19,40.19,0,0,0,3.92,4.56c.43.43.87.85,1.31,1.25q.9-.46,1.83-1.05c-.58-.52-1.16-1-1.72-1.61a34,34,0,0,1-5.74-7.47A2.29,2.29,0,0,0,5.5,11.69h0c-.75-2.5-.62-4.49.43-5.54a3.72,3.72,0,0,1,2.72-.92,11.4,11.4,0,0,1,3.93.84,22.86,22.86,0,0,1,3.48,1.72,39.14,39.14,0,0,0-4.57,3.92c-.44.44-.87.9-1.29,1.36a20.27,20.27,0,0,0,1,1.85c.54-.61,1.09-1.21,1.68-1.8a36.33,36.33,0,0,1,5-4.17,36.88,36.88,0,0,1,4.95,4.17,36.26,36.26,0,0,1,4.17,5,37,37,0,0,1-4.17,5A30.68,30.68,0,0,1,12.57,30.09ZM29.79,30l-.16.13a2.27,2.27,0,0,0-3.5.72,12.57,12.57,0,0,1-3-.77,22,22,0,0,1-3.48-1.72,39.14,39.14,0,0,0,4.57-3.92,38.26,38.26,0,0,0,3.92-4.56,22.88,22.88,0,0,1,1.72,3.48C31,26.39,31,28.81,29.79,30Z" class="clr-i-solid clr-i-solid-path-1" /><circle cx="17.99" cy="18.07" r="3.3" transform="translate(-2.66 3.11) rotate(-9.22)" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeBarCode=c.clrIconSVG('<path d="M5,7A1,1,0,0,0,4,8V30a1,1,0,0,0,2,0V8A1,1,0,0,0,5,7Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M9,7A1,1,0,0,0,8,8V26a1,1,0,0,0,2,0V8A1,1,0,0,0,9,7Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M13,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,13,7Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M17,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,17,7Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M21,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,21,7Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M25,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,25,7Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M29,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,29,7Z" class="clr-i-outline clr-i-outline-path-7" /><path d="M33,7a1,1,0,0,0-1,1V30a1,1,0,0,0,2,0V8A1,1,0,0,0,33,7Z" class="clr-i-outline clr-i-outline-path-8" />'),a.ClrShapeCdDvd=c.clrIconSVG('<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M22.33,18a4.46,4.46,0,1,0-4.45,4.46A4.46,4.46,0,0,0,22.33,18ZM17.88,20.9A2.86,2.86,0,1,1,20.73,18,2.86,2.86,0,0,1,17.88,20.9Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M17.88,7.43H18V5.84h-.12A12.21,12.21,0,0,0,5.68,17.75h1.6A10.61,10.61,0,0,1,17.88,7.43Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30.08,18H28.49v0A10.61,10.61,0,0,1,18.25,28.63v1.6A12.22,12.22,0,0,0,30.09,18S30.08,18,30.08,18Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M18,11V9.44h-.12a8.62,8.62,0,0,0-8.6,8.32h1.6a7,7,0,0,1,7-6.72Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M18.25,25v1.6A8.61,8.61,0,0,0,26.48,18v0h-1.6v0A7,7,0,0,1,18.25,25Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M18.17,1.92a16,16,0,1,0,16,16A16,16,0,0,0,18.17,1.92ZM26.23,18h1.54a9.61,9.61,0,0,1-9.6,9.53H18V26h.17A8.07,8.07,0,0,0,26.23,18ZM6.05,18H4.45v-.08A13.72,13.72,0,0,1,18,4.21v1.6A12.13,12.13,0,0,0,6.05,17.92Zm4.05,0H8.56v-.08A9.61,9.61,0,0,1,18,8.32V9.86a8.07,8.07,0,0,0-7.9,8.06Zm4.32-.08a3.75,3.75,0,1,1,3.75,3.75A3.75,3.75,0,0,1,14.42,17.92Zm3.75,13.71H18V30h.17A12.13,12.13,0,0,0,30.28,18h1.6A13.73,13.73,0,0,1,18.17,31.63Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeContainer=c.clrIconSVG('<path d="M32,30H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H32a2,2,0,0,1,2,2V28A2,2,0,0,1,32,30ZM4,8V28H32V8Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M9,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,9,25.3Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M14.92,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,14.92,25.3Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M21,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,21,25.3Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M27,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,27,25.3Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM9.63,24.23a.79.79,0,0,1-.81.77A.79.79,0,0,1,8,24.23V11.77A.79.79,0,0,1,8.82,11a.79.79,0,0,1,.81.77Zm6,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Zm6.21,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Zm6.12,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeContainerVolume=c.clrIconSVG('<path d="M8,17.58a32.35,32.35,0,0,0,6.3.92,4.13,4.13,0,0,1,.92-1.37,30.94,30.94,0,0,1-7.22-1Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6,28V8.19c.34-.76,4.31-2.11,11-2.11s10.67,1.35,11,2v.3c-.82.79-4.58,2.05-11.11,2.05A33.48,33.48,0,0,1,8,9.44v1.44a35.6,35.6,0,0,0,8.89,1c4.29,0,8.8-.58,11.11-1.82v5.07a5.3,5.3,0,0,1-1.81.88H30V8.12c0-3.19-8.17-4-13-4s-13,.85-13,4V28C4,30.63,9.39,31.68,14,32V30C9.13,29.66,6.28,28.62,6,28Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M8,24.28a31.3,31.3,0,0,0,6,.89v-1.4a28.93,28.93,0,0,1-6-.93Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M32,18H18a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V20A2,2,0,0,0,32,18ZM18,32V20H32V32Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M21,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,0,0,1.4,0V22.4A.7.7,0,0,0,21,21.7Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M25,21.82a.7.7,0,0,0-.7.7V30a.7.7,0,1,0,1.4,0V22.52A.7.7,0,0,0,25,21.82Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M29,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,1,0,1.4,0V22.4A.7.7,0,0,0,29,21.7Z" class="clr-i-outline clr-i-outline-path-7" /><path d="M32,18H18a2,2,0,0,0-2,2V32a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V20A2,2,0,0,0,32,18ZM18,32V20H32V32Z" class="clr-i-solid clr-i-solid-path-1" /><path d="M21,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,0,0,1.4,0V22.4A.7.7,0,0,0,21,21.7Z" class="clr-i-solid clr-i-solid-path-2" /><path d="M25,21.82a.7.7,0,0,0-.7.7V30a.7.7,0,1,0,1.4,0V22.52A.7.7,0,0,0,25,21.82Z" class="clr-i-solid clr-i-solid-path-3" /><path d="M29,21.7a.7.7,0,0,0-.7.7v7.49a.7.7,0,1,0,1.4,0V22.4A.7.7,0,0,0,29,21.7Z" class="clr-i-solid clr-i-solid-path-4" /><path d="M18,16H28V8.12c0-1.68-5.38-3-12-3S4,6.44,4,8.12V28c0,1.5,4.33,2.75,10,3V25.22a29.17,29.17,0,0,1-8-1.29V22.44l.24.1A26.63,26.63,0,0,0,14,23.82V20a4,4,0,0,1,.29-1.47A29.19,29.19,0,0,1,6,17.23V15.75l.24.09a29,29,0,0,0,9,1.32h0A4,4,0,0,1,18,16ZM6,10.54V9.05l.24.09A30.12,30.12,0,0,0,16,10.47,28.33,28.33,0,0,0,26,9.05v1.5a32.53,32.53,0,0,1-10,1.32A32.44,32.44,0,0,1,6,10.54Z" class="clr-i-solid clr-i-solid-path-5" />'),a.ClrShapeFileShare=c.clrIconSVG('<path d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9Zm0,20H6V13h7.31a2,2,0,0,0,2-2H6V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H30Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M21.91,22.48a2.06,2.06,0,0,0-1.44.62l-5.72-2.66V20l5.66-2.65a2.08,2.08,0,1,0,.06-2.94,2.12,2.12,0,0,0-.64,1.48v.23l-5.64,2.66a2.08,2.08,0,1,0-.08,2.95l.08-.08,5.67,2.66v.3a2.09,2.09,0,1,0,2.08-2.1Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9ZM6,7h6.49l2.72,4H6ZM21.94,26.64a2.09,2.09,0,0,1-2.11-2.06l0-.3-5.67-2.66-.08.08a2.08,2.08,0,1,1,.08-2.95l5.64-2.66v-.23a2.08,2.08,0,1,1,.58,1.46L14.75,20v.47l5.72,2.66a2.07,2.07,0,1,1,1.47,3.54Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeQrCode=c.clrIconSVG('<path d="M5.6,4A1.6,1.6,0,0,0,4,5.6V12h8V4ZM10,10H6V6h4Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M4,30.4A1.6,1.6,0,0,0,5.6,32H12V24H4ZM6,26h4v4H6Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M24,32h6.4A1.6,1.6,0,0,0,32,30.4V24H24Zm2-6h4v4H26Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30.4,4H24v8h8V5.6A1.6,1.6,0,0,0,30.4,4ZM30,10H26V6h4Z" class="clr-i-outline clr-i-outline-path-4" /><polygon points="20 10 20 8 16 8 16 12 18 12 18 10 20 10" class="clr-i-outline clr-i-outline-path-5" /><rect x="12" y="12" width="2" height="2" class="clr-i-outline clr-i-outline-path-6" /><rect x="14" y="14" width="4" height="2" class="clr-i-outline clr-i-outline-path-7" /><polygon points="20 6 20 8 22 8 22 4 14 4 14 8 16 8 16 6 20 6" class="clr-i-outline clr-i-outline-path-8" /><rect x="4" y="14" width="2" height="4" class="clr-i-outline clr-i-outline-path-9" /><polygon points="12 16 12 18 10 18 10 14 8 14 8 18 6 18 6 20 4 20 4 22 8 22 8 20 10 20 10 22 12 22 12 20 14 20 14 16 12 16" class="clr-i-outline clr-i-outline-path-10" /><polygon points="20 16 22 16 22 18 24 18 24 16 26 16 26 14 22 14 22 10 20 10 20 12 18 12 18 14 20 14 20 16" class="clr-i-outline clr-i-outline-path-11" /><polygon points="18 30 14 30 14 32 22 32 22 30 20 30 20 28 18 28 18 30" class="clr-i-outline clr-i-outline-path-12" /><polygon points="22 20 22 18 20 18 20 16 18 16 18 18 16 18 16 20 18 20 18 22 20 22 20 20 22 20" class="clr-i-outline clr-i-outline-path-13" /><rect x="30" y="20" width="2" height="2" class="clr-i-outline clr-i-outline-path-14" /><rect x="22" y="20" width="6" height="2" class="clr-i-outline clr-i-outline-path-15" /><polygon points="30 14 28 14 28 16 26 16 26 18 28 18 28 20 30 20 30 18 32 18 32 16 30 16 30 14" class="clr-i-outline clr-i-outline-path-16" /><rect x="20" y="22" width="2" height="6" class="clr-i-outline clr-i-outline-path-17" /><polygon points="14 28 16 28 16 26 18 26 18 24 16 24 16 20 14 20 14 28" class="clr-i-outline clr-i-outline-path-18" />'),a.ClrShapeUsb=c.clrIconSVG('<path d="M14.29,11.4a1.49,1.49,0,0,1,1.28-.72h1a2.89,2.89,0,0,0,2.75,2.09,3,3,0,0,0,0-5.91,2.9,2.9,0,0,0-2.67,1.82H15.57a3.49,3.49,0,0,0-3,1.66l-3,4.83h2.36Zm5-2.94A1.36,1.36,0,1,1,18,9.81,1.32,1.32,0,0,1,19.33,8.46Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M34.3,17.37l-6.11-3.66a.7.7,0,0,0-.7,0,.71.71,0,0,0-.36.61V17H6.92a2.33,2.33,0,0,1,.32,1.17,2.47,2.47,0,1,1-2.47-2.46,2.37,2.37,0,0,1,1.15.3l.93-1.76A4.44,4.44,0,1,0,9.15,19h3.58l4.17,6.65a3.49,3.49,0,0,0,3,1.66h1.66v1.28a.79.79,0,0,0,.8.79h4.49a.79.79,0,0,0,.8-.79v-4.4a.79.79,0,0,0-.8-.8H22.34a.8.8,0,0,0-.8.8v1.12H19.88a1.51,1.51,0,0,1-1.28-.72L15.09,19h12v2.66a.69.69,0,0,0,.36.61.67.67,0,0,0,.34.09.65.65,0,0,0,.36-.1l6.11-3.66a.69.69,0,0,0,.34-.6A.71.71,0,0,0,34.3,17.37ZM23.14,25H26v2.8H23.14Zm5.39-4.56V15.55l4,2.42Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M34.72,17.37l-5.51-3.31a.71.71,0,0,0-1.07.6V17H11.77l3.52-5.6a1.49,1.49,0,0,1,1.28-.72h1.64a2.41,2.41,0,0,0,2.25,1.61,2.48,2.48,0,0,0,0-4.95,2.38,2.38,0,0,0-2.13,1.34H16.57a3.49,3.49,0,0,0-3,1.66L9.41,17H8a3.46,3.46,0,1,0,.08,2h5.64l4.15,6.62a3.49,3.49,0,0,0,3,1.66h2.59v.92h4.4V23.8h-4.4v1.48H20.88a1.51,1.51,0,0,1-1.28-.72L16.11,19h12v2.28a.7.7,0,0,0,.36.61.72.72,0,0,0,.34.09.65.65,0,0,0,.36-.1l5.52-3.31a.7.7,0,0,0,0-1.2Z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeRadar=c.clrIconSVG('<path d="M32,18c0,7.7-6.3,14-14,14c-7.7,0-14-6.3-14-14C4,10.6,9.7,4.5,17.1,4v3.7c-5.7,0.5-9.9,5.5-9.4,11.2s5.5,9.9,11.2,9.4\n\tc5.3-0.5,9.4-4.9,9.4-10.3h-2c0,4.6-3.7,8.3-8.3,8.3s-8.3-3.7-8.3-8.3c0-4.2,3.1-7.8,7.3-8.3v4.4c-1.8,0.4-3.1,2-3.1,3.9\n\tc0,2.2,1.8,4,4,4s4-1.8,4-4c0-1.8-1.3-3.4-3-3.8V2.1C18.6,2,18.3,2,18,2C9.2,2,2,9.2,2,18s7.2,16,16,16s16-7.2,16-16H32z M20,18\n\tc0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S20,16.9,20,18z" class="clr-i-outline clr-i-outline-path-1" /><path d="M32,18c0,7.7-6.2,14-14,14S4,25.8,4,18c0-7.4,5.7-13.5,13.1-14v3.7c-5.7,0.5-9.8,5.5-9.3,11.2s5.5,9.8,11.2,9.3\n\t\tc5.3-0.5,9.3-4.9,9.3-10.2h-2c0,4.6-3.7,8.3-8.3,8.3S9.7,22.6,9.7,18c0-4.2,3.2-7.8,7.3-8.2v4.4c-2.1,0.6-3.4,2.7-2.9,4.9\n\t\tc0.6,2.1,2.7,3.4,4.9,2.9c2.1-0.6,3.4-2.7,2.9-4.9c-0.4-1.4-1.5-2.5-2.9-2.9V2c-0.4,0-0.7,0-1.1,0c-8.8,0-16,7.2-16,16\n\t\tc0,8.8,7.2,16,16,16s16-7.2,16-16c0,0,0,0,0,0H32z" class="clr-i-solid clr-i-solid-path-1" />'),a.ClrShapeInductor=c.clrIconSVG('<path d="M24.31,25.81c-1.75,0-3-2.49-3-6a12.79,12.79,0,0,1,1.72-6.7,2.57,2.57,0,0,0-3.79,0A12.79,12.79,0,0,1,21,19.76c0,3.56-1.23,6-3,6s-3-2.49-3-6a12.79,12.79,0,0,1,1.72-6.7,2.57,2.57,0,0,0-3.79,0,12.79,12.79,0,0,1,1.72,6.7c0,3.56-1.23,6-3,6s-3-2.49-3-6a12.88,12.88,0,0,1,1.71-6.7,2.7,2.7,0,0,0-1.89-.87C7.1,12.19,5.69,13.7,5,16l-.23.7H2a1,1,0,0,1,0-2H3.29c1.1-2.83,3.06-4.55,5.24-4.55a4.67,4.67,0,0,1,3.16,1.32,4.62,4.62,0,0,1,3.15-1.32A4.65,4.65,0,0,1,18,11.51a4.43,4.43,0,0,1,6.31,0,4.67,4.67,0,0,1,3.16-1.32c2.18,0,4.14,1.72,5.24,4.55H34a1,1,0,0,1,0,2H31.28l-.23-.7c-.74-2.34-2.15-3.85-3.58-3.85a2.7,2.7,0,0,0-1.89.87,12.88,12.88,0,0,1,1.71,6.7C27.29,23.32,26.07,25.81,24.31,25.81ZM18,14.93a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,18,14.93Zm6.31,0a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,24.31,14.93Zm-12.62,0a11.71,11.71,0,0,0-1,4.83c0,2.54.66,3.75,1,4,.32-.27,1-1.48,1-4A11.71,11.71,0,0,0,11.69,14.93Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeResistor=c.clrIconSVG('<path d="M29.43,26.34h0A1.47,1.47,0,0,1,28,25.22L24.86,13.15,21.74,25.22a1.49,1.49,0,0,1-1.45,1.12h0a1.49,1.49,0,0,1-1.46-1.12L15.71,13.15,12.6,25.22a1.51,1.51,0,0,1-2.91,0L6.57,13.15,5.22,18.37H2a1,1,0,0,1,0-2H3.67l1.45-5.59A1.48,1.48,0,0,1,6.57,9.66h0A1.47,1.47,0,0,1,8,10.78l3.12,12.07,3.12-12.07a1.49,1.49,0,0,1,1.45-1.12h0a1.49,1.49,0,0,1,1.46,1.12l3.12,12.07,3.12-12.07a1.5,1.5,0,0,1,2.9,0l3.12,12.07,1.35-5.22H34a1,1,0,0,1,0,2H32.33l-1.45,5.59A1.48,1.48,0,0,1,29.43,26.34Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeCapacitor=c.clrIconSVG('<path d="M15,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,15,34.06Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M21,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,21,34.06Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M14.46,19H3a1,1,0,0,1,0-2H14.46a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M33,19H21.54a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeSquid=c.clrIconSVG('<path d="M18,7a1,1,0,0,1-1-1V3.19a1,1,0,0,1,2,0V6A1,1,0,0,1,18,7Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M18,34a1,1,0,0,1-1-1V30a1,1,0,0,1,2,0v3A1,1,0,0,1,18,34Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M7.41,18l1.78-1.77a1,1,0,1,0-1.42-1.42L6,16.59,4.23,14.81a1,1,0,1,0-1.42,1.42L4.59,18,2.81,19.77a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L6,19.41l1.77,1.78a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M6,13.76l.36-.36a3,3,0,0,1,2.11-.88,11,11,0,0,1,19,0,3,3,0,0,1,2.12.88l.36.36.2-.2a13,13,0,0,0-24.4,0Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M30,22.24l-.36.36a3,3,0,0,1-2.12.88,11,11,0,0,1-19,0,3,3,0,0,1-2.12-.88L6,22.24l-.2.2a13,13,0,0,0,24.4,0Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M31.41,18l1.78-1.77a1,1,0,0,0-1.42-1.42L30,16.59l-1.77-1.78a1,1,0,1,0-1.42,1.42L28.59,18l-1.78,1.77a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29L30,19.41l1.77,1.78a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeHostGroup=c.clrIconSVG('<path d="M21.08,34h-14A1.08,1.08,0,0,1,6,33V12a1.08,1.08,0,0,1,1.08-1.08h14A1.08,1.08,0,0,1,22.16,12V33A1.08,1.08,0,0,1,21.08,34ZM8.16,31.88H20V13H8.16Z" class="clr-i-outline clr-i-outline-path-1" />\n<rect x="10.08" y="14.96" width="8" height="2" class="clr-i-outline clr-i-outline-path-2" /><path d="M26.1,27.81h-2V9h-12V7h13a1,1,0,0,1,1,1Z" class="clr-i-outline clr-i-outline-path-3" />\n<path d="M30.08,23h-2V5h-11V3h12a1,1,0,0,1,1,1Z" class="clr-i-outline clr-i-outline-path-4" /><rect x="13.08" y="27.88" width="2" height="2.16" class="clr-i-outline clr-i-outline-path-5" />\n\n<path class="clr-i-solid clr-i-solid-path-1" d="M15.08,31 L1.08,31 C0.513427197,31.0015564 0.0419663765,30.5650186 0,30 L0,9 C0,8.40353247 0.48353247,7.92 1.08,7.92 L15.08,7.92 C15.6764675,7.92 16.16,8.40353247 16.16,9 L16.16,30 C16.1180336,30.5650186 15.6465728,31.0015564 15.08,31 Z M4.08,11.96 L4.08,13.96 L12.08,13.96 L12.08,11.96 L4.08,11.96 Z M7.08,24.88 L7.08,27.04 L9.08,27.04 L9.08,24.88 L7.08,24.88 Z" />\n<path class="clr-i-solid clr-i-solid-path-2" d="M20.1,24.81 L18.1,24.81 L18.1,6 L6.1,6 L6.1,4 L19.1,4 C19.6522847,4 20.1,4.44771525 20.1,5 L20.1,24.81 Z" />\n<path class="clr-i-solid clr-i-solid-path-3" d="M24.08,20 L22.08,20 L22.08,2 L11.08,2 L11.08,0 L23.08,0 C23.6322847,0 24.08,0.44771525 24.08,1 L24.08,20 Z" />'),a.ClrShapeStorageAdapter=c.clrIconSVG('<path d="M6.06,30a1,1,0,0,1-1-1V8h-2a1,1,0,0,1,0-2h4V29A1,1,0,0,1,6.06,30Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M30.06,27h-25V9h25a3,3,0,0,1,3,3V24A3,3,0,0,1,30.06,27Zm-23-2h23a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1h-23Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <rect x="22.06" y="20" width="6" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n  <rect x="22.06" y="14" width="6" height="2" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M19.06,22h-8V20h7V14h2v7A1,1,0,0,1,19.06,22Z" class="clr-i-outline clr-i-outline-path-5"/>'),a.ClrShapeNodeGroup=c.clrIconSVG('<path d="M33.53,21.58l-4.94-2.83V13.09a1,1,0,0,0-.51-.87L22.64,9.1a1,1,0,0,0-1,0L16.2,12.22a1,1,0,0,0-.51.87v5.66l-4.94,2.83a1,1,0,0,0-.5.87v6.24a1,1,0,0,0,.5.86l5.45,3.12a1,1,0,0,0,1,0l4.95-2.83,4.95,2.83a1,1,0,0,0,.5.14,1,1,0,0,0,.49-.14l5.45-3.12a1,1,0,0,0,.5-.86V22.45A1,1,0,0,0,33.53,21.58ZM22.14,11.12l4.45,2.55V19l-4.46,2.56-4.44-2.6V13.67ZM16.69,30.65l-4.44-2.54V23l4.68-2.68,4.4,2.57V28ZM32,28.11l-4.44,2.54L22.93,28V22.93l4.46-2.57L32,23Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M7,27.43a1,1,0,0,1-1-1V19.9A1,1,0,0,1,6.5,19l4.95-2.83V10.54a1,1,0,0,1,.5-.87l5.21-3a1,1,0,0,1,1.37.37,1,1,0,0,1-.38,1.37l-4.7,2.68v5.66a1,1,0,0,1-.51.87L8,20.48v5.95A1,1,0,0,1,7,27.43Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M3,25.05a1,1,0,0,1-1-1V17.53a1,1,0,0,1,.5-.86l5-2.84V8.17A1,1,0,0,1,8,7.31l5.25-3a1,1,0,0,1,1,1.74L9.45,8.75v5.66a1,1,0,0,1-.51.87L4,18.11v5.94A1,1,0,0,1,3,25.05Z" class="clr-i-outline clr-i-outline-path-3"/>'),a.ClrShapeNodes=c.clrIconSVG('<path d="M10.5,34.29,2,29.39V19.58l8.5-4.9,8.5,4.9v9.81ZM4,28.23,10.5,32,17,28.23V20.74L10.5,17,4,20.74Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M25.5,34.29,17,29.39V19.58l8.5-4.9,8.5,4.9v9.81ZM19,28.23,25.5,32,32,28.23V20.74L25.5,17,19,20.74Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M18,21.32l-8.5-4.9V6.61L18,1.71l8.5,4.9v9.81Zm-6.5-6.06L18,19l6.5-3.75V7.77L18,4,11.5,7.77Z" class="clr-i-outline clr-i-outline-path-3"/>'),a.ClrShapeNamespace=c.clrIconSVG('<path d="M27,4.18a1,1,0,1,0-1,1.73l6,3.47V26.62l-6,3.47a1,1,0,0,0-.37,1.36,1,1,0,0,0,1.37.37l7-4.05V8.23Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M9.68,29.9,4,26.62V9.38L9.68,6.1a1,1,0,1,0-1-1.73L2,8.23V27.77l6.68,3.86a1,1,0,0,0,1.37-.37A1,1,0,0,0,9.68,29.9Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M10,12V24a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2H12A2,2,0,0,0,10,12Zm7,0v5H12V12Zm-5,7h5v5H12Zm7,5V19h5v5Zm5-7H19V12h5Z" class="clr-i-outline clr-i-outline-path-3"/>'),a.ClrShapeNode=c.clrIconSVG('<path d="M18,30.66,7,24.33V11.67L18,5.34l11,6.33V24.33ZM9,23.18l9,5.17,9-5.17V12.82L18,7.65,9,12.82Z" class="clr-i-outline clr-i-outline-path-1"/>'),a.ClrShapePod=c.clrIconSVG('<path d="M26,32H10a6,6,0,0,1-6-6V10a6,6,0,0,1,6-6H26a6,6,0,0,1,6,6V26A6,6,0,0,1,26,32ZM10,6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H26a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M26.56,15H15.44A1.43,1.43,0,0,0,14,16.44v8.12A1.43,1.43,0,0,0,15.44,26H26.56A1.43,1.43,0,0,0,28,24.56V16.44A1.43,1.43,0,0,0,26.56,15ZM26,24H16V17H26Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M12.4,19H10V12H20v1.4h2v-2A1.43,1.43,0,0,0,20.56,10H9.44A1.43,1.43,0,0,0,8,11.44v8.12A1.43,1.43,0,0,0,9.44,21h3Z" class="clr-i-outline clr-i-outline-path-3"/>'),a.ClrControlLun=c.clrIconSVG('\n  <path d="M8,24.59a25.5,25.5,0,0,0,2.75.59l1.21-1.41a24.13,24.13,0,0,1-4-.83Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M6,27.53V10.3c2.9,1.43,8.34,1.88,12,1.88s9.1-.45,12-1.88v5.11c-.91.82-5,2.13-12,2.13A34.81,34.81,0,0,1,8,16.33V18a40.86,40.86,0,0,0,10,1.16c3.46,0,9.13-.45,12-1.91v3.23h2V8h0s0,0,0-.07c0-3.35-8.8-4.25-14-4.25S4,4.58,4,7.93v19.6c0,2,3.17,3.14,6.83,3.72L8.38,28.68C7,28.28,6.13,27.84,6,27.53ZM18,5.68c7.15,0,11.53,1.44,12,2.25-.46.81-4.84,2.25-12,2.25S6.31,8.69,6,8C6.31,7.18,10.71,5.68,18,5.68Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M32.09,22H15.46l-5.41,6.31L15.49,34h16.6a2,2,0,0,0,2-2V23.93A2,2,0,0,0,32.09,22Zm0,10H16.34l-3.59-3.77L16.38,24H32.09v8Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-outline clr-i-outline-path-4"/>\n\n  <path d="M8,24.59a25.5,25.5,0,0,0,2.75.59l1.21-1.41a24.13,24.13,0,0,1-4-.83Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n  <path d="M32.09,22H15.46l-5.41,6.31L15.49,34h16.6a2,2,0,0,0,2-2V23.93A2,2,0,0,0,32.09,22Zm0,10H16.34l-3.59-3.77L16.38,24H32.09v8Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n  <path d="M18,17.54A34.81,34.81,0,0,1,8,16.33V18a40.86,40.86,0,0,0,10,1.16c3.46,0,9.13-.45,12-1.91v3.23h2V13.22a7.32,7.32,0,0,1-2,.28v1.91C29.09,16.23,25,17.54,18,17.54Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n  <path d="M6,27.53V10.3c2.9,1.43,8.34,1.88,12,1.88a47.66,47.66,0,0,0,7.09-.52,7.45,7.45,0,0,1-1.51-1.8,47.4,47.4,0,0,1-5.58.32C10.71,10.18,6.31,8.69,6,8c.32-.8,4.72-2.3,12-2.3,1.66,0,3.16.08,4.51.21a7.56,7.56,0,0,1,.29-2c-1.7-.17-3.38-.24-4.8-.24-5.2,0-14,.9-14,4.25v19.6c0,2,3.17,3.14,6.83,3.72L8.38,28.68C7,28.28,6.13,27.84,6,27.53Z" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"/>\n\n  <path d="M8,24.59a25.5,25.5,0,0,0,2.75.59l1.21-1.41a24.13,24.13,0,0,1-4-.83Z"/><path d="M32.09,22H15.46l-5.41,6.31L15.49,34h16.6a2,2,0,0,0,2-2V23.93A2,2,0,0,0,32.09,22Zm0,10H16.34l-3.59-3.77L16.38,24H32.09v8Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n  <path d="M6,27.53V10.3c2.9,1.43,8.34,1.88,12,1.88h.59a3.59,3.59,0,0,1,.32-2H18C10.71,10.18,6.31,8.69,6,8c.32-.8,4.72-2.3,12-2.3,1.22,0,2.35.05,3.41.12l1.1-1.91c-1.6-.15-3.17-.21-4.51-.21-5.2,0-14,.9-14,4.25v19.6c0,2,3.17,3.14,6.83,3.72L8.38,28.68C7,28.28,6.13,27.84,6,27.53Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n  <path d="M8,16.33V18a40.86,40.86,0,0,0,10,1.16c3.46,0,9.13-.45,12-1.91v3.23h2V15.4H30c-.91.82-5,2.13-12,2.13A34.81,34.81,0,0,1,8,16.33Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>\n\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-solid clr-i-solid-path-1"/>\n  <path d="M32.09,21H32V17.32c-1.9,2.93-10.46,3.3-14,3.3A42.43,42.43,0,0,1,8,19.56V17.88A40.59,40.59,0,0,0,18,19c5,0,13.2-.82,14-3.82V10.72c-2.21,3.36-10.49,3.46-14,3.46A42.12,42.12,0,0,1,8,13.11V11a40.59,40.59,0,0,0,10,1.14c5,0,13.28-.83,14-3.88V7.83h0c-.19-3.27-8.84-4.15-14-4.15S4.21,4.56,4,7.83H4v19.7c0,2.16,3.64,3.3,7.63,3.84l2.84,3,.59.62h17a3,3,0,0,0,3-3V23.93A3,3,0,0,0,32.09,21ZM8,26.08V24.4a25.79,25.79,0,0,0,3.46.7l-1.24,1.44C9.46,26.42,8.71,26.27,8,26.08ZM33.09,32a1,1,0,0,1-1,1H15.92L11.4,28.23,15.92,23H32.09a1,1,0,0,1,1,1Z" class="clr-i-solid clr-i-solid-path-2"/>\n\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n  <path d="M32.09,21H32V17.32c-1.9,2.93-10.46,3.3-14,3.3A42.43,42.43,0,0,1,8,19.56V17.88A40.59,40.59,0,0,0,18,19c5,0,13.2-.82,14-3.82v-2a7.34,7.34,0,0,1-4.12,0,39.47,39.47,0,0,1-9.88,1A42.12,42.12,0,0,1,8,13.11V11a40.59,40.59,0,0,0,10,1.14,47.76,47.76,0,0,0,7.09-.52A7.45,7.45,0,0,1,22.8,3.92c-1.7-.17-3.38-.24-4.8-.24-5.14,0-13.79.88-14,4.15H4v19.7c0,2.16,3.64,3.3,7.63,3.84l2.84,3,.59.62h17a3,3,0,0,0,3-3V23.93A3,3,0,0,0,32.09,21ZM8,26.08V24.4a25.79,25.79,0,0,0,3.46.7l-1.24,1.44C9.46,26.42,8.71,26.27,8,26.08ZM33.09,32a1,1,0,0,1-1,1H15.92L11.4,28.23,15.92,23H32.09a1,1,0,0,1,1,1Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"/>\n\n  <path d="M16.11,27a1,1,0,1,0,1,1A1,1,0,0,0,16.11,27Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n  <path d="M32.09,21H32V17.32c-1.9,2.93-10.46,3.3-14,3.3A42.43,42.43,0,0,1,8,19.56V17.88A40.59,40.59,0,0,0,18,19c4.85,0,12.8-.79,13.91-3.62H22.23a3.68,3.68,0,0,1-2.73-1.23H18A42.12,42.12,0,0,1,8,13.11V11a40.59,40.59,0,0,0,10,1.14h.59a3.61,3.61,0,0,1,.46-2.29l3.46-6c-1.6-.15-3.17-.21-4.51-.21-5.14,0-13.79.88-14,4.15H4v19.7c0,2.16,3.64,3.3,7.63,3.84l2.84,3,.59.62h17a3,3,0,0,0,3-3V23.93A3,3,0,0,0,32.09,21ZM8,26.08V24.4a25.79,25.79,0,0,0,3.46.7l-1.24,1.44C9.46,26.42,8.71,26.27,8,26.08ZM33.09,32a1,1,0,0,1-1,1H15.92L11.4,28.23,15.92,23H32.09a1,1,0,0,1,1,1Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"/>\n  '),a.ClrShapeMediaChanger=c.clrIconSVG('\n  <path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM6,30V6H30V30Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2" class="clr-i-outline clr-i-outline-path-2"/>\n  <rect x="20" y="22" width="2" height="2" class="clr-i-outline clr-i-outline-path-3"/>\n  <rect x="24" y="22" width="2" height="2" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M27.22,10H20v4a.8.8,0,1,0,1.59,0V11.6h5.63a.8.8,0,1,0,0-1.6Z" class="clr-i-outline clr-i-outline-path-5"/>\n  <rect x="8.81" y="10" width="8.14" height="2" class="clr-i-outline clr-i-outline-path-6"/>\n  <rect x="8.81" y="14" width="8.14" height="2" class="clr-i-outline clr-i-outline-path-7"/>\n  <rect x="8.81" y="18" width="8.14" height="2" class="clr-i-outline clr-i-outline-path-8"/>\n  <rect x="8.81" y="22" width="8.14" height="2" class="clr-i-outline clr-i-outline-path-9"/>\n  <rect x="8.81" y="26" width="8.14" height="2" class="clr-i-outline clr-i-outline-path-10"/>\n\n  <rect x="20" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n  <rect x="24" y="18" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n  <rect x="20" y="22" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n  <rect x="24" y="22" width="2" height="2" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n  <rect x="8.81" y="10" width="8.14" height="2" class="clr-i-outline--badged clr-i-outline-path-5--badged"/>\n  <rect x="8.81" y="14" width="8.14" height="2" class="clr-i-outline--badged clr-i-outline-path-6--badged"/>\n  <rect x="8.81" y="18" width="8.14" height="2" class="clr-i-outline--badged clr-i-outline-path-7--badged"/>\n  <rect x="8.81" y="22" width="8.14" height="2" class="clr-i-outline--badged clr-i-outline-path-8--badged"/>\n  <rect x="8.81" y="26" width="8.14" height="2" class="clr-i-outline--badged clr-i-outline-path-9--badged"/>\n  <path d="M20,14a.8.8,0,1,0,1.59,0V11.6H25A7.74,7.74,0,0,1,23.66,10H20Z" class="clr-i-outline--badged clr-i-outline-path-10--badged"/>\n  <path d="M30,13.5h0V30H6V6H22.5V6a7.37,7.37,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V13.22A7.37,7.37,0,0,1,30,13.5Z" class="clr-i-outline--badged clr-i-outline-path-11--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-12--badged clr-i-badge"/>\n\n  <rect x="20" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n  <rect x="24" y="18" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n  <rect x="20" y="22" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n  <rect x="24" y="22" width="2" height="2" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n  <rect x="8.81" y="10" width="8.14" height="2" class="clr-i-outline--alerted clr-i-outline-path-5--alerted"/>\n  <rect x="8.81" y="14" width="8.14" height="2" class="clr-i-outline--alerted clr-i-outline-path-6--alerted"/>\n  <rect x="8.81" y="18" width="8.14" height="2" class="clr-i-outline--alerted clr-i-outline-path-7--alerted"/>\n  <rect x="8.81" y="22" width="8.14" height="2" class="clr-i-outline--alerted clr-i-outline-path-8--alerted"/>\n  <rect x="8.81" y="26" width="8.14" height="2" class="clr-i-outline--alerted clr-i-outline-path-9--alerted"/>\n  <path d="M30,15.4V30H6V6H21.27l1.18-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V15.4Z" class="clr-i-outline--alerted clr-i-outline-path-10--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-11--alerted clr-i-alert"/>\n\n  <path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Zm0-6H20V10h6Z" class="clr-i-solid clr-i-solid-path-1"/>\n\n  <path d="M30,13.5a7.49,7.49,0,0,1-4-1.16V14H20V10h3.66A7.49,7.49,0,0,1,22.5,6a7.37,7.37,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V13.22A7.37,7.37,0,0,1,30,13.5ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/>\n\n  <path d="M22.23,15.4a3.68,3.68,0,0,1-3.18-5.51L22.45,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V15.4ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted clr-i-alert"/>\n  '),a.ClrShapeTapeDrive=c.clrIconSVG('\n  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM4,28V8H32V28Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M13.33,13.35a4.52,4.52,0,1,0,4.53,4.52A4.53,4.53,0,0,0,13.33,13.35Zm0,7.44a2.92,2.92,0,1,1,2.93-2.92A2.92,2.92,0,0,1,13.33,20.79Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M23.62,13.35a4.52,4.52,0,1,0,4.52,4.52A4.53,4.53,0,0,0,23.62,13.35Zm0,7.44a2.92,2.92,0,1,1,2.92-2.92A2.92,2.92,0,0,1,23.62,20.79Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M6,11V23.55H8V12H29.34V10H7A1,1,0,0,0,6,11Z" class="clr-i-outline clr-i-outline-path-4"/>\n\n  <path d="M8.81,17.87a4.53,4.53,0,1,0,4.52-4.52A4.53,4.53,0,0,0,8.81,17.87Zm7.45,0A2.93,2.93,0,1,1,13.33,15,2.93,2.93,0,0,1,16.26,17.87Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"/>\n  <path d="M19.1,17.87a4.52,4.52,0,1,0,4.52-4.52A4.53,4.53,0,0,0,19.1,17.87Zm7.44,0A2.92,2.92,0,1,1,23.62,15,2.92,2.92,0,0,1,26.54,17.87Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"/>\n  <path d="M32,13.22V28H4V8H22.78a7.37,7.37,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.65,7.65,0,0,1,32,13.22Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"/>\n  <path d="M6,11V23.55H8V12H25.51a7.66,7.66,0,0,1-1.85-2H7A1,1,0,0,0,6,11Z" class="clr-i-outline--badged clr-i-outline-path-4--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-outline--badged clr-i-outline-path-5--badged clr-i-badge"/>\n\n  <path d="M8.81,17.87a4.53,4.53,0,1,0,4.52-4.52A4.53,4.53,0,0,0,8.81,17.87Zm7.45,0A2.93,2.93,0,1,1,13.33,15,2.93,2.93,0,0,1,16.26,17.87Z" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"/>\n  <path d="M7,10a1,1,0,0,0-1,1V23.55H8V12H18.57A3.7,3.7,0,0,1,19,10Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"/>\n  <path d="M33.68,15.4H32V28H4V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"/>\n  <path d="M22.09,15.39a3.65,3.65,0,0,1-1.8-.55,4.51,4.51,0,1,0,7.11.56H25.17a2.92,2.92,0,1,1-3.08,0Z" class="clr-i-outline--alerted clr-i-outline-path-4--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert"/>\n\n  <path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30,24H6V12H30Z" class="clr-i-solid clr-i-solid-path-1"/>\n  <path d="M12.21,23a5,5,0,1,0-5-5A5,5,0,0,0,12.21,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,12.21,16Z" class="clr-i-solid clr-i-solid-path-2"/>\n  <path d="M23.79,23a5,5,0,1,0-5-5A5,5,0,0,0,23.79,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z" class="clr-i-solid clr-i-solid-path-3"/>\n\n  <path d="M12.21,23a5,5,0,1,0-5-5A5,5,0,0,0,12.21,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,12.21,16Z" class="clr-i-solid--badged clr-i-solid-path-1--badged"/>\n  <path d="M23.79,23a5,5,0,1,0-5-5A5,5,0,0,0,23.79,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z" class="clr-i-solid--badged clr-i-solid-path-2--badged"/>\n  <path d="M30,13.5V24H6V12H25.51a7.49,7.49,0,0,1-3-6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.49,7.49,0,0,1,30,13.5Z" class="clr-i-solid--badged clr-i-solid-path-3--badged"/>\n  <circle cx="30" cy="6" r="5" class="clr-i-solid--badged clr-i-solid-path-4--badged clr-i-badge"/>\n\n  <path d="M7.2,18a5,5,0,1,0,5-5A5,5,0,0,0,7.2,18Zm7,0a2,2,0,1,1-2-2A2,2,0,0,1,14.22,18Z" class="clr-i-solid--alerted clr-i-solid-path-1--alerted"/>\n  <path d="M18.78,18a5,5,0,1,0,9.27-2.6H22.23a3.71,3.71,0,0,1-2.17-.71A5,5,0,0,0,18.78,18Zm5-2a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z" class="clr-i-solid--alerted clr-i-solid-path-2--alerted"/>\n  <path d="M33.68,15.4H30V24H6V12H18.57a3.65,3.65,0,0,1,.48-2.11L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z" class="clr-i-solid--alerted clr-i-solid-path-3--alerted"/>\n  <path d="M26.85,1.14l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68a1.27,1.27,0,0,0,1.1-1.91L29.06,1.14A1.28,1.28,0,0,0,26.85,1.14Z" class="clr-i-solid--alerted clr-i-solid-path-4--alerted clr-i-alert"/>\n  '),a.ClrShapeAnimation=c.clrIconSVG('<path d="M10.16,31.71a4.4,4.4,0,0,1-4.64-1A4.34,4.34,0,0,1,4.23,27.6a4.41,4.41,0,0,1,.18-1.2,11.61,11.61,0,0,1-1-2.56,6.4,6.4,0,0,0,9.33,8.63A11.55,11.55,0,0,1,10.16,31.71Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M18.41,27.68a7.61,7.61,0,0,1-9.08-1.26,7.58,7.58,0,0,1-1.27-9.06,14.26,14.26,0,0,1-.37-2.85,9.58,9.58,0,0,0,.22,13.33,9.63,9.63,0,0,0,13.35.22A14.46,14.46,0,0,1,18.41,27.68Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M21.66,26.21a12.1,12.1,0,1,1,8.57-3.54h0A12.11,12.11,0,0,1,21.66,26.21ZM21.66,4A10.11,10.11,0,0,0,11.54,14.11a10,10,0,0,0,3,7.14,10.12,10.12,0,0,0,14.31,0A10.11,10.11,0,0,0,21.66,4Zm7.86,18h0Z" class="clr-i-outline clr-i-outline-path-3"/>\n  \n  <path d="M3.5,23.77a6.41,6.41,0,0,0,9.33,8.67A11.65,11.65,0,0,1,3.5,23.77Z" class="clr-i-solid clr-i-solid-path-1"/>\n  <path d="M7.68,14.53a9.6,9.6,0,0,0,13.4,13.7A14.11,14.11,0,0,1,7.68,14.53Z" class="clr-i-solid clr-i-solid-path-2"/>\n  <path d="M21.78,2A12.12,12.12,0,1,1,9.66,14.15,12.12,12.12,0,0,1,21.78,2" class="clr-i-solid clr-i-solid-path-3"/>\n  '),a.ClrShapeCiCd=c.clrIconSVG('<path d="M23.53,19.81a7.45,7.45,0,0,1-1.65-.18,10.48,10.48,0,0,1,.72,2.13c.3,0,.61,0,.93,0a9.52,9.52,0,0,0,3-.49l-.93-1.81A7.67,7.67,0,0,1,23.53,19.81Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M18.36,17.87,18,17.49a7.4,7.4,0,0,1-2.2-5.92,7.31,7.31,0,0,1,1.54-4L17.26,9A1,1,0,0,0,18.17,10h.09a1,1,0,0,0,1-.91L19.6,5a1,1,0,0,0-.29-.79A1,1,0,0,0,18.52,4l-4.09.35a1,1,0,0,0,.17,2l1.29-.11a9.45,9.45,0,0,0-2.05,5.32,9.28,9.28,0,0,0,2.67,7.26l.31.37a7.33,7.33,0,0,1,2.06,4.91,7.39,7.39,0,0,1-.26,2.47l1.8.91a8.76,8.76,0,0,0,.45-3.51A9.28,9.28,0,0,0,18.36,17.87Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M32.4,17.91,31.19,18A9.65,9.65,0,0,0,23.53,2.45a9.33,9.33,0,0,0-3,.49l.91,1.8a7.67,7.67,0,0,1,9.76,7.39,7.58,7.58,0,0,1-1.65,4.72l.1-1.54a1,1,0,1,0-2-.13l-.28,4.08a1,1,0,0,0,.31.78.94.94,0,0,0,.69.28h.1l4.08-.42a1,1,0,0,0,.9-1.1A1,1,0,0,0,32.4,17.91Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M4.07,20.44h.08l4.09-.35a1,1,0,1,0-.17-2l-1.39.12a7.63,7.63,0,0,1,4.52-1.49,7.9,7.9,0,0,1,1.63.18,10.23,10.23,0,0,1-.71-2.13c-.3,0-.61,0-.92,0a9.66,9.66,0,0,0-5.9,2l.12-1.31a1,1,0,0,0-.92-1.08,1,1,0,0,0-1.08.91l-.35,4.08a1,1,0,0,0,1,1.08Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M18.42,28.23l-4.09.27a1,1,0,0,0,.13,2L16,30.39a7.71,7.71,0,0,1-12.54-6,7.6,7.6,0,0,1,.29-2L2,21.46a9.59,9.59,0,0,0-.47,2.95A9.7,9.7,0,0,0,17.19,32l-.12,1.18a1,1,0,0,0,.89,1.1h.11a1,1,0,0,0,1-.9l.42-4.06a1,1,0,0,0-1.06-1.1Z" class="clr-i-outline clr-i-outline-path-5"/>'),a.ClrShapeFileShare2=c.clrIconSVG('<path d="M25,4H7.83A1.89,1.89,0,0,0,6,5.91V30.09A1.89,1.89,0,0,0,7.83,32H28.17A1.87,1.87,0,0,0,30,30.09V9ZM24,5.78,28.2,10H24ZM8,30V6H22v6h6V30Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M22,21.81a2.11,2.11,0,0,0-1.44.62l-5.72-2.66v-.44l5.66-2.65a2.08,2.08,0,1,0,.06-2.94h0a2.14,2.14,0,0,0-.64,1.48v.23l-5.64,2.66a2.08,2.08,0,1,0-.08,2.95l.08-.08,5.67,2.66v.3A2.09,2.09,0,1,0,22,21.84Z" class="clr-i-outline clr-i-outline-path-2"/>\n  \n  <path d="M25,4.06H7.83A1.89,1.89,0,0,0,6,6V30.15a1.89,1.89,0,0,0,1.83,1.91H28.17A1.87,1.87,0,0,0,30,30.15V9ZM22,26a2.09,2.09,0,0,1-2.1-2.08v-.3L14.27,21l-.08.08a2.08,2.08,0,1,1,.08-2.95l5.64-2.66v-.23a2.14,2.14,0,0,1,.64-1.48h0a2.08,2.08,0,1,1-.06,2.94l-5.66,2.65v.44l5.72,2.66A2.11,2.11,0,0,1,22,21.81l0,0A2.09,2.09,0,0,1,22,26Zm2-16V5.84l4.2,4.22Z" class="clr-i-solid clr-i-solid-path-1"/>'),a.TechnologyShapes={"ruler-pencil":a.ClrShapeRulerPencil,"phone-handset":a.ClrShapePhoneHandset,"no-wifi":a.ClrShapeNoWifi,install:a.ClrShapeInstall,uninstall:a.ClrShapeUninstall,layers:a.ClrShapeLayers,block:a.ClrShapeBlock,"blocks-group":a.ClrShapeBlocksGroup,bundle:a.ClrShapeBundle,wifi:a.ClrShapeWifi,"rack-server":a.ClrShapeRackServer,"hard-disk":a.ClrShapeHardDisk,"backup-restore":a.ClrShapeBackupRestore,backup:a.ClrShapeBackup,devices:a.ClrShapeDevices,keyboard:a.ClrShapeKeyboard,mouse:a.ClrShapeMouse,dashboard:a.ClrShapeDashboard,host:a.ClrShapeHost,storage:a.ClrShapeStorage,cluster:a.ClrShapeCluster,applications:a.ClrShapeApplications,building:a.ClrShapeBuilding,cpu:a.ClrShapeCPU,memory:a.ClrShapeMemory,"data-cluster":a.ClrShapeDataCluster,"resource-pool":a.ClrShapeResourcePool,shield:a.ClrShapeShield,"shield-check":a.ClrShapeShieldCheck,"shield-x":a.ClrShapeShieldX,import:a.ClrShapeImport,export:a.ClrShapeExport,"upload-cloud":a.ClrShapeUploadCloud,"download-cloud":a.ClrShapeDownloadCloud,plugin:a.ClrShapePlugin,floppy:a.ClrShapeFloppy,computer:a.ClrShapeComputer,display:a.ClrShapeDisplay,terminal:a.ClrShapeTerminal,code:a.ClrShapeCode,application:a.ClrShapeApplication,battery:a.ClrShapeBattery,mobile:a.ClrShapeMobile,tablet:a.ClrShapeTablet,"network-globe":a.ClrShapeNetworkGlobe,"network-settings":a.ClrShapeNetworkSettings,"network-switch":a.ClrShapeNetworkSwitch,router:a.ClrShapeRouter,vm:a.ClrShapeVM,"vmw-app":a.ClrShapeVMWApp,certificate:a.ClrShapeCertificate,archive:a.ClrShapeArchive,unarchive:a.ClrShapeUnarchive,connect:a.ClrShapeConnect,disconnect:a.ClrShapeDisconnect,link:a.ClrShapeLink,unlink:a.ClrShapeUnlink,"cloud-network":a.ClrShapeCloudNetwork,"cloud-scale":a.ClrShapeCloudScale,"cloud-traffic":a.ClrShapeCloudTraffic,"control-lun":a.ClrControlLun,deploy:a.ClrShapeDeploy,helix:a.ClrShapeHelix,flask:a.ClrShapeFlask,administrator:a.ClrShapeAdministrator,"hard-drive":a.ClrShapeHardDrive,"hard-drive-disks":a.ClrShapeHardDriveDisks,nvme:a.ClrShapeNVMe,ssd:a.ClrShapeSSD,bluetooth:a.ClrShapeBluetooth,"bluetooth-off":a.ClrShapeBluetoothOff,"process-on-vm":a.ClrShapeProcessOnVM,"assign-user":a.ClrShapeAssignUser,atom:a.ClrShapeAtom,"bar-code":a.ClrShapeBarCode,"cd-dvd":a.ClrShapeCdDvd,container:a.ClrShapeContainer,"container-volume":a.ClrShapeContainerVolume,"file-share":a.ClrShapeFileShare,"qr-code":a.ClrShapeQrCode,usb:a.ClrShapeUsb,radar:a.ClrShapeRadar,capacitor:a.ClrShapeCapacitor,squid:a.ClrShapeSquid,inductor:a.ClrShapeInductor,resistor:a.ClrShapeResistor,"host-group":a.ClrShapeHostGroup,"storage-adapter":a.ClrShapeStorageAdapter,"node-group":a.ClrShapeNodeGroup,nodes:a.ClrShapeNodes,namespace:a.ClrShapeNamespace,node:a.ClrShapeNode,pod:a.ClrShapePod,"media-changer":a.ClrShapeMediaChanger,"tape-drive":a.ClrShapeTapeDrive,animation:a.ClrShapeAnimation,"ci-cd":a.ClrShapeCiCd,"file-share-2":a.ClrShapeFileShare2},Object.defineProperty(a.TechnologyShapes,"server",t.descriptorConfig(a.TechnologyShapes.host)),Object.defineProperty(a.TechnologyShapes,"command",t.descriptorConfig(a.TechnologyShapes.terminal)),Object.defineProperty(a.TechnologyShapes,"mobile-phone",t.descriptorConfig(a.TechnologyShapes.mobile)),Object.defineProperty(a.TechnologyShapes,"license",t.descriptorConfig(a.TechnologyShapes.certificate)),Object.defineProperty(a.TechnologyShapes,"disconnected",t.descriptorConfig(a.TechnologyShapes["no-wifi"])),Object.defineProperty(a.TechnologyShapes,"receiver",t.descriptorConfig(a.TechnologyShapes["phone-handset"])),Object.defineProperty(a.TechnologyShapes,"design",t.descriptorConfig(a.TechnologyShapes["ruler-pencil"])),Object.defineProperty(a.TechnologyShapes,"dna",t.descriptorConfig(a.TechnologyShapes.helix)),Object.defineProperty(a.TechnologyShapes,"folder-share",t.descriptorConfig(a.TechnologyShapes["file-share"])),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.TechnologyShapes)},"./src/shapes/text-edit-shapes.ts":
/*!****************************************!*\
  !*** ./src/shapes/text-edit-shapes.ts ***!
  \****************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TextEditShapes=a.ClrShapeSuperscript=a.ClrShapeSubscript=a.ClrShapeStrikethrough=a.ClrShapeIndent=a.ClrShapeOutdent=a.ClrShapeHighlighter=a.ClrShapeTextColor=a.ClrShapeLanguage=a.ClrShapeAlignTop=a.ClrShapeAlignMiddle=a.ClrShapeAlignBottom=a.ClrShapeUnderline=a.ClrShapeText=a.ClrShapeAlignRightText=a.ClrShapeBlockQuote=a.ClrShapePaintRoller=a.ClrShapeNumberList=a.ClrShapeAlignLeftText=a.ClrShapeJustifyText=a.ClrShapeItalic=a.ClrShapeAlignRight=a.ClrShapeAlignLeft=a.ClrShapeAlignCenter=a.ClrShapeFontSize=a.ClrShapeCheckboxList=a.ClrShapeCenterText=a.ClrShapeBulletList=a.ClrShapeBold=void 0;var t=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeBold=t.clrIconSVG('<path d="M22.43,17.54a4.67,4.67,0,0,0,2.8-4.37v-.06a4.43,4.43,0,0,0-1.31-3.25,7.09,7.09,0,0,0-5.13-1.73h-7A1.71,1.71,0,0,0,10,9.86V26a1.72,1.72,0,0,0,1.74,1.74h7.33c4.37,0,7.25-1.88,7.25-5.38V22.3C26.32,19.64,24.73,18.32,22.43,17.54ZM13.68,11.4h4.54c2,0,3.15.89,3.15,2.33v.06c0,1.68-1.36,2.49-3.38,2.49H13.68ZM22.37,22c0,1.59-1.31,2.43-3.46,2.43H13.68V19.62h5c2.49,0,3.69.88,3.69,2.37Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeBulletList=t.clrIconSVG('<circle cx="5.21" cy="9.17" r="2" class="clr-i-outline clr-i-outline-path-1" /><circle cx="5.21" cy="17.17" r="2" class="clr-i-outline clr-i-outline-path-2" /><circle cx="5.21" cy="25.17" r="2" class="clr-i-outline clr-i-outline-path-3" /><path d="M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapeCenterText=t.clrIconSVG('<path d="M30.88,8H5.12a1.1,1.1,0,0,0,0,2.2H30.88a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M25.5,16.2a1.1,1.1,0,1,0,0-2.2h-15a1.1,1.1,0,1,0,0,2.2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M30.25,20H5.75a1.1,1.1,0,0,0,0,2.2h24.5a1.1,1.1,0,0,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M24.88,26H11.12a1.1,1.1,0,1,0,0,2.2H24.88a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeCheckboxList=t.clrIconSVG('<path d="M31.43,16H10v2H31.43a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M31.43,24H10v2H31.43a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M15.45,10h16a1,1,0,0,0,0-2h-14Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M17.5,3.42a1.09,1.09,0,0,0-1.55,0L7.89,11.48,4.51,7.84A1.1,1.1,0,1,0,2.9,9.34l4.94,5.3L17.5,5A1.1,1.1,0,0,0,17.5,3.42Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeFontSize=t.clrIconSVG('<path d="M21,9.08A1.13,1.13,0,0,0,19.86,8H4.62a1.1,1.1,0,1,0,0,2.19H11V27a1.09,1.09,0,0,0,2.17,0V10.19h6.69A1.14,1.14,0,0,0,21,9.08Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M30.67,15H21.15a1.1,1.1,0,1,0,0,2.19H25V26.5a1.09,1.09,0,0,0,2.17,0V17.23h3.54a1.1,1.1,0,1,0,0-2.19Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeAlignCenter=t.clrIconSVG('<path d="M31,20H19V16h6a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H19V2a1,1,0,0,0-2,0V6H11a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6v4H5a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H17v4a1,1,0,0,0,2,0V30H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20ZM12,14V8H24v6ZM30,28H6V22H30Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeAlignLeft=t.clrIconSVG('<path d="M5,1A1,1,0,0,0,4,2V34a1,1,0,0,0,2,0V2A1,1,0,0,0,5,1Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M31,20H8V30H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20Zm-1,8H10V22H30Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M24,15V7a1,1,0,0,0-1-1H8V16H23A1,1,0,0,0,24,15Zm-2-1H10V8H22Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeAlignRight=t.clrIconSVG('<path d="M31,1a1,1,0,0,0-1,1V34a1,1,0,0,0,2,0V2A1,1,0,0,0,31,1Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M4,21v8a1,1,0,0,0,1,1H28V20H5A1,1,0,0,0,4,21Zm2,1H26v6H6Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M12,7v8a1,1,0,0,0,1,1H28V6H13A1,1,0,0,0,12,7Zm2,1H26v6H14Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeItalic=t.clrIconSVG('<path d="M24.42,8H17.1a1.1,1.1,0,1,0,0,2.19h2.13L13.11,25.55H10.47a1.1,1.1,0,1,0,0,2.19H17.8a1.1,1.1,0,1,0,0-2.19H15.51l6.13-15.36h2.78a1.1,1.1,0,1,0,0-2.19Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeJustifyText=t.clrIconSVG('<path d="M6,10.2H31.75a1.1,1.1,0,1,0,0-2.2H6a1.1,1.1,0,1,0,0,2.2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M31.75,14H6a1.1,1.1,0,1,0,0,2.2H31.75a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M31.12,20H6.62a1.1,1.1,0,1,0,0,2.2h24.5a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M30.45,25.83H6.6a1.1,1.1,0,0,0,0,2.2H30.45a1.1,1.1,0,0,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeAlignLeftText=t.clrIconSVG('<path d="M20.25,26H6v2.2H20.25a1.1,1.1,0,0,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M28,20H6v2.2H28A1.1,1.1,0,0,0,28,20Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M22.6,15.1A1.1,1.1,0,0,0,21.5,14H6v2.2H21.5A1.1,1.1,0,0,0,22.6,15.1Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M29.25,8H6v2.2H29.25a1.1,1.1,0,1,0,0-2.2Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeNumberList=t.clrIconSVG('<polygon points="5.46 7.41 5.46 11.56 6.65 11.56 6.65 6.05 5.7 6.05 4.05 7.16 4.52 8 5.46 7.41" class="clr-i-outline clr-i-outline-path-1" /><path d="M5.57,14.82a.76.76,0,0,1,.83.73c0,.38-.21.74-.87,1.27l-2,1.57v1H7.67V18.28H5.33l1-.77c1-.7,1.28-1.27,1.28-2a1.83,1.83,0,0,0-2-1.76,2.63,2.63,0,0,0-2.14,1.08l.76.73A1.75,1.75,0,0,1,5.57,14.82Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M6.56,24.64a1.32,1.32,0,0,0,1-1.27c0-.87-.78-1.51-2-1.51a2.61,2.61,0,0,0-2.1,1l.69.72a1.78,1.78,0,0,1,1.3-.64c.54,0,.92.26.92.66s-.36.62-1,.62H4.79v1h.64c.74,0,1.07.21,1.07.63s-.35.68-1,.68a2,2,0,0,1-1.46-.65l-.7.78a2.85,2.85,0,0,0,2.21.93c1.29,0,2.13-.69,2.13-1.64A1.33,1.33,0,0,0,6.56,24.64Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z" class="clr-i-outline clr-i-outline-path-4" /><path d="M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-6" />'),a.ClrShapePaintRoller=t.clrIconSVG('<path d="M31,10V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4v6a2,2,0,0,0,2,2H29A2,2,0,0,0,31,10ZM6,4H29v6H6Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M33,6H32v6.29L18.7,16.54a1,1,0,0,0-.7,1V19H16V33a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19H20v-.73L33.3,14a1,1,0,0,0,.7-1V7A1,1,0,0,0,33,6ZM20,33H18V21h2Z" class="clr-i-outline clr-i-outline-path-2" /><rect x="4" y="2" width="27" height="10" rx="1" ry="1" class="clr-i-solid clr-i-solid-path-1" /><path d="M33,6H32v6.24L18.71,16.45a1,1,0,0,0-.71,1V19H16V34a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V19H20v-.82L33.29,14A1,1,0,0,0,34,13V7A1,1,0,0,0,33,6Z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeBlockQuote=t.clrIconSVG('<path d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeAlignRightText=t.clrIconSVG('<path d="M14.65,27.1a1.1,1.1,0,0,0,1.1,1.1H30V26H15.75A1.1,1.1,0,0,0,14.65,27.1Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6.9,21.1A1.1,1.1,0,0,0,8,22.2H30V20H8A1.1,1.1,0,0,0,6.9,21.1Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M13.4,15.1a1.1,1.1,0,0,0,1.1,1.1H30V14H14.5A1.1,1.1,0,0,0,13.4,15.1Z" class="clr-i-outline clr-i-outline-path-3" /><path d="M6.75,8a1.1,1.1,0,1,0,0,2.2H30V8Z" class="clr-i-outline clr-i-outline-path-4" />'),a.ClrShapeText=t.clrIconSVG('<path d="M12.19,8.84a1.45,1.45,0,0,0-1.4-1h-.12a1.46,1.46,0,0,0-1.42,1L1.14,26.56a1.29,1.29,0,0,0-.14.59,1,1,0,0,0,1,1,1.12,1.12,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.64,1.64,0,0,0-.14-.57ZM6.08,20.71l4.59-10.22,4.6,10.22Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M32.24,14.78A6.35,6.35,0,0,0,27.6,13.2a11.36,11.36,0,0,0-4.7,1,1,1,0,0,0-.58.89,1,1,0,0,0,.94.92,1.23,1.23,0,0,0,.39-.08,8.87,8.87,0,0,1,3.72-.81c2.7,0,4.28,1.33,4.28,3.92v.5a15.29,15.29,0,0,0-4.42-.61c-3.64,0-6.14,1.61-6.14,4.64v.05c0,2.95,2.7,4.48,5.37,4.48a6.29,6.29,0,0,0,5.19-2.48V26.9a1,1,0,0,0,1,1,1,1,0,0,0,1-1.06V19A5.71,5.71,0,0,0,32.24,14.78Zm-.56,7.7c0,2.28-2.17,3.89-4.81,3.89-1.94,0-3.61-1.06-3.61-2.86v-.06c0-1.8,1.5-3,4.2-3a15.2,15.2,0,0,1,4.22.61Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeUnderline=t.clrIconSVG('<path d="M18,28.17c5.08,0,8.48-3.08,8.48-9V8.54a1.15,1.15,0,1,0-2.3,0v10.8c0,4.44-2.38,6.71-6.13,6.71s-6.21-2.47-6.21-6.85V8.54a1.15,1.15,0,1,0-2.3,0v10.8C9.53,25.09,13,28.17,18,28.17Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M31,30H5a1.11,1.11,0,0,0,0,2.21H31A1.11,1.11,0,0,0,31,30Z" class="clr-i-outline clr-i-outline-path-2" />'),a.ClrShapeAlignBottom=t.clrIconSVG('<path d="M34,30H2a1,1,0,0,0,0,2H34a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M16,5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V28H16ZM14,26H8V6h6Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M30,13a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V28H30ZM28,26H22V14h6Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeAlignMiddle=t.clrIconSVG('<path d="M34,17H30V11a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1v6H16V5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V17H2a1,1,0,0,0,0,2H6V31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,0-2ZM14,30H8V6h6Zm14-6H22V12h6Z" class="clr-i-outline clr-i-outline-path-1" />'),a.ClrShapeAlignTop=t.clrIconSVG('<path d="M34,4H2A1,1,0,0,0,2,6H34a1,1,0,0,0,0-2Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6,31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H6ZM8,10h6V30H8Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M20,23a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H20Zm2-13h6V22H22Z" class="clr-i-outline clr-i-outline-path-3" />'),a.ClrShapeLanguage=t.clrIconSVG('<path d="M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5\n\t\tc-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z" class="clr-i-outline clr-i-outline-path-2" /><path d="M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9\n\t\tc-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z" class="clr-i-outline clr-i-outline-path-3" /><polygon points="11,16.5 10,19.6 12,19.6 11,16.5 \t" class="clr-i-solid clr-i-solid-path-1" /><path d="M30.3,3h-16v5h4v2h-13c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1h6.7v-7h11c1.7,0,3-1.3,3-3V6\n\t\tC33.3,4.3,32,3,30.3,3z M13.1,22.9l-0.5-1.6H9.5l-0.6,1.6H6.5L9.8,14h2.4l3.3,8.9L13.1,22.9z M28.3,15v2c-1.3,0-2.7-0.4-3.9-1\n\t\tc-1.2,0.6-2.6,0.9-4,1l-0.1-2c0.7,0,1.4-0.1,2.1-0.3c-0.9-0.9-1.5-2-1.8-3.2h2.1c0.3,0.9,0.9,1.6,1.6,2.2c1.1-0.9,1.8-2.2,1.9-3.7\n\t\th-6V8h3V6h2v2h3.3l0.1,1c0.1,2.1-0.7,4.2-2.2,5.7C27.1,14.9,27.7,15,28.3,15z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeTextColor=t.clrIconSVG('<path d="M19.47,3.84a1.45,1.45,0,0,0-1.4-1H18a1.45,1.45,0,0,0-1.42,1L8.42,21.56a1.35,1.35,0,0,0-.14.59,1,1,0,0,0,1,1,1.11,1.11,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.59,1.59,0,0,0-.14-.57ZM13.36,15.71,18,5.49l4.6,10.22Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <rect x="4.06" y="25" width="28" height="8" rx="2" ry="2" class="clr-i-outline clr-i-outline-path-2"/>'),a.ClrShapeHighlighter=t.clrIconSVG('<path d="M15.82,26.06a1,1,0,0,1-.71-.29L8.67,19.33a1,1,0,0,1-.29-.71,1,1,0,0,1,.29-.71L23,3.54a5.55,5.55,0,1,1,7.85,7.86L16.53,25.77A1,1,0,0,1,15.82,26.06Zm-5-7.44,5,5L29.48,10a3.54,3.54,0,0,0,0-5,3.63,3.63,0,0,0-5,0Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M10.38,28.28A1,1,0,0,1,9.67,28L6.45,24.77a1,1,0,0,1-.22-1.09l2.22-5.44a1,1,0,0,1,1.63-.33l6.45,6.44A1,1,0,0,1,16.2,26l-5.44,2.22A1.33,1.33,0,0,1,10.38,28.28ZM8.33,23.82l2.29,2.28,3.43-1.4L9.74,20.39Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M8.94,30h-5a1,1,0,0,1-.84-1.55l3.22-4.94a1,1,0,0,1,1.55-.16l3.21,3.22a1,1,0,0,1,.06,1.35L9.7,29.64A1,1,0,0,1,8.94,30ZM5.78,28H8.47L9,27.34l-1.7-1.7Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <rect x="3.06" y="31" width="30" height="3" class="clr-i-outline clr-i-outline-path-4"/>'),a.ClrShapeOutdent=t.clrIconSVG('<path d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-5"/>\n  <path d="M9.56,22.54a1,1,0,0,1-.7-.3L4.61,18l4.25-4.24a1,1,0,0,1,1.41,1.41L7.44,18l2.83,2.83a1,1,0,0,1-.71,1.71Z" class="clr-i-outline clr-i-outline-path-6"/>'),a.ClrShapeIndent=t.clrIconSVG('<path d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z" class="clr-i-outline clr-i-outline-path-5"/>\n  <path d="M5.56,22.54a1,1,0,0,1-.7-1.71L7.68,18,4.86,15.17a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L10.51,18,6.27,22.24A1,1,0,0,1,5.56,22.54Z" class="clr-i-outline clr-i-outline-path-6"/>'),a.ClrShapeStrikethrough=t.clrIconSVG('<path d="M32.88,19.92h-30a1,1,0,1,1,0-2h30a1,1,0,0,1,0,2Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M7.27,15.86a12.9,12.9,0,0,1,1.29-.52A5.69,5.69,0,0,1,10.39,15a3.18,3.18,0,0,1,2.75,1.11A4.44,4.44,0,0,1,14,18.85v.49a13.83,13.83,0,0,0-4.29-.74,6.19,6.19,0,0,0-2.59.54A5,5,0,0,0,5.81,20H15.88V18.85a5.67,5.67,0,0,0-1.37-4,5.16,5.16,0,0,0-4-1.49,10,10,0,0,0-3.91.88.87.87,0,0,0-.44,1.18A.84.84,0,0,0,7.27,15.86Z" class="clr-i-outline clr-i-outline-path-2"/>\n  <path d="M21,20a5.94,5.94,0,0,1,.54-2.31,4.35,4.35,0,0,1,1.58-1.83,4.27,4.27,0,0,1,4.59,0,4.47,4.47,0,0,1,1.57,1.83A6.12,6.12,0,0,1,29.85,20h2a7.73,7.73,0,0,0-.78-3.19,6,6,0,0,0-2.18-2.45,5.74,5.74,0,0,0-3.1-.88,5.39,5.39,0,0,0-2.8.73,5.55,5.55,0,0,0-2,2.05V10a.87.87,0,0,0-.86-.86H20a.87.87,0,0,0-.86.86V20Z" class="clr-i-outline clr-i-outline-path-3"/>\n  <path d="M29.67,22a5.61,5.61,0,0,1-.36,1.07,4.47,4.47,0,0,1-1.57,1.85,4.32,4.32,0,0,1-4.59,0,4.35,4.35,0,0,1-1.58-1.85A5.64,5.64,0,0,1,21.2,22H19.09v4.13A.87.87,0,0,0,20,27h.2a.87.87,0,0,0,.86-.86V24.51a5.58,5.58,0,0,0,2,2.06,5.48,5.48,0,0,0,2.8.72,5.66,5.66,0,0,0,3.1-.88A5.88,5.88,0,0,0,31.09,24,7.09,7.09,0,0,0,31.73,22Z" class="clr-i-outline clr-i-outline-path-4"/>\n  <path d="M14,22v.76a3.34,3.34,0,0,1-1.62,2,5.34,5.34,0,0,1-2.69.72,3.78,3.78,0,0,1-2.36-.7,2.24,2.24,0,0,1-.94-1.9,2.29,2.29,0,0,1,.2-.91H4.62a4,4,0,0,0-.13,1,3.83,3.83,0,0,0,1.35,3.06A5.15,5.15,0,0,0,9.31,27.2,6,6,0,0,0,12,26.57a4.62,4.62,0,0,0,2-1.74V26a.86.86,0,0,0,.86.86H15a.86.86,0,0,0,.86-.86V22Z" class="clr-i-outline clr-i-outline-path-5"/>'),a.ClrShapeSubscript=t.clrIconSVG('<path d="M14.55,18l6.8,8.6a1.17,1.17,0,0,1-.92,1.9h0a1.17,1.17,0,0,1-.92-.44L13,19.91,6.6,28a1.17,1.17,0,0,1-.92.44h0a1.17,1.17,0,0,1-.92-1.9L11.55,18l-6.8-8.6a1.17,1.17,0,0,1,.92-1.9h0A1.17,1.17,0,0,1,6.63,8l6.44,8.13L19.5,8a1.17,1.17,0,0,1,.92-.44h0a1.17,1.17,0,0,1,.92,1.9Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M23,31.8,27.49,28a9.9,9.9,0,0,0,1.88-2.05A3.44,3.44,0,0,0,30,24a2.35,2.35,0,0,0-.35-1.27,2.44,2.44,0,0,0-1-.84,2.9,2.9,0,0,0-1.26-.28,3.36,3.36,0,0,0-1.83.5,5.64,5.64,0,0,0-1.48,1.42l-1-.81a5.11,5.11,0,0,1,4.36-2.37,4.35,4.35,0,0,1,2,.45,3.43,3.43,0,0,1,2,3.18,4.45,4.45,0,0,1-.68,2.35,10.9,10.9,0,0,1-2.24,2.46l-3.24,2.81H31.5V33H23Z" class="clr-i-outline clr-i-outline-path-2"/>'),a.ClrShapeSuperscript=t.clrIconSVG('<path d="M14.43,18l6.79,8.6a1.17,1.17,0,0,1-.92,1.9h0a1.17,1.17,0,0,1-.92-.44l-6.44-8.13L6.47,28a1.17,1.17,0,0,1-.92.44h0a1.17,1.17,0,0,1-.92-1.9L11.43,18l-6.8-8.6a1.17,1.17,0,0,1,.92-1.9h0A1.2,1.2,0,0,1,6.51,8l6.43,8.13L19.38,8a1.17,1.17,0,0,1,.92-.44h0a1.17,1.17,0,0,1,.92,1.9Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M22.85,14.47l4.51-3.85a9.37,9.37,0,0,0,1.88-2,3.43,3.43,0,0,0,.59-1.86,2.27,2.27,0,0,0-.36-1.27,2.38,2.38,0,0,0-.95-.83,2.77,2.77,0,0,0-1.26-.29,3.39,3.39,0,0,0-1.83.5,5.83,5.83,0,0,0-1.49,1.42l-1-.81a5.12,5.12,0,0,1,4.36-2.37,4.36,4.36,0,0,1,2,.45,3.47,3.47,0,0,1,2,3.18A4.44,4.44,0,0,1,30.58,9a11.14,11.14,0,0,1-2.24,2.46L25.1,14.31h6.28v1.33H22.85Z" class="clr-i-outline clr-i-outline-path-2"/>'),a.TextEditShapes={bold:a.ClrShapeBold,"bullet-list":a.ClrShapeBulletList,"checkbox-list":a.ClrShapeCheckboxList,"number-list":a.ClrShapeNumberList,"font-size":a.ClrShapeFontSize,italic:a.ClrShapeItalic,"justify-text":a.ClrShapeJustifyText,"center-text":a.ClrShapeCenterText,"align-left-text":a.ClrShapeAlignLeftText,"align-right-text":a.ClrShapeAlignRightText,"paint-roller":a.ClrShapePaintRoller,"block-quote":a.ClrShapeBlockQuote,text:a.ClrShapeText,underline:a.ClrShapeUnderline,"align-center":a.ClrShapeAlignCenter,"align-left":a.ClrShapeAlignLeft,"align-right":a.ClrShapeAlignRight,"align-bottom":a.ClrShapeAlignBottom,"align-middle":a.ClrShapeAlignMiddle,"align-top":a.ClrShapeAlignTop,language:a.ClrShapeLanguage,"text-color":a.ClrShapeTextColor,highlighter:a.ClrShapeHighlighter,indent:a.ClrShapeIndent,outdent:a.ClrShapeOutdent,strikethrough:a.ClrShapeStrikethrough,subscript:a.ClrShapeSubscript,superscript:a.ClrShapeSuperscript},"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.TextEditShapes)},"./src/shapes/travel-shapes.ts":
/*!*************************************!*\
  !*** ./src/shapes/travel-shapes.ts ***!
  \*************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.TravelShapes=a.ClrShapeOnHoliday=a.ClrShapeTrailer=a.ClrShapeFerry=a.ClrShapeCaravan=a.ClrShapeCampervan=a.ClrShapeBoat=a.ClrShapeBicycle=a.ClrShapeMapMarker=a.ClrShapeCompass=a.ClrShapeMap=a.ClrShapeCar=a.ClrShapeAirplane=a.ClrShapeTruck=void 0;var t=i(/*! ../utils/descriptor-config */"./src/utils/descriptor-config.ts"),c=i(/*! ../utils/svg-tag-generator */"./src/utils/svg-tag-generator.ts");a.ClrShapeTruck=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V19.7a6.45,6.45,0,0,1,1.56-.2c.15,0,.29,0,.44,0V14h4a2,2,0,0,1,2,2v1H28v2h4v5H29.6a4.54,4.54,0,0,0-8.34,0H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.49,4.49,0,0,0,8.92,0H33a1,1,0,0,0,1-1V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.43,28Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V21.49A4.45,4.45,0,0,0,21.25,24H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.48,4.48,0,0,0,8.91,0H34V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.42,28ZM32,17H26V14h4a2,2,0,0,1,2,2Z"/>'),a.ClrShapeAirplane=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M35.77,8.16a2.43,2.43,0,0,0-1.9-2L28,4.87a4.5,4.5,0,0,0-3.65.79L7,18.3,2.14,18.1A1.86,1.86,0,0,0,.91,21.41l5,3.93c.6.73,1,.59,10.93-4.82l.93,9.42a1.36,1.36,0,0,0,.85,1.18,1.43,1.43,0,0,0,.54.1,1.54,1.54,0,0,0,1-.41l2.39-2.18a1.52,1.52,0,0,0,.46-.83L25.2,15.9c3.57-2,6.95-3.88,9.36-5.25A2.43,2.43,0,0,0,35.77,8.16Zm-2.2.75c-2.5,1.42-6,3.41-9.76,5.47l-.41.23L21.07,27.28l-1.47,1.34L18.5,17.32,17.17,18C10,22,7.61,23.16,6.79,23.52l-4.3-3.41,5.08.22,18-13.06a2.51,2.51,0,0,1,2-.45l5.85,1.26a.43.43,0,0,1,.35.37A.42.42,0,0,1,33.57,8.91Z"/>\n            <path class="clr-i-outline clr-i-outline-path-2" d="M7,12.54l3.56,1,1.64-1.19-4-1.16L10,10.09l5.47-.16,2.3-1.67L10,8.5a1.25,1.25,0,0,0-.7.17L6.67,10.2A1.28,1.28,0,0,0,7,12.54Z"/>\n            <path class="clr-i-solid clr-i-solid-path-1" d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z"/>\n            <path class="clr-i-solid clr-i-solid-path-2" d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z"/>'),a.ClrShapeCar=c.clrIconSVG('<rect class="clr-i-outline clr-i-outline-path-1" x="15" y="17" width="3" height="2"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M26.45,14.17A22.1,22.1,0,0,0,19.38,7a9.64,9.64,0,0,0-9-.7,8.6,8.6,0,0,0-4.82,6.4c-.08.47-.14.92-.2,1.36A4,4,0,0,0,2,18v6.13a2,2,0,0,0,2,2V20H4V18a2,2,0,0,1,2-2H24.73A7.28,7.28,0,0,1,32,23.27V24h-2a4.53,4.53,0,1,0,.33,2H32a2,2,0,0,0,2-2v-.73A9.28,9.28,0,0,0,26.45,14.17ZM11,14H6.93c0-.31.09-.63.15-1A6.52,6.52,0,0,1,11,8h0Zm2,0V7.58a8.17,8.17,0,0,1,5.36,1.16A19,19,0,0,1,23.9,14ZM25.8,28.38a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,25.8,28.38Z"/>\n                <path class="clr-i-outline clr-i-outline-path-3" d="M14.17,24a4.53,4.53,0,1,0,.33,2h5.3c0-.08,0-.17,0-.25A6,6,0,0,1,20,24ZM10,28.38a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,10,28.38Z"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M26.87,14.28A22.36,22.36,0,0,0,19.65,6.9a9.64,9.64,0,0,0-9-.7,8.6,8.6,0,0,0-4.82,6.4c-.08.49-.15,1-.21,1.4h-1A2.59,2.59,0,0,0,2,16.59v8.55a.86.86,0,0,0,.86.86H4.59c0-.13,0-.26,0-.39a5.77,5.77,0,0,1,7.71-5.45l-1,1a4.56,4.56,0,0,0-4.34,1.58,3,3,0,0,0-.63.93A4.5,4.5,0,1,0,14.82,26h5.48c0-.13,0-.26,0-.39A5.77,5.77,0,0,1,28,20.16l-1,1a4.56,4.56,0,0,0-4.34,1.58,3,3,0,0,0-.63.93A4.5,4.5,0,1,0,30.53,26h2.61a.86.86,0,0,0,.86-.86V23.36A9.39,9.39,0,0,0,26.87,14.28ZM12,14H8c0-.35.1-.71.16-1.07a6.52,6.52,0,0,1,3.87-5h0ZM10.36,28.36a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,10.36,28.36ZM19,19H16V17h3Zm-6-5V7.47a8.16,8.16,0,0,1,5.4,1.15A19.15,19.15,0,0,1,24,14ZM26.06,28.36a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,26.06,28.36Z"/>'),a.ClrShapeMap=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M33.59,6.19A1,1,0,0,0,32.7,6L23.09,9,13.46,4.11a1,1,0,0,0-.84,0L2.62,8.2A1,1,0,0,0,2,9.13V29.61a1,1,0,0,0,1.38.92L13,26.58l9.59,4.92a1,1,0,0,0,.46.11,1,1,0,0,0,.3,0l10-3.12a1,1,0,0,0,.7-1V7A1,1,0,0,0,33.59,6.19ZM32,26.75l-8.32,2.6V27.06h-1.6v2l-8.4-4.31V23.06h-1.6v1.72L4,28.11V9.79l8.08-3.33V8.81h1.6V6.47l8.4,4.3v2.1h1.6V11L32,8.36Z"/>\n                <rect class="clr-i-outline clr-i-outline-path-2" x="22.08" y="15.06" width="1.6" height="3.81"/>\n                <rect class="clr-i-outline clr-i-outline-path-3" x="22.08" y="21.06" width="1.6" height="3.81"/>\n                <rect class="clr-i-outline clr-i-outline-path-4" x="12.08" y="11.06" width="1.6" height="3.81"/>\n                <rect class="clr-i-outline clr-i-outline-path-5" x="12.08" y="17.13" width="1.6" height="3.75"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M33.31,7.35,25,9.94V14H23V10.29L14,5.68V9H12V5.27l-9.67,4A.53.53,0,0,0,2,9.75V30.45a.53.53,0,0,0,.74.49L12,27.12V23h2v4.53l9,4.61V28h2v3.79l8.63-2.7a.53.53,0,0,0,.37-.51V7.86A.53.53,0,0,0,33.31,7.35ZM14,21H12V17h2Zm0-6H12V11h2ZM25,26H23V22h2Zm0-6H23V16h2Z"/>'),a.ClrShapeCompass=c.clrIconSVG('<path d="M20.82,15.31h0L10.46,9c-.46-.26-1.11.37-.86.84l6.15,10.56,10.56,6.15a.66.66,0,0,0,.84-.86Zm-4,4,3-3,4.55,7.44Z" class="clr-i-outline clr-i-outline-path-1" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm1,29.95V29.53H17v2.42A14,14,0,0,1,4.05,19H6.47V17H4.05A14,14,0,0,1,17,4.05V6.47h2V4.05A14,14,0,0,1,31.95,17H29.53v2h2.42A14,14,0,0,1,19,31.95Z" class="clr-i-outline clr-i-outline-path-2" />\n            <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM6.47,19H4.05c0-.33-.05-.66-.05-1s0-.67.05-1H6.47ZM17,4.05c.33,0,.66-.05,1-.05s.67,0,1,.05V6.47H17Zm2,27.9c-.33,0-.66.05-1,.05s-.67,0-1-.05V29.53h2Zm8-5.58a.59.59,0,0,1-.69.16L15.75,20.38,9.6,9.82c-.25-.47.39-1.1.86-.84l10.37,6.33h0l6.33,10.37A.59.59,0,0,1,27,26.37ZM29.53,19V17h2.42c0,.33.05.66.05,1s0,.67-.05,1Z" class="clr-i-solid clr-i-solid-path-1" />\n            <polygon points="16.77 19.35 24.35 23.77 19.8 16.33 16.77 19.35" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeMapMarker=c.clrIconSVG('<path class="clr-i-outline clr-i-outline-path-1" d="M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z"/>\n                <path class="clr-i-outline clr-i-outline-path-2" d="M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2ZM23.59,24l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31a9.78,9.78,0,1,1,19.56,0C27.78,17.79,25.36,21.4,23.59,24Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,6.72a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,18,6.72Zm0,9.46a3.73,3.73,0,1,1,3.73-3.73A3.73,3.73,0,0,1,18,16.17Z"/>\n                <path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M29.77,13.49a7.49,7.49,0,0,1-2-.33c0,.19,0,.38,0,.57,0,4.06-2.42,7.67-4.19,10.31l-.36.53c-1.72,2.58-4,5.47-5.23,6.9-1.18-1.43-3.51-4.32-5.23-6.9L12.42,24c-1.77-2.64-4.2-6.25-4.2-10.31A9.77,9.77,0,0,1,22.56,5.09a7.45,7.45,0,0,1,.52-2A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z"/>\n                <circle class="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>\n                <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A11.79,11.79,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42A11.79,11.79,0,0,0,18,2Zm0,17a6.56,6.56,0,1,1,6.56-6.56A6.56,6.56,0,0,1,18,19Z"/>\n                <circle class="clr-i-solid clr-i-solid-path-2" cx="18" cy="12.44" r="3.73"/>\n                <path class="clr-i-solid--badged clr-i-solid-path-1--badged" d="M29.77,13.49A7.47,7.47,0,0,1,24.38,11a6.58,6.58,0,1,1-1.61-3,7.42,7.42,0,0,1,.31-4.84A11.75,11.75,0,0,0,6.22,13.73c0,4.67,2.62,8.58,4.54,11.43l.35.52a99.61,99.61,0,0,0,6.14,8l.76.89.76-.89a99.82,99.82,0,0,0,6.14-8l.35-.53c1.91-2.85,4.53-6.75,4.53-11.42C29.78,13.65,29.77,13.57,29.77,13.49Z"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-2--badged" cx="18" cy="12.44" r="3.73"/>\n                <circle class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge" cx="30" cy="6" r="5"/>'),a.ClrShapeBicycle=c.clrIconSVG('<path d="M8.5,29.65A6.51,6.51,0,0,1,2,23.15a6.39,6.39,0,0,1,6.5-6.36A6.39,6.39,0,0,1,15,23.15,6.51,6.51,0,0,1,8.5,29.65Zm0-11a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,8.5,18.65Z" class="clr-i-outline clr-i-outline-path-1" /><path d="M27.5,29.65a6.51,6.51,0,0,1-6.5-6.5,6.5,6.5,0,0,1,13,0A6.51,6.51,0,0,1,27.5,29.65Zm0-11a4.5,4.5,0,1,0,4.5,4.5A4.51,4.51,0,0,0,27.5,18.65Z" class="clr-i-outline clr-i-outline-path-2" /><path d="M19,24.66H8a1,1,0,0,1-.89-1.45l5-10,1.78.9L9.62,22.73H19Z" class="clr-i-outline clr-i-outline-path-3" /><rect x="13" y="12.68" width="11" height="1.91" class="clr-i-outline clr-i-outline-path-4" /><path d="M28,24.66a1,1,0,0,1-.94-.66L22.29,10.66H20a1,1,0,0,1-1-1,1,1,0,0,1,1-.93h3a.94.94,0,0,1,.94.6l5,14a1,1,0,0,1-.6,1.27A1,1,0,0,1,28,24.66Z" class="clr-i-outline clr-i-outline-path-5" /><path d="M13,14.66a1,1,0,0,1-.71-.29l-1.7-1.71H8a1,1,0,0,1-1-1,.94.94,0,0,1,1-1h3a1.08,1.08,0,0,1,.75.27l2,2a1,1,0,0,1,0,1.41A1,1,0,0,1,13,14.66Z" class="clr-i-outline clr-i-outline-path-6" /><path d="M15,21.9c-0.2-2-1.2-3.8-2.9-4.9l-2.5,4.9H15z" class="clr-i-solid clr-i-solid-path-1" /><path d="M7.2,23.4c-0.2-0.3-0.2-0.7,0-1l3.2-6.3c-0.6-0.2-1.2-0.2-1.8-0.2C5,15.9,2,18.8,2,22.4c0,3.6,2.9,6.5,6.5,6.5\n\tc3,0,5.6-2.1,6.3-5H8C7.7,23.9,7.3,23.7,7.2,23.4z" class="clr-i-solid clr-i-solid-path-2" /><path d="M19,21.9h-4c0,0.2,0,0.3,0,0.5c0,0.5-0.1,1-0.2,1.5H19V21.9z" class="clr-i-solid clr-i-solid-path-3" /><path d="M27.5,15.9c-0.3,0-0.6,0-0.9,0.1l2.4,6.6c0.2,0.5-0.1,1.1-0.6,1.3c-0.1,0-0.2,0.1-0.3,0.1c-0.4,0-0.8-0.3-0.9-0.7l-2.4-6.7\n\tc-3.2,1.6-4.5,5.5-3,8.7c1.6,3.2,5.5,4.5,8.7,3c3.2-1.6,4.5-5.5,3-8.7C32.2,17.3,30,15.9,27.5,15.9z" class="clr-i-solid clr-i-solid-path-4" /><path d="M24.7,16.7c0.6-0.3,1.3-0.5,1.9-0.6l-2.7-7.4C23.8,8.2,23.4,8,23,7.9h-3c-0.6,0-1,0.5-1,1.1c0,0.5,0.4,0.9,1,0.9\n\tc0,0,0,0,0,0h2.3l0.7,2h-9.6l-1.7-1.7C11.5,10.1,11.3,10,11,10H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6l1.2,1.2l-1.5,3\n\tc0.6,0.2,1.3,0.5,1.8,0.8l1.6-3.2h10L24.7,16.7z" class="clr-i-solid clr-i-solid-path-5" />'),a.ClrShapeBoat=c.clrIconSVG('<path d="M29.1,27.1C28,27,26.9,27.4,26,28.2c-1.1,1.1-2.9,1.1-4.1,0c-1-0.7-2.1-1.1-3.3-1.1c-1.2-0.1-2.4,0.3-3.3,1.1\n\t\tC14.7,28.7,14,29,13.2,29s-1.5-0.3-2.1-0.8c-1-0.8-2.2-1.2-3.4-1.2s-2.4,0.4-3.4,1.2C3.7,28.7,2.8,29,2,29v2\n\t\tc1.3,0.1,2.6-0.3,3.6-1.2C6.2,29.3,7.1,29,7.9,29c0.7,0,1.5,0.3,2.1,0.8c1.8,1.6,4.6,1.6,6.5,0c0.6-0.5,1.3-0.8,2.1-0.8\n\t\tc0.7,0,1.4,0.3,2,0.8c1.9,1.6,4.6,1.6,6.5,0c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.4,0.3,1.9,0.8c0.9,0.7,1.9,1.1,3,1.2v-2\n\t\tc-1,0-1.2-0.4-1.7-0.8C31.4,27.5,30.3,27.1,29.1,27.1z" class="clr-i-outline clr-i-outline-path-1" /><path d="M6,23c0-0.6,0.5-1,1.1-1H32l-3.5,3.1h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.7-0.8,0.6-2.1-0.2-2.8\n\t\tC33,20.2,32.6,20,32.1,20h-25c-1.7,0-3,1.3-3,3v3.2c0.5-0.5,1.2-0.8,1.9-1.1V23z" class="clr-i-outline clr-i-outline-path-2" /><path d="M8.9,19H15v-7.8c0-0.6-0.3-1.2-0.8-1.6C13.3,8.9,12,9.1,11.4,10l-4.1,5.9c-0.4,0.6-0.4,1.4-0.1,2.1C7.5,18.6,8.2,19,8.9,19\n\t\tz M13.1,11.2L13,17H8.9L13.1,11.2z" class="clr-i-outline clr-i-outline-path-3" /><path d="M26,18c0.4-0.6,0.4-1.4,0-2L19.7,5.6c-0.4-0.6-1-1-1.7-1c-1.1,0-2,0.9-2,2V19h8.3C25,19,25.7,18.6,26,18z M17.9,6.6\n\t\tl6.4,10.5h-6.4V6.6z" class="clr-i-outline clr-i-outline-path-4" /><path d="M34,31c-1.1-0.1-2.1-0.5-3-1.2c-0.5-0.5-1.2-0.8-2-0.8c-0.7,0-1.5,0.3-2,0.8c-0.9,0.8-2,1.1-3.1,1.1c-1.2,0-2.4-0.4-3.3-1.1\n\tc-1.2-1.1-3-1.1-4.1,0c-0.9,0.8-2.1,1.2-3.4,1.2c-1.2,0-2.3-0.4-3.2-1.2c-0.6-0.5-1.3-0.8-2-0.8c-0.8,0-1.7,0.3-2.3,0.8\n\tc-1,0.8-2.3,1.2-3.5,1.1V29c0.8,0,1.7-0.3,2.3-0.9c1-0.8,2.2-1.2,3.4-1.1c1.2,0,2.4,0.4,3.3,1.2c1.2,1.1,3,1.1,4.2,0\n\tc1.9-1.6,4.7-1.6,6.5,0c1.2,1.1,3,1.1,4.1,0c0.9-0.8,2.1-1.2,3.3-1.2c1.1,0,2.2,0.4,3,1.2C32.8,28.7,33,29,34,29L34,31z" class="clr-i-solid clr-i-solid-path-1" /><path d="M4.1,26.2c0.6-0.5,1.2-0.8,1.9-1V23c0-0.6,0.4-1.1,1-1.1h25L28.4,25h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2\n\tc0.7-0.9,0.5-2.1-0.4-2.8C32.9,20.1,32.4,20,32,20H7c-1.7,0-3,1.3-3,3L4.1,26.2L4.1,26.2z" class="clr-i-solid clr-i-solid-path-2" /><path d="M14.9,18.9H8.9c-1.1,0-2-0.9-2-2c0-0.4,0.1-0.8,0.4-1.2l4.1-5.8c0.6-0.9,1.9-1.1,2.8-0.5c0.5,0.4,0.8,1,0.8,1.6V18.9z" class="clr-i-solid clr-i-solid-path-3" /><path d="M24.3,18.9H16V6.4c0-1.1,0.9-2,2-2c0.7,0,1.3,0.4,1.7,1L26,15.8c0.6,1,0.2,2.2-0.7,2.7C25,18.7,24.6,18.8,24.3,18.9\n\tL24.3,18.9z" class="clr-i-solid clr-i-solid-path-4" />'),a.ClrShapeCampervan=c.clrIconSVG('<path d="M9.5,24C9.5,24,9.5,24,9.5,24C7.6,24,6,25.6,6,27.5c0,0,0,0,0,0C6,29.4,7.6,31,9.5,31c1.9,0,3.5-1.6,3.5-3.5\n\t\tS11.4,24,9.5,24z M9.5,29C8.7,29,8,28.3,8,27.5S8.7,26,9.5,26s1.5,0.7,1.5,1.5S10.3,29,9.5,29z" class="clr-i-outline clr-i-outline-path-1" /><path d="M23.5,24C23.5,24,23.5,24,23.5,24c-1.9,0-3.5,1.6-3.5,3.5c0,0,0,0,0,0c0,1.9,1.5,3.5,3.5,3.5c1.9,0,3.5-1.6,3.5-3.5\n\t\tS25.4,24,23.5,24z M23.5,29c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S24.3,29,23.5,29z" class="clr-i-outline clr-i-outline-path-2" /><path d="M33,20.1V20h-0.1l-3.5-5.5C31,13.6,32,12,32,10.3V9.7C32,7.1,29.9,5,27.3,5h-8.5c-1.9,0-3.7,1.2-4.4,3H5c-1.7,0-3,1.3-3,3\n\t\tv17h2V11c0-0.6,0.4-1,1-1h10.9L16,9.2C16.3,7.9,17.4,7,18.7,7h8.5C28.8,7,30,8.2,30,9.7v0.5c0,1.5-1.2,2.7-2.7,2.7H24v9h7.8\n\t\tl0.2,0.3V25c0,0.6-0.4,1-1,1h-2v2h2c1.7,0,3-1.3,3-3v-3.3L33,20.1z M26,20v-5h1.5l3.1,5H26z" class="clr-i-outline clr-i-outline-path-3" /><rect x="19" y="9" width="8" height="2" class="clr-i-outline clr-i-outline-path-4" /><polygon points="20,22 22,22 22,13 15,13 15,28 17,28 17,15 20,15 \t" class="clr-i-outline clr-i-outline-path-5" /><path d="M6,20h7v-7H6V20z M8,15h3v3H8V15z" class="clr-i-outline clr-i-outline-path-6" /><path d="M9.5,24C7.6,24,6,25.6,6,27.5S7.6,31,9.5,31c0,0,0,0,0,0c1.9,0,3.5-1.6,3.5-3.5c0,0,0-0.1,0-0.1C13,25.5,11.4,24,9.5,24z"\n\t\t class="clr-i-solid clr-i-solid-path-1" /><circle cx="23.5" cy="27.5" r="3.5" class="clr-i-solid clr-i-solid-path-2" /><path d="M29.5,14.5C31,13.6,32,12,32,10.2V9.7c0,0,0,0,0-0.1C32,7,29.9,5,27.3,5h-8.5c-1.9,0-3.7,1.2-4.4,3H5c-1.7,0-3,1.3-3,3v17\n\t\th2V11c0-0.6,0.4-1,1-1h10.9L16,9.2C16.3,7.9,17.4,7,18.7,7h8.5C28.8,7,30,8.2,30,9.7v0.5c0,1.5-1.2,2.7-2.7,2.7H27h-3v9h7.8\n\t\tl0.2,0.3V25c0,0.6-0.4,1-1,1h-2v2h2c1.7,0,3-1.3,3-3v-3.3L29.5,14.5z" class="clr-i-solid clr-i-solid-path-3" /><rect x="19" y="9" width="7.9" height="2" class="clr-i-solid clr-i-solid-path-4" /><polygon points="20,22 21.9,22 21.9,13 15,13 15,28 16.9,28 16.9,15 20,15 \t" class="clr-i-solid clr-i-solid-path-5" /><rect x="6" y="13" width="6.9" height="7" class="clr-i-solid clr-i-solid-path-6" />'),a.ClrShapeCaravan=c.clrIconSVG('<path d="M13.5,21C11,21,9,23,9,25.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5C18,23,16,21,13.5,21z M13.5,28c-1.4,0-2.5-1.1-2.5-2.5\n\t\ts1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S14.9,28,13.5,28z" class="clr-i-outline clr-i-outline-path-1" /><path d="M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5\n\t\tc-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13\n\t\tc0.6,0,1-0.4,1-1S33.6,24,33,24z" class="clr-i-outline clr-i-outline-path-2" /><path d="M16,12H7v6h9V12z M14,16H9v-2h5V16z" class="clr-i-outline clr-i-outline-path-3" /><path d="M13.5,30C11,30,9,28,9,25.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5C18,28,16,30,13.5,30z" class="clr-i-solid clr-i-solid-path-1" /><path d="M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5\n\tc-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13\n\tc0.6,0,1-0.4,1-1S33.6,24,33,24z" class="clr-i-solid clr-i-solid-path-2" /><path d="M16,18H7v-6h9V18z" class="clr-i-solid clr-i-solid-path-3" />'),a.ClrShapeFerry=c.clrIconSVG('<path d="M29,25.1c-1.2,0-2.3,0.4-3.3,1.1c0,0,0,0,0,0c-1.1,1.1-3,1.1-4.1,0c-0.9-0.8-2.1-1.2-3.3-1.2c-1.2,0-2.3,0.4-3.2,1.2\n\t\tc-1.2,1.1-3,1.1-4.2,0C10,25.4,8.8,25,7.6,25c-1.2,0-2.4,0.4-3.4,1.1C3.6,26.7,2.8,27,2,27v2c1.3,0.1,2.5-0.4,3.4-1.2\n\t\tC6.1,27.3,6.9,27,7.7,27c0.8,0,1.5,0.3,2.1,0.8c1.9,1.6,4.7,1.6,6.5,0c0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.5,0.3,2.1,0.8\n\t\tc1.9,1.6,4.6,1.6,6.5,0c0.5-0.5,1.3-0.8,2-0.8c0.7,0,1.5,0.3,2,0.8c0.9,0.7,2,1.1,3.1,1.2v-1.9c-0.7,0-1.4-0.3-1.9-0.9\n\t\tC31.3,25.4,30.1,25,29,25.1z" class="clr-i-outline clr-i-outline-path-1" /><path d="M5.9,23.2V20H32l-3.5,3h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.2-0.2c0.5-0.6,0.5-1.4,0.2-2.1c-0.4-0.7-1-1-1.8-1h-4.4\n\t\tL22.5,11H17c-1.7,0-3,1.3-3,3h-2V8.1H6v6.1c-1.2,0.4-2,1.5-2,2.8v1.1V20v4.3l0.1-0.1C4.6,23.7,5.2,23.4,5.9,23.2z M8,10h2v4H8V10z\n\t\t M6,17c0-0.6,0.4-1,1-1h9v-2c0-0.6,0.4-1,1-1h5l0.6,1H18v2h5.8l1.2,2.1H6V17z" class="clr-i-outline clr-i-outline-path-2" /><path d="M28.2,25c-1.2,0-2.4,0.4-3.3,1.2c-1.2,1.1-3,1.1-4.1,0c-1.9-1.6-4.6-1.6-6.5,0c-1.2,1.1-2.9,1.1-4.1,0\n\t\tc-0.9-0.8-2-1.2-3.2-1.2c-1.2,0-2.3,0.4-3.2,1.2C3.4,26.7,2.7,27,2,27v2c1.1-0.1,2.2-0.5,3.1-1.2C5.6,27.3,6.3,27,7,27\n\t\tc0.7,0,1.5,0.3,2,0.8c1.9,1.6,4.7,1.6,6.6,0c0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.5,0.3,2.1,0.8c1.9,1.6,4.7,1.6,6.5,0\n\t\tc0.6-0.5,1.3-0.8,2.1-0.8c0.8,0,1.6,0.3,2.1,0.8c0.9,0.8,2.2,1.3,3.4,1.2v-2c-0.8,0-1.6-0.3-2.2-0.8C30.7,25.4,29.5,25,28.2,25z" class="clr-i-solid clr-i-solid-path-1" /><path d="M5.8,23.2v-3.3h26.1L28.4,23h0.2c0.8,0,1.6,0.2,2.2,0.5l2.5-2.2l0.1-0.2c0.7-0.9,0.5-2.1-0.4-2.8c-0.3-0.3-0.8-0.4-1.2-0.4\n\t\th-4.1l-5.4-7h-5.5c-1.7,0-3,1.3-3,3h-2V8H6v6.2c-1.2,0.4-2.1,1.5-2.1,2.8l0,7.2l0.1,0C4.5,23.7,5.1,23.4,5.8,23.2z M17.9,14h4.2\n\t\tl1.4,2h-5.7V14z M7.9,10h2v4h-2V10z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeTrailer=c.clrIconSVG('<path d="M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8S18.2,19.2,15,19.2z M15,29.2c-2.3,0-4.2-1.9-4.2-4.2\n\t\ts1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S17.3,29.2,15,29.2z" class="clr-i-outline clr-i-outline-path-1" /><rect x="14" y="24" width="2" height="2" class="clr-i-outline clr-i-outline-path-2" /><path d="M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1\n\t\tc0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z M26,13H4v-2h22V13z" class="clr-i-outline clr-i-outline-path-3" /><path d="M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1\n\tc0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z" class="clr-i-solid clr-i-solid-path-1" /><path d="M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8l0,0C20.8,21.8,18.2,19.2,15,19.2z M16,26h-2v-2h2V26z" class="clr-i-solid clr-i-solid-path-2" />'),a.ClrShapeOnHoliday=c.clrIconSVG('<path d="M18.08,2.34c-8.82,0-16,6.28-16,14s7.18,14,16,14A17.91,17.91,0,0,0,23,29.66l5.53,3.52a1,1,0,0,0,1.38-.3,1,1,0,0,0,.16-.54V25.61a13,13,0,0,0,4-9.27C34.08,8.62,26.9,2.34,18.08,2.34ZM28.37,24.45a1,1,0,0,0-.32.73v5.34l-4.38-2.79a1,1,0,0,0-.83-.11,16,16,0,0,1-4.76.72c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.1,11.1,0,0,1,28.37,24.45Z" class="clr-i-outline clr-i-outline-path-1"/>\n  <path d="M31.1,15.82,31,15.67,28.5,13.44a3.25,3.25,0,0,0-2.39-.84l-5.38.34-3.59-3a.81.81,0,0,0-.52-.19H13.56a.78.78,0,0,0-.69.4.77.77,0,0,0,0,.79l1.36,2.44-4.71.29,1.31,1.52,15.39-1a1.65,1.65,0,0,1,1.22.43l2.36,2.13a.11.11,0,0,1,0,.07c0,.06-.09.05-.1.06H21.82l-.35.37-5.19,5.53H14.64l2.73-5.9H8.54L7.13,14.16,6.51,13a.8.8,0,0,0-1-.2A.81.81,0,0,0,5.2,13.9l2,3.94a1.21,1.21,0,0,0,1.08.65h6.57l-1.94,4.18A1.2,1.2,0,0,0,13,23.83a1.22,1.22,0,0,0,1,.56h2.43a1.17,1.17,0,0,0,.88-.39l5.18-5.51h7.16a1.65,1.65,0,0,0,1.52-.91A1.74,1.74,0,0,0,31.1,15.82ZM14.92,11.31h1.41l2.09,1.77L16,13.23Z" class="clr-i-outline clr-i-outline-path-2"/>\n  \n  <path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a17.91,17.91,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.38-.3A1,1,0,0,0,30,32.5V25.77a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM29.84,18H21.51a.42.42,0,0,0-.3.13l-5.3,5.64a.39.39,0,0,1-.29.13H13.19a.41.41,0,0,1-.37-.58l2.47-5.32H7.46a.42.42,0,0,1-.36-.22l-2.7-5H6.24a.53.53,0,0,1,.39.18l1.56,1.69a.38.38,0,0,0,.33.14l6.18-.38-2-3.55h2.89a.47.47,0,0,1,.31.11L19.63,14l6.69-.35a2.44,2.44,0,0,1,1.81.63l2.47,2.23A.92.92,0,0,1,29.84,18Z" class="clr-i-solid clr-i-solid-path-1"/>\n  '),a.TravelShapes={truck:a.ClrShapeTruck,airplane:a.ClrShapeAirplane,car:a.ClrShapeCar,map:a.ClrShapeMap,compass:a.ClrShapeCompass,"map-marker":a.ClrShapeMapMarker,bicycle:a.ClrShapeBicycle,boat:a.ClrShapeBoat,campervan:a.ClrShapeCampervan,caravan:a.ClrShapeCaravan,ferry:a.ClrShapeFerry,trailer:a.ClrShapeTrailer,"on-holiday":a.ClrShapeOnHoliday},Object.defineProperty(a.TravelShapes,"plane",t.descriptorConfig(a.TravelShapes.airplane)),Object.defineProperty(a.TravelShapes,"auto",t.descriptorConfig(a.TravelShapes.car)),"undefined"!=typeof window&&window.hasOwnProperty("ClarityIcons")&&window.ClarityIcons.add(a.TravelShapes)},"./src/utils/descriptor-config.ts":
/*!****************************************!*\
  !*** ./src/utils/descriptor-config.ts ***!
  \****************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.descriptorConfig=void 0,a.descriptorConfig=function(l){return{enumerable:!0,writable:!0,configurable:!0,value:l}}},"./src/utils/shape-template-observer.ts":
/*!**********************************************!*\
  !*** ./src/utils/shape-template-observer.ts ***!
  \**********************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ShapeTemplateObserver=a.changeHandlerCallbacks=void 0,a.changeHandlerCallbacks={};var t=(Object.defineProperty(c,"instance",{get:function(){return c.singleInstance||(c.singleInstance=new c),c.singleInstance},enumerable:!1,configurable:!0}),c.prototype.subscribeTo=function(a,i){var t=this;return this.callbacks[a]?-1===this.callbacks[a].indexOf(i)&&this.callbacks[a].push(i):this.callbacks[a]=[i],function(){var l=t.callbacks[a].indexOf(i);t.callbacks[a].splice(l,1),0===t.callbacks[a].length&&delete t.callbacks[a]}},c.prototype.emitChanges=function(l,a){this.callbacks[l]&&this.callbacks[l].map(function(l){l(a)})},c);function c(){this.callbacks=a.changeHandlerCallbacks}a.ShapeTemplateObserver=t},"./src/utils/svg-tag-generator.ts":
/*!****************************************!*\
  !*** ./src/utils/svg-tag-generator.ts ***!
  \****************************************/
/*! no static exports found */function(l,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.clrIconSVG=void 0;a.clrIconSVG=function(l){var a="";return-1<l.indexOf("--badged")&&(a+="can-badge "),-1<l.indexOf("--alerted")&&(a+="can-alert "),-1<l.indexOf("clr-i-solid")&&(a+="has-solid "),(a?'<svg version="1.1" class="'+a+'" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"\n    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">':'<svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"\n    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" role="img">')+l+"</svg>"}}},c.c=t,c.d=function(l,a,i){c.o(l,a)||Object.defineProperty(l,a,{enumerable:!0,get:i})},c.r=function(l){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},c.t=function(a,l){if(1&l&&(a=c(a)),8&l)return a;if(4&l&&"object"==typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&l&&"string"!=typeof a)for(var t in a)c.d(i,t,function(l){return a[l]}.bind(null,t));return i},c.n=function(l){var a=l&&l.__esModule?function(){return l.default}:function(){return l};return c.d(a,"a",a),a},c.o=function(l,a){return Object.prototype.hasOwnProperty.call(l,a)},c.p="",c(c.s="./src/clr-icons-sfx.ts");function c(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return i[l].call(a.exports,a,a.exports,c),a.l=!0,a.exports}var i,t});
;/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.6.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.6.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.6.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.6.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.6.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
      $__default['default'](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default['default'](this._element).off(Util.TRANSITION_END);
      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.6.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.6.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.6.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.6.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.6.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

;
//# sourceMappingURL=scripts.js.map