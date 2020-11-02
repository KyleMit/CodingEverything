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

## Forums

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


* [Is it possible to specify a custom default document?](https://community.netlify.com/t/23974?u=kylemit)
