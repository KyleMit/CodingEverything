# Snowpack

[Snowpack](https://www.snowpack.dev/)

> The faster frontend build tool

## Getting Started

```bash
npm install snowpack
snowpack init
```

## Features

* **Instant startup** - Snowpack's unbundled web development server starts up in 50ms or less and stays fast in large projects.
* **Build once, cache forever** - Snowpack never builds the same file twice. Powered by JavaScript’s native module system (ESM) in the browser.
* **HMR feat. Fast Refresh** - No refresh required. See changes reflected instantly in the browser with HMR + Fast Refresh for React, Preact & Svelte.
* **Out-of-the-box support** - Enjoy Snowpack's built-in support for JSX, TypeScript, React, Preact, CSS Modules and more.
* **Optimize for production** - Build for production with built-in optimizations and plugin support for your favorite bundlers.
* **Plugins? Plugins!** - Babel? Sass? MDX? Browse the entire Snowpack Plugin Catalog to connect your favorite build tool (or create your own!)


## Configuration

[Snowpack Configuration File](https://www.snowpack.dev/reference/configuration)


```js
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
```

