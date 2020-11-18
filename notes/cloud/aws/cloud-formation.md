# Cloud Formation

[CloudFormation](https://docs.aws.amazon.com/cloudformation/index.html)

* **IaC** - Infrastructure as Code

## Stacks

[Working with stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html)

> A stack is a collection of AWS resources that you can manage as a single unit

[Creating a stack on the AWS CloudFormation console](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html)

### Stack Templates

* [Working with AWS CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-guide.html)
* [Template reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html)
* Samples
  * [Sample solutions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/sample-templates-applications-us-east-1.html)
  * [Application frameworks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/sample-templates-appframeworks-us-east-1.html)
  * [Services](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/sample-templates-services-us-east-1.html)



[New – Import Existing Resources into a CloudFormation Stack | AWS News Blog](https://aws.amazon.com/blogs/aws/new-import-existing-resources-into-a-cloudformation-stack/)


## Docs

## Resource Type Reference

* [AWS::ElastiCache::CacheCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html)

### Intrinsic Functions

[Intrinsic functions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)

> AWS CloudFormation provides several built-in functions that help you manage your stacks. Use intrinsic functions in your templates to assign values to properties that are not available until runtime.


* [`Fn::GetAtt`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)
* [`Ref`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)



[amazon web services - AWS - Cannot create ElastiCache-CacheCluster - 'CacheSecurityGroup not found error' - Server Fault](https://serverfault.com/questions/815901/aws-cannot-create-elasticache-cachecluster-cachesecuritygroup-not-found-err)


## Questions

* Stack Updates Stuck
  * [Why is my AWS CloudFormation stack stuck in the state CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATE_ROLLBACK_IN_PROGRESS, or DELETE_IN_PROGRESS?](https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-stack-stuck-progress/)
  * [Canceling a stack update - AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn--stack-update-cancel.html)

* [AWS - Cannot create ElastiCache-CacheCluster - 'CacheSecurityGroup not found error'](https://serverfault.com/q/815901/176522)

  ```yml
  Resources:
    ElasticacheSecurityGroup:
      Type: AWS::ElastiCache::SecurityGroup
      Properties:
        Description: "Access from webservers only"
    ElasticacheCluster:
      Type: "AWS::ElastiCache::CacheCluster"
      DependsOn: ElasticacheSecurityGroup
      Properties:
        CacheSecurityGroupNames:
        - !Ref ElasticacheSecurityGroup
  ```


