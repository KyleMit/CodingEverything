# Windows OS


## Acronyms

* **CIM** - Common Information Model
* **DMTF** - Distributed Management Task Force
* **WMI** - Windows Management Instrumentation
* **MI** - Management Infrastructure
* **WS-Man** - WS-Management
* **WinRM** - Windows Remote Management
* **PIC** - Powershell Integrated Console
* **WBEM** - Web-Based Enterprise Management
* **MOF** - Managed Object Format


## Hotkeys


**Snapping window**: <kbd>⊞ Win</kbd> + <kbd>⮀</kbd> (can be used with <kbd>⮁</kbd> to get into quadrants)
**Switch to recent window**:  <kbd>Alt</kbd> + <kbd>Tab</kbd>
**Task view**: <kbd>⊞ Win</kbd> + <kbd>Tab</kbd>
**Create new virtual desktop**: <kbd>⊞ Win</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd>
**Switch Virtual Desktops**: <kbd>⊞ Win</kbd> + <kbd>Ctrl</kbd> + <kbd>⮀</kbd>



## Docs

* [Security identifiers](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/security-identifiers)

  * [Well-known SIDs](https://docs.microsoft.com/en-us/windows/win32/secauthz/well-known-sids)

  | Identifier Authority     | SID String Prefix |
  | ------------------------ | ----------------- |
  | NULL_SID_AUTHORITY       | `S-1-0`           |
  | WORLD_SID_AUTHORITY      | `S-1-1`           |
  | LOCAL_SID_AUTHORITY      | `S-1-2`           |
  | CREATOR_SID_AUTHORITY    | `S-1-3`           |
  | NT_AUTHORITY             | `S-1-5`           |
  | AUTHENTICATION_AUTHORITY | `S-1-18`          |

## Window Managers

* [DisplayFusion: Multiple Monitors Made Easy by Binary Fortress Software](https://www.displayfusion.com/)
* [Actual Multiple Monitors: Extended Taskbar with Support of All Windows 7 Features on Each Display.](https://www.actualtools.com/multiplemonitors/)
* [Realtime Soft UltraMon](https://www.realtimesoft.com/ultramon/)
* [Synergy - Share One Mouse & Keyboard Across Computers](https://symless.com/synergy)


[Keyboard shortcut to open a link in a new tab?](https://superuser.com/a/1550627/180163)

<kbd>Ctrl</kbd> + <kbd>Enter ↵</kbd> - open link in new tab (stay on current tab)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter ↵</kbd> - open link in new tab (switch to new tab)

[The 3 Best Ways to Make a Window Always-on-Top on Windows](https://www.howtogeek.com/196958/the-3-best-ways-to-make-a-window-always-on-top-on-windows/)

```ahk
^SPACE::  Winset, Alwaysontop, , A
```

## Power Toys


[microsoft/PowerToys: Windows system utilities to maximize productivity](https://github.com/microsoft/PowerToys/)

### Utilities

* Color Picker
* Fancy Zones
* File Explorer Add-Ons
* Image Resizer
* Keyboard manager
* Power Rename
* PowerToys Run
* Shortcut Guide
* Video Conference Mute

## CMI

* [Introduction to CIM Cmdlets](https://devblogs.microsoft.com/powershell/introduction-to-cim-cmdlets/)
* [Get-CimInstance](https://docs.microsoft.com/en-us/powershell/module/cimcmdlets/get-ciminstance?view=powershell-7.2)

## WMI

* [Windows Management Instrumentation](https://docs.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page)
* [About WMI](https://docs.microsoft.com/en-us/windows/win32/wmisdk/about-wmi)
* [Using WMI](https://docs.microsoft.com/en-us/windows/win32/wmisdk/using-wmi)
* [Accessing Data in the Interop Namespace](https://docs.microsoft.com/en-us/windows/win32/wmisdk/accessing-data-in-the-interop-namespace#assigning-the-power-profile-to-a-variable)

### MI

[Why Use MI](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/wmi_v2/why-use-mi-)


### Win32 Provider

* [CIM WMI Provider](https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/cim-wmi-provider)
* [Win32 Provider](https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-provider)
  * [Computer System Hardware Classes](https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/computer-system-hardware-classes)
    * Cooling Device Classes
    * Input Device Classes
    * Mass Storage Classes
    * Motherboard, Controller, and Port Classes
    * Networking Device Classes
    * Power Classes
    * Printing Classes
    * Telephony Classes
    * Video and Monitor Classes
  * [Operating System Classes](https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/operating-system-classes)
    * COM
    * Desktop
    * Drivers
    * Event log
    * File system
    * Job objects
    * Memory and page files
    * Multimedia audio or visual
    * Networking
    * Operating system events
    * Operating system settings
    * Processes
    * Registry
    * Scheduler jobs
    * Security
    * Services
    * Shares
    * Start menu
    * Storage
    * Users
    * Windows product activation


## Change Default Lid Close Action

* Get Current Power Plan

  ```ps1
  Get-CimInstance -Namespace "root\cimv2\power" -Query "SELECT * FROM Win32_PowerPlan WHERE IsActive = True"
  Get-CimInstance -Namespace "root\cimv2\power" -Class Win32_PowerPlan | Where-Object { $_.IsActive }
  Get-CimInstance -Namespace "root\cimv2\power" -Class Win32_PowerPlan -Filter "IsActive = TRUE"
  ```

* Get Associated Objects

  [Get-CimAssociatedInstance](https://docs.microsoft.com/en-us/powershell/module/cimcmdlets/get-cimassociatedinstance?view=powershell-7.2)

  ```ps1
  $powerNamespace = @{ Namespace = 'root\cimv2\power' }

  $curPlan = Get-CimInstance @powerNamespace -Class Win32_PowerPlan -Filter "IsActive = TRUE"
  $planGuid = Get-ExtractInnerGuid $curPlan.InstanceID

  # Opt 1
  $curPlan | Get-CimAssociatedInstance -ResultClass Win32_PowerSettingDataIndex
  # Opt 2
  Get-CimInstance @powerNamespace -Class Win32_PowerSettingDataIndex -Filter "InstanceId LIKE '%$planGuid%'"
  ```


* Change Default Lid Close Action

  * Tutorials
    * [PowerShell/WMI power management](https://stackoverflow.com/q/35325862/1366033)
    * [Powershell Set Lid Close Action](https://stackoverflow.com/q/15455864/1366033)
    * [Created a script to toggle lid close action](https://stackoverflow.com/q/23944639/1366033)
    * [Change what closing the lid does, from the command line?](https://superuser.com/q/874849/180163)
    * [How to Change Default Lid Close Action on Windows 10](https://winaero.com/how-to-change-default-lid-close-action-on-windows-10/)
    * [How to Change Default Lid Close Action in Windows 10](https://www.tenforums.com/tutorials/69762-how-change-default-lid-close-action-windows-10-a.html)

  * Docs
    * [Configure power settings](https://docs.microsoft.com/en-us/windows-hardware/customize/power-settings/configure-power-settings)
    * [Power button and lid settings overview](https://docs.microsoft.com/en-us/windows-hardware/customize/power-settings/power-button-and-lid-settings)
    * [Lid switch close action](https://docs.microsoft.com/en-us/windows-hardware/customize/power-settings/power-button-and-lid-settings-lid-switch-close-action)

  * [Power Policy Provider](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/powerwmiprov/power-policy-provider-)
    * [Win32\_PowerPlan class](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/powerwmiprov/win32-powerplan)
    * [Win32\_PowerSetting class](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/powerwmiprov/win32-powersetting)

  * [Powercfg command-line options](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options)
    * [Lid switch close action](https://docs.microsoft.com/en-us/windows-hardware/customize/power-settings/power-button-and-lid-settings-lid-switch-close-action)


## Questions

* [How to Modify the Icon of an EXE File](https://www.howtogeek.com/75983/stupid-geek-tricks-how-to-modify-the-icon-of-an-.exe-file/)

  Use [Resource Hacker](http://www.angusj.com/resourcehacker/)


* [Refresh Icon Cache Without Rebooting](https://superuser.com/questions/499078/refresh-icon-cache-without-rebooting)

  ```bash
  ie4uinit.exe -show
  ```

* [Prevent screen dim when you take a screenshot using Win+PrintScreen](https://winaero.com/fix-the-screen-does-not-dim-when-you-take-a-screenshot-using-winprintscreen-in-windows-8-1-or-windows-8/)

  1. <kbd>Win</kbd> + <kbd>R</kbd>
  2. Type `SystemPropertiesAdvanced`
  3. Advanced > Performance > Visual Effects
  4. Disable `Animate windows when minimizing and maximizing`

   ![screenshot flicker](/assets/notes/windows/screenshot-flicker.png)

* [Direct shortcut for Windows Maximize/Minimize/Restore window?](https://superuser.com/q/988554/180163)

  | Shortcut                                         | Action                                               |
  | ------------------------------------------------ | ---------------------------------------------------- |
  | <kbd>Win</kbd> + <kbd>M</kbd>                    | Minimize all windows.                                |
  | <kbd>Win</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Restore minimized windows to the desktop.            |
  | <kbd>Win</kbd> + <kbd>↑</kbd>                    | Maximize the window.                                 |
  | <kbd>Win</kbd> + <kbd>←</kbd>                    | Maximize the window to the left side of the screen.  |
  | <kbd>Win</kbd> + <kbd>→</kbd>                    | Maximize the window to the right side of the screen. |
  | <kbd>Win</kbd> + <kbd>Home</kbd>                 | Minimize all but the active window.                  |

* [Add or Remove Excluded Folders For Search Indexer in Windows 10](https://winaero.com/add-remove-excluded-folders-search-indexer-windows-10/)

  Settings > Windows Search Settings > Excluded Folders

* Disable suggestions on Aero Snap

  Multitasking > Disable "When I snap a window, show what I can snap next to it"

  ![Aero Snap Suggestions](/assets/notes/windows/aero-snap-suggestions.png)

* [Make Cortana use Google Searches](https://techwiser.com/set-windows-11-search-google-search-chrome/)

  * [chrometana](https://chrome.google.com/webstore/detail/chrometana-pro-redirect-c/lllggmgeiphnciplalhefnbpddbadfdi) extension

  * [Edge Deflector](https://github.com/da2x/EdgeDeflector)

* [Hide icons in taskbar](https://superuser.com/q/1352561/180163)

  Settings > Taskbar > Select which icons appear on the taskbar

* [How to disable all live tiles on Windows 10](https://mspoweruser.com/disable-live-tiles-windows-10/)

  Start Menu > Right Click on Tile > More > Turn Live Tile Off

  ![disable live tile](/assets/notes/windows/live-tile.png)

* [Windows Task Manager Paused](https://superuser.com/q/514403/180163)

  View > Update Speed > Low-High


* [Windows 10 Start Menu not showing all shortcuts?](https://superuser.com/q/1106996/180163)

  Check `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

  Hide & Unhide if necessary

* [Adjust volume of each source](https://www.howtogeek.com/244963/how-to-adjust-the-volume-for-individual-apps-in-windows/)

  * Right Click Volume Bar > Sound Mixer
  * [Ear Trumpet](https://github.com/File-New-Project/EarTrumpet)

* Auto Toggle Night Mode - On Schedule

  * [Armin2208/Windows-Auto-Night-Mode](https://github.com/Armin2208/Windows-Auto-Night-Mode) - Automatically switches between the dark and light theme of Windows 10
  * Articles
    * [How to switch between Windows 10 light and dark modes](https://www.windowscentral.com/how-switch-between-light-and-dark-colors-schedule-automatically-windows-10)
    * [How to Auto-Toggle Windows 10 Dark Mode at Night](https://www.makeuseof.com/tag/auto-toggle-dark-mode-windows-10/)

* [How to change Alt + Tab settings for Microsoft Edge](https://www.windowscentral.com/how-customize-alt-tab-microsoft-edge-open-tabs-windows-10-october-2020-update)

  Settings > Multitasking > Alt Tab

* [How can I get to the recycle bin without the desktop icon in windows 7?](https://superuser.com/q/48529/180163)

  Windows Explorer > Address Bar > First Dropdown > Recycle Bin

* Toggle Focus Assist Programmatically

  * [Toggling Focus Assist mode in Win 10 Programmatically](https://stackoverflow.com/q/55477041/1366033)
  * [Keyboard shortcut to quickly toggle Do Not Disturb or Focus Assist?](https://superuser.com/q/1527760/180163)

* Add Clock to Taskbar on All Monitors in Windows 11

  * [Add Clock to the second Display in Windows 11 - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/add-clock-to-the-second-display-in-windows-11/14ed24f5-b203-4bd7-a4e7-c4eb3539b042)
  * [Windows 11 Will Get Taskbar Clocks on Multiple Monitors Soon](https://www.howtogeek.com/772072/windows-11-will-get-taskbar-clocks-on-multiple-monitors-soon/)


* [How can I visualize the file system usage on Windows?](https://superuser.com/q/8248/18016)

  Use [**WinDirStat**](https://windirstat.net/)

* [How can I center Windows 10 start menu position?](https://superuser.com/q/1661622/180163)

  * Add Links, align links left, center right icons, remove link text

* [File Explorer features in Windows 11 22H2](https://www.techrepublic.com/article/how-to-use-new-file-explorer-features-windows-11-22h2/)

* [Disable Recent Files in Quick Access](https://www.makeuseof.com/windows-11-fix-quick-access-not-showing-recent-files/)

* [Dim screen below minimum brightness level](https://superuser.com/q/1086993/180163)

  a. Use [Dimmer](https://www.nelsonpires.com/software/dimmer)

  b. Use Intel Graphics Command Center

  c. Use [f.lux](https://justgetflux.com/)

* [Mouse pointer moving on arrow keys pressed in Windows?](https://superuser.com/q/1467313/180163)

  Close MS Paint

