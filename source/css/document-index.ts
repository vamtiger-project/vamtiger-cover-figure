export default `vamtiger-cover-figure,vamtiger-cover-figure figcaption,vamtiger-cover-figure figure,vamtiger-cover-figure h5,vamtiger-cover-figure header{margin:0;padding:0}vamtiger-cover-figure:before{bottom:0;right:0}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=caption],vamtiger-cover-figure [slot=caption] [data-icon-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]{position:relative}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before,vamtiger-cover-figure [slot=center-caption] [data-caption-text],vamtiger-cover-figure figcaption,vamtiger-cover-figure figure{display:inline-block}vamtiger-cover-figure [slot=caption][data-image-caption],vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{-webkit-animation:b 0ms linear forwards;animation:b 0ms linear forwards}vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=dark-overlay],vamtiger-cover-figure[data-loaded] [slot=vamtiger-cover-figure]{visibility:visible;-webkit-animation:a 275ms linear forwards;animation:a 275ms linear forwards}vamtiger-cover-figure[data-loaded] [slot=caption]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=caption][data-image-caption][data-loaded]{visibility:visible;-webkit-animation:a 275ms linear forwards,h 175ms linear forwards;animation:a 275ms linear forwards,h 175ms linear forwards}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=center-caption],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure]{grid-column:1;grid-row:1}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;height:100%}vamtiger-cover-figure [slot=caption] [data-icon],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;max-height:100%}vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{display:inline-block;-o-object-fit:cover;object-fit:cover;z-index:0}vamtiger-cover-figure [data-overlay]{z-index:1}vamtiger-cover-figure [slot=template]{z-index:2}vamtiger-cover-figure [slot=caption]{z-index:3;position:absolute;left:0;bottom:0;display:grid;grid-template-areas:"a b" "a c";grid-column-gap:.7em;grid-row-gap:.2em;padding:0 0 10px 10px;color:#fff;letter-spacing:.04em}vamtiger-cover-figure [slot=center-caption]{z-index:4;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:2em}vamtiger-cover-figure[data-center-caption-uppercase] [slot=center-caption]{text-transform:uppercase}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before{content:"#"}vamtiger-cover-figure [slot=caption] [data-icon-figure]{grid-area:a;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}vamtiger-cover-figure [slot=caption] [data-icon]{height:50px;width:50px}vamtiger-cover-figure [slot=caption] [data-title]{grid-area:b;font-size:1.2em}vamtiger-cover-figure [slot=caption] [data-subtitle]{grid-area:c;font-size:.9em}vamtiger-cover-figure [slot=caption] [data-subtitle],vamtiger-cover-figure [slot=caption] [data-title],vamtiger-cover-figure [slot=center-caption]{text-shadow:2px 2px 2px #000}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:first-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.3)),color-stop(60%,transparent),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.7) 5%,rgba(0,0,0,.3) 40%,transparent 60%,transparent)}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:last-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,transparent),color-stop(40%,transparent),color-stop(60%,rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,transparent 5%,transparent 40%,rgba(0,0,0,.3) 60%,rgba(0,0,0,.7))}vamtiger-cover-figure:before{display:inline-block;content:"";opacity:0;-webkit-transition:opacity 335ms linear;transition:opacity 335ms linear;position:absolute;left:0;top:0;width:100%;height:100%}vamtiger-cover-figure[data-loading]:before{opacity:1;-webkit-animation:g 675ms linear alternate infinite;animation:g 675ms linear alternate infinite}vamtiger-cover-figure[data-loaded]:before{display:none}vamtiger-cover-figure [data-overlay]:first-of-type{-webkit-animation:a 275ms linear forwards,e 275ms forwards;animation:a 275ms linear forwards,e 275ms forwards}vamtiger-cover-figure [data-overlay]:last-of-type{-webkit-animation:a 275ms linear forwards,f 275ms forwards;animation:a 275ms linear forwards,f 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:first-of-type{-webkit-animation:b 275ms linear forwards,c 275ms forwards;animation:b 275ms linear forwards,c 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:last-of-type{-webkit-animation:b 275ms linear forwards,d 275ms forwards;animation:b 275ms linear forwards,d 275ms forwards}html[data-vamtiger-text-mode] vamtiger-cover-figure{display:none}@element vamtiger-cover-figure and (max-width:600px){:self [slot=caption]{grid-row-gap:0;grid-column-gap:.5em}:self [slot=caption] [data-icon]{height:45px;width:45px}:self [slot=caption] [data-title]{font-size:1em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:500px){:self [slot=caption]{padding:0 0 8px 8px;grid-row-gap:0;grid-column-gap:.3em}:self [slot=caption] [data-icon]{height:40px;width:40px}:self [slot=caption] [data-title]{font-size:.9em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:400px){:self [slot=caption]{padding:0 0 5px 5px;grid-row-gap:0;grid-column-gap:.2em}:self [slot=caption] [data-icon]{height:35px;width:35px}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@element vamtiger-cover-figure and (max-width:350px){:self [slot=caption]{padding:0 0 5px 5px}:self [slot=caption] [data-icon]{display:none}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}@-webkit-keyframes c{0%{top:0}to{top:-5em}}@keyframes c{0%{top:0}to{top:-5em}}@-webkit-keyframes d{0%{top:0}to{top:5em}}@keyframes d{0%{top:0}to{top:5em}}@-webkit-keyframes e{0%{top:-5em}to{top:0}}@keyframes e{0%{top:-5em}to{top:0}}@-webkit-keyframes f{0%{top:5em}to{top:0}}@keyframes f{0%{top:5em}to{top:0}}@-webkit-keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@-webkit-keyframes h{0%{left:-2em}to{left:0}}@keyframes h{0%{left:-2em}to{left:0}}
/*# sourceMappingURL=document-index.ts.map */`;