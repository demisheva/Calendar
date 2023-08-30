(()=>{"use strict";var e={754:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),a=r.n(n),o=r(645),i=r.n(o)()(a());i.push([e.id,"*{margin:0;padding:0;box-sizing:border-box;font-family:Georgia,serif}.container{width:100%;height:100vh;background-color:#d2d2d2;color:#dedede;display:flex;justify-content:center;align-items:center}.calendar{width:45rem;height:52rem;background-color:#222227;box-shadow:0 .5rem 3rem rgba(0,0,0,.4)}.calendar-heading{width:100%;height:6rem;background-color:#0d466d;display:grid;grid-template-columns:8fr 1fr 1fr;align-items:center;padding:0 2rem;text-align:center}.calendar-heading i{font-size:2.5rem}.calendar-heading i:hover{cursor:pointer;color:#67a3cb}.calendar-heading .date{font-size:3rem;font-weight:400;letter-spacing:.2rem}.weekdays{width:100%;height:5rem;padding:0 .4rem;display:flex;align-items:center}.weekdays div{font-size:1.5rem;font-weight:400;letter-spacing:.1rem;width:6.3142857143rem;display:flex;justify-content:center;align-items:center;text-shadow:0 .3rem .5rem rgba(0,0,0,.5)}.days{width:100%;display:flex;flex-wrap:wrap;padding:.2rem}.days div{font-size:1.4rem;margin:.3rem;width:5.7428571429rem;height:5rem;display:flex;justify-content:center;align-items:center;transition:background-color .2s}.days div:hover:not(.today){background-color:#262626}.prev-date,.next-date{opacity:.5}.today{background-color:#0d466d}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=n.base?d[0]+n.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=r(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var g=a(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);t[c].references--}for(var d=n(e,a),s=0;s<o.length;s++){var l=r(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),a=r.n(n),o=r(569),i=r.n(o),c=r(565),d=r.n(c),s=r(216),l=r.n(s),u=r(589),p=r.n(u),f=r(754),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m=new Date,h=()=>{m.setDate(1);const e=document.querySelector(".days"),t=new Date(m.getFullYear(),m.getMonth()+1,0).getDate(),r=new Date(m.getFullYear(),m.getMonth(),0).getDate(),n=m.getDay(),a=7-new Date(m.getFullYear(),m.getMonth()+1,0).getDay()-1;document.querySelector(".date").innerHTML=`${["January","February","March","April","May","June","July","August","September","October","November","December"][m.getMonth()]} ${m.getFullYear()}`;let o="";for(let e=n;e>0;e--)o+=`<div class='prev-date'>${r-e+1}</div>`;for(let e=1;e<=t;e++)e===(new Date).getDate()&&m.getMonth()===(new Date).getMonth()?o+=`<div class='today'>${e}</div>`:o+=`<div>${e}</div>`;for(let t=1;t<=a;t++)o+=`<div class='next-date'>${t}</div>`,e.innerHTML=o};function v(){m.setMonth(m.getMonth()-1),h()}function y(){m.setMonth(m.getMonth()+1),h()}document.addEventListener("keyup",(e=>{38===e.keyCode||37===e.keyCode?v():40!==e.keyCode&&39!==e.keyCode||y()})),document.querySelector(".prev").onclick=v,document.querySelector(".next").onclick=y,h()})()})();