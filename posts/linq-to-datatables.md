---
title: Introduction to Linq To Datatables
tags: [post, LINQ, .NET, LINQ to DataTables]
date: 2015-08-06
postID: 4746835115135118704
---

LINQ to objects will work on any object that implements [`IEnumerable`](https://msdn.microsoft.com/en-us/library/system.collections.ienumerable.aspx) (the same interface that allows an object to be used in a For Each loop).  Datasets are objects, but they don’t implement IEnumerable by default, so you'll need to first add a reference to a library that adds some extension methods that wrap DataTable and allow it to be enumerated.

Just go to Project > References > Add > .NET > **System.Data.DataSetExtensions** 

![DataSetExtensions](https://i.imgur.com/QmLYZDU.png)

In LINQ, you always start the query with the `From` statement

```vb
From a In b    
```

This gives you access to each item that is part of the `B` collection in the same way that a for loop does

```vb
For Each a In b
```

For the rest of the for loop (or linq query), you can just refer to `a` and it's automatically populated as it iterates over the collection.

If you want to loop over a `DataTable`, you need to create an enumerable table by calling `DataTable.AsEnumerable()`  in order to convert the collection of rows into one that is, well, enumerable.  When you loop over a DataTable, you'll be holding a row object, so you can generally query it in the same way that you otherwise would

If I have a `DataRow` object, I can get the values like this:

```vb
'longhand
Dim name = myRow.Field(Of String)("Name")

'shorthand
Dim name = myRow("Name")
```

Let's say that we have the following SQL Query that we'd like to do in .NET with Datatables instead:

```sql
SELECT p.ID, p.Name, e.SSN
FROM People p
JOIN ExtendedInfo e 
  ON p.ID = e.PersonID
```

LINQ (especially using it's Query Syntax) is intended to function a lot like SQL.  So here's what it would look like in .NET:

```vb
Dim query = From person In people.AsEnumerable
	Join extra In extendedInfo.AsEnumerable()
	  On person("ID") Equals extra("PersonID")
	Select New With {
			.ID = person("ID"),
			.Name = person("Name"),
			.SSN = extra("SSN")
	}
```



The syntax on the bottom just creates a new *anonymous* object and then selects it. We can `Select` any object available from the query (i.e. `person`) or we can create our own on the fly and select that

If you're unfamiliar with anonymous objects, the syntax may look unfamiliar, but it's a pretty basic concept.  One rarely used feature you might not know about is that if we want to initialize a `Person` class (which has a `Name` Property), we can set the name property directly from the initializer using a `With {}` statement like this:

```vb
Dim typedPerson = New Person With {
	.Name = "Angelic"
}
```

If we don't have a Person class to stuff our data in, or we just want to do it on the fly, we can do the same thing by omitting the class name and then just passing in any properties we want our new class to have.  

> **Note**: The compiler will actually create a class for you behind the scenes that has all the properties you've specified, but we don't have a name for it - thus it's *anonymous*.

```vb
'Anonymous Person
Dim anonPerson = New With {
	.Name = "Angelic"
}
```

Now we have a query that, once evaluated, will return the joined tables into an enumerable collection of anonymous objects.  If we want to convert that back into a new Datatable it's as simple as calling `CopyToDataTable` on the query result:

```vb
Dim newTable = query.CopyToDataTable()
```

**However**, when you do this right now, you'll get the following error:

> `CopyToDataTable` is not a member of `System.Collections.Generic.IEnumerable(Of <anonymous type>)`

**Okay, I lied** - It *would* be simple if the enumerable was of type `DataRow`.  But not to fear, as written by this MSDN article on [How to Implement CopyToDataTable<T> Where the Generic Type T Is Not a DataRow](https://msdn.microsoft.com/en-us/library/bb669096.aspx), you just need to include some extra extension methods that don't ship with DataSetExtensions .

Just add [this file](https://gist.github.com/KyleMit/88833eb179f9ec0e4b48) to your project anywhere.

Now the code should compile and work fine.

You can test the result by running:

```vb
For Each row In newTable.AsEnumerable()
Console.WriteLine("ID: "   & row("ID") & " / " &
				  "Name: " & row("Name") & " / " &
				  "SSN: "  & row("SSN"))
Next
```

If you'd like to run this code immediately without even opening up Visual Studio, you can see a [working demo in dotNetFiddle here](https://dotnetfiddle.net/OA7SPF).

For further reading, there is a TON of great information on MSDN under

[LINQ to DataSet](https://msdn.microsoft.com/en-us/library/bb386977.aspx) - [Getting Started](https://msdn.microsoft.com/en-us/library/bb387003.aspx) | [Programming Guide](https://msdn.microsoft.com/en-us/library/bb387004.aspx)
