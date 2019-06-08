import {
    ISetMicrodata,
    IDataset,
    Selector,
    StringConstant
} from './types';
import getTemplate from './get-template';

const { VamtigerBrowserMethod, requestIdleCallback } = self;
const { getData, getMicrodataCaption } = VamtigerBrowserMethod;
const { slash, nothing } = StringConstant;

export default function(params: ISetMicrodata) {return new Promise((resolve, reject) => {
    if (requestIdleCallback) {
        requestIdleCallback(() => setMicroData(params).then(resolve).catch(reject));
    } else {
        setMicroData(params).then(resolve).catch(reject)
    }
})}

async function setMicroData({ element }: ISetMicrodata) {
    const dataset = element.dataset as IDataset;
    const {
        jsonLd: jsonLdUrl
    } = dataset;
    const { jsonLd } = jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [] };
    const [ imageData ] = jsonLd;
    const name = imageData && imageData.name;
    const description = imageData && imageData.description;
    const keywords = imageData && imageData.keywords;
    const about = imageData && imageData.about;
    const aboutItemType = about['@context'] && about['@type'] && [
        about['@context'],
        about['@type']
    ].join(slash);
    const aboutName = about && about.name;
    const aboutDescription = about && about.description;
    const caption = imageData && getTemplate({
        selector: Selector.linkedDataCaption
    });
    const aboutCaption = about && getTemplate({
        selector: Selector.linkedDataCaption,
        attributes: {
            itemprop: 'about'
        }
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
        keywords && getTemplate({
            selector: Selector.linkedDataCaptionElement,
            properties: {
                innerHTML: keywords
            },
            attributes: {
                itemprop: 'keywords'
            }
        }),
        imageData && getMicrodataCaption({
            imageData,
            fieldKey: 'about'
        }),
        imageData && getMicrodataCaption({
            imageData,
            fieldKey: 'producer'
        }),
        imageData && getMicrodataCaption({
            imageData,
            fieldKey: 'creator'
        }),
        imageData && getMicrodataCaption({
            imageData,
            fieldKey: 'sponsor'
        }),
        imageData && getMicrodataCaption({
            imageData,
            fieldKey: 'funder'
        })
    ].filter(currentElement => currentElement);

    if (caption && captionElements && captionElements.length) {
        captionElements.forEach(currentElement => currentElement && caption.appendChild(currentElement));

        element.appendChild(caption);
    }
}