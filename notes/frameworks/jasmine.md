# Jasmine

[Jasmine](https://jasmine.github.io/2.1/introduction)

> Jasmine is a behavior-driven development framework for testing JavaScript code


## Syntax

```ts
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

## Concepts

* **Suites**: are built with the function `describe` - takes a string and a fn
* **Specs**: are built with the function `it` - takes a string and a fn
* **Expectations**: are built with the function `expect` - takes an actual value
* **Matcher**: Each matcher implements a boolean comparison between the actual value and the expected value

## Matchers

```ts
expect(foo).toBe(b);
expect(foo).not.toBe(null);
expect(foo).toEqual(bar);
expect(foo).toMatch(/bar/);
expect(foo).toMatch("bar");
expect(foo).toBeDefined();
expect(foo).toBeUndefined();
expect(foo).toBeNull();
expect(foo).toBeTruthy();
     expect(a).toBeFalsy();
     expect(a).toContain("bar");
```

## Setup and Teardown


* `beforeEach`
* `afterEach`
* `beforeAll`
* `afterAll`

