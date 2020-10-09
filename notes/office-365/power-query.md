# Power Query



## Power BI


```sql
let
    Source = Salesforce.Data("https://vermont.my.salesforce.com/", [CreateNavigationProperties=true]),
    Appointment__c = Source{[Name="Appointment__c"]}[Data],
    #"Removed Other Columns" = Table.SelectColumns(Appointment__c,{"Id", "Name", "Gender__c", "Testing_Site__c"}),
    #"Filtered Rows" = Table.SelectRows(#"Removed Other Columns", each ([Testing_Site__c] = "Burlington Department of Labor Office"))
in
    #"Filtered Rows"
```


* Power BI - Get Data
* Excel - Power Query

* Advanced Editor - Copy and Paste - Back and Forth

* Mash Multiple Sources

* Data Flows
  * Upload to Service
  * Run on schedule
  * Increment Data Set

* Output Excel Sheet - Offline

* **DAX** - Data Analysis Expressions

[DAX in Analysis Services tabular models](https://docs.microsoft.com/en-us/analysis-services/tabular-models/understanding-dax-in-tabular-models-ssas-tabular?view=asallproducts-allversions)

### Functions

[Power Query M Functions](https://docs.microsoft.com/en-us/powerquery-m/power-query-m-function-reference)

[`Table.RowCount`](https://docs.microsoft.com/en-us/powerquery-m/table-rowcount)


## Get Data Elements

* Keep Top Rows
  ![keep top rows](/assets/notes/power-query/keep-top-rows.png)
* Use Headers
  ![use headers](/assets/notes/power-query/use-header.png)
* Transpose Rows
  ![transpose](/assets/notes/power-query/transpose.png)
* Rename Columns
  ![rename columns](/assets/notes/power-query/rename-columns.png)
