# Terminals

## Syntax

* command
* argument
* long flag
* short flag
* flag argument

## Term-inalogy

[What's the difference between a console, a terminal, and a shell?](hanselman.com/blog/WhatsTheDifferenceBetweenAConsoleATerminalAndAShell.aspx)

* **TTY** - teletypewriter
* **PTY** - pseudo-terminal
* **ConPTY** - pseudo-console

## Stackable Short Flags

The following are equivalent:

```bash
ls -a -t
ls -at
```


## Standard Streams

[Standard streams](https://en.wikipedia.org/wiki/Standard_streams)

> The three input/output (I/O) connections are called:
>
> * **`stdin`** - Standard Input
> * **`stdout`** - Standard Output
> * **`stderr`** - Standard Error

## Option / Parameter / Flag / Switch

* Stack Exchange
  * [Is there a difference between a command line flag and a command line option? - Super User](https://superuser.com/questions/1070059/is-there-a-difference-between-a-command-line-flag-and-a-command-line-option)
  * [linux - What's the difference between a flag, an option, and an argument? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/285575/whats-the-difference-between-a-flag-an-option-and-an-argument)
  * [bash - Difference between terms: "option", "argument", and "parameter"? - Stack Overflow](https://stackoverflow.com/questions/36495669/difference-between-terms-option-argument-and-parameter)
* References
  * [CLI Flags Explained · oclif: The Open CLI Framework](https://oclif.io/blog/2019/02/20/cli-flags-explained)
  * [Command-line interface - Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
  * [Argument Syntax (The GNU C Library)](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html)
  * [Documenting command-line syntax](https://developers.google.com/style/code-syntax)
  * [Shell style guide for Google-originated open-source projects](https://google.github.io/styleguide/shellguide.html)
* Examples
  * [ls(1) - Linux manual page](https://man7.org/linux/man-pages/man1/ls.1.html)
  * [dir | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir)
  * [cp(1) - Linux manual page](https://man7.org/linux/man-pages/man1/cp.1.html)
  * [copy | Microsoft Docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/copy)

## Options

* Bash
* CMD
* PS

## Bash

### Syntax

* [if...elif...fi](https://ss64.com/bash/if.html)
* [what language uses `fi`](https://stackoverflow.com/a/41537459/1366033)
* [Add to your environment with source](https://opensource.com/article/20/6/bash-source-command)

### Gitbash

* Git for Windows - C:\Program Files\Git\bin\bash.exe
* Git-Bash        - C:\Program Files\Git\git-bash.exe
* Bash            - C:\Program Files\Git\usr\bin
* mintty.exe      - C:\Program Files\Git\usr\bin\mintty.exe
  * MSYS2 Terminal
  * Mingw
  * msysgit
* GNU / GnuWin32 / Cygwin / POSIX-compliant

<!-- spellchecker: disable -->

* `C:\Windows\System32\cmd.exe`
* `C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.0.1401.0_x64__8wekyb3d8bbwe\OpenConsole.exe`

<!-- spellchecker: enable -->


## ZSH

[ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)



### whoami

* [cmd](https://ss64.com/nt/whoami.html) | [ms docs](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/whoami)
* [osx](https://ss64.com/osx/id.html)
* [bash](https://ss64.com/bash/whoami.html) | [gnu docs](https://www.gnu.org/software/coreutils/manual/html_node/whoami-invocation.html)
* [ps](https://stackoverflow.com/q/2085744/1366033)


### check if admin

**CMD** - [how to check for admin rights](https://stackoverflow.com/q/4051883/1366033)

**GitBash** - [How to check if running as **admin**?](https://stackoverflow.com/q/43650595/1366033)

```bash
if [[ $(sfc 2>&1 | tr -d '\0') =~ SCANNOW ]]; then
    echo Administrator;
else
    echo $USERNAME;
fi
```

**Bash** - [How to check if running as **root**?](https://stackoverflow.com/q/18215973/1366033)

```bash
id -u
```

```bash
if [[ $(id -u) -ne 0 ]] ; then echo "Please run as root" ; fi
```

## App Execution Aliases

<!-- spellchecker: disable -->

* `C:\Users\kylemit\AppData\Local\Microsoft\WindowsApps`
* `C:\Program Files\WindowsApps\`
* `C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.0.1401.0_x64__8wekyb3d8bbwe`

<!-- spellchecker: enable -->


## CMD

[How do I install and use curl on Windows?](https://stackoverflow.com/a/16216825/1366033)

```bash
choco install curl
```

* [Install telnet client]

```bash
dism /online /Enable-Feature /FeatureName:TelnetClient
```

* [How do I exit telnet?](https://superuser.com/questions/486496/how-do-i-exit-telnet)

   1. <kbd>Ctrl</kbd> + <kbd>]</kbd>
   2. Then type `quit`

* [Install `telnet` command in Windows 10](https://stackoverflow.com/a/64744406/1366033)

## Run Bash As Admin

* [How to run Git Bash as an admin (ALWAYS)](https://stackoverflow.com/q/55002170/1366033)
  * [How To Run Programs As Administrator In Windows 10](https://www.itechtics.com/run-programs-administrator/)
  * [How can I always run the command prompt as administrator?](https://superuser.com/q/453409/180163)
  * [How to create a “run as admin” bash shortcut](https://superuser.com/q/1077337/180163)
  * [How do I open a new git bash terminal window at my current location in windows?](https://superuser.com/q/1314743/180163)

* [“Permission Denied” trying to run Python on Windows 10](https://stackoverflow.com/q/56974927/1366033)
  * [Cannot install pylint in Git Bash on Windows (Windows Store)](https://stackoverflow.com/q/57447363/1366033)
  * [Permission Denied error: Python 3.8 on Windows Gitbash](https://stackoverflow.com/q/59487242/1366033)
  * [How to fix “Permission Denied” in Git Bash in Windows 10?](https://superuser.com/q/1532831/180163)

* [Permission Error on all App Execution Aliases in git-bash](https://github.com/git-for-windows/git/issues/2675)
  * [Permission Denied when running from bash #228](https://github.com/microsoft/winget-cli/issues/228)
