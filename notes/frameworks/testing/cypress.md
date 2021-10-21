# Cypress

[Cypress](https://www.cypress.io/)

> Performs E2E Testing

## Alternatives

* [Selenium](https://www.selenium.dev/) - relies on Web Driver
* [NightWatch](https://nightwatchjs.org/)
* [Puppeteer](https://pptr.dev/) - Node API that wraps low level remote debugging protocol that chrome uses
  * Chrome debugging protocol more powerful that web driver specification
* [TestCafe](https://devexpress.github.io/testcafe/)

### Without Cypress

* Install
  * [Selenium](https://www.selenium.dev/)
* Choose Assertion Library
  * [Chai](https://www.chaijs.com/)
  * [Expect.js](https://github.com/Automattic/expect.js/)
* Choose Framework
  * [Mocha](https://mochajs.org/)
  * [Jasmine](https://jasmine.github.io/)
  * [QUnit](https://qunitjs.com/)
  * [Karma](https://karma-runner.github.io/)
* Choose Selenium Wrapper
  * [Protractor](https://www.protractortest.org/)
  * [Nightwatch](https://nightwatchjs.org/)
  * [Webdriver](https://webdriver.io/)
* Add Additional Libraries
  * [Sinon](https://sinonjs.org/)
  * [TestDouble](https://testdouble.com/)

## Web Driver

[Web Driver Spec](https://www.w3.org/TR/webdriver/)

* Specification implemented by browser vendors to control browser engine
* Lowest common denominator between all browser vendors

## Docs

* API
  * [wait](https://docs.cypress.io/api/commands/wait#Yields)
* Guides
  * [Introduction to Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)
    * [Querying Elements](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Querying-Elements)
    * [Commands Are Not Promises](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Not-Promises)
    * [Assertions](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Assertions)
  * [Best Practices](https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting)

## Libraries

* cypress-tags - Use custom tags to slice up Cypress test runs
  * [cypress-tags](https://www.npmjs.com/package/cypress-tags)
  * [annaet/cypress-tags](https://github.com/annaet/cypress-tags)
* [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) is a plugin for eslint that can provide feedback within your IDE for bad practice patterns with Cypress specific context.
* [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly) is a plugin for eslint similar to the above. However, providing feedback for Chai assertion logic.
* [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/) is a miracle library that makes working with DOM elements a lot easier.

## TypeScript

[TypeScript](https://docs.cypress.io/guides/tooling/typescript-support#Types-for-custom-commands)


* [Types for plugins](https://docs.cypress.io/guides/tooling/typescript-support#Types-for-plugins)

  ```js
  // cypress/plugins/index.ts
  /// <reference types="cypress" />

  /**
   * @type {Cypress.PluginConfig}
   */
  module.exports = (on, config) => {}
  ```

* [Write your own custom commands using JavaScript with correct types for IntelliSense to work](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__add-custom-command)

```ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */
    dataCy(value: string): Chainable<Element>
  }
}
```


## Bundles Tools

* [Bundled Tools](https://docs.cypress.io/guides/references/bundled-tools)
  * Mocha
  * Chai
  * Chai-jQuery
  * Sinon
  * Sinon-Chai
  * Lodash
  * jQuery
  * Minimatch
  * Blob
  * Promise

## Pre-Processor

* Cypress Source Maps

* [Debugging | Cypress Documentation](https://docs.cypress.io/guides/guides/debugging#Source-maps)
* [Preprocessors API | Cypress Documentation](https://docs.cypress.io/api/plugins/preprocessors-api)
* [cypress/npm/webpack-preprocessor at master · cypress-io/cypress](https://github.com/cypress-io/cypress/tree/master/npm/webpack-preprocessor)
* [Devtool | webpack](https://webpack.js.org/configuration/devtool/)


## Assertions

* [List of Assertions](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#List-of-Assertions)
  * [chaijs/chai](https://github.com/chaijs/chai)
    * [Expect / Should - Chai](https://www.chaijs.com/api/bdd/)
  * [chaijs/chai-jquery](https://github.com/chaijs/chai-jquery)
  * [cypress-io/sinon-chai](https://github.com/cypress-io/sinon-chai)
* [Assertions](https://docs.cypress.io/guides/references/assertions#Chai)
* [Kitchen Sink - Commands - Assertions](https://example.cypress.io/commands/assertions#expect)

* There are two ways to write assertions in Cypress:
  * **Implicit Subjects**: Using `.should()` or `.and()`
  * **Explicit Subjects**: Using `expect`

## Debugging

* Docs
  * [IDE Integration](https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code)
  * [Debugging](https://docs.cypress.io/guides/guides/debugging#Log-Cypress-events)

* [Debugging Cypress tests in Visual Studio Code](https://stackoverflow.com/q/52502130/1366033)

  ```json
  {
      "name": "Attach to Cypress Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "urlFilter": "http://localhost*",
      "webRoot": "${workspaceFolder}",
  },
  {
      "name": "Attach to Cypres Chrome (PWA)",
      "type": "pwa-chrome",
      "request": "attach",
      "url": "http://localhost:*",
      "webRoot": "${workspaceFolder}"
  },
  ```

* [`CYPRESS_REMOTE_DEBUGGING_PORT`](https://github.com/cypress-io/cypress/issues/7407)

  ```json
  "start": "npx cross-env CYPRESS_REMOTE_DEBUGGING_PORT=9222 cypress open",
  ```

## Commands

* [should](https://docs.cypress.io/api/commands/should#Function) - create an assertion
  * Takes valid BDD Chainers
  * Complex - takes function

## Custom Commands


[Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)

```js
// This is a parent command
Cypress.Commands.add("login", (email, password) => { ... })
```

## Questions

* [Cypress: run only one test](https://stackoverflow.com/q/55054337/1366033)

  You can add `.only` to `it` or `describe`

* [Await-ing Cypress Chains](https://github.com/cypress-io/cypress/issues/1417)

  * [Using async and await w/ Cypress](https://medium.com/@NicholasBoll/cypress-io-using-async-and-await-4034e9bab207)
    * [`cypress-promise`](https://www.npmjs.com/package/cypress-promise)

* [Custom Command vs Task?](https://stackoverflow.com/q/58680757/1366033)

* [Document `cy.state` and why you'd use it](https://github.com/cypress-io/cypress-documentation/issues/108)

