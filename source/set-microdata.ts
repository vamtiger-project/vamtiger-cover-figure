import {
    ISetMicrodata,
    IDataset,
    Selector
} from './types';
import getTemplate from './get-template';

const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;

export default async function ({ element }: ISetMicrodata) {
    const dataset = element.dataset as IDataset;
    const {
        jsonLd: jsonLdUrl
    } = dataset;
    const { jsonLd } = jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [] };
    const [ imageData ] = jsonLd;
    const name = imageData && imageData.name;
    const description = imageData && imageData.description;
    const about = imageData && imageData.about;
    const aboutName = about && about.name;
    const aboutDescription = about && about.description;
    const caption = imageData && getTemplate({
        selector: Selector.linkedDataCaption
    });
    const captionElements = caption && [
        name && getTemplate({
            selector: Selector.linkedDataCaptionElement,
            properties: {
                innerHTML: name
            },
            attributes: {
                itemprop: 'name'
            }
        }),
        description && getTemplate({
            selector: Selector.linkedDataCaptionElement,
            properties: {
                innerHTML: description
            },
            attributes: {
                itemprop: 'description'
            }
        }),
        aboutName && getTemplate({
            selector: Selector.linkedDataCaptionElement,
            properties: {
                innerHTML: aboutName
            },
            attributes: {
                itemprop: 'name'
            }
        }),
        aboutDescription && getTemplate({
            selector: Selector.linkedDataCaptionElement,
            properties: {
                innerHTML: aboutDescription
            },
            attributes: {
                itemprop: 'description'
            }
        })
    ].filter(captionElement => captionElement);

    if (caption && captionElements) {
        captionElements.forEach(captionElement => captionElement && caption.appendChild(captionElement));

        element.appendChild(caption);
    }
}