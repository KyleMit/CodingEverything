# Lua Ecosystem


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

