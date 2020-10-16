# Linux

## Kernel

* [Linux](https://www.linux.org/)
* [Debian](https://www.debian.org/)

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



## Term-inalogy

[What's the difference between a console, a terminal, and a shell?](hanselman.com/blog/WhatsTheDifferenceBetweenAConsoleATerminalAndAShell.aspx)

* **TTY** - teletypewriter
* **PTY** - pseudo-terminal
* **ConPTY** - pseudo-console


### Terminal Keyboard Shortcuts



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




## Ubuntu Versions

GNU > Linux > Debian > GNOME > Ubuntu

[Ubuntu version history](https://en.wikipedia.org/wiki/Ubuntu_version_history)

> using the year and month of the release as a version number
> **GNOME** (GNU Network Object Model Environment) open-source desktop environment


## Command Line

[The Linux command line for beginner](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
[Beginner Geek: How to Start Using the Linux Terminal](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/)

## File Manager

[How to show hidden folders in File Manager](https://askubuntu.com/q/470837/349745)
[How to open Nautilus (File Manager) preferences?](https://askubuntu.com/q/861333/349745)
[Ubuntu 14.04 Nautilus has no menu - File, Edit etc. don't exist](https://askubuntu.com/q/458281/349745)
[Show Menubar in File Manager - XUbuntu](https://askubuntu.com/q/1010580/349745)



## Add / Remove Software

[App Packages .deb vs .rpm](https://unix.stackexchange.com/q/103531/128893)

> Files such as `.deb` and `.rpm` are more akin to a `.zip` file.
> They're a directory tree of files and sub-directories that contain files related to a particular application and/or library of files.
> The `.deb` files are meant for distributions of Linux that derive from Debian
> The `.rpm` files are used primarily by distributions that derive from Redhat

[How to install a deb file, by dpkg -i or by apt?](https://unix.stackexchange.com/q/159094/128893)

```bash
# using dpkg
sudo dpkg -i /path/to/deb/file
sudo apt-get install -f

# using apt
sudo apt install ./name.deb
```

[How can I uninstall software?](https://askubuntu.com/q/1143/349745)

```bash
sudo apt-get remove <application_name>
```

[How to list all installed packages](https://askubuntu.com/q/17823/349745)
[How to List Installed Packages on Debian](https://linuxize.com/post/how-to-list-installed-packages-on-debian/)

```bash
sudo apt list --installed
sudo apt list --installed | grep pkg-name
sudo dpkg-query -l | less
```

[How to find the name of an app from Ubuntu Software](https://askubuntu.com/a/1251727/349745)

```bash
apt search package-name
```

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
