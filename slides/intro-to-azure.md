# Azure FUN-ctions

An Introduction to Serverless Compute
on the .NET Cloud

<img src="content/images/azure_functions.png" width="150" alt="azure" class="transparent-img">


By me, Kyle Mitofsky, a developer

---

## ___aaS

* **Infrastructure** (*VM*)
* **Platform** (*Container*)
* **Functions** (*micro-service*)
<!-- * **Storage** + **Database** -->

Note: Abstraction + Provider





## Concern vs. Control

Con(cern + trol)

---

## Azure

### smaller, better, faster

* Virtual Machines
* Web Apps + Web Jobs
* Logic Apps + Event Grids
* Functions



## Ecosystem

Azure is Pickle Jar

![Tom Hanks Pickle Jar](content/images/pickles.gif)


Note: if you have data, azure wants it.  Also plays host to hundreds of SaaS providers

---

## Functions

Events + Code



## Triggers


* HTTP
* Timer
* Event Grid
* Blob Storage
* Table Storage
* Queue Storage
* \+ many many more



## Bindings

### Syntactic Sugar

Input  & Output





### Binding Types

* Http
* Blob Storage
* Queue Storage
* Notification Hubs
* Twilio
* Send Grid
* \+ many many more




## Scaling

* Resources ✓
* Architecture ?




## Pricing

[![Azure Pricing](content/images/pricing.png)](https://azure.microsoft.com/en-us/pricing/)

---

## Tooling

* **Visual Studio Code**
  * Amazing Extension Market
* **Postman**
* **Azure Table Storage Explorer**

---

## [`CloudTable`][CloudTable] CRUD

[CloudTable]: https://docs.microsoft.com/en-us/dotnet/api/microsoft.windowsazure.storage.table.cloudtable?view=azure-dotnet "Microsoft.WindowsAzure.Storage.Table.CloudTable"

```cs
var credentials = new StorageCredentials("<name>", "<account-key>");
var storageAccount = new CloudStorageAccount(credentials, true);
var tableClient = storageAccount.CreateCloudTableClient();
var myTable = tableClient.GetTableReference("<table-name>");
```



### Create

```cs
var data = new MyTableEntity() { Name = "Kyle" };
var operation = TableOperation.Insert(data);
var result = await myTable.ExecuteAsync(operation);
```



### Read

```cs
var operation = TableOperation.Retrieve<MyTableEntity>("key", id);
var result = await myTable.ExecuteAsync(operation);
```



### Delete

```cs
var operation = TableOperation.Delete(myTableEntity);
var result = await myTable.ExecuteAsync(operation);
```


---

# Demo Time

---

## Resources

* [* as a Service](https://en.wikipedia.org/wiki/As_a_service)
* [Function - Triggers and Bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)

