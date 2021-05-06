---
title: How To Deselect A Radio Button
tags: [post, UserScripting, RadioButton, UX]
date: 2014-06-26
postID: 5663681479233234848
---

Sometimes radio buttons can be quite frustrating as a user when you need to deselect having answered a question.

Here's a quick way to temporarily allow a page to deselect radio buttons by pressing <kbd>Ctrl</kbd> + <kbd>Click</kbd>

1. Navigate to any page that has radiobuttons.  Here's an [example of one](http://jsfiddle.net/KyleMit/8vu8v/show/):
2. Click <kbd>F12</kbd> to open up the developer tools
3. Navigate to the Console Pane
4. Copy and paste in the following code into the editor:

    ```js
    document.addEventListener('click', function(e){
        if (e.ctrlKey == true &&
            e.target.tagName == 'INPUT' &&
            e.target.type == "radio" &&
            e.target.checked == true) {
            e.target.checked = false;
        }
    });
    ```

5. Click Run Script (or hit <kbd>Enter ↵</kbd>)
6. Now, to deselect a radio button just go back to the page and hold down <kbd>Ctrl</kbd> and click with your mouse.

### Screenshot

<img id="browserInstructions" src="https://i.imgur.com/aeUS4la.gif" alt="Instructions"/>

This screenshot should match your current browser (🤞), but if it doesn't - here's an [album of screenshots for different browsers](http://imgur.com/a/SB8rN).


> **Note**: Of course, by the time you're opening up the developer tools, you can just edit the HTML directly, but this is a little more reusable.

P
<div><script>
//http://stackoverflow.com/a/9851769/1366033
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var img = document.getElementById('browserInstructions');
if (isFirefox) {
    img.src = 'https://i.imgur.com/xDodZUR.gif';
} else if (isIE) {
    img.src = 'https://i.imgur.com/tgWvanJ.gif';
}
</script></div>

