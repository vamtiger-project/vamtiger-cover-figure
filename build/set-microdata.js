"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const get_template_1 = require("./get-template");
const { VamtigerBrowserMethod, requestIdleCallback } = self;
const { getData, getMicrodataCaption } = VamtigerBrowserMethod;
const { slash, nothing } = types_1.StringConstant;
function default_1(params) {
    return new Promise((resolve, reject) => {
        if (requestIdleCallback) {
            requestIdleCallback(() => setMicroData(params).then(resolve).catch(reject));
        }
        else {
            setMicroData(params).then(resolve).catch(reject);
        }
    });
}
exports.default = default_1;
function setMicroData({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { jsonLd: jsonLdUrl } = dataset;
        const { jsonLd } = jsonLdUrl && (yield getData({ jsonLd: jsonLdUrl })) || { jsonLd: [] };
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
        const caption = imageData && get_template_1.default({
            selector: types_1.Selector.linkedDataCaption
        });
        const aboutCaption = about && get_template_1.default({
            selector: types_1.Selector.linkedDataCaption,
            attributes: {
                itemprop: 'about'
            }
        });
        const captionElements = caption && [
            name && get_template_1.default({
                selector: types_1.Selector.linkedDataCaptionElement,
                properties: {
                    innerHTML: name
                },
                attributes: {
                    itemprop: 'name'
                }
            }),
            description && get_template_1.default({
                selector: types_1.Selector.linkedDataCaptionElement,
                properties: {
                    innerHTML: description
                },
                attributes: {
                    itemprop: 'description'
                }
            }),
            keywords && get_template_1.default({
                selector: types_1.Selector.linkedDataCaptionElement,
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
//# sourceMappingURL=set-microdata.js.map