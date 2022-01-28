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
