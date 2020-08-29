---
title: Bootstrap Navbar Active Class with MVC
tags: [post, Bootstrap, ASP.NET, MVC, Navbar, HTML, .NET]
date: 2014-05-02
source: navbar-active-class-mvc
postID: 7165478563193579153
---

The ASP.NET MVC project template comes with Bootstrap scaffolding by default.  And Bootstrap comes with default styling for active navbar links.  So you might find it a little odd that the ASP.NET bootstrap template does not style the active menu item by default.

**It can**, it just seems as if this functionality wasn't included out of the box:

![styled navbar][styled navbar]

If you plan on utilizing the bootstrap's powerful navigational layout, you should definitely add styling for the current page.  It helps users keep track of where they are within the application and assists with navigation.

To do so, we can add the `active` class dynamically on the shared layout by checking the current routing data.  **Here's how**:

### Markup

When you create a new ASP.NET Web Application using MVC, the project should already contain some default pages and navigational links in the navbar.  The navbar is defined as part of the shared layout in the Views folder.  Your Solution Explorer should look like this:

![solution explorer][solution explorer]

In the `_layout.vbhtml` file, you should find the following markup:

<pre class="prettyprint"><code class="xml">&lt;div class=&quot;navbar-collapse collapse&quot;&gt;
    &lt;ul class=&quot;nav navbar-nav&quot;&gt;
        &lt;li&gt;<span class="highlight">@</span>Html.ActionLink(&quot;Home&quot;, &quot;Index&quot;, &quot;Home&quot;)&lt;/li&gt;
        &lt;li&gt;<span class="highlight">@</span>Html.ActionLink(&quot;About&quot;, &quot;About&quot;, &quot;Home&quot;)&lt;/li&gt;
        &lt;li&gt;<span class="highlight">@</span>Html.ActionLink(&quot;Contact&quot;, &quot;Contact&quot;, &quot;Home&quot;)&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre>


In order to highlight the current tab in the [Bootstrap Navbar][Bootstrap Navbar], the `<li>` element needs to be given the class named `active`.  As an example, just try hard coding it in on any one of the current links:

<pre class="prettyprint"><code class="xml">&lt;div class=&quot;navbar-collapse collapse&quot;&gt;
    &lt;ul class=&quot;nav navbar-nav&quot;&gt;
        &lt;li <b>class="active"</b>&gt;<span class="highlight">@</span>Html.ActionLink(&quot;Home&quot;, &quot;Index&quot;, &quot;Home&quot;)&lt;/li&gt;
        &lt;li&gt;<span class="highlight">@</span>Html.ActionLink(&quot;About&quot;, &quot;About&quot;, &quot;Home&quot;)&lt;/li&gt;
        &lt;li&gt;<span class="highlight">@</span>Html.ActionLink(&quot;Contact&quot;, &quot;Contact&quot;, &quot;Home&quot;)&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre>

This should look like the screenshot from above.  But what we'd really like to do, is generate the active class dynamically for each `li` depending on the current page.  We'll insert the string `active` with an extension method called `IsActive` that will take in parameters for the Controller and Route.

We can use our extension method to insert the active class on the appropriate action link like this:

<pre class="prettyprint"><code class="xml">&lt;div class=&quot;navbar-collapse collapse&quot;&gt;
    &lt;ul class=&quot;nav navbar-nav&quot;&gt;
        &lt;li class='<span class="highlight">@Html.IsActive(&quot;Home&quot;, &quot;Index&quot;)</span>'&gt;
            <span class="highlight">@</span>Html.ActionLink(&quot;Home&quot;, &quot;Index&quot;, &quot;Home&quot;)
        &lt;/li&gt;
        &lt;li class='<span class="highlight">@Html.IsActive(&quot;Home&quot;, &quot;About&quot;)</span>'&gt;
            <span class="highlight">@</span>Html.ActionLink(&quot;About&quot;, &quot;About&quot;, &quot;Home&quot;)
        &lt;/li&gt;
        &lt;li class='<span class="highlight">@Html.IsActive(&quot;Home&quot;, &quot;Contact&quot;)</span>'&gt;
            <span class="highlight">@</span>Html.ActionLink(&quot;Contact&quot;, &quot;Contact&quot;, &quot;Home&quot;)
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre>

