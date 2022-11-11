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

* Library
  * [Typing](https://docs.python.org/3/library/typing.html)
  * [Built-in Constants](https://docs.python.org/3/library/constants.html)
  * [doctest](https://docs.python.org/3/library/doctest.html)
  * [Built-in Types](https://docs.python.org/3/library/stdtypes.html#)
    * [Numbers](https://docs.python.org/3/library/stdtypes.html#typesnumeric)

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

