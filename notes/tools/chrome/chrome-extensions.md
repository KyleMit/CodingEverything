# Chrome Extensions

<https://developer.chrome.com/docs/extensions/>

## Links

* [Welcome to Chrome Extensions](https://developer.chrome.com/docs/extensions/mv3/)
* [Chrome Extensions 101](https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/)
* [Chrome Extension development basics](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)


## Content Security Policy

* Dev Docs
  * [Content Security Policy](https://developer.chrome.com/docs/apps/contentSecurityPolicy/)
  * [Manifest - Content Security Policy](https://developer.chrome.com/docs/extensions/mv3/manifest/content_security_policy/)
  * [Using eval in Chrome extensions](https://developer.chrome.com/docs/extensions/mv3/sandboxingEval/)

* Docs
  * [Content security policy | web.dev](https://web.dev/csp/)
  * [Content Security Policy | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### Default

```json
{
  "content_security_policy": {
    "extension_pages": "script-src 'self'; object-src 'self';",
    "sandbox": "sandbox allow-scripts allow-forms allow-popups allow-modals; script-src 'self' 'unsafe-inline' 'unsafe-eval'; child-src 'self';"
  }
}
```

* **CSP** - Content Security Policy

## Manifest

[Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/)

<https://json.schemastore.org/chrome-manifest>

```json
{
    "json.schemas": [{
        "fileMatch": [
            "manifest.json"
        ],
        "url": "https://json.schemastore.org/chrome-manifest"
    }]
}

```

## Questions

* [Chrome Extension "Refused to load the script because it violates the following Content Security Policy directive"](https://stackoverflow.com/q/34950009/1366033)

  > Refused to load the script '*' because it violates the following Content Security Policy directive: "script-src 'self'".
  > Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.

  ```diff
  - script-src 'self'
  + script-src 'self' https://example.com
  ```

* [Insecure CSP value "" in directive 'script-src'](https://stackoverflow.com/q/71964934/1366033)

  > Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".
  
  Download and load locally

* [Cannot read property 'executeScript' of undefined](https://stackoverflow.com/q/65476451/1366033)

  See [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/)

  ```json
  "permissions": ["scripting"],
  ```

