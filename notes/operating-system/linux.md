# Linux

## Kernel

* [Linux](https://www.linux.org/)
* [Debian](https://www.debian.org/)

## Acronyms

* **GNOME** - GNU Network Object Model Environment - open-source desktop environment

## Desktop

* [GNOME](https://www.gnome.org/gnome-3/)
* [Unity8](https://unity8.io/)
* [XFCE](https://www.xfce.org/)
* [KDE](https://kde.org/)
* [Mate](https://mate-desktop.org/)

## Distros

* Debian
  * [Ubuntu](https://ubuntu.com/)
    * [Yaru Theme](https://github.com/ubuntu/yaru)
    * [Manjaro](https://manjaro.org/)
    * [Elementary OS](https://elementary.io/)
    * [Linux Mint](https://www.linuxmint.com/)
  * MX Linux
* Redhat
  * CentOS
  * Fedora
  * Arch Linux
  * Tails
  * Gentoo Linux
  * Zorin OS
  * OpenSUSE

## Terminal

* xterm
* Gnome Konsole
* Shell
* Tilda
* Guake
* Cool Retro Terminal
* Terminology
* Terminator
* Sakura
* [tmux](https://github.com/tmux/tmux/wiki)

## Shell

* bash
* fish
* zsh
* ksh
* sh
* tsch

## File Managers

* Nautilus
* Midnight Commander
* Konqueror
* Dolphin
* Krusader
* Thunar
* PCmanFM
* XFE

## Text Editors

* [nano](https://www.nano-editor.org/dist/latest/cheatsheet.html)
* [Vim](https://devhints.io/vim)
* [emacs](https://www.gnu.org/software/emacs/)

## POSIX

* [**POSIX**](https://en.wikipedia.org/wiki/POSIX) - Portable Operating System Interface

> a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems.

[POSIX-compliant operating system](https://superuser.com/q/322601/180163)

### Errors

[Docs > Error](https://pubs.opengroup.org/onlinepubs/9699919799/functions/V2_chap02.html#tag_15_03)

* `EACCES` - Permission denied. An attempt was made to access a file in a way forbidden by its file access permissions.
* `EPERM` - Operation not permitted. An attempt was made to perform an operation limited to processes with appropriate privileges or to the owner of a file or other resource.

## Ubuntu


### Ubuntu Versions

GNU > Linux > Debian > GNOME > Ubuntu

> using the year and month of the release as a version number


* [Ubuntu version history](https://en.wikipedia.org/wiki/Ubuntu_version_history)
  * **Xenial** Xerus (2016)
  * **Bionic** Beaver (2018)
  * **Focal** Fossa(2020)
  * **Groovy** Gorilla (2020)
  * **Hirsute** Hippo (2021)

  ![ubuntu version history](/assets/notes/linux/ubuntu-version-history.png)

### Ubuntu Display Manager


[gdm3 vs lightdm](https://askubuntu.com/q/1004461/349745)

## Terminal Keyboard Shortcuts

* Ctrl + Shift + N => New terminal window
* Ctrl + Shift + T => New terminal tab
* Ctrl + C or Ctrl + Z => Kill the current process
* Ctrl + R => Reverse search
* Ctrl + U => Delete line (before cursor)
* Alt + D => Delete line (after cursor)
* Ctrl + W => Delete the word (before cursor)
* Ctrl + K => Delete the word (after cursor)
* Ctrl + Y => Undo erased content
* Ctrl + L => Clear console
* Ctrl + Shift + C => Copy
* Ctrl + Shift + V => Paste the content from the clipboard
* Alt + F => Move forward or Ctrl + Right Arrow
* Alt + B => Move one word backward or Ctrl + Left Arrow
* Arrow Up / Down => Browse commands
* Shift + PgUp/PgDn => Scroll through console
* Ctrl + PgUp => Switch to left tab
* Ctrl + PgDn => Switch to right tab
* Ctrl + Shift + PgUp => Move current tab to left
* Ctrl + Shift + PgDn => Move current tab to right
* Ctrl + D => Close terminal
* Ctrl + P => Previous executed command or Up Arrow
* Ctrl + N => Next executed command or Down Arrow
* Ctrl + J => Enter
* Ctrl + Alt + T => Open terminal
* Ctrl + Shift + Q => Close all
* Super + RowUp => Maximize
* Super + RowDown => Minimize
* Ctrl + Shift + F => Find
* Alt + C => Capitalizes the word next to the cursor and move to end of the word
* Tab => To get suggestions


## File System Permissions

[File-system permissions](https://en.wikipedia.org/wiki/File-system_permissions)

| Symbolic notation | Numeric notation |                                      English                                      |
|:-----------------:|:----------------:|:---------------------------------------------------------------------------------:|
|    `----------`   |      `0000`      | no permissions                                                                    |
|    `-rwx------`   |      `0700`      | read, write, & execute only for owner                                             |
|    `-rwxrwx---`   |      `0770`      | read, write, & execute for owner and group                                        |
|    `-rwxrwxrwx`   |      `0777`      | read, write, & execute for owner, group and others                                |
|    `---x--x--x`   |      `0111`      | execute                                                                           |
|    `--w--w--w-`   |      `0222`      | write                                                                             |
|    `--wx-wx-wx`   |      `0333`      | write & execute                                                                   |
|    `-r--r--r--`   |      `0444`      | read                                                                              |
|    `-r-xr-xr-x`   |      `0555`      | read & execute                                                                    |
|    `-rw-rw-rw-`   |      `0666`      | read & write                                                                      |
|    `-rwxr-----`   |      `0740`      | owner can read, write, & execute; group can only read; others have no permissions |


* [chmod Man Page with examples and calculator](https://ss64.com/bash/chmod.html)
* [How-To: Set permissions in bash](https://ss64.com/bash/syntax-permissions.html)
* [Node > File system > File Modes](https://nodejs.org/api/fs.html#fs_file_modes)

* [How to recursively chmod a folder?](https://superuser.com/q/1325221/180163)

  ```none
  -R, --recursive
  change files and directories recursively
  ```

## Command Line

* [The Linux command line for beginner](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
* [Beginner Geek: How to Start Using the Linux Terminal](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/)

## File Manager

* [How to show hidden folders in File Manager](https://askubuntu.com/q/470837/349745)
* [How to open Nautilus (File Manager) preferences?](https://askubuntu.com/q/861333/349745)
* [Ubuntu 14.04 Nautilus has no menu - File, Edit etc. don't exist](https://askubuntu.com/q/458281/349745)
* [Show Menubar in File Manager - XUbuntu](https://askubuntu.com/q/1010580/349745)


## Manpages

* **Man** - Manual


```bash
# see overview
man man
# open docs
man 1 find
man find
```

### Directories

* [What does the number in parentheses shown after Unix command names in manpages mean?](https://stackoverflow.com/q/62936/1366033)
* [What do the numbers in a man page mean?](https://unix.stackexchange.com/q/3586/128893)

1. User Commands
2. System Calls
3. C Library Functions
4. Devices and Special Files
5. File Formats and Conventions
6. Games et. al.
7. Miscellanea
8. System Administration tools and Daemons



## Package Managers

* APT - Advanced Packaging Tool
* DPKG – Debian Package Management System
* Aptitude Package Manager
* Synaptic Package Manager
* RPM (Red Hat Package Manager)
* YUM - Yellowdog Updater, Modified

## Apt Package Manager

[`apt` overview](http://manpages.ubuntu.com/manpages/trusty/en/man8/apt.8.html#description)

* [App Packages .deb vs .rpm](https://unix.stackexchange.com/q/103531/128893)

  > Files such as `.deb` and `.rpm` are more akin to a `.zip` file.
  > They're a directory tree of files and sub-directories that contain files related to a particular application and/or library of files.
  > The `.deb` files are meant for distributions of Linux that derive from Debian
  > The `.rpm` files are used primarily by distributions that derive from Redhat

* apt-get vs. yum

  * `apt-get` - Debian / Ubuntu
  * `rpm/yum` - red hat / amazon linux

* [How to install a deb file, by dpkg -i or by apt?](https://unix.stackexchange.com/q/159094/128893)

  ```bash
  # using dpkg
  sudo dpkg -i /path/to/deb/file
  sudo apt-get install -f

  # using apt
  sudo apt install ./name.deb
  ```

* [How can I uninstall software?](https://askubuntu.com/q/1143/349745)

  ```bash
  sudo apt-get remove <application_name>
  ```

* [How to list all installed packages](https://askubuntu.com/q/17823/349745)

  [How to List Installed Packages on Debian](https://linuxize.com/post/how-to-list-installed-packages-on-debian/)

  ```bash
  sudo apt list --installed
  sudo apt list --installed | grep pkg-name
  sudo dpkg-query -l | less
  ```

* [How to find the name of an app from Ubuntu Software](https://askubuntu.com/a/1251727/349745)

  ```bash
  apt search package-name
  ```

* [How can I get a list of all repositories](https://askubuntu.com/q/148932/349745)

  ```bash
  grep -r --include '*.list' '^deb ' /etc/apt/sources.list /etc/apt/sources.list.d/
  ```


### Packages

[Ubuntu – Ubuntu Packages Search](https://packages.ubuntu.com/)


* [`tasksel`](https://packages.ubuntu.com/groovy/tasksel)
* [`xubuntu-desktop`](https://packages.ubuntu.com/groovy/xubuntu-desktop)
* [`gtk2-engines`](https://packages.ubuntu.com/groovy/gtk2-engines)
* [`net-tools`](https://packages.ubuntu.com/groovy/net-tools)
* [`xrdp`](https://packages.ubuntu.com/groovy/xrdp)
* [`build-essential`](https://packages.ubuntu.com/groovy/build-essential)
* [`xfce4-goodies`](https://packages.ubuntu.com/groovy/xfce4-goodies)

### YUM Package Manager

* [How to Use YUM Command in Linux](https://linoxide.com/linux-command/package-management-yum-redhat-linux/)
* [yum(8) - Linux manual page](https://man7.org/linux/man-pages/man8/yum.8.html)
* [yum (software) - Wikipedia](https://en.wikipedia.org/wiki/Yum_(software))

## Desktop Overview

### Desktop Shortcuts

* Super Key - <kbd>⊞ Win</kbd> or <kbd>⌘ Cmd</kbd>
* Search - <kbd>Super</kbd> + Start Typing
* Activities Overview - <kbd>Super</kbd> OR Click "Activities" in Top Left or Hot Corner
* Window Switcher - <kbd>Super</kbd> + <kbd>Tab</kbd>
* Window Edge Tiling (Snapping) - <kbd>Super</kbd> + Arrows OR  Drag Top, Left, Right
* Change Workspace - <kbd>Super</kbd> + <kbd>PgUp</kbd>/<kbd>PgDn</kbd>
* Notifications - <kbd>Super</kbd> + <kbd>V</kbd> or Click Time in Top Middle
* Open Home Directory - <kbd>Super</kbd> + <kbd>E</kbd>

[File Manager Shortcut](https://askubuntu.com/q/692880/349745)

Settings > Keyboard Shortcuts > Launchers

[How to switch to non-graphical view in ubuntu?](https://superuser.com/q/100693/180163)

```bash
# stop GNOME desktop
sudo /etc/init.d/gdm stop
# start GNOME desktop
sudo /etc/init.d/gdm start
```

[Global Menu Bar integrated within applications in Ubuntu 14.04.](https://arstechnica.com/information-technology/2014/02/ubuntu-desktop-moving-application-menus-back-into-application-windows/)

[Fira Code - Linux instructions](https://github.com/tonsky/FiraCode/wiki/Linux-instructions)

```bash
sudo apt install fonts-firacode
```

### apt uri

ex. [`apt:gnome-tweaks`](apt:gnome-tweaks)


## Tweaks

[Gnome Tweaks Repo](https://gitlab.gnome.org/GNOME/gnome-tweaks)
[`gnome-tweaks` vs `gnome-tweak-tool`](https://askubuntu.com/q/1029575/349745) - aliases, use gnome-tweaks

```bash
sudo apt install gnome-tweaks
```

## App Repositories

[What are Repositories?](https://help.ubuntu.com/community/Repositories/Ubuntu)

> The four main repositories are:
>
> * **Main** - Canonical-supported free and open-source software.
> * **Universe** - Community-maintained free and open-source software.
> * **Restricted** - Proprietary drivers for devices.
> * **Multiverse** - Software restricted by copyright or legal issues.


[How do I enable the “Universe” repository?](https://askubuntu.com/q/148638/349745)

```bash
sudo add-apt-repository universe
```

[What are PPAs and how do I use them?](https://askubuntu.com/q/4983/349745)
[How can PPAs be removed?](https://askubuntu.com/q/307/349745)

```bash
sudo add-apt-repository --remove ppa:pinta-maintainers/pinta-stable
```

## Setup

### SSH

```bash
# downloads and installs xclip
$ sudo apt-get install xclip

# copies contents of the id_rsa.pub file to your clipboard
$ xclip -sel clip < ~/.ssh/id_rsa.pub
```

### Git

```bash
# update package index
sudo apt update
# install Git
sudo apt install git
```


## Applications

[Simple image editor?](https://askubuntu.com/q/164473/349745)

[Pinta](https://pinta-project.com/pintaproject/pinta/) - [*Bug](https://bugs.launchpad.net/pinta/+bug/1607586)

```bash
sudo add-apt-repository ppa:pinta-maintainers/pinta-stable
sudo apt-get update
sudo apt-get install pinta
```




## Questions

* [What is the difference between apt and apt-get?](https://askubuntu.com/q/445384/349745)

   `apt` is the most common used command options from `apt-get`, `apt-cache` and `apt-config`


* ["Waiting for cache lock: Could not get lock /var/lib/dpkg/lock-frontend](https://stackoverflow.com/a/64909820/1366033)

  ```bash
  sudo kill -9 5383
  ```


* [How can I tell what version of Linux I'm using?](https://unix.stackexchange.com/q/23833/128893)

  ```bash
  cat /etc/*release*
  lsb_release -a
  uname -a
  ```

* [How do I install a different Python version using apt-get?](https://askubuntu.com/q/682869/349745)

  ```bash
  sudo add-apt-repository ppa:deadsnakes/ppa
  sudo apt-get update
  sudo apt-get install python3.8
  ```

  Add alias

  ```bash
  alias python="python3.8"
  ```

  [Add PIP](https://www.tecmint.com/install-pip-in-linux/)

  ```nash
  sudo apt install python3-pip
  ```

