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

* [How to check if value exists in each group (after group by)](https://stackoverflow.com/q/33784786/1366033)

    ```sql
    SELECT uid,
        MAX(CASE WHEN subscription_type = 'type1' THEN 1 ELSE 0 END) AS type1,
        MAX(CASE WHEN subscription_type = 'type2' THEN 1 ELSE 0 END) AS type2,
        MAX(CASE WHEN subscription_type = 'type3' THEN 1 ELSE 0 END) AS type3,
        MAX(CASE WHEN subscription_type = 'type4' THEN 1 ELSE 0 END) AS type4
    FROM subscribes
    GROUP BY uid
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

* [How can I select from list of values in SQL Server](https://stackoverflow.com/q/1564956/1366033)

    Use a [**Table Value Constructor**](https://learn.microsoft.com/en-us/sql/t-sql/queries/table-value-constructor-transact-sql)

    ```sql
    SELECT id, [name] FROM (VALUES (1, 'Kyle'), (2, 'Beth') ) AS User(id, [name]);  
    ```

* [Table Naming Dilemma: Singular vs. Plural Names](https://stackoverflow.com/q/338156/1366033)

   Use Singular

* [Composite Unique Key](https://stackoverflow.com/q/37810760/1366033)

    [Create Unique Constraints](https://learn.microsoft.com/en-us/sql/relational-databases/tables/create-unique-constraints?view=sql-server-ver16)

    ```sql
    CREATE TABLE PhoneNumber (
        CountryCode int NOT NULL,
        AreaCode int NOT NULL,
        Prefix int NOT NULL,
        CONSTRAINT UC_PhoneNumber UNIQUE (CountryCode, AreaCode, Prefix)
    );
    ```

* [Create Primary Key](https://www.w3schools.com/sql/sql_primarykey.ASP)

    ```sql
    -- Inline
    CREATE TABLE Person (
        Id INT NOT NULL PRIMARY KEY,
        Name VARCHAR(50)
    )

    -- Explicit
    CREATE TABLE Person (
        Id INT NOT NULL,
        Name VARCHAR(50),
        CONSTRAINT PK_Person PRIMARY KEY (Id)
    )
    ```

* [Create Foreign Key Constraint](https://www.w3schools.com/sql/sql_foreignkey.asp)

    [Demo in SQLFiddle](https://sqlfiddle.com/sql-server/online-compiler?&id=3bb85a56-a1a4-4c0f-a11e-ee7e1ddab2cc)

    ```sql
    CREATE TABLE Person (
        Id INT NOT NULL PRIMARY KEY,
        Name VARCHAR(50)
    )

    CREATE TABLE Note (
        Id INT NOT NULL PRIMARY KEY,
        Message VARCHAR(200),
        PersonId INT FOREIGN KEY REFERENCES Person(Id) -- inline
    )

    CREATE TABLE Note (
        Id INT NOT NULL PRIMARY KEY,
        Message VARCHAR(200),
        PersonId INT,
        CONSTRAINT FK_Person_Note FOREIGN KEY (PersonId) REFERENCES Person(Id) -- explicit
    )
    ```

    ```sql
    INSERT INTO Person
        (Id, Name) 
    VALUES
    (1, 'Kyle'),
    (2, 'Beth');

    SELECT * FROM Person;

    INSERT INTO Note
    (Id, Message, PersonId) 
    VALUES
    (1, 'Do Dishes', 1),
    (2, 'Water Plants', 2);

    SELECT * FROM Note;
    ```

* [Add Cascade Delete to FK](https://stackoverflow.com/q/6260688/1366033)

    [Demo in SQL Fiddle](https://sqlfiddle.com/sql-server/online-compiler?&id=1836a3ca-c6d8-465b-901c-bfb8645d8727)

    ```sql
    CREATE TABLE Person (
        Id INT NOT NULL PRIMARY KEY,
        Name VARCHAR(50)
    );

    CREATE TABLE Note (
        Id INT NOT NULL PRIMARY KEY,
        Message VARCHAR(200),
        PersonId INT,
        CONSTRAINT FK_Person_Note_Cascade FOREIGN KEY (PersonId) REFERENCES Person(Id) ON DELETE CASCADE
    );

    INSERT INTO Person
        (Id, Name) 
    VALUES
        (1, 'Kyle'),
        (2, 'Beth');

    INSERT INTO Note
        (Id, Message, PersonId) 
    VALUES
        (1, 'Do Dishes', 1),
        (2, 'Water Plants', 2);


    DELETE FROM Person
    WHERE Id = 1;

    SELECT * FROM Note;
    SELECT * FROM Person;
    ```

    [On Delete - Cascade vs Restrict](https://dba.stackexchange.com/a/44962/31340)

* [Check information schema for cascade deletes](https://stackoverflow.com/q/16986648/1366033)

    ```sql
    SELECT DELETE_RULE, COUNT(*)
    FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS 
    GROUP BY DELETE_RULE
    ```

    ```sql
    SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
    SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS 
    ```

* [How do you determine what SQL Tables have an identity column programmatically](https://stackoverflow.com/q/87747/1366033)

    USE [`COLUMNPROPERTY`](https://learn.microsoft.com/en-us/sql/t-sql/functions/columnproperty-transact-sql?view=sql-server-ver16)

    ```sql
    SELECT 
        COLUMN_NAME,
        TABLE_NAME,
        COLUMNPROPERTY(object_id(TABLE_SCHEMA+'.'+TABLE_NAME), COLUMN_NAME, 'IsIdentity') AS IsIdentity
    FROM INFORMATION_SCHEMA.COLUMNS c
    WHERE TABLE_NAME LIKE '%Types'
    ORDER BY c.TABLE_NAME 
    ```

* [Query to list number of records in each table in a database](https://stackoverflow.com/q/1443704/1366033)

    ```sql
    SELECT 
        o.[name],
        ddps.row_count 
    FROM sys.indexes AS i
    INNER JOIN sys.objects AS o ON i.object_id = o.object_id
    INNER JOIN sys.dm_db_partition_stats AS ddps ON i.object_id = ddps.object_id
    AND i.index_id = ddps.index_id 
    WHERE i.index_id < 2 
    AND o.is_ms_shipped = 0
    ORDER BY o.[name] 
    ```

    ```sql
    SELECT 
        t.[name] AS TableName,
        i.[name] as indexName,
        p.[rows]
    FROM sys.tables t
    INNER JOIN sys.indexes i ON t.object_id = i.object_id
    INNER JOIN sys.partitions p ON i.object_id = p.object_id
                            AND i.index_id = p.index_id
    WHERE
        t.[name] NOT LIKE 'dt%' AND
        i.object_id > 255 AND   
        i.index_id <= 1
    GROUP BY 
        t.[name], i.object_id, i.index_id, i.name, p.[rows]
    ORDER BY 
        object_name(i.object_id) 
    ```

  **See Also**: [How to fetch the row count for all tables in a SQL SERVER database](https://stackoverflow.com/q/2221555/1366033)


* [Auto increment Primary Key](https://stackoverflow.com/a/10992101/1366033)

    Use [`IDENTITY(Seed, Increment)`](https://learn.microsoft.com/en-us/previous-versions/sql/sql-server-2008-r2/ms186775(v=sql.105))

    **See Also**: [Alter Table](https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-table-column-definition-transact-sql)

* [How to turn IDENTITY_INSERT on and off using SQL Server 2008?](https://stackoverflow.com/q/7063501/1366033)

    ```sql
    SET IDENTITY_INSERT MyTable ON

    INSERT INTO MyTable 
        (IdentityColumn, col2, col3, ...)
    VALUES 
        (AnIdentityValue, col2value, col3value, ...)

    SET IDENTITY_INSERT MyTable OFF
    ```

* [Solutions for INSERT OR UPDATE on SQL Server](https://stackoverflow.com/q/108403/1366033)

    USE `@@ROWCOUNT`

    ```sql
    BEGIN TRANSACTION;

    UPDATE dbo.table WITH (UPDLOCK, SERIALIZABLE) 
    SET ... WHERE PK = @PK;

    IF @@ROWCOUNT = 0
    BEGIN
    INSERT dbo.table(PK, ...) SELECT @PK, ...;
    END

    COMMIT TRANSACTION;
    ```

    USE `MERGE`

    ```sql
    MERGE INTO table_name WITH (HOLDLOCK) USING table_name ON (condition)
    WHEN MATCHED THEN UPDATE SET column1 = value1 [, column2 = value2 ...]
    WHEN NOT MATCHED THEN INSERT (column1 [, column2 ...]) VALUES (value1 [, value2 ...])
    ```

    USE `IF EXISTS()...ELSE`

    ```sql
    IF NOT EXISTS (SELECT * FROM dbo.Employee WHERE ID = @SomeID)

        INSERT INTO dbo.Employee(Col1, ..., ColN)
        VALUES(Val1, .., ValN)

    ELSE

        UPDATE dbo.Employee
        SET Col1 = Val1, Col2 = Val2, ...., ColN = ValN
        WHERE ID = @SomeID
    ```

    **See Also**: [How to upsert (update or insert) in SQL Server 2005](https://stackoverflow.com/q/11010511/1366033)


* [Use variable with TOP in select statement](https://stackoverflow.com/q/1927450/1366033)

    ```sql
    declare @top int = 5
    select top (@top) * from tablename
    ```

* [Get top 1 row of each group](https://stackoverflow.com/q/6841605/1366033)

    ```sql
    -- get most recent history type for each history type
    WITH MostRecentUserHistoryByType AS (
        SELECT *,
            ROW_NUMBER() OVER (
                PARTITION BY UserHistoryTypeId 
                ORDER BY CreationDate DESC
            ) AS RowNum
        FROM UserHistory
    )
    SELECT * 
    FROM MostRecentUserHistoryByType
    WHERE RowNum = 1;
    ```

    ```sql
    SELECT TOP 1 WITH TIES *
    FROM UserHistory
    ORDER BY ROW_NUMBER() OVER (
            PARTITION BY UserHistoryTypeId 
            ORDER BY CreationDate DESC)
    ```

* NOT IN () Predicate Returning Zero rows

   When `ansi_nulls` is on, `3 <> null` evaluates to `UNKNOWN`

  **Further Reading**:

  * [NULL values inside NOT IN clause](https://stackoverflow.com/questions/129077/)
  * [SQL NOT IN not working](https://stackoverflow.com/questions/5231712/)
  * [Comparisons with NULL and the three-valued logic (3VL)](https://en.wikipedia.org/wiki/Null_(SQL)#Comparisons_with_NULL_and_the_three-valued_logic_(3VL))
