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
* [Lua - Overview - Tutorialspoint](https://www.tutorialspoint.com/lua/lua_overview.htm)

* Online REPL
  * [Lua: demo](https://www.lua.org/cgi-bin/demo)
  * [Repl.it](https://repl.it/languages/lua)
  * [jdoodle](https://www.jdoodle.com/execute-lua-online/)
  * [rextester](https://rextester.com/l/lua_online_compiler)
  * [tutorialspoint](https://www.tutorialspoint.com/execute_lua_online.php)

## Community Libraries

* [o080o/**reLua**](https://github.com/o080o/reLua) - Pure lua regular expression library

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

## Manual


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

## Questions

* [How to get number of entries in a Lua table?](https://stackoverflow.com/q/2705793/1366033)


  ```lua
  local arr = {1,2,3}
  local len = #arr
  ```

* [In Lua how do you import modules?](https://stackoverflow.com/q/7248877/1366033)


  ```lua
  local name = require "name"
  ```

* [map function in lua?](https://stackoverflow.com/q/11669926/1366033)


  ```lua
  function map(tbl, f)
      local t = {}
      for k,v in pairs(tbl) do
          t[k] = f(v)
      end
      return t
  end

  t = { pig = "pig", cow = "big cow", sheep = "white sheep" }
  local newt = map(t, function(item) return string.upper(item) end)

  table.foreach(t, print)
  table.foreach(newt, print)
  ```


* [`string.find` with new lines](https://stackoverflow.com/q/6491701/1366033)


* [Difference between `.` and `:` in Lua](https://stackoverflow.com/q/4911186/1366033)


  > The colon is for implementing methods that pass self as the first parameter. So the following are equivalent

  ```lua
  x:bar(3,4)
  x.bar(x,3,4)
  ```

  > "*object-oriented syntactic sugar*"

  ```lua
  string.find("abc", "b")
  "abc":find(, "b")
  ```


* ["For each" loop in a lua table with key value pairs](https://stackoverflow.com/q/13081620/1366033)

  ```lua
  for key,value in pairs(myTable) do
      myTable[key] = "foobar"
  end
  ```

* [Looping over array values in Lua](https://stackoverflow.com/q/39991717/1366033)

  Just "discard" unused `_`



* [Lua pattern matching vs. regular expressions](https://stackoverflow.com/q/2693334/1366033)

* [Logical 'or' in Lua patterns?](https://stackoverflow.com/q/3462370/1366033)

* Regex in LUA

  * [Fully-featured regex library in pure Lua](https://stackoverflow.com/q/54092273/1366033)
  * [regex - How to write this regular expression in Lua?](https://stackoverflow.com/q/6192137/1366033)
  * [mah0x211/lua-regex: regular expression for lua](https://github.com/mah0x211/lua-regex)
  * [LPeg.re - Regex syntax for LPEG](http://www.inf.puc-rio.br/~roberto/lpeg/re.html)

  * PEGs - Parsing Expression Grammars
  * LPEG - Lua Parsing Expression Grammars


* [What is the difference of pairs() vs. ipairs() in Lua?](https://stackoverflow.com/q/55108794/1366033)

  * `pairs()` - returns key-value pairs and is mostly used for associative tables. key order is unspecified.
  * `ipairs()` - returns index-value pairs and is mostly used for numeric tables. Non numeric keys in an array are ignored, while the index order is deterministic (in numeric order)

  ```lua
  u={}
  u[1]="a"
  u[3]="b"
  u[2]="c"
  u[4]="d"
  u["hello"]="world"

  for key,value in pairs(u) do print(key,value) end
  -- { 1=a, hello=world, 3=b, 2=c, 4=d }

  for key,value in ipairs(u) do print(key,value) end
  -- { 1=a, 2=c, 3=b, 4=d}
  ```

* [In Lua how do you import modules?](https://stackoverflow.com/q/7248877/1366033)


