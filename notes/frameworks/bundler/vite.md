# Vite

[Vite](https://vitejs.dev/)

## Features

* **Instant Server Start** - On demand file serving over native ESM, no bundling required!
* **Lightning Fast HMR** - Hot Module Replacement (HMR) that stays fast regardless of app size.
* **Rich Features** - Out-of-the-box support for TypeScript, JSX, CSS and more.
* **Optimized Build** - Pre-configured Rollup build with multi-page and library mode support.
* **Universal Plugins** - Rollup-superset plugin interface shared between dev and build.
* **Fully Typed APIs** - Flexible programmatic APIs with full TypeScript typing.

## Templates

```bash
npm init vite@latest my-vue-app -- --template vue
```

* vanilla
* vanilla-ts
* vue
* vue-ts
* react
* react-ts
* preact
* preact-ts
* lit-element
* lit-element-ts
* svelte
* svelte-ts

## Files

* `vite-env.d.ts`
* `vite.config.js`

## Questions

* Vite w/ CJS

  * [Error: ENOENT: no such file or directory when using with axios](https://github.com/vitejs/vite/issues/184)
  * [CommonJS Import with vite](https://github.com/vitejs/vite/issues/162)


* [Importing Asset as String](https://vitejs.dev/guide/assets.html#importing-asset-as-string)

  Add the `?raw` suffix

  ```js
  import shaderString from './shader.glsl?raw'
  ```

* [In vite, is there a way to update the root html name from index.html](https://stackoverflow.com/q/71295772/1366033)

  Use [Rollup Options Input](https://rollupjs.org/configuration-options/#input)

  ```js
  import { defineConfig } from 'vite'
  export default defineConfig({
    build: {
      outDir: '../dist',
      rollupOptions: {
        input: {
          app: './src/index.html',
        },
      },
    },
  })
  ```

* [How to add a public directory in vitejs configuration file](https://stackoverflow.com/q/68654761/1366033)

  ```js
  {
    publicDir: 'assets'
  }
  ```

* ["jQuery is not a function" when running vite in production mode](https://stackoverflow.com/q/73172426/1366033)

  ```js
  import { defineConfig } from 'vite';
  import inject from '@rollup/plugin-inject';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      inject({
          //Remember to add `"jquery": "^3.6.1"` in `dependencies` for `package.json`
          jQuery: "jquery",
          "window.jQuery": "jquery",
          $: "jquery"
      })
    ]
  })
  ```

  See Also: [How to use a jQuery plugin inside Vue](https://stackoverflow.com/q/37928998/1366033)

* [Equivalent of a window object in JavaScript modules?](https://stackoverflow.com/q/73738804/1366033)

  ```js
  Object.assign(window, {foo})
  ```

* [Change the output path for certain files during build](https://stackoverflow.com/q/71388154/1366033)

  Set `root` to `'./src/pages'`

