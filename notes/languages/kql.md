---
aliases:
  - Kusto
---

# KQL / Kusto

## Docs

* Overview
  * [KQL quick reference](https://docs.microsoft.com/en-us/azure/data-explorer/kql-quick-reference)
  * [Query best practices](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/best-practices)

* **Scalar Functions**
  * [`ago()`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/agofunction)
  * [`case()`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/casefunction)
  * [`replace()`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/replacefunction)
  * [`datetime_add()`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/datetime-addfunction)

* **Tabular Operators**
  * [`project](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/projectoperator)
  * [`extend`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/extendoperator)


## String Operators

[String operators](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/datatypes-string-operators#understanding-string-terms)

* Use `has` instead of `contains` - uses search indexes

## Questions

* [Add column to show percentages of total](https://stackoverflow.com/q/65514010/1366033)

* [Implementing an Outer Join using "greater than" operator](https://stackoverflow.com/q/66970784/1366033)

  ```kql
  let posts = dependencies | where name == "POST https://api-rating.qa.dealerpolicy.cloud/api/rating/requests?api-version=1.0";
  let pages = pageViews | project operation_Id, view_timestamp = timestamp;
  posts
  | join kind=leftanti gets on operation_Id
  | where view_timestamp > datetime_add('second', 30, timestamp)
  ```

