---
title: Bootstrap Docs Sidebar Explained
tags: [post, Bootstrap, Navbar, CSS, JavaScript, ScrollSpy]
date: 2014-02-28
postID: 8626486512306931240
---

Do you really want to make a side navbar look just like the one from the Bootstrap Documentation pages?  Then this is the article for you.

In addition to really liking the bootstrap library, I have to say that I really enjoy the presentational style of their documentation page.  I think it's a great idea to show off the big picture of a document, while automatically expanding each section when appropriate. It's especially helpful for long documents that require a lot of scrolling.  Unfortunately, they don't specifically outline how their documentation pages are put together.  But since they're just delivering HTML/CSS/JS, we can reverse engineer how they put it together.  Here are the results of dissecting Bootstrap's Doc's side nav bar.

### Simple Content

This really works best with some content to scroll through, so let' just start by making a bunch of blocks with unique ID tags, that are nested into sections, that we can visually see.  

Here's how:
Create a few blocks that look like this. Copy and paste it, but every time you see the letter A, replace it with B, C, and so on.

```html
<section id="GroupA" class="group">
    <h3>Group A</h3>
    <div id="GroupASub1" class="subgroup">
        <h4>Group A Sub 1</h4>
    </div>
    <div id="GroupASub2" class="subgroup">
        <h4>Group A Sub 2</h4>
    </div>
</section>
```

Then style the blocks to give them a little bit of spacing.  This is just so we don't have to wade through hundreds of lines of lorem ipsum (yuk!).

```css
.group {
    background: yellow;
    width: 200px;
    height: 500px;
}
.group .subgroup {
    background: orange;
    width: 150px;
    height: 200px;
}
```

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/1/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Simple Layout

Now we need to create a two column layout for our page.  We can put the sample body content on the right and the navbar on the left.  We can do this with the [Bootstrap Grid System][Bootstrap Grid System], by placing both columns inside of a div with `class='row'` and specifying the column widths for all devices with `col-xs-*`.  Finally when we scroll down, we want the content to freely scroll, but have the navigation bar remain in the same place, so we'll use `position: fixed` to pin it to the top.  It should look something like this:

```html
<div class="row">
    <!--Nav Bar -->
    <nav class="col-xs-3">
        <div class="fixed">
            Nav Placeholder<br/>
            Stays on Top!
        </div>
    </nav>
    <!--Main Content -->
    <div class="col-xs-9">
        <section id="GroupA" class="group"></section>
        <section id="GroupB" class="group"></section>
        <section id="GroupC" class="group"></section>
    </div>
</div>
```

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/2/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Simple Navlist

Before we even add any bootstrap, we need a bare bones list of links that will navigate to content on the page.  This provides a nice tree structure, but no formatting. The links have bulky bullets in front of them and are very brightly colored.

```html
<ul id="sidebar">
    <li>
        <a href="#GroupA">Group A</a>
        <ul>
            <li><a href="#GroupASub1">Sub-Group 1</a></li>
            <li><a href="#GroupASub2">Sub-Group 2</a></li>
        </ul>
    </li>
    <!-- Same for Group B & C -->
</ul>
```

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/3/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Converting List to Nav

In order to make the links look more like navigation controls, and less like a list of groceries, we can use the set of [Nav classes][Nav] provided by Bootstrap.  In order to use any nav class, you must also attach the `.nav` base class to that element as well.  To make sure the list stays vertical, we want to also add the class `.nav-stacked` to each `ul` element. 

<pre class="prettyprint"><code class="XML">&lt;ul <span class="highlight">class=&quot;nav nav-stacked fixed&quot;</span> id=&quot;sidebar&quot;&gt;
    &lt;li&gt;
        &lt;a href=&quot;#GroupA&quot;&gt;Group A&lt;/a&gt;
        &lt;ul <span class="highlight">class=&quot;nav nav-stacked&quot;</span> &gt;
            &lt;li&gt;&lt;a href=&quot;#GroupASub1&quot;&gt;Sub-Group 1&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#GroupASub2&quot;&gt;Sub-Group 2&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;!-- Same for Group B &amp; C --&gt;
