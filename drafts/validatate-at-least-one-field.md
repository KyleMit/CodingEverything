---
title: ASP.NET Validator - At Least One Field
tags: ['post', asp.net, validator]
draft: true
---

There are several times where I want to validate that any field has been filled in, but I don't quite need to put a [`RequiredFieldValidator`][RequiredFieldValidator] on each individual field.  ASP.NET doesn't offer anything out of the box that automatically implements this functionality, but it's easy enough to build using a [`CustomValidator`][CustomValidator] which inherits from the `BaseValidator` class.

This has been asked on StackOverflow several times:

* [Using validators to ensure that user filled either one of two required fields][SO1]
* [Required field validator for at least one textbox contains text][SO2]
* [Validate textbox - At least one text box must have data][SO3]
* [Two text boxes - either one or both are required][SO4]

but I haven't found any of the answers very compelling.  Every single one of them hard codes the control ID into the client and server side validation methods, which brings re-usability of the core logic down to *zero*.

Using a custom validator is definitely the right approach, but I wanted to mimic what the ASP.NET framework had already done for validators by exposing an attribute for [`ControlToValidate`][ControlToValidate].  Except, in this case, we need to identify several controls to validate, rather than a single one.  

### Markup

Let's work with the following `TextBox` controls:

```xml
<asp:TextBox ID="txtHomePhone" runat="server" PlaceHolder="Home Phone"/>
<asp:TextBox ID="txtWorkPhone" runat="server" PlaceHolder="Work Phone"/>
<asp:TextBox ID="txtMobilePhone" runat="server" PlaceHolder="Mobile Phone"/>
```

Here's a custom validator that we'll break down in a second.

```xml
<asp:CustomValidator runat="server" 
    ID="AnyFieldRequiredValidator" 
    ErrorMessage="Please enter at least one phone number." 
    ValidateEmptyText="True"
    OnServerValidate="ServerAnyFieldRequired"
    ClientValidationFunction="ClientAnyFieldRequired"
    Data-AnyField1="txtHomePhone"
    Data-AnyField2="txtWorkPhone"
    Data-AnyField3="txtMobilePhone" />
```

Although you can [extend asp.net attributes][extend-attributes], that seemed like more work that it was worth for this particular case. Instead, this seemed like a good use for HTML5 [`data-* attributes`][data-*].  Data attributes provide an easy way to store extra information within standard html elements.  This isn't *new* per se, since technically any attribute you add to an element will be delivered, regardless of whether the browser knows how to handle it (try it: [`<div jellyfish="blue" ></div>`][NonStandardAttribute].  But this provides a nice standards based way to add extra information that has consistent support.

By setting the [`ValidateEmptyText`][ValidateEmptyText] property to `True`, we'll ensure that the validation will always fire.  The default behavior is that empty controls will not undergo any validations.

The nice thing about ASP.NET validators, is they run on the client for speed and the server for saftey.  Gone are the days where we really have to worry *if* user's will have JavaScript enabled, but it never hurts to have the sever confirm any validation.  It prevents accidental and intentional validation skips.  Default ASP.NET valiation controls already implement both of these methods, but we'll have to write our own Client and Server side validation.  Yes, you have to write **two** methods, but you really ought to anyway, and at least this keeps the logic in a single, re-usable place.  The next two sections will go over each validation method.


### Client Side Validation

To preform client side validation, the Custom Validator must name the client side function using the [ClientValidationFunction][ClientValidationFunction] property.  Inside the JavaScript function, we have to make a determination on validity and set the `IsValid` property to `True` or `False` for the second parameter which holds  arguments for validation.

We'll determine validity using two main code blocks:

First, we need to get a list of all the controls we want to validate against. These are the things we stored using the `data-AnyField*` attributes. We'll get a dictionary of all the data attributes by calling [`.data()`][data()] on the sender.  Then we'll loop through each one and check to make sure the key value of the attribute contains the text `anyfield`.  If it does, then we'll add that to an array of ids.

Second, we'll loop through each control to see if any of them have any data. ASP.NET has several different mechanisms for generating a client side ID based on the current [`ClientIdMode`][ClientIdMode].  You may be able to use a better suited mechanism to find each control on the client (depending on which rendering mode you've chosen), but you should always be able to use the [attribute ends with selector: `[name$="value"]`][name$="value"]. We'll build a selector for each element by checking if the id attribute ends with the ID we set.  Then we'll find the element, get it's value, trim it, and see if the length is greater than zero.

# Todo - Find best one and merge:
http://stackoverflow.com/q/13721615/1366033
http://stackoverflow.com/q/1274806/1366033
http://stackoverflow.com/q/5589095/1366033
http://stackoverflow.com/q/5370716/1366033

### Here's what all of that looks like in code:

```js
function ClientAnyFieldRequired(sender, args) {
    var fieldIds = [];
    var hasSomeData = false;
    
    //get list of fields from data attributes
    $.each($(sender).data(), function (key, value) {
        if (key.indexOf("anyfield") != -1)
            fieldIds.push(value);
    });
    
    //check each field to see if it has data
    $.each(fieldIds, function (index, value) {
        var selector = "[id$='"+value+"']";
        if ($(selector).val().trim().length > 0)
            hasSomeData = true;
    });
    
    //return whether or not we have data
    args.IsValid = hasSomeData;
}
```

