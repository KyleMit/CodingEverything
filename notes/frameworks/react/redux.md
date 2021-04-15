# Redux

[Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)

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



## Tools

* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension#usage)
* [immer](https://github.com/immerjs/immer) - Create the next immutable state by mutating the current one


## Redux Toolkit

[Redux Toolkit | Redux Toolkit](https://redux-toolkit.js.org/)

> The official, opinionated, batteries-included toolset for efficient Redux development

### Example

#### Index.ts

```tsx
import { store } from './app/store';
import { Provider } from 'react-redux';

return <Provider store={store}>
         <App />
       </Provider>
```

#### Store.ts

```tsx
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// User Inferred ReturnType of state from store -> {counter: CounterState }
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
```

#### CounterSlice.ts

```tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
```

#### Counter.tsx

```tsx
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice"

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  return (
    <div>
      <span>{count}</span>

      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button>
      <button
        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
      >
        Add Async
      </button>
    </div>
  )
}
```


### Getting Started

```bash
npx create-react-app my-app --template redux
npx create-react-app my-app --template redux-typescript
```


## Ducks

* [erikras/ducks-modular-redux: A proposal for bundling reducers, action types and actions when using Redux](https://github.com/erikras/ducks-modular-redux)

> Java has jars and beans. Ruby has gems. I suggest we call these reducer bundles "ducks", as in the last syllable of "redux".


* ex. Share functionality between User Admin screen and Profile edit screen
  * will just ask the Ducks they need for the data they need.
    * Just call `UserDuck.SelectState`

### Redux Slice Factory

> A light-weight package with generic factory functions for common slice data structures
> Anything related to updating, fetching, modeling a User lives in one central location.
> This pattern also fits well with our microservice architecture.

* [@gjv/redux-slice-factory - npm](https://www.npmjs.com/package/@gjv/redux-slice-factory)

#### Slice

> a slice is a bundle of everything associated to a piece of state (i.e. { name, reducer, actions, selectors })

```js
{ name, reducer, actions, selectors }
```

* `name` - describes the domain the slice is responsible for
* `reducer` - manages data interactions between state and actions
* `actions` - surface an api of dispatch-able functions to interact with the reducer
* `selectors` - expose memoized functions to read data from global state.

#### API

* `createModelSlice()` - creates a slice for a single model
* `createEntitySlice()` - creates a slice for a collection of entities

