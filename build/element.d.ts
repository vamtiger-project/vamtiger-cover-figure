import { ObservedAttribute } from './types';
export declare const name = "vamtiger-cover-figure";
export default class VamtigerCoverFigure extends HTMLElement {
    constructor();
    static readonly observedAttributes: never[];
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
