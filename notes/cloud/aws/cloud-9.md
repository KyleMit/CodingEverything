
# Cloud 9

## Docs

* [Tutorial - Hello AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial.html?icmpid=docs_ac9_ide#tutorial-tour-ide)
* [Working with AWS Lambda functions in the AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/lambda-functions.html)
* [Working with Shared Environments in AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/share-environment.html)
* [VPC settings for AWS Cloud9 Development Environments - AWS Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/vpc-settings.html)
* [EC2 On-Demand Instance Pricing](https://aws.amazon.com/ec2/pricing/on-demand/)



## Environment Settings

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

## Code Commit

[Integrate AWS Cloud9 with AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ide-c9.html)

## Questions


* [How-to paste text into the Cloud9 editor?](https://stackoverflow.com/q/28257629/1366033)

* [Amazon AWS Cloud9 sudo apt-get command not found](https://stackoverflow.com/q/50920074/1366033)

  > The old c9.io was based on Ubuntu, but AWS cloud9 is based on Amazon Linux so you should use yum to update now.

* How to turn off cloud 9 instance

  * Will automatically turn off after 30 minutes when you exit
  * Spin down EC2 instance in AWS Console or C9 console by typing `sudo poweroff`


* [AWS Cloud9 - Cannot open environment](https://stackoverflow.com/a/52111070/1366033)

  **Error Messages**:
  > Unable to access your environment The environment creation failed with the error: Cloud9 could not connect to the EC2 instance. Please check your VPC configuration and network settings.
  > This is taking longer than expected. The delay may be caused by high CPU usage in your environment, or your T2 or T3 instance is running out of burstable CPU capacity credits, or there are VPC configuration issues

  Use larger instance like `t5.medium`
