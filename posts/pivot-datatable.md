---
title: How to Pivot a DataTable in .NET
tags: [post, .NET, PivotTable, DataTable, VB.NET]
date: 2014-06-19
postID: 6263246871308612871
---

So I would have thought this problem would have already been solved by the Internets at large.  As it turns out, I couldn't find a very simple method to solve this relatively simple task.  So here's my attempt

Here's a dead simple pivot table.

#### Let's say I have a table that looks like this

Person  | Age | Sport
--------|-----|-------
Susan   | 22  | Tennis
Bob     | 29  | Soccer
Terry   | 16  | Basketball

#### And I want to pivot it to to look like this

Person  | Susan    | Bob    | Terry
--------|----------|--------|--------
Age     | 22       | 29     | 16
Sport   | Tennis   | Soccer | Basketball

#### Here's How

```vb
Private Function PivotTable(oldTable As DataTable,
                            Optional pivotColumnOrdinal As Integer = 0
                           ) As DataTable
    Dim newTable As New DataTable
    Dim dr As DataRow

    ' add pivot column name
    newTable.Columns.Add(oldTable.Columns(pivotColumnOrdinal).ColumnName)

    ' add pivot column values in each row as column headers to new Table
    For Each row In oldTable.Rows
        newTable.Columns.Add(row(pivotColumnOrdinal))
    Next

    ' loop through columns
    For col = 0 To oldTable.Columns.Count - 1
        'pivot column doesn't get it's own row (it is already a header)
        If col = pivotColumnOrdinal Then Continue For

        ' each column becomes a new row
        dr = newTable.NewRow()

        ' add the Column Name in the first Column
        dr(0) = oldTable.Columns(col).ColumnName

        ' add data from every row to the pivoted row
        For row = 0 To oldTable.Rows.Count - 1
            dr(row + 1) = oldTable.Rows(row)(col)
        Next

        'add the DataRow to the new table
        newTable.Rows.Add(dr)
    Next

    Return newTable
End Function
```

Then just call like this:

```vb
Dim newTable = PivotTable(oldTable, 0)
```


And that's that.
