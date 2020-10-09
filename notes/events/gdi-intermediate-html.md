---
title: GDI - Intermediate HTML + CSS
date: 2017-09-25
---

https://www.meetup.com/Girl-Develop-It-Burlington/events/242767452/

* [Overview](https://gdibtv.github.io/gdi-intermediate-html-css/)

* [Class 1](https://gdibtv.github.io/gdi-intermediate-html-css/class2.html#/)
* [Class 2](https://gdibtv.github.io/gdi-intermediate-html-css/class2.html#/)






### Serve files

```bash
cd Code\ Demos/gdi/intermediate\ 2
python -m SimpleHTTPServer 8080
```

## Class 1


[**Browser Agent vs. Normalize vs. Reset**](https://codepen.io/raearnold/details/eGvpbq/)

![screenshot](https://i.imgur.com/9ZzB536.png)

## Class 2

#### CSS - Border Radius

Clockwise from the top left

```css
selector {
    border-radius: topLeft topRight bottomRight bottomLeft;
}
selector {
    border-radius: topLeftAndBottomRight topRightAndBottomLeft;
}
/* implementation */
#banner img {
    width:100px;
    border-radius: 50%;
}
```


#### Custom Web Fonts

https://www.cssfontstack.com/
https://fonts.google.com/

```html
<link href="https://fonts.googleapis.com/css?family=Bree+Serif|Lato" rel="stylesheet">
```

```css
font-family: 'Lato', sans-serif;
font-family: 'Bree Serif', serif;
```

#### Spacing

`display:inline` can't have margin/padding - can use `line-height` as a hack, but breaks when you want to wrap text - each line is huge

![display](https://i.imgur.com/antSa8L.png)

#### Content

* Raster Graphics vs Vector Graphics
* PNG/GIF/JPEG vs <b>S</b>calable *<b>V</b>ector <b>G</b>graphics (SVG)

#### Can I use it?

[![can i use svg](https://i.imgur.com/CZGIYKP.png)](https://caniuse.com/#feat=svg)


### ?Idea - blackbox normalize CSS values - lots to process in rules section

#### Responsive Display

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Chrome Dev Tools - Toggle Device Toolbar (Emulator Mode)


### Animation

#### Bender

<iframe height='465' scrolling='no' title='Completely Unnecessary Bender' src='//codepen.io/anythingcodes/embed/vNbjMM/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/anythingcodes/pen/vNbjMM/'>Completely Unnecessary Bender</a> by Liz Shaw (<a href='https://codepen.io/anythingcodes'>@anythingcodes</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Trigger

Tigger with a state change (:hover, :checked, :focus, etc.)

Before - set property and transition variables
After - set new property to transition into

```css
selector {
    transition: width 2s;
}
```

Transition multiple properties

CSS cascades so you can't just declare twice have to comma separate multiples or declare all

```css
/* multiples - option 1 */
selector {
    transition: width 2s, background 5s;
}
selector {
    transition: all 5s;
}
```

Chrome > Dev Tools > Animations Pane > Slow down All animations

![animation pane](https://i.imgur.com/yOqRcH4.png)


#### Box Shadow

```css
selector {
    box-shadow: horizontalShadow verticalShadow blurDistance color;
    box-shadow: 10px 10px 5px grey;
}
```

##### Generators

* https://codepen.io/anythingcodes/pen/zvQBKm
* https://css3gen.com/wp-content/cache/all/box-shadow//index.html

#### Opacity
 
 Opacity is on the **whole** element

![opacity demo](https://i.imgur.com/SZLC0Vi.png)


## [Class 3](https://gdibtv.github.io/gdi-intermediate-html-css/class3.html#/)

### transition-timing-function

https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function

http://cubic-bezier.com/#.17,.67,.83,.67

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;
```


### transform

* rotate
* skale
* skew
* translate

### grid system

#### Frameworks

* boostrap
* skeleton
* foundation

#### roll your own

* `max-width`
* gutter - margin between columns

Grid Generator - http://www.responsivegridsystem.com/calculator/

```html
<section class="row">
  <div class="column span_4_of12">1</div>
  <div class="column span_4_of12">2</div>
  <div class="column span_4_of12">3</div>
</section>
```


#### responsive images

```css
img {
    max-width: 100%;
    box-sizing: border-box;
}
```

#### [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

##### `box-sizing: content-box`
![content](https://i.imgur.com/zi4sXId.png)


##### `box-sizing: border-box`
![content](https://i.imgur.com/g3QdCQu.png)

http://lorempixel.com/400/200/cats/

#### Gradients

```css
selector {
    background-image: linear-gradient(red, white);
}
.linear-example1 {
	background-image: linear-gradient(red, orange, yellow, green, blue, indigo, violet);
}
.linear-example2 {
	background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}
```


#### media queries

```css
@media screen and (max-width: 600px) {
    .column {
        margin: 1% 0;
        width: 100%;
    }
    .some-other-class {
        background-color: yellow;
    }
}
```

**Types**

* screen
* device
* print

#### Print Media Query

https://codepen.io/raearnold/pen/JojGWB

```css
@media print {

  /* This relies on your links having a rel attribute assigned consistently. */
  /*a[rel='external']:after {
    content: " (" attr(href) ")";
  }*/

  /* This may not be reliable… many blogs link to your domain internally, but it may work to target external links. the ^ stands for 'starts with' */
  a[href^='http']:after {
    content: " (" attr(href) ")";
  }  

  /* This hides any links that don't have http at the beginning of the href. */
  a:not([href^='http']) {
    display: none;
  }   
}
```

## Class 4

https://gdibtv.github.io/gdi-intermediate-html-css/class4.html#/

### Grid System (Under the Hood)

* Each **Row** has **Columns**
* Each **Column** has **span_x_of_12**
* The **Problem**... Floating takes columns out of normal flow, preventing columns from contributing to the height of their container
* The **Solution**... **Clearfix**
	* Since `:after` acts as the last item in our row (after the columns), it clears the float at that point and sets the row height properly
	* We use `:after` to inject an empty cleared, block-level pseudoelement at the end of each row

```css
.row:after {
    content: '';
    clear: both;
    display: block;
    visibility: hidden;
    height: 0;
}
```

**Row**
![row](https://i.imgur.com/LZmRRFd.png)

**W/0 Float**
![Before Clearfix](https://i.imgur.com/4WyWpCw.png)

**W/O Clearfix**
![W/O Clearfix](https://i.imgur.com/LCp6ClW.png)

**W/ Clearfix**
![W/ Clearfix](https://i.imgur.com/0afGwat.png)

#### Selector - `:nth-child()`

http://caniuse.com/#feat=css-sel3

```css
selector:nth-child(odd) {
    background: red;
}
```

**Inside of `()` function**

* `even`
* `odd` - every n mod 2 =1
* `n` - exact number
* `n+3` - from 3 and up
* `2n+2` - even
* `2n+1` - odd

**before** `n` - multiple of n
**after** `+`, what it starts on

#### Lorem Cat

https://placekitten.com/
http://lorempixel.com/400/200/cats/
http://www.catipsum.com/

#### Flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes

http://caniuse.com/#feat=flexbox
http://caniuse.com/#feat=css-grid

* Old - Floats
* New - Flexbox
* Future - [CSS Grids](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

**Flexbox** - `order` - reorder - like on mobile


##### Vendor Prefixes (for backward support)

http://shouldiprefix.com/#flexbox

```css
selector {
    display: -webkit-box;  /* iOS 6-, Safari 3.1-6 */
    display: -ms-flexbox;  /* IE 10 */
    display: -webkit-flex; /* Safari 6.1+. iOS 7.1+ */
    display: flex;         /* MODERN VERSIONS: Firefox, Chrome, Opera */
}
```

### CSS Button Hack

```html
<input type="checkbox" id="toggler" />
<label for="toggler">Toggle the checkbox!</label>
<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
</ul>
```

```css
#toggler ~ ul {
    background: grey;
}
#toggler:checked ~ ul {
    background: yellow;
}
#toggler { display: none}
```


#### Secret Menu

https://codepen.io/anythingcodes/pen/xwvqbB


### Masonry Layouts - Columns

https://codepen.io/KyleMit/pen/aLVgxE?editors=1100

Each item in a masonry layout is called a brick

```css
.masonry {
    column-count: 3;
    column-gap: 3;
}
.brick {
    display: inline-block;
    width: 100%;
    margin: 0 0 1em 0;
}
.brick img {
    width: 100%;
}
```
