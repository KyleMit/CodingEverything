# Razor

[Razor syntax reference for ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-6.0)


## Questions

* [How to create a function in a cshtml template?](https://stackoverflow.com/q/6531983/1366033)

  ```cs
    @functions{
      void RenderName(string name)
      {
        <span>Hello, @name</span>
      }
    }

    <p>@RenderName(Model.Name)</p>
  ```

* Render List of Items

  ```cs
  @functions{
    void RenderList(List<IStackHtmlContent> items)
    {
      if (items.Count == 1) {
        @items[0]
      }
      else {
        <ul>
          @foreach(var item in items) {
            <li>@item</li>
          }
        </ul>
      }
    }
  }

  <p>@RenderList(Model.WhatNext)</p>
  ```

* [Looping through a list in razor and adding a separator between items](https://stackoverflow.com/a/75512520/1366033)

  ```cs
  public static class Helpers
  {
      public static IHtmlContent HtmlJoin<T>(
          this IEnumerable<T> items,
          Func<T, IHtmlContent> separator,
          Func<T, IHtmlContent> itemTemplate)
      {
          var html = new HtmlContentBuilder();
          var first = true;

          foreach (var item in items)
          {
              if (!first) {
                  html.AppendHtml(separator(item));
              }
              html.AppendHtml(itemTemplate(item));
              first = false;
          }

          return html;
      }
  }
  ```

  ```cs
  var veggies = new [] { "Acai", "Bean", "Corn" };
  @veggies.HtmlJoin(@<span> | </span>, @<span>@item</span>) 
  ```


* [MVC Razor @foreach](https://stackoverflow.com/q/11261590/1366033)

  ```html
  @foreach (var item in Model.Foos)
  {
      <div>@item.Bar</div>
  }
  ```

* [Conditional attributes in HTML](https://stackoverflow.com/a/8071699/1366033)


  ```html
  <input type="text" id="@strElementID" class="@strCSSClass" />
  ```

  * [Jon Galloway - ASP.NET MVC 4 Beta Released!](https://weblogs.asp.net/jongalloway/asp-net-4-beta-released)
  * [Conditional Attributes in Razor View Engine and ASP.NET MVC 4](https://www.davidhayden.me/blog/conditional-attributes-in-razor-view-engine-and-asp.net-mvc-4)

* [Preprocessor directives in Razor](https://stackoverflow.com/q/4696175/1366033)

  ```html
  @{

  #if DEBUG
  {
      @:<div>Debug Mode</div>
  }
  #else
  {
      <text>
          <div>
              Release Mode
          </div>
      </text>
  }
  #endif

  }
  ```

* [Escape @ character in razor view engine](https://stackoverflow.com/q/3626250/1366033)

  Use `@@`

  