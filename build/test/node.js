"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var path=require("path"),chai=require("chai"),copyFile=_interopDefault(require("vamtiger-copy-file")),getFolderContent=_interopDefault(require("vamtiger-get-directory-content"));function __awaiter(t,e,i,n){return new(i||(i=Promise))(function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(s,a)}l((n=n.apply(t,e)).next())})}require("tslib");const buildFolder=path.resolve(__dirname,".."),testHtmlSource=path.resolve(__dirname,"../../source/test/html/test.html"),testHtmlDestination=path.resolve(__dirname,"../index.html"),testHtmlTemplateSource=path.resolve(__dirname,"../../source/test/html/template.svg"),testHtmlTemplateDestination=path.resolve(__dirname,"../template.svg"),testCssSource=path.resolve(__dirname,"../../source/test/html/test.css"),testCssDestination=path.resolve(__dirname,"../test.css");describe("Generate",function(){before(function(){return __awaiter(this,void 0,void 0,function*(){yield Promise.all([copyFile({source:testHtmlSource,destination:testHtmlDestination}),copyFile({source:testCssSource,destination:testCssDestination}),copyFile({source:testHtmlTemplateSource,destination:testHtmlTemplateDestination})])})}),it("Test Preview",function(){return __awaiter(this,void 0,void 0,function*(){const t=yield getFolderContent(buildFolder).then(t=>new Set(t));chai.expect(t.has(path.basename(testHtmlDestination))).to.be.true})})});
//# sourceMappingURL=node.js.map
