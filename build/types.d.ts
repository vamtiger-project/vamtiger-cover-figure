import VamtigerCoverFigure from './element';
export declare enum StringConstant {
    nothing = "",
    colonSpace = ": ",
    slash = "/"
}
export declare enum TimeoutDuration {
    captionLoaded = 1000
}
export declare enum DataAttribute {
    captionImage = "captionImage",
    imageCaptionIcon = "imageCaptionIcon",
    imageCaptionTitle = "imageCaptionTitle",
    imageCaptionSubtitle = "imageCaptionSubtitle",
    jsonLd = "jsonLd"
}
export declare enum Selector {
    style = "style",
    slot = "slot",
    image = "img",
    overlay = "div",
    figure = "figure",
    imageCaption = "[data-image-caption]",
    icon = "[data-icon]",
    titleHeader = "[data-title-header]",
    title = "[data-title]",
    subtitle = "[data-subtitle]",
    centerCaption = "[data-center-caption]",
    captionImage = "img, svg",
    vamtigerResponsiveSvg = "vamtiger-responsive-svg",
    iconFigure = "[data-icon-figure]",
    linkedDataCaption = "[data-linked-data-caption]",
    linkedDataCaptionElement = "[data-linked-data-caption-element]",
    a = "a"
}
export declare enum DataAttribute {
    image = "image",
    description = "description",
    loaded = "loaded",
    overlay = "overlay"
}
export declare enum SlotName {
    darkOverlay = "dark-overlay",
    template = "template",
    caption = "caption",
    centerCaption = "center-caption"
}
export declare enum EventName {
    imageLoaded = "imageLoaded",
    svgLoaded = "svgLoaded"
}
export declare enum ObservedAttributes {
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IAnyObject {
    [key: string]: any;
}
export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    'data-image-figure'?: string;
    'data-json-ld'?: string;
    itemprop?: string;
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
export interface IMicrodata {
    itemscope: string;
    itemtype: string;
}
export interface IHandleLoadedImage {
    element?: HTMLElement;
}
export interface ISetMicrodata {
    element: HTMLElement;
}
export declare type MicroDataAttribute = keyof IMicrodata;
export declare type AttributesKey = keyof IAttributes;
export declare type ObservedAttribute = keyof typeof ObservedAttributes;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.style ? HTMLStyleElement : P['selector'] extends Selector.slot ? HTMLSlotElement : P['selector'] extends Selector.image ? HTMLImageElement : P['selector'] extends Selector.overlay ? HTMLDivElement : P['selector'] extends Selector.a ? HTMLAnchorElement : P['selector'] extends Selector.subtitle | Selector.linkedDataCaptionElement ? HTMLSpanElement : P['selector'] extends Selector.figure | Selector.imageCaption | Selector.titleHeader | Selector.vamtigerResponsiveSvg | Selector.iconFigure | Selector.linkedDataCaption | Selector.centerCaption ? HTMLElement : null;
export declare const imageCaptionAttribute: DataAttribute[];
