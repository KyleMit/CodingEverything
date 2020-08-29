---
title: Remove Items in For Loop
tags: [post, .NET, VB.NET, "For Loop"]
date: 2014-05-28
postID: 1547601264794152729
---

As a general rule, you should not modify a collection that your are looping over, only the items inside of that collection.  The problem with removing items inside of a for loop is that it changes the collection that is being looped which will interfere with the list count in an *indexed for loop* and the iterator location in a *for each loop*.


### Two common solutions are to:

1. Create a new collection so you can modify one collection and loop over another.
2. Loop backwards through the collection so changes to the iterator won't impact the execution.

In this article, we'll create two extension methods that utilize each of these solutions.


### Create New Collection:

By calling [`ToList`][ToList] on the original collection, you create a brand new collection. Then, you can loop over the new list to find items that need to be removed from the original.  Whenever you find an object that matches your removal criteria, you can safely remove it from the original collection because it is not currently being enumerated over.

I think it looks pretty spiffy too:

```vb
<Extension()>
Public Sub RemoveEachObject(Of T)(ByVal col As Collection(Of T),
                                  ByVal match As Func(Of T, Boolean))
    For Each o As T In col.ToList()
        If match(o) Then col.Remove(o)
    Next
End Sub
```

### Loop Backwards:

The previous solution works well, but a more efficient solution would be to loop backwards.  For starters, the previous answer will have to create a copy of the entire collection.  More importantly, when removing items, the [`Remove()`][Collection.Remove] method will have to loop through entire collection and check each item for reference equality with the passed in value.  This can be quite expensive.  It would be much easier to keep track of the current index in the collection and remove whatever item happened to be occupying it.

To do this, we'll loop backwards and check the validity of each item in the collection based on the passed in lambda function.  If it matches, then we'll remove the current index.

```vb
<Extension()>
Public Sub RemoveEach(Of T)(ByVal col As Collection(Of T),
                            ByVal match As Func(Of T, Boolean))
    For i = col.Count - 1 To 0 Step -1
        If match(col(i)) Then col.RemoveAt(i)
    Next
End Sub
```

### Usage

Then we can use either method like this:

```vb
Dim col As New Collection(Of Integer) From {1, 2, 3, 4}
col.RemoveEach(Function(i) (i Mod 2) = 0)
Console.WriteLine(String.Join(",", col))
'Produces: 1,3
```

This code has been written to extend `Collection(Of T)`.  You could just as easily extend `List(Of T)` as well, but the list class already exposes the method [`RemoveAll`][List.RemoveAll] which already does this same thing.

For more info, check out this great answer to [Remove from a List<T> within a 'foreach' loop][SO Answer].


[List.RemoveAll]: http://msdn.microsoft.com/en-us/library/wdka673a(v=vs.110).aspx
[Collection.Remove]: http://msdn.microsoft.com/en-us/library/ms132413(v=vs.110).aspx
[ToList]: http://msdn.microsoft.com/en-us/library/vstudio/bb342261(v=vs.100).aspx
[SO Answer]: http://stackoverflow.com/a/9381864/1366033
