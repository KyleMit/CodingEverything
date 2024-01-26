# Winget

> Windows Package Manager - winget


## Alternatives

* npm
* chocolatey
* [Github Packages](https://github.com/features/packages)
* [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/)


## Links

* [Winget - docs](https://docs.microsoft.com/en-us/windows/package-manager/winget/)
* [winget-cli](https://github.com/microsoft/winget-cli) - Windows Package Manager CLI (aka winget)
* [winget-pkgs](https://github.com/microsoft/winget-pkgs) - The Microsoft community Windows Package Manager manifest repository
* [winstall](https://winstall.app/) - GUI for Windows Package Manager

## Articles

* [How to create a list of non upgradable software for winget](https://www.codewrecks.com/post/general/winget-update-selective/)
* [Windows Package Manager Preview - Blog](https://devblogs.microsoft.com/commandline/windows-package-manager-preview/)


## Docs

* [list Command | Microsoft Learn](https://learn.microsoft.com/en-us/windows/package-manager/winget/list)

## Issues

* [Add Native PowerShell Support to Winget](https://github.com/microsoft/winget-cli/issues/221)
* [Provide Structured Data Format Options · Issue #1753](https://github.com/microsoft/winget-cli/issues/1753)
* [Enhancements to list command · Issue #1155](https://github.com/microsoft/winget-cli/issues/1155)
* [Customizable sorting for search output · Issue #1769](https://github.com/microsoft/winget-cli/issues/1769)

## Questions

* [List installed Apps](https://github.com/microsoft/winget-cli/issues/119)

  ```bash
  winget list
  ```

* [List all packages installed with winget](https://stackoverflow.com/q/75228294/1366033)

  Use [`--upgrade-available`](https://learn.microsoft.com/en-us/windows/package-manager/winget/list)

  ```bash
  winget list --upgrade-available
  ```

