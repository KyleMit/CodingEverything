# Netlify


## Alternatives

[Surge](https://surge.sh/)


## Docs

* [Branch Deploys](https://docs.netlify.com/site-deploys/overview/#branch-deploy-controls)
* [Branch Subdomains](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#branch-subdomains)

## Edge Network

* [Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/)

* Use Cases
  * Simplify A/B Testing
  * Personalized Ads
  * Customize Authentication
  * Aggregate APIs
  * Localize Content
  * Easily Push Site-Wide Changes (without re-build)

## Functions

* [functions/README.md at main · netlify/functions](https://github.com/netlify/functions/blob/main/README.md)

* Examples
  * [ada-microservices/createDogos.ts at main · pa-suarezm/ada-microservices](https://github.com/pa-suarezm/ada-microservices/blob/main/functions/dogos/createDogos.ts)
  * [egghead-serverless-typescript/hello-world.ts at main · jlengstorf/egghead-serverless-typescript](https://github.com/jlengstorf/egghead-serverless-typescript/blob/main/netlify/functions/hello-world.ts)

* [Announcing native TypeScript support for Netlify Functions](https://www.netlify.com/blog/2021/04/19/announcing-native-typescript-support-for-netlify-functions/)

```bash
npm install @netlify/functions
```

```ts
import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}

export { handler }
```

## Questions


* [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)

* [Netlify dev indicates 'no "command" specified'](https://community.netlify.com/t/22480?u=kylemit)

  * [netlify > cli > commands > dev](https://github.com/netlify/cli/blob/master/docs/commands/dev.md)
  * [netlify > cli > netlify-dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)
  * [netlify > detectors](https://github.com/netlify/cli/tree/master/src/detectors)

  ```ini
  [dev]
    framework = "#custom"
    command = "npm run build && cd _site && npx live-server"
    publish = "_site"
    targetPort = 3000
  ```


* [Is it possible to specify a custom default document?](https://community.netlify.com/t/23974)

* [Does Netlify support websocket programming?](https://community.netlify.com/t/4213)

* [Deploying Vue CLI to Netlify](https://cli.vuejs.org/guide/deployment.html#netlify)
* [Index Redirects](https://www.netlify.com/docs/redirects/#rewrites-and-proxying)

* [No ‘Access-Control-Allow-Origin’ header](https://answers.netlify.com/t/no-access-control-allow-origin-header/14631)

  Disable Asset Optimization
