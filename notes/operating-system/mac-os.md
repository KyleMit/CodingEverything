# Mac Commands

## Terminal

Install Meteor
curl https://install.meteor.com/ | sh

Edit file:

`open filename`
`pico filename`

Shorten Terminal Command
http://superuser.com/q/370170/180163

```bash
open ~/.bash_profile
PS1=‘$’
```

Stop script
Ctrl + C

[Stop $Pager like less / more](http://stackoverflow.com/q/1696433/1366033)
<kbd>q</kbd>
<kbd>esc</kbd>

[Open Hidden Folder](http://www.macworld.com/article/1161156/software-system/view-library-folder-in-lion.html)
Finder > Go to Folder
Shift + Command + G

[New Terminal at Folder](http://lifehacker.com/launch-an-os-x-terminal-window-from-a-specific-folder-1466745514)


ls - list files and directories (dir)
cd - change directory
mkdir - create a new directory
cp - copy files or directories
mv - move (rename) files or directories
rm - remove files or directories

[Remove Hidden files](http://serverfault.com/q/47933/176522)
rm -rf .[^.] .??*


pwd - list current directory
history - show all commands
cat filename - print file
less filename - scroll through large files

Customize Bash Shell PS1 (Prompt)
http://www.thegeekstuff.com/2008/09/bash-shell-ps1-10-examples-to-make-your-linux-prompt-like-angelina-jolie/
http://www.maketecheasier.com/8-useful-and-interesting-bash-prompts
http://stackoverflow.com/q/14416274/1366033

Bash Prompts
http://www.maketecheasier.com/8-useful-and-interesting-bash-prompts

Terminal Utilities
http://apple.stackexchange.com/q/12161/74706


Terminal Autocompletion?

Create ~/.bash_profile
http://stackoverflow.com/q/11272699/1366033

Check Path
echo $PATH


[How do I create a bash alias?](http://stackoverflow.com/q/8967843/1366033)
$ open ~/.bash_profile
alias c='clear'

Set Default Theme
![Default Theme](http://i.imgur.com/p4ru4hD.png)

[Window Groups](http://imgur.com/a/beg9c)



`pwd` - Print current directory

[Create symbolic link](http://stackoverflow.com/q/7781500/1366033)

ln -s SOURCE TARGET
ln -s ~/Documents/GitHub/MeteorApps/ ~/Meteor


## SSH

[SSH Wiki](https://en.wikipedia.org/wiki/Secure_Shell)

[Adding a Private Key to Your Mac OSX Keychain](https://wiki.hpcc.msu.edu/display/hpccdocs/Adding+a+Private+Key+to+Your+Mac+OSX+Keychain)

[How To](http://coolestguidesontheplanet.com/make-passwordless-ssh-connection-osx-10-9-mavericks-linux/)
[How To](http://www.macworld.co.uk/how-to/mac-software/how-generate-ssh-keys-3521606/)

[How To - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets)

[How To - Github](https://help.github.com/articles/generating-ssh-keys/)

List Keys
ls -al ~/.ssh

Gen Key
ssh-keygen -t rsa

Get Public Key
cat ~/.ssh/id_rsa.pub

### [Homebrew](http://brew.sh/)

[Homebrew Github](https://github.com/Homebrew/homebrew)

[homebrew totally broken on macOS Sierra](https://github.com/Homebrew/brew/issues/2659)

```bash
brew update-reset
brew update
```

[What is the difference between `brew` and `brew cask`?](https://apple.stackexchange.com/q/125468/74706)

[What does brew tap mean?](https://stackoverflow.com/q/34408147/1366033)

[Brew Tap](https://docs.brew.sh/Taps)

```bash
brew tap
```

* [azure/functions](https://github.com/Azure/homebrew-functions)
* [homebrew/cask](https://github.com/Homebrew/homebrew-cask)
* [homebrew/core](https://github.com/Homebrew/homebrew-core)
* [homebrew/cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

[List of all packages installed using Homebrew](https://apple.stackexchange.com/q/101090/74706)

```bash
brew list
brew list --caskS
```

[Installing Fira Code on MacOS](https://github.com/tonsky/FiraCode/wiki/Installing#macos)
[Cask 'font-fira-code' is unavailable: No Cask with this name exists.](https://github.com/tonsky/FiraCode/issues/760#issuecomment-540860697)

```bash
brew tap homebrew/cask-fonts && brew cask install font-fira-code
```

* azure-functions-core-tools
* gdbm
* openssl
* readline
* brew-cask
* gmp
* pkg-config
* sqlite
* duti
* icu4c
* python
* xz

**Install**:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

[**duti**](http://duti.org/)

```bash
# Install
brew install duti

# Add Duti File
touch ~/.duti

# Add rule
com.sublimetext.3 public.plain-text all
```

## OS

[Change your OS X Account Name / Home Folder](https://support.apple.com/en-us/HT201548)

[Create / Delete Users](https://kb.iu.edu/d/akmk)

[Red X doesn’t Quit Window](http://apple.stackexchange.com/q/74964/74706)

[Change Default Program](http://apple.stackexchange.com/q/123833/74706)

[Default File Editor](http://superuser.com/q/231854/180163)

Finder Move up a Folder
Right Click on folder name in window to see all parent directories

[Managing Windows](http://www.macworld.com/article/2048857/10-tips-for-managing-minimized-windows.html)

[Hyper Dock](http://hyperdock.bahoom.com/)

[Mounted Disk After Install](http://apple.stackexchange.com/q/133218/74706)

[System Preferences, Mission Control, uncheck "Automatically rearrange spaces..."](https://discussions.apple.com/thread/4825098)

[app wants to use the login keychain](http://superuser.com/a/662775/180163)

[How to Set a Headphone Specific Volume Level in Mac OS X](http://osxdaily.com/2014/07/13/set-headphone-specific-volume-level/)
Happens Automatically (see Preferences > Sound)

[OS X Yosemite: Rename files, folders, and disks](https://support.apple.com/kb/PH19067?locale=en_US)
Select Item and Press Enter

Finder Tags
Finder > Preferences > Tags

Right Click
Two finger Click OR Cmd + Click

[Copy path as text](http://www.cnet.com/how-to/how-to-copy-a-file-path-in-os-x/)

[Automator](http://arstechnica.com/apple/2011/03/howto-build-mac-os-x-services-with-automator-and-shell-scripting/)

[Quickly Show/Hide Hidden Files on Mac OS X Mavericks & Yosemite](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/)
`defaults write com.apple.finder AppleShowAllFiles NO`
`defaults write com.apple.finder AppleShowAllFiles YES`

[How to access hidden files on a Mac](https://setapp.com/how-to/show-hidden-files-on-mac)

<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> - Show Hidden Files

[Uninstall Apps](https://support.apple.com/kb/PH18752?locale=en_US&viewlocale=en_US)

[List Apps on Mac](http://osxdaily.com/2015/05/25/list-all-applications-mac-os-x/)
Finder > Cmd + Shift + A

[Finder - Add Favorite](http://apple.stackexchange.com/questions/35562/how-do-i-add-more-categories-to-mac-os-x-finders-sidebar)

[Finder > Keep Folders on top when sorting by name](http://www.macworld.com/article/3126388/macs/how-to-list-folders-first-when-sorting-a-finder-window-in-macos-sierra.html)

[Quit/Close Application](http://blog.laptopmag.com/quit-applications-os-x)
Tool
Window - Cmd + W
Program - Cmd + Q
Program - Cmd + Opt + Q

[Force Quit](https://support.apple.com/en-us/HT201276)
Cmd + Opt + Esc

[How can I change an application icon in Mac OS X?](http://superuser.com/q/37811/180163)

[Terminal Green Icon](http://www.iconarchive.com/show/captiva-icons-by-bokehlicia/terminal-green-icon.html)

[Difference between sh and bash](http://stackoverflow.com/q/5725296/1366033)

[Desktop Snap to Grid](http://superuser.com/a/58104/180163)


### Tutorial

[Menu Bar](https://support.apple.com/kb/PH18933?locale=en_US&viewlocale=en_US)
[Window Basics](https://support.apple.com/kb/PH18785?locale=en_US&viewlocale=en_US)


## Hot Keys

[**Symbols**](https://support.apple.com/en-us/HT201236)

* ← - Left Arrow
* → - Right Arrow
* ↑ - Up Arrow
* ↓ - Down Arrow
* ⌘ - Command (cmd)
* ⇧ - Shift
* ⌥ - Option (opt)
* ⌃ - Control (ctl)
* ⇪ - Caps Lock
* Fn - Function


Toggling
https://youtu.be/K2-SphKjrWo

Toggle Open Programs
Cmd + Tab

Toggle between Windows of same program
Cmd + `

[Toggling Between Chrome Tabs](http://www.quora.com/Is-there-a-shortcut-key-for-switching-between-tabs-in-Chrome-for-Mac)
Ctrl + Tab
Cmd + Num

Togging Between Tabs
Cmd + Shift + [|]

Toggling up a minimized program
Cmd + Tab + Opt

Opening / Closing Tab
Cmd + T / Cmd + W



Open Spotlight Search
Cmd + Space

Open Spotlight in Finder
Cmd + Option + Space

Open Application Instances
Ctrl + ↓

Hot Corners
Top Left: All Open Application Instances
Top Right: Mission Control
Bottom Left: Launch Pad
Bottom Right: Dashboard

Home - Cmd + ←

End - Cmd + →

Next Word - Opt + ⇄

Swipe between screens
Ctrl + ⇄

Zoom OS
Ctrl + Scroll

Backspace - Fn + Delete

Next Word - Opt + Over

Change Screens -

Full Screen - Cmd + Ctrl + F

[Print Screen / Screenshots](https://support.apple.com/en-us/HT201361)

Full Screen
Cmd + Shift + 3

Screen Snippet
Cmd + Shift + 4

Window
Cmd + Shift + 4, Space

[Remove Window Shadow](http://osxdaily.com/2011/05/23/disable-shadow-screen-shots-mac/)

```bash
defaults write com.apple.screencapture disable-shadow -bool true
killall SystemUIServer
```

Save to clipboard
Hold Control

Files
Copy - Cmd + C
Paste - Cmd + V
Move - Cmd + Opt + V

New Finder Window

1. ⌘ + Tab to finder (always open)
2. ⌘ + N to create new window (hotkeys are app sensitive)

Copy - Cmd + C
Paste - Cmd + V
Move - Cmd + Opt + V

## Gestures

**Mission Control** - Swipe up with three fingers
**Launchpad** - Pinch with thumb and three fingers
**Show Desktop** - Spread with thumb and three fingers
**Swipe between screens** - Swipe with three fingers
**App Expose** - Swipe down three fingers

[Better Snap Tool](https://itunes.apple.com/us/app/bettersnaptool/id417375580?mt=12)

Cmd + Over - Snap left or right
Drag Corner / Side - Snap side

Shift + Drag - Resize Window
Ctrl + Drag - Move Window

[Magic Prefs](http://magicprefs.com/)

Three finger click/tap - Middle Click

## Sublime Text

Sublime Text Command Pallet
Cmd + Shift + P

pci - package installer

Zoom Out / In
Cmd + =
Cmd + -

Code Folding

Edit > Code Folding
Fold   - Cmd + Opt + {
Unfold - Cmd + Opt + }

Hover over line numbers to see drop down arrows

* [Sublime Package Manager](https://packagecontrol.io/docs/usage)
* [Sublime Markdown](https://github.com/jonschlinkert/sublime-markdown-extended)
* [Handlebars Syntax](http://stackoverflow.com/q/29183892/1366033)
* [Sublime Text Markdown](https://packagecontrol.io/packages/MarkdownEditing)
* [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements)
http://plaintext-productivity.net/2-04-how-to-set-up-sublime-text-for-markdown-editing.html
https://blog.mariusschulz.com/2014/12/16/how-to-set-up-sublime-text-for-a-vastly-better-markdown-writing-experience


## Node

### Run Server

```bash
npm install -g http-server
cd /Users/MitMacPaddyWhack1/Documents/GitHub/Presentations/Meteor/
http-server
```

Open http://localhost:8080/

## Grunt

[Grunt - Javascript Task Runner](http://gruntjs.com/)
[Install Grunt](http://stackoverflow.com/questions/15703598/how-to-install-grunt-and-how-to-built-script-with-it)


Clone the reveal.js repository - `$ git clone https://github.com/hakimel/reveal.js.git`
Navigate to the reveal.js folder - `$ cd reveal.js`
Install dependencies - `$ npm install`
Serve the presentation and monitor source files for changes - `$ grunt serve`
Open http://localhost:8000 to view your presentation





## OS Utilities

Alfred
Bar Tender
Total Spaces
Better Touch Tool
[Hyper Dock](https://bahoom.com/hyperdock)
[Hyper Switch](https://bahoom.com/hyperswitch)
Magic Prefs



## Errors

[GitHub for Mac error: git: 'credential-osxkeychain' is not a git command](https://stackoverflow.com/q/13661354/1366033)
[Copying a rsa public key to clipboard](https://stackoverflow.com/q/16638092/1366033)


## Bash

### nvm is not compatible

> nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"
> Run `npm config delete prefix` or `nvm use --delete-prefix v9.9.0 --silent` to unset it.

```bash
npm config delete prefix
```

### The default interactive shell is now zsh

> The default interactive shell is now zsh.
> To update your account to use zsh, please run `chsh -s /bin/zsh`.
> For more details, please visit https://support.apple.com/kb/HT208050.

[Use zsh as the default shell on your Mac](https://support.apple.com/en-us/HT208050)

```bash
chsh -s /bin/zsh
```

> complete:13: command not found: compdef

[nvm is broken after I installing oh-my-zsh? #5543](https://github.com/ohmyzsh/ohmyzsh/issues/5543)


## Questions

* Screensaver

    [Slow down screensaver pictures changes](https://apple.stackexchange.com/q/135766/74706)
    [Change screensaver slide duration](http://hints.macworld.com/article.php?story=20130215183522445)

