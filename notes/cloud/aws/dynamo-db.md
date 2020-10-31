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

## Configure


## Dynamoose

[dynamoose](https://github.com/dynamoose/dynamoose) - Dynamoose is a modeling tool for Amazon's DynamoDB
[Configure](https://dynamoosejs.com/getting_started/Configure)

```js
dynamoose.aws.sdk.config.update({
    "accessKeyId": "AKID",
    "secretAccessKey": "SECRET",
    "region": "us-east-1"
});
```

## GUI


### Dynobase

[Dynobase](https://dynobase.dev/#pricing) - Professional DynamoDB GUI Client

### NoSQL Workbench

[NoSQL Workbench for DynamoDB - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)
