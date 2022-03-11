# Azure Table Storage

## Create

[Table Service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/table-service-rest-api)
[Introduction to Table storage in Azure](https://docs.microsoft.com/en-us/azure/storage/tables/table-storage-overview)
[CosmosDB vs Table Storage](https://docs.microsoft.com/en-us/azure/cosmos-db/table-api-faq#table-api-vs-table-storage)

## Concepts

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


## Rest API

* [Azure REST API reference documentation](https://docs.microsoft.com/en-us/rest/api/azure/)
* [Table service REST API](https://docs.microsoft.com/en-us/rest/api/storageservices/table-service-rest-api)
* [Understanding the Table service data model](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model)
* [Authorize requests to Azure Storage](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-requests-to-azure-storage)
  * [Authorize with Shared Key](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key)
  * [Setting the OData data service version headers](https://docs.microsoft.com/en-us/rest/api/storageservices/setting-the-odata-data-service-version-headers)
* [Querying tables and entities](https://docs.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities)
  * [Query Entities](https://docs.microsoft.com/en-us/rest/api/storageservices/query-entities)
  * [Inserting and updating entities](https://docs.microsoft.com/en-us/rest/api/storageservices/inserting-and-updating-entities)

## Node SDK

* [Use Azure Table storage or Azure Cosmos DB Table API from Node.js](https://docs.microsoft.com/en-us/azure/cosmos-db/table/how-to-use-nodejs)
* [Azure Tables client library for JavaScript](https://docs.microsoft.com/en-us/javascript/api/overview/azure/data-tables-readme?view=azure-node-latest)
* [Azure/azure-storage-node: Microsoft Azure Storage SDK for Node.js](https://github.com/Azure/azure-storage-node)
* [azure-sdk-for-js/sdk/tables/data-tables at main · Azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/tables/data-tables)
* [azure-sdk-for-js/TableServiceClient.ts at main · Azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/tables/data-tables/src/TableServiceClient.ts)
* [azure-sdk-docs-demo-2/readme.md at main · MicrosoftDocs/azure-sdk-docs-demo-2](https://github.com/MicrosoftDocs/azure-sdk-docs-demo-2/blob/main/reference-docs/tables/azure-data-tables/readme.md)
* [azure-docs-sdk-node/data-tables-readme.md at main · MicrosoftDocs/azure-docs-sdk-node](https://github.com/MicrosoftDocs/azure-docs-sdk-node/blob/main/docs-ref-services/preview/data-tables-readme.md)

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
