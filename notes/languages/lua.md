# LUA

[The Programming Language Lua](https://www.lua.org/)

## Docs

* [Version history](https://www.lua.org/versions.html)
* [About](https://www.lua.org/about.html)
* [Getting Started](https://www.lua.org/start.html)
* [Lua 5.4 readme](http://www.lua.org/work/doc/)
* [Lua 5.4 Reference Manual - contents](http://www.lua.org/work/doc/contents.html)

## Links

* [Source Code Mirror](https://github.com/lua/lua)
* [Learn Lua in 15 Minutes](http://tylerneylon.com/a/learn-lua/)

## Installing

* [Download Source](https://www.lua.org/download.html)
* [Lua Binaries Download](http://luabinaries.sourceforge.net/download.html)

> Lua is distributed in source form. You need to build it before using it. Building Lua should be straightforward because Lua is implemented in pure ANSI C and compiles unmodified in all known platforms that have an ANSI C compiler


```bash
curl -R -O http://www.lua.org/ftp/lua-5.4.2.tar.gz
tar zxf lua-5.4.2.tar.gz
cd lua-5.4.2
make all test
```

## VS Code


* [sumneko/**lua-language-server**](https://github.com/sumneko/lua-language-server)
  * [Marketplace](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)
* [actboy168/**lua-debug**](https://github.com/actboy168/lua-debug)
  * [Marketplace](https://marketplace.visualstudio.com/items?itemName=actboy168.lua-debug)
* [trixnz/**vscode-lua**](https://github.com/trixnz/vscode-lua)
  * [Marketplace](https://marketplace.visualstudio.com/items?itemName=trixnz.vscode-lua)

## Syntax

### Comments

```lua
-- single line comment

--[[
    multiline comment
]]
```

### Variables

```lua
-- variables are global by default
myGlobal = 5

-- local variable
local myLocal = 6

-- undefine variable (will be garbage collected)
stringValue = nil

-- undefined variables return nil
foo = anUnknownVariable
```

### Types

```lua
-- strings are immutable
stringValue = 'single-quotes'
stringValue = "double quotes"
stringValue = [[ multi line
                 string ]]


-- numbers are doubles (64-bit)
myNum = 42

myBool = true
```

### Blocks

```lua
-- blocks are denoted with keywords like `do` / `end`
while num < 50 do
  -- there are no assignment / increment operators
  num = num + 1
end

-- if clause
if num > 40 then
    print('over 40')
else
    print('less than 40')
end
```

### Operators

```lua
-- string concatenation with .. operator
stringValue = stringValue .. ' appended'
```

### Boolean Operators

```lua
-- boolean operators
firstName = 'Beth'
isNotKyle = firstName ~= 'Kyle'

-- only nil and false are 'falsy'; 0 and '' and truthy
if not unknown then print('hi') end


```

### File IO

```lua
-- read in input from stdin line
local line = io.read()

```
