# Webpack

[webpack](https://webpack.js.org/)

## Docs


* [Tutorial > Getting Started](https://webpack.js.org/guides/)
* [Concepts](https://webpack.js.org/concepts/)
* [API](https://webpack.js.org/api/)
* [Configuration](https://webpack.js.org/configuration/)
* [Loaders](https://webpack.js.org/loaders/)
* [Plugins](https://webpack.js.org/plugins/)


## Alternatives

* [Webpack Comparison](https://webpack.js.org/comparison/)
* [Parcel](https://parceljs.org/)
* [Rollup.js](https://rollupjs.org/guide/en/)
* [Snowpack](https://www.snowpack.dev/)
* Task Runners
  * [Grunt](https://gruntjs.com/)
  * [gulp.js](https://gulpjs.com/)
  * [npm](https://docs.npmjs.com/)
  * [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

## Problems with Global Dependencies

> * It is not immediately apparent that the script depends on an external library.
> * If a dependency is missing, or included in the wrong order, the application will not function properly.
> * If a dependency is included but not used, the browser will be forced to download unnecessary code.


## Transpilers

* [**Bublé**](https://buble.surge.sh/guide/) - the blazing fast, batteries-included ES2015 compiler
* [**Babel**](https://babeljs.io/) - The compiler for next generation JavaScript

## Getting Started

### Installation

```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

### Code Structure

* **source** code (`/src`) - code that we'll write and edit
* **distribution** code (`/dist`) - code that is the minimized and optimized output

### Build Basics

* Entry Point - `/src/index.js`
* Generated - `/dist/main.js`

## Config

```bash
npx webpack --config webpack.config.js
```

**File**: `webpack.config.js`

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

## Loaders

> * Module loaders can be chained.
> * Each loader in the chain applies transformations to the processed resource.
> * A chain is executed in reverse order.
> * The first loader passes its result (resource with applied transformations) to the next one, and so forth.
> * Finally, webpack expects JavaScript to be returned by the last loader in the chain.

* [style-loader](https://webpack.js.org/loaders/style-loader/)
* [css-loader](https://webpack.js.org/loaders/css-loader/)
* [file-loader](https://webpack.js.org/loaders/file-loader/)





## Questions


* [Webpack style-loader vs css-loader](https://stackoverflow.com/q/34039826/1366033)
  * `css-loader` reads in a css file as a string. You could replace it with `raw-loader` and get the same effect in a lot of situations. Since it just reads the file contents and nothing else, it's basically useless unless you chain it with another loader.
  * `style-loader` takes those styles and creates a `<style>` tag in the page's `<head>` element containing those styles.


