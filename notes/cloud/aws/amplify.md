# Amplify

## Getting Started

* [JavaScript Getting Started](https://docs.amplify.aws/start)
* [Android Getting Started](https://docs.amplify.aws/start/q/integration/android)
* [iOS Getting Started](https://docs.amplify.aws/start/q/integration/ios)

## Alternatives

* Netlify
* Vercel


## Lambda Alternatives

* AWS Amplify
* Serverless Framework
* Terraform
* AWS SAM
* AWS CloudFormation

## People

* [Kurt Kemple (@theworstdev)](https://twitter.com/theworstdev)
* [Nader Dabit (@dabit3)](https://twitter.com/dabit3)


## Amplify Framework

* Integrations
  * JavaScript
    * [React](https://docs.amplify.aws/start/q/integration/react)
    * Vue
    * Angular
    * Ionic
    * [Next](https://docs.amplify.aws/start/q/integration/next)
    * Vanilla
  * Mobile
    * iOS
    * Android
    * React Native
    * Flutter

* Interaction
  * API (Rest)
  * API (GQL)
  * Analytics
  * Authentication
  * Data
  * Serverless Functions
  * Analytics
  * Storage
  * Messaging
  * Interactions (chatbots)

* Features
  * CLI
  * Client Libraries
  * Console - Continuous Deployment & Hosting
  * Prebuilt UI Components
  * Toolchain
  * JS Framework Support

## Amplify CLI

[Get started - Installation - Amplify Docs](https://docs.amplify.aws/cli/start/install#install-the-amplify-cli)

```bash
npm install -g @aws-amplify/cli
```

### Features

* Create, update & delete cloud services
* Manage multiple environments
* GraphQL Transform
* GraphQL & Lambda Codegen
* Mocking

### Commands

```bash
amplify configure      # will configure amplify project
amplify init           # will spin up an amplify project
amplify status         # will show what you've already added and if it's locally configured or deployed
amplify add <category> # will add features like user login or backend api
amplify console        # will open the amplify console and view your project status
amplify push           # will build all your local backend resources and provision in the cloud
amplify publish        # will build your local backend (and frontend if you have hosting) resources and provision in the cloud
```


## AWS Amplify Console

* [Welcome to the AWS Amplify Console](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)

1. Connect your repository
2. Configure build settings
3. Deploy Environment


## Client

* Connect to & interact with cloud services from web & mobile applications
* Preconfigured components for popular front-end libraries

```bash
npm install aws-amplify
```

```js
import {
  Auth, API, Storage, Analytics, XR
} from "aws-amplify"

API.get('api-name', 'path') // PUT,POST,DELETE

Storage.get('key', file)
Storage.get('key')
```

## Admin UI


* [Admin UI Basics - Introduction](https://docs.amplify.aws/console/adminui/intro)
* [Admin UI Basics - Getting started](https://docs.amplify.aws/console/adminui/start)


### Next Integration

* [Next](https://docs.amplify.aws/start/q/integration/next)
* [API with Incremental Static Site Generation (SSG)](https://docs.amplify.aws/start/getting-started/data-model/q/integration/next#api-with-incremental-static-site-generation-ssg)

```bash
npx create-next-app next-amplified
```

## Redirects

[Using redirects - AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html)

Example:

```json
[
  {
    "source": "/<*>",
    "target": "/index.html",
    "status": "404-200",
    "condition": null
  }
]
```

[GatsbyJs client only paths goes to 404 page when the url is directly accessed in browser in “production”](https://stackoverflow.com/q/52051090/1366033)

## Mocking & Testing

[Advanced workflows - Mocking and testing - Amplify Docs](https://docs.amplify.aws/cli/usage/mock)

* Creates local http server
* Creates local SQL Lite tables (API, DynamoDB)
* Creates local folder for S3 storage (images, files, etc)
* Updates `aws-exports.js` file with local references to endpoints

```bash
amplify mock     # all
amplify mock api # specific category
```

## Talks

* [Installing & Configuring the AWS Amplify CLI](https://www.youtube.com/watch?v=fWbM5DLh25U)
* [Serverless Functions in Depth with AWS Amplify](https://www.youtube.com/watch?v=y4Obz26GkCk)
* [Mocking and Testing Serverless APIs with AWS Amplify](https://www.youtube.com/watch?v=OxrHplxZ8BA)

## Articles

* [AWS Amplify-CLI Headless & CI/CD](https://medium.com/@rygo.107/aws-amplify-cli-headless-ci-cd-81385e91d334)

### Create Modern Serverless Web Applications in Minutes using the AWS Amplify Framework

* [Create Modern Serverless Web Applications in Minutes using the AWS Amplify Framework](https://www.youtube.com/watch?v=SnqABG8e9Zk) by David Maccarone
  * [Slides](https://www.slideshare.net/AmazonWebServices/create-modern-serverless-web-applications-in-minutes-using-the-aws-amplify-framework)
  * [repo](https://github.com/awsmaccad/voterocket-vue)

```bash
npm install -g @vue/cli
vue create voterocket
npm install -g @aws-amplify/cli
cd voterocket
amplify init
amplify add api
```

Edit the schema template

```gql
type Candidate @model {
  id: ID!
  name: String!
  description: String
  votes: Int!
}
```

```bash
amplify push
```

* `@model` -> model directive -> this entity should be persisted to a dynamo DB
* Amplify Builds Cloud Formation Stack
* AppSync
  * Schema - Automatically generates graphQL schema, mutations, crud operations, types
  * Query
    * Query
    * Mutation
    * Subscription
  * Data Sources
    * Dynamo DB
      * Items

![amplify queries](/assets/notes/amplify/amplify-queries.png)

```gql
mutation MyMutation {
  createCandidate(input: {name: "Lambda", votes: 0}) {
    id
    name
  }
}
```

```json
{
  "data": {
    "createCandidate": {
      "id": "55a84155-182e-4baa-a9cc-1cf034be71b2",
      "name": "Lambda"
    }
  }
}
```

* Dynamo DB Table
* Resolver - Glue for action
* Query.getCandidate
  * **DataSource**: CandidateTable
  * **Resolver**: MappingTemplate - Apache **VTL** - Velocity Templating Language
    * Request

      ```gql
      {
        "version": "2018-05-29",
        "operation": "GetItem",
        "key": #if( $modelObjectKey ) $util.toJson($modelObjectKey) #else {
        "id": $util.dynamodb.toDynamoDBJson($ctx.args.id)
      } #end
      }
      ```

    * Response

      ```gql
      #if( $ctx.error )
      $util.error($ctx.error.message, $ctx.error.type)
      #else
      $util.toJson($ctx.result)
      #end
      ```

* Custom Methods - cast vote & subscribe

`./amplify/backend/api/voterocket/schema.graphql`

```gql
input CastVoteInput {
  id: ID!
}

type Mutation {
  castVote(input: CastVoteInput!): Candidate
}

type Subscription {
  onCastVote: Candidate
    @aws_subscribe(mutations: ["castVote"])
}
```

`./amplify/backend/api/voterocket/resolvers/Mutation.castVote.req.vtl`
`./amplify/backend/api/voterocket/resolvers/Mutation.castVote.res.vtl`
`./amplify/backend/api/voterocket/stacks/CustomResources.json`


```json

{
  "version": "2017-02-28",
  "operation": "UpdateItem", // Do Dynamo DB Update
  "key": {
    "id": { "S": "${context.arguments.input.id}"} // lookup candidate based on ID
  },
  "update": {
    "expression": "SET #votesField = #votesField + :i", // run update expression to automatically increase votes by 1
    "expressionNames" : {
      "#votesField": "votes"
    },
    "expressionValues": {
      ":i": {"N": 1}
    }
  }
}
```

#### Components

* Front-end
* API
* Database
* Business Logic
* Real-time UI


## Questions

* Use YAML with CloudFormation Templates

  * [#1904 - CFN template in yaml or json format](https://github.com/aws-amplify/amplify-cli/issues/1904)
  * [#2915 - Feature request: Use YAML for all CloudFormation files](https://github.com/aws-amplify/amplify-cli/issues/2915)

* [#1158 - How to debug amplify function using visual studio code during invocation?](https://github.com/aws-amplify/amplify-cli/issues/1158)

* [Missing Authentication Token while accessing API Gateway?](https://stackoverflow.com/q/39655048/1366033)

  Don't use stage root url - make sure you have the resource in the url
