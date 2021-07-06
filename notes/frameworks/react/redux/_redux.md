# Redux

[Redux](https://redux.js.org/)

> A Predictable State Container for JS Apps

## Features

> * **Deterministic state resolution** (enabling deterministic view renders when combined with pure components)
> * **Transactional state**
> * **Isolate state management** from I/O and side-effects
> * **Single source of truth** for application state
> * **Easily share state** between different components
> * **Transaction telemetry** (auto-logging action objects)
> * **Time travel debugging**

## Links

* [Redux](https://redux.js.org)
* [React Redux](https://react-redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

## Alternatives

* useState
* context
* mobx
* flux

## Getting Started

```tsx
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```


## Docs

## Connect

[Connect](https://react-redux.js.org/api/connect)

> The `connect()` function connects a React component to a Redux store.

## Hooks

[Hooks](https://react-redux.js.org/api/hooks)

* `useSelector` - Allows you to extract data from the Redux store state, using a selector function.

  ```ts
  const result: any = useSelector(selector: Function, equalityFn?: Function)
  ```

* `useDispatch` - Returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

  ```tsx
  import { useDispatch } from 'react-redux'
  const dispatch = useDispatch()
  <button onClick={() => dispatch({ type: 'increment-counter' })}>+</button>
  ```

* `store` - returns a reference to the same Redux store that was passed in to the `<Provider>` component

## Ecosystem

* [Ecosystem | Redux](https://redux.js.org/introduction/ecosystem)
* [markerikson/redux-ecosystem-links: A categorized list of Redux-related addons, libraries, and utilities](https://github.com/markerikson/redux-ecosystem-links)
* [markerikson/react-redux-links: Curated tutorial and resource links I've collected on React, Redux, ES6, and more](https://github.com/markerikson/react-redux-links)
* [awesome-redux: Awesome list of Redux examples and middlewares](https://github.com/xgrommx/awesome-redux)

## Tools

* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension#usage)
* [immer](https://github.com/immerjs/immer) - Create the next immutable state by mutating the current one

## Questions

* [While debugging, can I have access to the Redux store from the browser console?](https://stackoverflow.com/q/34373462/1366033)

  Navigate to store in React Dev Tools > Components

  ```js
  $r.store.getState()
  ```


* [How to access the Redux store outside of a component in React](https://stackoverflow.com/a/68249283/1366033)

  * **Store**

    ```ts
    import { configureStore } from "@reduxjs/toolkit";
    import { slice } from "../features/counterSlice";

    export const store = configureStore({
      reducer: {
        counter: slice.reducer
      }
    });
    ```


  * **Usage**

    ```ts
    import { store } from "../App/store";
    import { slice as counterSlice } from "../features/counterSlice";

    export function getCount(): number {
      const state = store.getState();
      return state.counter.value;
    }

    export function incrementCount() {
      store.dispatch(counterSlice.actions.increment());
    }
    ```

