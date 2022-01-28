# ES Lint


> Pluggable JavaScript linter
>
> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses [Espree](https://github.com/eslint/espree) for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Alternatives

* JSHint

## Docs

* [eslint](https://eslint.org/)
* [eslint | Github](https://github.com/eslint/eslint)
* [typescript-eslint | Github](https://github.com/typescript-eslint/typescript-eslint)


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

## Config

* [SchemaStore fro eslintrc](https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/eslintrc.json)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
* [Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files)


* States
  * `off` or 0 - turn the rule off
  * `warn` or 1 - turn the rule on as a warning (doesn't affect exit code)
  * `error` or 2 - turn the rule on as an error (exit code is 1 when triggered)

## Rules

### JavaScript

* [require-await](https://eslint.org/docs/rules/require-await)
* [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)


### TypeScript

* [no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md)

* [explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/v2.31.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)

  ```js
  // No return value should be expected (void)
  function test(): void { return; }
  ```

* [typescript-eslint/explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/v4.22.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md)

## Releases

* [ESLint v8.0.0 released](https://eslint.org/blog/2021/10/eslint-v8.0.0-released)
  * [Migrating to v8.0.0](https://eslint.org/docs/user-guide/migrating-to-8.0.0)

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

* Configure Rule Options

  ```js
  "max-lines": "error"
  "max-lines": ["error", { "max": 200, "skipBlankLines": true, "skipComments": true }]
  ```
