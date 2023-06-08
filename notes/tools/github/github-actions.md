---
templateEngineOverride : md
---

# Github Actions

> GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD

[GitHub Actions](https://github.com/features/actions)


## Alternatives

* Azure Pipelines

## Docs

* [GitHub Actions Documentation - GitHub Docs](https://docs.github.com/en/actions)
* [Workflow syntax for GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)
* [Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
* [About GitHub-hosted runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners)

## Repos

[actions/virtual-environments: GitHub Actions virtual environments](https://github.com/actions/virtual-environments)
[github/actions-cheat-sheet: A cheat sheet for GitHub Actions](https://github.com/github/actions-cheat-sheet)
[actions/checkout: Action for checking out a repo](https://github.com/actions/checkout)


## Secrets

[Encrypted secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

## Syntax Validation

* [New workflow editor for GitHub Actions - The GitHub Blog](https://github.blog/2019-10-01-new-workflow-editor-for-github-actions/)

### VSCode Extensions


* [GitHub Actions - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=cschleiden.vscode-github-actions)
* [YAML - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)



## Publish NPM Package

```yml
name: "publish-npm"

on:
    push:
      branches:
        - master

jobs:
  release:
    name: publish
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v2.1.1
      - name: node
        uses: actions/setup-node@v1.4.2
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org
      - name: publish
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
```


## Example

[Building Custom GitHub Actions](https://app.pluralsight.com/library/courses/building-custom-github-actions/table-of-contents)
[Using Node.js with GitHub Actions](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions)

```yml
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x]

    steps:
    * uses: actions/checkout@v2
    * name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    * run: npm ci
    * run: npm run build --if-present
    * run: npm test

```


## Questions



* [How do I cache steps in GitHub actions?](https://stackoverflow.com/q/55110729/1366033)
  * [Caching dependencies to speed up workflows](https://docs.github.com/en/free-pro-team@latest/actions/guides/caching-dependencies-to-speed-up-workflows)


* [Clear cache in GitHub Actions](https://stackoverflow.com/q/63521430/1366033)

  * [How to clear cache in GitHub Actions?](https://github.community/t/how-to-clear-cache-in-github-actions/129038/4)
  * [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy)
