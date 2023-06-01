# CSharp Scripts (.CSX)

[filipw/**dotnet-script**](https://github.com/filipw/dotnet-script)

```bash
dotnet tool install --global dotnet-script
```

## Articles

* [C# and .NET Core scripting with the "dotnet-script" global tool](https://www.hanselman.com/blog/c-and-net-core-scripting-with-the-dotnetscript-global-tool)
* [C# Scripting using dotnet-script](https://www.elliotdenolf.com/posts/csharp-scripting-using-dotnet-script/)

## Questions

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

* [Referring to NuGet packages from csx script](https://stackoverflow.com/q/34920408/1366033)

  ```cs
  #r "nuget: AutoMapper, 6.1.0"
  ```

  