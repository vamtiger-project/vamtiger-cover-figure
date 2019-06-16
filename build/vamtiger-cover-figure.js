(function () {
'use strict';

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["colonSpace"] = ": ";
    StringConstant["slash"] = "/";
})(StringConstant || (StringConstant = {}));
var TimeoutDuration;
(function (TimeoutDuration) {
    TimeoutDuration[TimeoutDuration["captionLoaded"] = 1000] = "captionLoaded";
})(TimeoutDuration || (TimeoutDuration = {}));
var DataAttribute;
(function (DataAttribute) {
    DataAttribute["captionImage"] = "captionImage";
    DataAttribute["imageCaptionIcon"] = "imageCaptionIcon";
    DataAttribute["imageCaptionTitle"] = "imageCaptionTitle";
    DataAttribute["imageCaptionSubtitle"] = "imageCaptionSubtitle";
    DataAttribute["jsonLd"] = "jsonLd";
})(DataAttribute || (DataAttribute = {}));
var Selector;
(function (Selector) {
    Selector["style"] = "style";
    Selector["slot"] = "slot";
    Selector["image"] = "img";
    Selector["overlay"] = "div";
    Selector["figure"] = "figure";
    Selector["imageCaption"] = "[data-image-caption]";
    Selector["icon"] = "[data-icon]";
    Selector["titleHeader"] = "[data-title-header]";
    Selector["title"] = "[data-title]";
    Selector["subtitle"] = "[data-subtitle]";
    Selector["centerCaption"] = "[data-center-caption]";
    Selector["captionImage"] = "img, svg";
    Selector["vamtigerResponsiveSvg"] = "vamtiger-responsive-svg";
    Selector["iconFigure"] = "[data-icon-figure]";
    Selector["linkedDataCaption"] = "[data-linked-data-caption]";
    Selector["linkedDataCaptionElement"] = "[data-linked-data-caption-element]";
    Selector["a"] = "a";
})(Selector || (Selector = {}));
(function (DataAttribute) {
    DataAttribute["image"] = "image";
    DataAttribute["description"] = "description";
    DataAttribute["loaded"] = "loaded";
    DataAttribute["overlay"] = "overlay";
})(DataAttribute || (DataAttribute = {}));
var SlotName;
(function (SlotName) {
    SlotName["darkOverlay"] = "dark-overlay";
    SlotName["template"] = "template";
    SlotName["caption"] = "caption";
    SlotName["centerCaption"] = "center-caption";
})(SlotName || (SlotName = {}));
var EventName;
(function (EventName) {
    EventName["imageLoaded"] = "imageLoaded";
    EventName["svgLoaded"] = "svgLoaded";
})(EventName || (EventName = {}));
var ObservedAttributes;
(function (ObservedAttributes) {
})(ObservedAttributes || (ObservedAttributes = {}));
const imageCaptionAttribute = [
    DataAttribute.imageCaptionIcon,
    DataAttribute.imageCaptionTitle,
    DataAttribute.imageCaptionSubtitle
];

const shadowRoot = {
    mode: 'open'
};
const observedAttributes = Object.keys(ObservedAttributes);
const dependencies = [
    'https://unpkg.com/vamtiger-responsive-svg@latest'
];

