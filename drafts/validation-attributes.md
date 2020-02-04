---
title: MVC Data Validation Annotations
tags: ['post', asp.net, mvc]
draft: true
templateEngineOverride: md
---

Data annotations provide ways to mark up properties with additional logic on how to **Validate**, **Display**, and **Data Model** custom classes.  ASP.NET makes frequent use of [`System.ComponentModel.DataAnnotations`][1] attributes throughout many stages of the MVC pipeline.  In reality, these markers can be used entirely independently of MVC, but many of the native helper classes leverage them and so, in turn, so should we.  This tutorial will take you through some of the common attributes available in ASP.NET and elsewhere to help build robust classes and models with reusable validation logic and display preferences.

As an example, throughout this guide, lets work with the following class:

```cs
public class Car
{
    public string Make { get; set; }
    public int? ModelYear { get; set; }
    public bool IsUsed { get; set; }
    public DateTime? PurcahseDate { get; set; }
    public double? Price { get; set; }
    public string LotNumber { get; set; }
}
```

---

## Display Attributes

The idea here is re-usability.  The class should get to own some aspects of how it will be displayed.  Not things like where on the page a field is rendered, but if you have a currency field, we can define a single place that identifies the formatting string to apply.  MVC will automatically use each property's name when generating labels, but you might not want the end user to see `bool_DbOwner` (you might not want a developer to see that either!.... replace `bool_` with `Is` and I'll be happy).  If a single property is used on a dozen different pages, you can define some aspects of that property so it retains those attributes no matter where you display it.

Here are some common display attributes:

Display Attribute | Description
------------------|---------
[`DisplayAttribute`][D2] | Specifies localizable strings for data types and members that are used in the user interface.
[`DisplayFormatAttribute`][D3] | Specifies how data fields are displayed and formatted.
[`DataTypeAttribute`][D1] | Specifies a particular type of data, such as e-mail address or phone number.

### [`[DisplayAttribute]`][D2]

The display Attribute allows you to set the display name, short name, group name, description, hint, and other settings.  All of these attribute properties are available as optional parameters within the constructor so you can assign them with named parameters like this:

```cs
[Display(Name = "Used Car")]
public bool IsUsed { get; set; }
```

