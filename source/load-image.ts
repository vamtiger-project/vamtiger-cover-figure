import {
    ILoadImage,
    Selector,
    IDataset,
    StringConstant,
    DataAttribute
} from './types';
import { name } from './element';
import getTemplate from './get-template';
import handleLoaded from './handle-loaded-image';

const { nothing } = StringConstant;

export default async function ({ element }: ILoadImage) {
    const dataset = element.dataset as IDataset;
    const {
        image: selector
    } = Selector;
    const {
        image: src,
        description: alt = '',
        overlay: overlayPrefix
    } = dataset;
    const image = src && getTemplate({
        selector,
        attributes: {
            slot: name
        },
        properties: {
            src,
            alt
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
}