var css = `vamtiger-cover-figure,vamtiger-cover-figure figcaption,vamtiger-cover-figure figure,vamtiger-cover-figure h5,vamtiger-cover-figure header{margin:0;padding:0}vamtiger-cover-figure:before{bottom:0;right:0}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=caption],vamtiger-cover-figure [slot=caption] [data-icon-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]{position:relative}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before,vamtiger-cover-figure [slot=center-caption] [data-caption-text],vamtiger-cover-figure figcaption,vamtiger-cover-figure figure{display:inline-block}vamtiger-cover-figure [slot=caption][data-image-caption],vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{-webkit-animation:b 0ms linear forwards;animation:b 0ms linear forwards}vamtiger-cover-figure [slot=dark-overlay],vamtiger-cover-figure [slot=vamtiger-cover-figure]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=dark-overlay],vamtiger-cover-figure[data-loaded] [slot=vamtiger-cover-figure]{visibility:visible;-webkit-animation:a 275ms linear forwards;animation:a 275ms linear forwards}vamtiger-cover-figure[data-loaded] [slot=caption]{visibility:hidden}vamtiger-cover-figure[data-loaded] [slot=caption][data-image-caption][data-loaded]{visibility:visible;-webkit-animation:a 275ms linear forwards,h 175ms linear forwards;animation:a 275ms linear forwards,h 175ms linear forwards}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=center-caption],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure]{grid-column:1;grid-row:1}vamtiger-cover-figure [data-overlay],vamtiger-cover-figure [slot=template],vamtiger-cover-figure [slot=vamtiger-cover-figure],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;height:100%}vamtiger-cover-figure [slot=caption] [data-icon],vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{width:100%;max-height:100%}vamtiger-cover-figure [slot=vamtiger-cover-figure]>img{display:inline-block;-o-object-fit:cover;object-fit:cover;z-index:0}vamtiger-cover-figure [data-overlay]{z-index:1}vamtiger-cover-figure [slot=template]{z-index:2}vamtiger-cover-figure [slot=caption]{z-index:3;position:absolute;left:0;bottom:0;display:grid;grid-template-areas:"a b" "a c";grid-column-gap:.7em;grid-row-gap:.2em;padding:0 0 10px 10px;color:#fff;letter-spacing:.04em}vamtiger-cover-figure [slot=center-caption]{z-index:4;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:2em}vamtiger-cover-figure[data-center-caption-uppercase] [slot=center-caption]{text-transform:uppercase}vamtiger-cover-figure[data-center-caption-uppercase][data-center-caption-hashtag] [slot=center-caption] [data-caption-text]:before{content:"#"}vamtiger-cover-figure [slot=caption] [data-icon-figure]{grid-area:a;display:grid;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}vamtiger-cover-figure [slot=caption] [data-icon]{height:50px;width:50px}vamtiger-cover-figure [slot=caption] [data-title]{grid-area:b;font-size:1.2em}vamtiger-cover-figure [slot=caption] [data-subtitle]{grid-area:c;font-size:.9em}vamtiger-cover-figure [slot=caption] [data-subtitle],vamtiger-cover-figure [slot=caption] [data-title],vamtiger-cover-figure [slot=center-caption]{text-shadow:2px 2px 2px #000}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:first-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.3)),color-stop(60%,transparent),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.7) 5%,rgba(0,0,0,.3) 40%,transparent 60%,transparent)}vamtiger-cover-figure[data-loaded] [slot=dark-overlay]:last-of-type{background:-webkit-gradient(linear,left top,left bottom,color-stop(5%,transparent),color-stop(40%,transparent),color-stop(60%,rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,transparent 5%,transparent 40%,rgba(0,0,0,.3) 60%,rgba(0,0,0,.7))}vamtiger-cover-figure:before{display:inline-block;content:"";opacity:0;-webkit-transition:opacity 335ms linear;transition:opacity 335ms linear;position:absolute;left:0;top:0;width:100%;height:100%}vamtiger-cover-figure[data-loading]:before{opacity:1;-webkit-animation:g 675ms linear alternate infinite;animation:g 675ms linear alternate infinite}vamtiger-cover-figure[data-loaded]:before{display:none}vamtiger-cover-figure [data-overlay]:first-of-type{-webkit-animation:a 275ms linear forwards,e 275ms forwards;animation:a 275ms linear forwards,e 275ms forwards}vamtiger-cover-figure [data-overlay]:last-of-type{-webkit-animation:a 275ms linear forwards,f 275ms forwards;animation:a 275ms linear forwards,f 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:first-of-type{-webkit-animation:b 275ms linear forwards,c 275ms forwards;animation:b 275ms linear forwards,c 275ms forwards}vamtiger-cover-figure[data-hide-overlay] [data-overlay]:last-of-type{-webkit-animation:b 275ms linear forwards,d 275ms forwards;animation:b 275ms linear forwards,d 275ms forwards}@element vamtiger-cover-figure and (max-width:600px){:self [slot=caption]{grid-row-gap:0;grid-column-gap:.5em}:self [slot=caption] [data-icon]{height:45px;width:45px}:self [slot=caption] [data-title]{font-size:1em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:500px){:self [slot=caption]{padding:0 0 8px 8px;grid-row-gap:0;grid-column-gap:.3em}:self [slot=caption] [data-icon]{height:40px;width:40px}:self [slot=caption] [data-title]{font-size:.9em}:self [slot=caption] [data-subtitle]{font-size:.8em}}@element vamtiger-cover-figure and (max-width:400px){:self [slot=caption]{padding:0 0 5px 5px;grid-row-gap:0;grid-column-gap:.2em}:self [slot=caption] [data-icon]{height:35px;width:35px}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@element vamtiger-cover-figure and (max-width:350px){:self [slot=caption]{padding:0 0 5px 5px}:self [slot=caption] [data-icon]{display:none}:self [slot=caption] [data-title]{font-size:.8em}:self [slot=caption] [data-subtitle]{font-size:.7em}}@-webkit-keyframes a{0%{opacity:0}to{opacity:1}}@keyframes a{0%{opacity:0}to{opacity:1}}@-webkit-keyframes b{0%{opacity:1}to{opacity:0}}@keyframes b{0%{opacity:1}to{opacity:0}}@-webkit-keyframes c{0%{top:0}to{top:-5em}}@keyframes c{0%{top:0}to{top:-5em}}@-webkit-keyframes d{0%{top:0}to{top:5em}}@keyframes d{0%{top:0}to{top:5em}}@-webkit-keyframes e{0%{top:-5em}to{top:0}}@keyframes e{0%{top:-5em}to{top:0}}@-webkit-keyframes f{0%{top:5em}to{top:0}}@keyframes f{0%{top:5em}to{top:0}}@-webkit-keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@keyframes g{0%{background-color:#f1f1f1}to{background-color:#e7e7e7}}@-webkit-keyframes h{0%{left:-2em}to{left:0}}@keyframes h{0%{left:-2em}to{left:0}}
/*# sourceMappingURL=document-index.ts.map */`;

