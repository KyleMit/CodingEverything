# jQuery

<https://jquery.com/>

> jQuery is a fast, small, and feature-rich JavaScript library


## Docs

* [jQuery API Documentation](https://api.jquery.com/)

## Deprecations

* [`.andSelf()`](https://api.jquery.com/andself/)

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

