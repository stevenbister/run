/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
/** @type {import('postcss-load-config').Config} */

const autoprefixer = require('autoprefixer');
const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
    plugins: [autoprefixer(), postcssJitProps(OpenProps)],
};
