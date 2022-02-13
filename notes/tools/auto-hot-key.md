# Auto Hot Key

http://www.autohotkey.com/


## Docs

* [Tutorial](http://www.autohotkey.com/docs/Tutorial.htm)
* [Hotstrings](http://www.autohotkey.com/docs/Hotstrings.htm)
* [InputBox](http://www.autohotkey.com/docs/commands/InputBox.htm)
* [Remapping Keys (Keyboard, Mouse and Joystick)](https://www.autohotkey.com/docs/misc/Remap.htm)
* [Hotkeys - Definition & Usage](https://www.autohotkey.com/docs/Hotkeys.htm)
* [List of Keys (Keyboard, Mouse and Joystick)](https://www.autohotkey.com/docs/KeyList.htm)

## Articles

* [How do I reassign hot keys for my keyboard?](https://support.microsoft.com/en-us/help/4052277/accessories-how-do-i-reassign-hot-keys-for-my-keyboard)
* [Microsoft Mouse and Keyboard Center](https://www.microsoft.com/accessories/en-us/downloads/mouse-keyboard-center)
* [How to Remap Your Keyboard](https://www.pcmag.com/feature/362116/how-to-remap-your-keyboard/3)
* [How to change the keyboard shortcut in an AutoHotKey script](https://www.addictivetips.com/windows-tips/change-keyboard-shortcut-in-an-autohotkey-script/)

* [Hot reload scripts on save](https://autohotkey.com/board/topic/43779-reload-this-script-shortcut-solved/)
* [Windows Pen](https://windows.gadgethacks.com/how-to/reprogram-your-surface-pen-buttons-do-anything-you-want-0166903/)


## Fix Common Spelling Issues

* [AutoCorrect.ahk](http://www.autohotkey.com/download/AutoCorrect.ahk)
* [Wikipedia:Lists of common misspellings](http://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings)
* http://www.biancolo.com/articles/autocorrect/
* http://lifehacker.com/192506/download-of-the-day-universal-autocorrect
* http://www.academicproductivity.com/2009/prise-these-programs-away-from-my-cold-dead-hands/
* http://www.howtogeek.com/howto/45068/how-to-get-spelling-autocorrect-across-all-applications-on-your-system/
* http://www.autohotkey.com/board/topic/89909-autocorrect-script-a-bit-better/

## Scripts

```ahk
; Win + Space -> Invoke Search (like spotlight)#Space::#s
; Right Context Menu Key becomes Win key insteadAppsKey::RWin
```


```ahk
#F20 ; Single-click
#F19 ; Double-click
#F18 ; Click and hold;
#ifwinactive, Pluralsight Offline Player;
```


```ahk
#F20::#PrintScreen
#F19::Space
#F18::Left

; Use context menu as right windows key
AppsKey::RWin

; Win + Space will launch search (Win + S)
#Space::#s
```

## Questions


* [Run if window active](https://superuser.com/q/1357813/180163)

  * [Win Active](https://autohotkey.com/docs/commands/_IfWinActive.htm)

* Keyboard Event Viewer

  [w3c/uievents: UI Events](https://github.com/w3c/uievents)
  [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)


* [How to build AHK scripts automatically on startup?](https://stackoverflow.com/q/41723490/1366033)

  Add script to `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`

* [Powershell script with response and no window?](https://stackoverflow.com/q/53359613/1366033)

  ```ahk
  Run pwsh -WindowStyle Hidden -Command "Stop-ElgatoKeyLight -Host 192.168.1.64"
  ```

* [AutoHotKey - Run powershell with parameters and hide flag](https://stackoverflow.com/q/71065902/1366033)

