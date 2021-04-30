# Chrome Dev Tools

https://web.dev/

## Updates - What's New In DevTools

* [Chrome 85](https://developers.google.com/web/updates/2020/06/devtools?utm_source=devtools)
* [Chrome 90](https://developer.chrome.com/blog/new-in-devtools-90/)

## Network > [Filter requests](https://developers.google.com/web/tools/chrome-devtools/network/reference#filter)

> Filter on multiple properties simultaneously
> ex: `mime-type:image/gif larger-than:1K` displays all GIFs that are larger than one kilobyte.

### Supported Properties

* `domain` Only display resources from the specified domain. You can use a wildcard character (`*`) to include multiple domains. For example, *.com displays resources from all domain names ending in `.com`. DevTools populates the autocomplete dropdown menu with all of the domains it has encountered.
* `has-response-header` Show the resources that contain the specified HTTP response header. DevTools populates the autocomplete dropdown with all of the response headers that it has encountered.
* `is` Use `is:running` to find WebSocket resources.
* `larger-than` Show resources that are larger than the specified size, in bytes. Setting a value of `1000` is equivalent to setting a value of `1k`.
* `method` Show resources that were retrieved over a specified HTTP method type. DevTools populates the dropdown with all of the HTTP methods it has encountered.
* `mime-type` Show resources of a specified MIME type. DevTools populates the dropdown with all MIME types it has encountered.
* `mixed-content` Show all mixed content resources (`mixed-content:all`) or just the ones that are currently displayed (`mixed-content:displayed`).
* `scheme` Show resources retrieved over unprotected HTTP (`scheme:http`) or protected HTTPS (`scheme:https`).
* `set-cookie-domain` Show the resources that have a `Set-Cookie` header with a `Domain` attribute that matches the specified value. DevTools populates the autocomplete with all of the cookie domains that it has encountered.
* `set-cookie-name` Show the resources that have a `Set-Cookie` header with a name that matches the specified value. DevTools populates the autocomplete with all of the cookie names that it has encountered.
* `set-cookie-value` Show the resources that have a `Set-Cookie` header with a value that matches the specified value. DevTools populates the autocomplete with all of the cookie values that it has encountered.
* `status-code` Only show resources whose HTTP status code match the specified code. DevTools populates the autocomplete dropdown menu with all of the status codes it has encountered.


```html
<img src="/sites/default/files/images/2020/04/Question%20icon.png" >
```

## Source Maps

* [Map Preprocessed Code to Source Code](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps)

* [Sourcemaps are detected in chrome but original source is not loaded](https://stackoverflow.com/a/64628126/1366033)

![chrome source maps](/assets/notes/chrome-dev-tools/chrome-source-maps.png)


## Questions

* [Add padding to bottom of console](https://twitter.com/KyleMitBTV/status/1125738088150568960)

  [960412 - DevTools: Add bottom padding to Console input - chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=960412)

  ```css
  #​console-messages { padding-bottom: calc(50% - 10px); }
  ```

  or

  ```css
  .console-view-fix-select-all { height: 300px; }
  ```

* [Filter only the requests with errors - Google chrome network](https://stackoverflow.com/q/55185225/1366033)

