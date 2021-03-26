# Testing


## Articles

* [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) - Martin Fowler


## Write tests. Not too many. Mostly integration. by Kent C. Dodds - Mar 2018

[Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)

[Assert.Js](https://www.assertjs.com/) - The JS Testing Conference

{% tweet "807626710350839808" %}

* Why do we write tests?
  * Enhanced Workflows (TDD)
  * **Confidence** (that your application is going to work)
* Code Coverage
  * metric to determine how test we have
  * [Istanbul](https://istanbul.js.org/)
  * Testing ROI

    ![testing roi](/assets/notes/testing/testing-roi.png)
* guidelines
  * if your test does something that the consumer of your code doesn't - then it's testing implementation details
  * if a refactor breaks your tests, then it's testing implementation details

* Static Code Analysis - form of testing
  * don't need to run code to analyze
  * Examples
    * ESLint

        ```js
        const result = subtract(10 - three)
        // ESLINT - 'three' is not defined (no-undef)
        ```

    * Type Checking
      * FLow-typed
      * Typescript

        ```js
        // @ flow
        const three = '3'
        const result = subtract(10 - three)
        // FLOW - string this type is incompatible with the expected param type of number
        ```

## Testing Models

Cheap -> Expensive
Fast -> Slow
Simple Problems -> Big Problems (Confidence Coefficient)

### Testing Pyramid

![testing pyramid](/assets/notes/testing/testing-pyramid.png)

### Testing Trophy

![testing trophy](/assets/notes/testing/testing-trophy.png)
