
# EC2

## Features

* Security Groups
* Load Balancer

## Security Group

[Amazon EC2 security groups for Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html?icmpid=docs_ec2_console#security-group-rules)



## Load Balancer


* **ELB** - Elastic Load Balancer


> Listeners belonging to Application Load Balancers check for connection requests using the protocol and port you configure

### Docs

* [Listeners for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html)
* [Create an HTTPS listener for your Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html)
* [Associate an ACM/SSL certificate with a load balancer](https://aws.amazon.com/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/)

### Amazon Machine Image

* [Amazon Linux - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-ami-basics.html)
  * [AMI Package Repository](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-ami-basics.html#package-repository)
    * Amazon Linux uses RPMs and yum


## Package Manager

* [Adding repositories on an Amazon Linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/add-repositories.html)
* [Finding software packages on an Amazon Linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/find-software.html)

```bash
yum repolist all
yum search "find"
```

### Listener

* ARN
* Protocol / Port
* Action(s)
  * Forward To
  * Redirect To

### Types

* **ALB** - Application Load Balancer
* **NLB** - Network Load Balancer
* **CLB** - Classic Load Balancer



## Network Interfaces
