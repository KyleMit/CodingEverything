# SAM - Serverless Application Model

* [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/)

## Acronyms

* **SAM** - Serverless Application Model


## Docs

* [aws/serverless-application-model](https://github.com/aws/serverless-application-model)

## SAM CLI

* [aws/aws-sam-cli](https://github.com/aws/aws-sam-cli)

* `init` - Init an AWS SAM application.
* `validate` - Validate an AWS SAM template.
* `build` - Build your Lambda function code
* `local` - Run your Serverless application locally for quick development &...
* `package` - Package an AWS SAM application.
* `deploy` - Deploy an AWS SAM application.
* `logs` - Fetch logs for a function
* `publish` - Publish a packaged AWS SAM template to the AWS Serverless

### SAM CLI - Build

* NodejsNpmBuilder
  * NpmPack
  * CopyNpmrc
  * CopySource
  * NpmInstall
  * CleanUpNpmrc

## SAM Templates

[aws-sam-cli-app-templates](https://github.com/aws/aws-sam-cli-app-templates)

# VS Code Extension

* Command Pallette
  * `AWS: Detect SAM CLI`
  * `AWS: Create new SAM Application`

## Invoking Locally

* [Invoking Functions Locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-invoke.html)

```bash
# Invoking function with event file
$ sam local invoke "Ratings" -e event.json

# Invoking function with event via stdin
$ echo '{"message": "Hey, are you there?" }' | sam local invoke --event - "Ratings"

# For more options
$ sam local invoke --help
```

* [Step-through debugging Node.js functions locally](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging-nodejs.html)


* Generate Sample Event

  ```bash
  sam local generate-event apigateway aws-proxy | pbcopy
  ```



## Questions

* [renderer.py:73: SyntaxWarning: "is" with a literal](https://github.com/aws/aws-sam-cli/issues/2381)

* [SAM CLI error: "Security Constraints Not Satisfied"](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html)


