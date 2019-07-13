import {
    IHandleAttributeChanged
} from './types';
import loadImage from './load-image';

const { VamtigerBrowserMethod } = self;
const { intersectionObserver } = VamtigerBrowserMethod;

export default function ({element}: IHandleAttributeChanged) {
    if (intersectionObserver) {
        intersectionObserver.unobserve(element);
    }

    loadImage({element});
}