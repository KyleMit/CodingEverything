# Node.js

## File System

[Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)

```js
let { promises: fs } = require("fs");
let names = await fs.readdir("path/to/dir");
let file = fs.readFile(filePath, 'utf8');
```

[Node.js create folder or use existing](https://stackoverflow.com/a/24311711/1366033)

```js
let { promises: fs } = require("fs");
await fs.promises.mkdir(dirpath, { recursive: true })
```

[Remove directory which is not empty](https://stackoverflow.com/q/18052762/1366033)

```js
fs.rmdirSync(dir, { recursive: true });
```

[node remove file](https://stackoverflow.com/a/5315175/1366033)

```js
await fsp.unlink(source)
```

[Walk through a directory](https://stackoverflow.com/a/60214211/1366033)

```js
const fs = require('fs').promises;
const path = require('path');

async function walk(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if(stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}
```

## Utilities

### Generate Sprites

* [node-sprite-generator](https://www.npmjs.com/package/node-sprite-generator) | [selaux/node-sprite-generator](https://github.com/selaux/node-sprite-generator)
* [sprity](https://www.npmjs.com/package/sprity) | [sprity/sprity](https://github.com/sprity/sprity)

### Resize Images

* [sharp](https://www.npmjs.com/package/sharp) | [lovell/sharp](https://github.com/lovell/sharp)
* [jimp](https://www.npmjs.com/package/jimp) | [oliver-moran/jimp](https://github.com/oliver-moran/jimp)

## nvm

* **nvm** - Node Version Manager

[nvm-sh/nvm](https://github.com/nvm-sh/nvm)

### Setup in Bash Profile

```bash
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```


## HTML Templating

* [Mustache](https://mustache.github.io/)
* [Handlebars](https://handlebarsjs.com/)
* [doT.js](https://olado.github.io/doT/)
* [EJS](https://ejs.co/)
* [Nunjucks](https://mozilla.github.io/nunjucks/)
* [Hogan.js](https://twitter.github.io/hogan.js/)
* [Swig](https://node-swig.github.io/swig-templates/)
* [JsRender](https://www.jsviews.com/#jsrender)
* [ECT](http://ectjs.com/)
* [SquirrellyJS](https://squirrelly.js.org/)
* [Pug](https://pugjs.org/api/getting-started.html)
* [Jade](https://jade-lang.com/)

## Require

[Require at top of file of in function?](https://stackoverflow.com/a/9139419/1366033)


## npm


### npm scripts

[What does the colon `:` mean in npm script names?](https://stackoverflow.com/q/47606101/1366033)

## Modules

[CommonJS vs AMD vs RequireJS vs ES6 Modules](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
[What are CJS, AMD, UMD, and ESM in Javascript?](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

* Revealing Module Pattern
* Common JS / Require (CJS)
* Asynchronous Module Definition (AMD)
* Universal Module Definition (UMD)
* ECMAScript 6 modules / ES Modules (ESM)

* SystemJS


### Revealing Module Pattern

```js
var revealingModule = (function () {
    let privateVar = "Ben Thomas"
    let setNameFn = (strName) => {
        privateVar = strName
    }
    return {
        setName: setNameFn,
    };
})();
revealingModule.setName( "Paul Adams" );
```

### Common JS


```js
//------ store/customer.js ------
let customerStore = function(){
    return customers.get('store');
}
// vanilla common js flavor
exports = customerStore
// node common js flavor
modules.exports = customerStore
```

```js
//------ payments.js ------
var customerStore = require('store/customer'); // import module
```

### AMD

Allows asynchronous loading and callback when complete

```js
define(['module1', ',module2'], function(module1, module2) {
  console.log(module1.setName());
});
```

### UMD

Pattern to configure several module systems

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

### ESM

* The `export` statement makes the elements public.
* Allows for static analysis
* [Works in most browsers](https://caniuse.com/es6-module)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

```js
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
```

```js
//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```


## Convert Callback to Promise

* [Converting callbacks to promises | Zell Liew](https://zellwk.com/blog/converting-callbacks-to-promises/)
* [Util | Node.js v8.17.0 Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)
