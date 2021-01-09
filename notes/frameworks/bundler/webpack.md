# Webpack

> webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.


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
* [Bazel](https://bazel.build/)
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

## NPM

[Webpack > Getting Started > NPM Scripts](https://webpack.js.org/guides/getting-started/#npm-scripts)

> within `scripts` we can reference locally installed npm packages by name the same way we did with `npx`

```json
"scripts": {
  "build": "webpack"
},
```

## Webpack Serve

```bash
npx webpack serve
npm install -D @webpack-cli/serve
```

## Webpack Dev Server

* [webpack/**webpack-dev-server**](https://github.com/webpack/webpack-dev-server)
* [WebPack > DevServer > Docs](https://webpack.js.org/configuration/dev-server/)


```bash
npm install webpack-dev-server --save-dev
```

```js
// webpack.config.js
var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```

```json
"scripts": {
  "start:dev": "webpack serve"
}
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


### Babel Loader

[babel-loader](https://webpack.js.org/loaders/babel-loader/)

#### Install

```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

#### Config

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```


## Questions


* [Webpack style-loader vs css-loader](https://stackoverflow.com/q/34039826/1366033)
  * `css-loader` reads in a css file as a string. You could replace it with `raw-loader` and get the same effect in a lot of situations. Since it just reads the file contents and nothing else, it's basically useless unless you chain it with another loader.
  * `style-loader` takes those styles and creates a `<style>` tag in the page's `<head>` element containing those styles.


* [ES Lint Line breaks](https://stackoverflow.com/a/44662845/1366033)


* [Static Asset - Relative Path Imports via File Loader](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling)

* [The 'mode' option has not been set, webpack will fallback to 'production' for this value](https://stackoverflow.com/q/49242756/1366033)

  [Mode | webpack](https://webpack.js.org/configuration/mode/)

  Pass arg in CLI

  ```json
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
  ```

  Add to `config.js`

  ```js
  module.exports = {
    mode: 'development'
  };
  ```


You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See

  > ERROR in ./**/findInput.css 7:0
  > Module parse failed: Unexpected token (7:0)

  [Concepts > Loaders](https://webpack.js.org/concepts#loaders)


* [Error when run npm start: Class constructor ServeCommand cannot be invoked without 'new' #2272](https://github.com/webpack/webpack-cli/issues/2272)

  Update `webpack-cli` to the `4.3.0`

* [webpack output is served from undefined](https://github.com/webpack/webpack-dev-server/issues/2745)


  ```js
  devServer: {
    publicPath: '/dist'
  }
  ```

* [Rules vs Loaders in Webpack - What's the Difference?](https://stackoverflow.com/a/43805263/1366033)

  * **Loaders** are used in Webpack 1
  * **Rules** are used in Webpack 2+


* [Set `modules: false` on babel-preset-env](https://github.com/babel/babel-loader/issues/521)

  ```js
  presets: [["@babel/preset-env", { modules: false }]]
  ```

