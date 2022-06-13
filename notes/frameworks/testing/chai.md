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

* [Chai.js compare arrays without considering order](https://stackoverflow.com/q/37688095/1366033)

  [`members`](https://www.chaijs.com/api/bdd/#method_members)

  ```js
  expect([4, 2]).to.have.members([2, 4])
  ```

* [How can I import the Chai 'expect()' function globally in TypeScript?](https://stackoverflow.com/q/61623260/1366033)

  ```bash
  mocha --require chai/register-expect --require ts-node/register src/**/*.spec.ts
  ```

  `typings/global/index.d.ts

  ```ts
  declare const expect: Chai.ExpectStatic
  ```

  `tsconfig.json`

  ```json
  "typeRoots": [
    "node_modules/@types", "./typings"
  ],
  "types": [
    "mocha",
    "chai",
    "node",
    "global"
  ]
  ```

* [How can I solve "ReferenceError: expect is not defined" error message?](https://stackoverflow.com/questions/19191384/)
* [How to make ChaiJS 'expect' function available in all files inside NodeJS 'test' folder?](https://stackoverflow.com/questions/48986067/)
