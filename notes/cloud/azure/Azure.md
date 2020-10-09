# Azure

[Azure for .NET developers](https://docs.microsoft.com/en-us/dotnet/azure/)

## Azure Portal

[Manage Azure portal settings and preferences](https://docs.microsoft.com/en-us/azure/azure-portal/set-preferences)

![azure portal view](/assets/notes/azure/azure-portal-view.png)


## Azure DevOps or Github Actions

mono repo
CI/CD
npm folder -> publish
npm folder -> publish
faq folder -> build and deploy


programmatic publish button - not console based

npm audit


* [x] setup SSH
* [x] sync vs code
* [x] sync customize the web


* Static Site Deploy
* Azure DevOps
* Github Actions

* DevOps vs Github prez

* md diff

* Publish Event Trigger
* Github Commit Trigger

* Add Data Validation Rules to [ChatBot Logs Update Instructions](https://github.com/VermontDepartmentOfHealth/covid-bot/blob/master/ai-query/sheet-updates.md)


### Cost

#### Specs

* **Type**: Storage Account - blob, file, table, queue
* **Account Kind**: General Purpose v2
* **Performance** Standard
* **Redundancy**: Locally Redundant Storage
* **Access Tier** Hot

#### Costs

* $0.0184 per GB
* $0.05 per 10k write/list operations
* $0.004 per 10k read/other operations

## SDK to upload website content

* [Azure CLI](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-cli)
* [Azure PowerShell module](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-powershell)
* [AzCopy](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)
* [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)
* [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/)
* [Visual Studio Code extension](https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-static-website-node-01?tabs=bash)



## Azure VNet

* [Azure Private Link](https://azure.microsoft.com/en-us/services/private-link/#features)
* [Configure Azure Storage firewalls and virtual networks](https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security)

## Azure Tags

* **OU**: AHS
* **ORG**: VDH
* **APP**: CHATBOT
* **LEAD**: Josiah_Raiche
* **ENV**: Prod
* **Purpose**: COVID19

## Azure Boards + Github

* [Azure Boards & GitHub](https://docs.microsoft.com/en-us/azure/devops/boards/github/?view=azure-devops)
* [Connect Azure Boards to GitHub](https://docs.microsoft.com/en-us/azure/devops/boards/github/connect-to-github?view=azure-devops)
* [Install and configure the Azure Boards app for GitHub](https://docs.microsoft.com/en-us/azure/devops/boards/github/install-github-app?view=azure-devops)
* [Link GitHub commits, pull requests, and issues to work items](https://docs.microsoft.com/en-us/azure/devops/boards/github/link-to-from-github?view=azure-devops)




## Azure Pipelines

[Microsoft Azure DevOps Engineer: Creating an Automated Build Workflow](https://app.pluralsight.com/library/courses/microsoft-azure-creating-automated-build-workflow/table-of-contents)
[Build, test, and deploy JavaScript and Node.js apps](https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops&tabs=code)

```yml
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
* master

pool:
  vmImage: 'ubuntu-latest'

steps:
* task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

* script: |
    npm install
    npm run build
  displayName: 'npm install and build'

```

## Github Actions

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



## Azure Create Static Website

* [Static website hosting in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
* [Host a static website in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal)
* [Storage Blob Pricing](https://azure.microsoft.com/en-us/pricing/details/storage/blobs/)
* [Azure Blob Storage Pricing](https://azure.microsoft.com/en-us/pricing/details/storage/blobs/)
