---
aliases:
  - JetBrains IDE
  - Rider
---

# IntelliJ IDE / JetBrains IDE / Rider

## Products


* [PhpStorm](https://www.jetbrains.com/phpstorm/) - PHP
* IntelliJ IDEA - Java
* PyCharm - Python
* WebStorm - JavaScript
* Rider - DotNet / C#


## Keyboard Shortcuts / Hot Keys / Settings / Bindings / Mappings / Commands

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

* <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> - Toggle Bookmark
* <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> - Pin Tab

## Issues

* [Allow to filter debug output](https://youtrack.jetbrains.com/v2/issue/RIDER-17528)
  * [Implement pattern-based filters for 'Debug Output'](https://youtrack.jetbrains.com/issue/RIDER-67404)
  * [Debug Output Filter](https://rider-support.jetbrains.com/hc/en-us/community/posts/360001334220-Debug-Output-Filter)

* [pull requests: don't mark files as viewed automatically](https://youtrack.jetbrains.com/issue/IDEA-284941/pull-requests-dont-mark-files-as-viewed-automatically)
  * [Explicitly mark reviewed files as Viewed](https://youtrack.jetbrains.com/issue/IDEA-282201/)

## Docs

* [Quick Start Guide](https://www.jetbrains.com/help/phpstorm/quick-start-guide-phpstorm.html)
* [Editor basics | IntelliJ IDEA Documentation](https://www.jetbrains.com/help/idea/using-code-editor.html)
* [Spellchecking](https://www.jetbrains.com/help/phpstorm/spellchecking.html#fix-typo)
* [PhpStorm > Terminal](https://www.jetbrains.com/help/phpstorm/terminal-emulator.html)
* [New UI](https://www.jetbrains.com/help/rider/New_UI.html)

## Changelog / History / Versions / What's New

* [What's new in 2018-2](https://www.jetbrains.com/idea/whatsnew/2018-2/)
* [What’s New in 2022-3](https://www.jetbrains.com/rider/whatsnew/2022-3/)
* [What’s New in 2023-1](https://www.jetbrains.com/rider/whatsnew/2023-1/)
* [What’s New in 2024-1](https://www.jetbrains.com/rider/whatsnew/2024-1/)

## Code Coverage - dotCover

* [Analyze Coverage of Unit Tests](https://www.jetbrains.com/help/rider/Cover_Unit_Tests_(Basic_Scenario).html)
* [Unit Tests Coverage window](https://www.jetbrains.com/help/rider/Unit_Tests_Coverage_window.html)
* [How do you enable test coverage in Rider](https://stackoverflow.com/questions/72132532/)


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

* [Is it possible to change the console font size in IntelliJ IDEA](https://stackoverflow.com/q/35829103/1366033)

  Settings > Editor > Color Scheme > Console Font

* Show all files in solution

  In [Explorer](https://www.jetbrains.com/help/rider/Project_Tool_Window.html), toggle from Solution View to File System View

* [Is there a way to sync settings across JetBrains IDEs?](https://stackoverflow.com/q/21660554/1366033)

  File > Manage IDE Settings > Export & Import

* [Is there a way in IntelliJ IDEA to see the name of the method the current line belongs to?](https://stackoverflow.com/q/1920451/1366033)

  Settings > Breadcrumbs

* [IntelliJ IDEA highlight all occurrences of selected text](https://stackoverflow.com/q/52373402/1366033)

  Install [BrowseWordAtCaret](https://plugins.jetbrains.com/plugin/201-browsewordatcaret)

  Native - Highlight Usages of element at caret

  See Also: IntelliJ: [How to auto-highlight variables like in Eclipse](https://stackoverflow.com/q/3763183/1366033)

* [Turn off background color for SQL strings in PHP Storm](https://stackoverflow.com/q/31376913/1366033)

  Settings > Editor > Color Scheme > General > Code > Injected language fragment

* [How to review a pull request in IntelliJ IDEA?](https://stackoverflow.com/q/40217494/1366033)

  As of [IntelliJ IDEA 2020.2](https://blog.jetbrains.com/idea/2020/05/intellij-idea-2020-2-early-access-program-is-starting/#version_control), use **Git** > **Pull Requests**

* [JetBrains Rider to stop opening diff tab on navigation](https://stackoverflow.com/q/64638884/1366033)

  As of [Rider 2019.3 EAP](https://blog.jetbrains.com/dotnet/2019/11/18/new-way-commit-introducing-commit-repository-tool-windows-rider-2019-3-eap/)

  Single Click - Diff
  Double Click - Source or <kbd>F4</kbd>

* [Customize Inline / Inlay Parameter Hints](https://stackoverflow.com/q/61727399/1366033)

  * [Configure inlay hints](https://www.jetbrains.com/help/rider/Inline_Parameter_Name_Hints.html#configure-inlay-hints)

  Settings > Editor > Inlay Hints > C# > Parameter Name Hints

  **See Also**: [IntelliJ shows method parameter hints on usage - How to disable it](https://stackoverflow.com/q/40866202/1366033)

  * [IntelliJ](https://stackoverflow.com/q/40866202/)
  * [PhpStorm](https://stackoverflow.com/q/41743888/)
  * [Android Studio](https://stackoverflow.com/q/42346480/)

* [IntelliJ IDEA underlines variables when using += in JAVA](https://stackoverflow.com/q/51697168/1366033)

  Settings > Editor > Color Scheme > Language Defaults

  **See Also** [What does a gray underline mean in Rider?](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000395439-Underlined-variables-)

* [How do you change background color in the settings of JetBrain's IDE?](https://stackoverflow.com/q/19411510/1366033)

  Settings > Editor > Color Scheme > General > Text > Default Text > Background

  **See Also**: [Colors schemes: fonts and colors of IDE text](https://www.jetbrains.com/help/rider/Configuring_Colors_and_Fonts.html#tips)

* [Resharper - turn off solution wide analysis](https://stackoverflow.com/q/9287765/1366033)

  Settings > Editor > Inspection Settings > Enable Solution Wide Analysis

  **See Also** [Solution-wide analysis](https://www.jetbrains.com/help/rider/Code_Analysis__Solution-Wide_Analysis.html)

* [How can I tell IntelliJ's "Find in Files" to ignore generated files?](https://stackoverflow.com/q/16671706/1366033)

  Scope > Custom

  Possible to exclude files matched by gitignore when searching with "Find in Files"

  [Files ignored by .gitignore appear in search results : IDEA-125906](https://youtrack.jetbrains.com/issue/IDEA-125906/Files-ignored-by-.gitignore-appear-in-search-results)

* [Solution explorer files are duplicated](https://youtrack.jetbrains.com/issue/RIDER-90671/Solution-explorer-files-are-duplicated)

* [How to exclude a file extension from IntelliJ IDEA search?](https://stackoverflow.com/q/22143881/1366033)

  Use `!` in file mask

  * `!*en.js, !*.d.ts, !*.map`
  * `*.cs,*.ts,*.svelte,!*.d.ts`


* [Empty tag doesn't work in some browsers warning](https://stackoverflow.com/questions/61279364/)

  Settings > Editor > Inspection Settings > Other Languages > Html > Empty Tag

  [Svelte: Empty tag doesn't work in some browsers warning is not relevant](https://youtrack.jetbrains.com/issue/WEB-60591)

* [Soft wrap long line](https://stackoverflow.com/q/23004520/1366033)

  * <kbd>Alt</kbd> + <kbd>Z</kbd> - Toggle Soft Wrap

  Settings > Editor > General > Soft Wraps

  **See Also**: [Enable Soft Wrap - IntelliJ IDEA Guide](https://www.jetbrains.com/idea/guide/tips/enable-soft-wrap/)


* Incremental Build

  * [Incremental build in Rider | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2017/05/24/incremental-build-rider/)
  * [Build process | JetBrains Rider Documentation](https://www.jetbrains.com/help/rider/Build_Process.html)


* [Git Stash vs Shelve in IntelliJ IDEA](https://stackoverflow.com/q/28008139/1366033)

  * Stash - Git feature
  * Shelve - IntelliJ feature


* [Show Recent Files](https://stackoverflow.com/q/64897764/1366033)

  * <kbd>Ctrl</kbd> + <kbd>E</kbd> - **Recent Files** list
  * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> - **Recent Locations** switcher

* ReOpen Recently Closed Editor Tabs

  * <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> - Keymap > Main Menu > Window > Editor Tabs > Reopen Closed Tab

  * [Re-Open Closed Editor Tabs Keyboard Shortcut : WEB-49099](https://youtrack.jetbrains.com/issue/WEB-49099/Re-Open-Closed-Editor-Tabs-Keyboard-Shortcut)
  * [How to reopen the latest closed files – IDEs Support (IntelliJ Platform) | JetBrains](https://intellij-support.jetbrains.com/hc/en-us/community/posts/207017765-How-to-reopen-the-latest-closed-files)

* [Windows Defender might be impacting your build performance](https://stackoverflow.com/a/78816923/1366033)

  > The IDE has detected Microsoft Defender with Real-Time Protection enabled. It might severely degrade IDE performance. It is recommended to add the following paths to the Defender folder exclusion list:
  >
  > * C:\code\repo
  > * C:\Users\user\.nuget
  > * C:\Users\user\AppData\Local\JetBrains\Rider2024.1
  >
  > Choose "Automatically" to run a script that excludes these paths (note: Windows will ask for administrative privileges). Choose "Manually" to see Defender configuration instructions.


  ```ps1
  Add-MpPreference -ExclusionPath "C:\Path\To\Your\Directory"
  Get-MpPreference | Select-Object -ExpandProperty ExclusionPath
  ```

* [How can I save groups of open tabs in IntelliJ?](https://stackoverflow.com/questions/28800704/1366033)

  * Tools > Tasks & Contexts > Save Context...
  * Tools > Tasks & Contexts > Load Context...

  **See Also**: [Manage tasks and contexts | JetBrains Rider Documentation](https://www.jetbrains.com/help/rider/managing_tasks_and_context.html#work-with-tasks)

* [How can I save list of opened tabs in Intellij Idea, when I switch git branch?](https://stackoverflow.com/questions/50465030/1366033)

  * Version Control > Confirmation > Restore workspace on branch switching


  **See Also**: [Manage Git branches | JetBrains Rider Documentation](https://www.jetbrains.com/help/rider/Manage_branches.html)

* Connect to JIRA

  [Manage tasks and contexts | JetBrains Rider Documentation](https://www.jetbrains.com/help/rider/managing_tasks_and_context.html#connect-to-tracker)
  [Atlassian account](https://id.atlassian.com/manage-profile/security/api-tokens)


* [Settings search - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/settings-search/457/5)

  **Plugin**: [settings-search: Adds a search bar to Obsidian.md's settings](https://github.com/javalent/settings-search)


* [Move pinned tabs to left - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/move-pinned-tabs-to-left/86446)

