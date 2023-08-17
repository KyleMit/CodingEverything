# SQL


## XML

### Docs

* [xml Data Type Methods](https://docs.microsoft.com/en-us/sql/t-sql/xml/xml-data-type-methods?view=sql-server-ver15)
  * [`query()`](https://docs.microsoft.com/en-us/sql/t-sql/xml/query-method-xml-data-type?view=sql-server-ver15)
  * [`value()`](https://docs.microsoft.com/en-us/sql/t-sql/xml/value-method-xml-data-type?view=sql-server-ver15)
* [Add Namespaces to Queries with `WITH XMLNAMESPACES`](https://docs.microsoft.com/en-us/sql/relational-databases/xml/add-namespaces-to-queries-with-with-xmlnamespaces?view=sql-server-ver15)

### Stack Overflow

* [How to query for Xml values and attributes from table in SQL Server?](https://stackoverflow.com/q/19165213/1366033)
* [How does XPath deal with XML namespaces?](https://stackoverflow.com/q/40796231/1366033)
* [Xpath does not work with xmlns](https://stackoverflow.com/a/23492693/1366033)

    > Placing `xmlns="http://www.ksharma.in/myXSD"` on the root element of your XML puts the root and its descendants in the `http://www.ksharma.in/myXSD` namespace. This effectively means that all of the element names in your XML document are preceded by `http://www.ksharma.in/myXSD`. Yet, the elements stated in your XPath are not in the `http://www.ksharma.in/myXSD` namespace. Thus, your XPath matches nothing.


```sql
DECLARE @myDoc xml =
'<Products>
    <ProductDescription ProductID="1" ProductName="Road Bike">
        <Features>
            <Warranty>1 year parts and labor</Warranty>
            <Maintenance>3 year parts and labor extended maintenance is available</Maintenance>
        </Features>
    </ProductDescription>
</Products>';

SELECT @myDoc.query('/Products/ProductDescription/Features/Warranty'),
       @myDoc.value('(/Products/ProductDescription/@ProductID)[1]', 'int' ),
       @myDoc.value('(/Products/ProductDescription/Features/Warranty)[1]', 'varchar(max)' )
```

```sql
DECLARE @myDoc xml =
'<Products xmlns="http://www.cdc.gov/NEDSS">
    <ProductDescription ProductID="1" ProductName="Road Bike">
        <Features>
            <Warranty>1 year parts and labor</Warranty>
            <Maintenance>3 year parts and labor extended maintenance is available</Maintenance>
        </Features>
    </ProductDescription>
</Products>';

WITH XMLNAMESPACES ('http://www.cdc.gov/NEDSS' as a)
SELECT @myDoc.query('/a:Products/a:ProductDescription/a:Features/a:Warranty'),
       @myDoc.value('(/a:Products/a:ProductDescription/@ProductID)[1]', 'int' ),
       @myDoc.value('(/a:Products/a:ProductDescription/a:Features/a:Warranty)[1]', 'varchar(max)' )
```



## Sql Data Reader

[Reading a date using DataReader](https://stackoverflow.com/q/5619216/1366033)

## Questions

* [SQL SELECT WHERE field contains words](https://stackoverflow.com/q/14290857/1366033)

    ```sql
    SELECT * FROM mytable WHERE column1 LIKE '%word1%'
    ```

* [Is it possible to specify condition in Count()?](https://stackoverflow.com/q/1400078/1366033)

    ```sql
    SELECT COUNT(CASE WHEN Position = 'Manager' THEN 1 ELSE NULL END) AS ManagerCount,
           COUNT(CASE WHEN Position = 'Supervisor' THEN 1 ELSE NULL END) AS SupervisorCount,
           COUNT(CASE WHEN Position = 'Team Lead' THEN 1 ELSE NULL END) AS TeamLeadCount,
    FROM mytable
    ```

* [How do I get list of all tables in a database using TSQL?](https://stackoverflow.com/q/175415/1366033)

    ```sql
    SELECT * FROM INFORMATION_SCHEMA.TABLES
    SELECT * FROM Sys.Tables
    ```

* [Is there a Max function in SQL Server that takes two values like Math.Max in .NET?](https://stackoverflow.com/q/124417/1366033)

    ```sql
    SELECT IIF(a>b, a, b)
    ```

    ```sql
    create function dbo.InlineMax(@val1 int, @val2 int)
    returns int
    as
    begin
    if @val1 > @val2
        return @val1
    return isnull(@val2,@val1)
    end
    ```

* [How to find the number of days between two dates](https://stackoverflow.com/q/11418496/1366033)

    ```sql
    SELECT DATEDIFF(d, @start, @end)
    ```

* [Arithmetic overflow error converting expression to data type int](https://stackoverflow.com/q/29521942/1366033)

    ```sql
    SELECT SUM(CAST(column AS BIGINT)) AS Sum,
    ```

* Performance impact of IsNull in WHERE clause

  * [Is there is any Performance issue while using ISNULL() in SQL Server?](https://stackoverflow.com/q/8924913/1366033)
  * [Can using isnull in a where statement cause problems with using indexes?](https://stackoverflow.com/q/1949592/1366033)

* [Add a column to specific position in MSSQL Server](https://stackoverflow.com/q/7899983/1366033)

  Need to Drop and Re-Add Table

* [How to select date without time in SQL](https://stackoverflow.com/q/5125609/1366033)

    ```sql
    SELECT CAST(GETDATE() AS Date);
    ```

* [How to count instances of character in SQL Column](https://stackoverflow.com/q/1860457/1366033)

    ```sql
    SELECT LEN(col) - LEN(REPLACE(col, 'Y', ''))
    ```

* [DELETE vs TRUNCATE and in SQL](https://stackoverflow.com/q/139630/1366033)

  * **Statement Type** - Delete is DML, Truncate is DDL
  * **Commit and Rollback** - Truncate can be rolled back.
  * **Space reclamation** - Delete does not recover space, Truncate recovers space
  * **Row scope** - Delete can be used to remove all rows or only a subset of rows. Truncate removes all rows.
  * **Foreign Keys** - A truncate cannot be applied when an enabled foreign key references the table. Treatment with delete depends on the configuration of the foreign keys.
  * **Identity Columns** - Truncate resets the sequence for IDENTITY column types, delete does not.

* [DDL vs DML](https://stackoverflow.com/q/2578194/1366033)

  * **DDL** - Data Definition Language
  * **DML** - Data Manipulation Language
  * **DQL** - Data Query Language
  * **DCL** - Data Control Language
  * **TCL** - Transaction Control Language

* [How can I select the first day of a month in SQL?](https://stackoverflow.com/q/1520789/1366033)

    SQL Server 2022, use [`DATETRUNC`](https://learn.microsoft.com/en-us/sql/t-sql/functions/datetrunc-transact-sql?view=sql-server-ver16)

    ```sql
    SELECT DATETRUNC(month, GETDATE())
    ```

    ```sql
    SELECT DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1)
    ```

    ```sql
    SELECT DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0)
    ```

    ```sql
    SELECT DATEADD(DAY, 1, EOMONTH(DATEADD(MONTH, -1, GETDATE())))
    ```

    ```sql
    SELECT FORMAT(GETDATE(), 'yyyy-MM-01')
    ```

* [Round Date to Nearest Minute](https://stackoverflow.com/q/6666866/1366033)

    ```sql
    CAST(GETDATE() as smalldatetime);
    ```

* [How to use SQL Select statement with IF EXISTS sub query?](https://stackoverflow.com/q/7805019/1366033)

    ```sql
    SELECT CASE WHEN EXISTS (
        SELECT *
        FROM [User]
        WHERE UserID = 20070022
    )
    THEN CAST(1 AS BIT)
    ELSE CAST(0 AS BIT) END
    ```

* [Finding longest date gap between dates](https://stackoverflow.com/q/1315262/1366033)

    ```sql
    SELECT FORMAT(start.CreationDay, 'yyyy-MM-dd') AS StartDate,
           FORMAT(next.CreationDay, 'yyyy-MM-dd') As NextDate,
           DateDiff(DAY, start.CreationDay, next.CreationDay) As Gap
    FROM SiteAccessDates start
    CROSS APPLY (
        SELECT TOP 1 CreationDay
        FROM SiteAccessDates b
        WHERE start.CreationDay < b.CreationDay
        ORDER BY b.CreationDay
    ) next
    ORDER BY 3 DESC
    ```

* [Fetch the rows which have the Max value for a column for each distinct value of another column](https://stackoverflow.com/q/121387/1366033)


    ```sql
    SELECT ph.* 
    FROM dbo.PostHistory ph
    WHERE ph.CreationDate = (
        SELECT MAX(ph2.CreationDate)
        FROM dbo.PostHistory ph2
        WHERE ph.PostId = ph2.PostId
    )
    ```


    ```sql
    SELECT ph.* 
    FROM (
        SELECT ph2.*, ROW_NUMBER() OVER(PARTITION BY PostId ORDER BY CreationDate DESC) rn
        FROM dbo.PostHistory ph2
    ) ph
    WHERE ph.rn = 1
    ```

    ```sql
    ;WITH LatestPostHistory AS (
        SELECT ph.PostId, MAX(ph.CreationDate) AS MaxCreationDate
        FROM dbo.PostHistory ph
        GROUP BY ph.PostId
    )
    SELECT ph.*
    FROM dbo.PostHistory ph
    RIGHT JOIN LatestPostHistory lph ON ph.PostId = lph.PostId AND ph.CreationDate = lph.MaxCreationDate 
    ```

* [Add a column with a default value to an existing table in SQL Server](https://stackoverflow.com/q/92082/1366033)

    ```sql
    ALTER TABLE {TABLE_NAME} 
    ADD {COLUMN_NAME} {TYPE} {NULL|NOT NULL} 
    CONSTRAINT {CONSTRAINT_NAME} DEFAULT {DEFAULT_VALUE}
    WITH VALUES
    ```

* [Check if a varchar is a number (TSQL)](https://stackoverflow.com/q/4603292/1366033)

    Use [`ISNUMERIC`](https://learn.microsoft.com/en-us/sql/t-sql/functions/isnumeric-transact-sql)

    ```sql
    SELECT ISNUMERIC(null)  -- 0
    SELECT ISNUMERIC('abc') -- 0
    SELECT ISNUMERIC(2)     -- 1
    SELECT ISNUMERIC('2')   -- 1
    ```

* [Query to select dates between two dates](https://stackoverflow.com/q/5125076/1366033)

    Use [`BETWEEN`](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/between-transact-sql)

    ```sql
    SELECT * FROM Records
    WHERE CreationDate BETWEEN '12/1/2022' AND '1/10/2023'
    ```

* [WHERE string ends with Column](https://stackoverflow.com/q/25413692/1366033)

    Use [`LIKE`](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/like-transact-sql?view=sql-server-ver16) Operator

    ```sql
    select * from users where email like '%yahoo.com'
    ```

    Use [`RIGHT()`](https://learn.microsoft.com/en-us/sql/t-sql/functions/right-transact-sql?view=sql-server-ver16) Function

    ```sql
    select * from users where right(email, len('yahoo.com')) = 'yahoo.com'
    ```

* [How to select true/false based on column value?](https://stackoverflow.com/q/2396889/1366033)

    ```sql
    SELECT CASE WHEN EntityProfile IS NULL THEN 'False' ELSE 'True' END AS HasProfile
    ```

    ```sql
    SELECT CASE 
            WHEN EntityProfile IS NULL 
            THEN CAST(0 as bit) 
            ELSE CAST(1 as bit)
        END AS HasProfile
    ```

* [How do I retrieve decimals when rounding an average in SQL](https://stackoverflow.com/q/13237477/1366033)

    ```sql
    SELECT ROUND(AVG(CAST(column_name AS FLOAT)), 2)
    ```

* [INSERT vs INSERT INTO](https://stackoverflow.com/q/233919/1366033)

  `INTO` is typically optional, though some sql variants require it

* [Escape Square brackets in LIKE statement](https://stackoverflow.com/q/3661125/1366033)

    Include a `[` character within a wildcard bracket

    ```sql
    SELECT * FROM tbl WHERE txt LIKE '[[]%'
    ```

    USE `ESCAPE` option in [`LIKE`](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/like-transact-sql)

    ```sql
    SELECT * FROM tbl WHERE txt LIKE '\[%' ESCAPE '\'
    ```

* [Identity increment is jumping in SQL Server database](https://stackoverflow.com/q/14146148/1366033)

    > By default uses a cache size of 1,000 when allocating `IDENTITY`` values for an int column  
    > And restarting the service can "lose" unused values  
    > (The cache size is 10,000 for bigint/numeric)

* [SQL Server Cumulative Sum by Group](https://stackoverflow.com/q/17971988/1366033)

    ```sql
    SELECT v.CreationDate,
        SUM(v.BountyAmount) over (order by v.CreationDate) as Cumulative
    FROM Votes v
    ```

* [Return value after INSERT](https://stackoverflow.com/q/7917695/1366033)

    Use [`OUTPUT` clause](https://learn.microsoft.com/en-us/sql/t-sql/queries/output-clause-transact-sql?view=sql-server-ver16)

    ```sql
    INSERT INTO table (name)
    OUTPUT Inserted.ID
    VALUES('bob');
    ```

    USE [`SCOPE_IDENTITY`](https://learn.microsoft.com/en-us/sql/t-sql/functions/scope-identity-transact-sql?view=sql-server-ver16)

    ```sql
    INSERT INTO table (name)
    VALUES('bob');
    SELECT SCOPE_IDENTITY()
    ```


