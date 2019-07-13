import { ObservedAttributes } from './types';
export declare const name = "vamtiger-cover-figure";
export default class VamtigerCoverFigure extends HTMLElement {
    constructor();
    static readonly observedAttributes: ObservedAttributes[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttributes, oldValue: string, newValue: string): void;
}
