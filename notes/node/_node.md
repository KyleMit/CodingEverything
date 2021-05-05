# Node.js

## Alternatives

* [Deno](https://deno.land/)



## File System

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


## npm


### npm scripts

[What does the colon `:` mean in npm script names?](https://stackoverflow.com/q/47606101/1366033)

## Modules

### Articles

* [CommonJS vs AMD vs RequireJS vs ES6 Modules](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
* [What are CJS, AMD, UMD, and ESM in Javascript?](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
* [JavaScript: Classic Scripts vs. Modules vs. CommonJS](https://gist.github.com/jkrems/b14894e0b8efde10aa10a28c652d3541)
* [Classic scripts v/s module scripts in Javascript - Stack Overflow](https://stackoverflow.com/q/39652618/1366033)
* [How to use UMD in browser without any additional dependencies](https://stackoverflow.com/q/38638210/1366033)
* [sindresorhus/node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Boilerplate to kickstart creating a Node.js module

### Types

* Classic Scripts
* Revealing Module Pattern
* Common JS / Require (CJS)
* Asynchronous Module Definition (AMD)
* Universal Module Definition (UMD)
* ECMAScript 6 modules / ES Modules (ESM)
* SystemJS?


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

### Common JS (CJS)


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
* [Pika](https://www.pika.dev/about)

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

## Config Files

[davidtheclark/**cosmiconfig**](https://github.com/davidtheclark/cosmiconfig) - Find and load configuration from a package.json property, rc file, or CommonJS module

* a `myapp` property in `package.json`
* a `.myapprc` file in JSON or YAML format
* a `.myapprc.json` , `.myapprc.yaml` , `.myapprc.yml` , `.myapprc.js` , or `.myapprc.cjs` file
* a `myapp.config.js` or `myapp.config.cjs` CommonJS module exporting an object

[sapegin/**mrm**](https://github.com/sapegin/mrm) - Codemods for your project config files

* [Cannot configure lint-staged, only ESLint, stylelint or custom rules are supported.](https://github.com/sapegin/mrm/issues/41)

  * Error running `npx mrm lint-staged`
  * Add `eslint` to project
  * Run `npm i -D eslint`

## Convert Callback to Promise

* [Converting callbacks to promises | Zell Liew](https://zellwk.com/blog/converting-callbacks-to-promises/)
* [Util | Node.js v8.17.0 Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)





## Create Unique ID

[uuid](https://www.npmjs.com/package/uuid)

```js
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

## Nodemon

> Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

[nodemon](https://nodemon.io/)

```bash
npm install -g nodemon
```


* [Nodemon keeps restarting server](https://stackoverflow.com/q/44855839/1366033)

   don't write to watch directory




### Alternatives


* [M-Zuber/**npm-watch**](https://github.com/M-Zuber/npm-watch) - run npm scripts when files change
* [mikeal/**watch**](https://github.com/mikeal/watch) - Utilities for watching file trees in node.js

## Nodemailer

[Nodemailer](https://nodemailer.com/about/)


## JS Config

> * **Without a JS Config** - JavaScript files opened in Visual Studio Code are treated as independent units - there is no common project context between the two files



* [How to add jsconfig.json to existing vscode project](https://stackoverflow.com/q/56437517/1366033)
* [jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig)
  * [`compilerOptions`](https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options)
    * `checkJs` - Enable type checking on JavaScript files
* [JavaScript Language Service in Visual Studio](https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio)

`jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "checkjs": true
  },
}
```

![jsconfig autocomplete](/assets/notes/node/jsconfig.png)

## Questions


* [How do you properly promisify request?](https://stackoverflow.com/q/28308131/1366033)
* [Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)
* [Why does Node.js' fs.readFile() return a buffer instead of string?](https://stackoverflow.com/q/6456864/1366033)
* [How do I get the path to the current script with Node.js?](https://stackoverflow.com/q/3133243/1366033)
* [I'd like to remove the filename from a path using JavaScript](https://stackoverflow.com/a/59506376/1366033)
* [vscode debug code in node_modules directory](https://stackoverflow.com/a/53081698/1366033)
* [Is it possible to blackbox vendor code when using VSCode's node debugger?](https://stackoverflow.com/a/48621036/1366033)
* [writeFile no such file or directory](https://stackoverflow.com/a/50927704/1366033)
* [Determine project root from a running node.js application](https://stackoverflow.com/a/18721515/1366033)
* [How to set environment variables from within package.json](https://stackoverflow.com/a/27090755/1366033)

* [Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)
* [how to create a directory if doesn't exist?](https://stackoverflow.com/q/21194934/1366033)
* [skip internal modules](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_skipping-uninteresting-code-node-chrome)


* [Using filesystem in node.js with async/await](https://stackoverflow.com/a/58332163/1366033)
* [Using async/await with a forEach loop](https://stackoverflow.com/a/37576787/1366033)
* [Merge/flatten an array of arrays](https://stackoverflow.com/a/18307218/1366033)
* [Counting the occurrences / frequency of array elements](https://stackoverflow.com/a/39841401/1366033)
* [Convert object to an array of objects?](https://stackoverflow.com/a/49345363/1366033)
* [Sort array of objects by string property value](https://stackoverflow.com/a/35092754/1366033)
* [What is the different between `stat`, `fstat`, and `lstat` functions in node](https://stackoverflow.com/a/32478801/1366033)


* [Setting Environment Variables for Node to retrieve](https://stackoverflow.com/a/34154491/1366033)
  * [Managing Environment Variables in Node.js with dotenv](https://stackabuse.com/managing-environment-variables-in-node-js-with-dotenv/)
  * [motdotla/**dotenv**](https://github.com/motdotla/dotenv)
    * *ALT*: [erisanolasheni/**custom-env**](https://github.com/erisanolasheni/custom-env)


* [Require at top of file of in function?](https://stackoverflow.com/a/9139419/1366033)


* [Cannot use import statement outside a module](https://stackoverflow.com/a/64655153/1366033)

  Add `"type": "module"` to your `package.json`



* [How to convert a SVG to a PNG?](https://stackoverflow.com/q/9853325/1366033)

   [shakiba/**svgexport**](https://github.com/shakiba/svgexport) - SVG to PNG/JPEG command-line tool and Node.js module


    ```bash
    npm install svgexport -g
    svgexport input.svg output.png 1.5x
    ```

* [List Directory](https://stackoverflow.com/q/2727167/1366033)


* [Using filesystem in node.js with async / await](https://stackoverflow.com/a/58332163/1366033)

    ```js
    let { promises: fs } = require("fs");
    let names = await fs.readdir("path/to/dir");
    let file = fs.readFile(filePath, 'utf8');
    ```

* [Node.js create folder or use existing](https://stackoverflow.com/a/24311711/1366033)

    ```js
    let { promises: fs } = require("fs");
    await fs.promises.mkdir(dirpath, { recursive: true })
    ```

* [Remove directory which is not empty](https://stackoverflow.com/q/18052762/1366033)

    ```js
    fs.rmdirSync(dir, { recursive: true });
    ```

* [Copy Folder](https://stackoverflow.com/a/64255382/1366033)

    ```js
    const { promises: fs } = require("fs")
    const path = require("path")

    async function copyDir(src, dest) {
        await fs.mkdir(dest, { recursive: true });
        let entries = await fs.readdir(src, { withFileTypes: true });

        for (let entry of entries) {
            let srcPath = path.join(src, entry.name);
            let destPath = path.join(dest, entry.name);

            entry.isDirectory() ?
                await copyDir(srcPath, destPath) :
                await fs.copyFile(srcPath, destPath);
        }
    }
    ```

* [node remove file](https://stackoverflow.com/a/5315175/1366033)

    ```js
    await fsp.unlink(source)
    ```

* [Walk through a directory](https://stackoverflow.com/a/60214211/1366033)

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

* [Change working directory in my current shell context when running Node script](https://stackoverflow.com/a/19803771/1366033)

    ```js
    process.chdir('/tmp');
    ```

* [Execute a command line binary with Node.js](https://stackoverflow.com/a/20643568/1366033)

    ```js
    const { promisify } = require('util');
    const cp = require('child_process')
    const exec = promisify(cp.exec);

    async function cmd(text) {
        const { stdout, stderr } = await exec(text);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }

    await cmd("ls")
    ```

* [Global npm install location on windows?](https://stackoverflow.com/q/33819757/1366033)

    ```none
    %AppData%\npm\node_modules
    ```

* [Determine command line working directory when running node bin script](https://stackoverflow.com/a/12239689/1366033)

    ```js
    let currentWorkingDirectory = process.cwd()
    let currentFileDirectory = __dirname
    ```

* [Simplest Node.js server is just](https://stackoverflow.com/a/23122981/1366033)

    ```bash
    npm install http-server -g
    ```

* [Parse YAML to JSON](https://github.com/nodeca/js-yaml)

    ```js
    const yaml = require('js-yaml');
    const fs   = require('fs');

    let json = fs.readFileSync('./example.yml', 'utf8')
    let doc = yaml.safeLoad();
    console.log(doc);
    ```

* [How to set shell for npm run-scripts in Windows](https://stackoverflow.com/q/23243353/1366033)


    ```bash
    npm config get script-shell
    npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"
    code ~/.npmrc
    ```

* [Node.js check if file exists](https://stackoverflow.com/a/35008327/1366033)

    ```js
    async function checkFileExists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)
    }
    ```
