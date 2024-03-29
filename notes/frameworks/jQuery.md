# jQuery

<https://jquery.com/>

> jQuery is a fast, small, and feature-rich JavaScript library


## Docs

* [jQuery API Documentation](https://api.jquery.com/)

## Deprecations

* 1.8
  * [`.andSelf()`](https://api.jquery.com/andself/)
* 3.3
  * [`.click()`](https://api.jquery.com/click-shorthand/)
  * [`.focus()`](https://api.jquery.com/focus-shorthand/)
  * [`.keyup()`](https://api.jquery.com/keyup-shorthand/)
* 3.0
  * [`.bind()`](https://api.jquery.com/bind/)
  * [`.unbind()`](https://api.jquery.com/unbind/)
  * [`.delegate()`](https://api.jquery.com/delegate/)

## Questions

* [How to remove "disabled" attribute using jQuery?](https://stackoverflow.com/q/13626517/1366033)

  ```js
  $("#elementID").removeAttr('disabled');
  $("#elementID").prop("disabled", true);
  ```

* [Retrieve boolean data from data attribute in jquery](https://stackoverflow.com/q/9921076/1366033)

  ```html
  <div id="#test" data-is-new="true">
  ```

  ```js
  var isNew = $('#test').data('is-new') // true
  ```

* [jQuery serializeArray doesn't include the submit button that was clicked](https://stackoverflow.com/questions/4007942/jquery-serializearray-doesnt-include-the-submit-button-that-was-clicked)

  * [Multi-Button Form Submit](https://codepen.io/KyleMit/pen/KKQEKqV)

  ```js
  $("[type='submit']").click(function(e) {
    $(this).closest("form").find("input[type='hidden'][name='action'").val(this.value)
  })
  ```

* [How to change text color in jQuery animate?](https://stackoverflow.com/q/16871967/1366033)

  Add jQuery UI

* [Is there an "exists" function for jQuery?](https://stackoverflow.com/q/31044/1366033)

  ```js
  $("selector").length
  ```

* [Check, using jQuery, if an element is 'display:none' or block on click](https://stackoverflow.com/q/15924751/1366033)

  ```js
  hiddenElements = $(':hidden');
  visibleElements = $(':visible');
  ```

* [jQuery closest exclude self](https://stackoverflow.com/q/15628889/1366033)

  ```js
  $(this).parent().closest('.container');
  ```

* [find() children until a certain threshold element is encountered](https://stackoverflow.com/q/13305514/1366033)

  ```js
  this.find(selector).not(this.find(mask).find(selector))
  ```

* [How to check a radio button with jQuery?](https://stackoverflow.com/q/5665915/1366033)

  ```js
  $("#radio_1").prop("checked", true);
  ```

* [Convert form data to JavaScript object with jQuery](https://stackoverflow.com/q/1184624/1366033)


  Use [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

  ```js
  const formData = Object.fromEntries(new FormData(form))
  ```

  Create Custom Function

  ```js
  jQuery.fn.serializeObject = function() {
    const arrayData = this.serializeArray();
    const formEntries = arrayData.map(x => ([x.name, x.value]))
    const formObj = Object.fromEntries(formEntries)
    return formObj;
  };
  ```
