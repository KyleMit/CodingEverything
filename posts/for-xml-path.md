---
title: Explanation of using FOR XML PATH('') to Concatenate Rows in SQL
tags: [post, SQL]
summary: "A deep dive going into the inner workings of using the FOR XML PATH hack in SQL Server to merge multiple records into a single returned value"
date: 2013-12-08
postID: 7400250978053358660
---

I was recently shown a cool way to concatenate an unlimited number of rows into a single cell in SQL, but was left wondering how it worked under the hood. The trick involves using `FOR XML PATH('')` to build multiple values and then cast them back into a single string.  Starting from a simple query, and getting increasingly more complex, let's look at how this actually works.

I'll do everything on [SQLFiddle][sqlFiddle].  You can follow along by starting your own fiddle or clicking the *results* link for each step. Let's start off by creating a basic table called `Person` with two columns and three rows of data:

### Create A Table

Start by [making a table](http://sqlfiddle.com/#!6/ce75c):

```sql
CREATE TABLE Person
(
  FirstName varchar(20),
  LastName varchar(20)
);
INSERT INTO Person
  (FirstName, LastName)
VALUES
  ('Kyle', 'Mit'),
  ('Bob', 'Builder'),
  ('Jimi', 'Hendrix');
```

### Plain SQL Query

This is just a run of the mill SQL query returning 3 rows of data:

```sql
SELECT FirstName, LastName
FROM Person
```

[Results](http://sqlfiddle.com/#!6/ce75c/6):

<div class="preTable" ></div>

FirstName | LastName
----------|---------
Kyle      | Mit
Bob       | Builder
Jimi      | Hendrix


### SQL Query as XML Grouped by 'Person'

Here, the output of the Query is formatted into XML with each row represented as a Root node named 'Person' and each column as a child element:

```sql
SELECT FirstName, LastName
FROM Person
FOR XML PATH('Person')
```

[Results](http://sqlfiddle.com/#!6/ce75c/7):

```xml
<Person>
    <FirstName>Kyle</FirstName>
    <LastName>Mit</LastName>
</Person>
<Person>
    <FirstName>Bob</FirstName>
    <LastName>Builder</LastName>
</Person>
<Person>
    <FirstName>Jimi</FirstName>
    <LastName>Hendrix</LastName>
</Person>
```

### XML Query With Custom Named Child Nodes

The name of each child node under person is determined by the final column name *(this is important later)*. When columns are selected, those are used by default, however you can manually give any column a specific name.
**Note**: The name of the child nodes has changed based on our  `select` statement:

```sql
SELECT FirstName AS First, LastName AS Last
FROM Person
FOR XML PATH('Person')
```

[Results](http://sqlfiddle.com/#!6/ce75c/9):

```xml
<Person>
    <First>Kyle</First>
    <Last>Mit</Last>
</Person>
<Person>
    <First>Bob</First>
    <Last>Builder</Last>
</Person>
<Person>
    <First>Jimi</First>
    <Last>Hendrix</Last>
</Person>
```

### XML Query with comma and NAMED child node

In SQL, when you perform any kind of aggregation or selection function to a column, it no longer applies a *default name*.  We'd like to concatenate our fields with a comma, so we'll add a comma to the `select`.  As an *intermediary* step, we'll explicitly specify a name just to show that the comma itself isn't modifying the result set:

```sql
SELECT ',' + LastName AS Last
FROM Person
FOR XML PATH('Person')
```

[Results](http://sqlfiddle.com/#!6/ce75c/10):

```xml
<Person>
    <Last>,Mit</Last>
</Person>
<Person>
    <Last>,Builder</Last>
</Person>
<Person>
    <Last>,Hendrix</Last>
</Person>
```

### XML Query with comma and UNNAMED child node

By removing the explicit naming, SQL isn't able to guess the column name. Consequently, the data is just stuffed into the Person Element.
From the FOR [XML PATH documentation][UnnamedColumn]:
>Any column without a name will be inlined. For example, computed columns or nested scalar queries that do not specify column alias will generate columns without any name.

**NOTE**: This is a very important step towards concatenation.  We need to somehow get rid of the xml markup around our data and we've dropped an entire node.  In the [next step](#xml-query-with-no-root-node) we'll find out how to get rid of the second one.

```sql
SELECT ',' + LastName
FROM Person
FOR XML PATH('Person')
```

[Results](http://sqlfiddle.com/#!6/ce75c/11):

```xml
<Person>,Mit</Person>
<Person>,Builder</Person>
<Person>,Hendrix</Person>
```

### XML Query with no root node

The command we've been using all along is [`FOR XML`][FOR XML] which has four different modes:

> 1. RAW
> 2. AUTO
> 3. EXPLICIT
> 4. PATH

In this case, we're using [PATH][PATH], which will wrap the data elements in a parent element named for the table from which it came.  Optionally, you can add a string parameter to Path to override the root element name. The last trick:
> If you specify a zero-length string, the wrapping element is not produced.

By manually specifying the path as an empty string, all the data elements are shown right next to each other.
Note the file name: this is still returning XML (just poorly formatted XML)

```sql
SELECT ',' + LastName
FROM Person
FOR XML PATH('')
```

[Results](http://sqlfiddle.com/#!6/ce75c/12):

<div class="preTable" ></div>

XML_F52E2B61-18A1-11D1-B105-00805F49916B |
-----------------------------------------|
,Mit,Builder,Hendrix                     |

### Get result of the XML sub query

By selecting the result of the entire query, we transform the XML into a value:

```sql
SELECT (
        SELECT ',' + LastName
        FROM Person
        FOR XML PATH('')
)
```

[Results](http://sqlfiddle.com/#!6/ce75c/13):

<div class="preTable" ></div>

COLUMN_0               |
-----------------------|
,Mit,Builder,Hendrix   |

### Remove the First Comma

To remove the leading comma, we'll use [`STUFF(character_expression, start, length, replaceWith_expression)`][STUFF].  The following query will start at position **1** and replace the **1st** character with **`''`**:

```sql
SELECT STUFF((
              SELECT ',' + LastName
              FROM Person
              FOR XML PATH('')
), 1, 1, '')
```

[Results](http://sqlfiddle.com/#!6/ce75c/14):

<div class="preTable" ></div>

COLUMN_0               |
-----------------------|
Mit,Builder,Hendrix    |

### Cast into VARCHAR for type safety

Finally, we'll take the whole query and make sure it's of type `VARCHAR`.  Also, for good measure, we’ll give the returned column a name:

```sql
SELECT CAST(STUFF((
              SELECT ',' + LastName
              FROM Person
              FOR XML PATH('')
), 1, 1, '') AS VARCHAR(MAX)) AS LastNames
```

[Results](http://sqlfiddle.com/#!6/ce75c/15):

<div class="preTable" ></div>

LastNames              |
-----------------------|
Mit,Builder,Hendrix    |


#### Undo XML Conversion

```sql
(SELECT ... FOR XML PATH, TYPE).value('.', 'nvarchar(max)')
```

http://stackoverflow.com/a/15643771/1366033
http://stackoverflow.com/a/8856789/1366033

http://sqlblog.com/blogs/rob_farley/archive/2010/04/15/handling-special-characters-with-for-xml-path.aspx

http://technet.microsoft.com/en-us/library/ms190025.aspx
http://technet.microsoft.com/en-us/library/ms190025.aspx

And that's how to go from constructing XML to a relatively simple concatenation.  There are other ways to do this and other customizations you can add to this query, but this should help you understand a little bit more of the fundamentals underneath it all.



[sqlFiddle]: http://sqlfiddle.com/
[UnnamedColumn]: http://technet.microsoft.com/en-us/library/bb510469.aspx
[FOR XML]: http://technet.microsoft.com/en-us/library/ms178107.aspx
[PATH]: http://technet.microsoft.com/en-us/library/ms189885.aspx
[STUFF]: http://technet.microsoft.com/en-us/library/ms188043.aspx
