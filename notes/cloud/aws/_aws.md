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

* [**ARN**](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) - Amazon Resource Names
* [**EC2**](https://aws.amazon.com/ec2/) - Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud.
* [**Storage Gateway**](https://aws.amazon.com/storagegateway) - On-premises access to virtually unlimited cloud storage
* [**Cloud9**](https://console.aws.amazon.com/cloud9/home/product) - A cloud IDE for writing, running, and debugging code
* [**AppSync**](https://aws.amazon.com/appsync/) - Managed service for GraphQL APIs
* [**Beanstalk**](https://aws.amazon.com/elasticbeanstalk/) - Service for deploying and scaling web applications and services
* [**VPC**](https://aws.amazon.com/vpc/) - Virtual Private Cloud
* [**Fargate**](https://aws.amazon.com/fargate/) - Serverless compute for containers
* [**SES**](https://aws.amazon.com/ses/) - Simple Email Services
* [**ECS**](https://aws.amazon.com/ecs/) - Elastic Container Service
* [**ACM**](https://aws.amazon.com/certificate-manager/) - AWS Certificate Manager
* [**VPC**](https://aws.amazon.com/vpc/) - Virtual Private Cloud
* [**STS**](https://wa.aws.amazon.com/wat.concept.sts.en.html) - Security Token Service

## ARN

[Amazon Resource Names (ARNs) - AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)

### Format

* `arn:partition:service:region:account-id:resource-id`
* `arn:partition:service:region:account-id:resource-type:resource-id`

* **Partition** - The partition in which the resource is located.
  * `aws` - default
  * `aws-cn` - china
  * `aws-us-gov` - GovCloud
* **Service** - The service namespace that identifies the AWS product
  * ex. `s3` - Amazon S3 Resources
* **Region**
  * ex. `us-east-1`
* **Account ID** - The ID of the AWS account that owns the resource
  * ex. `123456789012`
* **Resource ID** - The resource identifier
  * ex. IAM - `user/bob`
  * ex. EC2 - `instance/i-1234567890abcdef0`

### Toolkits

[AWS Toolkit for VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html)
[AWS Toolkit for Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)
[AWS Toolkit for Eclipse](https://docs.aws.amazon.com/toolkit-for-eclipse/v1/user-guide/welcome.html)


## CLI

* [Installing, updating, and uninstalling the AWS CLI version 2 on Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html)
* [Named profiles - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

* Profile Credentials
  * Windows: `%USERPROFILE%\.aws\`
  * Linux/Mac: `~/.aws/credentials`

### Command Reference

* [validate-template](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/validate-template.html)

  ```bash
  aws cloudformation validate-template --template-body file://$TEMPLATE_PATH
  ```

## Resource Manager

* [Tag Editor](https://us-east-2.console.aws.amazon.com/resource-groups/tag-editor/find-resources?region=us-east-2)

## Deploy .NET Core MVC to AWS

[Easiest Way to Deploy .NET Core MVC to AWS](https://www.youtube.com/watch?v=JlJ7PmNIOac)

* IAM
  * Create deploy agent (programmatic access)
  * Create Group (i.e. `deploy_agents`) and add `AWSElasticBeanstalkFullAccess` policy


## Organizations

[Consolidated billing process - AWS Billing and Cost Management](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-procedure.html)

## Roles

* [Granting a user permissions to switch roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_permissions-to-switch.html?icmpid=docs_iam_console)
* [Switching to a role (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-console.html)
* [How can I allow a Group to assume a Role?](https://stackoverflow.com/questions/34922920/how-can-i-allow-a-group-to-assume-a-role)

## Questions

* [Is there a way to list all resources in AWS?](https://stackoverflow.com/q/44391817/1366033)

* [AWS DynamoDB resource not found exception](https://stackoverflow.com/a/64577548/1366033)
  * Make sure you login via `aws configure`

* [Missing region in config](https://stackoverflow.com/a/39563972/1366033)
