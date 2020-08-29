---
title: Extending XmlReader Class - IsEndElement()
tags: [post, .NET, VB.NET, ExtensionMethods, XML]
summary: "Add IsEndElement to XmlReader to compliment existing IsStartElement method"
date: 2013-05-07
postID: 8534971076027147854
---

## Introduction

You may find, as I did, the lack of symmetry in the [`XmlReader`](http://msdn.microsoft.com/en-us/library/system.xml.xmlreader.aspx) Class quite odd.  If we look at the NodeType property, which exposes the [`XmlNodeType`](http://msdn.microsoft.com/en-us/library/system.xml.xmlnodetype.aspx) enumeration, we find an EndElement, but no StartElement (The Element member actually only identifies opening xml tag elements, but it's not this shortage on which I'd like to elaborate).  Only when we look at the methods available to the class do we see an `IsStartElement()` method for evaluation, but without a corollary method named something like: `IsEndElement()`.

There are dozens of ways of getting around this deficiency, but I'm all for visually appealing code that leaves other coders with a easy and quick understanding of what you are attempting to do.   Checking if the reader is on an opening tag with `IsStartElement` and then finding closing tags by evaluation the reader's `NodeType` property might work correctly, but just *looks* wrong to me.

## Extension Methods

What I'd like to do is create a method that looks and feels like the `IsStartElement()` function, but instead evaluates if the reader is currently on an EndElement node type.  This is where [**extension methods**](http://msdn.microsoft.com/en-us/library/bb384936.aspx) come into play.  Extension methods allow you to extend the functionality of a built in class with custom methods that act as if they were native to the class.  I think they are best suited for when you are of the sincere belief that method deficit is a slight oversight of the framework designers, and if given the opportunity, they would happily accept your additional coding to improve the underlying code.  Since all instances of this type or any derived type will have automatic access to any extension methods written on top of a particular class, you want to be careful with their implementation .

The first step is to open your project, right click on it, click add, then select module:

![Add Module](https://i.imgur.com/WbP7l.png)

Then give your module a name.  I like to create a single Module for all extensions with a name like **ExtensionMethods**.

### IsEndElement Code

First, you'll need an `imports`*(vb)* or `using`*(c#)* statement with the extensions Namespace:

```vb
Imports System.Runtime.CompilerServices
```

Then, add the following code to your module:

```vb
<Extension()>
Public Function IsEndElement(ByVal xmlReader As XmlReader,
                             Optional ByVal name As String = "") As Boolean
    If xmlReader.NodeType = XmlNodeType.EndElement Then
        If name = "" Then
            'node is end element, name value not set
            Return True
        Else
            If xmlReader.Name = name Then
                'node is end element, AND named the same as parameter
                Return True
            Else
                'node is end element, but name is diff than parameter
                Return False
            End If
        End If
    Else
        'node is not an end element
        Return False
    End If
End Function
```

And voilà!  Now you can call your code on native objects with full IntelliSense:

![IntelliSense](https://i.imgur.com/H0nB9lb.png)
