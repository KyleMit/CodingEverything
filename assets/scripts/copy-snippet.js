document.addEventListener("click", function(e) {
    var el = e.target;

    // if event was raised inside a copy button
    var btn = el.closest(".btn-copy")
    if (btn) {
        var text = btn.nextSibling.innerText

        copyToClipboard(text, function() {

          // success!
          var btnTxt = btn.querySelector(".btn-text")
          btnTxt.innerText = "Copied!"
  
          // revert text after 3 seconds
          setTimeout(function() {
            btnTxt.innerText = "Copy"
          }, 3000)
          
        })
    }
})

// Copies a string to the clipboard.
function copyToClipboard(text, callback) {

    if (window.navigator.clipboard) {
      return navigator.clipboard.writeText(text).then(function() {
        callback()
        return true
      });
  
    }
  
    if (window.clipboardData && window.clipboardData.setData) {
      clipboardData.setData("Text", text);
      callback()
      return true;
    }
  
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textArea = document.createElement("textarea");
  
      // Place in top-left corner of screen regardless of scroll position.
      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
  
      // Ensure it has a small width and height. Setting to 1px / 1em
      // doesn't work as this gives a negative w/h on some browsers.
      textArea.style.width = '2em';
      textArea.style.height = '2em';
  
      // We don't need padding, reducing the size if it does flash render.
      textArea.style.padding = 0;
  
      // Clean up any borders.
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
  
      // Avoid flash of white box if rendered for any reason.
      textArea.style.background = 'transparent';
  
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
  
      try {
        document.execCommand("copy");  
        callback()
        return true
      } finally {
        // Security exception may be thrown by some browsers.
        document.body.removeChild(textArea);
      }
    }
  
    return false;
}

if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
      do {
          i = matches.length;
          while (--i >= 0 && matches.item(i) !== el) {};
      } while ((i < 0) && (el = el.parentElement));
      return el;
  };
}