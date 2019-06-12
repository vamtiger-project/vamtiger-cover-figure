"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const element_1 = require("./element");
const load_image_caption_1 = require("./load-image-caption");
const { nothing } = types_1.StringConstant;
const eventParams = {
    bubbles: true
};
function handleLoadedImage({ currentTarget, element: currentElement }) {
    const image = currentTarget;
    const element = (currentElement || image.closest(element_1.name));
    const dataset = element.dataset;
    const imageLoadedEvent = new CustomEvent(types_1.EventName.imageLoaded, eventParams);
    image.removeEventListener('loaded', handleLoadedImage);
    dataset.loaded = nothing;
    delete element.dataset.loading;
    element.dispatchEvent(imageLoadedEvent);
    load_image_caption_1.default({ element });
}
exports.default = handleLoadedImage;
//# sourceMappingURL=handle-loaded-image.js.map