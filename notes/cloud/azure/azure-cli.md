# Azure CLI

[Azure Command-Line Interface (CLI) documentation](https://docs.microsoft.com/en-us/cli/azure/)

> The Azure command-line interface (Azure CLI) is a set of commands used to create and manage Azure resources.
> The Azure CLI is available across Azure services and is designed to get you working quickly with Azure, with an emphasis on automation.

## Installation

[Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

```bash
winget install Microsoft.AzureCLI
```

## Getting Started


```bash
az login
```

## Commands

```bash
# list all extensions
az extension list

# query selections using JMESPath
az extension list  --query '[?name == ''azure-devops''].name' -o tsv

# install extension
az extension add --name 'azure-devops'
```

