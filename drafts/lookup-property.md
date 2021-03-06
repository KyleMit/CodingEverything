---
title: Custom LookupProperty class in ASP.NET MVC
tags: [post, "asp.net"]
draft: true
---

<style type="text/css">
span.razor-keyword {
    background: #ffff004d;
}
</style>

Here's an outline of my attempt to consolidate the lookup values for a particular field and the value of that field into a single object in ASP.NET MVC

**My Qs**:

* [Selected property on SelectListItem not being set by SelectList constructor](https://stackoverflow.com/q/47662425/1366033)
* [Build list of data validation attributes for a given element](https://stackoverflow.com/q/42999080/1366033)
* [How can I tell the Data Annotations validator to also validate complex child properties?](https://stackoverflow.com/q/2493800/1366033)


**GetUnobtrusiveValidationAttributes**:

* [Why does HtmlHelper.GetUnobtrusiveValidationAttributes delete attributes when called?](https://stackoverflow.com/q/20977149/1366033)
* [How to use Html.GetUnobtrusiveValidationAttributes](https://stackoverflow.com/q/8239929/1366033)
* [GetUnobtrusiveValidationAttributes always returns an empty collection](https://stackoverflow.com/q/29541250/1366033)
* [First html helper generates client-side validation attributes, while the second one doesn't](https://stackoverflow.com/a/29048385/1366033)





### Normal Case

Just to start off, here's the typical way that select list properties are handled inside ASP.NET

**Model**: `Person.cs`

```cs
public class Person
{
    [Display(Name = "Name")]
    [Required]
    public string Name { get; set; }

    [Display(Name = "Favorite Flavor")]
    [Required]
    public int? FavoriteFlavor { get; set; }
}
```

The `FavoriteFlavor` property just holds the store of value against whatever lookup set you're using. When rendering your model, you'll need to also bring in a list of values to represent any lookups.  These can be stored as an additional property on the model itself, or you can create a ViewModel class for to carry all the information you need to hydrate each specific view.

**ViewModel**: `PersonViewModel.cs`

```cs
public class PersonViewModel
{
    public Person Person { get; set; }
    public SelectList Flavors { get; set; }
}
```

The controller assembles all of these objects and pass to the view

**Controller**: `PersonController.cs`

```cs
public class PersonController : Controller
{

    [HttpGet]
    public ActionResult Create()
    {
        var model = new PersonViewModel();
        model.Person = new Person();
        model.Flavors = AvailableFlavors();

        return View(model);
    }

    [HttpPost]
    public ActionResult Create(PersonViewModel model)
    {
        // reload select list (doesn't get posted back)
        model.Flavors = AvailableFlavors();

        if (ModelState.IsValid)
        {
            // yay! we did it! - round trip anyway
        }

        // return anyway to see if model bound correctly
        return View(model);
    }

    private SelectList AvailableFlavors()
    {
        SelectList lookup = new SelectList(new[] {
            new SelectListItem() { Value="1", Text="Vanilla"},
            new SelectListItem() { Value="2", Text="Chocolate"},
            new SelectListItem() { Value="3", Text="Strawberry"}
        }, "Value", "Text");
        return lookup;
    }
}
```

And the dropdown is rendered on the view like this:

**View**: `Create.cshtml`

```html raw
<span class="razor-keyword">@model</span><span class="razor-block"> PersonViewModel</span>

&lt;div class=&quot;form-group&quot;&gt;
    <span class="razor-keyword">@</span><span class="razor-block">Html.LabelFor(model =&gt; model.Person.FavoriteFlavor, htmlAttributes: new { @class = &quot;control-label col-md-2&quot; })</span>
    &lt;div class=&quot;col-md-10&quot;&gt;
        <span class="razor-keyword">@</span><span class="razor-block">Html.DropDownListFor(model =&gt; model.Person.FavoriteFlavor, Model.Flavors, &quot; &quot;, new { @class = &quot;form-control&quot; })</span>
        <span class="razor-keyword">@</span><span class="razor-block">Html.ValidationMessageFor(model =&gt; model.Person.FavoriteFlavor, &quot;&quot;, new { @class = &quot;text-danger&quot; })</span>
    &lt;/div&gt;
&lt;/div&gt;
```






**Note**: To be clear, this isn't bad or broken at all.  There's pretty good separation of concerns.  The domain model only holds onto the value that it's reading/writing from the database.  But I wanted, perhaps at my hubris, to couple the lookup values and the stored value more closely.


**The Goal**:  I have a couple models that contain a lot of properties with lookup values, and I want each to be able to declaratively state what they validate against without having to create a 1 for 1 mapping for every single property on my object to a new codeset property.

### `LookupProperty` Class


Enter, the `LookupProperty` Class, which simply enough just holds onto both pieces of information (in place of stashing the lookup values on the view model, they're just a child property of the field)

**Class**: `LookupProperty.cs`

```cs
public class LookupProperty
{
    public int? Value { get; set; }
    public SelectList SelectList { get; set; }
}
```

Now my person class will implement this new type:

**Model**: `Person.cs`

```cs
public class Person
{
    [Display(Name = "Name")]
    [Required]
    public string Name { get; set; }

    [Display(Name = "Favorite Flavor")]
    [Required]
    public LookupProperty FavoriteFlavor { get; set; } = new LookupProperty();
}
```


It can be passed in the Controller like this:

```cs
public ActionResult Create()
{
    var model = new Person();
    model.FavoriteFlavor.SelectList = AvailableFlavors();

    return View(model);
}
```

And then use it in the view like this:

```html raw
<span class="razor-keyword">@model</span><span class="razor-block"> <span class="highlight">Person</span></span>

&lt;div class=&quot;form-group&quot;&gt;
    <span class="razor-keyword">@</span><span class="razor-block">Html.LabelFor(model =&gt; model.<span class="highlight">FavoriteFlavor.Value</span>, htmlAttributes: new { @class = &quot;control-label col-md-2&quot; })</span>
    &lt;div class=&quot;col-md-10&quot;&gt;
        <span class="razor-keyword">@</span><span class="razor-block">Html.DropDownListFor(model =&gt; model.<span class="highlight">FavoriteFlavor.Value</span>, Model.<span class="highlight">FavoriteFlavor.SelectList</span>, &quot; &quot;, new { @class = &quot;form-control&quot; })</span>
        <span class="razor-keyword">@</span><span class="razor-block">Html.ValidationMessageFor(model =&gt; model.<span class="highlight">FavoriteFlavor.Value</span>, &quot;&quot;, new { @class = &quot;text-danger&quot; })</span>
    &lt;/div&gt;
&lt;/div&gt;
```



### The Problem

So for the time being, let's presume this is a good idea and that you'd actually want to build objects that looked like this.  There are still some technical challenges to implementing this.

#### Model Binding or Validation Attributes - Pick One

Normally, we try to add most of our model errors on the class itself by decorating properties with one more [`ValidationAttribute`s][validationattribute].

These .*NET Property Attributes* are populated on the client by generating `data-val-*` *Attributes on the HTML Element* itself when rendered via `Html.EditorFor` or any of the other out of the box HTML Extension methods. (via `ClientValidationEnabled` & `UnobtrusiveJavaScriptEnabled` )



## Notes

### Property

```cs
[Display(Name = "Gender")]
[LookupPropertyRequired]
[ExistsInSelectList("GENDER")]
[DbProperty(DbType = SqlDbType.SmallInt, Name = "Gender_cd")]
public LookupPropertyShort GenderCd { get; set; } = new LookupPropertyShort();
```

### Field

```html
<input id="Client_GenderCd_Value" name="Client.GenderCd.Value" type="radio" value="3">
```

### Validation Msg

```html
<span class="field-validation-error text-danger"
      data-valmsg-for="Client.GenderCd"
      data-valmsg-replace="true">You must select a Gender</span>
```

The property / class is the thing that should have the validation attributes    .... GenderCd
    Need change in path to register change in msg

The sub properties within the class are the things that store / pass values     .... GenderCd.Value
    Could put validation message on sub-props, but doesn't contain warnings

Wire up validation message for parent LookupProperty Class to child property value

```cs
@Html.ValidationMessageFor(model => model.Client.GenderCd, "", new { @class = "text-danger", @data_valmsg_for= @Html.NameFor(model => model.Client.GenderCd.Value) })
```



Normally Unobtrusive Attributes dumped into EditorFor

```html
<input class="form-control date-mask text-box single-line valid"
    id="Client_DateOfBirth" name="Client.DateOfBirth"
    type="datetime" value="11/04/2014"
    data-val="true"
    data-val-date="The field Date of Birth must be a date."
    data-val-required="Date of Birth is required"
    aria-required="true" aria-describedby="Client_DateOfBirth-error" aria-invalid="false">
```

But No Validation attributes exist on .Value property so nothing gets plumbed up:

```html
<input checked="checked"
       id="Client_GenderCd_Value" name="Client.GenderCd.Value"
       type="radio" value="2" class="valid">
```



[validationattribute]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute.aspx
[iclientvalidatable]: https://msdn.microsoft.com/en-us/library/system.web.mvc.iclientvalidatable.aspx
[ivalidatableobject]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.ivalidatableobject.aspx



