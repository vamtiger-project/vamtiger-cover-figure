(function (chai,mocha) {
'use strict';

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;
var loadScript$1 = () => describe('vamtiger-cover-figure', function () {
    this.timeout(60000);
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadScript({
                src: 'vamtiger-cover-figure.js',
                transpileJs: true
            });
        });
    });
    it('load script', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const script = document.head.querySelector('[src="vamtiger-cover-figure.js"]');
            chai.expect(script instanceof HTMLScriptElement).to.be.true;
        });
    });
});

mocha.setup('bdd');
loadScript$1();
mocha.run();

}(chai,mocha));
//# sourceMappingURL=browser.js.map
