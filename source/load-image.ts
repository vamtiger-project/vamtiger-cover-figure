import {
    ILoadImage,
    IDataset,
    Selector,
    StringConstant,
    MicroDataAttribute
} from './types';
import { name } from './element';
import getTemplate from './get-template';
import handleLoaded from './handle-loaded-image';
import setMicroData from './set-microdata';

const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;
const { nothing, colonSpace, slash } = StringConstant;

export default async function ({ element }: ILoadImage) {
    const dataset = element.dataset as IDataset;
    const {
        image: src,
        overlay: overlayPrefix,
        jsonLd: jsonLdUrl
    } = dataset;
    const { jsonLd } = jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [] };
    const [ imageData ] = jsonLd;
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
    const microDataAttributes = microData && Object.keys(microData) as MicroDataAttribute[] || [];
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

    setMicroData({ element });
}