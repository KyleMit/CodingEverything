# Markdown

<!-- Well this is meta -->


## Docs

* [Darin Fireball | John Gruber](https://daringfireball.net/projects/markdown/)
* [CommonMark](https://commonmark.org/help/)

## Flavors

* [Setext - Structure Enhanced Text](https://en.wikipedia.org/wiki/Setext)


## Tools

* [List of markdown presentation tools](https://gist.github.com/johnloy/27dd124ad40e210e91c70dd1c24ac8c8)
* [Compare Markdown Implementations](https://babelmark.github.io/)

### Marp

* [Marp: Markdown Presentation Ecosystem](https://marp.app/)
* [Marp for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
  * [marp-team/**marp-vscode**](https://github.com/marp-team/marp-vscode)
* [@marp-team/marp-cli - npm](https://www.npmjs.com/package/@marp-team/marp-cli)
  * [marp-team/**marp-cli**](https://github.com/marp-team/marp-cli)

* [Not found processable Markdown file(s).](https://github.com/marp-team/marp-cli/issues/95)

   `readme.md` vs `README.md`

* [Fragmented list](https://github.com/marp-team/marpit/issues/145)

  * Use \* for fragment list
  * Use \- for regular list

## MDX

> MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents


[MDX](https://mdxjs.com/)


[Getting Started | MDX](https://mdxjs.com/getting-started)

## Markdown Lint

* [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint#configuration)
* [DavidAnson/vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint#configure)


## Questions

* Custom List Styles in Markdown

    [bertobox/list-styles-for-markdown.css](https://gist.github.com/bertobox/3503850)

    ```html
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
    ```

    ```md
    <div class="lower_alpha"></div>
    1. List Item 1
    2. List Item 2
    ```


* [How do I escape a backtick ` within in-line code in Markdown?](https://meta.stackexchange.com/q/82718/209031)

   Use double backticks on your inline code block like this: ``list`1``

* MD to PDF

  * Stack Overflow
    * [How to convert markdown to pdf in command line](https://stackoverflow.com/q/48821981/1366033)
    * [How Can I Convert Github-Flavored Markdown To A PDF](https://superuser.com/q/689056/180163)
  * Libraries
    * [markdown-pdf - npm](https://www.npmjs.com/package/markdown-pdf)
    * [alanshaw/markdown-pdf: Markdown to PDF converter](https://github.com/alanshaw/markdown-pdf)
    * [md-to-pdf - npm](https://www.npmjs.com/package/md-to-pdf)
    * [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf#readme) - Hackable CLI tool for converting Markdown files to PDF using Node.js and headless Chrome
    * [Pandoc - About pandoc](https://pandoc.org/)

* [Why would you select ATX or SETEXT markdown headers style?](https://stackoverflow.com/q/56350341/1366033)

* [Representing Directory & File Structure in Markdown Syntax](https://stackoverflow.com/q/19699059/1366033)

  ```none
  ├── _data
  │   └── members.yml
  ├── _site
  └── index.html
  ```

