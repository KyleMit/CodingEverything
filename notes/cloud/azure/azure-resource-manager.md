# Azure Resource Manager


## Acronyms

* **ARM** - Azure Resource Manager
* **IaC** - Infrastructure as Code

## Manage Resources

* [Azure portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)
* [Azure CLI](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli)
* [Azure PowerShell](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-powershell)

## Docs

* [Azure Resource Manager documentation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/)

## Concepts

* [Azure Resource Manager overview](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview)

## Arm Templates

* [Templates overview](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
  * [Template syntax and expressions](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-expressions)

* Scopes
  * resource group
  * subscription
  * management group
  * tenant

### Template Functions

[Template functions](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions)


* **Array functions**
  * array, concat, contains, createArray, empty, first, intersection, last, length, min, max, range, skip, take, union

* **Comparison functions**
  * coalesce, equals, less, lessOrEquals, greater, greaterOrEquals

* **Date functions**
  * dateTimeAdd, utcNow

* **Deployment value functions**
  * deployment, environment, parameters, variables

* **Logical functions**
  * and, bool, false, if, not, or, true

* **Numeric functions**
  * add, copyIndex, div, float, int, min, max, mod, mul, sub

* **Object functions**
  * contains, createObject, empty, intersection, json, length, null, union

* **Resource functions**
  * extensionResourceId, listAccountSas, listKeys, listSecrets, list*, pickZones, reference, subscriptionResourceId, tenantResourceId
  * **resourceGroup** - can only be used in deployments to a resource group.
  * **resourceId** - can be used at any scope, but the valid parameters change depending on the scope.
  * **subscription** - can only be used in deployments to a resource group or subscription.

* **String functions**
  * base64, base64ToJson, base64ToString, concat, contains, dataUri, dataUriToString, empty, endsWith, first, format, guid, indexOf, last, lastIndexOf, length, newGuid, padLeft, replace, skip, split, startsWith, string, substring, take, toLower, toUpper, trim, uniqueString, uri, uriComponent, uriComponentToString



## Biceps

* [Bicep documentation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/)
* [Bicep language for deploying Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
* [Discover Bicep on Microsoft Learn](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/learn-bicep)
* [Use Bicep to deploy resources to resource groups](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-to-resource-group?tabs=azure-cli)

### Bicep Tooling

* [Set up Bicep development and deployment environments](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/install)
* [Create Bicep files - Visual Studio Code](https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/quickstart-create-bicep-use-visual-studio-code?tabs=CLI)
* [Bicep - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-bicep)

## Powershell

## Tooling

* VS Code
  * [Azure Resource Manager (ARM) Tools](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools)


## Blueprints

[Overview of Azure Blueprints](https://docs.microsoft.com/en-us/azure/governance/blueprints/overview)

## CI/CD

* [CI/CD with Azure Pipelines and templates](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/add-template-to-azure-pipelines)
* [Continuous integration with Azure Pipelines](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-tutorial-pipeline)

## IaC

[What is Infrastructure as Code? - Azure DevOps | Microsoft Docs](https://docs.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code)
[Infrastructure as code | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/infrastructure-as-code)
[Repeatable Infrastructure - Azure Architecture Center | Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/framework/devops/automation-infrastructure)

## Third Party

* [Terraform](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
