'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var chai = require('chai');
var copyFile = _interopDefault(require('vamtiger-copy-file'));
var getFolderContent = _interopDefault(require('vamtiger-get-directory-content'));
require('tslib');

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

const buildFolder = path.resolve(__dirname, '..');
const testHtmlSource = path.resolve(__dirname, '../../source/test/html/test.html');
const testHtmlDestination = path.resolve(__dirname, '../index.html');
const testHtmlTemplateSource = path.resolve(__dirname, '../../source/test/html/template.svg');
const testHtmlTemplateDestination = path.resolve(__dirname, '../template.svg');
const testCssSource = path.resolve(__dirname, '../../source/test/html/test.css');
const testCssDestination = path.resolve(__dirname, '../test.css');
describe('Generate', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                copyFile({
                    source: testHtmlSource,
                    destination: testHtmlDestination
                }),
                copyFile({
                    source: testCssSource,
                    destination: testCssDestination
                }),
                copyFile({
                    source: testHtmlTemplateSource,
                    destination: testHtmlTemplateDestination
                })
            ]);
        });
    });
    it('Test Preview', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const folderContent = yield getFolderContent(buildFolder)
                .then(result => new Set(result));
            chai.expect(folderContent.has(path.basename(testHtmlDestination))).to.be.true;
        });
    });
});
//# sourceMappingURL=node.js.map
