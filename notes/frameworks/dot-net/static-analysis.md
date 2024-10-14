---
aliases:
  - Code Analysis
---

# Static Analysis / Code Analysis


[Code analysis in .NET](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview)

## Third Party

* [JosefPihrt/Roslynator](https://github.com/JosefPihrt/Roslynator) - A collection of 500+ analyzers, refactorings and fixes for C#, powered by Roslyn

## Custom

* [Tutorial: Write your first analyzer and code fix | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/tutorials/how-to-write-csharp-analyzer-code-fix)

## Rule Categories

* **Design rules** - Design rules support adherence to the .NET Framework Design Guidelines.
* **Documentation rules** - Documentation rules support writing well-documented libraries through the correct use of XML documentation comments for externally visible APIs.
* **Globalization rules** - Globalization rules support world-ready libraries and applications.
* **Portability and interoperability rules** - Portability rules support portability across different platforms. Interoperability rules support interaction with COM clients.
* **Maintainability rules** - Maintainability rules support library and application maintenance.
* **Naming rules** - Naming rules support adherence to the naming conventions of the .NET design guidelines.
* **Performance rules** - Performance rules support high-performance libraries and applications.
* **Publish rules** - Publish rules support single-file applications.
* **Reliability rules** - Reliability rules support library and application reliability, such as correct memory and thread usage.
* **Security rules** - Security rules support safer libraries and applications. These rules help prevent security flaws in your program.
* **Style rules** - Style rules support consistent code style in your codebase. These rules start with the "IDE" prefix.
* **Usage rules** - Usage rules support proper usage of .NET.



## Visual Studio

* New line uses indentation of 4 instead of 2

* [Visual Studio indentation set to two spaces](https://stackoverflow.com/q/49378798/1366033)
* [EditorConfig settings](https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options?view=vs-2019)
* [.NET code style rule options](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options)


## Microsoft

* [Code analysis for managed code](https://docs.microsoft.com/en-us/visualstudio/code-quality/code-analysis-for-managed-code-overview?view=vs-2019)
* [Analyzer configuration](https://docs.microsoft.com/en-us/visualstudio/code-quality/use-roslyn-analyzers?view=vs-2019)
  * [Convert an existing Ruleset file to EditorConfig file](https://docs.microsoft.com/en-us/visualstudio/code-quality/use-roslyn-analyzers?view=vs-2019#convert-an-existing-ruleset-file-to-editorconfig-file)
* [Code analysis rule sets](https://docs.microsoft.com/en-us/visualstudio/code-quality/using-rule-sets-to-group-code-analysis-rules?view=vs-2019)
* [Create a custom code analysis rule set](https://docs.microsoft.com/en-us/visualstudio/code-quality/how-to-create-a-custom-rule-set?view=vs-2019)

* Microsoft.NetCore.Analyzers
* Microsoft.NetFramework.Analyzers
* Microsoft.CodeQuality.Analyzers
* Microsoft.CodeAnalysis.VersionCheckAnalyzer
* Microsoft.CodeAnalysis.FXCopAnalyzer

### Rules

* [CA2007: Do not directly await a Task](https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca2007)
* [CA1849: Call async methods when in an async method](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1849)
* [CA1852: Seal internal types](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1852)


## StyleCop / FX Cop

* Nuget
  * [Microsoft.CodeAnalysis.FxCopAnalyzers](https://www.nuget.org/packages/Microsoft.CodeAnalysis.FxCopAnalyzers)
  * [StyleCop.Analyzers](https://www.nuget.org/packages/StyleCop.Analyzers/1.2.0-beta.333)
* Github
  * [dotnet/roslyn-analyzers](https://github.com/dotnet/roslyn-analyzers)
  * [DotNetAnalyzers/StyleCopAnalyzers](https://github.com/DotNetAnalyzers/StyleCopAnalyzers)
* Docs
  * [Enable or install first-party .NET analyzers](https://docs.microsoft.com/en-us/visualstudio/code-quality/install-net-analyzers?view=vs-2019)

### Questions

* [Run autofix across the entire solution](https://github.com/DotNetAnalyzers/StyleCopAnalyzers/issues/2147)

* [Can StyleCop automatically fix anything?](https://stackoverflow.com/questions/832209/can-stylecop-automatically-fix-anything)
  * [StyleCopFixer](https://marketplace.visualstudio.com/items?itemName=c0x3y.StyleCopFixer)
  * [StyleCop/StyleCop.ReSharper](https://github.com/StyleCop/StyleCop.ReSharper)

## Resharper

* Features
  * [Code Analysis with Error Checking & Code Annotations](https://www.jetbrains.com/resharper/features/code_analysis.html)
  * [ReSharper by Language - C#](https://www.jetbrains.com/help/resharper/Languages_CSharp.html)
* Docs
  * [Code Analysis](https://www.jetbrains.com/help/resharper/Code_Analysis__Index.html)
  * [Find Code Issues with Code Inspection](https://www.jetbrains.com/help/resharper/Finding_Code_Issues.html)
