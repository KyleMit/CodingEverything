# dotnet core


## CLI

### Dotnet Run

[`dotnet run`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run)

> `--`Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run.

### Dotnet New

[`dotnet new`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new)


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









## Github

[Github API v3 - User agent required](https://developer.github.com/v3/#user-agent-required)

## Programming

[What is the difference between tar and zip?](https://stackoverflow.com/q/10540935/1366033)

> `tar` in itself just bundles files together (the result is called a tarball), while zip applies compression as well.
> Usually you use `gzip` along with `tar` to compress the resulting tarball, thus achieving similar results as with zip.


## Downloads & SDKs

* [Download .NET SDKs for Visual Studio](https://dotnet.microsoft.com/download/visual-studio-sdks)
