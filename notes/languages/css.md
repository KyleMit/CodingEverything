# CSS

Cascade Style Sheets

[`shape-outside`](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)

> defines a shape—which may be non-rectangular—around which adjacent inline content should wrap

## State of CSS

[2019](https://2019.stateofcss.com/)

## Preprocessors

* [SCSS](https://sass-lang.com/documentation/syntax#scss) - uses curly braces
* [Sass](https://sass-lang.com/documentation/syntax#the-indented-syntax) - uses indentation
* [Less](http://lesscss.org/)
* [Stylus](https://stylus-lang.com/)


## BEM

[BEM Introduction](http://getbem.com/introduction/)

* **Block** - Standalone entity that is meaningful on it's own
  * ex. `header`, `container`, `menu`, `checkbox`, `input`
* **Element** - A part of a block that has no standalone meaning and is semantically tied to it's block
  * ex. `menu item`, `list item`, `checkbox caption`, `header title`
* **Modifier** - A flag on a block or element. Use them to change appearance or behavior
  * ex. `disabled`, `highlighted`, `checked`, `fixed`, `size big`, `color yellow`

![bem diagram](/assets/notes/css/bem-diagram.jpg)



## Media Queries


### prefers-reduced-motion

```css
button {
  /* `vibrate` keyframes are defined elsewhere */
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}
```


## Questions

* [CSS selector with period in ID](https://stackoverflow.com/q/12310090/1366033)

```css
#some\.id {
  color: #f00;
}
```


* [CSS Image size, how to fill, not stretch?](https://stackoverflow.com/a/29103071/1366033)

* [transition height: 0; to height: auto; using CSS?](https://stackoverflow.com/a/8331169/1366033)

* [Using `box shadows` and `clip-path` together](https://css-tricks.com/using-box-shadows-and-clip-path-together/)
* [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)

* [`animation` shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

  ```css
  /* @keyframes duration | easing-function | delay |
  iteration-count | direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;

  /* @keyframes name | duration | easing-function | delay */
  animation: slidein 3s linear 1s;

  /* @keyframes name | duration */
  animation: slidein 3s;
  ```

* [Play multiple CSS animations at the same time](https://stackoverflow.com/q/26986129/1366033)

  ```css
  animation: rotate 1s, spin 3s;
  ```

* [Maintaining the final state at end of a CSS animation](https://stackoverflow.com/q/12991164/1366033)

  ```css
  animation-fill-mode: forwards;
  ```

* [CSS flex box last space removed](https://stackoverflow.com/q/39325039/1366033)


  [Demo in JS Fiddle](https://jsfiddle.net/KyleMit/e02u3v7b/)


  Fixes

  ```html
  <div class="row">
  <span><strong>2</strong> cats</span>
  </div>
  <div class="row">
    <strong>4</strong>&nbsp;cats
  </div>
  <div class="row" style="white-space: pre-wrap;">
    <strong>6</strong> cats
  </div>
  ```

