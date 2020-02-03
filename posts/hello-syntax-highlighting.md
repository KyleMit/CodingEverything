---
title: Hello Blogger!
tags: [post, Hello World, Blogger, StackEdit, Markdown, Syntax Highlighting]
date: 2012-05-07
updated: 2020-01-26
postID: 2523860845584385785
---

<!--
userCustom.onReady = function() {
  $('head').append('<link href="https://kylemit.github.io/libraries/libraries/HighlightColors.css" rel="stylesheet" />');
  $('head').append('<link href="https://kylemit.github.io/libraries/libraries/BloggerStyles.css" rel="stylesheet" />');
};
-->

## We're back baby!


When writing a coding blog, one of the first decisions you have to make is how to render syntax highlighting.  In this case, I'm using [StackEdit](https://stackedit.io/#) to convert markdown into html.  Among others, it uses [highlight.js](http://highlightjs.org/) to convert `<pre><code>` blocks into beautifully formatted classes.  Then I'm using the [Visual Studio](http://highlightjs.org/static/styles/vs.css) theme to apply the particular format for each class hosted off this [Github project](https://github.com/KyleMit/libraries) and available here:

```html
<link href="http://kylemitofsky.com/libraries/libraries/HighlightColors.css" rel="stylesheet" />
<link href="http://kylemitofsky.com/libraries/libraries/BloggerStyles.css" rel="stylesheet" />
```

Here's a quick listing of the languages I intend to use:

### VisualBasic

```vb
'''<Summary>Method Does This</Summary>
Private Sub OnTextBoxTextChanged(sender As Object, e As TextChangedEventArgs) Handles Me.TextChanged
    'comment
    Dim senderText As TextBox = DirectCast(sender, TextBox)
    Dim bindingExp As BindingExpression = senderText.GetBindingExpression(TextBox.TextProperty)
    bindingExp.UpdateSource()
End Sub
```


### CSharp

```cs
public class Program
{
    /// <summary>The entry point to the program.</summary>
    public static int Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        string s = @"This
                    ""string""
                    spans
                    multiple
                    lines!";
        return 0;
    }
}
```

### JavaScript

```js
$('.tabs-student a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});
```

### HTML

```html
<ul class="nav nav-tabs tabs-student">
  <!-- comment -->
  <li class="active"><a href="#tab-activity">Activity</a></li>
  <li class=""><a href="#tab-sales">Sales</a></li>
</ul>
```

### CSS

<pre class="prettyprint"><code class="css">@media (min-width: 992px) {
    /* only apply these changes to row view */
    #flex-table-md.flex-table .form-group {
        margin-bottom: 7px;
        margin-top: 7px;
        margin-left: 0px;
        margin-right: 0px;
    }
}
</code></pre>

### XAML

```xml
<Storyboard>
    <!-- comment -->
    <ObjectAnimationUsingKeyFrames 
            Storyboard.TargetName="ContentGrid"
            Storyboard.TargetProperty="Background">
      f  <DiscreteObjectKeyFrame KeyTime="0" Value="Blue"/>
    </ObjectAnimationUsingKeyFrames>
</Storyboard>
```

### XML

```xml
<?xml version="1.0" encoding="utf-8"?>
<Stock Date="13.11.2013">
  <Assortment>
    <!-- comment -->
    <Item>Sock</Item>
    <Quantity>1</Quantity>
  </Assortment>
  <Assortment>
    <Item>Puppet</Item>
    <Quantity>2</Quantity>
  </Assortment>
</Stock>
```

### ASP.NET

```xml
<asp:DropDownList runat="server" 
                  DataSourceID="SomeDS"
                  AppendDataBoundItems="true"> 
    <!-- comment -->
    <asp:ListItem Text="Please select an option" Value="" />
</asp:DropDownList>
```

### SQL

```sql
BEGIN;
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic" ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");
```

### BONUS - Formatted Code

As long as you do the [escaping](http://www.htmlescape.net/htmlescape_tool.html), you can apply any formats you like to a `<pre class="prettyprint"><code class="cs">` block.

<pre class="prettyprint"><code class="cs">async Task<int> AccessTheWebAsync()
{
    // <a href='http://msdn.microsoft.com/en-us/library/z2kcy19k.aspx'>Link to System.Namespace</a>
    <b>string boldline = ""</b>
    <i>string italics = ""</i>
    <u>int underline = 0;</u>
    <strike>bool strikeThrough = true;</strike>
    <span class="userType">CustomClassNames</span>
    <span class="dimmed">int dimmedAge = 7;</span>
    <span class="highlight">highlight some code</span>
    <span class="razor-keyword">@</span><span class="razor-block">Html.EditorFor(model =&gt; model.FirstName)</span>
}
</code></pre>
