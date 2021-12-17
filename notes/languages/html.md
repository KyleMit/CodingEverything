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

