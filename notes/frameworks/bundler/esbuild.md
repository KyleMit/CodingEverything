# ES Build

[evanw/esbuild](https://github.com/evanw/esbuild)

> An extremely fast JavaScript bundler and minifier

## Getting Started

[esbuild - Getting Started](https://esbuild.github.io/getting-started/)

```bash
npm install esbuild
npx esbuild app.jsx --bundle --outfile=out.js
```

## Build API

[esbuild - API](https://esbuild.github.io/api/)

* Transform - stdin -> stdout
* Build - in file(s) -> out file(s)

```js
require('esbuild').build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'out.js',
}).catch(() => process.exit(1))
```

* Options
  * [platform](https://esbuild.github.io/api/#platform)
  * [bundle](https://esbuild.github.io/api/#bundle)
  * [minify](https://esbuild.github.io/api/#minify)
  * [sourcemap](https://esbuild.github.io/api/#sourcemap)
  * [platform](https://esbuild.github.io/api/#platform)
  * [target](https://esbuild.github.io/api/#target)
  * [loader](https://esbuild.github.io/api/#loader)

## Content Types

> Each content type has an associated "loader" which tells esbuild how to interpret the file contents.


* JavaScript
* TypeScript
* JSX
* JSON
* CSS
* Text
* Binary
* Base64
* Data URL
* External file

## Example

```bash
npm i esbuild-node-externals
```

```js
const esbuild = require('esbuild')

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild.build({
  entryPoints: ['./src/index.ts'],
  outfile: 'out/index.js',
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'chrome58,firefox57,safari11',
  plugins: [nodeExternalsPlugin()]
}).catch(() => process.exit(1))
```

## Articles

* [Setting up esbuild for TypeScript libraries](https://jamesthom.as/2021/05/setting-up-esbuild-for-typescript-libraries/)



## Typescript

Handle type checking separately

```json
{
  "compilerOptions": {
    "emitDeclarationOnly": true,
    "declaration": true,
  }
}
```

## Dev Server

* API
  * [`serve`](https://esbuild.github.io/api/#serve)
  * [`watch`](https://esbuild.github.io/api/#watch)
* [rsms/estrella](https://github.com/rsms/estrella) - Lightweight and versatile build tool based on the esbuild compiler
* [Vite](https://vitejs.dev/)


## Questions

* Copy public directory / index.html

  * [Use html as start point for bundling](https://github.com/evanw/esbuild/issues/31)
  * [How to copy assets to output dir?](https://github.com/evanw/esbuild/issues/1089)


* [Typescript ReferenceError: exports is not defined](https://stackoverflow.com/q/43042889/1366033)

  Remove `"module": "commonjs"`



