# Azure Web App

## Storage Account

* [Create an Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)
* [Data Redundancy](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal)
* [Configure Azure Storage firewalls and virtual networks](https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security)
* [What is Azure Private Endpoint?](https://docs.microsoft.com/en-us/azure/private-link/private-endpoint-overview#private-link-resource)


* Database
  * Types
    * Table Storage
    * Cosmos DB
    * Cheap SQL
  * Data
    * Log Data
    * Triage Data
    * Training Data
    * Lookups
      * Questions
      * Missing Categories
* App
  * Full Stack
    * .NET Core MVC
    * [.NET Core Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-3.1&tabs=visual-studio)
    * [.NET Core Endpoints](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-3.1#endpoint)
  * Client App
    * Front End
      * Vue
      * Vanilla JS
    * Back End
      * Azure Functions
      * [API Endpoints](https://github.com/ardalis/ApiEndpoints)
* Authentication
  * Manage Users
  * Manage User Roles
  * Invite Users
  * Notification Email
  * MFA
  * Back End / Front End
* Events
  * Import Analytics Logs to Data Storage
* Reporting
  * PowerBI
  * Ad Hoc Query against DB
  * GUI
* Features
  * Triage
  * Train
  * Reports
  * Export
  * Records - Filter / Sort / Search



## Local Cert

[Developing locally with ASP.NET Core under HTTPS, SSL, and Self-Signed Certs](https://www.hanselman.com/blog/DevelopingLocallyWithASPNETCoreUnderHTTPSSSLAndSelfSignedCerts.aspx)

### Dev Certs

```bash
dotnet dev-certs https --help
dotnet dev-certs https --trust
```

## Publish to Azure

[Publish your ASP.NET app to Azure](https://tutorials.visualstudio.com/aspnet-azure/intro)

[App Service Plan Pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/)

* Free
  * F1 - $0/mo
* Basic
  * B1 - $12/mo
  * B2 - $24/mo
  * B3 - $48/mo
* Standard Service Plan
  * S1 - $69/mo
* Premium Service Plan
  * P1v2 - $73/mo
  * P2v2 - $147/mo
  * P3v3 - $294/mo

[Configuring Azure Services](https://devblogs.microsoft.com/aspnet/configuring-azure-services-and-emulators-using-visual-studio/)

[ARM Template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-syntax)

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "",
  "apiProfile": "",
  "parameters": {  },
  "variables": {  },
  "functions": [  ],
  "resources": [  ],
  "outputs": {  }
}
```

## WebJob

* Docs
  * [Run background tasks with WebJobs](https://docs.microsoft.com/en-us/azure/app-service/webjobs-create)
  * [Develop and deploy WebJobs using Visual Studio](https://docs.microsoft.com/en-us/azure/app-service/webjobs-dotnet-deploy-vs)
  * [Tutorial for event-driven background processing with the WebJobs SDK](https://docs.microsoft.com/en-us/azure/app-service/webjobs-sdk-get-started)
  * [How to use the WebJobs SDK](https://docs.microsoft.com/en-us/azure/app-service/webjobs-sdk-how-to)

* Supported File Types
  * `.cmd`, `.bat`, `.exe` (using Windows cmd)
  * `.ps1` (using PowerShell)
  * `.sh` (using Bash)
  * `.php` (using PHP)
  * `.py` (using Python)
  * `.js` (using Node.js)
  * `.jar` (using Java)

* Types
  * Continuous
  * Trigger
    * Manual
    * Schedule

* Scheduled
  * [NCRONTAB expressions](https://docs.microsoft.com/en-us/azure/app-service/webjobs-create#ncrontab-expressions)
  * [Timer trigger for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=csharp#ncrontab-expressions)
  * [Scheduling a triggered WebJob](https://docs.microsoft.com/en-us/azure/app-service/webjobs-dotnet-deploy-vs#scheduling-a-triggered-webjob)
  * [atifaziz/NCrontab](https://github.com/atifaziz/NCrontab) - Crontab for .NET

  ```json
  {
      "schedule": "0 */15 * * * *"
  }
  ```

  > The default time zone used to run CRON expressions is Coordinated Universal Time (UTC).
  > To have your CRON expression run based on another time zone, create an app setting for your function app named `WEBSITE_TIME_ZONE`

