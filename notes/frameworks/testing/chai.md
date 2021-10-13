# Chai

> Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Docs

* [Expect / Should - Chai](https://www.chaijs.com/api/bdd/)

## Questions

* [Chai deep equals instead of reference equals](https://stackoverflow.com/q/17526805/1366033)

  ```js
  expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
  ```

* [Assert array includes all items](https://stackoverflow.com/q/31150701/1366033)

  ```js
  expect(['foo', 'bar']).to.include.members(['foo', 'bar'])
  ```

* [Assert that Object is included in an Array of Objects](https://stackoverflow.com/q/17558518/1366033)

  ```js
  expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
  ```

