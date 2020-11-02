# Gatsby

[Gatsby](https://www.gatsbyjs.com/)

## Docs

* [Gatsby.js Documentation](https://www.gatsbyjs.com/docs/)
* [Gatsby.js Tutorial](https://www.gatsbyjs.com/tutorial/)
* [Debugging](https://www.gatsbyjs.com/docs/debugging/)
* [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/)


### File APIS

* [API Files](https://www.gatsbyjs.com/docs/api-files/)
  * `gatsby-config.js` - Enables plugins, defines common site data, and contains other site configuration
  * `gatsby-browser.js` - Gives you control over Gatsby’s behavior in the browser
  * `gatsby-node.js` - Allows you to respond to events in the Gatsby build cycle
  * `gatsby-ssr.js` - Exposes Gatsby’s server-side rendering process

## CLI

### Install

```bash
npm install -g gatsby-cli
```

### Commands

```bash
gatsby develop # start the development server:
gatsby build   # compile your application and make it ready for deployment
gatsby serve   # serve the production build of your site for testing
```

## Starters

[Gatsby Starters](https://www.gatsbyjs.com/starters)

```bash
gatsby new <SITE_DIRECTORY_NAME> <URL_OF_STARTER_GITHUB_REPO>
```

* [gatsbyjs/**gatsby-starter-default**](https://github.com/gatsbyjs/gatsby-starter-default) - The default Gatsby starter
* [fabe/**gatsby-universal**](https://github.com/fabe/gatsby-universal) - 🔮 An opinionated Gatsby v2 starter for state-of-the-art marketing sites.



## Tutorial

* [Gatsby.js Tutorials](https://www.gatsbyjs.com/tutorial/)
  * Beginner
    0. [Set Up Your Development Environment](https://www.gatsbyjs.com/tutorial/part-zero/)
    1. [Get to Know Gatsby Building Blocks](https://www.gatsbyjs.com/tutorial/part-one/)
    2. [Introduction to Styling in Gatsby](https://www.gatsbyjs.com/tutorial/part-two/)
    3. [Creating Nested Layout Components](https://www.gatsbyjs.com/tutorial/part-three/)
  * Intermediate
    4. [Data in Gatsby](https://www.gatsbyjs.com/tutorial/part-four/)
    5. [Source Plugins](https://www.gatsbyjs.com/tutorial/part-five/)
    6. [Transformer plugins](https://www.gatsbyjs.com/tutorial/part-six/)
    7. [Programmatically create pages from data](https://www.gatsbyjs.com/tutorial/part-seven/)
    8. [Preparing a Site to Go Live](https://www.gatsbyjs.com/tutorial/part-eight/)




### Deployment

* [Deploying to Gatsby Cloud](https://www.gatsbyjs.com/docs/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site)
* [Deploying with Surge](https://surge.sh/help/getting-started-with-surge)







## Questions

* [Generate source maps](https://github.com/gatsbyjs/gatsby/issues/3817)

    ```js
    // gatsby-node.js
    exports.onCreateWebpackConfig = ({ actions, stage }) => {
      if (stage === 'build-javascript') {
        actions.setWebpackConfig({
          devtool: true;
        })
      }
    };
    ```

* [Dynamic route (`/product/id`) with static layout #13645](https://github.com/gatsbyjs/gatsby/issues/13645)

    ```js
    exports.onCreatePage = ({ page, actions }) => {
      if (page.path.match(/^\/analyze/)) {
        page.matchPath = '/analyze/*';
        actions.createPage(page);
      }
    };
    ```
