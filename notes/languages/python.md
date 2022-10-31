# Python

## Links

* [Learn Python](https://exercism.org/tracks/python/)

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

