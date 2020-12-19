# ASP.NET



## Questions

* [Bind query parameters to a model in ASP.NET Core](https://stackoverflow.com/q/42929376/1366033)

  ```cs
  [FromQuery(Name = "first_name")]
  public string FirstName { get; set; }
  ```

* [Develop ASP.NET Core apps using a file watcher | Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch?view=aspnetcore-5.0)

  ```cs
  dotnet run
  dotnet watch run
  ```

* [No service for type 'Microsoft.AspNetCore.Mvc.ViewFeatures.ITempDataDictionaryFactory' has been registered](https://stackoverflow.com/q/38709538/1366033)

  Use `AddMvc()` instead of `AddMvcCore()` in `Startup.cs` and it will work.

