# C Sharp

## Docs

* [Local functions](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)
* [Lambda expressions](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)

## Functional Techniques

### [Deconstructing tuples and other types](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct)

```cs
public void Deconstruct(out string firstName, out string lastName)
{
    firstName = FirstName;
    lastName = LastName;
}
var (firstName, lastName) = p;
```

## C# Programming Guide

## Extension Methods

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

* [What's new in C# 10](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10)
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

* [Convert char to int in C#](https://stackoverflow.com/q/239103/1366033)

  * [`Char.GetNumericValue`](https://docs.microsoft.com/en-us/dotnet/api/system.char.getnumericvalue)
  * [`Int32.Parse`](https://docs.microsoft.com/en-us/dotnet/api/system.int32.parse?view=net-6.0)
  * [`Convert.ToInt32`](https://docs.microsoft.com/en-us/dotnet/api/system.convert.toint32?view=net-6.0#system-convert-toint32(system-string))

  ```cs
  (int)char.GetNumericValue('1'); // 1
  int.Parse('1'.ToString());      // 1
  Convert.ToInt32('1'.ToString()) // 1
  ```

* [Check if an entity is the first element of a foreach loop](https://stackoverflow.com/q/3553352/1366033)

  [Add break between elements | .NET Fiddle](https://dotnetfiddle.net/9tb3cy)

  ```cs
  bool first = true;

  foreach(var item in items)
  {
      if (first)
      {
          // first stuff
          first = false;
      }
      // other stuff
  }
  ```

* [Return all enumerables with yield return at once; without looping through](https://stackoverflow.com/q/1270024/1366033)

  In F#

  ```fs
  yield! return errors
  ```

  In C#

  ```cs
  foreach (var e in errors)
    yield return e
  ```

* [String.Join method that ignores empty strings?](https://stackoverflow.com/q/16325995/1366033)

  ```cs
  String.Join(",", myArray.Where(s => !string.IsNullOrEmpty(s)))
  ```

* [How to Sort a `List<T>` by a property in the object](https://stackoverflow.com/q/3309188/1366033)

  ```cs
  var sortedList = myList.OrderBy(x => x.OrderDate).ToList();
  ```

* [Public readonly field v.s. get-only property](https://stackoverflow.com/q/40039175/1366033)

  * [Read-Only Properties in C#](https://docs.microsoft.com/en-us/dotnet/csharp/properties#read-only)
  * [readonly keyword](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly)

* [What is the difference between a field and a property?](https://stackoverflow.com/q/295104/1366033)

  Properties expose fields. Fields should (almost always) be kept private

  * Framework Design Guidelines
    * [Member Design Guidelines](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/member?redirectedfrom=MSDN)
    * [Property Design](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/property?redirectedfrom=MSDN)
    * [Field Design](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/field?redirectedfrom=MSDN)

* [What's the difference between struct and class in .NET?](https://stackoverflow.com/q/13049/1366033)

  * [Choosing Between Class and Struct](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/choosing-between-class-and-struct)

* [Value Types and Reference Types](https://stackoverflow.com/q/5057267/1366033)

  * [Value Types and Reference Types](https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/data-types/value-types-and-reference-types)

* [ImmutableArray vs ImmutableList](https://stackoverflow.com/q/22349861/1366033)

  * [Please welcome ImmutableArray](https://devblogs.microsoft.com/dotnet/please-welcome-immutablearrayt/)
  * [Immutability in C# Part One](https://ericlippert.com/2007/11/13/immutability-in-c-part-one-kinds-of-immutability/)

* ToImmutableArray vs ImmutableArray.Create

  * [`ImmutableArray.Create`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.immutable.immutablearray.create)
  * [`ImmutableArray.ToImmutableArray`](https://docs.microsoft.com/en-us/dotnet/api/system.collections.immutable.immutablearray.toimmutablearray)

  ```cs
  var arr1 = new [] {1,2,3}.ToImmutableArray();
  var arr2 = ImmutableArray.Create(new [] {1,2,3});
  var arr3 = ImmutableArray.Create(1,2,3);
  ```

* [Switch Expression over Range of Values](https://stackoverflow.com/q/24335731/1366033)

  ```cs
  var season = DateTime.Today.Month switch
  {
      >= 3 and < 6 => "spring",
      >= 6 and < 9 => "summer",
      >= 9 and < 12 => "autumn",
      12 or (>= 1 and < 3) => "winter",
      _ => ""
  };
  ```

* [How to read an entire file to a string using C#?](https://stackoverflow.com/q/7387085/1366033)

  [How to read from a text file](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/how-to-read-from-a-text-file)

  ```cs
  string contents = System.IO.File.ReadAllText(@"C:\temp\test.txt");
  ```


* [Write string to text file](https://stackoverflow.com/q/1225857/1366033)

  [How to write to a text file](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/file-system/how-to-write-to-a-text-file)

  ```cs
  System.IO.File.WriteAllText (@"D:\path.txt", contents);
  ```

* [Async await in linq select](https://stackoverflow.com/q/35011656/1366033)

  ```cs
  await Task.WhenAll(source.Select(async s => await method(s)));
  ```

* [Getting the Redirected URL from the Original URL](https://stackoverflow.com/q/704956/1366033)

  ```cs
  public static async Task<Uri> GetRedirectedUrlAsync(Uri uri, CancellationToken cancellationToken = default)
  {
      using var client = new HttpClient();
      using var response = await client.GetAsync(uri, cancellationToken);
      return response.RequestMessage.RequestUri;
  }
  ```

* [delegate keyword vs. lambda notation](https://stackoverflow.com/q/299703/1366033)

  * **Delegate**: `delegate { x = 0; }`
  * **Lambda**: `() => { x = 0 }`


* [Feature 'inferred delegate type' is not available in C# 9.0](https://stackoverflow.com/q/73814626/1366033)

  Inferred delegate lambdas available in C#10

  ```cs
  var name = "Kyle";
  var sayHello = () => $"Hello, {name}";
  Console.WriteLine(sayHello());
  ```

* [How can I find the method that called the current method?](https://stackoverflow.com/q/171970/1366033)

  [Attributes interpreted by the C# compiler](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/attributes/caller-information)
  [CallerMemberName Demo](https://dotnetfiddle.net/vjgmxS)

  ```cs
  using System.Runtime.CompilerServices;
  public static void LoggerMethod([CallerMemberName] string memberName = "") {
    Console.WriteLine($"Hello {memberName}");
  }
  ```
