# Python

Its design philosophy emphasizes code readability with the use of significant indentation.

Inventor: [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum)

## Links

* [Python.org](https://www.python.org/)
* [Documentation](https://docs.python.org/3/)
* [Learn Python](https://www.learnpython.org/)

## Learn

* [w3schools](https://www.w3schools.com/python/default.asp)
* [GeeksforGeeks](https://www.geeksforgeeks.org/python-programming-language/?ref=lbp)
* [tutorialspoint](https://www.tutorialspoint.com/python/index.htm)
* [Learn Python](https://exercism.org/tracks/python/)

## Docs

* Bibliography
  * [Gen Index Symbols](https://docs.python.org/3/genindex-Symbols.html)

* Library
  * [Typing](https://docs.python.org/3/library/typing.html)
  * [Built-in Functions](https://docs.python.org/3/library/functions.html)
  * [Built-in Constants](https://docs.python.org/3/library/constants.html)
  * [Built-in Types](https://docs.python.org/3/library/stdtypes.html#)
    * [Numbers](https://docs.python.org/3/library/stdtypes.html#typesnumeric)
  * [doctest](https://docs.python.org/3/library/doctest.html)

* Tutorial
  * [4. More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html)
    * [4.7 Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
    * [4.8.1 Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)
    * [4.8.7 Documentation Strings](https://docs.python.org/3/tutorial/controlflow.html#tut-docstrings)
  * [6. Modules](https://docs.python.org/3/tutorial/modules.html)

* Reference
  * [2. Lexical analysis](https://docs.python.org/3/reference/lexical_analysis.html)
    * [2.1.3 Comments](https://docs.python.org/3/reference/lexical_analysis.html#comments)
    * [2.1.8 Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)
  * [4. Execution model](https://docs.python.org/3/reference/executionmodel.html)
    * [4.2 Naming & binding](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding)
  * [6. Expressions](https://docs.python.org/3/reference/expressions.html)
    * [6.3.4 Calls](https://docs.python.org/3/reference/expressions.html#calls)
  * [7. Simple statements](https://docs.python.org/3/reference/simple_stmts.html)
    * [7.2 Assignment Statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements)
    * [7.6 `return` statement](https://docs.python.org/3/reference/simple_stmts.html#return)
  * [8. Compound statements](https://docs.python.org/3/reference/compound_stmts.html)
    * [8.7 Function Definition](https://docs.python.org/3/reference/compound_stmts.html#def)

## Zen of Python

* Beautiful is better than ugly.
* Explicit is better than implicit.
* Simple is better than complex.
* Complex is better than complicated.
* Flat is better than nested.
* Sparse is better than dense.
* Readability counts.
* Special cases aren't special enough to break the rules.
* Although practicality beats purity.
* Errors should never pass silently.
* Unless explicitly silenced.
* In the face of ambiguity, refuse the temptation to guess.
* There should be one-- and preferably only one --obvious way to do it.
* Although that way may not be obvious at first unless you're Dutch.
* Now is better than never.
* Although never is often better than *right* now.
* If the implementation is hard to explain, it's a bad idea.
* If the implementation is easy to explain, it may be a good idea.
* Namespaces are one honking great idea -- let's do more of those!

## PEP

* **PEP** - Python Enhancement Proposals

* [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008)
* [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)
* [PEP 257 – Docstring Conventions](https://peps.python.org/pep-0257/)
* [PEP 484 – Type Hints](https://peps.python.org/pep-0484)
* [PEP 515 – Underscores in Numeric Literals](https://peps.python.org/pep-0515/)
* [PEP 572 – Assignment Expressions](https://peps.python.org/pep-0572/)

## Version History

* [What’s New In Python 3.8](https://docs.python.org/3/whatsnew/3.8.html#what-s-new-in-python-3-8)
  * Assignment Expressions

## PIP

* **PIP** - Python Package Installer

* Upgrade PIP

  > WARNING: You are using pip version 22.0.4; however, version 22.3 is available.

  ```bash
  python -m pip install --upgrade pip
  ```

* [Where does pip install its packages?](https://stackoverflow.com/q/29980798/1366033)

```bash
pip show <package name>
```

### Packages

```bash
python -m pip install -U autopep8
```

## PyTest

> helps you write better programs

<https://docs.pytest.org/en/7.1.x/>

```bash
pip install -U pytest
```

```bash
pytest --version
```

## Questions

* [pip install failing with: OSError: [Errno 13] Permission denied on directory](https://stackoverflow.com/q/31512422/1366033)

  Install to user directory

  ```bash
  pip install brotli --user
  ```

* [How to exit Python REPL](https://stackoverflow.com/q/19747371/1366033)

  <kbd>Ctrl</kbd> + <kbd>Z</kbd>, <kbd>Enter</kbd>

  or

  ```py
  exit()
  ```

* [Alias `python` to `python3`](https://askubuntu.com/q/320996/349745)


  ```bash
  alias python=python3
  ```

* [How do I create a constant in Python?](https://stackoverflow.com/q/2682745/1366033)

  ```py
  MY_CONSTANT = "one"
  ```

  ```py
  def MY_CONSTANT():
      return "one"
  ```

* [How to use the pass statement](https://stackoverflow.com/q/13886168/1366033)

  Prevents unimplemented exception

  ```py
  def meth_a(self):
      pass
  ```

* [Are triple quotes (`"""`) considered comments by the IDE](https://stackoverflow.com/q/68848991/1366033)

  Just a multiline string, but often used as a docstring which some linters will pick up

* [What are the most common Python docstring formats?](https://stackoverflow.com/q/3898572/1366033)

  * **reST** - reStructuredText

  ```py
  """
  This is a reST style.

  :param param1: this is a first param
  :param param2: this is a second param
  :returns: this is a description of what is returned
  :raises keyError: raises an exception
  """
  ```

* [Is Python strongly typed?](https://stackoverflow.com/q/11328920/1366033)

  > Python is strongly, dynamically typed.

* [Exiting Python REPL](https://stackoverflow.com/q/9730409/1366033)

  * <kbd>Ctrl</kbd> + <kbd>Z</kbd>
  * Type `exit()` and hit <kbd>Enter</kbd>

* [`PytestUnknownMarkWarning`](https://docs.pytest.org/en/stable/how-to/mark.html)

  ```log
  PytestUnknownMarkWarning: Unknown pytest.mark.task - is this a typo?
  You can register custom marks to avoid this warning
  See https://docs.pytest.org/en/stable/how-to/mark.html
  ```

* Power Operator / Exponents

  * [6.5 Power Operator - `x ** y`](https://docs.python.org/3/reference/expressions.html?highlight=power%20operator#the-power-operator)
  * [`pow(x,y`)](https://docs.python.org/3/library/functions.html#pow)
  * [`math.pow(x,y)`](https://docs.python.org/3/library/math.html?highlight=power%20operator#math.pow)

* [Assign and increment value on one line](https://stackoverflow.com/q/34693939/1366033)

  `:=` - walrus operator - assignment expression - assign *and* return value

  ```py
  >>> print(f"{(x := 1)}")
  1
  >>> x
  1
  ```

* [What exactly does `+=` do?](https://stackoverflow.com/q/4841436/1366033)

  * [`object.__iadd__(self, other)`](https://docs.python.org/3/reference/datamodel.html#object.__iadd__)
  * [7.2.1 Augmented assignment statements](https://docs.python.org/3/reference/simple_stmts.html#augmented-assignment-statements)

* Modulo Operator

  * [6.6 Binary arithmetic operations](https://docs.python.org/3.3/reference/expressions.html#binary-arithmetic-operations)
  * [`divmod(a, b, /)](https://docs.python.org/3/library/functions.html#divmod)

* [for loop in Python](https://stackoverflow.com/q/4170656/1366033)

  ```py
  myList = [1,2,3]
  for item in myList:
      print item
  ```

  ```py
  myDict = { 1:'one', 2:'two', 3:'three' }
  for key in myDict:
      print key, myDict[key]
  ```

  When modifying list during iteration

  ```py
  for i, item in enumerate(myList):
    myList[i] = item**2
  ```

* [How do I split the definition of a long string over multiple lines?](https://stackoverflow.com/q/10660435/1366033)

  ```py
  s = """ this is a very
          long string if I had the
          energy to type more and more ..."""
  ```

* [How do I split a multi-line string into multiple lines?](https://stackoverflow.com/q/172439/1366033)

  ```py
  str.splitlines()
  ```

  ```py
  str.split("\n")
  ```

* [Split double new lines in platform independent manner](https://stackoverflow.com/q/32121140/1366033)

  ```py
  if "\n" in data:
      data = data.replace("\r", "")
  else:
      data = data.replace("\r", "\n")
  ```

* [How to print map object with Python 3?](https://stackoverflow.com/q/7731213/1366033)

  `map` returns a **generator** / **iterable**


* [Getting a map() to return a list in Python 3.x](https://stackoverflow.com/q/1303347/1366033)

  ```py
  map(chr,[65,66,67,68])       # <map at 0x1b7a81ee140>
  list(map(chr,[65,66,67,68])) # ['A', 'B', 'C', 'D']
  ```

  Python 3.5 - [Additional Unpacking Generalizations](https://docs.python.org/3/whatsnew/3.5.html#whatsnew-pep-448)

  ```py
  [*map(chr,[65,66,67,68])]    # ['A', 'B', 'C', 'D']
  ```

* [Map array of data](https://stackoverflow.com/q/10973766/1366033)

  ```py
  xs = [1, 2, 3]
  # map
  ys = map(lambda x: x * 2, xs)

  # list comprehension
  ys = [x * 2 for x in xs]

  # explicit loop
  ys = []
  for x in xs:
      ys.append(x * 2)
  ```

* [Finding and replacing elements in a list](https://stackoverflow.com/q/2582138/1366033)

  ```py
  xs = [None, "#", None, "#"]
  ["." if x == None else x for x in xs]
  # ['.', '#', '.', '#']
  ```

* [How to sum a list of numbers stored as strings](https://stackoverflow.com/q/30744195/1366033)

  ```py
  numbers = ['1', '3', '7']
  sum(int(x) for x in numbers))
  ```

* [Sum a list of numbers in Python](https://stackoverflow.com/q/4362586/1366033)

  ```py
  xs = [1, 2, 3, 4, 5]
  print(sum(xs))
  ```

* [Remove empty strings from a list of strings](https://stackoverflow.com/q/3845423/1366033)

  ```py
  strs = ['', 'a', '', 'c']

  list(filter(None, strs)) # ['a', 'c']
  list(filter(bool, strs)) # ['a', 'c']
  list(filter(len, strs))  # ['a', 'c']
  ```

  [List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

    ```py
  strs = ['', 'a', '', 'c']

  [x for x in strs if x] # ['a', 'c']
  ```

* [Sort a list of numerical strings in ascending order](https://stackoverflow.com/q/9758959/1366033)

  ```py
  sorted(['10','3','2']) # ['10', '2', '3']
  sorted([10, 3, 2])     # [2, 3, 10]
  ```

* [Python list sort in descending order](https://stackoverflow.com/q/4183506/1366033)

  ```py
  sorted([2,3,1], reverse=True) # [3, 2, 1]
  ```

* [How to sort a list of objects based on an attribute of the objects?](https://stackoverflow.com/q/403421/1366033)

  Use [`operator.attrgetter`](https://docs.python.org/3/library/operator.html#operator.attrgetter)

  ```py
  class Point:
      def __init__(self, x, y):
          self.x = x
          self.y = y

  xs = [Point(1,9), Point(5,2)]
  ```

  ```py
  from operator import attrgetter
  xs_sorted = sorted(xs, key=attrgetter("y"))
  print([[i.x, i.y] for i in xs_sorted])
  # [[5, 2], [1, 9]]
  ```

  ```py
  xs_sorted = sorted(xs, key=lambda i: i.y)
  print([[i.x, i.y] for i in xs_sorted])
  # [[5, 2], [1, 9]]
  ```

* [How do I sort a list of dictionaries by a value of the dictionary?](https://stackoverflow.com/q/72899/1366033)

  Use [`sorted`](https://docs.python.org/3/library/functions.html#sorted) with `key`

  ```py
  xs = [{"name":"Kyle", "age":30}, {"name":"Beth", "age":28}]
  print(sorted(xs, key=lambda x: x["age"]))
  # [{'name': 'Beth', 'age': 28}, {'name': 'Kyle', 'age': 30}]
  ```

  Use [`operator.itemgetter`](https://docs.python.org/3/library/operator.html#operator.itemgetter)

  ```py
  from operator import itemgetter
  xs = [{"name":"Kyle", "age":30}, {"name":"Beth", "age":28}]
  print(sorted(xs, key=itemgetter("name")))
  # [{'name': 'Beth', 'age': 28}, {'name': 'Kyle', 'age': 30}]
  ```

* [Sort a list of lists with a custom compare function](https://stackoverflow.com/q/5213033/1366033)

  Use [`functools.cmp_to_key`](https://docs.python.org/3/library/functools.html#functools.cmp_to_key)

  * [key function](https://docs.python.org/3/glossary.html#term-key-function)
  * [Sorting > Comparison Functions](https://docs.python.org/3/howto/sorting.html#comparison-functions)

  > a comparison function such as cmp(a, b) will return:
  >
  > * a negative value for less-than
  > * zero if the inputs are equal, or
  > * a positive value for greater-than

  ```py
  from functools import cmp_to_key

  xs = ["b","a","a","c"]

  def compareStrings(a,b):
      if a > b:
          return 1
      elif a < b:
          return -1
      else:
          return 0

  xs_sorted = sorted(xs, key=cmp_to_key(compareStrings))
  print(sorted(xs_sorted)) # ['a', 'a', 'b', 'c']
  ```

* What does `operator.itemgetter` do?

  ```py
  import operator

  obj = {"name":"Kyle", "age":30}

  getName1 = operator.itemgetter("name")
  getName2 = lambda x: x["name"]

  print(getName1(obj)) # "Kyle"
  print(getName2(obj)) # "Kyle"
  ```

* [How to get first item in list on list](https://stackoverflow.com/q/32839561/1366033)

  ```py
  arr = ['a','b','c']
  arr[0] # 'a'
  ```

* [How to take the first N items from a generator or list?](https://stackoverflow.com/q/5234090/1366033)

  Slice `array[start:stop:step]`

  ```py
  arr = [1,2,3,4]
  arr[:2] # [1, 2]
  ```

  Use [`itertools.islice`](https://docs.python.org/3/library/itertools.html#itertools.islice)

  ```py
  import itertools
  arr = [1,2,3,4]
  list(itertools.islice(arr,2)) # [1, 2]
  ```

* [Print a variable's name and value?](https://stackoverflow.com/q/32000934/1366033)

  Python 3.8 f-string `=` syntax

  ```py
  foo = 1
  bar = 2
  print(f"{foo=} {bar=}")
  # foo=1 bar=2 
  ```

* [How can I do a line break (line continuation) in Python?](https://stackoverflow.com/q/53162/1366033)

  Use backslash (`\`)

* [Does Python have a ternary conditional operator?](https://stackoverflow.com/q/394809/1366033)

  [6.13. Conditional expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions)

  ```py
  a if condition else b
  ```

* [Is there a difference between "==" and "is"?](https://stackoverflow.com/q/132988/1366033)

  * `is` will return True if two variables point to the same object (in memory)
  * `==` if the objects referred to by the variables are equal

* [What is the difference between "&" and "and" in Python?](https://stackoverflow.com/q/67645225/1366033)

  * `&` is the bit-AND operator.

  ```py
  1 & 1 # 1
  3 & 2 # 2
  2 & 1 # 0
  ```

  * `and` is the boolean operator

  ```py
  True and False # False
  True and True  # True
  ```

* [Python assignment destructuring](https://stackoverflow.com/q/24999875/1366033)

  ```py
  a,b,c = [1,2,3]
  (a,b,c) = [1,2,3]
  [a,b,c] = [1,2,3]
  ```

* [Does reading an entire file leave the file handle open?](https://stackoverflow.com/q/7409780/1366033)

  Use [`open.read`](https://docs.python.org/2/tutorial/inputoutput.html#methods-of-file-objects)

  ```py
  # Open a file: file
  file = open('day2.txt', mode='r')
  
  # read all lines at once
  contents = file.read()
  
  # close the file
  file.close()
  ```

  Use [`with` Statement](https://peps.python.org/pep-0343/)

  ```py
  with open('day2.txt', mode='r') as file:
      contents = file.read()
  ```

* [How to split a string using an empty separator in Python](https://stackoverflow.com/q/17380592/1366033)

  ```py
  # "AB".split("")
  # ValueError: empty separator
  ```

  ```py
  list('AB') # ['A', 'B']
  ```

* [How to read a file without newlines?](https://stackoverflow.com/q/12330522/1366033)

  ```py
  with open("input.txt", "r") as file:
    lines = file.read().splitlines()
  ```

  ```py
  with open("input.txt", "r") as file:
    lines = [line.strip() for line in file]
  ```

* [Is there a Python equivalent to Ruby's string interpolation?](https://stackoverflow.com/q/4450592/1366033)
  
  Use Literal String Interpolation

  * [String Interpolation](https://docs.python.org/3/tutorial/inputoutput.html#fancier-output-formatting)
  * [7.1.1 Formatted String Literals](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings)
  * [PEP 498 – Literal String Interpolation](https://peps.python.org/pep-0498/)

  ```py
  name = "Kyle"
  f'My name is {name}' # 'My name is Kyle'
  ```

  Use [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format)

  ```py
  name = "Kyle"
  print('My name is {}'.format(name))        # 'My name is Kyle'
  print('My name is {n1}'.format(n1 = name)) # 'My name is Kyle'
  ```

  Use [Template strings](https://docs.python.org/3/library/string.html#template-strings)

  ```py
  from string import Template
  s = Template('My name is $name.')
  s.substitute(name='Kyle')
  # 'My name is Kyle'
  ```

  Use [printf-style](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)

  [Old string formatting](https://docs.python.org/3/tutorial/inputoutput.html#old-string-formatting)

  ```py
  print('My name is %s.' % "Kyle") # 'My name is Kyle'
  ```

* [How can I represent an 'Enum' in Python?](https://stackoverflow.com/q/36932/1366033)


  * [PEP 435 – Adding an Enum type to the Python standard library | peps.python.org](https://peps.python.org/pep-0435/)
  * [enum — Support for enumerations — Python 3.11.0 documentation](https://docs.python.org/3/library/enum.html)

  ```py
  from enum import Enum

  class RPS(Enum):
      Rock = "A"
      Paper = "B"
      Scissors = "C"

  myVal = "A"
  myEnum = RPS(myVal)

  print(RPS.Rock.name)      # Rock
  print(RPS.Rock.value)     # A
  print(myEnum.value)       # A
  print(myEnum == RPS.Rock) # true
  ```

* [Replacements for switch statement in Python?](https://stackoverflow.com/q/60208/1366033)

  [PEP 636 – Structural Pattern Matching](https://peps.python.org/pep-0636/#matching-against-constants-and-enums)

  ```py
  def http_error(status):
      match status:
          case 400:
              return "Bad request"
          case 404:
              return "Not found"
          case 418:
              return "I'm a teapot"
          case _:
              return "Something's wrong with the Internet"
  ```

* [How to use values stored in variables as case patterns?](https://stackoverflow.com/q/66159432/1366033)

  Use Constants or Convert to If statements

* [Is it possible to write single line return statement with if statement?](https://stackoverflow.com/q/18669836/1366033)

  [`PEP-0008` Style Guide > Whitespace](https://peps.python.org/pep-0008/#other-recommendations)

  > Compound statements (multiple statements on the same line) are generally discouraged

  ```py
  if x is None: return None
  ```

* [How to implement an efficient bidirectional hash table?](https://stackoverflow.com/q/3318625/1366033)

  ```py
  myDict = {'a': 1, 'b': 2}
  revDict = dict([reversed(i) for i in myDict.items()])

  myDict['a'] # 1
  revDict[1]  # 'a'
  ```

* [Get key by value in dictionary](https://stackoverflow.com/q/8023306/1366033)

  ```py
  myDict = {'a': 1, 'b': 2}
  myDict.keys()[myDict.values().index(2)]  # 'b'
  ```

* [Is there a 'foreach' function in Python 3?](https://stackoverflow.com/q/18294534/1366033)

  ```py
  for val in [1,2,3]:
      print(val)
  ```

* [Split a string into 2 in Python](https://stackoverflow.com/q/4789601/1366033)

  ```py
  chars = "ABCD"
  first, last = chars[:len(chars)//2], chars[len(chars)//2:]
  print(first) # "AB"
  print(last)  # "CD"
  ```

* [How to find list intersection?](https://stackoverflow.com/q/3697432/1366033)

  * [5.4 sets](https://docs.python.org/3/tutorial/datastructures.html#sets)
  * [Set Types](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)

  ```py
  a = [1,2,3,4,5]
  b = [1,3,5,6]
  list(set(a) & set(b))
  # [1, 3, 5]
  ```

  ```py
  a = [1,2,3,4,5]
  b = [1,3,5,6]
  list(set(a).intersection(b))
  # [1, 3, 5]
  ```

  ```py
  # retains duplicates - O(N^2)
  a = [1,2,3,3,4,5]
  b = [1,3,5,6]
  [x for x in a if x in b]
  # [1, 3, 3, 5]
  ```

* [How can I convert a character to a integer in Python, and vice versa?](https://stackoverflow.com/q/704152/1366033)

  Use [`chr`](https://docs.python.org/3/library/functions.html#chr) & [`ord`](https://docs.python.org/3/library/functions.html#ord)

  ```py
  chr(97)  # 'a'
  ord('a') # 97
  ```

* [How to detect lowercase letters in Python?](https://stackoverflow.com/q/12934997/1366033)

  ```py
  'A'.islower() # false
  ```

* [Create an empty list with certain size in Python](https://stackoverflow.com/q/10712002/1366033)

  ```py
  xs = [None] * 3
  xs # [None, None, None]
  ```

  ```py
  xs = [None for _ in range(3)]
  xs # [None, None, None]
  ```

* [How do I split a list into equally-sized chunks?](https://stackoverflow.com/q/312443/1366033)

  ```py
  def chunks(lst, size):
      for i in range(0, len(lst), size):
          yield lst[i:i + size]
  ```

  ```py
  def chunks(iterable, chunk_size):
    i = 0
    while i < len(iterable):
      yield iterable[i:i+chunk_size]
      i += chunk_size
  ```

  Usage:

  ```py
  lst = [1,2,3,4,5,6]
  print(list(chunks(lst, 2))) # [[1, 2], [3, 4], [5, 6]]
  ```

* [Behaviour of increment and decrement operators in Python](https://stackoverflow.com/q/1485841/1366033)

  ```py
  count += 1
  ```

* [Split Strings into words with multiple word boundary delimiters](https://stackoverflow.com/q/1059559/1366033)

  use [`re`](https://docs.python.org/3/library/re.html)

  ```py
  import re
  pair = "2-4,6-8"
  re.split("-|,", pair)
  # ['2', '4', '6', '8']
  ```

  ```py
  pair = "2-4,6-8"
  pair.replace("-",",").split(",")
  # ['2', '4', '6', '8']
  ```

* [Convert all strings in a list to int](https://stackoverflow.com/q/7368789/1366033)

  ```py
  xs = ['1', '2', '3']
  list(map(int, xs))
  # [1,2,3]
  ```

  ```py
  xs = ['1', '2', '3']
  [int(x) for x in xs]
  # [1,2,3]
  ```

* [Determine whether integer is between two other integers](https://stackoverflow.com/q/13628791/1366033)


  ```py
  if 10000 <= number <= 30000:
  ```

* [Does Python have a string 'contains' substring method?](https://stackoverflow.com/q/3437059/1366033)

  Use [`in` operator](https://docs.python.org/3/reference/expressions.html#membership-test-details)

  ```py
  'b' in "abc" # True
  ```

* Add item to list

  Use [`list.append`](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

  ```py
  lst = ["a", "b", "c"]
  lst.append("d")
  # ["a", "b", "c", "d"]
  ```

* [Check if string matches pattern](https://stackoverflow.com/q/12595051/1366033)

  [`re.match`](https://docs.python.org/3/library/re.html#re.match)

  > If zero or more characters at the *beginning* of string match the regular expression pattern  
  > If you want to locate a match anywhere in string, use `search()` instead

  ```py
  import re

  re.match("ab", "abc")  # <re.Match object; span=(0, 2), match='ab'>
  re.match("b", "abc")   # None
  re.search("ab", "abc") # <re.Match object; span=(0, 2), match='ab'>
  re.search("b", "abc")  # <re.Match object; span=(1, 2), match='b'>
  ```

  **See Also**: [Search vs Match](https://docs.python.org/3/library/re.html#search-vs-match)

* [Locating the position of a regex match in a string?](https://stackoverflow.com/q/2674391/1366033)

  Returns [`Match` Object](https://docs.python.org/3/library/re.html#match-objects)

  ```py
  import re
  re.search("b", 'abc').start() # 1
  ```

* [How to Get Positions and Values of Matches](https://stackoverflow.com/q/250271/1366033)

  Use [`re.finditer`](https://docs.python.org/3/library/re.html#re.finditer)

  ```py
  import re
  res = re.finditer("[a-z]", 'a1b2c3d4')
  [[m.start(), m.group()] for m in res]
  # [[0, 'a'], [2, 'b'], [4, 'c'], [6, 'd']]
  ```

* [Extract part of a regex match](https://stackoverflow.com/q/1327369/1366033)

  Use [`Match.group`](https://docs.python.org/3.8/library/re.html#re.Match.group)

  ```py
  import re
  re.search("#(.)#", '#a#').group(1) # 'a'
  ```

* [Checking whether a string starts with substring](https://stackoverflow.com/q/8802860/1366033)

  ```py
  string = "hello world"
  string.startswith("hello") # True
  ```

* [How do I reverse a list or loop over it backwards?](https://stackoverflow.com/q/3940128/1366033)

  [Modify list](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types) (in-place)

  ```py
  arr = [1,2,3]
  arr.reverse()
  print(arr) # [3, 2, 1]
  ```

  Use [`reversed`](https://docs.python.org/3/library/functions.html#reversed) function

  ```py
  arr = [1,2,3]
  rev = list(reversed(arr))
  print(rev) # [3, 2, 1]
  ```

  use [`a[start:stop:step]`](https://docs.python.org/3/library/functions.html#slice)

  ```py
  arr = [1,2,3]
  rev = arr[::-1]
  print(rev) # [3, 2, 1]
  ```

* [Loop backwards using indices](https://stackoverflow.com/q/869885/1366033)

  use `step=-1` in [`range(start, stop, step=1)`](https://docs.python.org/3/library/functions.html#func-range)

  ```py
  [i for i in range(3, 0)]     # []
  [i for i in range(3, 0, -1)] # [3, 2, 1]
  ```

* [Understanding slicing](https://stackoverflow.com/q/509211/1366033)

  ```py
  a[start:stop]  # items start through stop-1
  a[start:]      # items start through the rest of the array
  a[:stop]       # items from the beginning through stop-1
  a[:]           # a copy of the whole array
  ```

* [Create or append to a list in a dictionary](https://stackoverflow.com/q/4143698/1366033)

  use [`collections.defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict)

  ```py
  from collections import defaultdict

  result = defaultdict(list)
  for widget_type, app in widgets:
      result[widget_type].append(app)
  ```

* [How to concatenate (join) items in a list to a single string](https://stackoverflow.com/q/12453580/1366033)

  use [`str.join`](https://docs.python.org/3/library/stdtypes.html#str.join)

  ```py
  a = ['a','b','c']
  ''.join(a) # 'abc'
  ```

* [Run a process x times](https://stackoverflow.com/q/818828/1366033)

  Use [`range`](https://docs.python.org/3/library/stdtypes.html#typesseq-range)

  ```py
  for _ in range(n):
      do_something()
  ```

  Use [`itertools.repeat`](https://docs.python.org/3/library/itertools.html#itertools.repeat)

  ```py
  for _ in itertools.repeat(None, times):
      do_something()
  ```

* [How do I get the last element of a list?](https://stackoverflow.com/q/930397/1366033)

  ```py
  lst = ['a','b','c']
  lst[-1] # C
  ```

* [How to pop() a list n times](https://stackoverflow.com/q/12040744/1366033)

  ```py
  a = ['a','b','c','d']
  b = [a.pop() for _ in range(2)]

  print(a) # ['a', 'b']
  print(b) # ['d', 'c']
  ```

* [How to append multiple values to a list in Python](https://stackoverflow.com/q/20196159/1366033)

  use [`list.extend`](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types)

  ```py
  a = ['a','b']
  a.extend(['c','d'])
  print(a) # ['a', 'b', 'c', 'd']
  ```

* [How do I concatenate two lists in Python?](https://stackoverflow.com/q/1720421/1366033)

  Use `+` operator

  ```py
  a = [1, 2, 3]
  b = [4, 5, 6]

  c = a + b
  print(c) # [1, 2, 3, 4, 5, 6]
  ```

  Use [Additional Unpacking Generalizations](https://peps.python.org/pep-0448/)

  ```py
  a = [1, 2, 3]
  b = [4, 5, 6]

  c = [*a, *b]
  print(c) # [1, 2, 3, 4, 5, 6]
  ```

  Use [`itertools.chain`](https://docs.python.org/3/library/itertools.html#itertools.chain)

  ```py
  from itertools import chain

  a = [1, 2, 3]
  b = [4, 5, 6]

  c = chain(a,b)
  print(list(c)) # [1, 2, 3, 4, 5, 6]
  ```

* [Remove the last N elements of a list](https://stackoverflow.com/q/15715912/1366033)

  ```py
  n = 2
  lst = [1, 2, 3, 4, 5]
  del lst[-n:]
  print(lst) # [1, 2, 3]
  ```

  ```py
  n = 2
  lst = [1, 2, 3, 4, 5]
  lst = lst[:len(lst)-n]
  print(lst) # [1, 2, 3]
  ```

* [How do I remove the first item from a list?](https://stackoverflow.com/q/4426663/1366033)

  ```py
  l = ['a', 'b', 'c', 'd']
  print(l.pop(0)) # 'a'
  print(l)        # ['b', 'c', 'd']
  ```

* [Difference between del, remove, and pop on lists](https://stackoverflow.com/q/11520492/1366033)

  * Pop - just 1 item
  * Del - deletes items
  * Remove - deletes by value (not index)

* [Accessing the index in 'for' loops](https://stackoverflow.com/q/522563/1366033)

  Use [`enumerate`](https://docs.python.org/3.3/library/functions.html#enumerate)

  ```py
  xs = ['a','b','c']
  print(list(enumerate(xs))) # [(0, 'a'), (1, 'b'), (2, 'c')]

  for idx, x in enumerate(xs):
      print(idx, x)
  ```
  
  **See Also**: [PEP 279 – The enumerate() built-in function](https://peps.python.org/pep-0279/)

* [Iterating over dictionaries using 'for' loops](https://stackoverflow.com/q/3294889/1366033)

  * [`dict.values](https://docs.python.org/3/library/stdtypes.html#dict.values)
  * [`dict.keys`](https://docs.python.org/3/library/stdtypes.html#dict.keys)
  * [`dict.values`](https://docs.python.org/3/library/stdtypes.html#dict.values)

* [How to iterate `dict` with `enumerate` and unpack the index, key, and value along with iteration](https://stackoverflow.com/q/42193712/1366033)

  ```py
  dict = {'a':'x', 'b':'y'}
  print([(idx,x) for idx, x in enumerate(dict.values())])
  # [(0, 'x'), (1, 'y')]
  ```

* [What is the history of the variable names x and xs?](https://stackoverflow.com/q/6267735/1366033)

  * `x` is a common variable name in mathematics
  * `xs` is the plural form of `x`

* [Printing Python version in output](https://stackoverflow.com/q/1252163/1366033)

  ```py
  import sys
  print(sys.version)
  ```

* [How to set the python type hinting for a dictionary variable?](https://stackoverflow.com/q/52593803/1366033)

  * [PEP 585 – Type Hinting Generics In Standard Collections](https://peps.python.org/pep-0585/)
  * [typing — Support for type hints — Python 3.11.0 documentation](https://docs.python.org/3/library/typing.html)

  3.8 and below

  ```py
  from typing import Dict
  xs: Dict[int, str] = {1: 'a', 4: 'c'}
  ```

  3.9 and above

  ```py
  xs: dict[int, str] = {1: 'a', 4: 'c'}
  ```

* [Why is there no tuple comprehension in Python?](https://stackoverflow.com/q/16940293/1366033)

  Use [`tuple`](https://docs.python.org/3/library/stdtypes.html#tuple)

  ```py
  print(tuple(x for x in range(3))) # (1,2,3)
  ```

  See Also: [5.3 - Tuples and Sequences](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

  Use splat (`*`) to unpack a generator

  [PEP 448 – Additional Unpacking Generalizations](https://peps.python.org/pep-0448/)

  ```py
  tp = *(x for x in range(3)), # note the comma
  print(tp) # (1,2,3)
  print(tuple(x for x in xs))
  print((1,2,3))
  ```

* [Testing whether a string has repeated characters](https://stackoverflow.com/q/32090058/1366033)

  ```py
  len(set(x)) == len(x)
  ```

* [how to stop a for loop](https://stackoverflow.com/q/6346492/1366033)

  Use `break` and `continue`

* [Explanation of how nested list comprehension works?](https://stackoverflow.com/q/20639180/1366033)

  ```py
  [leaf for branch in tree for leaf in branch]
  ```

  ```py
  for branch in tree:
      for leaf in branch:
          yield leaf
  ```

* [Python print array with new line](https://stackoverflow.com/q/13893399/1366033)

  Use [`print()`](https://docs.python.org/3/library/functions.html#print) with `sep`

  ```py
  xs = ["Hello", "Goodbye"]
  print(*xs, sep='\n')
  # Hello
  # Goodbye
  ```

  **See Also**: [4.7.4. Unpacking Argument Lists](https://docs.python.org/3.7/tutorial/controlflow.html#unpacking-argument-lists)

* [How to print a list in Python "nicely"](https://stackoverflow.com/q/1523660/1366033)

  use [`pprint`](https://docs.python.org/3/library/pprint.html)

  ```py
  from pprint import pprint
  pprint(the_list)
  ```

* [Rotating a two-dimensional array in Python](https://stackoverflow.com/q/8421337/1366033)

  ```py
  grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  def rotateClockwise(original):
      return list(zip(*original[::-1]))

  def rotateCounterClockwise(original):
      return list(zip(*original))[::-1]

  print(*rotateClockwise(rotateCounterClockwise(grid)), sep="\n")
  ```

* [How do I measure elapsed time in Python?](https://stackoverflow.com/q/7370801/1366033)

  ```py
  from timeit import default_timer as timer

  start = timer()
  # ...
  end = timer()
  print(end - start) # Time in seconds, e.g. 5.38091952400282
  ```


* [`"".join(reversed(val))` vs `val[::-1]`](https://stackoverflow.com/q/1695385/1366033)

  `x[::-1]` - "Martian Smiley"

  ```bash
  $ python -mtimeit '"".join(reversed("hello there!"))'
  # 1000000 loops, best of 5: 363 nsec per loop

  $ python -mtimeit '"hello there!"[::-1]'
  # 5000000 loops, best of 5: 74 nsec per loop
  ```


* [Import Error: No module named numpy](https://stackoverflow.com/q/7818811/1366033)

  ```bash
  pip install numpy
  ```

* [Add two matrices in python](https://stackoverflow.com/q/6382705/1366033)

  ```py
  import numpy as np
  a = np.array([[5, 4, 5, 4], [4, 5, 6, 8]])
  b = np.array([[1, 2, 4, 5], [5, 6, 6, 2]])
  c = a+b
  print(c)
  # [[ 6  6  9  9]
  #  [ 9 11 12 10]]
  ```

* [Counting positive integer elements in a list with Python list comprehensions](https://stackoverflow.com/q/2900084/1366033)

  use [`numpy.count_nonzero`](https://numpy.org/doc/stable/reference/generated/numpy.count_nonzero.html)

  ```py
  import numpy as np
  xs = [1,0,4,0,7]
  print(np.count_nonzero(xs)) #3
  ```

* [Get number of items from list (or other iterable) with certain condition](https://stackoverflow.com/q/15375093/1366033)

  ```py
  xs = [1,2,3,4]

  print(len([x for x in xs if x > 2]))              # 2
  print(sum([1 if x > 2 else 0 for x in xs]))       # 2
  print(sum([1 for x in xs if x > 2]))              # 2
  print(sum(map(lambda x: x > 2, xs)))              # 2
  print(list(map(lambda x: x > 2, xs)).count(True)) # 2
  ```

  Use [`list.count`](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

* [How can I check if a list index exists?](https://stackoverflow.com/q/29715501/1366033)

  [**LBYL**](https://docs.python.org/2/glossary.html#term-lbyl) - Look before you leap

  ```py
  if 0 <= index < len(myList):
  ```

  [**EAFP**](https://docs.python.org/2/glossary.html#term-eafp) - Easier to ask for forgiveness than permission

  ```py
  try:
      myList[1]
  except IndexError:
      print "Index doesn't exist!"
  ```

* [How to emulate a do-while loop?](https://stackoverflow.com/q/743164/1366033)

  ```py
  while True:
    stuff()
    if fail_condition:
      break
  ```

* [Calculating absolute value in Python](https://stackoverflow.com/q/32540121/1366033)

  use [`abs()`](https://docs.python.org/3/library/functions.html#abs)

  ```py
  abs(-1) # 1
  ```


* [How do I make a flat list out of a list of lists?](https://stackoverflow.com/q/952914/1366033)

  Use nested list comprehension

  ```py
  xss = [[1,2],[2,3]]
  flat_list = [item for xs in xss for item in xs]
  print(flat_list) # [1, 2, 2, 3]
  ```

  Use [`itertools.chain`](https://docs.python.org/3/library/itertools.html#itertools.chain)

  ```py
  import itertools

  xss = [[1,2],[2,3]]
  flat_list = list(itertools.chain(*xss))
  print(flat_list) # [1, 2, 2, 3]
  ```

  Use [`numpy.concatenate`](https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html)

  ```py
  import numpy as np

  xss = [[1,2],[2,3]]
  flat_list = list(np.concatenate(xss))
  print(flat_list) # [1, 2, 2, 3]
  ```

* [How to convert a set to a list in python?](https://stackoverflow.com/q/6593979/1366033)

  ```py
  s = set([1, 2, 3, 4])
  list(s) # [1, 2, 3, 4]
  ```

* [Append values to a set in Python](https://stackoverflow.com/q/3392354/1366033)

  * [`set.add`](https://docs.python.org/3/library/stdtypes.html#frozenset.add)
  * [`set.update`](https://docs.python.org/3/library/stdtypes.html#frozenset.update)

  ```py
  a = set()

  a.add(1)
  a.add(2)
  print(a) # {1, 2}

  a.update([3, 4])
  print(a) # {1, 2, 3, 4}
  ```

* [How to remove multiple elements from a set?](https://stackoverflow.com/q/49348340/1366033)

  use [`difference_update`](https://docs.python.org/3.6/library/stdtypes.html#frozenset.difference_update)

  ```py
  s = set([1,2,3,4])
  s.difference_update([2,3])
  print(s) # {1, 4}
  ```

  ```py
  s = set([1,2,3,4])
  s -= {2,3}
  print(s) # {1, 4}
  ```

* [How to append multiple values to a list in Python](https://stackoverflow.com/q/20196159/1366033)

  Use [`list.extend`](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types)

  ```py
  xs = [1,2]
  xs.extend([3,4])
  print(xs) # [1, 2, 3, 4]
  ```

* [Create list of single item repeated N times](https://stackoverflow.com/q/3459098/1366033)

  ```py
  print([0] * 3)
  # [0, 0, 0]
  ```

* [Get all object attributes in Python?](https://stackoverflow.com/q/192109/1366033)

  use [`vars()`](https://docs.python.org/3/library/functions.html#vars)

  ```py
  class Point:
      def __init__(self, x, y):
          self.x = x
          self.y = y

  p = Point(1,9)
  print(p)       # <__main__.Point object at 0x0000020F75E87700>
  print(vars(p)) # {'x': 1, 'y': 9}
  ```

  use [`dir()`](https://docs.python.org/3/library/functions.html#dir)

  ```py
  def dump(obj):
    for attr in dir(obj):
      print("obj.%s = %r" % (attr, getattr(obj, attr)))

  dump({"name":"Kyle", "age":30})
  ```

  ```py
  dir(__builtins__)
  __builtins__.__dict__
  ```

  * [`inspect`](https://docs.python.org/3/library/inspect.html)


* [What's the difference between the square bracket and dot notations in Python?](https://stackoverflow.com/q/30250282/1366033)

  * The dot operator is used for accessing attributes of any object
  * Square bracket notation is used for accessing members of a collection, whether that's by key in the case of a dictionary or other mapping

  **See Also**: [Different meanings of brackets in Python](https://stackoverflow.com/q/30700603/1366033)

* [AttributeError: 'dict' object has no attribute 'predictors'](https://stackoverflow.com/q/35407560/1366033)

  Use bracket notation, not dot notation

  ```py
  obj = {"a": 1, "b": 2}
  # obj.x # AttributeError: 'dict' object has no attribute 'x'
  obj["a"] # 1
  ```

* [How to use a dot "." to access members of dictionary?](https://stackoverflow.com/q/2352181/1366033)

  ```py
  from types import SimpleNamespace   
  d = {"name":"Kyle", "age":30}
  obj = SimpleNamespace(**d)
  print(obj.name) # "Kyle"
  ```

* [Copy a Python dictionary N times into a list](https://stackoverflow.com/q/72539029/1366033)

  ```py
  [{"x": 0, "y": 0} for _ in range(2)]
  ```

* [How to copy a dictionary and only edit the copy](https://stackoverflow.com/q/2465921/1366033)

  ```py
  dict2 = dict(dict1)
  ```

  ```py
  dict2 = dict1.copy()
  ```

* [How to filter a list](https://stackoverflow.com/q/18217033/1366033)

  ```py
  xs = [1,2,3,4]
  [x for x in xs if x % 2 == 0] # [2, 4]
  ```

  ```py
  xs = [1,2,3,4]
  list(filter(lambda x: x % 2 == 0, xs)) # [2, 4]
  ```

  ```py
  xs = [1,2,3,4]
  def isEven(x):
      return x % 2 == 0
  list(filter(isEven, xs)) # [2, 4]
  ```

  ```py
  xs = [1,2,3,4]
  evens = []
  for x in xs:
      if x % 2 == 0:
          evens.append(x)
  print(evens)
  ```

* [How are tuples unpacked in for loops?](https://stackoverflow.com/q/10867882/1366033)

  ```py
  xs = [("a", 1),("b", 2)]
  for letter, number in xs:
      print(f'{letter=}, {number=}')

  # letter='a', number=1
  # letter='b', number=2
  ```

  **See Also**: [Unpacking in Python: Beyond Parallel Assignment](https://stackabuse.com/unpacking-in-python-beyond-parallel-assignment/)

* [Destructuring-bind dictionary contents](https://stackoverflow.com/q/2955412/1366033)

  ```py
  params = {'a':1,'b':2}
  a, b = params['a'], params['b']
  ```

  use [`operator.itemgetter`](https://docs.python.org/3/library/operator.html#operator.itemgetter)

  ```py
  from operator import itemgetter
  params = {'a': 1, 'b': 2}
  a, b = itemgetter('a', 'b')(params)
  ```

  ```py
  pluck = lambda dict, *args: (dict[arg] for arg in args)
  params = {'a': 1, 'b': 2}
  a, b = pluck(params, 'a', 'b')
  ```

* [Can we have assignment in a condition?](https://stackoverflow.com/q/2603956/1366033)

  [PEP 572 – Assignment Expressions](https://peps.python.org/pep-0572/) AKA "the walrus operator"

  ```py
  def some_func():
      return 2

  if a := some_func():
      print(a)
  ```

* [Create dictionary from list of variables](https://stackoverflow.com/q/9495262/1366033)

  ```py
  from sorcery import dict_of

  a = 1
  b = 2
  c = 3
  d = dict_of(a, b, c)
  print(d)
  # {'a': 1, 'b': 2, 'c': 3}
  ```

* [Manually raising (throwing) an exception in Python](https://stackoverflow.com/q/2052390/1366033)

[Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)

  ```py
  try:
      raise Exception('This is the exception you expect to handle')
  except Exception as error:
      print('Caught this error: ' + repr(error))
  ```

  ```py
  try:
      raise ValueError('Represents a hidden bug, do not catch this')
  except ValueError as e:
      print('Caught this error: ' + repr(error))
  ```

* [Built-in module to calculate the least common multiple](https://stackoverflow.com/q/51716916/1366033)

  [`math.lcm`](https://docs.python.org/3/library/math.html#math.lcm)

  ```py
  import math
  math.lcm(3,6,4) # 12
  ```

* [How to parse data in JSON format](https://stackoverflow.com/q/7771011/1366033)

  ```py
  import json
  data = json.loads('{"one" : "1", "two" : "2", "three" : "3"}')
  print(data['two'])  # 2
  ```

* [What is the most pythonic way to check if an object is a number?](https://stackoverflow.com/q/3441358/1366033)

  ```py
  from numbers import Number
  print(isinstance(2, Number))   # True
  print(isinstance("2", Number)) # False
  ```

* [Test if a variable is a list or tuple](https://stackoverflow.com/q/2184955/1366033)

  Use [`type()`](https://docs.python.org/3/library/functions.html#type)

  ```py
  print(type([1,2]) is list)  # True
  print(type((1,2)) is tuple) # True
  ```

  Use [`typing.List`](https://docs.python.org/3/library/typing.html#typing.List)
  Use [`typing.Tuple`](https://docs.python.org/3/library/typing.html#typing.Tuple)

  ```py
  from typing import List, Tuple
  print(isinstance([1,2], List))  # True
  print(isinstance((1,2), Tuple)) # True
  ```

  Use [`collections.abc.Iterable`](https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable)

  ```py
  import collections
  print(isinstance([1,2], collections.abc.Iterable)) # True
  print(isinstance((1,2), collections.abc.Iterable)) # True
  ```

* [Zip lists in Python](https://stackoverflow.com/q/13704860/1366033)

  Use [`zip()`](https://docs.python.org/3/library/functions.html#zip)

  ```py
  a = [1,2,3]
  b = ["a","b","c"]
  c = zip(a,b)
  print(list(c)) # [(1, 'a'), (2, 'b'), (3, 'c')]
  ```

* [How to enumerate a range of numbers starting at 1](https://stackoverflow.com/q/3303608/1366033)

  Use [`enumerate(iterable, start=0)`](https://docs.python.org/3/library/functions.html?highlight=enumerate#enumerate)

  ```py
  xs = ["a","b","c"]
  list(enumerate(xs, 1))
  # [(1, 'a'), (2, 'b'), (3, 'c')]
  ```

* [Why do some functions have underscores `__` before and after the function name?](https://stackoverflow.com/q/8689964/1366033)

  * `_foo`: Only a convention. A way for the programmer to indicate that the variable is private (whatever that means in Python).
  * `__foo`: This has real meaning. The interpreter replaces this name with _classname__foo as a way to ensure that the name will not overlap with a similar name in another class.
  * `__foo__`: Only a convention. A way for the Python system to use names that won't conflict with user names.

  [What is the meaning of single and double underscore before an object name?](https://stackoverflow.com/q/1301346/1366033)

* [What's the difference between a Python "property" and "attribute"?](https://stackoverflow.com/q/7374748/1366033)

  Properties are a special kind of attribute that have a `__get__`, `__set__`, or `__delete__` method 

  ```py
  class MyClass(object):
      _foo = 0 # A._foo is an attribute

      @property
      def Foo(self): # A.Foo is a property
          return self._foo

      @Foo.setter
      def Foo(self, value):
          self._foo = value

  obj = MyClass()
  obj.Foo = 7
  print(obj.Foo)  # 7
  ```

  [3.3.2.2 Data model > Implementing Descriptors](https://docs.python.org/3/reference/datamodel.html#implementing-descriptors)

* [What's the pythonic way to use getters and setters?](https://stackoverflow.com/q/2627002/1366033)

  use [`property`](https://docs.python.org/3/library/functions.html#property)

  ```py
  class C:
    def __init__(self):
        self._x = None

    def getx(self):
        return self._x

    def setx(self, value):
        self._x = value

    def delx(self):
        del self._x

    x = property(getx, setx, delx, "I'm the 'x' property.")
  ```

  Using [decorator](https://docs.python.org/3/glossary.html#term-decorator)

  ```py
  class C:
    def __init__(self):
        self._x = None

    @property
    def x(self):
        """I'm the 'x' property."""
        return self._x

    @x.setter
    def x(self, value):
        self._x = value

    @x.deleter
    def x(self):
        del self._x
  ```

  Use Attribute if you don't care about controller accessor / setter

  ```py
  class C:
    def __init__(self):
        self.X = None
  ```

* [What do `__init__` and `self` do in Python?](https://stackoverflow.com/q/625083/1366033)

  `self` - instance of the object itself
  `__init__` - class constructor (along with `__new__`)

  ```py
  class Point:
      def __init__(self, x, y):
          self.x = x
          self.y = y

  p = Point(1,2)

  print(p.x) # 1
  print(p.y) # 2
  ```

* [What is the difference between old style and new style classes in Python?](https://stackoverflow.com/q/54867/1366033)

  New-style classes inherit from object, or from another new-style class.

  ```py
  class NewStyleClass(object): pass
  class AnotherNewStyleClass(NewStyleClass): pass
  ```

  Old-style classes don't.

  ```py
  class OldStyleClass(): pass
  ```

* [Finding the index of an item in a list](https://stackoverflow.com/q/176918/1366033)

  Use [`list.index`](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

  ```py
  xs = ["a", "b", "c"]
  i = xs.index("b")
  print(i) # 1
  ```

  Use enumerate plus list comprehension

  ```py
  xs = ["a", "b", "c"]
  indices = [i for i, x in enumerate(xs) if x == "b"]
  print(indices) # [1]
  ```

* [Fastest way to check if a value exists in a list](https://stackoverflow.com/q/7571635/1366033)

  use [`in`](https://docs.python.org/3/reference/expressions.html#in) membership test operation

  ```py
  "b" in ["a", "b", "c"] # true
  ```

  **See Also**: [Common Sequence Operations](https://docs.python.org/3/library/stdtypes.html#common-sequence-operations)

* [How can I multiply all items in a list together with Python?](https://stackoverflow.com/q/13840379/1366033)

  ```py
  from math import prod

  prod([2,3]) # 6
  ```

* [Finding and replacing elements in a list](https://stackoverflow.com/q/2582138/1366033)

  Create new list

  ```py
  xs = [1, 4, 3]
  [2 if x == 4 else x for x in xs]
  # [1, 2, 3]
  ```

In place

  ```py
  xs = [1, 4, 3]
  for i, n in enumerate(xs):
      if n == 4:
          xs[i] = 2
  print(xs)
  # [1, 2, 3]
  ```

* [How to create a matrix with negative index position?](https://stackoverflow.com/q/53494616/1366033)

  ```py
  a={i:0 for i in range(-3,3)}
  ```

  ```py
  a={(i,j):0 for i in range(-3,3) for j in range(-3,3)}
  ```

