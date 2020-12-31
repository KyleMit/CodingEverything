# Web Dev

## Code Playgrounds

* [JSFiddle](https://jsfiddle.net/user/KyleMit/fiddles/)
* [StackBlitz](https://stackblitz.com/@KyleMit)
* [CodePen](https://codepen.io/KyleMit)
* [CodeSandbox](https://codesandbox.io/u/KyleMit)
* [Plunker](https://plnkr.co/users/KyleMit/plunks)
* [Gist](https://gist.github.com/KyleMit)
* Build and run github
  * [Codespaces](https://github.com/features/codespaces)
  * [Gitpod - Dev environments built for the cloud](https://www.gitpod.io/)
  * [Bl.ocks](https://bl.ocks.org/)

* Other
  * [snack.expo.io](https://snack.expo.io/) - react native
  * [RunKit](https://runkit.com/home) - node
  * [SQL Fiddle](http://sqlfiddle.com/) - sql
  * [.NET Fiddle](https://dotnetfiddle.net/) - dotnet

* Code Exercises
  * [LeetCode](https://leetcode.com/KyleMit/)
  * [Codewars](https://www.codewars.com/users/KyleMit)

### RunKit

* all documents on RunKit are public, you can make them searchable by publishing.
* all of npm's 1,000,000+ packages are already pre-installed, just `require()` them
* use arrow functions, classes, template strings, and most of ES6. See [everything we support here](https://runkit.com/runkit/es6-and-es7-support).
* `await` any promise instead of using callbacks ([example](https://runkit.com/docs/await))
* store secrets in [environment variables](https://runkit.com/settings/environment#environment)
* export an `endpoint` function to turn any notebook into an API ([endpoint docs](https://runkit.com/docs/endpoint))

## Community

* [Reddit Channels](https://www.reddit.com/user/kylemit/m/webdev/)

## BrowserList

* [browserslist/**browserslist**](https://github.com/browserslist/browserslist) - Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env
* [Browserslist is a Good Idea](https://css-tricks.com/browserlist-good-idea/)

* [Browserslist: caniuse-lite is outdated](https://stackoverflow.com/q/55271798/1366033)

  ```bash
  npm update caniuse-lite browserslist
  npx browserslist@latest --update-db
  ```

## Best Practices

### Visual

Tables should be avoided for layout in favor of using CSS.  Tables (and HTML in general) are intended to provide semantic meaning to the page.  They should be explicitly used for provided data in a tabular format.  Tables

### Performance

Linking to style sheets and JavaScript as external references is preferred to inline styling. Linking to external files allows the code to be cached on the client, allowing for faster delivery over the wire.  Additionally, every time a new CSS rule is added, the browser has to render the page again.  External files help reduce the number of rendering passes a page must make.  To ensure that changed files are delivered in favor of the old cached files, you have to implement cache busting.  You can add a query parameter to the end of the URL (`?v=01012014`) to create a unique URL that points to the same file.


## Cool Tech

* [NextParticle](https://nextparticle.nextco.de/)
* [Developer Tips by Umar Hansa](https://umaar.com/dev-tips/)

## JS

### How To

#### [How to create a `<style>` tag with Javascript?](https://stackoverflow.com/a/28662118/1366033)

[`Element.insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```js
document.head.insertAdjacentHTML("beforeend", `<style>body{background:red}</style>`)
```


### Tools

* [Image to Data URI converter](https://ezgif.com/image-to-datauri)
* [Clippy](https://bennettfeely.com/clippy/)
* [Transparent Textures](https://www.transparenttextures.com/)
* [MetaTags](https://metatags.io/)


## Lazy Load Images

* [Browser-level image lazy-loading for the web](https://web.dev/browser-level-image-lazy-loading/)
* [Lazy loading - Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
* [Native Lazy Loading](https://css-tricks.com/native-lazy-loading/)

## Font Performance


* [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/)
* FOUT with a Class
  * [FOUT with a Class](https://www.zachleat.com/web-fonts/demos/fout-with-class.html)
  * [web-font-loading-recipes/fout-with-class.html](https://github.com/zachleatweb-font-loading-recipes/blob/master/fout-with-class.html)
* Font Loading API Docs
  * [Document.fonts - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts)
  * [CSS Font Loading API - Web APIs](https://wiki.developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API#Browser_compatibility)
  * [FontFaceSet - Web APIs](https://wiki.developer.mozilla.org/en-US/docs/Web/API/FontFaceSet)
  * [FontFaceSet.load() - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/load)
  * [Can I use... `font-loading`](https://caniuse.com/font-loading)
* Font Loading Articles
  * [Loading Web Fonts with the Web Font Loader](https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/)
  * [A modern font loading strategy with the vanilla JS FontFaceSet.load() method](https://gomakethings.com/a-modern-font-loading-strategy-with-the-vanilla-js-fontfaceset.load-method/)
  * [The Compromise — a Modern but Compatible Font Loading Strategy](https://www.zachleat.com/web/the-compromise/)
* Local Web Fonts
  * [fontfamily.io](http://fontfamily.io/helvetica,arial)
* FontFaceObserver.js
  * [Font Face Observer — fast and simple web font loading](https://fontfaceobserver.com/)
  * [bramstein/fontfaceobserver: Webfont loading. Simple, small, and efficient.](https://github.com/bramstein/fontfaceobserver)
  * [Font Face Observer loading all fonts on page load?](https://stackoverflow.com/q/57046518/1366033)
  * [Avoid flash of invisible text](https://web.dev/codelab-avoid-invisible-text/)


## Responsive Images

* [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/webp)
* [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/loading-lazy-attr)

* [Responsive Images Done Right: A Guide To `<picture>` And `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)

### Lazy Load

* [aFarkas/lazysizes](https://github.com/aFarkas/lazysizes) | [npm](https://www.npmjs.com/package/lazysizes)
* [verlok/vanilla-lazyload](https://github.com/verlok/vanilla-lazyload) | [npm](https://www.npmjs.com/package/vanilla-lazyload)
* [Lazy Loading HTML5 picture tag](https://stackoverflow.com/q/24025464/1366033)
* [Lazy loading - Web Performance | MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
* [`<img>`: The Image Embed element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)

### Image Processing

* [lovell/sharp](https://github.com/lovell/sharp) | [npm](https://www.npmjs.com/package/sharp)
* [sharp - High performance Node.js image processing](https://sharp.pixelplumbing.com/)

### Blur Up / LQIP

* [Load a low-res background image first, then a high-res one](https://stackoverflow.com/a/51511503/1366033)
* [The "Blur Up" Technique for Loading Background Images](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/)
* [The “Blur-up” technique of loading background images](https://novelist.xyz/tech/progressive-background-image-loading/)
* ['Blur up' style lazy loading for background images](https://quillstudios.com.au/bloglist/2017/simple-lazy-loading-solution-for-fullscreen-backgrounds)
* [Blur Up on Gatsby](https://using-gatsby-image.gatsbyjs.org/blur-up/)
* [Easy "Blur Up" Image Loading with React Hooks](https://dev.to/benhoneywill/easy-blur-up-image-loading-with-react-hooks-513c)
* [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/)
* [vanruesc/blur-up: A tool that creates preview images.](https://github.com/vanruesc/blur-up)
* [Ways to Organize and Prepare Images for a Blur-Up Effect Using Gatsby](https://css-tricks.com/ways-to-organize-and-prepare-images-for-a-blur-up-effect-using-gatsby/)


### SQIP

* **SQIP** - SVG-based LQIP technique

* [sqip - npm](https://www.npmjs.com/package/sqip/v/1.0.0-alpha.32)
* [axe312ger/sqip](https://github.com/axe312ger/sqip#Node)
* [plugins > sqip-plugin-primitive](https://github.com/axe312ger/sqip/tree/master/packages/sqip-plugin-primitive#readme)
* [SQIP demo](https://axe312ger.github.io/sqip/)

### Picture Element

* [`<picture>`: The Picture element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
* [Using WebP Images | CSS-Tricks](https://css-tricks.com/using-webp-images/)
* [Cross-browser Webp images support](https://stackoverflow.com/q/53206746/1366033)


### WebP

* [Detecting WebP support](https://stackoverflow.com/a/27232658/1366033)
* [Creating WebP Images with the Command Line](https://web.dev/codelab-serve-images-webp/)
* [Use WebP images](https://web.dev/serve-images-webp/)
* [Using WebP Images with Fallback](https://usefulangle.com/post/114/webp-image-in-html-with-fallback)
* [Use WebP images along with other fallback sources and placeholder](https://medium.com/@tirthbodawala/use-webp-n-4cf7bda8348c)


## Questions


* [What is the difference between screenX/Y, clientX/Y and pageX/Y?](https://stackoverflow.com/q/6073505/1366033)

* [Difference between layerX and offsetX in JavaScript](https://stackoverflow.com/q/23217333/1366033)

* [How to find Event Listeners on a DOM Node when Debugging](https://www.stanleyulili.com/javascript/how-to-find-event-listeners-on-a-dom-node-when-debugging/)

* [How to get console inside jsFiddle](https://stackoverflow.com/q/39130610/1366033)

* [Set MIME type for ES6 Modules](https://stackoverflow.com/q/46138375/1366033)

   > Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html".
   > Strict MIME type checking is enforced for module scripts per HTML spec.

  * [Properly configuring server MIME types](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)

* Local http server

  * Rust - [https](https://crates.io/crates/https)
  * NPM - [http-server](https://www.npmjs.com/package/http-server)
  * NPM - [live-server](https://www.npmjs.com/package/live-server)
  * Python - [http-server](https://docs.python.org/3/library/http.server.html)


* [SVG - How to “use” local “defs” in SVG](https://stackoverflow.com/q/16123721/1366033)
* [Img - Convert SVG to ICO](https://convertio.co/svg-ico/)

* [Fonts - Google Fonts](https://fonts.google.com/specimen/Overlock)
* [Fonts - Embed Google Fonts](https://stackoverflow.com/a/53674218/1366033)
