# Bash

* Bash - Bourne Again SHell

## Commands

### Xargs

[**`xargs`**](https://en.wikipedia.org/wiki/Xargs)

Some commands such as `grep` and `awk` can take input either as command-line arguments or from the standard input.
However, others such as `cp` and `echo` can only take input as arguments, which is why `xargs` is necessary.

## Bash for Windows

* [Difference between GNUWin32 and cygwin](https://stackoverflow.com/q/10712550/1366033)
* [Difference between UnxUtils and GnuWin32?](https://superuser.com/q/168202/180163)

* [Cygwin](http://www.cygwin.com/)
* [CoreUtils for Windows](http://gnuwin32.sourceforge.net/packages/coreutils.htm)
* [Coreutils - GNU core utilities](https://www.gnu.org/software/coreutils/)

* [choco Cygwin 3.1.6](https://chocolatey.org/packages/Cygwin)
* [choco GnuWin32 CoreUtils](https://chocolatey.org/packages/gnuwin32-coreutils.portable)

```bash
choco install gnuwin32-coreutils.portable
```

## Questions

* [Create .zip folder from the command line](https://superuser.com/q/201371/180163)

    ```bash
    alias zip="tar.exe"
    ```

* [“Permission Denied” trying to run Python on Windows 10](https://stackoverflow.com/a/64960283/1366033)

    ```bash
    function python { cmd.exe /c "python $1 $2 $3";}
    ```

* [How to mkdir only if a directory does not already exist?](https://stackoverflow.com/q/793858/1366033)

    ```bash
    mkdir -p foo
    ```

* [How to remove all files from a directory?](https://askubuntu.com/questions/60228/how-to-remove-all-files-from-a-directory)

    ```bash
    rm -r /path/to/directory/*
    ```

* [Run ./script.sh vs bash script.sh - permission denied](https://unix.stackexchange.com/q/203371/128893)

    ```bash
    chmod +rx script.sh
    ./script.sh
    ```

* [Delete all files with a particular extension in a particular folder?](https://unix.stackexchange.com/q/42020/128893)

    ```bash
    rm /some/dir/*.xvg
    ```

* [Execute command on all files in a directory](https://stackoverflow.com/q/10523415/1366033)

    ```bash
    # one liner
    for i in src/*; do echo "$i"; done

    # formatted
    for file in src/*
    do
        echo $file
    done

    #xargs
    find . | xargs echo
    ```

* [`ls` vs `find` vs glob](https://stackoverflow.com/q/13830036/1366033)

  find is recursive by default; ls isn't.  use glob for everything else

* [How can I assign the output of a command to a shell variable?](https://unix.stackexchange.com/q/16024/128893)

  ```bash
  result=$(echo 'hello')
  echo $result
  ```

* [recursive mkdir](https://unix.stackexchange.com/questions/49263/recursive-mkdir)

  * [How to create nonexistent subdirectories recursively using Bash?](https://stackoverflow.com/q/1731767/1366033)
  * use `-p, --parents`

  ```bash
  mkdir -p foo/bar/zoo
  ```

* [What does `-ex` option used in bash | #!/bin/bash -ex mean](https://stackoverflow.com/q/38342992/1366033)

    ```bash
    #!/bin/bash -ex
    ```

    ```bash
    #!/bin/bash
    set -ex
    ```

  * `-e` - Exit immediately if a command exits with a non-zero status
  * `-x` - Print commands and their arguments as they are executed


* [Shell script to open a URL](https://stackoverflow.com/q/38147620/1366033)

  * **Linux** - `xdg-open https://stackoverflow.com`
  * **macOS** - `open https://stackoverflow.com`
  * **Windows** - `start https://stackoverflow.com`
  * **Python** - `python -m webbrowser https://stackoverflow.com`

* [How do I run multiple background commands in bash in a single line?](https://stackoverflow.com/q/14612371/1366033)

    ```bash
    (sleep 2 &) && (sleep 3 &)
    ```

* [Copy files from one directory into an existing directory](https://stackoverflow.com/q/3643848/1366033)

    ```bash
    cp -R t1/. t2/
    ```

* [CP Command Prompt Windows 7 not recognized](https://stackoverflow.com/q/21734377/1366033)

  * Install Cygwin or CoreUtils

* [How to really clear the terminal?](https://askubuntu.com/q/25077/349745)

  Removes everything from screen while preserving scrollback buffer

  `clear` or <kbd>Ctrl</kbd> + <kbd>L</kbd>

  re-initialize the terminal, but won't re-instantiate the shell

  `reset` or `tput reset`

* [Why does the `reset` command include a delay?](https://unix.stackexchange.com/q/335648/128893)



* UUOC - Useless Use of Cat

  * [Useless Use of Cat Award](http://porkmail.org/era/unix/award.html#echo)
  * [shell - Useless use of cat? - Stack Overflow](https://stackoverflow.com/questions/11710552/useless-use-of-cat)
  * [cat (Unix) - Wikipedia](https://en.wikipedia.org/wiki/Cat_(Unix)#Useless_use_of_cat)


* [How can I count all the lines of code in a directory recursively?](https://stackoverflow.com/q/1358540/1366033)

  ```js
  find . -name '*.js' | xargs wc -l
  ```
