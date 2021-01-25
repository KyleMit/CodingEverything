# Prettier

## Docs

* [Options](https://prettier.io/docs/en/options.html)
* [Rationale](https://prettier.io/docs/en/rationale.html)

## Ignore

[Ignoring Code](https://prettier.io/docs/en/ignore.html)

```js
// prettier-ignore
```

## CLI

* [CLI](https://prettier.io/docs/en/cli.html)
* [File Patterns](https://prettier.io/docs/en/cli.html#file-patterns)
* [mrmlnc/**fast-glob**](https://github.com/mrmlnc/fast-glob#pattern-syntax) - It's a very fast and efficient glob library for Node.js

## Acronyms

**ASI** - Automatic Semi-Colon Insertion


## Pre-commit Hook

[Pre-commit Hook](https://prettier.io/docs/en/precommit.html)

### Install

```bash
npm install --save-dev pretty-quick husky
```

### Package.json

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}
```


## Questions

* [Why do I keep getting Delete 'cr'?](https://stackoverflow.com/q/53516594/1366033)

    > eslint-plugin-prettier Delete `␍`

    Inside `.prettierrc` file:

    ```json
    {
        "endOfLine": "auto"
    }
    ```

    Or inside `.eslintrc.js` file:

    ```js
    "prettier/prettier": {
      "error",
      {
        "endOfLine": "auto"
      },
    },
    ```

* [Prettier vs. Linters · Prettier](https://prettier.io/docs/en/comparison.html)

  * Prettier - Formatting Rules
  * Linter - Code Quality Rules

* [How to remove semicolons in prettier?](https://stackoverflow.com/q/45404823/1366033)

  ```json
  "prettier.semi": false
  ```

* [Preserve existence of two or less blank lines between code chunks. #1613](https://github.com/prettier/prettier/issues/1613)

* [How to Format All Files in a Directory with Prettier](https://levelup.gitconnected.com/how-to-format-all-files-in-a-directory-with-prettier-5f0ff5f4ffb2)


  ```bash
  npm install --global prettier
  prettier --write .
  # or
  npx prettier --write .
  ```

  ```bash
  prettier --write "**/*.js
  ```

  Add `.prettierignore` to not format ignored code


* [Support .gitignore #2294](https://github.com/prettier/prettier/issues/2294)

  ```bash
  prettier --write--ignore-path .gitignore
  ```


* [Prettier enable / disable flags](https://github.com/prettier/prettier/issues/5287)