&lt;/ul&gt;
</code></pre>

Let's pause to look at just these changes because a lot has changed visually even though we haven't added much code.  The set of nav classes help strip out some of the default formatting associated with unordered lists and instead renders the links much like menu bars.  The elements now all align all the way on the left because `.nav` sets `padding-left: 0;`. We've removed the underline with `text-decoration: none;`, removed some of the list formatting with `list-style: none;`, and softened the colors a bit with <code>color: <span style="color:#428bca;">#428bca;</span></code>. The `nav-stacked` floats all the elements to the left so they 'stack' on top of each other. 

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/4/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Formatting the Nav Bar

The final change to the markup is just to add the class `bs-docs-sidebar` to the top nav column div to help identify it in CSS. We can do the rest in CSS and JavaScript.
First, let's give the navbar a little breathing room by giving it margins on the top, left, and bottom:

```css
/* sidebar */
.bs-docs-sidebar {
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
```

Next, we'd like to be able to apply different formatting to parent level links and child links.  CSS does not currently have a [Parent Selector][CSS Parent] which could be used to differentiate the top level links with those nested below them.  Instead, we can apply a style to all links inside of `bs-docs-sidebar` and then override that style for any list items that are children of two `ul.nav` elements.

```css
/* all links */
.bs-docs-sidebar .nav>li>a {
    color: #999;
    padding: 4px 20px;
    font-size: 13px;
    font-weight: 400;
}

/* nested links */
.bs-docs-sidebar .nav .nav>li>a {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 30px;
    font-size: 12px;
}
```

For all links we'll apply a grey color schema and a font-weight of 400.  All links will be padded in at least 20 pixels, but those nested under two `.nav` elements will be indented 30px.  Top level links will be slightly larger at `13px`.  And nested links will have much less padding on the top and bottom.

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/5/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Using Scrollspy

To do the rest of the styling we'll need to know whether a link is active.  In order to do this, we can use a [scroll spy][scroll spy] on the page which will apply the `.active` class to the navigation list whenever a given element is scrolled into view.
Scroll spy is called on the element whose scrolling activity you want to monitor.  Since you will probably be scrolling through the entire page, this should go on the `body` element.  
The <a href="http://getbootstrap.com/javascript/#scrollspy-usage" id="Update3">target of scrollspy is</a>: 

> the ID or class of the ***parent*** element of any Bootstrap `.nav` component.

So we'll target the `#sidebar` by passing in it's parent: `.bs-docs-sidebar`

The offset represents the `pixels to offset from top when calculating position of scroll.`  We'll give it a running start of 40, so it can find the first nested child item of each group so that will be set as active as well.

```js
$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
```

You are still in charge of styling any elements you would like to display.  Scroll spy merely adds the `active` class.  As of right now, it won't look like it's doing anything because we haven't styled the elements yet.  As a placeholder, just to see it working, let's color active links purple. We'll replace this with more sophisticated stuff next.

```css
.bs-docs-sidebar .nav>.active>a {  color: #563d7c; }
```

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/48/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Styling Active Links

Whenever an element is set to active (due to scrollspy) or is hovered or focused, we'll apply some styles to the anchor.  We'll color it purple.  We'll make sure that it doesn't have an underline or a grey box highlighting it. And we'll add a purple flag on the left to help identify which items are active.  To do this, we'll apply a 2 pixel border to the left of the element.  

>**Note**: Because of the way the CSS box model works, when we add a 2px border to the left, the entire element shifts 2 pixels to the right, displaced by the border that previously took up zero pixels.  One way to handle this is to shorten the padding we added by 2px every time the element is active.  But I think a cooler trick is to just start off with a transparent 2px border so the object does not get resized when adding a colorful border

