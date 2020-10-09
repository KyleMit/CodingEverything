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
