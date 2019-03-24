import {
    ILoadImageCaption,
    IDataset,
    DataAttribute,
    Selector,
    StringConstant,
    SlotName,
    imageCaptionAttribute
} from './types';
import getTemplate from './get-template';
import handleLoadedImage from './handle-loaded-image';


const { nothing } = StringConstant;

export default async function ({ element }: ILoadImageCaption) {
    const dataset = element.dataset as IDataset;
    const {
        imageCaptionIcon,
        imageCaptionTitle,
        imageCaptionSubtitle,
        centerCaption: currentCenterCaption = nothing
    } = dataset;
    const getCaption = imageCaptionAttribute.some(attribute => dataset.hasOwnProperty(attribute));
    const getCenterCaption = currentCenterCaption ? true : false;
    const alt = imageCaptionTitle && imageCaptionSubtitle && `${imageCaptionTitle}: imageCaptionSubtitle`
        || imageCaptionTitle
        || nothing;
    const caption = getCaption && getTemplate({
        selector: Selector.imageCaption,
        attributes: {
            slot: SlotName.caption
        }
    });
    const centerCaption = getCenterCaption && getTemplate({
        selector: Selector.centerCaption,
        properties: {
            innerHTML: `<span data-caption-text>${currentCenterCaption}</span>`
        },
        attributes: {
            slot: SlotName.centerCaption
        }
    })
    const icon = caption && caption.querySelector<HTMLImageElement>(Selector.icon);
    const title = caption && caption.querySelector<HTMLHeadingElement>(Selector.title);
    const subtitle = caption && caption.querySelector<HTMLSpanElement>(Selector.subtitle);
    const captions = [
        {
            element: title,
            innerHTML: imageCaptionTitle
        },
        {
            element: subtitle,
            innerHTML: imageCaptionSubtitle
        }
    ];

    if (icon) {
        if (imageCaptionIcon) {
            if (caption) {
                icon.addEventListener('load', event => handleLoadedImage(Object.assign(
                    event,
                    {
                        element: caption
                    }
                )));

                caption.dataset[DataAttribute.captionImage] = nothing;
            }

            icon.src = imageCaptionIcon;
        }

        if (alt) {
            icon.alt = alt;
        }
    }

    captions.forEach(({element, innerHTML}) => element && innerHTML && Object.assign(element, { innerHTML }));

    caption && element.appendChild(caption);

    centerCaption && element.appendChild(centerCaption);
}