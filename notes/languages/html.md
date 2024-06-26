# HTML


## Elements


* [`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) - Description List
* [`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt) - Description Term
* [`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd) - Description Detail

* [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)

  * `new-password`
  * `current-password`
  * `one-time-code`
  * ...



## Canvas

* [HTML5 canvas inspector?](https://stackoverflow.com/q/9143209/1366033)

  > There are no objects rendered on an HTML5 Canvas. There are only pixels.
  > When you draw a shape the canvas waves its wand, pixels appear, and then it forgets that anything even happened.

  ```js
  yourcanvas.toDataURL();
  ```


* [How do I style HTML5 canvas text to be bold and/or italic?](https://stackoverflow.com/a/64919060/1366033)

    ```js
    // draw first text
    var text = '99%';
    ctx.font = 'bold 12pt Courier';
    ctx.fillText(text, 50, 50);

    // measure text
    var textWidth = ctx.measureText(text).width;

    // draw second text
    ctx.font = 'normal 12pt Courier';
    ctx.fillText(' invisible', 50 + textWidth, 50);
    ```

* [Draw text decoration (underline, etc.) with Canvas](https://stackoverflow.com/a/30674408/1366033)

    ```js
    ctx.fillText(text, xPos, yPos);
    let { width } = ctx.measureText("Hello World");
    ctx.fillRect(xPos, yPos, width, 2);
    ```


## Questions

* [Are there two ways to jump to a fragment identifier in HTML?](https://stackoverflow.com/q/35032130/1366033)


  [7.10.9 Navigating to a fragment](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-fragid)

  > To find a potential indicated element given a string fragment, run these steps:
  >
  > 1. If there is an element in the document tree that has an `ID` equal to *fragment*, then return the first such element in tree order.
  > 2. If there is an `<a>` element in the document tree that has a `name` attribute whose value is equal to *fragment*, then return the first such element in tree order.
  > 3. Return null.

* [Limit file format when using `<input type="file">`?](https://stackoverflow.com/q/4328947/1366033)

  ```html
  <input type="file" accept=".xls,.xlsx" />
  ```

* [What exactly is the `#:~:text=` location hash in an URL?](https://stackoverflow.com/q/62161819/1366033)

  [W3C - Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)

  `#:~:text=`

* [HTML5 `main` element vs ARIA landmark `role="main"`](https://stackoverflow.com/q/19595719/1366033)

  Today, just use `<main>`

* [Should `ol/ul` be inside `<p>` or outside?](https://stackoverflow.com/q/5681481/1366033)

  `ol` elements are not legally allowed inside `p` elements

* Datalist
  * SO
    * [Autocomplete text input](https://stackoverflow.com/q/13568609/1366033)
    * [HTML select form with option to enter custom value](https://stackoverflow.com/q/5650457/1366033)
    * [html - Drop Down Menu/Text Field in one](https://stackoverflow.com/q/18309059/1366033)
    * [HTML Form: Select-Option vs Datalist-Option](https://stackoverflow.com/q/6865943/1366033)
    * [combobox - How can I create an editable dropdownlist in HTML?](https://stackoverflow.com/q/264640/1366033)
  * MDN
    * [`<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

  ```html
  <label>Choose a browser from this list:
  <input list="browsers" name="myBrowser" /></label>
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
    <option value="Microsoft Edge">
  </datalist>
  ```


  