---
title: How to get Page.ResolveUrl to Work in JavaScript
tags: ['post', webdev]
draft: true
---


Relative References With ~ in JavaScript

The problem is that as far as ASP.NET is concerned, the content delivered in your .js file is a string.  It does not apply any sort of rendering before IIS delivers it.  It gets the same treatment any other *content* file would, like a `.jpg` or `.png`.

In order to call server side methods (like `ResolveUrl`), you need to use the `<% ... %>` syntax within any page that is *parsed* by ASP.NET (like an `.aspx` or `.master` file).

---

By the way, these little code blocks go by a lot of different names:

>* [Inline Expressions](http://support.microsoft.com/kb/976112)
>* [Embedded Code Blocks](http://msdn.microsoft.com/en-us/library/ms178135(v=vs.100).ASPX)
>* [Code Nuggets](http://weblogs.asp.net/scottgu/archive/2010/12/16/asp-net-mvc-3-implicit-and-explicit-code-nuggets-with-razor.aspx)
>* [Server Side Script Delimiters](http://msdn.microsoft.com/en-us/library/aa239615(v=vs.60).aspx)
>* [Code Render Blocks](http://msdn.microsoft.com/en-us/library/k6xeyd4z(v=vs.100).aspx)
>* [ASP Directives](http://msdn.microsoft.com/en-us/library/ms524741(v=vs.90).aspx#aspdirectives)

---

In particular, we want a [*Displaying Expression*][DisplayingExpression] with the syntax `<%= ... %>`, where:

> the value that is entered after the equals sign is written into the current page

Knowing that, we can build our own own URL by using [`ResolveClientUrl()`][ResolveClientUrl] which:

> returns a URL string suitable for use by the client to access resources on the Web server

To this, we'll pass in the [**Web Application Root Operator**][~] or `~` character, where ASP.NET:

> resolves the ~ operator to the root of the current application:

By combining these, we can save the result of the displaying expression into a JavaScript variable by placing the following code on your Master Page (adapted from [Joel Varty's blog][ResolveUrlInJS]):

```html
<script type="text/javascript">
    var baseUrl = '<%= Page.ResolveClientUrl("~/") %>';
</script>
```

Since JavaScript variables are inherently global, any other script can now access the `baseUrl` variable, so we can utilize it from the .js file with the following script:

```js
function ResolveUrl(url) {
    return url.replace("~/", baseUrl);
}
```

Now you can call `ResolveUrl("~/DynamicMenu.ashx")` directly from your javascript file and it will create the appropriate URL by stripping out "~/" and replacing it with the baseUrl created earlier by the server side script.

---

Further Reading:

* [What is the difference between ResolveUrl and ResolveClientUrl?][ResolveVsResolveClient]
* [Relative Urls][Relative Urls]


[DisplayingExpression]: http://msdn.microsoft.com/en-us/library/6dwsdcf5.aspx
[ResolveClientUrl]: http://msdn.microsoft.com/en-us/library/system.web.ui.control.resolveclienturl.aspx
[~]: http://msdn.microsoft.com/en-us/library/ms178116.aspx
[ResolveUrlInJS]: http://weblogs.asp.net/joelvarty/archive/2009/07/17/resolveurl-in-javascript.aspx
[ResolveVsResolveClient]: http://stackoverflow.com/q/1874636/1366033
[Relative Urls]: http://www.webreference.com/html/tutorial2/3.html
