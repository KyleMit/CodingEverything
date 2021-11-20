# Mocha

> Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser

[MochaJS](https://mochajs.org/)

## Alternatives

[Jasmine vs Jest vs Mocha | What are the differences?](https://stackshare.io/stackups/jasmine-vs-jest-vs-mocha)

* Jest
* Jasmine

## Getting Started

```bash
# Install with npm globally:
npm install --global mocha

# install as a development dependency for your project:
npm install --save-dev mocha
```

## BYO Assertions

https://mochajs.org/#assertions

* [Node > Assert](https://nodejs.org/api/assert.html)
* [chai](https://github.com/chaijs/chai)
* [unexpected](https://github.com/unexpectedjs/unexpected)
* Older
  * [better-assert](https://github.com/tj/better-assert)
  * [expect.js](https://github.com/Automattic/expect.js)
  * [should.js](https://github.com/shouldjs/should.js)

## Syntax Examples

```js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

```js
it('should return del / ins on single word change', function() {
    // arrange
    let diffText = require("../src/index")
    let oldText = "your question site"
    let newText = "your answer site"
    let expected = "your <del>question</del> <ins>answer</ins> site"

    // act
    let actual = diffText(oldText, newText, false)

    // asset
    assert.equal(actual, expected);
});
```


## Example

```bash
$ ./node_modules/mocha/bin/mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (9ms)
```

## CLI Options

[Command Line Usage](https://mochajs.org/#command-line-usage)

* [`--full-trace`](https://mochajs.org/#-full-trace) - Display full stack traces

```bash
mocha --full-trace src/**/__tests__/**/*-test.js
```

## Typescript


## Debugging

* [Debugging in Mocha in VS Code](https://codepunk.io/debugging-mocha-in-visual-studio-code/)
* [What's the least resistance path to debugging mocha tests?](https://stackoverflow.com/q/14285201/1366033)
* [What's the right way to enable the node debugger with mocha's `--debug-brk` switch?](https://stackoverflow.com/q/14352608/1366033)

```json
{
    "type": "node",
    "request": "launch",
    "name": "Mocha Tests",
    "program": "${workspaceRoot}/node_modules/mocha/bin/mocha",
    "args": [
        "--inspect-brk",
        "${workspaceFolder}/test/**/*.js"
    ],
    "port": 9229,
    "internalConsoleOptions": "openOnSessionStart"
}
```

* [`basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")` #4751](https://github.com/facebook/jest/issues/4751#issuecomment-361063215)

```diff
- node --inspect-brk ./node_modules/.bin/jest     --runInBand --no-cache --no-watchman
+ node --inspect-brk ./node_modules/jest/bin/jest --runInBand --no-cache --no-watchman
```

## Mocha Sidebar

> Mocha side bar viewer that allows you to run Mocha tests from side bar menu and view results can run each level hierarchy from all tests to a single test

[maty21/**mocha-sidebar**](https://github.com/maty21/mocha-sidebar)
[Mocha sidebar - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)

* [mocha sidebar is not showing tests](https://stackoverflow.com/q/52570268/1366033)

  ```json
  "mocha.files.glob": "src/**/__tests__/**/*-test.js"
  ```

* [ES6 module import doesn't work](https://github.com/maty21/mocha-sidebar/issues/123)

  ```json
  "mocha.requires": ["babel-register"]
  ```

## Questions


* [Run a Single Mocha Test](https://jaketrent.com/post/run-single-mocha-test)

  Use `.only` or `.skip`

  ```js
  it.only(function () {
    // this test will run
  });
  it(function () {
    // this test will be skipped
  });
  ```

* [Error: No provider for "framework:mocha"!](https://stackoverflow.com/q/31687669/1366033)

* [karma plugin dependencies not being found](https://stackoverflow.com/q/32425580/1366033)

* [ReferenceError: describe is not defined NodeJs](https://stackoverflow.com/q/28400459/1366033)
