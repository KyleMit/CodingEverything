# Amplify

## Getting Started


* [JavaScript Getting Started](https://docs.amplify.aws/start)
* [Android Getting Started](https://docs.amplify.aws/start/q/integration/android)
* [iOS Getting Started](https://docs.amplify.aws/start/q/integration/ios)


## Setup

```bash
npm install -g @aws-amplify/cli
```


## Amplify Framework

* Rich Libraries
  * JavaScript
    * React
    * Vue
    * Angular
    * Ionic
  * Mobile
    * iOS
    * Android
    * React Native

* Interaction
  * API
  * Authentication
  * Data
  * Analytics
  * Storage
  * Messaging
  * Chat and More

* Amplify CLI

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

## Talks

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


