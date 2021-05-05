# C Sharp

## Version History

### C#6

* **Exception Filters**

  ```cs
  try { … }
  catch (Exception e) when (e is ArgumentNullException || e is FormatException)
  {
      …
  }
  ```

### C#7

[What's New in C# 7.0 - C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-7)


* **Discards**

  * [Discards - C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/discards)

  ```cs
  _ = await table.CreateIfNotExistsAsync();
  ```

* **nameof**

  * [nameof Expression](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof)
  * [nameof in DebuggerDisplay attribute](https://stackoverflow.com/a/43850831/1366033)

  ```cs
  [DebuggerDisplay("={" + nameof(GetString) + "()}")]
  class C {
      string GetString() { }
  }
  ```

### C#8

* **Pattern Matching**

  * [Pattern Matching in C# 8.0](https://docs.microsoft.com/en-us/archive/msdn-magazine/2019/may/csharp-8-0-pattern-matching-in-csharp-8-0)
  * [Pattern matching overview - C# guide](https://docs.microsoft.com/en-us/dotnet/csharp/pattern-matching)

### C# 9

[What's new in C# 9.0 - C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9)

* **Record Types**

  * [Use record types - C# tutorial](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/records)
  * [Records - C# reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)


### C# 10

* [**Constant interpolated strings**](https://github.com/dotnet/csharplang/issues/2951)

## Questions

* [How to escape braces (curly brackets) in a format string](https://stackoverflow.com/q/91362/1366033)

  Use double curly braces

  ```cs
  var inVal = "1, 2, 3";
  var outVal = $" foo {{{inVal}}}";
  ```



