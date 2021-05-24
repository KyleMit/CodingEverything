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

* [Best way to convert query string to dictionary in C#](https://stackoverflow.com/a/67639394/1366033)

  ```cs
  public static class HttpRequestExtensions
  {
    public static Dictionary<string, string> ToDictionary(this IQueryCollection query)
    {
      return query.Keys.ToDictionary(k => k, v => (string)query[v]);
    }
  }

  // use it like this
  var params = httpRequest.Query.ToDictionary()
  ```

