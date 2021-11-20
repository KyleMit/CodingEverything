# Raspberry Pi


## Docs

[Raspberry Pi OS](https://www.raspberrypi.org/software/)

## Getting Started

[NOOBS (New Out of Box Software)](https://github.com/raspberrypi/noobs)
[Noobs Installation](https://www.raspberrypi.org/documentation/installation/noobs.md)




## Uninstall Extra Apps

* [How to uninstall programs on a Raspberry Pi?](https://raspberrytips.com/uninstall-programs-raspberry-pi/)
* [How to remove un-necessary software from your Raspberry pi server.](https://medium.com/@sean_t_king/how-to-remove-un-necessary-software-from-your-raspberry-pi-server-fa312f83e00)
* [Automatically uninstall all non-essential packages](https://raspberrypi.stackexchange.com/q/26473/115943)


Extras

* Programming
    * BlueJ Java IDE
    * Geany
    * Greenfoot Java IDE
    * Mathmatica
    * mu
    * Scratch
    * Scratch 2
    * Scratch 3
    * Thonny Python IDE
    * Wolfram
* Office
    * LibreOffice Base
    * LibreOffice Calc
    * LibreOffice Draw
    * LibreOffice Impress
    * LibreOffice Math
    * LibreOffice Writer
* Internet
    * Claws Mail
* Games
    * Boing
    * Bunner
    * Cavern
    * Mincraft Pi
    * Myriapod
    * Python Games
    * Soccer


## Linux App Launchers

* [10 Best Application Launchers for Linux Desktops](https://www.fossmint.com/best-application-launchers-for-ubuntu-linux/)

## Linux App Store

* [SnapCraft](https://snapcraft.io/)
* [Installing snapd](https://snapcraft.io/docs/installing-snapd)

```bash
sudo snap install todoist
```


## Questions


* Max Storage

  * [What's the maximum SD card size that the Raspberry Pi will accept?](https://raspberrypi.stackexchange.com/questions/36/whats-the-maximum-sd-card-size-that-the-raspberry-pi-will-accept-do-larger-car/50152#50152)
  * [What Micro SD Card is Best for a Raspberry Pi 4?](https://maker.pro/raspberry-pi/tutorial/what-micro-sd-card-is-best-for-a-raspberry-pi-4)
  * [Best sd card for Raspberry Pi](https://kalitut.com/sd-card-for-raspberry-pi/)

* 64 Bit Raspbian

  * [Raspberry Pi OS (64 bit) beta test version](https://www.raspberrypi.org/forums/viewtopic.php?t=275370)
  * [Latest Raspberry Pi OS update - May 2020](https://www.raspberrypi.org/blog/latest-raspberry-pi-os-update-may-2020/)
  * [64-bit Raspbian OS on Raspberry Pi 4 with USB BOOT](https://webtechie.be/post/2020-09-29-64bit-raspbianos-on-raspberrypi4-with-usbboot/)

* Installation Steps

  * [CanaKit Raspberry Pi B+ Case Installation - YouTube](https://www.youtube.com/watch?v=1VyE5-gv6jA)
  * [CanaKit Starter Kit for the Raspberry Pi 4 4GB Setup with Heat Sink+Fan install & Test! - YouTube](https://www.youtube.com/watch?v=7rcNjgVgc-I)


* [Is my linux ARM 32 or 64 bit?](https://unix.stackexchange.com/q/136407/128893)

* [How do I know if I'm on Debian, Ubuntu or Fedora?](https://raspberrypi.stackexchange.com/q/62999/115943)

* [How to know which Linux Distribution I'm using?](https://superuser.com/q/80251/180163)


* [What package is right for my computer?](https://askubuntu.com/q/120015/349745)

    [What are .deb and .rpm](https://unix.stackexchange.com/q/103531/128893)

    Raspbian > Ubuntu > Debian > Linux (use `.deb`)


* [WARN npm npm does not support Node.js v9.1.0](https://stackoverflow.com/q/47226238/1366033)

    ```bash
    sudo apt --auto-remove purge npm
    sudo apt --auto-remove purge nodejs
    ```

* [How can I determine which OS image I am running?](https://raspberrypi.stackexchange.com/q/6974/115943)

    ```bash
    man uname
    # Linux raspberrypi 5.4.51-v7l+ #1333 SMP Mon Aug 10 16:51:40 BST 2020 armv7l GNU/Linux
    uname -a
    ```

* Get latest OS Update

    [New Raspberry Pi OS release — December 2020](https://www.raspberrypi.org/blog/new-raspberry-pi-os-release-december-2020/)

    ```bash
    sudo apt update
    sudo apt full-upgrade
    reboot
    ```

* Get System Info

    ```bash
    cat /etc/*-release
    hostnamectl
    cat /etc/debian_version
    cat /etc/debconf.conf
    cat /proc/cpuinfo
    uname -m # armv7l
    ```

* [Instal VS Code on Raspberry Pi](https://code.visualstudio.com/docs/setup/raspberry-pi)

    ```bash
    sudo apt update
    sudo apt install code
    ```

* [Icons only setting does not refresh](https://www.raspberrypi.org/forums/viewtopic.php?t=200668)

  1. Right Click Taskbar > Panel Settings
  2. Move to another Position (Top|Bottom|Side)
  3. Move back to position
  4. Forces settings to refresh

* [How to change the clock to 12-hour format in Raspbian?](https://raspberrypi.stackexchange.com/q/29655/115943)

    [Lubuntu > Documentation > Customizing The Clock](https://help.ubuntu.com/community/Lubuntu/Documentation/CustomizingTheClock)

    [Easy Ruby Date Formatter](https://www.foragoodstrftime.com/)


    `%l:%M %p`

* [How to printscreen on Raspberry Pi?](https://raspberrypi.stackexchange.com/q/7423/115943)

    * <kbd>PrtScrn</kbd> -> Save to `/home/pi`
        
    ```bash
    sudo apt-get install scrot
    sudo scrot -d5
    ```

* [How to Rotate Monitor](https://pimylifeup.com/raspberry-pi-rotate-screen/)

  1. Start > Preferences > Screen Congiuration
  2. Right Click Screen > Orientation > Left|Right


* Install latest version of node


  ```bash
  sudo apt install nodejs
  sudo apt install npm
  ```


Pin Icon to start menu

Uninstall default apps

Quick launch applications / search on start menu

Collapse shortcut icons and running apps

