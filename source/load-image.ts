import getElement from '../node_modules/vamtiger-browser-method/source/get-element';
import {
    ILoadImage,
    Selector,
    IDataset,
    StringConstant,
    SlotName
} from './types';
import { name } from './element';
import getTemplate from './get-template';
import handleLoaded from './handle-loaded-image';

const { nothing } = StringConstant;

export default async function ({ element }: ILoadImage) {
    const dataset = element.dataset as IDataset;
    const {
        image: src,
        description: alt = nothing,
        overlay: overlayPrefix,
        template: url = nothing,
        selector = nothing
    } = dataset;
    const image = src && getTemplate({
        selector: Selector.image,
        attributes: {
            slot: name
        },
        properties: {
            src,
            alt
        }
    });
    const template = url && await getElement({
        name: url,
        url,
        selector
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

    if (image) {
        image.addEventListener('load', handleLoaded);

        element.appendChild(image);
    }

    overlays && overlays.forEach(overlay => {
        if (overlay) {
            overlay.dataset.overlay = nothing;

            element.appendChild(overlay);
        }
    });

    if (template) {
        template.slot = SlotName.template;

        element.appendChild(template);

        element.dataset.loaded = nothing;
    }
}