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
