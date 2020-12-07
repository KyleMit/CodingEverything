# Windows Subsystem for Linux


## Alternatives

* [Cygwin](http://www.cygwin.com/)
  * a large collection of GNU and Open Source tools which provide functionality similar to a Linux distribution on Windows.
  * a DLL (cygwin1.dll) which provides substantial POSIX API functionality.

## Installing

[How to Install and Use the Linux Bash Shell on Windows 10](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

[Updating the WSL 2 Linux kernel | Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel)
[WSL 2 will be generally available in Windows 10, version 2004 | Windows Command Line](https://devblogs.microsoft.com/commandline/wsl2-will-be-generally-available-in-windows-10-version-2004/)


```bash
# Install WSL
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# Enable Virtual Machine Platform
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# Use WSL2 per default
wsl --set-default-version 2

# check version
wsl -l -v
```

[How to setup WSL2 with Windows Terminal, oh-my-zsh and powerlevel10k - Duman Codes](https://yduman.github.io/blog/wsl2-setup/)
[Remote - WSL - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)


In windows explorer, access WSL via: `\\wsl$`
In bash shell, access windows via: `/mnt/c`


## Boot Ubuntu Desktop GUI

* [X410 - X Server for Windows 10](https://x410.dev/)
* [Using X410 with WSL2 - X410.dev](https://x410.dev/cookbook/wsl/using-x410-with-wsl2/)

* Further Reading
  * [How to set up working X11 forwarding on WSL2](https://stackoverflow.com/questions/61110603/how-to-set-up-working-x11-forwarding-on-wsl2)
  * [Install GUI Desktop in WSL2 Ubuntu 20.04 LTS in Windows 10](https://harshityadav95.medium.com/wsl2-gui-ae0d8d9e4459)

[The complete WSL2 + GUI setup](https://medium.com/@japheth.yates/wsl2-gui-2582828f4577)

```bash
# updating ubuntu
sudo apt update && sudo apt -y upgrade

# networking tools
sudo apt install build-essential
sudo apt install net-tools
sudo apt install xrdp -y && sudo systemctl enable xrdp

# setting up the GUI
sudo apt install -y tasksel
sudo tasksel install xubuntu-desktop
sudo apt install gtk2-engines

# x-server settings
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
export LIBGL_ALWAYS_INDIRECT=1
sudo /etc/init.d/dbus start &> /dev/null
```

### Launch


```bash
xfce4-session
```

### Themes

* [Adapta-gtk-theme-colorpack](https://www.xfce-look.org/p/1190851/)
  * [adapta-gtk-theme](https://github.com/adapta-project/adapta-gtk-theme)

sudo apt-add-repository ppa:tista/adapta
sudo apt-get install adapta-gtk-theme

* [Papirus](https://www.xfce-look.org/p/1166289/)
  * [papirus-icon-theme](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/#ubuntu-and-derivatives)
  * [papirus launch pad](https://launchpad.net/~papirus/+archive/ubuntu/papirus)

    ```bash
    sudo add-apt-repository ppa:papirus/papirus
    sudo apt-get update
    sudo apt-get install papirus-icon-theme
    ```
