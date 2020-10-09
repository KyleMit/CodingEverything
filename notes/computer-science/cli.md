# Command Line Interface

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
