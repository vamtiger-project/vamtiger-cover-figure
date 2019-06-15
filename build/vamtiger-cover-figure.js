"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = require("./element");
const config_1 = require("./config");
const { VamtigerBrowserMethod } = window;
const { defineCustomElement, loadScript } = VamtigerBrowserMethod;
const params = {
    name: element_1.name,
    constructor: element_1.default
};
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Promise.all(config_1.dependencies.map(src => loadScript({ src })));
        defineCustomElement(params);
    });
}
load().catch(console.warn);
//# sourceMappingURL=vamtiger-cover-figure.js.map