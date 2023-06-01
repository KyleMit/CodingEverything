# Lua Ecosystem
<!-- markdownlint-disable MD024 -->


## Selene

> A blazing-fast modern Lua linter written in Rust


[Kampfkarren/**selene**](https://github.com/Kampfkarren/selene)
[selene Documentation](https://kampfkarren.github.io/selene/)


### Lints

[Lints - selene Documentation](https://kampfkarren.github.io/selene/lints/index.html)


* `almost_swapped`

    ```lua
    -- wrong
    a = b
    b = a

    -- right
    a, b = b, a
    ```


* `divide_by_zero`


    ```lua
    -- wrong
    print(1 / 0)
    print(-1 / 0)
    -- right
    print(math.huge)
    print(-math.huge)
    ```

* `empty_if`

    ```lua
    -- wrong
    if a then
    end
    ```

* `global_usage`

  > `_G` is global mutable state, which is heavily regarded as harmful.
  > You should instead refactor your code to be more modular in nature.

  ```lua
  _G.foo = 1
  ```

* `if_same_then_else`

    ```lua
    -- wrong
    if foo then
        print(1)
    else
        print(1)
    end
    ```

* `ifs_same_cond`

    ```lua
    --- wrong
    if foo then
        print(1)
    elseif foo then
        print(1)
    end
    ```

* `multiple_statements`

    ```lua
    -- wrong
    foo() bar() baz()

    -- right
    foo()
    bar()
    baz()
    ```

 <!-- cspell:disable-next-line -->
* `parenthese_conditions`

  > Lua does not require these, and they are not idiomatic.


    ```lua
    -- wrong
    if (x) then
    repeat until (x)
    while (x) do

    -- right
    if x then
    repeat until x
    while x do
    ```

* `roblox_incorrect_color3_new_bounds`

    ```lua
    -- wrong
    Color3.new(255, 0, 0)

    -- right
    Color3.fromRGB(255, 0, 0)
    ```

* `shadowing`

    > Checks for overriding of variables under the same name.
    > This can cause confusion when reading the code when trying to understand which variable is being used, and if you want to use the original variable you either have to redefine it under a temporary name or refactor the code that shadowed it.

    ```lua
    local x = 1

    if foo then
        -- wrong
        local x = 1
    end
    ```

* `suspicious_reverse_loop`

   > This loop will only run at most once, instead of going in reverse.


    ```lua
    for _ = #x, 1 do

    -- loop backwards
    for _ = #x, 1, -1 do

    -- run once
    if #x > 0
    ```

* `type_check_inside_call`

    > This will always return "boolean", and is undoubtedly not what you intended to write.

    ```lua
    -- wrong
    return type(foo == "number")
    -- right
    return type(foo) == "number"
    ```

* `unbalanced_assignments`

> You shouldn't declare variables you're not immediately initializing on the same line as ones you are


```lua
-- wrong
a, b, c = 1
-- right
local a, b
local c = 1
```

* `undefined_variable`

    > This is most likely a typo

    ```lua
    -- cspell:disable-next-line
    prinnt("hello, world!")
    ```

* `unscoped_variables`


    > Checks for variables that are unscoped (don't have a local variable attached).

    ```lua
    baz = 3
    ```

* `unused_variable`

    ```lua
    function foo()
        baz = 3  -- wrong
        return 2
    end
    ```

    > If you intend to create a variable without using it, replace it with `_` or something that starts with `_`


## LuaRocks


> LuaRocks is the package manager for Lua modules.
> It allows you to create and install Lua modules as self-contained packages called *rocks*

### Links


* [LuaRocks - The Lua package manager](https://luarocks.org/)
* [luarocks/**luarocks**](https://github.com/luarocks/luarocks)
* [Downloads](http://luarocks.github.io/luarocks/releases/)


## Penlight

[Penlight Documentation](http://stevedonovan.github.io/Penlight/api/manual/01-introduction.md.html#)

```lua
-- include local
local utils = require 'pl.utils'
utils.printf("%s\n","hello, world!")

-- include global
require 'pl'
utils.printf("%s\n","That feels better")

-- include as function
local pl = require'pl.import_into'()
pl.utils.printf("%s\n","That feels better")
```

## Lua Users / Wiki

> [lua-users.org](http://lua-users.org/) is an internet site for and by users of the programming language Lua.
> [lua-users wiki](http://lua-users.org/wiki/) is a large community-maintained collection of Lua programming language information and resources.

### Links

* [lua-users wiki - Lua Comparison](http://lua-users.org/wiki/LuaComparison)
* [lua-users wiki - Sample Code](http://lua-users.org/wiki/SampleCode)


## etlua

> Embedded Lua templates

[leafo/**etlua**](https://github.com/leafo/etlua)

```bash
luarocks install etlua
```

```lua
local etlua = require "etlua"
local template = etlua.compile([[
  Hello <%= name %>,
  Here are your items:
  <% for i, item in pairs(items) do %>
   * <%= item -%>
  <% end %>
]])

print(template({
  name = "leafo",
  items = { "Shoe", "Reflector", "Scarf" }
}))
```

