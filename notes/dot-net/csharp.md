# C Sharp

## Docs

### Functional Techniques

#### [Deconstructing tuples and other types](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct)

```cs
public void Deconstruct(out string firstName, out string lastName)
{
    firstName = FirstName;
    lastName = LastName;
}
var (firstName, lastName) = p;
```

### C# Programming Guide

#### Extension Methods

[Extension Methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)

```cs
namespace ExtensionMethods
{
    public static class MyExtensions
    {
        public static int WordCount(this String str)
        {
            return str.Split(new char[] { ' ', '.', '?' },
                             StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
}
```

## Version History

### C#3

* **Object and Collection Initializers**

  [26.4 Object and Collection Initializers](https://docs.microsoft.com/en-us/previous-versions/dotnet/articles/bb308966(v=msdn.10)#264-object-and-collection-initializers)

  ```cs
  // syntactic sugar
  var a = new Point { X = 0, Y = 1 };

  // same as
  var __a = new Point();
  __a.X = 0;
  __a.Y = 1;
  var a = __a;
  ```

### C#6

* **Exception Filters**

  ```cs
  try { … }
  catch (Exception e) when (e is ArgumentNullException || e is FormatException)
  {
      …
  }
  ```

* **Dictionary Initializers** / **Index Initializers**

  [Index Initializers](https://docs.microsoft.com/en-us/xamarin/cross-platform/platform/csharp-six#index-initializers)

  ```cs
  var userInfo = new NSMutableDictionary {
      ["Created"] = NSDate.Now,
      ["Due"] = NSDate.Now.AddSeconds(60 * 60 * 24),
      ["Task"] = Description
  };
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

* **out variables**

  * [inline `out` variables](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-7#out-variables)

  ```cs
  if (int.TryParse(input, out int result))
      Console.WriteLine(result);
  else
      Console.WriteLine("Could not parse input");
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

* **Target-typed new expressions**

  * [new operator](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/new-operator)
  * [Target-typed new expressions](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/target-typed-new)

### C# 10

* [**Constant interpolated strings**](https://github.com/dotnet/csharplang/issues/2951)



## Questions

* [How to escape braces (curly brackets) in a format string](https://stackoverflow.com/q/91362/1366033)

  Use double curly braces

  ```cs
  var inVal = "1, 2, 3";
  var outVal = $" foo {{{inVal}}}";
  ```

* [Check if element at position [x] exists in the list](https://stackoverflow.com/q/3949113/1366033)

  ```cs
  list.ElementAtOrDefault(2)
  ```


* [Initialize Array](https://stackoverflow.com/q/5678216/1366033)


  ```cs
  new int[] { 10, 20, 30 }
  new[] { 10, 20, 30 }
  ```


* [Initialize Dictionary](https://stackoverflow.com/q/17047602/1366033)


  ```cs
  var dict1 = new Dictionary<string, string>();
  dict.Add("key1", "value1");
  dict.Add("key2", "value2");

  var dict2 = new Dictionary<string, string>
  {
      { "key1", "value1" },
      { "key2", "value2" }
  };

  // C#6
  var dict3 = new Dictionary<string, string>
  {
      ["key1"] = "value1",
      ["key2"] = "value2"
  };
  ```

* [How do I generate a random int number?](https://stackoverflow.com/q/2706500/1366033)

  ```cs
  Random rnd = new Random();
  int month  = rnd.Next(1, 13);  // creates a number between 1 and 12
  int dice   = rnd.Next(1, 7);   // creates a number between 1 and 6
  int card   = rnd.Next(52);     // creates a number between 0 and 51
  ```

* [Since this is an async method, the return expression must be of type `Data` rather than `Task<Data>`](https://stackoverflow.com/q/32499698/1366033)

  [`Task.FromResult`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.fromresult?view=net-5.0)

  ```cs
  public Task<Data> GetData()
  {
      return Task.Run(() =>
      {
          return obj;
      });
  }

  public Task<Data> GetData()
  {
      return Task.FromResult(obj);
  }
  ```

* [Convert array to dictionary](https://stackoverflow.com/q/1385421/1366033)

  ```cs
  using System.Linq;

  string[] myArray = new[] { "A", "B", "C" };
  myArray.ToDictionary(key => key, value => value);
  ```

* [Declare a const array](https://stackoverflow.com/q/5142349/1366033)

  > You need to declare it readonly instead of const:
  > The reason is that const can only be applied to a field whose value is known at compile-time.
  > The array initializer you've shown is not a constant expression

  ```cs
  public static readonly string[] Titles = { "German", "Spanish", "Corrects", "Wrongs" };
  ```

* [Safe element of array access](https://stackoverflow.com/q/693353/1366033)

  ```cs
  int[] array = { 4, 5, 6 };
  int a = array.ElementAtOrDefault(4);
  ```

* [How can I detect if this dictionary key exists in C#?](https://stackoverflow.com/q/2829873/1366033)

  ```cs
  dict.TryGetValue(key, out value);
  ```

* [Create and initialize dictionary from list](https://stackoverflow.com/a/39593789/1366033)

  ```cs
  var myDictionary = myList.ToDictionary(key => key.property1, value => value.property2);
  ```

* [Is Guid considered a value type or reference type?](https://stackoverflow.com/q/2344213/1366033)

  ```cs
  typeof(Guid).IsValueType; // true
  ```

* [Filtering out values from a C# Generic Dictionary](https://stackoverflow.com/q/2131648/1366033)


  > Since Dictionary implements `IEnumerable<KeyValuePair<Key, Value>>`, you can just use `Where`:

  ```cs
  var matches = dictionary.Where(kvp => !kvp.Value.BooleanProperty);
  ```

* [How to convert linq results to HashSet or HashedSet](https://stackoverflow.com/q/3471899/1366033)

  ```cs
  var hashSet = BlockedList.ToHashSet();
  ```

* [Remove duplicates from a `List<T>` in C#](https://stackoverflow.com/q/47752/1366033)

  ```cs
  var noDupes = withDupes.Distinct().ToList();
  ```

* [Array.Join in .Net?](https://stackoverflow.com/q/484464/1366033)

  Use [`String.Join`](https://docs.microsoft.com/en-us/dotnet/api/system.string.join)

  ```cs
  String.Join(",", new string[] {"a", "b", "c"});
  ```

* [Convert any given function into an awaitable task](https://stackoverflow.com/q/32045815/1366033)

  ```cs
  var result1 = await Task.FromResult("Hello World");
  var result2 = await Task.Run(() => "Hello World");
  ```

* [How do I get the list of keys in a Dictionary?](https://stackoverflow.com/q/1276763/1366033)

  ```cs
  using System.Linq;
  List<String> myKeys = myDict.Keys.ToList();
  ```

