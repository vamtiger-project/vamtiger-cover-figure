"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["colonSpace"] = ": ";
    StringConstant["slash"] = "/";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var TimeoutDuration;
(function (TimeoutDuration) {
    TimeoutDuration[TimeoutDuration["captionLoaded"] = 1000] = "captionLoaded";
})(TimeoutDuration = exports.TimeoutDuration || (exports.TimeoutDuration = {}));
var DataAttribute;
(function (DataAttribute) {
    DataAttribute["captionImage"] = "captionImage";
    DataAttribute["imageCaptionIcon"] = "imageCaptionIcon";
    DataAttribute["imageCaptionTitle"] = "imageCaptionTitle";
    DataAttribute["imageCaptionSubtitle"] = "imageCaptionSubtitle";
    DataAttribute["jsonLd"] = "jsonLd";
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
var Selector;
(function (Selector) {
    Selector["style"] = "style";
    Selector["slot"] = "slot";
    Selector["image"] = "img";
    Selector["overlay"] = "div";
    Selector["figure"] = "figure";
    Selector["imageCaption"] = "[data-image-caption]";
    Selector["icon"] = "[data-icon]";
    Selector["titleHeader"] = "[data-title-header]";
    Selector["title"] = "[data-title]";
    Selector["subtitle"] = "[data-subtitle]";
    Selector["centerCaption"] = "[data-center-caption]";
    Selector["captionImage"] = "img, svg";
    Selector["vamtigerResponsiveSvg"] = "vamtiger-responsive-svg";
    Selector["iconFigure"] = "[data-icon-figure]";
    Selector["linkedDataCaption"] = "[data-linked-data-caption]";
    Selector["linkedDataCaptionElement"] = "[data-linked-data-caption-element]";
    Selector["a"] = "a";
})(Selector = exports.Selector || (exports.Selector = {}));
(function (DataAttribute) {
    DataAttribute["image"] = "image";
    DataAttribute["description"] = "description";
    DataAttribute["loaded"] = "loaded";
    DataAttribute["overlay"] = "overlay";
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
var SlotName;
(function (SlotName) {
    SlotName["darkOverlay"] = "dark-overlay";
    SlotName["template"] = "template";
    SlotName["caption"] = "caption";
    SlotName["centerCaption"] = "center-caption";
})(SlotName = exports.SlotName || (exports.SlotName = {}));
var EventName;
(function (EventName) {
    EventName["imageLoaded"] = "imageLoaded";
    EventName["svgLoaded"] = "svgLoaded";
})(EventName = exports.EventName || (exports.EventName = {}));
var ObservedAttributes;
(function (ObservedAttributes) {
})(ObservedAttributes = exports.ObservedAttributes || (exports.ObservedAttributes = {}));
exports.imageCaptionAttribute = [
    DataAttribute.imageCaptionIcon,
    DataAttribute.imageCaptionTitle,
    DataAttribute.imageCaptionSubtitle
];
//# sourceMappingURL=types.js.map