# Github Actions

* [Workflow syntax for GitHub Actions - GitHub Docs](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)

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

