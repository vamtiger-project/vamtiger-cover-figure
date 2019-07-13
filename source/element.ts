import {
    Selector,
    ObservedAttributes,
    SlotName
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import loadImage from './load-image';
import handleVisible from './handle-visible';

export const name = 'vamtiger-cover-figure';

const { VamtigerBrowserMethod } = window;
const { loadScript, intersectionObserver } = VamtigerBrowserMethod;
const handleAttributeChanged = {
    [ObservedAttributes.visible]: handleVisible
}

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

        if (intersectionObserver) {
            intersectionObserver.observe(element);
        } else {
            loadImage({ element });
        }
    }

    attributeChangedCallback(name: ObservedAttributes, oldValue: string, newValue: string) {
        const params = {
            element: this,
            oldValue,
            newValue
        };

        handleAttributeChanged[name](params);
    }
}