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
const element_1 = require("./element");
const get_template_1 = require("./get-template");
const handle_loaded_image_1 = require("./handle-loaded-image");
const set_microdata_1 = require("./set-microdata");
const { VamtigerBrowserMethod } = window;
const { getData, intersectionObserver } = VamtigerBrowserMethod;
const { nothing, colonSpace, slash } = types_1.StringConstant;
function default_1({ element }) {
    return __awaiter(this, void 0, void 0, function* () {
        const dataset = element.dataset;
        const { image: src, overlay: overlayPrefix, jsonLd: jsonLdUrl } = dataset;
        const { jsonLd } = jsonLdUrl && (yield getData({
            jsonLd: jsonLdUrl,
            textMode: true
        })) || { jsonLd: [] };
        const [imageData] = jsonLd;
        const url = imageData && imageData.image || src;
        const alt = imageData && [
            imageData.name,
            imageData.description
        ].filter(text => text).join(colonSpace);
        const itemtype = imageData['@context'] && imageData['@type'] && [
            imageData['@context'],
            imageData['@type']
        ].join(slash);
        const microData = itemtype && {
            itemscope: nothing,
            itemtype
        };
        const microDataAttributes = microData && Object.keys(microData) || [];
        const image = url && get_template_1.default({
            selector: types_1.Selector.image,
            properties: {
                src: url,
                alt
            }
        });
        const imageFigure = image && get_template_1.default({
            selector: types_1.Selector.figure,
            attributes: {
                slot: element_1.name
            }
        });
        const overlays = overlayPrefix && [
            get_template_1.default({
                selector: types_1.Selector.overlay,
                attributes: {
                    slot: `${overlayPrefix}-overlay`
                }
            }),
            get_template_1.default({
                selector: types_1.Selector.overlay,
                attributes: {
                    slot: `${overlayPrefix}-overlay`
                }
            })
        ];
        if (image && imageFigure) {
            image.addEventListener('load', handle_loaded_image_1.default);
            imageFigure.appendChild(image);
            element.appendChild(imageFigure);
            element.dataset.loading = nothing;
            image.setAttribute('itemprop', 'image');
        }
        overlays && overlays.forEach(overlay => {
            if (overlay) {
                overlay.dataset.overlay = nothing;
                element.appendChild(overlay);
            }
        });
        microData && microDataAttributes.forEach(attribute => element.setAttribute(attribute, microData[attribute]));
        set_microdata_1.default({ element });
    });
}
exports.default = default_1;
//# sourceMappingURL=load-image.js.map