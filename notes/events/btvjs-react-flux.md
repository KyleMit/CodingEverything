---
title: BTVJS - Building Web Apps with React and Flux
date: 2015-08-05
---


[Burlington JS: Building Web Apps with React and Flux](http://www.meetup.com/VTCode/events/224045825/)

[Vermont Design Works](http://www.vtdesignworks.com/)

* Hard Things in UI
  * Performance
  * Browsers
  * Communication between components
  * HTML was designed for documents, not user interfaces
  * Lots of state all over which changes

* State
  * **Abstract** - The data required to render a given user interface
    * Blaze.getData()
  * **Concrete** - JSON

Javascript - weakly typed, amorphous blob - need separation of

Mutable - State - Can change
Immutable - Props - Won't change


## Library vs. Framework

* React does:
  * declarative nestable views
* React doesn't:
  * HTTP Communicator
  * Validation
  * Models
  * Routing
  * Services

**NOT** Templating Engine (handlebars, jade)
**More Like** - jQuery UI Widgets, Angular Directives, Web Components

Use components like html - Extends HTML - Want to render something, pull in a div tag or another component (nestable)

Components need render method (how to create HTML from component)

Mount to DOM with `React.render()` method which takes the component and where to put it - forces component to call render

## Props

* immutable by convention
* accessed via `this.props`


```html
<MyComponent propname="value" >
```


## Validation & Defaults

Event Delegation - Looks like inline event handlers - but uses delegation under the hood

ES6 - No automatic context/binding - need to `bind(this)`

State - a component's local data (i.e. is this accordion open)

Mutated by component via `this.setState({key: 'value' })` - merges - only updates relevant properties

`this.props.children` - whatever the child value of the object is (passed in to render function)

## Re-render

A component's render method *does not return a string*
**Virtual DOM** - Returns a JS Object with the tree of nested objects that need to be rendered - alternative to two way binding

Flush changes to DOM
**Multiple Render Targets** - Pattern for rendering stuff - DOM becomes implementation detail - rendered takes care of updating to whatever the UI is (react native will take care of iOS)


**JSX** - HTML templating in Javascript

* Declaratively describe deeply nested components in HTML
`className` - not class, `htmlFor` - not labelFor

JSX compiles into JS

Why put it in template? - Template tightly coupled with rendering code and event handling
Doesn't violate separation of concerns - Rendering and reacting are *part of the same concern*

Create accessAPI (data access layer)

Comments *Container* - smart component - not just rendering htm - it knows stuff


```js
handleChange(name, value) {
 let newComment = { ...this.state.newComment };
 newComment[name] = value;
 this.setState({ newComment: newComment });
}
```

mixin - blinkState - helps handle form state

`value` - react owns the value of that object (bound to react)
`defaultValue` - react just populates - then you can change at will, but you have to recover by traversing the DOM

Traverse dom - `ref="Something"` - now you can lookup DOM element with this (instead of CSS selectors)

Hooking into render

```js
shouldComponentUpdate => return false;
componentUpdate(old, new) => figure out what to do - let 3rd party know
```

### Flux

*Architecture* for managing state in react
*Design Pattern* for managing/changing shared state
Advocates for uni-directional data flow to trigger state changes
Defines application layer where state is stored and changed
**NOT an implementation**
**Implementations** - Alt, Reflux, [Fluxible](https://fluxible.io/), REdux, McFly

Flux Lifecycle

1. User fills  out form and hits submit
2. The form component triggers and AddComment event with data
3. Application layer responsible for handling state changes receives the event, and updates data
4. Application layer emits change event with new data (irrespective of who's listening)
5. Comment list component can listen for the change event and update it's own state

Flux Language

1. Clicks form
2. **CommentForm** triggers **Add Comment Action**
3. **CommentStore** receives Action and updates **state**


Events -> Actions
Repositories -> Stores

Shared data -  One component updating might need to let others know about it - better to have application own it.
Transient UI Data - okay to store within components.



