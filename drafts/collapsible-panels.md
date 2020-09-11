---
title: Collapsible Panels with Bootstrap
tags: ['post', bootstrap, webdev]
draft: true
---


<style>
.xml .javascript,
.xml .vbscript,
.xml .css,
.xml .hljs-cdata {
    opacity: 1;
}
.codeHeader {
    margin-bottom: 0;
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    width: 600px;
    background-color: rgba(102,128,153,.2);
    border-bottom: solid 2px rgba(102,128,153,0.05);
    border-left: 0;
}
</style>

Bootstrap collapse offers a great way to dynamically show and hide content on the client.  The canonical example is to create an accordion control which only allows a single collapsible control to be open at once.  Unfortunately, I think this does a poor job of portraying the full versatility and power of collapsible panels.

Here's an overview of what collapse does and how to start using it.

### Basics

At it's core, here's all we need to collapse anything using Twitter Bootstrap's collapse.js:

>Just add `data-toggle="collapse"` and a `data-target` to element to automatically assign control of a collapsible element. The `data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `in`.

<h4 class="codeHeader"> HTML:</h4>
```
<a data-toggle="collapse" data-target="#myDiv">
    Click For More Info
</a>
<div id="myDiv" class="collapse">
    More Info
</div>
```

### Kyle Do It Self

On my 26<sup>th</sup> birthday, my Mom showed my a list of about 100 words and phrases that I could say by age 3.  Apparently, one of my favorite things to say was `Kyle Do It Self`.  While I would rather let a powerful framework like Bootstrap make my life easier, I still really like at least being to understand what it's doing under the hood.  Without any pretty touches, here's the gist of how to implement collapse toggles.

We'll start with the same HTML you would use for bootstrap, but we'll use our own CSS and JS.  The only dependency here is on plain old jQuery (and you could pretty easily get rid of that if you wanted too).

<h4 class="codeHeader"> HTML:</h4>
``` {.xml}
<a data-toggle="collapse" data-target="#myDiv" >
    Click For More Info
</a>
<div id="myDiv" class="collapse">
    More Info
</div>
```

If it's in the collapse state, we'll hide it, but if we've added the `in` class, then we'll restore it to the screen. Some transitions would help smooth this out a little, but that's all we need for now.

<h4 class="codeHeader"> CSS:</h4>
```css
.collapse {display: none; }
.in       {display: block;}
```

Now, we just need to be able to toggle the `in` class every time there is a click on the parent.  We can listen for clicks on anything that has data-toggle='collapse' with the attribute selector. Then, grab the target selector from the `data-target` attribute on the sending element and use it to toggle the class of the collapsible panel.

<h4 class="codeHeader"> JavaScript:</h4>
```js
$("[data-toggle='collapse']").click(function() {
    var targetSelector = $(this).data("target");
    $(targetSelector).toggleClass("in");
});
```

And that's it.  Bootstrap helps add transitions and style elements so they are logically grouped together, but

### Looking Better

<h4 class="codeHeader"> HTML:</h4>
```xml
<div class="panel panel-default" id="panel1">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse"
           data-target="#collapseOne"
           href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">
       <!-- spellchecker: disable -->
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
       <!-- spellchecker: enable -->
      </div>
    </div>
  </div>
</div>
```
