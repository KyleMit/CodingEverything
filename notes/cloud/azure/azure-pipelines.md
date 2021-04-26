# Azure Pipelines

> Azure Pipelines automatically builds and tests code projects to make them available to others

[What is Azure Pipelines?](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops)

## Alternatives

* Github Actions

## Docs

* [Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
* [Release pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/?view=azure-devops)
* [Releases in Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/releases?view=azure-devops)
* [Customize your pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/customize-pipeline?view=azure-devops)
* [Troubleshoot pipeline runs](https://docs.microsoft.com/en-us/azure/devops/pipelines/troubleshooting/troubleshooting?view=azure-devops)

## Articles

* [How to Build an Azure Pipeline (Build/Release) from Scratch](https://adamtheautomator.com/azure-pipelines/)

## Example

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



### Build Agents

* [Microsoft-hosted agents for Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml)
  * [Windows2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
  * [Standard_D2_v2](https://docs.microsoft.com/en-us/azure/virtual-machines/dv2-dsv2-series#dsv2-series)
    * 7 GB RAM
    * 100 GB SSD