### Extension Method

If you don't already have one, create a folder in your project named Utilities and add a `static class` (or `Module` in VB) named Utilities or Extensions.

Then, we'll add an extension method called `IsActive` on top of the [`HtmlHelper`][HtmlHelper] class.  We'll use this to return the `active` class if the passed in controller text and action text match the current route.

To programmatically determine the current controller and action, we'll use the [`ViewContext`][ViewContext] property on our HtmlHelper object. The ViewContext exposes, among other things, a property containing the [`RouteData`][RouteData] which <q>contains a collection of URL parameter values and default values for the route</q> in its `Values` property.

#### The whole thing should look like this

```cs
public static class Utilities
{
    public static string IsActive(this HtmlHelper html,
                                  string control,
                                  string action)
    {
        var routeData = html.ViewContext.RouteData;

        var routeAction = (string)routeData.Values["action"];
        var routeControl = (string)routeData.Values["controller"];

        // both must match
        var returnActive = control == routeControl &&
                           action == routeAction;

        return returnActive ? "active" : "";
    }
}
```

Finally, in order for your view to access this method, you'll have to make sure you import the namespace into your view using the razor syntax like this:

<code><span class="highlight">@</span>using <i>YourProjectName</i>.Utilities</code>

Run your project and the current page should be highlighted!

### Closing Remarks

You'll notice that the login pages do not highlight when you navigate to the default account pages provided.  See if you can use the info here to modify the `_loginPartial` page in the Shared Layout section.  If you get stuck, you can look at the full demo below.

[Chris Way][@ChrisJWay] has a great blog post on [Setting the active link in a Twitter Bootstrap Navbar in ASP.NET MVC][chrisdotnet]. He comes up with a single method to generate the `<li>` element and the `<a>` element nested inside of it since there is largely redundant routing info.  I've opted away from that for maximal flexibility as it locks you into a single method for producing links, but it does provide a terser inline syntax if that's all you need to do.

Also, a lot of the basis for this code was taken from the StackOverflow question [How to add `active` class to `Html.ActionLink` in ASP.NET MVC][SO Question]

### Source Code

You can view the full working solution on GitHub in both VB and C#

https://github.com/KyleMit/CodingEverything/tree/master/MVCBootstrapNavbar

----

[Permalink to article](http://www.codingeverything.com/2014/05/mvcbootstrapactivenavbar.html) - Published with markdown via [stackedit.io](https://stackedit.io/viewer#!url=https://raw.githubusercontent.com/KyleMit/CodingEverything/master/MVCBootstrapNavbar/MVCBootstrapNavbar.md)

[HtmlHelper]: http://msdn.microsoft.com/en-us/library/system.web.mvc.htmlhelper(v=vs.118).aspx
[ViewContext]: http://msdn.microsoft.com/en-us/library/system.web.mvc.viewcontext(v=vs.118).aspx
[RouteData]: http://msdn.microsoft.com/en-us/library/system.web.mvc.controllercontext.routedata(v=vs.118).aspx

[styled navbar]: https://i.imgur.com/rP0Ma1z.png
[solution explorer]: https://i.imgur.com/Sgt9cTu.png

[Bootstrap Navbar]: http://getbootstrap.com/components/#navbar

[@ChrisJWay]: https://twitter.com/ChrisJWay
[chrisdotnet]: http://chrisondotnet.com/2012/08/setting-active-link-twitter-bootstrap-navbar-aspnet-mvc/

[SO Question]: http://stackoverflow.com/q/20410623/1366033
