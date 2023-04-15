# Turbo (formerly Turbolinks)

<https://turbo.hotwired.dev/>

## Docs

* [Turbo Handbook](https://turbo.hotwired.dev/handbook/introduction)

## Questions

* [How to use `$(document).ready()` with turbo-links](https://stackoverflow.com/q/18770517/1366033)

  ```js
  document.documentElement.addEventListener("turbo:load", (e) {
    console.log("turbo:load", e)
  });
  ```

  See Also: [Turbo Events](https://turbo.hotwired.dev/reference/events)
