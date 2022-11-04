# DOM

Document Object Model

## Links

[DOM Standard](https://dom.spec.whatwg.org/)
[whatwg/dom: DOM Standard](https://github.com/whatwg/dom)

* [Remove element by id](https://stackoverflow.com/q/3387427/1366033)

  ```js
  element.remove()
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

