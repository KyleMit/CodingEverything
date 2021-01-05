# Programming in Lua (PIL)

[Programming in Lua (first edition) | Lua](https://www.lua.org/pil/contents.html)

> This book is a detailed and authoritative introduction to all aspects of Lua programming written by Lua's chief architect.
> This is the online version of the first edition of the book Programming in Lua
> Programming in Lua provides a solid base to any programmer who wants to use Lua

[Programming in Lua, fourth edition](https://www.amazon.com/exec/obidos/ASIN/8590379868) by Roberto Ierusalimschy



## [2.5 – Tables](https://www.lua.org/pil/2.5.html)

Iterate over table

```lua
for i,line in ipairs(a) do
  print(line)
end
```

## [3.6 - Table Constructors](https://www.lua.org/pil/3.6.html)

```lua
-- positional (array)
days = {"Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"}
print(days[4])  --> Wednesday

-- named (object)
position = {x=5, y=10}
print (position.x) --> 5
```

## [5.3 – Named Arguments](https://www.lua.org/pil/5.3.html)

> The parameter passing mechanism in Lua is positional

To pass arguments by name, covert params to table properties:

```lua
function rename (options)
  return os.rename(options.old, options.new)
end

rename{old="temp.lua", new="temp1.lua"}
```

This allows for optional parameters:

```lua
if type(options.new) ~= "string" then
  error("no new title")
end
```

## [8.1 – The require Function](https://www.lua.org/pil/8.1.html)

> Lua offers a higher-level function to load and run libraries, called `require`
>
> 1. require searches for the file in a path
> 2. require controls whether a file has already been run to avoid duplicating the work

## [16.1 – Classes | Lua](https://www.lua.org/pil/16.1.html)

```lua
-- create 'class'
function Account:new (o)
    o = o or {}   -- create object if user does not provide one
    setmetatable(o, self)
    self.__index = self
    return o
end

-- create instance
a = Account:new{balance = 0}
a:deposit(100.00)
```

## [20.1 – Pattern-Matching Functions](https://www.lua.org/pil/20.1.html)

> Unlike several other scripting languages, Lua does not use POSIX regular expressions (regexp) for pattern matching. The main reason for this is size: A typical implementation of POSIX regexp takes more than 4,000 lines of code. This is bigger than all Lua standard libraries together. In comparison, the implementation of pattern matching in Lua has less than 500 lines

String Standard Library Pattern Matching


> The most powerful functions in the string library are:
>
> * `string.find` (string Find)
> * `string.gsub` (Global Substitution)
> * `string.gfind` (Global Find).
>
> They all are based on patterns.


Find all new lines:

```lua
local t = {}                   -- table to store the indices
local i = 0
while true do
  i = string.find(s, "\n", i+1)    -- find 'next' newline
  if i == nil then break end
  table.insert(t, i)
end
```

Substitute values:

```lua
str = "Lua is cute"
str = string.gsub(str, "cute", "great")
print(s) --> Lua is great
```


## [20.2 – Patterns | Lua](https://www.lua.org/pil/20.2.html)


**Character Classes** - an item in a pattern that can match any character in a specific set

| Char | Desc                                |
| ---- | ----------------------------------- |
| `.`  | all characters                      |
| `%a` | letters                             |
| `%c` | control characters                  |
| `%d` | digits                              |
| `%l` | lower case letters                  |
| `%p` | punctuation characters              |
| `%s` | space characters                    |
| `%u` | upper case letters                  |
| `%w` | alphanumeric characters             |
| `%x` | hexadecimal digits                  |
| `%z` | the character with representation 0 |


> An upper case version of any of those classes represents the complement of the class

* `%a` - all letter characters
* `%A` - all non-letter characters


**Magic Characters** - special meanings when used in a pattern (escape by prefixing with `%`)

| Char | Desc                         |
| ---- | ---------------------------- |
| `()` | ???                          |
| `[]` | character set                |
| ---- | ---------------------------- |
| `.`  | any character                |
| `%`  | escape character             |
| ---- | ---------------------------- |
| `+`  | 1 or more repetitions        |
| `*`  | 0 or more repetitions        |
| `-`  | 0 or more repetitions (also) |
| `?`  | optional (0 or 1 occurrence) |
| ---- | ---------------------------- |
| `^`  | start of line                |
| `$`  | end of line                  |

**Character Set** - matches any of characters (or range of characters)

* `[0-9]` is equivalent to `%d`
