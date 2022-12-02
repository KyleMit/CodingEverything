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
  sorted(['10','3','2'])
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
  temp = file.read().splitlines()
  ```

* [String Interpolation](https://docs.python.org/3/tutorial/inputoutput.html#fancier-output-formatting)

  * [7.1.1 Formatted String Literals](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings)
  * [PEP 498 – Literal String Interpolation](https://peps.python.org/pep-0498/)

  ```py
  name = "Kyle"
  f'My name is {name}' # 'My name is Kyle'
  ```

  [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format)

  ```py
  name = "Kyle"
  print('My name is {}'.format(name))        # 'My name is Kyle'
  print('My name is {n1}'.format(n1 = name)) # 'My name is Kyle'
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
