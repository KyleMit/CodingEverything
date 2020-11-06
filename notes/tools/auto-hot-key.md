# Auto Hot Key

http://www.autohotkey.com/
http://www.autohotkey.com./docs/Tutorial.htm

http://www.autohotkey.com./docs/Tutorial.htm
http://www.autohotkey.com/docs/Hotstrings.htm
http://www.autohotkey.com/docs/commands/InputBox.htm


http://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings
http://www.autohotkey.com/download/AutoCorrect.ahk
http://www.biancolo.com/articles/autocorrect/
http://lifehacker.com/192506/download-of-the-day-universal-autocorrect
http://www.academicproductivity.com/2009/prise-these-programs-away-from-my-cold-dead-hands/
http://www.howtogeek.com/howto/45068/how-to-get-spelling-autocorrect-across-all-applications-on-your-system/
http://www.autohotkey.com/board/topic/89909-autocorrect-script-a-bit-better/

http://www.autohotkey.com/board/topic/86937-autohotkey-syntaxhighlight-for-notepad/

[How do I reassign hot keys for my keyboard?](https://support.microsoft.com/en-us/help/4052277/accessories-how-do-i-reassign-hot-keys-for-my-keyboard)\
[Microsoft Mouse and Keyboard Center | Microsoft Hardware](https://www.microsoft.com/accessories/en-us/downloads/mouse-keyboard-center)\
[How to Remap Your Keyboard | PCMag.com](https://www.pcmag.com/feature/362116/how-to-remap-your-keyboard/3)

AHK#

[List of Keys (Keyboard, Mouse and Joystick) | AutoHotkey](https://www.autohotkey.com/docs/KeyList.htm)\
[How to change the keyboard shortcut in an AutoHotKey script](https://www.addictivetips.com/windows-tips/change-keyboard-shortcut-in-an-autohotkey-script/)\
[Remapping Keys (Keyboard, Mouse and Joystick) | AutoHotkey](https://www.autohotkey.com/docs/misc/Remap.htm)

[Hotkeys - Definition & Usage | AutoHotkey](https://www.autohotkey.com/docs/Hotkeys.htm)

```ahk
; Win + Space -> Invoke Serch (like spotlight)#Space::#s
; Right Context Menu Key becomes Win key insteadAppsKey::RWin
```



/*
    Run if window active - https://superuser.com/questions/1357813/autohotkey-how-to-make-my-script-run-only-within-a-specific-program
    Win Active - https://autohotkey.com/docs/commands/_IfWinActive.htm
    Hot reload scripts on save - https://autohotkey.com/board/topic/43779-reload-this-script-shortcut-solved/
    Windows Pen - https://windows.gadgethacks.com/how-to/reprogram-your-surface-pen-buttons-do-anything-you-want-0166903/

    #F20 ; Single-click
    #F19 ; Double-click
    #F18 ; Click and hold;
    #ifwinactive, Pluralsight Offline Player;
*/


#F20::#PrintScreen
#F19::Space
#F18::Left

; Use context menu as right windows key
AppsKey::RWin

; Win + Space will launch search (Win + S)
#Space::#s
