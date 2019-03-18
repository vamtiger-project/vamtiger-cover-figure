!function(){"use strict";function e(e,t,r,o){return new(r||(r=Promise))(function(a,n){function i(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(i,s)}l((o=o.apply(e,t)).next())})}var t,r,o,a,n,i,s,l;!function(e){e.jsonld="application/ld+json"}(t||(t={})),function(e){e.type="type"}(r||(r={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector"}(o||(o={})),function(e){e.slash="/"}(a||(a={})),function(e){e.div="div"}(n||(n={})),function(e){e.stylesheet="stylesheet"}(i||(i={})),function(e){e.script="script",e.link="link",e.style="style"}(s||(s={})),function(e){e.lastStylesheet="style:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]'}(l||(l={}));const{unsupportedFeature:c,customElementAreadyDefined:d}=o;const{failedToLoadScript:m}=o,{stylesheet:p}=i,{script:f,link:u,style:v}=s;var y,g,w,h,b;(y||(y={})).nothing="",function(e){e.style="style",e.slot="slot",e.image="img",e.overlay="div"}(g||(g={})),function(e){e.image="image",e.description="description",e.loaded="loaded",e.overlay="overlay",e.template="template",e.selector="selector"}(w||(w={})),function(e){e.darkOverlay="dark-overlay",e.template="template"}(h||(h={})),b||(b={});const E={mode:"open"},k=Object.keys(b);var L="vamtiger-cover-figure[data-loaded]{-webkit-animation:a 335ms linear forwards;animation:a 335ms linear forwards}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure]{width:100%;height:100%;grid-column:1;grid-row:1}vamtiger-cover-figure [slot=vamtiger-cover-figure]{z-index:0}vamtiger-cover-figure [data-overlay]{z-index:1}vamtiger-cover-figure [slot=template]{z-index:2}vamtiger-cover-figure [slot=vamtiger-cover-figure]{-o-object-fit:cover;object-fit:cover}vamtiger-cover-figure [data-overlay]{position:relative}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:first-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.3)),color-stop(60%,transparent),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.7) 5%,rgba(0,0,0,.3) 40%,transparent 60%,transparent)}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:last-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,transparent),color-stop(40%,transparent),color-stop(60%,rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,transparent 5%,transparent 40%,rgba(0,0,0,.3) 60%,rgba(0,0,0,.7))}vamtiger-cover-figure [data-overlay]:first-of-type{-webkit-animation:a 275ms linear forwards,e 275ms forwards;animation:a 275ms linear forwards,e 275ms forwards}vamtiger-cover-figure [data-overlay]:last-of-type{-webkit-animation:a 275ms linear forwards,f 275ms forwards;animation:a 275ms linear forwards,f 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:first-of-type{-webkit-animation:b 275ms linear forwards,c 275ms forwards;animation:b 275ms linear forwards,c 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:last-of-type{-webkit-animation:b 275ms linear forwards,d 275ms forwards;animation:b 275ms linear forwards,d 275ms forwards}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}@-webkit-keyframes c{0%{top:0}to{top:-5em}}@keyframes c{0%{top:0}to{top:-5em}}@-webkit-keyframes d{0%{top:0}to{top:5em}}@keyframes d{0%{top:0}to{top:5em}}@-webkit-keyframes e{0%{top:-5em}to{top:0}}@keyframes e{0%{top:-5em}to{top:0}}@-webkit-keyframes f{0%{top:5em}to{top:0}}@keyframes f{0%{top:5em}to{top:0}}\n/*# sourceMappingURL=document-index.ts.map */";const{nothing:T}=y,S=document.createElement("template"),j=["<style>:host{display:grid;position:relative;overflow:hidden}\n/*# sourceMappingURL=index.ts.map */</style>","<slot></slot><img><div></div>"].join(T);S.innerHTML=j;var N=e=>{const{selector:t,attributes:r={},properties:o={}}=e,a=Object.keys(r),n=S.content.querySelector(t),i=n&&n.cloneNode(!0);return i&&(Object.assign(i,o),a.forEach(e=>r[e]&&i.setAttribute(e,r[e]||""))),i};const{div:$}=n,{noElementName:C,noTemplate:M,noElementForSelector:x}=o;const{div:H}=n,{noElementName:U,noElementSelector:F,noTemplateUrl:O,noTemplateForUrl:A,noElementForSelector:P}=o;function q(t){return e(this,void 0,void 0,function*(){return t.url?yield function({name:t,url:r,selector:o}){return e(this,void 0,void 0,function*(){const e=t&&o&&r&&(yield fetch(r).then(e=>e.text())),a=e&&document.createElement(H);let n=null;if(!t)throw new Error(U);if(!o)throw new Error(F);if(!r)throw new Error(O);if(!e)throw new Error(A);if(a&&(a.innerHTML=e,n=a.querySelector(o)),!n)throw new Error(P);return n.dataset.name=t,n})}(t):function({name:e,template:t}){const r=e&&t&&document.createElement($);let o=null;if(!e)throw new Error(C);if(!t)throw new Error(M);if(r&&(r.innerHTML=t,o=r.firstElementChild),!o)throw new Error(x);return o.dataset.name=e,o}(t)})}const{nothing:R}=y;function z({currentTarget:e}){const t=e,r=t.parentElement.dataset;t.removeEventListener("loaded",z),r.loaded=R}const{nothing:D}=y;const W="vamtiger-cover-figure";(e=>new Promise((o,a)=>{const{head:n,body:i}=document,{js:s,name:l,jsonld:c}=e,{src:d}=e,{css:y,name:g}=e,{href:w}=e,h=e.hasOwnProperty("src")||e.hasOwnProperty("href"),b=(s||d)&&f||y&&v||w&&u,E=d&&`script[src="${d}"]`||w&&`link[href="${w}"]`||s&&l&&`script[data-name="${l}"]`||y&&g&&`style[data-name="${g}"]`,k=n.querySelector(E)||i.querySelector(E),L=E&&b&&document.createElement(b);L instanceof HTMLScriptElement?d?L.src=d:s&&(L.innerHTML=s,L.dataset.name=l,c&&L.setAttribute(r.type,t.jsonld)):L instanceof HTMLLinkElement?(L.rel=p,L.href=w):L instanceof HTMLStyleElement&&(L.innerHTML=y,L.dataset.name=g),k?o(k):L&&(n.appendChild(L),h?(L.addEventListener("load",function e(t){L&&(L.removeEventListener("load",e),o(L))}),L.addEventListener("error",function e(t){L&&L.removeEventListener("error",e),console.error(t),a(new Error(`${m}`))})):o(L))}))({name:W,css:L}).catch(console.error);!function e({name:t,constructor:r,ignore:o}){const{customElements:a}=window,n=a&&a.define,i=n&&a.get&&a.get(t);if(n&&!i)a.define(t,r);else{if(i)throw new Error(`${d}: ${t}`);if(o)throw new Error(`${c}: Custom Elements - ${t}`);e({name:t,constructor:r,ignore:!0})}}({name:W,constructor:class extends HTMLElement{constructor(){super();const{dataset:e}=this,{overlay:t,template:r}=e,o=this.attachShadow(E);[N({selector:g.style}),N({selector:g.slot,properties:{name:W}}),t&&N({selector:g.slot,properties:{name:`${t}-overlay`}}),r&&N({selector:g.slot,properties:{name:h.template}})].forEach(e=>e&&o.appendChild(e))}static get observedAttributes(){return k}connectedCallback(){return e(this,void 0,void 0,function*(){yield function({element:t}){return e(this,void 0,void 0,function*(){const e=t.dataset,{image:r,description:o=D,overlay:a,template:n=D,selector:i=D}=e,s=r&&N({selector:g.image,attributes:{slot:W},properties:{src:r,alt:o}}),l=n&&(yield q({name:n,url:n,selector:i})),c=a&&[N({selector:g.overlay,attributes:{slot:`${a}-overlay`}}),N({selector:g.overlay,attributes:{slot:`${a}-overlay`}})];s&&(s.addEventListener("load",z),t.appendChild(s)),c&&c.forEach(e=>{e&&(e.dataset.overlay=D,t.appendChild(e))}),l&&(l.slot=h.template,t.appendChild(l),t.dataset.loaded=D)})}({element:this})})}attributeChangedCallback(e,t,r){}}})}();
//# sourceMappingURL=vamtiger-cover-figure.js.map
