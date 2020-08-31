---
title: ASP.NET jQuery unobtrusive validation with dynamic content
tags: ['post', unobtrusive-validation, jQuery, asp.net]
draft: true
---


Let's build up to dynamic validation incrementally so we understand which pieces are in play.  If you're not in the mood for a brief history lesson, you can skip right to [Dynamic Validation](#dynamic-validation)

## HTML 5 Validation - a *trivial* example

Here's a form with a required attribute on an input element.  If we try to submit it, the browser should automatically highlight any errors and prevent the postback (if you're watching the network tab - you shouldn't see a `POST` anywhere).

```html
<form id="exampleForm">
  <div>
    <label for="FirstName">First Name</label>
    <input type="text" name="FirstName" required />
  </div>
  <input type="submit" value="Submit">
</form>
```

[**HTML 5 Validation - Demo in Plunker**](https://embed.plnkr.co/7ZqT3l/):

<iframe style="width: 100%; height: 400px" src="https://embed.plnkr.co/7ZqT3l/" frameborder="0" allowfullscren="allowfullscren"></iframe>

Which will look like this when we try to submit an invalid form:

![HTML 5 Invalid](https://i.imgur.com/TSEut8u.png)


### jQuery Validate - a *trivial* example

HTML 5 validation covers many basic cases, but for anything partially sophisticated, it's good to add in advanced handling.  Enter jQuery Validate which is just a form validation library built as an extension to jQuery.  First we'll add two references to our form:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
```

By default, it will pick up some HTML5 attributes on fields and enforce them within the library, so if we still want to require first name, we can simply do the following:

```html
<input type="text" name="FirstName" required />
<script> $("#exampleForm").validate({}); </script>
```

**ALTERNATIVELY**, we can also write our validation rules entirely in JavaScript and pass them into the the validation options like this <sup>(Notice I've removed the `required` attribute)</sup>.

```html
<input type="text" name="FirstName" />
<script>
$("#exampleForm").validate({
  rules: {
    FirstName: {
      required: true
    }
  }
});
</script>
```

Both options will work for now, but the convention in jQuery Validate is to define all your rules in one place within JavaScript (in contrast to **Unobtrusive** validation which we'll get to in a second).

Finally, for good measure, jQuery validate will decorate inputs with classes, so you'll want to make use of them so our UI can display validation states.  At a minimum, we can just add a red border to any fields that have errors like this:

```css
input.error { border-color: red; }
```

[**HTML 5 Validation - Demo in Plunker**](https://embed.plnkr.co/Bh52B0/):

<iframe style="width: 100%; height: 400px" src="https://embed.plnkr.co/Bh52B0/" frameborder="0" allowfullscren="allowfullscren"></iframe>

Which will look like this when we try to submit an invalid form:

![jQuery Validate Invalid](https://i.imgur.com/8JfHOhW.png)


### jQuery Validate **Unobtrusive** - a *trivial* example

The problem was it became hard to squeeze an entire form's worth of validation rules into a single JavaScript object, especially when the form items were rendered and composed in multiple views.  So unobtrusive allows each item to carry with it all of the validation rules in HTML5 `data-*` attributes and then build the final set of rules once the form was loaded.

Now we'll move our required rule out of JavaScript and back into the input's attributes, but we'll have to compose it in a way that will get automatically picked up by the Unobtrusive library.  But we'll manually produce the following generated HTML


**Generated HTML**:

```html
<label for="FirstName">First Name</label>
<input type="text" class="form-control"
        id="FirstName" name="FirstName"
        data-val="true"
        data-val-required="First Name is required.">
<span  class="field-validation-valid"
        data-valmsg-for="FirstName"
        data-valmsg-replace="true"></span>
```

Normally ASP.NET MVC will render these HTML attributes automatically as long as you've decorated your class properties with the `<Required>`  attribute and have enabled unobtrusive generation.  So the above code would be created by including the following model and view.

**Model**:

```cs
[Required]
public String FirstName { get; set; }
```

**View**:

```js
@Html.LabelFor(model => model.FirstName)
@Html.EditorFor(model => model.FirstName)
@Html.ValidationMessageFor(model => model.FirstName)
```


#### Homegrown Unobtrusive Validation

To think about the *types* of decisions that MVC's unobtrusive library makes, we can roll our own tiny version that just checks for required.  We'll just search through the form elements, looking for the `data-rule-required` attribute and the `data-msg-required` and invoke the validation using those parameters like this:

```js
var options = { rules: {}, messages: {} }

$("form :input[data-val-required]").each(function(i, el) {
  options.rules[el.name] = {
    required: true
  }
  options.messages[el.name] = {
    required: $(el).data("val-required")
  }
});

$("#exampleForm").validate(options);
```

[**Homegrown Unobtrusive Validation - Demo in Plunker**](https://embed.plnkr.co/hVywAm/):

Obviously, this doesn't do much right now, but it's easy to see how this could be extended to include a variety of rules, messages, and circumstances.

#### Using jQuery Validation Unobtrusive library

We'll add the [jquery validation unobtrusive](https://github.com/aspnet/jquery-validation-unobtrusive) developed by Microsoft which will automatically look for rules embedded in HTML attributes.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validation-unobtrusive/3.2.6/jquery.validate.unobtrusive.min.js"></script>
```

Notice that form validation is initialized automatically by the following section of  [jquery.validate.unobtrusive.js](https://github.com/aspnet/jquery-validation-unobtrusive/blob/v3.2.6/jquery.validate.unobtrusive.js#L413)

```js
$(function () {
    $jQval.unobtrusive.parse(document);
});
```

So we should be completely wired up:


[**jQuery Unobtrusive Validation - Demo in Plunker**](https://embed.plnkr.co/iHlDtP/):

<iframe style="width: 100%; height: 400px" src="https://embed.plnkr.co/iHlDtP/" frameborder="0" allowfullscren="allowfullscren"></iframe>

Which will look like this when we try to submit an invalid form:

![jQuery Validate Invalid](https://i.imgur.com/l83c33P.png)

### Dynamic Validation

To simulate a dynamic element, we'll add a little ajax which fetches an otherwise identical set of form elements for *last* name.  Here's a bit of AJAX:

```js
$.ajax({
  url: "last-name.html",
  success: function(data, textStatus, jqXHR) {
    $("form div:first").append(data)
  }
});
```

Which will try to return the html contents of `last-name.html`:

```html
<div>
  <label for="LastName">Last Name</label>
  <input type="text" class="form-control"
         id="LastName" name="LastName"
         data-val="true"
         data-val-required="Last Name is required.">
  <span  class="field-validation-valid"
         data-valmsg-for="LastName"
         data-valmsg-replace="true"></span>
</div>
```


[**jQuery Unobtrusive Validation - Broken - Demo in Plunker**](https://embed.plnkr.co/o52Me6/):

<iframe style="width: 100%; height: 400px" src="https://embed.plnkr.co/o52Me6/" frameborder="0" allowfullscren="allowfullscren"></iframe>

Now, our dynamically added elements don't get parsed and so won't catch when we try to submit the form:

![jQuery Validate Unobtrusive - Broken](https://i.imgur.com/YjwW3MM.png)

### Initial attempt


The instinct here is to just re-validate the form and start from scratch.  The problem is when calling `.validate` [jquery.validate.js checks to see if a validator is already attached](https://github.com/jzaefferer/jquery-validation/blob/1.16.0/src/core.js#L14) and if so does nothing:

```js
validate: function( options ) {
  // Check if a validator for this form was already created
  var validator = $.data( this[ 0 ], "validator" );
  if ( validator ) { return validator; }
```



### Solution - Nuclear Approach

```js
$.validator.unobtrusive.reparse = function (selector) {
   var form = $(selector).first().closest('form')
         .removeData('validator')              // added by jquery.validate
         .removeData('unobtrusiveValidation'); // added by jquery.validate.unobtrusive
    $.validator.unobtrusive.parse(form);
}
```

### Solution - Incremental Approach

```js
$.validator.unobtrusive.parseDynamicContent = function (selector) {
 //use the normal unobtrusive.parse method
  $.validator.unobtrusive.parse(selector);

  //get the relevant form
  var form = $(selector).first().closest('form');

  //get the collections of unobtrusive validators, and jquery validators
  //and compare the two
  var unobtrusiveValidation = form.data('unobtrusiveValidation');
  var validator = form.validate();

  $.each(unobtrusiveValidation.options.rules, function (elname, elrules) {
    if (validator.settings.rules[elname] == undefined) {
      // add brand new rule
      var args = {};
      $.extend(args, elrules);
      args.messages = unobtrusiveValidation.options.messages[elname];
      $('[name="' + elname + '"]').rules("add", args);

    } else {
      // update existing rules
      $.each(elrules, function (rulename, data) {
        if (validator.settings.rules[elname][rulename] == undefined) {
          var args = {};
          args[rulename] = data;
          args.messages = unobtrusiveValidation.options.messages[elname][rulename];
          $('[name="' + elname + '"]').rules("add", args);
        }
      });
    }
  });
}
```


**Further Reading**:

* [Unobtrusive validation not working on dynamically-added partial view](http://stackoverflow.com/q/9321040/1366033)
* [client side validation with dynamically added field](http://stackoverflow.com/q/5965470/1366033)
* [unobtrusive validation not working with dynamic content](http://stackoverflow.com/q/14902581/1366033)
* [jquery.validate.unobtrusive not working with dynamic injected elements](http://stackoverflow.com/q/4406291/1366033)
* [MVC3 Unobtrusive Validation Not Working after Ajax Call](http://stackoverflow.com/q/7048726/1366033)
* [Applying unobtrusive jquery validation to dynamic content in ASP.Net MVC](https://xhalent.wordpress.com/2011/01/24/applying-unobtrusive-validation-to-dynamic-content/)
* [Applying unobtrusive jQuery validation to dynamic content in ASP.Net MVC](https://craftingsoft.wordpress.com/2011/04/23/applying-unobtrusive-jquery-validation-to-dynamic-content-in-asp-net-mvc/)

[images]: https://imgur.com/a/fgK0O
