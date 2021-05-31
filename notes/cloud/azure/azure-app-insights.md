# App Insights


## Structured Logging



## Query App Insights

* [Use the Application Insights REST API to build custom solutions](https://dev.applicationinsights.io/)
* [Application Insights REST API](https://dev.applicationinsights.io/quickstart)
* [C# SDK](https://dev.applicationinsights.io/documentation/Tools/CSharp-Sdk)
* [Microsoft.Azure.ApplicationInsights](https://www.nuget.org/packages/Microsoft.Azure.ApplicationInsights/)
* [azure-sdk-for-net/sdk/applicationinsights](https://github.com/Azure/azure-sdk-for-net/tree/master/sdk/applicationinsights)

## Snapshot Debugger

* [Snapshot Debugger for .NET apps](https://docs.microsoft.com/en-us/azure/azure-monitor/app/snapshot-debugger)
  * [Configure BYOS (Bring Your Own Storage) for Profiler & Snapshot Debugger - Azure Monitor | Microsoft Docs](https://docs.microsoft.com/en-us/azure/azure-monitor/app/profiler-bring-your-own-storage)

* **BYOS** - Bring Your Own Storage

## Programmatic Access

* [Programmatically Query Azure Application Insights Analytics](https://stackoverflow.com/q/37836090/1366033)
* [How to fetch details from Application insight in c#](https://stackoverflow.com/q/48340619/1366033)

## Questions

* [Application Insight Analytics - Query Client Browser and Device](https://stackoverflow.com/a/67672492/1366033)

  ```sql
  let startDate = ago(31d);
  let totalCount = toscalar(pageViews | where timestamp > startDate | count);
  pageViews
  | where timestamp > startDate
  | project
      Browser = case(client_Browser contains "Firefox", "Firefox",
                      client_Browser contains "Safari", "Safari",
                      client_Browser contains "Chrome", "Chrome",
                      client_Browser contains "Samsung", "Samsung",
                      client_Browser contains "Edg", "Edge",
                      client_Browser contains "Opera", "Opera",
                      client_Browser contains "Internet Explorer", "Internet Explorer",
                      client_Browser contains "Silk", "Amazon Silk",
                      client_Browser contains "Facebook", "Facebook",
                      client_Browser contains "Instagram", "Instagram",
                      client_Browser contains "Apple Mail", "Apple Mail",
                      client_Browser contains "Android WebKit", "Android WebKit",
                      "Other"),
    OS = case(client_OS contains "iOS", "iOS",
                      client_OS contains "Android", "Android",
                      client_OS contains "Mac", "Mac",
                      client_OS contains "Windows", "Windows",
                      client_OS contains "Linux", "Linux",
                      client_OS contains "Chrome OS", "Chrome OS",
                      client_OS contains "Firefox OS", "Firefox OS",
                      "Other")
  | summarize Freq = count() by OS, Browser
  | extend Percent = round(100.0 * Freq / totalCount, 2)
  | order by Freq desc
  ```

* [Add column to show percentages of total](https://stackoverflow.com/a/65514100/1366033)

  ```sql
  datatable(Val1:string, Val2:string, Val3:bool)
  [
      '', 'false', 'false',
      'Yes', 'false', 'true',
      'No', 'false', 'false',
      'Yes', 'false', 'false'
  ]
  | where Val3 == "false"
  | summarize Count = count() by Val1, Val2
  | as T
  | extend Percentage = round(100.0 * Count / toscalar(T | summarize sum(Count)), 2)
  ```