var html = `<slot></slot> <img> <figure data-image-figure></figure> <figcaption data-image-caption></figcaption> <figure data-icon-figure></figure> <vamtiger-responsive-svg data-icon></vamtiger-responsive-svg> <header data-title-header> <h5 data-title></h5> </header> <span data-subtitle></span> <figcaption data-center-caption></figcaption> <div></div> <figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>`;

var css$1 = `:host{display:grid;position:relative;overflow:hidden}
/*# sourceMappingURL=index.ts.map */`;

const { nothing } = StringConstant;
const template = document.createElement('template');
const stylesheet = `<style>${css$1}</style>`;
const templateHtml = [
    stylesheet,
    html
].join(nothing);
template.innerHTML = templateHtml;
var getTemplate = (params) => {
    const { selector, attributes = {}, properties = {} } = params;
    const attributesKeys = Object.keys(attributes);
    const templateElement = template.content.querySelector(selector);
    const currentTemplate = templateElement && templateElement.cloneNode(true);
    if (currentTemplate) {
        Object.assign(currentTemplate, properties);
        attributesKeys.forEach(key => attributes[key] && currentTemplate.setAttribute(key, attributes[key] || ''));
    }
    return currentTemplate;
};

const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;
const { nothing: nothing$1 } = StringConstant;
const { captionLoaded: timeout } = TimeoutDuration;
function loadImageCaption ({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { jsonLd: jsonLdUrl } = dataset;
        const { jsonLd, json } = jsonLdUrl && (yield getData({ jsonLd: jsonLdUrl })) || { jsonLd: [], json: {} };
        const [captionJsonLd] = jsonLd;
        const svgCaptionUrl = json && json.svgCaption;
        const titleText = captionJsonLd && captionJsonLd.name;
        const subtitleText = captionJsonLd && captionJsonLd.description;
        const responsiveSvg = titleText && subtitleText && svgCaptionUrl && getTemplate({
            selector: Selector.vamtigerResponsiveSvg,
            attributes: {
                'data-json-ld': svgCaptionUrl
            }
        });
        const iconFigure = responsiveSvg && getTemplate({
            selector: Selector.iconFigure
        });
        const titleHeader = titleText && getTemplate({
            selector: Selector.titleHeader,
            attributes: {
                'data-json-ld': svgCaptionUrl
            }
        });
        const title = titleHeader && titleHeader.querySelector(Selector.title);
        const subtitle = subtitleText && getTemplate({
            selector: Selector.subtitle,
            properties: {
                innerHTML: subtitleText
            }
        });
        const captionElements = [
            iconFigure,
            titleHeader,
            subtitle
        ];
        const caption = captionElements.every(captionElement => Boolean(captionElement)) && getTemplate({
            selector: Selector.imageCaption,
            attributes: {
                slot: SlotName.caption
            }
        });
        if (responsiveSvg && iconFigure) {
            responsiveSvg.addEventListener(EventName.svgLoaded, handleSvgLoaded);
            iconFigure.appendChild(responsiveSvg);
        }
        if (title && titleText) {
            title.innerHTML = titleText;
        }
        titleHeader && titleHeader.setAttribute('itemprop', 'name');
        subtitle && subtitle.setAttribute('itemprop', 'description');
        if (caption) {
            captionElements.forEach(captionElement => captionElement && caption.appendChild(captionElement));
            element.appendChild(caption);
        }
        function handleSvgLoaded() {
            responsiveSvg && responsiveSvg.removeEventListener(EventName.svgLoaded, handleSvgLoaded);
            caption && setTimeout(() => caption.dataset.loaded = nothing$1, timeout);
        }
    });
}

