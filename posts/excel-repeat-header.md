---
title: "Repeat Top Row on Every Page in Excel"
tags: [post, Excel]
summary: "Excel is not really for printing, but when you do, you should extend the header on every page for clarity"
date: 2015-05-12
postID: 354095319245735140
---

You folks might already know this, but I just learned something new about excel.


1.On the "Page Layout" Ribbon, click the “Print Titles”.
  ![print tiles][print tiles]
2. Click "Rows to repeat at top," and click the icon that looks like a spreadsheet.
  ![page setup][page setup]
3. Use your cursor to click and select the row you wish to appear at the top of every page.
4. Press the Enter and Click OK

You can use print preview to show you what it will look like.


**P.S.** For long printed documents, don’t forget to also add page numbers:

1. On the “Insert” Ribbon, click “Header & Footer”

   ![header & footer][header & footer]

2. Click on the Header or Footer area in which you’d like the messages to appear.  This should open up the Header & Footer tools Context Sensitive Designer Ribbon.
   ![footer bar][footer bar]

   ![header & footer tools][header & footer tools]

3. Then select Footer and insert any template or design you own

   ![footer tool][footer tool]

   This should insert the insert the text “Page &[Page] of &[Pages]” where “&[field]” will be replaced automatically

4. You can also choose from any of the following fields:

    | Element Name    | Text             |
    | --------------- | ---------------- |
    | Page Number     | `&[Page]`        |
    | Number of Pages | `&[Pages]`       |
    | Current Time    | `&[Time]`        |
    | Sheet Name      | `&[Tab]`         |
    | File Name       | `&[File]`        |
    | File Path       | `&[Path]&[File]` |


[album]: http://imgur.com/a/4UAC4
[print tiles]: https://i.imgur.com/5t2YZcJ.png
[page setup]: https://i.imgur.com/YgcfnTn.png
[header & footer]: https://i.imgur.com/Yhnxs4o.png
[footer bar]: https://i.imgur.com/0UNmdSw.png
[header & footer tools]: https://i.imgur.com/EHmcwi3.png
[footer tool]: https://i.imgur.com/V5vu9W5.png
