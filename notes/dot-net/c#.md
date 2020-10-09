# C Sharp

## C#6

### Exception Filters

```cs
try { … }
catch (Exception e) when (e is ArgumentNullException || e is FormatException)
{
    …
}
```

## C#7

### Discards

[C#7 Discards](https://csharp.today/c-7-0-discards/)

```cs
_ = await table.CreateIfNotExistsAsync();
```

### nameof

[nameof Expression](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/nameof)

[nameof in DebuggerDisplay attribute](https://stackoverflow.com/a/43850831/1366033)

```cs
[DebuggerDisplay("={" + nameof(GetString) + "()}")]
class C {
    string GetString() { }
}
```
