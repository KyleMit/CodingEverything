# Azure Table Storage

## Create

[Table Service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/table-service-rest-api)
[Introduction to Table storage in Azure](https://docs.microsoft.com/en-us/azure/storage/tables/table-storage-overview)
[CosmosDB vs Table Storage](https://docs.microsoft.com/en-us/azure/cosmos-db/table-api-faq#table-api-vs-table-storage)

### Concepts

* **URL format**: `http://<storage account>.table.core.windows.net/<table>`
* **Accounts**: All access to Azure Storage is done through a storage account.
* **Table**: A table is a collection of entities. Tables don't enforce a schema on entities, which means a single table can contain entities that have different sets of properties.
* **Entity**: An entity is a set of properties, similar to a database row. An entity in Azure Storage can be up to 1MB in size.
* **Properties**: A property is a name-value pair. Each entity can include up to 252 properties to store data.

  Each entity also has three system properties that specify:

  * a partition key
  * a row key
  * a timestamp

  Entities with the same partition key can be queried more quickly, and inserted/updated in atomic operations. An entity's row key is its unique identifier within a partition.


[Get started with Azure Cosmos DB Table API and Azure Table storage using the .NET SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-develop-table-dotnet)

[Microsoft.Azure.Cosmos.Table](https://www.nuget.org/packages/Microsoft.Azure.Cosmos.Table)

[Configure Azure Storage connection strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)

```ini
BlobEndpoint=myBlobEndpoint;
QueueEndpoint=myQueueEndpoint;
TableEndpoint=myTableEndpoint;
FileEndpoint=myFileEndpoint;
SharedAccessSignature=sasToken
```

[`ConfigurationExtensions.GetConnectionString`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.configurationextensions.getconnectionstring?view=dotnet-plat-ext-3.1)

```json
"ConnectionStrings": {
    "DefaultConnection": "..."
},
```

```cs
Configuration.GetConnectionString("DefaultConnection")
```


## Alternatives

### Azure SQL

#### Service Tiers

* [Serverless](https://docs.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview)
* [DTU - Database Transaction Units](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-dtu)
* [Hyperscale](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tier-hyperscale)


### Azure Cosmos DB

* [Pricing](https://azure.microsoft.com/en-us/pricing/details/cosmos-db/)

#### Partition Key

#### For write-heavy containers

* High cardinality
* evenly distribute requests
* evenly distribute storage
* partition key is included in filter of most frequent query

## Questions

* [How can I encode Azure storage table row keys and partition keys?](https://stackoverflow.com/q/21144694/1366033)

  * [Understanding the Table service data model](https://docs.microsoft.com/en-us/rest/api/storageservices/Understanding-the-Table-Service-Data-Model)
    * [Characters Disallowed in Key Fields](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model#characters-disallowed-in-key-fields)

  The following characters are not allowed in values for the PartitionKey and RowKey properties:

  * The forward slash (`/`) character
  * The backslash (`\`) character
  * The number sign (`#`) character
  * The question mark (`?`) character
  * Control characters from `U+0000` to `U+001F`, including:
    * The horizontal tab (`\t`) character
    * The linefeed (`\n`) character
    * The carriage return (`\r`) character
  * Control characters from `U+007F` to `U+009F`

  Easy way to address

  ```cs
  string old = "#1?";
  string key = HttpUtility.UrlEncode(url);
  string new = HttpUtility.UrlDecode(key);
  ```

* [How to get all rows in Azure table Storage in C#?](https://stackoverflow.com/q/23940246/1366033)

  ```cs
  var acc = new CloudStorageAccount(new StorageCredentials("account name", "account key"), true);
  var tableClient = acc.CreateCloudTableClient();
  var table = tableClient.GetTableReference("table name");
  var entities = table.ExecuteQuery(new TableQuery<MyEntity>()).ToList();
  ```
