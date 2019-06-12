"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const get_template_1 = require("./get-template");
const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;
const { nothing } = types_1.StringConstant;
const { captionLoaded: timeout } = types_1.TimeoutDuration;
function default_1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { jsonLd: jsonLdUrl } = dataset;
        const { jsonLd, json } = jsonLdUrl && (yield getData({ jsonLd: jsonLdUrl })) || { jsonLd: [], json: {} };
        const [captionJsonLd] = jsonLd;
        const svgCaptionUrl = json && json.svgCaption;
        const titleText = captionJsonLd && captionJsonLd.name;
        const subtitleText = captionJsonLd && captionJsonLd.description;
        const responsiveSvg = titleText && subtitleText && svgCaptionUrl && get_template_1.default({
            selector: types_1.Selector.vamtigerResponsiveSvg,
            attributes: {
                'data-json-ld': svgCaptionUrl
            }
        });
        const iconFigure = responsiveSvg && get_template_1.default({
            selector: types_1.Selector.iconFigure
        });
        const titleHeader = titleText && get_template_1.default({
            selector: types_1.Selector.titleHeader,
            attributes: {
                'data-json-ld': svgCaptionUrl
            }
        });
        const title = titleHeader && titleHeader.querySelector(types_1.Selector.title);
        const subtitle = subtitleText && get_template_1.default({
            selector: types_1.Selector.subtitle,
            properties: {
                innerHTML: subtitleText
            }
        });
        const captionElements = [
            iconFigure,
            titleHeader,
            subtitle
        ];
        const caption = captionElements.every(captionElement => Boolean(captionElement)) && get_template_1.default({
            selector: types_1.Selector.imageCaption,
            attributes: {
                slot: types_1.SlotName.caption
            }
        });
        if (responsiveSvg && iconFigure) {
            responsiveSvg.addEventListener(types_1.EventName.svgLoaded, handleSvgLoaded);
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
            responsiveSvg && responsiveSvg.removeEventListener(types_1.EventName.svgLoaded, handleSvgLoaded);
            caption && setTimeout(() => caption.dataset.loaded = nothing, timeout);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=load-image-caption.js.map