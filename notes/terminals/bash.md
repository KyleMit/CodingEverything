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

* [`ls`](https://man7.org/linux/man-pages/man1/ls.1.html)
* [`wc`](https://docs.oracle.com/cd/E88353_01/html/E37839/wc-1.html)

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

* ["Permission Denied" trying to run Python on Windows 10](https://stackoverflow.com/a/64960283/1366033)

   Happens because of App Execution Aliases

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

  **Related**: [How do I set a variable to the output of a command in Bash?](https://stackoverflow.com/q/4651437/1366033)

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


* [Print all commands in a bash function](https://superuser.com/q/1382735/180163)

  ```bash
  FuncName()
  {
      set -x ;# Enable tracing on entry

      ... (function code) ...

      set +x ;# Disable tracing on exit
  }
  ```

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


* [How to sort first directories then files etc… when using “ls” in Unix](https://superuser.com/q/109537/180163)

```bash
ls --color -h --group-directories-first
```

* [How to reload .bashrc settings without logging out and back in again?](https://stackoverflow.com/q/2518127/1366033)

  ```bash
  source ~/.bashrc
  ```

* [How to find all files with the same extension within a directory](https://askubuntu.com/q/333710/349745)

  ```bash
  find . -type f -name "*.txt"
  ```

* [How to use find command to search for multiple extensions](https://unix.stackexchange.com/q/15308/128893)

  ```bash
  find . -name '*.jpg' -o -name '*.png'
  ```

* [How To Count All The Files Extension Recursively In Linux?](https://www.2daygeek.com/how-to-count-files-by-extension-in-linux/)

  ```bash
  find . -type f | sed -n 's/..*\.//p' | sort | uniq -c
  #  71 png
  #  37 svg
  #   1 txt
  ```

* [Is there a directory history for bash?](https://superuser.com/q/299694/180163)

  * [Is it possible to have directory aware bash history](https://superuser.com/q/1156823/180163)

* [Delete node_modules folder recursively from a specified path using command line](https://stackoverflow.com/q/42950501/1366033)

  Bash

  ```bash
  find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
  ```

  Or [NP Kill](https://www.npmjs.com/package/npkill)

  ```bash
  npx npkill
  ```

* [Posix Manpage - Find Command](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/find.html#:%7E:text=If%20no%20expression%20is%20present)

  > If the given expression does not contain any of the primaries `-exec`, `-ls`, `-ok`, or `-print`, the given expression is effectively replaced by:
  > ( given_expression ) `-print`



* [How to use `-prune` option of `find` in sh?](https://stackoverflow.com/q/1489277/1366033)

  ```bash
  find / -name "*.php" -print -o -path '/media' -prune
  |<--       Include      --> or <--    Exclude    -->|
  ```

* [Redirect stderr to stdout but keep errors being written to stderr](https://stackoverflow.com/q/34820975/1366033)

  > Console (terminal) applications - whether on Windows or on Unix-like platforms - only have two output streams at their disposal:
  >
  > * `stdout` (**standard output**) - this is where data ("return values") goes.
  > * `stderr` (**standard error**) - this is where error messages and anythings else that isn't data goes, such as progress and status information.
  >
  > Therefore, you cannot and shouldn't infer success vs. failure from the presence of stderr output.
  > Instead, you must rely solely on an application's process exit code:
  >
  > * `0` - indicates success
  > * `any nonzero value` - indicates failure


* [What is the difference between `grep`, `egrep`, and `fgrep`?](https://unix.stackexchange.com/q/17949/128893)

  * `egrep` is 100% equivalent to [`grep -E`](https://www.gnu.org/software/grep/manual/grep.html#index-matching-extended-regular-expressions)
  * `fgrep` is 100% equivalent to [`grep -F`](https://www.gnu.org/software/grep/manual/grep.html#index-matching-fixed-strings)


* [How to tell bash that the line continues on the next line](https://stackoverflow.com/q/3871332/1366033)

  The character is a backslash `\`

  From the bash manual [Escape Character](https://www.gnu.org/software/bash/manual/html_node/Escape-Character.html)

  > If a `\newline` pair appears, and the backslash itself is not quoted, the `\newline` is treated as a line continuation
  > that is, it is removed from the input stream and effectively ignored


* [Sort and count number of occurrence of lines](https://unix.stackexchange.com/a/263849/128893)


  ```bash
  cat ~/.bash_history | sort | uniq -c | sort -nr | head 10
  ```

* [How do I time a specific command?](https://unix.stackexchange.com/q/52313/128893)


  [`time` (Man Page)](https://ss64.com/bash/time.html)

  ```bash
  time wget -q -O /dev/null https://unix.stackexchange.com/
  ```

* [View history of commands run in terminal - Ask Ubuntu](https://askubuntu.com/q/624848/349745)


  [`history` (Man Page)](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html)

  ```bash
  cat ~/.bash_history
  history 10
  ```


* [Last command and execution time](https://askubuntu.com/q/548154/349745)

* [Get program execution time in the shell](https://stackoverflow.com/a/39924936/1366033)

  * [paypal/gnomon](https://github.com/paypal/gnomon) - Utility to annotate console logging statements with timestamps and find slow processes

  ```bash
  npm install -g gnomon
  dotnet build | gnomon --medium=1.0 --high=4.0 --ignore-blank --real-time=100
  ```

* Top 10 Commands

  ```bash
  cat ~/.bash_history | sort | uniq -c | sort -nr | head -n 10
  ```

* [How to make `ls` color its output by default](https://superuser.com/q/665274/180163)

  ```bash
  alias ls='ls --color=auto'
  ```

* [How to run 'sudo' command in windows](https://stackoverflow.com/q/9652720/1366033)


  ```bash
  winget install --id=gerardog.gsudo -e
  ```

* [Remove specific word in variable](https://unix.stackexchange.com/q/311758/128893)

  ```bash
  echo "origin/main" | sed 's/origin\///'          # "main"
  echo "origin/main" | cut -c 8-                   # "main"
  echo "origin/main" | awk '{ print substr($0,8)}' # "main"
  ```

* [How to find directory of some command?](https://stackoverflow.com/q/2869100/1366033)

  ```bash
  type git
  type -a git
  ```

  or

  ```bash
  which git
  which -a git
  ```

* [Why not use "which"? What to use then?](https://unix.stackexchange.com/q/85249/128893)


* [How can I get the current working directory?](https://unix.stackexchange.com/q/188182/128893)

  ```bash
  echo "$PWD"
  ```

* [Is it better to use $(pwd) or $PWD?](https://unix.stackexchange.com/q/173916/128893)

  One is a command, one is a variable

* [Piping output from Git Bash to clipboard](https://stackoverflow.com/q/18880062/1366033)

  ```bash
  git branch | clip
  ```

* [How to ignore xargs commands if stdin input is empty?](https://stackoverflow.com/q/8296710/1366033)

  [`xargs(1)`](https://linux.die.net/man/1/xargs)

  ```bash
  --no-run-if-empty
  -r
  ```

  > If the standard input does not contain any nonblanks, do not run the command.  Normally, the command is run once even if there is no input.  This option is a GNU extension.

* [Include additional files in .bashrc](https://stackoverflow.com/q/4952177/1366033)

  ```bash
  test -f ~/.kyle.bashrc && . ~/.kyle.bashrc
  ```
  