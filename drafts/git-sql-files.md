---
title: Unwrapping git to treat SQL files as text
tags: ['post', git]
draft: true
---

I got this error message when trying to compare two plain text sql files:

>"Binary files a/person.sql and b/person.sql differ"

**Hold Up**!  These aren't binary files.  To prove it to myself I opened them up in notepad++.  "**See!**," I said to my [rubber duck][1] - they're just plain text characters.

Where I went next took me on a 3 hour journey of *unicode encoding* and *git internals*.

These aren't the meat and potatoes of a developer's life, but they compose the building blocks of literally almost every ounce of output delivered, so they're worth understanding, at least nominally.

### The Problem

First let's look at git to see where the problem begins.

Every time git stores a file, it has to undergo a process of **binary detection** to determine whether the file is worth diffing.  It  *doesn't* get to make this determination merely because of the file extension because multiple vendors can use the same extension and it doesn't have a registry of every possible filetype anyway.

> [Instead, git looks for] a NULL (0) byte somewhere within the first 8000 characters of the file. Typically, that happens because the file is being saved as something other than UTF-8. So, it's likely being saved as UCS-2, UCS-4, UTF-16, or UTF-32. All of those have embedded NULL characters when using ASCII characters
> \- [John Szakmeister](http://stackoverflow.com/a/19723302/1366033)

Sure enough, if we look at the "binary" sql file, we'll see it's saved as **UCS-2 w/ BOM**.  And if we look open it up with a [HEX editor](http://superuser.com/q/14465/180163), we can see multi-column null characters.

![UCS-2 w/ BOM](https://i.imgur.com/Kws9ati.png)

Compare to what happens when we convert it back to **UTF-8**:

![UTF-8](https://i.imgur.com/hAhUF55.png)


### Possible Solutions

Landscape

* Change Encoding (Cleanup (individual/batch) + Plug the leak)
* Change .gitattributes
* Change Diff Tool

Show each solution with across different git tools:

* git cmd
* git gui
* sourcetree
* github
* External - Kdiff3
* External - Others


```bash
# get all files
$baseDirectory = "H:\stash\db_sphinx\SQLCode"
$files = Get-ChildItem -Path $baseDirectory -Recurse *.sql

# using WriteAllLines
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding($False)
$files | ForEach {
  $FileContents = Get-Content $_.FullName;
  [System.IO.File]::WriteAllLines($_.FullName, $FileContents, $Utf8NoBomEncoding)
}
```

#### References

Git Binary/Text Files

* [Why does git think my .sql file is a binary file?](http://stackoverflow.com/q/28145687/1366033)
* [Why does git think my cs file is binary?](http://stackoverflow.com/q/2506041/1366033)
* [How do I diff utf-16 files with GNU diff?](http://stackoverflow.com/q/778291/1366033)
* [Can I make git recognize a UTF-16 file as text?](http://stackoverflow.com/q/777949/1366033)
* [Why does Git treat this text file as a binary file?](http://stackoverflow.com/q/6855712/1366033)
* [Set file as non-binary in git](http://stackoverflow.com/q/19722971/1366033)

Update Encoding

* [Using PowerShell to write a file in UTF-8 without the BOM](http://stackoverflow.com/q/5596982/1366033)

SQL Files Binary in Git

* [How can I make Git show changes to my .sql files?](http://stackoverflow.com/q/31540210/1366033)
* [Diffs for Sql files are shown as "binary"](https://github.com/github/linguist/issues/1873)
* [Default encoding in SQL Server Management Studio](http://stackoverflow.com/q/21476261/1366033)
* [Need a way to set the default encoding for query files in SSMS](https://connect.microsoft.com/SQLServer/feedback/details/336750/need-a-way-to-set-the-default-encoding-for-query-files-in-smss)
* [Unicode Defaults on SSMS Save](https://connect.microsoft.com/SQLServer/feedback/details/288677/unicode-defaults-on-ssms-save)

Git attributes

* [Git Manual - gitattributes](https://www.git-scm.com/docs/gitattributes.html)
* [Git Book - 8.2 Customizing Git - Git Attributes](https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes)


Github

* [github/linguist](https://github.com/github/linguist)
* [3D File Diffs](https://github.com/blog/1633-3d-file-diffs)
* [Diffable, more customizable maps](https://github.com/blog/1772-diffable-more-customizable-maps)
* Behold: Image view modes](https://github.com/blog/817-behold-image-view-modes)

[1]: https://en.wikipedia.org/wiki/Rubber_duck_debugging "Rubber Duck Debugging"
[images]: http://imgur.com/a/B1Rsj
