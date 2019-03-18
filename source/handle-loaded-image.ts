import {
    StringConstant,
    IDataset
} from './types';
import VamtigerCoverFigure from './element';

const { nothing } = StringConstant;

export default function handleLoadedImage({ currentTarget }: Event) {
    const image = currentTarget as HTMLElement;
    const element = image.parentElement as VamtigerCoverFigure;
    const dataset = element.dataset as IDataset;

    image.removeEventListener('loaded', handleLoadedImage);

    dataset.loaded = nothing;
}