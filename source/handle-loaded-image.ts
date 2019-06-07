import {
    StringConstant,
    IDataset,
    IHandleLoadedImage,
    EventName
} from './types';
import VamtigerCoverFigure, { name } from './element';
import loadImageCaption from './load-image-caption'

const { nothing } = StringConstant;
const eventParams = {
    bubbles: true
};

export default function handleLoadedImage({ currentTarget, element: currentElement }: Event & IHandleLoadedImage) {
    const image = currentTarget as HTMLElement;
    const element = (currentElement || image.closest(name)) as VamtigerCoverFigure;
    const dataset = element.dataset as IDataset;
    const imageLoadedEvent = new CustomEvent(
        EventName.imageLoaded,
        eventParams
    );

    image.removeEventListener('loaded', handleLoadedImage);

    dataset.loaded = nothing;

    delete element.dataset.loading;

    element.dispatchEvent(imageLoadedEvent);

    loadImageCaption({ element });
}