# Eleventy

[Eleventy, a simpler static site generator.](https://www.11ty.dev/)

> Eleventy, a simpler static site generator.

## Inline Favicon

* [How can I put the favicon into a sprite?](https://stackoverflow.com/a/62438464/1366033)
* [Nunjucks > Filters > urlencode](https://mozilla.github.io/nunjucks/templating.html#urlencode)
* [How to escape include · Issue #695](https://github.com/mozilla/nunjucks/issues/695)

<!-- {% raw %} -->

```hbs
{% set favicon %}{% include "assets/favicon.svg" %}{% endset %}
<link rel="shortcut icon" href="data:image/svg+xml,{{favicon | urlencode}}" type="image/svg+xml" />
```

<!-- {% endraw %} -->

## Plugins

[Eleventy > Docs > Plugins](https://www.11ty.dev/docs/plugins/)

### Responsive Image Plugins


* [liamfiddler/**eleventy-plugin-lazyimages**](https://github.com/liamfiddler/eleventy-plugin-lazyimages) | [npm](https://www.npmjs.com/package/eleventy-plugin-lazyimages)
* [nhoizey/**images-responsiver**](https://github.com/nhoizey/images-responsiver/) | [npm](https://www.npmjs.com/package/eleventy-plugin-images-responsiver)


* [eeeps/**eleventy-respimg**](https://github.com/eeeps/eleventy-respimg) | [npm](https://www.npmjs.com/package/eleventy-plugin-respimg)
* [juanfernandes/**eleventy-plugin-cloudinary**](https://github.com/juanfernandes/eleventy-plugin-cloudinary) | [npm](https://www.npmjs.com/package/eleventy-plugin-cloudinary)


## TypeScript Support

* [How to use TypeScript with Eleventy?](https://github.com/11ty/eleventy/issues/577)
* [Include TypeScript types for configuration files](https://github.com/11ty/eleventy/issues/1459)
* [Declare "types" in package.json to make consuming types easier](https://github.com/11ty/eleventy/pull/2091/files)

## Questions

* [Include TypeScript types for configuration files #1459](https://github.com/11ty/eleventy/issues/1459)

  ```js
  /** @type {import('@11ty/eleventy').LocalConfig} */
  const config = (eleventyConfig) => {
  ```

* [Override Browsersync Server Options](https://www.11ty.dev/docs/watch-serve/#override-browsersync-server-options)
  * [Browsersync Docs > Options](https://browsersync.io/docs/options)
  * [`EleventyServe.js`](https://github.com/11ty/eleventy/blob/master/src/EleventyServe.js)

    ```js
    {
        server: serverConfig,
        port: port || 8080,
        ignore: ["node_modules"],
        watch: false,
        open: false,
        notify: false,
        index: "index.html"
    }
    ```

* [Allow shortcodes to return promises #429](https://github.com/11ty/eleventy/issues/429)
* [Nunjucks Asynchronous Shortcodes](https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-shortcodes)
* [Ignore Directory](https://www.11ty.dev/docs/ignores/)
* [Escape curly brackets in nunjucks](https://github.com/mozilla/nunjucks/issues/604)
* [Escape curly brackets in nunjucks](https://github.com/mozilla/nunjucks/issues/388)
* [Creating an 11ty Plugin - SVG Embed Tool](https://bryanlrobinson.com/blog/creating-11ty-plugin-embed-svg-contents/)
* [How to disable cross-device action mirroring functionality of BrowserSync?](https://stackoverflow.com/a/59514293/1366033)


* [Data Files](https://www.11ty.io/docs/data-js/)
* [Includes](https://mozilla.github.io/nunjucks/templating.html#include)

* [Async Filter for `Terser`](https://github.com/11ty/eleventy/issues/1344)

  Updated in [Quick Tips #2](https://www.11ty.dev/docs/quicktips/inline-js/)

  ```js
  const { minify } = require("terser");
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });
  ```

* Set Data Programmatically

  * [Eleventy config API method to Set Data #184](https://github.com/11ty/eleventy/issues/184)
  * [config-setdata](https://github.com/11ty/eleventy/tree/config-setdata)

