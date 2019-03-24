import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector,
    ObservedAttribute,
    SlotName
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import loadImage from './load-image';
import loadImageCaption from './load-image-caption'

export const name = 'vamtiger-cover-figure';

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerCoverFigure extends HTMLElement {
    constructor() {
        super();

        const { dataset } = this;
        const {
            overlay: overlaySlotNamePrefix,
            template
        } = dataset;
        const shadowRoot = this.attachShadow(shadowRootConfig);
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

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        const element = this;

        await loadImage({ element });

        await loadImageCaption({ element });
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}