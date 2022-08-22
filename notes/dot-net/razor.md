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
