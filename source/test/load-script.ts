import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-cover-figure', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-cover-figure.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-cover-figure.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});