const { nothing: nothing$2 } = StringConstant;
const eventParams = {
    bubbles: true
};
function handleLoadedImage({ currentTarget, element: currentElement }) {
    const image = currentTarget;
    const element = (currentElement || image.closest(name));
    const dataset = element.dataset;
    const imageLoadedEvent = new CustomEvent(EventName.imageLoaded, eventParams);
    image.removeEventListener('loaded', handleLoadedImage);
    dataset.loaded = nothing$2;
    delete element.dataset.loading;
    element.dispatchEvent(imageLoadedEvent);
    loadImageCaption({ element });
}

const { VamtigerBrowserMethod: VamtigerBrowserMethod$1, requestIdleCallback } = self;
const { getData: getData$1, getMicrodataCaption } = VamtigerBrowserMethod$1;
const { slash, nothing: nothing$3 } = StringConstant;
function setMicroData (params) {
    return new Promise((resolve, reject) => {
        if (requestIdleCallback) {
            requestIdleCallback(() => setMicroData$1(params).then(resolve).catch(reject));
        }
        else {
            setMicroData$1(params).then(resolve).catch(reject);
        }
    });
}
function setMicroData$1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { jsonLd: jsonLdUrl } = dataset;
        const { jsonLd } = jsonLdUrl && (yield getData$1({ jsonLd: jsonLdUrl })) || { jsonLd: [] };
        const [imageData] = jsonLd;
        const name = imageData && imageData.name;
        const description = imageData && imageData.description;
        const keywords = imageData && imageData.keywords;
        const about = imageData && imageData.about;
        const aboutItemType = about['@context'] && about['@type'] && [
            about['@context'],
            about['@type']
        ].join(slash);
        const aboutName = about && about.name;
        const aboutDescription = about && about.description;
        const caption = imageData && getTemplate({
            selector: Selector.linkedDataCaption
        });
        const aboutCaption = about && getTemplate({
            selector: Selector.linkedDataCaption,
            attributes: {
                itemprop: 'about'
            }
        });
        const captionElements = caption && [
            name && getTemplate({
                selector: Selector.linkedDataCaptionElement,
                properties: {
                    innerHTML: name
                },
                attributes: {
                    itemprop: 'name'
                }
            }),
            description && getTemplate({
                selector: Selector.linkedDataCaptionElement,
                properties: {
                    innerHTML: description
                },
                attributes: {
                    itemprop: 'description'
                }
            }),
            keywords && getTemplate({
                selector: Selector.linkedDataCaptionElement,
                properties: {
                    innerHTML: keywords
                },
                attributes: {
                    itemprop: 'keywords'
                }
            }),
            imageData && getMicrodataCaption({
                imageData,
                fieldKey: 'about'
            }),
            imageData && getMicrodataCaption({
                imageData,
                fieldKey: 'producer'
            }),
            imageData && getMicrodataCaption({
                imageData,
                fieldKey: 'creator'
            }),
            imageData && getMicrodataCaption({
                imageData,
                fieldKey: 'sponsor'
            }),
            imageData && getMicrodataCaption({
                imageData,
                fieldKey: 'funder'
            })
        ].filter(currentElement => currentElement);
        if (caption && captionElements && captionElements.length) {
            captionElements.forEach(currentElement => currentElement && caption.appendChild(currentElement));
            element.appendChild(caption);
        }
    });
}

