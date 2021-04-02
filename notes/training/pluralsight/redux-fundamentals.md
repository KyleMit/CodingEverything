# Redux Fundamentals

by Jamis Charles

[Redux Fundamentals](https://app.pluralsight.com/library/courses/redux-fundamentals/table-of-contents)
[jamischarles/ps_redux](https://github.com/jamischarles/ps_redux) - Status updates for Redux Fundamentals course will be posted here in the readme

## Introduction

* Why?
  * Tiny Gzipped
  * Organize SPA Data
  * Predictable State Container
* Overview
  * React Crash Course
  * App with State Problems
  * Redux Integrations

### State

* State bugs
  * Where did state go wrong?
* State flow?
  * Models
    * Render UI
      * Client
        * UI Change Event
          * Model chooses what to do
            * UI returns
              * Model updates itself
                * Re-renders UI
  * Some models listen for changes in other models
  * Don't always have 1-to-1 relationship between state and API

### Redux Data Flow

* Store
  * Render UI
    * UI
      * Change Actions
        * Request Data Actions
          * Received Data Actions
            * Reducer
              * Update Store

* Unidirectional data flow
  * only actions are allowed to update store
  * UI only gets re-rendered when the store changes


![redux data flow](/assets/notes/redux-data-flow.png)


### Pure Functions

* Only access local variables
* No side effects
* Given same input, always yields same output

```js
function add(a,b) {
    return a + b
}
add(2,3) // will always return 5
```

### Immutability

```js
var state = {color: 'red', name: 'adam', points: 5}
// mutate change
state.points = 25
// hard to track down problems
var state2 = Object.assign({}, state, {points: 50})
```

