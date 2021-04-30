# Visual Studio

Shift + F12 - [Find All References](https://docs.microsoft.com/en-us/visualstudio/ide/finding-references)

## Alternatives

* JetBrains - Rider

## Editor

### Paste JSON as Class

## Debugger

[Is there any way to set environment variables in Visual Studio Code?](https://stackoverflow.com/a/55325890/1366033)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "envFile": "${workspaceFolder}/.env"
    }
  ]
}
```


## VS Terminal

* [The PowerShell you know and love now with a side of Visual Studio](https://devblogs.microsoft.com/visualstudio/the-powershell-you-know-and-love-now-with-a-side-of-visual-studio/)
* [Say hello to the new Visual Studio terminal!](https://devblogs.microsoft.com/visualstudio/say-hello-to-the-new-visual-studio-terminal/)

* View > Terminal Window

* Create Terminal Profiles

```none
C:\Program Files\PowerShell\7\pwsh.exe \
C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe \
C:\Windows\system32\WindowsPowerShell\v1.0\powershell.exe \

-NoExit -Command "& { Import-Module $env:VSAPPIDDIR\..\Tools\Microsoft.VisualStudio.DevShell.dll}; Enter-VsDevShell -SkipAutomaticLocation -SetDefaultWindowTitle -InstallPath $env:VSAPPIDDIR\..\..\
-noe -c "&{Import-Module """C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\Tools\Microsoft.VisualStudio.DevShell.dll"""; Enter-VsDevShell ac9611f0}"

C:\Windows\system32\cmd.exe \
/k ""%VSAPPIDDIR%\..\Tools\VsDevCmd.bat"

$env:VSAPPIDDIR
C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\
C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\Tools\Microsoft.VisualStudio.DevShell.dll

```




* [Using Enter-VsDevShell in PowerShell consoles](https://intellitect.com/enter-vsdevshell-powershell/)
* [Using the Developer PowerShell Visual Studio with PowerShell 7](https://david.gardiner.net.au/2020/04/powershell-visualstudio-integration.html)
  * [Microsoft.VisualStudio.DevShell doesn't work with PowerShell Core](https://developercommunity.visualstudio.com/t/microsoftvisualstudiodevshell-doesnt-work-with-pow/663594)
* [Command-line shells & prompt for developers](https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2019)





## Release History

* [Visual Studio Roadmap](https://docs.microsoft.com/en-us/visualstudio/productinfo/vs-roadmap)

## Resources

[Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/)

## ReSharper

[What’s New in ReSharper 2021.1](https://www.jetbrains.com/resharper/whatsnew/)

* Default Navigation Action for Compiled Code
  * Decompiled Sources
  * .NET Framework Sources
  * Object Browser
  * Assembly Explorer
  * Metadata View

* [Naming Style](https://www.jetbrains.com/help/resharper/Coding_Assistance__Naming_Style.html)


## Questions

* [Change default path for repositories for GIT plugin](https://stackoverflow.com/q/27134077/1366033)

  * git settings > default location

* [Show Active Item in Solution Explorer](https://stackoverflow.com/q/12682656/1366033)


* [Scroll Solution Explorer to current file](https://stackoverflow.com/a/12682819/1366033)

  Tools > Options > Projects and Solutions > Track Active Item in Solution Explorer

  Also: [Shortcut to scroll solution explorer to current file](https://stackoverflow.com/q/14937284/1366033)

* [Is there a way to navigate to real implementation of method behind an interface?](https://stackoverflow.com/a/53273845/1366033)

  `Edit.GoToImplementation` <kbd>Ctrl</kbd> + <kbd>F12</kbd>

* [Disable Preview Tab](https://stackoverflow.com/a/18492029/1366033)

  Options > Environment > Tabs and Windows > Preview Tab

  or

  Solution Explorer > Preview Selected Items Icon ("Hat Icon")

* [How to open new tabs on the right side](https://stackoverflow.com/q/4388110/1366033)

  Options > Environment > Tabs and Windows > Insert New Tabs to the Right of Existing Tabsj
