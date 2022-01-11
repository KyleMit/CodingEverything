# Resharper

## Docs

* [Introduction](https://www.jetbrains.com/help/resharper/Introduction__Index.html)

* **Navigate and Search**
  * <kbd>Ctrl</kbd> + <kbd>Tab</kbd> - [Navigate editor tabs and tool windows](https://www.jetbrains.com/help/rider/Navigation_and_Search__Context_Dependent_Navigation.html#navigating-editor-tabs-and-tool-windows)


## Features

* [HTML - Code Style Assistance - Normalize Quotes](https://www.jetbrains.com/help/resharper/Code_Style_Assistance_in_HTML.html#normalize)

## Version History

[ReSharper 2020.2: Improved Code Analysis for C# 8, Code Cleanup on Save, and Revamped Unit Test Runner | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2020/08/13/resharper-2020-2-released/)

* [What’s New in ReSharper 2020.3](https://www.jetbrains.com/resharper/whatsnew/2020-3/)

  * C# Updates
  * Inlay Hints

* [What’s New in ReSharper 2021.1](https://www.jetbrains.com/resharper/whatsnew/2021-1/)

  * Default Navigation Action for Compiled Code
  * Decompiled Sources
  * .NET Framework Sources
  * Object Browser
  * Assembly Explorer
  * Metadata View

## Editor

* [Action List](https://www.jetbrains.com/help/resharper/Actions_List.html)

  <kbd>Alt</kbd> + <kbd>Enter ↵</kbd>  `ReSharper_AltEnter` - Show Inline Action List [Quick-Fixes](https://www.jetbrains.com/help/resharper/Code_Analysis__Quick-Fixes.html)

* [Manage and Apply Code Formatting Rules](https://www.jetbrains.com/help/resharper/Enforcing_Code_Formatting_Rules.html)

  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Enter ↵</kbd> - ReSharper_ReformatCode - Format Current File

* [Refactor This](https://www.jetbrains.com/help/resharper/Refactor_This.html)

  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> - `ReSharper_RefactorThis` -  Pull Up Refactor Menu

* [Find Actions and Options](https://www.jetbrains.com/help/resharper/Navigating_to_Action.html)

  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> - `ReSharper_GotoAction` - Pull Up Inline Action Menu

* HotKey Explorer

  <kbd>Ctrl</kbd> (3x)

* [Inspect This](https://www.jetbrains.com/help/resharper/Code_Analysis__Inspect_This.html)

  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> - `ReSharper_InspectThis` - Inspect This

## Code Analysis

* [Naming Style](https://www.jetbrains.com/help/resharper/Coding_Assistance__Naming_Style.html)

## Code Style

* [Manage and Apply Code Formatting Rules](https://www.jetbrains.com/help/resharper/Enforcing_Code_Formatting_Rules.html)

```ini
# ReSharper properties
resharper_csharp_keep_blank_lines_in_code = 1
resharper_csharp_keep_blank_lines_in_declarations = 1
```

## Code Inspections

* [Compiler Warning (level 4) CS1591](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/cs1591) - Missing XML comment for publicly visible type or member 'Type_or_Member'

## Show Resharper Warnings

* [Code Inspections](https://www.jetbrains.com/help/resharper/Code_Analysis__Code_Inspections.html)
* [Solution-Wide Analysis](https://www.jetbrains.com/help/resharper/Code_Analysis__Solution-Wide_Analysis.html)
* [Solution-Wide Code Inspections](https://www.jetbrains.com/help/resharper/Code_Analysis__Solution-Wide_Analysis__Solution-Wide_Code_Inspections.html)
* [Errors/Warnings in Solution window](https://www.jetbrains.com/help/resharper/Reference__Windows__Errors_in_Solution.html#bba8b161)


## Hunspell Dictionaries

* Forum
  * [How to make custom dictionary for Hunspell](https://stackoverflow.com/q/7561648/1366033)
  * [Creating a hunspell dictionary for use as spellcheck in Open Office](http://web.archive.org/web/20130810100226/http://www.suares.com/index.php?page_id=25&news_id=233)
* VSCode
  * [hunspell - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.hunspell)
  * [Jason3S/vscode-hunspell-ext: Support for Hunspell syntax highlighting in VS Code](https://github.com/Jason3S/vscode-hunspell-ext)
* Docs
  * [Hunspell: About](http://hunspell.github.io/)
  * [hunspell/hunspell: The most popular spellchecking library.](https://github.com/hunspell/hunspell)
  * [hunspell/hunspell.github.io: Hunspell's website](https://github.com/hunspell/hunspell.github.io)
  * [Hunspell - Wikipedia](https://en.wikipedia.org/wiki/Hunspell)
* JetBrains
  * [Hunspell dictionaries support](https://blog.jetbrains.com/phpstorm/2018/01/hunspell-dictionaries-support/)
  * [Spell Checking with ReSpeller | ReSharper](https://www.jetbrains.com/help/resharper/Spell_Checking.html)
  * [ReSpeller | ReSharper](https://www.jetbrains.com/help/resharper/Settings_ReSpeller.html)
  * [Integrated spell checking with ReSpeller in ReSharper and Rider | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2018/07/10/integrated-spell-checking-respeller-resharper-rider/)
  * [ReSpeller: A Spell-Checking Plugin for ReSharper | The .NET Tools Blog](https://blog.jetbrains.com/dotnet/2013/01/14/respeller-a-spell-checking-plugin-for-resharper/)


## Questions

* [How to move Resharper menu back top main menu bar in VS 2019](https://resharper-support.jetbrains.com/hc/en-us/community/posts/360003373399-How-to-move-Resharper-menu-back-top-main-menu-bar-in-VS-2019)

  Tools > Customize > Extensions Menu Tab > Uncheck Resharper

  **Previously**: [Extensions in Main Menu](https://marketplace.visualstudio.com/items?itemName=Evgeny.RestoreExtensions)

* [Will ReSharper use Roslyn](https://blog.jetbrains.com/dotnet/2014/04/10/resharper-and-roslyn-qa/)

  No

* [Suspend / Resume ReSharper](https://stackoverflow.com/q/2189792/1366033)

  Options > Resharper > Suspend

  `ReSharper_ToggleSuspended`

  Also: [How can I temporary disable/turn off ReSharper?](https://resharper-support.jetbrains.com/hc/en-us/articles/206546999-How-can-I-temporary-disable-turn-off-ReSharper-)
