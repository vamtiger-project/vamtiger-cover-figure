"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.shadowRoot = {
    mode: 'open'
};
exports.observedAttributes = Object.keys(types_1.ObservedAttributes)
    .map(key => types_1.ObservedAttributes[key]);
exports.dependencies = [
    'https://vamtiger-project.github.io/vamtiger-response-svg/build/vamtiger-responsive-svg.js.json.js'
];
//# sourceMappingURL=config.js.map