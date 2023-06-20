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

* [ASP.NET MVC 3 Razor: Include JavaScript file in the head tag](https://stackoverflow.com/q/4311783/1366033)

  `_Layout.cshtml`

  ```cs
  @RenderSection("JavaScript", required: false)
  ```

  `_SomeView.cshtml`

  ```cs
  @section JavaScript
  {
      <script type="text/javascript" src="@Url.Content("/Scripts/SomeScript.js")"></script>
      <script type="text/javascript" src="@Url.Content("/Scripts/AnotherScript.js")"></script>
  }
  ```

* [What is an MvcHtmlString and when should I use it?](https://stackoverflow.com/q/2293357/1366033)

  [`System.Web.Mvc.MvcHtmlString`](https://learn.microsoft.com/en-us/dotnet/api/system.web.mvc.mvchtmlstring)


  > Razor encodes everything by default, but by using MvcHtmlString in your html helpers you can tell razor that it doesn't need to encode it.

* [Equivalent for MvcHtmlString in ASP.NET 5?](https://stackoverflow.com/q/29602202/1366033)

  Use [`Microsoft.AspNetCore.Html.HtmlString](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.html.htmlstring)

* [Where does Console.WriteLine go in ASP.NET?](https://stackoverflow.com/q/137660/1366033)

  Use [`System.Diagnostics.Debug.WriteLine()`](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.writeline?view=net-7.0)

  Shows up in Output Window > Debug

* [How to get raw request body in ASP.NET?](https://stackoverflow.com/q/6362781/1366033)

  ```cs
  public async Task<string> GetRequestBodyAsync()
  {
      using var reader = new StreamReader(HttpContext.Request.Body);
      var body = await reader.ReadToEndAsync();
      return body;
  }
  ```

  