---
title: Web Development Practices
tags: ['post', webdev, "asp.net"]
draft: true
---


### Visual
Tables should be avoided for layout in favor of using CSS.  Tables (and HTML in general) are intended to provide semantic meaning to the page.  They should be explicitly used for provided data in a tabular format.  Tables 

### Performance

Linking to style sheets and JavaScript as external references is preferred to inline styling. Linking to external files allows the code to be cached on the client, allowing for faster delivery over the wire.  Additionally, every time a new CSS rule is added, the browser has to render the page again.  External files help reduce the number of rendering passes a page must make.  To ensure that changed files are delivered in favor of the old cached files, you have to implement cache busting.  You can add a query parameter to the end of the URL (`?v=01012014`) to create a unique URL that points to the same file.

### Folder Structure
When possible, similar sections of a web application should be grouped together in a folder.  This helps prevent bloat at the parent folder within a directory. However, some issues do arise when webpages communicate over several

### Application Flow


### ASP.NET
Global.ASAX
