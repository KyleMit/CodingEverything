# ES Lint

> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.


## Docs

* [eslint](https://eslint.org/)
* [eslint | Github](https://github.com/eslint/eslint)
* [typescript-eslint | Github](https://github.com/typescript-eslint/typescript-eslint)

## Config

* [SchemaStore fro eslintrc](https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/eslintrc.json)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

## Getting Started

```bash
npm i -D eslint
npm i -g eslint
eslint --init
```

```yml
env:
  browser: true
  commonjs: true
  es2021: true
extends: 'eslint:recommended'
parserOptions:
  ecmaVersion: 12
rules: {}
```



## Rules

### JavaScript

* [require-await](https://eslint.org/docs/rules/require-await)


### TypeScript

* [no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md)

* [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v2.31.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

  ```js
  // No return value should be expected (void)
  function test(): void { return; }
  ```

## Questions

* [no-undef for Promise](https://github.com/eslint/eslint/issues/4085#issuecomment-147486943)

    ```js
    /*eslint-env es6 */
    let p = new Promise
    ```

* [Anchor is Valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md)

* [Expected linebreaks to be 'LF' but found 'CRLF'](https://stackoverflow.com/q/37826449/1366033)

    ```json
    "rules": {
    "linebreak-style": 0
    }
    ```

