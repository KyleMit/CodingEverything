# JS Doc

[JS Doc](https://jsdoc.app/)


## Links

* [Use JSDoc Docs](https://jsdoc.app/)
* [jsdoc](https://github.com/jsdoc/jsdoc) - An API documentation generator for JavaScript
* [jsdoc.github.io](https://github.com/jsdoc/jsdoc.github.io) - JSDoc website

## Doc Comments

Emmet autocomplete `/**`

## Params

```js
/**
 * @param {<type>} <paramName>
 * /
```

```js
/**
 * @param {number} a
 * @param {number} b
 */
function add(a, b) {
  return a + b
}
```

## Usage With TypeScript

[TypeScript - JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

```ts
/**
 * @type {string}
 */
var s;
```

## Articles

* [JSDoc typings: all the benefits of TypeScript, with none of the drawbacks](https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/) by [GilTayar](https://twitter.com/giltayar)

## Questions

* [What is the correct JSDoc syntax for a local variable?](https://stackoverflow.com/q/38708777/1366033)

  ```js
  /** @type {string} */
  let Y = 'abc';
  ```

* [How to "import" a typedef from one file to another in JSDoc using Node.js?](https://stackoverflow.com/q/49836644/1366033)

  `types.d.ts`

  ```ts
  export interface Person {
      firstName: string;
      lastName: string;
  }
  ```

  `index.js`

  ```js
  /** @type {import("./types").Person} */
  var person;
  ```

  