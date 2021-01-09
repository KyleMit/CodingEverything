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
* [Lua Unofficial FAQ (uFAQ)](https://www.luafaq.org/)

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


## Patterns and Practices

### Special Names

* `exports` for return values
* `self` for internal state values
* `new` for constructors

### New Class

```lua
local Lexer = {}
Lexer.__index = Lexer


function Lexer.new(source)

 local self = {}
 self.source = source;

 return setmetatable(self, Lexer)
end

local myLexer = Lexer.new("mySource")
```

### Catch / Expect Errors

```lua
-- catch / handle / expect errors
local expectSyntaxError = function(text)
  local lexSecondRes = function()
    return lexSecond(text)
  end
  local _ok, thrownError = pcall(lexSecondRes)
  expect(_ok).to.equal(false)
  return expect(thrownError)
end
```

### Unimplemented Code

```lua
local parse = function(source, options)
 error("Parser.parse unimplemented") -- TODO
end
```

### Named Exports

```lua
-- prefer named export to anonymous obj
-- wrong
return {parse = parse}

-- right
local exports = {parse = parse}
return exports
```

### Lua Operators

Use lua operators where possible

```diff
- pos = pos + 1
+ pos += 1
```

###

### Instance Method -> Library Function

The `String.length()` instance method from JS needs to be translated to Lua `string.length()` library function

```lua
-- wrong
local bodyLength = body.length
-- right
local bodyLength = string.len(body)
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
* [What is the alternation operator in Lua patterns?](https://stackoverflow.com/q/10438358/1366033)

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


* [How to dump a table to console?](https://stackoverflow.com/q/9168058/1366033)

* [How do I call a Lua script from an HTML5 script/file/page](https://stackoverflow.com/q/6257628/1366033)

* [Split String in Lua](https://stackoverflow.com/q/1426954/1366033)

  ```lua
  function mySplit (inputStr, sep)
    if sep == nil then
        sep = "%s"
    end
    local t={}
    for str in string.gmatch(inputStr, "([^"..sep.."]+)") do
        table.insert(t, str)
    end
    return t
  end
  ```


* [How do I append to a table in Lua](https://stackoverflow.com/q/27434142/1366033)

  ```lua
  foo = {}
  table.insert(foo, "bar")
  ```

  ```lua
  foo = {}
  foo[#foo+1]="bar"
  ```

* [if...then...else](https://www.lua.org/pil/4.3.1.html)

  ```lua
  if a<0 then a = 0 end

  if a<b then return a else return b end

  if line > maxLines then
    showPage()
  end
  ```

* [Sort a Table in Lua](https://stackoverflow.com/q/15706270/1366033)

* [Check if a string isn't nil or empty in Lua](https://stackoverflow.com/q/19664666/1366033)

  ```lua
  local function isEmpty(s)
    return s == nil or s == ''
  end
  ```

* [Why does Lua have no "continue" statement?](https://stackoverflow.com/q/3524970/1366033)

  ```lua
  -- prints odd numbers in [|1,10|]
  for i=1,10 do
    if i % 2 == 0 then goto continue end
    print(i)
    ::continue::
  end
  ```

* [Can't modify loop-variable in lua](https://stackoverflow.com/q/34317433/1366033)

  > the loop counter in Lua is hidden from you
  > The variable `i` is merely a copy of the counter's current value


  ```lua
  for v = e1, e2, e3 do block end
  ```

  equivalent to:

  ```lua
  do
    local var, limit, step = tonumber(e1), tonumber(e2), tonumber(e3)
    if not (var and limit and step) then error() end
    var = var - step
    while true do
      var = var + step
      if (step >= 0 and var > limit) or (step < 0 and var < limit) then
        break
      end
      local v = var
      block
    end
  end
  ```

* [Lua Semicolon Conventions](https://stackoverflow.com/q/16862337/1366033)

  > Semi-colons in Lua are generally only required when writing multiple statements on a line.

* [What is the alternative for switch statement in Lua?](https://stackoverflow.com/q/37447704/1366033)

  ```lua
  if choice == 1
    then add()
  elseif choice == 2
    then save()
  else
    print "The program has been terminated\nThank you!"
  end
  ```

* [Difference between require and dofile?](https://www.luafaq.org/#T1.19)

  * `require` and `dofile` both load and execute Lua files
    * `require` - you pass the module name
    * `dofile` you pass an actual file path to a Lua file

  > So what search path does require use?

  ```bash
  lua -e "print(package.path)"
  # C:\Programs\lua-5.4.0\lua\?.lua;C:\Programs\lua-5.4.0\lua\?\init.lua;C:\Programs\lua-5.4.0\?.lua;C:\Programs\lua-5.4.0\?\init.lua;C:\Programs\lua-5.4.0\..\share\lua\5.4\?.lua;C:\Programs\lua-5.4.0\..\share\lua\5.4\?\init.lua;.\?.lua;.\?\init.lua
  ```

  ```bash
  $ lua -l alice
  # lua: module 'alice' not found:
  #   no field package.preload['alice']
  #   no file './alice.lua'
  #   no file '/home/kylemit/lua/lua/alice.lua'
  #   no file '/home/kylemit/lua/lua/alice/init.lua'
  #   no file './alice.so'
  #   no file '/home/kylemit/lua/clibs/alice.so'
  #   no file '/home/kylemit/lua/clibs/loadall.so'
  ```


  > The second difference is the `require` keeps track of what modules have been loaded
  > so calling it again will not cause the module to be reloaded.

* [check for NaN](https://stackoverflow.com/q/37753694/1366033)

```lua
function isNaN(val)
  return tostring(n) == "nan"
end

-- second solution
function isNaN(val)
  return n ~= n
end
```

* [How to "Extend" the "string" table?](https://stackoverflow.com/q/2031943/1366033)


* [Check if array contains specific value](https://stackoverflow.com/q/33510736/1366033)


  ```lua
  local function has_value (tab, val)
      for index, value in ipairs(tab) do
          if value == val then
              return true
          end
      end

      return false
  end
  ```

