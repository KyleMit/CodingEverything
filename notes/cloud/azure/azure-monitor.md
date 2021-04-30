# Azure Monitor

> Full observability into your applications, infrastructure, and network

* [Azure Monitor](https://azure.microsoft.com/en-us/services/monitor/)
* [Azure Monitor overview - Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/overview)

## Docs

* [Azure Application Insights Transaction Diagnostics](https://docs.microsoft.com/en-us/azure/azure-monitor/app/transaction-diagnostics)
* [Diagnose performance issues using Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/tutorial-performance)

## End to End Transaction Details

```js
// All telemetry for Operation ID: 6087232622eec
union *
// Apply filters
| where operation_Id == "6087232622eec"
```

## Articles

* [End-to-end telemetry using Azure Application Insights](https://www.mostafableu.com/blog/end-to-end-telemetry-using-azure-application-insights/)

