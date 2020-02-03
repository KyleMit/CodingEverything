---
title: Moving ASP.NET Designer Generated Code to Separate Designer.vb File
tags: [post, ASP.NET, Visual Studio]
date: 2013-07-24
postID: 3630982469147122516
---

## Introduction

If you've converted an an ASP.NET application from versions of Visual Studio 2003 and earlier to 2005 and beyond, you'll notice the converted web pages behave slightly differently than those natively generated in new projects.  The difference is that designer generated code used to have to live inline with developer code because all class properties needed to exist within the same file.  

## Solution

Starting in .NET 2.0, the compiler can now use the [partial](http://msdn.microsoft.com/en-us/library/yfzd5350.aspx) keyword which allows you to split up the declaration of a class over *n* number of files.  The paved the way for Visual Studio to break apart the ugly code it generates from the (hopefully) beautiful code you've written. To make use of this feature on old asp.net web applications that have been converted to a compatible version of visual studio, simply do the following two steps.

## 5 Easy Steps

1. Take the entire region label `Web Form Designer Generated Code` and Delete it from your code behind file:

  ![Designer Generated Code](https://i.imgur.com/cPEpPHW.png)

2. Our Solution Explorer currently looks likes this:

  ![Solution Explorer](https://i.imgur.com/XFdsLVV.png)

3. Right Click on the `.aspx` or `.ascx` page and Select `Convert to Web Application`"

  ![Convert to Web Application](https://i.imgur.com/f3W7JtU.png)

4. It will add a designer file with all the code we just deleted:

  ![Updated sln explorer](https://i.imgur.com/Vug3Lbk.png)

5. Of course, if you turn of "Show All Files", you'll still only see the page in your solution explorer

  ![Show All Files](https://i.imgur.com/16fElfK.png)

**And that's it!**  Now enjoy the faster design time analysis and cleaner code that comes from separating your generated code and your written code.
