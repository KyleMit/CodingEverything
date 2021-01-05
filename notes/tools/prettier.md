# Prettier


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
