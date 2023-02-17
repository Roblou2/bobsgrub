(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(81),o=n.n(a),i=n(645),r=n.n(i),s=n(667),d=n.n(s),c=new URL(n(768),n.b),l=new URL(n(289),n.b),p=r()(o()),m=d()(c),u=d()(l);p.push([e.id,'\n\nbody {\n   position: relative;\n   margin: 0;\n   width: 100%;\n   padding: 5px;\n}\n\nbody::before {\n    content: "";\n    background-image: url('+m+');\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  \n    opacity: 0.65;\n}\n\n* {\n    font-family:  Calligraffitti, Verdana, Geneva, Tahoma, sans-serif;\n}\n\n* p {\n    font-size: 1.5vw;\n    position: relative;\n    font-family:  Calligraffitti, Verdana, Geneva, Tahoma, sans-serif;\n    color: #fe3636; \n    text-shadow: 1px 1px 3px white;\n}\n\n\n#tabs {\n    display: flex;\n    position: relative;\n    justify-content: center;\ngap: 20px;\nmargin-bottom: 20px;\n\n}\n\n#tabs > button {\n    font-size: 27px;\n    width: 150px;\n    position: relative;\n    background-color: #fe3636; \n    color: white;\n    border-radius: 15%;\n}\n\n#content {\n    width: 90%;\n position: relative;\nborder: 8px double #FFD700;\n    max-width: 1800px;\n\n    margin: 0 auto;\n\n}\n\n.head-wrap {\n    position: relative;\n\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    margin: 0 auto;\n    justify-content: center;\n \n}\n\nh1 {\n    color: #fe3636; \n    position: relative;\nfont-size: 3vw;\ntext-decoration: underline solid #FFD700 10px;\ntext-shadow: 3px 3px 5px white;\n}\n\nh2 {\n    color: #fe3636; \n    position: relative;\n font-size: 2.4vw;\n text-decoration: underline solid #FFD700 5px;\n text-shadow: 3px 3px 5px white;\n}\n\n.des-wrap {\n    margin-top: -30px;\n    position: relative;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n}\n\n.specials-imgs {\n    display: flex;\n    justify-content: center;\n    flex-flow: row wrap;\n    gap: 20px;\n    position: relative;\n}\n\n.specials-imgs > div {\n    height: 300px;\n    width: 330px;\n    border-radius: 40%;\n    box-shadow:  4px 4px 3px lightgray;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n.main-wrap {\n    display: flex;\n    flex-flow: column nowrap;\n    width: 75%;\n    max-width: 1000px;\n    align-items: center;\n    gap: 25px;\n    position: relative;\n}\n\n\n\n.main-flex {\n    display: flex;\n    position: relative;\n    width: 100%;\n    flex-flow: row wrap;\n    max-width: 900px;\n    justify-content: space-evenly;\n\n}\n\n.main-one-text, .main-two-text, .main-three-text, .main-four-text, .main-five-text, .main-six-text {\n    width: 250px;\n}\n\n.main-flex::before {\n    content: "";\n    background-image: url('+u+');\n    background-size: cover;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-radius: 25%;\n    opacity: 0.75;\n}\n\n\n@media screen and (max-width: 1000px) {\n\n    p {\n        font-size: 4.5vw;\n        text-shadow: 1px 1px 1px white;\n    }\n\n    h1 {\n    font-size: 7vw;\n    }\n\n    h2 {\n        font-size: 5.5vw;\n        text-shadow: 2px 2px 3px white;\n    }\n\n    \n    #tabs > button {\n        font-size: 4vw;\n        width: 90px;\n        position: relative;\n    }\n\n    body::before {\n        content: "";\n        background-image: url('+m+");\n        background-size: cover;\n        background-repeat: no-repeat;\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n      \n        opacity: 0.65;\n    }\n\n  \n    #content {\n        max-width: 900px;\n    }\n    .specials-imgs {\n    align-items: center;\n    justify-content: center;\n        flex-flow: column nowrap;\n        gap: 15px;\n        position: relative;\n    }\n    \n    .specials-imgs > div {\n        width: 95%;\n        max-height: 200px;\n        max-width: 400px;\n   \n      \n    }\n\n\n.main-flex {\n\n    width: 100%;\n    flex-flow: column nowrap;\n    max-width: 700px;\n    justify-content: center;\n    align-items: center;\n\n}\n\n\n    .main-image-one, .main-image-two, .main-image-three, .main-image-four, .main-image-five, .main-image-six {\n        width: 100%;\n        max-height: 200px;\n        max-width: 250px;\n    }\n\n    .main-one-text, .main-two-text, .main-three-text, .main-four-text, .main-five-text, .main-six-text {\n        width: 280px;\n    }\n}\n\n@media screen and (max-width: 2500px) {\n    body {\n        width: 100%;\n        max-width: 2500px;\n    }\n\n    #content {\n        max-width: 1800px;\n    }\n}\n",""]);const h=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var s=n(i[r]);t[s].references--}for(var d=a(e,o),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},768:(e,t,n)=>{e.exports=n.p+"9ba1b9a5e607c2af07ab.jpg"},289:(e,t,n)=>{e.exports=n.p+"70b6b4438432852e2af3.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("div");e.classList.add("head-wrap");const t=document.createElement("h1");t.style.marginBottom="10px",t.textContent="Bob's grub",e.appendChild(t);const n=document.createElement("img");n.src="./jack.png",n.setAttribute("style","margin: 10px 0;"),e.appendChild(n);const a=document.createElement("div");a.classList.add("des-wrap");const o=document.createElement("p");o.textContent="Traditional, locally sourced British food",a.appendChild(o),e.appendChild(a);const i=document.createElement("div");i.classList.add("specials"),e.appendChild(i);const r=document.createElement("div");r.classList.add("specials-imgs");const s=document.createElement("div");s.style.backgroundImage="url('./fishnchips.jpg')",r.appendChild(s);const d=document.createElement("div");d.style.backgroundImage="url('./pie.jpg')",r.appendChild(d);const c=document.createElement("div");c.style.backgroundImage="url('./breakfast.jpg')",r.appendChild(c),i.appendChild(r);const l=document.createElement("p");l.style.textAlign="center",l.textContent="All your favourites at affordable prices",i.appendChild(l);const p=document.createElement("p");p.style.textAlign="center",p.textContent="All-day breakfast",l.appendChild(p);const m=document.createElement("div");m.classList.add("times");const u=document.createElement("h2");u.textContent="Opening hours",m.appendChild(u);const h=document.createElement("p");h.textContent="Monday - Friday: 07.00 - 22.00",m.appendChild(h);const x=document.createElement("p");x.textContent="Saturday: 09.00 - 00.00",m.appendChild(x);const f=document.createElement("p");f.textContent="Sunday: 09.00 - 21.00",m.appendChild(f),e.appendChild(m);const g=document.createElement("div");g.classList.add("location");const y=document.createElement("h2");y.textContent="Address",g.appendChild(y);const v=document.createElement("p");return v.textContent="50 Buckingham Palace Road",y.appendChild(v),e.appendChild(g),e};var t=n(379),a=n.n(t),o=n(795),i=n.n(o),r=n(569),s=n.n(r),d=n(565),c=n.n(d),l=n(216),p=n.n(l),m=n(589),u=n.n(m),h=n(426),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),a()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;const f=document.querySelector("#content"),g=document.querySelector("button.home"),y=document.querySelector("button.menu"),v=document.querySelector("button.contact");f.appendChild(e()),g.addEventListener("click",(function(){const t=document.querySelector(".head-wrap");f.replaceChild(e(),t)})),y.addEventListener("click",(function(){const e=document.querySelector(".head-wrap");f.replaceChild((()=>{const e=document.createElement("div");e.classList.add("head-wrap");const t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("main-wrap");const a=document.createElement("h2");a.textContent="Bangers 'n' mash",n.appendChild(a);const o=document.createElement("div");o.classList.add("main-flex");const i=document.createElement("p");i.classList.add("main-one-text"),i.style.position="relative",i.style.margin="30px 0",i.style.color="white",i.style.textAlign="center",i.textContent="Delicous sausages and mashed potato made with fresh cream. Severed in a rich, tasty gravy and a side of your choosing",o.appendChild(i);const r=document.createElement("div");r.classList.add("main-image-one"),r.style.margin="20px 0",r.style.position="relative",r.style.width="400px",r.style.height="300px",r.style.borderRadius="50%",r.style.backgroundImage="url('./bangers.jpg')",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="contain",o.appendChild(r),n.appendChild(o);const s=document.createElement("h2");s.textContent="Fish 'n' chips",n.appendChild(s);const d=document.createElement("div");d.classList.add("main-flex");const c=document.createElement("p");c.classList.add("main-two-text"),c.style.position="relative",c.style.margin="30px 0",c.style.color="white",c.style.textAlign="center",c.textContent="Freshly battered cod with big fat chips made from maris piper potatoes and a side of your choosing",d.appendChild(c);const l=document.createElement("div");l.classList.add("main-image-two"),l.style.position="relative",l.style.margin="20px 0",l.style.width="400px",l.style.height="300px",l.style.borderRadius="50%",l.style.backgroundImage="url('./fishnchips.jpg')",l.style.backgroundRepeat="no-repeat",l.style.backgroundSize="contain",d.appendChild(l),n.appendChild(d);const p=document.createElement("h2");p.textContent="Beef and ale pie",n.appendChild(p);const m=document.createElement("div");m.classList.add("main-flex");const u=document.createElement("p");u.classList.add("main-three-text"),u.style.position="relative",u.style.margin="30px 0",u.style.color="white",u.style.textAlign="center",u.textContent="Shortcrust pastry pie filled with beef stake in an ale and onion gravy",m.appendChild(u);const h=document.createElement("div");h.classList.add("main-image-three"),h.style.position="relative",h.style.margin="20px 0",h.style.width="400px",h.style.height="300px",h.style.borderRadius="50%",h.style.backgroundImage="url('./pie.jpg')",h.style.backgroundRepeat="no-repeat",h.style.backgroundSize="contain",m.appendChild(h),n.appendChild(m);const x=document.createElement("h2");x.textContent="Full English breakfast",n.appendChild(x);const f=document.createElement("div");f.classList.add("main-flex");const g=document.createElement("p");g.classList.add("main-four-text"),g.style.position="relative",g.style.margin="30px 0",g.style.color="white",g.style.textAlign="center",g.textContent="A full English breky served with 2 fried eggs, sausage, hash browns, baked beans and black pudding. Served all day.",f.appendChild(g);const y=document.createElement("div");y.classList.add("main-image-four"),y.style.position="relative",y.style.margin="20px 0",y.style.width="400px",y.style.height="300px",y.style.borderRadius="50%",y.style.backgroundImage="url('./breakfast.jpg')",y.style.backgroundRepeat="no-repeat",y.style.backgroundSize="contain",f.appendChild(y),n.appendChild(f);const v=document.createElement("h2");v.textContent="Chicken Korma",n.appendChild(v);const b=document.createElement("div");b.classList.add("main-flex");const w=document.createElement("p");w.classList.add("main-five-text"),w.style.position="relative",w.style.margin="30px 0",w.style.color="white",w.style.textAlign="center",w.textContent="This classic English favourite has a rich, creamy korma source made with fresh coconut. Locally sourced chicken and fresh naan bread.",b.appendChild(w);const C=document.createElement("div");C.classList.add("main-image-five"),C.style.position="relative",C.style.margin="20px 0",C.style.width="400px",C.style.height="300px",C.style.borderRadius="50%",C.style.backgroundImage="url('./korma.jpg')",C.style.backgroundRepeat="no-repeat",C.style.backgroundSize="contain",b.appendChild(C),n.appendChild(b);const E=document.createElement("h2");E.textContent="Roast beef dinner",n.appendChild(E);const k=document.createElement("div");k.classList.add("main-flex");const L=document.createElement("p");L.classList.add("main-six-text"),L.style.position="relative",L.style.margin="30px 0",L.style.color="white",L.style.textAlign="center",L.textContent="A half-kilo plate of locally sourced beef, butter-basted roast potatoes, fresh veg and yorkshire pud.",k.appendChild(L);const S=document.createElement("div");S.classList.add("main-image-six"),S.style.position="relative",S.style.margin="20px 0",S.style.width="400px",S.style.height="300px",S.style.borderRadius="50%",S.style.backgroundImage="url('./roast.jpg')",S.style.backgroundRepeat="no-repeat",S.style.backgroundSize="contain",k.appendChild(S),n.appendChild(k),e.appendChild(n);const j=document.createElement("p");return j.textContent="A selection of sides and drinks are available to order with every meal. Ask our staff for details.",j.style.color="white",j.style.textAlign="center",e.appendChild(j),e})(),e)})),v.addEventListener("click",(function(){const e=document.querySelector(".head-wrap");f.replaceChild((()=>{const e=document.createElement("div");e.classList.add("head-wrap");const t=document.createElement("h1");t.textContent="Contact us",e.appendChild(t);const n=document.createElement("div");n.classList.add("des-wrap");const a=document.createElement("h1");a.textContent="Phone",n.appendChild(a);const o=document.createElement("h2");o.textContent="07123456789",n.appendChild(o);const i=document.createElement("h1");i.textContent="E-mail",n.appendChild(i);const r=document.createElement("h2");r.textContent="someemail@somewebsite.com",n.appendChild(r),e.appendChild(n);const s=document.createElement("div");return s.setAttribute("style","height: 900px;"),e.appendChild(s),e})(),e)}))})()})();