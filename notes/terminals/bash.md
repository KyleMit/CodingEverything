# Bash

* Bash - Bourne Again SHell

## Links

[Introduction to Bash, VIM & Regex with Substack (James Halliday)](https://frontendmasters.com/courses/bash-vim-regex/)

## Bash Reference Manual

* [Single Page](https://www.gnu.org/software/bash/manual/bash.html)
* [Table of Contents](https://www.gnu.org/software/bash/manual/html_node/index.html)

### 3.4.1 Shell Parameters

* 3.4 [Shell Parameters](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html)
  * 3.4.1 [Positional Parameters](https://www.gnu.org/software/bash/manual/html_node/Positional-Parameters.html)
  * 3.4.2 [Special Parameters](https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html)

### 3.2.5 Compound Commands

* [3.2.5 Compound Commands](https://www.gnu.org/software/bash/manual/html_node/Compound-Commands.html#Compound-Commands)
  * [3.2.5.2 Conditional Constructs](https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html#Conditional-Constructs)

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

* [How to change history size](https://askubuntu.com/q/307541/349745)

  ```bash
  HISTSIZE=20000
  HISTFILESIZE=20000
  ```

* [In the shell, what does “ 2>&1 ” mean?](https://stackoverflow.com/q/818255/1366033)

  ```bash
  #define STDIN_FILENO    0   /* Standard input.  */
  #define STDOUT_FILENO   1   /* Standard output.  */
  #define STDERR_FILENO   2   /* Standard error output.  */
  ```

  * `>&` as redirect merger operator

  ```bash
  perl test.pl 1>out.log 2>err.log
  ```



* [How to read a file into a variable in shell?](https://stackoverflow.com/q/7427262/1366033)

  ```bash
  value=`cat config.txt`
  echo "$value"

  value=$(<config.txt)
  echo "$value"
  ```


* [store stderr in a variable](https://stackoverflow.com/q/3130375/1366033)


  ```bash
  VAR=$((your-command-including-redirect) 2>&1)
  ```

* [How can I store the return value and/or output of a command in a variable?](http://mywiki.wooledge.org/BashFAQ/002)


  ```bash
  output=$(command)      # stdout only; stderr remains uncaptured
  output=$(command 2>&1) # both stdout and stderr will be captured
  ```

* [Redirect Windows cmd stdout and stderr to a single file](https://stackoverflow.com/q/1420965/1366033)

  ```bash
  dir > a.txt 2>&1
  ```

* [Proper way of printing out an error message](https://stackoverflow.com/a/12700524/1366033)

  ```bash
  echo "my error" 1>&2
  ```


* [Replace one substring for another string in shell script](https://stackoverflow.com/q/13210880/1366033)


  ```bash
  firstString="I love Susan and Marry"
  secondString="Sara"
  echo "${firstString/Susan/$secondString}"
  # prints 'I love Sara and Marry'
  ```


* [Can I use sed to manipulate a variable in bash?](https://stackoverflow.com/q/6744006/1366033)


  ```bash
  website="https://stackoverflow.com/a/58899829/658497"
  website=$(sed 's|/|\\/|g' <<< $website)
  echo "${website//\//\\/}"
  echo $website | sed 's/\//\\\//g'
  echo $website | sed 's|/|\\/|g'
  ```


* [What does this `${@:2}` mean in shell scripting](https://unix.stackexchange.com/q/92978/128893)


* [Accessing bash command line args $@ vs $*](https://stackoverflow.com/a/28099707/1366033)

  | Syntax |     Effective result      |
  | :----: | :-----------------------: |
  |  `$*`  |     `$1 $2 $3 … ${N}`     |
  |  `$@`  |     `$1 $2 $3 … ${N}`     |
  | `"$*"` |    `"$1c$2c$3c…c${N}"`    |
  | `"$@"` | `"$1" "$2" "$3" … "${N}"` |
