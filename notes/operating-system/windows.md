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

<kbd>Ctrl</kbd> + <kbd>Enter</kbd> - open link in new tab (stay on current tab)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd> - open link in new tab (switch to new tab)

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
  3. Advanced > Visual Effects
  4. Disable `Animate windows when minimizing and maximizing`
