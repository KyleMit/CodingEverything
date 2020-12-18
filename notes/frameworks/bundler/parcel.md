# Parcel

> Blazing fast, zero configuration web application bundler 📦🚀

## Links

[Parcel](https://parceljs.org/)
[parcel-bundler/**parcel**](https://github.com/parcel-bundler/parcel)

* [Docs V1](https://parceljs.org/getting_started.html)
* [Docs V2](https://v2.parceljs.org/)

## Docs

[🚀 Getting Started](https://parceljs.org/getting_started.html)

* Multiple Entry Files

    ```bash
    # pass all entry points
    parcel index.html about.html
    # Use tokens and create a glob:
    parcel *.html
    ```

## Getting Started

### Installation

```bash
# global
npm i parcel-bundler -g
# local
npm i parcel-bundler --save-dev
```

### Run Locally

```bash
# run build + HMR + Dev Server
parcel index.html
# run build + HRM
parcel watch index.html
# run build
parcel build index.html
```

```json
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
},
"devDependencies": {
    "parcel-bundler": "^1.12.4"
}
```

## Example

```bash
parcel index.html
```

### `index.html

```html
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```

### `index.js`

```js
// import another component
import main from './main';

main();
```

### `main.js`

```js
// import a CSS module
import classes from './main.css';

export default () => {
  console.log(classes.main);
};
```

### `main.css`


```css
.main {
  /* Reference an image file */
  background: url('./images/background.png');
  color: red;
}
```


## Questions

* [npm install `parcel` or `parcel-bundler`?](https://github.com/parcel-bundler/parcel/issues/2360)

   Both the same, but prefer `parcel-bundler`...?

* [ES Module `type=module` cause "parcelRequire is not defined" error](https://github.com/parcel-bundler/parcel/issues/1401)

    ```diff
    - <script src="./site.js" type="module"></script>
    + <script src="./site.js" ></script>
    ```

