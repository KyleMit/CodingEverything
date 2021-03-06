# JS to LUA

## Links

* [Learning Lua from JavaScript](http://phrogz.net/lua/LearningLua_FromJS.html)
* [Lua vs Javascript - MediaWiki](https://www.mediawiki.org/wiki/User:Sumanah/Lua_vs_Javascript)

## Functions

Lua uses `keyword...end` blocks instead of `{}`

```js
function sayHello(name) {
    return name
}
```

```lua
function sayHello(name)
    return name
end
```


## Variable

All local variables in lua use

```js
var a = 1
let b = 2
const c = 3
d = 4 // global
```

```lua
local a = 1
local b = 2
local c = 3
d = 4 -- global
```

## Comments

```js
// single line comment
/*
    multiline comment
*/
```


```lua
-- single line comment
--[[
    multiline comment
--]]
```


## Ternary

```js
let name = "Dillion"
let location = name === "Dillion" ? "Africa" : "N. America"
```

```lua
local name = "Dillion"
local location = name == "Dillion" and "Africa" or "N. America"
```


## Null-Coalescing Operator

```js
let message = error.message ?? 'An unknown error occurred.';
let message = error.message ? error.message : 'An unknown error occurred.';
```

```lua
local message = error.message or 'An unknown error occurred.';
```


## Object

```js
let obj = { message, locations, path }
let obj = {
    message: message,
    location: locations,
    path: path
}

let obj = {}
obj.message = message
obj.location = location
obj.path = path
```

```lua
local obj = {
    message = message,
    locations = locations,
    path=path
}
```

## Equality

```js
let isNotFrance = country != "france"
```

```lua
local isNotFrance = country ~= "france"
```


## Arrays

```js
let arr = [1,2,3]
let len = arr.length
```

```lua
local arr = {1,2,3}
local len = #arr
```

## Naming

* Names can't have hyphens or underscores
* names must be pascal case or snake case



## toString

- toString method should be converted to __tostring function on metatable


## do .. while

```js
do {
    // some code
} while (condition)
```

```lua
repeat
    -- some code
until not condition
```

### multiple expressions

[Comma Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)

> The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.

```js
const variable = (someExpression1, someExpression2, ..., someExpressionN)
```

```lua
local variable = (function()
    someExpression1
    someExpression2
    ...
    return someExpressionN
end)()
```

## Spread operator in Arrays

```js
[
    val1,
    val2,
    ...someArr,
    --[[ ... some more values]]--,
    valN
]
```

```lua
--[[
    values need to be wrapped with { }
    because otherwise Array.concat will try to spread it if it's already a table
]]--
Array.concat(
    { val1 },
    { val2 },
    someArr,
    /* ... some more values */,
    { valN }
)
```


## Variadic argument

```js
function foo(...bar) {
}
const padLen = Max.max(...existingLines) // or arguments
```

```lua
function foo(...)
    local bar = {...}
end
local padLen = math.max(table.unpack(existingLines))
```

## fn.apply

```js
fn.apply(thisArg, arguments)
```

```lua
fn(self, table.unpack(arguments))
-- but only works if function was defined like:
-- function Class:fn(arg1, arg2, ...) or
-- function fn(self, arg1, arg2, ...)
```

## Equality

```js
let bool1 = "0" === 0 // false
let bool2 = "0" == 0  // true
```

```lua
local bool1 = "0" == 0            -- false
local bool2 = "0" == tostring(0)  -- true
```




## Modules / Exports

```js
```




## Refactor JS

### Regex Or Condition

```js
let str = "some ab some bb"
let rgx = /ab|a|b/g

// can be executed multiple times
let match = rgx.exec(str)
console.log(match)
```

```js
let str = "some ab some bb"
let terms = ['ab','a','b']

let matches = terms.map(term => {
    let pos = str.indexOf(term)
    return {index: pos, match: term}
})

let matchesSorted = matches.sort((a,b) => a.index - b.index)

let firstMatch = matchesSorted[0]
```

## Conversion Util

* [PaulBernier/castl](https://github.com/PaulBernier/castl) - JavaScript to Lua compiler with runtime library
* [wizzard0/js2lua](https://github.com/wizzard0/js2lua) - Javascript to Lua translator
* [pkuleon/javascript-to-lua](https://github.com/pkuleon/javascript-to-lua) - A JavaScript to Lua source compiler
* [zekesonxx/pinecone](https://github.com/zekesonxx/pinecone) - Converts JavaScript to Lua using the SpiderMonkey AST

### Castl

```bash
npm install castl -g
```


## Questions

* [Lua check if a table is an 'instance'](https://stackoverflow.com/q/45192939/1366033)
* [Implementation of instanceof in Lua](https://gist.github.com/paulcuth/1270733)
* [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA)

