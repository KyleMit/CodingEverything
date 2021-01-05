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
* [**EC2**](https://aws.amazon.com/ec2/) - Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud.
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
* [**CodePipeline**](https://aws.amazon.com/codepipeline/)
* [**AMI**](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) - Amazon Machine Images
* [**SSM**](https://aws.amazon.com/systems-manager/) - AWS (Simple) Systems Manager

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


#### Toolkit for VS Code

* [AWS Toolkit for Visual Studio Code](https://aws.amazon.com/visualstudiocode/)
* [Installing the AWS Toolkit for Visual Studio Code - AWS Toolkit for VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/setup-toolkit.html)
* [AWS Toolkit - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode)




## AWS CLI

[AWS Command Line Interface](https://aws.amazon.com/cli/)

> The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services.

### Getting Started

* [Installing, updating, and uninstalling the AWS CLI version 2 on Windows](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html)

### Docs

* ec2
  * [ec2 > describe-vpcs](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-vpcs.html)
  * [ec2 > describe-subnets](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/describe-subnets.html)
* efs
  * [efs > describe-access-points](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/efs/describe-access-points.html)

### Profiles

* [Named profiles - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

* Profile Credentials
  * Windows: `%USERPROFILE%\.aws\`
  * Linux/Mac: `~/.aws/credentials`

* [Is there a way to list available/configured AWS CLI profiles?](https://superuser.com/questions/1260311/is-there-a-way-to-list-available-configured-aws-cli-profiles)

  [Configure > List Profiles](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/configure/list-profiles.html)

  ```bash
  aws configure list-profiles
  ```

* [How to temporarily switch profiles for AWS CLI?](https://stackoverflow.com/q/49716583/1366033)

  ```bash
  export AWS_DEFAULT_PROFILE=user2
  ```

* [List current configuration data](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/configure/list.html)

  ```bash
  aws configure list
  ```

### Command Reference

* [validate-template](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/validate-template.html)

  ```bash
  aws cloudformation validate-template --template-body file://$TEMPLATE_PATH
  ``


## AWS Shell

An integrated shell for working with the AWS CLI.

* [awslabs/**aws-shell**](https://github.com/awslabs/aws-shell)

### Features

* **Fuzzy auto-completion** for
  * Commands (e.g. ec2, describe-instances, sqs, create-queue)
  * Options (e.g. --instance-ids, --queue-url)
  * Resource identifiers (e.g. Amazon EC2 instance IDs, Amazon SQS queue URLs, Amazon SNS topic names)
* **Dynamic in-line documentation** - Documentation for commands and options are displayed as you type
* **Execution of OS shell commands** - * Use common OS commands such as cat, ls, and cp and pipe inputs
* **Export executed commands to a text editor**

### Controlling Output

* [Controlling command output from the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output.html)
  * [How to filter the output with the `--query` option](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output.html#cli-usage-output-filter)
    * The `--query` parameter accepts strings that are compliant with the [JMESPath specification](https://jmespath.org/).


[JMESPath — JMESPath](https://jmespath.org/)

### Installation

```bash
pip install aws-shell
```

### Articles

* [Adding AWS Shell to Windows Terminal](https://thunderysteak.github.io/thunderysteak.github.io/aws-shell-2-winterm.html)


### Questions

* [Windows doc gens show ^M chars](https://github.com/awslabs/aws-shell/issues/42)
* ['Namespace' object has no attribute 'cli_binary_format'](https://github.com/awslabs/aws-shell/issues/238)

## Resource Manager

* [Tag Editor](https://us-east-2.console.aws.amazon.com/resource-groups/tag-editor/find-resources?region=us-east-2)

## Deploy .NET Core MVC to AWS

[Easiest Way to Deploy .NET Core MVC to AWS](https://www.youtube.com/watch?v=JlJ7PmNIOac)

* IAM
  * Create deploy agent (programmatic access)
  * Create Group (i.e. `deploy_agents`) and add `AWSElasticBeanstalkFullAccess` policy


## Machine Images

[Amazon Machine Images (AMI) - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html#amazon-linux)

### Amazon Linux 2

[Amazon Linux 2](https://aws.amazon.com/amazon-linux-2/)
[Amazon Linux 2 FAQs](https://aws.amazon.com/amazon-linux-2/faqs/)

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
