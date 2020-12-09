# dotnet core


## CLI

### Dotnet Run

[`dotnet run`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run)

> `--`Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run.

### Dotnet New

* [`dotnet new`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new)
  * [Templates](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new#arguments)
    * `console`
    * `mvc`
    * `webapp`

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


## Nuget

[Microsoft.VisualStudio.Web.CodeGeneration.Design](https://www.nuget.org/packages/Microsoft.VisualStudio.Web.CodeGeneration.Design/)

```bash
# Add Microsoft.VisualStudio.Web.CodeGeneration.Design package to the project as a NuGet package reference.
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 5.0.1
```

## Library

### [System.Text.Json](https://docs.microsoft.com/en-us/dotnet/api/system.text.json?view=netcore-3.1)

[Nested using statements in C#](https://stackoverflow.com/q/1329739/1366033)

```cs
using (StreamReader outFile = new StreamReader(outputFile.OpenRead()))
using (StreamReader expFile = new StreamReader(expectedFile.OpenRead()))
{
    ///...
}
```

[How can I call an async method in Main?](https://stackoverflow.com/a/13003483/1366033)

```cs
static async Task Main(string[] args)
{
    test t = new test();
    await t.Go();
    Console.WriteLine("finished");
    Console.ReadKey();
}
```

[Using declarations - C#8](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#using-declarations)

```cs
static int WriteLinesToFile(IEnumerable<string> lines)
{
    using var file = new System.IO.StreamWriter("WriteLines2.txt");
    file.WriteLine(line);
}
```

[How do I download zip file in C#?](https://stackoverflow.com/a/62865681/1366033)

```cs
using var httpClient = new HttpClient();
httpClient.DefaultRequestHeaders.UserAgent.TryParseAdd("C# App");
```

### HttpClient

[How do I set a default User Agent on an HttpClient?](https://stackoverflow.com/q/44076962/1366033)




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
