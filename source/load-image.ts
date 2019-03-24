import {
    ILoadImage,
    Selector,
    IDataset,
    StringConstant
} from './types';
import { name } from './element';
import getTemplate from './get-template';
import handleLoaded from './handle-loaded-image';

const { nothing } = StringConstant;

export default async function ({ element }: ILoadImage) {
    const dataset = element.dataset as IDataset;
    const {
        image: src,
        description,
        overlay: overlayPrefix,
        imageCaptionTitle,
        imageCaptionSubtitle
    } = dataset;
    const alt = imageCaptionTitle && imageCaptionSubtitle && `${imageCaptionTitle}: imageCaptionSubtitle`
        || imageCaptionTitle
        || description
        || nothing;
    const image = src && getTemplate({
        selector: Selector.image,
        properties: {
            src,
            alt
        }
    });
    const imageFigure = image && getTemplate({
        selector: Selector.figure,
        attributes: {
            slot: name
        }
    })
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
        image.addEventListener('load', handleLoaded);

        imageFigure.appendChild(image);

        element.appendChild(imageFigure);
    }

    overlays && overlays.forEach(overlay => {
        if (overlay) {
            overlay.dataset.overlay = nothing;

            element.appendChild(overlay);
        }
    });
}