```css
/* all links */
.bs-docs-sidebar .nav>li>a {
    /*add transparent border */
    border-left: 2px solid transparent;
}
/* active & hover links */
.bs-docs-sidebar .nav>.active>a, 
.bs-docs-sidebar .nav>li>a:hover, 
.bs-docs-sidebar .nav>li>a:focus {
    color: #563d7c;                 
    text-decoration: none;          
    background-color: transparent;  
    border-left: 2px solid #563d7c; 
}
```

Let's also make active parent links have a very thick weight, and child links less so.
**Remember**: we'll use the style we want for parent objects on all the links and then override it for nested links.

```css
/* all active links */
.bs-docs-sidebar .nav>.active>a,
.bs-docs-sidebar .nav>.active:hover>a,
.bs-docs-sidebar .nav>.active:focus>a {
    font-weight: 700;
}
/* nested active links */
.bs-docs-sidebar .nav .nav>.active>a, 
.bs-docs-sidebar .nav .nav>.active:hover>a,
.bs-docs-sidebar .nav .nav>.active:focus>a {
    font-weight: 500;
}
```

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/49/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Collapsing Inactive SubGroups

One of my favorite features of the Bootstrap Navbar is that it automatically collapses subgroups that are not currently in view.  This allows a lot of information to be available, but prevents a lot of noise when it's not in use.  To do this we'll use the active flag on the parent group.  To hide all subgroups, we'll set `display:none` to all `ul.nav` elements that are children of other `.nav` elements.  This will collapse all subgroups.  Then we need to expand the active group by looking for a parent level nav with an `.active` child and set `display:block` on it's child ul.  So it will look like this:

<pre class="prettyprint"><code class="css">/* hide all (inactive) nested list */
.bs-docs-sidebar .nav ul.nav {
    display: none;           
}
/* show active nested list */
.bs-docs-sidebar .nav<span class='highlight'>>.active></span>ul.nav {
    display: block;           
}
</code></pre>

And behave like this:

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/50/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Wrap Up

So that's it.  You can have fun applying other styles as well.  Bootstrap uses [Affix][Affix] to lock the navbar into place after scrolling past the header.  
Also, they use media queries to collapse the navbar if the screen is below a certain size like this:

```css
@media screen and (max-width: 500px){
    .bs-docs-sidebar {
        display:none
    }
}
```

The impetus for this article was actually a spice website that I was making to catalog my home spices.  It uses the bootstrap side bar when space allows, but then converts into a top navbar for smaller screens.  You can view the final page here:

http://kylemitofsky.com/Spices/

And you you can browse the source code here if you're interested in how anything is done:

https://github.com/KyleMit/Spices/tree/gh-pages

Here's the final fiddle.  Feel free to play around with it, fork it, or leave me a comment below.

<iframe width="100%" height="600" src="http://jsfiddle.net/KyleMit/v6zhz/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Update with Top NavBar:

Here's a quick rundown of how to add a **horizontal navbar** to the example. The primary difficulty in adding any fixed position navbar to the top of the window is it will **break** all your anchor tags like so:

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/52/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The first trick when adding a navbar is to displace everything on the page by the same number of pixels, that way nothing starts off hidden underneath the navbar.  The standard implementation (even listed in the [docs][navbar-fixed-top]) is to just offset the entire document by placing a top margin or padding on the body element:

```css
body { margin-top:50px; }
```

But as you can see from the previous example, this doesn't solve the issue.    

Why is that?  

