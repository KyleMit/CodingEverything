# Flow

[Flow](https://flow.org/)

> Adds static typing to JavaScript to improve developer productivity and code quality


## Links

* [facebook/flow - github](https://github.com/facebook/flow)

## VS Code

* [flowtype/**flow-for-vscode**](https://github.com/flowtype/flow-for-vscode)
* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

## Getting Started

* [Getting Started](https://flow.org/en/docs/getting-started/)
* [Installation](https://flow.org/en/docs/install/)

### Install

```bash
yarn add --dev @babel/core @babel/cli @babel/preset-flow
yarn add --dev flow-bin
```

### `.babelrc`

```js
{
  "presets": ["@babel/preset-flow"]
}
```

### `package.json` > scripts

```json
"build": "babel src/ -d lib/",
"prepublish": "yarn run build",

```

### `.vscode/settings.json`

```json
"javascript.validate.enable": false
```

### Create `.flowconfig`

```bash
flow init
```


### `.flowconfig`

```json
"flow.pathToFlow": "${workspaceFolder}/node_modules/.bin/flow"
```


## Syntax

```js
// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
```

## Typings

[Type Annotations](https://flow.org/en/docs/types/)

* [Exact Object Types](https://flow.org/en/docs/types/objects/#toc-exact-object-types)

    ```js
    type FooT = {| foo: string |};
    ```


* [Interface property variance (read-only and write-only)](https://flow.org/en/docs/types/interfaces/#toc-interface-property-variance-read-only-and-write-only)

    ```js
    interface MyInterface {
      +covariant: number;     // read-only
      -contravariant: number; // write-only
    }
    ```

  * **invariant** - read/write
  * **covariant** - read-only
  * **contravariant** - write-only

* [Type Variance](https://flow.org/en/docs/lang/variance/)

## Flow CLI

[Flow CLI](https://flow.org/en/docs/cli/)

## Remove Types

* [flow-remove-types | Flow](https://flow.org/en/docs/tools/flow-remove-types/)
* [flow/packages/flow-remove-types at master · facebook/flow](https://github.com/facebook/flow/tree/master/packages/flow-remove-types)

### CLI

```bash
npm install --global flow-remove-types
flow-remove-types input.js > output.js
```

### API

```js
var flowRemoveTypes = require('flow-remove-types');
var fs = require('fs');

var input = fs.readFileSync('input.js', 'utf8');
var output = flowRemoveTypes(input);
fs.writeFileSync('output.js', output.toString());
```


## Flow Comments

* [Flow: A Static Type Checker for JavaScript](https://flow.org/blog/2015/02/20/Flow-Comments/)
* [Comment Types | Flow](https://flow.org/en/docs/types/comments/)

Document Header

```js
// @flow
```

## Questions

* [js 'types' can only be used in a .ts file](https://stackoverflow.com/q/48859169/1366033)

    ```json
    {
    "javascript.validate.enable": false
    }
    ```

* [What does flow `{| brace pipe |}` syntax do?](https://stackoverflow.com/q/48393027/1366033)

* [Invalid lint rule "dynamic-export" encountered](https://github.com/facebook/flow/blob/master/Changelog.md)


* [Failed to start flow. Wrong version of Flow](https://stackoverflow.com/a/65690247/1366033)

  Change `[version]` in the `.flowconfig` to match the installed version, `^0.95.1`
