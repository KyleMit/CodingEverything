# Dynamo DB


## Data Types

[DynamoDB Supported Data Types](https://dynobase.dev/dynamodb-data-types/)

* Number [N]
* String [S]
* Binary [B]
* Boolean [BOOL] - `true` | `false`
* Null
* List - `[1, null, "Three", 4]`
* Map - {"name": "Kyle", "age": 30 }
* StringSet [SS] - `["One", "Two", "Three"]`
* BinarySet [BS]
* NumberSet [NS] - `[1, 2, 3]`



## Local Server

[Setting Up DynamoDB Local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)

1. Docker Compose

   ```yml file=docker-compose.yml
   version: '3.7'
   services:
   dynamodb-local:
     image: amazon/dynamodb-local:latest
     container_name: dynamodb-local
     ports:
       - "8000:8000"
   ```

   ```bash
   docker-compose up
   ```

2. Docker Run

   ```bash
   docker run -d -p 8000:8000 amazon/dynamodb-local
   ```

Will run at [http://localhost:8000/shell/](http://localhost:8000/shell/)

### Create a Table

* [DynamoDB create tables in local machine](https://stackoverflow.com/q/34984880/1366033)
* [Create a Table - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html)

```bash
$ aws dynamodb create-table \
   --table-name UnifiedTable \
   --attribute-definitions AttributeName=pk,AttributeType=S AttributeName=sk,AttributeType=S \
   --key-schema AttributeName=pk,KeyType=HASH AttributeName=sk,KeyType=RANGE \
   --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --endpoint-url http://localhost:8000
```

## PartiQL

* [You now can use a SQL-compatible query language to query, insert, update, and delete table data in Amazon DynamoDB](https://aws.amazon.com/about-aws/whats-new/2020/11/you-now-can-use-a-sql-compatible-query-language-to-query-insert-update-and-delete-table-data-in-amazon-dynamodb/)
* [Announcing PartiQL: One query language for all your data | AWS Open Source Blog](https://aws.amazon.com/blogs/opensource/announcing-partiql-one-query-language-for-all-your-data/)
* [PartiQL - A SQL-Compatible Query Language for Amazon DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)

## GUI


### Dynobase

[Dynobase](https://dynobase.dev/#pricing) - Professional DynamoDB GUI Client

### NoSQL Workbench

[NoSQL Workbench for DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)



## Questions


* [`dynamodb.put().promise()` not returning the put object](https://stackoverflow.com/q/55166921/1366033)

  Use `ReturnValue` per [DynamoDB SDK Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property)

* [What data type should be use for timestamp in DynamoDB?](https://stackoverflow.com/q/40561484/1366033)

  Use ISO String

* [GET data from DynamoDB using Node JS SDK](https://stackoverflow.com/q/50431820/1366033)
  * Docs
    * [Step 4: Query and Scan Data with AWS SDK for JavaScript in DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)
    * [Class: AWS.DynamoDB — AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property)
    * [Using the DynamoDB Document Client - AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html)
  * Articles
    * [Eight Examples of Fetching Data from DynamoDB with Node.js – Fernando Medina Corey](https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/)
  * Stack Overflow
    * [Query data without key (AWS DynamoDB SDK Nodejs)](https://stackoverflow.com/q/39026851/1366033)
    * [dynamodb get all items by an array of ids](https://stackoverflow.com/q/53129094/1366033)
    * [Formatting DynamoDB data to normal JSON in AWS Lambda](https://stackoverflow.com/q/32712675/1366033)



----




## Dynamoose

> Dynamoose is a modeling tool for Amazon's DynamoDB
Inspired by [Mongoose](https://mongoosejs.com/)

### Docs

* [dynamoose](https://github.com/dynamoose/dynamoose)
* [Getting Started](https://dynamoosejs.com/getting_started/Configure)

```js
dynamoose.aws.sdk.config.update({
    "accessKeyId": "ID",
    "secretAccessKey": "SECRET",
    "region": "us-east-1"
});
```
