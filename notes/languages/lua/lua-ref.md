# Lua Reference Manual

[Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/)

> The reference manual is the official definition of the Lua language

## 5.1 Basic Functions

### [`select(index, ...)(https://www.lua.org/manual/5.1/manual.html#pdf-select)

> If index is a number, returns all arguments after argument number index.
> Otherwise, index must be the string "#", and select returns the total number of extra arguments it received.

## String

* [`string.len`](https://www.lua.org/manual/5.4/manual.html#pdf-string.len)

    ```lua
    -- Receives a string and returns its length
    string.len("hi") -- 2
    ```

