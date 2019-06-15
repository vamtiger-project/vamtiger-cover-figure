var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

!function () {
  "use strict";
  function e(e, t, a, i) {
    return new (a || (a = Promise))(function (o, r) {
      function n(e) {
        try {
          c(i.next(e));
        } catch (e) {
          r(e);
        }
      }function s(e) {
        try {
          c(i.throw(e));
        } catch (e) {
          r(e);
        }
      }function c(e) {
        e.done ? o(e.value) : new a(function (t) {
          t(e.value);
        }).then(n, s);
      }c((i = i.apply(e, t)).next());
    });
  }var t, a, i, o, r, n, s;!function (e) {
    e.nothing = "", e.colonSpace = ": ", e.slash = "/";
  }(t || (t = {})), function (e) {
    e[e.captionLoaded = 1e3] = "captionLoaded";
  }(a || (a = {})), function (e) {
    e.captionImage = "captionImage", e.imageCaptionIcon = "imageCaptionIcon", e.imageCaptionTitle = "imageCaptionTitle", e.imageCaptionSubtitle = "imageCaptionSubtitle", e.jsonLd = "jsonLd";
  }(i || (i = {})), function (e) {
    e.style = "style", e.slot = "slot", e.image = "img", e.overlay = "div", e.figure = "figure", e.imageCaption = "[data-image-caption]", e.icon = "[data-icon]", e.titleHeader = "[data-title-header]", e.title = "[data-title]", e.subtitle = "[data-subtitle]", e.centerCaption = "[data-center-caption]", e.captionImage = "img, svg", e.vamtigerResponsiveSvg = "vamtiger-responsive-svg", e.iconFigure = "[data-icon-figure]", e.linkedDataCaption = "[data-linked-data-caption]", e.linkedDataCaptionElement = "[data-linked-data-caption-element]", e.a = "a";
  }(o || (o = {})), function (e) {
    e.image = "image", e.description = "description", e.loaded = "loaded", e.overlay = "overlay";
  }(i || (i = {})), function (e) {
    e.darkOverlay = "dark-overlay", e.template = "template", e.caption = "caption", e.centerCaption = "center-caption";
  }(r || (r = {})), function (e) {
    e.imageLoaded = "imageLoaded", e.svgLoaded = "svgLoaded";
  }(n || (n = {})), s || (s = {});i.imageCaptionIcon, i.imageCaptionTitle, i.imageCaptionSubtitle;const c = { mode: "open" },
        l = Object.keys(s),
        d = ["https://unpkg.com/vamtiger-responsive-svg@latest"];var g = 'vamtiger-cover-figure,vamtiger-cover-figure figcaption,vamtiger-cover-figure figure,vamtiger-cover-figure h5,vamtiger-cover-figure header{margin:0;padding:0}vamtiger-cover-figure:before{bottom:0;right:0}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=caption],vamtiger-cover-figure [slot=caption] [data-icon-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]{position:relative}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before,vamtiger-cover-figure [slot=center-caption] [data-caption-text],vamtiger-cover-figure figcaption,vamtiger-cover-figure figure{display:inline-block}vamtiger-cover-figure [slot=caption][data-image-caption],vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{-webkit-animation:b 0ms linear forwards;animation:b 0ms linear forwards}vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=dark-overlay],vamtiger-cover-figure[data-loaded] [slot=vamtiger-cover-figure]{visibility:visible;-webkit-animation:a 275ms linear forwards;animation:a 275ms linear forwards}vamtiger-cover-figure[data-loaded] [slot=caption]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=caption][data-image-caption][data-loaded]{visibility:visible;-webkit-animation:a 275ms linear forwards,h 175ms linear forwards;animation:a 275ms linear forwards,h 175ms linear forwards}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=center-caption],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure]{grid-column:1;grid-row:1}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;height:100%}vamtiger-cover-figure [slot=caption] [data-icon],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;max-height:100%}vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{display:inline-block;-o-object-fit:cover;object-fit:cover;z-index:0}vamtiger-cover-figure [data-overlay]{z-index:1}vamtiger-cover-figure [slot=template]{z-index:2}vamtiger-cover-figure [slot=caption]{z-index:3;position:absolute;left:0;bottom:0;display:grid;grid-template-areas:"a b" "a c";grid-column-gap:.7em;grid-row-gap:.2em;padding:0 0 10px 10px;color:#fff;letter-spacing:.04em}vamtiger-cover-figure [slot=center-caption]{z-index:4;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:2em}vamtiger-cover-figure[data-center-caption-uppercase] [slot=center-caption]{text-transform:uppercase}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before{content:"#"}vamtiger-cover-figure [slot=caption] [data-icon-figure]{grid-area:a;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}vamtiger-cover-figure [slot=caption] [data-icon]{height:50px;width:50px}vamtiger-cover-figure [slot=caption] [data-title]{grid-area:b;font-size:1.2em}vamtiger-cover-figure [slot=caption] [data-subtitle]{grid-area:c;font-size:.9em}vamtiger-cover-figure [slot=caption] [data-subtitle],vamtiger-cover-figure [slot=caption] [data-title],vamtiger-cover-figure [slot=center-caption]{text-shadow:2px 2px 2px #000}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:first-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.3)),color-stop(60%,transparent),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.7) 5%,rgba(0,0,0,.3) 40%,transparent 60%,transparent)}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:last-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,transparent),color-stop(40%,transparent),color-stop(60%,rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,transparent 5%,transparent 40%,rgba(0,0,0,.3) 60%,rgba(0,0,0,.7))}vamtiger-cover-figure:before{display:inline-block;content:"";opacity:0;-webkit-transition:opacity 335ms linear;transition:opacity 335ms linear;position:absolute;left:0;top:0;width:100%;height:100%}vamtiger-cover-figure[data-loading]:before{opacity:1;-webkit-animation:g 675ms linear alternate infinite;animation:g 675ms linear alternate infinite}vamtiger-cover-figure[data-loaded]:before{display:none}vamtiger-cover-figure [data-overlay]:first-of-type{-webkit-animation:a 275ms linear forwards,e 275ms forwards;animation:a 275ms linear forwards,e 275ms forwards}vamtiger-cover-figure [data-overlay]:last-of-type{-webkit-animation:a 275ms linear forwards,f 275ms forwards;animation:a 275ms linear forwards,f 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:first-of-type{-webkit-animation:b 275ms linear forwards,c 275ms forwards;animation:b 275ms linear forwards,c 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:last-of-type{-webkit-animation:b 275ms linear forwards,d 275ms forwards;animation:b 275ms linear forwards,d 275ms forwards}@element vamtiger-cover-figure and (max-width:600px){:self [slot=caption]{grid-row-gap:0;grid-column-gap:.5em}:self [slot=caption] [data-icon]{height:45px;width:45px}:self [slot=caption] [data-title]{font-size:1em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:500px){:self [slot=caption]{padding:0 0 8px 8px;grid-row-gap:0;grid-column-gap:.3em}:self [slot=caption] [data-icon]{height:40px;width:40px}:self [slot=caption] [data-title]{font-size:.9em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:400px){:self [slot=caption]{padding:0 0 5px 5px;grid-row-gap:0;grid-column-gap:.2em}:self [slot=caption] [data-icon]{height:35px;width:35px}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@element vamtiger-cover-figure and (max-width:350px){:self [slot=caption]{padding:0 0 5px 5px}:self [slot=caption] [data-icon]{display:none}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}@-webkit-keyframes c{0%{top:0}to{top:-5em}}@keyframes c{0%{top:0}to{top:-5em}}@-webkit-keyframes d{0%{top:0}to{top:5em}}@keyframes d{0%{top:0}to{top:5em}}@-webkit-keyframes e{0%{top:-5em}to{top:0}}@keyframes e{0%{top:-5em}to{top:0}}@-webkit-keyframes f{0%{top:5em}to{top:0}}@keyframes f{0%{top:5em}to{top:0}}@-webkit-keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@-webkit-keyframes h{0%{left:-2em}to{left:0}}@keyframes h{0%{left:-2em}to{left:0}}\n/*# sourceMappingURL=document-index.ts.map */',
      p = "<slot></slot> <img> <figure data-image-figure></figure> <figcaption data-image-caption></figcaption> <figure data-icon-figure></figure> <vamtiger-responsive-svg data-icon></vamtiger-responsive-svg> <header data-title-header> <h5 data-title></h5> </header> <span data-subtitle></span> <figcaption data-center-caption></figcaption> <div></div> <figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>";var _t = t;
  const m = _t.nothing,
        f = document.createElement("template"),
        v = ["<style>:host{display:grid;position:relative;overflow:hidden}\n/*# sourceMappingURL=index.ts.map */</style>", p].join(m);f.innerHTML = v;var u = e => {
    const t = e.selector;
    var _e$attributes = e.attributes;
    const a = _e$attributes === undefined ? {} : _e$attributes;
    var _e$properties = e.properties;
    const i = _e$properties === undefined ? {} : _e$properties,
          o = Object.keys(a),
          r = f.content.querySelector(t),
          n = r && r.cloneNode(!0);return n && (Object.assign(n, i), o.forEach(e => a[e] && n.setAttribute(e, a[e] || ""))), n;
  };var _window = window;
  const b = _window.VamtigerBrowserMethod,
        y = b.getData;var _t2 = t;
  const h = _t2.nothing;var _a = a;
  const w = _a.captionLoaded;
  var _t3 = t;
  const k = _t3.nothing,
        x = { bubbles: !0 };function C({ currentTarget: t, element: a }) {
    const i = t,
          s = a || i.closest(O),
          c = s.dataset,
          l = new CustomEvent(n.imageLoaded, x);i.removeEventListener("loaded", C), c.loaded = k, delete s.dataset.loading, s.dispatchEvent(l), function ({ element: t }) {
      e(this, void 0, void 0, function* () {
        const e = t.dataset,
              a = e.jsonLd;
        var _ref = a && (yield y({ jsonLd: a })) || { jsonLd: [], json: {} };

        const i = _ref.jsonLd,
              s = _ref.json;

        var _i = _slicedToArray(i, 1);

        const c = _i[0],
              l = s && s.svgCaption,
              d = c && c.name,
              g = c && c.description,
              p = d && g && l && u({ selector: o.vamtigerResponsiveSvg, attributes: { "data-json-ld": l } }),
              m = p && u({ selector: o.iconFigure }),
              f = d && u({ selector: o.titleHeader, attributes: { "data-json-ld": l } }),
              v = f && f.querySelector(o.title),
              b = g && u({ selector: o.subtitle, properties: { innerHTML: g } }),
              k = [m, f, b],
              x = k.every(e => Boolean(e)) && u({ selector: o.imageCaption, attributes: { slot: r.caption } });p && m && (p.addEventListener(n.svgLoaded, function e() {
          p && p.removeEventListener(n.svgLoaded, e), x && setTimeout(() => x.dataset.loaded = h, w);
        }), m.appendChild(p)), v && d && (v.innerHTML = d), f && f.setAttribute("itemprop", "name"), b && b.setAttribute("itemprop", "description"), x && (k.forEach(e => e && x.appendChild(e)), t.appendChild(x));
      });
    }({ element: s });
  }var _self = self;
  const L = _self.VamtigerBrowserMethod,
        j = _self.requestIdleCallback,
        E = L.getData,
        z = L.getMicrodataCaption;
  var _t4 = t;
  const D = _t4.slash,
        M = _t4.nothing;
  function S({ element: t }) {
    return e(this, void 0, void 0, function* () {
      const e = t.dataset,
            a = e.jsonLd;
      var _ref2 = a && (yield E({ jsonLd: a })) || { jsonLd: [] };

      const i = _ref2.jsonLd;
      var _i2 = _slicedToArray(i, 1);

      const r = _i2[0],
            n = r && r.name,
            s = r && r.description,
            c = r && r.keywords,
            l = r && r.about,
            d = (l["@context"] && l["@type"] && [l["@context"], l["@type"]].join(D), l && l.name, l && l.description, r && u({ selector: o.linkedDataCaption })),
            g = (l && u({ selector: o.linkedDataCaption, attributes: { itemprop: "about" } }), d && [n && u({ selector: o.linkedDataCaptionElement, properties: { innerHTML: n }, attributes: { itemprop: "name" } }), s && u({ selector: o.linkedDataCaptionElement, properties: { innerHTML: s }, attributes: { itemprop: "description" } }), c && u({ selector: o.linkedDataCaptionElement, properties: { innerHTML: c }, attributes: { itemprop: "keywords" } }), r && z({ imageData: r, fieldKey: "about" }), r && z({ imageData: r, fieldKey: "producer" }), r && z({ imageData: r, fieldKey: "creator" }), r && z({ imageData: r, fieldKey: "sponsor" }), r && z({ imageData: r, fieldKey: "funder" })].filter(e => e));d && g && g.length && (g.forEach(e => e && d.appendChild(e)), t.appendChild(d));
    });
  }var _window2 = window;
  const T = _window2.VamtigerBrowserMethod,
        H = T.getData;var _t5 = t;
  const I = _t5.nothing,
        A = _t5.colonSpace,
        B = _t5.slash;
  function K({ element: t }) {
    return e(this, void 0, void 0, function* () {
      const e = t.dataset,
            a = e.image,
            i = e.overlay,
            r = e.jsonLd;
      var _ref3 = r && (yield H({ jsonLd: r })) || { jsonLd: [] };

      const n = _ref3.jsonLd;
      var _n = _slicedToArray(n, 1);

      const s = _n[0],
            c = s && s.image || a,
            l = s && [s.name, s.description].filter(e => e).join(A),
            d = s["@context"] && s["@type"] && [s["@context"], s["@type"]].join(B),
            g = d && { itemscope: I, itemtype: d },
            p = g && Object.keys(g) || [],
            m = c && u({ selector: o.image, properties: { src: c, alt: l } }),
            f = m && u({ selector: o.figure, attributes: { slot: O } }),
            v = i && [u({ selector: o.overlay, attributes: { slot: `${i}-overlay` } }), u({ selector: o.overlay, attributes: { slot: `${i}-overlay` } })];var b;m && f && (m.addEventListener("load", C), f.appendChild(m), t.appendChild(f), t.dataset.loading = I, m.setAttribute("itemprop", "image")), v && v.forEach(e => {
        e && (e.dataset.overlay = I, t.appendChild(e));
      }), g && p.forEach(e => t.setAttribute(e, g[e])), b = { element: t }, new Promise((e, t) => {
        j ? j(() => S(b).then(e).catch(t)) : S(b).then(e).catch(t);
      });
    });
  }const O = "vamtiger-cover-figure";var _window3 = window;
  const V = _window3.VamtigerBrowserMethod,
        R = V.loadScript;R({ name: O, css: g }).catch(console.error);var _window4 = window;
  const q = _window4.VamtigerBrowserMethod,
        P = q.defineCustomElement,
        $ = q.loadScript,
        F = { name: O, constructor: class extends HTMLElement {
      constructor() {
        super();const e = this.dataset,
              t = e.overlay,
              a = e.template,
              i = this.attachShadow(c);[u({ selector: o.style }), u({ selector: o.slot, properties: { name: O } }), t && u({ selector: o.slot, properties: { name: `${t}-overlay` } }), a && u({ selector: o.slot, properties: { name: r.template } }), u({ selector: o.slot, properties: { name: r.caption } }), u({ selector: o.slot, properties: { name: r.centerCaption } })].forEach(e => e && i.appendChild(e));
      }static get observedAttributes() {
        return l;
      }connectedCallback() {
        return e(this, void 0, void 0, function* () {
          yield K({ element: this });
        });
      }attributeChangedCallback(e, t, a) {}
    } };(function () {
    return e(this, void 0, void 0, function* () {
      yield Promise.all(d.map(e => $({ src: e }))), P(F);
    });
  })().catch(console.warn);
}();
//# sourceMappingURL=vamtiger-cover-figure.js.map

