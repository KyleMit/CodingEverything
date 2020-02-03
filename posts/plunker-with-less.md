---
title: Using Plunker With LESS
tags: [post, less, plunker]
date: 2014-07-19
postID: 9085781745051631100
---


According to this update, it's now possible to [use compiled languages like LESS with plunker][update]

According to the [Client Side Usage from the Less Documentation][less client], you should do the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet/less" type="text/css" href="style.less">
    <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min.js"></script>
  </head>
  <body>
  </body>
</html>
```

#### styles.less:

Here's a super simple example of a less file that will chane the background color bright red

```css
@background-color: red;
body { background: @background-color; }
```

### [Here's an example in plunker][plunker]


If it's not showing up for whatever reason, then you probably have a compile error in your less, which will cause the entire sheet to not be delivered.  You can check by copying and pasting your code into a [online LESS compiler][less compiler] and seeing if it spits out any errors.

[update]: http://run.plnkr.co/plunks/CiBjc4/
[less client]: http://lesscss.org/#client-side-usage
[less compiler]: http://www.freeformatter.com/less-compiler.html
[plunker]: http://plnkr.co/edit/lpsP0gIdcQV9Ftn457UD?p=preview
