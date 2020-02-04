---
title: Adding a context menu to the web
tags: ['post', webdev]
draft: true
---

Context Menus have been a long established design concept in traditional desktop applications.  As web application development matures, the ability to integrate more sophisticated features becomes available.  In this post, we'll learn how to use a context menu in an online application using HTML, JavaScript, and CSS.


For starter's we'll need to tap into the right click event on a webpage.  Using jQuery we can listen to particular html elements for the [`contextMenu`][contextMenu] event. This is pretty well [supported in most browsers][CanIUseContextMenu]





[contextMenu]: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/contextmenu
[CanIUseContextMenu]: http://caniuse.com/menu
