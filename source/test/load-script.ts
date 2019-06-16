import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-cover-figure', function () {
    this.timeout(60000);
    before(async function () {
        await loadScript({
            src: 'vamtiger-cover-figure.js',
            transpileJs: true
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-cover-figure.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});