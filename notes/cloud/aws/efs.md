# Elastic File Storage (EFS)

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
* Questions
  * [[aws-lambda] [aws-elasticfilesystem]](https://stackoverflow.com/questions/tagged/aws-lambda+aws-elasticfilesystem)
  * [Highest Voted 'aws-elasticfilesystem+or+amazon-efs+aws-lambda' Questions - Stack Overflow](https://stackoverflow.com/questions/tagged/aws-elasticfilesystem%2bor%2bamazon-efs%2baws-lambda?tab=Votes)

## Mounting

* [`mount`](https://man7.org/linux/man-pages/man8/mount.8.html)
* [`umount`](https://man7.org/linux/man-pages/man8/umount.8.html)

## Docs

* [Mounting EFS file systems - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html)
* [Installing the **amazon-efs-utils** Package on Amazon Linux](https://docs.aws.amazon.com/efs/latest/ug/installing-amazon-efs-utils.html)
* [Troubleshooting Mount Issues - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/troubleshooting-efs-mounting.html#automount-fails)

## EFS + Lambda Walkthrough

[Introduction to using EFS with AWS Lambda](https://www.youtube.com/watch?v=vHwNh9JtPwE)


```bash
# create stack (needs file resource - not path) (returns stack id)
aws cloudformation create-stack --stack-name create-efs --template-body file://./create-efs-cfn.yml
# show vpcs
aws ec2 describe-vpcs
aws ec2 describe-vpcs --query "Vpcs[?IsDefault==\`true\`].VpcId"
# get subnets
aws ec2 describe-subnets --filter "Name=vpc-id,Values=vpc-1f38a465"  --output text
# get subnet query
aws ec2 describe-subnets --filter "Name=vpc-id,Values=vpc-1f38a465" --query 'Subnets[*].{Id: SubnetId}' --output text
aws ec2 describe-subnets --query "Subnets[?VpcId=='vpc-a474b6d9'].SubnetId" --output text
# get access point
aws efs describe-access-points
aws efs describe-access-points --query "AccessPoints[*].AccessPointArn"
# get security group
aws ec2 describe-security-groups
aws ec2 describe-security-groups --query "SecurityGroups[?VpcId=='vpc-0994612eab90ba9c9'&&GroupName=='default'].{name: GroupName, id: GroupId}"
# change directory (to fn folder)
cd dir
# sam build
sam build
# sam deploy
sam deploy --guided
```

## Cloud Formation

### `AWS::EFS::AccessPoint`

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

### `AWS::Serverless::Function`

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


### EFS + VPC Settings in Cloud Formation

```yml
Parameters:
  EFSpath:
    Type: String
    Default: /mnt/efs
  SecurityGroupIds:
    Type: CommaDelimitedList
    Default: sg-fa7133bc
  SubnetIDs:
    Type: CommaDelimitedList
    Description: The list of SubnetIDs in your Virtual Private Cloud (VPC)
    Default: subnet-80c98eae,subnet-04878f4e,subnet-e19ce486,subnet-bfc9fbb0,subnet-0bc28757,subnet-96c847a8
  AccessPointARN:
    Type: String
    Description: Access point ARN

Resources:
  MyFunctionName:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: unzipFiles/
      Handler: app.handler
      Environment:
        Variables:
          EFS_PATH: !Ref EFSpath
      VpcConfig:
        SecurityGroupIds: !Ref SecurityGroupIds
        SubnetIds: !Ref SubnetIDs
      FileSystemConfigs:
      - Arn: !Ref AccessPointARN
        LocalMountPath: !Ref EFSpath
      Policies:
      - Statement:
        - Sid: AWSLambdaVPCAccessExecutionRole
          Effect: Allow
          Action:
            - logs:CreateLogGroup
            - logs:CreateLogStream
            - logs:PutLogEvents
            - ec2:CreateNetworkInterface
            - ec2:DescribeNetworkInterfaces
            - ec2:DeleteNetworkInterface
          Resource: "*"
        - Sid: AmazonElasticFileSystemClientFullAccess
          Effect: Allow
          Action:
            - elasticfilesystem:ClientMount
            - elasticfilesystem:ClientRootAccess
            - elasticfilesystem:ClientWrite
            - elasticfilesystem:DescribeMountTargets
          Resource: "*"
```

### Questions

* [mount efs unknown filesystem type 'efs'](https://stackoverflow.com/a/50725352/1366033)

  ```bash
  sudo yum install -y amazon-efs-utils
  sudo yum install -y nfs-utils
  ```


* EFS is Read Only

  * [Enable Read Write Access on EFS](https://aws.amazon.com/premiumsupport/knowledge-center/efs-enable-read-write-access/)
  * [Using the amazon-efs-utils Tools - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/using-amazon-efs-utils.html)

  > Failed to write to 'null'. EROFS: read-only file system
  > mv: cannot create regular file ‘efs/readme.md’: Read-only file system
