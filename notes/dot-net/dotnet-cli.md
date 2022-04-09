# Dotnet CLI

[dotnet SDKs](https://dotnet.microsoft.com/download/visual-studio-sdks)

## Commands

### New

* [`dotnet new`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new)
  * [Templates](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new#arguments)
    * `console`
    * `mvc`
    * `webapp`

### Run

[`dotnet run`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run)

> `--`Delimits arguments to dotnet run from arguments for the application being run. All arguments after this delimiter are passed to the application run.


### Tools

List Tool versions:

```bash
dotnet tool list -g
```

### Dotnet Scripts

[filipw/**dotnet-script**](https://github.com/filipw/dotnet-script)

```bash
dotnet tool install --global dotnet-script
```


* [Intellisense not working for inline dependencies](https://github.com/filipw/dotnet-script/issues/230)


  ```bash
  dotnet script init
  ```

  Generates `omnisharp.json`

  ```json
  {
    "script": {
      "enableScriptNuGetReferences": true
    }
  }
  ```

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

* [Run selected unit tests](https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=xunit)

  ```bash
  dotnet test --filter FullyQualifiedName.IntegrationTests
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


