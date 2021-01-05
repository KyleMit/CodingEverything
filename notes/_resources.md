# Resources, Guides, and Troubleshooting

A stash for helpful articles, references, documentation looked up along the way

Pretty much most of any day is just spent Googling how to do things.  Here's a collection of resources that were used to build this site, both from original documentation and also everywhere I've stubbed my programmatic toe in looking for an answer.

Links and Learning

Guides, Problems, and Solutions

## Node APIs

* [`fs.ReadFile()`](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [`fs.WriteFile()`](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
* [`readline.createInterface(options)`](https://nodejs.org/api/readline.html#readline_readline_createinterface_options)
* [`readline.question()`](https://nodejs.org/api/readline.html#readline_rl_question_query_callback)
* [`readline.close()`](https://nodejs.org/api/readline.html#readline_rl_close)

## Google APIs

* [Google API Node Client](https://github.com/googleapis/google-api-nodejs-client)
* [Callbacks -> Promises -> Async/Await](https://github.com/googleapis/google-api-nodejs-client#first-example)
* [Request Body](https://github.com/googleapis/google-api-nodejs-client#specifying-request-body)

## Visual Studio Code

* [Debugging in VS Code](https://code.visualstudio.com/docs/editor/debugging)
* [Debug Node in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)

## Calendar API

* [Create Events](https://developers.google.com/calendar/create-events)
* [Calendar Auth](https://developers.google.com/calendar/auth)
* [Calendar Overview](https://developers.google.com/calendar/v3/reference/)
* [`CalendarList.List`](https://developers.google.com/calendar/v3/reference/calendarList/list)
* [Events Overview](https://developers.google.com/calendar/v3/reference/events)
* [`Events.List`](https://developers.google.com/calendar/v3/reference/events/list)
* [`Events.Insert`](https://developers.google.com/calendar/v3/reference/events/insert)
* [`Events.Delete`](https://developers.google.com/calendar/v3/reference/events/delete)

## Node

* [Update Package Version](https://stackoverflow.com/q/16073603/1366033)
* [Node Config Files](https://stackoverflow.com/a/14678694/1366033)
* [Unable to read from console in node js using VS code](https://stackoverflow.com/q/36094026/1366033)
* [Console Colors](https://stackoverflow.com/a/40560590/1366033)

## Puppeteer

* [Web Scraping w/ NodeJs & Puppeteer](https://www.youtube.com/watch?v=ARt3zDHSsd4)
* [Delay / Sleep / Wait](https://stackoverflow.com/a/46965281/1366033)
* [`Page.Evaluate`](https://pptr.dev/#?product=Puppeteer&version=v1.11.0&show=api-pageevaluatepagefunction-args)

## Promises Async

* [How do I convert an existing callback API to promises?](https://stackoverflow.com/q/22519784/1366033)
* [JS Callbacks to Promises](https://medium.com/@samthor/js-callbacks-to-promises-541adc46c07c)
* [How to make a Promise out of a Callback function in JavaScript](https://medium.freecodecamp.org/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981)
* [Easier Error Handling Using Async/Await](https://medium.com/@jesterxl/easier-error-handling-using-async-await-b9ab0cb938e)

### Moment

* [Format](https://momentjs.com/docs/#/displaying/format/)
* [Duration](https://stackoverflow.com/a/25150793/1366033)

### JavaScript

* [Leading Zeros to Leading Space](https://regexr.com/46de6)
* [Find and replace all chars in string](https://stackoverflow.com/q/1144783/1366033)


-----


## Azure Functions

* [Deploy to Azure using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started)
* [Microsoft Azure Developer: Create Serverless Functions by Mark Heath](https://app.pluralsight.com/library/courses/microsoft-azure-serverless-functions-create/table-of-contents)
* [CORS](https://stackoverflow.com/q/43767255/1366033)
* [Timing Trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer#trigger---c-example)
* [Twilio Binding](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-twilio#2x-c-example)
* [The current .NET SDK does not support targeting .NET Core 2.1. target .NET Core 2.0](https://stackoverflow.com/q/49171623/1366033)
* [No job functions found. Try making your job classes and methods public](https://stackoverflow.com/q/44643347/1366033)
* [No valid combination of account information found](https://stackoverflow.com/q/13913589/1366033)
* [Where do I get the AzureWebJobsDashboard connection string information?](https://stackoverflow.com/q/27580264/1366033)
* [Reading settings from a Azure Function](https://stackoverflow.com/q/43556311/1366033)
* [Chron Trigger Syntax](https://crontab.guru/#0_*_*_*_*)
* [Custom Domain not showing in Azure Function](https://stackoverflow.com/q/46799060/1366033)
* [Replace TraceWriter With ILogger in Azure Functions V2](https://stackoverflow.com/q/52449290/1366033)

## Azure Portal

* [Build a serverless web app in Azure](https://docs.microsoft.com/en-us/azure/functions/tutorial-static-website-serverless-api-with-database)
* [Custom Domain](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)
* [Add your custom domain name using the Azure Active Directory portal](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/add-custom-domain)
* [Configuring a custom domain name for an Azure cloud service](https://docs.microsoft.com/en-us/azure/cloud-services/cloud-services-custom-domain-name-portal)
* [Best way to host a Single Page Application (SPA) in Microsoft Azure](https://medium.com/medialesson/best-way-to-host-a-single-page-application-spa-in-microsoft-azure-3e70cbd075c3)

## Azure SignalR

* [Build Real-time Apps with Azure Functions and Azure SignalR Service](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-overview-azure-functions)
* [Azure Functions and SignalR Service using C#](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-csharp)

## Azure Storage

* [Storage Pricing](https://azure.microsoft.com/en-us/pricing/details/storage/blobs/)
* [Storage Account Overview](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)
* [Static Website Hosting w/ Storage v2](https://azure.microsoft.com/en-us/blog/azure-storage-static-web-hosting-public-preview/)
* [Static website hosting in Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)

## Azure CDN

* [Use Azure CDN to access blobs with custom domains over HTTPS](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-https-custom-domain-cdn)
* [Integrate an Azure storage account with Azure CDN](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-a-storage-account-with-cdn)
* [Create an Azure CDN](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)
* [Host your domain in Azure DNS](https://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns)
* [Configure HTTPS on an Azure CDN custom domain](https://docs.microsoft.com/en-us/azure/cdn/cdn-custom-ssl?tabs=option-1-default-enable-https-with-a-cdn-managed-certificate)
* [Azure CDN default document index.html](https://stackoverflow.com/questions/34413300/azure-cdn-default-document-index-html)
* [Control Azure CDN caching behavior with caching rules](https://docs.microsoft.com/en-us/azure/cdn/cdn-caching-rules)
* [Purge Cached Assets](https://docs.microsoft.com/en-us/azure/cdn/cdn-purge-endpoint)

## Function Proxies

* [Function Proxies](https://docs.microsoft.com/en-us/azure/azure-functions/functions-proxies)
* [Using Azure Functions v2 proxies to avoid CORS issues](https://markheath.net/post/azure-functions-v2-proxies)


## Twilio

* [How to Send Daily SMS Reminders Using C#, Azure Functions and Twilio](https://www.twilio.com/blog/2017/01/how-to-send-daily-sms-reminders-using-c-azure-functions-and-twilio.html)
* [Can I remove the text “Sent from the Twilio Sandbox Number” In twilio SMS](https://stackoverflow.com/q/27853675/1366033)

## .NET

* [The current .NET SDK does not support targeting .NET Core 2.1. target .NET Core 2.0](https://stackoverflow.com/q/49171623/1366033)
* [Get Time for specific timezone](https://stackoverflow.com/a/441145/1366033)
* [https://stackoverflow.com/q/50083611/1366033](How to copy files to output directory depending on build configurations)


## Table Storage

* [Table Storage](https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-dotnet#delete-a-table)
* [Table Storage Batch](https://docs.microsoft.com/en-us/azure/visual-studio/vs-storage-aspnet5-getting-started-tables#insert-a-batch-of-entities)
* [Table Storage Keys](https://blog.maartenballiauw.be/post/2012/10/08/what-partitionkey-and-rowkey-are-for-in-windows-azure-table-storage.html)
* [Post Data w/ Postman](https://stackoverflow.com/a/45213695/1366033)
* [Delete All Records](https://stackoverflow.com/q/26326413/1366033)


## Twitter API

* [Apps Dashboard](https://developer.twitter.com/en/apps)
* [Authentication](https://developer.twitter.com/en/docs/basics/authentication/oauth-1-0a)
* [`GET statuses/show/:id](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-show-id)
  * **Examples**:
    * https://api.twitter.com/1.1/statuses/show/210462857140252672.json
    * https://api.twitter.com/1.1/statuses/show.json?id=210462857140252672

### Twitter

* [Can I fetch the tweet from Twitter if I know the tweet's id?](https://stackoverflow.com/q/897107/1366033)
* [Search for tweets with t.co rewritten links](https://stackoverflow.com/q/7561016/1366033)
* [Twitter api text field value is truncated](https://stackoverflow.com/a/40454382/1366033)
* [Tweets with multiple photos](https://leancrew.com/all-this/2014/06/tweets-with-multiple-photos/)

### OAuth

* [How to call the API using OAuth 1.0?](https://stackoverflow.com/q/32328718/1366033)
* [request/**request**](https://github.com/request/request)
  * [Promises & Async/Await](https://github.com/request/request#promises--asyncawait)
  * [OAuth Signing](https://github.com/request/request#oauth-signing)
* *ALT*: [ciaranj/**node-oauth**](https://github.com/ciaranj/node-oauth)
  * [Intro to OAuth with Node.js: OAuth 1.0 (One-Legged)](https://webapplog.com/intro-to-oauth-with-node-js-oauth-1-0/)



-----


## Prior Art

* [imgurdl](https://github.com/nyanotech/imgurdl)
* [imgur-album-download](https://github.com/statico/imgur-album-downloader)
* [imgurgitate](https://github.com/hickford/imgurgitate)
* [imgur-api-album-downloader](https://github.com/VictorioBerra/imgur-album-downloader)
* [album-pull](https://github.com/queercat/Album-Pull)


## Node CLI Intro

* [How to build a CLI with Node.js | Twilio](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
* [Building command line tools with Node.js | Atlassian](https://blog.developer.atlassian.com/scripting-with-node/)
* [Building a simple command line tool with npm | npm](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm)
* [How to Build a Command Line (CLI) Tool in NodeJS](https://blog.bitsrc.io/how-to-build-a-command-line-cli-tool-in-nodejs-b8072b291f81)
* [Build a JavaScript Command Line Interface (CLI) with Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

## Regex

[Regex to find Imgur links](https://regexr.com/4tk87)

```js
/https?://(?:i.)?imgur\.com/([^\.]*)\.([\w]*)/g
```

### Test CLI locally

```bash
npm init proj
```

```bash
npm link
```

### Publish CLI on npm

```bash
npm publish
```




### Regex to find Imgur Links + Desc

* [Inline](https://regexr.com/4ve53)
* [Footnote](https://regexr.com/4ve59)

## Debugging

### Identify script as shell

#### Problem

If you get this error message:

> line 1: syntax error near unexpected token

#### Solution

Make sure you *start* your CLI file with following [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)):

```js
#!/usr/bin/env node
```


-----







