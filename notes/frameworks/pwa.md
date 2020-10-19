# Progressive Web App


* [manifest.json vs manifest.webmanifest](https://stackoverflow.com/questions/52129281/manifest-json-vs-manifest-webmanifest)
* [manifest.webmanifest or manifest.json](https://github.com/w3c/manifest/issues/689)

Either is fine - must be served with MIME type of `application/manifest+json`

```html
<link rel="manifest" href="/manifest.json">
<link rel="manifest" href="/manifest.webmanifest">
```

