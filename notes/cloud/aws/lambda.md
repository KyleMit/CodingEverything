# Lambdas

## Docs

* [Interacting with Remote Lambda Functions](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/remote-lambda.html)
* [Obtaining AWS access keys](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/obtain-credentials.html)
* [Best practices for working with AWS Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
* Permissions
  * [AWS Lambda permissions](https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html)
  * [Identity-based IAM policies for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-identity-based.html)
    * `AWSLambdaFullAccess` – Grants full access to AWS Lambda actions and other services used to develop and maintain Lambda resources.
    * `AWSLambdaReadOnlyAccess` – Grants read-only access to AWS Lambda resources.
    * `AWSLambdaRole` – Grants permissions to invoke Lambda functions.
* Node
  * [AWS Lambda function handler in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
  * [Building Lambda functions with Node.js](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)
* VS Code
  * [Installing the AWS Toolkit for Visual Studio Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html)


## Deployment

* [Claudia.js](https://claudiajs.com/)
* [Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/)
* [Serverless](https://www.serverless.com/)

## Handler

> * The method that the runtime runs when your function is invoked. i.e. `index.handler`
>   * The first value is the name of the **file or module**
>   * The second value is the name of the **method** that will be called

## Syntax

### Return

```js
exports.handler = async (event) => {
  const obj = { msg: "Hello" }
  const response = {
    statusCode: 200,
    body: JSON.stringify(obj),
  };

  return response;
};
```

### Context

```js
exports.handler = function (event, context) {
  const obj = { msg: "Hello" }
  const response = {
    statusCode: 200,
    body: JSON.stringify(obj),
  };

  context.succeed(response);
};
```

### Callback

```js
exports.handler = function(event, context, callback) {
  const obj = { msg: "Hello" }
  const response = {
    statusCode: 200,
    body: JSON.stringify(obj),
  };

  callback(null, response);
}
```

## Lambda + Layers

[AWS Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)

> * You can configure your Lambda function to pull in additional code and content in the form of layers.
> * A layer is a ZIP archive that contains libraries, a custom runtime, or other dependencies.
> * With layers, you can use libraries in your function without needing to include them in your deployment package.

* [Working with AWS Lambda and Lambda Layers in AWS SAM](https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/)
* [Using Lambda layers to simplify your development process](https://aws.amazon.com/blogs/compute/using-lambda-layers-to-simplify-your-development-process/)


## Articles

* [Going Serverless: how to run your first AWS Lambda function in the cloud](https://www.freecodecamp.org/news/going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536/)
* [The Ultimate AWS Lambda Tutorial for Node.js](https://www.tsmean.com/articles/aws/the-ultimate-aws-lambda-tutorial-for-nodejs/)



## Questions

* [Amazon API Gateway - HTTP vs REST](https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-api-gateway-offers-faster-cheaper-simpler-apis-using-http-apis-preview/)

    > HTTP APIs are optimized for building APIs that proxy to AWS Lambda functions or HTTP backends, making them ideal for serverless workloads.

* [How to increase the maximum size of the AWS lambda deployment package (RequestEntityTooLargeException)?](https://stackoverflow.com/q/54632009/1366033)

  * [AWS Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
    * **Deployment package size** - `250 MB` (unzipped, including layers)
    * **`/tmp` directory storage** - `512 MB`

  * Using EFS
    * [Using Amazon EFS for AWS Lambda in your serverless applications](https://aws.amazon.com/blogs/compute/using-amazon-efs-for-aws-lambda-in-your-serverless-applications/)
    * [New – A Shared File System for Your Lambda Functions](https://aws.amazon.com/blogs/aws/new-a-shared-file-system-for-your-lambda-functions/)


* [Getting json body in aws Lambda](https://stackoverflow.com/q/41648467/1366033)

    ```js
    if (event.body !== null && event.body !== undefined) {
        let body = JSON.parse(event.body)
        if (body.time)
            time = body.time;
    }
    ```

* [Creating a mount point if it does not exist](https://askubuntu.com/q/88523/349745)

  Need to create folder *first*

  ```bash
  mkdir /media/USB
  mount /dev/sdb1 /media/USB
  ```

* [Is it possible to rename an AWS Lambda function?](https://stackoverflow.com/q/36684520/1366033)

  > No


* [AWS Lambda function logging in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-logging.html)

  1. Open the [Log groups page](https://console.aws.amazon.com/cloudwatch/home?#logs:) on the CloudWatch console
  2. Choose the log group for your function (`/aws/lambda/your-function-name`).
  3. Choose a log stream


* [Best way to share code between lambda functions](https://github.com/aws-amplify/amplify-cli/issues/2295)

  * Copy the shared file as part of your build process
  * Use a monorepo with Lerna and consume the shared pieces as a package
  * Use lambda layers

