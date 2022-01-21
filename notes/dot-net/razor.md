# Razor

## Render List of Items

```cs
@functions{
 string RenderList(List<IStackHtmlContent> items)
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
  return null;
 }
}
```

```cs
<p>@RenderList(Model.WhatNext)</p>
```
