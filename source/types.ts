import VamtigerCoverFigure from './element';

export enum StringConstant {
    nothing = ''
}

export enum DataAttribute {
    captionImage = 'captionImage',
    imageCaptionIcon = 'imageCaptionIcon',
    imageCaptionTitle = 'imageCaptionTitle',
    imageCaptionSubtitle = 'imageCaptionSubtitle'
}

export enum Selector {
    style = 'style',
    slot = 'slot',
    image = 'img',
    overlay = 'div',
    figure = 'figure',
    imageCaption = '[data-image-caption]',
    icon = '[data-icon]',
    title = '[data-title]',
    subtitle = '[data-subtitle]',
    centerCaption = '[data-center-caption]'
}

export enum DataAttribute {
    image = 'image',
    description = 'description',
    loaded = 'loaded',
    overlay = 'overlay'
}

export enum SlotName {
    darkOverlay = 'dark-overlay',
    template = 'template',
    caption = 'caption',
    centerCaption = 'center-caption'
}

export enum ObservedAttributes {

}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    'data-image-figure'?: string;
}

export interface IProperties {
    name?: string;
    src?: string;
    alt?: string;
    innerHTML?: string;
}

export interface ILoadImage {
    element: VamtigerCoverFigure;
}

export interface ILoadImageCaption {
    element: VamtigerCoverFigure;
}

export interface IDataset extends DOMStringMap {
    image: string;
    description?: string;
    loaded?: '';
    overlay?: SlotName;
    imageCaptionIcon?: string;
    imageCaptionTitle?: string;
    imageCaptionSubtitle?: string;
    centerCaption?: string;
}

export interface IHandleLoadedImage {
    element?: HTMLElement;
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends Selector.image ? HTMLImageElement :
    P['selector'] extends Selector.overlay ? HTMLDivElement :
    P['selector'] extends Selector.figure
        | Selector.imageCaption
        | Selector.centerCaption ? HTMLElement :
    null;

export const imageCaptionAttribute = [
    DataAttribute.imageCaptionIcon,
    DataAttribute.imageCaptionTitle,
    DataAttribute.imageCaptionSubtitle
];