# Chocolatey

[Upgrade Command](https://chocolatey.org/docs/commandsupgrade)

## Installation

```bash
winget install --id=Chocolatey.Chocolatey  -e
winget install --id=Chocolatey.ChocolateyGUI  -e
```

## Github

* [chocolatey/choco](https://github.com/chocolatey/choco)
* [chocolatey/ChocolateyGUI](https://github.com/chocolatey/ChocolateyGUI)

## Questions

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

