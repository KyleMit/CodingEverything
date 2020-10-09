---
title_word: Logs
title: 'Clean error logging in Node.JS'
summary: 'A review of some error logging options and how to get the most out of them'
tags: ['post', 'node', 'exception']
authors: ['Kyle']
date: 2020-04-22
draft: true
---



Let's say I have a simple function like this:

```js
function SayHello(name) {
    console.log(`Hi, ${name}`)
}
```

And I want to validate the incoming parameters so that name is required and alert the calling function if the data is invalid.

A couple different options are to:

## Throw Error

```js
if (!name) {
    throw new Error("Name required")
}
```

## Log and Return Null *(with [fancy console colors](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color))*

```js
if (!name) {
    console.error("\x1b[31m%s\x1b[0m", "SayHello - Name Required")
    return;
}
```

Both `throw` and `return` handle the control-of-flow problem to early terminate out of the method.

I'm most interested in optimizing the readability of the output.

Thrown errors in node seem really noisy, and it becomes hard to see the underlying issue, while `console.error` doesn't preserve any of the call stack or context.

**Questions**:

Is there a happy middle ground or best practice?
Can I reduce the verbosity of thrown messages or include some level of trace info with console logs?


## Throw Error Output Example

![Throw Error Output](https://i.stack.imgur.com/ro4ai.png)

## Console Log Output Example

![Console Log Output](https://i.stack.imgur.com/73ThY.png)
