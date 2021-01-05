# Roblox

* [Making a Basic Platformer](https://developer.roblox.com/en-us/articles/Creating-Your-First-Game)
* [Create - Roblox](https://www.roblox.com/create)


## Foreman

> Toolchain manager for Roblox projects

[Roblox/**foreman**](https://github.com/Roblox/foreman)


## Rojo

> Rojo is a tool designed to enable Roblox developers to use professional-grade software engineering tools.

[rojo-rbx/**rojo**](https://github.com/rojo-rbx/rojo)

### Build

```bash
rojo build default.project.json --output graphql.rbxmx
```

```json
// default.project.json
{
  "name": "GraphQL",
  "tree": {
    "$path": "src"
  }
}
```


## Luau

> A fast, small, safe, gradually typed embeddable scripting language derived from Lua

* [Luau](https://roblox.github.io/luau/)
  * [Luau Recap: May 2020](https://devforum.roblox.com/t/luau-recap-may-2020/581996)
  * [Luau Recap: June 2020](https://devforum.roblox.com/t/luau-recap-june-2020/632346)




## Test EZ


> BDD-style test and assertion library for Roblox Lua

[Roblox/**testez**](https://github.com/roblox/testez)
[TestEZ Documentation](https://roblox.github.io/testez/api-reference/#expect)

### Describe / It

```lua
describe("This cheese", function()
    it("should be moldy", function()
        expect(cheese.moldy).to.equal(true)
    end)
end)
```

### Expect

```lua
-- Equality
expect(1).to.equal(1)
expect(1).never.to.equal(2)

-- Approximate equality
expect(5).to.be.near(5 + 1e-8)
expect(5).to.be.near(5 - 1e-8)
expect(math.pi).never.to.be.near(3)

-- Optional limit parameter
expect(math.pi).to.be.near(3, 0.2)

-- Nil checking
expect(1).to.be.ok()
expect(false).to.be.ok()
expect(nil).never.to.be.ok()

-- Type checking
expect(1).to.be.a("number")
expect(newproxy(true)).to.be.a("userdata")

-- Function throwing
expect(function()
    error("nope")
end).to.throw()

expect(function()
    -- I don't throw!
end).never.to.throw()

expect(function()
    error("nope")
end).to.throw("nope")

expect(function()
    error("foo")
end).never.to.throw("bar")
```

### Maintenance and Debugging

[Maintenance and Debugging](https://roblox.github.io/testez/api-reference/#maintenance-and-debugging)

* Inside Describe
  * `FIXME`
  * `FOCUS` - marks a block as focused - if there are any focused blocks inside your test tree, only focused blocks will be executed
  * `SKIP` - mark a block as skipped - which stops any of the test assertions in the block from being executed
* Prepend Describe
  * `describeFOCUS`
  * `describeSKIP`
* Prepend It
  * `itFOCUS`
  * `itSKIP`
  * `itFIXME`


## Roblox API Reference

* [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript)

## Import External Script


```none
root
├── Packages
│   ├── _Index
│   │   ├── MyPolyfills
│   │   │   ├── Number
│   │   │   │   ├── init.lua
│   │   │   │   ├── isInteger.lua
│   │   │   │   └── IsNaN.lua
├── src
│   ├── pets
│   │   ├── __tests__
│   │   │   └── cat.spec.lua
│   │   └── cat.lua
│   └── objects
│       ├── __tests__
│       │   ├── bar.spec.lua
│       │   └── car.spec.lua
│       ├── bar.lua
│       └── car.lua
└── rotriever.toml
```


```lua
-- Packages/_Index/MyPolyfills/Number/init.lua
return {
 isNaN = require(script.isNaN),
 isInteger = require(script.isInteger),
}=
```

```lua
-- Packages/_Index/MyPolyfills/Number/isNaN.lua
return function(value)
 return type(value) == "number" and value ~= value
end
```


I'm in car and want to reference bar:

```lua
-- src/pets/cat.lua
local catModule = require(script.Parent.Parent.Pets.cat)
```

I'm in car and want to reference cat:

```lua
-- src/pets/cat.lua
local catModule = require(script.Parent.Parent.Pets.cat)
```
