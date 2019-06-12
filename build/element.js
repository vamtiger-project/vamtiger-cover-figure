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
const config_1 = require("./config");
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const load_image_1 = require("./load-image");
exports.name = 'vamtiger-cover-figure';
const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
document_index_1.default && loadScript({ name: exports.name, css: document_index_1.default })
    .catch(console.error);
class VamtigerCoverFigure extends HTMLElement {
    constructor() {
        super();
        const { dataset } = this;
        const { overlay: overlaySlotNamePrefix, template } = dataset;
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.style
        });
        const slot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: exports.name
            }
        });
        const overlaySlot = overlaySlotNamePrefix && get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: `${overlaySlotNamePrefix}-overlay`
            }
        });
        const templateSlot = template && get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: types_1.SlotName.template
            }
        });
        const captionSlot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: types_1.SlotName.caption
            }
        });
        const centerCaptionSlot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: types_1.SlotName.centerCaption
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
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this;
            yield load_image_1.default({ element });
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}
exports.default = VamtigerCoverFigure;
//# sourceMappingURL=element.js.map