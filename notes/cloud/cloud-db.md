# Database as a Service (DaaS)

An overview of cloud database providers through the lens of a node.js backend

In an increasingly serverless world, the table stakes are to be able to execute compute on some cloud service on a runtime shared by both instances.

## Cloud Providers with DB Services

* [Amazon AWS](https://aws.amazon.com/products/databases/)
* [Microsoft Azure](https://azure.microsoft.com/en-us/product-categories/databases/)
* [Google Cloud Platform](https://cloud.google.com/products/databases/) (GCP) / Firebase
  * [Firestore](https://firebase.google.com/docs/firestore)
* [IBM](https://www.ibm.com/cloud/databases)


## Standalone DB Vendors

* [MongoDb](https://www.mongodb.com/)
* [FaunaDb](https://fauna.com/)

## DB Services / Types

* **Relational** - transactional applications, de-normalized storage
* **Document** - Content management, catalogs, user profiles, JSON objects
* **Key-Value** - High traffic web apps, flat storage
* **In Memory** - Caching, session management, high performance


| Type       | Vendor | Service                                    |
|------------|--------|--------------------------------------------|
| Relational | AWS    | [Aurora](https://aws.amazon.com/rds/aurora/) / [RDS](https://aws.amazon.com/rds/) / [Redshift](https://aws.amazon.com/redshift/) |
| Relational | Azure  | [SQL Database](https://azure.microsoft.com/en-us/services/sql-database/) |
| Relational | Google | [Cloud SQL](https://cloud.google.com/sql/) / [Cloud Spanner](https://cloud.google.com/spanner/) |
| Document   | AWS    | [DocumentDB](https://aws.amazon.com/documentdb/) |
| Document   | Azure  | [Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) |
| Document   | Google | [Cloud Bigtable](https://cloud.google.com/bigtable/) / [Cloud Firestore](https://cloud.google.com/firestore/) |
| Document   | IBM    | [Cloudant](https://www.ibm.com/cloud/cloudant) |
| Key-Value | AWS     | [DynamoDB](https://aws.amazon.com/dynamodb/) |
| Key-Value | Azure   | [Table Storage](https://azure.microsoft.com/en-us/services/storage/tables/) |
| In-Memory | AWS     | [ElastiCache](https://aws.amazon.com/elasticache/) |
| In-Memory | Azure   | [Azure Cache](https://azure.microsoft.com/en-us/services/cache/) |
| In-Memory | Google  | [Cloud Memorystore](https://cloud.google.com/memorystore/) |



## Resources

[Firebase vs Google Cloud](https://medium.com/google-developers/whats-the-relationship-between-firebase-and-google-cloud-57e268a7ff6f)
