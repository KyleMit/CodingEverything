# Node.js

An Introduction to Node.js

<img src="content/images/nodejs.png" width="150" alt="azure" class="transparent-img">


By me, Kyle Mitofsky, a developer

---

## NodeJS

> ... an asynchronous, event-driven, JavaScript runtime, designed to build scalable network applications

---


## Write an App

**Language**
&
**Runtime**



### Client and Server

<img src="content/images/ClientServerJS.png" width="450" alt="JavaScript Execution Environment" >

---

## Functions 101

* ECMAScript [20??](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c)
* Callbacks
* Promises
* Async / Await




### Function Declaration

```js
// function declaration
function SayHi (name) {
    console.log(`Hi: ${name}`)
}

// function expression / assignment
let SayHey = function (name) {
    console.log(`Hey: ${name}`)
}

// arrow function / lambda
SayHello (name) => {
    console.log(`Hello: ${name}`)
}
```

Note: func delcarations -> are hoisted to the top of the scope (immediately available).
arrow func -> lecical this (defined by outer scope)




### Functions Invocation

```js
SayHi('kyle');

SayHi.Call(this, 'kyle');    // C for Comma

SayHi.Apply(this, ['kyle']); // A for Array
```




#### Return Result

```js
function Multiply(a, b) {
    return a * b
}
// invoke

let result = Multiply(2,5)
console.log(result)
```

#### Callback w/ Result

```js
function Multiply(a, b, callback) {
    callback(a * b) // pretend this took a while
}

// invoke w/ anonymous function
Multiply(2,5, (result) => {
    console.log(result)
})
```



### Promises

```js
// wrap a callback in a promise
function MultiplyPromise(a,b) {
    return new Promise((resolve) => {
        Multiply(a, b, (result) => {
            // resolve promise from in callback
            resolve(result)
        });
    });
}
```



### Promise with Callback

```js
let multiplyPromise = MultiplyPromise(a,b)

multiplyPromise.then(result => {
  console.log(result)
})
```

[<img src="content/images/promise.png" width="300" alt="promise visualizer">](https://bevacqua.github.io/promisees/#)




### Promise with `Async` / `Await`

```js
(async function(){

    let result = await MultiplyPromise(a,b)
    console.log(result)

})()
```

---

## Node vs .NET

|              | .NET            | Node             |
|--|--|--|
| **Language** | C# / VB / F#    | JS / TS          |
| **Runtime**  | MSIL            | V8               |
| **Platform** | Win, Mac, Linux | Win, Mac, Linux  |
| **Packages** | Nuget           | npm              |

---

# Demo Time

---

## Resources

* [NodeJs Calendar Quickstart](https://developers.google.com/calendar/quickstart/nodejs)