const { VamtigerBrowserMethod: VamtigerBrowserMethod$2 } = window;
const { getData: getData$2 } = VamtigerBrowserMethod$2;
const { nothing: nothing$4, colonSpace, slash: slash$1 } = StringConstant;
function loadImage ({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { image: src, overlay: overlayPrefix, jsonLd: jsonLdUrl } = dataset;
        const { jsonLd } = jsonLdUrl && (yield getData$2({ jsonLd: jsonLdUrl })) || { jsonLd: [] };
        const [imageData] = jsonLd;
        const url = imageData && imageData.image || src;
        const alt = imageData && [
            imageData.name,
            imageData.description
        ].filter(text => text).join(colonSpace);
        const itemtype = imageData['@context'] && imageData['@type'] && [
            imageData['@context'],
            imageData['@type']
        ].join(slash$1);
        const microData = itemtype && {
            itemscope: nothing$4,
            itemtype
        };
        const microDataAttributes = microData && Object.keys(microData) || [];
        const image = url && getTemplate({
            selector: Selector.image,
            properties: {
                src: url,
                alt
            }
        });
        const imageFigure = image && getTemplate({
            selector: Selector.figure,
            attributes: {
                slot: name
            }
        });
        const overlays = overlayPrefix && [
            getTemplate({
                selector: Selector.overlay,
                attributes: {
                    slot: `${overlayPrefix}-overlay`
                }
            }),
            getTemplate({
                selector: Selector.overlay,
                attributes: {
                    slot: `${overlayPrefix}-overlay`
                }
            })
        ];
        if (image && imageFigure) {
            image.addEventListener('load', handleLoadedImage);
            imageFigure.appendChild(image);
            element.appendChild(imageFigure);
            element.dataset.loading = nothing$4;
            image.setAttribute('itemprop', 'image');
        }
        overlays && overlays.forEach(overlay => {
            if (overlay) {
                overlay.dataset.overlay = nothing$4;
                element.appendChild(overlay);
            }
        });
        microData && microDataAttributes.forEach(attribute => element.setAttribute(attribute, microData[attribute]));
        setMicroData({ element });
    });
}

const name = 'vamtiger-cover-figure';
const { VamtigerBrowserMethod: VamtigerBrowserMethod$3 } = window;
const { loadScript } = VamtigerBrowserMethod$3;
css && loadScript({ name, css })
    .catch(console.error);
class VamtigerCoverFigure extends HTMLElement {
    constructor() {
        super();
        const { dataset } = this;
        const { overlay: overlaySlotNamePrefix, template } = dataset;
        const shadowRoot$$1 = this.attachShadow(shadowRoot);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const slot = getTemplate({
            selector: Selector.slot,
            properties: {
                name
            }
        });
        const overlaySlot = overlaySlotNamePrefix && getTemplate({
            selector: Selector.slot,
            properties: {
                name: `${overlaySlotNamePrefix}-overlay`
            }
        });
        const templateSlot = template && getTemplate({
            selector: Selector.slot,
            properties: {
                name: SlotName.template
            }
        });
        const captionSlot = getTemplate({
            selector: Selector.slot,
            properties: {
                name: SlotName.caption
            }
        });
        const centerCaptionSlot = getTemplate({
            selector: Selector.slot,
            properties: {
                name: SlotName.centerCaption
            }
        });
        const elements = [
            stylesheet,
            slot,
            overlaySlot,
            templateSlot,
            captionSlot,
            centerCaptionSlot
        ];
        elements.forEach(element => element && shadowRoot$$1.appendChild(element));
    }
    static get observedAttributes() {
        return observedAttributes;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this;
            yield loadImage({ element });
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}

const { VamtigerBrowserMethod: VamtigerBrowserMethod$4 } = window;
const { defineCustomElement, loadScript: loadScript$1 } = VamtigerBrowserMethod$4;
const params = {
    name,
    constructor: VamtigerCoverFigure
};
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(dependencies.map(src => loadScript$1({ src })));
        defineCustomElement(params);
    });
}
load().catch(console.warn);

}());
//# sourceMappingURL=vamtiger-cover-figure.js.map
