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



## Lambda + EFS

* Blog
  * [Using Amazon EFS for AWS Lambda in your serverless applications](https://aws.amazon.com/blogs/compute/using-amazon-efs-for-aws-lambda-in-your-serverless-applications/)
  * [A Shared File System for Your Lambda Functions](https://aws.amazon.com/blogs/aws/new-a-shared-file-system-for-your-lambda-functions/)
* Docs
  * [Using Amazon EFS with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/services-efs.html)
  * [Configuring file system access for Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html)
* Articles
  * [Unlocking new serverless use cases with EFS and Lambda](https://lumigo.io/blog/unlocking-more-serverless-use-cases-with-efs-and-lambda/)
  * [Get Started with EFS File System Access for AWS Lambda](https://epsagon.com/development/get-started-with-efs-file-system-access-for-aws-lambda/)
* Utilities
  * [app-module-path](https://www.npmjs.com/package/app-module-path)

### EFS Docs

* [Mounting EFS file systems - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html)
* [Installing the **amazon-efs-utils** Package on Amazon Linux](https://docs.aws.amazon.com/efs/latest/ug/installing-amazon-efs-utils.html)
* [Troubleshooting Mount Issues - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-mounting.html#automount-fails)

### [Introduction to using EFS with AWS Lambda](https://www.youtube.com/watch?v=vHwNh9JtPwE)

```bash
# create stack (needs file resource - not path) (returns stack id)
aws cloudformation create-stack --stack-name create-efs --template-body file://./create-efs-cfn.yml
# show vpcs
aws ec2 describe-vpcs
aws ec2 describe-vpcs --query "Vpcs[?IsDefault==\`false\`].VpcId"
# get subnets
aws ec2 describe-subnets --filter "Name=vpc-id,Values=vpc-1f38a465"  --output text
# get subnet query
aws ec2 describe-subnets --filter "Name=vpc-id,Values=vpc-1f38a465" --query 'Subnets[*].{Id: SubnetId}' --output text
aws ec2 describe-subnets --query "Subnets[?VpcId=='vpc-0994612eab90ba9c9'].SubnetId" --output text
# get access point
aws efs describe-access-points
aws efs describe-access-points --query "AccessPoints[*].AccessPointArn"
## get security group
aws ec2 describe-security-groups
aws ec2 describe-security-groups --query "SecurityGroups[?VpcId=='vpc-0994612eab90ba9c9'&&GroupName=='default'].{name: GroupName, id: GroupId}"
# change directory (to fn folder)
cd dir
# sam build
sam build
# sam deploy
sam deploy --guided
```

### Cloud Formation

#### `AWS::EFS::AccessPoint`

[AWS::EFS::AccessPoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-accesspoint.html)

```yml
Resources:
  AccessPointResource:
    Type: 'AWS::EFS::AccessPoint'
    Properties:
      FileSystemId: !Ref FileSystemResource
      PosixUser:
        Uid: "1000"
        Gid: "1000"
      RootDirectory:
        CreationInfo:
          OwnerGid: "1000"
          OwnerUid: "1000"
          Permissions: "0777"
        Path: "/efs"
```

#### `AWS::Serverless::Function`

[AWS::Serverless::Function](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html)

```yml
Resources:
  MyLambdaFunction:
    Type: AWS::Serverless::Function
    Properties:
      FileSystemConfigs:
      - Arn: arn:aws:elasticfilesystem:us-east-1:xxxxxx:access-point/fsap-123abcdef12abcdef
        LocalMountPath: /mnt/efs
```

#### Questions

* [mount efs unknown filesystem type 'efs'](https://stackoverflow.com/a/50725352/1366033)

  ```bash
  sudo yum install -y amazon-efs-utils
  ```

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
