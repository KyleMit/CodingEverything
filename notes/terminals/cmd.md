# Windows CMD / DOS

AKA Batch Script

## Links

* [Windows commands](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
* [cmd.exe - Wikipedia](https://en.wikipedia.org/wiki/Cmd.exe)
* [DOS - Wikipedia](https://en.wikipedia.org/wiki/DOS)
* [MS-DOS - Wikipedia](https://en.wikipedia.org/wiki/MS-DOS)
* [Windows NT - Wikipedia](https://en.wikipedia.org/wiki/Windows_NT)
* [List of DOS commands - Wikipedia](https://en.wikipedia.org/wiki/List_of_DOS_commands)
* [Command prompt in Windows and Linux - What is their language called?](https://superuser.com/q/349481/180163)

## Acronyms

* **NT** - "New Technology"
* **DOS** - Disk Operating System


## History

* OS/2
* NT
* CE
* ReactOS

## Commands

* [dir](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir)
* [mklink](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink)
* [findstr](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/findstr)

## Questions

* [Aliases in Windows command prompt](https://stackoverflow.com/q/20530996/1366033)
  * [How to set an alias in Windows Command Line?](https://superuser.com/q/560519/180163)

* [Use `zip` in windows](https://serverfault.com/a/1043400/176522)

    ```bash
    C:\temp> tar.exe -xf files.zip
    ```

* [`pbcopy` for Windows](https://superuser.com/q/472598/180163)

   Use `clip`


* [Assign output of a program to a variable using a MS batch file](https://stackoverflow.com/q/2323292/1366033)


  Bash

  ```bash
  VAR=$(application arg0 arg1)
  ```

  Bat

  ```bat
  for /f %%i in ('application arg0 arg1') do set VAR=%%i
  ```

* [How to return to last directory with cmd.exe?](https://superuser.com/q/84932/180163)

  * [`pushd`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/pushd)
  * [`popd`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/popd)


* [How do I find the location of an executable in Windows?](https://superuser.com/q/49104/180163)

  ```cmd
  where git
  ```
