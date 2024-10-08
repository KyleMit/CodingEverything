# DOM

Document Object Model

## Links

[DOM Standard](https://dom.spec.whatwg.org/)
[whatwg/dom: DOM Standard](https://github.com/whatwg/dom)

## Questions

* [Remove element by id](https://stackoverflow.com/q/3387427/1366033)

  Use [`Element.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)

  ```js
  el.remove()
  ```

* [How to get the `<html>` tag HTML](https://stackoverflow.com/q/4196971/1366033)

  ```js
  document.documentElement
  ```

* [Disable F5 and browser refresh using JavaScript](https://stackoverflow.com/q/2482059/1366033)

  ```js
  document.addEventListener("keydown", (e) => {
    if (e.key == "F5") {
      e.preventDefault();
    }
  })
  ```

* [Add CSS to `<head>` with JavaScript?](https://stackoverflow.com/a/53152550/1366033)

  ```js
  function addCssToDocument(css){
    var style = document.createElement('style')
    style.innerText = css
    document.head.appendChild(style)
  }
  ```

* [Dynamically add script tag with src](https://stackoverflow.com/q/13121948/1366033)

  ```js
  function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
  }
  ```

* [Using querySelectorAll to retrieve direct children](https://stackoverflow.com/q/3680876/1366033)


  Use [`:scope` pseudo-class](https://drafts.csswg.org/selectors-4/#the-scope-pseudo)

  ```js
  myDiv.querySelectorAll(":scope > .foo");
  ```

* [`location.reload(true)` is deprecated](https://stackoverflow.com/q/55127650/1366033)


* [Can I escape HTML special chars in JavaScript?](https://stackoverflow.com/q/6234773/1366033)

  Use [`.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

  ```js
  document.body.textContent = 'a <b> c </b>';
  ```

* [Adding click event listener to elements with the same class](https://stackoverflow.com/q/21700364/1366033)

  ```js
  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("box")) {
      doit();
    }
  })
  ```

* [How can I set multiple CSS styles in JavaScript?](https://stackoverflow.com/q/3968593/1366033)

  ```js
  Object.assign(el.style,{fontSize:"12px",left:"200px",top:"100px"});
  ```

* [Extract hostname name from string](https://stackoverflow.com/q/8498592/1366033)

  ```js
  const url = 'http://www.youtube.com/watch?v=ClkQA2Lb_iE';
  const { hostname } = new URL(url);
  console.log(hostname) // 'www.youtube.com'
  ```

* [How can I add an event for a one time click to a function?](https://stackoverflow.com/q/3393686/1366033)

  [`EventTarget` Parameters](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters)

  ```js
  EventTarget.addEventListener("click", function() {

      // Do something cool

  }, {once : true});
  ```

* [List every font a user's browser can display](https://stackoverflow.com/q/3368837/1366033)

  Chrome only in Jan 2023

  Use [Local Font Access API](https://developer.mozilla.org/en-US/docs/Web/API/Local_Font_Access_API)

  ```js
  const fonts = await queryLocalFonts();
  ```

  Use [`Navigator.permissions`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions)

  ```js
  const {state} = await navigator.permissions.query({name: 'local-fonts'});
  console.log(state); // Either 'granted', 'prompt' or 'denied'
  ```

* [How to remove all elements of a certain class from the DOM?](https://stackoverflow.com/q/10842471/1366033)

  ```js
  document.querySelectorAll('.classname').forEach(e => e.remove());
  ```

* [What is the difference between insertAdjacentHtml and insertAdjacentElement?](https://stackoverflow.com/q/57111065/1366033)

  * [`Element.insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
  * [`Element.insertAdjacentElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)

  `HTML` for text, `Element` for nodes already in the DOM


* [How to insert an element after another element in JavaScript without using a library?](https://stackoverflow.com/q/4793604/1366033)

  Use [`insertAdjacentElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)

  ```js
  el.insertAdjacentElement(position, newEl)
  ```

  ```html
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
  ```

  Use [`Element.after()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)

  ```js
  el.after(newEl)
  ```

* [Is it possible to clone html element objects in JavaScript?](https://stackoverflow.com/q/921290/1366033)

  Use [`cloneNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)

* [Change textNode value](https://stackoverflow.com/q/680431/1366033)

  ```js
  node.nodeValue="new value";
  ```

  **See Also**: [`#text` node](https://developer.mozilla.org/en-US/docs/Web/API/Text#instance_properties)

* [How to get the text node of an element?](https://stackoverflow.com/q/6520192/1366033)

  ```js
  [...el.childNodes].find(child => child.nodeType === Node.TEXT_NODE);
  ```

* [How to find that DOM node that contains a text?](https://stackoverflow.com/q/52653657/1366033)

  Using jQuery
  
  ```js
  `$(":contains('hello')")`
  ```

  Using JS

  ```js
  [...document.querySelectorAll("h2")].filter(el => el.textContent.includes("Naps"))
  ```


* [Multiple OnBeforeUnload](https://stackoverflow.com/q/8999439/1366033)

  ```js
  window.addEventListener('beforeunload', function (event) {
    console.log('I am preventing losing form data')
    event.preventDefault()
    event.returnValue = ''
  });
  ```

* [How can I remove a JavaScript event listener?](https://stackoverflow.com/q/4402287/1366033)

  [Remove Specific Event Listener](https://codepen.io/KyleMit/pen/YzJvPzb?editors=1011)

  ```js
  const btn = document.querySelector("#btn")

  btn.addEventListener("click", listenOne)
  btn.addEventListener("click", listenTwo)
  btn.removeEventListener("click", listenOne)

  function listenOne() { console.log("one") }
  function listenTwo() { console.log("two") }
  ```

* [Unescape HTML entities in JavaScript?](https://stackoverflow.com/q/1912501/1366033)

  ```js
  function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
  }
  ```

  **See Also**: [What's the right way to decode a string that has special HTML entities in it?](https://stackoverflow.com/q/7394748/1366033)

* [How to get last child from parent element](https://stackoverflow.com/q/72750452/1366033)

  Use [`Element.lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild)

  ```js
  var list = document.getElementById("list-container");
  var last = list.lastElementChild
  ```

* [Request with URL that includes credentials](https://stackoverflow.com/q/45067331/1366033)

  Instead of:

  ```js
  fetch(`http://${user}:${pass}@host.com`)
  ```

  Do this:

  ```js
  var headers = new Headers({
      'Authorization': `Basic ${btoa(user + ':' + pass)}`
  });

  fetch('https://host.com', {headers: headers})
  ```

* [Stop pasting html style in a contenteditable div only paste the plain text](https://stackoverflow.com/q/58980235/1366033)

  ```js
  var ce = document.querySelector('[contenteditable]')
  ce.addEventListener('paste', function (e) {
    e.preventDefault()
    var text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  })
  ```

* [How to trigger change when using the back button with history.pushstate and popstate?](https://stackoverflow.com/q/8038726/1366033)

  ```js
  window.addEventListener("popstate", function (e) {
      window.location.reload();
  });
  ```

* [Get all user defined window properties?](https://stackoverflow.com/q/17246309/1366033)


  ```js
  // get the current list of properties on window
  var currentProps = Object.getOwnPropertyNames(window);

  // create an iframe and append to body to load a clean window object
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var iframeProps = new Set(Object.getOwnPropertyNames(iframe.contentWindow));
  document.body.removeChild(iframe);

  // get the difference
  var diff = currentProps.filter(x => !iframeProps.has(x))
  console.log(diff)
  ```

* [Should cookie values be URL encoded?](https://stackoverflow.com/q/49205195/1366033)

  Not required, but sure.  Should at least encode `;` and `=`


* [Clear element.classList](https://stackoverflow.com/q/15040297/1366033)

    ```js
    element.className = "";
    ```