## Server Side Validation

On the server, we need to do the same thing: get all the control ids to validate from the data attributes, map each to their respective control, and then see if any have any data.  We should be able to do all of this without ever having to know anything about the specific setup in the particular CustomValidator that is using this server side method.

To start, we'll cast the incoming source object to the CustomValidator type so we can expose it's properties at design time.  Since it inherits from type `WebControl`, it exposes an [`Attributes`][Attributes] property that contains a dictionary of all the attributes declared in the opening tag of the element.  We'll grab the value of any of them where the key starts with `Data-AnyField`.

On the client we have powerful methods for traversing the DOM, like jQuery which is built on top of the Sizzle selection engine, however the Server is a little more kludgy.  To map each ClientId with a control, we'll first have to recursively build a list of all the control's on the page (since each control only lists it's direct children)([method below](#getallcontrolas-method)).

Next we'll get a list of the controls by joining our list of ids on the ID property of all the controls and casting each into a `TextBox`.  Now we can search through that collection to see any if any textboxes have any value in their Text property. 

Like in the javascript function, we'll return the validity by setting the IsValid property on the `ServerValidateEventArgs` parameter before exiting.

### Here's what all of that looks like in code:

```vb
Protected Sub ServerAnyFieldRequired(ByVal source As Object, ByVal args As ServerValidateEventArgs)
    'cast type to validator
    Dim sourceValidator = DirectCast(source, CustomValidator)

    'grab data attributes for all controls
    Dim fieldIds = From key As String In sourceValidator.Attributes.Keys
                   Where key.StartsWith("Data-AnyField")
                   Select sourceValidator.Attributes(key)

    'build a list of all the controls on the page
    Dim allFields = Master.GetAllControls()

    'get all the fields 
    Dim fields = From fieldId In fieldIds
                 From ctrl In allFields
                 Where fieldId = ctrl.ID
                 Select CType(ctrl, TextBox)

    'see if any of the textboxes have data             
    Dim hasSomeData = (From f In fields
                       Where f.Text.Trim <> "").Any()

    'return whether or not we have data
    args.IsValid = hasSomeData
End Sub
```

Here's a simple recursive extension method that returns a list of all the children controls for the passed in control.

#### GetAllControls method

```vb
Module Utilities

    <Extension()> _
    Public Function GetAllControls(parent As Control) As List(Of Control)
        Dim allControls As New List(Of Control)
        GetChildControls(parent, allControls)
        Return allControls
    End Function

    Private Sub GetChildControls(parent As Control, ByRef allControls As List(Of Control))
        For Each control As Control In parent.Controls
            allControls.Add(control)
            For Each child As Control In control.Controls
                GetChildControls(child, allControls)
            Next
        Next
    End Sub

End Module
```

***Note** - If you're using C# 2.0 (VS2005) or VB 11.0 (VS2012), you can use a language feature called [iterators][iterators] to lazily evaluate recursive collections by using the `Yield` keyword.  This way the entire validation can be preformed with LINQ queries.  Here's a sample from [How to programmatically access a control on an aspx page][GetAllControlsYield]:

```cs
public static class ControlExtension
{
    public static IEnumerable<Control> GetAllControls(this Control parent)
    {
        foreach (Control control in parent.Controls)
        {
            yield return control;
            foreach (Control child in control.GetAllControls())
            {
                yield return child;
            }
        }
    }
}
```

#### Wrap Up

So that's it.  Put the JavaScript code anywhere that it can be reached by your client side page and put the server side method anywhere that it can be called.

I'll add a download link to a sample solution later this week.


[RequiredFieldValidator]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.requiredfieldvalidator(v=vs.110).aspx
[CustomValidator]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.customvalidator(v=vs.110).aspx
[ValidateEmptyText]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.customvalidator.validateemptytext(v=vs.110).aspx
[SO1]: http://stackoverflow.com/q/2171920/1366033
[SO2]: http://stackoverflow.com/q/3915994/1366033
[SO3]: http://stackoverflow.com/q/1443545/1366033
[SO4]: http://stackoverflow.com/q/947234/1366033
[ControlToValidate]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.basevalidator.controltovalidate(v=vs.110).aspx
[extend-attributes]: http://www.codeproject.com/Articles/10116/Extending-ASP-NET-Web-Controls-With-Custom-HTML-At
[data-*]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes
[NonStandardAttribute]: http://jsfiddle.net/KyleMit/g9gRb/
[ClientValidationFunction]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.customvalidator.clientvalidationfunction(v=vs.110).aspx
[data()]: http://api.jquery.com/data/#data
[ClientIdMode]: http://msdn.microsoft.com/en-us/library/system.web.ui.control.clientidmode(v=vs.110).aspx
[name$="value"]: http://api.jquery.com/attribute-ends-with-selector/
[Attributes]: http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol.attributes(v=vs.110).aspx
[iterators]: http://msdn.microsoft.com/en-us/library/vstudio/dscyy5s0(v=vs.110).aspx
[GetAllControlsYield]: http://stackoverflow.com/a/9933464/1366033
