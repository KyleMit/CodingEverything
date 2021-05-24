# Visual Studio


## Alternatives

* JetBrains - Rider

## Editor

* Paste JSON as Class

## Keyboard Shortcuts

[Default keyboard shortcuts](https://docs.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio?view=vs-2019)

* <kbd>Ctrl</kbd> + <kbd>.</kbd> - [Quick Actions](https://docs.microsoft.com/en-us/visualstudio/ide/quick-actions?view=vs-2019) (`View.QuickActions`)
* <kbd>Shift</kbd> + <kbd>F12</kbd> - [Find All References](https://docs.microsoft.com/en-us/visualstudio/ide/finding-references) (`ReSharper.Resharper_FindUsages`)
* <kbd>F1</kbd> - Help Docs
* <kbd>Alt</kbd> + <kbd>Z</kbd> - Toggle Word Wrap (`Edit.ToggleWordWrap`)

* <kbd>Ctrl</kbd> + <kbd>,</kbd> - Open Settings (`Tools.Options`)
* <kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Ctrl</kbd> + <kbd>S</kbd> - Open Keyboard Settings (`Tools.CustomizeKeyboard`)

* <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> - Move Lines Up (`Edit.MoveSelectedLinesUp`)
* <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> - Move Lines Down (`Edit.MoveSelectedLinesDown`)


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

### Enter-VSDevShell


* [Using Enter-VsDevShell in PowerShell consoles](https://intellitect.com/enter-vsdevshell-powershell/)
* [Using the Developer PowerShell Visual Studio with PowerShell 7](https://david.gardiner.net.au/2020/04/powershell-visualstudio-integration.html)
  * [Microsoft.VisualStudio.DevShell doesn't work with PowerShell Core](https://developercommunity.visualstudio.com/t/microsoftvisualstudiodevshell-doesnt-work-with-pow/663594)
* [Command-line shells & prompt for developers](https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell?view=vs-2019)

### Nuget Command Line

* [Install and manage NuGet packages using the console in Visual Studio](https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell)
* [Installing NuGet client tools](https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools)
* [Package Manager Console](https://nuget-tutorial.net/en/tutorial/100009/package-manager-console)



## Release History

* [Visual Studio Roadmap](https://docs.microsoft.com/en-us/visualstudio/productinfo/vs-roadmap)


## Resources

* [Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/)
  * [Visual Studio 2022](https://devblogs.microsoft.com/visualstudio/visual-studio-2022/)
* [Microsoft Visual Studio](https://www.youtube.com/channel/UChqrDOwARrxdJF-ykAptc7w)
  * [Increase your .NET Productivity with Visual Studio 2019](https://www.youtube.com/watch?v=mg2aocZA9Pc)
* [Visual Studio Magazine](https://visualstudiomagazine.com/Home.aspx)
  * [After Last 2020 VS Code Update, What's In Store for 2021?](https://visualstudiomagazine.com/articles/2020/12/16/vs-code-nov20.aspx)

## Extensions

* [aka.ms/extendvs](https://visualstudio.microsoft.com/vs/features/extend/)
  * [Visual Studio Marketplace](https://marketplace.visualstudio.com/vs) - Extensions for Visual Studio family of products

* [VSColorOutput](https://marketplace.visualstudio.com/items?itemName=MikeWard-AnnArbor.VSColorOutput)
* [Code alignment](https://marketplace.visualstudio.com/items?itemName=cpmcgrath.Codealignment)
* [EditorConfig Language Service](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.EditorConfig)

### Productivity Power Tools (PPT)

> A set of Visual Studio extensions improving developer productivity

* [Productivity Power Tools 2017/2019](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.ProductivityPowerPack2017)
  * [microsoft/VS-PPT](https://github.com/Microsoft/VS-PPT)

* [Power Commands for Visual Studio - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.PowerCommandsforVisualStudio)
* [Quick Launch Tasks - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.QuickLaunchTasks)
* [Double-Click Maximize - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.Double-ClickMaximize)



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

  Options > Environment > Tabs and Windows > Insert New Tabs to the Right of Existing Tabs

* [Customize Menu Bar location](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-customize-menus-and-toolbars-in-visual-studio?view=vs-2019)

  Tools > Customize > Commands > Menu Bar > Reorder Items

* [Keyboard shortcut to move line up/down in Visual Studio 2012?](https://superuser.com/a/1650238/180163)

