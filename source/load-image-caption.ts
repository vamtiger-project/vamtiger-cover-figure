import {
    ILoadImageCaption,
    IDataset,
    Selector,
    SlotName,
    EventName,
    StringConstant,
    TimeoutDuration
} from './types';
import getTemplate from './get-template';

const { VamtigerBrowserMethod } = window;
const { getData } = VamtigerBrowserMethod;
const { nothing } = StringConstant;
const { captionLoaded: timeout } = TimeoutDuration

export default async function ({ element }: ILoadImageCaption) {
    const dataset = element.dataset as IDataset;
    const {
        jsonLd: jsonLdUrl
    } = dataset;
    const { jsonLd, json } = jsonLdUrl && await getData({ jsonLd: jsonLdUrl }) || { jsonLd: [], json: {} };
    const [ captionJsonLd ] = jsonLd;
    const svgCaptionUrl = json && json.svgCaption;
    const titleText = captionJsonLd && captionJsonLd.name;
    const subtitleText = captionJsonLd && captionJsonLd.description;
    const responsiveSvg = titleText && subtitleText && svgCaptionUrl && getTemplate({
        selector: Selector.vamtigerResponsiveSvg,
        attributes: {
            'data-json-ld': svgCaptionUrl
        }
    });
    const iconFigure =  responsiveSvg && getTemplate({
        selector: Selector.iconFigure
    });
    const titleHeader = titleText && getTemplate({
        selector: Selector.titleHeader,
        attributes: {
            'data-json-ld': svgCaptionUrl
        }
    });
    const title = titleHeader && titleHeader.querySelector<HTMLHeadingElement>(Selector.title);
    const subtitle = subtitleText && getTemplate({
        selector: Selector.subtitle,
        properties: {
            innerHTML: subtitleText
        }
    });
    const captionElements = [
        iconFigure,
        titleHeader,
        subtitle
    ];
    const caption = captionElements.every(captionElement => Boolean(captionElement)) && getTemplate({
        selector: Selector.imageCaption,
        attributes: {
            slot: SlotName.caption
        }
    });

    if (responsiveSvg && iconFigure) {
        responsiveSvg.addEventListener(EventName.svgLoaded, handleSvgLoaded);

        iconFigure.appendChild(responsiveSvg);
    }

    if (title && titleText) {
        title.innerHTML = titleText;
    }

    titleHeader && titleHeader.setAttribute('itemprop', 'name');

    subtitle && subtitle.setAttribute('itemprop', 'description');

    if (caption) {
        captionElements.forEach(captionElement => captionElement && caption.appendChild(captionElement));

        element.appendChild(caption);
    }

    function handleSvgLoaded() {
        responsiveSvg && responsiveSvg.removeEventListener(EventName.svgLoaded, handleSvgLoaded);

        caption && setTimeout(() => caption.dataset.loaded = nothing, timeout);
    }
}