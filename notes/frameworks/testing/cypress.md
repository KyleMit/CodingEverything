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
  * [Best Practices](https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting)


## Libraries

* cypress-tags - Use custom tags to slice up Cypress test runs
  * [cypress-tags](https://www.npmjs.com/package/cypress-tags)
  * [annaet/cypress-tags](https://github.com/annaet/cypress-tags)
* [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) is a plugin for eslint that can provide feedback within your IDE for bad practice patterns with Cypress specific context.
* [eslint-plugin-chai-friendly](https://www.npmjs.com/package/eslint-plugin-chai-friendly) is a plugin for eslint similar to the above. However, providing feedback for Chai assertion logic.
* [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/) is a miracle library that makes working with DOM elements a lot easier.


## Commands

[Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)


```js
// This is a parent command
Cypress.Commands.add("login", (email, password) => { ... })
```

