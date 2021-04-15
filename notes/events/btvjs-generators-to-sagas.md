---
title: BTVJS - From Generators to Sagas
date: 2017-01-18
---

https://www.meetup.com/VTCode/events/236137838/

Winter 2017 Fundraising for [Burlington Code](https://burlingtoncode.org/)

https://github.com/ianmetcalf/from-generators-to-sagas/commits/master

by [Ian Metcalf](https://github.com/ianmetcalf)

Presentation in Reveal.js
Containers with syntax highlighted code and running console

* [klipse](https://github.com/viebel/klipse)
* [codemirror](https://codemirror.net/)


## es6 refresher (generators)

### declaration

`var` -> `const` + `let`

### arrow functions

```js
// optional
const fn = (param) => {
   console.log(param)
};
[1,2,3].map(n => n + 2).filter(n => n % 2);
```

### object shorthand

```js
const value = "something";
const obj = {
  method(param) {
  },
  value,
};
```

### destructuring

get to nested properties inside of an object without need for initialization

creates variables inside of declaration

instead of *structuring* which serves to build up an object - you're *destructuring* which tears down properties from within an object and converts them into variables.

### [REST](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Why's it called rest? - take the *REST* of the properties and put them in this param

take all the params and turn them into an array

like `ParamArray` in vb.net

C# - https://msdn.microsoft.com/en-us/library/aa645765(v=vs.71).aspx

```js
function fn(...args) {
  return args
}
```

### Spread

Opposite of Rest

```js
const values = [4,8,2,5];
Math.min(...values);
```

### Generator Functions

Like `IEnumerable` in .NET


Syntax:

* Marked with an asterisk
* `yield` inside of function - lazily evaluates
* `.next`


```js
//Factory for generator objects
function* numbers(n) {
  for (let i = 1; i <= n; i += 1) {
    yield i;
  }
}

// generator object
it = numbers(2);

// call generator object - first time we've actually called the function - runs until we hit yield
it.next();

// returns object with two keys - done & value
Object {
 "done": false,
 "value": 1
}
```

last call through will have no `yield` - can terminate with `return`

generator objects are **stateful** - you can pause and resume functions

`next()` will just continue to return final state

have to initialize a new one to start again

will execute code like normal - every time it hits a yield - it returns control to the parent function

generator objects are iterable:

```js
function* numbers(n) {}
for (let n of numbers(2) {
  console.log(n)
}
```

everyone uses co to run generators - gives you async functions that look synchronous

#### Simple Runner


[`Window.setImmediate()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate) like `setTimeout` with 0


```js
function* numbers(n) {

}
function runner(fn, ...args) {
  const it = fn(...args);

  function step(value) {
    const result = it.next(value);
 if (!result.done) {
  setImmediate(() => step(result.value));
 }

 setImmediate(step);
  }
}
```

#### Promise Based Runner

```js
// promise based runner
function runner(fn, ...args) {
  const it = fn(...args);

  function step(value) {
    const result = it.next(value);

 if (!result.done) {
     Promise.resolve(result.value).then(step)
    } else {
     resolve(result.value)
 }

 setImmediate(step);
  }
}

// promise based generator
function* main(steps) {

}
```

If you yield promises - promise will wait until promise resolves until it goes to the next iteration - the value returned is the resolution of the promise

Without async/await - allows you to do that workload via generators and promises

Promises allow you to have a value in the future - just wait, keep going, wait, keep going

#### effect based runner

```js
function effect(type, ...args) {
  return {
    effect: type,
    args
  }
}
// runner
function runEffect(value) {
 if (!value || !value.effect) return Promise

    if (value.effect === 'CALL') {
     const [fn, ...fnArgs] = value.args;
     return runEffect
    }

    if (value.effect === 'FORK') {
     const [fn, ...fnArgs] = value.args;
     return runEffect
    }

}
```

## redux

manages events

## redux-saga

middleware on top of redux

* gives you dsl with library of effects you can call and then runs them
