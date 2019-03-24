!function(){"use strict";function e(e,t,a,o){return new(a||(a=Promise))(function(i,r){function n(e){try{c(o.next(e))}catch(e){r(e)}}function s(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new a(function(t){t(e.value)}).then(n,s)}c((o=o.apply(e,t)).next())})}var t,a,o,i,r,n,s,c;!function(e){e.jsonld="application/ld+json"}(t||(t={})),function(e){e.type="type"}(a||(a={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector"}(o||(o={})),function(e){e.slash="/"}(i||(i={})),function(e){e.div="div"}(r||(r={})),function(e){e.stylesheet="stylesheet"}(n||(n={})),function(e){e.script="script",e.link="link",e.style="style"}(s||(s={})),function(e){e.lastStylesheet="style:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]'}(c||(c={}));const{unsupportedFeature:l,customElementAreadyDefined:p}=o;const{failedToLoadScript:m}=o,{stylesheet:d}=n,{script:g,link:f,style:u}=s;var v,y,b,h,w;(v||(v={})).nothing="",function(e){e.captionImage="captionImage",e.imageCaptionIcon="imageCaptionIcon",e.imageCaptionTitle="imageCaptionTitle",e.imageCaptionSubtitle="imageCaptionSubtitle"}(y||(y={})),function(e){e.style="style",e.slot="slot",e.image="img",e.overlay="div",e.figure="figure",e.imageCaption="[data-image-caption]",e.icon="[data-icon]",e.title="[data-title]",e.subtitle="[data-subtitle]",e.centerCaption="[data-center-caption]"}(b||(b={})),function(e){e.image="image",e.description="description",e.loaded="loaded",e.overlay="overlay"}(y||(y={})),function(e){e.darkOverlay="dark-overlay",e.template="template",e.caption="caption",e.centerCaption="center-caption"}(h||(h={})),w||(w={});const k=[y.imageCaptionIcon,y.imageCaptionTitle,y.imageCaptionSubtitle],x={mode:"open"},C=Object.keys(w);var E='vamtiger-cover-figure,vamtiger-cover-figure figcaption,vamtiger-cover-figure figure,vamtiger-cover-figure h5,vamtiger-cover-figure header{margin:0;padding:0}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=caption],vamtiger-cover-figure [slot=caption] [data-icon-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]{position:relative}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before,vamtiger-cover-figure [slot=center-caption] [data-caption-text],vamtiger-cover-figure figcaption,vamtiger-cover-figure figure{display:inline-block}vamtiger-cover-figure,vamtiger-cover-figure [slot=caption][data-caption-image]{-webkit-animation:b 0ms linear forwards;animation:b 0ms linear forwards}vamtiger-cover-figure[data-loaded],vamtiger-cover-figure [slot=caption][data-caption-image][data-loaded]{-webkit-animation:a 275ms linear forwards;animation:a 275ms linear forwards}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=center-caption],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure]{grid-column:1;grid-row:1}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;height:100%}vamtiger-cover-figure [slot=caption] [data-icon],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;max-height:100%}vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{display:inline-block;-o-object-fit:cover;object-fit:cover;z-index:0}vamtiger-cover-figure [data-overlay]{z-index:1}vamtiger-cover-figure [slot=template]{z-index:2}vamtiger-cover-figure [slot=caption]{z-index:3;position:absolute;left:0;bottom:0;display:grid;grid-template-areas:"a b" "a c";grid-column-gap:.5em;grid-row-gap:.2em;padding:0 0 10px 10px;color:#fff;letter-spacing:.04em}vamtiger-cover-figure [slot=center-caption]{z-index:4;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:2em}vamtiger-cover-figure[data-center-caption-uppercase] [slot=center-caption]{text-transform:uppercase}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before{content:"#"}vamtiger-cover-figure [slot=caption] [data-icon-figure]{grid-area:a;display:grid}vamtiger-cover-figure [slot=caption] [data-icon]{height:45px;width:45px}vamtiger-cover-figure [slot=caption] [data-title]{grid-area:b;font-size:1.1em}vamtiger-cover-figure [slot=caption] [data-subtitle]{grid-area:c;font-size:.8em}vamtiger-cover-figure [slot=caption] [data-subtitle],vamtiger-cover-figure [slot=caption] [data-title],vamtiger-cover-figure [slot=center-caption]{text-shadow:2px 2px 2px #000}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:first-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.3)),color-stop(60%,transparent),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.7) 5%,rgba(0,0,0,.3) 40%,transparent 60%,transparent)}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:last-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,transparent),color-stop(40%,transparent),color-stop(60%,rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,transparent 5%,transparent 40%,rgba(0,0,0,.3) 60%,rgba(0,0,0,.7))}vamtiger-cover-figure [data-overlay]:first-of-type{-webkit-animation:a 275ms linear forwards,e 275ms forwards;animation:a 275ms linear forwards,e 275ms forwards}vamtiger-cover-figure [data-overlay]:last-of-type{-webkit-animation:a 275ms linear forwards,f 275ms forwards;animation:a 275ms linear forwards,f 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:first-of-type{-webkit-animation:b 275ms linear forwards,c 275ms forwards;animation:b 275ms linear forwards,c 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:last-of-type{-webkit-animation:b 275ms linear forwards,d 275ms forwards;animation:b 275ms linear forwards,d 275ms forwards}@element vamtiger-cover-figure and (max-width:500px){:self [slot=caption]{padding-left:5px;letter-spacing:.02em}:self [slot=caption] [data-subtitle],:self [slot=caption] [data-title-header]{position:relative;left:-5px}:self [slot=caption] [data-title]{font-size:.9em}:self [slot=caption] [data-subtitle]{font-size:.6em}:self [slot=center-caption]{font-size:1.3em}}@element vamtiger-cover-figure and (max-height:300px){:self [slot=caption]{padding-left:5px;letter-spacing:.02em}:self [slot=caption] [data-subtitle],:self [slot=caption] [data-title-header]{position:relative;left:-5px}:self [slot=caption] [data-title]{font-size:.9em}:self [slot=caption] [data-subtitle]{font-size:.6em}}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}@-webkit-keyframes c{0%{top:0}to{top:-5em}}@keyframes c{0%{top:0}to{top:-5em}}@-webkit-keyframes d{0%{top:0}to{top:5em}}@keyframes d{0%{top:0}to{top:5em}}@-webkit-keyframes e{0%{top:-5em}to{top:0}}@keyframes e{0%{top:-5em}to{top:0}}@-webkit-keyframes f{0%{top:5em}to{top:0}}@keyframes f{0%{top:5em}to{top:0}}\n/*# sourceMappingURL=document-index.ts.map */';const{nothing:T}=v,L=document.createElement("template"),S=["<style>:host{display:grid;position:relative;overflow:hidden}\n/*# sourceMappingURL=index.ts.map */</style>","<slot></slot><img><figure data-image-figure></figure><figcaption data-image-caption><figure data-icon-figure><img data-icon></figure><header data-title-header><h5 data-title></h5></header><span data-subtitle></span></figcaption><figcaption data-center-caption></figcaption><div></div>"].join(T);L.innerHTML=S;var j=e=>{const{selector:t,attributes:a={},properties:o={}}=e,i=Object.keys(a),r=L.content.querySelector(t),n=r&&r.cloneNode(!0);return n&&(Object.assign(n,o),i.forEach(e=>a[e]&&n.setAttribute(e,a[e]||""))),n};const{nothing:$}=v;function M({currentTarget:e,element:t}){const a=e,o=(t||a.closest(N)).dataset;a.removeEventListener("loaded",M),o.loaded=$}const{nothing:z}=v;const{nothing:H}=v;const N="vamtiger-cover-figure";(e=>new Promise((o,i)=>{const{head:r,body:n}=document,{js:s,name:c,jsonld:l}=e,{src:p}=e,{css:v,name:y}=e,{href:b}=e,h=e.hasOwnProperty("src")||e.hasOwnProperty("href"),w=(s||p)&&g||v&&u||b&&f,k=p&&`script[src="${p}"]`||b&&`link[href="${b}"]`||s&&c&&`script[data-name="${c}"]`||v&&y&&`style[data-name="${y}"]`,x=r.querySelector(k)||n.querySelector(k),C=k&&w&&document.createElement(w);C instanceof HTMLScriptElement?p?C.src=p:s&&(C.innerHTML=s,C.dataset.name=c,l&&C.setAttribute(a.type,t.jsonld)):C instanceof HTMLLinkElement?(C.rel=d,C.href=b):C instanceof HTMLStyleElement&&(C.innerHTML=v,C.dataset.name=y),x?o(x):C&&(r.appendChild(C),h?(C.addEventListener("load",function e(t){C&&(C.removeEventListener("load",e),o(C))}),C.addEventListener("error",function e(t){C&&C.removeEventListener("error",e),console.error(t),i(new Error(`${m}`))})):o(C))}))({name:N,css:E}).catch(console.error);!function e({name:t,constructor:a,ignore:o}){const{customElements:i}=window,r=i&&i.define,n=r&&i.get&&i.get(t);if(r&&!n)i.define(t,a);else{if(n)throw new Error(`${p}: ${t}`);if(o)throw new Error(`${l}: Custom Elements - ${t}`);e({name:t,constructor:a,ignore:!0})}}({name:N,constructor:class extends HTMLElement{constructor(){super();const{dataset:e}=this,{overlay:t,template:a}=e,o=this.attachShadow(x);[j({selector:b.style}),j({selector:b.slot,properties:{name:N}}),t&&j({selector:b.slot,properties:{name:`${t}-overlay`}}),a&&j({selector:b.slot,properties:{name:h.template}}),j({selector:b.slot,properties:{name:h.caption}}),j({selector:b.slot,properties:{name:h.centerCaption}})].forEach(e=>e&&o.appendChild(e))}static get observedAttributes(){return C}connectedCallback(){return e(this,void 0,void 0,function*(){yield function({element:t}){return e(this,void 0,void 0,function*(){const e=t.dataset,{image:a,description:o,overlay:i,imageCaptionTitle:r,imageCaptionSubtitle:n}=e,s=r&&n&&`${r}: imageCaptionSubtitle`||r||o||z,c=a&&j({selector:b.image,properties:{src:a,alt:s}}),l=c&&j({selector:b.figure,attributes:{slot:N}}),p=i&&[j({selector:b.overlay,attributes:{slot:`${i}-overlay`}}),j({selector:b.overlay,attributes:{slot:`${i}-overlay`}})];c&&l&&(c.addEventListener("load",M),l.appendChild(c),t.appendChild(l)),p&&p.forEach(e=>{e&&(e.dataset.overlay=z,t.appendChild(e))})})}({element:this}),yield function({element:t}){return e(this,void 0,void 0,function*(){const e=t.dataset,{imageCaptionIcon:a,imageCaptionTitle:o,imageCaptionSubtitle:i,centerCaption:r=H}=e,n=k.some(t=>e.hasOwnProperty(t)),s=!!r,c=o&&i&&`${o}: imageCaptionSubtitle`||o||H,l=n&&j({selector:b.imageCaption,attributes:{slot:h.caption}}),p=s&&j({selector:b.centerCaption,properties:{innerHTML:`<span data-caption-text>${r}</span>`},attributes:{slot:h.centerCaption}}),m=l&&l.querySelector(b.icon),d=[{element:l&&l.querySelector(b.title),innerHTML:o},{element:l&&l.querySelector(b.subtitle),innerHTML:i}];m&&(a&&(l&&(m.addEventListener("load",e=>M(Object.assign(e,{element:l}))),l.dataset[y.captionImage]=H),m.src=a),c&&(m.alt=c)),d.forEach(({element:e,innerHTML:t})=>e&&t&&Object.assign(e,{innerHTML:t})),l&&t.appendChild(l),p&&t.appendChild(p)})}({element:this})})}attributeChangedCallback(e,t,a){}}})}();
//# sourceMappingURL=vamtiger-cover-figure.js.map
