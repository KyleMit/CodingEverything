# SAM - Serverless Application Model

* [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/)

## Acronyms

* **SAM** - Serverless Application Model

## Anatomy

* [Globals section of the AWS SAM template](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy-globals.html)
  * [globals.rst at master](https://github.com/aws/serverless-application-model/blob/master/docs/globals.rst)
* [AWS SAM template anatomy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html)
  * [generated_resources.rst at master](https://github.com/aws/serverless-application-model/blob/master/docs/internals/generated_resources.rst#api)

## Docs

* [aws/serverless-application-model](https://github.com/aws/serverless-application-model)

## SAM CLI

* [aws/aws-sam-cli](https://github.com/aws/aws-sam-cli)

* `init` - Init an AWS SAM application.
* `local` - Run your Serverless application locally for quick development &...
* `package` - Package an AWS SAM application.
* `publish` - Publish a packaged AWS SAM template to the AWS Serverless
* `build` - Build your Lambda function code
* `deploy` - Deploy an AWS SAM application.
* `logs` - Fetch logs for a function
* `validate` - Validate an AWS SAM template.

### SAM Init


```bash
# guided setup
sam init
# params for hello world
sam init --runtime nodejs12.x --application-template aws-sam-hello-nodejs --name my-web-app
```


### SAM Build

* NodejsNpmBuilder
  * NpmPack
  * CopyNpmrc
  * CopySource
  * NpmInstall
  * CleanUpNpmrc

## Cloud Formation


* [Format version](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/format-version-structure.html)
* [Transform](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

```yml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
```

## Interfaces

```js
exports.lambdaHandler = async (event, context) => {
    return ...
};
```

* `context` - [AWS Lambda context object in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html)
* `event` - [Set up Lambda proxy integrations in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format)
* `return` - [Set up Lambda proxy integrations in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html)

### API Gateway - Input Format (`event`)

```json
{
    "resource": "Resource path",
    "path": "Path parameter",
    "httpMethod": "Incoming request's method name",
    "headers": {String containing incoming request headers},
    "multiValueHeaders": {List of strings containing incoming request headers},
    "queryStringParameters": {query string parameters },
    "multiValueQueryStringParameters": {List of query string parameters},
    "pathParameters":  {path parameters},
    "stageVariables": {Applicable stage variables},
    "requestContext": {Request context, including authorizer-returned key-value pairs},
    "body": "A JSON string of the request payload.",
    "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
}
```


## Resources

* [`AWS::Serverless::Function`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html)
* [`AWS::Serverless::Api`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-api.html)
* [`AWS::Serverless::Application`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-application.html)
* [`AWS::Serverless::HttpApi`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-httpapi.html)
* [`AWS::Serverless::LayerVersion`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-layerversion.html)
* [`AWS::Serverless::SimpleTable`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-simpletable.html)
* [`AWS::Serverless::StateMachine`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-statemachine.html)

### AWS Lambda function `(AWS::Serverless::Function`)

* Use this resource type to declare a Lambda function


### Amazon API Gateway API (`AWS::Serverless::Api`)

Two ways to declare an API

1. **Implicitly** - by adding API events to your `::Function`

   ```yml
   Resources:
     GetFunction:
       Type: AWS::Serverless::Function
       Properties:
         Handler: index.get
         Runtime: nodejs4.3
         Events:
           GetResource:
             Type: Api
             Properties:
               Path: /resource/{resourceId}
               Method: get
   ```


2. **Explicitly** - if you need more control by configuring your own resource

   ```yaml
   MyAPI:
     Type: AWS::Serverless::Api
     Properties:
         StageName: prod
         DefinitionUri: swaggerFile.yml
   ```


## Deploying Lambda w/o SAM

1. Zip the index.js file.
2. Upload it to an S3 bucket.
3. Add a CodeUri property, specifying the location of the zip file in the bucket for each function in app_spec.yml.
4. Call the CloudFormation CreateChangeSet operation with app_spec.yml.
5. Call the CloudFormation ExecuteChangeSet operation with the name of the changeset you created in step 4.

### Amazon DynamoDB table (`AWS::Serverless::SimpleTable`)

* This resource creates a DynamoDB table with a single attribute primary key
* If you need more advanced functionality, you should declare the `AWS::DynamoDB::Table` instead

```yml
MyTable:
   Type: AWS::Serverless::SimpleTable
   Properties:
      PrimaryKey:
         Name: id
         Type: String
      ProvisionedThroughput:
         ReadCapacityUnits: 5
         WriteCapacityUnits: 5
```

## SAM Project Templates

[aws-sam-cli-app-templates](https://github.com/aws/aws-sam-cli-app-templates)

# VS Code Extension

* Command Pallette
  * `AWS: Detect SAM CLI`
  * `AWS: Create new SAM Application`

## Invoking Locally

* [Invoking Functions Locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-invoke.html)

```bash
# Invoking function with event file
$ sam local invoke "Ratings" -e event.json

# Invoking function with event via stdin
$ echo '{"message": "Hey, are you there?" }' | sam local invoke --event - "Ratings"

# For more options
$ sam local invoke --help
```

* [Step-through debugging Node.js functions locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging-nodejs.html)


* Generate Sample Event

  ```bash
  sam local generate-event apigateway aws-proxy | pbcopy
  ```

## Articles


* [Introducing Simplified Serverless Application Deployment and Management](https://aws.amazon.com/blogs/compute/introducing-simplified-serverless-application-deplyoment-and-management/)


## Questions

* [renderer.py:73: SyntaxWarning: "is" with a literal](https://github.com/aws/aws-sam-cli/issues/2381)

* [<lambda function> may not have authorization defined](https://stackoverflow.com/q/62669889/1366033)

  As Designed Per:

  [SAM CLI error: "Security Constraints Not Satisfied"](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html#troubleshooting-security-constraints)
  [When using guided deploy and accepting the default options I receive a Security Constraints Not Satisfied! error](https://github.com/aws/aws-sam-cli/issues/1990#issuecomment-630188412)

* [Whats the difference between AWS sam build and sam package when using SAM?](https://stackoverflow.com/q/63061175/1366033)
