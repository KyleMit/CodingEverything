# Vitest

<https://vitest.dev/>

> Blazing Fast Unit Test Framework

## Links

* <https://github.com/vitest-dev/vitest>


## Docs

* [Configuring Vitest](https://vitest.dev/config/)


## Example

```js
import { assert, describe, expect, it } from 'vitest'

describe('suite name', () => {
  it('foo', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})
```


## Questions

* [Error: No test suite found #847](https://github.com/vitest-dev/vitest/issues/847)

  Change `vitest` to `npx vitest`

* [describe is not defined](https://stackoverflow.com/q/75971024/1366033)

  ```js
  import { describe } from 'vitest';
  ```

