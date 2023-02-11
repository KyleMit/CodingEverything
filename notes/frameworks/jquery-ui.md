# jQuery-UI

<https://jqueryui.com/>

> jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library

## Questions

* [Cancel all queued jQuery slideUp and slideDown animations](https://stackoverflow.com/q/2360209/1366033)

  ```js
  if ($toggle.is(":checked")) {
      $container.stop().slideDown()
  } else {
      $container.stop().slideUp();
  }
  ```

