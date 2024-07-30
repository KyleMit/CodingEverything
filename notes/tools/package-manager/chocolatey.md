# Chocolatey

[Upgrade Command](https://chocolatey.org/docs/commandsupgrade)


## Chocolatey Installs

* Apps
* CLI
  * [curl](https://curl.haxx.se/dlwiz/?type=bin&os=Win64) | [choco](https://chocolatey.org/packages/curl)
* Fonts
  * [fira code font](https://github.com/tonsky/FiraCode) | [choco](https://chocolatey.org/packages/firacode-ttf)
  * [cascadia code font](https://github.com/microsoft/cascadia-code) | [choco](https://chocolatey.org/packages/cascadiacode)
  * [Meslo LG](https://github.com/andreberg/Meslo-Font) | [choco](https://community.chocolatey.org/packages/MesloLG.DZ)


## Questions

* [Get installed chocolatey packages](https://chocolatey.org/docs/commandslist)

  ```bash
  choco list --local-only
  ```

[How to list installed Chocolatey packages?](https://superuser.com/q/1270151/180163)

  ```bash
  choco list --local-only
  choco list -lo
  ```

* [How to list Chocolatey packages already installed and newer version available from the command line](https://superuser.com/q/890251/180163)


  ```bash
  choco outdated
  choco upgrade all --noop
  ```

* [What directory does chocolatey install commands to?](https://stackoverflow.com/q/36429322/1366033)


  ```bash
  choco list --local-only --exact python --trace
  ```

  ```none
  C:\ProgramData\chocolatey\lib
  C:\ProgramData\chocolatey\lib\python3\tools
  C:\ProgramData\chocolatey\bin
  ```

* [Using chocolatey to install multiple apps at once](https://superuser.com/q/1132466/180163)

  ```bash
  choco install jq hub firacode-ttf cascadiacode meslolg.dz
  ```

* Which installs CLI tools to here:

    `C:\ProgramData\chocolatey\lib\`
