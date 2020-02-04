---
title: Hacking Custom List Styles in Markdown
tags: [post, "markdown"]
draft: true
---

<div><style>
.lower_roman+ol, .lower_roman+ul {list-style-type: lower-roman;}
.upper_roman+ol, .upper_roman+ul {list-style-type: upper-roman;}
.lower_alpha+ol, .lower_alpha+ul {list-style-type: lower-alpha;}
.upper_alpha+ol, .upper_alpha+ul {list-style-type: upper-alpha;}
.lower_greek+ol, .lower_greek+ul {list-style-type: lower-greek;}
.lower_latin+ol, .lower_latin+ul {list-style-type: lower-latin;}
.upper_latin+ol, .upper_latin+ul {list-style-type: upper-latin;}
.none+ol, .none+ul {list-style-type:none;}
.disc+ol, .disc+ul {list-style-type:disc;}
.circle+ol, .circle+ul {list-style-type:circle;}
.square+ol, .square+ul {list-style-type:square;}
.decimal+ol, .decimal+ul {list-style-type:decimal;}
.decimal_leading_zero+ol, .decimal_leading_zero+ul {list-style-type:decimal-leading-zero;}
</style></div>



<div class="lower_alpha"></div>
1. List Item 1
2. List Item 2


https://gist.github.com/bertobox/3503850
