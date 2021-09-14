"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUPPETEER_DEFAULT_CONFIG = void 0;
exports.default = {
    globalSetup: `@chainsafe/dappeteer/dist/jest/setup.js`,
    globalTeardown: `@chainsafe/dappeteer/dist/jest/teardown.js`,
    testEnvironment: `@chainsafe/dappeteer/dist/jest//DappeteerEnvironment.js`,
};
exports.PUPPETEER_DEFAULT_CONFIG = {
    product: ((_a = process.env.PUPPETEER_PRODUCT) !== null && _a !== void 0 ? _a : 'chrome'),
    args: ['--disable-web-security'],
};
