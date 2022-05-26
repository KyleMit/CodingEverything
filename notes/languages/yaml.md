# YAML

* [YAML Ain’t Markup Language (YAML™) Version 1.2](https://yaml.org/spec/1.2/spec.html)
* [Convert JSON to YAML](https://www.json2yaml.com/)


## Questions

* [Why does yaml start with `---`](https://stackoverflow.com/q/50788277/1366033)

  Part of frontmatter to signal the document starts after directives

* [`off` & `on`](https://stackoverflow.com/q/42283732/1366033)

* [Do I need quotes for strings in YAML?](https://stackoverflow.com/q/19109912/1366033)

  * In general, you don't need quotes.
  * Use quotes to force a string, e.g. if your key or value is `10` but you want it to return a String and not a Fixnum, write `'10'` or `"10"`.
  * Use quotes if your value includes special characters, (e.g. `:`, `{`, `}`, `[`, `]`, `,`, `&`, `*`, `#`, `?`, `|`, `-`, `<`, `>`, `=`, `!`, `%`, `@`, `\`).
  * Single quotes let you put almost any character in your string, and won't try to parse escape codes. `'\n'` would be returned as the string `\n`.
  * Double quotes parse escape codes.  `"\n"` would be returned as a line feed character.


* [How do I break a string in YAML over multiple lines?](https://stackoverflow.com/q/3790454/1366033)

