---
title: Mutually Exclusive Checkboxes with JQuery
tags: [post, HTML, JQuery, WebDev]
date: 2013-02-23
postID: 977226616385460301
---
### The Problem

Let's say you want to have a set of mutually exclusive check boxes  and want to implement that logic on the client so that the user can get immediate, responsive feedback about their selection choices.  Normally, mutual exclusivity would be enforced with radio buttons ensuring user familiarity with the interface selections.  However, in this specific case, let's suppose that within a specific sub category, a user can select as many options as they want, but cannot select options from more than one subcategory. Imagine setting contact preferences as either No or some type of Yes.  Or perhaps there is a Online food order form where certain topping choices are mutually exclusive between categories.

![screenshot example](https://i.imgur.com/s38UIX8.png)

### Solution

You can bind JQuery to the click event of your checkboxes and use that event to ensure that checkboxes in any other groups are set to `checked=false`.
First group each distinct set of checkboxes inside a set of `<div></div>`  tags:

```html
<div id="opt1">
  <input id="a" type="checkbox">
  <input id="b" type="checkbox">
</div>
```

We can monitor for clicks to any of the child items inside of the div tag, by using it's ID as our initial selector `$('#opt1')` and looking for a *Click* event on that div.  This will fire when any element inside of that div tag is clicked.

Next, we'll check if the event that fired the event has a checked property set to true, by checking `if (event.target.checked)`.  This will prevent clicks on the label from processing our code or de-selections in a particular category from running un-necessary code.

Finally, we'll want to go through all check box categories and remove any check marks from any checkboxes that they contain.  To do this, we'll first start by selecting the ID from an alternate div tag.  Then we'll call `find('input')` to find all child items of type *Input*.  To each of these items, we'll call `removeAttr('checked')` to remove the checked attribute from each one.

```js
$('#yes').click(function (event) {
  if (event.target.checked) {
    $('#no').find('input').removeAttr('checked');
  }
});
```

### Source Code

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="http://jsfiddle.net/KyleMit/v24Db/embedded/result,js,html/" style="height: 300px; width: 100%;"></iframe>
