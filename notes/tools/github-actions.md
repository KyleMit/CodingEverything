# Github Actions


## Docs

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

## Questions



* [How do I cache steps in GitHub actions?](https://stackoverflow.com/q/55110729/1366033)
  * [Caching dependencies to speed up workflows](https://docs.github.com/en/free-pro-team@latest/actions/guides/caching-dependencies-to-speed-up-workflows)


* [Clear cache in GitHub Actions](https://stackoverflow.com/q/63521430/1366033)

  * [How to clear cache in GitHub Actions?](https://github.community/t/how-to-clear-cache-in-github-actions/129038/4)
  * [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/guides/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy)
