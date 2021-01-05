---
title: ASP.NET Under the Hood
tags: ['post', asp.net]
draft: true
---

<!-- markdownlint-disable MD024 -->


One of the many things ASP.NET does is provide a layer of abstraction to web controls that allows a developer to interact with them in a way familiar to many desktop developers.

This is especially true for the ASP.NET WebForms engine.  The Razor templating engine, popular for it's use in MVC apps, can help make ASP.NET's rendering decisions a little more transparent.

But WebForms can be helpful.  The trick is when providing your own styling through CSS or behaviors through JavaScript, it is often helpful to know what the actual output is.  After all, CSS doesn't offer an `asp:TextBox` selector.

Here's a small selection of ASP.NET controls and the actual HTML that gets rendered for each.  Even if you don't need to use the particular HTML, it's always helpful to know what a particular framework is doing for you.  It makes it easier to assess if you need it or what other good alternatives might be.


## LinkButton

### ASP.NET

```xml
<asp:LinkButton runat="server" ID="ChangePage"
                OnClick="Navigate" >
    Change Page
</asp:LinkButton>
```

### HTML

```html
<a id="MainContent_ChangePage"
   href="javascript:__doPostBack('ctl00$MainContent$ChangePage','')" >
    Change page
</a>
```

A link button, unsurprisingly, gets turned into a link or <b>a</b>nchor tag.  This helps it look and feel like a link.  Unlike a link, the purpose of the button isn't merely to point the user to a new resource, but to perform an action on the server.  So instead of the `href` containing a resource, it specifies some JavaScript to execute.  Specifically, to preform a post back and pass in the id of the current control. When it gets to the server, ASP will know to map that postback to the click event handler for that particular control.

From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void

>When a browser follows a javascript: URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value is undefined. The void operator can be used to return undefined.

## Field Validators

### ASP.NET

```xml
<asp:TextBox runat="server" ID="yourName"/>
<asp:RequiredFieldValidator runat="server" ControlToValidate="yourName" ErrorMessage="!"/>
<asp:Button runat="server" Text="Submit"/>
```

### HTML

```xml
<input name="ctl00$MainContent$yourName" type="text" id="MainContent_yourName">
<span id="MainContent_ctl00" style="visibility: visible;">!</span>
<input type="submit" name="ctl00$MainContent$SubmitButton" value="" id="MainContent_SubmitButton"
       onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions('ctl00$MainContent$SubmitButton','', true, '', '', false, false))">
```

Okay, let's digest this a little.  The Required Field Validator just turns into an invisible span containing the error text.  Presumably, when an error is identified it sets the visibility to true, and back to false once it has been corrected.  What I'm more interested in is how it does the field validation.  So let's take a look at what `WebForm_DoPostBackWithOptions` does.

When you deliver a webpage ASP.NET will do send along some number of generated client scripts titled `WebResource.axd` + a couple big long GUID looking things as query string parameters to ensure that each page gets its own unique file.

First it will create a new `WebForm_PostBackOptions` object in order to turn the set of parameters into named JSON properties.

<pre class="prettyprint"><code class="cs">// So when we pass in this:
WebForm_PostBackOptions('ctl00$MainContent$SubmitButton','', true, '', '', false, false)

// The method returns this:
function WebForm_PostBackOptions(...) {
    <b>this.eventTarget = 'ctl00$MainContent$SubmitButton';</b>
    this.eventArgument = '';
    <b>this.validation = true;</b>
    this.validationGroup = '';
    this.actionUrl = '';
    this.trackFocus = false;
    this.clientSubmit = false;
}
</code></pre>

Next, it passes that object into `WebForm_DoPostBackWithOptions` which does exactly what the name implies: it preforms a post back in which you can specify any combination of the available options. In this case, we've only specified the element doing the post back and that we want to validate the page as well, so I'll just walk through the validation components of the method.

```js
function WebForm_DoPostBackWithOptions(options) {
    var validationResult = true;
    if (options.validation) {
        if (typeof(Page_ClientValidate) == 'function') {
            validationResult = Page_ClientValidate(options.validationGroup);
        }
    }
    // ...non-relevant code omitted...
    if (options.clientSubmit) {
        __doPostBack(options.eventTarget, options.eventArgument);
    }
}
```

So as long as you've passed in the option to validate,

```js
function Page_ClientValidate(validationGroup) {
    Page_InvalidControlToBeFocused = null;
    if (typeof(Page_Validators) == "undefined") {
        return true;
    }
    var i;
    for (i = 0; i < Page_Validators.length; i++) {
        ValidatorValidate(Page_Validators[i], validationGroup, null);
    }
    ValidatorUpdateIsValid();
    ValidationSummaryOnSubmit(validationGroup);
    Page_BlockSubmit = !Page_IsValid;
    return Page_IsValid;
}
```
