# Terminals


## Term-inalogy

[What's the difference between a console, a terminal, and a shell?](hanselman.com/blog/WhatsTheDifferenceBetweenAConsoleATerminalAndAShell.aspx)

* **TTY** - teletypewriter
* **PTY** - pseudo-terminal
* **ConPTY** - pseudo-console


## Standard Streams

[Standard streams](https://en.wikipedia.org/wiki/Standard_streams)

> The three input/output (I/O) connections are called:
>
> * **`stdin`** - Standard Input
> * **`stdout`** - Standard Output
> * **`stderr`** - Standard Error

## CLI Syntax

* command
* argument
* long flag
* short flag
* flag argument

## Stackable Short Flags

The following are equivalent:

```bash
ls -a -t
ls -at
```



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

* CMD
* PS
* Bash
  * Dash
  * Zsh
  * Fsh

## Bash

### Syntax

* [if...elif...fi](https://ss64.com/bash/if.html)

* [what language uses `fi`](https://stackoverflow.com/a/41537459/1366033)

* [Add to your environment with source](https://opensource.com/article/20/6/bash-source-command)

* [Difference between `${}` and `$()` in Bash](https://stackoverflow.com/q/27472540/1366033)

  * `$(command)` - command substitution
  * `$var` - variable substitution / expansion
  * `${var}text` - allows for variable substitution with disambiguation

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


## ZSH

* [Zsh - Z Shell](https://www.zsh.org/)
  * [Github](https://github.com/zsh-users/zsh)
* [Oh My Zsh](https://ohmyz.sh/)
  * [Github](https://github.com/ohmyzsh/ohmyzsh)

### Plugins

[Plugins Directory](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins)

### Community

[Twitter](https://twitter.com/ohmyzsh)
[Discord](https://discord.com/invite/ohmyzsh)

### Setup Oh My Zsh on Windows

[How to Install Oh My Zsh! on Windows 10 Home Edition - DEV Community 👩‍💻👨‍💻](https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2)

```bash
# always update / upgrade before installing
sudo apt-get update
sudo apt-get upgrade
# install z shell
sudo apt-get install zsh
zsh
# install curl
sudo apt-get install curl
# install oh my zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# clone theme repo into custom themes folder
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
# link theme to themes directory
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
# open zsh config
code ~/.zshrc
# install fira code
sudo apt install fonts-firacode
# run zinit
sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"
# install plugins
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

### Spaceship Theme

```ini
ZSH_THEME="spaceship"

SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

### Z Shell configuration function for new users


### zsh startup files

* `~/.zshenv`
* `~/.zprofile`
* `~/.zshrc`
* `~/.zlogin`
* `~/.histfile`

You can:

* `q` - Quit and do nothing.
* `0` - Exit, creating the file `~/.zshrc`
* `1` - Continue to the main menu.
* `2` - Populate your `~/.zshrc` with external config


## Questions

* [How to cycle through reverse-i-search in BASH?](https://unix.stackexchange.com/q/73498/128893)

  <kbd>Ctrl</kbd> + <kbd>R</kbd>


* [How do I install and use curl on Windows?](https://stackoverflow.com/a/16216825/1366033)

  ```bash
  choco install curl
  ```

* [Install `telnet` command in Windows 10](https://stackoverflow.com/a/64744406/1366033)

  ```bash
  dism /online /Enable-Feature /FeatureName:TelnetClient
  ```

* [How do I exit telnet?](https://superuser.com/questions/486496/how-do-i-exit-telnet)

   1. <kbd>Ctrl</kbd> + <kbd>]</kbd>
   2. Then type `quit`

* [How do I clear/delete the current line in terminal?](https://stackoverflow.com/q/9679776/1366033)

  * <kbd>Ctrl</kbd> + <kbd>W</kbd> - Delete Word
  * <kbd>Ctrl</kbd> + <kbd>U</kbd> - Delete Line


* [Why is $(...) preferred over `...` (backticks)?](http://mywiki.wooledge.org/BashFAQ/082)

  * `...` is the legacy syntax
  * Backslashes (\) inside backticks are handled in a non-obvious manner
  * Nested quoting inside $() is far more convenient
  * It makes nesting command substitutions easier


