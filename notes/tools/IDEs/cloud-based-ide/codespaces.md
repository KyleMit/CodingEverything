# Codespaces

https://github.com/features/codespaces

A codespace is a development environment that's hosted in the cloud

## Docs

[GitHub Codespaces overview](https://docs.github.com/en/codespaces/overview)

## Dev Container

* [devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
* [vscode-dev-containers/containers/typescript-node](https://github.com/microsoft/vscode-dev-containers/tree/v0.191.1/containers/typescript-node)


```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.191.1/containers/typescript-node
{
 "name": "Node.js & TypeScript",
 "build": {
  "dockerfile": "Dockerfile",
  "args": { "VARIANT": "16" }
 },
 "settings": {},
 "extensions": [
  "dbaeumer.vscode-eslint"
 ],
 "forwardPorts": [3000],
 "postCreateCommand": "npm install",
 "remoteUser": "node"
}
```

## Personalizing

[Personalizing Codespaces for your account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account)

* Setup Script
* [Dotfiles Repo](https://dotfiles.github.io/)
* [Setting Sync](https://code.visualstudio.com/docs/editor/settings-sync)

## Articles

[GitHub’s Engineering Team has moved to Codespaces](https://github.blog/2021-08-11-githubs-engineering-team-moved-codespaces/)
