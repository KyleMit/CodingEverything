# Node.js

## Alternatives

* [Deno](https://deno.land/)

## Docs

* [`package.json`](https://docs.npmjs.com/cli/v8/configuring-npm/package-jsonrepository)


## Versions

* **nvm** - Node Version Manager

[nvm-sh/nvm](https://github.com/nvm-sh/nvm)

* [Node Version Manager (NVM) on Windows](https://stackoverflow.com/q/25654234/1366033)
  * [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows) - A node.js version management utility for Windows. Ironically written in Go.

This is a partial list. For a complete list, visit https://nodejs.org/download/releases

### Setup in Bash Profile

```bash
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```


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

### Create Unique ID

[uuid](https://www.npmjs.com/package/uuid)

```js
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```


### Nodemailer

[Nodemailer](https://nodemailer.com/about/)



## Nodemon

> Nodemon is a utility that will monitor for any changes in your source and automatically restart your server

[nodemon](https://nodemon.io/)

```bash
npm install -g nodemon
```

* [Nodemon keeps restarting server](https://stackoverflow.com/q/44855839/1366033)

   don't write to watch directory

* Alternatives

  * [M-Zuber/**npm-watch**](https://github.com/M-Zuber/npm-watch) - run npm scripts when files change
  * [mikeal/**watch**](https://github.com/mikeal/watch) - Utilities for watching file trees in node.js

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

* [What does the colon `:` mean in npm script names?](https://stackoverflow.com/q/47606101/1366033)


* [How do you properly promisify request?](https://stackoverflow.com/q/28308131/1366033)

  * [Converting callbacks to promises | Zell Liew](https://zellwk.com/blog/converting-callbacks-to-promises/)
  * [Util | Node.js v8.17.0 Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)


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

* [How do you get a list of the names of all files present in a directory in Node.js](https://stackoverflow.com/q/2727167/1366033)

    ```js
    fs.readdirSync('./dirpath', {withFileTypes: true})
        .filter(item => !item.isDirectory())
        .map(item => item.name)
    ```

* [Get all directories within directory nodejs](https://stackoverflow.com/q/18112204/1366033)

    ```js
    const { promises: { readdir } } = require('fs')

    (await readdir(source, { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    ```

* [Get parent directory name in Node.js](https://stackoverflow.com/q/42956127/1366033)

    ```js
    path.basename(path.dirname(filename))
    ```

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

* [recursive directory search](https://stackoverflow.com/a/77512570/1366033)

    ```js
    const fs = require('fs').promises;

    const files = await fs.readdir(".", { recursive: true })
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
    import { promisify } from 'util';
    import cp from 'child_process';
    const exec = promisify(cp.exec);

    export const cmd = async (text: string): Promise<string> => {
        const { stdout, stderr } = await exec(text);
        if (stderr) throw new Error(stderr)
        return stdout
    }

    await cmd("ls")
    ```

* [Global npm install location on windows?](https://stackoverflow.com/q/33819757/1366033)

    ```none
    %AppData%\npm\node_modules
    ```

* [Node.js global variables](https://stackoverflow.com/q/5447771/1366033)

    ```js
    global._ = require('underscore')
    ```

* [Determine command line working directory when running node bin script](https://stackoverflow.com/a/12239689/1366033)

    ```js
    let currentWorkingDirectory = process.cwd()
    let currentFileDirectory = __dirname
    let pathToCurrentFile = __filename
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
    async function checkFileExists(path) {
        return fs.promises.access(path, fs.constants.F_OK)
                .then(() => true)
                .catch(() => false)
    }
    ```


    ```js
    async function checkFileExists(path) {
        try {
            await fs.promises.access(path, fs.constants.F_OK)
            return true;
        } catch {
            return false
        }
    }
    ```


* Must use import to load ES Module

  Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: \node_modules\node-fetch\src\index.js

  require() of ES modules is not supported.
  require() of \node_modules\node-fetch\src\index.js from utils\http.ts
  is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.\

  * Instead:
    * rename index.js to end in .cjs
    * change the requiring code to use import(), or
    * remove "type": "module" from \node_modules\node-fetch\package.json.

* [`url.parse` deprecated - what to use instead?](https://stackoverflow.com/q/59375013/1366033)

   Use [`URL`](https://nodejs.org/api/url.html)

* [Force plain text encoding with node https get request](https://stackoverflow.com/q/70139545/1366033)


* [How can I get the full object in Node.js's console.log(), rather than `[Object]`?](https://stackoverflow.com/q/10729276/1366033)


    ```js
    const util = require('util')
    console.log(util.inspect(myObject, {showHidden: false, depth: null, colors: true}))

    console.log(JSON.stringify(myObject, null, 4));

    console.dir(myObject, { depth: null }); // `depth: null` ensures unlimited recursion
    ```

* [What does the Node.js `--nolazy` flag mean?](https://stackoverflow.com/q/21534565/1366033)

    > Will force V8 engine to do full compile of code and thus work properly with IntelliJ and WebStorm so you can properly place breakpoints in the code

    ```bash
    node --v8-options
    ```

* [Is there a good reference for V8 command line arguments when using node.js](https://stackoverflow.com/q/12863887/1366033)

  * [v8/flag-definitions.h](https://github.com/v8/v8/blob/master/src/flags/flag-definitions.h)
  * [v8-flags/flags-0.11.md](https://github.com/thlorenz/v8-flags/blob/master/flags-0.11.md#lazy-true-boolean)

* [Stdout buffer issue using node child_process](https://stackoverflow.com/q/23429499/1366033)

   Increase buffer or spawn new process

* [How to check if a path is absolute or relative](https://stackoverflow.com/q/21698906/1366033)

    ```js
    import {isAbsolute} from 'path';
    isAbsolute(myPath)
    ```

* [Error message "error:0308010C:digital envelope routines::unsupported"](https://stackoverflow.com/q/69692842/1366033)

    ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    ```

* [Disable deprecation in javascript console](https://stackoverflow.com/q/58672947/1366033)

    ```bash
    node --no-deprecation script
    ```

* [Locate a parent folder](https://stackoverflow.com/questions/7083045/fs-how-do-i-locate-a-parent-folder)

    ```js
    var path = require("path")
    var parent = path.join(__dirname, "..");
    ```

* [How to remove a directory if it exists and is not empty?](https://stackoverflow.com/q/31917891/1366033)

    ```js
    fs.rm("/directory-to-delete", { recursive: true, force: true })
    ```

* [Get file name from absolute path in Nodejs?](https://stackoverflow.com/q/19811541/1366033)

    ```js
    path.basename('/foo/bar/asdf.html') // 'asdf.html'
    ```



* [Why is __dirname not defined in node REPL?](https://stackoverflow.com/q/8817423/1366033)


    > If you are using Node.js modules, `__dirname` and `__filename` don't exist.

    ```js
    import { fileURLToPath } from 'url';
    import { dirname } from 'path';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    ```

* [Get user input through Node.js console](https://stackoverflow.com/q/61394928/1366033)

    Use [`readline/promises`](https://nodejs.org/api/readline.html#promises-api)

    ```js
    import * as readline from 'node:readline/promises';
    import { stdin as input, stdout as output } from 'node:process';

    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('What do you think of Node.js? ');
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
    ```

    Wrap in Promise

    ```js
    import { createInterface } from 'readline';
    import { stdin , stdout } from 'process';

    (async() => {
        const rl = createInterface({ input: stdin, output: stdout });
        const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
        const name = await prompt("What's your name: ");
        console.log(`Hello ${name}`);
        rl.close();
    })();
    ```

* [How to use nodejs to open default browser and navigate to a specific URL](https://stackoverflow.com/q/8500326/1366033)

    Use [`sindresorhus/open`](https://github.com/sindresorhus/open)

    ```bash
    npm install open
    ```

    ```js
    const open = require('open');
    open('http://sindresorhus.com');
    ```

    Execute Child Process

    ```js
    import cp from 'child_process'
    import {platform} from 'process'

    var url = 'https://stackoverflow.com/';
    var start = platform == 'darwin' ? 'open'
            : platform == 'win32' ? 'start'
            : 'xdg-open';
    cp.exec(start + ' ' + url);
    ```

* [Using Node.JS, how do I read a JSON file into (server) memory?](https://stackoverflow.com/q/10011011/1366033)

    ```js
    import { promises as fs } from "fs"
    const contents = await fs.readFile("./config.json", { encoding: 'utf8'})
    const obj = JSON.parse(contents);
    ```

* [Hide the console cursor without affecting it's position?](https://stackoverflow.com/q/73101623/1366033)

    [ANSI Escape Codes](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797)

    ```js
    import { stdout } from "process"

    stdout.write('\u001B[?25l'); // hides cursor
    stdout.write('\u001B[?25h'); // show cursor 
    ```

* [How to make a loading animation in Console Application written in JavaScript or NodeJs?](https://stackoverflow.com/q/34848505/1366033)

    ```js
    import { stdout } from "process"

    function startSpinner() {
        const characters = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
        const cursorEsc = {
            hide: '\u001B[?25l',
            show: '\u001B[?25h',
        }
        stdout.write(cursorEsc.hide)

        let i = 0;
        const timer = setInterval(function () {
            stdout.write("\r" + characters[i++]);
            i = i >= characters.length ? 0 : i;
        }, 150);

        return () => {
            clearInterval(timer)
            stdout.write("\r")
            stdout.write(cursorEsc.show)
        }
    }


    const stopSpinner = startSpinner();

    setTimeout(() => {
        stopSpinner()
        console.log("done")
    },4000)
    ```

  * [sindresorhus/cli-spinners: Spinners for use in the terminal](https://github.com/sindresorhus/cli-spinners)
  * [sindresorhus/ora: Elegant terminal spinner](https://github.com/sindresorhus/ora)

* [How can I specify the required Node.js version in package.json?](https://stackoverflow.com/q/29349684/1366033)

    Use [`engines`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines)

    ```json
    "engines" : { 
    "npm" : ">=8.0.0 <9.0.0",
    "node" : ">=16.0.0 <17.0.0"
    }
    ```
