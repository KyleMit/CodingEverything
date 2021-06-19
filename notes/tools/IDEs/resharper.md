# Resharper

## Docs

* [Introduction](https://www.jetbrains.com/help/resharper/Introduction__Index.html)

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