# Dotnet CLI

[dotnet SDKs](https://dotnet.microsoft.com/download/visual-studio-sdks)

## Commands

### New

* [`dotnet new`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new)
  * `dotnet new --list`
    * [Templates](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new#arguments)
      * `console`
      * `mvc`
      * `webapp`

### Run

[`dotnet run`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run)

> `--`Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run.

### Test

[`dotnet test`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-test)

### Tools

List Tool versions:

```bash
dotnet tool list -g
```

## Custom CLI

* Docs
  * [dotnet tool install command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-tool-install)
  * [Tutorial: Create a .NET tool](https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools-how-to-create)
* Articles
  * [Build a Command Line Interface(CLI) Program with .NET Core](https://medium.com/swlh/build-a-command-line-interface-cli-program-with-net-core-428c4c85221)
  * [Create a CLI tool with .Net6. Probably you know the new windows](https://medium.com/geekculture/create-a-cli-tool-with-net6-94c03ad3e474)
* YouTube
  * [How to create your own .NET CLI tools to make your life easier](https://www.youtube.com/watch?v=JNDgcBDZPkU)
  * [Intro To The .NET CLI - How To Use It, Why We Need It, And More](https://www.youtube.com/watch?v=RQLzp2Z8-BE)
  * [Learn Command Line Interface (CLI) for Build, Run and Publish in .NET Core](https://www.youtube.com/watch?v=TxhFzrZF8kM)

## Questions

* [Global `omnisharp.json`](https://github.com/OmniSharp/omnisharp-roslyn/wiki/Configuration-Options#global-omnisharpjson)

  ```none
  %USERPROFILE%/.omnisharp/omnisharp.json
  ```

* [Unable to resolve .NETCoreApp v3.1 Packages](https://stackoverflow.com/a/71211964/1366033)

  ```bash
  dotnet nuget add source --name nuget.org https://api.nuget.org/v3/index.json
  ```

* [Failure to Install Microsoft.AspNetCore.AppRef](https://stackoverflow.com/q/63872619/1366033)

  Not intended for installation try a separate package instead:

  ```bash
  dotnet add package Microsoft.AspNetCore.WebUtilities --version 2.2.0
  ```


* [Specify build configuration](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-build)

  ```bash
  dotnet build --configuration Release
  ```

* [How to determine if .NET Core is installed](https://stackoverflow.com/q/38567353/1366033)

  [`dotnet` command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet)

  ```bash
  dotnet --info
  dotnet --list-sdks
  dotnet --list-runtimes
  ```

* [Switch between dotnet core SDK versions](https://stackoverflow.com/q/42077229/1366033)

  [`dotnet new` command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new)

  ```bash
  dotnet new globaljson --sdk-version 3.1.101
  ```


  ```bash
  dotnet --version
  ```

  ```bash
  dotnet --list-sdks
  ```

