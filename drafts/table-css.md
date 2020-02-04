---
title: Replacing Deprecated Table Attributes with CSS
tags: ['post', css]
draft: true
---

Element | Attribute        | → |CSS Replacement
--------|------------------|---|----------------
table   | [cellSpacing][1] | → | [border-collapse][5]
table   | [cellPadding][2] | → |[padding][6]
table   | [border][3]      | → | [border][7]
td      | [align][4]       | → | [text-align][8]

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attr-cellspacing
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attr-cellpadding
[3]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attr-border
[4]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attr-align
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
[6]: https://developer.mozilla.org/en-US/docs/Web/CSS/padding
[7]: https://developer.mozilla.org/en-US/docs/Web/CSS/border
[8]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

[Using CSS to make table's outer border color different from cells' border color](http://stackoverflow.com/q/5875931/1366033)

[CSS Table](http://jsfiddle.net/KyleMit/Sx97B/)
<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/Sx97B/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
[CSS Table with Header](http://jsfiddle.net/KyleMit/zZv2X/)
<iframe width="100%" height="300" src="http://jsfiddle.net/KyleMit/zZv2X/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
