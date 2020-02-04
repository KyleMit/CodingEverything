---
title: Ajax.BeginForm Return ModelState Error
tags: ['post', asp.net, ajax]
draft: true
---


It's `Console.WriteLine(DateTime.Today.Year) \\2017`, let's start off with two principles of *modern* web design:

1. You should never communicate with users via an `window.alert()`. It's like knocking on a millennial's door... it conveys the same information, but it feels jarring and intrusive.
2. End users should not know or care one iota if you are using AJAX or Angular or WebForms.  And if you'd like to mix these patterns/libraries, the front end should seamlessly display, independent of whatever back end is doing the heavy lifting.

So why then, is it so hard to return a simple model state error from `@AJAX.BeginForm`?  Nearly every guide has you return the following when things go south:

Action Function:

```cs
if (!ModelState.IsValid)
{
  Response.StatusCode = (int)HttpStatusCode.BadRequest;
  return Json(new { error = "Model Error Msg" });
}
```

Then wire it up with `OnFailure = "ShowErrorMessage"` in JavScript like this:

```cs
function ShowErrorMessage(ajaxContent) {
    alert(ajaxContent.responseJSON.error);
}
```

Most importantly, this violates rule number 1. Of course, you could take a couple extra non-hello-world steps and insert the message into the page somewhere, but doing so would likely violate rule number 2.  This is not typically how model state errors are handled by traditional webforms and the user should have no reason to expect any different


To me, the problem lies in the fact that we have robust handling in [`AjaxOptions`](https://msdn.microsoft.com/en-us/library/system.web.mvc.ajax.ajaxoptions.aspx) for the happy path:

```cs
new AjaxOptions
{
    UpdateTargetId = "search-results",
    InsertionMode = InsertionMode.Replace
},
```

But when we need to manually intervene, we're relegated to JavaScript:

```cs
OnSuccess = "ExtraInvocation",
OnFailure = "ShowErrorMessage"
```

That's no bad *per-se*, but it's starting violate our separation of concerns.  I really like the idea of declaratively building out ajax controls with data attributes in the form tag, but then we're handling rendering the returned html in two different places based on whether it was successful or not.

To get a handle on this problem, we'll look at three things:

1. Default handling of ModelStateError on regular Form 
     <sub>Per Rule#2, this is our target for how errors should be presented to the end user</sub>
2. Easy solution using `AJAX.BeginForm` & JavaScript
3. Rolling our own AJAX using jQuery
4. Rolling our own AJAX using HTML Helper ... <small>(if there's time)</small>

### Default handling of ModelStateError on regular Form 

Just to ensure we're starting on the same page, here's a very simple example of a traditional MVC experience

**Model**: `Person.cs`

```cs
public class Person: IValidatableObject
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        List<ValidationResult> valErrors = new List<ValidationResult>();
        if (string.IsNullOrWhiteSpace(FirstName) && string.IsNullOrWhiteSpace(LastName))
            valErrors.Add(new ValidationResult("Please enter at least one search criteria"));
        return valErrors;
    }
}
```

Since this specific use case deals with returning errors found on the server (errors identified on the client will prevent the form from posting back in the first place), we'll have to add a modelstate error to our class that doesn't implement [`IClientValidatable`](https://msdn.microsoft.com/en-us/library/system.web.mvc.iclientvalidatable.aspx), which we can do with [`IValidatableObject`](https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.ivalidatableobject.aspx)


**Controller**: `PersonController.cs`

```cs
[HttpGet]
public ActionResult Search()
{
    Person model = new Person();
    return View("Search", model);
}

[HttpPost]
public ActionResult Search(Person model)
{
    if (ModelState.IsValid)
    {
        var results = PersonRepository.Where(p => p.FirstName == model.FirstName &&
        p.LastName == model.LastName);
        return View("Results", results);
    }

    // invalid, return model and let them try again
    return View("Search", model);
}
```

In a typical `Post` action, if we are passed an invalid model, we re-render the original form and pass back any ModelState errors identified on the server.  If everything is in place, then we'll redirect to 



### Stack Overflow Qs

* [Ajax.BeginForm OnFailure invoked when ModelState is InValid](https://stackoverflow.com/q/12599090/1366033)
* [ASP.NET MVC “Ajax.BeginForm” executes OnSuccess even though model is not valid](https://stackoverflow.com/q/7328977/1366033)
* [Ajax form and UpdateTargetId after submitting data when ModelState is Invalid](https://stackoverflow.com/q/8026870/1366033)
* [Ajax.BeginForm add ModelState error sent from controller?](https://stackoverflow.com/q/22637736/1366033)
