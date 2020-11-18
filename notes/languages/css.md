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


## Questions

* [CSS selector with period in ID](https://stackoverflow.com/q/12310090/1366033)

```css
#some\.id {
  color: #f00;
}
```


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

