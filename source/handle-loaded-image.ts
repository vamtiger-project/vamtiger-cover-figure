import {
    StringConstant,
    IDataset,
    IHandleLoadedImage
} from './types';
import VamtigerCoverFigure, { name } from './element';

const { nothing } = StringConstant;

export default function handleLoadedImage({ currentTarget, element: currentElement }: Event & IHandleLoadedImage) {
    const image = currentTarget as HTMLElement;
    const element = currentElement || image.closest(name) as VamtigerCoverFigure;
    const dataset = element.dataset as IDataset;

    image.removeEventListener('loaded', handleLoadedImage);

    dataset.loaded = nothing;
}