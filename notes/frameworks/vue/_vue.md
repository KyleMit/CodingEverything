# Vue

## Getting Started

[vuejs/create-vue: 🛠️ The recommended way to start a Vite-powered Vue project](https://github.com/vuejs/create-vue)

## Vue CLI

* [Vue CLI](https://cli.vuejs.org/guide/cli-service.html)
* [Vue CLI Config - `publicPath`](https://cli.vuejs.org/config/#publicpath)
* [Vue CLI Environment Variables](https://cli.vuejs.org/guide/mode-and-env.html#modes)

```bash
npm install -g @vue/cli
npm install -g @vue/cli-service
```

```bash
vue-cli-service serve
vue-cli-service build
```

## VS Code

* [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Debug

[vuejs/**vue-devtools**](https://github.com/vuejs/vue-devtools) - Browser devtools extension for debugging Vue.js applications

## Third Party Plugins


### Bootstrap Vue

* [Navbar](https://bootstrap-vue.js.org/docs/components/navbar)
* [Navbar Collapse / Toggle Breakpoint](https://bootstrap-vue.js.org/docs/components/navbar#comp-ref-b-navbar-props)
* [Router Link Support](https://bootstrap-vue.js.org/docs/reference/router-links/)
* [Router Link Active Style](https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style)

### Vue Router

* [Router Transitions](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)
* [Router Transitions Demo](https://markus.oberlehner.net/blog/vue-router-page-transitions/)
* [History Mode](https://router.vuejs.org/guide/essentials/history-mode.html)

### Vue-Markdown

* [Syntax Demo](https://miaolz123.github.io/vue-markdown/)
* [Register the VueMarkdown component as a global component](https://github.com/miaolz123/vue-markdown/issues/61)


## Questions

* [Which are the differences between vue-cli and vue-cli-service?](https://stackoverflow.com/q/54248678/1366033)

* [Vue - Hide the VueJS while loading?](https://stackoverflow.com/a/36187668/1366033)

* [Fetching Data](https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/)
* [Order Data](https://stackoverflow.com/a/40512856/1366033)
* [Reactive Time](https://cushionapp.com/journal/reactive-time-with-vuejs)
* [Create a countdown with vue.js an moment.js](https://stackoverflow.com/q/52048451/1366033)
* [Event Handling `v-on` directive](https://vuejs.org/v2/api/#v-on)
* [Class & Style Binding](https://vuejs.org/v2/guide/class-and-style.html)
* [Conditional Class](https://stackoverflow.com/a/43210564/1366033)
* [Add LocalStorage](https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b)
* [Offline States](https://github.com/filrak/vue-offline)


* [How to fix "unsafe-eval" error with Vue3 for the client-side version?](https://stackoverflow.com/q/68459611/1366033)

  > Error parsing JavaScript expression: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive

  1. Use precompiled templates
  2. Use `vue.runtime.js` runtime version instead of `vue.js` full version.

* [You are using the runtime-only build of Vue where the template compiler is not available](https://stackoverflow.com/q/47332728/1366033)

  > Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.global.js" instead.

  [Vue Global](https://jsfiddle.net/KyleMit/8pnqh0xa/)

  ```html
  <div id="app">{{ message }}</div>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    Vue.createApp({
      data: () => ({ message: 'Hello Vue!' })
    }).mount('#app')
  </script>
  ```

  [Vue Global Runtime](https://jsfiddle.net/KyleMit/ce2sfk4d/)

  ```html
  <div id="app"></div>
  <script src="https://unpkg.com/vue@3/dist/vue.runtime.global.js"></script>
  <script>
    Vue.createApp({
      render: () => 'Hello Vue!'
    }).mount('#app')
  </script>
  ```

  **See Also**: [What exactly is Vue's runtime-only build and how does it differ from compiler build?](https://stackoverflow.com/q/66393740/1366033)
