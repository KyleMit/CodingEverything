# Web Dev

## JS

### How To

#### [How to create a `<style>` tag with Javascript?](https://stackoverflow.com/a/28662118/1366033)

[`Element.insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```js
document.head.insertAdjacentHTML("beforeend", `<style>body{background:red}</style>`)
```

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

