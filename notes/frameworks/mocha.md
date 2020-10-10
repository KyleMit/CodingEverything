# Mocha Testing

* [MochaJS](https://mochajs.org/)
* [Debugging in Mocha in VS Code](https://codepunk.io/debugging-mocha-in-visual-studio-code/)

Each test should look something like this:

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
