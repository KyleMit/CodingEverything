---
title: Adding a Desktop Mobile Toggle Button
tags: [post, "Responsive Design", Bootstrap]
date: 2014-06-30
postID: 6639837042969518
---

The **goal** of a Bootstrap site is to deliver a mobile view that is so easily navigable that it never leaves the user yearning for a tiny shrunk down desktop experience on their phone.  Still, despite a developers best intentions, some users just want what they want.  And we should give it to them.  We're not designing sites so that we may enforce our will on others, but to provide content that users find easy to view, and some users have different preferences than others.

Luckily, we can easily provide both worlds, and default to a responsive view with the hopes that they will find it so convincing they'll never need the desktop view.

Here's a little snippet of code that I like to put on websites. You can see it in action on: http://kylemitofsky.com/

Add two toggles to your page.

```html
<!-- Desktop / Mobile Footer -->
<div id="DesktopMobileFooter" class='h_center'>
    <hr/>
    <div class="MobileToggle">
        View <a id="DesktopSite" href="#" >Desktop</a> | <strong>Mobile</strong> Site
    </div>
    <div class="MobileToggle" style="display:none;">
        View <strong>Desktop</strong> | <a id="MobileSite" href="#" >Mobile</a> Site
    </div>
</div>
```

Then add the following JavaScript:

```js
$(".MobileToggle a").click(function () {
    var viewport = ($(this).attr('id') === "MobileSite") ?
                    'width=device-width, initial-scale=1.0' :
                    'width=1200';
    $("meta[name=viewport]").attr('content', viewport);
    $(".MobileToggle").toggle();
    return false;
});
```

**NOTE**: As AJ pointed out in the comments, for this solution to work (and Bootstrap in general) make sure you've included the tags from [Bootstrap's Basic Template](http://getbootstrap.com/getting-started/#template), specifically the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
