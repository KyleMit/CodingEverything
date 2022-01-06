# Windows Info

## Hotkeys

## Virtual Machines


**Snapping window**: <kbd>⊞ Win</kbd> + <kbd>⮀</kbd> (can be used with <kbd>⮁</kbd> to get into quadrants)
**Switch to recent window**:  <kbd>Alt</kbd> + <kbd>Tab</kbd>
**Task view**: <kbd>⊞ Win</kbd> + <kbd>Tab</kbd>
**Create new virtual desktop**: <kbd>⊞ Win</kbd> + <kbd>Ctrl</kbd> + <kbd>D</kbd>
**Switch Virtual Desktops**: <kbd>⊞ Win</kbd> + <kbd>Ctrl</kbd> + <kbd>⮀</kbd>


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

## Winget

* [winget-cli](https://github.com/microsoft/winget-cli) - Windows Package Manager CLI (aka winget)
* [winget-pkgs](https://github.com/microsoft/winget-pkgs) - The Microsoft community Windows Package Manager manifest repository
* [winstall](https://winstall.app/) - GUI for Windows Package Manager


* [List installed Apps](https://github.com/microsoft/winget-cli/issues/119)

  ```bash
  winget list
  ```

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


