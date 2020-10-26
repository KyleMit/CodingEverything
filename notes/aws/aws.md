# Amazon Web Services

[IAM Dashboard](https://console.aws.amazon.com/iam/home?region=us-east-1)


## Account ID

[Your AWS account ID and its alias](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html)

```bash
aws configure
aws sts get-caller-identity
```

## Docs

[AWS Documentation](https://docs.aws.amazon.com/index.html)



## Resource Overview

* [**EC2**](https://aws.amazon.com/ec2/) - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud.
* [**Storage Gateway**](https://aws.amazon.com/storagegateway) - On-premises access to virtually unlimited cloud storage
* [**Cloud9**](https://console.aws.amazon.com/cloud9/home/product) - A cloud IDE for writing, running, and debugging code
* [**AppSync**](https://aws.amazon.com/appsync/) - Managed service for GraphQL APIs
* [**Beanstalk**](https://aws.amazon.com/elasticbeanstalk/) - Service for deploying and scaling web applications and services

## Lambdas

* [AWS Lambda function handler in Node.js - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
* [Amazon API Gateway - HTTP vs REST](https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-api-gateway-offers-faster-cheaper-simpler-apis-using-http-apis-preview/)

    > HTTP APIs are optimized for building APIs that proxy to AWS Lambda functions or HTTP backends, making them ideal for serverless workloads.

* [Going Serverless: how to run your first AWS Lambda function in the cloud](https://www.freecodecamp.org/news/going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536/)
* [Interacting with Remote Lambda Functions](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/remote-lambda.html)
* [Installing the AWS Toolkit for Visual Studio Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html)
* [Obtaining AWS access keys](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/obtain-credentials.html)



### Toolkits

[AWS Toolkit for VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html)
[AWS Toolkit for Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)
[AWS Toolkit for Eclipse](https://docs.aws.amazon.com/toolkit-for-eclipse/v1/user-guide/welcome.html)


## CLI

* [Installing, updating, and uninstalling the AWS CLI version 2 on Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html)
* [Named profiles - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

## Resource Manager

* [Tag Editor](https://us-east-2.console.aws.amazon.com/resource-groups/tag-editor/find-resources?region=us-east-2)

## Stacks

[Working with stacks - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)

> A stack is a collection of AWS resources that you can manage as a single unit

## Cloud 9

### Environment Settings

* Environment Type
  * EC2 Instance
  * No-Ingress EC2 Instance
  * Remote Server
* Instance Type
  * t2.micro
  * t3.small
  * m5.large
* Platform
  * Amazon Linux
  * Amazon Linux 2
  * Ubuntu Server 18.04 LTS

[How-to paste text into the Cloud9 editor?]

## Deploy .NET Core MVC to AWS

[Easiest Way to Deploy .NET Core MVC to AWS](https://www.youtube.com/watch?v=JlJ7PmNIOac)

* IAM
  * Create deploy agent (programmatic access)
  * Create Group (i.e. `deploy_agents`) and add `AWSElasticBeanstalkFullAccess` policy


## Tooling

[AWS Toolkit for Visual Studio](https://aws.amazon.com/visualstudio/)


## Questions

[Is there a way to list all resources in AWS?](https://stackoverflow.com/q/44391817/1366033)