For more information, you can see my Stack Overflow answer to the question [When navigating to #id, element is hidden under fixed position header][AnchorHidden], but here's the gist of it.  When the browser is told to navigate to a [fragment identifier][fragment identifier] (#ID):

>your browser always wants to scroll your anchor to the exact top of the window. If you set your anchor where your text actually begins, it will be occluded by your menu bar.

One way to overcome this is to make sure the content of your anchor element starts well after the element begins.  To do this, we'll need a basic understanding of the [CSS box model][CSS box model].  We'll give the element some extra height at the top by setting the `padding-top` to about 50px, but since we don't actually want each anchor element to have 50 pixels of overhead, we'll also set the `margin-top` the the same amount, but **negative**.

Here's an example, that hopefully makes the point more concrete:

By adding this CSS

```css
.group, .subgroup {
    padding-top: 50px;
    margin-top: -50px;
}
```

We make the element grow 50 pixels taller, but ensure that the content stays in exactly the same place.  Here's a look at the example from the chrome developer tools:

![PaddingMarginOffset](https://i.imgur.com/oFCMEhF.png)

Now when we scroll the top of the element to the top of the window, it will start 50 pixels before the content.  Here's a full example with a working top navbar

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/v6zhz/53/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


### Update with Scrollable Navbar

To make the sidebar scrollable, you can add the following CSS:

```css
.bs-docs-sidebar > ul {
    overflow-y: auto;
    height: 100%;
}
```

When content overflows it's container, there are a couple different ways to [handle it in css][css: overflow]:

```none
overflow: visible | hidden | scroll | auto
```

The default is to have the content remain visible.  However, this poses problems when using an element with `position:fixed` because you cannot simply scroll through the window to bring the visible element into view.

You can use `overflow: scroll` to add a scrollbar to the div, but this will always be visible, even if unnecessary, and scrollbars should be avoided unless absolutely necessary.  The better option is to use `overflow: auto` which will provide a scrollbar only if necessary.  Since we'd rather wrap long horizontal text than scroll it, we'll only apply this to the *y-axis* by using `overflow-y: auto`.

You'll notice once this is in place it doesn't do anything yet.  That's because we need to tell the container how large it is so it knows when any of its contents are taking up more space that it can provide.  As a test, you can just throw in `height: 100px` and you'll notice that the entire contents fits into a box that is 100px tall and you can scroll to get to the rest of it.

However, we don't necessarily know how much space we want to allow the sidebar to consume.  It's going to depend on the space available in the window and how you're site is laid out.  In the simplest form, if we alloted the entire screen height to the sidebar, we could use <code>height: 100<b>%</b></code>.  

> **Note**: Whenever you use `height: 100%` in CSS, you have to next ask yourself, "*100% of what?*"  Often this is the parent element, but fixed position elements break the layout so 100% will automatically refer to the window size.  If your sidebar does not start at the top of the window, 100% height will extend past the bottom of the screen and make the scrollbar difficult to manage. You can choose a height <100% or apply your own padding to the element, instead of its parent.

Here's a demo with a scrollable sidebar:

<iframe width="100%" height="200" src="http://jsfiddle.net/KyleMit/v6zhz/89/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

You can look at my [spice project][spice project] for a demo in production using a scrollable sidebar

### Update with Affix

In the spirit of the Bootstrap's own use of their sidebar, you can use `affix` to help place the location as you scroll through the page.  You'll just need to add the affix to your sidebar like this:

```css
$("#sidebar").affix({
    offset: {
      top: 60
    }
});
```

And then set some styling when the `.affix` class is in place (bootstrap will automatically add `position:fixed` so we just need to set the height:

```css
#sidebar.affix {
    top: 20px;
}
```

Here's a demo with an affixed sidebar:

<iframe width="100%" height="200" src="http://jsfiddle.net/KyleMit/v6zhz/170/embedded/result,css,js,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



[Bootstrap Grid System]: http://getbootstrap.com/css/#grid
[Nav]: http://getbootstrap.com/components/#nav
[CSS Parent]: http://stackoverflow.com/a/1014958/1366033
[scroll spy]: http://getbootstrap.com/javascript/#scrollspy
[Affix]: http://getbootstrap.com/javascript/#affix
[navbar-fixed-top]: http://getbootstrap.com/components/#navbar-fixed-top
[AnchorHidden]: http://stackoverflow.com/a/18948554/1366033
[fragment identifier]: http://en.wikipedia.org/wiki/Fragment_identifier
[CSS box model]: https://developer.mozilla.org/en-US/docs/Web/CSS/box_model
[css: overflow]: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
[spice project]: http://kylemitofsky.com/Spices/
