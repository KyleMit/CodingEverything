# Gatsby

[Gatsby](https://www.gatsbyjs.com/)

## Docs

* [Gatsby.js Documentation](https://www.gatsbyjs.com/docs/)
* [Gatsby.js Tutorial](https://www.gatsbyjs.com/tutorial/)
* [Debugging](https://www.gatsbyjs.com/docs/debugging/)
* [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/)


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


## Questions

* [Generate source maps](https://github.com/gatsbyjs/gatsby/issues/3817)

    ```js
    // gatsby-node.js
    exports.onCreateWebpackConfig = ({ actions, stage }) => {
    if (stage === 'build-javascript') {
        actions.setWebpackConfig({
        devtool: true //true
        })
    }
    };
    ```



