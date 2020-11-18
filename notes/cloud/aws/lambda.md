# Lambdas

## Docs

* [AWS Lambda function handler in Node.js - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
* [Interacting with Remote Lambda Functions](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/remote-lambda.html)
* [Installing the AWS Toolkit for Visual Studio Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html)
* [Obtaining AWS access keys](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/obtain-credentials.html)



## Lambda Layers

[AWS Lambda layers - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)

> * You can configure your Lambda function to pull in additional code and content in the form of layers.
> * A layer is a ZIP archive that contains libraries, a custom runtime, or other dependencies.
> * With layers, you can use libraries in your function without needing to include them in your deployment package.

* [Working with AWS Lambda and Lambda Layers in AWS SAM](https://aws.amazon.com/blogs/compute/working-with-aws-lambda-and-lambda-layers-in-aws-sam/)
* [Using Lambda layers to simplify your development process](https://aws.amazon.com/blogs/compute/using-lambda-layers-to-simplify-your-development-process/)

## Articles


* [Going Serverless: how to run your first AWS Lambda function in the cloud](https://www.freecodecamp.org/news/going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536/)


## Questions

* [Amazon API Gateway - HTTP vs REST](https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-api-gateway-offers-faster-cheaper-simpler-apis-using-http-apis-preview/)

    > HTTP APIs are optimized for building APIs that proxy to AWS Lambda functions or HTTP backends, making them ideal for serverless workloads.

* [How to increase the maximum size of the AWS lambda deployment package (RequestEntityTooLargeException)?](https://stackoverflow.com/q/54632009/1366033)

  * [AWS Lambda quotas - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
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
