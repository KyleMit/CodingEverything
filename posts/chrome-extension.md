---
title: Insert HTML, CSS, and JS into any Web Page with a Chrome Extension
tags: [post, "chrome extension",  HTML, JS, WebDev]
date: 2014-01-12
postID: 4506518418698043530
---

### Overview

Chrome extensions have pretty good documentation and pretty good community support.  Naturally, you might expect that between [docs][docs] and [forums][so-chrome] that you can get a small project up and running quickly.

Unfortunately, sometimes minor simple tasks can get lost in the weeds.  Documentation usually only covers the basic, small, happy flow cases and forums usually only ask about difficult, large problems.  Well what about issues of medium size and complexity?  Leave that to the bloggers!

Here we'll take a look at how to create a chrome extension that uses a **Content Script** to change the background color of any page using [jQuery][jQuery].

### Manifest.json

First things first.  You need a way to tell chrome what your intentions are, what components come with your extension, and when they apply.  To do this, we'll use a [manifest file][manifest].

The manifest file contains some JSON formatted data that Google knows how to read.  There is a lot of boiler plate info that you can explore, but, for our purposes, we want to pay special attention to the [content script][content script] section:

```js raw
{
  "manifest_version": 2,
  "name": "Page Changer",
  "version": "0.1",
  "description": "Page Changer",
  "icons": { "16": "Icons/Logo16.png",
             "32": "Icons/Logo32.png",
             "48": "Icons/Logo48.png",
            "128": "Icons/Logo128.png" },
  <b>"content_scripts": [
    {
      "matches": ["*://*/*"],
      "js": ["jquery.min.js", "script.js"]
    }
  ]</b>
}
```

The content script must specify two things:

1. The pages against which to run the code
2. The external code files to run.

In this case, we've specified that we want to our content to run whenever the web url matches the pattern `*://*/*`, which is to say for all protocols, for all domains, for all pages (*in other words, run everywhere*).

If you just wanted to target google.com or any of it's content pages, then you could put that there.

The second thing we've specified is which files to run and in which order.  First we'll load jQuery from a local copy that we deploy, and next we'll run a file called `script.js` that we'll look at in a second.

### Script.js

In this simplified example, let's say we just want to change the background color of the current page for a very obvious example of whether or not all the right components have been called.  In a real world example, you might want to find all the links in the page and turn them a particular color.  Or attach some code to any images on the page to allow you to easily email them.  Whatever you want!

For now, let's just run the following script which will find the `body` element and use the `css()` method in jQuery to apply the value `blue` to the `background` property:

```js
$(function() {
  $("body").css("background","blue");
});
```

**Note:** Just so I don't get comments about it.  If this was the only change you wanted to make to the page, you can and *should* do this purely with CSS.  The idea was to add jQuery to a page in a trivial example so you can implement your own functionality later.



### Deployment

To run the extension, do the following steps:

1. In Chrome, Open the Browser **Menu** <i class="icon-menu"></i>
2. Click on **Tools**, and then **Extensions**
3. Make sure **Developer Mode** is checked *(usually in the top right)*
4. Click **Load Unpacked Extension** and select the folder that contains your manifest and extension files.

That's it! Go to any affected page and hit refresh to see your changes applied:

![Demo](https://i.imgur.com/Tu4PuzP.png)

To get started, you can download all the files you need to run this extension from the [SkyDrive][SkyDrive] folder below.

<iframe src="https://skydrive.live.com/embed?cid=9935281CD314F220&resid=9935281CD314F220%2136029&authkey=AFQnetIgn4vZY_0" width="165" height="128" frameborder="0" scrolling="no"></iframe><br/>


If you've made changes and are happy with them, you can even deploy to the [Chrome Extension Store][chrome store] for other people to use after getting a [developer account][chrome developer].

Here's a couple of extensions I've built for chrome, along with their source code if you're looking for examples.  Feel free to leave comments on GitHub with any suggestions or bugs using GitHub's issue tracker.

* **Link Finder** - Find all links to named anchors within the page so you can create descriptive links to content within a page
  * [Store Link][LinkFinderStore]
  * [Git Hub][LinkFinderGitHub]
* **Copy Tabs** - Creates a keyboard shortcut (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>) which copies links for selected tabs
  * [Store Link][CopyTabsStore]
  * [Git Hub][CopyTabsGitHub]

---

Upcoming: Part 2 - How to Insert HTML, CSS, and JavaScript into any page using a browser action.

[docs]: http://developer.chrome.com/extensions/index.html
[so-chrome]: http://stackoverflow.com/questions/tagged/google-chrome-extension?sort=votes&pageSize=50
[jQuery]: http://jquery.com/
[manifest]: http://developer.chrome.com/extensions/manifest.html
[content script]: https://developer.chrome.com/extensions/content_scripts.html

[chrome store]: https://chrome.google.com/webstore/category/extensions
[chrome developer]: https://chrome.google.com/webstore/developer/dashboard

[SkyDrive]: http://sdrv.ms/1aw1ZCG
[LinkFinderStore]: https://chrome.google.com/webstore/detail/link-finder/jnodcgnkggmnlmcgibanbaeagpjckjnd
[LinkFinderGitHub]: https://github.com/KyleMit/LinkFinder
[CopyTabsStore]: https://chrome.google.com/webstore/detail/copy-tabs/efmfdbcopjfmgoefenohhlcplheclbeo
[CopyTabsGitHub]: https://github.com/KyleMit/ChromeCopyTabs
