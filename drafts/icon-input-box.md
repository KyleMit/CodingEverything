---
title: Adding a Bootstrap Glyphicon to Input Box
tags: [post, Bootstrap, Glyphicon, Input Box]
draft: true
---

You can do this all with CSS.  You can absolutely `position` the icon inside of the `input` box, and then add `padding` to the side of the `input` element so the text field doesn't begin until after the icon.

For the following **HTML**:


```xml
<div class="left-inner-addon">
    <i class="icon-user"></i>
    <input type="text" class="form-control" />
</div>
```

To position a *left aligned* icon, use the following **CSS**:

```cs
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 30px;    
}
.left-inner-addon i {
    position: absolute;
    padding: 10px 12px;
    pointer-events: none;
}
```

###[Demo in jsFiddle][cssFiddle]

<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/cyCFS/embedded/result,html,css,resources/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

If you want to align the icon to the right of the text box, you can use <code><b>right</b>-inner-addon</code> instead of <code><b>left</b>-inner-addon</code>, like follows:

```css
.right-inner-addon {
    position: relative;
}
.right-inner-addon input {
    padding-right: 30px;    
}
.right-inner-addon i {
    position: absolute;
    right: 0px;
    padding: 10px 12px;
    pointer-events: none;
}
```

Which will look like this:

![css demo][css demo]

-------

[cssFiddle]: http://jsfiddle.net/KyleMit/cyCFS/
[css demo]: https://i.imgur.com/pZKKOKQ.png
