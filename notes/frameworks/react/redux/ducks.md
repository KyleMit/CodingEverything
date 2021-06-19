# Ducks

* [erikras/ducks-modular-redux: A proposal for bundling reducers, action types and actions when using Redux](https://github.com/erikras/ducks-modular-redux)

> Java has jars and beans. Ruby has gems. I suggest we call these reducer bundles "ducks", as in the last syllable of "redux".


* ex. Share functionality between User Admin screen and Profile edit screen
  * will just ask the Ducks they need for the data they need.
    * Just call `UserDuck.SelectState`

## Redux Slice Factory

> A light-weight package with generic factory functions for common slice data structures
> Anything related to updating, fetching, modeling a User lives in one central location.
> This pattern also fits well with our microservice architecture.

* [@gjv/redux-slice-factory - npm](https://www.npmjs.com/package/@gjv/redux-slice-factory)

### Slice

> a slice is a bundle of everything associated to a piece of state (i.e. { name, reducer, actions, selectors })

```js
{ name, reducer, actions, selectors }
```

* `name` - describes the domain the slice is responsible for
* `reducer` - manages data interactions between state and actions
* `actions` - surface an api of dispatch-able functions to interact with the reducer
* `selectors` - expose memoized functions to read data from global state.

### API

* `createModelSlice()` - creates a slice for a single model
* `createEntitySlice()` - creates a slice for a collection of entities

