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

## Operators

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


Packages - rotriever


## Exports

```js
```


* model file - uploaded into roblox studio
* rojo



old school js packaging - concating files

-> xml format that studio expects



test-easy -> current testing framework

mock/spy -> jest framework





## Roblox Style Guide

### Wrong

```lua
if (true) then
    print("hi")
end
```

### Right

```lua
if true then
    print("hi")
end
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


[Lua check if a table is an 'instance'](https://stackoverflow.com/q/45192939/1366033)
[Implementation of instanceof in Lua](https://gist.github.com/paulcuth/1270733)
[Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA)

