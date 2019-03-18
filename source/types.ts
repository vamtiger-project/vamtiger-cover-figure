import VamtigerCoverFigure from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style',
    slot = 'slot',
    image = 'img',
    overlay = 'div'
}

export enum DataAttribute {
    image = 'image',
    description = 'description',
    loaded = 'loaded',
    overlay = 'overlay',
    template = 'template',
    selector = 'selector'
}

export enum SlotName {
    darkOverlay = 'dark-overlay',
    template = 'template'
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
}

export interface IProperties {
    name?: string;
    src?: string;
    alt?: string;
}

export interface ILoadImage {
    element: VamtigerCoverFigure;
}

export interface IDataset extends DOMStringMap {
    image: string;
    description: string;
    loaded?: '';
    overlay?: SlotName;
    template?: string;
    selector?: string;
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends Selector.image ? HTMLImageElement :
    P['selector'] extends Selector.overlay ? HTMLDivElement :
    null;