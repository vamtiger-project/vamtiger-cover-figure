"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_image_1 = require("./load-image");
const { VamtigerBrowserMethod } = self;
const { intersectionObserver } = VamtigerBrowserMethod;
function default_1({ element }) {
    if (intersectionObserver) {
        intersectionObserver.unobserve(element);
    }
    load_image_1.default({ element });
}
exports.default = default_1;
//# sourceMappingURL=handle-visible.js.map