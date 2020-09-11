---
title: Creating an 'In' Function For .NET
tags: [post, VB.NET, Contains, ExtensionMethods]
date: 2013-12-31
postID: 546988415886488848
---

<!--
'TODO: . Yoda Conditions
http://bytes.com/topic/visual-basic-net/answers/499226-vb-net-equivalent-sql-function
http://www.codinghorror.com/blog/2012/07/new-programming-jargon.html
-->

SQL has a wonderful terse and natural syntax for checking if an item is inside of a collection by using the [**`IN`** keyword][SQL IN].  Which can be expressed like this:

<pre class="prettyprint"><code class="SQL"><i>expression</i> IN (<i>value_1</i>, <i>value_2</i>, <i>.... value_n</i>)
</code></pre>

In .NET, we can preform the same operation with [`.Contains()`][Contains] method on any enumerable collection which:

> Determines whether a sequence contains a specified element

Beginning with VB 2010, we can even do this on the fly by using the [Collection Initializers][Collection Initializer].

For example, to check whether a variable called `personName` was either `"Sally"` or `"Jenny"`, we could use the following expression:


```vb
{"Sally","Jenny"}.Contains(personName)
```

**However**, I think this syntax leaves something to be desired.  The verbiage is all wrong.  I don't really care if a collection *contains* some item.  I care if an item is *in* a collection.  Of course, logically, this is performing the same operation, but I want the personName variable to be in the drivers seat.  I want `personName` to be the subject that is verbing against the other items.

For a bit of syntactic sugar, we can add a generic extension method to take in an `ParamArray` and check if the extended element falls inside that array.

#### Here's the **In** method

*Note*: `In` needs to be inside of square brackets because it is a [Protected Keyword][Protected Keyword].

### Visual Basic

```vb
''' <summary>
''' Determines if the Item is contained within the listed array
''' </summary>
''' <typeparam name="T">The type of object</typeparam>
''' <param name="item">The calling item</param>
''' <param name="range">An array or comma separated list of the items to check against the calling</param>
''' <returns>True if item is found in list</returns>
''' <remarks>Provides syntactic sugar by reordering the subject of the IEnumerable.Contains method</remarks>
<Extension()>
Public Function [In](Of T)(ByVal item As T, ByVal ParamArray range() As T) As Boolean
    Return range.Cast(Of T).Contains(item)
End Function
```

### C Sharp

```cs
public static class Extensions
{
    /// <summary>
    /// Determines if the Item is contained within the listed array
    /// </summary>
    /// <typeparam name="T">The type of object</typeparam>
    /// <param name="item">The calling item</param>
    /// <param name="range">An array or comma separated list of the items to check against the calling</param>
    /// <returns>True if item is found in list</returns>
    /// <remarks>Provides syntactic sugar by reordering the subject of the IEnumerable.Contains method</remarks>
    public static bool In<T>(this T item, params T[] range)
    {
        return range.Contains(item);
    }
}
```

Throw this inside any module in your assembly, preferably one named something like `Utilities` or `ExtensionMethods`.  Now we can call like this:

```vb
personName.In("Sally","Jenny")
```

If you're checking against a predefined list you can pass that in as a parameter and cast back into an array.

Personally, I take this utility method with me wherever I go.  I find it incredibly helpful for checking if an item exists within a defined range.  Once you start using it, you won't stop, and I think that's a good thing!  For my money, it substantially improves readability, especially if you find yourself working on older code bases without collection initializers.

[SQL IN]: http://technet.microsoft.com/en-us/library/ms177682.aspx
[Contains]: http://msdn.microsoft.com/en-us/library/system.linq.enumerable.contains.aspx
[Collection Initializer]: http://msdn.microsoft.com/en-us/library/dd293617(v=VS.100).aspx
[Protected Keyword]: http://msdn.microsoft.com/en-us/library/ksh7h19t(v=vs.90).aspx
