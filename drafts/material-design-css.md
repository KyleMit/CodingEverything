---
title: "Under the Hood: Material Design CSS"
tags: ['post', agile, opinion]
draft: true
---


https://jsfiddle.net/KyleMit/hbdp9xpr/
https://developer.mozilla.org/en-US/docs/Web/CSS/background
https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient

#### Text Input

```html
<div class="form-group">
  <label for="">First Name:</label>
  <input type="text" class="form-control">
</div>

<div class="form-group">
  <label for="">Last Name:</label>
  <input type="text" class="form-control">
</div>
```


#### Checkbox



#### Radio Buttons

```css
.form-control {
    border: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    background-color: rgba(0, 0, 0, 0);
    
    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)),
                      -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));
    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);
    background-image:      -o-linear-gradient(#009688, #009688),      -o-linear-gradient(#D2D2D2, #D2D2D2);
    background-image:         linear-gradient(#009688, #009688),         linear-gradient(#D2D2D2, #D2D2D2);
    background-repeat: no-repeat;
    background-position: center bottom, center -webkit-calc(100% - 1px);
    background-position: center bottom, center         calc(100% - 1px);
    
    -webkit-background-size: 0% 2px, 100% 1px;
            background-size: 0% 2px, 100% 1px;
    
    -webkit-transition: background 0s ease-out;
         -o-transition: background 0s ease-out;
            transition: background 0s ease-out;         

    
}
.form-control:focus {
    outline: none;
    -webkit-background-size: 100% 2px, 100% 1px;
            background-size: 100% 2px, 100% 1px;
    -webkit-transition-duration: 0.3s;
         -o-transition-duration: 0.3s;
            transition-duration: 0.3s;
}
```
