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

### `.flowconfig`

```json
"flow.pathToFlow": "${workspaceFolder}/node_modules/.bin/flow"
```

### `.flowconfig`

```bash
flow init
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

## Flow CLI

[Flow CLI](https://flow.org/en/docs/cli/)


## Questions

* [js 'types' can only be used in a .ts file](https://stackoverflow.com/q/48859169/1366033)

    ```json
    {
    "javascript.validate.enable": false
    }
    ```
