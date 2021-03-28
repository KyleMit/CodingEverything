# Dynamo DB

## Docs

* [Core Components of Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html)

## Concepts

* **LSI** - Local Secondary Index
* **GSI** - Global Secondary Index


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


## Actions

[Actions](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations.html)

* [`UpdateItem`](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html)


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
* [Create a Table](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html)

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
* [PartiQL - A SQL-Compatible Query Language for Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html)

## GUI


### Dynobase

[Dynobase](https://dynobase.dev/#pricing) - Professional DynamoDB GUI Client

### NoSQL Workbench

[NoSQL Workbench for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)



## Questions


* [`dynamodb.put().promise()` not returning the put object](https://stackoverflow.com/q/55166921/1366033)

  Use `ReturnValue` per [DynamoDB SDK Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property)

* [What data type should be use for timestamp in DynamoDB?](https://stackoverflow.com/q/40561484/1366033)

  Use ISO String

* [GET data from DynamoDB using Node JS SDK](https://stackoverflow.com/q/50431820/1366033)
  * Docs
    * [Step 4: Query and Scan Data with AWS SDK for JavaScript in DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html)
    * [Class: AWS.DynamoDB — AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#getItem-property)
    * [Using the DynamoDB Document Client - AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html)
  * Articles
    * [Eight Examples of Fetching Data from DynamoDB with Node.js – Fernando Medina Corey](https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/)
  * Stack Overflow
    * [Query data without key (AWS DynamoDB SDK Nodejs)](https://stackoverflow.com/q/39026851/1366033)
    * [dynamodb get all items by an array of ids](https://stackoverflow.com/q/53129094/1366033)
    * [Formatting DynamoDB data to normal JSON in AWS Lambda](https://stackoverflow.com/q/32712675/1366033)


* [What is Hash vs Range Key?](https://stackoverflow.com/q/27329461/1366033)

* [Scan vs Query Operation](https://stackoverflow.com/q/43452219/1366033)

* [local vs global indexes](https://stackoverflow.com/q/21381744/1366033)

* Hash key + Range Key
  * [Retrieve an item from a DynamoDB table that has a range key by only specifying the index key](https://stackoverflow.com/q/12240655/1366033)
  * [How to query dynamoDB without using hashKey](https://stackoverflow.com/q/52375764/1366033)
  * [DynamodbDB query without a range key](https://stackoverflow.com/q/60326909/1366033)
  * [How to Query DynamoDB when Range key is unknown](https://stackoverflow.com/q/40406289/1366033)


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

* [Property 'exec' does not exist on type 'Condition'](https://github.com/dynamoose/dynamoose/issues/934)

  Update to 2.4.0+

* [The level of configured provisioned throughput for the table was exceeded. Consider increasing your provisioning level with the UpdateTable API](https://stackoverflow.com/q/31468379/1366033)


* [item size has exceeded the maximum allowed size](https://stackoverflow.com/a/57922131/1366033)

  Expression Parameters limits

* [AWS Lambda: Allows a Lambda function to access an Amazon DynamoDB table](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_lambda-access-dynamodb.html)

  > "amplify" User: arn:aws:sts::is not authorized to perform: dynamodb:Query

  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Sid": "ReadWriteTable",
              "Effect": "Allow",
              "Action": [
                  "dynamodb:BatchGetItem",
                  "dynamodb:GetItem",
                  "dynamodb:Query",
                  "dynamodb:Scan",
                  "dynamodb:BatchWriteItem",
                  "dynamodb:PutItem",
                  "dynamodb:UpdateItem"
              ],
              "Resource": "arn:aws:dynamodb:*:*:table/SampleTable"
          }
      ]
  }
  ```
