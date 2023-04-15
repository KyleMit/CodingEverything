# JetBrains IDE / IntelliJ IDE / Rider

## Products


* [PhpStorm](https://www.jetbrains.com/phpstorm/) - PHP
* IntelliJ IDEA - Java
* PyCharm - Python
* WebStorm - JavaScript
* Rider - DotNet / C#


## Shortcuts

[IntelliJ IDEA keyboard shortcuts—IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html)

* <kbd>Shift</kbd> + <kbd>Shift</kbd> - Search Everywhere
* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> - Find Action (command palette)
* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> - Find Files

* <kbd>Alt</kbd> +  <kbd>Enter ↵</kbd> - Show intention actions / quick fixes
* <kbd>F2</kbd> - Navigate between code issues

* <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd> - Reformat Code
* <kbd>Ctrl</kbd> + <kbd>/</kbd> - Comment line
* <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd> - Uncomment line

* <kbd>Alt</kbd> + <kbd>1</kbd> - Focus Project tool window
* <kbd>Esc</kbd> - Focus Editor

## Docs

* [Quick Start Guide](https://www.jetbrains.com/help/phpstorm/quick-start-guide-phpstorm.html)
* [Editor basics | IntelliJ IDEA Documentation](https://www.jetbrains.com/help/idea/using-code-editor.html)
* [Spellchecking](https://www.jetbrains.com/help/phpstorm/spellchecking.html#fix-typo)
* [PhpStorm > Terminal](https://www.jetbrains.com/help/phpstorm/terminal-emulator.html)

## Blog

* [Using a custom shell with Rider’s built-in terminal](https://blog.jetbrains.com/dotnet/2017/11/15/using-custom-shell-riders-built-terminal/)

## Plugins

* [Entity Framework Core UI - Rider Plugin | Marketplace](https://plugins.jetbrains.com/plugin/18147-entity-framework-core-ui)

## Questions

* [Using Powershell as terminal in IntelliJ IDEA IDEs](https://stackoverflow.com/q/20949892/1366033)

  * <kbd>Ctrl</kbd> + <kbd>Alt</kbd> +  <kbd>S</kbd> - Settings
  * Terminal
  * Set to `pwsh.exe`

* [How to configure dictionary that is already under version control?](https://stackoverflow.com/a/51104437/1366033)

    ```none
    %AppData%\JetBrains\PhpStorm2020.3\options\cachedDictionary.xml
    ```

* [Open containing directory in Windows Explorer from IntelliJ](https://stackoverflow.com/a/65292981/1366033)

   Project > Right Click > Open In > Explorer

* [Highlight unsaved files](https://stackoverflow.com/q/26769154/1366033)

  Settings > Editor > General > Editor Tabs > Mark modified (\*)

* [How to auto format code in WebStorm](https://stackoverflow.com/q/21217791/1366033)

  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd>

* [Add jsdoc comments](https://www.jetbrains.com/help/phpstorm/creating-jsdoc-comments.html)

  Type the opening block comment `/**` , and press <kbd>Enter ↵</kbd>

* [Are VS code keybindings available for IntelliJ Idea?](https://stackoverflow.com/q/47748433/1366033)

  Plugins > [VSCode Keymap](https://plugins.jetbrains.com/plugin/12062-vscode-keymap/)

* [IntelliJ IDEA back/forward with mouse](https://stackoverflow.com/a/75801572/1366033)

  Settings > Keymap > Add Mouse Shortcut

* [IntelliJ Column Selection using Cursor Keys](https://stackoverflow.com/q/26386079/1366033)

* `Clone Caret Above` - <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd>
  * Custom: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd>
* `Clone Caret Below` - <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd>
  * Custom: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd>

* Add remaining text to selection

  * `Editor Actions` > `Move Caret to Page Top with Selection`
  * `Editor Actions` > `Move Caret to Page Bottom with Selection`

  **See Also**: [Create and edit code > Editor Basics > Handle Caret and Select Text](https://www.jetbrains.com/help/rider/Selecting_Text_in_the_Editor.html#select-text)

* [Locate current file in IntelliJ](https://stackoverflow.com/q/1086041/1366033)

  1. <kbd>Alt</kbd> + <kbd>F1</kbd>

  2. Project Explorer > CrossHairs

  3. Project Explorer > Settings > Always Select Opened File

* [Add launchers dir to the PATH](https://stackoverflow.com/q/57810887/1366033)

  Allows you to launch editor from terminal

* [File type associations](https://www.jetbrains.com/help/rider/Creating_and_Registering_File_Types.html)

  Settings > Editor > File Types

* [Combine multiple split panes into single window with tabs in IntelliJ IDEA](https://stackoverflow.com/q/75757976/1366033)

  Go to `Window` > `Editor Tabs` > `Unsplit`

* Change Color for Diff Editor Deletion to Red

  Settings > Editor > Color Scheme > Diff & Merge > Deleted

  * [What do the colors in the Diff viewer mean?? – IDEs Support (IntelliJ Platform) | JetBrains](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000243060-What-do-the-colors-in-the-Diff-viewer-mean-)
  * [Colors and fonts | IntelliJ IDEA Documentation](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html#tips)

* Show all files in solution

  In [Explorer](https://www.jetbrains.com/help/rider/Project_Tool_Window.html), toggle from Solution View to File System View

* [Is there a way to sync settings across JetBrains IDEs?](https://stackoverflow.com/q/21660554/1366033)

  File > Manage IDE Settings > Export & Import

* [Is there a way in Intellij IDEA to see the name of the method the current line belongs to?](https://stackoverflow.com/q/1920451/1366033)

  Settings > Breadcrumbs
