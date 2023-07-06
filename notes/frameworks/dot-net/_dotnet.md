# dotnet core


## Tools

```bash
dotnet tool install --global dotnet-aspnet-codegenerator
```

### dotnet-aspnet-codegenerator

```bash
# check available commands
dotnet-aspnet-codegenerator -p . --help

# check help on how to generate controller
dotnet-aspnet-codegenerator -p . controller --help
```

## Playgrounds

* [DotNetFiddle](https://dotnetfiddle.net/)
* [LINQPad](https://www.linqpad.net/)

## Nuget

[Microsoft.VisualStudio.Web.CodeGeneration.Design](https://www.nuget.org/packages/Microsoft.VisualStudio.Web.CodeGeneration.Design/)

```bash
# Add Microsoft.VisualStudio.Web.CodeGeneration.Design package to the project as a NuGet package reference.
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 5.0.1
```

## API

* [`System.Text.Json`](https://docs.microsoft.com/en-us/dotnet/api/system.text.json?view=netcore-3.1)




## Read Excel File

### Solutions

* **General**
  * [.net - Reading Excel files from C# - Stack Overflow](https://stackoverflow.com/questions/15828/reading-excel-files-from-c-sharp)
  * [c# - Read an excel file on asp.net core 1.0 - Stack Overflow](https://stackoverflow.com/questions/40557935/read-an-excel-file-on-asp-net-core-1-0)
  * [entity framework - Upload and read excel file using .NET core MVC - Stack Overflow](https://stackoverflow.com/questions/55176996/upload-and-read-excel-file-using-net-core-mvc)
  * [uploading and reading from an excel file in asp.net core 2 - Stack Overflow](https://stackoverflow.com/questions/49658913/uploading-and-reading-from-an-excel-file-in-asp-net-core-2)
  * [c# - Is there any .NET Core compatible library for reading excel spreadsheet file? - Stack Overflow](https://stackoverflow.com/questions/34884117/is-there-any-net-core-compatible-library-for-reading-excel-spreadsheet-file)\
* **EPPlus**
  * [c# - EPPlus - Read Excel Table - Stack Overflow](https://stackoverflow.com/questions/36637882/epplus-read-excel-table)
  * [c# - How to parse excel rows back to types using EPPlus - Stack Overflow](https://stackoverflow.com/questions/33436525/how-to-parse-excel-rows-back-to-types-using-epplus)

### Libraries

* [TonyQus/npoi](https://github.com/tonyqus/npoi)
  * [NPOI](https://github.com/dotnetcore/NPOI)
  * [ExcelMapper](https://github.com/mganss/ExcelMapper)
  * [Npoi.Mapper](https://github.com/donnytian/Npoi.Mapper)
* [EPPlus](https://github.com/EPPlusSoftware/EPPlus)
  * [JanKallman/EPPlus](https://github.com/JanKallman/EPPlus)
* [ExcelDataReader](https://github.com/ExcelDataReader/ExcelDataReader)
* [DocumentFormat.OpenXml](https://github.com/OfficeDev/Open-XML-SDK)
* [`OleDbDataAdapter`](https://docs.microsoft.com/en-us/dotnet/api/system.data.oledb.oledbdataadapter) + [OLE DB Provider for Microsoft Jet](https://docs.microsoft.com/en-us/sql/ado/guide/appendixes/microsoft-ole-db-provider-for-microsoft-jet)
* [Syncfusion - Excel Framework](https://www.syncfusion.com/excel-framework/net)

### Excel Data Reader

```cs
List<UserModel> users = new List<UserModel>();
var fileName = "./Users.xlsx";
// For .net core, the next line requires the NuGet package,
// System.Text.Encoding.CodePages
System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
{
    using (var reader = ExcelReaderFactory.CreateReader(stream))
    {
        while (reader.Read()) //Each row of the file
        {
            users.Add(new UserModel
            {
                Name = reader.GetValue(0).ToString(),
                Email = reader.GetValue(1).ToString(),
                Phone = reader.GetValue(2).ToString()
            });
        }
    }
}
```

### Sample Table


| Client ID | First Name | Last Name | Date of Birth | Status |
| :-------: | :--------: | :-------: | :-----------: | :----: |
|     1     |   Erica    |   Baker   |   1/1/1980    |  Tech  |
|     2     |   Annie    |  Easley   |   4/23/1933   |  NASA  |
|     3     |  Dorothy   |  Vaughan  |   9/20/1910   |  NASA  |
|     4     | Katherine  |  Johnson  |   8/26/1918   |  NASA  |

### Sample Class

```cs
 class Client
{
    [Column("Client ID")]
    public int ClientID { get; set; }

    [Column("First Name")]
    public string FirstName { get; set; }

    [Column("Last Name")]
    public string LastName { get; set; }

    [Column("Date Of Birth")]
    public DateTime DateOfBirth { get; set; }

    [Column("Status")]
    public string Status { get; set; }
}
```

## Github

[Github API v3 - User agent required](https://developer.github.com/v3/#user-agent-required)

## Programming

[What is the difference between tar and zip?](https://stackoverflow.com/q/10540935/1366033)

> `tar` in itself just bundles files together (the result is called a tarball), while zip applies compression as well.
> Usually you use `gzip` along with `tar` to compress the resulting tarball, thus achieving similar results as with zip.


## Downloads & SDKs

* [Download .NET SDKs for Visual Studio](https://dotnet.microsoft.com/download/visual-studio-sdks)


## Questions

* [In MVC, how do I return a string result?](https://stackoverflow.com/q/553936/1366033)

  ```cs
  public ActionResult Temp() {
      return Content("Hi there!");
  }
  ```

* [Difference between ApiController and Controller in ASP.NET MVC](https://stackoverflow.com/q/9494966/1366033)


* [How do I set a default User Agent on an HttpClient?](https://stackoverflow.com/q/44076962/1366033)


* [Nested using statements in C#](https://stackoverflow.com/q/1329739/1366033)

  ```cs
  using (StreamReader outFile = new StreamReader(outputFile.OpenRead()))
  using (StreamReader expFile = new StreamReader(expectedFile.OpenRead()))
  {
      ///...
  }
  ```

* [How can I call an async method in Main?](https://stackoverflow.com/a/13003483/1366033)

  ```cs
  static async Task Main(string[] args)
  {
      test t = new test();
      await t.Go();
      Console.WriteLine("finished");
      Console.ReadKey();
  }
  ```

* [Using declarations - C#8](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#using-declarations)

  ```cs
  static int WriteLinesToFile(IEnumerable<string> lines)
  {
      using var file = new System.IO.StreamWriter("WriteLines2.txt");
      file.WriteLine(line);
  }
  ```

* [How do I download zip file in C#?](https://stackoverflow.com/a/62865681/1366033)

  ```cs
  using var httpClient = new HttpClient();
  httpClient.DefaultRequestHeaders.UserAgent.TryParseAdd("C# App");
  ```


* [Why is `StringValues` used for `Request.Query` values?](https://stackoverflow.com/q/48188934/1366033)


* [How to load appsettings.json section into Dictionary in .NET Core?](https://stackoverflow.com/q/42846296/1366033)

* [How can I unit test my custom validation attribute](https://stackoverflow.com/q/4666678/1366033)

  ```cs
  [Test]
  public void AttributeTest()
  {
    // arrange
    var value = //.. value to test - new Eligibility() ;
    var attrib = new EligibilityStudentDebtsAttribute();

    // act
    var result = attrib.IsValid(value);

    // assert
    Assert.That(result, Is.True)
  }
  ```

* Struct vs Class

  * [When should I use a struct rather than a class in C#?](https://stackoverflow.com/q/521298/1366033)
  * [What's the difference between struct and class in .NET?](https://stackoverflow.com/q/13049/1366033)

* [Stack Trace - What does d__5 signify](https://stackoverflow.com/q/21053050/1366033)

  The d__5 portion is a prefix that is generated by the C# compiler to keep the construct unique from other generated members / types


* [Is there a URL validator on .Net?](https://stackoverflow.com/q/927847/1366033)

* [How to check whether a string is a valid HTTP URL?](https://stackoverflow.com/q/7578857/1366033)

  ```cs
  Uri.IsWellFormedUriString("https://www.google.com", UriKind.Absolute)
  ```

  [Uri.IsWellFormedUriString(String, UriKind)](https://docs.microsoft.com/en-us/dotnet/api/system.uri.iswellformeduristring?redirectedfrom=MSDN&view=netcore-3.1#System_Uri_IsWellFormedUriString_System_String_System_UriKind_)

* [What is the difference between `using` and `await using`?](https://stackoverflow.com/q/58610350/1366033)

  [`IDisposable`](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable?view=net-5.0) vs [`IAsyncDisposable`](https://docs.microsoft.com/en-us/dotnet/api/system.iasyncdisposable?view=net-5.0)

* [DateTime vs DateTimeOffset](https://stackoverflow.com/q/4331189/1366033)

  * `DateTimeOffset` -  *instantaneous time* / *absolute time*
    * DateTimeKind.Utc
  * `DateTime` - *calendar time* / *civil time*
    * DateTimeKind.Unspecified
    * DateTimeKind.Local


* [Dictionary vs HashTable](https://stackoverflow.com/q/301371/1366033)

  Prefer dictionary for typesafety

* [JSON.NET Error Self referencing loop detected for type](https://stackoverflow.com/q/7397207/1366033)

  ```cs
  JsonConvert.SerializeObject(YourObject, Formatting.Indented,
      new JsonSerializerSettings() {
          ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
      }
  );
  ```

* [How do I turn a C# object into a JSON string in .NET?](https://stackoverflow.com/q/6201529/1366033)

  ```cs
  Newtonsoft.Json.JsonConvert.SerializeObject(new {foo = "bar"})
  ```

  ```cs
  System.Text.JsonJsonSerializer.Serialize(new {foo = "bar"});
  ```


* Await All

  * [Using async/await for multiple tasks](https://stackoverflow.com/q/12337671/1366033)
  * [Running multiple async tasks and waiting for them all to complete](https://stackoverflow.com/q/25009437/1366033)
  * [Awaiting multiple Tasks with different results](https://stackoverflow.com/q/17197699/1366033)

  ```cs
  int[] ids = new[] { 1, 2, 3, 4, 5 };
  await Task.WhenAll(ids.Select(i => DoSomething(1, i, blogClient)));
  ```

* [C# elapsed time on a timer?](https://stackoverflow.com/q/9706803/1366033)

  ```cs
  var stopWatch = new Stopwatch();
  stopWatch.Start();
  stopWatch.Stop();
  var duration = stopWatch.ElapsedMilliseconds;
  ```

* [How to get awaitable Thread.Sleep?](https://stackoverflow.com/q/13429707/1366033)

  Use [`Task.Delay`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.delay)

  ```cs
  await Task.Delay(1000);
  ```

* [Convert any given function into an awaitable task](https://stackoverflow.com/q/32045815/1366033)


  ```cs
  int task = await Task.FromResult(TestFunc(2));
  ```

  ```cs
  await Task.Run(() => TestFunc(2));
  ```

* [How to cancel a CancellationToken](https://stackoverflow.com/questions/30875279/how-to-cancel-a-cancellationtoken)

  ```cs
  CancellationTokenSource source = new CancellationTokenSource();
  previouslyProvidedToken = source.Token;
  ...
  source.Cancel();
  ```

* [Calling a method every x minutes](https://stackoverflow.com/q/13019433/1366033)

  ```cs
  var timer = new PeriodicTimer(TimeSpan.FromSeconds(10));

  while (await timer.WaitForNextTickAsync())
  {
      //Business logic
  }
  ```

* [Is there an easy way to return a string repeated X number of times?](https://stackoverflow.com/q/3754582/1366033)

  ```cs
  string result = new String('-', 5); // "-----"
  ```

* [Can I split an IEnumerable into two by a boolean criteria without two queries?](https://stackoverflow.com/q/4549339/1366033)

  ```cs
  var groups = allValues.GroupBy(val => val.SomeProp)
                        .ToDictionary(g => g.Key, g => g.ToList());
  List<MyObj> trues = groups[true];
  List<MyObj> falses = groups[false];
  ```

  * [split list into two lists using bool function](https://stackoverflow.com/q/56575899/1366033)
  * [How to split a List in two using LINQ](https://stackoverflow.com/q/54129757/1366033)
  * [Split list into two lists with single LINQ statement](https://stackoverflow.com/q/22264394/1366033)


* [How would you count occurrences of a string within a string?](https://stackoverflow.com/q/541954/1366033)

  ```cs
  "AABC".Count(c => c == 'A'); // 2
  ```

* [What is the difference between String.Empty and ""](https://stackoverflow.com/q/151472/1366033)

  Historically, perf.  Currently, pref

  [In C#, should I use string.Empty or String.Empty or "" to initialize a string?](https://stackoverflow.com/q/263191/1366033)

* [`string.Join` on a `List<int>` or other type](https://stackoverflow.com/q/3610431/1366033)

  ```cs
  var ids = new [] {1,2,3};
  var str = string.Join(",", ids);
  ```

* [Split List into Sublists with LINQ](https://stackoverflow.com/q/419019/1366033)

  ```cs
  var items = new [] {1,2,3,4,5};

  foreach (var batch in items.Chunk(2)) {
    Console.WriteLine(string.Join(",", batch));
  }
  ```

  [Fiddle Demo](https://dotnetfiddle.net/UQN3IM)

* [How do you initialize a FormCollection with properties in .NET?](https://stackoverflow.com/q/22487627/1366033)

  [`Microsoft.AspNetCore.Http.FormCollection`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.formcollection?view=aspnetcore-6.0)

  ```cs
  var formCol = new FormCollection(new Dictionary<string, Microsoft.Extensions.Primitives.StringValues>
  {
    { "Field1", "String Value 1" },
    { "Field2", "String Value 2" },
    { "Field3", "String Value 3" }
  });
  ```

* What is `.esproj`?

* [How to write Unicode characters to the console?](https://stackoverflow.com/q/5750203/1366033)

  ```cs
  Console.OutputEncoding = System.Text.Encoding.UTF8;
  ```


* [Is there a method to find the max of 3 numbers in C#?](https://stackoverflow.com/q/6800838/1366033)

  Use [`Enumerable.Max`](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.max)

  ```cs
  new [] { 1, 2, 3 }.Max(); // 3
  ```

* [Best way to draw table in console app](https://stackoverflow.com/q/856845/1366033)


* [Why is there no ForEach extension method on IEnumerable?](https://stackoverflow.com/q/101265/1366033)

  Use LINQ or use foreach statement


* [Composite formatting](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting)

* [C# 9 switch expression with multiple cases with same result](https://stackoverflow.com/q/56676260/1366033)

  ```cs
  var switchValue = 3;
  var resultText = switchValue switch
  {
      1 or 2 or 3 => "one, two, or three",
      4 => "four",
      5 => "five",
      _ => "unknown",
  };
  ```


* [How to change C# Language Version for all of the projects in my solution in one place?](https://stackoverflow.com/q/61434436/1366033)

  Add to `Directory.Build.props`

  [Customize your build](https://learn.microsoft.com/en-us/visualstudio/msbuild/customize-your-build)


* [Setting Authorization Header of HttpClient](https://stackoverflow.com/q/14627399/1366033)


  ```cs
  httpClient.DefaultRequestHeaders.Authorization =
      new AuthenticationHeaderValue("Bearer", "Your Oauth token");
  ```

* [How to convert base64 value from a database to a stream with C#](https://stackoverflow.com/q/31524343/1366033)

  ```cs
  var bytes = Convert.FromBase64String(base64EncodedString);
  var stream = new MemoryStream(bytes);
  var contents = new StreamContent(stream);
  ```

* [How do I get the path of the assembly the code is in?](https://stackoverflow.com/q/52797/1366033)

  [`Assembly.Location`](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.assembly.location)

  ```cs
  Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
  ```

* [Returning a stream from `File.OpenRead()`](https://stackoverflow.com/q/8741474/1366033)

  [`File.Open`](https://learn.microsoft.com/en-us/dotnet/api/system.io.file.open)

  ```cs
  using var fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read)
  ```

* [How to measure elapsed time using DateTime class?](https://stackoverflow.com/q/45959959/1366033)

  ```cs
  var startTime = DateTime.Now;
  Thread.Sleep(100);
  var endTime = DateTime.Now;
  var interval = (endTime - startTime)
  Console.WriteLine(interval.TotalMilliseconds);
  ```

* [XmlDocument - load from string?](https://stackoverflow.com/q/4929653/1366033)

  [`XmlDocument.LoadXml`](https://learn.microsoft.com/en-us/dotnet/api/system.xml.xmldocument.loadxml)

  ```cs
  XmlDocument doc = new XmlDocument();
  doc.LoadXml(str);
  ```

* [How to get content body from a httpclient call?](https://stackoverflow.com/q/26597665/1366033)

  [`HttpContent.ReadAsStringAsync`](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpcontent.readasstringasync)

  ```cs
  var response = await httpClient.PostAsync(...);
  var contents = await response.Content.ReadAsStringAsync();
  ```

* [How the int.TryParse actually works](https://stackoverflow.com/q/15294878/1366033)

  [`int.TryParse`](https://learn.microsoft.com/en-us/dotnet/api/system.int32.tryparse)

  ```cs
  var valueStr = "6";
  var success = int.TryParse(valueStr, out var valueInt);
  // success = true
  // valueInt = 6
  ```

* [Converting byte array to string and printing out to console](https://stackoverflow.com/q/10940883/1366033)

  ```cs
  var bytes = new byte[] { 1, 255, 12 };
  var str = string.Join(",", bytes);
  Console.WriteLine(str) // 1,255,12
  ```

* [Read a XML from a string](https://stackoverflow.com/q/8401280/1366033)

  ```cs
  var rawStringXML = @"<?xml version='1.0'?><response><error code='1'> Success</error></response>";
  var xmlDoc = new XmlDocument();
  xmlDoc.LoadXml(rawStringXML);
  ```

* [Format XML string to print friendly XML string](https://stackoverflow.com/q/1123718/1366033)

  ```cs
  var rawStringXML = @"<?xml version='1.0'?><response><error code='1'> Success</error></response>";
  var xmlDoc = new XmlDocument();
  var sw = new StringWriter();
  xmlDoc.LoadXml(rawStringXML);
  xmlDoc.Save(sw);
  var formattedXml = sw.ToString();
  ```

* [Can't specify the 'async' modifier on the 'Main' method of a console app](https://stackoverflow.com/q/9208921/1366033)

  [Available in **C# 7.1**](https://devblogs.microsoft.com/dotnet/welcome-to-c-7-1/#gist82557368)

  ```cs
  class Program
  {
      static async Task Main(string[] args)
      {
          Bootstrapper bs = new Bootstrapper();
          var list = await bs.GetList();
      }
  }
  ```

* [How to load a file into memory stream](https://stackoverflow.com/q/6213993/1366033)

  ```cs
  FileStream str = File.OpenRead("C:/temp/image.png")
  ```

* [How to send POST with form data in C#](https://stackoverflow.com/q/62679718/1366033)

  Use [`HttpClient`](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=netframework-4.8)

  ```cs
  private static readonly HttpClient client = new HttpClient();

  private async Task<string> PostHTTPRequestAsync(string url, Dictionary<string, string> data)
  {
      using HttpContent formContent = new FormUrlEncodedContent(data);
      using HttpResponseMessage response = await client.PostAsync(url, formContent).ConfigureAwait(false);
      response.EnsureSuccessStatusCode();
      return await response.Content.ReadAsStringAsync().ConfigureAwait(false);
  }
  ```

  **See Also**: [Use IHttpClientFactory to implement resilient HTTP requests](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/use-httpclientfactory-to-implement-resilient-http-requests)


* [Verifying that a string contains only letters in C#](https://stackoverflow.com/q/1181419/1366033)

  ```cs
  Regex.IsMatch(input, @"^[a-zA-Z]+$");
  ```

  Use [`Char.IsLetter`](https://learn.microsoft.com/en-us/dotnet/api/system.char.isletter?view=net-7.0)

  ```cs
  bool result = input.All(Char.IsLetter);
  ```

* [Is a LINQ statement faster than a 'foreach' loop?](https://stackoverflow.com/q/3156059/1366033)

  No

* [Which loop runs faster, 'for' or 'foreach'?](https://stackoverflow.com/q/365615/1366033)

  `for` is faster, but `foreach` is useful on collections with `IEnumerable`

* [Convert integer to binary](https://stackoverflow.com/q/2954962/1366033)

  ```cs
  var binary = Convert.ToString(3, 2); // 11
  ```

* [Convert an integer to a binary string with leading zeros](https://stackoverflow.com/q/23905188/1366033)

  ```cs
  Convert.ToString(3, 2).PadLeft(4, '0') // 0011
  ```

* [Checking for "a-z" and "A-Z"](https://stackoverflow.com/q/6017778/1366033)

  Use [`Char.IsAsciiLetter(Char)`](https://learn.microsoft.com/en-us/dotnet/api/system.char.isasciiletter)

  ```cs
  Char.IsAsciiLetter('a') // true
  ```

* [Get a list of distinct values in List](https://stackoverflow.com/q/10255121/1366033)

  Use [`Enumerable.Distinct`](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.distinct?view=net-8.0)

  ```cs
  Notes.Select(x => x.Author).Distinct();
  ```

* [Trim start of string](https://stackoverflow.com/q/4335878/1366033)

  ```cs
  public static string RemovePrefix(this string s, string prefix)
  {
      if (s.StartsWith(prefix))
      {
          return s.Substring(prefix.Length);
      }
      return s;
  }
  ```

* [Add item to beginning of list](https://stackoverflow.com/q/390491/1366033)

  Use [`List.Insert`](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.insert?view=net-7.0) with position `0`

  ```cs
  ti.Insert(0, initialItem);
  ```

* [Check if a string contains an element from a list (of strings)](https://stackoverflow.com/q/500925/1366033)

  [ContainsAny | .NET Fiddle](https://dotnetfiddle.net/It1G06)

  ```cs
  var containsMatch = "Hello World".ContainsAny(new[] { "World", "Earth" }); // true

  public static class StringExtensions
  {
      /// <summary>
      /// Tests whether any of the entries in the search list can be found in the source string
      /// </summary>
      public static bool ContainsAny(this string source, IEnumerable<string> search)
      {
          return search.Any(source.Contains);
      }
  }
  ```

  ```cs
  var list = new [] {"a","b"};
  var containsMatch = list.ContainsAny(new [] {"b", "c"}); // true

  public static class LinqExtensions
  {
      /// <summary>
      /// Tests whether the any value in the source list matches any of the values in the search list
      /// </summary>
      public static bool ContainsAny<T>(this IEnumerable<T> source, IEnumerable<T> search)
      {
          return source.Any(search.Contains);
      }
  }
  ```

* [`Console.WriteLine` with multiple variables into single line](https://stackoverflow.com/q/15418467/1366033)

  C#6 - Use [String Interpolation](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)

  ```cs
  var id = 1;
  var name = "Kyle"
  Console.WriteLine($"{id} - {name}"); // 1 - Kyle
  ```

  Use [Composite Formatting](https://learn.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting)

  ```cs
  var id = 1;
  var name = "Kyle"
  Console.WriteLine("{0} - {1}", id, name); // 1 - Kyle
  ```

* [How to reference generic classes and methods in xml documentation](https://stackoverflow.com/q/532166/1366033)

  Surround the generic type parameter list with curly braces `{}`

  How would I reference `FancyClass<T>`

  ```cs
  // <see cref="FancyClass{T}"/>
  ```

* [How do I reference a C# keyword in XML documentation?](https://stackoverflow.com/q/693196/1366033)

  ```cs
  /// <see langword="true"/>
  ```

* [Difference between InvariantCulture and Ordinal string comparison](https://stackoverflow.com/q/492799/1366033)

  * Use `StringComparison.Ordinal` for performance and default use case


* [How to mark a method as obsolete or deprecated?](https://stackoverflow.com/q/1759352/1366033)

  Use [`ObsoleteAttribute`](https://learn.microsoft.com/en-us/dotnet/api/system.obsoleteattribute)

  ```cs
  [Obsolete("Method1 is deprecated, please use Method2 instead.")]
  public void Method1()
  { … }
  ```

  
* [json.net required property not found in json](https://stackoverflow.com/q/7472486/1366033)

  [Required Docs](https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_Required.htm)

  | Option                  | Must be present | Can be Null value |
  | ----------------------- | :-------------: | :---------------: |
  | `Required.Default`      |                 |         ✓         |
  | `Required.AllowNull`    |        ✓        |         ✓         |
  | `Required.Always`       |        ✓        |                   |
  | `Required.DisallowNull` |                 |                   |


* [How to handle null/empty values in JsonConvert.DeserializeObject](https://stackoverflow.com/q/31813055/1366033)

  ```cs
  var settings = new JsonSerializerSettings
  {
      NullValueHandling = NullValueHandling.Ignore,
      MissingMemberHandling = MissingMemberHandling.Ignore
  };
  var jsonModel = JsonConvert.DeserializeObject<Customer>(jsonString, settings);
  ```

* [How to take all but the last element in a sequence using LINQ?](https://stackoverflow.com/q/1779129/1366033)

  Use [`SkipLast`](https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable.skiplast)

  ```cs
  var sequence = new List<string>() {"A","B","C"};
  var allButLast = sequence.SkipLast(1);
  Console.WriteLine(string.Join(",", allButLast)); // A,B
  ```

  Use [Ranges and Indices](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/ranges)

  ```cs
  var allButLast = sequence[..^1];
  ```

* [Get first k words of a string?](https://stackoverflow.com/q/13368345/1366033)

  ```cs
  /// <summary>
  /// Fluent version of <code>string.Join</code>.
  /// </summary>
  public static string StringJoin(this IEnumerable<string> strings, string joinSeparator = "\n")
  {
      return strings == null ? null : string.Join(joinSeparator, strings);
  }
  ```

  ```cs
  public static string TakeFirstKWords(this string str, int k)
  {
      return str.Split().Where(s => s.HasValue()).Take(k).StringJoin(" ");
  }
  ```