![DisplayAttributeImage](https://i.imgur.com/lvcBr48.png)

And, conventionally, we'll access this by using `DisplayNameFor` or `LabelFor` helpers, depending on whether we're reading or writing data (respectively) like this:

```cs
@Html.DisplayNameFor(model => model.IsUsed)
@Html.LabelFor(model => model.IsUsed)
```

#### ASIDE - HTML Helper Internals

**What's in an attribute?**

Attributes are just classes that are allowed to decorate other properties, fields, and classes.  Once you compile the source code, the class definition, attributes and all, gets baked into what it means to be that type of class, which means we can access that metadata by using `System.Reflection`, either on the object itself or on the library that contains it.  Here's an example that grabs the DisplayAttribute's Name property

```cs
using System.Reflection;
using System.ComponentModel.DataAnnotations;

Type type = newCar.GetType();
PropertyInfo[] props = type.GetProperties();
var attrs = from prop in props
        where prop.IsDefined(typeof (DisplayAttribute), false)
        select new
        {
            PropertyName = prop.Name,
            DisplayName = prop.GetCustomAttributes(typeof (DisplayAttribute),false)
                              .Cast<DisplayAttribute>().Single().Name
        };
var isUsedProp = attrs.First(p => p.PropertyName == "IsUsed");
Console.WriteLine("Property {0} has DisplayName {1}.", 
            isUsedProp.PropertyName, isUsedProp.DisplayName);
//Output: Property IsUsed has DisplayName Used Car.
```

MVC already plumbs up many native functions for you, but you may find some derivative of the above code helpful for capturing any of your own attributes (just inherit custom classes from `System.Attribute` and go crazy!)

**Where's `@Html.DisplayNameFor` come from?**

Bear in mind, a framework is just a library that someone else has written.  There's nothing in .NET that you couldn't implement yourself if given enough typewriters and monkeys.

In a razor view, the `@` sign is pivoting us back into the code world - so for the most part, we're just executing ordinary .NET code.  In this case, what's being executed is a static helper method, in the same way we can call `@String.Format()` from within a Razor view.

So MVC defines some helper extension methods to get you started on common needs within a view.  If we inspect the signature on `DisplayNameFor`, we'll see the following extension method:

```cs
namespace System.Web.Mvc.Html
{
    public static class DisplayNameExtensions
    {
        public static MvcHtmlString DisplayNameFor<TModel, TValue>(
            this HtmlHelper<IEnumerable<TModel>> html, 
                 Expression<Func<TModel, TValue>> expression)
```

If you're so inclined, you can write your own custom helper methods in .NET code with extension methods. Also, starting in MVC3, you can [build your own helpers with razor syntax][helper] using the `@helper` keyword as well.

**So what's with all the lambda expressions?**

The lambda expressions allow us to recover both:

1. The value of the object
2. And also its attributes 

Suppose we were to call the following function *without* a lambda like this:

```cs
@Html.DisplayNameFor(Model.IsUsed)
```

.NET resolves any expressions being passed as parameters *before* passing them into the method, which means this will essentially resolve to the following:

```cs
@Html.DisplayNameFor(true)
```

This is great at providing the value, but there's no possible way for `DisplayNameFor` to have any context as to where that value came from.  

Instead, the ASP.NET MVC engine provides each page with an `HTML` class that receives the model that is passed in when you initialize the view.  Any extension methods you call will execute against this class.  A lambda expression is just an anonymous function that takes in a value as a parameter and returns a result. Since the HTML instance for the page already knows your model, all you need to do is provide instructions on how to obtain each property from the model.  The end result of which is we can not only obtain the property's value, but also it's metadata via reflection, thereby unlocking any attributes we may need.


Here's a simple [example](http://stackoverflow.com/a/1560950/1366033) that takes a look at `Expression<Func<Car, Boolean>>`.  We'll use `Expression`  instead of `Func<Car, Boolean>` because it captures a rich Expression Tree that contains information about [what a lambda expression does rather than doing the actual thing](http://stackoverflow.com/a/793584/1366033).

```cs
Expression<Func<Car, Boolean>> expression = car => car.IsUsed;
var memberExpression = expression.Body as MemberExpression;
var displayAttr = memberExpression.Member.GetCustomAttributes(typeof (DisplayAttribute), true);
var displayName = ((DisplayAttribute)displayAttr.FirstOrDefault()).Name;
var returnedValued= expression.Compile().Invoke(newCar);
```

Here's the wealth of information that available inside the expression object:

![Expression](https://i.imgur.com/7HoLzLa.png)

**/ Aside - Back to more attributes**


### [`[DisplayFormatAttribute]`][D3]

You might have seen a familiar syntax using `String.Format`.  Commonly, this is used to inject variables into a string like this:

```cs
String stateName = "Vermont";
String msg = String.Format("You are in {0}!", stateName);
Console.Write(msg );
// You are in Vermont!
```

The `{0}` means pull in the first item from the following list and insert it here, but you can also format the string at the same time by providing an optional [`DataFormatString`][FormatString], which has options for currency, decimals, exponents, etc, like this:

```cs
Double netWorth = 5.55;
String msg = String.Format("You have {0:C2} in your bank!", netWorth)
Console.Write(msg );
// You have $5.55 in your bank!
```

This should make the syntax for `DisplayFormatAttribute` a little more familiar.  Here are a couple examples:

```cs
[DisplayFormat(DataFormatString = "{0:C2}")]
public decimal cost { get; set; }

[DisplayFormat(DataFormatString = "{0:###-###-####}")]
public long Phone { get; set; }
```

The Display Format is leveraged anytime you allow MVC to render the property's value using the `@Html` helper methods like this:

```cs
@Html.DisplayFor(model => model.Price)
```

> **NOTE:** In order to apply numeric formatting, the field **type must be numeric**.  The following example will not work because .NET does not parse the abitrary string characters into numerical representations.
>      
>     [DisplayFormat(DataFormatString = "{0:C2}")]
    public string cost { get; set; }

> If you need additional string formatting logic, you can do that within the view template

One place you may find you need display formats is in [passing a date to a textbox](http://stackoverflow.com/a/2842587/1366033) which [cannot handle hours and minutes](https://weblog.west-wind.com/posts/2012/nov/08/html5-input-typedate-formatting-issues).

Without a format String, we get the following *invalid* [`input[type=date]`](https://www.w3.org/TR/html-markup/input.date.html):

![Invalid Input Type=Date](https://i.imgur.com/pmxNdzy.png)

One option is to specify a format string inline which yields this:

![Date Form with String](https://i.imgur.com/vAD8xws.png)

We can also fix this in a single place by adding the DisplayFormat attribute and pass in the `ApplyFormatInEditMode`

![Date Format with Attribute](https://i.imgur.com/sUEuPVQ.png)



### [`DataTypeAttribute`][D1]


The Data Type Attribute provides additional type information in addition to the class which can be utilized by view templates.

#### Native Templates

First, let's look at what View Templates exist out of the box:

ASP.NET can automaticaly handle rendering what it thinks is the best option for display and editor templates for many primitive types:

**Primitive Editor Templates**:

![Primitive Editor Templates](https://i.imgur.com/ZTYJmOR.png)

**Primitive Display Templates**:

![Primitive Display Templates](https://i.imgur.com/P7O1Stt.png)


#### Class Templates

But as soon as you get beyond the scope of basic types, you might want to provide more nuanced control.  We can always use named templates to render entire sections of code, but Display and Editor templates hold a special place in the pipeline.  

We can define how we want entire classes of objects to appear anytime they are rendered.  We'll do this by adding `DisplayTemplates`/`EditorTemplates` Folders to our project.  We could scope these inside of our current view, but since the purposes of class templates is reusability, we'll bubble them up to the `Shared` folder so everyone can take advantage of them.

Create the following folders and then add a view for each (you can use MVC to seed your cshtml pages by right clicking, and creating a strongly typed view with the available Scaffolding templates):

![TemplateFolders - Views/Shared/DisplayTemplates/car.cshtml & Views/Shared/EditorTemplates/car.cshtml](https://i.imgur.com/soQITJm.png)

Where **/Views/Shared/EditorTemplates/car.cshtml** looks something like this:

```cs
@model TestTypes.Models.Car
@{ Layout = null; }
@Html.EditorFor(model => model.Make)
@*  whatever other things we want to make a car object *@
```

> **Note**: We'll set `Layout` to `null` to ensure that anytime this template it called, it won't try to render inside of that master `_Layout.cshtml` page; the assumption being that something is always going manually call editor for the model from elsewhere in our code.


Finally, we can render these templates just by calling EditorFor or DisplayFor and passing in our entire class, the same way we would any other property:

```cs
@model TestTypes.Models.Car

@Html.EditorFor(model => model)
```


#### DataType Templates

Finally, DataTypes provide the most fine-grained control on rendering entire types of data.  The class constructs you want to store and manipulate the data might not be the same as the ways in which you want to render the data.  The most frequent case of this is with the string data type.  Many properties might be implemented as a `String` Type, but still find they have different varieties of string data that all come with their own baggage (i.e. SSN, Phone Number, Lot Numbers).

Let's say we have a lot number that will always fit the format ##-aa-###. By giving it a custom DataType apart from it's ClassType, we can provide custom templates specific to that type of data.

```cs
[DataType("LotNumber")]
public string LotNumber { get; set; }
```

-----


## Validation 

Validation attributes help enforce rules about the state of data.  MVC will already try to take a stab at some field level validations based on the property's type, but you may have many additional rules surrounding what valid data looks like.  The benefits to decorating your class with attributes (as opposed to writing a separate method within your business logic) are that:

1. there is a single owner for valid state within the class itself
2. the same validations can easily occur on both the client (for speed) and the server (for security).

You might not be running the same exact code on the client and server.  After all, any client side validations will need to happen using HTML5 or Javascript, whereas server side checking will use .NET (C# or VB).  But by declaring the rules for a given class using common attributes, we can write validation logic a single time per type of rule and then add the definition for those common rules on the client and the server.

Out of the box, ASP.NET provides the following validiation attributes, borrowed from the MSDN article on [Using Data Annotations to Customize Data Classes][MSDN1]:

Validation Attribute | Description
---------------------|---------------------
[`CustomValidationAttribute`][V1] | Uses a custom method for validation.
[`DataTypeAttribute`][V2] | Specifies a particular type of data, such as e-mail address or phone number.
[`EnumDataTypeAttribute`][V3] | Ensures that the value exists in an enumeration.
[`RangeAttribute`][V4] | Designates minimum and maximum constraints.
[`RegularExpressionAttribute`][V5] | Uses a regular expression to determine valid values.
[`RequiredAttribute`][V6] | Specifies that a value must be provided.
[`StringLengthAttribute`][V7] | Designates maximum and minimum number of characters.
[`ValidationAttribute`][V8] | Serves as base class for validation attributes.


### Client side Validation - jQuery Validate

Just like our display attributes, you *can* use reflection to manually identify and act on property validations.  But the MVC framework is already inspecting and writing, so it's helpful to utilize the output already being produced.  MVC generates markup that can be consumed by the jQuery Validation library


**HTML5 ASIDE**: HTTP is the vehicle for information, and posting a `<form>` the payload.  Validation is border patrol making sure the right sort of stuff is there before allowing you through.  It's import to note that HTML5 comes with it's own [border patrol][Data form validation], but we'll be using [jQuery.Validate][jQuery.Validate] instead.  One thing that happens when jQuery.Validate loads, is it will add `<form novalidate>` to each form so that HTML5 doesn't try to take over and ask for your passport when someone else is already doing that.

[Data form validation]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation
[jQuery.Validate]: https://jqueryvalidation.org/

### Server-side Validation - Model binding



----


[MSDN1]: https://msdn.microsoft.com/en-us/library/dd901590.aspx
[FormatString]: https://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.boundfield.dataformatstring.aspx
[helper]: http://weblogs.asp.net/scottgu/asp-net-mvc-3-and-the-helper-syntax-within-razor

[1]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.aspx

[V1]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.customvalidationattribute.aspx
[V2]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.datatypeattribute.aspx
[V3]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.enumdatatypeattribute.aspx
[V4]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.rangeattribute.aspx
[V5]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.regularexpressionattribute.aspx
[V6]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.requiredattribute.aspx
[V7]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.stringlengthattribute.aspx
[V8]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute.aspx

[D1]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.datatypeattribute.aspx
[D2]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.displayattribute.aspx
[D3]: https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.displayformatattribute.aspx

### StackOverflow Answers

[String Formatting with currency double values not displaying correctly](http://stackoverflow.com/a/11175948/1366033)

You don't need to use `Html.DisplayFor` because it will return `MvcHtmlString` so the `string.Format` doesn't apply.

Just use the `string.Format` on your model:

    @String.Format("{0:c}", Model.MonthlyMortgage)

The other option would be to remove  `String.Format()` from the View and use DataAnnotations to attach a formatting to MonthlyMortgage.

An example from MSDN:

    [DisplayFormat(DataFormatString = "{0:C}")]
    public Decimal ListPrice { get; set; }

[DisplayFormat.DataFormatString for a phone number or social security number](http://stackoverflow.com/q/10981049/1366033)

The following should work, however notice the type difference for the Ssn property. 

    [DisplayFormat(DataFormatString = "{0:###-###-####}")]
    public long Phone { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:###-##-####}")]
    public long Ssn { get; set; }

Note, that in order for the formatting to be applied you would need to use the following html helper in your view:

    @Html.DisplayFor(m => m.Property)

[ASP.NET MVC data annotation for currency format](http://stackoverflow.com/q/29975128/1366033)

Have you tried using `DataType.Currency`:

<!-- language: lang-cs -->

    public class CostChart
    {
        public string itemType { get; set; }
        [DataType(DataType.Currency)]
        public float? Cost{ get; set; }
    
    }

Alternatively, you could use `DataFormatString ` like this: 

<!-- language: lang-cs -->

    [DisplayFormat(DataFormatString = "{0:C0}")]`
    public float? Cost{ get; set; }


[Extending Editor Templates for ASP.NET MVC](https://www.simple-talk.com/dotnet/asp.net/extending-editor-templates-for-asp.net-mvc/)

[How to create and implement a custom datatype in mvc3 razor](http://stackoverflow.com/q/11702466/1366033)

[How to use asp.net mvc EditorTemplate](http://stackoverflow.com/a/4673451/1366033)

###~/Views/Roles/EditorTemplates/RoleViewModel.cshtml
    @model MvcApplication16.Controllers.RoleViewModel
    <div>
        @Model.RoleName
        @Html.HiddenFor(m => m.RoleId)
        @Html.CheckBoxFor(m => m.InRole)
    </div>

###~/Views/Roles/Edit.cshtml
    @model MvcApplication16.Controllers.UserViewModel
    @using (Html.BeginForm()) {
       @Html.EditorFor(m => m.Roles)
       <!-- Other stuff here -->
    }

### Models
    public class UserViewModel {
        public User User { get; set; }
        public IEnumerable<RoleViewModel> Roles { get; set; }
    }

    public class RoleViewModel {
        public int RoleId { get; set; }
        public bool InRole { get; set; }
        public string RoleName { get; set; }
    }

    public class User {
        public string Name { get; set; }
    }

### Controller

    public ActionResult Edit() {
        return View(
            new UserViewModel() {
                User = new User() { Name = "Test" },
                Roles = new List<RoleViewModel>() { 
                    new RoleViewModel() { 
                        RoleId = 1, 
                        InRole = true, 
                        RoleName = "Test Role" }}
            });
    }




[Adding Client Validation To DataAnnotations DataType Attribute](http://weblogs.asp.net/srkirkland/adding-client-validation-to-dataannotations-datatype-attribute)

**Add DataTypeAttribute Adapter**

```cs
public class DataTypeAttributeAdapter : DataAnnotationsModelValidator<DataTypeAttribute>
{
    public DataTypeAttributeAdapter(ModelMetadata metadata, ControllerContext context, DataTypeAttribute attribute)
        : base(metadata, context, attribute) { }
}
```


**Model**

```cs
public class DataTypeEntity
{
    [DataType(DataType.Date, ErrorMessage = "Please enter a valid date (ex: 2/14/2011)")]
    public DateTime DateTime { get; set; }
}
```
